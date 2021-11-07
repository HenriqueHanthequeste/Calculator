import React, {useState} from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';

import {
    Container,
    ButtonSwitch,
    Sun,
    Moon
} from './styled';

export default function Switch({onPress}){
    const [inDarkMode, setInDarkMode] = useState(false);
    const [dynamicRight, setDynamicRight] = useState(new Animated.Value(10));

    function handleClick(){
        setInDarkMode(!inDarkMode);
        Animated.timing(
            dynamicRight,
            {
                toValue: inDarkMode ? 10 : 55,
                duration: 200,
                useNativeDriver: false
            }
        ).start()
        onPress();
    }

    return (
        <TouchableWithoutFeedback onPress={() => {handleClick()}}>
            <Container >
                <ButtonSwitch style={{right: dynamicRight}}/>
                <Sun name="sun" size={24}/>
                <Moon name="moon" size={24}/>
            </Container>
        </TouchableWithoutFeedback>
    );
}