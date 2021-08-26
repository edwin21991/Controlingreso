import React, {Component} from 'react'
import {StyleSheet,View, Text, Pressable, Image, Button} from 'react-native'

class FirmaScreen extends Component{

    // handlePressImage = () => {
    //     this.props.navigation.navigate('Imagen')
    // }

    render(){

        return(
            <View>
                <Text style={styles.text}>El valor total a cancelar es: 55$ </Text>

                <Text style={styles.text}>Firma </Text>
                
                {/* <Pressable 
                    style={styles.vista}
                    onPress={this.handlePressImage}>
                    <Image
                        style={styles.img}                        
                        title="Checkout" 
                        source={require('../../assets/lupa.jpg')}
                    />
                    </Pressable> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({

    text: {
        fontSize: 50,
        marginTop: 10,
        alignItems: 'center',
        textAlign: 'center',
    },

    // vista: {
    //     marginTop:50,
    //     backgroundColor:"red",
    //     width:"20%",
    //     height:"20%"
    // }, 
    // img :{
    //     marginLeft:"800",
    //     width:170,
    //     height:170,
    //     alignContent:'center'
    // }

})

export default FirmaScreen