import { lime } from "@mui/material/colors";

export const fetchJobsSuccess = (jobs) => ({
    type: 'FETCH_JOBS_SUCCESS', // Action type
    payload: jobs, 
});

// Async action creator to fetch jobs from an API endpoint
export const fetchJobs = () => {
    return async (dispatch) => { 
        try {
            // Make a POST request to the API endpoint
            const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ limit: 15, offset: 0 }),
                
            });

            const data = await response.json();

            dispatch(fetchJobsSuccess(data));
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    };
};
