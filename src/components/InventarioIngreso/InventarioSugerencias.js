import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, FlatList, Pressable} from 'react-native'
import {DATA, DATA2} from '../../res/DatosInventarioSugerencias'
import MyCheckbox from './MyCheckbox'

class InventarioSugerencias extends Component{

    guardarPedido =()=>{
        this.props.navigation.navigate('FirmaScreen')
    }

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

        const Item2 = ({ detalle, costo }) => (
            <View style={Styles.containerTitulos2}>
                <Text style={Styles.textoTitulo4}>{detalle}</Text>
                <Text style={Styles.textoTitulo4}>{costo}</Text>
            </View>
        )

        const renderItem2 = ({ item }) => (
            <Item2 
                detalle={item.detalle}
                costo={item.costo}
            />
        );

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
                    <Text style={Styles.textoLista4}>DETALLE</Text>   
                    <Text style={Styles.textoLista4}>PRECIO</Text>       
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
                        onPress={this.Observaciones}
                        style={Styles.pressable1}
                    >
                        <Image 
                            source={require('../../assets/observacion.png')} 
                            style={Styles.imagen} 
                        />

                    </Pressable>
                    <Pressable 
                        onPress={this.camara} 
                        style={Styles.pressable1}
                    >
                         <Image 
                            source={require('../../assets/camara.png')} 
                            style={Styles.imagen2} 
                        />
                    </Pressable>
                    <Pressable 
                        onPress={this.guardarInventarioIngreso} 
                        style={Styles.pressable1}
                    >
                         <Image 
                            source={require('../../assets/save.png')} 
                            style={Styles.imagen3} 
                        />
                    </Pressable>

                    <Pressable 
                        onPress={this.NuevoPedido}
                        style={Styles.pressable2}
                    >
                         <Image 
                            source={require('../../assets/add.png')} 
                            style={Styles.imagen4} 
                        />
                    </Pressable>
                    <Pressable 
                        onPress={this.guardarPedido}
                        style={Styles.pressable2}
                    >
                         <Image 
                            source={require('../../assets/save.png')} 
                            style={Styles.imagen5}
                        />
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
        width:100,
    },
    textoTitulo3:{
        fontWeight:'bold',
        // marginLeft:30,
        marginTop:10,
        marginBottom:10,
        width:100,
    },
    textoTitulo4:{
        fontWeight:'bold',
        marginLeft:15,
        marginRight:30,
        marginTop:10,
        marginBottom:10,
        width:200,
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
        marginTop:-130
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
        width:180,
    },
    titulo:{
        fontWeight:'bold'
    },
    pressable1:{
        width:50,
        height:30,
        alignItems:'center',
        borderRadius:20,
        // backgroundColor:'gray',
    },
    pressable2:{
        width:50,
        height:30,
        alignItems:'center',
        borderRadius:20,
        marginRight:30,
    },
    containerTitulos:{
        flexDirection: 'row',
        borderBottomWidth: 2,
        // width:350,
    },
    containerTitulos2:{
        flexDirection: 'row',
        justifyContent:'space-between',
        borderBottomWidth: 2,
        width:350,
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
    textoLista4:{
        marginLeft:40,
        marginRight:145,
        fontWeight:'bold',
        marginBottom:10

    },
    containerGenera:{
        marginBottom:100
    },
    imagen:{
        marginTop:-113,
        width:35,
        resizeMode: 'contain',
    },
    imagen2:{
        marginTop:-80,
        width:40,
        resizeMode: 'contain',
        marginRight:60
    },
    imagen3:{
        marginTop:-110,
        width:30,
        resizeMode: 'contain',
        marginRight:60
    },
    imagen4:{
        marginTop:-174,
        width:30,
        resizeMode: 'contain',
    },
    imagen5:{
        marginTop:-410,
        width:100,
        resizeMode: 'contain',
    },
})

export default InventarioSugerencias

