import React from "react";
import users from "./users";

function Looping(){
    return(
        <div>
            <div>
                <table className="tables_styles">
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Name</th>
                            <th>Id</th>
                            <th>Location</th>
                            <th>Work</th>
                            <th>Car</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.id}</td>
                                    <td>{user.location}</td>
                                    <td>{user.work}</td>
                                    <td>{user.car}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Location</th>
                            <th>Work</th>
                            <th>Car</th>
                        </tr>    
                    </thead>
                    <tbody>
                    {users.map((user,index) =>{
                        return(
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.id}</td>
                                <td>{user.location}</td>
                                <td>{user.work}</td>
                                <td>{user.car}</td>
                            </tr>
                            )
                        })
                        }   
                    </tbody>    
                </table>
            </div>        
        </div>
    )
}

export default Looping;