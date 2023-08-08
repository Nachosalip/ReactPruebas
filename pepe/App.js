import React from 'react';
import { useState } from "react"
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, TextInput, View, ImageBackground, Button, Alert, TouchableOpacity, Pressable, Keyboard} from 'react-native';
import imagenLocal_react from'./assets/pipo.png';


export default function App() {
  const textInicial = "A nacho le gusta mucho la pizza..."
  const textCompleto = "A nacho le gusta mucho la pizza con mayonesa"
  const [nombre, handleNombreChange] = React.useState('');
  const [telefono, handleTelefonoChange] = React.useState('');
  const [email, handleMailChange] = React.useState('');
  const [clave, handleClaveChange] = React.useState('');
  const [count, setCount] = useState(0); 
  const [texto, setTexto] = useState('no estoy siendo apretado');
  const handlePress = () => {
    setCount(count + 1);
    {/*pusimos que te muestra count +1 porque sino va 1 numero mas atrasado*/ }
    console.log( "el contador esta en " + (count+1));
  };
  const alertar = ()=> { 
    Alert.alert('me apretaste');
    console.log("apretaste el button");
};
  const presionado = () => {
    setTexto('estas apretando el pressable');
    console.log("apretaste el touchable");
};
  const noPresionado = () => {
    setTexto('no estoy siendo apretado');
    console.log('el touchable dejo de ser apretado')
};
  
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titleText}>Ignacio</Text>
      <Text style={styles.titleText}> {textInicial} {'\n'}{'\n'}</Text>
      <Text style={styles.bodyText} numberOfLines={2}> {textCompleto} </Text>
      <ImageBackground source={imagenLocal_react} 
      resizeMode="cover"
      style={styles.backgroundImage}></ImageBackground>
      
      <TouchableOpacity style={styles.button} onPress={handlePress} >        
      <Text style={styles.bodyText}>Presioname</Text>      
      </TouchableOpacity>
      <Text style={styles.bodyText} numberOfLines={2}> {count} </Text>

      <Pressable style={styles.button} onPress={presionado} onPressOut={noPresionado}>  
      <Text style={styles.bodyText}> {texto} </Text> 
      </Pressable>
      {/* esto de abajo son los in*/}
      <TextInput        
      style={styles.input}        
      placeholder="ingrese nombre"  
      returnKeyType="next"
      onChangeText={handleNombreChange}/>
      <Text style={styles.bodyText} numberOfLines={2}> nombre:{nombre} </Text>
      <TextInput        
      style={styles.input}        
      placeholder="ingrese telefono"  
      keyboardType="phone-pad"
      returnKeyType="next"
      onChangeText={handleTelefonoChange}/>
      <Text style={styles.bodyText} numberOfLines={2}> telefono: {telefono} </Text>
      <TextInput        
      style={styles.input}        
      placeholder="ingrese email"  
      keyboardType="email-address"
      returnKeyType="next"
      onChangeText={handleMailChange}/>
      <Text style={styles.bodyText} numberOfLines={2}> email: {email} </Text>
      <TextInput        
      style={styles.input}        
      placeholder="ingrese clave"  
      returnKeyType="next"
      onChangeText={handleClaveChange}/>
      <Text style={styles.bodyText} numberOfLines={2}> clave: {clave} </Text>
      <Button style={styles.button} title="Soy un botón"    onPress={() => alertar} />
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
  input: {height: 100, borderWidth: 2, padding: 1, flex:1, },
  button: { flex:1,},
});
