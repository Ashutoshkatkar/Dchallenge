import React, { useEffect, useState } from 'react'


const Tod = () => {
    const [task, setTask] = useState('');
    // console.log("task is", task)
    const [item, setItem] = useState([])
    const additem = () => {
        if (!task) {

        } else {
            setItem([...item, task])
            setTask("")
        }
    }
    // console.log("task", task)
    // console.log("added", item)

    const fun2 = (id) => {
        const updated = item.filter((ele, ind) => {
            return ind !== id;
        })
        
        setItem(updated)
    }





    return (
        <>
            <div className='row justify-content-center'>
                <div className='col-6 col-lg-6'>
                    <div className="card text-white bg-dark mb-3" >
                        <div className="card-header">To do app</div>
                        <div className="card-body">

                            <input type='text' className='pr-3' placeholder='Enter task' value={task} onChange={(e) => setTask(e.target.value)} style={{ "textAlign": "center" }} />
                            <a className="btn btn-primary ml-2" onClick={additem} >ADD</a>
                            {item.map((el, ind) => {
                                return (
                                    <div key={ind}>
                                        <li className='mt-2'>{el}

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill ml-2" viewBox="0 0 16 16" onClick={() => fun2(ind)} >
                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                            </svg>
                                            {/* <a className="btn btn-sm btn-danger ml-3 mt-1" onClick={() => fun2(ind)} >delete</a> */}
                                        </li>
                                    </div>
                                )
                            })}
                        </div>
                        <a className="btn btn-primary" onClick={() => setItem([])} >Remove all</a>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Tod
