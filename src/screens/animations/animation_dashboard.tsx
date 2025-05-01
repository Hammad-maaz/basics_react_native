import { StackNavigationProp } from "@react-navigation/stack"
import { AnimationNavigationLists } from "../../navigations/animation_routes"
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import dashboardStyle from "../../utils/styles/dashboard";


type animationNavigationProps = StackNavigationProp<AnimationNavigationLists, "basic_animation">
interface props{
    navigation: animationNavigationProps
}

interface screensData{
    id: number
    title: string
    screenName: keyof AnimationNavigationLists
}


const AnimationDashoard:React.FC<props> =({navigation}) => {
    const ANIMATION_SCREENS: screensData[] = [
        {id: 1, title: "Basic Animation", screenName: "basic_animation"},
        {id: 2, title: "Interpolates", screenName: "interpolates"},
        {id: 3, title: "Combined Animation", screenName: "combined_animation"},
    ]
    const renderItem = ({item}: {item: screensData}) => {
        return(
            <View style={dashboardStyle.main}>
                <TouchableOpacity onPress={() => navigation.navigate(item.screenName)}>
                    <Text style={dashboardStyle.screen_title}>{item.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return(
        <View>
            <FlatList 
            data={ANIMATION_SCREENS}
            renderItem={renderItem}
            />

        </View>
    )
}

export default AnimationDashoard    