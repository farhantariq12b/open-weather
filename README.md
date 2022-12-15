# Steps to Setup open weather app

- If nvm is installed then change you node version to the following
  - Install node version 18.7.0
  - Install npm version 8.15.0
- If nvm is not installed then install from this [link](https://github.com/nvm-sh/nvm#installing-and-updating)
- After installing node and changing to 18 version. Run the following command
  - cp .env.example .env
- Change this env `REACT_APP_OPEN_WEATHER_TOKEN` with your Open Weather token.
  - `REACT_APP_OPEN_WEATHER_TOKEN=<Your API TOKEN>`
- Run `npm i` to install the dependencies
- Run `npm start` to start the project