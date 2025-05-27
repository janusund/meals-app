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


// const Stack= createStackNavigator();
// const Drawer= createDrawerNavigator();
// const BottomTab = createBottomTabNavigator();

// /*
// Drawer
//  └── Tabs
//       ├── Categories (Stack)
//       └── Favorites (Stack)
//           └── MealDetail (Stack)
// */
// function CategoriesStackNavigator() {
//   return (
//     <Stack.Navigator screenOptions={{
//       headerStyle: { backgroundColor: '#351401' },
//       headerTintColor: 'white',
//       contentStyle: { backgroundColor: '#3f2f25' },
//     }}>
//       <Stack.Screen name="Categories" component={CategoriesScreen} options={{ headerShown: false}}/>
//       <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} options={{ headerShown: false}}/>
//       <Stack.Screen name="MealDetail" component={MealDetailScreen}  />
//     </Stack.Navigator>
//   );
// }


// function FavoritesStackNavigator() {
//   return (
//     <Stack.Navigator screenOptions={{
//       headerStyle: { backgroundColor: '#351401' },
//       headerTintColor: 'white',
//       contentStyle: { backgroundColor: '#3f2f25' },
//     }}>
//       <Stack.Screen name="Favorites" component={FavoritesScreen}    options={{
//             headerShown: false}}/>
//       <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{ title: 'About the Meal!' ,headerShown: false}} />
//     </Stack.Navigator>
//   );
// }

// function BottomTabsNavigator() {
//   return (
//     <BottomTab.Navigator screenOptions={{
//       headerStyle: { backgroundColor: '#3c0a6b' },
//       headerTintColor: 'white',
//       tabBarActiveTintColor: '#3c0a6b',
//       tabBarActiveBackgroundColor: '#f0e1ff',
//     }}>
//       <BottomTab.Screen
//         name="CategoriesTab"
//         component={CategoriesStackNavigator}
//         options={{
//             headerShown: false ,
//           title: "Categories",
//           tabBarIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />
//         }}
//       />
//       <BottomTab.Screen
//         name="FavoritesTab"
//         component={FavoritesStackNavigator}
//         options={{
//           headerShown: false ,
//           title: "Favorites",
//           tabBarIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// }

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator screenOptions={{
//       headerStyle: { backgroundColor: '#351401' },
//       headerTintColor: 'white',
//       drawerContentStyle: { backgroundColor: '#351401' },
//       drawerInactiveTintColor: 'white',
//       drawerActiveBackgroundColor: '#e4baa1',
//     }}>
//       <Drawer.Screen
//         name="Meals"
//         component={BottomTabsNavigator}
//         options={{          
//           drawerLabel: 'All Meals',
//           drawerIcon: ({ color, size }) => <Ionicons name="restaurant" color={color} size={size} />
//         }}
//       />
//     </Drawer.Navigator>
//   );
// }
// export default function App() {
//   return (
//     <>
//       <StatusBar style="light" />
//       <NavigationContainer>
//         <DrawerNavigator />
//       </NavigationContainer>
//     </>
//   );
// }



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
    <>
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
          // Approach to pass title to the screen
          // options={({route, navigation})=>{
          //    const catId = route.params.categoryId;
          //   return {
          //       title: catId
          //   };
          // }} 
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen}
          options={{
              title: "About the Meal!",
          }}
          // Movign this to the screen
          // options={{
          //   headerRight:()=>{  return <Button title ='Tap Me!' onPress={} />}
          // }}
          />
         
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  
});
