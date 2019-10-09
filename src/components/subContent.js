import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'

export default class SubContent extends Component {
    render() {
        return (
            <View style={cs.container}>
                <View style={cs.content}>
                    <View style={cs.subContent}>
                        <View style={{width:'30%', alignItems: 'center'}}>
                            <Image style={cs.img} source={require('../assets/image1.jpg')}/>
                        </View>
                    </View>
                    <View style={cs.subContent}>
                        <View style={{width:'30%', alignItems: 'center'}}>
                            <Image style={cs.img} source={require('../assets/image2.jpg')}/>
                        </View>
                    </View>
                    <View style={cs.subContent}>
                        <View style={{width:'30%', alignItems: 'center'}}>
                            <Image style={cs.img} source={require('../assets/image3.jpg')}/>
                        </View>
                    </View>
                </View>
                <View style={cs.content}>
                    <View style={cs.subContent}>
                        <View style={{width:'30%', alignItems: 'center'}}>
                            <Image style={cs.img} source={require('../assets/image4.jpg')}/>
                        </View>
                    </View>
                    <View style={cs.subContent}>
                        <View style={{width:'30%', alignItems: 'center'}}>
                            <Image style={cs.img} source={require('../assets/image5.jpg')}/>
                        </View>
                    </View>
                    <View style={cs.subContent}>
                        <View style={{width:'30%', alignItems: 'center'}}>
                            <Image style={cs.img} source={require('../assets/image6.jpg')}/>
                        </View>
                    </View>
                </View>
                <View style={cs.content}>
                    <View style={cs.subContent}>
                        <View style={{width:'30%', alignItems: 'center'}}>
                            <Image style={cs.img} source={require('../assets/image7.jpg')}/>
                        </View>
                    </View>
                    <View style={cs.subContent}>
                        <View style={{width:'30%', alignItems: 'center'}}>
                            <Image style={cs.img} source={require('../assets/image8.jpg')}/>
                        </View>
                    </View>
                    <View style={cs.subContent}>
                        <View style={{width:'30%', alignItems: 'center'}}>
                            <Image style={cs.img} source={require('../assets/image9.jpg')}/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const cs = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    content: {
        width: '99%',
        flexDirection: 'row',
        marginBottom: 1,
        justifyContent: 'space-between'
    },
    subContent: {
        borderWidth: 1,
        borderColor: 'white',
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 105,
        height: 105
    }
})
