import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Cards from '../screens/Cards';
import AddTransaction from '../screens/AddTransaction';
import CustomTabBar from '../components/CustomTabBar';


const Stack = createStackNavigator();

export default function TransationsStack() {

    return( 
        <Stack.Navigator>
        <Stack.Screen name="AddTransaction" component={AddTransaction}  options={{
          headerShown:false
        }}/>
     {/*<Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    );
}