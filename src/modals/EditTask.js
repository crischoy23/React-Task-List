import React, {useState, useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function EditTask({modal, toggle, saveTask, task, updateTask}) {

    //used for storing the task name
    const [taskName, setTaskName] = useState('');
    //used for storing the task description
    const [taskDesc, setTaskDesc] = useState('');

    const handleChange = (e) =>{
        // const name = e.target.name; //grab values in the input by name="" given
        // const value = e.target.value; //grab values in the input by value="" given

        const {name, value} = e.target;

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setTaskDesc(value)
        }
    }

    useEffect(() => {
        setTaskName(task.name);
        setTaskDesc(task.taskDesc);
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        let initObject = {}
        initObject['name'] = taskName
        initObject['taskDesc'] = taskDesc
        updateTask(initObject);
    }

    // const handleSave = () =>{
    //     let taskObject = {};
    //     taskObject["name"] = taskName;
    //     taskObject["taskDesc"] = taskDesc;
    //     saveTask(taskObject)
    // }

    return (
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Edit Task</ModalHeader>

            <ModalBody>
                <form>
                    <div className="form-group mb-2">
                        <label>Add Name</label>
                        <input type="text" className="form-control" name="taskName" value={taskName} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Task Description</label>
                        <textarea rows="5" className="form-control" name="taskDesc" value={taskDesc} onChange={handleChange}></textarea>
                    </div>
                </form>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>Save</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    )
}

export default EditTask;