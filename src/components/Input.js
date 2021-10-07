import React, {useState, useEffect, useRef} from 'react';
import {TextInput, Text, View, Animated} from 'react-native';
import {Color} from '../helpers';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';

const Input = ({label, value, iconRight, iconLeft, secure, ...props}) => {
  const [focus, setFocus] = useState(false);
  const [iconSecure, setIconSecure] = useState('eye-outline');
  const [secureText, setSecureText] = useState(secure);
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const textInputRef = useRef();

  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: focus || value != '' ? 1 : 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [focus, value]);

  const labelStyle = {
    fontFamily: 'Inter-Medium',
    color: focus ? Color.primary : Color.gray,
    position: 'absolute',
    left: 5,
    top: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [13, -8],
    }),
    fontSize: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 12],
    }),
    zIndex: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };

  const inputStyle = {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    paddingHorizontal: 5,
    minHeight: 45,
    color: Color.primary,
    position: 'relative',
  };

  const iconLeftStyle = {
    padding: iconLeft ? 5 : 0,
    justifyContent: 'center',
  };

  const iconRightStyle = {
    padding: iconRight ? 5 : 0,
    justifyContent: 'center',
  };

  const secureStyle = {
    padding: iconRight ? 5 : 0,
    borderRadius: 50,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const wrapperStyle = {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: focus ? Color.primary : Color.softDark,
  };

  const handleSecure = () => {
    if (secureText == true) {
      setIconSecure('eye-off-outline');
      setSecureText(false);
    } else {
      setIconSecure('eye-outline');
      setSecureText(true);
    }
  };

  return (
    <View style={wrapperStyle}>
      <View style={iconLeftStyle}>
        <Icon name={iconLeft} size={25} color={Color.primary} />
      </View>
      <View style={{flex: 1}}>
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
        <TextInput
          ref={textInputRef}
          value={value}
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={secure ? secureText : false}
          onPressIn={() => {
            textInputRef.current?.blur();
            textInputRef.current?.focus();
          }}
          {...props}
        />
      </View>
      {secure ? (
        <Ripple
          style={secureStyle}
          rippleColor={Color.gray}
          rippleContainerBorderRadius={50}
          onPress={() => handleSecure()}>
          <Icon name={iconSecure} size={25} color={Color.primary} />
        </Ripple>
      ) : (
        <View style={iconRightStyle}>
          <Icon name={iconRight} size={25} color={Color.primary} />
        </View>
      )}
    </View>
  );
};

export default Input;
