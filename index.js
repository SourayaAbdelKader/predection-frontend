const name = document.querySelector('[name="name"]');


async function getText(file) {
    let x = await fetch(file);
    let y = await x.text();
    myDisplay(y);
  }