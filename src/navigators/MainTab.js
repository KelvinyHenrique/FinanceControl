import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Cards from '../screens/Cards';



const Tab = createBottomTabNavigator();

export default function MainTab() {

    return(
        <Tab.Navigator>
            <Tab.Screen name="Home"  component={Home}/>
            <Tab.Screen name="Cards"  component={Cards}/>
            <Tab.Screen name="Home2"  component={Home}/>
        </Tab.Navigator>
    );
}