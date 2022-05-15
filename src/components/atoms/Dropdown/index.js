import {StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {colors, fonts, sizes} from '../../../utils';

const Dropdown = ({title}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.input}>
        <Picker
          style={styles.picker}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Select your city" value="select" />
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  title: {
    fontFamily: fonts[400],
    fontSize: sizes[16],
    color: colors.secondary,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 8,
    // paddingHorizontal: 0,
  },
  picker: {
    color: colors.secondary_variant,
    fontFamily: fonts[400],
    fontSize: sizes[11],
  },
});
