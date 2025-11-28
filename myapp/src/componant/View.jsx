import React from 'react'
import "./view.css"
import { useState } from 'react'
import { useEffect } from 'react'

export default function View() {


    let [Data, setData] = useState([ ]);

    useEffect(() => {

        fetch("http://localhost:3005/view", { method: "POST", })

            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched Data:", data);
                setData(data.data)

                console.log(Data);
            })
            .catch((err) => console.log("fetching error", err));

    }, [])


    return (
        <>
            <h3>Card View Section</h3>
            <div className="view-container">
                {
                    Data.map((v, k) => {
                        return <div className="view-card" key={k}>
                            <p>Name: {v.name}</p>
                            <p>Email: {v.email}</p>
                            <p>Phone No: {v.phone}</p>
                        </div>
                    })
                }

            </div>

        </>
    )
}
