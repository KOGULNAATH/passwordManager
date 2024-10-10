import React, { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import './Work.css';

const Work = () => {
    const [Name, setName] = useState('');
    const [Phonenumber, setPhone] = useState('');
    const [Gmail, setMail] = useState('');
    const [db, setDb] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    function dataPost() {
        axios.post("http://localhost:3000/posts", { Name, Phonenumber, Gmail,})
            .then(() => {
                alert("Data saved");
                setName('');
                setPhone('');
                setMail('');
            })
            .catch(() => {
                alert("Data declined");
            });
    }

    function getData() {
        axios.get("http://localhost:3000/posts")
            .then((response) => {
                setDb(response.data);
                setDataLoaded(true);
                alert("Data Retrieved");
            })
            .catch(() => {
                alert("Data not Retrieved");
            });
    }

    return (
        <div>
            <div className='align'>
                {!dataLoaded && (
                    <Button variant="contained" onClick={getData}>Get</Button>
                )}
            </div>

            <div>
                <div className='gridget'>
                    <div className='detail'>
                        <ul>
                            {
                                db.map((item) => (
                                    <li key={item.id}>
                                        
                                            {item.Name}
                                            <br />
                                            {item.Phonenumber}
                                            <br />
                                            {item.Gmail}
                                            
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
