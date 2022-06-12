//React Native FlatList Pagination to Load More Data dynamically – Infinite List
//https://aboutreact.com/react-native-flatlist-pagination-to-load-more-data-dynamically-infinite-list/

//import React in our code
import React, {useState, useEffect} from 'react';

//import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

const FlatListPagination = () => {
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(1);

  useEffect(() => getData(), []);

  useEffect(() => {
    let temp = [
      {userId: 1, id: 1, title: 'delectus aut autem', completed: false},
      {userId: 1, id: 2, title: 'quis ut nam facilis', completed: false},
      {userId: 1, id: 3, title: 'fugiat veniam minus', completed: false},
    ];
    let temp2 = [
      // {userId: 1, id: 1, title: 'delectus aut autem', completed: false},
      {userId: 3, id: 4, title: 'laboriosam mollitia', completed: 'sdf'},
    ];

    // let merge = (temp, temp2) => ({...temp, ...temp2});

    // let temp3 = [...temp, ...temp2];
    console.log('OK: ', merge(temp, temp2));
  }, []);

  const merge = (obj1, obj2) => ({...obj1, ...obj2});

  const getData = () => {
    console.log('getData');
    setLoading(true);
    //Service to get the data from the server to render
    fetch('https://aboutreact.herokuapp.com/getpost.php?offset=' + offset)
      //Sending the currect offset with get request
      .then(response => response.json())
      .then(responseJson => {
        //Successful response from the API Call
        setOffset(offset);
        //After the response increasing the offset for the next API call.
        setDataSource([...dataSource, ...responseJson.results]);
        console.log('OBJECT dataSource: ', dataSource);
        console.log('OBJECT responseJson: ', responseJson.results);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={getData}
          //On Click of button calling getData function to load more data
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {loading ? (
            <ActivityIndicator color="white" style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };

  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          flex: 1,
        }}>
        <View style={{flex: 4}}>
          <Text style={styles.itemStyle} onPress={() => getItem(item)}>
            {item.id}
            {'.'}
            {item.title.toUpperCase()}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => {
              console.log('PRESS DELETE');
              deleteItemById(item.id);
            }}>
            <Text>DELETE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 10,
          width: '100%',
          backgroundColor: '#C8C8C8',
          borderWidth: 1,
        }}
      />
    );
  };

  const getItem = item => {
    //Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  const deleteItemById = id => {
    const filteredData = dataSource.filter(item => item.id !== id);
    setDataSource(filteredData);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={dataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          enableEmptySections={true}
          renderItem={ItemView}
          ListFooterComponent={renderFooter}
          // onEndReached={() => getData()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    borderWidth: 1,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default FlatListPagination;
