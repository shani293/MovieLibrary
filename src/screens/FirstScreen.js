import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/FontAwesome';

function FirstScreen({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#EEF1F8' }}>
                    <Text style={styles.title}>Movie Library App</Text>
                    <View style={styles.buttonsView}>
                        <TouchableOpacity>
                            <Icon name="home" color="#AF45C6" size={30} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Icon1 name="search" color="#AF45C6" size={30} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Icon1 name="user-circle-o" color="#AF45C6" size={30} />
                        </TouchableOpacity>
                    </View>
                    <Image source={require("../assets/movie.png")}
                    style={{height: 200, width: 200, alignSelf: 'center', marginTop: 50}}
                    
                     /> 
        </View>
    );
}

export default FirstScreen;

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: '#AF45C6',
        marginVertical: 50,
        fontWeight: 'bold'
    },
    buttonsView: {
        marginHorizontal: '5%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 20
    }
})