import axios from "axios";

const BASE_URL = process.NODE_ENV === "development" ? "http://localhost:3001" : "https://flash-cards-backend-magalhaes.glitch.me";

const axiosInstance = axios.create({baseURL: BASE_URL, timeout: 10000})

export async function read(url){
    const {data} = await axiosInstance.get(url);
    return data;
}

export async function destroy(url){
    const {data} = await axiosInstance.delete(url);
    return data;
}

export async function create(url, object){
    const {data} = await axiosInstance.post(url, object);
    return data;
}

export async function edit(url, object){
    const {data} = await axiosInstance.put(url, object);
    return data;
}