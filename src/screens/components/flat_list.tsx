import { FlatList, Text, View } from "react-native"
import flatListStyles from "../../utils/styles/flat_list"

const FlatListScreen: React.FC = () => {
    const LIST_DATA = Array.from({length: 50}, (_,index) => ({
        id: index.toString(),
        title: `Item: ${index +1}`
    }))

    const handleRenderItem = ({item}: {item: {id: String, title: String}}) => {
        return (
            <View>
                <Text>{item.title}</Text>
            </View>
        )
    }


    return(
        <View style={flatListStyles.main}>
            <Text style={flatListStyles.flat_list_text}>Flat List Screen Demo</Text>
            <FlatList 
                data= {LIST_DATA}
                renderItem={handleRenderItem}
            />
        </View>
    )
}

export default FlatListScreen