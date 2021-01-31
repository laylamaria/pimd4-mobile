import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
export class Sobre extends Component {
    render() {
        return (
            <View>
               <Text> Me chamo Layla Maria!</Text> 
               <Button title="HOME" onPress={()=>{this.props.navigation.navigate('HOME')}}></Button>
            </View>
        )
    }
}
export default Sobre