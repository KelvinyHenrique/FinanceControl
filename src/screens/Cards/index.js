import React, { useState } from 'react';
import { Text, StatusBar, View, Modal, Platform, TextInput, ScrollView } from 'react-native';
import Profile from '../../components/Profile';
import Card from '../../components/CreditCard';
import styles from './styles';
import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import BoxCategories from '../../components/BoxCategories';


export default function Cards() {
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

            <ScrollView horizontal={false} contentContainerStyle={styles.scrollAlignment}>
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TextInput style={styles.DateInit} placeholder="25 Junho, 2020" />
                    <TextInput style={styles.DateInit} placeholder="25 Setembro, 2020" />
                </View>
                <View style={styles.Chart}>
                    <AnimatedGaugeProgress
                        style={{ alignItems: 'center' }}
                        size={300}
                        width={14}
                        fill={20}
                        rotation={90}
                        cropDegree={190}
                        tintColor="#FF4800"
                        delay={0}
                        backgroundColor="#FFB600"
                        stroke={[2, 2]} //For a equaly dashed line
                        strokeCap="circle" >
                        <View style={{ width: '50%', height: '30%', position: 'absolute', marginTop: 35, alignItems: 'center' }}>
                            <FontAwesomeIcon icon={faWallet} size={40} color="#FF4800" />
                            <Text style={styles.AmountSpend}>Valor Gasto</Text>
                            <Text style={styles.Amount}>3.480,00</Text>
                        </View>
                    </AnimatedGaugeProgress>
                </View>
                <View style={{width:'100%', height:700}}>
                    <BoxCategories name="Transporte" progress="50%" />
                </View>
            </ScrollView>
        </View>
    );
}