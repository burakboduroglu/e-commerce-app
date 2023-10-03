import axios from "axios";


const takeDataFromURL = async (url) => {
    const response = await axios.get(url);
    console.log(response.data.products);
    console.log(url);
    return response.data.products;
}

export default takeDataFromURL
