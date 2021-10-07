import React from 'react';
import {Text, View} from 'react-native';
import {Color} from '../helpers';

const Badge = props => {
  const badgeStyles = {
    backgroundColor: props.bgColor ? props.bgColor : Color.primary,
    borderColor: props.borderColor,
    borderWidth: props.borderColor ? 1 : 0,
    paddingHorizontal: 5,
    // paddingVertical: 5,
    height: 20,
    minWidth: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'absolute',
    position:
      props.top || props.right || props.bottom || props.left
        ? 'absolute'
        : 'relative',
    top: props.top,
    right: props.right,
    bottom: props.bottom,
    left: props.left,
  };

  const badgeText = {
    color: props.textColor ? props.textColor : Color.white,
    fontFamily: 'Inter-Bold',
    fontSize: 10,
  };

  return (
    <View style={badgeStyles}>
      <Text style={badgeText}>{props.children}</Text>
    </View>
  );
};

export default Badge;
