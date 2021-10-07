import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Input, Gap, Button} from '../components';

const Inputs = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const values = {
    username: username,
    email: email,
    pass: pass,
  };

  return (
    <Container>
      <View style={{marginHorizontal: 20}}>
        <Input
          label="Username"
          value={values.username}
          onChangeText={text => setUsername(text)}
        />
        <Input
          label="Email"
          iconLeft="email-outline"
          value={values.email}
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
        />
        <Input
          label="Password"
          iconLeft="lock-outline"
          secure={true}
          value={values.pass}
          onChangeText={text => setPass(text)}
        />
      </View>
    </Container>
  );
};

export default Inputs;

const styles = StyleSheet.create({});
