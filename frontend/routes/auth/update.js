const express = require("express");
const cookie = require("cookie");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const router = express.Router();

router.post("/api/users/update", async (req, res) => {
  const { dataUrl } = req.body;
  // console.log(req.cookies);
  // console.log(dataUrl,'this is data url')
  const body = JSON.stringify({ dataUrl });

  try {
    const apiRes = await fetch(`${process.env.API_URL}/api/users/update`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body,
    });
    // console.log(apiRes)
    const data = await apiRes.json();
    // console.log(data)
    return res.status(apiRes.status).json(data);
  } catch (err) {
    return res.status(500).json({
      error: "Something went wrong when trying to verify login status",
    });
  }
});

module.exports = router;
