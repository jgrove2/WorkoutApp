import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors, dimensions } from "../../styles/Shared/base";
import HomeIcon from "./Icons/HomeIcon";
import NoUserIcon from "./Icons/NoUserIcon";
import AddWorkoutIcon from "./Icons/AddWorkoutIcon";

export function Footer({ navigation, scale, screen }) {
    return (
        <View style={styles.container}>
            <View style={styles.firstIconContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("PastWorkouts")}>
                    <HomeIcon style={styles.icon} scale={scale} color={screen === 1 ? colors.primary : colors.text} />
                </TouchableOpacity>
            </View>
            <View style={styles.middleIconContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Workout")}>
                    <AddWorkoutIcon style={styles.icon} scale={scale} color={screen === 2 ? colors.primary : colors.text} />
                </TouchableOpacity>
            </View>
            <View style={styles.lastIconContainer}>
                <NoUserIcon style={styles.iconDisabled} scale={scale} color={colors.text} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 50,
        paddingTop: 25,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",
        borderTopWidth: 2,
        borderColor: colors.secondary
    },
    icon: {

    },
    firstIconContainer: {
        paddingRight: dimensions.fullWidth / 8,
    },
    middleIconContainer: {
        paddingRight: dimensions.fullWidth / 8,
        paddingLeft: dimensions.fullWidth / 8,
        margin: 0,
        borderEndWidth: 1,
        borderStartWidth: 1,
        borderColor: colors.secondary
    },
    lastIconContainer: {
        paddingLeft: dimensions.fullWidth / 8,
    },
    iconDisabled: {
        opacity: .5,
    }
})