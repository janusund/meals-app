import {Text, View, StyleSheet} from 'react-native';

function MealDetails({itemMeal, textStyle}){
return (
  <View style={styles.details}>
    <Text style={[styles.detailItem,textStyle]}>{itemMeal.duration}m</Text>
    <Text style={styles.detailItem}>{itemMeal.complexity.toUpperCase()}</Text>
    <Text style={styles.detailItem}>{itemMeal.affordability.toUpperCase()}</Text>
  </View>
);

}

export default MealDetails;

const styles = StyleSheet.create(
    {
        details:{
            flexDirection:'row',
            alignItems:'center',
            padding:8,
            justifyContent:'center'
        },
        detailItem:{
            marginHorizontal:4,
            fontSize:12,

        },
    }
)