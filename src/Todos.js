import React from 'react'

const Todos= ({listdos,deleteTask}) => {
    
    const todolist= listdos.length ?(
        listdos.map(x => {
            return (
                <div className="collection-item z-depth-5" padding="5px" key={x.id}>
                    <p > {x.content} </p> <button className="large material-icons"  onClick={()=>{deleteTask(x.id)}}> delete_forever</button> 
                </div>
            )
        }) 
    ):
    (
        <p className="center">No element left</p>
    )
    
    return (
        <div className="todos collection">
        { todolist}
        </div>
    )
}
export default Todos