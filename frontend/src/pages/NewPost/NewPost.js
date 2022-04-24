import "./NewPost.scss";
// import image1 from '../../images/Lasvegas2.jpg';
import {useState} from "react";
import axios from "axios";

export default function NewPost() {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Entering handle submit');
        const newPost = {
            username: localStorage.getItem("emailId"),
            title,
            desc,
        };

        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            console.log("filename=",filename);
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;

            try {
                console.log('Hello logging');
                await axios.post("/upload", data)
            } catch(err) {}
        }



        try {
            axios.post("/posts", newPost);
            //window.location.replace("/newPost");
        } catch(err) {}
        

    }

    return (
        <div className="newPost">
            {
                file && 
                <img src={URL.createObjectURL(file)} className="newPostImage" alt=""/>    
            }
            
            <form className="newPostForm" onSubmit={handleSubmit}>
                <div className="newPostFormGroup">

                    <label htmlFor="fileInput">
                        <i className="newPostIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])}/>
                    <input type="text" placeholder="Title" className="newPostInput" autoFocus={true} 
                    onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div className="newPostFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="newPostInput newPostText" 
                    onChange={(e) => setDesc(e.target.value)}></textarea>
                </div>
                <button className="newPostSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}