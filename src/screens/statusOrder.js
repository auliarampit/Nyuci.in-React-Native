import React, { Component } from 'react'
import {
    View, 
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native'

import HeaderComp from '../components/header'

export default class StatusOrder extends Component {
    render() {
        return (
            <View style={cs.container}>
                <View style={cs.header}>
                    <HeaderComp />
                </View>
                <View style={cs.content}>
                    <View style={{marginHorizontal: 17}}>
                        <ScrollView>
                            <Text style={cs.textTitle}>STATUS ORDER LAUNDRY</Text>
                            <View style={cs.item}>
                                <View style={cs.view1}>
                                    <Image source={require('../assets/pickup.png')} style={cs.img} />
                                </View>
                                <View style={cs.view2}>
                                    <Text style={cs.subTitle}>STATUS PICKUP LAUNDRY</Text>
                                    <Text style={cs.status}>Tidak Ada Proses Pickup</Text>
                                </View>
                            </View>
                            <View style={cs.item}>
                                <View style={cs.view1}>
                                    <Image source={require('../assets/proses.png')} style={cs.img} />
                                </View>
                                <View style={cs.view2}>
                                    <Text style={cs.subTitle}>STATUS PROSES LAUNDRY</Text>
                                    <Text style={cs.status}>Tidak Ada Proses Laundry</Text>
                                </View>
                            </View>
                            <View style={cs.item}>
                                <View style={cs.view1}>
                                    <Image source={require('../assets/delivery.png')} style={cs.img} />
                                </View>
                                <View style={cs.view2}>
                                    <Text style={cs.subTitle}>STATUS DELIVERY LAUNDRY</Text>
                                    <Text style={cs.status}>Tidak Ada Proses Delivery</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}

const cs = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    header: {
        height: 50, 
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(220, 220, 220)'
    },
    content: {
        flex: 1, 
        backgroundColor: 'rgb(240, 240, 240)',
    },
    textTitle: {
        marginTop: 20,
        fontSize: 22,
        fontWeight: 'bold'
    },
    item: {
        height: 95,
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgb(220, 220, 220)',
        flexDirection: 'row'
    },
    view1: {
        width: 80,
        // backgroundColor: 'red',
        marginLeft: 5
    },
    view2: {
        flex: 1,
        marginTop: 20
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    status: {
        fontSize: 13,
        color: 'grey'
    },
    img: {
        width: 80, 
        height: 80,
        marginTop: 7
    },
})
