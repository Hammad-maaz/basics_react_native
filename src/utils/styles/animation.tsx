import { StyleSheet } from "react-native";

const AnimationStyles = StyleSheet.create({
    main: {flex: 1, backgroundColor: "white"},
    header_text: {fontSize: 20, fontWeight: "bold", marginTop: 10, textAlign: "center"},
    fade_anim_box: {height: 50, width: 200, backgroundColor: "green", },
    fade_anim_btns: {flexDirection: "row", justifyContent: "space-evenly"},
    fade_anim_btn_color: {backgroundColor: "blue"}
})

export default AnimationStyles