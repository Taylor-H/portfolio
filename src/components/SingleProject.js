import React, { useState } from 'react';
import DeleteProject from './DeleteProject';
// class SingleProject extends React.Component {

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

class SingleProject extends React.Component {
  constructor() {
    super();
    this.state = {
      include: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => ({ included: !prevState.included }));
  }

  render() {
    const { included } = this.state;
    const { project, handleDelete } = this.props;
    const { id, title, short_description, image_url, include} = project;
    console.log('What are project props?: ', this.props.project);
    console.log('What is state?:', this.state);
    return (
      <div className={`single-project ${included ? 'included' : ''}`}>
        <div>{include ? 'Included!' : 'Excluded'}</div>
<button onClick={this.handleClick}>Toggle Status</button>
<DeleteProject projectId={id} handleDelete={handleDelete} />
        <h2>{title}</h2>
        <div>{short_description}</div>
        <div>
          <img src={image_url} />
        </div>
      </div>
    );
  }
}
export default SingleProject;
// onClick={()=> this.props.changeClass(this.props.className)}

