import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentExpScreen from './screens/RecentExpScreen';
import AllExpScreen from './screens/AllExpScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ManageExpScreen from './screens/ManageExpScreen';
import { GlobalStyles } from './styles';


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function MyTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: GlobalStyles.colors.primary50,
        tabBarActiveBackgroundColor: GlobalStyles.colors.primary500,
        tabBarInactiveBackgroundColor: GlobalStyles.colors.primary500,
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarInactiveTintColor: GlobalStyles.colors.primary50,
      }}
    >
      <Tab.Screen
        name="Recent Expenses"
        component={RecentExpScreen}
        options={{
          title: 'Recent Expenses',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="timer-sand-empty"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="All Expenses"
        component={AllExpScreen}
        options={{
          title: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <AntDesign
              name="calendar"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar animated={true} backgroundColor={GlobalStyles.colors.primary500} style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MyTabs"
            component={MyTabsNavigator}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Manage"
            component={ManageExpScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
}); */
