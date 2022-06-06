import { Autocomplete ,Button,Container,Grid,TextField, Typography} from "@mui/material"

const GenderList =[
    {lable:"Male"},
    {lable:"Female"},
    {lable:"others"},
]

export default function Apply(){
    return(
        <>
       
        <Container>
       <Typography variant="h3" textAlign="center">Admission Form</Typography>
            <Grid text-textAlign="center" container sx={{display:"flex",justifycontent:"center"}}>
                <Grid item lg={12} >
                    <form>
                        <label>
                            <p>Name</p>
                            <TextField name="name" fullWidth placeholder="Enter your name"/>
                        </label>
                        <label>
                            <p>Contact</p>
                            <TextField name="name" fullWidth placeholder="Enter your contact"/>
                        </label>
                        <label>
                            <p>Email</p>
                            <TextField name="name" fullWidth placeholder="Enter your email"/>
                        </label>
                        <label>
                            <p>Age</p>
                            <TextField name="name" fullWidth placeholder="Enter your Age"/>
                        </label>
                        <label>
                            <p>Address</p>
                            <TextField name="name" fullWidth placeholder="Enter your address"/>
                        </label>
                        <label>
                            <p>Gender</p>
                            <Autocomplete options={GenderList} renderInput={(params) => <TextField {...params} label="Gender"/>}/>
                        </label>
                    </form>
                    <Button color="error" fullWidth sx={{marginTop:4}} variant="contained">submit</Button>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}

