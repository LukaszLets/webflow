document.addEventListener('DOMContentLoaded', function () {
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
    var dalejValue1 = '';
    var dalejValue2 = '';
    var dalejValue3 = '';
    var dalejBtn1 = document.getElementById('dalej1');
    var dalejBtn2 = document.getElementById('dalej2');

    dalejBtn1.style.pointerEvents = 'none';
    dalejBtn2.style.pointerEvents = 'none';
    dalejBtn1.style.color = 'white';
    dalejBtn2.style.color = 'white';
    dalejBtn1.innerHTML = 'Zaznacz przynajmniej jedną opcję';
    dalejBtn2.innerHTML = 'Zaznacz przynajmniej jedną opcję';
  
    var container1 = document.getElementById('container1');
    var container2 = document.getElementById('container2');
    var container3 = document.getElementById('container3');
    var container4 = document.getElementById('container4');
    var container5 = document.getElementById('container5');
    var container6 = document.getElementById('container6');
    var container7 = document.getElementById('container7');
    var container8 = document.getElementById('container8');
    var container9 = document.getElementById('container9');
    var container10 = document.getElementById('container10');
    var container11 = document.getElementById('container11');
    var container12 = document.getElementById('container12');
  
    var textElement = document.getElementById('displayText');
    var conditionalDiv = document.getElementById('conditionalDiv');
    var textElement2 = document.getElementById('displayText2');
    var conditionalDiv2 = document.getElementById('conditionalDiv2');
    var textElement3 = document.getElementById('displayText3');
    var conditionalDiv3 = document.getElementById('conditionalDiv3');
  
    var resetIcon = document.getElementById('resetIcon');
  
  
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

    var savetext1 = document.getElementById('savetext1');
    savetext1.style.color = 'white';
    var savetext2 = document.getElementById('savetext2');
    savetext2.style.color = 'white';
    var savetext3 = document.getElementById('savetext3');
    savetext3.style.color = 'white';
    var savetext4 = document.getElementById('savetext4');
    savetext4.style.color = 'white';
    var savetext5 = document.getElementById('savetext5');
    savetext5.style.color = 'white';
    var savetext6 = document.getElementById('savetext6');
    savetext6.style.color = 'white';
    var savetext7 = document.getElementById('savetext7');
    savetext7.style.color = 'white';
    var savetext8 = document.getElementById('savetext8');
    savetext8.style.color = 'white';
    var savetext9 = document.getElementById('savetext9');
    savetext9.style.color = 'white';
    var savetext10 = document.getElementById('savetext10');
    savetext10.style.color = 'white';
    var savetext11 = document.getElementById('savetext11');
    savetext11.style.color = 'white';
    var savetext12 = document.getElementById('savetext12');
    savetext12.style.color = 'white';


  
    button1.addEventListener('click', function () {
      setTextAndStyles('Pipedrive', button1, container1, savetext1);
    });
    button2.addEventListener('click', function () {
      setTextAndStyles('Hubspot', button2, container2, savetext2);
    });
    button3.addEventListener('click', function () {
      setTextAndStyles('Livespace', button3, container3, savetext3);
    });
    button4.addEventListener('click', function () {
      if (!button4Clicked) {
        setTextAndStyles2('4', button4, container4, savetext4);
        button4Clicked = true;
      } else {
        resetButton4();
        button4Clicked = false;
      }
    });
    button5.addEventListener('click', function () {
      if (!button5Clicked) {
        setTextAndStyles2('5', button5, container5, savetext5);
        button5Clicked = true;
      } else {
        resetButton5();
        button5Clicked = false;
      }
    });
    button6.addEventListener('click', function () {
      if (!button6Clicked) {
        setTextAndStyles3('6', button6, container6, savetext6);
        button6Clicked = true;
      } else {
        resetButton6();
        button6Clicked = false;
      }
    });
    button7.addEventListener('click', function () {
      if (!button7Clicked) {
        setTextAndStyles3('7', button7, container7, savetext7);
        button7Clicked = true;
      } else {
        resetButton7();
        button7Clicked = false;
      }
    });
    button8.addEventListener('click', function () {
      if (!button8Clicked) {
        setTextAndStyles3('8', button8, container8, savetext8);
        button8Clicked = true;
      } else {
        resetButton8();
        button8Clicked = false;
      }
    });
    button9.addEventListener('click', function () {
      if (!button9Clicked) {
        setTextAndStyles4('9', button9, container9, savetext9);
        button9Clicked = true;
      } else {
        resetButton9();
        button9Clicked = false;
      }
    });
    button10.addEventListener('click', function () {
      if (!button10Clicked) {
        setTextAndStyles4('10', button10, container10, savetext10);
        button10Clicked = true;
      } else {
        resetButton10();
        button10Clicked = false;
      }
    });
    button11.addEventListener('click', function () {
      if (!button11Clicked) {
        setTextAndStyles4('11', button11, container11, savetext11);
        button11Clicked = true;
      } else {
        resetButton11();
        button11Clicked = false;
      }
    });
    button12.addEventListener('click', function () {
      if (!button12Clicked) {
        setTextAndStyles4('12', button12, container12, savetext12);
        button12Clicked = true;
      } else {
        resetButton12();
        button12Clicked = false;
      }
    });
    resetIcon.addEventListener('click', function () {
      resetAllStyles();
      resetAllStylesForButtons4and5();
      resetAllStylesForButtons678();
    });
  
    function setTextAndStyles(value, clickedButton, clickedContainer, text) {
      textElement.textContent = value;
      tekstElement.textContent = value;
      tekstElement2.textContent = value;
      dalejValue1 = value;
      if (dalejValue1 !== null) {
        dalejBtn1.style.pointerEvents = 'auto';
        dalejBtn1.innerHTML = 'Przechodzę dalej';
        dalejBtn1.style.color = 'black';
        dalejBtn1.style.background = '#00FF9F';
        dalejBtn1.style.border = '0px solid #0000FF';
      }
      conditionalDiv.style.display = 'block';
      clickedButton.style.backgroundColor = '#00FF9F';
      clickedContainer.style.border = '1px solid #00FF9F';
      text.style.color = '#000000';
      let allButtons = [button1, button2, button3];
      allButtons.forEach((btn) => {
        if (btn !== clickedButton) {
          btn.style.backgroundColor = '#1E2024';
          btn.style.border = 'none !important';
          btn.style.color = '#FFFFFF !important';
        }
      });
      let allContainers = [container1, container2, container3];
      allContainers.forEach((ctn) => {
        if (ctn !== clickedContainer) {
            ctn.style.border = '0px solid #00FF9F';
        }
      });
      let allTxts = [savetext1, savetext2, savetext3];
      allTxts.forEach((txts) => {
        if (txts !== text) {
            txts.style.color = '#ffffff';
        }
      })
    }
  
    function setTextAndStyles2(value, clickedButton, clickedContainer, text) {
      if (textElement2.textContent !== '' && value !== '') {
        textElement2.textContent += ' / ';
      }
      if (value === '4') {
        textElement2.textContent += 'SMS';
      } else if (value === '5') {
        textElement2.textContent += 'E-mail';
      }
      tekstElement3.textContent = textElement2.textContent;
      dalejValue2 = textElement2.textContent;
      if (dalejValue2 !== '' && dalejValue3 !== '') {
        dalejBtn2.style.pointerEvents = 'auto';
        dalejBtn2.innerHTML = 'Przechodzę dalej';
        dalejBtn2.style.color = 'black';
        dalejBtn2.style.background = '#00FF9F';
        dalejBtn2.style.border = '0px solid #0000FF';
      }
      conditionalDiv2.style.display = 'block';
      clickedButton.style.backgroundColor = '#00FF9F';
      clickedContainer.style.border = '1px solid #00FF9F';
      text.style.color = '#000000';
      
      allButtons.forEach((btn) => {
        if (btn !== clickedButton) {
          btn.style.backgroundColor = '#1E2024';
          btn.style.border = 'none !important';
          btn.style.color = '#FFFFFF !important';
        }
      });

      let allTxts = [savetext1, savetext2, savetext3];
      allTxts.forEach((txts) => {
        if (txts !== text) {
            txts.style.color = '#ffffff';
        }
    })
    }
  
    function setTextAndStyles3(value, clickedButton, clickedContainer, text) {
      if (textElement3.textContent !== '' && value !== '') {
        textElement3.textContent += ' / ';
      }
      if (value === '6') {
        textElement3.textContent += 'SMS';
      } else if (value === '7') {
        textElement3.textContent += 'E-mail';
      } else if (value === '8') {
        textElement3.textContent += 'Slack';
      }
      tekstElement4.textContent = textElement3.textContent;
      dalejValue3 = textElement3.textContent;
      if (dalejValue2 !== '' && dalejValue3 !== '') {
        dalejBtn2.style.pointerEvents = 'auto';
        dalejBtn2.innerHTML = 'Przechodzę dalej';
        dalejBtn2.style.color = 'black';
        dalejBtn2.style.background = '#00FF9F';
        dalejBtn2.style.border = '0px solid #0000FF';
      }
      conditionalDiv3.style.display = 'block';
      clickedButton.style.backgroundColor = '#00FF9F';
      clickedContainer.style.border = '1px solid #00FF9F';
      text.style.color = '#ACB0B9 !important';
    }
    function setTextAndStyles4(value, clickedButton, clickedContainer, text) {
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
      text.style.color = '#ACB0B9 !important';
    }
  
    function resetButton4() {
      button4.style.backgroundColor = '#1E2024';
      button4.style.color = '#FFFFFF';
      container4.style.border = '1px solid transparent';
      var values = textElement2.textContent
        .split('/')
        .filter((v) => v.trim() !== 'SMS');
      textElement2.textContent = values.join(' / ');
      tekstElement3.textContent = values.join(' / ');
      dalejValue2 = values.join(' / ');
      if (dalejValue2 === '' || dalejValue3 === '') {
          dalejBtn2.style.pointerEvents = 'none';
          dalejBtn2.innerHTML = 'Zaznacz przynajmniej jedną opcję';
          dalejBtn2.style.color = 'white';
          dalejBtn2.style.background = 'none';
          dalejBtn2.style.border = '1px solid #FFFFFF';
        }
      if (!textElement2.textContent) {
        conditionalDiv2.style.display = 'none';
      }
    }
    function resetButton5() {
      button5.style.backgroundColor = '#1E2024';
      button5.style.color = '#FFFFFF';
      container5.style.border = '1px solid transparent';
      var values = textElement2.textContent
        .split('/')
        .filter((v) => v.trim() !== 'E-mail');
      textElement2.textContent = values.join(' / ');
      tekstElement3.textContent = values.join(' / ');
      dalejValue2 = values.join(' / ');
      if (dalejValue2 === '' || dalejValue3 === '') {
          dalejBtn2.style.pointerEvents = 'none';
          dalejBtn2.innerHTML = 'Zaznacz przynajmniej jedną opcję';
          dalejBtn2.style.color = 'white';
          dalejBtn2.style.background = 'none';
          dalejBtn2.style.border = '1px solid #FFFFFF';
      }
      if (!textElement2.textContent) {
        conditionalDiv2.style.display = 'none';
      }
    }
    function resetButton6() {
      button6.style.backgroundColor = '#1E2024';
      button6.style.color = '#FFFFFF';
      container6.style.border = '1px solid transparent';
      // Clear the entire content of textElement2 and add remaining values
      var values = textElement3.textContent
        .split('/')
        .filter((v) => v.trim() !== 'SMS');
      textElement3.textContent = values.join(' / ');
      tekstElement4.textContent = values.join(' / ');
      dalejValue3 = values.join(' / ');
      if (dalejValue2 === '' || dalejValue3 === '') {
          dalejBtn2.style.pointerEvents = 'none';
          dalejBtn2.innerHTML = 'Zaznacz przynajmniej jedną opcję';
          dalejBtn2.style.color = 'white';
          dalejBtn2.style.background = 'none';
          dalejBtn2.style.border = '1px solid #FFFFFF';
      }
      if (!textElement3.textContent) {
        conditionalDiv3.style.display = 'none';
      }
    }
    function resetButton7() {
      button7.style.backgroundColor = '#1E2024';
      button7.style.color = '#FFFFFF';
      container7.style.border = '1px solid transparent';
      var values = textElement3.textContent
        .split('/')
        .filter((v) => v.trim() !== 'E-mail');
      textElement3.textContent = values.join(' / ');
      tekstElement4.textContent = values.join(' / ');
      dalejValue3 = values.join(' / ');
      if (dalejValue2 === '' || dalejValue3 === '') {
          dalejBtn2.style.pointerEvents = 'none';
          dalejBtn2.innerHTML = 'Zaznacz przynajmniej jedną opcję';
          dalejBtn2.style.color = 'white';
          dalejBtn2.style.background = 'none';
          dalejBtn2.style.border = '1px solid #FFFFFF';
      }
      if (!textElement3.textContent) {
        conditionalDiv3.style.display = 'none';
      }
    }
    function resetButton8() {
      button8.style.backgroundColor = '#1E2024';
      button8.style.color = '#FFFFFF';
      container8.style.border = '1px solid transparent';
      var values = textElement3.textContent
        .split('/')
        .filter((v) => v.trim() !== 'Slack');
      textElement3.textContent = values.join(' / ');
      tekstElement4.textContent = values.join(' / ');
      dalejValue3 = values.join(' / ');
      if (dalejValue2 === '' || dalejValue3 === '') {
          dalejBtn2.style.pointerEvents = 'none';
          dalejBtn2.innerHTML = 'Zaznacz przynajmniej jedną opcję';
          dalejBtn2.style.color = 'white';
          dalejBtn2.style.background = 'none';
          dalejBtn2.style.border = '1px solid #FFFFFF';
      }
      if (!textElement3.textContent) {
        conditionalDiv3.style.display = 'none';
      }
    }
    function resetButton9() {
      button9.style.backgroundColor = '#1E2024';
      button9.style.color = '#FFFFFF';
      container9.style.border = '1px solid transparent';
      var values = textElement3.textContent
        .split('/')
        .filter((v) => v.trim() !== 'Slack');
      textElement3.textContent = values.join(' / ');
      if (!textElement3.textContent) {
        conditionalDiv3.style.display = 'none';
      }
    }
    function resetButton10() {
      button10.style.backgroundColor = '#1E2024';
      button10.style.color = '#FFFFFF';
      container10.style.border = '1px solid transparent';
      var values = textElement3.textContent
        .split('/')
        .filter((v) => v.trim() !== 'Slack');
      textElement3.textContent = values.join(' / ');
      if (!textElement3.textContent) {
        conditionalDiv3.style.display = 'none';
      }
    }
    function resetButton11() {
      button11.style.backgroundColor = '#1E2024';
      button11.style.color = '#FFFFFF';
      container11.style.border = '1px solid transparent';
      var values = textElement3.textContent
        .split('/')
        .filter((v) => v.trim() !== 'Slack');
      textElement3.textContent = values.join(' / ');
      if (!textElement3.textContent) {
        conditionalDiv3.style.display = 'none';
      }
    }
    function resetButton12() {
      button12.style.backgroundColor = '#1E2024';
      button12.style.color = '#FFFFFF';
      container12.style.border = '1px solid transparent';
      var values = textElement3.textContent
        .split('/')
        .filter((v) => v.trim() !== 'Slack');
      textElement3.textContent = values.join(' / ');
      if (!textElement3.textContent) {
        conditionalDiv3.style.display = 'none';
      }
    }
  
    function resetAllStyles() {
      let buttons = [button1, button2, button3];
      let containers = [container1, container2, container3];
      let texts = [savetext1, savetext2, savetext3];
      buttons.forEach((btn) => {
        btn.style.backgroundColor = '#1E2024';
        btn.style.color = '#FFFFFF';
      });
      containers.forEach((cont) => {
        cont.style.border = 'none !important';
      });
      texts.forEach((txt) => {
        txt.style.color = '#FFFFFF !important';
      })
      textElement.textContent = '';
      conditionalDiv.style.display = 'none';
      tekstElement.textContent = '';
    }
    function resetAllStylesForButtons4and5() {
      let buttons = [button4, button5];
      let containers = [container4, container5];
      let texts = [savetext4, savetext5];
      buttons.forEach((btn) => {
        btn.style.backgroundColor = '#1E2024';
        btn.style.color = '#FFFFFF';
      });
      containers.forEach((cont) => {
        cont.style.border = '1px solid transparent';
      });
      texts.forEach((txt) => {
        txt.style.color = '#FFFFFF !important';
      })
      textElement2.textContent = '';
      conditionalDiv2.style.display = 'none';
    }
    function resetAllStylesForButtons678() {
      let buttons = [button6, button7, button8];
      let containers = [container6, container7, container8];
      buttons.forEach((btn) => {
        btn.style.backgroundColor = '#1E2024';
        btn.style.color = '#FFFFFF';
      });
      containers.forEach((cont) => {
        cont.style.border = '1px solid transparent';
      });
      textElement3.textContent = '';
      conditionalDiv3.style.display = 'none';
    }
    resetAllStyles();
    resetAllStylesForButtons4and5();
    resetAllStylesForButtons678();
  });
