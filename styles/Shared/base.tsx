import { StyleSheet, Dimensions } from 'react-native';

export const colors = {
    primary: "#7031F6",
    secondary: "#D2D8F3",
    accent: "#445188",
    background: "#FBFBF3",
    text: "#050604"
}

export const texts = {
    sm: '15px',
    md: '25px',
    lg: '30px'
}

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
}

export const screenSetup = StyleSheet.create({
    screenContainer: {
        backgroundColor: 'white',
        paddingTop: 45,
        flexDirection: "column",
        flex: 1,
        justifyContent: "space-between"
    },
    screenView: {
        flex: 1,
    },
    screenHeader: {
    },
    screenFooter: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0
    }
});
