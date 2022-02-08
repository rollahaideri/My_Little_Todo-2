import { StyleSheet } from "react-native";
import AddTask from "./src/AddTask";
import TaskContext from "./src/TaskContext";
import TasksList from "./src/TasksList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <TaskContext>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerTitle: " Home",
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#009297",
              },
            }}
            name="TasksList"
            component={TasksList}
          />
          <Stack.Screen
            options={{
              headerTitle: "Add a new task",
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#009297",
              },
            }}
            name="AddTask"
            component={AddTask}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0EB8BE",
  },
});
