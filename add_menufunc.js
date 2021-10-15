const { body } = document;
const section = document.createElement('section');
const i0 = document.createElement('i');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const a1 = document.createElement('a');
const a2 = document.createElement('a');
const a3 = document.createElement('a');

function MobileMenu() {
  body.append(section);
  section.append(i0);
  section.append(ul);
  ul.append(li1, li2, li3);
  li1.append(a1);
  li2.append(a2);
  li3.append(a3);

  section.setAttribute('class', 'Menubutton');
  i0.setAttribute('class', 'material-icons');
  ul.setAttribute('class', 'menu_ul');
  a1.setAttribute('href', '#portfolio');
  a1.setAttribute('onclick', 'section.remove()');
  a2.setAttribute('href', '#about');
  a2.setAttribute('onclick', 'section.remove()');
  a3.setAttribute('href', '#contact');
  a3.setAttribute('onclick', 'section.remove()');

  i0.textContent = 'close';
  i0.setAttribute('onclick', 'section.remove()');

  a1.textContent = 'Portfolio';
  a2.textContent = 'About';
  a3.textContent = 'Contact';

  a1.style.color = 'White';
  a1.style.fontSize = 'xx-large';
  a2.style.color = 'White';
  a2.style.fontSize = 'xx-large';
  a3.style.color = 'White';
  a3.style.fontSize = 'xx-large';
}

const section2 = document.createElement('section');
const div14 = document.createElement('div');
const h34 = document.createElement('h1');
const div15 = document.createElement('div');
const div15cont = document.createElement('div');
const h44flex = document.createElement('div');
const h44cont = document.createElement('h4');
const ulcont = document.createElement('ul');
const licont = document.createElement('li');
const imgcont = document.createElement('img');
const imgcont1 = document.createElement('img');
const licont1 = document.createElement('li');
const licont2 = document.createElement('li');
const licont3 = document.createElement('li');
const button10 = document.createElement('button');
const div17 = document.createElement('div');
const button11 = document.createElement('button');
const div18 = document.createElement('div');
const button12 = document.createElement('button');
const img21 = document.createElement('img');
const p21 = document.createElement('p');
const div19 = document.createElement('div');
const button13 = document.createElement('button');
const div20 = document.createElement('div');
const button14 = document.createElement('button');
const divalign16 = document.createElement('div');
const div16 = document.createElement('div');
const div16cont = document.createElement('div');
const divcover16 = document.createElement('div');

function toggle() {
  const getreturnelem = document.getElementById('blur');
  const getreturnelem1 = document.getElementById('blur1');
  const getreturnelem2 = document.getElementById('blur2');
  const getreturnelem3 = document.getElementById('portfolio');

  getreturnelem.classList.toggle('active');
  getreturnelem1.classList.toggle('active');
  getreturnelem2.classList.toggle('active');
  getreturnelem3.classList.toggle('active');
}

function myFunction(e) {
  const elems = document.querySelectorAll('.active');
  for (let kj = 0; kj < elems.length; kj += 1) {
    if (elems[kj] !== null) {
      elems[kj].classList.remove('active');
    }
    e.target.className = 'active';
    section2.remove();
  }
}

const projects = [
  {
    gridclass: 'grid-item item1',
    imageurl: './images/portfolio1.svg',
    title: 'Tonic',
    subtitle1: 'CANOPY',
    subtitle2: 'Back End Dev',
    subtitle3: '2015',
    description: 'A daily selection of privately <br> personlized reads; no accounts or <br> sign-ups required',
    tech0: 'html',
    tech1: 'css',
    tech2: 'javascript',
  },

  {
    gridclass: 'grid-item item2',
    imageurl: './images/portfolio2.svg',
    title: 'Multi-Post Stories',
    subtitle1: 'CANOPY',
    subtitle2: 'Back End Dev',
    subtitle3: '2015',
    description: 'A daily selection of privately <br> personlized reads; no accounts or <br> sign-ups required',
    tech0: 'html',
    tech1: 'css',
    tech2: 'javascript',
  },

  {
    gridclass: 'grid-item item3',
    imageurl: './images/portfolio3.svg',
    title: 'Facebook 360',
    subtitle1: 'CANOPY',
    subtitle2: 'Back End Dev',
    subtitle3: '2015',
    description: 'A daily selection of privately <br> personlized reads; no accounts or <br> sign-ups required',
    tech0: 'html',
    tech1: 'css',
    tech2: 'javascript',
  },

  {
    gridclass: 'grid-item item4',
    imageurl: './images/portfolio4.svg',
    title: 'Uber Navigation',
    subtitle1: 'CANOPY',
    subtitle2: 'Back End Dev',
    subtitle3: '2015',
    description: 'A daily selection of privately <br> personlized reads; no accounts or <br> sign-ups required',
    tech0: 'html',
    tech1: 'css',
    tech2: 'javascript',
  },
];

function popWindowClick(idnom) {
  toggle();
  body.append(section2);
  if (window.innerWidth > 700) {
    const button101 = document.createElement('button');
    const button111 = document.createElement('button');
    const button121 = document.createElement('button');
    if (div16 !== null) {
      div16.innerHTML = '';
      div16cont.innerHTML = '';
      divcover16.innerHTML = '';
    }
    div16.append(button10, button11, button12, div17);
    div16cont.append(button101, button111, button121);
    divcover16.append(div16, div16cont, div19);
    button101.setAttribute('class', 'pop_button_edit');
    button101.setAttribute('type', 'button');
    button111.setAttribute('class', 'pop_button_edit');
    button111.setAttribute('type', 'button');
    button121.setAttribute('class', 'pop_button_edit');
    button121.setAttribute('type', 'button');
    button101.textContent = 'github';
    button111.textContent = 'ruby';
    button121.textContent = 'Bootstraps';
  } else {
    if (div16 !== null) {
      div16.innerHTML = '';
      div16cont.innerHTML = '';
      divcover16.innerHTML = '';
    }
    div16.append(button10, button11, button12);
    divcover16.append(div16, div19);
  }
  section2.append(div14, h34, div15, h44flex, img21, divalign16);
  divalign16.append(p21, divcover16);
  div14.append(h34, div15);
  h44flex.append(div15cont);
  div15cont.append(h44cont, ulcont);
  ulcont.append(licont, licont1, licont2, licont3);
  licont.append(imgcont);
  licont2.append(imgcont1);

  div19.append(button13, div20, button14);
  h44flex.setAttribute('class', 'h44flexclass');
  section2.setAttribute('class', 'section_pop_window');
  div14.setAttribute('class', 'pop_container pop_window');
  h34.setAttribute('class', 'pop_title');
  div15.setAttribute('class', 'closeicon');
  div15.setAttribute('onclick', 'myFunction(event)');
  div16.setAttribute('class', 'move_buttons');
  div16cont.setAttribute('class', 'move_buttons');
  button10.setAttribute('class', 'pop_button_edit');
  button10.setAttribute('type', 'button');
  button11.setAttribute('class', 'pop_button_edit');
  button11.setAttribute('type', 'button');
  button12.setAttribute('class', 'pop_button_edit');
  button12.setAttribute('type', 'button');
  divalign16.setAttribute('class', 'align_last_items');
  div17.setAttribute('class', 'divider');
  div18.setAttribute('class', 'divider');
  img21.setAttribute('class', 'portfolio_image');
  img21.setAttribute('src', `./images/portfolio${idnom}.svg`);
  img21.setAttribute('alt', 'portfolio_pic');
  imgcont.setAttribute('src', './images/Counter.svg');
  imgcont.setAttribute('alt', 'Counter image');
  imgcont1.setAttribute('src', './images/Counter.svg');
  imgcont1.setAttribute('alt', 'Counter image');
  p21.setAttribute('class', 'pop_content');
  div19.setAttribute('class', 'buttons_live_pop');
  button13.setAttribute('class', 'padding_live live_link1');
  button13.setAttribute('onclick', "window.location.href='https://medini-rajendra.github.io/project3_microverse';");
  div20.setAttribute('class', 'divider_live');
  button14.setAttribute('class', 'padding_live live_link2');
  button14.setAttribute('onclick', "window.location.href='https://github.com/Medini-Rajendra/Mobile_Webpage_Menu';");
  divcover16.setAttribute('class', 'aligndiv16elems');

  h34.textContent = projects[idnom - 1].title;
  h44cont.textContent = 'CANOPY';
  div15.textContent = '×';
  licont1.innerHTML = '\u00A0\u00A0Back End Dev';
  licont3.innerHTML = '\u00A0\u00A02015';
  button10.textContent = 'html';
  button11.textContent = 'css';
  button12.textContent = 'javascript';
  p21.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';
  button13.textContent = 'See live';
  button14.textContent = 'See source';
}

/* function PopProjectWin() {
  this.divclass = div2c;
  this.title = title;
  this.image = image;
  this.subtit1 = subtit1;
  this.subtit2 = subtit2;
  this.subtit3 = subtit3;
  this.imglinkclass = iml;
  this.tech0 = tech0;
  this.tech1 = tech1;
  this.tech2 = tech2;
}

 const project0 = new PopProjectWin(
  'grid-item item1',
  './images/portfolio1.svg',
  'Tonic',
  'CANOPY',
  'Back End Dev ',
  '2015',
  'A daily selection of privately <br> personlized reads; no accounts or <br> sign-ups required',
  'html',
  'css',
  'javascript',
);

const project1 = new PopProjectWin(
  'grid-item item2',
  './images/portfolio2.svg',
  'Tonic',
  'CANOPY',
  'Back End Dev ',
  '2015',
  'A daily selection of privately <br> personlized reads; no accounts or <br> sign-ups required',
  'html',
  'css',
  'javascript',
);

const project2 = new PopProjectWin(
  'grid-item item3',
  './images/portfolio3.svg',
  'Tonic',
  'CANOPY',
  'Back End Dev ',
  '2015',
  'A daily selection of privately <br> personlized reads; no accounts or <br> sign-ups required',
  'html',
  'css',
  'javascript',
);

const project3 = new PopProjectWin(
  'grid-item item4',
  './images/portfolio4.svg',
  'Tonic',
  'CANOPY',
  'Back End Dev ',
  '2015',
  'A daily selection of privately <br> personlized reads; no accounts or <br> sign-ups required',
  'html',
  'css',
  'javascript',
); */

const gridtitles = [];
const titles = [];
const images = [];
const subtitles1 = [];
const subtitles2 = [];
const subtitles3 = [];
const imglinks = [];
const tech0s = [];
const tech1s = [];
const tech2s = [];

for (let i = 0; i < projects.length; i += 1) {
  gridtitles.push(projects[i].gridclass);
  titles.push(projects[i].title);
  images.push(projects[i].imageurl);
  subtitles1.push(projects[i].subtitle1);
  subtitles2.push(projects[i].subtitle2);
  subtitles3.push(projects[i].subtitle3);
  imglinks.push(projects[i].description);
  tech0s.push(projects[i].tech0);
  tech1s.push(projects[i].tech1);
  tech2s.push(projects[i].tech2);
}

const divgrid = document.getElementById('portfolio');

function displayProject(div2c, image, title, subt1, subt2, subt3, iml, tech0, tech1, tech2, idnum) {
  const div2 = document.createElement('div');
  div2.setAttribute('class', div2c);
  divgrid.append(div2);
  const img2 = document.createElement('img');
  const div3 = document.createElement('div');
  const h3 = document.createElement('h1');
  const div4 = document.createElement('div');
  const h4 = document.createElement('h4');
  const ul4 = document.createElement('ul');
  const li4 = document.createElement('li');
  const img3 = document.createElement('img');
  const li5 = document.createElement('li');
  const li6 = document.createElement('li');
  const img4 = document.createElement('img');
  const li7 = document.createElement('li');
  const p2add = document.createElement('p');
  const p3add = document.createElement('p');
  const ul5 = document.createElement('ul');
  const li8 = document.createElement('li');
  const h5 = document.createElement('h4');
  const li9 = document.createElement('li');
  const h6 = document.createElement('h4');
  const li10 = document.createElement('li');
  const h7 = document.createElement('h4');
  const a1chk = document.createElement('a');
  const a2chk = document.createElement('a');
  const a3chk = document.createElement('a');
  const a4chk = document.createElement('a');

  div2.append(img2, div3);
  div3.append(h3, div4, p2add, p3add, ul5, a4chk);
  div4.append(h4, ul4);
  ul4.append(li4, li5, li6, li7);
  li4.append('\u00A0\u00A0');
  li4.append(img3);
  li6.append(img4);
  ul5.append(li8, li9, li10);
  li8.append(h5);
  h5.append(a1chk);
  li9.append(h6);
  h6.append(a2chk);
  li10.append(h7);
  h7.append(a3chk);

  img2.setAttribute('src', image);
  img2.setAttribute('class', 'img-fluid');
  h3.textContent = title;
  h4.textContent = subt1;
  li5.textContent = `\u00A0\u00A0${subt2}`;
  li7.textContent = `\u00A0\u00A0${subt3}`;
  img3.setAttribute('src', './images/Counter.svg');
  img3.setAttribute('alt', 'Counter image');
  img4.setAttribute('src', './images/Counter.svg');
  img4.setAttribute('alt', 'Counter image');
  p2add.setAttribute('class', 'p_mobile');
  p2add.textContent = iml;
  p3add.setAttribute('class', 'p_desktop');
  p3add.textContent = 'A daily selection of privately personlized reads; no accounts <br> or sign-ups required.';
  ul5.setAttribute('class', 'diff_classes');
  a1chk.setAttribute('href', '#');
  a2chk.setAttribute('href', '#');
  a3chk.setAttribute('href', '#');
  a1chk.textContent = tech0;
  a2chk.textContent = tech1;
  a3chk.textContent = tech2;
  a4chk.setAttribute('onclick', `popWindowClick(${idnum + 1})`);
  a4chk.setAttribute('href', '#');
  a4chk.textContent = 'See Project';
}

const form = document.querySelector('form');

function validation() {
  const mail = document.getElementById('email').value;

  const error = document.getElementById('error');

  error.style.position = 'relative';
  error.style.top = '430%';
  error.style.left = '5%';
  error.style.whiteSpace = 'nowrap';
  const pattern = /[A-Z]/;

  if (mail.match(pattern)) {
    error.innerText = 'email must be in lower case';
  } else {
    error.innerText = 'you\'re cool';
  }
}

form.addEventListener('submit', (e) => {
  const mail = document.getElementById('email').value;
  const error = document.getElementById('error');
  const pattern = /[A-Z]/;

  if (mail.match(pattern)) {
    error.innerText = 'email must be in lower case';
    e.preventDefault();
  } else {
    error.innerText = 'you\'re cool';
  }
});

for (let i = 0; i < titles.length; i += 1) {
  displayProject(
    gridtitles[i],
    images[i],
    titles[i],
    subtitles1[i],
    subtitles2[i],
    subtitles3[i],
    imglinks[i],
    tech0s[i],
    tech1s[i],
    tech2s[i],
    i,
  );
}

module.exports = {
  MobileMenu,
  myFunction,
  popWindowClick,
  validation,
};
