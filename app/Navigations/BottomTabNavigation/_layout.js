import { Tabs } from 'expo-router/tabs';
import HoverImage from '../../../components/HoverImage/HoverImage';

// Import des icônes
const house = require('../../../assets/icons/home.png');
const favorite = require('../../../assets/icons/heart.png');
const users = require('../../../assets/icons/user.png');
const historie = require('../../../assets/icons/history.png');

const iconSize = 24; // Taille commune des icônes

export default function AppLayout() {
    
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#FA4A0C',
                tabBarInactiveTintColor: '#ADADAF',
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    backgroundColor: 'transparent',
                },
                tabBarStyle: [
                    {
                        display: 'flex',
                    },
                    null,
                ],
            }}
        >
            <Tabs.Screen
                // Name of the route to hide.
                name="Home"
                options={{
                    // This tab will no longer show up in the tab bar.
                    href: '/Navigations/BottomTabNavigation/Home',
                    tabBarIcon: ({ focused }) => (
                        <HoverImage
                            source={house}
                            size={24}
                            activeColor="#FA4A0C"
                            inactiveColor={focused ? '#FA4A0C' : '#ADADAF'}
                            screenName="Home"

                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                // Name of the route to hide.
                name="Favorite"
                options={{
                    // This tab will no longer show up in the tab bar.
                    href: '/Navigations/BottomTabNavigation/Favorite',
                    tabBarIcon: ({ focused }) => (
                        <HoverImage
                            source={favorite}
                            size={24}
                            activeColor="#FA4A0C"
                            inactiveColor={focused ? '#FA4A0C' : '#ADADAF'}
                            screenName="Favorite"
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                // Name of the route to hide.
                name="User"
                options={{
                    // This tab will no longer show up in the tab bar.
                    href: '/Navigations/BottomTabNavigation/User',
                    tabBarIcon: ({ focused }) => (
                        <HoverImage
                            source={users}
                            size={iconSize}
                            activeColor='#FA4A0C'
                            inactiveColor={focused ? '#FA4A0C' : '#ADADAF'}
                            screenName="User"
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                // Name of the route to hide.
                name="History"
                options={{
                    // This tab will no longer show up in the tab bar.
                    href: '/Navigations/BottomTabNavigation/History',
                    tabBarIcon: ({ focused }) => (
                        <HoverImage
                            source={historie}
                            size={24}
                            activeColor="#FA4A0C"
                            inactiveColor={focused ? '#FA4A0C' : '#ADADAF'}
                            screenName="History"
                        />
                    ),
                    headerShown: false,
                }}
            />

        </Tabs>
    );
}
