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

module.exports = {
  MobileMenu,
};
