import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    width: 300,
    height:70
  },

  logo: {
    width: 100,
    height: 100
  },
  

  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 25
  },

  input: {
    backgroundColor: '#E4F6F2',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 15,
    borderRadius: 7,
    padding: 10
  },

  buttonSubmit: {
    backgroundColor: '#199A8E',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },

  submitText: {
    color: '#FFF',
    fontSize: 19
  },

  buttonRegister: {
    marginTop: 10
  },

  registerText: {
    color: '#FFF'
  },

  ButtonCreate: {
        color: '#199A8E',
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'right', 
    },

    color:{
        color:'#717784'
    }
});

export default Styles;

