import {Pressable, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

const ToDoCard = props => {
  const [pressed, setPressed] = useState(false);

  const handleLongPress = () => {
    props.onDelete();
  };

  const togglePressed = () => {
    setPressed(!pressed);
    props.onPress(!pressed);
  };

  return (
    <Pressable
      style={[
        styles.container,
        {backgroundColor: pressed ? '#37474f' : '#7da453'},
      ]}
      onPress={togglePressed}
      onLongPress={handleLongPress}>
      <Text
        style={[
          styles.title,
          {textDecorationLine: pressed ? 'line-through' : 'none'},
        ]}>
        {props.title}
      </Text>
    </Pressable>
  );
};

export default ToDoCard;
