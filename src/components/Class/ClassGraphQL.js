import React, {useState, useEffect} from "react"
import "./Class.css"

function ClassGraphQL(props){

    const [classInfo, SetClassInfo] = useState({})

    const url = "https://api.peterportal.org/graphql"

    useEffect(() => {
        const fetchData = async () => {
            const query = `
                query{
                    course(id:"${props.name}"){
                        title
                        department_name
                        description
                    }
                }
            `
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({query}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()
            SetClassInfo(data.data.course)
        }
        fetchData()
    }, [props.name])

    let info
    if(classInfo){
        info = <div>
            <p id="id">{props.name}</p>
            <p id="name">{classInfo.title}</p>
            <p id="department">{classInfo.department_name}</p>
            <p id="description">{classInfo.description}</p>
        </div>
    } else if(classInfo == null){
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

export default ClassGraphQL