import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Text, FlatList, StyleSheet, } from 'react-native';
import Input from '../components/TextInput';
import ButtonLarge from '../components/ButtonLarge';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SearchBar } from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const dataArray = [
  {
    id: '1',
    title: 'Frozen D'
  },
  {
    id: '2',
    title: 'Xmen de'
  },
  {
    id: '3',
    title: 'Amazing Content'
  },
  {
    id: '4',
    title: 'Demo'
  },
]

function Search({ navigation }) {
  const [search, setSearch] = useState("")
  const [searchArray, setSearchArray] = useState([])

  const onChange = (search) => {
    setSearch(search)
    console.log(search)
    let data = dataArray.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).map(({ title }) => ({ title }));
    setSearchArray(data)
    console.log("DATA", searchArray)
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#EEF1F8' }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="keyboard-arrow-left" size={35} color="white" />
        </TouchableOpacity>
        <SearchBar
          containerStyle={{ width: '70%', backgroundColor: 'transparent' }}
          inputContainerStyle={{ height: 45, width: '100%', backgroundColor: '#ACA6AD' }}
          placeholderTextColor="white"
          inputStyle={{ color: 'white', paddingLeft: -15 }}
          leftIconContainerStyle={{ marginLeft: 3, marginRight: -10 }}
          rightIconContainerStyle={{ marginRight: 0 }}
          placeholder="Type Here..."
          onChangeText={(text) => onChange(text)}
          value={search}
          returnKeyType="search"
          autoFocus={true}
        />
        <TouchableOpacity>
          <Text style={{ fontSize: 16, color: 'white' }}>Cancel</Text>
        </TouchableOpacity>
      </View>
      {search != "" ?
        <FlatList
          data={searchArray}
          renderItem={({ item, index }) =>

            <View style={styles.listView}>
              <TouchableOpacity onPress={() => navigation.navigate("SearchResults")} style={styles.itemStyle}>
                <Text style={styles.textStyle}>
                  {item.title}
                </Text>
              </TouchableOpacity>

            </View>
          }

          keyExtractor={item => item.id}

        />
        : null
      }
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: '#D800D2',
    flexDirection: 'row',
    paddingLeft: '3%',
    alignItems: 'center'
  },
  listView: {
    maxHeight: 250,
    backgroundColor: 'white'
  },
  itemStyle: {
    height: 45,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  textStyle: {
    marginLeft: '5%'
  }
})