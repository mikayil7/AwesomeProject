import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignContent: 'flex-end',
      justifyContent: 'flex-end',
      backgroundColor: 'powderblue',
    },
    textstyle: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
    },
    header: {
      flex: 2,
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: '#123',
    },
    main: {
      flex: 5,
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: 'red',
    },
    footer: {
      flex: 1,
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: '#4535',
    },
    left: {
      flex: 1,
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: 'powderblue',
    },
    right: {
      flex: 3,
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: 'grey',
    },
  });
  export default styles;


