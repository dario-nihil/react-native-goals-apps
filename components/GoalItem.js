import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ dataItem, onDeleteGoal }) => {
  const { item } = dataItem;

  return (
    <Pressable onPress={onDeleteGoal.bind(this, item.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{item.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#ffffff",
  },
});
