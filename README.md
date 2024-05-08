# Form Submission API

This project provides an HTTP POST endpoint that accepts JSON requests with candidate information for the LearnQai Full-stack Engineer position. The endpoint is designed to handle applications with the necessary fields and return a 201 OK response with a candidate ID upon successful submission.

## API Endpoint

- **URL**: `http://work.learnq.ai/recruitment`
- **Method**: `POST`
- **Content-Type**: `application/json`

## Request Fields

The request body should contain the following fields:

- **first_name**: The candidate's first name.
- **last_name**: The candidate's last name.
- **email**: The candidate's email address.
- **phone_number**: The candidate's phone number.
- **platform_name**: The platform through which the candidate applied (e.g., LinkedIn, Twitter).
- **cover_letter**: A cover letter briefly explaining why the candidate is interested in the role.
- **urls**: A list of URLs to any materials the candidate wishes to share (e.g., resume, GitHub, side projects).

### Example JSON Payload

```json
{
    "first_name": "Atul",
    "last_name": "Rajput",
    "email": "johndoe@example.com",
    "phone_number": "+1234567890",
    "platform_name": "LinkedIn",
    "cover_letter": "I am writing to apply for the Full-stack Engineer position at LearnQai...",
    "urls": [
        "https://drive.google.com/file/d/sample_resume/view",
        "https://github.com/johndoe",
        "https://www.linkedin.com/in/johndoe/"
    ]
}

## Response

file:///home/amazing_atul/Pictures/Screenshots/Screenshot%20from%202024-05-08%2011-13-14.png
