import React, {FC} from 'react';
import {render} from 'react-dom';

interface IProps {
}

export const Popup :FC<IProps> = () => {
    return (
        <div>
            <h1>Popup</h1>
        </div>
    );
}

render(<Popup />, document.getElementById('popup'));