const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Serve the HTML, CSS, and JS files
app.use(express.static('public'));

// Endpoint to handle file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});

// Endpoint to get the list of files
app.get('/files', (req, res) => {
  const files = fs.readdirSync('uploads/');
  res.json({ files });
});

// Endpoint to delete a file
app.delete('/delete/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'uploads', filename);

  fs.unlinkSync(filePath);
  res.send('File deleted successfully');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
