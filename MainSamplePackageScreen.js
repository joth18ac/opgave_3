import React, { Component } from 'react'
import {View, Text, StyleSheet, Button} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";

/**
 * Indeholder informationer om diverse prøvepakker. Kan tilgå dem, via OnPress metoder.
 */

export default class MainSamplePackageScreen extends Component {
   static navigationOptions = {
        title: 'MainSample'
    }

    GoToSample1 = (route) => {
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('Sample1');
    };

    GoToSample2 = (route) => {
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('Sample2');
    };

    GoToSample3 = (route) => {
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('Sample3');
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Læs mere om prøvepakke 1</Text>
                <Button title="Take me to it!" onPress={this.GoToSample1}/>
                <Text style={styles.text}>Læs mere om prøvepakke 2</Text>
                <Button title="Take me to it!" onPress={this.GoToSample2}/>
                <Text style={styles.text}>Læs mere om prøvepakke 3</Text>
                <Button title="Take me to it!" onPress={this.GoToSample3}/>
            </View>
        );
    };
}


const styles = StyleSheet.create({
    container: {
        paddingTop:100,
        paddingBottom:100,
        borderColor: '#01393d',
        borderWidth: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eff3f6',
        height:'100%'
    },
    text: {
        fontSize: 20,
    },
});
