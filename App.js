import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "./theme/colors";
import {
	useFonts,
	Nunito_400Regular,
	Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Main from "./pages/Main";

const Stack = createStackNavigator();

const App = () => {
	let [fontsLoaded] = useFonts({
		Nunito_400Regular,
		Nunito_600SemiBold,
	});

	if (!fontsLoaded) return null;
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="Main"
			>
				<Stack.Screen name="Main" component={Main} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Cards" component={Card} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
