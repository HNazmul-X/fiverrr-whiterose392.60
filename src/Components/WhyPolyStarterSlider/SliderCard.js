import React from 'react';

const SliderCard = ({img, title, desc}) => {
    return (
        <>
            <div>
                <div className="row align-items-center p-3 ">
                    <div className="col-md-3">
                        <img src={img} alt="" />
                    </div>
                    <div className="col-md-9">
                        <h1 className=" text-uppercase">OFFERINGS</h1>
                    </div>
                </div>
                <div className="px-3">
                    <p className="text-secondary">POLR token holders who qualify for our tiered system are guaranteed varied allocation to early sales of projects launching through our platform.</p>
                </div>
            </div>
        </>
    );
};

export default SliderCard;