import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity} from 'react-native'
import MapsComp from '../../components/mapsComp'

class Orderan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../../assets/logo2.jpeg')} style={styles.title} />
                </View>
                <ScrollView>
                    <View style={styles.content}>
                        <View style={styles.view1}>
                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <View>
                                    <Image style={styles.imgPaket} source={require('../../assets/proses.png')} />
                                </View>
                                <View>
                                    <Text style={styles.textjudul}>DETAIL ORDER</Text>
                                    <Text style={styles.texttitle}>KHUSUS / SATUAN</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 20}}>
                                <View style={styles.hariPickup}>
                                    <View>
                                        <Text style={styles.textHari}>KAMIS</Text>
                                        <Text style={styles.textTanggal}>03-10-2019</Text>
                                    </View>

                                    <View>
                                        <Text style={styles.textHari}>KAMIS</Text>
                                        <Text style={styles.textTanggal}>03-10-2019</Text>
                                    </View>
                                </View>
                                <View style={styles.imgPembatas}>
                                    <View style={{width: 20, height: 20, borderWidth: 2, borderRadius: 50, borderColor: 'rgb(25, 118, 211)', marginTop: 10}}/>
                                    <View style={{width: 2, height: 100, borderWidth: 1, borderColor: 'rgb(25, 118, 211)'}}/>
                                    <View style={{width: 20, height: 20, borderWidth: 2, borderRadius: 50, borderColor: 'rgb(25, 118, 211)', marginBottom: 10, backgroundColor: 'rgb(25, 118, 211)'}}/>
                                </View>
                                <View style={styles.textPickup}>
                                    <View>
                                        <Text style={styles.textHari}>Pickup Cucian</Text>
                                        <Text style={styles.textTanggal}>08:00 - 11:00 PAGI</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.textHari}>Delivery Cucian</Text>
                                        <Text style={styles.textTanggal}>08:00 - 11:00 PAGI</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{marginHorizontal: 20}}>
                                <View style={{height: 1, borderWidth: 1, borderColor: 'rgb(240,240,240)'}} />
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{flex: 1.5}}>
                                        <Text style={styles.data}>Baju Kaos @1 PCS</Text>
                                    </View>
                                    <View style={{flex: 1, marginLeft: 25}}>
                                        <Text style={styles.hargaData}>Rp. 25,000</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex: 1}}>
                                <View style={{flexDirection: 'row', marginTop: 10}}>
                                    <View style={styles.textPerkiraan}>
                                        <Text style={styles.perkiraan}>PERKIRAAN HARGA</Text>
                                        <Text style={styles.perkiraan}>ONGKIR</Text>
                                    </View>
                                    <View style={styles.textHarga}>
                                        <Text style={styles.harga}>Rp.</Text>
                                        <Text style={styles.harga}>Rp.</Text>
                                    </View>
                                </View>
                                <View style={{marginBottom: 15,marginHorizontal: 20, marginTop: 5}}>
                                    <Text style={styles.note}>HARAP MELAKUKAN PEMBAYARAN DI AWAL KETIKA PICKUP CUCIAN!</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.view2}>
                            <View style={{flexDirection: 'row', marginTop: 20, marginHorizontal: 15}}>
                                <Image style={styles.imgMarker} source={require('../../assets/marker2.png')} />
                                <Text style={styles.textAlamat}>ALAMAT CUSTOMER</Text>
                            </View>
                            <View style={{height: 190, backgroundColor: 'grey', marginHorizontal: 10}}>
                                <MapsComp />
                            </View>
                            <Text style={styles.note2}>UNTUK SAAT INI LAYANAN KAMI HANYA TERSEDIA DI KOTA BANDA ACEH DAN SEKITARNYA</Text>
                            <View style={{flexDirection: 'row', marginTop: 20, marginHorizontal: 15}}>
                                <Image style={styles.imgMarker} source={require('../../assets/paket.png')} />
                                <Text style={styles.textAlamat}>CATATAN UNTUK LAUNDRY</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginHorizontal: 15}}>
                                <TextInput type='text' style={{borderBottomWidth: 2, width: '100%',}} />
                            </View>
                            <View style={{marginBottom: 20}}>
                                <Text style={styles.note3}>note :</Text>
                                <Text style={styles.note3}>- kami tidak akan memproses orderan dengan alamat dan no kontak yang tidak lengkap / jelas.</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footerbtn}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15}}>
                        <TouchableOpacity style={styles.btn1} onPress={() => this.props.navigation.goBack(null)}>
                            <Text style={styles.textBtn}>Kembali</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {alert('Sedang Proses')}} style={styles.btn2}>
                            <Text style={styles.textBtn}>Order Laundry</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'rgb(240,240,240)'
    },
    header: {
        height: 50,
        backgroundColor: 'white'
    },
    content: {
        flex: 1,
        marginHorizontal: 15,
        marginTop: 15,
        marginBottom: 10
    },
    view1: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1.3,
        borderColor: 'rgb(230,230,230)'
    },
    view2: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'rgb(230,230,230)',
    },
    textjudul: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5
    },
    texttitle: {
        color: 'rgb(170, 170, 170)'
    },
    imgPaket: {
        height: 65,
        width: 65,
        
    },
    hariPickup: {
        width: 100,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginRight: 15
    },
    imgPembatas: {
        width: 20,
        // backgroundColor: 'grey',
        alignItems: 'center'
    },
    textPickup: {
        flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        marginLeft: 14
    },
    textHari: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    textTanggal: {
        fontSize: 12,
        color: 'grey'
    },
    imagePembatas: {
        height: 100
    },
    textPerkiraan: {
        flex: 1.5,
        // backgroundColor: 'grey',
        marginLeft: 20
    },
    textHarga: {
        flex: 1,
        // backgroundColor: 'red'
        // alignItems: 'center'
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
    data: {
        color: 'grey'
    },
    hargaData: {
        color: 'blue',
        fontSize: 15,
    },
    title: {
        marginTop: 15,
        marginLeft: 30,
        height: 25,
        
    }
})


export default Orderan
