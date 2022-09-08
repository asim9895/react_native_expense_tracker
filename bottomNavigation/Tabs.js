import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { COLORS } from "../theme/colors";
import Card from "../pages/Card";

const Tab = createBottomTabNavigator();

const Tabs = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: {
					position: "absolute",
					backgroundColor: COLORS.bottom_nav,
					height: 60,
					borderRadius: 20,
					borderTopWidth: 0,
					marginHorizontal: 10,
					marginBottom: 10,
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<View>
							<AntDesign
								name="home"
								color={focused ? COLORS.text : COLORS.gray}
								size={23}
							/>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Card"
				component={Card}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<View>
							<AntDesign
								name="creditcard"
								color={focused ? COLORS.text : COLORS.gray}
								size={23}
							/>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Exchange"
				component={Card}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "center",
								backgroundColor: COLORS.button,
								height: 50,
								width: 50,
								borderRadius: 25,
								marginTop: -50,
							}}
						>
							<Feather
								name="arrow-up"
								color={COLORS.text}
								size={22}
								style={{ marginRight: -3 }}
							/>
							<Feather
								name="arrow-down"
								color={COLORS.text}
								size={22}
								style={{ marginLeft: -3 }}
							/>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Chart"
				component={Card}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<View>
							<AntDesign
								name="barschart"
								color={focused ? COLORS.text : COLORS.gray}
								size={23}
							/>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Card}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<View>
							<AntDesign
								name="user"
								color={focused ? COLORS.text : COLORS.gray}
								size={23}
							/>
						</View>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default Tabs;
