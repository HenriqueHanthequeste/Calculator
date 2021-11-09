
import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
    Container, 
    IconInformation,
 } from './styles';

export default function DetailsButton({onPress}){
    return (
        <TouchableOpacity onPress={() => {onPress()}}>
            <Container>
                <IconInformation name="information-circle-outline" size={26} />
            </Container>
        </TouchableOpacity>
    );
}