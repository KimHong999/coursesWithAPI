import axios from "axios";
import React from "react";

export const api = axios.create({
    baseURL : "https://mini-course-backend-testing.onrender.com/api/v1"
})