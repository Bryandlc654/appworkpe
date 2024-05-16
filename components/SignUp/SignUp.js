import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Asegúrate de importar FontAwesome desde expo/vector-icons

const SignUp = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSignUp = () => {
        // Aquí puedes implementar la lógica para registrar al usuario
        // Por ahora, simplemente imprimimos los datos en la consola
        console.log('Nombre:', name);
        console.log('Email:', email);
        console.log('Contraseña:', password);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <FontAwesome name="arrow-left" size={24}  />
            </TouchableOpacity>

            <Text style={styles.headerText}>Regístrate</Text>
            <Text style={styles.subHeaderText}>Completa tus datos correctamente</Text>

            <Text style={styles.label}>Nombre</Text>
            <View style={[styles.inputContainer, { backgroundColor: '#FAFAFA' }]}>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu nombre"
                    placeholderTextColor="#989898"
                    value={name}
                    onChangeText={setName}
                />
            </View>

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

            <Text style={styles.label}>Contraseña</Text>
            <View style={[styles.inputContainer, { backgroundColor: '#FAFAFA' }]}>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu contraseña"
                    placeholderTextColor="#989898"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIconContainer}>
                    <FontAwesome name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#989898" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleSignUp} style={[styles.signupButton, { backgroundColor: '#2C24E9' }]}>
                <Text style={styles.signupButtonText}>Registrar</Text>
            </TouchableOpacity>

            <View style={styles.loginTextContainer}>
                <Text style={styles.loginText}>Ya tienes una cuenta? </Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={[styles.loginText, { color: '#2C24E9' }]}>Inicia sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
    },
    backButton: {
        position: 'absolute',
        top: 60,
        left: 20,
        zIndex: 1,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subHeaderText: {
        fontSize: 18,
        marginBottom: 20,
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
    eyeIconContainer: {
        position: 'absolute',
        right: 10,
    },
    signupButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#2C24E9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 20,
    },
    signupButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginTextContainer: {
        flexDirection: 'row',
        justifyContent:'center',
        marginTop: 20,
    },
    loginText: {
        color: '#333',
        fontSize: 16,
    },
});

export default SignUp;
