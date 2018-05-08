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
      myrole: 'I was the sole developer on this project, attempting to solve an administrative challenge for food storage for my family.'
    },
    {
      name:'TekTeilen',
      url: 'https://tekteilen-app.netlify.com',
      description: 'A spin on the German phrase for \'sharing tech\', tekteilen coordinates dev volunteers with organizations that need their help', 
      imageUrl:'../src/img/tekteilen.png',
      linktorepo: 'https://github.com/evang522/tekteilen-client',
      myrole: 'I was the sole developer for this project, attempting to provide a place for non-profits needing assistance with tech and tech volunteers to connect. '

    },
    {
      name:'Data Science and Algorithms Quiz',
      url: 'https://elated-jackson-e60e1b.netlify.com/',
      description: 'A quiz geared towards helping students learn Data Science Concepts by implementing a spaced repetition question frequency algorithm. If the student gets a question correct, they will not see the question as often. If they get a specific question wrong, however, it will appear more frequently unil their knowledge improves.', 
      imageUrl:'../src/img/dsa.png/',
      linktorepo: 'https://github.com/thinkful-ei18/sr-client-cm-eg',
      myrole: 'On this project I worked with <a href="https://github.com/christinamakes">Christina Moore</a>, a fellow Thinkful graduate and an excellent frontend developer. I wrote most of the serverside code for this app. There is a Javascript based Linkedlist Class which is stored in the database. I wrote a Spaced Repetition Alrgorithm that makes use of static methods on the Linked List class to adjust the frequency with which the user would encounter a question based upon their answer.'

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