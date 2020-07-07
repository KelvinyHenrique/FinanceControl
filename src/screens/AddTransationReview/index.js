import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar, TouchableHighlight } from 'react-native';
import styles from './styles';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import Backspace from '../../assets/Images/tag.svg';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddTransactionReview() {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(true);
    const [pressValue, setPressValue] = useState('');
    const [displayValue, setDisplayValue] = useState('');
    const [selectedDate, setSelectedDate] = useState('Today, 26 Apr 2019');

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

    function handleKeyPress(number) {
        setDisplayValue(displayValue + number);
    }

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <StatusBar barStyle="light-content" backgroundColor={'#FF5400'} />
            <View style={styles.boxTransaction}>
                <View style={styles.headerBoxContainer}>
                    <View style={styles.boxHeaderTop}>
                        <View style={styles.headerAddTransaction}>
                            <Text style={styles.TextAddTransaction}>Adicionar Transação</Text>
                            <Text style={styles.TextAddDespense}>Despesa</Text>
                        </View>
                        <TouchableOpacity style={styles.headerBoxCancelButtom}>
                            <Text style={styles.textCancel}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.boxValueKey}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ paddingTop: 22, }}>
                                <Text style={{ color: '#FFF', fontWeight: 'bold' }}>R$</Text>
                            </View>
                            <View style={{ marginLeft: 8, }}>
                                <Text style={styles.ValueTextAmmount}>{parseFloat(displayValue)}</Text>
                            </View>

                        </View>

                    </View>
                </View>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
            <View style={styles.keyboard}>
                <View style={styles.keyboardBox}>
                    <View style={styles.categoriesValues}>
                        <View style={{ width: '100%' }}>
                            <Text style={{color:'#CECECE', fontSize:15}}>Data da transação</Text>
                            <View style={styles.BoxTransactionDate}>
                                <TouchableOpacity style={{ justifyContent: 'center', width: '100%', height: '100%' }}>
                                    <Text style={{ fontSize: 17, fontWeight:'bold'}}>{selectedDate}</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                    <View style={styles.nextButton}>
                        <Text style={styles.nextButtomText}>Adicionar Transação</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}