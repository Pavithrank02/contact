import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const EditContact = () => {
  const {id} = useParams();
  return (
    <div className="container">
      <h1 className='display-3 text-center'>
       Edit Student{id}
      </h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form>
            <div className='form-group'>
              <input type="text" placeholder="Name" className='form-control' />
            </div>
            <div className='form-group'>
              <input type="email" placeholder="Email" className='form-control' />
            </div>
            <div className='form-group'>
              <input type="number" placeholder="Ph.No" className='form-control' />
            </div>
            <div className='form-group'>
              <input type="Submit" value="Update Student" className='btn  btn-dark' />
            </div>
            <div className='form-group'>
              <Link to="/" className='btn btn-danger ml-3'> Cancel </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditContact