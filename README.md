# ‘I told my therapist about you ...

> Gain insight into how and why people think, act, and feel the way they do. The underlying AI applies linguistic analytics and personality theory to infer attributes from a person's unstructured text or Twitter feed.

This application is inspired by IBM's [Personality Insights demo](https://personality-insights-demo.ng.bluemix.net). Built entirely in React, this project not only put my React skills to test but also gave me the opportunity to learn more about [this fascinating service](https://console.bluemix.net/docs/services/personality-insights/index.html).

[Live Demo](http://personality-insights.shahabqamar.com/)

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

To get started, clone this repo and run:

```
npm install
yarn start
```

You will need a companion PHP server to communicate with Watson and Twitter API. The code for the companion server is located in the php-api folder. Replace all REDACTED values with your own Watson and Twitter API keys, Access Tokens, etc. Finally, point the React App to this server by updating the REACT_APP_WATSON_API_ENDPOINT variable in .env file located in the root folder.

## Screenshots

![alt text](http://personality-insights.shahabqamar.com/screenshots/home.png "Home")

![alt text](http://personality-insights.shahabqamar.com/screenshots/raw-text.png "Raw text input")

![alt text](http://personality-insights.shahabqamar.com/screenshots/twitter.png "Twitter feed input")

![alt text](http://personality-insights.shahabqamar.com/screenshots/results.png "Raw text input")
