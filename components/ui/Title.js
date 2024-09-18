import { Text, StyleSheet } from 'react-native';

function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

/* we can use maxWidth mix with width so that normally it'll take 300 px unless 300px is greater then 80%, thne the 80% will be active  */
const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24, 
        color: 'white', 
        textAlign: 'center', 
        borderWidth: 2, 
        borderColor: 'white', 
        padding: 12, 
        maxWidth: '80%',
        width: 300
    }
})


