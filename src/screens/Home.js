import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, List} from '../components';
import {Color} from '../helpers';

const Home = ({navigation}) => {
  return (
    <Container>
      <List
        onPress={() => navigation.navigate('Buttons')}
        container={true}
        iconRight="chevron-right"
        title="Buttons"
        description="Komponen untuk tombol"
        accent={Color.primary}
      />
      <List
        onPress={() => navigation.navigate('Inputs')}
        container={true}
        iconRight="chevron-right"
        title="Inputs"
        description="Komponen untuk input biasa"
        accent={Color.primary}
      />
      <List
        onPress={() => navigation.navigate('Forms')}
        container={true}
        iconRight="chevron-right"
        title="Forms"
        description="Komponen untuk sebuah form"
        accent={Color.primary}
      />
      <List
        onPress={() => navigation.navigate('Selects')}
        container={true}
        iconRight="chevron-right"
        title="Selects"
        description="Komponen untuk input select"
        accent={Color.primary}
      />
      <List
        onPress={() => navigation.navigate('Avatars')}
        container={true}
        iconRight="chevron-right"
        title="Avatars"
        description="Komponen untuk membuat avatar user"
        accent={Color.primary}
      />
      <List
        onPress={() => navigation.navigate('Badges')}
        container={true}
        iconRight="chevron-right"
        title="Badges"
        description="Komponen untuk badge"
        accent={Color.primary}
      />
      <List
        onPress={() => navigation.navigate('ModalBottoms')}
        container={true}
        iconRight="chevron-right"
        title="Modal Bottoms"
        description="Komponen untuk modal bottom"
        accent={Color.primary}
      />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
