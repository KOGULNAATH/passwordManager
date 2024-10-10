import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import './Home.css';
import { Padding } from '@mui/icons-material';

const Home = () => {
  const [Name, setName] = useState('');
  const [Phonenumber, setPhone] = useState('');
  const [Gmail, setMail] = useState('');
  const [Pass, setPwd] = useState('');

  // Posting data
  const dataPost = () => {
    axios.post("http://localhost:3000/posts", { Name, Phonenumber, Gmail, Pass })
      .then(() => {
        alert("Data saved");
        setName('');
        setPhone('');
        setMail('');
        setPwd('');
      })
      .catch(() => {
        alert("Data declined");
      });
  };

  return (
    <div>
      {/* Pricing Plans Section */}
      <section className="pricing-section">
        <div className="pricing-card">
          <h3>Standard</h3>
          <p>For small businesses that need secure credential management</p>
          <p>$20</p>
          <p>Per month for 10 users, billed annually</p>
          <button>Purchase now</button>
          <ul>
            <li>Secure up to 10 users</li>
            <li>Unlimited passwords & packages</li>
            <li>Basic monitoring & logs</li>
            <li>Health score</li>
          </ul>
        </div>

        <div className="pricing-card">
          <h3>Business</h3>
          <p>For organizations that need advanced group sharing and access controls</p>
          <p>$8</p>
          <p>Per user per month, billed annually</p>
          <button>Try it free</button>
          <ul>
            <li>Everything in Standard</li>
            <li>Supports unlimited number of users</li>
            <li>Granular sharing controls</li>
            <li>SSO & SCIM integrations</li>
          </ul>
        </div>

        <div className="pricing-card">
          <h3>Business Plus</h3>
          <p>For companies with coverage that need proactive security</p>
          <p>$5</p>
          <p>Per employee per month, billed annually starting at 100 employees</p>
          <button>Contact Sales</button>
          <ul>
            <li>Everything in Business</li>
            <li>Starting at 100 employees</li>
            <li>Credential risk detection</li>
            <li>Custom success managers</li>
          </ul>
        </div>
      </section>

      {/* Form Section */}
      <div className="align">
        <TextField label="Name" variant="filled" value={Name} onChange={(e) => setName(e.target.value)} style={{ backgroundColor: "white" }} />
          <br />
        <TextField label="Phone Number" variant="filled" value={Phonenumber} onChange={(e) => setPhone(e.target.value)} style={{ backgroundColor: "white" }} />
          <br />
        <TextField label="Gmail ID" variant="filled" value={Gmail} onChange={(e) => setMail(e.target.value)} style={{ backgroundColor: "white" }} />
          <br />
        <TextField label="Password" variant="filled" value={Pass} onChange={(e) => setPwd(e.target.value)} style={{ backgroundColor: "white" }} />
        <Button variant="contained" onClick={dataPost}>Confirm</Button>
      </div>
    </div>
  );
};

export default Home;