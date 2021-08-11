import React, { Component } from 'react'
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native'
import AgendaSearch from './AgendaSearch'
import DatosAgendados from '../../res/Agendados'
import colors from '../../res/Colors'

class ListaAgendaScreen extends Component{

    toogleDatos=()=>{
        this.props.navigation.navigate('Datos')
    }

    render(){

        const Item = ({ asesor, fechaCita, Descripcion }) => (
            <View>
                <Text style={Styles.textoCita}>Asesor: {asesor}</Text>
                <Text style={Styles.textoCita}>Fecha de cita: {fechaCita}</Text>
                <Text style={Styles.borde}>
                    Descripción: {Descripcion}
                    <Pressable onPress={this.toogleDatos}>
                        <Text style={Styles.ButtonIr}>IR</Text> 
                    </Pressable>
                </Text>
            </View>
        )

        const renderItem = ({ item }) => (
            <Item 
                asesor={item.asesor}
                fechaCita={item.fechaCita} 
                Descripcion={item.Descripcion} 
            />
        )
    
        return(
            <View>
                
                <AgendaSearch onChange={this.handleSearch}/>  

                    <FlatList
                        style = {Styles.lista}
                        data={DatosAgendados}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

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

    },
    lista:{
        marginLeft:20,
        marginRight:20,
        width:380,
        marginBottom:70
    },
    borde:{
        fontWeight:'bold',
        borderBottomWidth: 2,
    },
    ButtonIr:{
        marginLeft:20,
        backgroundColor: 'green',
        borderRadius:10,
        color:'white',
        padding:2,
        fontWeight: 'bold',
       
    },
    textoCita:{
        fontWeight:'bold'
    }
})


export default ListaAgendaScreen