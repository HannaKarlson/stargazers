import React from 'react';
import {FlatList, StyleSheet, View, ActivityIndicator} from 'react-native';
import Gazer from './Gazer';
import EmptyList from './EmptyList';
import {AppHeader} from './AppText';
import colors from '../theme/colors';

const ItemSeparator = () => <View style={styles.separator} />;

const ListHeader = () => (
  <View style={styles.headerContainer}>
    <AppHeader>Stargazers</AppHeader>
  </View>
);

const renderListFooter = loadMoreIsLoading => () => {
  if (loadMoreIsLoading) {
    return (
      <View testID="list-loading-spinner" style={styles.footer}>
        <ActivityIndicator color={colors.blue500} size="small" />
      </View>
    );
  }
  return null;
};

const GazersList = ({gazers, loadMoreElements, loadMoreIsLoading}) => {
  return (
    <FlatList
      style={styles.flatList}
      contentContainerStyle={styles.contentContaier}
      data={gazers}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Gazer item={item} />}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={ListHeader}
      onEndReachedThreshold={0.1}
      onEndReached={loadMoreElements}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={renderListFooter(loadMoreIsLoading)}
      ListEmptyComponent={EmptyList}
    />
  );
};

export default GazersList;

const styles = StyleSheet.create({
  contentContaier: {
    paddingBottom: 50,
  },
  flatList: {
    flex: 1,
    padding: 20,
  },
  footer: {
    flex: 1,
  },
  headerContainer: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.dark100,
  },
  separator: {
    height: 10,
  },
});
