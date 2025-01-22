import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity
} from "react-native";
import Button from "../components/button";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  function handleNavigationToHome() {
    router.navigate('/tabs/home')
  }

  return (
    <View style={s.container}>
      <StatusBar backgroundColor='#670DE5' />
      <Image source={require('../assets/images/logo.png')} style={s.logo} />

      <Button
        image={require('../assets/images/google.png')}
        name='Conectar com Google'
        onPress={handleNavigationToHome}
      />
    </View>
  );
}

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#670DE5',
    alignItems: 'center',
    justifyContent: 'space-around'

  },
  logo: {
    height: 350,
    width: 350,

  }
})