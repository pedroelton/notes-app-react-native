import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";

const Notes = () => {
	const [state, setState] = useState("Reading");
	const [note, setNote] = useState("");

	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			const noteReading = await AsyncStorage.getItem("note");
	// 			setNote(noteReading);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	})();
	// }, []);

	// setData = async () => {
	// 	try {
	// 		await AsyncStorage.setItem("note", note);
	// 	} catch (error) {}

	// 	alert("Your notes were saved!");
	// };

	// function updatingText() {
	// 	setState("Reading");
	// 	setData();
	// }

	if (state === "Reading") {
		return (
			<View style={styles.container}>
				{note != "" ? (
					<View style={styles.innerContainer}>
						<Text style={styles.bodyText}>{note}</Text>
					</View>
				) : (
					<View style={styles.innerContainerStd}>
						<Text style={{ fontSize: 18, opacity: 0.4, fontWeight: "400" }}>
							Click the "+" button to add your note
						</Text>
					</View>
				)}

				{note === "" ? (
					<TouchableOpacity
						style={styles.button}
						onPress={() => setState("updating")}
					>
						<Text style={styles.buttonText}>+</Text>
					</TouchableOpacity>
				) : (
					<TouchableOpacity
						style={styles.buttonEdit}
						onPress={() => setState("updating")}
					>
						<Text style={styles.buttonTextEdit}>Edit</Text>
					</TouchableOpacity>
				)}
			</View>
		);
	} else if (state === "updating") {
		return (
			<View style={styles.container}>
				<TextInput
					onChangeText={(text) => setNote(text)}
					multiline={true}
					numberOfLines={8}
					value={note}
					style={styles.textArea}
					autoFocus={true}
					placeholder="Write something here..."
				></TextInput>
				<TouchableOpacity
					style={styles.buttonSuccess}
					onPress={() => setState("Reading")}
				>
					<Text style={styles.buttonTextSmall}>Save</Text>
				</TouchableOpacity>
			</View>
		);
	}
};

export default Notes;

const styles = StyleSheet.create({
	buttonSuccess: {
		position: "absolute",
		bottom: 220,
		right: 30,
		backgroundColor: "#1F7A8C",
		borderRadius: 99,
		padding: 16,
		width: 100,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonEdit: {
		position: "absolute",
		bottom: 220,
		right: 30,
		backgroundColor: "#EAD94C",
		borderRadius: 99,
		padding: 16,
		width: 100,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginTop: "50%",
		textAlign: "center",
		textTransform: "uppercase",
	},
	button: {
		position: "absolute",
		bottom: 220,
		right: 30,
		backgroundColor: "#A31621",
		borderRadius: "99px",
		height: 64,
		width: 64,
		justifyContent: "center",
		alignItems: "center",
	},
	container: {
		width: "100%",
		height: "100%",
		padding: 16,
	},
	textArea: {
		color: "#4A4063",
		backgroundColor: "#f7f7f7",
		width: "100%",
		height: "25%",
		padding: 8,
		borderRadius: 8,
		fontSize: 18,
		lineHeight: 28,
	},
	innerContainer: {
		width: "100%",
		justifyContent: "center",
		alignItems: "flex-start",
		padding: 16,
	},
	innerContainerStd: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
	},
	bodyText: {
		color: "#4A4063",
		fontSize: 18,
		fontWeight: "300",
		textAlign: "left",
		lineHeight: 28,
	},
	buttonText: {
		color: "#fff",
		fontSize: 40,
		fontWeight: "500",
		textAlign: "center",
		marginTop: -5,
	},
	buttonTextSmall: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "700",
		textAlign: "center",
	},
	buttonTextEdit: {
		color: "#4a4063",
		fontSize: 18,
		fontWeight: "600",
		textAlign: "center",
	},
});
