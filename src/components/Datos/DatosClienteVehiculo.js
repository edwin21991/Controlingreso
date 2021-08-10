import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, FlatList, Pressable } from 'react-native'

const DATA = [
    {
        id: '1',
        title: 'PLACA',
        dato: "XSS12T"
    },
    {
        id: '2',
        title: 'MARCA',
        dato: "XSS12T"
    },
    {
        id: '3',
        title: 'MODELO',
        dato: "XSS12T"
    },
    {
        id: '4',
        title: 'AÑO',
        dato: "XSS12T"
    },
    {
        id: '5',
        title: 'COLOR',
        dato: "XSS12T"
    },
    {
        id: '6',
        title: 'VRN',
        dato: "XSS12T"
    },
    {
        id: '7',
        title: 'KM',
        dato: "XSS12T"
    },
    {
        id: '8',
        title: 'METODO DE PAGO',
        dato: "XSS12T"
    },
];

class DatosClienteVehiculo extends Component{

    render(){

        const Item = ({ title }) => (
            <View>
                <Text>{title}</Text>
                <TextInput
                    style = {Styles.textInput}
                    placeholder='Placa'
                    defaultValue= 'placa' //{DATA.dato}
                />
            </View>
        )

        const renderItem = ({ item }) => (
            <Item title={item.title} />
        );
        
        actualizar =()=>{

        }

        return(

            <View >

                <View style={Styles.container}>
                    <Text>DATOS DEL VEHÍCULO</Text>
                    <Text>DATOS DEL CLIENTE</Text>
                    <Text></Text>
                </View>
                
                <View style={Styles.containerInput}>

                    <FlatList
                        style = {Styles.lista}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                    <View style={Styles.actualizar}>
                        <Pressable onPress={this.actualizar}><Text style={Styles.textoButtonActu}>Actualizar</Text></Pressable>
                    </View>
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
    textInput:{
        borderBottomWidth: 3,
        backgroundColor: 'gray',
        borderRadius:5,
        paddingLeft:5,
    },
    actualizar:{
        backgroundColor:'blue',
        alignItems:'center',
        width:300,
        height:20,
        marginLeft: 20,
        marginTop: 20,
        borderRadius:20,
        
    },
    textoButtonActu:{
        fontSize:20,
        color: 'white',
        fontWeight:'bold',
        paddingTop:-5,
        
    },
    containerInput:{
        marginBottom: 170
    },
    lista:{
        marginLeft:20,
        width:300
    },
    titulo:{
        fontWeight:'bold'
    }
})

export default DatosClienteVehiculo

