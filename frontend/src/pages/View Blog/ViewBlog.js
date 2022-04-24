import React, { Component } from 'react';
import BlogCard from '../../components/Card/BlogCard';
import image2 from "../../img/images/AmsterDam.jpg";


class ViewBlog extends Component {
    state = {  } 
    render() { 
        return (

            <BlogCard  blogImage={image2} Avatar="S" blogTitle="Trip to Amsterdam" blogDescription="My trip to Amsterdam was awesome" blogParagraph="I disjndks" />


        );
    }
}
 
export default ViewBlog;