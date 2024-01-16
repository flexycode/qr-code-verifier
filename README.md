# qr-code-verifier 

## QR Code Verifier

### 1. Set up a new Next.js project:  

* Install Next.js globally: `npm install -g create-next-app` 

* Create a new Next.js project: `npx create-next-app qr-code-verifier`  

* Move into the project directory: `cd qr-code-verifier`

### 2. Install required dependencies:

* Install Express.js and QR Code reader library: `npm install express qrcode-reader`

### 3. Create a new folder for the backend:

* Inside the project directory, create a new folder called backend: `mkdir backend`

### 4. Create a backend server file: 

* Inside the `backend` folder, create a new file called `server.js`.

### 5. Set up the backend server:
* In `server.js`, require Express.js and the QR Code reader library:

```bash 
const express = require('express');
const QRCodeReader = require('qrcode-reader'); 
const fs = require('fs');
const path = require('path');
const app = express();
const qrCodeReader = new QRCodeReader();
```

* Define a route for handling QR code verification:

```bash
app.get('/api/verify', (req, res) => { 
  const qrCodePath = path.join(__dirname, '..', 'public', 'qr-code.png');
  const imageBuffer = fs.readFileSync(qrCodePath);
  qrCodeReader.decode(imageBuffer, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error decoding QR code' }); 
    } else {
      const qrCodeData = result.result;
      // Perform verification logic here
      // Example: Check if qrCodeData matches expected data
      const expectedData = 'Your expected data';
      if (qrCodeData === expectedData) {
        res.json({ message: 'QR code verification successful' }); 
      } else {
        res.status(400).json({ error: 'QR code verification failed' }); 
      }
    }
  });
});
```


### 6. Update the Next.js pages:

* Replace the content of `pages/index.js` with:

```bash
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [verificationMessage, setVerificationMessage] = useState('');

  useEffect(() => {
    // Fetch data from the backend
    fetch('/api/verify') 
      .then((response) => response.json()) 
      .then((data) => setVerificationMessage(data.message))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>QR Code Verifier</h1>
      <p>{verificationMessage}</p> 
    </div>
  );
}
```

### 7. Create a QR code image (e.g., `public/qr-code.png`) with the expected data encoded.

### 8. Start the backend server and the Next.js development server:
* In the project directory, run: `npm run dev` 

### 9. Open your browser and visit: 
`http://localhost:3000` 

* The frontend will display the verification message retrieved from the backend based on the QR code verification.


## Contributing

### Submitting Changes

Contributions are welcome! If you have ideas for improvements, follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.

### Reporting Issues

If you encounter any issues or have suggestions, please open an issue to let us know.

### License

This project is licensed under the MIT License.



