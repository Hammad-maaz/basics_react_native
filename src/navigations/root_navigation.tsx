import { createStackNavigator } from "@react-navigation/stack"
import LoginScreen from "../screens/components/login";
import Home from "../screens/components/home";
import FlatListScreen from "../screens/components/flat_list";
import FetchDataScreen from "../screens/components/fetch_data";
import Dashboard from "../screens/components/dashboard";
import AxiosDataFetching from "../screens/components/axios_data_fetching";
import ThemeDemo from "../screens/components/theme_demo";
import BasicAnimation from "../screens/animations/basic_animation";
import Interpolates from "../screens/animations/interpolate";
import AnimationDashoard from "../screens/animations/animation_dashboard";
import AnimationRoutes from "./animation_routes";


export type RootNavigationParamsList = {
    dashboard: undefined,
    fetch_data: undefined
    flat_list: undefined,
    login_screen: undefined,
    home_screen: undefined,
    axios_data_fetching: undefined,
    theme_demo: undefined,
    animation_route: undefined
}
const Stack = createStackNavigator<RootNavigationParamsList>();
const RootNavigation: React.FC = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="dashboard" component={Dashboard} />
            <Stack.Screen name="fetch_data" component={FetchDataScreen} />
            <Stack.Screen name="flat_list" component={FlatListScreen}/>
            <Stack.Screen name="login_screen" options={{title: "Login", headerTitleAlign: "left", headerStyle: {backgroundColor: "black"}, headerTitleStyle: {color: "white"}}} component={LoginScreen} />
            <Stack.Screen name="home_screen" component={Home} />
            <Stack.Screen name="axios_data_fetching" component={AxiosDataFetching} />
            <Stack.Screen name="theme_demo" component={ThemeDemo} />
            <Stack.Screen name="animation_route" component={AnimationRoutes} />
            {/* <Stack.Screen name="basic_animation" component={BasicAnimation} />
            <Stack.Screen name="interpolates" component={Interpolates} />
            <Stack.Screen name="interpolates" component={Interpolates} /> */}
        </Stack.Navigator>
    )
}

export default RootNavigation