import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigations from './App/Navigations/TabNavigations';
import { NavigationContainer } from '@react-navigation/native';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { UserLocationContext } from './App/Context/UserLocationContext';

export default function App() {
  
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })();
  }, []);

  

  return (
    <View style={styles.container}>
 <UserLocationContext.Provider value={{location, setLocation}}>
    <NavigationContainer>
      <TabNavigations />
    </NavigationContainer>
    </UserLocationContext.Provider>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:'auto'
  },
});
