import React, { Component } from 'react'
import { View, Text, StyleSheet, Pressable, FlatList, Image } from 'react-native'
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
                <Pressable
                    onPress={this.toogleDatos}>
                    <Image 
                        style={ Styles.imagen2}
                        source={require('../../assets/next.png')} 
                    />
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

                <View style={Styles.ContainerLista}>
                    <FlatList
                        style = {Styles.lista}
                        data={DatosAgendados}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

                    <Image 
                        style={ Styles.imagen}
                        source={require('../../assets/agendado.png')} 
                    />
                </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    
    ContainerLista:{
        flexDirection: "row",
        justifyContent: "space-between",
    },

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
        marginBottom:70,
    },
    borde:{
        fontWeight:'bold',
        borderBottomWidth: 2,
        color: "#3f5161",
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
        fontWeight:'bold',
        color: "#3f5161",
    },
    imagen:{   
        marginTop:30,
        marginRight:20,
        padding:0,
        width: 200,
        height: 200,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    imagen2:{   
        marginLeft:20,
        padding:0,
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
})


export default ListaAgendaScreen