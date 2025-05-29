import { CATEGORIES, MEALS } from "../data/dummy-data";
import {Text, View, StyleSheet,FlatList} from 'react-native'; 
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
// Instead of passing parameter route as part of Obejct Destructuring to extract data being passed can use
// This is useful if the nexted componet is not registered as a Stack.Screen
// import { useRoute} from '@react-navifation/native';
// const route = useRoute();
// catId = route.params...

function MealsOverviewScreen({route, navigation}){
    const catId = route.params.categoryId;
    // Returns meals in this category by categoryId
    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >=0;
    })

    // This side effect needs to be done within useEffect
    // executes after component function executes 
    // instead use useLayoutEffect - will run simultaneously when the component is loaded
    useLayoutEffect(() => {
      const categoryTitle = CATEGORIES.find(
        (category) => category.id == catId
      ).title;
      navigation.setOptions({
        title: categoryTitle,
      });
    }, [catId, navigation]);
   
    return <MealsList items={displayedMeals}/>
   

}

export default MealsOverviewScreen;

