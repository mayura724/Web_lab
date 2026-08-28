import { useEffect, useState } from "react";
import axios from "axios";

export default function RestAPI() {
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);

  const API_URL = "https://jsonplaceholder.typicode.com/";

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>REST API</div>;
}