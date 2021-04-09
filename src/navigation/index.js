import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import FirstScreen from '../screens/FirstScreen'
import Home from '../screens/Home'
import Search from '../screens/Search'

const Stack = createStackNavigator();

export default function Navigation() {

    return (

        <Stack.Navigator initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }}>

            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="FirstScreen" component={FirstScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
    );
}