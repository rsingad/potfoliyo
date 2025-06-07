// src/pages/Dashboard.jsx

import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        axios
            .get("https://desirable-mindfulness-production.up.railway.app/auth/all-users", {
                // withCredentials: true, // 👈 Session cookie bhejne ke liye
            })
            .then((res) => {
                setUser(res.data); // 👈 Response data ko set karo
            })
            .catch((err) => {
                console.log(err.message);
                setUser(null);
            });
    }, []);
    console.log(user);

    if (!user) {
        return <h2>You are not logged in ❌</h2>;
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">All Users 🎉</h2>

            {user && user.length > 0 ? (
                user.map((u, index) => (
                    <div key={index} className="card mb-3 p-3">
                        <h4>{u.name}</h4>
                        <img
                            src={u.image}
                            alt="avatar"
                            width={100}
                            className="rounded-circle my-2"
                        />
                        <p>Email: {u.email}</p>
                    </div>
                ))
            ) : (
                <p>No users found.</p>
            )}
        </div>
    );
};

export default Dashboard;
