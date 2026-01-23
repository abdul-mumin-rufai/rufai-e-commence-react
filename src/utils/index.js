import axios from "axios";

const baseUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
    baseURL: baseUrl,
});


export function formatPrice(price) {
    const cedisAmount = new Intl.NumberFormat('en-GH', {
        style: 'currency',
        currency: 'GHS'
    }).format((price / 100).toFixed(2));
    return cedisAmount;
};