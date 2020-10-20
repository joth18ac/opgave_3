import React, { Component } from 'react'
import {View, Text, StyleSheet, Button,TouchableOpacity} from 'react-native';
import Header from "../Global styling/Header";
import {TextInput} from "react-native-web";
export default class HomeScreen extends Component {

    /**
     * Dette er et tomt view, der i den fremtidige version skal indeholde funktioner hvor man som medlem kan logge ind.
     */

    state={
        clicked:false,
        btnTitle:'Tryk på mig!!!'
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Header navigation={this.props.navigation} title='HomeScreen'/>
                <View style={styles.textContainer}>
                    <Text> Dette er en login side</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%'
    },
    btn:{
        padding:40,
        borderRadius:10
    },
    btn_txt:{
        color:'white'
    },
    blue:{
        backgroundColor:'blue',
    },
    green:{
        backgroundColor:'green',
    },
    textContainer: {
        flex: 0.1,
        marginTop: 200,
        alignItems: 'center',
        height: 100,
    },
});





