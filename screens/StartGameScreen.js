import { useState } from 'react';
import {
    TextInput, 
    View, 
    StyleSheet, 
    Alert, 
    useWindowDimensions, 
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const {width, height} = useWindowDimensions();

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('')
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!', 
                'Number has to be a number between 1 and 99', 
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return;
        }

        onPickNumber(chosenNumber);
    }

    const marginTopDistance = height < 380 ? 30 : 100;

    //keyboardAvoidingView is used to avoid the keyboard from covering the input field
    // we wrap scrollview with keyboardAvoidingView so that the view can move up when the keyboard is opened

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.rootContainer,{marginTop: marginTopDistance} ]}>
                    <Title>Guess My Number</Title>
                    <Card>
                        <InstructionText>Enter a Number</InstructionText>
                        <TextInput 
                            style={styles.numberInput} 
                            maxLength={2} 
                            keyboardType="number-pad" 
                            autoCapitalize='none' 
                            autoCorrect={false}
                            onChangeText={numberInputHandler}
                            value={enteredNumber}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>  
                                <PrimaryButton onPress={confirmInputHandler}>
                                    Confirm
                                </PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default StartGameScreen;

// it's not ideal to use the deviceHeight this way becaus ewhen the user change the orientation of the device, 
//the height noy changed since the code is only executed once
// it's better to use the useWindowDimensions hook to get the height of the device

//const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1, 
        //marginTop: deviceHeight < 400 ? 30 : 100, 
        alignItems: 'center'
    },
    
    numberInput: {
        height: 50, 
        width: 50,
        fontSize: 32, 
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold', 
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection:'row',
    },
    buttonContainer: {
        flex: 1
    }
});

/* elevation is only for android, it gives a shadow effect to the view */
/* shadow properties are only for ios, it gives a shadow effect to the view */
/* shadowRadius is the blur radius of the shadow */
/* maxLength in the textInput is used to limit the number of characters that can be entered */
/* keyboardType is used to specify the type of keyboard to be displayed */
/* justify content is used to align the children of the view along the main axis */
/* alignItems is used to align the children of the view along the cross axis */
/* flex : 1 allows the view to take up all the available space */