import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function API() {

    const [data1, setData1] = useState([]);
    const [err, setErr] = useState("");

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((data) => {
                console.log(data.data);
                setData1(data.data);
            })
            .catch((err) => {
                console.log(err);
                setErr(err.message); 
            });
    }, []); 


    return (
        <>

            {err !== "" && <h2>{err}</h2>}
            {data1.map((item) => {
                const { id, title, body } = item; 
                return (
                    <>
                        <h4>ID: {id}</h4>
                        <h4>TITLE: {title}</h4>
                        <h4>BODY: {body}</h4>
                    </>
                );
            })}

        </>
    )
}
