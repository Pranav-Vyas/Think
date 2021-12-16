import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Contact from '../Contact/Contact'
import NavBar from '../NavBar/NavBar';
import Icon from '@material-ui/core/Icon';
import "./Admin.css";

function Admin() {

    const [images, setimages] = useState([]);
    const [NameText, setNameText] = useState("");
    const [fileName, setfileName] = useState("");
    let navigate = useNavigate();
    let value = "";

    useEffect(() => {
        console.log("home use effect");
        const checkAuthentication = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await fetch("http://localhost:5000/auth", {
                    mode: 'cors',
                    method: "get",
                    headers: new Headers({
                        'Accept': "application/json",
                        "content-type": "application/json",
                        "Authorization": `Bearer ${token}`
                    })
                });
                if (res.status !== 200) {
                    console.log('if not 200');
                    // navigate("/login");
                    throw new Error(res.error);
                } else {
                    console.log("authenticated");

                }

            } catch {
                console.log('in nav catch');
                navigate("/login");
            }
        }
        checkAuthentication();
    })

    const fetchData = async () => {
        const res = await fetch("http://localhost:5000/upload/all", {
            mode: 'cors',  // this can not be 'no-cors'
            method: "GET",
            headers: new Headers({
                'Accept': "application/json",
                "content-type": "application/json",
            })
        });
        const data = await res.json();
        if (res.status > 200 || !data) {
            console.log(res.status);
            alert("Cannot get images");
        } else {
            setimages(data.images);
            console.log(data.images);
            // setimageFlag(true);
        }
    }

    useEffect(() => {
        console.log('admin useEffect');
        fetchData();
    }, [])


    const handleOnChange = (e) => {
        value = e.target.value;
        setNameText(value);
        console.log(NameText);
    }

    const handleUploadClick = async () => {
        var input = document.querySelector('input[name="uploadedPhoto"]');
        if (input.files.length > 0) {
            const fd = new FormData();
            console.log("uploaded photo input is ", input);
            fd.append('image', input.files[0]);
            fd.append('name', NameText);
            const token = localStorage.getItem('token');
            const res = await fetch("http://localhost:5000/upload", {
                mode: 'cors',  // this cannot be 'no-cors'
                method: "POST",
                headers: new Headers({
                    "Authorization": `Bearer ${token}`
                }),
                body: fd
            });
            console.log(res);
            fetchData();
        } else {
            alert("Please select image");
        }

    }

    const handleFileChange = (e) => {
        if (e.target.files.length > 0){
            console.log(e.target.files);
            console.log(e.target.files[0].name);
            setfileName(e.target.files[0].name)
        }
    }

    const handleDelete = async (id) => {
        if (window.confirm("Do you want to delete this image ?") === true) {
            const token = localStorage.getItem('token');
            const res = await fetch(`http://localhost:5000/upload/${id}`, {
                mode: 'cors',  // this cannot be 'no-cors'
                method: "DELETE",
                headers: new Headers({
                    "Authorization": `Bearer ${token}`
                })
            });
            if (res.status !== 200) {
                console.log('delete failed');
            } else {
                console.log("deleted");
                // navigate("/admin");
                fetchData();
            }
        }

    }


    return (
        <div>
            <div className="nav-wrapper">
                <NavBar curPage="admin" />
            </div>
            <div className="middle-wrapper">
                <div className="add-circle">
                    <label className="upload-btn">
                        <input onChange={handleFileChange} name="uploadedPhoto" type="file" />
                        <Icon>add_photo_alternate</Icon>
                        <span>{fileName}</span>
                    </label>
                    <div className="add-input">
                        <input onChange={handleOnChange} value={NameText} placeholder='Name' type="text" />
                        <button onClick={handleUploadClick} disabled={!NameText.trim()} type='submit' className="addPhoto-button" >Add</button>
                    </div>
                </div>

                <div className="row">
                    {
                        images.map((image) => {
                            return (
                                <div key={image._id} className="profile-img-div col-md-6 col-lg-4">
                                    <img className='profile-page-img' src={`http://localhost:5000/upload/${image._id}`} alt="" />
                                    <div className="img-details">
                                        <h2>{image.name}</h2>
                                        <button onClick={() => handleDelete(image._id)} className='delete-button'><Icon className='deleteIcon'>delete_outline</Icon></button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


            </div>
            <Contact />
        </div>
    )
}

export default Admin
