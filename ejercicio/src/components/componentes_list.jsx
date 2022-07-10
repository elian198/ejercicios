import React from 'react';
import { ComponenteA } from './componenteA';
import ComponenteB from './componenteB';
const ComponentesList = () => {
    const defaultC = new ComponenteA('elian','pareja','elianpareja@ghmal.com',false);
    return (
        <div>
            <ComponenteB props={ defaultC }/>
        </div>
    );
}

export default ComponentesList;
