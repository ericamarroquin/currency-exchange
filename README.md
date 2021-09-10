# Currency Exchanger

#### _An application to convert between currencies_

#### By Erica Marroquin

## Technologies Used

* HTML
* CSS
* Markdown
* JavaScript
* npm
* webpack
* Jest

## Description

An application that receives an input in US Dollars and returns that sum converted into a currency of choice (Swiss Franc, Euro, Pound, etc.)

## Setup/Installation Requirements

* Clone repository to desired location using `git clone` command
* Navigate to the directory via the command prompt
* Run the command `npm install` to install all package dependencies
* Via the command prompt, install `dotenv-webpack` by running 
```javascript
npm install dotenv-webpack@2.0.0 --save-dev
```
* Add `const Dotenv = require('dotenv-webpack');` to the beginning of the webpack.config.js file
* Add `new Dotenv()` to the plugins array under module.exports
* Add `.env` file to the root directory of the project
* Add API_KEY to `.env` file, like so:
```javascript
API_KEY = 12345
```
* Run `npm run build`
* When using an API call, use `process.env.API_KEY` in place of your API key
* To open the live server, run the `npm run start` command

To run tests using Jest, run the command `npm test`

## Known Bugs

* No known issues

## License

[MIT License](https://opensource.org/licenses/MIT)

## Contact Information

Erica Marroquin | [Email](mailto:ericamarroquin03@gmail.com) | [LinkedIn](https://www.linkedin.com/in/erica-marroquin/)