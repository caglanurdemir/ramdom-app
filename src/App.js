import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      apiData: [],
      loading: true
    };
  }

  componentDidMount() {
    axios.get(`https://api.imgflip.com/get_memes`)
      .then(res => {
        const apiData = res.data;
        this.setState({
          apiData: apiData.data
        }, () => {
          this.getRandomImg(this.state.apiData);
          console.log(this.state.apiData.memes);
          console.log(this.state.loading);

        });
      })
  }

  handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    this.setState({ [name]: value })
  }

  getRandomImg = (apiData) => {
    const memes = apiData.memes;
    let x, j, i;
    for (i = memes.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = memes[i];
      memes[i] = memes[j];
      memes[j] = x;
    }
    this.setState({
      apiData: memes,
      loading: false,
      randomImg: memes[0].url
    }, () => {
      console.log(this.state.apiData);
    })
    return apiData;
  }

  render() {
    return (
      <>
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
            <button>Save</button>
          </form>
          <div className="meme">
            <img src={this.state.loading ?  null : this.state.randomImg} alt="" />
            <h2 className="top">{this.state.topText}</h2>
            <h2 className="bottom">{this.state.bottomText}</h2>
          </div>
        </div>
      </>
    )
  }
}

export default App;