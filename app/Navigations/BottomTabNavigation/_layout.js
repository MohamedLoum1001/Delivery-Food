import { Tabs } from 'expo-router/tabs';
// Import des icônes
const house = require('../../../assets/icons/home.png');
const favorite = require('../../../assets/icons/heart.png');
const users = require('../../../assets/icons/user.png');
const historie = require('../../../assets/icons/history.png');

export default function AppLayout() {

    return (
        <Tabs>
            <Tabs.Screen
                // Name of the route to hide.
                name="Home"
                options={{
                    // This tab will no longer show up in the tab bar.
                    href: '/Navigations/BottomTabNavigation/Home',
                }}
            />
            <Tabs.Screen
                // Name of the route to hide.
                name="Favorite"
                options={{
                    // This tab will no longer show up in the tab bar.
                    href: '/Navigations/BottomTabNavigation/Favorite',
                }}
            />
            <Tabs.Screen
                // Name of the route to hide.
                name="User"
                options={{
                    // This tab will no longer show up in the tab bar.
                    href: '/Navigations/BottomTabNavigation/User',
                }}
            />
            <Tabs.Screen
                // Name of the route to hide.
                name="History"
                options={{
                    // This tab will no longer show up in the tab bar.
                    href: '/Navigations/BottomTabNavigation/History',
                }}
            />

        </Tabs>
    );
}
