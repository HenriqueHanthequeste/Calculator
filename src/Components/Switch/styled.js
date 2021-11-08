import styled from "styled-components/native";
import { Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    width: 110px;
    height: 45px;
    padding: 0px 20px 0px 20px;
    border-radius: 50px;
    align-self: center;

    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    background-color: ${props => props.theme.buttonsbg};
`
export const ButtonSwitch = styled(Animated.View)`
    width: 45px;
    height: 35px;
    position: absolute;
    top: 5px;
    right: 10px;
    z-index: -1;
    border-radius: 50px;

    background-color: ${props => props.theme.white};

`
export const IconSun = styled(Feather)`
    color: ${props => props.theme.mainbg === '#EEFAF4' ? '#1BC47D' : '#828282'};
`

export const IconMoon = styled(Feather)`
    color: ${props => props.theme.mainbg === '#212226' ? '#1BC47D' : '#828282'};
`