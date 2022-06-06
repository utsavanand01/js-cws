import { Card, CardContent, CardMedia,Typography, CardActions } from "@mui/material";


export default function CourseCard(props){
    return(
        <Card sx={{textAlign:"center"}} >
            <CardMedia component="img" image={props.img} />
            <CardContent sx={{height:120}}>
                <Typography variant= "h5" component="h5" sx={{fontSize:"18px"}}>{props.course} </Typography>
                {/* <Typography variant= "p" component="p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, soluta repudiandae? Maiores dignissimos quos enim nesciunt laboriosam cum ad quis quod beatae iusto eius eligendi explicabo distinctio, inventore, impedit numquam? </Typography> */}
            </CardContent>

            <CardActions  sx={{backgroundColor:"#f7f7f7"}} >
                    <Typography variant="h6" component="h6"sx={{fontSize:"15px"}}> {props.duration}</Typography>
            </CardActions>
           
        </Card>
    )
}