import React, { Component } from 'react'
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native'

export default class RadioButtons extends Component {

    constructor(props) {
        super(props)
        this.state = {
            checked: 0,
            dataBaru: [
                {name: 'PAKET CUCI SETRIKA', text: '*Paket laundry lengkap mulai dari proses pencucian dengan tangan, pengeringan, dan proses setrika pakaian.'},
                {name: 'PAKET SETRIKA', text: '*Paket laundry hanya proses setrika pakaian.'},
                {name: 'PAKET CUCI KERING', text: '*Paket laundry hanya proses pencucian dengan tangan sampai pengeringan pakaian.'}
            ]
        }
    }

    render() {
        return (
            <View style={cs.container}>
                {
                    this.state.dataBaru.map((data, key) => {
                        return(
                            <View>
                                {this.state.checked == key ?
                                <View>
                                <TouchableOpacity style={{flexDirection: 'row', marginBottom: 2}}>
                                    <Image style={cs.img} source = {require('../../assets/radiobutton.jpg')} />
                                    <Text style={cs.textRadio}>{data.name}</Text>
                                </TouchableOpacity>
                                <Text style={cs.textP}>{data.text}.</Text>
                                </View>
                                :
                                <View>
                                <TouchableOpacity onPress={()=> this.setState({checked: key})} style={{flexDirection: 'row', marginBottom: 2}}>
                                    <Image style={cs.img} source = {require('../../assets/radio.png')} />
                                    <Text style={cs.textRadio}>{data.name}</Text>
                                </TouchableOpacity>
                                 <Text style={cs.textP}>{data.text}</Text>
                                 </View>
                            }
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

const cs = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 15
    },
    img: {
        height: 30,
        width: 30
    },
    textRadio: {
        marginLeft: 10,
        marginTop: 6,
        fontSize: 15,
        fontWeight: 'bold',
        
    },
    textP: {
        marginLeft: 35,
        marginBottom: 5,
        color: 'grey',
        marginRight: 5
    }
})