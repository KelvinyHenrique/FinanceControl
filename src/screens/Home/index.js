import React, { useRef, useEffect } from 'react';
import { Text, View, StatusBar, Button, Animated, Dimensions, Easing, Image, TouchableHighlight, ScrollView } from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell, faWallet, faMoneyBill, faBarcode, faSearchDollar } from '@fortawesome/free-solid-svg-icons'
import profileImage from '../../assets/Images/profile.jpg';

const screenHeight = Math.round(Dimensions.get('window').height);

const thirty = (30 * screenHeight) / 100;

export default function Home() {

    const fadeAnim = useRef(new Animated.Value(screenHeight)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: thirty,
            duration: 1500,
            easing: Easing.bounce,
            useNativeDriver: false
        }).start();
    };
    useEffect(() => {
        fadeIn();
    }, []);

    return (
        <View style={styles.BoxContainerHome}>
            <StatusBar barStyle="light-content" backgroundColor={'#FF5400'} />
            <Animated.View style={[styles.BoxHeader, { height: fadeAnim }]}>
                <View style={styles.BoxMenu}>
                    <View style={styles.avaliableBalance}>
                        <Text style={styles.balanceText}>R$5.598,50</Text>
                        <Text style={styles.balanceSubtitle}>Valor Disponível</Text>
                    </View>
                    <View style={styles.profileOptions}>
                        <FontAwesomeIcon icon={faBell} size={25} color={'#FFF'} />
                        <Image source={profileImage} style={styles.ProfileImage} />
                    </View>
                </View>
                <View style={styles.scrollAlignment} >
                    <TouchableHighlight style={{alignItems:'center', justifyContent:'center'}} onPress={() => {alert('Clickou')}} underlayColor='#FF5400'>
                        <View style={styles.boxButtonHeader}>
                            <View style={styles.iconsHomeHeader}>
                                <FontAwesomeIcon icon={faWallet} size={20} color={'#FF5400'} />
                            </View>
                            <Text style={{color:'#FFF', fontWeight:'bold', marginTop:5}}>Pagar</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={{alignItems:'center', justifyContent:'center', padding:0}} onPress={() => {alert('Clickou')}} underlayColor='#FF5400'>
                        <View style={styles.boxButtonHeader}>
                            <View style={styles.iconsHomeHeader}>
                                <FontAwesomeIcon icon={faMoneyBill} size={27} color={'#FF5400'} />
                            </View>
                            <Text style={{color:'#FFF', fontWeight:'bold', marginTop:5}}>Receber</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={{alignItems:'center', justifyContent:'center', padding:0}} onPress={() => {alert('Clickou')}} underlayColor='#FF5400'>
                        <View style={styles.boxButtonHeader}>
                            <View style={styles.iconsHomeHeader}>
                                <FontAwesomeIcon icon={faBarcode} size={25} color={'#FF5400'} />
                            </View>
                            <Text style={{color:'#FFF', fontWeight:'bold', marginTop:5}}>Contas</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={{alignItems:'center', justifyContent:'center', padding:0}} onPress={() => {alert('Clickou')}} underlayColor='#FF5400'>
                        <View style={styles.boxButtonHeader}>
                            <View style={styles.iconsHomeHeader}>
                                <FontAwesomeIcon icon={faSearchDollar} size={20} color={'#FF5400'} />
                            </View>
                            <Text style={{color:'#FFF', fontWeight:'bold', marginTop:5}}>Gastos</Text>
                        </View>
                    </TouchableHighlight>
                </View>

            </Animated.View>
            <View style={styles.BoxBottom}>
                <View style={styles.BoxHistory}></View>
            </View>

        </View>
    );
}