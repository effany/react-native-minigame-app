import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}


export default NumberContainer;

// Dimensions is used to get the dimensions of the device
// on ios window and screen are the same, but on android they are different. 
//On android, screen is the entire screen and window is the usable screen, which mean the screen minus the status bar

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create ({
    container: {
        borderWidth: 4, 
        borderColor: Colors.accent500,
        padding: deviceWidth < 400 ? 12 : 24, 
        margin: deviceWidth < 400 ? 12 : 24, 
        borderRadius: 8, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        fontFamily: 'open-sans-bold',
        color: Colors.accent500, 
        fontSize: deviceWidth < 400 ? 28 : 36, 
    }
})