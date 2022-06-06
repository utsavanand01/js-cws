import StudentCard from "./StudentCard";
import { Container, Grid, Typography } from "@mui/material";

export default function StudentList() {
    return (
        <Container>
            <Typography variant="h5" sx={{ mt: 6, borderLeft: "4px solid gray", }} pl={2}> Student Achivement</Typography>
            <Grid sx={{ marginTop: "30px" }}>
                <Grid container spacing={2}>
                    <Grid item lg={2} xs={12} md={3} sm={6}>  <StudentCard img="https://codewithsadiq.com/public/images/placement/1639898141.jpg" name="Jay Kumar Bharti" work="Full Stack Developer" company="EnR Consultancy Services" /></Grid>

                    <Grid item lg={2} xs={12} md={3} sm={6}>  <StudentCard img="https://codewithsadiq.com/public/images/placement/1639898753.jpg" name="Dhritesh kumar" work=" Backend devloper" company="The Renal Project" /></Grid>

                    <Grid item lg={2} xs={12} md={3} sm={6}>  <StudentCard img="https://codewithsadiq.com/public/images/placement/1639915410.jpg" name="Shubham Kr. Ghosh" work=" Backend devloper" company="Quantum IT Innovation" /></Grid>

                    <Grid item lg={2} xs={12} md={3} sm={6}>  <StudentCard img="https://codewithsadiq.com/public/images/placement/1639918531.jpg" name="Alok kumar" work=" Backend devloper" company="Uipro" /></Grid>

                    <Grid item lg={2} xs={12} md={3} sm={6}>  <StudentCard img="https://codewithsadiq.com/public/images/placement/1639922975.jpg" name="Manas Das" work=" Full Stack Developer" company="DVG Soft" /></Grid>

                    <Grid item lg={2} xs={12} md={3} sm={6}>  <StudentCard img="https://codewithsadiq.com/public/images/placement/1639927046.jpg" name="Piyush Kumar" work=" Full Stack Developer" company="Uipro Corporation Pvt. Ltd" /></Grid>
                    
                    <Grid item lg={2} xs={12} md={3} sm={6}>  <StudentCard img="https://codewithsadiq.com/public/images/placement/1640513747.jpg" name="Md danish alam" work=" Software Engineer" company="map my india Pvt. Ltd" /></Grid>
                    <Grid item lg={2} xs={12} md={3} sm={6}>  <StudentCard img="https://codewithsadiq.com/public/images/placement/1640514647.jpg" name="Md faiyyaj alam" work=" Laravel Developer" company="Uipro Corporation Pvt. Ltd" /></Grid>
                    <Grid item lg={2} xs={12} md={3} sm={6}>  <StudentCard img="https://codewithsadiq.com/public/images/placement/1640590472.jpg" name="Gautam Kumar" work=" Front End Developer" company="Wift cap solution Pvt. Ltd" /></Grid>
                    <Grid item lg={2} xs={12} md={3} sm={6}>  <StudentCard img="https://codewithsadiq.com/public/images/placement/1640513068.jpg" name="suraj Kumar" work=" Python Developer" company="Great Future Techonology Pvt. Ltd" /></Grid>
                    <Grid item lg={2} xs={12} md={3} sm={6}>  <StudentCard img="https://codewithsadiq.com/public/images/placement/1647018689.jpg" name="mojahid alam" work=" Django Developer" company="Droid7 techno labs" /></Grid>
                    <Grid item lg={2} xs={12} md={3} sm={6}>  <StudentCard img="https://codewithsadiq.com/public/images/placement/1640065387.jpg" name="sanjeev kumar" work=" Software developer" company="eTECHCubeLLB" /></Grid>
                

                </Grid>
            </Grid>
        </Container>
    )
}