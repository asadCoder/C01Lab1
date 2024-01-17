import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask'


const ToDoList = ({initialValues}) => {
	const [tasks, setTasks] = useState(initialValues.map((value) => ({ id: uuidv4(), title: value })));

	const addToDo = (newTitle) => {
		const newToDoList = {id : uuidv4(), title: newTitle};
		setTasks((prevTasks) => [...prevTasks, newToDoList]);
	  };

	const removeToDo = (id) => {
		setTasks((prevTasks) =>
		  prevTasks.filter((task) => task.id !== id)
		);
	  };
	  
	return (
		<View style={styles.todoListContainer}>
			{tasks.map((task) => (
        		<View key={task.id}>
          		<Text style={styles.todoItem}>{task.title}
            	<Button title="Remove" onPress={() => removeToDo(task.id)} />
				</Text>
        </View>
      ))}
	  <AddTask onAddTask={addToDo}></AddTask>
		</View>
	  );
}

ToDoList.defaultProps = {
	initialValues: [""],
  };


const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList;