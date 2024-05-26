
import React from 'react';

const Cube = () => {
    return (
        <div className="cube">
            {[...Array(6)].map((_, i) => (
                <Face key={i} index={i} />
            ))}
        </div>
    );
};
export default Cube;



const Face = ({ index }) => {
    const texts = [
        "Face 1",
        "Face 2",
        "Face 3",
        "Face 4",
        "Face 5",
        "Face 6"
    ];
    return (
        <div className="face">
            {texts[index]}
        </div>
    );
};