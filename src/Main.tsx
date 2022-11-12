import React, {FC} from 'react';


interface IProps {
    offsetKg: number;
    totalEuro: number;
}


export const Main :FC<IProps> = ({ offsetKg, totalEuro }) => {

    return (
        <main>
            <img src="./images/icon.png" />
            <h1>In total we've offset {offsetKg}Kg | ${totalEuro}</h1>
        </main>
    );
};

