import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popup from "./Popup";
import { useState } from "react";
import axios from 'axios';
import "./BlogCard.scss";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BlogCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [buttonPopup, setButtonPopup] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* the first initial of the user displayed on the card */}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.Avatar}
          </Avatar>
        }
        title={props.blogTitle}
       
      />
      <CardMedia //Image on the card
        component="img"
        height="200px"
        image={props.blogImage}
        alt="Image"
      />
      

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.blogDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        {/* Share Button */}
        <IconButton aria-label="share" onClick={() => setButtonPopup(true)}>
          
          <ShareIcon />
        </IconButton>
         
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div className="socialmedia">
            <h1>
              <a href="https://www.facebook.com/" className="facebook">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </h1>
            <h1>
              <a href="https://web.whatsapp.com/" className="whatsapp">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </h1>
            <h1>
              <a href="https://twitter.com/" className="twitter">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </h1>
            <h1>
              <a href="https://www.instagram.com/" className="instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </h1>
          </div>
          <button className="btnclose" onClick={() => setButtonPopup(false)}>
          close
        </button>
        </Popup>
        <div className="delete-blog p-2" onClick={() => props.deleteBlog(props.id)}>
          <i class="fa-solid fa-trash-can fa-lg"></i>
        </div>

        {/* the description of the blog opens on clicking the expand  */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.blogParagraph}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}



