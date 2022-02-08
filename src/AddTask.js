/* A component that handle adding a new task to our taskItems array */
import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
  Image,
  Alert,
} from "react-native";

import { ContextTasks } from "./TaskContext";

const AddTask = () => {
  const [task, setTask] = useState("");
  const { taskItems, setTaskItems } = useContext(ContextTasks);
  /* A function or method to handle adding a new task */
  const AddTheTask = () => {
    if (task === "") {
      Alert.alert("Error", "Please write a task");
    } else {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask("");
      Alert.alert("Succeful", "Your task has been succefully added");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.writeTaskContainer}>
        <TextInput
          style={styles.input}
          placeholder={"Write a new task..."}
          autoFocus={true}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        {/* A button which handles adding task */}
        <TouchableOpacity onPress={() => AddTheTask()}>
          <View style={styles.addContainer}>
            <Text style={styles.addText}>CREATE</Text>
          </View>
        </TouchableOpacity>
        {/* Here is our conditional rendering to diffrent platform */}
        <View>
          {Platform.OS === "ios" ? (
            <Image style={styles.photo} source={require("../assets/iOS.png")} />
          ) : (
            <Image
              style={styles.photo}
              source={require("../assets/Android.png")}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8EAED",
    flex: 1,
  },
  writeTaskContainer: {
    top: 20,
    width: "100%",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 5,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 350,
    marginBottom: 20,
  },
  addContainer: {
    width: 300,
    height: 40,
    backgroundColor: "#FFCC33",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#fff",
  },
  photo: {
    width: 400,
    height: 300,
    marginTop: 100,
    flexWrap: "wrap",
    marginLeft: 30,
  },
});
