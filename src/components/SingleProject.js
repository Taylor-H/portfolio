import React, { useState } from 'react';
import DeletePet from './DeletePet';
// class SinglePet extends React.Component {

//   render() {
//     // console.log('What are props?: ', this.props);
//     // console.log('What is state?:', this.state);
//     return <div className={this.props.className} key={this.props.id}>
// {this.props.name}{this.props.id}
//       <button onClick= {() => this.status? false : 'Adopted'}
//       value={this.state.adoptedStatus}>
//         Toggle Status</button>
//     </div>;
//   }
// }

class SinglePet extends React.Component {
  constructor() {
    super();
    this.state = {
      adopted: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => ({ adopted: !prevState.adopted }));
  }

  render() {
    const { adopted } = this.state;
    const { pet, handleDelete } = this.props;
    const { id, name, description, species } = pet;
    // console.log('What are props?: ', this.props);
    // console.log('What is state?:', this.state);
    return (
      <div className={`single-pet ${adopted ? 'adopted' : ''}`}>
      <h2>{name}</h2>
      <div>{species}</div>
      <div>{description}</div>
      <hr />
      <div>{adopted ? 'Adopted!' : 'Available'}</div>
      <button onClick={this.handleClick}>Toggle Status</button>
      <DeletePet petId={id} handleDelete={handleDelete} />
    </div>
    );
  }
}
export default SinglePet;
// onClick={()=> this.props.changeClass(this.props.className)}
