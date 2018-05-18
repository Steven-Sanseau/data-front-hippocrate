import React, { Component } from 'react'
import request from '../../utils/request'

class SupporterList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      supporter: [],
    }
  }
  componentDidMount = () => {
    request()
    const method = 'GET'
    const requestURL = `${process.env.API_URL}/supporter`

    return request(requestURL, { method })
      .catch(err => {
        console.log('err', err.response)
        //  TODO: Handle errors
      })
      .finally(result => {
        console.log('result', result)
      })
  }
  render() {
    const { supporters } = this.state
    return (
      <div>
        {supporters &&
          supporters.map(supporter => (
            <div key={supporter.id}>{supporter.first_name}</div>
          ))}
      </div>
    )
  }
}

SupporterList.propTypes = {}

export default SupporterList
