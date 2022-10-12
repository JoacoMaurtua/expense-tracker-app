import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentExpScreen from './screens/RecentExpScreen';
import AllExpScreen from './screens/AllExpScreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#20b2aa" style="light" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Recent expenses" component={RecentExpScreen} />
          <Tab.Screen name="All expenses" component={AllExpScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  
});
