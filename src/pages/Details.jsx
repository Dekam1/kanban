import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import style from "./style.module.scss"

export default function Detalis({
    modeling,
    ready,
    progress,
    completed,
    setModeling,
    setReady,
    setProgress,
    setCompleted,
    removingDuplicates,
}) {

    const linkId = +window.location.pathname.substring(14);

    const findItem = () => {
        let obj;
        const arrays = [modeling, ready, progress, completed];
        arrays.map(arr => arr.find(item => {
            if (item.id === linkId) {
                if (!item.description) {
                    item.description = 'This task has no description'
                }
                obj = item
            }
        }))
        return obj || {}
    }

    let obj = findItem();

    const editDescription = e => {

        removingDuplicates(obj.id)

        switch (obj.status) {
            case 'backlog':
                setModeling(prev => [...prev, { ...obj, description: e.target.value }])
                break
            case 'ready':
                setReady(prev => [...prev, { ...obj, description: e.target.value }])
                break
            case 'progress':
                setProgress(prev => [...prev, { ...obj, description: e.target.value }])
                break
            case 'finished':
                setCompleted(prev => [...prev, { ...obj, description: e.target.value }])
                break
        }
    }

    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    <div className={style.detalis__wrapper}>
                        <div className={style.information}>
                            <h1 className={style.information__title}>{obj.title}</h1>
                            <textarea className="information__description"
                                onChange={(e) => editDescription(e)}
                                defaultValue={obj.description}>
                            </textarea>
                        </div>
                    </div>
                </div>
            </main>
            <Footer
                modeling={modeling}
                completed={completed}
            />
        </>
    )
}
