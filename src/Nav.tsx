import React, {FC} from 'react';


interface IProps {
}


export const Nav :FC<IProps> = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Share</a></li>
                </ul>
            </nav>
        </header>
    );
};