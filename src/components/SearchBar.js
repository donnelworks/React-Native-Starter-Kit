import React, {useRef} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Color} from '../helpers';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchBar = ({...props}) => {
  const textInputRef = useRef();

  return (
    <View style={styles.searchWrapper}>
      <View style={styles.icon}>
        <Icon name="magnify" size={25} color={Color.softDark} />
      </View>
      <View style={{flex: 1}}>
        <TextInput
          ref={textInputRef}
          style={styles.inputSearch}
          placeholderTextColor={Color.softDark}
          placeholder="Cari data"
          onPressIn={() => {
            textInputRef.current?.blur();
            textInputRef.current?.focus();
          }}
          {...props}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.softDark,
    backgroundColor: Color.softSecondary,
  },
  inputSearch: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    paddingHorizontal: 5,
    minHeight: 45,
    color: Color.primary,
    position: 'relative',
  },
  icon: {
    padding: 5,
    justifyContent: 'center',
  },
});
