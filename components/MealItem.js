import {Text, View, Pressable,Image, StyleSheet, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails';

function MealItem({itemMeal}){
    const navigation = useNavigation();

    function selectMealHandler(){
        navigation.navigate('MealDetail', {
                mealId: itemMeal.id
            });
    }
   
    return (
      <View style={styles.mealItem}>
        <Pressable android_ripple={{color:'#ccc'}}
        style={({ pressed }) => 
                pressed ? styles.buttonPressed : null// iOS fallback
                }
        onPress={selectMealHandler}
              >
          <View style={styles.innerContainer}>
            <View>
              <Image source={{ uri: itemMeal.imageUrl }} style={styles.image} />
              <Text style={styles.title}>{itemMeal.title}</Text>
            </View>
            <MealDetails itemMeal={itemMeal}/>
          </View>
        </Pressable>
      </View>
    );

}

export default MealItem;

const styles = StyleSheet.create(
    {
        mealItem:{
            margin:16,
            borderRadius: 8,
            overflow:'hidden',
            backgroundColor:'white',
            elevation:4, //shadow
            shadowColor:'black',
            shadowOpacity:0.35,
            shadowOffset:{ width:0, height:2},
            shadowRadius:8,
            overflow:Platform.OS ==='android'?'hidden':'visible',
        },
        image:{
            width:'100%', 
            height:200
        },
        title:{
            fontWeight:'bold',
            textAlign:'center',
            fontSize:18,
            margin:8
        },
        innerContainer:{
            borderRadius:8,
            overflow:'hidden'
        },
        buttonPressed:{
            opacity:0.5
        }
    }
)