import { Pressable, View, Text,StyleSheet, Platform } from "react-native";

// IF navigation needs to be used inside of this child component then
// import {useNavigation} from '@react/navigation-native';
// In order to use it  var navigation = useNavigation();

function CategoryGridTile({title, color, onPress}){
return <View style={styles.gridItem}>
    <Pressable android_ripple={{ color: '#ccc', borderless: false }} 
     style={({ pressed }) => [
        styles.button,
        pressed && Platform.OS === 'ios' && styles.pressedIOS, // iOS fallback
      ]} onPress={onPress} >
        <View style={[styles.innerContainer, {backgroundColor:color}]}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </Pressable>
</View>
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,

    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    // Android Shadow
    elevation: 4,
  }, // Flex 1 uses all the space , margin - space around the tile, fixed height is set
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    padding: 16,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});