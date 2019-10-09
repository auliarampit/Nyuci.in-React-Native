import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Drawer extends Component {
    render() {
        return (
            <View>
                <View style={cs.img}>
                    <Image style={cs.img} source={require('../assets/drawer.png')} />
                    <View style={cs.pp}>
                        <Image style={cs.ppImg} source={require('../assets/aulia.jpg')} />
                    </View>
                    <Text style={cs.name}>Aulia Rahmat</Text>
                    <Text style={cs.email}>auliarahmat25599@gmail.com</Text>
                </View>
                <View style={{flex: 1, marginTop: 10}}>
                    <View style={{flexDirection: 'row', height: 45}}>
                        <View style={{width: 60, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name='ios-home' size={30} color='grey' />
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', marginLeft: 15}}>
                            <Text>Home</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', height: 45}}>
                        <View style={{width: 60, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name='ios-call' size={30} color='grey' />
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', marginLeft: 15}}>
                            <Text>Customer Care</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', height: 45}}>
                        <View style={{width: 60, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name='ios-help-circle-outline' size={30} color='grey' />
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', marginLeft: 15}}>
                            <Text>Tentang Kami</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', height: 45}}>
                        <View style={{width: 60, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name='ios-lock' size={30} color='grey' />
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', marginLeft: 15}}>
                            <Text>Logout</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const cs = StyleSheet.create({
    img: {
        height: 200,
        width: 275
    },
    pp: {
        borderWidth: 2,
        borderColor: 'white',
        width: 80,
        height: 80,
        borderRadius: 50,
        marginTop: -180,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ppImg: {
        borderWidth: 2,
        borderColor: 'white',
        width: 78,
        height: 78,
        borderRadius: 50,
    },
    name: {
        marginLeft: 20,
        marginTop: 40,
        color: 'white',
        fontSize: 17,
    },
    email: {
        marginLeft: 20,
        marginTop: 4,
        color: 'white',
        fontSize: 15
    }
})
