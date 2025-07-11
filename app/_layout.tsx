import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { Appearance } from 'react-native';
import {Colors} from '@/constants/Colors';

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();

  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
      <Stack screenOptions={{headerStyle: { backgroundColor: theme.headerBackground }, headerTintColor: theme.text, headerShadowVisible: false}}>
        <Stack.Screen name="index" options={{ headerShown: false, title: "home" }} />
        <Stack.Screen name="explore" options={{ headerShown: true, title: "explore", headerTitle: "Explore Us" }} />
        <Stack.Screen name="menu" options={{ headerShown: false, title: "menu", headerTitle: "Menu Us" }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false}}/>
      </Stack>
  );
}
