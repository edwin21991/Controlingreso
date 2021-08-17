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

                <View style={Styles.containerTitulos3}>
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
                        style={Styles.pressable2}
                    >
                         <Image 
                            source={require('../../assets/camara.png')} 
                            style={Styles.imagen2} 
                        />
                    </Pressable>
                    {/* <Pressable 
                        onPress={this.guardarInventarioIngreso} 
                        style={Styles.pressable3}
                    >
                         <Image 
                            source={require('../../assets/save.png')} 
                            style={Styles.imagen3} 
                        />
                    </Pressable> */}

                    <Pressable 
                        onPress={this.NuevoPedido}
                        style={Styles.pressable4}
                    >
                         <Image 
                            source={require('../../assets/add.png')} 
                            style={Styles.imagen4} 
                        />
                    </Pressable>
                    <Pressable 
                        onPress={this.guardarPedido}
                        style={Styles.pressable4}
                    >
                         <Image 
                            source={require('../../assets/next.png')} 
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
        color: '#3f5161',
        marginLeft:30,
        marginTop:10,
        marginBottom:10,
    },
    textoTitulo2:{
        color: '#3f5161',
        marginLeft:15,
        marginTop:10,
        marginBottom:10,
        width:100,
    },
    textoTitulo3:{
        color: '#3f5161',
        marginTop:10,
        marginBottom:10,
        width:100,
    },
    textoTitulo4:{
        color: '#3f5161',
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
        // marginTop:-150
    },
    textoButtonActu:{
        fontSize:20,
        color: 'white',
        fontWeight:'bold',
        marginBottom:10,
    },
    containerInput:{
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    lista:{
        // marginLeft:20,
        marginRight:20,
        width:180,
        height:168,
    },
    titulo:{
        fontWeight:'bold'
    },
    pressable1:{
        width:50,
        height:30,
        alignItems:'center',
        borderRadius:50,
        marginTop:3,
    },
    pressable2:{
        width:50,
        height:30,
        alignItems:'center',
        borderRadius:50,
        marginTop:3,
        marginRight:20,
    },
    pressable3:{
        width:50,
        height:30,
        borderRadius:20,
        marginRight:90,
        marginTop:3,
    },
    pressable4:{
        width:50,
        height:30,
        borderRadius:20,
        marginRight:30,
        marginTop:3,
    },
    containerTitulos:{
        flexDirection: 'row',
        borderBottomWidth: 1,
    },
    containerTitulos3:{
        flexDirection: 'row',
        borderBottomWidth: 2,
    },
    containerTitulos2:{
        flexDirection: 'row',
        justifyContent:'space-between',
        borderBottomWidth: 1,
        width:350,
    },
    textoLista:{
        color: '#3f5161',
        marginLeft:56,
        fontWeight:'bold',
        marginBottom:10
    },
    textoLista2:{
        color: '#3f5161',
        marginLeft:15,
        fontWeight:'bold',
        marginBottom:10
    },
    textoLista3:{
        color: '#3f5161',
        marginLeft:32,
        fontWeight:'bold',
        marginBottom:10
    },
    textoLista4:{
        color: '#3f5161',
        marginLeft:40,
        marginRight:145,
        fontWeight:'bold',
        marginBottom:10

    },
    containerGenera:{
        marginBottom:100
    },
    imagen:{
        marginTop:-5,
        width:35,
        height:35,
        resizeMode: 'contain',
    },
    imagen2:{
        marginTop:-5,
        width:40,
        height:40,
        resizeMode: 'contain',
    },
    imagen3:{
        width:30,
        height:30,
        resizeMode: 'contain',
    },
    imagen4:{
        width:30,
        height:30,
        resizeMode: 'contain',
    },
    imagen5:{
        width:30,
        height:30,
        resizeMode: 'contain',
    },
    
})

export default InventarioSugerencias

