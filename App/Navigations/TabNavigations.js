import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home'
import Fav from '../Screens/Fav'
import Search from '../Screens/Search';
import Profile from '../Screens/Profile';
import { FontAwesome } from '@expo/vector-icons';
const TabNavigations = () => {

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
         headerShown: false
    }}>
      <Tab.Screen name="Home" component={Home}
         options={
        {
           tabBarLabel: "Home",
           tabBarIcon:({color, size}) =>
           (
            <FontAwesome name="home" size={24} color="black" />
            ) 
        }
        }
      />
      <Tab.Screen name="Seacrh" component={Search}
       
       options={
        {
           tabBarLabel: "Search",
           tabBarIcon:({color, size}) =>
           (
            <FontAwesome name="search-plus" size={24} color="black" />
            ) 
        }
        }



      />
      <Tab.Screen name="Fav" component={Fav}
        options={
            {
               tabBarLabel: "Home",
               tabBarIcon:({color, size}) =>
               (
                <FontAwesome name="heart" size={24} color="black" />
                ) 
            }
            }
    
    
      />
      <Tab.Screen name="Profile" component={Profile}
         options={
            {
               tabBarLabel: "Home",
               tabBarIcon:({color, size}) =>
               (
                <FontAwesome name="user-secret" size={24} color="black" />
                ) 
            }
            }
    
    
      />
    </Tab.Navigator>
  )
}

export default TabNavigations
