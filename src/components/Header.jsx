import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({headerText}) => {
  const {textStyle, container} = styles;
  return (
    <View style={container}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#eee',
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 15,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
});
