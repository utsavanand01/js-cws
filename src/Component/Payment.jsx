import { Container, Grid, TextField, Typography, Button, Card, CardContent } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';

export default function OnlinePayment() {
    return (
        <Container sx={{ mt: 10 }}>
            <Card boxShadow={3}>
                <CardContent>
                        <Typography variant="h6">Pay Outstanding Fee</Typography>
                    <Grid container >
                        <Grid item lg={11} sm={10} xs={10}>
                            <TextField fullWidth type="number" size="small" placeholder="Enter your Phone no" />
                             </Grid>
                        <Button color="warning" variant="contained"   > <SearchIcon /> </Button>
                    </Grid>
                        <Typography variant="h7">Enter Registered Mobile No..</Typography>
                </CardContent>
            </Card>
        </Container>
    )
}