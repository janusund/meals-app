import { View , Image, Text, StyleSheet,ScrollView, Button} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitles from "../components/SubTitles";
import List from "../components/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function MealDetailScreen({route,navigation}){
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((item)=> item.id == mealId);

    function headerButtonPressHandler(){

    }
    // This side effect needs to be done within useEffect
    // executes after component function executes 
    // instead use useLayoutEffect - will run simultaneously when the component is loaded
    useLayoutEffect(() => {       
        navigation.setOptions({
        title: selectedMeal.title,
        headerRight:()=>{  return <IconButton onPress={headerButtonPressHandler} icon="star" color="white"/>}
        });
    }, [selectedMeal, navigation,headerButtonPressHandler]);
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
