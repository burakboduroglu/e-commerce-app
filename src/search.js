import axios from "axios";

const search = async (query) => {
    query = "laptop";
    const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`);

    return response.data.products;
}

export default search;
