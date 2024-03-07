import { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Linking,
	Button,
	Alert,
	Pressable,
} from 'react-native';

export default function App() {
	const [username, setUsername] = useState('');

	return (
		<View style={styles.container}>
			<Text style={styles.title}>SIGN IN</Text>
			<TextInput
				style={styles.inputField}
				placeholder='Username'
				value={username}
				onChangeText={setUsername}
			/>
			<TextInput
				style={styles.inputField}
				placeholder='Password'
				secureTextEntry={true}
			/>

			<View style={{ flexDirection: 'row', gap: 5 }}>
				<Text>Don't have an account?</Text>
				<Text
					style={styles.registerHyperlink}
					onPress={() => Linking.openURL('http://google.com')}
				>
					Register here!
				</Text>
			</View>

			<Pressable
				onPress={() => Alert.alert('Logging in')}
				style={styles.loginButton}
			>
				<Text style={{ color: 'white', fontSize: 16, padding: 10 }}>LOGIN</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 25,
		fontWeight: 'bold',
	},
	container: {
		flex: 1,
		gap: 10,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputField: {
		padding: 10,
		height: 30,
		width: 250,
		borderColor: 'gray',
		borderBottomWidth: 1,
	},
	registerHyperlink: {
		color: 'blue',
	},
	loginButton: {
		backgroundColor: 'black',
		width: 200,
		alignItems: 'center',
		marginTop: 30,
	},
});
