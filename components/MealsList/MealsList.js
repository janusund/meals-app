import Meal from "../../models/meal";
import {View, FlatList, StyleSheet} from 'react-native';
import MealItem from "./MealItem";

function MealsList({items}){
 function renderMealItem(itemData){
        return (
           <MealItem itemMeal={itemData.item} />
        )
    }
    return(
        <View style={styles.container}>
           <FlatList data ={items} keyExtractor={(item)=> item.id}
            renderItem={renderMealItem}/>
        </View>
    );
}

export default MealsList;

const styles= StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
});