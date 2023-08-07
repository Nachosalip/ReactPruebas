import React from 'react';
import { useState } from "react"
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, TextInput, View, ImageBackground, Button, Alert, TouchableOpacity} from 'react-native';
import imagenLocal_react from'./assets/pipo.png';


export default function App() {
  const textInicial = "A nacho le gusta mucho la pizza..."
  const textCompleto = "A nacho le gusta mucho la pizza con mayonesa"
  const [nombre, handleNombreChange] = React.useState('');
  const [count, setCount] = useState(0);  
  const handlePress = () => setCount(count + 1);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titleText}>Ignacio</Text>
      <Text style={styles.titleText}> {textInicial} {'\n'}{'\n'}</Text>
      <Text style={styles.bodyText} numberOfLines={2}> {textCompleto} </Text>
      <ImageBackground source={imagenLocal_react} 
      resizeMode="cover"
      style={styles.backgroundImage}></ImageBackground>
      
      <TouchableOpacity style={styles.button} onPress={handlePress}>        
      <Text style={styles.bodyText}>Presioname</Text>      
      </TouchableOpacity>
      <Text style={styles.bodyText} numberOfLines={2}> {count} </Text>

      <TextInput        
      style={styles.input}        
      placeholder="ingrese..."        
      onChangeText={handleNombreChange}/>
      <Text style={styles.bodyText} numberOfLines={2}> {nombre} </Text>
      <Button style={styles.button} title="Presioname"    onPress={() => Alert.alert('Me apretaste!')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
    ,
    
    
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  bodyText: {fontFamily: 'arial', flex:2,},  
  titleText: {fontFamily: 'arial', color: 'red', flex: 3,  
  fontSize: 20, fontWeight: 'bold',},
  input: {height: 100, borderWidth: 2, padding: 1, flex:1,},
  button: { flex:1,},
});
