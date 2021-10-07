import React, {useState, useRef} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Container, Gap, Input, Select} from '../components';
import {Color} from '../helpers';

const Forms = () => {
  // State
  const [form, setForm] = useState({
    nama: '',
    username: '',
    email: '',
    pass: '',
    jenkel: '',
  });

  const inputData = (val, input) => {
    setForm({
      ...form,
      [input]: val,
    });
  };

  const submitData = () => {
    alert(JSON.stringify(form));
  };

  return (
    <Container>
      <View style={{marginHorizontal: 20, flex: 1}}>
        <ScrollView>
          <Input
            returnKeyType="next"
            // onSubmitEditing={() => usernameRef.focus()}
            autoCapitalize="words"
            label="Nama Lengkap"
            value={form.nama}
            onChangeText={val => inputData(val, 'nama')}
          />
          <Input
            autoCapitalize="none"
            label="Username"
            value={form.username}
            onChangeText={val => inputData(val, 'username')}
          />
          <Input
            autoCapitalize="none"
            keyboardType="email-address"
            label="Email"
            value={form.email}
            onChangeText={val => inputData(val, 'email')}
          />
          <Input
            autoCapitalize="none"
            secure={true}
            label="Password"
            value={form.pass}
            onChangeText={val => inputData(val, 'pass')}
          />
          <Select
            label="Jenis Kelamin"
            required={true}
            placeholder="Pilih Jenis Kelamin"
            dataSelect={[
              {label: 'Laki-Laki', value: 1},
              {label: 'Perempuan', value: 2},
            ]}
            selectedValue={form.jenkel}
            onChangeValue={val => inputData(val, 'jenkel')}
          />
        </ScrollView>
        <Gap height={10} />
        <Button
          onPress={submitData}
          bgColor={Color.primary}
          color={Color.white}
          iconLeft="content-save-outline">
          Simpan
        </Button>
        <Gap height={10} />
      </View>
    </Container>
  );
};

export default Forms;

const styles = StyleSheet.create({});
