import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonLarge = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPress}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTitleStyle}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#1420B2',
        height: 50,
        width: '90%',
        marginTop: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        elevation: 10
    },
    buttonTitleStyle: {
        textAlign: "center",
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 18,
        color: '#ffffff'
    },
})

export default ButtonLarge;