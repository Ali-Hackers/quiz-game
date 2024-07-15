
class Quiz {

     answerArray = [];

      count=0

      time=0

      htmlElement = ''

      currentIndex = 0;

      intervalID = null;

      constructor(htmlElement) {

        this.htmlElement = document.getElementsByClassName(htmlElement)[0]
 
        this.Init()

      }

    Init() {

      alert('start game now click ok')

      this.startTimeout()        

       let quizWithOptions = this.htmlElement.getElementsByClassName('quiz-option')

                       
       Array.from(quizWithOptions).map((quizOption, index) => index == 0  ? quizOption:quizOption.style.display = 'none')


       
       document.getElementsByClassName('btn-next')[0].addEventListener('click', this.next)
        
       document.getElementsByClassName('btn-prev')[0].addEventListener('click', this.prev)

       
 
       alert('four option are given click in one')
 
       let option = document.getElementsByClassName('option')
        
       for (let i = 0; i < option.length; i++) {

        option[i].addEventListener('click', this.chek)  

        let getattribute =option[i].getAttribute('data-selected')

      if (getattribute==='true') {

        let selectedoptions=option[i].innerHTML

        this.answerArray.push(selectedoptions)
        
      }      
           
        }

    }

    next = () => {
 
      this.time=0
         
      let quizWithOptions = this.htmlElement.getElementsByClassName('quiz-option')

        this.currentIndex++;
 
        Array.from(quizWithOptions).map((quizOption, index) => index == this.currentIndex ? quizOption.style.display = 'block':quizOption.style.display = 'none' )
       
         
    }
    
    prev = () => {
 
      this.time=0
  
      if (this.currentIndex > 0) {
        
            this.currentIndex--;
        }
  
        let quizWithOptions = this.htmlElement.getElementsByClassName('quiz-option')

        Array.from(quizWithOptions).map((quizOption, index) => index == this.currentIndex ? quizOption.style.display = 'block':quizOption.style.display = 'none' )     
    }

    chek = (e) => {
  
      let option= e.target.closest('.option');

      let optioniner=option.innerHTML
  
        this.ansers.push(optioniner)
  
       if (optioniner==this.answerArray[this.currentIndex]) {
  
        option.classList.add('correct-answer');
  
        this.next()
  
        this.count++
  
        this.time=0
  
        document.getElementsByClassName('Secoure-game')[0].innerHTML="0"+this.count
  
      }
  
      else
  
      {
  
            this.next()
    
            this.time=0
  
            option.classList.add('rong-answer');
  
          }
  
          let quizWithOptions = this.htmlElement.getElementsByClassName('quiz-option');
           
           if (this.currentIndex === quizWithOptions.length) {
  
            this.time=false  
  
           Array.from(quizWithOptions).map((quizOption) => {
  
            this.stopTimeout()
               
               quizOption.style.display = 'block';
            
               this.time=0
               
             });
           }
    }
  
    startTimeout = () => {
  
    this.intervalID = setInterval(() => {
          
           this.time++

           if (this.time<10) {

            this.htmlElement.getElementsByClassName('time-left')[0].innerHTML="0"+this.time

          }
          else{

            this.htmlElement.getElementsByClassName('time-left')[0].innerHTML=this.time
           
            this.time=0
              
              alert('time finish turn next')
           
              this.next()
           }
            
        }, 1000); 
    }

    stopTimeout = () => {
      
      clearInterval(this.intervalID);
  }

}

let quizGame = new Quiz('quiz-game')

