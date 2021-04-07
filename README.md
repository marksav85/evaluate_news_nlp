# Project Instructions
This will build a web tool that allows users to run Natural Language Processing
(NLP) on any text entered into the text field. NLP is the ability of an
application to understand the human language, written or oral.

This tool will help us classify the information available in the text or
article, and check the content for _agreement_, _confidence_ and _irony_.

## Stage 1 - Getting Started - Setting up the Project

Clone this repo and begin your project setup.

Remember that once you clone, you will still need to install everything:

***cd into project directory***
***npm install***

Install necessary packages:

***npm i -D @babel/core @babel/preset-env babel-loader***
***npm i -D style-loader node-sass css-loader sass-loader***
***npm i -D clean-webpack-plugin***
***npm i -D html-webpack-plugin***
***npm i -D mini-css-extract-plugin***
***npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin***

## Stage 2 - Setting up the API
Visit __meaningcloud.com__ and register for your API key


## Stage 3 - Configure dotenv
Install the dotenv package and create a new .env to store the API key:
***npm i -D dotenv***
***Create a new .env file in the root of your project***
***Go to your .gitignore file and add .env***
***Fill the .env file with your API keys like this:***

__API_KEY=*************************__

## Stage 4 - Start using it
Once you have all necessary packages installed and registered for API key and
added it to your .env file, you can start. First:

***npm run build-prod***

Then:

***npm run start***

Go to http://localhost:8090/ and try it out.
