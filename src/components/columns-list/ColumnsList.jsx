import React from "react";
import { Link } from "react-router-dom";
import Context from "../../Context";

export default function ColumnsList({ title, id, item }) {

    return (
        <li><Link to={`/kanban/tasks/${id}`} >{title}</Link></li>
    )
} 