import React, { Component } from 'react';
import CategoryList from './CategoryList';
import SingleCategory from './SingleCategory';
// import About from './About';
// import Nav from './Nav';
import axios from 'axios';


export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategory: {},
    }
    this.selectCategory = this.selectCategory.bind(this);
  }
  componentDidMount() {
    this.getCategories();
  }
  async getCategories(){
    console.log('fetching');
    try{
      const { data } = await axios.get('/category');
      this.setState({ categories: data })

    } catch (err) {
      console.log(err);
    }
  }
  selectCategory(category) {
    return this.setState({ selectedCategory: category });
  }
  render() {
    return (
      <div className="category-list">

          {/* we pass students from our state and selectStudent method to
          the CategoryList component, so we can access both of them in CategoryList
          component's props */ console.log('state in Root', this.state)}
          <CategoryList categories={this.state.categories} selectCategory={this.selectCategory} selectedCategory={this.state.selectedCategory}/>

        {/* we check if selectedCategory exists, aka if we clicked on any
        of the students. if it does, then it's going to be rendered on our page
        since our state has changed.
        we pass our selectedCategory object down to the SingleStudent component.*/}
        {/* {this.state.selectedCategory.id ? (
          <SingleCategory category={this.state.selectedCategory} />
        ) : null} */}

      </div>
    );
  }
}








  // render() {

  //   return (
  //   <div id="app">
  //         {error && <div>Error: {error}</div>}
  //         {loading && <div>Loading</div>}
  //         <header>
  //           <div className="header">
  //             <div className="name-container logo">
  //               <Link to="/">Taylor Hembree</a>
  //             </div>
  //             <input className="menu-btn" type="checkbox" id="menu-btn" />
  //             <label className="menu-icon" for="menu-btn">
  //               <span className="navicon"></span>
  //             </label>
  //               <ul className="menu">
  //               <li><Link to="/">Home</Link></li>
  //               <li><Link to="/about">About</Link></li>
  //               <li><Link to="/projects">Projects</Link></li>
  //               <li><Link to="/#contact">Contact</Link></li>
  //             </ul>
  //             </div>
  //         </header>
  //   </div>
  //   );
  // }

