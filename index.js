/**
 * @format
 */

import React from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import {name as appName} from './app.json';

const App = () => {
  return (
    <SafeAreaView>
      <Header headerText="albums" />
      <AlbumList />
    </SafeAreaView>
  );
};

AppRegistry.registerComponent(appName, () => App);
