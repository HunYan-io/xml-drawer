module.exports = (createCanvas, concatMatrix, enhanceContext, cxform, place, tocolor, drawMorphPath, useRatio, drawPath, shadeColor, colorPalette) => { var width=44,height=84;
var canvas=createCanvas(width,height);

var ctx=canvas.getContext("2d");
enhanceContext(ctx);
var ctrans = new cxform(0,0,0,0,255,255,255,255);
function shape268(ctx,ctrans,frame,ratio,time){var pathData="M 4 -925 L 4 11";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=1.0;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M -471 -1309 Q -345 -1082 -33 -1063 161 -1240 219 -1382 266 -1498 215 -1561 168 -1618 80 -1600 -11 -1582 -61 -1494 -97 -1608 -214 -1672 -87 -1667 -31 -1569 76 -1650 180 -1655 L 187 -1655 Q 321 -1590 315 -1442 319 -1246 99 -1094 -7 -1027 -109 -1021 -235 -1052 -339 -1135 -439 -1215 -471 -1309 M 42 -1024 L 106 -897 Q 70 -919 44 -906 L 20 -881 Q -33 -845 -78 -876 L -34 -1008 -6 -1006 -34 -892 -6 -1006 21 -1015 42 -1024 M 51 -955 L 21 -1015 51 -955";ctx.fillStyle=tocolor(ctrans.apply([135,1,17,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M -214 -1672 Q -97 -1608 -61 -1494 -11 -1582 80 -1600 168 -1618 215 -1561 266 -1498 219 -1382 161 -1240 -33 -1063 -345 -1082 -471 -1309 -489 -1358 -489 -1411 -485 -1545 -432 -1609 -382 -1670 -214 -1672 M -421 -1409 Q -430 -1396 -430 -1378 -429 -1361 -420 -1348 -411 -1336 -399 -1336 -386 -1338 -378 -1350 -368 -1364 -369 -1382 -369 -1400 -378 -1411 -388 -1423 -401 -1422 -414 -1421 -421 -1409 M -240 -1603 Q -253 -1623 -281 -1625 -309 -1625 -336 -1607 -365 -1589 -375 -1562 -387 -1535 -375 -1514 -363 -1494 -334 -1494 -306 -1493 -277 -1511 -251 -1529 -239 -1557 -228 -1582 -240 -1603";drawPath(ctx,pathData,false);ctx.fillStyle=tocolor(ctrans.apply([189,19,39,1]));ctx.fill("evenodd");ctx.save();ctx.clip();ctx.transform(0.0269927978515625,-0.001678466796875,5.4931640625E-4,0.027496337890625,-245,-1528);var grd=ctx.createRadialGradient(-32256.0,0,0,0,0,16384);grd.addColorStop(0.0,tocolor(ctrans.apply([255,66,56,1])));grd.addColorStop(1.0,tocolor(ctrans.apply([189,19,39,1])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx.restore();var pathData="M -109 -1021 Q -7 -1027 99 -1094 319 -1246 315 -1442 321 -1590 187 -1655 L 274 -1645 Q 448 -1534 384 -1316 299 -1121 42 -1024 L 21 -1015 -6 -1006 -34 -1008 -109 -1021";var grd=ctx.createLinearGradient(274.0,-1422.5,472.0,-1319.5);grd.addColorStop(0.0,tocolor(ctrans.apply([135,1,17,1])));grd.addColorStop(1.0,tocolor(ctrans.apply([180,130,155,1])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M -240 -1603 Q -228 -1582 -239 -1557 -251 -1529 -277 -1511 -306 -1493 -334 -1494 -363 -1494 -375 -1514 -387 -1535 -375 -1562 -365 -1589 -336 -1607 -309 -1625 -281 -1625 -253 -1623 -240 -1603 M -421 -1409 Q -414 -1421 -401 -1422 -388 -1423 -378 -1411 -369 -1400 -369 -1382 -368 -1364 -378 -1350 -386 -1338 -399 -1336 -411 -1336 -420 -1348 -429 -1361 -430 -1378 -430 -1396 -421 -1409";ctx.fillStyle=tocolor(ctrans.apply([255,97,91,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M -471 -1309 Q -439 -1215 -339 -1135 -235 -1052 -109 -1021 M 187 -1655 L 180 -1655 Q 76 -1650 -31 -1569 -87 -1667 -214 -1672 -382 -1670 -432 -1609 -485 -1545 -489 -1411 -489 -1358 -471 -1309 M 187 -1655 L 274 -1645 Q 448 -1534 384 -1316 299 -1121 42 -1024 L 106 -897 Q 70 -919 44 -906 L 20 -881 Q -33 -845 -78 -876 L -34 -1008 -109 -1021 M 42 -1024 L 21 -1015 51 -955 M -6 -1006 L -34 -1008 M -6 -1006 L -34 -892 M 21 -1015 L -6 -1006";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite269(ctx,ctrans,frame,ratio,time){ctx.save();ctx.transform(1,0,0,1,24.6,83.75);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(shape268,canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()}var frame=-1;var time=0;var frames=[];frames.push(0);var backgroundColor="#ffffff00";var originalWidth=44;var originalHeight=84;function nextFrame(ctx,ctrans){var oldframe=frame;frame=(frame+1)%frames.length;if(frame==oldframe){time++}else{time=0};drawFrame()}function drawFrame(){ctx.fillStyle=backgroundColor;ctx.fillRect(0,0,canvas.width,canvas.height);ctx.save();ctx.transform(canvas.width/originalWidth,0,0,canvas.height/originalHeight,0,0);sprite269(ctx,ctrans,frames[frame],0,time);ctx.restore()}nextFrame(ctx,ctrans);
return [canvas,width,height];}