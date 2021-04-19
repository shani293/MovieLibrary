import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Text, ScrollView, StyleSheet, Image, FlatList } from 'react-native';
import Input from '../components/TextInput';
import ButtonLarge from '../components/ButtonLarge';
import Icon from 'react-native-vector-icons/MaterialIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = [
    {
        id: '1',
        image: require("../assets/dummy.jpg"),
        title: 'Frozen ||',
        director: 'Adam Green',
        year: '2019',
    },
    {
        id: '2',
        image: require("../assets/dummy.jpg"),
        title: 'Frozen',
        director: 'Peter Del Vecho',
        year: '2013',
    },
    {
        id: '3',
        image: require("../assets/dummy.jpg"),
        title: 'Frozen first look trailer',
        director: 'Peter Del Vexcho',
        year: '2013',
    },
    {
        id: '4',
        image: require("../assets/dummy.jpg"),
        title: 'Frozen ||',
        director: 'Adam Green',
        year: '2019',
    },
    {
        id: '5',
        image: require("../assets/dummy.jpg"),
        title: 'Frozen',
        director: 'Peter Del Vecho',
        year: '2013',
    },
    {
        id: '6',
        image: require("../assets/dummy.jpg"),
        title: 'Frozen first look trailer',
        director: 'Peter Del Vexcho',
        year: '2013',
    },
]

function SearchResults({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#EEF1F8' }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="keyboard-arrow-left" size={35} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: 'white', marginLeft: '10%' }}>Search results for "Frozen"</Text>
            </View>

            <View style={{height: 30}} />

            <FlatList
                data={data}
                renderItem={({ item, index }) =>

                    <View>

                        <View style={{ height: 1, backgroundColor: 'gray', marginTop: 10 }} />
                        <View style={styles.listView}>
                            <View style={{ width: '20%' }}>
                                <Image source={item.image}
                                    style={{ height: 100, width: 60 }} />
                            </View>
                            <View style={{ width: '55%', paddingLeft: '3%', paddingTop: 10 }}>
                                <Text style={{ fontSize: 16, color: '#D800D2', fontWeight: 'bold' }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, color: '#D800D2', marginTop: 10 }}>Director- {item.director}</Text>
                                <Text style={{ fontSize: 16, color: '#D800D2' }}>Releasing Year- {item.year}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate("MovieDetail")} style={styles.detailButton}>
                                <Text style={styles.buttonText}>Check Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }

                keyExtractor={item => item.id}

            />
            <View style={styles.bottomButtom}>
                <ButtonLarge
                title="Close"
                onPress={() => console.log("Button Pressed!")}
                />
            </View>
        </View>
    );
}

export default SearchResults;

const styles = StyleSheet.create({
    header: {
        height: 55,
        backgroundColor: '#D800D2',
        flexDirection: 'row',
        paddingLeft: '3%',
        alignItems: 'center'
    },
    listView: {
        paddingTop: 10,
        paddingBottom: 30,
        flexDirection: 'row',
        paddingLeft: '3%'
    },
    detailButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D800D2',
        height: 35,
        width: '25%',
        borderRadius: 8,
        alignSelf: 'flex-end'
    },
    buttonText: {
        color: 'white',
        fontSize: 14
    },
    bottomButtom: {
        bottom: 0,
        marginBottom: 10,
    }
})