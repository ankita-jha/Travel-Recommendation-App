import React, { Component } from 'react';
import BlogCard from '../../components/Card/BlogCard';
import image2 from "../../img/images/AmsterDam.jpg";
import axios from 'axios';

class ViewBlog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      view: false,
    };

  }
  componentDidMount() {
    fetch('http://localhost:5000/api/posts')
    .then(response => response.json())
    .then(data => this.setState({ data }));
      }
  
//     render() { 
//         return (

//             <BlogCard  blogImage={image2} Avatar="S" blogTitle="Trip to Amsterdam" blogDescription="My trip to Amsterdam was awesome" blogParagraph="I disjndks" />


//         );
//     }
// }

    deleteBlog = (id) => {
    axios.delete(`http://localhost:5000/api/posts/${id}`).then(() => {
        fetch('http://localhost:5000/api/posts').then(response => response.json()).then((data) => {
            this.setState({
                data
            }).catch(err => console.log(err))
        }).catch(err => console.log(err))
    })


    }

  render() {
    console.log(this.state.data, "our data")
    const PF = "http://localhost:5000/images/"
     return (
      <div className="container valign-wrapper">
        <div className="row">
          <div style={{ marginTop: "20px" }} className="Cards">
          </div>
          <div>
            <p></p>
              <div className="travelcards">

              {this.state.data&&this.state.data.map((element,id) => {
                    const { _id,title,desc, photo, username, createdAt } = element;
                    
                    return(
                    //   <TravelCard key={path} id={element.path} image={image1} title={title}  value={rating}/>
<BlogCard   key={photo} Avatar={username.charAt(0).toUpperCase()} blogImage={PF+photo} blogTitle={title} blogDescription="" 
blogParagraph={desc} id={_id} deleteBlog={() => this.deleteBlog(_id)}/>                      
                    )
                    })}


            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default ViewBlog;