import { useState } from 'react'
import './Projects.css'
import RickMorty from './RickMorty'
import ToDo from './ToDo'

const MAX_INDEX = 2;

export default function Projects() {

    const [index, setIndex] = useState(0)
    console.log(index)

    return (

        <>
            <button type="button" onClick={() => setIndex((prevIndex) => Math.abs((prevIndex - 1) % MAX_INDEX))}>left</button>
            {index === 0 ? <RickMorty /> : null}
            {index === 1 ? <ToDo /> : null}
            <button type="button" onClick={() => setIndex((prevIndex) => (prevIndex + 1) % MAX_INDEX)}>right</button>
        </>
    )
}