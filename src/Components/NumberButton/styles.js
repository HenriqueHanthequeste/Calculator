import styled from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity`
    width: 55px;
    height: 55px;

    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    font-size: 20px;
    color: ${props => props.theme.dark};
`;