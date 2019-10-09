import * as React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const tabBarIcon = ({ name, size, tintColor }) => {
    // console.warn('name = ', name)
    return (
        <MaterialIcon
            //  style={{ background: 'transparent' }}
            name={name}
            color={tintColor}
            size={size}
        />)
}

export default tabBarIcon