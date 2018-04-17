'use strict';
/* global $ */

const projectObj = {

  projects: [
    {
      name:'The Drystore',
      url: 'https://drystore.herokuapp.com',
      description: 'An app for storing records of and analyzing longevity of dried foods.',
      imageUrl:'/src/img/drystore.png'
    },
    {
      name:'TekTeilen',
      url: 'https://tekteilen.netlify.com',
      description: 'A spin on the German phrase for \'sharing tech, tekteilen coordinates dev volunteers with organizations that need their help', 
      imageUrl:'/src/img/tekteilen.png'
    }
  ],


  generateHTML: function (arr) {
    let str = '';
    arr.forEach(project => {
      str+=  `
      <div class='project-container'>
      <div class='project-name'>
        ${project.name}
      </div>
      <div class='project-image'>
        <a href='${project.url}'><img src='${project.imageUrl}'>
        </a>
      </div>
      <div class='project-description'>
        ${project.description}
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