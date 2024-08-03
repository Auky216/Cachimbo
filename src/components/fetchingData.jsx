import { useState, useEffect } from "react";

export const fetchDataCustom = async (data, url_api) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(data);

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    try {
        const response = await fetch(`/api/${url_api}`, requestOptions);
        const result = await response.json();
        return [result, JSON.parse(result.body) ,false];
    } catch (error) {
        console.error('Error:', error);
        return [null, null ,true];
    }
}


export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [controller, setController] = useState(null);
  
    useEffect(() => {
        const abortController = new AbortController();
        setController(abortController);
  
        fetch(url, { signal: abortController.signal })
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                if (error.name === "AbortError") {
                    console.log("Cancelled request");
                } else {
                    setError(error);
                }
            })
            .finally(() => setLoading(false));
    
        return () => abortController.abort();
    }, []);

    const handleCancelRequest = () => {
        if (controller) {
            controller.abort();
            setError("Cancelled Request");
        }
    };
    return { data, loading, error, handleCancelRequest };
}