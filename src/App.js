import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function App() {
    const [data, setData] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        let res = await fetch('http://localhost:3000/users/');
        let data = await res.json();
        setData(data);
    }

    const handleDelete = async (userId) => {
        try {
            await fetch(`http://localhost:3000/users/${userId}`, {
                method: 'DELETE',
            });
            getUsers();
        } catch (err) {
            console.log(err);
        }
    }

    const handleUpdate = (user) => {
        setUser({ ...user });
    }

    const updateUser = async () => {
        if (user !== null) {
            setUser(null);
            await fetch(`http://localhost:3000/users/${user.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            await getUsers();
        }
    }

    return <>
        <h1 className="text-center text-success">Users</h1><br />
        {
            data === null ? <h2>Loading...</h2> :
                <Table bordered hover variant="dark">
                    <thead>
                        <tr className="text-center">
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user) => {
                                return <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.contact}</td>
                                    <td className="text-center"><button onClick={() => handleDelete(user.id)} className="btn btn-danger">delete</button>&nbsp;
                                        <button onClick={() => handleUpdate(user)} className="btn btn-success">update</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
        }
        <hr />
        <div className="container text-center">
            <h1>Update User</h1><br />
            <input type="text" placeholder="Name" value={user !== null ? user.name : ''} onChange={(e) => setUser({ ...user, name: e.target.value })} /> <br /> <br />
            <input type="text" placeholder="Email" value={user !== null ? user.email : ''}
                onChange={(e) => setUser({ ...user, email: e.target.value })} /> <br /> <br />
            <input type="text" placeholder="Contact" value={user !== null ? user.contact : ''}
                onChange={(e) => setUser({ ...user, contact: e.target.value })} /> <br /><br />
            <button className="btn btn-success" onClick={updateUser} disabled={!user}>Update User</button>
        </div>
    </>
}



export default App;