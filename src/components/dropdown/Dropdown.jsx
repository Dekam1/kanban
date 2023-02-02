import React from "react";
import Context from "../../Context";
import style from "../dropdown/style.module.scss";

export default function Dropdown({
    dropdownItems = [],
    visibility = false,
    onVisibility = undefined,
    showDropdown = false,
}) {

    const { addingItems } = React.useContext(Context);

    function featureSet(obj) {
        if (showDropdown) showDropdown(false);
        addingItems(obj);
    }

    return (
        <>
            <li onClick={onVisibility} className={style.dropdown}>
                <div className={style.dropdown__wrapper}>
                    <span></span>
                </div>
                {visibility && <ul className={style.dropdown__menu}>
                    {dropdownItems.map(item =>
                        <li onClick={() => featureSet(item)}
                            key={item.id}
                            className={style.dropdown__list}>{item.title}
                        </li>)}
                </ul>}
            </li>
        </>
    )
}