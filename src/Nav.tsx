import React, {FC} from 'react';


interface IProps {
}


export const Nav :FC<IProps> = () => {

    return (
        <nav>
            <a href="#">Login</a>
            <a href="#">Share</a>
        </nav>
    );
};