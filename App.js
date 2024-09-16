import { StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';
// in order to useFonts we need to npm install expo-font
import { useFonts } from 'expo-font';
// AppLoading is used to show a loading screen while the fonts are being loaded
import AppLoading from 'expo-app-loading';

import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber ] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0)
 
  // with usefonts, you can load fonts from the assets folder
  // the key is the name of the font and the value is the path to the font
  // useFonts returns an array of two values, the first is a boolean that tells us if the fonts are loaded or not
  // the second value is a function that we can call to reload the fonts
  // we can use the array destructuring to get the values
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false)
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds)
  } 

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
  }


  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500 ]} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.png')} 
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
        {screen}
        </SafeAreaView>
        
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25
  }
});

/* we use expo install expo-linear-gradient to install the linear gradient package */
/* leaner gradient takes an array of colors and a style object */
/* image background is used to set a background image */
/* you can get free images from unsplash.com */
/* reziseMode cover will make the image cover the entire screen without distorting the images */
/* imageStyle is used to style the image background */
/* SafeAreaView is used to make sure the content is not hidden by the status bar */