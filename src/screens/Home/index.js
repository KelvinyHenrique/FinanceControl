import React, { useRef, useEffect } from 'react';
import { Text, View, StatusBar, Button, Animated, Dimensions } from 'react-native';
import styles from './styles';

const screenHeight = Math.round(Dimensions.get('window').height);

const thirty = (25 * screenHeight) / 100;

export default function Home() {

    const fadeAnim = useRef(new Animated.Value(screenHeight)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: thirty,
            duration: 1000,
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
            </Animated.View>
            <View style={styles.BoxTest}>
                <View style={styles.BoxHistory}></View>
            </View>

        </View>
    );
}