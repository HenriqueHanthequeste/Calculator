import { StatusBar } from 'expo-status-bar';
import {useTheme} from 'styled-components/native';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import Switch from '../../Components/Switch';
import DetailsButton from '../../Components/DetailsButtton';
import InfoModal from '../../Components/InfoModal';
import ButtonCalc from '../../Components/ButtonCalc';
import NumberButton from '../../Components/NumberButton';

import { 
    Container,
    Header,
    FormContainer,
    SuperiorOperatorsContainer,
    SideOperatorsContainer,
    ACText,
    NumbersContainer,
    EraseIcon,
    IconContainer,
    MathResultContainer,
    ResultText,
    EqualsIcon,
    ExpressionContainer,
    ExpressionText
 } from './styles'

export default function Home({changeTheme}){
    const theme = useTheme();
    const [modalVisible, setModalVisible] = useState(false);
    const [shouldErase, setShouldErase] = useState(false);
    const [mathResult, setMathResult] = useState('0');
    const [expression, setExpression] = useState('');

    const regexExpressions={
        global: /\W$/g,
        getLastValueWithCharacter: /\W[0-9]$/,
        removeCharacterOfLastValue: /^\W/,
        fullExpression: /([0-9]\W)/g,
        removeLastValue: /[\W0-9]$/g
    }
    
    let currentValue;

    function toogleModal(){
        setModalVisible(!modalVisible);
    }
    
    function handleEraseExpression(){
        setExpression('');
        setMathResult('0');

        setShouldErase(false);
    }

    function handleMathExpression(button){

        if(shouldErase){
            handleEraseExpression();
        }

        currentValue = expression;

        switch (button) {
            case '0':
                setExpression(currentValue + '0')

                break;

            case '1':
                setExpression(currentValue + '1')

                break;

            case '2':
                setExpression(currentValue + '2')   

                break;

            case '3':
                setExpression(currentValue + '3')
                
                break;

            case '4':
                setExpression(currentValue + '4')
                
                break;

            case '5':
                setExpression(currentValue + '5')
                
                break;

            case '6':
                setExpression(currentValue + '6')
                
                break;

            case '7':
                setExpression(currentValue + '7')
                
                break;

            case '8':
                setExpression(currentValue + '8')
                
                break;

            case '9':
                setExpression(currentValue + '9')
                
                break;

            case 'percent':
                if(expression == '') break;
                if(currentValue.match(regexExpressions.getLastValueWithCharacter) === null) break;

                var valueRegex = currentValue.match(regexExpressions.getLastValueWithCharacter)[0];

                var valueAfterRegex = valueRegex.replace(regexExpressions.removeCharacterOfLastValue, '');

                valueAfterRegex = valueAfterRegex / 100;

                currentValue = currentValue.match(regexExpressions.fullExpression).join('') + valueAfterRegex;
                
                setExpression(currentValue);
                break;

            case 'ac':
                handleEraseExpression();

                break;

            case 'divide':
                if(expression == '') break;

                if(regexExpressions.global.test(expression)){
                    setExpression(currentValue.replace(regexExpressions.global, '/'));
                } else {
                    setExpression(currentValue + '/')                
                }     
                          
                break;

            case 'multiply':
                if(expression == '') break;

                if(regexExpressions.global.test(expression)){
                    setExpression(currentValue.replace(regexExpressions.global, '*'));
                } else {
                    setExpression(currentValue + '*')                
                }      

                break;

            case 'minus':
                if(expression == '') break;

                if(regexExpressions.global.test(expression)){
                    setExpression(currentValue.replace(regexExpressions.global, '-'));
                } else {
                    setExpression(currentValue + '-')                
                }
                break;

            case 'plus':
                if(expression == '') break;

                if(regexExpressions.global.test(expression)){
                    setExpression(currentValue.replace(regexExpressions.global, '+'));
                } else {
                    setExpression(currentValue + '+')                
                }
                break;

            case 'equals':
                if(expression == '') break;

                if(regexExpressions.global.test(expression)){
                    currentValue = currentValue.replace(regexExpressions.global, '');

                    setMathResult(eval(currentValue));
                } else {
                    setMathResult(eval(expression));

                    setExpression('');
                }
                
                setShouldErase(true);
                break;

            case 'erase':
                if(expression == '') break;

                setExpression(expression.replace(regexExpressions.removeLastValue, ''))                
                break;
            
            case '.':
                if(expression == '') break;

                setExpression(currentValue + '.')   
            default:
                break;
        }
    }


    return (
        <Container>
            <StatusBar style={theme.statusbar}/>
            <Header>
                <DetailsButton onPress={() => toogleModal()}/>

                <Switch onPress={() => changeTheme()}/>

                <View style={{marginRight: 55}}></View>       
            </Header>

            <InfoModal 
                isVisible={modalVisible} 
                onBackdropPress={() => toogleModal()}
            />

            <View style={{flexDirection:'column-reverse', flex:1}}>
                <FormContainer>
                <View>
                    <SuperiorOperatorsContainer>
                        <IconContainer onPress={() => handleMathExpression('erase')}>
                            <EraseIcon name="md-backspace-outline" size={28}/>
                        </IconContainer>
                        <TouchableOpacity onPress={() => handleMathExpression('ac')}>
                            <ACText>AC</ACText>
                        </TouchableOpacity>                      
                        <ButtonCalc onPress={() => handleMathExpression('percent')} name="percent-outline" size={28}/>
                    </SuperiorOperatorsContainer>

                    <NumbersContainer>
                        <NumberButton onPress={() => handleMathExpression('7')}>7</NumberButton>
                        <NumberButton onPress={() => handleMathExpression('4')}>4</NumberButton>
                        <NumberButton onPress={() => handleMathExpression('1')}>1</NumberButton>
                        <NumberButton onPress={() =>{}}/>
                        <NumberButton onPress={() => handleMathExpression('8')}>8</NumberButton>
                        <NumberButton onPress={() => handleMathExpression('5')}>5</NumberButton>
                        <NumberButton onPress={() => handleMathExpression('2')}>2</NumberButton>
                        <NumberButton onPress={() => handleMathExpression('0')}>0</NumberButton>
                        <NumberButton onPress={() => handleMathExpression('9')}>9</NumberButton>
                        <NumberButton onPress={() => handleMathExpression('6')}>6</NumberButton>
                        <NumberButton onPress={() => handleMathExpression('3')}>3</NumberButton>
                        <NumberButton onPress={() => handleMathExpression('.')}>.</NumberButton>
                    </NumbersContainer>
                </View>

                    <View>
                        <SideOperatorsContainer>
                            <ButtonCalc onPress={() => handleMathExpression('divide')} name="division" size={28}/>
                            <ButtonCalc onPress={() => handleMathExpression('multiply')} name="window-close" size={28}/>
                            <ButtonCalc onPress={() => handleMathExpression('minus')} name="minus" size={28}/>
                            <ButtonCalc onPress={() => handleMathExpression('plus')}name="plus" size={28}/>
                            <ButtonCalc onPress={() => handleMathExpression('equals')}name="equal" size={28}/>
                        </SideOperatorsContainer>
                    </View>
                </FormContainer>

                <MathResultContainer>
                    <EqualsIcon name="equals" size={28} />
                    <ResultText>{mathResult}</ResultText>
                </MathResultContainer>

                <ExpressionContainer>
                    <ExpressionText>
                        {expression}
                    </ExpressionText>
                </ExpressionContainer>
            </View>
        </Container>
    );
}