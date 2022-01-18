import EditRoundedIcon from "@mui/icons-material/EditRounded";
import React, { useEffect, useState } from "react";
import "./feed.css";
import InputOptions from "./InputOptions";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import Post from "./Post";

import {
  onSnapshot,
  serverTimestamp,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { colRef } from "./firebase";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    onSnapshot(query(colRef, orderBy("timestamp", "desc")), (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  console.log(posts);

  const sendPost = (e) => {
    e.preventDefault();
    // sendPosts
    addDoc(colRef, {
      name: "samuel abiodun",
      description: "lorem mnrnv",
      message: input,
      photoUrl: "",
      timestamp: serverTimestamp(),
    }).then(() => {
      setInput("");
    });
  };
  return (
    <div className="feed">
      <div className="feed_inputcontainer">
        <div className="feed_input">
          <EditRoundedIcon />
          <form action="">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputoptions">
          <InputOptions Icon={ImageRoundedIcon} title="Photo" color="#70b5f9" />
          <InputOptions Icon={ImageRoundedIcon} title="Photo" color="#70b5f9" />
          <InputOptions Icon={ImageRoundedIcon} title="Photo" color="#70b5f9" />
          <InputOptions Icon={ImageRoundedIcon} title="Photo" color="#70b5f9" />
        </div>
      </div>

      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            name={post.data.name}
            description={post.data.description}
            message={post.data.message}
          />
        );
      })}
    </div>
  );
};

export default Feed;
