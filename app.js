console.log('Cisko solver init')

chrome.runtime.sendMessage({message: "get_questions"}, (response) => {
  console.log('got question list', response.questions);
  const res = response.questions;
  document.addEventListener('keyup', (e) => {
    if (e.code === 'KeyS') {
      console.log('button pressed')
      let qId = document.querySelector("#questionbarcontainer").querySelector('li.current').getAttribute('data-ident');
      // let qs = document.querySelector(`.question[data-ident='${qId}'] .item-long-description`).innerText.split(' ').slice(1).join(' ');
      let qs = document.querySelector(`.question[data-ident='${qId}'] .mattext`).innerText.replace(/[^\w]|[\r\n]/gi, '');
      if (res[qs] && res[qs].length) {
        console.log('did it');
        for (let ans of res[qs])
          for (let i = 0; i < document.querySelector(`.question[data-ident='${qId}'] .coreContent`).children.length; ++i)
            if (ans == document.querySelector(`.question[data-ident='${qId}'] .coreContent`).children[i].innerText.replace(/[^\w]|[\r\n]/gi, ''))
              document.querySelector(`.question[data-ident='${qId}'] .coreContent`).children[i].querySelector('input').checked=true
      } 
      else if (typeof res[qs] == 'undefined') {
        console.log('trying to find');
        let values = Object.values(res);
        for (let i = 0; i < document.querySelector(`.question[data-ident='${qId}'] .coreContent`).children.length; i++) {
          for (let j = 0; j < values.length; j++) {
            for (let k = 0; k < values[j].length; k++) {
              let a = values[j][k];
              if (qs == a)
                document.querySelector(`.question[data-ident='${qId}'] .coreContent`).children[i].querySelector('input').checked=true
            }
            
          }
        }
      }
    }
  });
});