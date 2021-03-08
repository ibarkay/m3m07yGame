let w; let
  h;

function pageSetup() {
  setTimeout(pageSetup2, 250);
}

function pageSetup2() {
  pageResize();

  // top most layer...
  const c7Nd = document.getElementById('c7');
  c7Nd.addEventListener('mousemove', captureMouse);
}

function pageResize() {
  w = window.innerWidth;
  h = window.innerHeight;

  drawTexture1(1, '#c2c2d6');
  drawTexture1(2, '#a3a3c2');
  drawTexture1(3, '#7575a3');
  drawTexture1(4, '#47476b');
  drawTexture1(5, '#ffdd99');
  drawTexture1(6, '#ffcc66');
  drawTextureText(7, '#e0e0eb', 'Texture');
}

window.addEventListener('load', pageSetup);
window.addEventListener('resize', pageResize);

function textureSetup(nIdx, nOffset) {
  const cvs = document.getElementById(`c${nIdx}`);
  cvs.style.width = `${w - nOffset}px`;
  cvs.style.height = `${h - nOffset}px`;
  cvs.width = (w - nOffset);
  cvs.height = (h - nOffset);
  const vwContext = cvs.getContext('2d');

  return vwContext;
} // end of function textureSetup()

function drawTexture1(nIdx, sColor) {
  const vwContext = textureSetup(nIdx, 10);

  // vwContext.globalAlpha=0;
  vwContext.fillStyle = 'rgba(255, 0, 0, 0)';
  vwContext.fillRect(0, 0, w - 2, h - 2);
  // console.log("got here 1")
  //  vwContext.globalAlpha=1;
  // console.log("got here 2")

  vwContext.fillStyle = sColor;

  const nTotalDots = 32000;

  for (let n = 0; n < nTotalDots; n++) {
    const x1 = rnd(w - 12);
    const y1 = rnd(h - 12);
    let sz = rnd(3);

    if (sz < 0.5) {
      sz = 0.5;
    }
    vwContext.fillRect(x1, y1, sz, sz);
  } // next n
  // console.log("got here 3")
} // end of function drawTexture1()

let nTextWidth = 0;

function drawTextureText(nIdx, sBgColor, sText) {
  const vwContext = textureSetup(nIdx, 0);
  let nFontSize = h * 0.8;

  vwContext.fillStyle = sBgColor;
  const nRectWidth = w - 2;
  const nRectHeight = h - 2;
  vwContext.fillRect(0, 0, nRectWidth, nRectHeight);

  nTextWidth = getTextWidth(sText, nFontSize);
  const nMaxTextWidth = nRectWidth - 40;

  if (nTextWidth > nMaxTextWidth) {
    const pct = nMaxTextWidth / nTextWidth;
    nFontSize *= pct;
    nTextWidth = getTextWidth(sText, nFontSize);
  } // end if

  const nTop = nFontSize + 30; // ???

  vwContext.font = `${nFontSize}px Alfa Slab One`;

  vwContext.fillStyle = 'black';
  vwContext.textAlign = 'center';

  vwContext.strokeStyle = '#47476b';
  vwContext.lineWidth = '8';
  vwContext.strokeText(sText, w / 2, nTop);

  vwContext.globalCompositeOperation = 'xor';
  vwContext.fillText(sText, w / 2, nTop);
} // end of function drawTextureText()

function rnd(nNum) {
  return Math.floor(Math.random() * nNum);
} // end of function rnd()

function getTextWidth(sText, nFontSize) {
  const testNd = document.getElementById('test');
  testNd.style.fontSize = `${nFontSize}px`;
  testNd.innerText = sText;

  return testNd.clientWidth + 1;
} // end of function

function captureMouse(evt) {
  const mouseInfoNd = document.getElementById('mouseInfo');
  let sInfo = `${evt.clientX} x ${evt.clientY}`;
  sInfo = `${sInfo}&nbsp;&nbsp;&nbsp;textWidth:${nTextWidth}px`;
  mouseInfoNd.innerHTML = sInfo;

  const mX = evt.clientX;
  const mY = evt.clientY;
  const nRectWidth = w - 2;
  const nRectHeight = h - 2;
  const xPct = mX / nRectWidth;
  const yPct = mY / nRectHeight;

  const nMaxImgShift = 120; // 80

  let nXOffset1; let nXOffset2; let
    nXOffset3;
  let nXOffset4; let nXOffset5; let
    nXOffset6;
  let nXOffset7;

  let nYOffset1; let nYOffset2; let
    nYOffset3;
  let nYOffset4; let nYOffset5; let
    nYOffset6;
  let nYOffset7;

  nXOffset6 = nMaxImgShift * xPct;
  nXOffset1 = nXOffset6 * -1;

  nYOffset6 = nMaxImgShift * yPct;
  nYOffset1 = nYOffset6 * -1;

  const c1Nd = document.getElementById('c1');
  const c2Nd = document.getElementById('c2');
  const c3Nd = document.getElementById('c3');
  const c4Nd = document.getElementById('c4');
  const c5Nd = document.getElementById('c5');
  const c6Nd = document.getElementById('c6');

  c1Nd.style.transform = `translate(${nXOffset1}px,${nYOffset1}px)`;
  c6Nd.style.transform = `translate(${nXOffset6}px,${nYOffset6}px)`;

  const nSpacingX = nXOffset6 / 3;
  const nSpacingY = nYOffset6 / 3;

  nXOffset5 = nXOffset6 - nSpacingX;
  nYOffset5 = nYOffset6 - nSpacingY;

  nXOffset2 = nXOffset1 + nSpacingX;
  nYOffset2 = nYOffset1 + nSpacingY;

  c5Nd.style.transform = `translate(${nXOffset5}px,${nYOffset5}px)`;
  c2Nd.style.transform = `translate(${nXOffset2}px,${nYOffset2}px)`;

  nXOffset4 = nXOffset5 - nSpacingX;
  nYOffset4 = nYOffset5 - nSpacingY;

  nXOffset3 = nXOffset2 + nSpacingX;
  nYOffset3 = nYOffset2 + nSpacingY;

  c4Nd.style.transform = `translate(${nXOffset4}px,${nYOffset4}px)`;
  c3Nd.style.transform = `translate(${nXOffset3}px,${nYOffset3}px)`;
} // end of function
