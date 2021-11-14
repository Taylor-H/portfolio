import React from 'react';
import axios from 'axios';

/**
 * Steps
 * 1. Render a button with "Delete" in it
 * 2. Give it the class "delete-button"
 * 3. When user clicks the button, send DELETE to /api/projects/:projectId
 *    where projectId is provided by props
 * 4. Call the `handleDelete` function, provided on props
 * 5. INTEGRATION STEP! The project should now be deleted. EITHER
 *    a. refetch the projects from the server, OR
 *    b. syncronously remove the project from the Root component
 * 6. If the server responds with 500, then don't call handleDelete
 */

// Hooks / Class Solution
const DeleteProject = (props) => {
  const { handleDelete, projectId } = props;
  const handleClick = async () => {
    try {
      await axios.delete(`/api/projects/${projectId}`);
      handleDelete(projectId);
      // handleDelete()
    } catch (err) {
      // console.error(err.message)
    }
  };
  return (
    <button className="delete-project" onClick={handleClick}>
      Delete
    </button>
  );
};

// Starting Point
// const DeleteProject = () => null

export default DeleteProject;
