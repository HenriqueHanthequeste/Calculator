import { StatusBar } from 'expo-status-bar';
import {useTheme} from 'styled-components/native';
import React from 'react';
import { View } from 'react-native';

import Switch from '../../Components/Switch';
import DetailsButton from '../../Components/DetailsButtton';

import { 
    Container,
    Header,
 } from './styles'

export default function Home({changeTheme}){
    const theme = useTheme();
    
    return (
        <Container>
            <StatusBar style={theme.statusbar}/>
            <Header>
                <DetailsButton />
                <Switch onPress={() => {changeTheme()}}/>
                <View style={{marginRight: 55}}></View>       
            </Header>
        </Container>
    );
}