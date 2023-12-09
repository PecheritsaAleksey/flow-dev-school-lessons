import React, { useEffect, useState, useRef } from "react";
import PageWrapper from "../Common/PageWrapper";
import { Button, TextField } from "@mui/material";

const Profile = () => {
  const [name, setName] = useState("Alex");

  const [counter, setCounter] = useState(0);

  const errorDiv = useRef();

  const onChangeHandler = (event) => {
    if (event.target.value.length < 3) {
      errorDiv.current.style.display = "block";
    } else {
      errorDiv.current.style.display = "none";
    }
    setName(event.target.value);
  };

  const onCounterChangeHandler = () => {
    setCounter((prev) => {
      return prev + 1;
    });

    if (true) {
      setCounter((prev) => {
        return prev + 1;
      });
    }
  };

  useEffect(() => {
    console.log("Component was mouted!");

    // const intervalId = setInterval(() => {
    //   console.log("Get data...");
    // }, 500);

    return () => {
      // clearInterval(intervalId);
      console.log("Component was unmouted!");
    };
  }, []);

  useEffect(() => {
    console.log("Component was updated");
  }, [name]);

  return (
    <PageWrapper title={"Profile"}>
      <TextField value={name} onChange={onChangeHandler} />
      <TextField value={counter} />
      <Button onClick={onCounterChangeHandler}>Add to counter</Button>
      <div style={{ display: "none" }} ref={errorDiv}>
        Too small name!
      </div>
    </PageWrapper>
  );
};

export default Profile;
