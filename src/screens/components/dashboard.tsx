import { StackNavigationProp } from "@react-navigation/stack"
import { Text, TouchableOpacity } from "react-native"
import { View } from "react-native"
import { RootNavigationParamsList } from "../../navigations/root_navigation"
import { FlatList } from "react-native-gesture-handler"
import dashboardStyle from "../../utils/styles/dashboard"


type rootNavigationProps = StackNavigationProp<RootNavigationParamsList, "dashboard">
type prosps = {
    navigation: rootNavigationProps
}

interface screensNavigation {
    id: number,
    title: string,
    screen: keyof RootNavigationParamsList
}
const Dashboard: React.FC<prosps> =({navigation}) => {
    const SCREEN_DATA: screensNavigation[] =[
        {id: 1, title: "Fetch Data", screen: "fetch_data"},
        {id: 2, title: "Flat List", screen: "flat_list"},
        {id: 3, title: "Login", screen: "login_screen"},
        {id: 4, title: "Axios Data Fetching", screen: "axios_data_fetching"},
        {id: 5, title: "Theme Demo", screen: "theme_demo"},
        {id: 6, title: "Animation Dashbaord", screen: "animation_route"},
    ]

    const renderItem = ({item}: {item: screensNavigation}) =>{
        return(
            <View style={dashboardStyle.main}>
                <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                    <Text style={dashboardStyle.screen_title}>{item.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View>
            <FlatList 
            keyExtractor={(item) => item.id.toString()}
            data={SCREEN_DATA}
            renderItem={renderItem}
            />
        </View>
    )
}

export default Dashboard