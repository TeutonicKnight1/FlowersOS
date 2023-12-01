import '../styles/index.scss';

import dataFlowers from '../dataFlowers';

import ListElement from './ListElement';


function FlowersList() {
    return (
        <>
        {dataFlowers.map((flower) => (
            <ListElement key={flower.title} {...flower} />
        ))}
        </>
    )
}

export default FlowersList;