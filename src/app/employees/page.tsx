"use client";

import React, { useState, useEffect, FormEvent } from "react";

interface Employee {
  id: string;
  name: string;
  birthday: string; // Assuming birthday is stored as a string
}

const App = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const fetchEmployees = async () => {
    try {
      const response = await fetch("/api/employees");
      if (response.ok) {
        const employees = await response.json();
        setEmployees(employees);
        console.log("Employees fetched:", employees);
      } else {
        console.error("Failed to fetch employees");
      }
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []); // Empty dependency array ensures this only runs once on mount

  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.birthday}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
