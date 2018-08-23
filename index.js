
const iconName = ['Amazon Web Services', 'Bootstrap', 'CSS3', 'express', 'git', 'HTML5', 'JavaScript', 'jQuery', 'Node.js', 'PostgreSQL', 'Python', 'React' ];
const iconImg = ['devicon-amazonwebservices-original', 'devicon-bootstrap-plain', 'devicon-css3-plain', 'devicon-express-original', 'devicon-git-plain', 'devicon-html5-plain', 'devicon-javascript-plain', 'devicon-jquery-plain', 'devicon-nodejs-plain', 'devicon-postgresql-plain', 'devicon-python-plain', 'devicon-react-original'];

const insertIcons = (name) => {
  let i = 0;
  name.forEach((name) => {
    let blockDiv = document.createElement('div');
    blockDiv.classList.add('skills-block');
    let textDiv = document.createElement('div');
    textDiv.classList.add('skills-text');
    let nameText = document.createTextNode(name);
    textDiv.appendChild(nameText);
    let iconDiv = document.createElement('div');
    iconDiv.classList.add('skills-icon');
    let icon = document.createElement('i');
    icon.classList.add('icon');
    icon.classList.add(iconImg[i]);
    iconDiv.appendChild(icon);
    blockDiv.appendChild(textDiv);
    blockDiv.appendChild(iconDiv);
    let skillsDiv = document.querySelector('.skills');
    skillsDiv.appendChild(blockDiv);
    i = i + 1;
  });
};


const carouselNav = () => {
  let i = 0;
  let slides = document.querySelectorAll('.slide');
  slides.forEach((slide) => {
    slide.classList.add('hidden');
  });
  slides[i].classList.remove('hidden');
  slides[i].classList.add('current');
  let nextButton = document.querySelector('.next');
  nextButton.addEventListener('click', () => {
    i += 1;
    if(i > slides.length - 1) {
      i = 0;
    }
    let current = document.querySelector('.current');
    current.classList.add('hidden');
    current.classList.remove('current');
    slides[i].classList.remove('hidden');
    slides[i].classList.add('current');
  });
  let prevButton = document.querySelector('.prev');
  prevButton.addEventListener('click', () => {
    i -= 1;
    if(i < 0) {
      i = 2;
    }
    let current = document.querySelector('.current');
    current.classList.add('hidden');
    current.classList.remove('current');
    slides[i].classList.remove('hidden');
    slides[i].classList.add('current');
  })
}

const insertDots = () => {
  let slides = document.querySelectorAll('.slide');
  let projectDiv = document.querySelector('.carousel');
  let dots = document.createElement('div');
  dots.classList.add('dots');
  slides.forEach((slide) => {
    let dotSpan = document.createElement('span');
    dotSpan.classList.add('dot');
    dots.appendChild(dotSpan);
  });
  projectDiv.appendChild(dots);
};

const showProject = () => {
  let slides = document.querySelectorAll('.slide');
  slides.forEach((slide) => {
    slide.addEventListener('click', (event) => {
      let currentSlide = event.target;
      let currentPhoto = (currentSlide.getAttribute('src'));
      let fullPage = document.createElement('div');
      let fullPageImg = document.createElement('img');
      let body = document.querySelector('body');
      let nav = document.querySelector('.nav-bar');
      let exitDiv = document.createElement('div');
      exitDiv.classList.add('exit');
      let xButton = document.createElement('icon');
      xButton.classList.add('fa');
      xButton.classList.add('fa-times');
      xButton.classList.add('exit-button');
      // let xButtonText = document.createTextNode(&#10008;)
      // xButton.appendChild(xButtonText);
      nav.classList.toggle('hidden');
      console.log(currentPhoto);
      exitDiv.appendChild(xButton);
      fullPage.appendChild(exitDiv);
      fullPage.classList.add('select-project');
      fullPageImg.setAttribute('src', currentPhoto);
      fullPage.appendChild(fullPageImg);

      if(currentPhoto === './images/loginpage.png') {
        let projectText = document.createElement('p');
        let text = document.createTextNode('C0D3R is a Node.js/Express server-rendered application targeted to developers looking to connect to other developers based on their development exertise and style quirks. Handlebars partials were used to render the front-end views. Authorization is managed through 0Auth(Github) and settings are stored in a PostgreSQL database.');
        projectText.appendChild(text);
        fullPage.appendChild(projectText);
        let githubButton = document.createElement('button');
        let buttonText = document.createTextNode('GitHub Repo');
        let githubRef = document.createElement('a');
        githubRef.setAttribute('href', 'https://github.com/jko113/c0d3r');
        githubRef.setAttribute('target', '_blank');
        githubButton.appendChild(buttonText);
        githubRef.appendChild(githubButton)
        let liveButton = document.createElement('button');
        let liveButtonText = document.createTextNode('Hosted Site');
        let liveRef = document.createElement('a');
        liveButton.appendChild(liveButtonText);
        liveRef.setAttribute('href', 'http://www.c0d3r.joshuakowens.com/');
        liveRef.setAttribute('target', '_blank');
        liveRef.appendChild(liveButton);
        // fullPage.appendChild(githubRef);
        let buttonDiv = document.createElement('div');
        buttonDiv.appendChild(liveRef);
        buttonDiv.appendChild(githubRef);
        fullPage.appendChild(buttonDiv);
      }
      if(currentPhoto == './images/themound.png') {
        let projectText = document.createElement('p');
        let text = document.createTextNode('The Mound is a front end project making use of jQuery to manipulate the DOM and make api calls in order to pull baseball statistics and game schedules. This project served as an introduction and foundation for asynchronous programming which was further utilised in later projects.');
        let githubButton = document.createElement('button');
        let buttonText = document.createTextNode('GitHub Repo');
        let githubRef = document.createElement('a');
        githubRef.setAttribute('href', 'https://github.com/JoshRBrown/themound');
        githubRef.setAttribute('target', '_blank');
        githubButton.appendChild(buttonText);
        githubRef.appendChild(githubButton)
        projectText.appendChild(text);
        fullPage.appendChild(projectText);
        let buttonDiv = document.createElement('div');
        buttonDiv.appendChild(githubRef);
        fullPage.appendChild(buttonDiv);
      }
      if(currentPhoto === './images/login.png') {
        
        console.log('Better Day');
        let projectText = document.createElement('p');
        let text = document.createTextNode('Better Day is a true full stack project utilizing React/Redux/Node/Postgres. Users treat the site as a journal application where they make entries based on a preset list of categories and can go back and view their journal entries. The other side of the site is that the site will make an axios call to the back end an retrieve others posts based on those categories. Styling is handle through Bootstrap and flexbox models.');
        let githubButton = document.createElement('button');
        let buttonText = document.createTextNode('GitHub Repo');
        let githubRef = document.createElement('a');
        githubRef.setAttribute('href', 'https://github.com/JoshRBrown/Better_Day');
        githubRef.setAttribute('target', '_blank');
        githubButton.appendChild(buttonText);
        githubRef.appendChild(githubButton)
        projectText.appendChild(text);
        fullPage.appendChild(projectText);
        let buttonDiv = document.createElement('div');
        buttonDiv.appendChild(githubRef);
        fullPage.appendChild(buttonDiv);      }

      body.appendChild(fullPage);
      xButton.addEventListener('click', destroyProject);
    });
  });
};


const cellDetails = () => {
  let cellIcon = document.querySelector('.phone');
  cellIcon.addEventListener('click', () => {
    let cellText = document.querySelector('.cell-text');
    cellText.classList.toggle('hidden');
  });
};

const emailDetails = () => {
  let emailIcon = document.querySelector('.email');
  emailIcon.addEventListener('click', () => {
    let cellText = document.querySelector('.email-text');
    cellText.classList.toggle('hidden');
  });
};

const destroyProject = () => {
  let navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('hidden');
  let project = document.querySelector('.select-project');
  let page = document.querySelector('body');
  project.parentNode.removeChild(project);
}


insertIcons(iconName);
carouselNav();
insertDots();
showProject();
cellDetails();
emailDetails();