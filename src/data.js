import axios from "axios";

const takeData = async (searched) => {
    const response = await axios.get(`https://dummyjson.com/products/search?q=${searched}`);
    console.log(response.data.products);
    console.log(searched)

    return response.data.products;
}


export default takeData
