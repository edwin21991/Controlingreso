import React, {Component, useState, useEffect} from 'react' 
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { Camera } from 'expo-camera';

export default function Camara () {
    
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
                
                <Camera 
                  style={styles.camera} 
                  type={tipo}
                >
                <View style = {styles.botonScanner}>
                    
                    <Button 
                        title="Voltear"
                        onPress = {() => {
                            const {front, back} = Camera.Constants.Type
                            const nuevoTipo = tipo == back ? front : back
                            setTipo(nuevoTipo)
                        }}                  
                    />    
                </View>       
            
                </Camera>
                </View>
        )}

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

    botonScanner:{
        backgroundColor:'#3f5161',
        width:100,
        height:35,
        marginTop:3,
        marginBottom:3,
        borderRadius:6,
        color: 'white',
        fontWeight:'bold',
        alignItems:'center',
        paddingTop:5
          
    },
    btnScanner: {
      flex:0.1,
      backgroundColor: 'red',

    }
  });
