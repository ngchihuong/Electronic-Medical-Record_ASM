import { useState } from "react";
import patientsData from "../fake-data/patientsData";
import { Pagination } from "antd";

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemPerPage = 9;

    const filteredPatients = patientsData.filter(patient =>
        `${patient.firstName} ${patient.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const totalPatients = filteredPatients.length;
    const totalPages = Math.ceil(totalPatients / itemPerPage);

    const currentPatients = filteredPatients.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage) 
    return (
        <>
            <div className="section">
                <div className="content">
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search patients..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                        <button className='toggle_view' onClick={() => setViewMode(viewMode === 'table' ? 'grid' : 'table')}>
                            Toggle View
                        </button>
                    </div>
                    {viewMode === 'table' ? (
                        <>
                            <div className="patients-header">
                                <div className="header-item">First Name</div>
                                <div className="header-item">Last Name</div>
                                <div className="header-item">Status</div>
                                <div className="header-item">Last Measurement</div>
                                <div className="header-item">Last Visit</div>
                            </div>
                            
                            {currentPatients.map(patient => (
                                <div key={patient.id} className="patient-row">
                                    <div className="row-item">{patient.firstName}</div>
                                    <div className="row-item">{patient.lastName}</div>
                                    <div className="row-item">{patient.status}</div>
                                    <div className="row-item">{patient.lastMeasurement}</div>
                                    <div className="row-item">{patient.lastVisit || 'N/A'}</div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <div className="grid-container">
                            {currentPatients.map(patient => (
                                <div key={patient.id} className="grid-item">
                                    <div><b>First Name: </b>{patient.firstName} {patient.lastName}</div>
                                    <div><b>Last Name: </b>{patient.status}</div>
                                    <div><b>Last Measurement: </b>{patient.lastMeasurement}</div>
                                    <div><b>Last Visit: </b>{patient.lastVisit || 'N/A'}</div>
                                </div>
                            ))}
                        </div>
                    )}
                    <Pagination
                        style={{ marginTop: "1rem" }}
                        align="center"
                        current={currentPage}
                        pageSize={itemPerPage}
                        onChange={(page) => setCurrentPage(page)}
                        total={totalPatients}
                         />
                </div>
            </div>
        </>
    )
}