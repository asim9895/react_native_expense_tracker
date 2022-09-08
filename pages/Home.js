import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../theme/colors";

const Home = () => {
	return (
		<View style={{ backgroundColor: COLORS.background, flex: 1 }}>
			<Text>Home</Text>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({});
