
  var textElement = document.getElementById('displayText');
  var conditionalDiv = document.getElementById('conditionalDiv');
  var textElement2 = document.getElementById('displayText2');
  var conditionalDiv2 = document.getElementById('conditionalDiv2');
  var textElement3 = document.getElementById('displayText3');
  var conditionalDiv3 = document.getElementById('conditionalDiv3');
  
  var resetIcon = document.getElementById('resetIcon');
  
  var additionalDiv = document.getElementById('additionalDiv');
  var additionalDiv2 = document.getElementById('additionalDiv2');
  var additionalDiv3 = document.getElementById('additionalDiv3');
  var additionalDiv4 = document.getElementById('additionalDiv4');
  
  var tekstElement = document.getElementById('tekst');
  var tekstElement2 = document.getElementById('tekst2');
  var tekstElement3 = document.getElementById('tekst3');
  var tekstElement4 = document.getElementById('tekst4');
  
  var button4Clicked = false;
  var button5Clicked = false;
  var button6Clicked = false;
  var button7Clicked = false;
  var button8Clicked = false;
  var button9Clicked = false;
  var button10Clicked = false;
  var button11Clicked = false;
  var button12Clicked = false;
  
  button1.addEventListener('click', function() {
      setTextAndStyles('Pipedrive', button1, container1);
  });
  button2.addEventListener('click', function() {
      setTextAndStyles('Hubspot', button2, container2);
  });
  button3.addEventListener('click', function() {
      setTextAndStyles('Livespace', button3, container3);
  });
  button4.addEventListener('click', function() {
      if (!button4Clicked) {
          setTextAndStyles2('4', button4, container4);
          button4Clicked = true;
      } else {
          resetButton4();
          button4Clicked = false;
      }
  });
  button5.addEventListener('click', function() {
      if (!button5Clicked) {
          setTextAndStyles2('5', button5, container5);
          button5Clicked = true;
      } else {
          resetButton5();
          button5Clicked = false;
      }
  });
  button6.addEventListener('click', function() {
      if (!button6Clicked) {
          setTextAndStyles3('6', button6, container6);
          button6Clicked = true;
      } else {
          resetButton6();
          button6Clicked = false;
      }
  });
  button7.addEventListener('click', function() {
      if (!button7Clicked) {
          setTextAndStyles3('7', button7, container7);
          button7Clicked = true;
      } else {
          resetButton7();
          button7Clicked = false;
      }
  });
  button8.addEventListener('click', function() {
      if (!button8Clicked) {
          setTextAndStyles3('8', button8, container8);
          button8Clicked = true;
      } else {
          resetButton8();
          button8Clicked = false;      if (!button11Clicked) {
          setTextAndStyles4('11', button11, container11);

      // tekstElement2.textContent = value;
      conditionalDiv.style.display = 'block';
      clickedButton.style.backgroundColor = '#00FF9F';
      clickedContainer.style.border = '1px solid #00FF9F';
      let allButtons = [button1, button2, button3];
      allButtons.forEach(btn => {
          if (btn !== clickedButton) {
              btn.style.backgroundColor = '#1E2024';
              btn.style.color = '#ACB0B9';
          }     textElement2.textContent += 'SMS';
      } else if (value === '5') {
          textElement2.textContent += 'E-mail';
      }
      // tekstElement2.textContent = textElement2.textContent;
      conditionalDiv2.style.display = 'block';
      clickedButton.style.backgroundColor = '#00FF9F';
      c
          conditionalDiv3.style.display = 'none';
      }
  }
  function resetButton7() {
      button7.style.backgroundColor = '#1E2024';
      button7.style.color = '#FFFFFF';
      container7.style.border = '1px solid transparent';
      var values = textElement3.textContent.split('/').filter(v => v.trim() !== 'E-mail');
      textElement3.textContent = values.join(' / ');
      if (!textElement3.textContent) {
          conditionalDiv3.style.display = 'none';
      var values = textElement3.textContent.split('/').filter(v => v.trim() !== 'Slack');
      textElement3.textContent = values.join(' / ');
      if (!textElement3.textContent) {
          conditionalDiv3.style.display = 'none';
      }
  }

  function resetAllStyles() {
      let buttons = [button1, button2, button3];
      let containers = [container1, container2, container3];
      buttons.forEach(btn => {
          btn.style.backgroundColor = '#1E2024';
          btn.style.color = '#FFFFFF';
      });
      containers.forEach(cont => {
          cont.style.border = '1px solid transparent';
      });
      textElement.textContent = '';
      conditionalDiv.style.display = 'none';
      tekstElement.textContent = '';
  }
  function resetAllStylesForButtons4and5() {
      let buttons = [button4, button5];
      let containers = [container4, container5];
      buttons.forEach(btn => {
          btn.style.backgroundColor = '#1E2024';
          btn.style.color = '#FFFFFF';
      });
      containers.forEach(cont => {
          cont.style.border = '1px solid transparent';
      });
      textElement2.textContent = '';
      conditionalDiv2.style.display = 'none';
  }
  function resetAllStylesForButtons678() {
      let buttons = [button6, button7, button8];
      let containers = [container6, container7, container8];
      buttons.forEach(btn => {
          btn.style.backgroundColor = '#1E2024';
          btn.style.color = '#FFFFFF';
      });
      containers.forEach(cont => {
          cont.style.border = '1px solid transparent';
      });
      textElement3.textContent = '';
      conditionalDiv3.style.display = 'none';
  }
  resetAllStyles();
  resetAllStylesForButtons4and5();
  resetAllStylesForButtons678();
});
