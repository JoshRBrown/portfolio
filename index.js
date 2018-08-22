
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
      console.log(currentPhoto);
      fullPage.classList.add('select-project');
      fullPageImg.setAttribute('src', currentPhoto);
      fullPage.appendChild(fullPageImg);

      if(currentPhoto === './images/loginpage.png') {
        let projectText = document.createElement('p');
        let text = document.createTextNode('CODER');
        projectText.appendChild(text);
        fullPage.appendChild(projectText);
      }
      if(currentPhoto == './images/themound.png') {
        let projectText = document.createElement('p');
        let text = document.createTextNode('The Mound');
        projectText.appendChild(text);
        fullPage.appendChild(projectText);
      }
      if(currentPhoto === './images/login.png') {
        console.log('Better Day');
        let projectText = document.createElement('p');
        let text = document.createTextNode('Better Day');
        projectText.appendChild(text);
        fullPage.appendChild(projectText);
      }

      body.appendChild(fullPage);
    });
  });
};



insertIcons(iconName);
carouselNav();
insertDots();
showProject();