import React from "react";
import userAvatar from './img/user-avatar.svg';
import style from '../header/style.module.scss'

export default function Header() {

    const [isActive, setIsActive] = React.useState(false);

    const activeClass = isActive
        ? `${style.active} ${style.profile__menu}`
        : style.profile__menu;

    const handleClick = () => {
        setIsActive(prev => !prev);
    }

    return (
        <header className={style.header}>
            <div className='container'>
                <div className={style.header__wrapper}>
                    <h1 className={style.header__title}>Awesome Kanban Board</h1>
                    <div onClick={handleClick} className={style.profile}>
                        <div className={style.profile__wrapper}>
                            <div className={style.profile__avatar}>
                                <img src={userAvatar} alt='avatar'></img>
                            </div>
                            <span className={isActive ? style.active : ""}></span>
                        </div>
                        <div className={activeClass}>
                            <div><a href="#">Profile</a></div>
                            <div><a href="#">Log Out</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}