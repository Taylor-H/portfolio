import React from 'react';
import SinglePet from './SinglePet';

const cody = {
  id: 2,
  name: 'Cody',
  description: 'Adorable pug who loves to hug',
  species: 'dog',
};

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
class PetList extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'all',
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  handleSelectChange(evt) {
    this.setState({ filter: evt.target.value });
  }
  render() {
    const { filter } = this.state;
    const { handleDelete } = this.props;

    const pets = this.props.pets.filter((pet) => {
      if (filter === 'all') return pet;
      if (filter === 'cats') return pet.species === 'cat';
      if (filter === 'dogs') return pet.species === 'dog';
    });

    return (
      <>
        <div>
          <label htmlFor="speciesFilter">Filter by species: </label>
          <select
            onChange={this.handleSelectChange}
            value={filter}
            name="speciesFilter"
          >
            <option>all</option>
            <option>cats</option>
            <option>dogs</option>
          </select>
        </div>
        <div className="pet-list">
          {pets.map((pet) => {
            return (
              <SinglePet key={pet.name} pet={pet} handleDelete={handleDelete} />
            );
          })}
        </div>
      </>
    );
  }
}

export default PetList;
