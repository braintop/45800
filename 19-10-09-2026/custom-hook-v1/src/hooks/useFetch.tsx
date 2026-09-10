import { useState, useEffect } from "react";

export default function useFetch(url: string) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchData() {
        let data = await fetch(url);
        let json = await data.json();
        setData(json);
        setLoading(false);
        setError(null);
    }
    useEffect(() => {
        fetchData();
    }, [url]);

    return {data, loading, error};
}