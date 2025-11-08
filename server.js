// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Dummy employee data
const employees = [
  { id: 1, name: 'John Doe', department: 'HR', salary: 50000 },
  { id: 2, name: 'Jane Smith', department: 'IT', salary: 65000 },
  { id: 3, name: 'Mike Johnson', department: 'Finance', salary: 60000 }
];

// Middleware to parse JSON
app.use(express.json());

// Route to get all employees
app.get('/employees', (req, res) => {
  res.json(employees);
});

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Employee API!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
