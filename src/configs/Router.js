import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Home,
  Buttons,
  Inputs,
  Selects,
  Badges,
  Avatars,
  Forms,
  ModalBottoms,
} from '../screens';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Buttons" component={Buttons} />
      <Stack.Screen name="Inputs" component={Inputs} />
      <Stack.Screen name="Forms" component={Forms} />
      <Stack.Screen name="Selects" component={Selects} />
      <Stack.Screen name="Avatars" component={Avatars} />
      <Stack.Screen name="Badges" component={Badges} />
      <Stack.Screen
        name="ModalBottoms"
        component={ModalBottoms}
        options={{title: 'Modal Bottom'}}
      />
    </Stack.Navigator>
  );
};

export default Router;
