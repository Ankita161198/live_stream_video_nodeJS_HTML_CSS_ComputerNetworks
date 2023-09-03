const express = require("express");
const app = express();
const multer = require("multer");
const db = require("./database");
const cors = require('cors')
app.use(cors())
const PORT = 3000;

// const videoPath = "https://labs6461.encs.concordia.ca/team18";

// Video Storage
const videoStorage = multer.diskStorage({
  destination: "videos",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + req.body.filename);
  },
});

const videoUpload = multer({
  storage: videoStorage,
  limits: {
    // 10mb
    fileSize: 10000000,
  }
});

app.get("/", (req, res) => {
  res.send("test");
});

// Upload Video
app.post(
  "/uploadVideo",
  videoUpload.single("video"),
  (req, res) => {
    //res.send(req.file);

    var videoId = req.body.videoId;
    console.log('Video Id: '+videoId);
    const videoPath = "video_segments" + req.file.filename;
    console.log('Video Path: '+videoPath);

    var sql = "INSERT INTO video_table (video_id, video_path) VALUES ('" + videoId + "', '" + videoPath + "')";
    db.query(sql, function (err, result) {
      console.log(result);
      if (err) throw err;
      console.log("Video Information loaded in database.");
    });
    res.send("video uploaded successfully");
  }, 
);
// app.get('/uploadVideo', (req, res) => {
//   connection.query('SELECT * FROM video_table', (error, results, fields) => {
//     if (error) throw error;
//     console.log(results);
//     res.send(results);
//   });
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});