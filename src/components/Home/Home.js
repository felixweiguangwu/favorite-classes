import React, {useState} from "react"
//import Class from "../Class/Class.js"
import ClassGraphQL from "../Class/ClassGraphQL.js"
import "./Home.css"

function Home(props){

    const [value, setValue] = useState("")
    const [favoriteClasses, setClasses] = useState([])

    const handleChangeOnValue = (event) =>{
        setValue(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(!favoriteClasses.includes(value)){
            setClasses(favoriteClasses.concat(value))
            setValue("")
        }
    }

    return(
        <div>
            <h1>MY FAVORITE CLASSES!</h1>

            <form onSubmit={handleSubmit}>
                <label>add favorite class </label>
                <input type="text" value={value} onChange={handleChangeOnValue}></input>
                <button type="submit">Add Class</button>
            </form>

            <div className="my-classes">
                {favoriteClasses.map((favClass) => <ClassGraphQL name={favClass} key={favClass}></ClassGraphQL>)}
            </div>
        </div>
    )
}

export default Home