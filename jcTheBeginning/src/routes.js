import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

//rotas
import Login from './pages/Login';
import Register from './pages/Register';
import RecoverPass from './pages/RecoverPass';


export default createAppContainer(
    createStackNavigator({
        Login,
        Register,
        RecoverPass
    }, {
        initialRouteName: 'Login',
        mode: 'modal',
    })
);