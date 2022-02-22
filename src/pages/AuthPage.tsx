import { Button } from "@mui/material";
import React from "react";

function AuthPage() {
  const authUrl = `https://www.dropbox.com/oauth2/authorize?client_id=${DROPBOX_CLIENT_ID}&redirect_uri=http://localhost:3000/callback&response_type=code`;

  return (
    <div>
      <Button variant="outlined" href={authUrl}>Authorize Dropbox</Button>
    </div>
  )
}

export default AuthPage
