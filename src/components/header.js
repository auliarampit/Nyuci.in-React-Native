import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
// import SvgUri from 'react-native-svg-uri'
// import Img from '../assets/logo3.svg'

const compHeader = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Image source={require('../assets/burger.jpg')} style={styles.button} />
                </TouchableOpacity>
                <Image source={require('../assets/logo2.jpeg')} style={styles.title} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    subContainer: {
        marginHorizontal: 20,
    },
    button: {
        marginRight: 20,
        height: 15,
        width: 22,
    },
    title: {
        marginTop: -20,
        marginLeft: 30,
        height: 25,
        
    }
})

export default compHeader