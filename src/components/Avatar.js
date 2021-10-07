import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Fungsi, Color} from '../helpers';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Avatar = ({
  size,
  bgColor,
  color,
  source,
  editable,
  borderColor,
  ...props
}) => {
  const editImage = () => {
    if (editable) {
      alert('Edit Image');
    }
  };

  const avatarStyle = {
    width: size,
    height: size,
    backgroundColor: source ? 'transparent' : bgColor,
    borderRadius: 999,
    borderWidth: borderColor ? 3 : 0,
    borderColor: borderColor,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  const imageStyle = {
    width: size,
    height: size,
    borderRadius: 999,
  };

  const textStyle = {
    fontSize: size / 2.5,
    fontFamily: 'Inter-SemiBold',
    color: color,
  };

  const editStyle = {
    width: size / 2.5,
    height: size / 2.5,
    backgroundColor: Color.black,
    opacity: 0.8,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  };

  return (
    <>
      <Pressable onPress={() => editImage()}>
        <View style={avatarStyle} {...props}>
          {source ? (
            <Image source={source} style={imageStyle} />
          ) : (
            <Text style={textStyle}>{Fungsi.initial(props.children)}</Text>
          )}
          {editable && (
            <View style={editStyle}>
              <Icon
                name="image-edit-outline"
                size={size / 4.5}
                color={Color.white}
              />
            </View>
          )}
        </View>
      </Pressable>
    </>
  );
};

export default Avatar;

const styles = StyleSheet.create({});
