import React, {FC, useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import { Badge } from './Badge';
import { Main } from './Main';
import { Nav } from './Nav';


interface IProps {
}

export const Popup :FC<IProps> = () => {
    const badges = [
        {
            name: "tree", 
            emissions: {
                CO2: 0.1,
                price: 0.2,
                text: "Number of trees planted",
                value: 0
            }
        },{
            name: "solar", 
            emissions: {
                CO2: 0.1,
                price: 0.2,
                text: "Hours of solar energy",
                value: 12324
            }
        },{
            name: "wind", 
            emissions: {
                CO2: 0.1,
                price: 0.2,
                text: "Hours of wind energy",
                value: 12324
            }
        },{
            name: "methane", 
            emissions: {
                CO2: 0.1,
                price: 0.2,
                text: "Kgs of methane reduced",
                value: 12324
            }
        },{
            name: "carbon", 
            emissions: {
                CO2: 0.1,
                price: 0.2,
                text: "Kgs of carbon sequestered",
                value: 12324
            }
        }

    ];
    useEffect(() => {
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            const tabId = tabs.length === 0 ?  0 : tabs[0].id!;
            chrome.tabs.sendMessage(tabId, '', response => {
                console.log(response);
            });
        })
    }, []);
    return (
        <div>
            <Nav />
            <Main offsetKg={14257} totalEuro={12362} />
            {badges.map((badge) =>(
                <Badge name={badge.name} emissions={badge.emissions}></Badge>
            ))}
            <h1>Hello World!</h1>
        </div>
    );
}


const container = document.getElementById('popup');
const root = createRoot(container!);
root.render(<Popup />);