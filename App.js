import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	View,
	SafeAreaView,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import Header from "./components/Header";
import Notes from "./components/Notes";

const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		{children}
	</TouchableWithoutFeedback>
);

export default function App() {
	return (
		<DismissKeyboard>
			<View>
				<StatusBar style="light" />
				<SafeAreaView style={styles.container}>
					<Header />
				</SafeAreaView>
				<Notes />
			</View>
		</DismissKeyboard>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#4A4063",
		alignItems: "center",
		justifyContent: "center",
	},
});
