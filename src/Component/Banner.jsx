import {Container,Typography} from "@mui/material"

export default function Banner() {
    return (
        <Container maxWidth="xl"sx={{background:"url('https://appco.themetags.com/img/footer-bg.png')no-repeat center center / cover",height:"66vh"}}>
           <Container sx={{paddingTop:"90px",paddingLeft:"50px"}}>
                <Typography   variant="lead" sx={{color:"white",fontSize:"75px",fontWeight:"300"}}>Skill Hai! To Future Hai!</Typography> <br/><br/>
                <Typography variant="lead" sx={{color:"white",fontSize:"20px",fontWeight:"300"}}>
                "CWS is an on-demand marketplace for top Programming engineers, developers, consultants, <br/>architects, programmers, and tutors. Get your projects built by vetted web programming freelancers <br/> or learn from expert mentors with team training & coaching experiences in  <b>Project based training.</b>
                </Typography>
           
           </Container>
           

            
           
        </Container>
    )
}