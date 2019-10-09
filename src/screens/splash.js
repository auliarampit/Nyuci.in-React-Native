import React, { Component } from 'react'
import {
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native'

class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image source={require('../assets/logo.jpg')} style={styles.imgLogo} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },
    logo: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
})
export default  Splash