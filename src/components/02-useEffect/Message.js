import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setcoords] = useState({x:0, y:0})
    const {x, y} = coords;
    useEffect(() => {
        const mouseMove = (e) =>{
            const coors = {x: e.x , y: e.y};
            setcoords(coors);
        }


        window.addEventListener('mousemove',mouseMove);
        return () => {
            window.removeEventListener('mousemove',mouseMove)
        }
    }, [])


    return (
        <div>
            <h3>Eres geneial</h3>
            <p>x: {x} y: {y}</p>
        </div>
    )
}
