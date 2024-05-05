import React from 'react';
import JobCard from './JobCard';

const JobList = ({ jobs, filters }) => {
    const filteredJobs = jobs.filter(job => {
        return (
            (filters.minExperience ? job.minExp >= filters.minExperience : true) &&
            (filters.companyName ? job.companyName.toLowerCase() === filters.companyName.toLowerCase() : true) &&
            (filters.location ? job.location.toLowerCase() === filters.location.toLowerCase() : true) &&
            (filters.remoteOnsite ? (filters.remoteOnsite === 'Remote' ? job.location.toLowerCase() === 'remote' : job.location.toLowerCase() !== 'remote') : true) &&
            (filters.role ? job.jobRole.toLowerCase() === filters.role.toLowerCase() : true) &&
            (filters.minBasePay ? job.minJdSalary >= filters.minBasePay : true)
        );
    });

    return (
        <div className="cardWrapper">
            {filteredJobs.map(job => (
                <JobCard key={job.jdUid} job={job} />
            ))}
        </div>
    );
};

export default JobList;

