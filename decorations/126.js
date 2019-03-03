module.exports = (createCanvas, concatMatrix, enhanceContext, cxform, place, tocolor, drawMorphPath, useRatio, drawPath, shadeColor, colorPalette) => { var width=38,height=25;
var canvas=createCanvas(width,height);

var ctx=canvas.getContext("2d");
enhanceContext(ctx);
var ctrans = new cxform(0,0,0,0,255,255,255,255);
function shape46(ctx,ctrans,frame,ratio,time){var pathData="M 0 -232 Q 10 -207 41 -189 L -63 -184 Q -108 -215 -92 -282 -86 -304 -62 -323 L -1 -362 Q 30 -379 32 -417 34 -455 8 -493 L 40 -509 72 -443 Q 90 -393 57 -354 L 3 -290 Q -11 -259 0 -232";var grd=ctx.createLinearGradient(-47.75,-205.0,27.75,-487.0);grd.addColorStop(0.0,tocolor(ctrans.apply([255,255,255,0.0])));grd.addColorStop(0.4235294117647059,tocolor(ctrans.apply([255,255,255,0.23137255])));grd.addColorStop(1.0,tocolor(ctrans.apply([255,255,255,0.0])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 125 -437 Q 165 -413 160 -335 143 -268 79 -282 126 -338 125 -437";var grd=ctx.createLinearGradient(84.75,-296.75,155.25,-419.25);grd.addColorStop(0.0,tocolor(ctrans.apply([255,255,255,0.0])));grd.addColorStop(0.4235294117647059,tocolor(ctrans.apply([255,255,255,0.23137255])));grd.addColorStop(1.0,tocolor(ctrans.apply([255,255,255,0.0])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M -175 -93 L -134 -24 Q -86 -9 81 -50 152 -125 153 -199 181 -195 183 -187 L 179 -157 160 -85 134 2 -157 2 -175 -93";ctx.fillStyle=tocolor(ctrans.apply([96,23,40,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 153 -199 Q 152 -125 81 -50 -86 -9 -134 -24 L -175 -93 -194 -187 Q -195 -195 -145 -200 L -82 -203 -9 -205 153 -199";var grd=ctx.createLinearGradient(-162.0,-109.0,104.0,-109.0);grd.addColorStop(0.0,tocolor(ctrans.apply([183,78,93,1])));grd.addColorStop(0.30980392156862746,tocolor(ctrans.apply([196,117,124,1])));grd.addColorStop(0.8588235294117647,tocolor(ctrans.apply([183,78,93,1])));grd.addColorStop(1.0,tocolor(ctrans.apply([119,44,59,1])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 160 -85 L 179 -157 Q 188 -128 269 -162 364 -195 564 -215 574 -208 525 -180 324 -187 160 -85";ctx.fillStyle=tocolor(ctrans.apply([42,39,39,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 564 -215 Q 364 -195 269 -162 188 -128 179 -157 286 -205 427 -215 L 564 -215";ctx.fillStyle=tocolor(ctrans.apply([64,60,61,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M -175 -93 L -157 2 134 2 160 -85 179 -157 183 -187 Q 181 -195 153 -199 L -9 -205 -82 -203 -145 -200 Q -195 -195 -194 -187 L -175 -93 M 564 -215 L 427 -215 Q 286 -205 179 -157 M 564 -215 Q 574 -208 525 -180 324 -187 160 -85";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite47(ctx,ctrans,frame,ratio,time){ctx.save();ctx.transform(1,0,0,1,9.85,25.45);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(shape46,canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()}var frame=-1;var time=0;var frames=[];frames.push(0);var backgroundColor="#ffffff00";var originalWidth=38;var originalHeight=25;function nextFrame(ctx,ctrans){var oldframe=frame;frame=(frame+1)%frames.length;if(frame==oldframe){time++}else{time=0};drawFrame()}function drawFrame(){ctx.fillStyle=backgroundColor;ctx.fillRect(0,0,canvas.width,canvas.height);ctx.save();ctx.transform(canvas.width/originalWidth,0,0,canvas.height/originalHeight,0,0);sprite47(ctx,ctrans,frames[frame],0,time);ctx.restore()}nextFrame(ctx,ctrans);
return [canvas,width,height];}