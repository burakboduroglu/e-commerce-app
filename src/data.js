import axios from "axios";

const takeData = async (url) => {
    const response = await axios.get(`${url}`);

    return response.data.products;
}


export default takeData
