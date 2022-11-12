import '../App.css';
import React ,{ useState } from 'react';

export default function HomePage(){

    const [text, setText] = useState("");
    const [list, setList] = useState(["ready" , "set" , "GO"]);


    function onSubmit(e){
        e.preventDefault();

        let newList = [...list , text];
        setList(newList);
        setText("");
    }


    return(
        <div className='homeContainer'>
            <h1>Learning React</h1>

            <form onSubmit={onSubmit}>
                <input 
                type="text"
                 name="listItem"
                 id="listItem" 
                 value={text}
                 onChange={(e) => setText(e.target.value)} />
                 <button type='submit'>Add</button>
            </form>

            <ul>
                {
                    list.map((item , index) =>{
                        return <li key={index}>{item}</li>
                    })}
            </ul>
        </div>
    )
}

