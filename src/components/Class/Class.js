import React, {useState, useEffect} from "react"
import "./Class.css"

function Class(props){

    const [classInfo, SetClassInfo] = useState({})

    const url = "https://api.peterportal.org/rest/v0/courses/"

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url + props.name)
            const data = await response.json()
            SetClassInfo(data)
        }
        fetchData()
    }, [props.name])

    let info
    if(classInfo.id){
        info = <div>
            <p id="id">{props.name}</p>
            <p id="name">{classInfo.title}</p>
            <p id="department">{classInfo.department_name}</p>
            <p id="description">{classInfo.description}</p>
        </div>
    } else if(classInfo.error){
        info = <div>
                    <p id="id">{props.name}</p>
                    <p>Class Not Found</p>
               </div>
    } else {
        info = <p>Loading...</p>
    }
    
    return(
        <div className="class">
            {info}
        </div>
    )
}

export default Class