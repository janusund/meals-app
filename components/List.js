import {Text, View, StyleSheet} from 'react-native';

function List({selectedMeal}){
    return selectedMeal.map((ingredient) => (
      <View key={ingredient} style={styles.listItem}>
        <Text style={styles.itemText}>{ingredient}</Text>
      </View>
    ));

}

export default List;

const styles = StyleSheet.create({
    listItem:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:12,
        backgroundColor:"#e2b497"
    },
    itemText:{
        color:'white',
        textAlign:'center'
    }
});