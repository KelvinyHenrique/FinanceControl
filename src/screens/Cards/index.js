import React, {useState} from 'react';
import { Text, StatusBar, View, Modal, Platform } from 'react-native';
import Profile from '../../components/Profile';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../../components/CreditCard';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Cards() {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View style={{ alignItems: 'center', width: '100%' }}>
            <StatusBar barStyle="dark-content" backgroundColor={'#FFF'} />
            <Profile />
            <View style={{ width: '100%', backgroundColor: '#FFF', height: 250 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingLeft: 20, paddingRight: 20 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Card bank="Inter" limit="8.000,00" color="#FF6D00" />
                    <Card bank="Santander" limit="3.000,00" color="#cb0000" />
                    <Card bank="Pag" limit="4.000,00" color="#002c47" />
                </ScrollView>
            </View>
            <View>
              
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
               
            </View>
        </View>
    );
}