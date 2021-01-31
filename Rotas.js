import React from "react"; 
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./atividade4/components/Home";
import Cadastro from "./atividade4/components/Cadastro";
import IMC from "./atividade4/components/IMC";
import Sobre from "./atividade4/components/Sobre";
import Resultado from "./atividade4/components/Resultado";
import Perfil from "./atividade4/components/Perfil";
const rotas = createStackNavigator();
const rotasgerais = createStackNavigator();
function RotaPrincipal(){
    return(
             <rotas.Navigator initialRouteName="Home">
                 <rotas.Screen name="HOME" component={Home}></rotas.Screen> 
                 <rotas.Screen name="CADASTRO" component={Cadastro}></rotas.Screen> 
                 <rotas.Screen name="IMC" component={IMC}></rotas.Screen> 
                 <rotas.Screen name="SOBRE" component={Sobre}></rotas.Screen> 
                 <rotas.Screen name="RESULTADO" component={Resultado}></rotas.Screen> 
             </rotas.Navigator> 
    )
}
export default function RotaGeral(){
    return(
        <NavigationContainer>
           <rotasgerais.Navigator initialRouteName="principal">
                 <rotasgerais.Screen name="principal" component={RotaPrincipal} options={{headerShown:false}}></rotasgerais.Screen>
                 <rotasgerais.Screen name="rotaPerfil" component={Perfil} options={{headerShown:false}}></rotasgerais.Screen>
         </rotasgerais.Navigator>
        </NavigationContainer>
    )
}