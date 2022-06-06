import { Container, Grid, Typography, Link, List, ListItem } from "@mui/material";


export default function Footer() {
    return (
        <Typography sx={{ backgroundColor: "#0d6efd", height: "400px", mt: 10 }}>
            <Container>

                <Grid container spacing={2} sx={{ pt: 5, color: "white" }}>
                    <Grid item lg={3} xs={12} md={3} sm={6}><Typography variant="h5">Code with SadiQ</Typography> </Grid>
                    <Grid item lg={3} xs={12} md={3} sm={6}>
                        <List >
                            <ListItem><Typography variant="h6">Quick Links</Typography></ListItem>
                            <ListItem><Link href="#" sx={{ color: "#e0dce4", mt: -1 }} underline="hover">Home</Link></ListItem>
                            <ListItem><Link href="#" sx={{ color: "#e0dce4", mt: -1 }} underline="hover">About</Link></ListItem>
                            <ListItem> <Link href="#" sx={{ color: "#e0dce4", mt: -1 }} underline="hover">Projects</Link></ListItem>
                            <ListItem><Link href="#" sx={{ color: "#e0dce4", mt: -1 }} underline="hover">Workshop</Link></ListItem>
                            <ListItem><Link href="#" sx={{ color: "#e0dce4", mt: -1 }} underline="hover">Hire us</Link></ListItem>
                        </List>
                    </Grid>
                    <Grid item lg={3} xs={12} md={3} sm={6}>
                        <List >
                            <ListItem><Typography variant="h6">About Class</Typography></ListItem>
                            <ListItem><Link href="#" sx={{ color: "#e0dce4", mt: -1 }} underline="hover">About instructor</Link></ListItem>
                            <ListItem><Link href="#" sx={{ color: "#e0dce4", mt: -1 }} underline="hover">MileStones</Link></ListItem>
                            <ListItem> <Link href="#" sx={{ color: "#e0dce4", mt: -1 }} underline="hover">Vision</Link></ListItem>
                            <ListItem><Link href="#" sx={{ color: "#e0dce4", mt: -1 }} underline="hover">Community</Link></ListItem>
                            <ListItem><Link href="#" sx={{ color: "#e0dce4", mt: -1 }} underline="hover">Our Team</Link></ListItem>
                        </List>
                    </Grid>

                    <Grid item lg={3} xs={12} md={3} sm={6}>
                        <List >
                            <ListItem><Typography variant="h6">Location</Typography></ListItem>
                            <ListItem><Typography variant="p"> Ramavtar Market, Near Dog Hospital,Thana Chowk, Gandhinagar, Madhubani, Purnea - 854301</Typography></ListItem>
                            <ListItem><Link href="#" sx={{ color: "#e0dce4", mt: -1 }} underline="hover">+919546805580</Link></ListItem>
                            <ListItem><Link href="#" sx={{ color: "#e0dce4", mt: -1 }} underline="hover">cwspurnea@gmail.com</Link></ListItem>
                            <ListItem> <Link href="#" sx={{ color: "#e0dce4", mt: -1 }} underline="hover">www.codewithsadiQ.com</Link></ListItem>

                        </List>
                    </Grid>

                </Grid>
                <Typography variant="h6" sx={{textAlign:"center",color:"white",fontSize:16}}>© Code with SadiQ, All rights reserved</Typography>
            </Container>
        </Typography>
    )
}