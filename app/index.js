import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet} from 'react-native';
import First from "./First/First";
import Login from "./Login/SignIn";
import SignUp from "./Login/SignUp";
import Home from "./Navigations/BottomTabNavigation/Home";


const Stack = createStackNavigator();

export default function Page() {
  return (
    <Stack.Navigator style={styles.container}>
      <Stack.Screen name="First" component={First} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={SignUp} options={{ headerShown: false }} />
    </Stack.Navigator>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
