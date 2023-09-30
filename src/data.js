import axios from "axios";

const takeData = async (url) => {
    const response = await axios.get(`https://dummyjson.com/products/category/${url}`);

    return response.data.products;
}


export default takeData
