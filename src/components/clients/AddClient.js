import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
// import { compose } from 'redux'
// import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

class AddClient extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: '',
  }

  onSubmit = e => {
    e.preventDefault()

    const newClient = this.state

    const { firestore } = this.props

    // If no balance, make 0
    if (newClient.balance === '') {
      newClient.balance = 0
    }

    // me ndreq pushin rreshti 33
    firestore.add({ collection: 'clients' }, newClient)
  }

  handleClick = e => {
    this.onSubmit()
    const navigate = useNavigate()
    navigate('/dashboard')
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-6'>
            <Link to='/' className='btn btn-link'>
              <i className='fas fa-arrow-circle-left' /> Back to Dashboard
            </Link>
          </div>
        </div>
        <div className='card'>
          <div className='card-header'>Add Client</div>
          <div className='card-body'>
            <form onSubmit={this.handleClick}>
              <div className='form-group'>
                <label htmlFor='firstName'>First Name</label>
                <input
                  type='text'
                  className='form-control'
                  name='firstName'
                  minLength='2'
                  required
                  onChange={this.onChange}
                  value={this.state.firstName}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='lastName'>Last Name</label>
                <input
                  type=''
                  className='form-control'
                  name='lastName'
                  minLength='2'
                  required
                  onChange={this.onChange}
                  value={this.state.lastName}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  onChange={this.onChange}
                  value={this.state.email}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='phone'>Phone</label>
                <input
                  type='text'
                  className='form-control'
                  name='phone'
                  minLength='10'
                  required
                  onChange={this.onChange}
                  value={this.state.phone}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='balance'>Balance</label>
                <input
                  type='text'
                  className='form-control'
                  name='balance'
                  onChange={this.onChange}
                  value={this.state.balance}
                />
              </div>
              {/* <form onSubmit={this.handleSubmit}> */}
              <input
                type='submit'
                value='Submit'
                className='btn btn-primary btn-block'
              />
            </form>
            {/* </form> */}
          </div>
        </div>
      </div>
    )
  }
}

AddClient.propTypes = {
  firestore: PropTypes.object.isRequired,
}

export default firestoreConnect()(AddClient)
