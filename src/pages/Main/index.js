/* eslint-disable no-return-assign */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableHighlight, Alert, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import queryString from 'query-string';
import storageConfig from '../../config/storage';

import { Container, TitleWrapper } from './styles';

import api from '../../services/api';

async function readItemStorage(key) {
  return AsyncStorage.getItem(key, (_error, value) => {
    return value;
  });
}

function handleInputPersist(key) {
  const [value, setValue] = useState('');

  function readItem() {
      readItemStorage(key).then(itemValue => setValue(itemValue));
  }

  useEffect(readItem, []);

  function handleChangeText(input) {
    AsyncStorage.setItem(key, input);
    setValue(input);
  }

  return {
    value,
    onChangeText: handleChangeText,
  };
}

async function handleSendToClockIn() {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  const requestBody = {
    account: '',
    password: '',
    identity: '',
    origin: '',
    key : null,
  };

  await readItemStorage(storageConfig.account).then(itemValue => requestBody.account = itemValue);
  await readItemStorage(storageConfig.password).then(itemValue => requestBody.password = itemValue);
  await readItemStorage(storageConfig.identity).then(itemValue => requestBody.identity = itemValue);
  await readItemStorage(storageConfig.origin).then(itemValue => requestBody.origin = itemValue);

  console.log('JSON POST: ' + JSON.stringify(requestBody));
  try {
    const response = await api.post(
      '/batidaonline/verifyIdentification',
      queryString.stringify(requestBody),
      config
    );

    Alert.alert('Success', JSON.stringify(response.data));
  } catch (error) {
    if (error.response) {
      /*
        * The request was made and the server responded with a
        * status code that falls out of the range of 2xx
        */
      console.log('Error Data', error.response.data);
      console.log('Error Status', error.response.status);
      console.log('Error Headers', error.response.headers);
    } else if (error.request) {
      /*
        * The request was made but no response was received, `error.request`
        * is an instance of XMLHttpRequest in the browser
        */
      console.log('Error request', error.request);
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log('Error', error.message);
    }
    console.log(error);
    Alert.alert('Error', error.message);
  }
}

export default function Main() {
  const account = handleInputPersist(storageConfig.account);
  const password = handleInputPersist(storageConfig.password);
  const identity = handleInputPersist(storageConfig.identity);
  const origin = handleInputPersist(storageConfig.origin);

  return (
    <Container>
      <TitleWrapper>
        <Image source={require('../../assets/dehpois-logo.png')}/>
      </TitleWrapper>

      <TextInput
        {...account}
        style={styles.input}
        placeholder={'Account'}
      />

      <TextInput
        {...password}
        style={styles.input}
        secureTextEntry={true}
        placeholder={'Password'}
      />

      <TextInput
        {...identity}
        style={styles.input}
        placeholder={'Identity'}
      />

      <TextInput
        {...origin}
        style={styles.input}
        placeholder={'Origin'}
      />

      <TouchableHighlight
        style={styles.button}
        activeOpacity={0.5}
        underlayColor="#DDC"
        onPress={handleSendToClockIn}
      >
        <Text style={styles.buttonText}>
          Dale!
        </Text>
      </TouchableHighlight>
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderRadius: 10,
    marginLeft: 30,
    marginBottom: 20,
    marginRight: 30,
    borderWidth: 0.3,
  },

  button: {
    backgroundColor: '#AAAA',
    padding: 10,
    height: 50,
    flexDirection: 'row',
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 280,
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },
});
