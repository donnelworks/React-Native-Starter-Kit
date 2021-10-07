import React, {useState, useRef, useEffect} from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Color} from '../helpers';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';
import ActionSheet from 'react-native-actions-sheet';
import BottomSheet from 'react-native-bottomsheet-reanimated';
import {SearchBar} from '../components';
import {Portal} from 'react-native-portalize';

const Select = ({
  label,
  icon,
  dataSelect,
  selectedValue,
  onChangeValue,
  required = false,
  searching,
  ...props
}) => {
  const [valueName, setValueName] = useState('');
  const [value, setValue] = useState('');
  const [filterData, setFilterData] = useState(dataSelect);
  const [filterValue, setFilterValue] = useState('');
  const modalRef = useRef();
  const scrollViewRef = useRef();

  useEffect(() => {
    if (selectedValue) {
      selectedData(selectedValue);
    }
  }, []);

  const show = () => {
    // modalRef.current.snapTo(1);
    modalRef.current?.setModalVisible();
  };

  const pilihData = (val, name) => {
    setValueName(name);
    onChangeValue(val);
    setValue(val);
    modalRef.current?.setModalVisible();
  };

  const selectedData = val => {
    let name = dataSelect.filter(i => i.value == val).map(e => e.label);
    let value = dataSelect.filter(i => i.value == val).map(e => e.value);
    setValueName(String(name));
    onChangeValue(value);
    setValue(value);
  };

  const cariData = text => {
    let filter = dataSelect.filter(i =>
      i.label.toLowerCase().includes(text.toLowerCase()),
    );
    setFilterValue(text);
    setFilterData(filter);
  };

  const closeModal = () => {
    setFilterValue('');
    cariData('');
  };

  const clearSelected = () => {
    setValueName('');
    setValue('');
    onChangeValue('');
    modalRef.current?.setModalVisible();
  };

  const iconStyle = {
    padding: icon ? 5 : 0,
    justifyContent: 'center',
  };

  const modalWrapper = {
    flex: 1,
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => show()}>
        <View style={styles.wrapperStyle}>
          <View style={iconStyle}>
            <Icon name={icon} size={25} color={Color.primary} />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
              value={valueName}
              style={styles.inputStyle}
              editable={false}
              {...props}
            />
          </View>
          <View style={styles.iconArrowStyle}>
            <Icon name="menu-down" size={25} color={Color.gray} />
          </View>
        </View>
      </TouchableWithoutFeedback>

      <Portal>
        <ActionSheet
          ref={modalRef}
          keyboardMode="position"
          springOffset={200}
          gestureEnabled={true}
          statusBarTranslucent={true}
          onClose={() => closeModal()}
          CustomHeaderComponent={
            <View style={styles.headerSelectContainer}>
              <Text style={styles.headerSelectText}>{props.placeholder}</Text>
            </View>
          }
          containerStyle={{
            height: '100%',
            borderBottomStartRadius: 0,
            borderBottomEndRadius: 0,
            borderTopStartRadius: 25,
            borderTopEndRadius: 25,
          }}>
          <View>
            {searching && (
              <View style={styles.searchBarWrapper}>
                <SearchBar
                  value={filterValue}
                  onChangeText={text => cariData(text)}
                />
              </View>
            )}
            <ScrollView
              style={styles.optionsContainer}
              ref={scrollViewRef}
              nestedScrollEnabled={true}
              keyboardShouldPersistTaps="always"
              onScrollEndDrag={() => modalRef.current?.handleChildScrollEnd()}
              onScrollAnimationEnd={() =>
                modalRef.current?.handleChildScrollEnd()
              }
              onMomentumScrollEnd={() =>
                modalRef.current?.handleChildScrollEnd()
              }>
              {required == false && (
                <BlankOption
                  label="Tidak ada"
                  onPress={() => clearSelected()}
                />
              )}
              {filterData.length > 0 ? (
                filterData.map((data, i) => {
                  return (
                    <Option
                      key={i}
                      label={data.label}
                      value={data.value}
                      selected={value}
                      onPress={() => pilihData(data.value, data.label)}
                    />
                  );
                })
              ) : (
                <View style={{width: '100%', alignItems: 'center'}}>
                  <Text>Tidak ada data.</Text>
                </View>
              )}
            </ScrollView>
          </View>
        </ActionSheet>
      </Portal>
    </>
  );
};

const Option = ({label, value, selected, ...props}) => {
  const options = {
    backgroundColor: selected == value ? Color.primary : 'transparent',
    paddingHorizontal: 20,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const textOptions = {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: selected == value ? Color.white : Color.dark,
  };

  return (
    <Ripple
      rippleDuration={600}
      rippleColor={Color.gray}
      style={options}
      {...props}>
      <Text style={textOptions}>{label}</Text>
      {selected == value && <Icon name="check" size={20} color={Color.white} />}
    </Ripple>
  );
};

const BlankOption = ({label, ...props}) => {
  const options = {
    paddingHorizontal: 20,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const textOptions = {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: Color.softDark,
  };

  return (
    <Ripple
      rippleDuration={600}
      rippleColor={Color.gray}
      style={options}
      {...props}>
      <Text style={textOptions}>{label}</Text>
    </Ripple>
  );
};

export default Select;

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: 'Inter-Medium',
    color: Color.gray,
    position: 'absolute',
    left: 5,
    top: -8,
    fontSize: 12,
  },
  inputStyle: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    paddingHorizontal: 5,
    minHeight: 45,
    color: Color.primary,
    position: 'relative',
  },
  iconArrowStyle: {
    padding: 5,
    justifyContent: 'center',
  },
  wrapperStyle: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: Color.softDark,
  },
  optionsContainer: {
    paddingBottom: 15,
  },
  headerSelectContainer: {
    marginHorizontal: 20,
    padding: 15,
    borderBottomColor: Color.softDark,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  headerSelectText: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: Color.dark,
  },
  searchBarWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  searchWrapper: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.softDark,
    backgroundColor: Color.softSecondary,
  },
  inputSearch: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    paddingHorizontal: 5,
    minHeight: 45,
    color: Color.primary,
    position: 'relative',
  },
  icon: {
    padding: 5,
    justifyContent: 'center',
  },
});
