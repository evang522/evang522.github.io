'use strict';
/* global $ */

const projectObj = {

  projects: [
    {
      name:'Glaubensfutter',
      url: 'https://glaubensfutter.de',
      description: 'Glaubensfutter means in German, literally "food for faith", or "faith fodder". This is a real web service for the organization by the same name. Glaubensfutter\'s web service coordinates the volunteer work for the translation of philosophical defences of the Christian faith into German, as well as hosting translated publications. At the moment the repositories are unavailable. Sorry!',
      imageUrl:'../src/img/glaubensfutter.png',
      linktorepo: './#',
      myrole: 'As a Christian who has had the privilege to be exposed to analytically precise, compelling, and comprehensive contemporary defences of the Christian faith in the English world, I believe it is important to make this valuable philosophical work more accessible via translation and community to the German speaking world. I work together with a team of Germans and Americans to make this possible. I am the sole developer, but hope to be onboarding some juniors sometime soon!',
      techstack: 'This is a full stack project using Node.js, Express, MongoDB, Helmet.js, React.js, Redux.js, React-Intl for Internationalization, Draft.js for Markdown editing, and more.',
      disableExternalTarget: true,
    },
    {
      name:'Hermes Messenger',
      url: 'https://hermes-chat.netlify.com/',
      description: 'Hermes is my own effort to recreate an application similar to Slack. Slack is a very refined tool that has been developed over years with a team of many developers, so I won\'t be able to build out the whole app at once. Very much according to the agile philosophy, then, I am releasing small feature sets at a time. If you are interested in testing out Hermes, you may log in with the handle `demo` and the password `demouser`. There is a demoroom already set up <a href="https://hermes-chat.netlify.com/demoroom">here</a>. You will be required to log in, first.',
      imageUrl:'../src/img/hermes.png',
      linktorepo: 'https://github.com/evang522/hermes-client',
      myrole: 'I was the sole developer creating Hermes. Hermes is a proof of concept imitating the widely used tool <a href="https://slack.com">Slack</a>. ',
      techstack: 'MongoDB, Node.js, Expressjs, React.js, Socket.io for realtime Chat, Redux for state management. Completely custom CSS.'

    },
    {
      name:'The Drystore',
      url: 'https://drystore-demo.herokuapp.com',
      description: 'An app for storing records of and analyzing longevity of dried foods.',
      imageUrl:'../src/img/drystore.png',
      linktorepo: 'https://github.com/evang522/drystore',
      myrole: 'I was the sole developer on this project, attempting to solve an administrative challenge for food storage for my family.',
      techstack: 'This project was made using Node, Express, MongoDB, and Pug templating engine for serverside rendering. This is the only project I\'ve done with serverside rendering. I now prefer a REST API and a frontend framework such as React.js. Authentication is managed by Passport.js.'
    },
    {
      name:'Schedio Event Planner',
      url: 'https://schedio.netlify.com/',
      description: 'Schedio is an event planner the core goal of which is to provide users with knowledge of what they might be able to do when travelling to a certain area. This app is borne out of personal interest-- we like to travel places and we wanted to have a centralized console by which we can plan, manage information, and see possibilities for our trips.', 
      imageUrl:'../src/img/schedio.png',
      linktorepo: 'https://github.com/thinkful-ei18/schedio-client',
      myrole: 'I worked on a team of five developers to create Schedio. My role in the project was to create the backbone of the serverside code, creating the majority of CRUD actions for Events, the creation of Todo List Items, Restaurant Data, and Weather data. I was also the primary author of testing for our API. Tasks in the frontend I was responsible for include logic which retrieves the main dataset for a user from the database, creating three modular widgets: Todo List, Weather, and Food and Dining.',
      techstack: 'MongoDB, Node.js, Expressjs, React.js, and Redux for state management. Google oAuth manages Authentication in tandem with a JWT local auth strategy.'

    },
    {
      name:'TekTeilen',
      url: 'https://tekteilen-app.netlify.com',
      description: 'A spin on the German phrase for \'sharing tech\', tekteilen coordinates dev volunteers with organizations that need their help.', 
      imageUrl:'../src/img/tekteilen.png',
      linktorepo: 'https://github.com/evang522/tekteilen-client',
      myrole: 'I was the sole developer for this project, attempting to provide a place for non-profits needing assistance with tech and tech volunteers to connect. ',
      techstack: 'PostgreSQL, Node.js, Expressjs, React.js, and Redux for state management. I wrote my own authentication middleware using JSON web tokens. Feel free to check it out in the code repo!'

    },
    {
      name:'LinkLib, an Audio Library served by Python',
      url: 'https://linklibrary-audio.netlify.com/',
      description: 'This is, interestingly, one of my most favorite apps I\'ve ever made, despite it\'s simplicity. I listen to a lot of MP3 files that I often need to download from the internet and store on my phone or computer. I decided it might be helpful to have a centralized place where I can store links to my favorite hosted MP3 files that is also capable of playback.', 
      imageUrl:'../src/img/linklib.png',
      linktorepo: 'https://github.com/evang522/linklib-server',
      myrole: 'I was the sole developer for this project, attempting to solve a personal need.',
      techstack: 'I have always been impressed by Python\'s versatility. So I decided I would try to learn the language and write an application using Python. I took a week and learned Python basics and Flask server framework and wrote this app. I was also able to write custom JWT authentication middleware in Python, to protect user data.'

    },
    {
      name:'Data Science and Algorithms Quiz',
      url: 'https://dsawesome.netlify.com/',
      description: 'A quiz geared towards helping students learn Data Science Concepts by implementing a spaced repetition question frequency algorithm. If the student gets a question correct, they will not see the question as often. If they get a specific question wrong, however, it will appear more frequently until their knowledge improves.', 
      imageUrl:'../src/img/dsa.png',
      linktorepo: 'https://github.com/thinkful-ei18/sr-client-cm-eg',
      myrole: 'On this project I worked with <a href="https://github.com/christinamakes">Christina Moore</a>, a fellow Thinkful graduate and an excellent frontend developer. My role was in writing most of the server-side code for this app.We made use of a Javascript based Linkedlist Class  which is stored in the database to manage the user\'s quiz data flow. I wrote a Spaced Repetition Algorithm that makes use of static methods on the Linked List class to adjust the frequency with which the user would encounter a question based upon their answer.',
      techstack: 'MongoDB, Node.js, Expressjs, React.js, and Redux for state management. This app also makes use of my custom authentication middleware written with JSON web token.'

    },
  ],


  generateHTML: function (arr) {
    let str = '';
    arr.forEach(project => {
      str+=  `
      <div class='project-container'>
        <div class='project-info-container'>
        <div class='name-link-cont'>
          <div class='project-name'>
            ${project.name}
            </div>
            <a class='repo-link' href='${project.linktorepo}' ${project.disableExternalTarget ? '' : "target='_blank'"}><img class='repo-link-img' alt='Link to Repository' src='../src/img/githubwhite.png'></a>
          </div>
            <div class='project-description'>
            ${project.description}
              <div class='myrole'>
              <div class='role-title'>My Role:</div>
              ${project.myrole}
              </div>
              <div class='techstack myrole'>
              <div class='stack-title role-title'>Tech Stack:</div>
              ${project.techstack}
              </div>
            </div>
            
          </div>
          <div class='project-image'>
          <a href='${project.url}' target='_blank'><img src='${project.imageUrl}'>
          </a>
          </div>
    </div>`;
    });
    return str;
  },

  pushToDom: function () {
    $('.projects-container').html(this.generateHTML(this.projects));
  }
};

projectObj.pushToDom();