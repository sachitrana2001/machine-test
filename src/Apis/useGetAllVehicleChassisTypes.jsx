import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetAllVehicleChassisTypes = (getAllChassisTypeUrl, getToken,methodGet) => {

    
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// console.log("CustHook-->>>",getAllChassisTypeUrl,getToken,data);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let response;
      try {
        if(methodGet==="get"){
           response = await axios.get(getAllChassisTypeUrl, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${getToken}`,
              
            }
          });
        }
        else{
           response = await axios.post(getAllChassisTypeUrl,{}, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${getToken}`,
              
            }
          });
        }
       
        setData(response.data);

        setError(null);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchData();

  }, [getAllChassisTypeUrl, getToken]);

  return { data, loading, error };
};

export default useGetAllVehicleChassisTypes;
