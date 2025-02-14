const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
console.log(recognition);
recognition.lang = 'en-US';
console.log(recognition.lang);
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
                    
  function speak(text) {
                    const abc = new SpeechSynthesisUtterance(text);
                    window.speechSynthesis.speak(abc);
     
  }
  function handleCommands(command){
                    if (command.includes("Open Google")) {
                                        speak("Opening Google");
                        window.open('https://www.google.com', '_blank');
                    }else if (command.includes("Open YouTube")) {
                                        speak("Opening YouTube");
                        window.open('https://www.youtube.com', '_blank');
      }else if (command.includes("Open Facebook")) {
                                        speak("Opening Facebook");
                        window.open('https://www.facebook.com', '_blank');
      }else if (command.includes("Open Instagram")) {
                                          speak("Opening Instagram");
                          window.open('https://www.instagram.com', '_blank');
                      }
                  }
    
      recognition.onresult = (event) => {
        const command = event.results[0][0].transcript;
        handleCommands(command);
      };
      speak('How can I help you?');
      setTimeout(() => {
        recognition.start();
      }, 2000); 
      recognition.onresult = (event) => {
        const command = event.results[0][0].transcript;
        handleCommands(command);
      } 
  });