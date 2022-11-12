import React, {FC} from 'react';


interface IProps {
    name: string;
    emissions: {
        CO2: number;
        price: number;
        text: string;
        value: number;
    };
}


export const Badge :FC<IProps> = ({ name, emissions}) => {
    const {CO2, price, text, value} = emissions;
    return (
        <div>
            <img alt={name} src={"./images/"+name+".png"} />
            <h2>{text}: {value}</h2>
            <h3>CO2: {CO2}Kg</h3>
            <h3>Price: ${price}</h3>
        </div>
    );
};