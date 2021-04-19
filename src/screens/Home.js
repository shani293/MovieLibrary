import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Text, ScrollView, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = [
    {
        id: '1',
        image: require("../assets/dummy.jpg"),
    },
    {
        id: '2',
        image: require("../assets/dummy2.jpg"),
    },
    {
        id: '3',
        image: require("../assets/dummy.jpg"),
    },
    {
        id: '4',
        image: require("../assets/dummy2.jpg"),
    },
]

function Home({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#EEEEEE' }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon1 name="keyboard-arrow-left" size={35} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Search")} activeOpacity={1} style={styles.searchStyle}>
                    <Icon name="search" color="white" size={15} />
                    <Text style={{ fontSize: 14, color: 'white', marginLeft: '3%' }}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontSize: 16, color: 'white', marginLeft: '20%' }}>Cancel</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
            <View>
                <Text style={{ fontSize: 18, color: '#D800D2', marginLeft: '5%', marginTop: 10, fontWeight: 'bold' }}>Adventure</Text>
                <FlatList
                    data={data}
                    horizontal
                    renderItem={({ item, index }) =>

                        <TouchableOpacity onPress={() => navigation.navigate("MovieDetail")} style={{ marginLeft: 20 }}>
                            <Image source={item.image} style={{ height: 250, width: (windowWidth / 100) * 45 }} />
                        </TouchableOpacity>
                    }

                    keyExtractor={item => item.id}

                />
            </View>
            <View>
                <Text style={{ fontSize: 18, color: '#D800D2', marginLeft: '5%', marginTop: 10, fontWeight: 'bold' }}>Thriller</Text>
                <FlatList
                    data={data}
                    horizontal
                    renderItem={({ item, index }) =>

                        <TouchableOpacity onPress={() => navigation.navigate("MovieDetail")} style={{ marginLeft: 20 }}>
                            <Image source={item.image} style={{ height: 250, width: (windowWidth / 100) * 45 }} />
                        </TouchableOpacity>
                    }

                    keyExtractor={item => item.id}

                />
            </View>
            </ScrollView>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    header: {
        height: 55,
        backgroundColor: '#D800D2',
        flexDirection: 'row',
        paddingLeft: '3%',
        alignItems: 'center'
    },
    searchStyle: {
        height: 45,
        width: '60%',
        backgroundColor: '#ACA6AD',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 5,
    }
})