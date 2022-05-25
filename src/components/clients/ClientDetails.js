import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import Spinner from '../layout/Spinner'

function ClientDetails() {
  const { client } = this.props

  const { id } = this.useParams()

  if (client) {
    return (
      <div>
        <h1>{client.firstName}</h1>
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default compose(
  firestoreConnect(props => [
    { collection: 'clients', storeAs: 'client', doc: props.match.params.id },
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    client: ordered.client && ordered.client[0],
  }))
)(ClientDetails)
