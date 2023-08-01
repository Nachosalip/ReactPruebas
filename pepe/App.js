import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const imagenLocal_react= require('./assets/pipo.png');
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ignacio</Text>
      <StatusBar style="auto" />
      <ImageBackground source={imagenLocal_react} 
      resizeMode="cover"
      style={styles.backgroundImage}>



      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
});
