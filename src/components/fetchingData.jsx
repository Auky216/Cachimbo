export const fetchDataCustom = async (data, url_api) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(data);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        const api_url = import.meta.env.VITE_API_URL;

        const response = await fetch(`${api_url}/${url_api}`, requestOptions);

        const result = await response.json();
        return [result, JSON.parse(result.body), false, null];
    } catch (error) {
        console.error('Error:', error);
        return [null, null, true, error];
    }
}

