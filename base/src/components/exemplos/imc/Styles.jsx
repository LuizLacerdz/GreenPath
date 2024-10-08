import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titulo: {
        color: '#ffffff',
        padding: 10,
    },
    divTitulo: {
        flex: 1,
        alignItems: 'center',

    },
    formContato: {
        flex: 2,
        paddingHorizontal: 20
    },

    inputStyle: {
        fontSize: 17,
    },
    inputContainer: {
        borderWidth: 1, // Adiciona uma borda ao redor do input
        borderColor: '#ffffff', // Define a cor da borda
        borderRadius: 10, // Aplica o border radius
        color:'white',
    },
    inputContainerMask: {
        borderWidth: 1, // Adiciona uma borda ao redor do input
        borderColor: '#ffffff', // Define a cor da borda
        borderRadius: 10, // Aplica o border radius
        marginHorizontal: 10,
        marginBottom: 20,
        color: 'white',
    },
});
export default styles;