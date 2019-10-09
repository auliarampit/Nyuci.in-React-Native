import React, { Component } from 'react'
import {
    View, 
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native'


export default class Satuan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                 {image: require('../assets/helm1.png'),name: 'HALF FACE', harga: 'Rp 25,000', qty: 0},
                 {image: require('../assets/helm2.png'),name: 'FULL FACE', harga: 'Rp 30,000', qty: 0},
            ]
        }
    }
    render() {
        return (
            <View style={cs.container}>
                <View style={cs.header}>
                    <Image style={{marginLeft: 20,}} source={require('../assets/logo2.jpeg')} />
                </View>
                <ScrollView>
                    <View style={cs.content}>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View>
                                <Image style={cs.imgPaket} source={require('../assets/paket.png')} />
                            </View>
                            <View>
                                <Text style={cs.textjudul}>PAKET CUCI HELM</Text>
                                <Text style={cs.texttitle}>KHUSUS / SATUAN</Text>
                            </View>
                        </View>

                        {this.state.data.map((item) => {
                            return(
                                <View style={cs.subContent}>
                                    <View style={{marginLeft: 5}}>
                                        <Image style={cs.imgHelm} source={item.image} />
                                    </View>
                                    <View style={cs.left}>
                                        <Text style={cs.name}> {item.name} </Text>
                                        <Text style={cs.name}> {item.harga} </Text>
                                    </View>
                                    <View style={cs.right}>
                                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                            <TouchableOpacity>
                                                <View style={cs.jumlah}>
                                                    <Text style={cs.min1}>_</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <View style={cs.jumlah1}>
                                                <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.qty}</Text>
                                            </View>
                                            <TouchableOpacity>
                                                <View style={cs.jumlah}>
                                                    <Text style={cs.min}>+</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        })}

                    </View>
                </ScrollView>
                <View style={cs.footerbtn}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15}}>
                        <TouchableOpacity style={cs.btn1} onPress={() => this.props.navigation.goBack()}>
                            <Text style={cs.textBtn}>Kembali</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={cs.btn2}  onPress={() => this.props.navigation.navigate('DetailHelm')}>
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
        backgroundColor: 'rgb(248, 248, 248)'
    },
    header: {
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(240, 240, 240)'
    },
    content: {
        marginHorizontal: 15,
        backgroundColor: 'white',
        marginTop: 15,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'rgb(240, 240, 240)',
        flex: 1,
        marginBottom: 5
    },
    imgPaket: {
        height: 65,
        width: 65,
        
    },
    textjudul: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    texttitle: {
        color: 'rgb(170, 170, 170)'
    },
    subContent: {
        flexDirection: 'row',
        marginBottom: 50
    },
    left: {
        flex: 0.7,
        marginLeft: 15,
        // backgroundColor: 'blue',
        justifyContent: 'center',

    },
    right: {
        flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'center',
        marginRight: 10
    },
    text: {
        marginHorizontal: 15,
        color: 'rgb(238, 83, 79)',
        fontSize: 15,
        marginTop: 4
    },
    jumlah: {
        width: 40,
        height: 40,
        backgroundColor: 'rgb(25, 118, 211)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    jumlah1: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    min: {
        color: 'white',
        fontSize: 25,
    },
    min1: {
        color: 'white',
        fontSize: 25,
        marginTop: -20
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
    },
    title: {
        marginLeft: 5,
        fontSize: 13
    },
    name: {
        fontWeight: 'bold'
    },
    imgHelm: {
        width: 100,
        height: 100
    }

})
