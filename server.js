const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send("this is the assignment for LearnqAi")
})

app.get('/send-payload', (req, res) => {
  const payload = {
    first_name: 'Atul',
    last_name: 'Rajput',
    email: 'atulrajput.work@gmail.com',
    phone_number: '+919520694904',
    platform_name: 'Twitter(x)',
    cover_letter: "I am writing to apply for the Full-Stack MERN Engineer position at LearnQai. My strong proficiency in the MERN stack (MongoDB, Express.js, React.js, Node.js) and hands-on experience with backend development make me a strong fit for your team. In my recent role as a Software Engineer intern at Razespace, I implemented AWS services and CI/CD pipelines, significantly streamlining deployment processes and optimizing infrastructure. My experience with AWS Lambda, DynamoDB, and API Gateway ensures efficient backend development and seamless integration across applications.",
    urls: [
      'https://drive.google.com/file/d/1qI97xaR_5-cKYP0o4_69yRkq3RZmeLZE/view?usp=sharing',
      'https://www.linkedin.com/in/atul-rajput/',
      'https://github.com/AtulRajput01',
      'https://twitter.com/amazing_atul',
    ]
  };

  fetch('http://localhost:3000/recruitment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    res.send(data);
  })
  .catch(error => {
    console.error('Error:', error);
    res.status(500).send('Error sending payload');
  });
});


app.post('/recruitment', (req, res) => {
  const {
    first_name,
    last_name,
    email,
    phone_number,
    platform_name,
    cover_letter,
    urls
  } = req.body;

  console.log('Received data:');
  console.log('First Name:', first_name);
  console.log('Last Name:', last_name);
  console.log('Email:', email);
  console.log('Phone Number:', phone_number);
  console.log('Platform Name:', platform_name);
  console.log('Cover Letter:', cover_letter);
  console.log('URLs:', urls);

  res.status(200).json({
    message: 'Data received successfully!!',
    receivedData: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
