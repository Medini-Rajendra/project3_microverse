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

const section2=document.createElement('section')
const div14=document.createElement('div')
const h34=document.createElement('h3')
const div15=document.createElement('div')
const div16=document.createElement('div')
const button10=document.createElement('button')
const div17=document.createElement('div')
const button11=document.createElement('button')
const div18=document.createElement('div')
const button12=document.createElement('button')
const img21=document.createElement('img')
const p21=document.createElement('p')
const div19=document.createElement('div')
const button13=document.createElement('button')
const div20=document.createElement('div')
const button14=document.createElement('button')

function pop_window_click() {
    body.append(section2)
    section2.append(div14,h34,div15,p21,div16,button10,div17,button11,div18,button12,img21,p21,div19,button13,div20,button14)
    div14.append(h34,div15)
    div16.append(button10,div17,button11,div18,button12)
    //img21.append(p21)
    div19.append(button13,div20,button14)
    section2.setAttribute('class', 'section_pop_window')
    div14.setAttribute('class', 'pop_container pop_window')
    h34.setAttribute('class', 'pop_title')
    div15.setAttribute('class', 'closeicon')
    div15.setAttribute('onclick', 'section2.remove()')
    div16.setAttribute('class', 'pop_container move_buttons')
    button10.setAttribute('class', 'pop_button_edit')
    button10.setAttribute('type', 'button')
    button11.setAttribute('class', 'pop_button_edit')
    button11.setAttribute('type', 'button')
    button12.setAttribute('class', 'pop_button_edit')
    button12.setAttribute('type', 'button')
    div17.setAttribute('class', 'divider')
    div18.setAttribute('class', 'divider')
    img21.setAttribute('class', 'portfolio_image')
    img21.setAttribute('src', './images/portfolio1.svg')
    img21.setAttribute('alt', 'portfolio_pic')
    p21.setAttribute('class', 'pop_content')
    div19.setAttribute('class', 'buttons_live_pop')
    button13.setAttribute('class', 'padding_live live_link1')
    button13.setAttribute('onclick',"window.location.href='https://github.com/Medini-Rajendra/Mobile_Webpage_Menu';")
    div20.setAttribute('class', 'divider_live')
    button14.setAttribute('class', 'padding_live live_link2')
    button14.setAttribute('onclick', "window.location.href='https://github.com/Medini-Rajendra/Mobile_Webpage_Menu';")

    h34.textContent='Project name goes here'
    div15.textContent='×'
    button10.textContent='HTML/CSS'
    button11.textContent='Ruby on Rails'
    button12.textContent='Javascript'
    p21.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'
    button13.textContent='See live'
    button14.textContent='See source'
}

module.exports = {
  MobileMenu,
};
