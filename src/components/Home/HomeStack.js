import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import Colors from '../../res/Colors'
import ListaAgendaScreen from '../Agendados/ListaAgentdaScreen'
import ScannerScreen from '../Scanner/ScannerScreen'
import DatosClienteVehiculo from '../Datos/DatosClienteVehiculo'
import InventarioSugerencias from '../InventarioIngreso/InventarioSugerencias'
import FirmaScreen from '../Despacho/FirmaScreen'

const Stack = createStackNavigator()

const HomeStack = () =>{

    return(

        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.blackPearl,
                    height:50
                },
                headerTintColor: Colors.white,
                headerTitleAlign: 'center',
                headerTitleStyle:{
                    marginBottom:20
                }
                                
            }}
        >
            
            <Stack.Screen name="ControlIngreso" component= { HomeScreen }/>
            <Stack.Screen name="Lista" component = { ListaAgendaScreen } />
            <Stack.Screen name="Scanner" component = { ScannerScreen } />
            <Stack.Screen name="Datos" component = { DatosClienteVehiculo } />
            <Stack.Screen name="InventarioSugerencias" component = { InventarioSugerencias } />
            <Stack.Screen name="FirmaScreen" component = { FirmaScreen } />
            
        </Stack.Navigator>
    )
}

export default HomeStack