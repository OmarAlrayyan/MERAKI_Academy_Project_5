import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setMyPost, deletePost, updatePost } from "../Redux/reducers/posts";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import "./index.css"
const UserPosts = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const state = useSelector((state) => {
    return {
      token: state.auth.token,
      posts: state.post.myPosts,
      userId: state.auth.userId,
    };
  });

  const dispatch = useDispatch();

  const getUserPosts = () => {
    axios
      .get(`http://localhost:5000/posts/user/myposts`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then((res) => {
        dispatch(setMyPost(res.data.posts));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteSelectedPost = (id) => {
    
    axios
      .delete(`http://localhost:5000/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then((res) => {
        if (res.data.success === true) {
          console.log(res);
          dispatch(deletePost(id));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateSelectedPost = (id) => {
    axios
      .put(`http://localhost:5000/posts/${id}`,{ title, description } ,{
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then((res) => {
    console.log(res.data);
    if (res.data.success === true) {
          dispatch(updatePost(res.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <div className="cards">
      {state.posts.map((post, i) => {
        return (
          <div key={i}>
            
            <Card
              className="post cards1"
              style={{ width: "200", height: "150" }}
              key={i}
            >
              <Card.Img
                variant="top"
                src="https://www.shutterstock.com/image-photo/roofer-carpenter-working-on-roof-260nw-748292161.jpg"
              />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Button className="mb-2"
                  onClick={(e) => {
                    deleteSelectedPost(post.id);
                  }}
                >
                  delete post
                </Button>
                <br />
                <Button
                  onClick={(e) => {
                    handleShow();
                  }}
                >
                  update post
                </Button>
              </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Control
                className="mb-2"
                  type="text"
                  id="text"
                  placeholder="new title"
                  onChange={(e)=>{setTitle(e.target.value)}}
                />
                <Form.Control
                  type="text"
                  id="text"
                  placeholder="new description"
                  onChange={(e)=>{setDescription(e.target.value)}}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={
                    (e)=>{
                        handleClose()
                        updateSelectedPost(post.id)
                    }
                }>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      })}
    </div>
  );
};

export default UserPosts;
