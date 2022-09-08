import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { COLORS } from "../theme/colors";
import logo from "../assets/logo.jpg";
import { Entypo, AntDesign } from "@expo/vector-icons";
import Heading from "../components/Heading";
import { activity } from "../data/activity";

const Home = () => {
	return (
		<ScrollView style={{ backgroundColor: COLORS.background, flex: 1 }}>
			{/* Header Starts */}

			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					marginTop: 40,
					marginHorizontal: 10,
				}}
			>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Image
						source={logo}
						style={{ width: 50, height: 50, marginRight: 15 }}
					/>
					<View style={{ flexDirection: "column", alignItems: "flex-start" }}>
						<Text
							style={{
								fontSize: 22,
								fontFamily: "Nunito_700Bold",
								color: COLORS.text,
							}}
						>
							Good Morning,
						</Text>
						<Text
							style={{
								fontSize: 22,
								fontFamily: "Nunito_700Bold",
								color: COLORS.text,
							}}
						>
							Asim
						</Text>
					</View>
				</View>
				<View
					style={{
						backgroundColor: COLORS.bottom_nav,
						padding: 10,
						borderRadius: 5,
					}}
				>
					<Entypo name="notification" color={COLORS.text} size={22} />
				</View>
			</View>
			{/* Header Ends */}

			{/* Balance Container Starts */}
			<View style={{ marginTop: 10, marginHorizontal: 10 }}>
				<Heading heading="Balance" />
			</View>
			<View
				style={{
					backgroundColor: COLORS.bottom_nav,
					height: 100,
					marginHorizontal: 10,
					marginTop: 10,
					borderRadius: 20,
					borderWidth: 1,
					borderColor: COLORS.border,
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					paddingHorizontal: 20,
				}}
			>
				<View style={{ flexDirection: "column", alignItems: "flex-start" }}>
					<Text
						style={{
							color: COLORS.text,
							fontSize: 20,
							fontFamily: "Nunito_600SemiBold",
						}}
					>
						38,800 USD
					</Text>
					<Text
						style={{
							color: COLORS.border,
							fontSize: 12,
							fontFamily: "Nunito_400Regular",
						}}
					>
						Available
					</Text>
				</View>
				<View>
					<Entypo
						name="dots-three-horizontal"
						color={COLORS.border}
						size={20}
					/>
				</View>
			</View>
			{/* Balance Container Ends */}

			{/* Quick Access Starts */}
			<View style={{ marginTop: 10, marginHorizontal: 10 }}>
				<Heading heading={"Quick Access"} />
			</View>

			<View style={{ flexDirection: "row" }}>
				{activity.map((item, index) => {
					if (index === 4) {
						return (
							<View
								style={{
									padding: 8,
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								<View
									style={{
										width: 50,
										height: 50,
										borderRadius: 10,
										backgroundColor: COLORS.bottom_nav,
										alignItems: "center",
										justifyContent: "center",
										borderWidth: 1,
										borderColor: COLORS.border,
									}}
								>
									<AntDesign name="search1" color={COLORS.border} size={24} />
								</View>

								<Text
									style={{
										color: COLORS.text,
										fontSize: 9,
										fontFamily: "Nunito_400Regular",
										marginTop: 3,
									}}
								>
									Search
								</Text>
							</View>
						);
					}
					return (
						<View
							key={item.id}
							style={{
								padding: 8,
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<Image
								source={item.image}
								style={{
									width: 50,
									height: 50,
									borderRadius: 10,
									backgroundColor: COLORS.bottom_nav,
								}}
							/>
							<Text
								style={{
									color: COLORS.text,
									fontSize: 9,
									fontFamily: "Nunito_400Regular",
									marginTop: 3,
								}}
							>
								{item.name}
							</Text>
						</View>
					);
				})}
			</View>
			{/* Quick Access Ends */}

			{/* Recent Activity Starts */}

			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					marginTop: 10,
					marginHorizontal: 10,
				}}
			>
				<Heading heading={"Quick Access"} />

				<Text
					style={{
						color: COLORS.border,
						fontSize: 13,
						fontFamily: "Nunito_400Regular",
					}}
				>
					See All
				</Text>
			</View>

			<View style={{ flexDirection: "column", marginBottom: 90 }}>
				{activity.map((item, index) => {
					return (
						<View
							key={item.id}
							style={{
								padding: 8,

								backgroundColor: COLORS.bottom_nav,
								borderWidth: 1,
								borderColor: COLORS.border,
								margin: 10,
								borderRadius: 25,
							}}
						>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<View style={{ flexDirection: "row", alignItems: "center" }}>
									<Image
										source={item.image}
										style={{
											width: 50,
											height: 50,
											borderRadius: 15,
											backgroundColor: COLORS.bottom_nav,
										}}
									/>

									<View
										style={{
											flexDirection: "column",
											alignItems: "flex-start",
											marginLeft: 5,
										}}
									>
										<Text
											style={{
												fontFamily: "Nunito_600SemiBold",
												color: COLORS.text,
												fontSize: 16,
												marginBottom: 5,
											}}
										>
											{item.name}
										</Text>
										<Text
											style={{
												fontFamily: "Nunito_600SemiBold",
												color: COLORS.border,

												fontSize: 11,
											}}
										>
											{item.date} | {item.payment_status}
										</Text>
									</View>
								</View>

								<View>
									<Text
										style={{
											fontFamily: "Nunito_400Regular",
											color:
												item.payment_status === "Sent" ? "crimson" : "green",
											marginRight: 5,
											fontSize: 12,
										}}
									>
										{item.payment_status === "Sent" ? "- " : "+ "}
										{item.money} USD
									</Text>
								</View>
							</View>
						</View>
					);
				})}
			</View>
			{/* Recent Activity Ends */}
		</ScrollView>
	);
};

export default Home;

const styles = StyleSheet.create({});
