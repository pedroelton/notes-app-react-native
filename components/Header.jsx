import { StyleSheet, Text, View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

const Header = () => {
	return (
		<View style={styles.header}>
			<Image style={styles.logo} source={require("../assets/notes.png")} />
			<Text style={styles.title}>NOTES</Text>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	header: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		paddingTop: 0,
		paddingBottom: 16,
	},
	title: {
		color: "#fff",
		fontSize: 24,
		fontWeight: "800",
		textAlign: "center",
	},
	logo: {
		width: 32,
		height: 32,
		marginRight: 4,
	},
});
