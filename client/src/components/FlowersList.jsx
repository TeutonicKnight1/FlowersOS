import '../styles/index.scss';

import ListElement from './ListElement';

import { useSelector } from 'react-redux';


function FlowersList() {
    const flowerList = useSelector((state) => state.mainListFlowers.flowersList);
    return (
        <>
        {flowerList.map((flower) => (
            <ListElement key={flower.title} {...flower} />
        ))}
        </>
    )
}

export default FlowersList;