import { useEffect, useState } from 'react';
import Table from '../components/Table'
import axios from 'axios';
import { API_BASE_URL } from '../config'
import Swal from 'sweetalert2';

const Top5Sales = () => {

    const CONFIG_OBJ = {
        headers: {
            "Content-Type": "application/json",
            "authentication": localStorage.getItem("authentication")
        }
    }

    const [allData, setAllData] = useState([]);

    const getAllData = async () => {
        const response = await axios.get(`${API_BASE_URL}/totalrevenue`, CONFIG_OBJ)

        if (response.status === 200) {
            setAllData(response.data)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Some error ocurred in top5sales'
            })
        }
    }

    useEffect(() => {
        getAllData();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className='text-center p-3 pt-4'>
                <h2>TOP 5 SALES</h2>
            </div>
            <div className='px-5'>
                {allData.length > 0 ? (
                    <Table data={allData} />
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </>
    )
}

export default Top5Sales
