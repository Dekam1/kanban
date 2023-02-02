import React from "react";
import style from "../sumbit-button/style.module.scss"

export default function SubmitButton({ addingTasks }) {
    return (
        <button onClick={addingTasks} className={style.button__submit}>Submit</button>
    )
}