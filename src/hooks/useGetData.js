import {useState, useEffect} from "react";
import {logDOM} from "@testing-library/react";

const useGetData = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then(json => setData(json))
            .catch(error => console.log(error))
    }, [url])

    return data
}

export default useGetData;