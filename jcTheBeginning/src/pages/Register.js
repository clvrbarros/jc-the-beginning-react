import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './styles/styleRegister';
// import functions from '../config/server';


export default class Register extends Component {


  
    state = {
      user: '',
      pw: '',
    }
 
  
  render() {
    
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.title}> Cadastro Publicação </Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Usuário"
            value={this.state.user}
            onChangeText={user => this.setState({ user })}
            placeholderTextColor="#999" 
            />
        </View>
      </View>
    );
  }
}



/*
conectar ao banco e atribuir os valores
validação login */