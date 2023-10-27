
document.addEventListener('DOMContentLoaded', function() {
  var button1 = document.getElementById('saveButton');
  var button2 = document.getElementById('saveButton2');
  var button3 = document.getElementById('saveButton3');
  var button4 = document.getElementById('saveButton4');
  var button5 = document.getElementById('saveButton5');
  var button6 = document.getElementById('saveButton6');
  var button7 = document.getElementById('saveButton7');
  var button8 = document.getElementById('saveButton8');
  var button9 = document.getElementById('saveButton9');
  var button10 = document.getElementById('saveButton10');
  var button11 = document.getElementById('saveButton11');
  var button12 = document.getElementById('saveButton12');

  var container1 = document.getElementById('container1');
  var container2 = document.getElementById('container2');
  var container3 = document.getElementById('container3');
  var container4 = document.getElementById('container4');
  var container5 = document.getElementById('container5');d = false;
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

      } else {
          resetButton10();
          button10Clicked = false;
      }
  });
  button11.addEventListener('click', function() {
      if (!button11Clicked) {
          setTextAndStyles4('11', button11, container11);
          button11Clicked = true;
      } else {
          resetButton11();
          button11Clicked = false;
      }
  });
  button12.addEventListener('click', function() {
      if (!button12Clicked) {
          setTextAndStyles4('12', button12, container12);
          button12Clicked = true;
      } else {
          resetButton12();
          button12Clicked = false;
      }
  });
  resetIcon.addEventListener('click', function() {
      resetAllStyles();
      resetAllStylesForButtons4and5();
      resetAllStylesForButtons678();
  });
function setTextAndStyles(value, clickedButton, clickedContainer) {
      textElement.textContent = value;
      // tekstElement.textContent = value;
      // tekstElement2.textContent = value;
      conditionalDiv.style.display = 'block';
      clickedButton.style.backgroundColor = '#00FF9F';
      clickedContainer.style.border = '1px solid #00FF9F';
      let allButtons = [button1, button2, button3];
      allButtons.forEach(btn => {
          if (btn !== clickedButton) {
              btn.style.backgroundColor = '#1E2024';
              btn.style.color = '#ACB0B9';
          }
      });
  } }
      if (value === '6') {
          textElement3.textContent += 'SMS';
      } else if (value === '7') {
          textElement3.textContent += 'E-mail';
      } else if (value === '8') {
          textElement3.textContent += 'Slack';
      }
      // tekstElement3.textContent = textElement3.textContent;
      conditionalDiv3.style.display = 'block';
      clickedButton.style.backgroundColor = '#00FF9F';
      clickedContainer.style.border = '1px solid #00FF9F';
  }
  function setTextAndStyles4(value, clickedButton, clickedContainer) {
      if (textElement3.textContent !== '' && value !== '') {
          textElement3.textContent += ' / ';
      }
      if (value === '9') {
          textElement3.textContent += 'SMS';
      } else if (value === '10') {
          textElement3.textContent += 'E-mail';
      } else if (value === '11') {
          textElement3.textContent += 'Slack';
       } else if (value === '12') {
          textElement3.textContent += 'Slac2k';
      }
      conditionalDiv4.style.display = 'block';
      clickedButton.style.backgroundColor = '#00FF9F';
      clickedContainer.style.border = '1px solid #00FF9F';
  }
  
  function resetButton4() {
      button4.style.backgroundColor = '#1E2024';
      button4.style.color = '#FFFFFF';
      container4.style.border = '1px solid transparent';
      var values = textElement2.textContent.split('/').filter(v => v.trim() !== 'SMS');          conditionalDiv3.style.display = 'none';
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
      }
  }
  function resetButton8() {
      button8.style.backgroundColor = '#1E2024';
      button8.style.color = '#FFFFFF';
      container8.style.border = '1px solid transparent';
      var values = textElement3.textContent.split('/').filter(v => v.trim() !== 'Slack');
      textElement3.textContent = values.join(' / ');
      if (!textElement3.textContent) {
          conditionalDiv3.style.display = 'none';
      }
  }
  function resetButton9() {
      button9.style.backgroundColor = '#1E2024';
      button9.style.color = '#FFFFFF';
      container9.style.border = '1px solid transparent';
      var values = textElement3.textContent.split('/').filter(v => v.trim() !== 'Slack');
      textElement3.textContent = values.join(' / ');
      if (!textElement3.textContent) {
          conditionalDiv3.style.display = 'none';
      }
  }12() {
      button12.style.backgroundColor = '#1E2024';
      button12.style.color = '#FFFFFF';
      container12.style.border = '1px solid transparent';
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
