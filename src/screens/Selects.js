import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Container, Gap, Select} from '../components';

const Selects = () => {
  const [agama, setAgama] = useState('');
  const [jenkel, setJenkel] = useState('');

  const dataAgama = [
    {label: 'Islam', value: 1},
    {label: 'Kristen', value: 2},
    {label: 'Katholik', value: 3},
    {label: 'Hindu', value: 4},
    {label: 'Buddha', value: 5},
    {label: 'Konghuchu', value: 6},
  ];

  return (
    <Container>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <Select
          label="Agama"
          placeholder="Pilih Agama"
          dataSelect={dataAgama}
          selectedValue={agama}
          searching={true}
          onChangeValue={data => setAgama(data)}
        />
        <Gap height={10} />
        <Select
          label="Jenis Kelamin"
          required={true}
          placeholder="Pilih Jenis Kelamin"
          dataSelect={[
            {label: 'Laki-Laki', value: 1},
            {label: 'Perempuan', value: 2},
          ]}
          selectedValue={jenkel}
          onChangeValue={data => setJenkel(data)}
        />
      </View>
    </Container>
  );
};

export default Selects;

const styles = StyleSheet.create({});
