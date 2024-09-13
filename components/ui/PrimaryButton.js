import {View, Text, Pressable, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

function PrimaryButton({children, onPress }) {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] :styles.buttonInnerContainer} 
                onPress={onPress} 
                android_ripple={{color: Colors.primary600}}
            >
               <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer : {
        borderRaduis: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer :{
        backgroundColor: Colors.primary500,
        paddingVertical: 8, 
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75, 
    }

});

/* when using textAlign, we need to put it in the text style and not in the view style */
/* pressable is used directly to the text instead of the view to make the ripplpe effect visible and applid to the text */
/* for style object, you can pass an array of styles, the last style will override the previous styles */