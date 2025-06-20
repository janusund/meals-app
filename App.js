import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserScreen from './screens/UserScreen';
import IconButton from "./components/IconButton";
import {Provider} from 'react-redux';
import {store} from   './store/redux/store';




const Stack= createStackNavigator();
const Drawer= createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

function DrawerNavigator(){
  // Holds drawer navigation 
  return <Drawer.Navigator screenOptions={{
        headerStyle:{backgroundColor:'#351401'},
        headerTintColor:'white',      
        screenContainerStyle:{backgroundColor:'#3f2f25'},
        drawerContentStyle:{backgroundColor:'#351401'},
        drawerInactiveTintColor:'white',
        drawerActiveBackgroundColor:'#e4baa1'
      }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
          title: "All Categories",
          drawerLabel:'Categories Screen',
          drawerIcon:({color, size})=>( <Ionicons name="list" color={color}  size={size}/> )
      }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
          drawerLabel:'Favorites Screen',
          drawerIcon:({color, size})=>( <Ionicons name="star" color={color}  size={size} /> )
      }}/>
    </Drawer.Navigator>
}


// Initial Component - default Screen unless defined in initialroutename
export default function App() {
  return (
     <Provider store ={store}>
      <StatusBar style="light" />
     
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
           headerStyle:{backgroundColor:'#351401'},
          headerTintColor:'white',      
          contentStyle:{backgroundColor:'#3f2f25'}
        }}>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
             // title: "All Categories",
              headerShown: false // No header 
            }}
          />
         
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} 
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen}
          options={{
              title: "About the Meal!",
          }}
          />
         
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  
});
