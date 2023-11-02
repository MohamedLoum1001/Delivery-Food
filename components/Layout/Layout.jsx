import { StyleSheet, View } from 'react-native'
import React from 'react'
import DrawerNavigation from '../DrawerNavigation/DrawerNavigation'
import BottomTabNavigation from '../BottomTabComponent/BottomTabNavigation'

const Layout = () => {
    return (
        <View style={styles.container}>
            <DrawerNavigation />
            <BottomTabNavigation />
        </View>
    )
}

export default Layout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
})