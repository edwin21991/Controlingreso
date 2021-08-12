import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, FlatList, Pressable, Picker } from 'react-native'
import {DATA, DATA2} from '../../res/DatosVehiculoCliente'

class DatosClienteVehiculo extends Component{

    toogleInventarioSugerencias = () => {
        this.props.navigation.navigate('InventarioSugerencias')
    }

    render(){

        const Item = ({ title, dato }) => (
            <View>
                <Text style={Styles.textoTitulo}>{title}</Text>
                <TextInput
                    style = {Styles.textInput}
                    placeholder={title}
                    defaultValue= {dato}
                />
            </View>
        )

        const renderItem = ({ item }) => (
            <Item 
                title={item.title} 
                dato={item.dato}        
            />
        )

        const Item2 = ({ title, dato }) => (
            <View>
                <Text style={Styles.textoTitulo}>{title}</Text>
                <TextInput
                    style = {Styles.textInput}
                    placeholder={title}
                    defaultValue= {dato} 
                />
            </View>
        )

        const renderItem2 = ({ item }) => (
            <Item2 
                title={item.title}
                dato={item.dato}
            />
        );

        return(

            <View >

                <View style={Styles.container}>
                    <Text style={Styles.textoTitulo}>DATOS DEL VEHÍCULO</Text>
                    <Text style={Styles.textoTitulo}>CONTACTOS</Text>
                    <Text></Text>
                </View>
                
                <View style={Styles.containerInput}>

                    <FlatList
                        style = {Styles.lista}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

                    <FlatList
                        style = {Styles.lista}
                        data={DATA2}
                        renderItem={renderItem2}
                        keyExtractor={item2 => item2.id}
                    />

                </View>
                <View style={Styles.actualizar}>
                    <Pressable 
                        onPress={this.toogleInventarioSugerencias} 
                        style={Styles.pressable1}
                    >
                        <Text style={Styles.textoButtonActu}>Actualizar</Text>
                    </Pressable>

                    <Pressable 
                        onPress={this.toogleInventarioSugerencias}
                        style={Styles.pressable2}
                    >
                        <Text style={Styles.textoButtonActu}>Actualizar</Text>
                    </Pressable>
                </View>
            </View>   
        )
    }
}

const Styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        justifyContent:'space-between',
        margin: 10,
        borderBottomWidth: 3,
    },
    textoTitulo:{
        fontWeight:'bold',
    },
    textInput:{
        borderBottomWidth: 3,
        backgroundColor: 'gray',
        borderRadius:5,
        paddingLeft:5,
        color: 'white'
    },
    actualizar:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginLeft: 20,
        marginBottom:-150
    },
    textoButtonActu:{
        fontSize:20,
        color: 'white',
        fontWeight:'bold',
        marginBottom:10,
       
    },
    containerInput:{
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    lista:{
        marginLeft:20,
        marginRight:20,
        width:180
    },
    titulo:{
        fontWeight:'bold'
    },
    pressable1:{
        width:300,
        height:30,
        alignItems:'center',
        borderRadius:20,
        // marginLeft:20,
        backgroundColor:'gray',
    },
    pressable2:{
        width:300,
        height:30,
        alignItems:'center',
        borderRadius:20,
        backgroundColor:'gray',
        marginRight:30
    }
})

export default DatosClienteVehiculo

