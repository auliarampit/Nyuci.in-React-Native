import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native'

import Paket from '../components/kiloan/radioButton'
import RadioWaktu from '../components/kiloan/radioWaktu'

export default class Kiloan extends Component {

    static navigationOptions = {
        headerLeft: (
            <Image source={require('../assets/logo2.jpeg')} 
            style={{marginLeft: 20}} />
        )
    }
    render() {
        return (
            <View style={cs.container}>
                <View style={cs.header}>
                    <Image style={{marginLeft: 20,}} source={require('../assets/logo2.jpeg')} />
                </View>
                <ScrollView>
                    <View style={cs.view1}>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View>
                                <Image style={cs.imgPaket} source={require('../assets/paket.png')} />
                            </View>
                            <View>
                                <Text style={cs.textjudul}>PAKET KILOAN</Text>
                                <Text style={cs.texttitle}>nyuci.in laundry</Text>
                            </View>
                        </View>
                        <Paket />
                    </View>
                    <View style={cs.view2}>
                        <RadioWaktu />
                    </View>
                    <Text style={cs.text}>
                        Note: berat minimal cucian sebesar 4KG untuk menggunakan
                        jasa antar jemput karena kami menggunakan sistem satu mesin
                        satu pelanggan
                    </Text>
                </ScrollView>
                <View style={cs.footerbtn}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15}}>
                        <TouchableOpacity style={cs.btn1} onPress={() => this.props.navigation.goBack()}>
                            <Text style={cs.textBtn}>Kembali</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Orderan')} style={cs.btn2}>
                            <Text style={cs.textBtn}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const cs = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(250, 250, 250)',
    },
    header: {
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(240, 240, 240)'
    },
    view1: {
        marginHorizontal: 15,
        backgroundColor: 'white',
        height: 295,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'rgb(240, 240, 240)',
        elevation: 0.3,
        borderRadius: 3,
    },
    view2: {
        marginHorizontal: 15,
        backgroundColor: 'white',
        height: 170,
        marginTop: 5,
        borderWidth: 1,
        borderColor: 'rgb(240, 240, 240)',
        elevation: 0.3,
        borderRadius: 3,
        borderBottomWidth: 3
    },
    text: {
        marginHorizontal: 15,
        color: 'rgb(238, 83, 79)',
        fontSize: 15,
        marginTop: 4
    },
    textjudul: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    texttitle: {
        color: 'rgb(170, 170, 170)'
    },
    imgPaket: {
        height: 65,
        width: 65,
        
    },
    btn1: {
        width: '48%',
        height: 45,
        backgroundColor: 'rgb(238, 83, 79)',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn2: {
        width: '48%',
        height: 45,
        backgroundColor: 'rgb(25, 118, 211)',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerbtn: {
        height: 55,
        justifyContent: 'center',
    },
    textBtn: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    }
})
