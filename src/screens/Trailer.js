import React, { useState, useRef } from 'react';

import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

import VideoPlayer from 'react-native-video-player';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Trailer ({navigation}) {

    return (
        <View style={{ flex: 1, backgroundColor: '#CCD8DC' }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={35} color="#D800D2" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("ShareTrailer")} style={{marginLeft: 'auto', marginRight: '10%'}}>
                    <Icon name="share" size={35} color="#D800D2" />
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: '5%'}}>
                    <Icon name="bookmark-outline" size={35} color="#D800D2" />
                </TouchableOpacity>
            </View>
            <View style={styles.videoView}>
                <VideoPlayer
                    video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                    videoWidth={1600}
                    videoHeight={900}
                    thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                />
            </View>
            <Text style={{ fontSize: 16, color: '#D800D2', marginTop: 15, marginHorizontal: '5%', textAlign: 'center' }}>
                Frozen-|| Official Trailer97,406,624 view. Jun 11,2019
            </Text>
            <Text style={{ fontSize: 16, color: '#D800D2', marginTop: 20, marginHorizontal: '5%', textAlign: 'center' }}>
                Walt Disney Animation Studio
            </Text>
            <Text style={{ fontSize: 16, color: '#D800D2', marginTop: 15, marginHorizontal: '5%', textAlign: 'center' }}>
                4.68M subscribers
            </Text>
            <Text style={{ fontSize: 16, color: '#D800D2', marginTop: 15, marginHorizontal: '5%', textAlign: 'center' }}>
                Check out the Frozen-|| Official Trailer now and see the film in theaters November 22Why was elsa born with magical Powers? The answer is calling her and threatning her kingdom
            </Text>
        </View>
    );
};

export default Trailer;

const styles = StyleSheet.create({
    header: {
        height: 55,
        flexDirection: 'row',
        paddingLeft: '3%',
        alignItems: 'center'
    },
    container: {
        flex: 1,
    },
    videoView: {
        height: 200
    },
});