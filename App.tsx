import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { PastWorkoutScreen } from './screens/PastWorkoutScreen';
import { WorkoutScreen } from './screens/WorkoutScreen';
import { ProgressScreen } from './screens/ProgressScreen'
import { PlansScreen } from './screens/PlansScreen';
import { Footer } from './components/Shared/Footer';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'none'
        }}
      >
        <Stack.Screen name="PastWorkouts" component={PastWorkoutScreen} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
        <Stack.Screen name="Plans" component={PlansScreen} />
        <Stack.Screen name="Progress" component={ProgressScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}