import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { setCrafts } from "../Redux/reducers/crafts";
import Dropdown from "react-bootstrap/Dropdown";
import './style.css'
import { useNavigate } from "react-router-dom";
const CreateCraft = () => {
  const [craft, setCraft] = useState({});
  const [value,setValue] = useState("Select your maintenance");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const state = useSelector((state) => {
    // console.log(state.auth.userInfo);
    return {
      userId: state.auth.userId,
      token: state.auth.token,
      crafts: state.craft.craft,
      userInfo: state.auth.userInfo,
    };
  });
  // console.log(state.userInfo);
  useEffect(() => {
    axios
      .get("http://localhost:5000/crafts/")
      .then((result) => {
        dispatch(setCrafts(result.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitFn = () => {
    console.log(craft);
    axios
      .put(
        `http://localhost:5000/crafts/${state.userId}`,
        { craft_id: craft.id },
        {
          headers: {
            Authorization: state.token,
          },
        }
      )
      .then((result) => {
        // console.log(result);
        navigate('/Dashboard/provider')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="create-craft-container">
      {/* <p>i am a CreateCrafte componnent</p> */}
      <p>Hello Mr : {state.userInfo.first_name}</p>
      <p>This is your phone number that customers will contact you through : {state.userInfo.Phone_Number}</p>
      <p>Please Select your maintenance from list : </p>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          {value}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {state.crafts.map((craft, id) => {
            return (
              <Dropdown.Item 
                onClick={() => {
                  setValue(craft.name)
                  setCraft(craft);
                }}
                key={id}
              >
                {craft.name}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
        {value!="Select your maintenance"&&<p style={{marginTop:"3%"}}>Please click Confirm to confirm the profession</p>}
      

      </Dropdown>
      <button onClick={submitFn} className="Submit-btn" >Submit</button>
    </div>
  );
};
export default CreateCraft;
