import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, FlatList, Pressable, Picker } from 'react-native'
import {DATA} from '../../res/DatosInventarioSugerencias'
import MyCheckbox from './MyCheckbox'

class InventarioSugerencias extends Component{

    render(){

        const Item = ({ detalle, cantidad }) => (

            <View style={Styles.containerTitulos}>
                <Text style={Styles.textoTitulo2}>{detalle}</Text>
                <MyCheckbox style={Styles.textoTitulo} />
                <MyCheckbox style={Styles.textoTitulo} />
                <MyCheckbox style={Styles.textoTitulo} />
                <Text style={Styles.textoTitulo3}>{cantidad}</Text>
            </View>
        )

        const renderItem = ({ item }) => (
            <Item 
                detalle={item.detalle} 
                cantidad={item.cantidad}        
            />
        )

        // const Item2 = ({ title, dato }) => (
        //     <View>
        //         <Text style={Styles.textoTitulo}>{title}</Text>
        //         <TextInput
        //             style = {Styles.textInput}
        //             placeholder={title}
        //             defaultValue= {dato} 
        //         />
        //     </View>
        // )

        // const renderItem2 = ({ item }) => (
        //     <Item2 
        //         title={item.title}
        //         dato={item.dato}
        //     />
        // );

       
          

        return(

            <View style={Styles.containerGenera}>

                <View style={Styles.container}>
                    <Text style={Styles.textoTitulo}>INVENTARIO DE INGRESO</Text>
                    <Text style={Styles.textoTitulo}>SERVICIOS SUGERIDOS</Text>
                    <Text></Text>
                </View>

                <View style={Styles.containerTitulos}>
                    <Text style={Styles.textoLista2}>DETALLE</Text>
                    <Text style={Styles.textoLista}>B</Text>
                    <Text style={Styles.textoLista}>R</Text>
                    <Text style={Styles.textoLista}>M</Text>
                    <Text style={Styles.textoLista3}>CANT</Text>
                    
                </View>
                <View style={Styles.containerInput}>

                    <FlatList
                        style = {Styles.lista}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

                    {/* <FlatList
                        style = {Styles.lista}
                        data={DATA2}
                        renderItem={renderItem2}
                        keyExtractor={item2 => item2.id}
                    /> */}

                </View>
                <View style={Styles.actualizar}>
                    <Pressable 
                        onPress={this.actualizar} 
                        style={Styles.pressable1}
                    >
                        <Text style={Styles.textoButtonActu}>Guardar</Text>
                    </Pressable>

                    <Pressable 
                        onPress={this.actualizar}
                        style={Styles.pressable2}
                    >
                        <Text style={Styles.textoButtonActu}>Autorizar</Text>
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
        marginBottom: 10,
        borderBottomWidth: 3,
    },
    textoTitulo:{
        fontWeight:'bold',
        marginLeft:30,
        marginTop:10,
        marginBottom:10,
    },
    textoTitulo2:{
        fontWeight:'bold',
        marginLeft:15,
        marginTop:10,
        marginBottom:10,
        width:100
    },
    textoTitulo3:{
        fontWeight:'bold',
        // marginLeft:30,
        marginTop:10,
        marginBottom:10,
        width:100
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
        marginBottom:-130
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
        // marginLeft:20,
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
        backgroundColor:'gray',
    },
    pressable2:{
        width:300,
        height:30,
        alignItems:'center',
        borderRadius:20,
        backgroundColor:'gray',
        marginRight:30
    },
    containerTitulos:{
        flexDirection: 'row',
        borderBottomWidth: 2,
    },
    textoLista:{
        marginLeft:56,
        fontWeight:'bold',
        marginBottom:10
    },
    textoLista2:{
        marginLeft:15,
        fontWeight:'bold',
        marginBottom:10
    },
    textoLista3:{
        marginLeft:32,
        fontWeight:'bold',
        marginBottom:10
    },
    containerGenera:{
        marginBottom:100
    }
})

export default InventarioSugerencias

