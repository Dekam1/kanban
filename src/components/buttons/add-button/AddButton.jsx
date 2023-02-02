import React from "react";
// import Context from "../../../Context";
import style from "./style.module.scss"

export default function AddButton({ onVisibility, disabled = true, showDropdown = undefined }) {

    const buttonStyles = disabled
        ? `${style.button_add} ${style.disabled}`
        : style.button_add;

    function featureSet(e) {
        if (onVisibility) onVisibility();
        if (showDropdown) showDropdown();
    }

    return (
        <button disabled={disabled} onClick={() => featureSet()} className={buttonStyles}>
            <span className={style.button__image}></span>
            <span className={style.button__text}>Add card</span>
        </button>
    )
}