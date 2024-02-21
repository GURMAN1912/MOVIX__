import { useEffect,useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export default function UseFetch(url) {
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(null);
    const [error,setError]=useState(null)
    useEffect(()=>{
        setLoading("Loading...")
        setData(null)
        setError(null)
        fetchDataFromApi(url).then((res)=>{

            setLoading(false)
            setData(res)
            console.log(data)
        }).catch((err)=>{
            setLoading(false)
            setError("something went wrong..")
        })
    },[url])
  return {data,loading,error}
}
