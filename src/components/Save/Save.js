import {Pressable, Text, TextInput, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';

const Save = ({text, setText, addTodo}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Yapılacak..."
        placeholderTextColor={'#889196'}
        value={text}
        onChangeText={setText}
      />
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            text.length > 0 && {backgroundColor: '#ffa500'},
          ]}
          onPress={addTodo}>
          <Text style={styles.buttonText}>Kaydet</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Save;
