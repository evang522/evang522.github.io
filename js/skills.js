'use strict';
/* global $ */




const skillObj = {
  
  skillList: [
    {
      name: 'MongoDB',
      imgUrl: 'src/img/mongodb.png'
    },
    {
      name: 'Node.js',
      imgUrl: 'src/img/nodejs.png'
    },
    {
      name: 'PostgreSQL',
      imgUrl: 'src/img/postgres.png'
    },
    {
      name: 'ReactJS',
      imgUrl: 'src/img/react.png'
    },
    {
      name: 'Redux',
      imgUrl: 'src/img/redux.png'
    },
    {
      name: 'jQuery',
      imgUrl: 'src/img/jquery.png'
    },
    {
      name: 'Socket.io',
      imgUrl: 'src/img/socketio.png'
    },
    {
      name: 'Mocha',
      imgUrl: 'src/img/mocha.svg'
    },
    {
      name: 'Chai',
      imgUrl: 'src/img/jquery.png'
    }
  ],

  generateHTML: function (arr) {
    let str = '';
    arr.forEach(skill => {
      str+= `
    <li>
    <div class='skill-pic'><img src=${skill.imgUrl}></div>
    <div class='skill-name'>${skill.name}</div>
  </li>  
    `;
    });
    return str;
  },

  pushToDom: function () {
    $('.list-of-skills').html(skillObj.generateHTML(skillObj.skillList));
  }
};


skillObj.pushToDom();


