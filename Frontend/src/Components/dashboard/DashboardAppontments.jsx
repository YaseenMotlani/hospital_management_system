import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

const DashboardAppointments = () => {
    return (
        <div className="w-75 h-50 shadow-lg rounded p-3 m-2">
            <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Time</th>
                    <th scope="col">Date</th>
                    <th scope="col">Patient Name</th>+6
                    <th scope="col">Doctor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>9 AM - 10 AM</td>
                    <td>27/11/2025</td>
                    <td><IoPersonCircleOutline/>John</td>
                    <td>Rahul</td>
                </tr>
                <tr>
                    <td>9 AM - 10 AM</td>
                    <td>27/11/2025</td>
                    <td><IoPersonCircleOutline/>John</td>
                    <td>Rahul</td>
                </tr>
                <tr>
                    <td>9 AM - 10 AM</td>
                    <td>27/11/2025</td>
                    <td><IoPersonCircleOutline/>John</td>
                    <td>Rahul</td>
                </tr>
                <tr>
                    <td>9 AM - 10 AM</td>
                    <td>27/11/2025</td>
                    <td><IoPersonCircleOutline/>John</td>
                    <td>Rahul</td>
                </tr>
                <tr>
                    <td>9 AM - 10 AM</td>
                    <td>27/11/2025</td>
                    <td><IoPersonCircleOutline/>John</td>
                    <td>Rahul</td>
                </tr>
                
            </tbody>
            </table>
        </div>
    );
};

export default DashboardAppointments;