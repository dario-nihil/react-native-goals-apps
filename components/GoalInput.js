import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

const GoalInput = ({ onAddGoal, visible }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button
          title="Add goal"
          onPress={() => {
            onAddGoal(enteredGoalText);
            setEnteredGoalText("");
          }}
        />
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
