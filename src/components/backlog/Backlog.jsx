import React from "react";
import AddButton from "../buttons/add-button/AddButton";
import SubmitButton from "../buttons/sumbit-button/SubmitButton";
import ColumnsList from "../columns-list/ColumnsList";

export default function Backlog({
    title,
    inputVisibility,
    onVisibility, 
    modeling,
    taskName,
    setTaskName,
    addingTasks
}) {

    return (
        <>
            <h3>{title}</h3>
            <ul className='columns__list'>
                {modeling.map(item => <ColumnsList item={item} key={item.id} {...item} />)}
                {inputVisibility &&
                    <li>
                        <input
                            value={taskName}
                            onChange={e => setTaskName(e.target.value)}
                            type='text'></input>
                    </li>
                }
            </ul>
            {taskName
                ? <SubmitButton addingTasks={addingTasks} />
                : <AddButton disabled={false} onVisibility={onVisibility} />}
        </>
    )
}