import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Recommendation from './components/Recommendation';
import Aside from './components/Aside';
import Main from './components/Main';
// import Recommendations from './components/Recommendations';
// import Gallery from './components/Gallery';
// import Carousel from './components/Carousel';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      products: [],
      loading: true
    };
  }
  // on component mount run this function. use USAFE_ based on React best practices
  UNSAFE_componentWillMount() {
    this.performSearch();
  }
  // perform the root API call and store response in state constructor above
  performSearch = () => {
    fetch(`https://anatta-demo-app.herokuapp.com/api/images`)
      .then(response => response.json())
      .then(responseData => {
        JSON.parse(JSON.stringify(responseData))
        this.setState({
          photos: responseData,
          loading: false
        });
      })
      .catch(error => {
        console.log('There was an error fetching and parsing data', error);
      });

    fetch(`https://anatta-demo-app.herokuapp.com/api/products`)
      .then(response => response.json())
      .then(responseData => {
        JSON.parse(JSON.stringify(responseData))
        this.setState({
          products: responseData,
          loading: false
        });
      })
      .catch(error => {
        console.log('There was an error fetching and parsing data', error);
      });
  }


  render() {
    // if (this.state.products.length > 0) {
    //   console.log(this.state.products)
    // }
    return (
      <div className="react-container">
        <Header />
        <Main />
        <Aside />
        <Recommendation photos={this.state.photos} products={this.state.products} />
        <Footer />
      </div>
    );
  }
}

