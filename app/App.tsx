import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function App() {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-3xl`}>Caligo Wallet</Text>
      <StatusBar style="auto" />
    </View>
  );
}
