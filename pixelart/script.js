const colors = document.getElementsByClassName('color');

const colorBlack = document.querySelector('.black');
colorBlack.style.backgroundColor = 'rgb(0,0,0)';
const randomGeneratorcolor = (max) => Math.floor(Math.random() * (max + 1));
const rgbColorGenerator = () => {
  const r1 = randomGeneratorcolor(255);
  const g1 = randomGeneratorcolor(255);
  const b1 = randomGeneratorcolor(255);
  return `rgb(${r1},${g1},${b1}`;
};

const randomRgb = () => {
  colors[1].style.backgroundColor = rgbColorGenerator();
  colors[2].style.backgroundColor = rgbColorGenerator();
  colors[3].style.backgroundColor = rgbColorGenerator();
  // eslint-disable-next-line max-len
  const allColorsSet = { c1: colors[1].style.backgroundColor, c2: colors[2].style.backgroundColor, c3: colors[3].style.backgroundColor };
  localStorage.setItem('colorPalette', JSON.stringify(allColorsSet));
};

const botaoAleatorias = document.getElementById('button-random-color');
botaoAleatorias.addEventListener('click', randomRgb);

const savePixelBoard = () => {
  const pixelElements = document.getElementsByClassName('pixel');
  const pixelBoard = {};

  for (let index = 0; index < pixelElements.length; index += 1) {
    const pixel = pixelElements[index];
    const rowIndex = pixel.parentNode.dataset.rowIndex;
    const columnIndex = pixel.dataset.columnIndex;
    const backgroundColor = pixel.style.backgroundColor;

    if (!pixelBoard[rowIndex]) {
      pixelBoard[rowIndex] = {};
    }

    pixelBoard[rowIndex][columnIndex] = backgroundColor;
  }

  localStorage.setItem('pixelBoard', JSON.stringify(pixelBoard));
};


const loadPixelBoard = () => {
  const pixelElements = document.getElementsByClassName('pixel');
  const pixelBoard = JSON.parse(localStorage.getItem('pixelBoard'));

  if (!pixelBoard) {
    return;
  }

  for (let index = 0; index < pixelElements.length; index += 1) {
    const pixel = pixelElements[index];
    const rowIndex = pixel.parentNode.dataset.rowIndex;
    const columnIndex = pixel.dataset.columnIndex;

    if (pixelBoard[rowIndex] && pixelBoard[rowIndex][columnIndex]) {
      pixel.style.backgroundColor = pixelBoard[rowIndex][columnIndex];
    } else {
      pixel.style.backgroundColor = 'white';
    }
  }
};

const colorField = (event) => {
  const { target } = event;
  const color = document.querySelector('.selected');
  target.style.backgroundColor = color.style.backgroundColor;
  savePixelBoard();
};

const gradePixel = document.getElementById('pixel-board');
const PixelsGenerator = () => {
  for (let index = 0; index < 5; index += 1) {
    const gradeRow = document.createElement('div');
    gradeRow.classList.add('inLine');
    gradePixel.appendChild(gradeRow);
  for (let index2 = 0; index2 < 5; index2 += 1) {
      const GradeColum = document.createElement('div');

      GradeColum.classList.add('pixel');
      GradeColum.dataset.columnIndex = index2; 
      document.getElementsByClassName('inLine')[index].appendChild(GradeColum);
      document.getElementsByClassName('inLine')[index].appendChild(GradeColum);

      document.getElementsByClassName('inLine')[index].appendChild(GradeColum);

      document.getElementsByClassName('inLine')[index].children[index2].style.backgroundColor = 'white';

      document.getElementsByClassName('inLine')[index].children[index2].addEventListener('click', colorField);
    }
  }
  loadPixelBoard();
};

colorBlack.classList.add('selected');

const SelectChanging = (event) => {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove('selected');
  }
  const selectUs = event.target;
  selectUs.classList.add('selected');
};

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', SelectChanging);
}

const GradeChange = () => {
  for (let index = 0; index < 25; index += 1) {
    document.getElementsByClassName('pixel')[index].style.backgroundColor = 'white';
  }
};
const gradeClear = document.getElementById('clear-board');
gradeClear.addEventListener('click', GradeChange);

const gradeSizer = document.getElementById('board-size');
const pixel = document.getElementsByClassName('pixel');
const gradeBoarder = () => {
  if (gradeSizer.value > 5 && gradeSizer.value <= 50) {
    for (let index = 0; index < 25; index += 1) {
      pixel[index].style.height = `${gradeSizer.value}px`;
      pixel[index].style.width = `${gradeSizer.value}px`;
    }
  }
};

const gradeGenerator = document.getElementById('generate-board');
gradeGenerator.addEventListener('click', gradeBoarder);

window.onload = () => {
  if (localStorage.getItem('colorPalette') === null) randomRgb();
  else {
    const allColors = JSON.parse(localStorage.getItem('colorPalette'));
    colors[1].style.backgroundColor = allColors.c1;
    colors[2].style.backgroundColor = allColors.c2;
    colors[3].style.backgroundColor = allColors.c3;
  }
  PixelsGenerator();
  loadPixelBoard();
};
