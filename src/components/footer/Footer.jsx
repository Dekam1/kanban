import React from "react";
import style from "../footer/style.module.scss"

export default function Footer({ modeling, completed }) {
    return (
        <footer className={style.footer}>
            <div className='container'>
                <div className={style.footer__wrapper}>
                    <div className={style.task__info}>
                        <p>Active tasks: <span>{modeling.length}</span></p>
                        <p>Finished tasks: <span>{completed.length}</span></p>
                    </div>
                    <div>
                        <p>Kanban board by <span>Ildar</span>, <span>2023</span></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}