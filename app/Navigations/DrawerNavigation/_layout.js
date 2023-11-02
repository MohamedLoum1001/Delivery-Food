// import { useNavigation } from 'expo-router';
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
                headerTitleAlign: 'center',
                // headerTintColor: '#f5f5f8'
                headerStyle:{
                    backgroundColor: '#f2f2f2',
                }
            }}
        >
            <Drawer.Screen
                name="Home"
                options={{
                    drawerLabel: "Home",
                    title: "Home",
                    drawerIcon: ({ size }) => (
                        <Image
                            source={require('../../../assets/icons/home.png')}
                            style={{ width: size, height: size, tintColor: 'white' }}
                        />
                    ),
                    // headerShown: false

                }}
            />
            <Drawer.Screen
                name="Favorite"
                options={{
                    drawerLabel: "Favorite",
                    title: "Favorite",
                    drawerIcon: ({ size }) => (
                        <Image
                            source={require('../../../assets/icons/heart.png')}
                            style={{ width: size, height: size, tintColor: 'white' }}
                        />
                    ),

                }}
            />
            <Drawer.Screen
                name="History"
                options={{
                    drawerLabel: "History",
                    title: "History",
                    drawerIcon: ({ size }) => (
                        <Image
                            source={require('../../../assets/icons/history.png')}
                            style={{ width: size, height: size, tintColor: 'white' }}
                        />
                    ),

                }}
            />
            <Drawer.Screen
                name="Profile"
                options={{
                    drawerLabel: "Profile",
                    title: "Profile",
                    drawerIcon: ({ size }) => (
                        <Image
                            source={require('../../../assets/Profile.png')}
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
                            source={require('../../../assets/panier.png')}
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
                            source={require('../../../assets/offer.png')}
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
                            source={require('../../../assets/privacy.png')}
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
                            source={require('../../../assets/security.png')}
                            style={{ width: size, height: size, tintColor: 'white' }}
                        />
                    ),
                }}
            />
        </Drawer>
    );
}
