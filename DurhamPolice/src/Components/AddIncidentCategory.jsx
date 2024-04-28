import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddIncidentCategory = () => {
  const [category, setCategory] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3004/auth/add_incidentcategory', {category})
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/incidentcategory')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex justify-content-center align-items-center h-75'>
        <div className='p-3 rounded w-25 border'>
            <h2>Add Incident Category</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="incidentcategory"><strong>Incident Category:</strong></label>
                    <input type="text" name='category' placeholder='Enter Incident Category' 
                    onChange={(e) => setCategory(e.target.value)} className='form-control rounded-0'/>
              
                </div>
                <button className='btn btn-success w-100 rounded-0 mb-2'>Add Incident Category</button>
            </form>
        </div>
    </div>
  )
}

export default AddIncidentCategory

