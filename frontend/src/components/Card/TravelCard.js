import React, { Component } from "react";
import "./TravelCard.scss";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { blue, red } from "@mui/material/colors";
import Rating from "@mui/material/Rating";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Axios from "axios";
import IconButton from "@mui/material/IconButton";
// import AddBoxIcon from "@mui/icons-material/AddBox";
// import { useContext, useEffect, useState } from "react";

//Designing the card
class TravelCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setValue: "",
      bookmark: false,
    };
  }

  //Adding state values

  //changing status
  changeStatus(_id, path, title, rating, status) {
    fetch(`http://localhost:5000/places/${_id}`, {
      method: "PUT",
      body: JSON.stringify({
        path: path,
        title: title,
        rating: rating,
        status: !status,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        alert("Bookmark Status Changed");
        this.props.updateState();
      })
      .catch((err) => {
        if (err) throw err;
      });
  }

  render() {
    // bookmarktoggle (bookmarked){

    // }

    return (
      <div className="new-card">
        <Card sx={{ maxWidth: "400px", maxHeight: "500px" }}>
          <CardMedia //Image on the card
            component="img"
            height="200px"
            image={this.props.image}
            alt="Las Vegas"
          />

          <CardContent>
            <div className="topContent">
              {/* City Name */}
              <Typography gutterBottom variant="h5" component="div">
                <h5 className="title">{this.props.title}</h5>
              </Typography>
              <div className="rating">
                {/* Ratings */}
                <Rating
                  name="simple-controlled"
                  onChange={(event, newValue) => {
                    this.props.setValue(newValue);
                  }}
                  // size="large"
                  precision={0.5}
                  readOnly
                  defaultValue={this.props.value}
                />
              </div>
              <div
                className="bookmark"
                onClick={
                  <BookmarkIcon sx={{ fontSize: 40, color: red[500] }} />
                }>
                <BookmarkBorderOutlinedIcon
                  sx={{ fontSize: 40, color: blue[500] }}
                />
              </div>
            </div>
            {/* Weather and Location */}
            <div>
              {/* <WeatherContainer>
                    <Condition>
                    <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`}
                    </Condition>
                    <WeatherIcon src={WeatherIcons[weather?.weather[0].icon]}/>
            </WeatherContainer> */}
            </div>
            {/* Bookmar */}
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default TravelCard;
