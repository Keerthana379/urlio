const Url = require("../models/Url");
const { nanoid } = require("nanoid");

const BASE_URL = "http://localhost:8700";

exports.shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;
  const shortId = nanoid(6);

  try {
    const newUrl = await Url.create({ originalUrl, shortId });
    res.json({ shortUrl: `${BASE_URL}/${shortId}` });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.redirectUrl = async (req, res) => {
  const { shortId } = req.params;
  try {
    const urlEntry = await Url.findOne({ shortId });
    if (urlEntry) {
      urlEntry.clickCount += 1;
      await urlEntry.save();
      res.redirect(urlEntry.originalUrl);
    } else {
      res.status(404).send("URL not found");
    }
  } catch (err) {
    res.status(500).send("Server error");
  }
};
