import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../theme/colors";

const Heading = ({ heading }) => {
	return (
		<Text
			style={{
				color: COLORS.text,
				fontSize: 20,
				fontFamily: "Nunito_600SemiBold",
			}}
		>
			{heading}
		</Text>
	);
};

export default Heading;
