import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, FlatList, Pressable, Image } from 'react-native'
import {DATA, DATA2} from '../../res/DatosVehiculoCliente'
import RNPickerSelect from 'react-native-picker-select';

class DatosClienteVehiculo extends Component{
    
    constructor(props) {
        super(props);

        this.inputRefs = {};

        this.state = {
            favColor: undefined,
            items: [
                {
                    label: 'Propietario',
                    value: 'propietario',
                },
                {
                    label: 'Conductor',
                    value: 'conductor',
                },
                {
                    label: 'Otro contacto',
                    value: 'contacto',
                },
            ]
        };
    }

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
                    <TextInput
                        style = {Styles.textInputKM}
                        placeholder="Ingrese el km actual"
                       
                    />

                    <View style={Styles.container2}>
                        <Text style={Styles.textoTitulo}>CONTACTOS</Text>
                        
                        <Pressable 
                            onPress={this.propietario} 
                            style={Styles.pressable3}
                        >
                            <Image 
                                source={require('../../assets/propietario.png')} 
                                style={Styles.imagen2} 
                            />
                        </Pressable>

                        <Pressable 
                            onPress={this.conductor} 
                            style={Styles.pressable3}
                        >
                            <Image 
                                source={require('../../assets/conductor.png')} 
                                style={Styles.imagen3} 
                            />
                        </Pressable>

                        <Pressable 
                            onPress={this.contacto} 
                            style={Styles.pressable3}
                        >
                            <Image 
                                source={require('../../assets/contacto.png')} 
                                style={Styles.imagen4} 
                            />
                        </Pressable>

                        {/* <RNPickerSelect
                            style={Styles.textoTitulo2}
                            placeholder={{
                                label: '',
                                value: null,
                            }}
                            items={this.state.items}
                            onValueChange={(value) => {
                                this.setState({
                                    favColor: value,
                                });
                            }}
                            onUpArrow={() => {
                                this.inputRefs.name.focus();
                            }}
                            onDownArrow={() => {
                                this.inputRefs.picker2.togglePicker();
                            }}
                            value={this.state.favColor}
                            ref={(el) => {
                                this.inputRefs.picker = el;
                            }}
                        /> */}
                    </View>
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
                        <Image 
                            source={require('../../assets/actualizar.png')} 
                            style={Styles.imagen} 
                        />
                    </Pressable>

                    <Pressable 
                        onPress={this.toogleInventarioSugerencias}
                        style={Styles.pressable2}
                    >
                        <Image 
                            source={require('../../assets/actualizar.png')} 
                            style={Styles.imagen} 
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
        margin: 10,
        borderBottomWidth: 3,
    },
    textoTitulo:{
        fontWeight:'bold',
        color: '#3f5161'
    },
    textoTitulo2:{
        fontWeight:'bold',
        color: '#3f5161',
        width:40,
    },
    textInput:{
        borderBottomWidth: 3,
        backgroundColor:'#3f5161',
        borderRadius:5,
        paddingLeft:5,
        color: 'white'
    },
    textInputKM:{
        borderWidth:2,
        borderColor: "#3f5161",
        borderRadius:5,
        color: 'white',
        marginBottom:5,
        paddingLeft:5,
        marginLeft:-70,
        height:25,
    },
    actualizar:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginLeft: 20,
        marginBottom:-170
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
    },
    pressable2:{
        width:300,
        height:30,
        alignItems:'center',
        borderRadius:20,
        marginRight:30
    },
    pressable3:{
        width:80,
        height:30,
        borderRadius:20,
        
    },
    imagen:{   
        width: 40,
        height: 40,
        resizeMode: 'contain',
        borderRadius: 10,
        marginTop: -5,
    },
    imagen2:{   
        width: 30,
        height: 30,
        resizeMode: 'contain',
        borderRadius: 10,
        marginLeft:20,
        marginTop: -5,
    },
    imagen3:{   
        width: 30,
        height: 30,
        resizeMode: 'contain',
        borderRadius: 10,
        marginLeft:15,
        marginTop: -4,
    },
    imagen4:{   
        width: 45,
        height: 45,
        resizeMode: 'contain',
        borderRadius: 10,
        marginTop: -11,
    },

    container2: {
        flexDirection: 'row',
        justifyContent:'space-between',
    },
})

export default DatosClienteVehiculo

// import React from 'react';
// import { Alert, Text, TextInput, StyleSheet, View } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';

// export default class DatosClienteVehiculo extends React.Component {
//     constructor(props) {
//         super(props);

//         this.inputRefs = {};

//         this.state = {
//             favColor: undefined,
//             items: [
//                 {
//                     label: 'Red',
//                     value: 'red',
//                 },
//                 {
//                     label: 'Orange',
//                     value: 'orange',
//                 },
//                 {
//                     label: 'Blue',
//                     value: 'blue',
//                 },
//             ]
//         };
//     }

//     render() {
//         return (
//             <View style={styles.container}>

//                 <View style={{ paddingVertical: 5 }} />

//                 <Text>What&rsquo;s your favorite color?</Text>
//                 <RNPickerSelect
//                     placeholder={{
//                         label: 'Select a color...',
//                         value: null,
//                     }}
//                     items={this.state.items}
//                     onValueChange={(value) => {
//                         this.setState({
//                             favColor: value,
//                         });
//                     }}
//                     onUpArrow={() => {
//                         this.inputRefs.name.focus();
//                     }}
//                     onDownArrow={() => {
//                         this.inputRefs.picker2.togglePicker();
//                     }}
//                     // style={{ ...pickerSelectStyles }}
//                     value={this.state.favColor}
//                     ref={(el) => {
//                         this.inputRefs.picker = el;
//                     }}
//                 />
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         paddingTop: 30,
//         backgroundColor: '#fff',
//         justifyContent: 'center',
//         paddingHorizontal: 10,
//     },
// });
