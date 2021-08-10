import React, { Component } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
// import RadioButton from 'expo-radio-button'

class ListaAgendaScreen extends Component{

    toogleFavorite=()=>{
        this.props.navigation.navigate('Datos')
    }

    render(){

        // const [current, setCurrent] = useState("option 1")
    
        return(
            <View>
                
               {/* <RadioButton value="option 1"
                    containerStyle={{ marginBottom: 10 }}
                    selected={current} onSelected={(value) => setCurrent(value)} 
                    radioBackground="green" >
                    <Text>Option 1</Text>
                </RadioButton> */}
                <Pressable onPress={this.toogleFavorite}>

                    <Text style={Styles.texto} >Asesor: Edwin Sanchez</Text>
                    <Text style={Styles.texto} >Fecha de cita: 20-08-2021 08:00 am</Text>
                    <Text style={Styles.texto} >Descripción: Revision 12 o 16.000 kl <Text style= { Styles.buttonIr }> Ir</Text></Text>
                     
                </Pressable>

                <Pressable onPress={this.toogleFavorite}>

                    <Text style={Styles.texto} >Asesor: Hillary Sanchez</Text>
                    <Text style={Styles.texto} >Fecha de cita: 02-09-2021 12:00 am</Text>
                    <Text style={Styles.texto} >Descripción: Revision 12 o 16.000 kl <Text style= { Styles.buttonIr }> Ir</Text></Text>
                     
                </Pressable>

                <Pressable onPress={this.toogleFavorite}>

                    <Text style={Styles.texto} >Asesor: Leonardo Villegas</Text>
                    <Text style={Styles.texto} >Fecha de cita: 10-09-2021 02:00</Text>
                    <Text style={Styles.texto} >Descripción: Revision 18 o 24.000 kl <Text style= { Styles.buttonIr }> Ir</Text></Text>
                     
                </Pressable>

                <Pressable onPress={this.toogleFavorite}>

                    <Text style={Styles.texto} >Asesor: Edwin Sanchez</Text>
                    <Text style={Styles.texto} >Fecha de cita: 20-08-2021 02:00 pm</Text>
                    <Text style={Styles.texto} >Descripción: Revision 30 o 40.000 kl <Text style= { Styles.buttonIr }> Ir</Text></Text>
                     
                </Pressable>

                {/* <Text>Lista</Text>
                <Text>Lista</Text>
                <Text>Lista</Text>
                <Text>Lista</Text> */}

            </View>
        )
    }
}

const Styles = StyleSheet.create({
    texto:{
        fontWeight: 'bold',
        marginLeft: 30,
    },

    buttonIr:{
        backgroundColor:'#f0f',
        width:20,
        height:10,
        fontSize:15,

    }
})


export default ListaAgendaScreen