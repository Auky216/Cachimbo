// fetchingData.jsx
import { useUserStore } from "../store/utils";  // Asegúrate de importar las dependencias necesarias

export const fetchDataCustom = async (data, url_api) => {
    try {
        // Utiliza import.meta.env para acceder a la variable de entorno directamente
        const baseUrl = import.meta.env.VITE_API_URL;  
        const fullUrl = `${baseUrl}/${url_api}`;  // Construye la URL completa

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        const raw = JSON.stringify(data);
    
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const response = await fetch(fullUrl, requestOptions);  // Usa la URL completa en la solicitud
        const result = await response.json();

        // Asegúrate de manejar el caso en que la respuesta no sea exitosa
        if (!response.ok) {
            throw new Error(result.message || "Unknown error occurred");
        }

        return [result, JSON.parse(result.body), false, null];
    } catch (error) {
        console.error('Error:', error);
        return [null, null , true, error];
    }
}
