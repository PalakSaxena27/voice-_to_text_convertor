document.addEventListener('DOMContentLoaded', function() {
    const convertTextArea = document.getElementById('convert_text');
    const convertButton = document.getElementById('click_to_convert');

    convertButton.addEventListener('click', function() {
        
        if (!('webkitSpeechRecognition' in window)) {
            alert('Your browser does not support the Web Speech API.');
            return;
        }

       
        const recognition = new webkitSpeechRecognition();

       
        recognition.lang = 'en-US';

       
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            convertTextArea.value = transcript;
        };

       
        recognition.onerror = function(event) {
            console.error('Speech recognition error detected: ' + event.error);
            alert('Speech recognition error detected: ' + event.error);
        };

       
        recognition.start();
    });
});


