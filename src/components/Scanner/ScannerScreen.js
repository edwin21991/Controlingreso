import React, {Component} from 'react' 
import { StyleSheet, Text, View, Pressable } from 'react-native';

class ScannerScreen extends Component{

  toogleInventarioSugerencias = () => {
    this.props.navigation.navigate('Datos')
  }
    render(){

        return(
            <View>
              <Pressable
                onPress={this.toogleInventarioSugerencias} 
              >
               <Text>scanner</Text>
              </Pressable>
            </View>
        )
    }
}

export default ScannerScreen

