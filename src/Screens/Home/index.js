import { StatusBar } from 'expo-status-bar';
import {useTheme} from 'styled-components/native';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import Switch from '../../Components/Switch';
import DetailsButton from '../../Components/DetailsButtton';
import InfoModal from '../../Components/InfoModal';
import ButtonCalc from '../../Components/ButtonCalc';
import NumberButton from '../../Components/NumberButton';

import { 
    Container,
    Header,
    FormContainer,
    SuperiorOperatorsContainer,
    SideOperatorsContainer,
    ACText,
    NumbersContainer,
    EraseIcon,
    IconContainer
 } from './styles'

export default function Home({changeTheme}){
    const theme = useTheme();
    const [modalVisible, setModalVisible] = useState(false);

    function toogleModal(){
        setModalVisible(!modalVisible);
    }
    
    return (
        <Container>
            <StatusBar style={theme.statusbar}/>
            <Header>
                <DetailsButton onPress={() => toogleModal()}/>

                <Switch onPress={() => changeTheme()}/>

                <View style={{marginRight: 55}}></View>       
            </Header>

            <InfoModal 
                isVisible={modalVisible} 
                onBackdropPress={() => toogleModal()}
            />

            <FormContainer>
                <View>
                    <SuperiorOperatorsContainer>
                        <TouchableOpacity>
                            <ACText>AC</ACText>
                        </TouchableOpacity>
                        
                        <ButtonCalc name="plus-minus" size={28}/>
                        <ButtonCalc name="percent-outline" size={28}/>
                    </SuperiorOperatorsContainer>

                    <NumbersContainer>
                        <NumberButton>7</NumberButton>
                        <NumberButton>4</NumberButton>
                        <NumberButton>1</NumberButton>
                        <IconContainer>
                            <EraseIcon name="md-backspace-outline" size={30}/>
                        </IconContainer>
                        <NumberButton>8</NumberButton>
                        <NumberButton>5</NumberButton>
                        <NumberButton>2</NumberButton>
                        <NumberButton>0</NumberButton>
                        <NumberButton>9</NumberButton>
                        <NumberButton>6</NumberButton>
                        <NumberButton>3</NumberButton>
                        <NumberButton>.</NumberButton>


                    </NumbersContainer>
                </View>

                <View>
                    <SideOperatorsContainer>
                        <ButtonCalc name="division" size={28}/>
                        <ButtonCalc name="window-close" size={28}/>
                        <ButtonCalc name="minus" size={28}/>
                        <ButtonCalc name="plus" size={28}/>
                        <ButtonCalc name="equal" size={28}/>
                    </SideOperatorsContainer>
                </View>
            </FormContainer>
        </Container>
    );
}