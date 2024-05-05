import './App.css'; 
import Filters from './components/Filters';
import JobList from './components/JobList';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from './actions';
import { useEffect, useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs);
  const [filters, setFilters] = useState({
    minExperience: '',
    companyName: '',
    location: '',
    remoteOnsite: '',
    role: '',
    minBasePay: '',
  });

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]); 

  return (
    <Container maxWidth="lg" className="app-container">
      <Filters onFilterChange={setFilters} jobs={jobs} />
      <JobList jobs={jobs} filters={filters} />
      <div className="centered-content">
        <h2 style={{ fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif" }}>Weekday Platform By Ayush</h2>
      </div>
    </Container>
  );
}

export default App;
