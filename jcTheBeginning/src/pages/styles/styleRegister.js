import { StyleSheet } from 'react-native';
import {colors} from 'react-native-elements';

export default styles = StyleSheet.create({
    title : {
        backgroundColor: colors.searchBg,
        color: "#ddd",
        fontSize: 18,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        padding: 15,
        textAlign: 'center',
        
    },
    btn:{
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: colors.searchBg,
      },
      btnContainer : {
        paddingTop: 50,
      },
    input: {
        //backgroundColor: "blue",
        borderBottomWidth: 2,
        borderColor: '#ddd',
        padding: 15,
        textAlign: 'center',
        marginTop: 10,
        height: 48,
        width: 230,
        fontSize: 16,
      },
      form: {
        paddingTop: 50,
          alignItems: "center"
      }
});