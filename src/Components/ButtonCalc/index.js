import React from 'react';
import { TouchableOpacity } from 'react-native';

import { OperatorIcon } from './styles';

export default function ButtonCalc({onPress, name, size}){

    return (
        <TouchableOpacity onPress={() => onPress()}>
            <OperatorIcon name={name} size={size} />
        </TouchableOpacity>
    );
}