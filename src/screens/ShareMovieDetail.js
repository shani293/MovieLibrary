import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Text, ScrollView, StyleSheet, } from 'react-native';
import Input from '../components/TextInput';
import ButtonLarge from '../components/ButtonLarge';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function ShareMovieDetail({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#EEF1F8' }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="keyboard-arrow-left" size={40} color="#007CFF" />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: 'white', marginLeft: '2%' }}>Back</Text>
                <Text style={{ fontSize: 16, color: 'white', marginLeft: '20%' }}>Share</Text>
            </View>
            <ScrollView>
                <TouchableOpacity style={styles.socialButton}>
                    <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Login with Facebook</Text>
                    <Icon1 name="facebook-square" size={40} color="white" style={{ marginLeft: '5%' }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, width: '80%', textAlign: 'center', alignSelf: 'center', marginTop: 30 }}>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print
            </Text>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 40 }}>
                    <View style={{ height: 1, backgroundColor: 'gray', width: '40%', marginTop: 11 }} />
                    <Text style={{ fontSize: 16, color: 'black' }}>  Or  </Text>
                    <View style={{ height: 1, backgroundColor: 'gray', width: '40%', marginTop: 11 }} />
                </View>
                <TouchableOpacity style={styles.socialButton}>
                    <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Login with Twitter</Text>
                </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity>
            <View style={styles.bottomView}>
                <Text style={{ fontSize: 16, color: '#D800D2', fontWeight: 'bold' }}>Learn{'\n'}More</Text>
                <Icon2 name="ios-chevron-forward-circle" size={30} color="#FF7B5A" />
            </View>
            </TouchableOpacity>
        </View>
    );
}

export default ShareMovieDetail;

const styles = StyleSheet.create({
    header: {
        height: 55,
        backgroundColor: '#D800D2',
        flexDirection: 'row',
        paddingLeft: '3%',
        alignItems: 'center'
    },
    socialButton: {
        flexDirection: 'row',
        backgroundColor: '#D800D2',
        height: 80,
        width: '85%',
        alignSelf: 'center',
        marginTop: 50,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomView: {
        bottom: 0,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '30%'
    }
})