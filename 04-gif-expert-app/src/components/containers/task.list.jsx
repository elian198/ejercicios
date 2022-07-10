import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/level.enum';
import TaskComponents from '../pure/task';


const TaskList = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    return (
        <div>
            <div>
                <TaskComponents task={ defaultTask }/>
            </div>
        </div>
    );
};

export default TaskList;
