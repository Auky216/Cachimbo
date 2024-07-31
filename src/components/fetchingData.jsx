const fetchDataCustom = async (data, url_api) => {
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

export default fetchDataCustom;