import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer';
import { Image } from 'react-native';

const DrawerNavigation = () => {
    return (
        <Drawer
            screenOptions={{
                drawerActiveTintColor: 'white',
                drawerStyle: {
                    backgroundColor: '#fa4a0c',
                    color: 'white'
                },
                drawerLabelStyle: {
                    color: 'white',
                },
            }}
        >
            <Drawer.Screen
                name="Profile"
                options={{
                    drawerLabel: "Profile",
                    title: "Profile",
                    drawerIcon: ({ size }) => (
                        <Image
                            source={require('../../assets/Profile.png')}
                            style={{ width: size, height: size, tintColor: 'white' }}
                        />
                    ),

                }}
            />
            <Drawer.Screen
                name="Orders"
                options={{
                    drawerLabel: "Orders",
                    title: "Orders",
                    drawerIcon: ({ size }) => (
                        <Image
                            source={require('../../assets/panier.png')}
                            style={{ width: size, height: size, tintColor: 'white' }}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Offer"
                options={{
                    drawerLabel: "Offer",
                    title: "Offer",
                    drawerIcon: ({ size }) => (
                        <Image
                            source={require('../../assets/offer.png')}
                            style={{ width: size, height: size, tintColor: 'white' }}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Privacy"
                options={{
                    drawerLabel: "Privacy",
                    title: "Privacy",
                    drawerIcon: ({ size }) => (
                        <Image
                            source={require('../../assets/privacy.png')}
                            style={{ width: size, height: size, tintColor: 'white' }}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Security"
                options={{
                    drawerLabel: "Security",
                    title: "Security",
                    drawerIcon: ({ size }) => (
                        <Image
                            source={require('../../assets/security.png')}
                            style={{ width: size, height: size, tintColor: 'white' }}
                        />
                    ),
                }}
            />
        </Drawer>
    );
}

export default DrawerNavigation

const styles = StyleSheet.create({})