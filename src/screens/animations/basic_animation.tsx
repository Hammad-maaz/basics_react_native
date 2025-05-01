import { Animated, Button, Easing, ScrollView, Text, View } from "react-native"
import AnimationStyles from "../../utils/styles/animation"
import { useRef } from "react"

const BasicAnimation:React.FC = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const translateAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const rotateAnim = useRef(new Animated.Value(1)).current;
    const springAnim = useRef(new Animated.Value(1)).current;
    const bounceAnim = useRef(new Animated.Value(1)).current;


    const rotate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }
    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    const translate = () => {
        Animated.timing(translateAnim, {
            toValue: 100,
            duration: 1000,
            easing: Easing.bezier(0.25, 0.01, 0.25, 0.01),
            useNativeDriver: true
        }).start()
    }

    const scale = () => {
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 2,
                duration: 1000,
                useNativeDriver: true
            }),

            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
        ]).start()
    }

    const rotatebtn = () => {
        Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start(() => {
            rotateAnim.setValue(0)
        })
    }

    const spring = () => {
        Animated.spring(springAnim, {
            toValue: 100,
            friction: 1,
            tension: 10,
            useNativeDriver: true
        }).start(() => {
            springAnim.setValue(0)
        })
    }

    const bounce =() => {
        Animated.sequence([
            Animated.timing(bounceAnim, {
                toValue: 100,
                duration: 500,
                easing: Easing.bounce,
                useNativeDriver: true
            }),

            Animated.timing(bounceAnim, {
                toValue: 0,
                duration: 1000,
                easing: Easing.bounce,
                useNativeDriver: true
            }),
        ]).start()
    }


    return(
        <ScrollView>
            <Text style={AnimationStyles.header_text}>Basic Animation</Text>
            <Text style={AnimationStyles.header_text}>Fade Animation</Text>

                {/* FADE ANIMATION */}
            <View style={{width: "100%", alignItems: "center"}}>
                <Animated.View style={[AnimationStyles.fade_anim_box, {opacity: fadeAnim}]} />
            </View>
            <View style={AnimationStyles.fade_anim_btns}>
                <Button title="Fade-In" color={"blue"} onPress={fadeIn}/>
                <Button title= "Fade-Out" color={"blue"} onPress={fadeOut}/>
            </View>
            <View style={{marginTop: 50}}/>
                {/* END */}


                {/* TRANSLATTE ANIMATION */}
            <View style={{width: "100%", alignItems: "center"}}>
                <Animated.View style={[AnimationStyles.fade_anim_box, {transform: [{translateX: translateAnim}], backgroundColor: "yellow"}]} />
            </View>
            <Button title= "Translate" onPress={translate}/>
            <View style={{marginTop: 50}}/>
                {/* END */}

                {/* SCALE ANIMATION */}
            <View style={{width: "100%", alignItems: "center"}}>
                <Animated.View style={[AnimationStyles.fade_anim_box, {transform: [{scale: scaleAnim}], backgroundColor: "purple"}]} />
            </View>
            <Button title= "Scale" onPress={scale}/>
            <View style={{marginTop: 50}}/>
                {/* END */}

                {/* ROTATE ANIMATION */}
            <View style={{width: "100%", alignItems: "center"}}>
                <Animated.View style={[AnimationStyles.fade_anim_box, {transform: [{rotate}], backgroundColor: "orange"}]} />
            </View>
            <Button title= "Rotate" onPress={rotatebtn}/>
            <View style={{marginTop: 50}}/>
                {/* END */}

                {/* SPRING ANIMATION */}
            <View style={{width: "100%", alignItems: "center"}}>
                <Animated.View style={[AnimationStyles.fade_anim_box, {transform: [{translateX: springAnim}], backgroundColor: "red"}]} />
            </View>
            <Button title= "Spring" onPress={spring}/>
            <View style={{marginTop: 50}}/>
                {/* END */}

                {/* BOUNCE ANIMATION */}
            <View style={{width: "100%", alignItems: "center"}}>
                <Animated.View style={[AnimationStyles.fade_anim_box, {transform: [{translateY: bounceAnim}], backgroundColor: "black"}]} />
            </View>
            <Button title= "Bounce" onPress={bounce}/>
            <View style={{marginBottom: 50}}/>
        </ScrollView>
    )
}

export default BasicAnimation