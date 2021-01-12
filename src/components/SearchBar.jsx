import React from 'react'

class SearchBar extends React.Component {

  state = {term: ''}

  onInputChange = (e) => {
    this.setState({ term: e.target.value})
  }

  onFormSubmit = (e) => {
    e.preventDefault()

    this.props.onTermSubmit(this.state.term)
  }

  render () {
    return <div className="search-bar ui segment">
      <form onSubmit={this.onFormSubmit} className='ui form'>
        <div className="field">
          <label>VideoSearch</label>
          <input type={this.state.term}
          onChange={this.onInputChange}/>
        </div>

      </form>
    </div>
  }
}

export default SearchBar
