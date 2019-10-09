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
                {name: 'BFAST CLEANING', harga: 'Rp 25,000',title: 'Membersihkan bagian upper dan midsole.', qty: 0},
                {name: 'DEEP CLEAN MEDIUM', harga: 'Rp 40,000',title: 'Membersihkan midsole, outsole, insole, upper, dan lace.', qty: 0},
                {name: 'DEEP CLEAN SUEDE', harga: 'Rp 45,000',title: 'Membersihkan midsole, outsole, insole, upper, dan lace yang berbahan suede.', qty: 0},
                {name: ']DEEP CLEAN HARD', harga: 'Rp 55,000',title: 'Membersihkan midsole, outsole, insole, upper, dan lace yang memilik noda berat.', qty: 0},
                {name: 'DEEP CLEAN LEATHER', harga: 'Rp 55,000',title: 'Membersihkan midsole, outsole, insole, upper, dan lace yang berbahan kulit', qty: 0},
                {name: 'UNYELLOWING', harga: 'Rp 55,000',title: 'Memutihkan kembali bagian sepatu yang menguning', qty: 0},
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
                                <Text style={cs.textjudul}>PAKET SHOE CARE</Text>
                                <Text style={cs.texttitle}>CUCI SEPATU</Text>
                            </View>
                        </View>

                        {this.state.data.map((item) => {
                            return(
                                <View style={cs.subContent}>
                                    <View style={cs.left}>
                                        <Text style={cs.name}> {item.name} </Text>
                                        <Text style={cs.name}> {item.harga} </Text>
                                        <Text style={cs.title}> {item.title} </Text>
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
                        <TouchableOpacity style={cs.btn1}>
                            <Text style={cs.textBtn} onPress={() => this.props.navigation.goBack()}>Kembali</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={cs.btn2}  onPress={() => this.props.navigation.navigate('DetailSepatu')}>
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
        marginBottom: 10
    },
    left: {
        flex: 1,
        marginLeft: 15
    },
    right: {
        flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
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
        marginLeft: 0,
        fontSize: 11
    },
    name: {
        fontWeight: 'bold'
    }

})
