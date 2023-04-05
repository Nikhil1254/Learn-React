import { useState } from "react";
import { useHistory } from "react-router-dom";

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        let user = {
            name,
            email,
            contact
        }
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((res) => {
            console.warn('User added Successfully');
            history.push('/');
        }).catch(err => {
            console.error("Something went wrong !");
            console.error(err);
        })
    }

    return <>
        <div className="container text-center my-5 border p-3">
            <h2>Add New User</h2><hr />
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} /><br /><br />
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /> <br /><br />
            <input type="text" placeholder="Contact" onChange={(e) => setContact(e.target.value)} /><br /><br />
            <button onClick={handleSubmit}>Add User</button>
        </div>
    </>
}


export default Form;