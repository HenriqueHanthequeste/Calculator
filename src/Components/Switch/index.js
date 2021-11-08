import React, {useState} from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';

import {
    Container,
    ButtonSwitch,
    IconSun,
    IconMoon
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
                duration: 250,
                useNativeDriver: false
            }
        ).start()
        onPress();
    }

    return (
        <TouchableWithoutFeedback onPress={() => {handleClick()}}>
            <Container >
                <ButtonSwitch style={{right: dynamicRight}}/>
                <IconSun name="sun" size={24}/>
                <IconMoon name="moon" size={24}/>
            </Container>
        </TouchableWithoutFeedback>
    );
}