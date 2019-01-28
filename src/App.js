import React, { Component } from 'react'
import provinces from './data/provinces.js'

class App extends Component {
  state = {
    data: null,
    province: '',
    city: '',
    state: ''
  }

  componentDidMount() {
    this.setState({ data: provinces })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    const { data, ...state } = this.state

    console.log(state)
  }

  render() {
    const { data, province, city, state } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <select name="province" onChange={this.handleChange} value={province}>
          <option disabled value="">
            Province
          </option>
          {data &&
            Object.keys(data).map((province, i) => (
              <option value={province} key={i}>
                {province}
              </option>
            ))}
        </select>

        <select name="city" onChange={this.handleChange} value={city}>
          <option disabled value="">
            City
          </option>
          {province !== '' &&
            Object.keys(data[province]).map((city, i) => (
              <option value={city} key={i}>
                {city}
              </option>
            ))}
        </select>

        <select name="state" onChange={this.handleChange} value={state}>
          <option disabled value="">
            State
          </option>
          {city !== '' &&
            data[province][city].map((state, i) => (
              <option value={state} key={i}>
                {state}
              </option>
            ))}
        </select>

        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default App
