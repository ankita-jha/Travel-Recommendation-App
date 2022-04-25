import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Popup from "./Popup";
import { useState } from "react";
import axios from "axios";
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
  const [title, setTitle] = useState(props.blogTitle);
  const [desc, setDesc] = useState(props.blogParagraph);
  const [updateMode, setUpdateMode] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleUpdateButton = async (e) => {
    e.preventDefault();
    setUpdateMode(false);
    console.log("blog card title=", title);

    // handleUpdate = async (title, desc, id) => {
    //   try {
    console.log("title", title);
    console.log("desc", desc);
    await axios.put(`/api/posts/${props.id}`, {
      title,
      desc,
    });
    //   setUpdateMode(false)
    // } catch (err) {}
    console.log("Before handle update");
    const update = props.handleUpdate(props.id);
    //window.location.reload();
  };
  // };

  return (
    <Card sx={{ maxWidth: 345 }}>
      {updateMode ? (
        <input
          type="text"
          value={title}
          className="singlePostTitleInput"
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {props.Avatar}
            </Avatar>
          }
          title={props.blogTitle}
          // subheader="September 14, 2016"
        />
      )}

      <CardMedia //Image on the card
        component="img"
        height="200px"
        image={props.blogImage}
        alt="Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b> Created At </b> : {new Date(props.blogDescription).toDateString()}{" "}
          <br />
          <b> Blog Owner </b> : {props.username}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
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
        <div
          className="delete-blog p-2"
          onClick={() => props.deleteBlog(props.id)}
        >
          <i class="fa-solid fa-trash-can fa-lg"></i>
        </div>
        <div className="update-blog p-2">
          {updateMode ? (
            <i
              className="singlePostIcon far fa-edit fa-lg"
              onClick={() => setUpdateMode(false)}
            ></i>
          ) : (
            <i
              className="singlePostIcon far fa-edit fa-lg"
              onClick={() => setUpdateMode(true)}
            ></i>
          )}
        </div>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {updateMode ? (
            <textarea
              className="singlePostDescInput"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          ) : (
            <Typography paragraph>{props.blogParagraph}</Typography>
          )}

          {updateMode ? (
            <button className="singlePostButton" onClick={handleUpdateButton}>
              Update
            </button>
          ) : null}
        </CardContent>
      </Collapse>
    </Card>
  );
}
