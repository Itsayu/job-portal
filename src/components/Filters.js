import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import './filtersStyles.css';

const Filters = ({ onFilterChange, jobs }) => {
    const [initialFilterOptions, setInitialFilterOptions] = useState({
        minExperience: [],
        companyName: [],
        location: [],
        remoteOnsite: [],
        role: [],
        minBasePay: [],
    });
    const [filterOptions, setFilterOptions] = useState(initialFilterOptions);

    useEffect(() => {
        if (jobs && jobs.length > 0) {
            const uniqueValues = (key) => [...new Set(jobs.map(job => job[key]))];
            const newFilterOptions = {
                minExperience: uniqueValues('minExp'),
                companyName: uniqueValues('companyName'),
                location: uniqueValues('location'),
                remoteOnsite: ['Remote', 'On-site'],
                role: uniqueValues('jobRole'),
                minBasePay: uniqueValues('minJdSalary'),
            };
            setInitialFilterOptions(newFilterOptions);
            setFilterOptions(newFilterOptions);
        }
    }, [jobs]);

    const handleFilterChange = (filterName, value) => {
        if (filterName === 'location') {
            const remoteOnsiteOptions = value && value.toLowerCase() === 'remote' ? ['Remote'] : ['On-site'];
            setFilterOptions(prevOptions => ({
                ...prevOptions,
                remoteOnsite: remoteOnsiteOptions,
            }));
        }
        onFilterChange(prevFilters => ({
            ...prevFilters,
            [filterName]: value,
        }));
    };

    return (
        <div className="filterContainer" style={{marginBottom: "4rem", marginTop: "1.5rem", width: "100%"}}>

            {/* Filter for minimum experience */}
            <FormControl fullWidth className="filter">
                <InputLabel id="min-experience-label">Min Experience</InputLabel>
                <Select
                    labelId="min-experience-label"
                    id="min-experience"
                    label="Min Experience"
                    onChange={(e) => handleFilterChange('minExperience', e.target.value)}
                >
                    <MenuItem value="">
                        None
                    </MenuItem>
                    {filterOptions.minExperience.map(option => (
                        option !== null && (
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        )
                    ))}
                </Select>
            </FormControl>

            {/* Filter for company name */}
            <FormControl fullWidth className="filter">
            <TextField
                fullWidth
                label="Company Name"
                variant="outlined"
                onChange={(e) => handleFilterChange('companyName', e.target.value)}
                
            />
            </FormControl>

            {/* Filter for location */}
            <FormControl fullWidth className="filter">
                <InputLabel id="location-label">Location</InputLabel>
                <Select
                    labelId="location-label"
                    id="location"
                    label="Location"
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                >
                    <MenuItem value="">
                        None
                    </MenuItem>
                    {filterOptions.location.map(option => (
                        option !== null && <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Filter for remote/onsite */}
            <FormControl fullWidth className="filter">
                <InputLabel id="remote-label">Remote/On-site</InputLabel>
                <Select
                    labelId="remote-label"
                    id="remote"
                    label="Remote/On-site"
                    onChange={(e) => handleFilterChange('remoteOnsite', e.target.value)}
                >
                    <MenuItem value="">
                        None
                    </MenuItem>
                    {filterOptions.remoteOnsite.map(option => (
                        option !== null && <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Filter for job role */}
            <FormControl fullWidth className="filter">
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                    labelId="role-label"
                    id="role"
                    label="Role"
                    onChange={(e) => handleFilterChange('role', e.target.value)}
                >
                    <MenuItem value="">
                        None
                    </MenuItem>
                    {filterOptions.role.map(option => (
                        option !== null && <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Filter for minimum base pay */}
            <FormControl fullWidth className="filter">
                <InputLabel id="min-base-pay-label">Min Base Pay</InputLabel>
                <Select
                    labelId="min-base-pay-label"
                    id="min-base-pay"
                    label="Min Base Pay"
                    onChange={(e) => handleFilterChange('minBasePay', e.target.value)}
                >
                    <MenuItem value="">
                        None
                    </MenuItem>
                    {filterOptions.minBasePay.map(option => (
                        option !== null && <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </FormControl>

        </div>
    );
};

export default Filters;
