import axios from "axios";

export const getValue = async () => {
    try{
        const response = await axios.get("api/hello");
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log("error fetching value: ", error)
        throw(error)
    }
}

export const saveValue = async (value) => {
    try{
        const response = await axios.post("api/hello", {
            name : value
        });
        return response.data
    } catch(error) {
        console.log("error saving data: ", error);
        throw(error);
    }
}