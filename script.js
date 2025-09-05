const message = `I don’t even know if you’ll ever read this.\nBut if you do… I just want you to know, I still think about you sometimes GAHAHAHAHAbuang.\n\nAnyway, Happy Birthday! 18 naka! playsafe na kay pwede naka makulong jok btw I'm hoping you're doing well especially sa acads nd Good luck sa college life nimo!\n\nMay God take care of you everyday,everysecond,everywhere
ampingggg always my kakampi:).`;



function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
  }
