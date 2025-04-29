import { Image, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { RootNavigationParamsList } from "../../navigations/root_navigation"
import { StackNavigationProp } from "@react-navigation/stack"
import loginStyle from "../../utils/styles/login"
import { TextInput } from "react-native-gesture-handler"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


type rootNavigationProps = StackNavigationProp<RootNavigationParamsList, "login_screen">
type props = {
    navigation  : rootNavigationProps
}
const LoginScreen: React.FC<props> =({navigation}) => {
    return(
        <View style={loginStyle.main}>

            {/* LOGO & IMAGE */}
            <View style={loginStyle.logo_row}>
                <Image source={require("../../../assets/logo.jpg")} style={loginStyle.logo} />
                <View>
                    <Text style={loginStyle.text}>Maintence</Text>
                    <Text style={[loginStyle.text, {color: "orange", fontSize: 18}]}>Box</Text>
                </View>
            </View>

            {/* LOGIN TEXT */}
            <Text style={[loginStyle.text, {fontSize: 25, marginTop: 40, fontFamily: "serif"}]}>Login</Text>
            <Text style={[loginStyle.text, {fontSize: 15, marginTop: 10, fontWeight: "normal"}]}>Please login to continue</Text>

            <View style={{marginTop: 50}}></View>
            
            
            {/* LOGIN FORM */}
            <View style={loginStyle.text_input}>
                <MaterialCommunityIcons name="email-outline" size={25} color={"black"}/>
                <TextInput placeholder="EmailAddress" placeholderTextColor={"grey"} keyboardType="email-address"  cursorColor={"black"} selectionColor={"black"}/>
            </View>

            <View style={loginStyle.text_input}>
                <MaterialCommunityIcons name="lock-outline" size={25} color={"black"}/>
                <TextInput placeholder="Password" placeholderTextColor={"grey"} secureTextEntry cursorColor={"black"} selectionColor={"black"}/>
            </View>

            {/* FORGET PASSWORD */}
            <Text style={loginStyle.forgot_password}>ForgetPassword</Text>
            <View style={{flex: 6}}/>

            {/* LOGIN BUTTON */}
            <TouchableOpacity style={loginStyle.button_style} >
                <Text style={loginStyle.button_text}>Login</Text>
            </TouchableOpacity>

            {/* DON'T HAVE AN ACCOUNT */}
            <View style={{flexDirection: "row", gap: 4}}>
                <Text style={[loginStyle.register_text, {color: "grey"}]}>Don't have an account?</Text>
                <Text style={[loginStyle.register_text, {color: 'orange', textDecorationLine: "underline", fontSize: 15, fontWeight: "bold"}]}>SignUp</Text>
            </View>
            <View style={{marginBottom: 20}}/>
            
        </View>
    )
}

export default LoginScreen