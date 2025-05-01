import { createStackNavigator } from "@react-navigation/stack"
import BasicAnimation from "../screens/animations/basic_animation";
import Interpolates from "../screens/animations/interpolate";
import CombinedAnimation from "../screens/animations/combined_animation";
import AnimationDashoard from "../screens/animations/animation_dashboard";


export type AnimationNavigationLists = {
    animation_dashboard: undefined
    basic_animation: undefined
    interpolates: undefined
    combined_animation: undefined
}

const Stack = createStackNavigator<AnimationNavigationLists>();
const AnimationRoutes: React.FC = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="animation_dashboard" component={AnimationDashoard}/>
            <Stack.Screen name="basic_animation" component={BasicAnimation} />
            <Stack.Screen name="interpolates" component={Interpolates} />
            <Stack.Screen name="combined_animation" component={CombinedAnimation} />
        </Stack.Navigator>
    )
}

export default AnimationRoutes