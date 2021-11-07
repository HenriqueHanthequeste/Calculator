import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useTheme} from 'styled-components/native';

import Switch from '../../Components/Switch';
import { Container } from './styles'

export default function Home({changeTheme}){
    const theme = useTheme();

    return (
        <Container>
            <StatusBar style={theme.statusbar}/>
            <Switch onPress={() => {changeTheme()}}/>            
        </Container>
    );
}