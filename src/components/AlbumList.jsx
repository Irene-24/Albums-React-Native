import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import AlbumDetail from './AlbumDetail';

const AlbumList = () => {
  const {container} = styles;

  return (
    <View style={container}>
      <AlbumDetail />
    </View>
  );
};

export default AlbumList;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
