import styled from 'styled-components/native'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';


export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.mainbg};
`;

export const Header = styled.View`
    height: 50px;
    width: 100%;
    margin-left: 20px;
    margin-top: 30px;
    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const FormContainer = styled.View`
    height: 52%;
    width: 100%;

    border-top-left-radius: 25px;
    border-top-right-radius: 25px;

    flex-direction: row;

    background-color: ${props => props.theme.formbg};
`

export const SuperiorOperatorsContainer = styled.View`
    height: 45px;
    width: 260px;
    border-radius: 50px;

    padding: 7px 20px 0px 20px;
    margin-top: 40px;
    margin-left: 25px;

    flex-direction: row;
    justify-content: space-between;

    background-color: ${props => props.theme.buttonsbg};
`;

export const SideOperatorsContainer = styled.View`
    height: 298px;
    width: 45px;
    border-radius: 50px;

    margin-top: 40px;
    margin-left: 25px;

    align-items: center;
    justify-content: space-around;

    background-color: ${props => props.theme.buttonsbg};
`;

export const ACText = styled.Text`
    font-weight: bold;    
    font-size: 20px;

    color: ${props => props.theme.green};
`;


export const NumbersContainer =  styled.View`
    width: 250px;
    height: 240px;

    align-content: space-between;
    justify-content:space-between;

    margin-left: 35px;
    margin-top: 10px;
    flex-wrap: wrap;
`

export const IconContainer = styled.TouchableOpacity`
    
`

export const EraseIcon = styled(Ionicons)`
    color: ${props => props.theme.red};
`;

export const MathResultContainer = styled.View`
    width: 100%;
    height: 70px;
    padding-left: 40px;
    padding-right: 40px;
    
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
`;

export const ResultText = styled.Text`
    color: ${props => props.theme.dark};
    font-size:48px;
`;

export const EqualsIcon = styled(FontAwesome5)`
    color: ${props => props.theme.dark};

    margin-right: 10px;
`

export const ExpressionContainer = styled.View`
    width: 100%;
    height: 70px;
    padding-left: 40px;
    padding-right: 40px;

    align-items: flex-end;
    justify-content: center;
    
`

export const ExpressionText = styled.Text`
    font-size: 22px;
    color: ${props => props.theme.dark};

`