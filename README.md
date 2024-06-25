# Receipt Processor

## Description
The Receipt Processor is a simple REST API that processes receipts and calculates points based on predefined rules. The points are awarded based on various attributes of the receipt such as the retailer's name, total amount, and item descriptions.

## Features
- Process a receipt and generate an ID.
- Retrieve the points awarded for a processed receipt.

## Requirements
- Docker (for Docker method)
- Node.js (for direct Node.js method)

## Installation and Usage

### Method 1: Running with Docker

1. **Build the Docker image:**
   "docker build -t receipt-processor ."

2. **Run the Docker container:**
    "docker run -p 3000:3000 receipt-processor"

### Method 1: Running with Docker

1. **Install dependencies:**
    "npm install"

2. **Start the server:**
    "npm start"

I have verified the get and post methods using Postman

