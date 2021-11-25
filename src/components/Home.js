import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';
import ItemList from './ItemList';
import Contact from './Contact';
import { render } from 'react-dom';
import Hi from './Hi';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      projects: [],
      skills: [],
      selectedCategory: {},
      selectedProject: {},
    };
    this.selectCategory = this.selectCategory.bind(this);
  }
  componentDidMount() {
    this.getCategories();
  }
  async getCategories() {
    console.log('fetching');
    try {
      const { data } = await axios.get('/category');
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


