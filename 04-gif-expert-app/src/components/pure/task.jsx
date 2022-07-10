import React from 'react';
import PropTypes from 'prop-types';
import { Task  } from '../../models/task.class';

const TaskComponents = ( {task} ) => {
    return (
        <div>
            <h1> 
                name : { task.name }
            </h1>
            <h3>
               description:  { task.description }
            </h3>
            <h3>
               level:  { task.level }
            </h3>
            <h3>
               this task is:  { task.complete ? 'COMPLETED':'PENDING' }
            </h3>
        </div>
    );
};


TaskComponents.propTypes = {
task: PropTypes.instanceOf(Task)
};


export default TaskComponents;
