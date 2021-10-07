import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Badge, Container, Gap} from '../components';
import {Color} from '../helpers';

const Badges = () => {
  return (
    <Container>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Badge>Normal Badge</Badge>
        <Gap height={10} />
        <Badge bgColor={Color.softDanger} textColor={Color.danger}>
          Danger
        </Badge>
        <Gap height={10} />
        <Badge
          bgColor={Color.softPrimary}
          textColor={Color.primary}
          borderColor={Color.primary}>
          9+
        </Badge>
      </View>
    </Container>
  );
};

export default Badges;

const styles = StyleSheet.create({});
