import { useState } from "react";
import { getProjects } from "../api/fetchProjects";

export const showProjects = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        try {
            const response = await getProjects()
            setData(response);
        } catch (error) {
            console.log(error);
        }
    }
    return {data, getData}
};