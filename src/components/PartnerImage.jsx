import React, { useState, useEffect } from 'react';
import ess_mondial from "../img/partners/ess_mondial.png"

const PartnerImage = () => {
    const [brands, setBrands] = useState([
        { name: 'Ess Mondial', imageUrl: ess_mondial },
        { name: 'Brand 2', imageUrl: ess_mondial },
        { name: 'Brand 3', imageUrl: ess_mondial },
        { name: 'Brand 4', imageUrl: ess_mondial }
    ]);

    return (
        <div className="my-10 flex  items-center gap-20 justify-center">
            {brands.map((brand, index) => (
                <div key={index}>
                    <img src={brand.imageUrl} alt={brand.name} className="h-10" />
                    {/* <span className="text-lg">{brand.name}</span> */}
                </div>
            ))}
        </div>
    );
};

export default PartnerImage;
