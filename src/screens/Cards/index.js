import React from 'react';
import { Text, StatusBar, View} from 'react-native';
import Profile from '../../components/Profile';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../../components/CreditCard';

export default function Cards() {

    return(
        <View style={{alignItems:'center', width:'100%'}}>
             <StatusBar barStyle="dark-content"  backgroundColor={'#FFF'}/>
            <Profile/>
            <View style={{width:'100%', backgroundColor:'#FFF', height:250}}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingLeft:20, paddingRight:20}} horizontal={true}>
                    <Card bank="Inter" limit="8.000,00"/>
                    <Card bank="Inter" limit="8.000,00"/>
                    <Card bank="Inter" limit="8.000,00"/>
                </ScrollView>
            </View>
        </View>
       
    );
}