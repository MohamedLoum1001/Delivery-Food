import { useNavigation } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { Image } from 'react-native';

export default function Layout() {
    // const navigation = useNavigation();

    // const handleLogout = () => {
    //     console.log('Login Page');
    //     navigation.navigate('Login');
    // };
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
