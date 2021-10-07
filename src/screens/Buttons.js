import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Button, Gap} from '../components';
import {Color} from '../helpers';

const Buttons = ({navigation}) => {
  return (
    <Container>
      <View style={{marginHorizontal: 20}}>
        <Gap height={5} />
        <Button bgColor={Color.primary} color={Color.white}>
          Login
        </Button>
        <Gap height={5} />
        <Button bgColor={Color.primary} color={Color.white} iconLeft="login">
          Login
        </Button>
        <Gap height={5} />
        <Button bgColor={Color.primary} color={Color.white} iconRight="logout">
          Logout
        </Button>
        <Gap height={5} />
        <Button
          bgColor={Color.softPrimary}
          color={Color.primary}
          loading={true}
          disabled={true}>
          Logout
        </Button>
        <Gap height={5} />
        <Button bgColor={Color.primary} color={Color.white} rounded>
          Rounded
        </Button>
        <Gap height={5} />
        <Button bgColor={Color.danger} color={Color.white}>
          Danger
        </Button>
        <Gap height={5} />
        <Button bgColor={Color.primary} color={Color.softPrimary}>
          Danger
        </Button>
        <Gap height={5} />
        <Button
          size="sm"
          bgColor={Color.primary}
          color={Color.softPrimary}
          iconLeft="email-outline">
          Small
        </Button>
        <Gap height={5} />
        <Button
          size="lg"
          bgColor={Color.primary}
          color={Color.softPrimary}
          iconRight="send">
          Large
        </Button>
      </View>
    </Container>
  );
};

export default Buttons;

const styles = StyleSheet.create({});
