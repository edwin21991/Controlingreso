
import React, {Component, useState, useEffect} from 'react' 
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
// import { Camera } from 'expo-camera';
import Camara from './Camara'

class ScannerScreen extends Component {

  toogleDatos=()=>{
    this.props.navigation.navigate('Datos')
  }

  render(){

    return(

        <View style={styles.container}>
            
            <Camara/>
            
            <View style={styles.containerBoton}> 
              <Pressable
                onPress={this.toogleDatos}
              >
                <Text style={styles.botonScanner}>Scanner</Text>
              </Pressable>
            </View>

        </View>
    )}
}
        
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    botonScanner:{
      backgroundColor:'#3f5161',
      width:100,
      height:25,
      marginTop:3,
      marginBottom:3,
      borderRadius:6,
      color: 'white',
      fontWeight:'bold',
      alignItems:'center',
      paddingLeft:18,
      paddingTop:2
    },
    containerBoton:{
      alignItems:'center'
    }
});

export default ScannerScreen

//   import React, {Component, useState, useEffect} from 'react' 
// import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
// import { Camera } from 'expo-camera';

// export default function ScannerScreen () {
    
//         const [permisos, setPermisos] = useState(null);
//         const [tipo, setTipo] = useState(Camera.Constants.Type.back);

//         const getPermisos = async () => {
//           const { status } = await Camera.requestPermissionsAsync()
//           setPermisos(status == 'granted')
//           console.log(status);
//         }

//         useEffect(()=>{
//           getPermisos()
//         })

//         if (permisos == null) {
//           return <View><Text>Esperando permisos...</Text></View>
//         }
//         if (permisos == false) {
//           return <View><Text>No fueron otorgados los permisos</Text></View>
//         }
//         return(

//             <View style={styles.container}>
                
//                 <Camera 
//                   style={styles.camera} 
//                   type={tipo}
//                 >
//                   <Button 
//                     style = {styles.btn}
//                     title="Voltear"
//                     onPress = {() => {
//                       const {front, back} = Camera.Constants.Type
//                       const nuevoTipo = tipo == back ? front : back
//                       setTipo(nuevoTipo)
//                     }}                  
//                 />            
            
//                 </Camera>
//                 </View>
//         )}

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     },
//     camera: {
//       flex: 1,
//     },
//     text: {
//       fontSize: 18,
//       color: 'white',
//     },
//     btn: {
//       flex:0.1,
//       marginTop: 80,
//       width:20, 
//       backgroundColor: 'red',
//     },
//     btnScanner: {
//       flex:0.1,
//       backgroundColor: 'red',

//     }
//   });







