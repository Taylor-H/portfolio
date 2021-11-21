import React from 'react';


const Accordion = function(props) {
//   const [projects, setProjects] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [fetchCounter, setFetchCounter] = useState(0);
  // useEffect(() => {
  //   (async function () {
  //     try {
  //       const { data: projects } = await axios.get('/api/projects');
  //       console.log('projects from useEffect func', projects);
  //       setProjects(projects);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   })();
  // }, [fetchCounter]);
  // const refetch = () => setFetchCounter(fetchCounter + 1);
// const {categories} = props.categories;

  console.log('from Accordion', props);

    return (
      <div {...{ className: 'wrapper' }}>
        <ul {...{ className: 'accordion-list' }}>
          {projects.map((category, key) => {
            return (

              <li {...{ className: 'accordion-list__item', key }}>
                {console.log('projects from Accordion', projects, category)}
                {props.projects.map((project) => {
                console.log('project', project.id);
                  if (project.category === category.categoryName) {
                    return <AccordionItem category={category.categoryName} key={project.id} project={project} />;
                  }
                })}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }


export default Accordion
