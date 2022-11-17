import {useState, useEffect} from "react";

const useGetData = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then(json => setData(json))
    }, [url])

    return data
}

export default useGetData;