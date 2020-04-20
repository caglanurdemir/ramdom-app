import React from 'react';
import './App.css';
import MemeGenerator from './MemeGenerator';
import Header from './Header';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      apiData: [],
      loading: false
    };
  }

  componentDidMount() {
    axios.get(`https://api.imgflip.com/get_memes`)
    .then(res => {
      const apiData = res.data;
      this.setState({ 
        apiData,
        loading : true
      }, () => {
        console.log(this.state.apiData.data.memes);
        console.log(this.state.loading);
        
      });
    })
  }

  handleChange(event) {
    console.log("Working!")
}

  render() {
    return (
      <>
        <Header/> 
        {/* <img src={this.state.loading ? this.state.apiData.data.memes[0].url : null} /> */}
        <div>
                <form className="meme-form">
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    /> 
                
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.loading ? this.state.apiData.data.memes[0].url : null} alt="" />
                    {/* <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2> */}
                </div>
            </div>
      </>
    )
  }
}

export default App;
