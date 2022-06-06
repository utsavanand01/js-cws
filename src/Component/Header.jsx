import { AppBar, Button, Typography, Toolbar } from "@mui/material";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
    return (

        <AppBar position="sticky" sx={{ backgroundImage: "linear-gradient(to right, rgba(32, 40, 119, 1), rgba(55, 46, 149, 1), rgba(83, 49, 177, 1), rgba(114, 48, 205, 1), rgba(150, 41, 230, 1))", color: "grey", padding: "5px" }}>

            <Toolbar sx={{ marginRight: 5 }}>

                <Typography variant="h6" sx={{ flexGrow: 1, paddingLeft: 17 }}>
                    Code with SadiQ
                </Typography>
                <Button color="inherit" LinkComponent={NavLink} to="/Home"  >Home</Button>
                <Button color="inherit"  LinkComponent={NavLink} to="/Course"  >Cources</Button>
                <Button color="inherit"  LinkComponent={NavLink} to="/OnlinePayment"  >Online Payment</Button>
                <Button color="warning"  component={Link} to="/Apply"  variant="contained">Apply For Admission</Button>
            </Toolbar>

        </AppBar>
    )
}