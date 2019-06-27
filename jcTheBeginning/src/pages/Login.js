import React, {Component} from 'react';
import { Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { Button, colors } from 'react-native-elements';

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
        <View style={styles.welcomeContainer}>
          <Image source={require('./imgs/logo.png')} style={styles.logo} />
        </View>
        <View style={styles.registerContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
            <Text>Não tem uma conta? Clica aqui!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.login}>
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
              placeholder="Senha"
              value={this.state.pw}
              onChangeText={pw => this.setState({ pw })}
              placeholderTextColor="#999"
            />
            <View style={styles.btnContainer}>
              <Button type="outline" buttonStyle={styles.btn} title="Login" titleStyle={{color: colors.searchBg}}/>
            </View>
        </View>
        <View style={styles.rodape}>
            <Text>Esqueceu o seu login ou senha? Clique aqui!</Text>
        </View>
      </View>
    );
  }
}