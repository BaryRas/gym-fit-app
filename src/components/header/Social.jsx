import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./social.css";
import { Grid, IconButton, Link } from "@mui/material";

const socialItems = [
  { icon: FacebookIcon, url: "https://fr-fr.facebook.com" },
  { icon: InstagramIcon, url: "https://www.instagram.com/?hl=fr" },
  { icon: TwitterIcon, url: "https://twitter.com/?lang=fr" },
];

function Social({ direction }) {
  return (
    <Grid container direction={direction || "row"} spacing={2}>
      {socialItems.map((socialItem, idx) => (
        <Grid item key={idx}>
          <Link href={socialItem.url}>
            <IconButton>
              <socialItem.icon className="social-icon" fontSize="large" />
            </IconButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default Social;
