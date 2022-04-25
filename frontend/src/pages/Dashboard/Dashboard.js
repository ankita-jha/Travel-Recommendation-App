import React, { Component } from "react";
import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { logoutUser } from "../../actions/authActions";
import TravelCard from "../../components/Card/TravelCard";
import image1 from "../../img/images/Lasvegas2.jpg";
import image9 from "../../img/images/Boston.jpg";
import image2 from "../../img/images/Miami.jpg";
import image3 from "../../img/images/Washingtondc.jpg";
import image4 from "../../img/images/California.jpg";
import image5 from "../../img/images/Newyork.jpg";
import image6 from "../../img/images/India.jpg";
import image7 from "../../img/images/Paris.jpg";
import image8 from "../../img/images/Tokyo.jpg";
// import BlogCard from "./BlogCard";
// import image1 from '../images/Lasvegas2.jpg';
// import image2 from "../../img/images/AmsterDam.jpg";
import { Link } from "react-router-dom";
import "./Dashboard.scss";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      view: false,
    };
  }
  componentDidMount() {
    fetch('http://localhost:5000/places')
    .then(response => response.json())
    .then(data => this.setState({ data }));
  }
  updateState = () => {
    fetch('http://localhost:5000/places')
    .then(response => response.json())
    .then(data => this.setState({ data }));
  }

  // componentDidMount() {
  //   fetch("http://localhost:5000/places")
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ data }));
  // }
  // updateState = () => {
  //   fetch("http://localhost:5000/places")
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ data }));
  // };
  // postData = () => {
  //   alert("New Element Added");
  //   this.setState({ edit: false });
  // };

  // onLogoutClick = (e) => {
  //   e.preventDefault();
  //   this.props.logoutUser();
  // };

  render() {
     return (
      <div className="container valign-wrapper">
        <div className="row">
          <div style={{ marginTop: "20px" }} className="Cards">
          </div>
          <div>
            <p></p>
              <div className="travelcards">

              {this.state.data&&this.state.data.map((element,id) => {
                    const { _id,path,title, rating, bookmarkstatus } = element;
                    
                    return(
                      <TravelCard className="Tcard" key={path} id={element.path} image={image1} title={title}  value={rating}/>
                    )
                    })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
