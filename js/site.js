function animate(obj, initVal, lastVal, duration) {
    let startTime = null;

 //get the current timestamp and assign it to the currentTime variable
 let currentTime = Date.now();

 //pass the current timestamp to the step function
 const step = (currentTime ) => {

 //if the start time is null, assign the current time to startTime
 if (!startTime) {
    startTime = currentTime ;
 }

 //calculate the value to be used in calculating the number to be displayed
 const progress = Math.min((currentTime - startTime)/ duration, 1);

 //calculate what to be displayed using the value gotten above
 obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

 //checking to make sure the counter does not exceed the last value (lastVal)
 if (progress < 1) {
    window.requestAnimationFrame(step);
 } else {
       window.cancelAnimationFrame(window.requestAnimationFrame(step));
    }
 };
 //start animating
    window.requestAnimationFrame(step);
 }
 let text1 = document.getElementById('0101');
 let text2 = document.getElementById('0102');
 let text3 = document.getElementById('0103');
 const load = () => {
    animate(text1, 0, 210, 7000);
    animate(text2, 0, 52, 7000);
    animate(text3, 100, 25, 7000);
 }



//  const checkbox = document.getElementById("checkbox")
//  checkbox.addEventListener("change", () => {
//    document.body.classList.toggle("dark")
//  })

const checkbox = document.getElementById("checkbox");

// Check for saved theme in local storage and apply it
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.body.classList.add(currentTheme);
  if (currentTheme === "dark") {
    checkbox.checked = true;
  }
}

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});


//  ----------GSAP animation----------

gsap.from(".my-hero h1",{
      
      x: -500,
      opacity: 0,
      duration: 2,
})
gsap.from(".my-hero h3",{

      x: -500,
      opacity: 0,
      duration: 2,
      delay:0.5
})
gsap.from(".my-hero p",{
      
      x: -500,
      opacity: 0,
      duration: 2,
      delay:0.7
})
gsap.from(".bhance",{
      
      y: 10,   
      opacity:0,
      duration:0.5,
      delay:1.25
      
      
})
gsap.from(".ldin",{
      
      y: 10,   
      opacity:0,
      duration:0.5,
      delay:1.5
      
      
})
gsap.from(".whts",{
      
      y: 10,   
      opacity:0,
      duration:0.5,
      delay:1.75
      
      
})

gsap.from(".info",{
      
      x: -100,   
      opacity:0,
      duration:1,
      delay:0.5,
      scrollTrigger:{
         trigger: ".info",
         scroller : "body",
        
         start : "top 80%"
      }

  
      
      
})
gsap.from(".dp",{
      
      x: 100,   
      opacity:0,
      duration:1,
      delay:0.5,
      scrollTrigger:{
         trigger: ".info",
         scroller : "body",
        
         start : "top 80%"
      }
  
      
      
})
// gsap.from(".c-one",{
      
         
//       opacity:0,
//       duration:1,
      
//       scrollTrigger:{
//          trigger: ".c-one",
//          scroller : "body",
        
//          start : "top 80%"
//       }
  
      
      
// })
// gsap.from(".c-two",{
      
         
//       opacity:0,
//       duration:1,
//       scrollTrigger:{
//          trigger: ".c-two",
//          scroller : "body",
        
//          start : "top 80%"
//       }
  
      
      
// })
// gsap.from(".c-three",{
      
   
//       opacity:0,
//       duration:1,

//       scrollTrigger:{
//          trigger: ".c-three",
//          scroller : "body",
        
//          start : "top 80%"
//       }
  
      
      
// })
gsap.from(".software-know",{
      
      x: 50,   
      opacity:0,
      duration:2.5,

      scrollTrigger:{
         trigger: ".software-know",
         scroller : "body",
        
         start : "top 80%"
      }
  
      
      
})

document.addEventListener('DOMContentLoaded', () => {
      const cursor = document.querySelector('.cursor');
      let hue = 0;
      let mouseX = 0;
      let mouseY = 0;
  
      document.addEventListener('mousemove', e => {
          mouseX = e.clientX;
          mouseY = e.clientY;
      });
  
      const updateCursorPosition = () => {
          // Smoothly interpolate cursor position
          const cursorX = parseFloat(cursor.style.left) || 0;
          const cursorY = parseFloat(cursor.style.top) || 0;
          const speed = 0.08; // Adjust speed to control smoothness
  
          cursor.style.left = `${cursorX + (mouseX - cursorX) * speed}px`;
          cursor.style.top = `${cursorY + (mouseY - cursorY) * speed}px`;
  
          requestAnimationFrame(updateCursorPosition);
      };
  
      const updateHue = () => {
          hue = (hue + 1) % 360;
          cursor.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
          requestAnimationFrame(updateHue);
      };
  
      updateCursorPosition();
      updateHue();
  });


  const backToTopButton = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          backToTopButton.style.display = 'block';
      } else {
          backToTopButton.style.display = 'none';
      }
  });

  backToTopButton.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
  
  