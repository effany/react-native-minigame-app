import { Text, StyleSheet, Platform } from 'react-native';

function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

/* we can use maxWidth mix with width so that normally it'll take 300 px unless 300px is greater then 80%, thne the 80% will be active  */
/* platform api allows us to write platform specific code */
/* we can use Platform.select to select the platform specific code */
/* below you can see two ways of writing platform specific code */
/* when naming the file with .ios or .android, when importing the compoenent, we don't need to specify the extension */
const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24, 
        color: 'white', 
        textAlign: 'center', 
        // borderWidth: Platform.OS === 'android' ? 2 : 0, 
        // boderWidth: Platform.select({ios: 2, android: 0}),
        boderWidth: 2,
        borderColor: 'white', 
        padding: 12, 
        maxWidth: '80%',
        width: 300
    }
})


