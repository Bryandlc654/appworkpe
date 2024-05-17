import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Asegúrate de importar FontAwesome desde expo/vector-icons

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Bienvenido</Text>
      <Text style={styles.subHeaderText}>Inicia sesión</Text>

      <Text style={styles.label}>Correo</Text>
      <View style={[styles.inputContainer, { backgroundColor: '#FAFAFA' }]}>
        <TextInput
          style={styles.input}
          placeholder="tucorreo@email.com"
          placeholderTextColor="#989898"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>

      <Text style={styles.label}>Contraseña</Text>
      <View style={[styles.inputContainer, { backgroundColor: '#FAFAFA' }]}>
        <TextInput
          style={styles.input}
          placeholder="********"
          placeholderTextColor="#989898"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIconContainer}>
          <FontAwesome name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#989898" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => console.log("Olvidaste tu contraseña?")} style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log("Ingresar")} style={[styles.loginButton, { backgroundColor: '#2C25E9' }]}>
        <Text style={styles.loginButtonText}>Ingresar</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>¿No tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => console.log("Regístrate aquí")} style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Regístrate aquí</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>o Inicia con</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity onPress={() => console.log("Iniciar con Google")} style={[styles.socialButton, { backgroundColor: '#ffffff' }]}>
        <FontAwesome name="google" size={20} color="#2C25E9" />
        <Text style={styles.socialButtonText}>Iniciar con Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log("Iniciar con Facebook")} style={[styles.socialButton, { backgroundColor: '#ffffff' }]}>
        <FontAwesome name="facebook" size={20} color="#2C25E9" />
        <Text style={styles.socialButtonText}>Iniciar con Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
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
  forgotPassword: {
    alignSelf:'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#2C25E9',
  },
  loginButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  registerText: {
    color: '#989898',
    marginRight: 5,
  },
  registerButton: {
    marginLeft: 5,
  },
  registerButtonText: {
    color: '#2C25E9',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#989898',
  },
  orText: {
    marginHorizontal: 10,
    color: '#989898',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  socialButtonText: {
    color: '#000',
    fontSize: 16,
    marginLeft: 10,
    justifyContent: 'center',
  },
});

export default LoginComponent;
