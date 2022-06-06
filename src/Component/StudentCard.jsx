import { Card, CardContent, CardMedia,Typography } from "@mui/material";

export default function StudentCard(cards){
    return(
        <Card sx={{textAlign:"center",justifyContent:"center"}} >
            <CardMedia component="img" height="190" image={cards.img} />
            <CardContent sx={{height:100}}>
                <Typography variant= "h5" component="h5" sx={{fontSize:"18px"}}>{cards.name} </Typography>
                <Typography variant= "h6" component="h6"  sx={{fontSize:"12px",color:"gray"}}>{cards.work} </Typography>

                <Typography variant= "small" color="gray" component="small" sx={{fontSize:"10px"}}>@ {cards.company}</Typography>
            </CardContent>
           
        </Card>
    )
}