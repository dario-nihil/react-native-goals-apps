import { StyleSheet, View, Text } from "react-native";

const GoalItem = ({ dataItem: { item } }) => {
  return (
    // inserted a wrapper View element because of styles differences between IOS and Adroid to apply borderRadius
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{item.text}</Text>
    </View>
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
