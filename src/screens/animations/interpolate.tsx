import { Animated, Button, Text, View } from "react-native"
import InterpolatesStyle from "../../utils/styles/interpolates"
import { useRef } from "react"

const Interpolates:React.FC = () => {
    const rotateAnim = useRef(new Animated.Value(0)).current
    const anim = () => {
        Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true
        }).start(() => {
            rotateAnim.setValue(0)
        })
    }

    const backgroundColor = rotateAnim.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ["red", "green", "blue"]
    })

    const size = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 200]
    })

    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"]
    })

    const borderRadius = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [10, 100]
    })

    return(
        <View style={InterpolatesStyle.main}>
            <Text style={InterpolatesStyle.header_text}>Interpolates</Text>
            <Animated.View style={{backgroundColor, width: 100, height: 100, transform: [{rotate: spin}], borderRadius, alignItems: "center", justifyContent: "center"}}>
                <Text style={InterpolatesStyle.animated_text}>Interpolates</Text>
            </Animated.View>

            <Button title="Animate" onPress={anim} />
        </View>
    )
}

export default Interpolates