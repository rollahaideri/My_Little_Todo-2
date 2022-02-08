/* A context component that has our main array and some important functions */
import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const ContextTasks = createContext();
const TaskContext = (props) => {
  const [taskItems, setTaskItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    storeData(taskItems);
  }, [taskItems]);

  const storeData = async (taskItems) => {
    try {
      const jsonValue = JSON.stringify(taskItems);
      await AsyncStorage.setItem("@storage_Key", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const taskItems = await AsyncStorage.getItem("@storage_Key");
      if (taskItems !== null) {
        setTaskItems(JSON.parse(taskItems));
      }
    } catch (e) {
      console.log(e);
    }
  };
  /* A method/function that handles deleting an existing task by index */
  const deleteTask = (todoIndex) => {
    const newList = taskItems.filter((_, index) => index !== todoIndex);
    setTaskItems(newList);
  };

  return (
    <ContextTasks.Provider value={{ taskItems, setTaskItems, deleteTask }}>
      {props.children}
    </ContextTasks.Provider>
  );
};

export default TaskContext;
