const thirdQuoteDiv = document.querySelector('.third-quote-div');
const secondQuoteDiv = document.querySelector('.second-quote-div');
const firstQuoteDiv = document.querySelector('.first-quote-div');
const addButton = document.querySelector('.add_button');

const date = dayjs().format('MMMM D, YYYY');


setTimeout(() => {
  thirdQuoteDiv.innerHTML = `<div class="profile_pic_container">
          <img src="/images/user.png" alt="user.jpg" class="quote_image">
        </div>

        <div class="quote_container">
          <p class="user_name">Scum</p>

          <p class="quote">I scammed. Im rich!</p>

          <div class="quote_details">
            <p class="quote_time">${date}</p>
            <p class="quote_id">ID: HSRYE6WB3SH6</p>
          </div>
        </div>`;
}, 4500);

setTimeout(() => {
  thirdQuoteDiv.style.height = '60px';
}, 4300);


setTimeout(() => {
  addButton.style.backgroundColor = '#008DFF';
  
  setTimeout(() => {
    addButton.style.backgroundColor = '#5ED1FF';
  }, 240);
  
}, 4000);








setTimeout(() => {
  secondQuoteDiv.innerHTML = `<div class="profile_pic_container">
          <img src="/images/user.png" alt="user.jpg" class="quote_image">
        </div>

        <div class="quote_container">
          <p class="user_name">Toasty</p>

          <p class="quote">From the toast i rise.</p>

          <div class="quote_details">
            <p class="quote_time">${date}</p>
            <p class="quote_id">ID: USYQN36SNKA6</p>
          </div>
        </div>`;
}, 10000);

setTimeout(() => {
  secondQuoteDiv.style.height = '60px';
}, 9800);


setTimeout(() => {
  addButton.style.backgroundColor = '#008DFF';
  
  setTimeout(() => {
    addButton.style.backgroundColor = '#5ED1FF';
  }, 240);
  
}, 9500);







setTimeout(() => {
  firstQuoteDiv.innerHTML = `<div class="profile_pic_container">
          <img src="/images/user.png" alt="user.jpg" class="quote_image">
        </div>

        <div class="quote_container">
          <p class="user_name">MANTO999</p>

          <p class="quote">I'm Manto. not man toe!</p>

          <div class="quote_details">
            <p class="quote_time">${date}</p>
            <p class="quote_id">ID: JSJS68I37DHSST5</p>
          </div>
        </div>`;
}, 15300);

setTimeout(() => {
  firstQuoteDiv.style.height = '60px';
}, 15100);



setTimeout(() => {
  addButton.style.backgroundColor = '#008DFF';
  
  setTimeout(() => {
    addButton.style.backgroundColor = '#5ED1FF';
  }, 240);
  
}, 15000);





// type js

var typed = new Typed(".animated_quote", {
  strings: [
            "I scammed. Im rich!",
            "From the toast i rise.",
            "I'm Manto. not man toe!"
          ],
          
  startDelay: 2000,
  typeSpeed: 70,
  backDelay: 2000,
  backSpeed: 50,
  showCursor: true,
  cursorChar: '|',
  loop: false
});