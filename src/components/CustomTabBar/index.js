import React from 'react';
import styled from 'styled-components';
import { StyleSheet, Text, View } from 'react-native';

const TabBar = styled.View`
    flexDirection:row;
    alignItems:center;
    justifyContent: space-around;
`;

const TabBarIcon = styled.TouchableHighlight`
    width:30%;
    justifyContent:center;
    alignItems:center;
    height:50px;
`;
const TabBarIconText = styled.Text``;
const TabBarAddIcon = styled.TouchableHighlight`
    width:100px;
    justifyContent:center;
    alignItems:center;
    height:50px;
    borderRadius:10px;
    marginTop:-50px;  
    backgroundColor:#FF4800;
`;

const styles = StyleSheet.create({
    onFocused: {
        color:'red'
    },
    notFocused: {
        color:'#000',
    }
})

function CustomTabBar({ state, descriptors, navigation }) {


    return (
        <TabBar>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                let label = route.name;
                if (options.tabBarLabel != undefined) {
                    label = options.tabBarLabel;
                } else if (options.title != undefined) {
                    label = options.title;
                }

                const handleTabPress = () => {
                    navigation.navigate(route.name);
                }

                const isFocused = state.index === index;
                

                if (route.name == 'AddTransaction') {
                    return (
                        <TabBarAddIcon key={index} onPress={handleTabPress}>
                            <Text style={[styles.notFocused, isFocused?styles.onFocused:null]}>{label}</Text>
                        </TabBarAddIcon>
                    );


                } else {
                    return (
                        <TabBarIcon key={index} onPress={handleTabPress}>
                            <Text  style={[styles.notFocused, isFocused?styles.onFocused:null]}>{label}</Text>
                        </TabBarIcon>
                    );
                }
            })}
        </TabBar>
    );
}

export default CustomTabBar;