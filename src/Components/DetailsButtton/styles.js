import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
    justify-content: flex-end;
`;

export const IconInformation = styled(Ionicons)`
    color: ${props => props.theme.mainbg === '#EEFAF4' ? '#565B6A' : '#FFFFFF'};
`