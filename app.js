const http = require('http');
const fs = require('fs');
const path = require('path');
const { Image } = require('image-js');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Serve index.html
        fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading HTML file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/index.css') {
        // Serve style.css
        fs.readFile(path.join(__dirname, 'index.css'), 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading CSS file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(data);
            }
        });
    } else {
        // Handle other requests (404 Not Found)
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});


async function processImage() {
    try {
        const image = await Image.load('seth-schwiet-WB3ujiKLJwQ-unsplash.jpg'); // Load the image
        // const grayscaleImage = image.grey(); // Convert to grayscale
        // const resizedImage = grayscaleImage.resize({ width: 200 }); // Resize
         await resizedImage.save('seth-schwiet-WB3ujiKLJwQ-unsplash.png'); // Save as PNG
        console.log('Image processed successfully!');
    } catch (error) {
        console.error('Error processing image:', error.message);
    }
}

processImage();

