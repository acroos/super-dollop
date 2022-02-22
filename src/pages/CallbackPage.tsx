import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CallbackPage() {
  const search = useLocation().search;
  const code = new URLSearchParams(search).get("code");
  const navigate = useNavigate();

  useEffect(() => {
    if (code === null) {
      console.log("empty code")
      return
    } else {
      console.log("code = ", code)
    }
    const params = new URLSearchParams();
    params.append("code", code)
    params.append("grant_type", "authorization_code");
    params.append("redirect_uri", "http://localhost:3000/callback");
    params.append("client_id", DROPBOX_CLIENT_ID);
    params.append("client_secret", DROPBOX_CLIENT_SECRET);

    axios
      .post("https://api.dropboxapi.com/oauth2/token", params)
      .then(function (response) {
        console.log(response.data)
        const accessToken = response.data.access_token;

        localStorage.setItem("DropboxAccessToken", accessToken)
        navigate("/")
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [code])

  return <CircularProgress />;
}

export default CallbackPage;
