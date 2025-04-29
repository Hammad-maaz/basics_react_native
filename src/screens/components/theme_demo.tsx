import { Switch, Text, View } from "react-native"
import { useTheme } from "../../theme/theme_context"

const ThemeDemo: React.FC = () => {
    const {theme, toggleTheme} = useTheme();
    const isDark = theme === "dark";

    return(
        <View style={{flex: 1, backgroundColor: isDark ? "black" : "white"}}>
            <Switch onValueChange={toggleTheme} value={isDark} ios_backgroundColor="gray" trackColor={{ true: 'white', false: 'black' }} thumbColor={isDark ? "black" : "white"}/>
        </View>
    )   
}

export default ThemeDemo