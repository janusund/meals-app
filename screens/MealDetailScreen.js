import { View , Image, Text, StyleSheet,ScrollView, Button} from "react-native";
import { useLayoutEffect, useContext } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitles from "../components/SubTitles";
import List from "../components/List";
import { FavoritesContext } from "../store/context/favorite-context";
import { AuthContext } from "../store/context/auth-context";
import IconButton from "../components/IconButton";
//import {useSelector} from 'react-redux';

function MealDetailScreen({route,navigation}){
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((item)=> item.id == mealId);

    const favoriteMealCtx= useContext(FavoritesContext);
    const isMealsFavorite = favoriteMealCtx.ids.includes(mealId);

   // const authCtx = useContext(AuthContext);

    function changeFavoriteMealPressHandler(){
      if(isMealsFavorite){
        favoriteMealCtx.removeFavorite(mealId);
      }else{
        favoriteMealCtx.addFavorite(mealId);
      }

    }
    // This side effect needs to be done within useEffect
    // executes after component function executes 
    // instead use useLayoutEffect - will run simultaneously when the component is loaded
    useLayoutEffect(() => {       
        navigation.setOptions({
        title: selectedMeal.title,
        headerRight:()=>{  return <IconButton onPress={changeFavoriteMealPressHandler} icon={
          isMealsFavorite ?'star':'star-outline'
        } color="white"
          />}
        });
    }, [selectedMeal, navigation,changeFavoriteMealPressHandler]);
    return (
      <ScrollView style ={styles.root}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails itemMeal={selectedMeal} textStyle={styles.detailtext} />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <SubTitles>Ingredients</SubTitles>
            <List selectedMeal={selectedMeal.ingredients} />
            <SubTitles>Steps</SubTitles>
            <List selectedMeal={selectedMeal.steps} />
          </View>
        </View>
      </ScrollView>
    );
   
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    root:{
        marginBottom:32
    },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  detailtext: {
    color: "white",
  },
  listContainer:{
    width:'80%'
  },
  listOuterContainer:{
    alignItems:'center'
  }
});
