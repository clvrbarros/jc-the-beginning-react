import React, {Component} from 'react';
import { Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
//import db from '../config/server';
import styles from './styles/styleLogin';
//import { Navigation } from 'react-navigation';

export default class Login extends Component {
  
  state = {
    user: '',
    pw: '',
  };
  
  render() {
    return (
      <View style={styles.main}>
        
        <View style={styles.container}>
          <Text style={styles.welcome}>Olá, seja bem vindo ao parque de diversões Clever mata João</Text>
          <Text>user: {this.state.user}</Text>
          <Text>senha: {this.state.pw}</Text>
        </View>

        <View style={styles.login}>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Usuário"
              value={this.state.user}
              onChangeText={user => this.setState({ user })}
              placeholderTextColor="#999"
              />
            <TextInput
              style={styles.input}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Senha"
              value={this.state.pw}
              onChangeText={pw => this.setState({ pw })}
              placeholderTextColor="#999"
            />
            <View style={styles.btnLogin}>
              <Button title="Login"/>
            </View>
        </View>

        <View style={styles.rodape}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
            <Text>Não tem uma conta? Clica aqui mané </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}