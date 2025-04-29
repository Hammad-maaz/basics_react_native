import { useEffect, useState } from "react"
import { ActivityIndicator, Text, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import fetchDataStyles from "../../utils/styles/fetch_data"


interface data {
    userId: number,
    id: number,
    title: string
}
const FetchDataScreen: React.FC = () => {
    const [loadgin, setLoading] = useState(false)
    const [apiData, setApiData] = useState<data[]>([])

    const fetchDataFromApi = async() => {
        try{
            setLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            console.log("Response status:", response.status);
            const responseData: data[] = await response.json();

            if(responseData){
                setApiData(responseData);
                setLoading(false);
            }
            else{
                setApiData([]);
                setLoading(false);
            }
        }
        catch(e){
            console.log(e)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchDataFromApi();
    }, [])


    const renderItem = ({item}: {item: {userId: number, id: number, title: string}}) => {
        return(
            <View style={fetchDataStyles.list_background}>
                <Text style={fetchDataStyles.list_title}>{item.title}</Text>
            </View>
        )
    }

    console.log(apiData)

    return(
        <View style={fetchDataStyles.main}>
            <Text style={fetchDataStyles.header_text}>Fetch Data Screen</Text>
            {loadgin 
                ? <ActivityIndicator size="large" color="black" />
                : <FlatList 
                keyExtractor={item => item.id.toString()}
                data= {apiData}
                renderItem={renderItem}
                />
            }
        </View>
    )
}

export default FetchDataScreen