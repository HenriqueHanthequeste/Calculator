import styled from 'styled-components/native'

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