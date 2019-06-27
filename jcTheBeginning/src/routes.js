import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

//rotas
import Login from './pages/Login';
import Register from './pages/Register';


export default createAppContainer(
    createStackNavigator({
        Login,
        Register,
    }, {
        initialRouteName: 'Register',
        mode: 'modal',
    })
);