
class Quiz {

     answerArray = [];
    scoureofquestion=[]
      
    //  secoure=document.getElementsByClassName('Secoure-question')[0].innerHTML
      time=0
      quesscoure=0
      htmlElement = ''
       timeforone = 0
      currentIndex = 0;
      timeforone=0
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
       let allquestion= this.htmlElement.getElementsByClassName('questions')
       for (let i = 0; i < allquestion.length; i++) {
        let getscoure=allquestion[i].getAttribute('data-score')
        this.scoureofquestion.push(Number(getscoure))
        
        
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
     console.log(this.scoureofquestion,'q')
     console.log([this.currentIndex])
     
     
       if ( optioniner == this.answerArray[this.currentIndex]) {
  
        option.classList.add('correct-answer');
  
        this.next()
        
       this.quesscoure = this.quesscoure + this.scoureofquestion[this.currentIndex-1]
      
        console.log(this.quesscoure)
        this.time=0
        
        document.getElementsByClassName('Secoure-game')[0].innerHTML = this.quesscoure
        
  
      }
  
      else
  
      {
  
            this.next()
    
            this.time=0
  
            option.classList.add('rong-answer');
  
          }
  
          let quizWithOptions = this.htmlElement.getElementsByClassName('quiz-option');
           
           if (this.currentIndex === quizWithOptions.length) {
  
            
  
           Array.from(quizWithOptions).map((quizOption) => {
  
            this.stopTimeout()
               
               quizOption.style.display = 'block';
            
               this.time=0
               
             });
           }
    }
  
    startTimeout = () => {
      let quizWithOptions = this.htmlElement.getElementsByClassName('quiz-option')
  let totaltime=document.getElementsByClassName('timer')[0].getAttribute('data-totaltime')
 let timeforquestions= Number(totaltime)
this.timeforall=timeforquestions*60

this.timeforone=this.timeforall/quizWithOptions.length

    this.intervalID = setInterval(() => {
      this.time++
      document.getElementsByClassName('time-left')[0].innerHTML= this.time
      if (this.time == this.timeforone ) {
        alert('time finish')
        this.next()
        this.time=0
        
       }

    },1000);
  
    }

    stopTimeout = () => {
      
      clearInterval(this.intervalID);
  }

}

let quizGame = new Quiz('quiz-game')

