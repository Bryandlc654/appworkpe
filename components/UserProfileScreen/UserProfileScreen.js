import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import RNPickerSelect from 'react-native-picker-select';
import data from '../info.json';

const UserProfileScreen = ({ navigation }) => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        address: '',
        district: '',
        province: '',
        department: '',
        dni: '',
        phone: '',
    });

    const [profileImage, setProfileImage] = useState(null);
    const [departments, setDepartments] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);

    useEffect(() => {
        const departmentNames = Object.keys(data);
        const departmentItems = departmentNames.map(department => ({ label: department, value: department }));
        setDepartments(departmentItems);
    }, []);

    const handleDepartmentChange = (department) => {
        setUserData({ ...userData, department, province: '', district: '' });
        if (department) {
            const selectedDepartment = data[department];
            const provinceNames = Object.keys(selectedDepartment);
            const provinceItems = provinceNames.map(province => ({ label: province, value: province }));
            setProvinces(provinceItems);
            setDistricts([]);
        } else {
            setProvinces([]);
            setDistricts([]);
        }
    };

    const handleProvinceChange = (province) => {
        setUserData({ ...userData, province, district: '' });
        if (province) {
            const selectedDepartment = data[userData.department];
            const selectedProvince = selectedDepartment[province];
            const districtItems = selectedProvince.map(district => ({ label: district, value: district }));
            setDistricts(districtItems);
        } else {
            setDistricts([]);
        }
    };

    const handleInputChange = (field, value) => {
        setUserData({ ...userData, [field]: value });
    };

    const handleSave = () => {
        alert('Datos guardados correctamente');
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.cancelled) {
            setProfileImage(result.uri);
        }
    };


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <FontAwesome name="arrow-left" size={24} color="#2C24E9" />
            </TouchableOpacity>

            <Text style={styles.headerText}>Perfil de Usuario</Text>
            <Text style={styles.subHeaderText}>Actualiza tus datos correctamente</Text>

            <TouchableOpacity style={styles.profileImageContainer} onPress={pickImage}>
                {profileImage ? (
                    <Image source={{ uri: profileImage }} style={styles.profileImage} />
                ) : (
                    <FontAwesome name="user" size={50} color="#989898" />
                )}
            </TouchableOpacity>
            <Text style={styles.updatePhotoText}>Actualizar foto de perfil</Text>

            <Text style={styles.label}>Nombre</Text>
            <View style={[styles.inputContainer, { backgroundColor: '#FAFAFA' }]}>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu nombre"
                    placeholderTextColor="#989898"
                    value={userData.name}
                    onChangeText={(value) => handleInputChange('name', value)}
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
                    value={userData.email}
                    onChangeText={(value) => handleInputChange('email', value)}
                />
            </View>

            <Text style={styles.label}>Departamento</Text>
            <View style={[styles.inputContainer, { backgroundColor: '#FAFAFA' }]}>
                <RNPickerSelect
                    onValueChange={(value) => handleDepartmentChange(value)}
                    items={departments}
                    placeholder={{ label: 'Selecciona departamento', value: '' }}
                    value={userData.department}
                    style={pickerSelectStyles}
                />
            </View>

            <Text style={styles.label}>Provincia</Text>
            <View style={[styles.inputContainer, { backgroundColor: '#FAFAFA' }]}>
                <RNPickerSelect
                    onValueChange={(value) => handleProvinceChange(value)}
                    items={provinces}
                    placeholder={{ label: 'Selecciona provincia', value: '' }}
                    value={userData.province}
                    style={pickerSelectStyles}
                    disabled={userData.department === ''}
                />
            </View>

            <Text style={styles.label}>Distrito</Text>
            <View style={[styles.inputContainer, { backgroundColor: '#FAFAFA' }]}>
                <RNPickerSelect
                    onValueChange={(value) => handleInputChange('district', value)}
                    items={districts}
                    placeholder={{ label: 'Selecciona distrito', value: '' }}
                    value={userData.district}
                    style={pickerSelectStyles}
                    disabled={userData.province === ''}
                />
            </View>

            <Text style={styles.label}>DNI o CE</Text>
            <View style={[styles.inputContainer, { backgroundColor: '#FAFAFA' }]}>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu DNI o CE"
                    placeholderTextColor="#989898"
                    keyboardType="numeric"
                    value={userData.dni}
                    onChangeText={(value) => handleInputChange('dni', value)}
                />
            </View>

            <Text style={styles.label}>Celular</Text>
            <View style={[styles.inputContainer, { backgroundColor: '#FAFAFA' }]}>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu celular"
                    placeholderTextColor="#989898"
                    keyboardType="phone-pad"
                    value={userData.phone}
                    onChangeText={(value) => handleInputChange('phone', value)}
                />
            </View>

            <TouchableOpacity onPress={handleSave} style={[styles.saveButton, { backgroundColor: '#2C24E9' }]}>
                <Text style={styles.saveButtonText}>Guardar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
    },
});

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        marginTop: 60,
        padding: 20,
    },
    backButton: {
        position: 'absolute',
        top: 0,
        left: 20,
        zIndex: 1,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subHeaderText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    profileImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#FAFAFA',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 10,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    updatePhotoText: {
        fontSize: 16,
        color: '#2C24E9',
        textAlign: 'center',
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
    saveButton: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 80,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default UserProfileScreen;
