import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "./theme/colors";
import {
	useFonts,
	Nunito_400Regular,
	Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";

const App = () => {
	let [fontsLoaded] = useFonts({
		Nunito_400Regular,
		Nunito_600SemiBold,
	});

	if (!fontsLoaded) return null;
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.background,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default App;
