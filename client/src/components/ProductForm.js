import React, {useState} from 'react';
import axios from 'axios';

export default prors => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onsubmitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res => console.log("Response:",res))
            .catch(err => console.log("Error:",err))
    }


    return(
        <form onSubmit={onsubmitHandler}>
            <p>
                <lable>Title</lable>
                <input type="text" onChange={e=>setTitle(e.target.value)}/>
            </p>
            <p>
                <lable>Price</lable>
                <input type="text" onChange={e=>setPrice(e.target.value)}/>
            </p>
            <p>
                <lable>Description</lable>
                <input type="text" onChange={e=>setDescription(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

