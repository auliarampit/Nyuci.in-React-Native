import React, { Component } from 'react'
import {View, Text, Image} from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'

var radio_props = [
    {label: 'PAKET 1 HARI', value: 0 },
    {label: 'PAKET 2 HARI', value: 1 }
  ];
  
class RadioWaktu extends Component {
    state = {
        value: 0
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/waktu.png')} style={{
                        height: 50,
                        width: 50,
                        marginLeft: 10,
                        marginTop: 13 
                    }}/>
                    <View style={{marginTop: 15, marginLeft: 7}}>
                        <Text style={{fontSize: 17, fontWeight: 'bold'}}>DURASI LAUNDRY</Text>
                        <Text style={{color: 'grey'}}>nyuci.in laundry</Text>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={true}
                    labelHorizontal={true}
                    labelColor={'black'}
                    animation={true}
                    style={{marginHorizontal: 20, marginTop: 20,flexDirection: 'row', justifyContent: 'space-between'}}
                    buttonSize={14}
                    labelStyle={{fontSize: 15,fontWeight: 'bold'}}
                    onPress={(value) => {this.setState({value:value})}}
                    />
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15}}>
                        <Text style={{marginLeft: 10}}>*Harga Rp 12,000/KG </Text>
                        <Text>*Harga Rp 8,000/KG </Text>
                    </View>
                </View>
            </View>
        );
      }
}
export default RadioWaktu