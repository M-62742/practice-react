`use client`
import React from 'react'

const page = () => {
    const getUsers = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users/"+id
          );
          setUsers(response.data);
        } catch (error) {
          setError("Error fetching data. Please try again later.");
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
    useEffect(() => {
     
    
     getUsers()
      }
    , [])
  return (
 <>
 <div className='p-8 bg-zinc'></div>
 </>
  )
}

export default page
