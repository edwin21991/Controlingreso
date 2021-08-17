import React, { Component } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

class AgendaSearch extends Component {

    state={
        query:""
    }

    handleText = (query) =>{
        this.setState({query})
        if (this.props.onChange){
            this.props.onChange(query)
        }
    }

    render(){

        const { query } = this.state

        return(
            <View style={Styles.containerSearch}>
                <TextInput
                    style={Styles.textInput}
                    onChangeText={this.handleText}
                    value={query}
                    placeholder="Buscar por placa"
                    placeholderTextColor='#fff'
                />
            </View>
        )
    }

}

const Styles = StyleSheet.create({
    containerSearch:{
        backgroundColor: '#3f5161',
        borderBottomWidth: 3,
        margin:10,
    },
    textInput:{
        margin:5
    }
})

export default AgendaSearch