import React, { Component } from 'react'
import { Button, Image, Text, View } from 'react-native'
export class Perfil extends Component {
    render() {
        return (
            <View>
                <Image source={{uri:'https://almeidajunior-prod1.s3.amazonaws.com/prod/uploads/news/5d7a7cbf6ad5d.jpg'}} style={{width: 100, height: 100}}></Image>
                <Text>Nome: {this.props.route.params.nome}</Text>
                <Text>Idade: {this.props.route.params.idade}</Text>
                <Text>Email: {this.props.route.params.email}</Text>
                <Button title="HOME" onPress={()=>{this.props.navigation.navigate('HOME')}}></Button>
            </View> 
        )
    }
}
export default Perfil