import React from "react";

const DashboardPatientFee = () => {
    return (
        <div className="p-3 shadow-lg bg-white rounded" style={{width: "29.8%"}}>
            <div>
                <h5>Patient Fee</h5>
            </div> 

            <div className="mt-2" style={{ height: "30vh", msOverflowX: "hidden", overflowY: "auto"}}>
                <ul className="PS-0" style={{listStyle: "none"}}>
                    <li className="w-100 d-flex justify-content-between align-items-center py-2" style={{ borderBottom: "1px solid grey" }}>
                        {/* Image of Education Content */}
                        <div className="d-flex align-items-center">
                            <div>
                                <img
                                     src="https://img.freepik.com/free-vector/organic-flat-medical-conference-illustration_23-2148892741.jpg?semt=ais_hybrid&w=740&q=80"
                                    alt="Clinic Teaching"
                                    style={{ width:50, height:50, borderRadius:50 }}
                                />
                            </div>
                            {/* Title & Subtitle of Education Content */}
                            <div className="ms-2">
                                <div className="educationContentTitle"> EG Subramani</div>
                                <div className="educationContentSubTitle"> Doctor fee pending</div>
                            </div>
                        </div>
                        <button className="btn btn-primary">Request Fee</button>
                    </li>
                    <li className="w-100 d-flex justify-content-between align-items-center py-2" style={{ borderBottom: "1px solid grey" }}>
                        {/* Image of Education Content */}
                        <div className="d-flex align-items-center">
                            <div>
                                <img
                                     src="https://img.freepik.com/free-vector/organic-flat-medical-conference-illustration_23-2148892741.jpg?semt=ais_hybrid&w=740&q=80"
                                    alt="Clinic Teaching"
                                    style={{ width:50, height:50, borderRadius:50 }}
                                />
                            </div>
                            {/* Title & Subtitle of Education Content */}
                            <div className="ms-2">
                                <div className="educationContentTitle"> Elizabeth Poison</div>
                                <div className="educationContentSubTitle"> Doctor fee pending</div>
                            </div>
                        </div>
                        <button className="btn btn-primary">Request Fee</button>
                    </li>
                    <li className="w-100 d-flex justify-content-between align-items-center py-2" style={{ borderBottom: "1px solid grey" }}>
                        {/* Image of Education Content */}
                        <div className="d-flex align-items-center">
                            <div>
                                <img
                                     src="https://img.freepik.com/free-vector/organic-flat-medical-conference-illustration_23-2148892741.jpg?semt=ais_hybrid&w=740&q=80"
                                    alt="Clinic Teaching"
                                    style={{ width:50, height:50, borderRadius:50 }}
                                />
                            </div>
                            {/* Title & Subtitle of Education Content */}
                            <div className="ms-2">
                                <div className="educationContentTitle"> Sumanth Tinson</div>
                                <div className="educationContentSubTitle"> Doctor fee pending</div>
                            </div>
                        </div>
                        <button className="btn btn-primary">Request Fee</button>
                    </li>
                    <li className="w-100 d-flex justify-content-between align-items-center py-2" style={{ borderBottom: "1px solid grey" }}>
                        {/* Image of Education Content */}
                        <div className="d-flex align-items-center">
                            <div>
                                <img
                                     src="https://img.freepik.com/free-vector/organic-flat-medical-conference-illustration_23-2148892741.jpg?semt=ais_hybrid&w=740&q=80"
                                    alt="Clinic Teaching"
                                    style={{ width:50, height:50, borderRadius:50 }}
                                />
                            </div>
                            {/* Title & Subtitle of Education Content */}
                            <div className="ms-2">
                                <div className="educationContentTitle"> Krishna rajan </div>
                                <div className="educationContentSubTitle"> Doctor fee pending</div>
                            </div>
                        </div>
                        <button className="btn btn-primary">Request fee</button>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default DashboardPatientFee;
