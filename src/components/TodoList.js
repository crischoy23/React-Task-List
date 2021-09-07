import React,{useState, useEffect} from 'react';
import CreateTask from '../modals/CreateTask';
import TaskCard from './TaskCard';


function TodoList() {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    //store all the task the user has created
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem("taskList")
        
        
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])

    
    const saveTask = (taskObject) => {
        let initList = taskList 
        initList.push(taskObject)
        localStorage.setItem("taskList", JSON.stringify(initList))
        setModal(false)
        setTaskList(taskList)
    }

    const deleteTask = (index) =>{
        let initList = taskList
        initList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(initList))
        setTaskList(initList)
        window.location.reload()
    }
    

    return (
        <>
        <div className="header text-center w-100 p-4">
            <h1 className="mb-3">Todo List</h1>
            <button className="btn btn-primary" onClick= {() => setModal(true)}>Create Task</button>
        </div>
        <div className="task-container">
            {taskList && taskList.map((task, index) =>
            <TaskCard task={task} index={index} deleteTask={deleteTask}/> )}
        </div>
        <CreateTask modal={modal} toggle={toggle} saveTask={saveTask}/>
        </>
    )
}

export default TodoList;
