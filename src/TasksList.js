/* A reusable custom component to show every task we add to our to do list */
import { useContext } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
  Alert,
} from "react-native";
import { ContextTasks } from "./TaskContext";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const TasksList = ({ navigation }) => {
  const { taskItems, deleteTask } = useContext(ContextTasks);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>My Todo List</Text>
        {/* A button to navigate to Add Task screen */}
        <TouchableOpacity onPress={() => navigation.navigate("AddTask")}>
          <View style={styles.addContainer}>
            <Text style={styles.addBtn}>+</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Here I show a image if the taskItems is empty for better UX I suppose */}
        {taskItems.length === 0 ? (
          <View style={{ flex: 1 }}>
            <Image
              style={styles.emptyList}
              source={require("../assets/emptyList.png")}
            />
          </View>
        ) : (
          /* Here all our task will go & will be display on screen */
          <View>
            {taskItems.map((item, index) => {
              return (
                <View style={styles.items} key={index}>
                  <BouncyCheckbox
                    style={styles.itemText}
                    text={item}
                  ></BouncyCheckbox>
                  <View>
                    {/* A button that handles removing a task */}
                    <TouchableOpacity
                      style={styles.deleteBtn}
                      onPress={() =>
                        Alert.alert("Are you sure?", "", [
                          {
                            text: "Cancel",
                            style: "cancel",
                          },
                          {
                            text: "Delete",
                            onPress: () => deleteTask(index),
                            style: "destructive",
                          },
                        ])
                      }
                    >
                      <Image
                        style={{ tintColor: "#FF3131", width: 20, height: 25 }}
                        source={require("./../assets/Delete.png")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
      {/* Here we show the lenght of our todolist */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>{taskItems.length} todo items</Text>
      </View>
    </View>
  );
};

export default TasksList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    flexDirection: "column",
  },
  headerContainer: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 10,
    justifyContent: "space-between",
  },
  header: {
    paddingLeft: 20,
    fontSize: 25,
    fontWeight: "600",
  },

  addBtn: {
    fontWeight: "400",
    paddingRight: 20,
    fontSize: 40,
  },
  scrollView: {
    paddingTop: 15,
    flexGrow: 1,
  },
  items: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderLeftWidth: 4,
    borderColor: "#ED944D",
    flexWrap: "wrap",
  },
  itemText: {
    padding: 20,
  },
  deleteBtn: {
    paddingRight: 20,
  },
  emptyList: {
    width: 400,
    height: 400,
  },
  footer: {
    backgroundColor: "#009297",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 15,
    color: "#fff",
  },
});
