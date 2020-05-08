'use strict';
/* global $ */

const projectObj = {

  projects: [
    {
      name:'Memento Notepad (Chrome Extension)',
      url: 'https://chrome.google.com/webstore/detail/memento/jfpnlhmdmlfbjejmnfgacgkkligneihb?hl=en',
      description: 'A simple, intuitive, and beautiful notepad that has more capability than meets the eye.',
      imageUrl:'../src/img/memento.jpg',
      linktorepo: 'https://github.com/evang522/timeinterval#readme',
      myrole: 'Memento started out as a mere curiosity whether or not it made any sense to implement DDD and CQRS concepts in a browser context. (hint, they do! as long as you adapt them accordingly) <br/> <br/> The notepad was rather a side effect. But then it grew into something that actually seemed worth spending time on. Over time I also began to use this notepad as my default new-tab page because I enjoyed using it so much for taking notes. In the end I decided I wanted to have it as a Chrome extension. I am still actively adding updates here and there to Memento. <br/> <br/> The goal of memento is to create a notepad that has a very simple interface but which has a powerful and ever-expanding skill-set underneath the hood, triggered by shortcuts. Try it out yourself if you like!',
      techstack: 'Typescript, Inversify.io, MobX, CQRS, Event Bus, Command Bus, Query Bus, DDD design patterns (in the scope of a browser based application), Draft JS, and some Material UI.',
      disableExternalTarget: true,
      imageDimensions: {
        height: '14rem',
        width: '22rem'
      }
    },
    {
      name:'Time Interval JS',
      url: 'https://www.npmjs.com/package/time-interval-js',
      description: 'A simple Time Interval class developed for working with javascript date objects and relationships between them.',
      imageUrl:'../src/img/timeintervaltslogo.png',
      linktorepo: 'https://github.com/evang522/timeinterval#readme',
      myrole: 'Necessity is the mother of invention. As I was standing in the shower (how it always goes) thinking through a project with login features I would soon be helping develop, I realized that one of the principles of rich architecture (as opposed to anemic architecture), is having rich objects that exhibit the behavior and properties of what they really do in real life. Therefore if you\'re going to do assertions on JWT auth and refresh tokens or anything comparing the passage of time, you may as well build an object that expresses this concept richly. So I built this and decided it could be helpful for others.',
      techstack: 'Typescript, ESLint-Typescript, and NPM.',
      disableExternalTarget: true,
      imageDimensions: {
        height: '18rem',
        width: '20rem'
      }
    },
    {
      name:'Glaubensfutter',
      url: 'https://glaubensfutter.de',
      description: 'Glaubensfutter means in German, literally "food for faith", or "faith fodder". This is a real web service for the organization by the same name. Glaubensfutter\'s web service coordinates the volunteer work for the translation of philosophical defences of the Christian faith into German, as well as hosting translated publications. At the moment the repositories are private.',
      imageUrl:'../src/img/glaubensfutter.png',
      linktorepo: './#',
      myrole: 'As a Christian who has had the privilege to be exposed to analytically precise, compelling, and comprehensive contemporary defences of the Christian faith in the English world, I believe it is important to make this valuable philosophical work more accessible via translation and community to the German speaking world. I work together with a team of Germans and Americans to make this possible. I am the sole developer, but hope to be onboarding some juniors sometime soon!',
      techstack: 'This is a full stack project, the frontend and backend codebases of which are written in Typescript using Node.js, Express, MongoDB, Helmet.js, React.js, Redux.js, React-Intl for Internationalization, Draft.js for Markdown editing, and more. The serverside framework makes use of a REST API to serve the frontend application and allow for potential multi platform integration in the future. I have benefited greatly from SOLID principles and particularly OOP (Object Oriented Programming) design patterns in both Frontend and Backend architecture.',
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
            <b>${project.description}</b>
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
          <a href='${project.url}' target='_blank'><img src='${project.imageUrl}' style="margin-top: 2rem;${project.imageDimensions ? ` height: ${project.imageDimensions.height}; width: ${project.imageDimensions.width};"`: '"' }>
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
