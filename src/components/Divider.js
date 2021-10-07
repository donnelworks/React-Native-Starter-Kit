import React from 'react';
import {View} from 'react-native';
import {Color} from '../helpers';

const Divider = ({size, color}) => {
  const dividerStyle = {
    borderBottomWidth: size ? size : 1,
    borderColor: color ? color : Color.light,
  };

  return <View style={dividerStyle} />;
};

export default Divider;
