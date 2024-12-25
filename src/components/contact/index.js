import { Box, Typography } from "@mui/material";
import React from "react";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
const Contact = ()=>{
    return (
        <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              color: "white",
              fontSize: "14px",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <PhoneIcon sx={{ fontSize: "20px", color: "#4CAF50" }} />
              <Typography variant="body2" component="span">
              <a href="tel:+91-9001991227" class="contact" target="_blank"> 9001991227</a>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <EmailIcon sx={{ fontSize: "20px", color: "#42A5F5" }} />
              <Typography variant="body2" component="span">
                <a href="mailto:info@grras.tech" class="contact" target="_blank"> info@grras.tech</a>
              </Typography>
            </Box>
          </Box>
    )
}

export default Contact