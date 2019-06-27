import { StyleSheet } from 'react-native';
import { colors } from 'react-native-elements';

//#F5FCFF
export default styles = StyleSheet.create({
  main: {
    margin: 20,
    flex: 1,
  },
  registerContainer:{
    flex: 1,
    alignItems: "center"
  },
  textButton:{
    color: "black"
  },
  welcomeContainer: {
      flex: 2,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: 'center',
    },
    logo:{
      width: 250,
      height: 100
    },
    login: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 50
    },
    rodape: {
      flex: 1,
      alignItems: 'center',
    }, 
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    btn:{
      borderRadius: 10,
      borderWidth: 1.5,
      borderColor: colors.searchBg,
    },
    btnContainer : {
      paddingTop: 25,
    },
    input: {
      borderBottomWidth: 2,
      borderColor: '#ddd',
      padding: 15,
      textAlign: 'center',
      marginTop: 10,
      height: 48,
      width: 230,
      fontSize: 16,
    },  
});