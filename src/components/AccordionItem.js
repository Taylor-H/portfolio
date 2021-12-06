import React from "react"



// const AccordionItem = function(props) {
//   console.log('props from AccordionItem', props)
// // const { id, title, short_description, category } = props.project;
//  const [opened, setOpened] = useState(false);
//  const projects = async () => {
//   try {
//     const {data} = await axios.get('/api/projects');
//     return data;
//   } catch (err) {
//     console.error('Uh oh, trouble fetching projects!', err);
//   }
// }
//     return (
//       <div
//         {...{
//           className: `accordion-item, ${opened && 'accordion-item--opened'}`,
//           onClick: () => { this.setState({ opened: !opened }) }
//         }}
//       >
//         <div {...{ className: 'accordion-item__line' }}>
//           <h6 {...{ className: 'accordion-item__title' }}>
//             {category}
//           </h6>
//           <span {...{ className: 'accordion-item__icon' }}/>
//         </div>
//           <div {...{ className: 'accordion-item__inner' }}>
//             <div {...{ className: 'accordion-item__content' }}>
//             <Link to='/projects/:projectId'>{project.title}</Link>
//             </div>
//           </div>
//       </div>
//     )
//   }

//Class approach
//
  class AccordionItem extends React.Component {
    state = {
      opened: false
  }

  render () {
    const {
      props: { id, title, category },
      state: { opened }
    } = this

    return (
      <div
      {...{
        className: `accordion-item, ${opened && 'accordion-item--opened'}`,
        onClick: () => { this.setState({ opened: !opened }) }
      }}
      >
        <div {...{ className: 'accordion-item__line' }}>
          <h3 {...{ className: 'accordion-item__title' }}>
            {title}
          </h3>
          <span {...{ className: 'accordion-item__icon' }}/>
        </div>
          <div {...{ className: 'accordion-item__inner' }}>
            <div {...{ className: 'accordion-item__content' }}>
              <p {...{ className: 'accordion-item__paragraph' }}>
                <Link to='/projects/:projectId'>{category}</Link>
              </p>
            </div>
          </div>
      </div>
    )
  }
}
export default AccordionItem
