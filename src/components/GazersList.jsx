import React from 'react';
import {FlatList, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Gazer from './Gazer';
import MessageScreen from './MessageScreen';
import EmptyList from './EmptyList';
import colors from '../theme/colors';

const mockedData = [{name: 'Hanna'}, {name: 'Mia'}, {name: 'Suffis'}];

const ItemSeparator = () => <View style={{height: 10}} />;

const ListHeader = () => (
<View style={styles.headerContainer}> 
  <Text style={styles.headerText}>Stargazers</Text>
</View>
);

export default GazersList = ({gazers, message, loadMoreElements, loadMoreIsLoading}) => {
//put this is app component?
  if(message){
    return(
    <MessageScreen/>
    )
  }
  return (
    <FlatList
    style={{flex:1, padding:20}}
    contentContainerStyle={{paddingBottom:50}}
      data={gazers}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Gazer item={item} />}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={ListHeader}
      onEndReachedThreshold={0.1}
      onEndReached={loadMoreElements}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={() => {
          if (loadMoreIsLoading) {
            return (
              <View testID="list-loading-spinner" style={{ flex: 1 }}>
                <ActivityIndicator color={colors.blue500} size='small' />
              </View>
            );
          }
          return null;
        }}
        ListEmptyComponent={EmptyList}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.dark100,
  },
});
