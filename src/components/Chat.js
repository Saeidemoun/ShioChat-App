import React, { useState, useEffect, useContext } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";

//Contexts
import { AuthContext } from "../contexts/AuthContextProvider";

//Components
import NavBar from "./NavBar";

//Styles
import styles from "./Chat.module.css";

const Chat = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);

  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "59b77c1c-f595-492a-827b-38521fc688ad",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "ebb2d154-7df9-4901-aae2-5508eb4697e6",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  const logoutHandler = async () => {
    await auth.signOut();
    history.push("/");
  };

  if (!user || loading) return "Loading...";

  return (
    <div className={styles.container}>
      <NavBar logoutHandler={logoutHandler} />
      <ChatEngine
        height="calc(100vh - 50px)"
        projectID="59b77c1c-f595-492a-827b-38521fc688ad"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chat;
