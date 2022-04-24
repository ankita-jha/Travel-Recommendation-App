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
    // const { user } = this.props.auth;

    return (
      <div className="container valign-wrapper">
        <div className="row">
          <div style={{ marginTop: "20px" }} className="Cards">
            {/* <TravelCard
              travelImage={image1}
              travelTitle={this.state.cardTitle}
              travelValue={this.state.cardValue}
              travelRatings={this.state.ratings}>
              {" "}
            </TravelCard> */}
            {/* <BlogCard
              blogImage={image2}
              Avatar="S"
              blogTitle="Trip to Amsterdam"
              blogDescription="My trip to Amsterdam was awesome"
              blogParagraph="I disjndks"
            /> */}
          </div>
          <div>
            <p>{/* <Link to="/newPost">NewPost</Link> */}</p>

            {/* <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3">
              Logout
            </button> */}

            {/* <div style={{ marginTop: "20px" }}>
              <TravelCard list={this.state.data} updateState={this.updateState}>
                {" "}
              </TravelCard> */}
            <div className="travelcards">
              <TravelCard image={image1} title="Las Vegas" value="4.5" />
              <TravelCard image={image9} title="Boston" value="3.5" />
              <TravelCard image={image2} title="Miami" value="5" />
              <TravelCard image={image3} title="Washington DC" value="4" />
              <TravelCard image={image4} title="California" value="4.5" />
              <TravelCard image={image5} title="Ney York" value="4" />
              <TravelCard image={image6} title="India" value="4" />
              <TravelCard image={image7} title="Paris" value="45" />
              <TravelCard image={image8} title="Tokyo" value="3" />
            </div>
            {/* <BlogCard
                blogImage={image2}
                Avatar="S"
                blogTitle="Trip to Amsterdam"
                blogDescription="My trip to Amsterdam was awesome"
                blogParagraph="I disjndks"
              /> */}
            {/* </div> */}
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

// Dashboard.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps, { logoutUser })(Dashboard);
export default Dashboard;
