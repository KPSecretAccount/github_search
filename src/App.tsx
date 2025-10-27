import {useEffect, useState} from 'react'
import './App.css'


export default function App() {
const[users, setUsers] = useState<{login:string, avatar_url:string}[]>([]);
const[result,search] = useState<string>() ;
useEffect(() => {
    fetch("https://api.github.com/search/users?q="+ result +"+in:login")
        .then((response) => response.json())
        .then((data) => {
            setUsers(data.items);
            console.log(data);
        })
        .catch((error) => console.log(error));
}, [result]);
return (
    <>
    <label>
        <input id = "myInput" placeholder={"Type to search"}/>
    </label>
    <button onClick={() => {
        const newVal = (document.getElementById('myInput') as HTMLInputElement).value;
        search(newVal);
    }}>search</button>
        {
            users.map((user, index) =>
                <div key = {index}>
                    <img src ={user.avatar_url}
                     alt = {user.login}/> {user.login}
                </div>
            )
        }
</>)
    }
