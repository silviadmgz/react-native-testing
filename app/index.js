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
import { Link } from 'expo-router';

export default function Index() {
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

			<Pressable style={styles.loginButton}>
				<Link href='/home' style={{ padding: 10, alignSelf: 'center' }}>
					<Text
						style={{
							color: 'white',
							fontSize: 16,
						}}
					>
						LOGIN
					</Text>
				</Link>
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
		width: 100,
		marginTop: 30,
	},
});
