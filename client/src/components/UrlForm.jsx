// src/components/UrlForm.jsx
import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Snackbar,
} from "@mui/material";
import axios from "axios";
const API_BASE = "http://localhost:8700";

const UrlForm = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!originalUrl) return;

    try {
      const res = await axios.post(`${API_BASE}/shorten`, {
        originalUrl,
      });
      setShortUrl(res.data.shortUrl);
      setOpen(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: 'black' }}>
        🔗 Urlio — URL Shortener
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <TextField
          label="Paste your long URL here"
          variant="outlined"
          fullWidth
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{ mt: 2 }}
        >
          Shorten
        </Button>
      </Box>

      {shortUrl && (
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="subtitle1" sx={{ color: 'black' }}>Your Short URL:</Typography>
          <Typography
            variant="h6"
            color="primary"
            sx={{ wordBreak: "break-word", cursor: "pointer" }}
            onClick={() => {
              navigator.clipboard.writeText(shortUrl);
              setOpen(true);
            }}
          >
            {shortUrl}
          </Typography>
        </Box>
      )}

      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        message="Copied to clipboard!"
        autoHideDuration={2000}
      />
    </Container>
  );
};

export default UrlForm;
