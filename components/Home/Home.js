import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
    const [categories, setCategories] = useState(['Abogacía', 'Plomería', 'Electricidad', 'Carpintería']);
    const [services, setServices] = useState([
        { category: 'Abogacía', name: 'Servicio 1 de Abogacía', district: 'Distrito 1', province: 'Provincia 1', imageUrl: 'https://via.placeholder.com/150' },
        { category: 'Abogacía', name: 'Servicio 2 de Abogacía', district: 'Distrito 2', province: 'Provincia 2', imageUrl: 'https://via.placeholder.com/150' },
        { category: 'Abogacía', name: 'Servicio 3 de Abogacía', district: 'Distrito 3', province: 'Provincia 3', imageUrl: 'https://via.placeholder.com/150' },
        { category: 'Abogacía', name: 'Servicio 4 de Abogacía', district: 'Distrito 4', province: 'Provincia 4', imageUrl: 'https://via.placeholder.com/150' },
        { category: 'Plomería', name: 'Servicio 1 de Plomería', district: 'Distrito 5', province: 'Provincia 5', imageUrl: 'https://via.placeholder.com/150' },
        { category: 'Plomería', name: 'Servicio 2 de Plomería', district: 'Distrito 6', province: 'Provincia 6', imageUrl: 'https://via.placeholder.com/150' },
        { category: 'Plomería', name: 'Servicio 2 de Plomería', district: 'Distrito 6', province: 'Provincia 6', imageUrl: 'https://via.placeholder.com/150' },
        { category: 'Plomería', name: 'Servicio 2 de Plomería', district: 'Distrito 6', province: 'Provincia 6', imageUrl: 'https://via.placeholder.com/150' },
        { category: 'Electricidad', name: 'Servicio 1 de Electricidad', district: 'Distrito 7', province: 'Provincia 7', imageUrl: 'https://via.placeholder.com/150' },
        { category: 'Electricidad', name: 'Servicio 1 de Electricidad', district: 'Distrito 7', province: 'Provincia 7', imageUrl: 'https://via.placeholder.com/150' },
        { category: 'Electricidad', name: 'Servicio 1 de Electricidad', district: 'Distrito 7', province: 'Provincia 7', imageUrl: 'https://via.placeholder.com/150' },
        { category: 'Electricidad', name: 'Servicio 2 de Electricidad', district: 'Distrito 8', province: 'Provincia 8', imageUrl: 'https://via.placeholder.com/150' },
        { category: 'Carpintería', name: 'Servicio 1 de Carpintería', district: 'Distrito 9', province: 'Provincia 9', imageUrl: 'https://via.placeholder.com/150' },
        { category: 'Carpintería', name: 'Servicio 1 de Carpintería', district: 'Distrito 9', province: 'Provincia 9', imageUrl: 'https://via.placeholder.com/150' },
        { category: 'Carpintería', name: 'Servicio 1 de Carpintería', district: 'Distrito 9', province: 'Provincia 9', imageUrl: 'https://via.placeholder.com/150' },
        { category: 'Carpintería', name: 'Servicio 2 de Carpintería', district: 'Distrito 10', province: 'Provincia 10', imageUrl: 'https://via.placeholder.com/150' },
    ]);

    const scrollX = useRef(new Animated.Value(0)).current;
    const serviceScrollViewRefs = useRef({});
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const startSliderAnimation = (category) => {
        const scrollValue = scrollX._value;
        const filteredServices = services.filter(service => service.category === category);
        const maxScrollValue = 200 * (filteredServices.length - 1);

        Animated.timing(scrollX, {
            toValue: scrollValue + 200,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            if (scrollValue >= maxScrollValue) {
                scrollX.setValue(0);
            }
            if (serviceScrollViewRefs.current[category]) {
                serviceScrollViewRefs.current[category].scrollTo({ x: scrollValue, animated: true });
            }
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            categories.forEach(category => startSliderAnimation(category));
        }, 3000);

        return () => clearInterval(interval);
    }, [scrollX, categories]);

    const [dropdownOpen, setDropdownOpen] = useState(false);


    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.greeting}>Hola,</Text>
                    <Text style={styles.username}>Luis</Text>
                </View>

                <TouchableOpacity style={styles.activeIndicator} onPress={toggleDropdown}>
                    <View style={styles.activeIndicatorDot} />
                    <Image source={require('../../assets/persona.jpg')} style={styles.userImage} />
                </TouchableOpacity>

                {dropdownOpen && (
                    <View style={styles.dropdown}>
                        <TouchableOpacity onPress={() => console.log("Cerrar sesión")} style={styles.optionButton}>
                            <Text>Cerrar sesión</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log("Actualizar perfil")} style={styles.optionButton}>
                            <Text>Actualizar perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log("Ofrecer servicios")} style={styles.optionButton}>
                            <Text>Ofrecer servicios</Text>
                        </TouchableOpacity>
                    </View>
                )}
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

                {/* Sliders de servicios por categoría */}
                {categories.map((category, categoryIndex) => (
                    <View key={categoryIndex}>
                        <Text style={styles.categoryTitle}>{category}</Text>
                        <Animated.ScrollView
                            horizontal
                            ref={(ref) => { serviceScrollViewRefs.current[category] = ref; }}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.serviceSlider}
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                                { useNativeDriver: false }
                            )}
                            scrollEventThrottle={16}
                        >
                            {services.filter(service => service.category === category).map((service, index) => (
                                <View key={index} style={styles.serviceCard}>
                                    <Image source={{ uri: service.imageUrl }} style={styles.serviceImage} />
                                    <View style={styles.serviceInfo}>
                                        <Text style={styles.serviceText}>{service.name}</Text>
                                        <Text style={styles.serviceText}>{service.district}</Text>
                                        <Text style={styles.serviceText}>{service.province}</Text>
                                    </View>
                                </View>
                            ))}
                        </Animated.ScrollView>
                    </View>
                ))}
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
        borderRadius: 50,
    },

    activeIndicator: {
        position: 'relative',
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    activeIndicatorDot: {
        position: 'absolute',
        zIndex: 10,
        bottom: 10,
        right: 10,
        width: 12,
        height: 12,
        backgroundColor: 'green',
        borderRadius: 5,
    },
    dropdown: {
        position: 'absolute',
        top:50, // Puedes ajustar la posición según necesites
        right: 0,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        zIndex: 10,
    },
    optionButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
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
    categoryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    serviceSlider: {
        marginBottom: 20,
        paddingRight: 20,
    },
    serviceCard: {
        width: 200,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    serviceImage: {
        width: 180,
        height: 120,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    serviceInfo: {
        padding: 10,
    },
    serviceText: {
        color: '#000',
        fontSize: 14,
    },
});

export default HomeScreen;
