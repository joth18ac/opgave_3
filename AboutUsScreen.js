import React, { Component } from 'react'
import {View, Text, StyleSheet, Button,TouchableOpacity} from 'react-native';
import Header from "../Global styling/Header";

/**
 * Dette er et tomt view, der i den fremtidige version skal indeholder informationer om selve organisationen.
 */

export default class AboutUsScreen extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Header navigation={this.props.navigation} title='Om os'/>
                <View style={styles.textContainer}>
                    <Text> Dette er en om os side</Text>
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