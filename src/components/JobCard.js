import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Col } from "react-bootstrap";
import "./jobCardStyles.css"; 

const JobCard = ({ job }) => {
  const [showMore, setShowMore] = useState(false);

  const handleApply = () => {
    window.location.href = job.jdLink;
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Col xs={12} md={6} lg={4}>
      <div className="cardWrapper">
        <Card elevation={3} className="cardContainer">
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "20px",
            }}
          >
            <div
              class="MuiBox-root css-qxb4wi"
              md="[object Object]"
              xs="[object Object]"
              style={{
                display: "flex",
                alignItems: "center",
                border: "2px solid #d7dbd8",
                borderRadius: "34px",
                width: "fit-content",
                padding: "4px 10px",
                gap: "5px",
                marginBottom: ".750rem",
                fontSize: ".69rem",
              }}
            >
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-124x26r-MuiSvgIcon-root"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="HourglassFullTwoToneIcon"
                style={{ width: "1em" }}
              >
                <path
                  d="m8 7.5 4 4 4-4V4H8zm0 9V20h8v-3.5l-4-4z"
                  opacity=".3"
                ></path>
                <path d="M18 2H6v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18zm-2 14.5V20H8v-3.5l4-4zm0-9-4 4-4-4V4h8z"></path>
              </svg>
              <p
                class="MuiTypography-root MuiTypography-body1 css-qybatc-MuiTypography-root"
                style={{ marginBlock: 0 }}
              >
                Posted 1 days ago
              </p>
            </div>

            <div className="cardHeader">
              <img src={job.logoUrl} alt="Company Logo" className="logo" />
              <div>
                <Typography
                  variant="body1"
                  style={{ color: "#888", fontWeight: "bold", marginBottom: "0.385rem" }}
                >
                  {job.companyName}
                </Typography>
                <div style={{ fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif", textTransform: "capitalize", marginBottom: ".385rem" }}>{job.jobRole}</div>
                <div style={{ fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif", textTransform: "capitalize", fontSize: ".8rem" }}>{job.location}</div>
              </div>
            </div>

            <div>
              <Typography
                variant="body1"
                style={{
                  color: "rgba(0, 0, 0, 0.7)",
                  fontWeight: "bold",
                }}
              >
                Estimated Salary:{" "}
                {job.minJdSalary && job.maxJdSalary
                  ? `$${job.minJdSalary}K-$${job.maxJdSalary}K✅`
                  : job.minJdSalary
                  ? `$${job.minJdSalary}K✅`
                  : job.maxJdSalary
                  ? `$${job.maxJdSalary}K✅`
                  : "Salary not provided"}
              </Typography>
            </div>

            {showMore ? (
              <div className="description">
                <h3 style={{fontSize: ".900rem", fontWeight: "550"}}>About Company:</h3>
                <h3 style={{fontSize: ".955rem", fontWeight: "800", marginTop: ".25rem"}}>About Us</h3>
                <p style={{fontSize: "0.9rem", fontWeight: "initial"}}>{job.jobDetailsFromCompany}</p>
                <div className="viewJobButton">
                  <Button onClick={toggleShowMore} color="primary">
                    Read Less
                  </Button>
                </div>
              </div>
            ) : (
              <div className="description">
                <h3 style={{fontSize: ".900rem", fontWeight: "550"}}>About Company:</h3>
                <h3 style={{fontSize: ".955rem", fontWeight: "800", marginTop: ".25rem"}}>About Us</h3>
                <p style={{fontSize: "0.9rem", fontWeight: "initial", marginBottom: 0 }}>
                  {job.jobDetailsFromCompany.slice(
                    0,
                    job.jobDetailsFromCompany.length / 2
                  )}
                  ...
                </p>
                <div className="viewJobButton">
                  <Button onClick={toggleShowMore} color="primary">
                    View Job
                  </Button>
                </div>
              </div>
            )}

            <div>
              <Typography
                variant="body1"
                style={{ color: "#888", fontWeight: "bold" }}
              >
                Minimum Experience
              </Typography>
              <Typography variant="body1" style={{fontSize: ".85rem"}}>
                {job.minExp
                  ? `${job.minExp} years`
                  : "Experience information not available"}
              </Typography>
            </div>

            <div className="buttonContainer">
              <Button
                variant="contained"
                color="primary"
                onClick={handleApply}
                style={{
                  backgroundColor: "rgb(85, 239, 196)",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                ⚡ Easy Apply
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ backgroundColor: "rgba(64,37, 239, 1)" }}
              >
                Unlock Referral Asks
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Col>
  );
};

export default JobCard;
