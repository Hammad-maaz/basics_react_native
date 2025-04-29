import axios from "axios"
import { useEffect, useState } from "react"
import { ActivityIndicator, Text, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import AxiosDataFetchingStyles from "../../utils/styles/axios_data_fetching"


interface apiDataModel{
    userId: number,
    Id: number,
    title: string
}
const AxiosDataFetching: React.FC =() => {
    const [loading, setLoading] = useState(false)
    const [apiData, setApiData] = useState<apiDataModel[]>([])
    const api = axios.create({baseURL: "https://jsonplaceholder.typicode.com"})
    api.interceptors.request.use(config => {return config})
    api.interceptors.response.use(response => {return response})
    useEffect(() => {
        fetchDataFromApi();
    }, [])


    const fetchDataFromApi = async() => {
        try{
            setLoading(true);
            const response = await api.get<apiDataModel[]>("/posts");
            // const data: apiDataModel[] =response.data;
            if(response){
                setApiData(response.data);
                setLoading(false)
            }

            else{
                setApiData([]);
                setLoading(false);
            }
        }
        catch(e){
            console.error(e)
            setLoading(false)
        }
    }
    

    const renderItem = ({item}: {item: apiDataModel}) => {
        return(
            <View style={AxiosDataFetchingStyles.list_background}>
                <Text style={AxiosDataFetchingStyles.list_title}>{item.title}</Text>
            </View>
        )
    }


    return(
        <View style={AxiosDataFetchingStyles.main}>
            <Text style={AxiosDataFetchingStyles.header_text}>Axios Data Fetching</Text>
            {loading 
            ? <ActivityIndicator size={"large"} color={"black"}/> 
            : <FlatList 
            data={apiData}
            renderItem={renderItem}
            />}
        </View>
    )
}

export default AxiosDataFetching