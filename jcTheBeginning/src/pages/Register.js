import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import {Button, colors} from 'react-native-elements';
import styles from './styles/styleRegister';
// import functions from '../config/server';


export default class Register extends Component {


  
    state = {
      user: '',
      pw: '',
    }
 
  
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.title}>Cadastro</Text>
        </View>
        <View style={styles.form}>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Email"
          value={this.state.user}
          onChangeText={user => this.setState({ user })}
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome"
          value={this.state.user}
          onChangeText={user => this.setState({ user })}
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Senha"
          value={this.state.user}
          onChangeText={user => this.setState({ user })}
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Confirmar senha"
          value={this.state.user}
          onChangeText={user => this.setState({ user })}
          placeholderTextColor="#999"
        />
        <View style={styles.btnContainer}>
              <Button type="outline" buttonStyle={styles.btn} title="Cadastrar" titleStyle={{color: colors.searchBg}}/>
            </View>
        </View>
      </View>
    );
  }
}



/*
conectar ao banco e atribuir os valores
validação login */