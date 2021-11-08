
import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
    Container, 
    IconInformation,
 } from './styles';

export default function DetailsButton(){
    return (
        <TouchableOpacity>
            <Container>
                <IconInformation name="information-circle-outline" size={26} />
            </Container>
        </TouchableOpacity>
    );
}