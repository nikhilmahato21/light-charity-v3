import axios from 'axios';


export const customFetchBloodbank = axios.create({
    baseURL: "/api/v1/light/bloodbank",

});

export const customFetchDonor= axios.create({
    baseURL: "/api/v1/light/donors",

});