import React, { Component } from 'react'
import {View, Text, StyleSheet, Button,TouchableOpacity} from 'react-native';
import Header from "../Global styling/Header";

/**
 * Dette er et tomt view, der i den fremtidige version skal indeholder informationer om boxershorts.
 */


export default class BoxershortsScreen extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Header navigation={this.props.navigation} title='Boxershorts'/>
                <View style={styles.textContainer}>
                    <Text>Her vil boxershorts siden være</Text>
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
    textContainer: {
        flex: 0.1,
        marginTop: 200,
        alignItems: 'center',
        height: 100,
    },
});