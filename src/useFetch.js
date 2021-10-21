import {useEffect, useState} from "react";

const useFetch = (url) => {

        const [data, setData] = useState(null);
        const [isPending, setIsPending] = useState(true);
        const [error, setError] = useState(null);

        const handleDelete = (id) => {
            const recyclebin = data.filter(data => data.id !== id);
            console.log(recyclebin);
            setData(recyclebin);
        }


        useEffect(() =>
        {
            const abortCont = new AbortController();

                setTimeout(()=>{
                    fetch(url, {signal:abortCont.signal})
                        .then(res => {
                            if (!res.ok){
                                setData(null);
                                throw new Error("Could not fetch the data");
                            }
                            console.log(res);
                            return res.json();
                        })
                        .then(data => {
                            // console.log(data);

                            setData(data);
                            setIsPending(false);
                            setError(null);
                        })
                        .catch(err =>{
                            setIsPending(false);
                            setError(err.message);
                            // console.log(err.message);
                        })
                }, 1000)
                    return () => abortCont.abort();

        }, [url])

    return {data, isPending, error, handleDelete}

}
 
export default useFetch;