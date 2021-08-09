import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
// import HomeStack from './homeStack'

class HomeScreen extends Component {

    handlePressAgen =()=>{
        this.props.navigation.navigate('Lista')
    }

    handlePressSinAgen=()=>{
        this.props.navigation.navigate('Scanner')
    }

    render(){
        return(

            <View style={ Styles.container}>
                
                <TouchableOpacity onPress={this.handlePressAgen}>
                    <Text style={Styles.textAgendado}>Agendados</Text>
                </TouchableOpacity>

                <Image 
                    style={ Styles.Imagen}
                    source={require('../../assets/agendado.png')} 
                />
                
                <TouchableOpacity onPress={this.handlePressSinAgen}>
                    <Text style={Styles.textAgendado}>Sin Agendada</Text>
                </TouchableOpacity>

                <Image 
                    style={ Styles.Imagen2}
                    source={require('../../assets/ingresar.jpg')} 
                />
                
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container:{
        margin: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    containerText:{
        margin: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    textAgendado:{
        marginBottom:-20
    },

    Imagen:{
        
        marginTop:0,
        marginLeft:-410,
        padding:0,
        width: 200,
        height: 200,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    Imagen2:{
        
        marginTop:30,
        marginLeft:-450,
        padding:0,
        width: 150,
        height: 150,
        resizeMode: 'contain',
        borderRadius: 10,
    }
})

export default HomeScreen