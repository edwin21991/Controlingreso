import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import Colors from '../../res/Colors'
import ListaAgendaScreen from '../Agendados/ListaAgentdaScreen'
import ScannerScreen from '../Scanner/ScannerScreen'
import DatosClienteVehiculo from '../Datos/DatosClienteVehiculo'

const Stack = createStackNavigator()

const HomeStack = () =>{

    return(

        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.blackPearl
                },
                headerTintColor: Colors.white,
                headerTitleAlign: 'center'
            }}
        >
            
            <Stack.Screen name="Control de Ingreso" component= { HomeScreen }/>
            <Stack.Screen name="Lista" component = { ListaAgendaScreen } />
            <Stack.Screen name="Scanner" component = { ScannerScreen } />
            <Stack.Screen name="Datos" component = { DatosClienteVehiculo } />

        </Stack.Navigator>
    )
}

export default HomeStack