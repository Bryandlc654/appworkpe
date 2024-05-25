import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ServiceDetailScreen = ({ navigation }) => {
    const service = {
        imageUrl: 'https://via.placeholder.com/600',
        name: 'Servicio de Plomería',
        district: 'Distrito 5',
        province: 'Provincia 2',
        description: 'Ofrecemos servicios completos de plomería para hogares y negocios.',
        servicesProvided: [
            'Reparación de fugas',
            'Instalación de tuberías',
            'Mantenimiento de sistemas de agua',
            'Limpieza de drenajes',
            'Instalación de calentadores de agua',
        ],
        hours: 'Lunes a Viernes: 9:00 AM - 6:00 PM',
    };

    const handleWhatsAppPress = () => {
        const phoneNumber = '+1234567890'; // Reemplaza con el número de teléfono deseado
        const message = `Hola, estoy interesado en el servicio: ${service.name}`;
        const url = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
        Linking.openURL(url).catch(() => {
            alert('WhatsApp no está instalado en el dispositivo');
        });
    };

    const handleFacebookPress = () => {
        const url = 'https://www.facebook.com'; // Reemplaza con la URL de Facebook deseada
        Linking.openURL(url).catch(() => {
            alert('No se pudo abrir Facebook');
        });
    };

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: service.imageUrl }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{service.name}</Text>
                <Text style={styles.text}>{service.district}</Text>
                <Text style={styles.text}>{service.province}</Text>
                <Text style={styles.description}>{service.description}</Text>
                <Text style={styles.subTitle}>Servicios Ofrecidos:</Text>
                {service.servicesProvided.map((serviceItem, index) => (
                    <Text key={index} style={styles.serviceItem}>• {serviceItem}</Text>
                ))}
                <Text style={styles.subTitle}>Horario de Atención:</Text>
                <Text style={styles.text}>{service.hours}</Text>

                <TouchableOpacity style={styles.whatsappButton} onPress={handleWhatsAppPress}>
                    <FontAwesome name="whatsapp" size={20} color="#fff" />
                    <Text style={styles.whatsappButtonText}>Contactar por WhatsApp</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.facebookButton} onPress={handleFacebookPress}>
                    <FontAwesome name="facebook" size={20} color="#fff" />
                    <Text style={styles.facebookButtonText}>Visítanos en Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonText}>Regresar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 300,
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'left',
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'left',
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'left',
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
        textAlign: 'left',
    },
    serviceItem: {
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'left',
    },
    whatsappButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#25D366',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    whatsappButtonText: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 16,
        textAlign: 'center', 
        flex: 1,
    },
    facebookButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3b5998',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    facebookButtonText: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 16,
        textAlign: 'center',
        flex: 1,
    },
    backButton: {
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
    },
    backButtonText: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default ServiceDetailScreen;
