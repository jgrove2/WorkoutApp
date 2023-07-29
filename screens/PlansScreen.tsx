import { View, Text, Button, SafeAreaView } from "react-native";
import { HomeHeader } from "../components/Shared/HomeHeader";
import { Footer } from "../components/Shared/Footer";
import { screenSetup } from "../styles/Shared/base";

export function PlansScreen({ navigation }) {
    return (
        <View style={screenSetup.screenContainer}>
            <View style={screenSetup.screenHeader}>
                <HomeHeader navigation={navigation} screen={3} />
            </View>
            <View style={screenSetup.screenView}>
                <Text>Plans Screen</Text>
            </View>
            <View style={screenSetup.screenFooter}>
                <Footer navigation={navigation} scale={1.5} screen={1} />
            </View>
        </View>
    );
}