import {ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Save, ToDoCard} from '../../components/index';

const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (text.length > 0) {
      setTodos([...todos, {title: text, completed: false}]);
      setText('');
    }
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.counter}>
          {todos.filter(todo => !todo.completed).length}
        </Text>
      </View>
      <ScrollView style={styles.todobody}>
        {todos.map((todo, index) => (
          <ToDoCard
            key={index}
            title={todo.title}
            onPress={() => toggleTodo(index)}
            onDelete={() => deleteTodo(index)}
          />
        ))}
      </ScrollView>

      <View style={styles.content}>
        <View style={styles.body}>
          <Save text={text} setText={setText} addTodo={addTodo} />
        </View>
      </View>
    </View>
  );
};

export default App;
