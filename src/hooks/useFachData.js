// to create a custom hook to fetch data from the server using asxios

import { useState, useEffect } from "react";
import axios from "axios";

const useFatchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
        };
        fetchData();
    }, [url]);
    
    return { data, loading, error };
    }
    export default useFatchData;
    