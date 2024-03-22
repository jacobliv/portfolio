// Footer.js
import React from "react";
import "./style/Footer.css"; // Import CSS file for styling
import getIcon from "./iconMapping"; // Import the icon mapping
import { IconButton, Tooltip } from "@material-ui/core";
function Footer({ socials }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          {socials.map((social) => {
            const Icon = getIcon(social.name);
            return (
              <Tooltip title={social.label}>
                <IconButton
                  color="primary"
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </IconButton>
              </Tooltip>
            );
          })}
        </div>
        <p>&copy; 2024 Jake Livingston. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
