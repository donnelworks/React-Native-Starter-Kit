import React from 'react';
import {SafeAreaView} from 'react-native';
import {Color} from '../helpers';

const Container = ({bgColor, children}) => {
  const containerStyle = {
    flex: 1,
    backgroundColor: bgColor ? bgColor : Color.white,
  };

  return <SafeAreaView style={containerStyle}>{children}</SafeAreaView>;
};

export default Container;
