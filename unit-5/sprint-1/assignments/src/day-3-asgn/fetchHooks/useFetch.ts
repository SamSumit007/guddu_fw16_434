import axios from "axios";
import { useEffect, useState } from "react";

type text={
  q:string;
  per_page:number
  _page?:number
  _limit?:number
} 

export const useFetch = <T>(url: string, params?: Record<string,unknown>) => {
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    setisLoading(true);
    axios.get(url, { params: { ...params } }).then(({ data }) => {
      console.log(data);
      setisLoading(false);
      setData(data);
    }).catch(e=>{
      setisLoading(false)
      setisError(true)
    });
  }, [params?.q]);
  return {isError,isLoading,data};
};
