import React, {Component, useState, useEffect} from 'react' 
import { StyleSheet, Text, View, TouchableOpacity, Button, Pressable } from 'react-native';
import { Camera } from 'expo-camera';
import { Constants } from 'expo-constants'
import { StackNavigator } from 'react-navigation'
import {DatosClienteVehiculo} from '../Datos/DatosClienteVehiculo'

export default function ScannerScreen () {



    
        const [permisos, setPermisos] = useState(null);
        const [tipo, setTipo] = useState(Camera.Constants.Type.back);

        const getPermisos = async () => {
          const { status } = await Camera.requestPermissionsAsync()
          setPermisos(status == 'granted')
          console.log(status);
        }

        useEffect(()=>{
          getPermisos()
        })

        if (permisos == null) {
          return <View><Text>Esperando permisos...</Text></View>
        }
        if (permisos == false) {
          return <View><Text>No fueron otorgados los permisos</Text></View>
        }
        return(    
            <View style={styles.container}>
                <Camera style={styles.camera} type={tipo}>
                  <Button style = {styles.btn}
                  title="Voltear"
                  onPress = {() => {
                    const {front, back} = Camera.Constants.Type
                    const nuevoTipo = tipo == back ? front : back
                    setTipo(nuevoTipo)
                  }}                  
                  />      
                  <Button
                    title="Escanear Documento"                   
                    onPress={toogleDatosVehiculoCliente = () =>{
                      this.props.navigation.navigate('Datos')
                    }}

                    />
                    
                   
                                
            
                </Camera>
            </View>
        )
    }


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
    btn: {
      flex:0.1,
      marginTop: 80,
      width:20, 
      backgroundColor: 'red',
    },
  });

