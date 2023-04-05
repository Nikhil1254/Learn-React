import { useState } from "react";

function DeleteUser() {

    const [id, setId] = useState("");

    const handleClick = (e) => {
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE'
        }).then((res) => {
            console.log('User Deleted.')
        }).catch(err => {
            console.log('Not able to delete user');
            console.log(err);
        });

        setId("");
    }

    return <>
        <div className="container text-center my-3">
            <h2>Remove User</h2><br />
            <input type="text" placeholder="User ID" value={id} onChange={(e) => setId(e.target.value)} /><br /><br />
            <button onClick={handleClick}>Delete User</button>
        </div>
    </>
}

export default DeleteUser;