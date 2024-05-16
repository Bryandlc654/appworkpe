import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Asegúrate de importar FontAwesome desde expo/vector-icons

const RecoverPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const handleRecoverPassword = () => {
        // Aquí puedes implementar la lógica para recuperar la contraseña
        // Por ahora, simplemente imprimimos el email en la consola
        console.log('Email para recuperar contraseña:', email);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <FontAwesome name="arrow-left" size={24} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Recupera tu contraseña</Text>
            <Text style={styles.subHeaderText}>Te enviaremos un correo con las instrucciones para cambiar tu contraseña</Text>

            <Text style={styles.label}>Email</Text>
            <View style={[styles.inputContainer, { backgroundColor: '#FAFAFA' }]}>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu email"
                    placeholderTextColor="#989898"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <TouchableOpacity onPress={handleRecoverPassword} style={styles.recoverButton}>
                <Text style={styles.recoverButtonText}>Buscar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
        paddingTop: 140,
    },
    backButton: {
        position: 'absolute',
        top: 60,
        left: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subHeaderText: {
        fontSize: 16,
        marginBottom: 20,
        color: '#989898',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#989898',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        height: 50,
        borderRadius: 8,
    },
    input: {
        flex: 1,
        color: '#000',
        fontSize: 16,
        paddingHorizontal: 10,
    },
    recoverButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#2C24E9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    recoverButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default RecoverPassword;
