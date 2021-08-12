import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
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

            <View >

                <View style={ Styles.container}>
                    <Pressable onPress={this.handlePressAgen} style={Styles.pressable}>
                        <Text style={Styles.textAgendado}>Agendados</Text>
                    </Pressable>

                    <Pressable onPress={this.handlePressSinAgen} style={Styles.pressable}>
                        <Text style={Styles.textAgendado}>Sin Agendada</Text>
                    </Pressable>
                </View>

                <View style={ Styles.container}>
                    <Pressable onPress={this.handlePressAgen} style={Styles.pressable}>
                        <Image 
                            style={ Styles.Imagen}
                            source={require('../../assets/agendado.png')} 
                        />
                    </Pressable>
                    <Pressable onPress={this.handlePressSinAgen} style={Styles.pressable}>
                        <Image 
                            style={ Styles.Imagen2}
                            source={require('../../assets/ingresar.jpg')} 
                        />
                    </Pressable>
                </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({

    container:{
        margin: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 3,
    },

    containerText:{
        // margin: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    textAgendado:{
        // marginBottom:-20,
        fontWeight: 'bold',
        fontSize:20,
        // backgroundColor:'gray',
    },

    Imagen:{
        
        marginTop:0,
        // marginLeft:-410,
        padding:0,
        width: 200,
        height: 200,
        resizeMode: 'contain',
        borderRadius: 10,
        marginBottom:-30
    },
    Imagen2:{
        
        marginTop:30,
        // marginLeft:-450,
        padding:0,
        width: 150,
        height: 150,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    pressable:{
        // marginTop:30,
    }
})

export default HomeScreen