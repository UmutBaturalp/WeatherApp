import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
const windowWidth = Dimensions.get('window').width;
import {cities} from '../../assets/contants';
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;
const SelectModal = props => {
  const {selected, setSelected, metot, modalFunc, isVisible} = props;
  const data = cities;
  return (
    <View>
      <Modal transparent={true} visible={isVisible}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <SelectList
              setSelected={val => setSelected(val)}
              boxStyles={{
                width: windowWidth * 0.7,
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: 'black',
              }}
              search={true}
              placeholder="Şehir Seçin"
              searchPlaceholder="Adana"
              dropdownTextStyles={{
                color: 'black',
                fontSize: windowWidth * 0.035,
                fontWeight: '500',
              }}
              dropdownStyles={{maxHeight: windowHeight * 0.2}}
              searchicon={false}
              data={data}
              save="value"
            />
            <TouchableOpacity
              onPress={() => {
                modalFunc();
                metot();
              }}
              style={styles.button}>
              <Text style={styles.buttonText}>Onayla</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SelectModal;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //---------------------------------------
  wrapper: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.4,
    backgroundColor: '#fafafa',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: windowHeight * 0.02,
  },
  button: {
    width: windowWidth * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: windowWidth * 0.02,
    backgroundColor: '#153448',
    borderRadius: windowWidth * 0.03,
  },
  buttonText: {
    fontSize: windowWidth * 0.04,
    color: 'white',
    fontWeight: '600',
  },
});
