import React from 'react'
import Dishes from './Dishes'

const DishesList = ({ dishList }) => {
    return (
        <>
            <div className="container">
                {dishList.map((lists, i) => {
                    return <Dishes key={i} lists={lists}></Dishes>
                })}
            </div>
        </>
    )
}

export default DishesList
