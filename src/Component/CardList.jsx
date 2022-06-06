import { Container, Grid, Typography } from "@mui/material";

import CourseCard from './CourseCard';
export default function CardList() {
    return (
        <Container>
            <Typography variant="h5" sx={{mt:5 ,borderLeft:"4px solid gray"}} pl={2}> Our courses</Typography>
            <Grid sx={{ marginTop: "20px" }}>
                <Grid container spacing={3}>
                    <Grid item lg={2} xs={12} md={3} sm={6}>  <CourseCard img="https://codewithsadiq.com/public/images/course/1639911906.jpg" course="Python With Data Structure" duration="Duration: 2 month" /></Grid>

                    <Grid item lg={2} xs={12} md={3} sm={6}>  <CourseCard img="https://codewithsadiq.com/public/images/course/1639915439.jpg" course="Web Development with Django & Sqlite" duration="Duration: 2 month" /></Grid>

                    <Grid item lg={2} xs={12} md={3} sm={6}>  <CourseCard img="https://codewithsadiq.com/public/images/course/1639916039.jpg" course="Mango, ExpressJs, ReactJs, Nodejs full stack Development" duration="Duration: 2 month" /></Grid>

                    <Grid item lg={2} xs={12} md={3} sm={6}>  <CourseCard img="https://codewithsadiq.com/public/images/course/1639916450.jpg" course="Laravel Web Development with Php" duration="Duration: 2 month" /></Grid>

                    <Grid item lg={2} xs={12} md={3} sm={6}>  <CourseCard img="https://codewithsadiq.com/public/images/course/1639916867.jpg" course="ReactJs with Postman API" duration="Duration: 2 month" /></Grid>

                </Grid>
            </Grid>
        </Container>
    )
}