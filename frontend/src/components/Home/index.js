import React from "react";
import axios from "axios";
import "./index.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPost } from "../Redux/reducers/posts";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

const Home = () => {
  const navigate = useNavigate();
  const getAllPosts = () => {
    axios
      .get("http://localhost:5000/posts/")
      .then((res) => {
        dispatch(setPost(res.data.posts));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllPosts();
  }, []);

  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      posts: state.post.posts,
    };
  });
  const toOrder = (id, user_id) => {
    navigate("/CreateOrder", { state: { id, user_id } });
  };

  return (
    <>
      <header style={{ paddingLeft: 0 }}>
      <section id="hero" class="hero d-flex align-items-center section-bg">
    <div class="container">
      <div class="row justify-content-between gy-5">
        <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
          <h2 data-aos="fade-up">Maintenance Is<br/>Easier Than Before</h2>
          <p data-aos="fade-up" data-aos-delay="100">A well trained aramy of Craftsmen ready for your services</p>
          <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
            <a href="#book-a-table" class="btn-book-a-table">Book an Appointment</a>
            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
          </div>
        </div>
        <div class="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
          <img src="https://img.freepik.com/free-vector/illustration-characters-fixing-cogwheel_53876-40796.jpg?w=2000" class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300"/>
        </div>
      </div>
    </div>
  </section>
      </header>
      <div className="container1">
        {state.posts.map((post, i) => {
          return (
            <div key={i}>
              <MDBCard className="car">
                <MDBCardImage src={post.post_image} position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardTitle>{post.title}</MDBCardTitle>
                  <MDBBtn onClick={()=>{
                    toOrder(post.id, post.user_id);
                  }}>order now</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Home;
