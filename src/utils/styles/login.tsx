import { StyleSheet } from "react-native";
import { FullWindowOverlay } from "react-native-screens";

const loginStyle = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 50,
    },

    logo_row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },

    logo: {
        width: 50,
        height: 50
    },

    text: {
        fontSize: 16,
        fontWeight: 'bold'
    }, 

    text_input: {
        backgroundColor: "rgba(128, 128, 128, 0.3)",
        borderRadius: 10,
        padding: 10,
        width: "90%",
        height: 45,
        marginTop: 10,
        flexDirection: "row",
        gap: 7      
    },

    forgot_password: {
        textDecorationLine: "underline",
        marginTop: 5,
        width: '90%',
        textAlign: "right"

    },

    button_style: {
        backgroundColor: "orange",
        borderRadius: 10,
        padding: 10,
        width: "90%",
        height: 45,
        marginTop: 10
    }, 

    button_text:{
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        justifyContent: "center",
        fontSize: 20
    },

    register_text: {
        marginTop: 10,
        textAlign: "center"
    }
})


export default loginStyle