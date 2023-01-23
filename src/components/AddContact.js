import React from 'react'

const AddContact = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className='display-3 text-center'>
          Add Contact
        </h1>
        <div className="col-md-6 shadow mx-auto">
            <form>
              <div className='form-group'>
                <input type="text" placeholder="Name" />
              </div>
              <div className='form-group'>
                <input type="text" placeholder="Name" />
              </div>
              <div className='form-group'>
                <input type="text" placeholder="Name" />
              </div>
              <div className='form-group'>
                <input type="text" placeholder="Name" />
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default AddContact