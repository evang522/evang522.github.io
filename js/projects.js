'use strict';
/* global $ */

const projectObj = {

  projects: [
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
      techstack: 'I have always been impressed by Python\'s versatility. So I decided I would try to learn the language and write an application using Python. So I took a week and learned Python basics and Flask server framework and wrote this app. I was also able to write custom JWT authentication middleware in Python, to protect user data.'

    },
    {
      name:'Data Science and Algorithms Quiz',
      url: 'https://elated-jackson-e60e1b.netlify.com/',
      description: 'A quiz geared towards helping students learn Data Science Concepts by implementing a spaced repetition question frequency algorithm. If the student gets a question correct, they will not see the question as often. If they get a specific question wrong, however, it will appear more frequently until their knowledge improves.', 
      imageUrl:'../src/img/dsa.png',
      linktorepo: 'https://github.com/thinkful-ei18/sr-client-cm-eg',
      myrole: 'On this project I worked with <a href="https://github.com/christinamakes">Christina Moore</a>, a fellow Thinkful graduate and an excellent frontend developer. My role was in writing most of the server-side code for this app.We made use of a Javascript based Linkedlist Class  which is stored in the database to manage the user\'s quiz data flow. I wrote a Spaced Repetition Algorithm that makes use of static methods on the Linked List class to adjust the frequency with which the user would encounter a question based upon their answer.',
      techstack: 'MongoDB, Node.js, Expressjs, React.js, and Redux for state management. This app also makes use of my custom authentication middleware written with JSON web token.'

    }
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
            <a class='repo-link' href='${project.linktorepo}'><img class='repo-link-img' alt='Link to Repository' src='../src/img/githubwhite.png'></a>
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
          <a href='${project.url}'><img src='${project.imageUrl}'>
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