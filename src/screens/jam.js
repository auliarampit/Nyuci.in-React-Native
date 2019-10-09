import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import MapsComp from '../components/mapsComp'


export default class Kiloan extends Component {

    constructor(props) {
        super(props)
        this.state = {
            checked: 0,
            dataBaru: [
                {name: '', text: '*Paket laundry lengkap mulai dari proses pencucian, pengeringan, dan proses setrika pakaian.'},
            ]
        }
    }

    static navigationOptions = {
        headerLeft: (
            <Image source={require('../assets/logo2.jpeg')} 
            style={{marginLeft: 20}} />
        )
    }
    render() {
        const data = this.state.dataBaru
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
                                <Text style={cs.textjudul}>DETAIL ORDER PAKET EXPRESS</Text>
                                <Text style={cs.texttitle}>NYUCI.IN LAUNDRY</Text>
                            </View>
                        </View>
                        <View style={{marginHorizontal: 10}}>
                            <TouchableOpacity style={{flexDirection: 'row', marginBottom: 2}}>
                                <Image style={cs.img} source = {require('../assets/radiobutton.jpg')} />
                                <Text style={cs.textRadio}>PAKET EXPRESS 5 JAM 15.000/KG</Text>
                            </TouchableOpacity>
                            <Text style={cs.textP}>*paket laundry lengkap mulai dari proses pencucian, 
                            pengeringan dan proses setrika pakaian selesai dalam waktu 5 jam.</Text>
                            <Text style={cs.textRed}>*Minimal Order Paket Express adalah 3 KG</Text>
                            <View style={{marginHorizontal: 20}}>
                                <View style={{height: 1, borderWidth: 1, borderColor: 'rgb(240,240,240)'}} />
                            </View>                            
                                <View style={{flexDirection: 'row', marginTop: 10}}>
                                    <View style={cs.textPerkiraan}>
                                        <Text style={cs.perkiraan}>PERKIRAAN HARGA</Text>
                                        <Text style={cs.perkiraan}>ONGKIR</Text>
                                    </View>
                                    <View style={cs.textHarga}>
                                        <Text style={cs.harga}>Rp.</Text>
                                        <Text style={cs.harga}>Rp.</Text>
                                    </View>
                                </View>
                                <View style={{marginBottom: 15, marginTop: 5}}>
                                    <Text style={cs.note}>HARAP MELAKUKAN PEMBAYARAN DI AWAL KETIKA PICKUP CUCIAN!</Text>
                                </View>
                                </View>
                            </View>
                    <View style={cs.view2}>
                        <View style={{flexDirection: 'row', marginTop: 20, marginHorizontal: 15}}>
                            <Image style={cs.imgMarker} source={require('../assets/marker2.png')} />
                            <Text style={cs.textAlamat}>ALAMAT CUSTOMER</Text>
                        </View>
                        <View style={{height: 190, marginHorizontal: 10}}>
                            <MapsComp />
                        </View>
                        <Text style={cs.note2}>UNTUK SAAT INI LAYANAN KAMI HANYA TERSEDIA DI KOTA BANDA ACEH DAN SEKITARNYA</Text>
                        <View style={{flexDirection: 'row', marginTop: 20, marginHorizontal: 15}}>
                            <Image style={cs.imgMarker} source={require('../assets/paket.png')} />
                            <Text style={cs.textAlamat}>CATATAN UNTUK LAUNDRY</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginHorizontal: 15}}>
                            <TextInput type='text' style={{borderBottomWidth: 2, width: '100%',}} />
                        </View>
                        <View style={{marginBottom: 20}}>
                            <Text style={cs.note3}>note :</Text>
                            <Text style={cs.note3}>- kami tidak akan memproses orderan dengan alamat dan no kontak yang tidak lengkap / jelas.</Text>
                            <Text style={cs.note3}>- harga fix laundry akan di hitung ketika petugas kami menimbang berat cucian di lokasi.</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={cs.footerbtn}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15}}>
                        <TouchableOpacity style={cs.btn1} onPress={() => this.props.navigation.goBack(null)}>
                            <Text style={cs.textBtn}>Kembali</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Orderan')} style={cs.btn2}>
                            <Text style={cs.textBtn}>Order Laundry</Text>
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
        flex: 1,
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'rgb(230,230,230)',
        marginHorizontal: 15
    },
    text: {
        marginHorizontal: 15,
        color: 'rgb(238, 83, 79)',
        fontSize: 15,
        marginTop: 4
    },
    textjudul: {
        fontSize: 16.5,
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
    },
    img: {
        height: 30,
        width: 30
    },
    textP: {
        marginLeft: 35,
        marginBottom: 5,
        color: 'grey',
        marginRight: 5
    },
    textRadio: {
        marginLeft: 10,
        marginTop: 6,
        fontSize: 15,
        fontWeight: 'bold',
        
    },
    textRed: {
        marginLeft: 35,
        marginBottom: 5,
        color: 'rgb(238, 83, 79)',
        marginRight: 5
    },
    textPerkiraan: {
        flex: 1,
        // backgroundColor: 'grey',
        // marginLeft: 10
    },
    textHarga: {
        flex: 1,
        // backgroundColor: 'red'
        // alignItems: 'center'
        marginLeft: 15
    },
    perkiraan: {
        fontSize: 15,
        color: 'grey',
        fontWeight: 'bold'
    },
    harga: {
        fontSize: 15,
        color: 'rgb(25, 118, 211)',
        fontWeight: 'bold'
    },
    note: {
        fontWeight: 'bold',
        color: 'rgb(25, 118, 211)',
        fontSize: 13
    },
    imgMarker: {
        width: 35,
        height: 35
    },
    textAlamat: {
        marginTop: 7,
        fontWeight: 'bold',
        marginLeft: 20,

    },
    note2: {
        fontWeight: 'bold',
        fontSize: 12.5,
        color: 'rgb(238, 83, 79)',
        marginLeft: 10,
        marginRight: 10
    },
    note3: {
        color: 'rgb(238, 83, 79)',
        marginLeft: 20,
    },
})
