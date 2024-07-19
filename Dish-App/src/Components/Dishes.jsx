import React, { useEffect } from 'react'

const Dishes = ({ lists }) => {


    return (
        <>
            <div className="card dish-card" style={{ width: '18rem' }}>
                <img src={lists.ImageUrl} className="card-img-top card-image" alt="..." />
                <div className="card-body">
                    <center>
                        <h5 className="card-title" style={{ fontSize: '25px' }}>{lists.DishName}</h5>
                        <a href="#" className="publ-btn">Publish Status {lists.IsPublished}</a>
                    </center>
                </div>
            </div>
        </>
    )
}

export default Dishes
