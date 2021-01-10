import React from "react";
import './App.css';
import { AiOutlineTags } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { BsExclamationSquareFill } from 'react-icons/bs';
import { MdPermContactCalendar } from 'react-icons/md';
import { GiStack } from 'react-icons/gi';
import { IoMdContact } from 'react-icons/io';
import { RiGroupLine } from 'react-icons/ri';
import { BsBookmarkFill } from 'react-icons/bs';




function Menu() {
    return (
        <div className="Menu">
        <h4>Tasks</h4>  
        <hr/>  
        <ul>
        <li className="selected"><a href="/#"> <IoMdContact/> My tasks</a></li>
        <li><a href="/"> <BsBookmarkFill/> My Bookmarks</a></li>
        <hr/>
        <p/>
        <li><a href="/"> <RiGroupLine/>  Team</a></li>
        <li><a href="/"> <MdPermContactCalendar/>  Team Flow2021</a></li>
        <hr/>
        <li><a href="/"> <AiOutlineTags/>  Tags</a></li>
        <hr/>
        <li><a href="/"> <BiSearch/>  Finder</a></li>
        <li><a href="/"> <GiStack/>  All Tasks</a></li>
        <li><a href="/"> <BsExclamationSquareFill/>  Find Overdue</a></li>
        <li><a href="/"> <RiGroupLine/>  Find Recurring</a></li>
        <li><a href="/"> <RiGroupLine/>  Find Unscheduled</a></li>
        <hr/>



        
        </ul>
    </div>
    )
}
export default Menu; 