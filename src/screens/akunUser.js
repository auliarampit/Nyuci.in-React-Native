import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import { Content, Form, Item, Input, Label } from 'native-base'

import Icon from 'react-native-vector-icons/Ionicons'
import MapsComp from '../components/mapsComp'

export default class AkunUser extends Component {
    render() {
        return (
            <View style={styles.container}>
                 <View style={styles.header}>
                    <View style={styles.subheader}>
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                            <Image source={require('../assets/burger.jpg')} style={styles.button} />
                        </TouchableOpacity>
                        <Text style={{fontSize: 17, marginLeft: 40, marginTop: -19}}>AKUN USER</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.subContent}>
                        <View style={styles.view1}>
                            <View style={{flex: 1,}}>
                                <Icon style={{marginTop: 32}} name='ios-person' backgroundColor={'white'} color={'grey'} size={30} />
                            </View>
                            <View style={{flex: 1,}}>
                                <Icon style={{marginTop: 30}} name='ios-call' backgroundColor={'white'} color={'grey'} size={30} />
                            </View>
                            <View style={{flex: 1,}}>
                                <Image style={{height: 35, width: 35, marginTop: 18}} source={require('../assets/marker.png')} />
                            </View>
                        </View>
                        <View style={styles.view2}>
                            <Content>
                                <Form>
                                    <Item floatingLabel>
                                        <Label>Nama Lengkap</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel last>
                                        <Label>No Hp / WA</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel >
                                        <Label>Alamat Lengkap</Label>
                                        <Input />
                                    </Item>
                                </Form>
                            </Content>
                        </View>
                    </View>
                    <View style={styles.maps}>
                        <MapsComp />
                    </View>
                    <Text style={{marginTop: 8, marginLeft: 13, marginBottom: 8}}>*Klik lokasin pengiriman pada maps</Text>
                    <TouchableOpacity>
                        <View style={{backgroundColor: 'rgb(25, 118, 211)', height: 40, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>SIMPAN DATA</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: 'rgb(240, 235, 230)'
    },
    subheader: {
        marginHorizontal: 20,
    },
    button: {
        marginRight: 20,
        height: 15,
        width: 22,
    },
    title: {
        marginTop: -20,
        marginLeft: 30,
        height: 25,
        
    },
    content: {
        flex: 1,
        // backgroundColor: 'red'
        marginHorizontal: 15
    },
    subContent: {
        flexDirection: 'row',
    },
     view1: {
         width: 42,
         height: 210,
         alignItems: 'center',
        //  backgroundColor: 'red'
     },
     view2: {
         flex: 1
     },
     maps: {
        //  backgroundColor: 'red',
         height: 215
     }
})