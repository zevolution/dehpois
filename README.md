<p align="center">
<img src="https://user-images.githubusercontent.com/36534847/89724739-7ad4fd00-d9dd-11ea-84bc-a73245ab79a0.png" alt="Logo" width="250" heigth="250"/>
</p>

---

<p align="center">
<img src="https://user-images.githubusercontent.com/36534847/89722988-faa39d00-d9c6-11ea-9a66-3586af0d2ea7.png" alt="MainPage" width="250"/>
<img src="https://user-images.githubusercontent.com/36534847/89722990-0d1dd680-d9c7-11ea-8419-9e31b6aacd31.png" alt="SucessAlert" width="250"/>
</p>

## Table of contents
- [Table of contents](#table-of-contents)
- [About the project](#about-the-project)
- [Description](#description)
- [Built with](#built-with)
- [Installation](#installation)
- [Run](#run)
- [Roadmap](#roadmap)
- [License](#license)

## About the project
Dehpois is my version of the Ahgora Multi app. [Ahgora](https://ahgora.com/) is a company located in [Florianópolis, SC - Brazil](https://en.wikipedia.org/wiki/Florian%C3%B3polis) that offers time registration, presence control, and management of operational efficiency in real-time. [Ahgora Multi](https://ahgora.com/en/produtos/multi/) is an app for [Android](https://play.google.com/store/apps/details?id=br.com.ahgora.ahgoramulti&hl=en) and [iOS](https://apps.apple.com/br/app/ahgora-multi/id1436645391) to punch the clock using FaceID, but didn't work very well on my android phone, I believe it's because my device's camera is very bad. Given the situation with my device, I had to start to punch the clock on my computer, something I consider boring to do every day, so I decided to create Dehpois, basically out of laziness 😅.

## Description

The first version of Depois basically contains a simple way to punch the clock, using the same data already used on the Ahgora website to clock in.

## Built with
* [React-Native Framework](https://github.com/facebook/react-native) using 0.63.1 version
* [Axios](https://github.com/axios/axios)
* [AsyncStorage](https://github.com/react-native-community/async-storage)

## Installation

To clone and run this application, you'll need Git installed on your computer(or no, if you want to download **.zip**). From your command line:
```bash
# Git CLI
git clone https://github.com/zevolution/dehpois.git

# Github CLI
gh repo clone zevolution/dehpois
```

## Run
 
You will need an iOS Simulator, Android Emulator, or physical device to execute the commands below: 

* Open folder of the project in the terminal and execute `npx react-native run-android` or `npx react-native run-ios`

* Later execute `npx react-native start` ...and ready!!  

## Roadmap

* [x] Punch the clock
* [ ] Store and display the relevant info like date and time of punch the clock
* [ ] Scheduling for punch the clock
* [ ] Dark theme ❤️

## License

[MIT](https://choosealicense.com/licenses/mit/)