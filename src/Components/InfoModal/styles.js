import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons';


export const Container = styled.View`
    width: 100%;
    height: 55%;
    border-radius: 25px;

    align-items: center;

    background-color: ${props => props.theme.formbg};
`;

export const HeaderText = styled.Text`
    font-size: 18px;
    margin-top: 27px;

    font-weight: bold;
    color: ${props => props.theme.dark};
`;

export const DevContainer = styled.View`
    margin-top: 65px;

    justify-content: space-between;
    flex-direction:row;
`;

export const ProfileContainer = styled.View`
    align-items:center;
    justify-content: center;

    margin: 0px 30px 0px 30px; 
`;

export const ProfilePic = styled.Image`
    width: 55px;
    height: 55px;

    border-radius: 50px;
`;

export const SocialMediaAddress = styled.Text`
    margin-top: 15px;
    font-size: 18px;

    color: ${props => props.theme.dark};
`;

export const Subtitle = styled.Text`
    font-size: 12px;
    font-style: italic;
    color: ${props => props.theme.dark};
`;

export const Separator = styled.View`
    height: 140px;
    width: 1px;
    opacity: 50;

    background-color: ${props => props.theme.green};
`

export const CloseButton = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    margin-top: 40px;

    align-items: center;
    justify-content: center;

    border-radius: 50px;

    background-color: ${props => props.theme.green};
`;

export const CloseIcon = styled(Ionicons)`
    width: 30px;
    color: ${props => props.theme.white};
`
