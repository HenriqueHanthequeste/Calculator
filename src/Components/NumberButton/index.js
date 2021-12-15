import React, { Children } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import {
    ButtonContainer,
    TextButton
} from './styles'

export default function NumberButton({children, onPress}){

    return (
        <ButtonContainer onPress={() => {onPress()}}>
            <TextButton>{children}</TextButton>
        </ButtonContainer>
    );
}