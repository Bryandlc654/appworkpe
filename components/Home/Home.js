import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Asegúrate de importar FontAwesome desde expo/vector-icons

const HomeScreen = () => {
    const [categories, setCategories] = useState(['Abogacía', 'Plomería']); // Lista de categorías
    const [services, setServices] = useState([ // Lista de servicios por categoría
        { category: 'Abogacía', name: 'Servicio 1 de Abogacía' },
        { category: 'Abogacía', name: 'Servicio 2 de Abogacía' },
        { category: 'Plomería', name: 'Servicio 1 de Plomería' },
        { category: 'Plomería', name: 'Servicio 2 de Plomería' },
    ]);

    const scrollX = useRef(new Animated.Value(0)).current; // Posición de desplazamiento en X para la animación del slider

    useEffect(() => {
        // Configuración de animación para el slider de servicios
        const interval = setInterval(() => {
            Animated.timing(scrollX, {
                toValue: scrollX._value + 200, // Avance de 200 unidades (ancho de la pantalla)
                duration: 1000, // Duración de la animación en milisegundos
                useNativeDriver: true,
            }).start();
        }, 3000); // Intervalo de cambio de slide en milisegundos

        return () => clearInterval(interval); // Limpieza del intervalo al desmontar el componente
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.greeting}>Hola,</Text>
                    <Text style={styles.username}>Luis</Text>
                </View>

                <TouchableOpacity style={styles.userButton}>
                    <Image source={require('../../assets/persona.jpg')} style={styles.userImage} />
                </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar"
                    placeholderTextColor="#989898"
                />
                <FontAwesome name="search" size={20} color="#989898" style={styles.searchIcon} />
            </View>


            <ScrollView>
                {/* Slider de categorías */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categorySlider}>
                    {categories.map((category, index) => (
                        <TouchableOpacity key={index} style={styles.categoryButton}>
                            <Text style={styles.categoryButtonText}>{category}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Slider de servicios de la categoría Abogacía */}
                <Animated.ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ ...styles.serviceSlider, transform: [{ translateX: scrollX }] }}>
                    {services.map((service, index) => (
                        <View key={index} style={styles.serviceCard}>
                            <Text style={styles.serviceText}>{service.name}</Text>
                        </View>
                    ))}
                </Animated.ScrollView>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingTop: 60,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    username: {
        fontSize: 20,
    },
    userButton: {
        borderRadius: 50,
        overflow: 'hidden',
    },
    userImage: {
        width: 40,
        height: 40,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative', 
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        borderRadius: 8,
        paddingHorizontal: 40, 
        paddingVertical: 12,
        fontSize: 16,
        color: '#000000',
    },
    searchIcon: {
        position: 'absolute', 
        left: 15, 
    },
    categorySlider: {
        marginBottom: 20,
        paddingRight: 20,
    },
    categoryButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#2C25E9',
        marginRight: 10,
    },
    categoryButtonText: {
        color: '#ffffff',
        fontSize: 16,
    },
    serviceSlider: {
        marginBottom: 20,
        paddingRight: 20,
    },
    serviceCard: {
        width: 200,
        height: 100,
        backgroundColor: '#2C25E9',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    serviceText: {
        color: '#ffffff',
        fontSize: 16,
    },
});

export default HomeScreen;
