import { StyleSheet } from 'react-native';
import { colors } from 'react-native-elements';

//#F5FCFF
export default styles = StyleSheet.create({
  main: {
      marginLeft: 20,
      marginRight: 20,
    marginTop: 120,
    marginBottom: 120,
    flex: 1,
  },
  textStyle:{
    textAlign: "center"
  },
  textButton:{
    color: "black"
  },
  welcomeContainer: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: 'center',
    },
    logo:{
      width: 250,
      height: 100
    },
    login: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btn:{
      borderRadius: 10,
      borderWidth: 1.5,
      borderColor: colors.searchBg,
    },
    btnContainer:{
        paddingTop: 30
    },
    input: {
      borderBottomWidth: 2,
      borderColor: '#ddd',
      textAlign: 'center',
      height: 48,
      width: 230,
      fontSize: 16,
    },  
});