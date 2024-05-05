# Candidate Application Platform
![CandidateApplicationPlatform](https://github.com/itsayu/job-portal)

Welcome to the Candidate Application Platform! This web application helps candidates find suitable job opportunities based on various filters.

## Features

- **Job Listings:** View a list of job opportunities with details such as company name, job role, location, and salary.
- **Filters:** Filter job listings based on criteria such as minimum experience, company name, location, remote/on-site availability, role, and minimum base pay.
- **Easy Application:** Apply for jobs directly through the platform with just one click.

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` and get an ouput like: `vx.x.x`
- [npm](https://www.npmjs.com/get-npm) (Node Package Manager)
  - You'll know you've installed npm right if you can run:
    - `npm --version` and get an output like: `x.x.x`

## Getting Started

To get started with the Candidate Application Platform, follow these steps and Run this commands in terminal::

1. **Clone the Repository:**
```
git clone https://github.com/itsayu/job-portal,git
cd candidate-application-platform
```

2. **Install Dependencies:**
```
npm install
```

3. **Run the Application:**
```
npm start
```

4. **Open in Browser:**
Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Technologies Used

  
* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
* ![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
* ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
* ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## Note Regarding Infinite Scroll Feature

I aimed to implement infinite scroll functionality in my job listings page to seamlessly load additional job listings as users scroll down the page. The intended behavior was to fetch and display more jobs automatically, eliminating the need for users to click on a "Load More" button.

However, due to limitations in the data source or API, modifying parameters in my API calls did not yield additional data as expected. Despite my efforts to enable infinite scrolling, the API did not return additional job listings beyond the initial set.

I appreciate your time in reading this note, and I hope you understand the current limitation.

# Thank you!
