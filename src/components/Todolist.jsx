import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import './Todolist.css';

const Todolist = () => {
    const [db, setDb] = useState([]);
    const [password, setPassword] = useState('');
    const [access, setAccess] = useState(false);

    useEffect(() => {
        if (access) {
            getData();
        }
    }, [access]);

    const pass = () => {
        if (password === '5415') {
            setAccess(true);
            setPassword('');
        } else {
            alert("Incorrect password");
        }
    };

    const getData = () => {
        axios.get("http://localhost:3000/posts")
            .then((response) => setDb(response.data))
            .catch(() => alert("Data not Retrieved"));
    };

    const updateData = (id, updatedData) => {
        axios.put(`http://localhost:3000/posts/${id}`, updatedData)
            .then(getData)
            .catch(() => console.log("Error"));
    };

    const edit = (item, field) => {
        const newValue = prompt(`Enter new ${field}`, item[field]);
        if (newValue) {
            const updatedData = {
                ...item,
                [field]: newValue
            };
            updateData(item.id, updatedData);
        }
    };

    const deleteItem = (id) => {
        if (window.confirm("You want to delete")) {
            axios.delete(`http://localhost:3000/posts/${id}`)
                .then(getData)
                .catch(() => alert("Error"));
        }
    };

    return (
        <div>
            {access === false ? (
                <div className='align'>
                    <TextField
                        type="password"
                        label="Enter Password"
                        variant="filled"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="contained" onClick={pass}>Submit</Button>
                </div>
            ) : (
                <div>
                    <div className='detail'>
                        <ul>
                            {db.map(item => (
                                <li key={item.id}>
                                    <div className='edit'>
                                        <div style={{ flex: 1 }}>{item.Name}</div>
                                        <button onClick={() => edit(item, 'Name')}>Edit</button>
                                    </div>
                                    <div className='edit'>
                                        <div style={{ flex: 1 }}>{item.Phonenumber}</div>
                                        <button onClick={() => edit(item, 'Phonenumber')}>Edit</button>
                                    </div>
                                    <div className='edit'>
                                        <div style={{ flex: 1 }}>{item.Gmail}</div>
                                        <button onClick={() => edit(item, 'Gmail')}>Edit</button>
                                    </div>
                                    <div className='edit'>
                                        <div style={{ flex: 1 }}>{item.Pass}</div>
                                        <button onClick={() => edit(item, 'Pass')}>Edit</button>
                                    </div>
                                    <button onClick={() => deleteItem(item.id)}>Delete</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Todolist;
