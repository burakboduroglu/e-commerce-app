import axios from "axios";

const takeData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
}

export default takeData;