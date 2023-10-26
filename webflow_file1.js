
document.addEventListener('DOMContentLoaded', function() {
  var button1 = document.getElementById('saveButton');

  var conditionalDiv3 = document.getElementById('conditionalDiv3');
  
  var resetIcon = document.getElementById('resetIcon');
  
  var additionalDiv = document.getElementById('additionalDiv');
  var additionalDiv2 = document.getElementById('additionalDiv2');
  var additionalDiv3 = document.getElementById('additionalDiv3');
  var additionalDiv4 = document.getElementById('additionalDiv4');
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

      var values = textElement2.textContent.split('/').filter(v => v.trim() !== 'SMS');
      textElement2.textContent = values.join(' / ');
      if (!textElement2.textContent) {
          conditionalDiv2.style.display = 'none';
      }
  }
  function resetButton5() {
      button5.style.backgroundColor = '#1E2024';
      button5.style.color = '#FFFFFF';
      container5.style.border = '1px solid transparent';
      var values = textElement2.textContent.split('/').filter(v => v.trim() !== 'E-mail');
      textElement2.textContent = values.join(' / ');
      if (!textElement2.textContent) {
          conditionalDiv2.style.display = 'none';
      }
  }
  function resetButton6() {
      button6.style.backgroundColor = '#1E2024';
      button6.style.color = '#FFFFFF';
      container6.style.border = '1px solid transparent';
      // Clear the entire content of textElement2 and add remaining values
      var values = textElement3.textContent.split('/').filter(v => v.trim() !== 'SMS');
      textElement3.textContent = values.join(' / ');
      if (!textElement3.textContent) {
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
      }
  }
  function resetButton8() {
      button8.style.backgroundColor = '#1E2024';
      button8.style.color = '#FFFFFF';  function resetButton11() {
      button11.style.backgroundColor = '#1E2024';
      button11.style.color = '#FFFFFF';
      container11.style.border = '1px solid transparent';
      var values = textElement3.textContent.split('/').filter(v => v.trim() !== 'Slack');
      textElement3.textContent = values.join(' / ');
      if (!textElement3.textContent) {
          conditionalDiv3.style.display = 'none';
      }
  }
  function resetButton12() {
      button12.style.backgroundColor = '#1E2024';
      button12.style.color = '#FFFFFF';
      container12.style.border = '1px solid transparent';
      var values = textElement3.textContent.split('/').filter(v => v.trim() !== 'Slack');
      textE
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

