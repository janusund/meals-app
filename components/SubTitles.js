import { Text, View, StyleSheet } from "react-native";

function SubTitles({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default SubTitles;

const styles = StyleSheet.create({
  subtitle: {
    coloe: "white",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
  subTitleContainer: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    padding: 6,
    marginHorizontal: 12,
  },
});
