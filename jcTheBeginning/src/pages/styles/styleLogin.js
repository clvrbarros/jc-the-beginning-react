import { StyleSheet } from 'react-native';

//#F5FCFF
export default styles = StyleSheet.create({
    main: {
      margin: 20,
      flex: 1,
    },
    container: {
      flex: 5,
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      justifyContent: 'center',
    },
    login: {
      flex: 4,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    rodape: {
      backgroundColor: "#F5FCFF",
      flex: 1,
      alignItems: 'center',
      fontWeight: 'bold',
    }, 
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 25,
      color: '#000',
      paddingBottom: 30,
      paddingTop: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    btnLogin : {
      marginTop: 15,
    },
    input: {
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 15,
      textAlign: 'center',
      marginTop: 10,
      height: 48,
      width: 230,
      fontSize: 16,
    },  
});