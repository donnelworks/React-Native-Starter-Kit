import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Color} from '../helpers';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';
import {Avatar} from '../components';

const List = ({
  container,
  accent,
  iconLeft,
  iconRight,
  title,
  description,
  ...props
}) => {
  const closeSwipe = (map, key) => {
    if (map[key]) {
      map[key].closeRow();
    }
  };
  const iconLeftWrapper = {
    padding: iconLeft ? 5 : 0,
    justifyContent: 'center',
  };

  const iconRightWrapper = {
    padding: iconRight ? 5 : 0,
    justifyContent: 'center',
  };

  const textJudul = {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: accent ? accent : Color.dark,
  };

  return (
    <Ripple
      {...props}
      rippleColor={Color.gray}
      style={{paddingHorizontal: container ? 20 : 0}}>
      <View style={styles.listWrapper}>
        <View style={iconLeftWrapper}>
          <Icon
            name={iconLeft}
            size={35}
            color={accent ? accent : Color.dark}
          />
        </View>

        <View style={styles.contentWrapper}>
          <View style={styles.itemCenter}>
            <Text style={textJudul}>{title}</Text>
            {description && (
              <Text style={styles.textDeskripsi}>{description}</Text>
            )}
          </View>

          <View style={iconRightWrapper}>
            <Icon name={iconRight} size={30} color={Color.softDark} />
          </View>
        </View>
      </View>
    </Ripple>
  );
};

export default List;

const styles = StyleSheet.create({
  listWrapper: {
    flexDirection: 'row',
    marginTop: 10,
  },
  contentWrapper: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Color.light,
    paddingVertical: 5,
  },
  itemCenter: {
    flex: 1,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
  },
  textDeskripsi: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: Color.gray,
  },
});
