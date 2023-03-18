import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import Swal from 'sweetalert2';
import TotalFormat from './TotalRevenueFormat';

const TotalRevenue = () => {
  const [allData, setAllData] = useState([]);

  const getConfigObject = () => {
    return {
      headers: {
        'Content-Type': 'application/json',
        'authentication': localStorage.getItem('authentication')
      }
    }
  }

  const getAllData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/totalrevenue`, getConfigObject());

      if (response.status === 200) {
        setAllData(response.data);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Some error ocurred in top5sales'
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Some error ocurred in fetching total revenue data'
      });
    }
  }

  useEffect(() => {
    getAllData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <TotalFormat postData={allData} />
    </>
  );
}

export default TotalRevenue;
