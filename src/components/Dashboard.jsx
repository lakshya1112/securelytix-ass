import React, { useState } from 'react';
import './Dashboard.css';


const clientData = [
  { id: "c1", name: "Innovate Corp", contact: "contact@innovate.com", role: "Tech Partner" },
  { id: "c2", name: "Quantum Solutions", contact: "hello@quantum.com", role: "Financial Advisor" }
];

const employeeData = [
  { id: "e1", name: "Alice Johnson", contact: "alice.j@securelytix.com", role: "Lead Developer" },
  { id: "e2", name: "Bob Williams", contact: "bob.w@securelytix.com", role: "Project Manager" }
];


const Dashboard = () => {

  const [clients] = useState(clientData);
  const [employees] = useState(employeeData);
  const [selectedItem, setSelectedItem] = useState(null);

  
  
  const handleSelection = (type, id) => {
    if (!id) { setSelectedItem(null); return; }
    const list = type === 'client' ? clients : employees;
    const item = list.find(i => i.id === id);
    setSelectedItem({ ...item, type });
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header"><h1>Dashboard</h1></header>
      <main className="dashboard-main">
        <div className="dropdown-section">
          <div className="dropdown-wrapper">
            <label htmlFor="client-select">Client</label>
            <select id="client-select" onChange={(e) => handleSelection('client', e.target.value)}>
              <option value="">--Select a Client--</option>
              {clients.map(client => <option key={client.id} value={client.id}>{client.name}</option>)}
            </select>
          </div>
          <div className="dropdown-wrapper">
            <label htmlFor="employee-select">Employee</label>
            <select id="employee-select" onChange={(e) => handleSelection('employee', e.target.value)}>
              <option value="">--Select an Employee--</option>
              {employees.map(employee => <option key={employee.id} value={employee.id}>{employee.name}</option>)}
            </select>
          </div>
        </div>
        {selectedItem && (
          <div className="details-card">
            <h3>Details</h3>
            <p><strong>Name:</strong> {selectedItem.name}</p>
            <p><strong>Role:</strong> {selectedItem.role}</p>
            <p><strong>Contact:</strong> {selectedItem.contact}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;