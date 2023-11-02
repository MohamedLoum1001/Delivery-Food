import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router/tabs';

const BottomTabNavigation = () => {
  return (
    <Tabs>
            <Tabs.Screen
                // Name of the route to hide.
                name="Home"
                options={{
                    // This tab will no longer show up in the tab bar.
                    href: '/Home',
                }}
            />
            <Tabs.Screen
                // Name of the route to hide.
                name="Favorite"
                options={{
                    // This tab will no longer show up in the tab bar.
                    href: '/Favorite',
                }}
            />
            <Tabs.Screen
                // Name of the route to hide.
                name="User"
                options={{
                    // This tab will no longer show up in the tab bar.
                    href: '/User',
                }}
            />
            <Tabs.Screen
                // Name of the route to hide.
                name="History"
                options={{
                    // This tab will no longer show up in the tab bar.
                    href: '/History',
                }}
            />

        </Tabs>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})