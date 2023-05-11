import React from 'react';

const ServiceCard = ({service}) => {
    console.log(service);
    const {img, price, title} = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-[#FF3811] '>Price:${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-[#FF3811]">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;