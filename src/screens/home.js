import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import firebase from 'firebase'
import FirebaseSvc from '../public/firebase/config'

import CompHeader from '../components/header'
import Slide from '../components/slide'
import SubContent from '../components/subContent'

class Home extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            helm: [],
            pakaian:[],
            sepatu:[]
        }
    }

    // async componentDidMount() {
    //     await firebase.database().ref('/').on('value', (item) => {
    //         const data = item.val()
    //         console.log('data',data);
    //         this.setState({
    //             helm:Object.values(data.helm),
    //             pakaian:data.pakaian,
    //             sepatu:Object.values(data.sepatu)
    //         })
            
    //     })
    // }

    render() {        
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <CompHeader {...this.props}/>
                </View>
                <ScrollView>
                    <View style={styles.content}>
                        <View>
                            <Slide />
                        </View>
                        <View style={styles.layanan}>
                            <Text style={styles.text1}>Layanan Kami</Text>
                            <View style={styles.point}>
                                <Text style={styles.text2}>0 Points</Text>
                            </View>
                        </View>

                        {/* Kategori */}
                        <View style={styles.kategoriContainer}>
                            <View style={styles.kategori}>
                                <View style={{width: '33%', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Kiloan')}>
                                        <View style={styles.itemKategori}>
                                            <Image source={require('../assets/kiloan.png')} style={styles.img} />
                                            <Text style={styles.kata2}>Kiloan</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={{width: '33%', alignItems: 'center'}}> 
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Satuan')}>       
                                        <View style={styles.itemKategori}>
                                            <Image source={require('../assets/SATUAN.png')} style={styles.img} />
                                            <Text style={styles.kata2}>Satuan</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={{width: '33%', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Bayi')}>
                                        <View style={styles.itemKategori}>
                                            <Image source={require('../assets/11.png')} style={styles.img} />
                                            <Text style={styles.kata2}>Bayi</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>   
                            </View>
                            
                            <View style={styles.kategori}>
                                <View style={{width: '33%', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Jam')}>
                                        <View style={styles.itemKategori}>
                                            <Image source={require('../assets/lima.png')} style={styles.img} />
                                            <Text style={styles.kata2}>5 jam</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{width: '33%', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Sepatu')}>
                                        <View style={styles.itemKategori}>
                                            <Image source={require('../assets/sepatu.png')} style={styles.imgSepatu} />
                                            <Text style={styles.kata2}>Sepatu</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{width: '33%', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Helm')}>
                                        <View style={styles.itemKategori}>
                                            <Image source={require('../assets/helm.png')} style={styles.imgHelm} />
                                            <Text style={styles.kata2}>Helm</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>   
                            </View>
                        </View>

                        <View style={styles.viewText}>
                            <Text style={styles.kata2}>Gunakan waktu anda untuk hal lain yang lebih</Text>
                            <Text style={styles.kata2}>berhaga, biar kami yang mencuci pakaian anda.</Text>
                            <Text style={styles.kata1}>Save Time, Enjoy Life</Text>
                            <SubContent />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 50,
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        marginHorizontal: 6,
        backgroundColor: 'rgb(250, 250, 250)'
    },
    layanan: {
        height: 40,
        marginTop: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text1: {
        fontSize: 17,
        marginLeft: 13
    },
    point: {
        backgroundColor: 'rgb(11, 118, 178)',
        height: 30,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginRight: 13,
    },
    text2: {
        fontSize: 15,
        color: 'white'
    },
    kategoriContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
    },
    kategori: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '99%',
        marginBottom: 16
    },
    itemKategori: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        width: 100,
        height: 100,
        borderRadius: 20,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(257, 255, 255)',
    },
    img: {
        width: 55,
        height: 55,
        marginBottom: 8
    },
    imgSepatu: {
        width: 86,
        height: 55,
        marginBottom: 8,
        // marginLeft: 2
    },
    imgHelm: {
        width: 83,
        height: 55,
        marginBottom: 8
    },
    viewText: {
        marginHorizontal: 12,
        width: Dimensions.get('window').get,
        backgroundColor: 'white'
    },
    kata2: {
        fontSize: 16.5,
        textAlign: 'center',
        color: 'rgb(106, 106, 106)',
    },
    kata1: {
        marginTop: 15,
        fontSize: 16.5,
        textAlign: 'center',
        color: 'rgb(106, 106, 106)',
    }
})

export default Home