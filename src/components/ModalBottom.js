import React, {useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../components';
import {Color} from '../helpers';
import BottomSheet from 'react-native-bottomsheet-reanimated';
import {Portal} from 'react-native-portalize';

const ModalBottom = props => {
  const modalRef = useRef();

  const show = () => {
    modalRef.current.snapTo(1);
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          bgColor={Color.primary}
          color={Color.white}
          onPress={() => show()}>
          Buka Modal
        </Button>
      </View>

      <Portal>
        <BottomSheet
          ref={modalRef}
          keyboardAware
          overDrag={false}
          bottomSheerColor="#FFFFFF"
          initialPosition={0} //200, 300
          snapPoints={[0, '40%', '80%', '100%']}
          isBackDrop={true}
          isBackDropDismissByPress={true}
          isRoundBorderWithTipHeader={true}
          backDropColor="rgba(0,0,0,.5)"
          containerStyle={{
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}
          header={
            <View>
              <Text style={styles.text}>Header</Text>
            </View>
          }
          body={<View style={styles.body}>{props.children}</View>}
        />
      </Portal>
    </>
  );
};

export default ModalBottom;

const styles = StyleSheet.create({});
