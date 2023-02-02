import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Backlog from "../components/backlog/Backlog";
import Ready from "../components/ready/Ready";
import InProgress from "../components/progress/InProgress";
import Finished from "../components/finished/Finished";

export default function Home({
    inputVisibility,
    onVisibility,
    modeling,
    ready,
    progress,
    completed,
    taskName,
    setTaskName,
    addingTasksToBacklog
}) {

    return (
        <>
            <Header />
            <main className='main'>
                <div className='container'>
                    <div className='columns'>
                        <div className='columns__wrapper'>
                            <div className='columns__item'>
                                <Backlog
                                    title='Backlog'
                                    inputVisibility={inputVisibility}
                                    onVisibility={onVisibility}
                                    modeling={modeling}
                                    taskName={taskName}
                                    setTaskName={setTaskName}
                                    addingTasks={addingTasksToBacklog} />
                            </div>
                            <div className='columns__item'>
                                <Ready title='Ready' ready={ready} />
                            </div>
                            <div className='columns__item'>
                                <InProgress title='In Progress' progress={progress} />
                            </div>
                            <div className='columns__item'>
                                <Finished title='Finished' completed={completed} />
                            </div>
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