import { SafeAreaView, View, Text } from "react-native";
import { Footer } from "../components/Shared/Footer";
import { screenSetup } from "../styles/Shared/base";

export function WorkoutScreen({ navigation }) {
    return (
        <View style={screenSetup.screenContainer}>
            <View style={screenSetup.screenView}>
                <Text>Start Workout Screen</Text>
            </View>
            <View style={screenSetup.screenFooter}>
                <Footer navigation={navigation} scale={1.5} screen={2} />
            </View>
        </View>
    );
}