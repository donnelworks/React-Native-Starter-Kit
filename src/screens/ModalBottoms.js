import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, ModalBottom} from '../components';

const ModalBottoms = () => {
  return (
    <Container>
      <ModalBottom>
        <Text>Test 1</Text>
      </ModalBottom>

      <ModalBottom>
        <Text>Test 2</Text>
      </ModalBottom>
    </Container>
  );
};

export default ModalBottoms;

const styles = StyleSheet.create({});
