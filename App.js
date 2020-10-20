import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,ScrollView, Text, View,TouchableOpacity } from 'react-native';
import {createAppContainer} from "react-navigation";
import HomeScreen from "./components/Screens/HomeScreen";
import ShavingMenScreen from "./components/Screens/ShavingMenScreen";
import StackNavigation from "./components/StackNavigation/MainStackNavigation";
import {createDrawerNavigator} from "react-navigation-drawer";
import AboutUsScreen from "./components/Screens/AboutUsScreen";
import ArticlesScreen from "./components/Screens/ArticlesScreen";
import BoxershortsScreen from "./components/Screens/BoxershortsScreen";
import SockScreen from "./components/Screens/SockScreen";

/**
 * Denne klasse indeholder min "main" metode, der styrer programmet.
 * Har en drawer navigator, som skal være det overordnede navigationsværktøj til diverse views.
 * @type {import("react-navigation").NavigationNavigator<any, import("react-navigation").NavigationProp<import("react-navigation").NavigationState>>}
 */


const MyDrawerNavigator = createDrawerNavigator({
  "Hjem": {
    screen: HomeScreen,
  },
  "Barbering mænd": {
    screen: StackNavigation,
  },
  "Om os":{
    screen:AboutUsScreen,
  },
  "Artikler":{
    screen:ArticlesScreen,
  },
  "Boxershorts":{
    screen:BoxershortsScreen,
  },
  "Sokker":{
    screen:SockScreen,
  }
});

const AppNav = createAppContainer(MyDrawerNavigator)

export default class App extends React.Component {
  render() {
    return (
        <AppNav/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
