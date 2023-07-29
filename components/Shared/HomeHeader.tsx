import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../styles/Shared/base";
export function HomeHeader({ navigation, screen }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.buttons, screen === 1 ? styles.selected : {}]} onPress={() => navigation.navigate('Progress')}>
                <Text style={styles.text}>Progress</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttons, screen === 2 ? styles.selected : {}]} onPress={() => navigation.navigate('PastWorkouts')}>
                <Text style={styles.text}>Workouts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttons, screen === 3 ? styles.selected : {}]} onPress={() => navigation.navigate('Plans')}>
                <Text style={styles.text}>Plans</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingLeft: 5,
        paddingRight: 5,
        borderBottomWidth: 2,
        borderColor: colors.secondary,
        backgroundColor: 'white'
    },
    buttons: {
        paddingBottom: 15,
        paddingTop: 15,
        flex: 1,
        alignItems: 'center',
    },
    selected: {
        borderBottomWidth: 3,
        borderColor: colors.primary
    },
    text: {
        fontSize: 20
    }
})