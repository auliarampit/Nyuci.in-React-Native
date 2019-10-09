import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { 
    createMaterialBottomTabNavigator 
} from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import Home from '../screens/home'
import StatusOrder from '../screens/statusOrder'
import AkunUser from '../screens/akunUser'

import Drawer from '../components/drawer'
import Kiloan from '../screens/kiloan'
import Bayi from '../screens/bayi'
import Satuan from '../screens/satuan'
import Sepatu from '../screens/sepatu'
import Helm from '../screens/helm'
// import Login from '../screens/login'
import Jam from '../screens/jam'

import Orderan from '../screens/detailOrderan/orderan'
import DetailSatuan from '../screens/detailOrderan/detailSatuan'
import DetailBayi from '../screens/detailOrderan/detailBayi'
import DetailSepatu from '../screens/detailOrderan/detailSepatu'
import DetailHelm from '../screens/detailOrderan/detailHelm'

const TabBottomComp = createMaterialBottomTabNavigator({
    HOME: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-home' color={tintColor} size={24} />
            )
        }
    },
    STATUSORDER: {
        screen: StatusOrder,
        navigationOptions: {
            tabBarLabel: 'STATUS ORDER',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-list-box' color={tintColor} size={24} />
            )
        }
    },
    AKUNUSER:  {
        screen: AkunUser,
        navigationOptions: {
            tabBarLabel: 'AKUN USER',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-person' color={tintColor} size={24} />
            )
        }
    },
}, {
    activeColor: 'rgb(25, 118, 211)',
    inactiveColor: 'grey',
    barStyle: { backgroundColor: 'white' },
})

const AppStack = createStackNavigator({
    // Login: Login,
    TabBottomComp,
    Kiloan: Kiloan,
    Bayi: Bayi,
    Satuan: Satuan,
    Sepatu: Sepatu,
    Helm: Helm,
    Jam: Jam,
    
    Orderan: Orderan,
    DetailSatuan: DetailSatuan,
    DetailBayi: DetailBayi,
    DetailSepatu: DetailSepatu,
    DetailHelm: DetailHelm
}, {
    headerMode: 'none'
})

const AppNavigator = createDrawerNavigator({
    
    AppStack
}, {
    headerMode: 'none',
    contentComponent: Drawer,
    drawerWidth: 275
}, {
    initialRouteName: 'TabBottomComp'
})

export default createAppContainer(AppNavigator)