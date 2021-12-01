import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import CategoryList from './CategoryList';
import ItemList from './ItemList';
import Contact from './Contact';
import Hi from './Hi';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategory: {},

    };
    this.selectCategory = this.selectCategory.bind(this);
  }
  componentDidMount() {
    this.getCategories();
  }
  async getCategories() {
    console.log('fetching');
    try {
      //this is where we make the request to the server with the api routes referenced in the routes/category.js file
      const { data } = await axios.get('/category');
      console.log('data', data);
      this.setState({ categories: data });
    } catch (err) {
      console.log(err);
    }
  }
  selectCategory(category) {
    return this.setState({ selectedCategory: category });
  }
  render() {
    return (
      <div className="grid-container">
        <div className="hi">
          <Hi />
        </div>
        <div className="skills">
          <ItemList
            itemName={'Skills'}
            itemList={[
              'Graphic Design',
              'Front End',
              'UI/UX',
              'DevOps',
              'Back End',
              'Data Design',
            ]}
          />
        </div>

        <div className="tools">
          <ItemList
            itemName={'Tools'}
            itemList={[
              'JavaScript',
              'Node',
              'Express',
              'React',
              'Redux',
              'HTML',
              'CSS',
              'PostgreSQL',
              'Sequelize',
            ]}
          />
        </div>
        <div className="projects">
            <CategoryList
              categories={this.state.categories}
              selectCategory={this.selectCategory}
              selectedCategory={this.state.selectedCategory}
            />
        </div>
        <div className="contact">
          <Contact />
        </div>
      </div>
    );
  }
}
export default Home;


//NOTES: when creating this component, we needed to organize a list of all projects by category with a category heading like:
//   CATEGORY HEADER        v
//    PROJECT NAME
//    PROJECT NAME
//    PROJECT NAME
//   CATEGORY HEADER        >
//   CATEGORY HEADER        >
//
//My first approach was to map through the categories in the Home component and list them in a <li> tag. Then within each <li> tag I would close the tag and open another <li> with a map of the projects that have the corresponding categoryId associated. It didn't seem to matter that none of the key values were the same were all different values I was able to get it to display all the categories and when clicked on the projects would display but there were errors in the console. This approach didn't work because react keeps track of elements that are mapped with a unique key and apparently they have to be indexed by React.


//My second approach was to create a list of all projects sorted by category. Each CATEGORY HEADER has a collapsible accordion item and some logic to display a header whenever the categoryId changed from the last categoryId. This approach worked but it was a bit messy.
