import { Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";

const SocialMedia = ()=>{
    const socialMediaLinks = {
        facebook: "https://www.facebook.com/share/9HTi2wSkkNjp4oFr/?mibextid=LQQJ4d",
        instagram: "https://www.instagram.com/grrassolutionss?igsh=cXNuMjhrY2Yxand6&utm_source=qr",
        youtube: "https://youtube.com/@ravisarswat1644?si=W2DH1foEWeEyZh2D",
        whatsapp: "https://wa.link/2b0tl9"        
    };
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href={socialMediaLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4267B2" }}
            >
              <IconButton
                size="small"
                className="social-link"
              >
                <FacebookIcon />
              </IconButton>
            </a>
            <a
              href={socialMediaLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#E4405F" }}
            >
              <IconButton
                size="small"
                className="social-link"
                
              >
                <InstagramIcon />
              </IconButton>
            </a>
            <a
              href={socialMediaLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#FF0000" }}
            >
              <IconButton
                size="small"
                className="social-link"
              >
                <YouTubeIcon />
              </IconButton>
            </a>
            <a
              href={socialMediaLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#25D366" }}
            >
              <IconButton
                size="small"
               className="social-link"
              >
                <WhatsAppIcon />
              </IconButton>
            </a>
          </Box>
    )
}

export default SocialMedia;