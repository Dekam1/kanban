import React from "react";
import Context from "../../Context";
import AddButton from "../buttons/add-button/AddButton";
import ColumnsList from "../columns-list/ColumnsList";
import Dropdown from "../dropdown/Dropdown";

export default function Finished({ title, completed }) {

    const [dropdown, setDropdown] = React.useState(false);
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
    const { progress } = React.useContext(Context);

    const showDropdown = () => setDropdown(prev => !prev);
    const onVisibility = () => setDropdownVisibility(prev => !prev);


    return (
        <>
            <h3>{title}</h3>
            <ul className='columns__list'>
                {completed.map(item => <ColumnsList item={item} key={item.id} {...item} />)}
                {dropdown && <Dropdown
                    showDropdown={showDropdown}
                    visibility={dropdownVisibility}
                    onVisibility={onVisibility}
                    dropdownItems={progress}
                />}
            </ul>
            <AddButton showDropdown={showDropdown} disabled={!progress.length > 0} />
        </>
    )
}