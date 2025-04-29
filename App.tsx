import { NavigationContainer } from "@react-navigation/native"
import RootNavigation from "./src/navigations/root_navigation"
import { ThemeProvider } from "./src/theme/theme_context"

const App = () => {
  return(
    <ThemeProvider>
      <NavigationContainer>
        <RootNavigation />  
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App