import React,{useContext} from 'react';
import { studentContext } from '../App';

export const Students =() => {
    const students =useContext( studentContext);
    return (
        <div>
        <ul>
            {
                students.map(e=> <li key ={e}>{e}</li>)
            }
        </ul>     
        </div>
    )
}

export default Students;