import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../theme/colors";
import Heading from "../components/Heading";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Card = () => {
	return (
		<ScrollView style={{ flex: 1, backgroundColor: COLORS.background }}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					marginHorizontal: 10,
					marginTop: 40,
				}}
			>
				<Heading heading={"Cards"} />
				<Text
					style={{
						fontSize: 14,
						fontFamily: "Nunito_600SemiBold",
						color: COLORS.gray,
					}}
				>
					Edit
				</Text>
			</View>

			<LinearGradient
				colors={["#4AD59A", "#CAFDBA"]}
				start={[0, 0]}
				end={[1, 0]}
				location={[0.9, 0.1]}
				style={{
					height: 170,
					marginHorizontal: 10,
					borderRadius: 20,
					marginTop: 15,
					padding: 15,
				}}
			>
				<View>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							marginHorizontal: 15,
						}}
					>
						<Ionicons
							name="hardware-chip-outline"
							color={COLORS.text}
							size={24}
							style={{
								padding: 8,
								backgroundColor: COLORS.border,
								borderRadius: 15,
							}}
						/>
						<MaterialCommunityIcons
							name="signal-variant"
							color={COLORS.text}
							size={24}
						/>
					</View>

					<View style={{ marginTop: 15 }}>
						<Text
							style={{
								color: COLORS.text,
								fontFamily: "Nunito_600SemiBold",
								fontSize: 22,
								textAlign: "center",
							}}
						>
							1321{"   "}4231{"   "}5231{"   "}1324
						</Text>
					</View>

					<View style={{ flexDirection: "row", alignItems: "center" }}></View>
				</View>
			</LinearGradient>
		</ScrollView>
	);
};

export default Card;

const styles = StyleSheet.create({});
