module.exports = (createCanvas, concatMatrix, enhanceContext, cxform, place, tocolor, drawMorphPath, useRatio, drawPath, shadeColor, colorPalette) => { var width=24,height=38;
var canvas=createCanvas(width,height);

var ctx=canvas.getContext("2d");
enhanceContext(ctx);
var ctrans = new cxform(0,0,0,0,255,255,255,255);
function shape337(ctx,ctrans,frame,ratio,time){var pathData="M 171 -274 Q 99 -194 -2 -194 -104 -194 -176 -274 -248 -355 -248 -469 -248 -583 -176 -664 -104 -744 -2 -744 99 -744 171 -664 243 -583 243 -469 243 -355 171 -274";drawPath(ctx,pathData,false);ctx.fillStyle=tocolor(ctrans.apply([255,221,135,0.0]));ctx.fill("evenodd");ctx.save();ctx.clip();ctx.transform(0.014251708984375,0,0,0.016632080078125,-2,-469);var grd=ctx.createRadialGradient(0.0,0,0,0,0,16384);grd.addColorStop(0.0,tocolor(ctrans.apply([255,253,245,0.8784314])));grd.addColorStop(0.14901960784313725,tocolor(ctrans.apply([255,210,2,0.7019608])));grd.addColorStop(0.39215686274509803,tocolor(ctrans.apply([247,147,49,0.5411765])));grd.addColorStop(0.615686274509804,tocolor(ctrans.apply([252,200,111,0.14117648])));grd.addColorStop(1.0,tocolor(ctrans.apply([255,221,135,0.0])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx.restore();var pathData="M 10 -389 Q -83 -402 -68 -463 -52 -525 -9 -563 41 -626 14 -699 74 -607 29 -535 27 -518 37 -501 L 64 -464 Q 89 -429 75 -413 60 -396 32 -395 58 -424 35 -447 -4 -481 -5 -523 -17 -465 -7 -424 -36 -431 -25 -479 -68 -421 11 -389 L 10 -389";var grd=ctx.createLinearGradient(-4.75,-572.5,-5.25,-369.5);grd.addColorStop(0.0,tocolor(ctrans.apply([243,82,37,1])));grd.addColorStop(0.9882352941176471,tocolor(ctrans.apply([255,227,98,1])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 11 -389 L 49 -386 Q 69 -380 70 -356 72 -338 102 -297 L 102 -289 91 -288 Q 75 -288 65 -297 L 42 -327 Q 52 -270 61 -254 L 76 -237 82 -221 90 -204 88 -191 85 -177 75 -186 Q 67 -196 58 -195 L 56 -160 60 -109 Q 60 -98 50 -87 40 -75 40 -66 L 42 -48 48 -32 Q 58 -18 81 -10 L 107 11 112 14 29 13 20 8 Q 13 4 -2 2 L -27 0 -25 -7 -23 -23 -51 -3 -70 13 Q -83 19 -65 -41 -47 -102 -48 -110 L -48 -147 -51 -161 Q -48 -170 -48 -182 L -45 -198 -40 -213 -40 -220 -40 -236 -40 -271 -50 -229 -51 -227 Q -61 -206 -79 -206 L -89 -209 -78 -241 -70 -268 -57 -307 -54 -310 -28 -334 -23 -340 Q -23 -348 -33 -355 -44 -362 -44 -375 -36 -388 -14 -388 L 10 -389 11 -389";var grd=ctx.createLinearGradient(4.25,-371.25,3.75,-0.75);grd.addColorStop(0.0,tocolor(ctrans.apply([252,252,252,1])));grd.addColorStop(0.9882352941176471,tocolor(ctrans.apply([226,222,218,1])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 32 -395 L 11 -389 Q -68 -421 -25 -479 -36 -431 -7 -424 -17 -465 -5 -523 -4 -481 35 -447 58 -424 32 -395";ctx.fillStyle=tocolor(ctrans.apply([255,241,180,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 102 -289 Q 98 -280 88 -278 75 -276 75 -247 L 76 -237 61 -254 Q 52 -270 42 -327 L 65 -297 Q 75 -288 91 -288 L 102 -289 M 85 -177 L 79 -111 Q 72 -73 94 -33 116 6 107 11 L 81 -10 Q 58 -18 48 -32 L 42 -48 40 -66 Q 40 -75 50 -87 60 -98 60 -109 L 56 -160 58 -195 Q 67 -196 75 -186 L 85 -177 M 29 13 L -70 13 -51 -3 -23 -23 -25 -7 -27 0 -2 2 Q 13 4 20 8 L 29 13 M -51 -161 Q -54 -173 -59 -173 -70 -173 -79 -182 -89 -191 -89 -205 L -89 -209 -79 -206 Q -61 -206 -51 -227 L -50 -229 -40 -271 -40 -236 -40 -220 -40 -213 -45 -198 -48 -182 Q -48 -170 -51 -161 M -57 -307 L -50 -334 -48 -334 Q -53 -361 -44 -375 -44 -362 -33 -355 -23 -348 -23 -340 L -28 -334 -54 -310 -57 -307";ctx.fillStyle=tocolor(ctrans.apply([189,182,175,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 11 -389 L 49 -386 Q 69 -380 70 -356 72 -338 102 -297 L 102 -289 Q 98 -280 88 -278 75 -276 75 -247 L 76 -237 82 -221 90 -204 88 -191 85 -177 79 -111 Q 72 -73 94 -33 116 6 107 11 L 112 14 29 13 -70 13 Q -83 19 -65 -41 -47 -102 -48 -110 L -48 -147 -51 -161 Q -54 -173 -59 -173 -70 -173 -79 -182 -89 -191 -89 -205 L -89 -209 -78 -241 -70 -268 -57 -307 -50 -334 -48 -334 Q -53 -361 -44 -375 -36 -388 -14 -388 L 10 -389 11 -389 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite168(ctx,ctrans,frame,ratio,time){var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:break}}function sprite338(ctx,ctrans,frame,ratio,time){ctx.save();ctx.transform(1,0,0,1,12.4,37.2);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(shape337,canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);place(sprite168,canvas,ctx,[0.00380859375,0.00125274658203125,-0.001105499267578125,0.005066680908203125,-2.35,-30.25],ctrans,13,(0+time)%1,0,time);break}ctx.restore()}var frame=-1;var time=0;var frames=[];frames.push(0);var backgroundColor="#ffffff00";var originalWidth=24;var originalHeight=38;function nextFrame(ctx,ctrans){var oldframe=frame;frame=(frame+1)%frames.length;if(frame==oldframe){time++}else{time=0};drawFrame()}function drawFrame(){ctx.fillStyle=backgroundColor;ctx.fillRect(0,0,canvas.width,canvas.height);ctx.save();ctx.transform(canvas.width/originalWidth,0,0,canvas.height/originalHeight,0,0);sprite338(ctx,ctrans,frames[frame],0,time);ctx.restore()}nextFrame(ctx,ctrans);
return [canvas,width,height];}