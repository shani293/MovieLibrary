import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import FirstScreen from '../screens/FirstScreen'
import Home from '../screens/Home'
import Search from '../screens/Search'
import SearchResults from '../screens/SearchResults'
import MovieDetail from '../screens/MovieDetail'
import Trailer from '../screens/Trailer'
import ShareTrailer from '../screens/ShareTrailer'
import ShareMovieDetail from '../screens/ShareMovieDetail';

const Stack = createStackNavigator();

export default function Navigation() {

    return (

        <Stack.Navigator initialRouteName='FirstScreen'
            screenOptions={{
                headerShown: false
            }}>

            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="FirstScreen" component={FirstScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="SearchResults" component={SearchResults} />
            <Stack.Screen name="MovieDetail" component={MovieDetail} />
            <Stack.Screen name="Trailer" component={Trailer} />
            <Stack.Screen name="ShareTrailer" component={ShareTrailer} />
            <Stack.Screen name="ShareMovieDetail" component={ShareMovieDetail} />
        </Stack.Navigator>
    );
}