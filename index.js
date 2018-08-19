
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

insertIcons(iconName);