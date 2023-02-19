import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../..";
import { useRole } from "../../requireAuth";

import christmas from "../images/christmas.jpg";

export function MultiActionAreaCard(props: any) {
  const { images } = props;
  const { value: user } = useSelector(selectUser);
  const role = useRole(user.userId, 2);
  const navigate = useNavigate();
  const navigateMain = () => {
    setTimeout(() => navigate("/", { replace: true }), 500);
  };
  return (
    <Card sx={{ width: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={images}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={navigateMain}>
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
