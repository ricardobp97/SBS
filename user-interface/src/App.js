import React from 'react'
import UserIn from './UserIn'
import UserOut from './UserOut'
import axios from 'axios'

// Tabs: TV, Movie, OVA, Special, Music

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tab: 'TV',
      id: '',
      color: 'black',
      data: [],
      loading: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setState({loading: true})
    axios.get(`http://localhost:4000?type=${this.state.tab}`,{'Access-Control-Allow-Origin': '*'})
      .then(res => {
        this.setState({
          data: res.data,
          loading: false
        })
      })
      .catch(error => console.log('Error:', error))
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.id !== this.state.id || prevState.tab !== this.state.tab) {
      if(prevState.id !== ''){
        if(this.state.id < 73516){
          this.setState({color: 'black', loading: true})
          axios.get(`http://localhost:4000?id=${this.state.id}&type=${this.state.tab}`,{'Access-Control-Allow-Origin': '*'})
            .then(res => {
              this.setState({
                data: res.data,
                loading: false
              })
            })
            .catch(error => console.log('Error:', error))
        }
        else{
          if(prevState.color === 'black'){
            this.setState({color: 'red', loading: true})
            axios.get(`http://localhost:4000?type=${this.state.tab}`,{'Access-Control-Allow-Origin': '*'})
              .then(res => {
                this.setState({
                  data: res.data,
                  loading: false
                })
              })
              .catch(error => console.log('Error:', error))
          }
        }
      }
      else{
        this.setState({loading: true})
        axios.get(`http://localhost:4000?type=${this.state.tab}`,{'Access-Control-Allow-Origin': '*'})
          .then(res => {
            this.setState({
              data: res.data,
              loading: false
            })
          })
          .catch(error => console.log('Error:', error))
      }
    }
  }

  handleChange(event) {
    const {name, value} = event.target
    if(name === 'tab'){
      let tabs = document.getElementsByName('tab')
      for(let i = 0; i< tabs.length; i++){
        tabs[i].className = tabs[i].className.replace(" w3-grey", "")
      }
      event.target.className += " w3-grey"
    }
    this.setState({ [name]: value })
  }

  render() {
    let display = this.state.id === '' || this.state.color === 'red' ?
      <UserOut data={this.state.data} tab={this.state.tab} loading={this.state.loading}/>:
      <UserIn data={this.state.data} tab={this.state.tab} loading={this.state.loading}/>

    return (
      <div class="w3-container" style={{background: '#f0f0f0'}}>
        <h1 style={{textAlign: "center"}}>AniFlix: Your Favorite Anime on the Best Website.</h1>
          <input
            class="w3-input w3-border w3-quarter w3-round-large"
            type="text"
            placeholder="Type Your User ID"
            style={{color: this.state.color}}
            name='id'
            value={this.state.id}
            onChange={this.handleChange}
          />
        <br/>
        <br/>
        <br/>
        <div class="w3-bar w3-black">
          <button
            name='tab'
            class="w3-bar-item w3-button tablink  w3-grey"
            style={{width: '20%'}}
            onClick={this.handleChange}
            value='TV'>TV
          </button>
          <button
            name='tab'
            class="w3-bar-item w3-button tablink"
            style={{width: '20%'}}
            onClick={this.handleChange}
            value='Movie'>Movie
          </button>
          <button
            name='tab'
            class="w3-bar-item w3-button tablink"
            style={{width: '20%'}}
            onClick={this.handleChange}
            value='OVA'>OVA
          </button>
          <button
            name='tab'
            class="w3-bar-item w3-button tablink"
            style={{width: '20%'}}
            onClick={this.handleChange}
            value='Special'>Special
          </button>
          <button
            name='tab'
            class="w3-bar-item w3-button tablink"
            style={{width: '20%'}}
            onClick={this.handleChange}
            value='Music'>Music
          </button>
        </div>

        <div class="w3-container" style={{background: 'Gray'}}>
          {display}
        </div>
        <div class="w3-container" style={{background: '#f0f0f0', textAlign: "center"}}>
          <p>Gerado por Grupo 5</p>
          <p>Mestrado Integrado em Engenharia Informática</p>
          <p>Machine Learning: Sistemas Baseados em Similaridade</p>
        </div>
      </div>
    )
  }
}

export default App