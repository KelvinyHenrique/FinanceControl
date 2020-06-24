import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Cards from '../screens/Cards';
import AddTransaction from '../screens/AddTransaction';
import CustomTabBar from '../components/CustomTabBar';


const Tab = createBottomTabNavigator();

export default function MainTab() {

    return(
        <Tab.Navigator initialRouteName="Home" tabBar={(props)=><CustomTabBar {...props} />}>
            <Tab.Screen name="Home"  component={Home}/>
            <Tab.Screen name="AddTransaction"  component={AddTransaction}/>
            <Tab.Screen name="Cards"  component={Cards}/>
        </Tab.Navigator>
    );
}