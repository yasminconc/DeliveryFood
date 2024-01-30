import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useCallback, useState } from "react";

interface UseAxiosResult {
  data: any | null;
  error: any | null;
  loading: boolean;
  get: (url: string, config?: AxiosRequestConfig) => Promise<void>;
}

const useAxios = (): UseAxiosResult => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const get = useCallback(async (url: string, config?: AxiosRequestConfig) => {
    try {
      setError(null);
      setLoading(true);

      const res: AxiosResponse<any> = await axios.get(url, config);
      setData(res.data)
      
    } catch (error: any) {
      setData(null);
      setError(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    error,
    loading,
    get,
  };
};

export default useAxios;

// const get = React.useCallback(async (url, options) => {
//     try {
//         setError(null);
//         setLoading(true);

//         let res = await axios.get(url, options);

//         setData(res.data);
//     } catch (err) {
//         setData(null);
//         setError(err.response.data);
//         setLoading(false);
//     } finally {
//         setLoading(false);
//     }
// }, []);
