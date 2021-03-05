import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
 
export default class App extends React.Component { 
  constructor(props){ 
    super(props); 
    this.state={       
      numeroInicial : 1 
    }
  }
 
GeradorNumeroAleatorio=()=>
{
 
var numeroAleatorio = Math.floor(Math.random() * 100) + 1 ;
 
this.setState({
 
  numeroInicial: numeroAleatorio
 
})
}
 
  render() {
    return ( 
            
      <View style={styles.Container} >      
 
       <Text style={styles.ContainerTex}>{this.state.numeroInicial}</Text>
 
       <Button title="Gerador de números" onPress={this.GeradorNumeroAleatorio} />
        
      </View> 
    );
  }
}
 
const styles = StyleSheet.create(
{
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4F1F4',   
    justifyContent: 'center',
  },  
  
    ContainerTex:{
    marginBottom: 20, 
    fontSize: 20,    
  },   
}
);