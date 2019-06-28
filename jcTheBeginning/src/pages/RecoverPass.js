import React, {Component} from 'react';
import { Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { Button, colors } from 'react-native-elements';

//import db from '../config/server';
import styles from './styles/styleRecoverPass';
//import { Navigation } from 'react-navigation';

export default class Login extends Component {
  
  state = {
    user: '',
  };
  
  render() {
    return (
      <View style={styles.main}>  
        <View style={styles.welcomeContainer}>
          <Image source={require('./imgs/logo.png')} style={styles.logo} />
          <Text style={styles.textStyle}>Informe seu email para iniciarmos o processo de recuperação da senha!</Text>
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
            <View style={styles.btnContainer}>
              <Button type="outline" buttonStyle={styles.btn} title="Enviar" titleStyle={{color: colors.searchBg}}/>
            </View>
        </View>
      </View>
    );
  }
}