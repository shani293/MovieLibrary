import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Text, ScrollView, StyleSheet, Image } from 'react-native';
import Input from '../components/TextInput';
import ButtonLarge from '../components/ButtonLarge';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function MovieDetail({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#EEF1F8' }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={35} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: 'white', marginLeft: '5%' }}>Frozen ||</Text>
            </View>

            <ScrollView>
                <View style={styles.topView}>
                    <View>
                        <Image source={require("../assets/dummy.jpg")}
                            style={styles.imageStyle} />
                    </View>
                    <View style={{ width: '50%', paddingLeft: '2%' }}>
                        <TouchableOpacity onPress={() => navigation.navigate("Trailer")} style={styles.buttonStyle}>
                            <Text style={{ fontSize: 16, color: 'white', }}>Watch Trailer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("ShareMovieDetail")} style={{ alignSelf: 'flex-end', marginTop: 150 }}>
                            <Icon1 name="share-square-o" size={35} color="#D800D2" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 5 }} />
                <View style={styles.textView}>
                    <Text style={{ fontSize: 15, color: '#D800D2', width: '45%', }}>Directed by</Text>
                    <Text style={{ fontSize: 15, color: '#D800D2', marginLeft: '2%', width: '53%' }}>Chris BuckJennifer Lee</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={{ fontSize: 15, color: '#D800D2', width: '45%', }}>Produced by</Text>
                    <Text style={{ fontSize: 15, color: '#D800D2', marginLeft: '2%', width: '53%' }}>Peter Del Vecho</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={{ fontSize: 15, color: '#D800D2', width: '45%', }}>Screenplay by</Text>
                    <Text style={{ fontSize: 15, color: '#D800D2', marginLeft: '2%', width: '53%' }}>Jennifer Lee[1]</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={{ fontSize: 15, color: '#D800D2', width: '45%', }}>Story by</Text>
                    <Text style={{ fontSize: 15, color: '#D800D2', marginLeft: '2%', width: '53%' }}>
                        Chris Buck[2] Jennifer Lee[2] Marc E, Simth[2] Kristen Anderson-Lopez[2] Robert Lopez[2]</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={{ fontSize: 15, color: '#D800D2', width: '45%', }}>Starring</Text>
                    <Text style={{ fontSize: 15, color: '#D800D2', marginLeft: '2%', width: '53%' }}>Kristen Belldina Menzel Josh Gad Jonathan Groff</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={{ fontSize: 15, color: '#D800D2', width: '45%', }}>Music by</Text>
                    <Text style={{ fontSize: 15, color: '#D800D2', marginLeft: '2%', width: '53%' }}>Jennifer Lee[1]</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={{ fontSize: 15, color: '#D800D2', width: '45%', }}>Edited by</Text>
                    <Text style={{ fontSize: 15, color: '#D800D2', marginLeft: '2%', width: '53%' }}>Jennifer Lee[1]</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={{ fontSize: 15, color: '#D800D2', width: '45%', }}>Production Company</Text>
                    <Text style={{ fontSize: 15, color: '#D800D2', marginLeft: '2%', width: '53%' }}>Jennifer Lee[1]</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={{ fontSize: 15, color: '#D800D2', width: '45%', }}>Disney Animation Studio</Text>
                    <Text style={{ fontSize: 15, color: '#D800D2', marginLeft: '2%', width: '53%' }}>Jennifer Lee[1]</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={{ fontSize: 15, color: '#D800D2', width: '45%', }}>Distributed by</Text>
                    <Text style={{ fontSize: 15, color: '#D800D2', marginLeft: '2%', width: '53%' }}>Jennifer Lee[1]</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={{ fontSize: 15, color: '#D800D2', width: '45%', }}>Release Date</Text>
                    <Text style={{ fontSize: 15, color: '#D800D2', marginLeft: '2%', width: '53%' }}>Jennifer Lee[1]</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={{ fontSize: 15, color: '#D800D2', width: '45%', }}>Running TIme</Text>
                    <Text style={{ fontSize: 15, color: '#D800D2', marginLeft: '2%', width: '53%' }}>Jennifer Lee[1]</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={{ fontSize: 15, color: '#D800D2', width: '45%', }}>Country</Text>
                    <Text style={{ fontSize: 15, color: '#D800D2', marginLeft: '2%', width: '53%' }}>Jennifer Lee[1]</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={{ fontSize: 15, color: '#D800D2', width: '45%', }}>Language</Text>
                    <Text style={{ fontSize: 15, color: '#D800D2', marginLeft: '2%', width: '53%' }}>Jennifer Lee[1]</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={{ fontSize: 15, color: '#D800D2', width: '45%', }}>Budget</Text>
                    <Text style={{ fontSize: 15, color: '#D800D2', marginLeft: '2%', width: '53%' }}>Jennifer Lee[1]</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={{ fontSize: 15, color: '#D800D2', width: '45%', }}>Box Office</Text>
                    <Text style={{ fontSize: 15, color: '#D800D2', marginLeft: '2%', width: '53%' }}>Jennifer Lee[1]</Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default MovieDetail;

const styles = StyleSheet.create({
    header: {
        height: 55,
        backgroundColor: '#D800D2',
        flexDirection: 'row',
        paddingLeft: '3%',
        alignItems: 'center'
    },
    topView: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingHorizontal: '2%'
    },
    imageStyle: {
        height: 250,
        width: (windowWidth / 100) * 45
    },
    buttonStyle: {
        height: 55,
        width: '100%',
        backgroundColor: '#D800D2',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginLeft: '2%'
    },
    textView: {
        paddingHorizontal: '2%',
        flexDirection: 'row'
    }
})