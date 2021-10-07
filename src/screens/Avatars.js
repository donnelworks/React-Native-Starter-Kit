import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Container, Gap} from '../components';
import {Color} from '../helpers';

const Avatars = () => {
  return (
    <Container>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Avatar
          borderColor={Color.softDark}
          size={80}
          bgColor={Color.primary}
          color={Color.white}>
          Donny Anggara Putra
        </Avatar>
        <Gap height={50} />
        <Avatar
          size={100}
          editable={true}
          source={{
            uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
          }}
          bgColor={Color.primary}
          color={Color.white}>
          Donny Anggara Putra
        </Avatar>
      </View>
    </Container>
  );
};

export default Avatars;

const styles = StyleSheet.create({});
