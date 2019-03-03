module.exports = (createCanvas, concatMatrix, enhanceContext, cxform, place, tocolor, drawMorphPath, useRatio, drawPath, shadeColor, colorPalette) => { var width=48,height=81;
var canvas=createCanvas(width,height);

var ctx=canvas.getContext("2d");
enhanceContext(ctx);
var ctrans = new cxform(0,0,0,0,255,255,255,255);
function shape236(ctx,ctrans,frame,ratio,time){var pathData="M 59 -582 Q 70 -494 67 -449 62 -357 37 -305 L -51 -151 Q -111 -49 37 27 L -42 27 Q -178 -43 -117 -136 L -28 -279 Q 1 -328 16 -394 32 -460 19 -604 8 -748 -83 -962 32 -801 59 -582";var grd=ctx.createLinearGradient(115.0,-1365.5,-175.0,-154.5);grd.addColorStop(0.0,tocolor(ctrans.apply([204,200,69,1])));grd.addColorStop(0.32941176470588235,tocolor(ctrans.apply([199,199,55,1])));grd.addColorStop(0.788235294117647,tocolor(ctrans.apply([60,92,10,0.8627451])));grd.addColorStop(1.0,tocolor(ctrans.apply([111,125,12,0.4509804])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 59 -582 Q 32 -801 -83 -962 8 -748 19 -604 32 -460 16 -394 1 -328 -28 -279 L -117 -136 Q -178 -43 -42 27 L 37 27 Q -111 -49 -51 -151 L 37 -305 Q 62 -357 67 -449 70 -494 59 -582 Z";var oldctx=ctx;ctx.save();var lcanvas=document.createElement("canvas");lcanvas.width=canvas.width;lcanvas.height=canvas.height;var lctx=lcanvas.getContext("2d");enhanceContext(lctx);lctx.applyTransforms(ctx._matrix);ctx=lctx;var scaleMode="NORMAL";ctx.lineWidth=0.5;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var lfcanvas=document.createElement("canvas");lfcanvas.width=canvas.width;lfcanvas.height=canvas.height;var lfctx=lfcanvas.getContext("2d");enhanceContext(lfctx);lfctx.applyTransforms(ctx._matrix);ctx=lfctx;ctx.fillStyle=tocolor(ctrans.apply([107,107,29,0.0]));ctx.fill("evenodd");var grd=ctx.createLinearGradient(73.75,-467.0,-171.75,-467.0);grd.addColorStop(0.37254901960784315,tocolor(ctrans.apply([126,126,5,0.84705883])));grd.addColorStop(1.0,tocolor(ctrans.apply([107,107,29,0.0])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx=oldctx;var limgd=lctx.getImageData(0,0,lcanvas.width,lcanvas.height);var lpix=limgd.data;var lfimgd=lfctx.getImageData(0,0,lfcanvas.width,lfcanvas.height);var lfpix=lfimgd.data;var imgd=ctx.getImageData(0,0,canvas.width,canvas.height);var pix=imgd.data;for(var i=0;i<lpix.length;i+=4){if(lpix[i+3]>0){pix[i]=lfpix[i];pix[i+1]=lfpix[i+1];pix[i+2]=lfpix[i+2];pix[i+3]=lfpix[i+3]}}ctx.putImageData(imgd,0,0);ctx.restore();var pathData="M 84 -422 Q -23 -263 -17 -166 -12 -64 113 -16 L 91 49 Q -92 -42 -61 -206 -44 -302 37 -396 108 -480 77 -537 54 -582 -28 -604 56 -600 93 -551 135 -498 84 -422";var grd=ctx.createLinearGradient(-28.5,-821.5,150.5,-66.5);grd.addColorStop(0.0,tocolor(ctrans.apply([204,200,69,1])));grd.addColorStop(0.32941176470588235,tocolor(ctrans.apply([199,199,55,1])));grd.addColorStop(0.788235294117647,tocolor(ctrans.apply([60,92,10,0.8627451])));grd.addColorStop(1.0,tocolor(ctrans.apply([111,125,12,0.4509804])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 84 -422 Q -23 -263 -17 -166 -12 -64 113 -16 L 91 49 Q -92 -42 -61 -206 -44 -302 37 -396 108 -480 77 -537 54 -582 -28 -604 56 -600 93 -551 135 -498 84 -422 Z";var oldctx=ctx;ctx.save();var lcanvas=document.createElement("canvas");lcanvas.width=canvas.width;lcanvas.height=canvas.height;var lctx=lcanvas.getContext("2d");enhanceContext(lctx);lctx.applyTransforms(ctx._matrix);ctx=lctx;var scaleMode="NORMAL";ctx.lineWidth=0.5;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var lfcanvas=document.createElement("canvas");lfcanvas.width=canvas.width;lfcanvas.height=canvas.height;var lfctx=lfcanvas.getContext("2d");enhanceContext(lfctx);lfctx.applyTransforms(ctx._matrix);ctx=lfctx;ctx.fillStyle=tocolor(ctrans.apply([107,107,29,0.0]));ctx.fill("evenodd");var grd=ctx.createLinearGradient(30.5,-413.25,39.5,13.25);grd.addColorStop(0.37254901960784315,tocolor(ctrans.apply([126,126,5,0.84705883])));grd.addColorStop(1.0,tocolor(ctrans.apply([107,107,29,0.0])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx=oldctx;var limgd=lctx.getImageData(0,0,lcanvas.width,lcanvas.height);var lpix=limgd.data;var lfimgd=lfctx.getImageData(0,0,lfcanvas.width,lfcanvas.height);var lfpix=lfimgd.data;var imgd=ctx.getImageData(0,0,canvas.width,canvas.height);var pix=imgd.data;for(var i=0;i<lpix.length;i+=4){if(lpix[i+3]>0){pix[i]=lfpix[i];pix[i+1]=lfpix[i+1];pix[i+2]=lfpix[i+2];pix[i+3]=lfpix[i+3]}}ctx.putImageData(imgd,0,0);ctx.restore();var pathData="M 283 -113 Q 306 -15 283 47 L 246 42 Q 277 -21 247 -129 186 -313 224 -501 302 -697 433 -731 250 -642 239 -393 233 -233 283 -113";var grd=ctx.createLinearGradient(510.0,-967.0,174.0,-89.0);grd.addColorStop(0.0,tocolor(ctrans.apply([204,200,69,1])));grd.addColorStop(0.32941176470588235,tocolor(ctrans.apply([199,199,55,1])));grd.addColorStop(0.788235294117647,tocolor(ctrans.apply([60,92,10,0.8627451])));grd.addColorStop(1.0,tocolor(ctrans.apply([111,125,12,0.4509804])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 283 -113 Q 306 -15 283 47 L 246 42 Q 277 -21 247 -129 186 -313 224 -501 302 -697 433 -731 250 -642 239 -393 233 -233 283 -113 Z";var oldctx=ctx;ctx.save();var lcanvas=document.createElement("canvas");lcanvas.width=canvas.width;lcanvas.height=canvas.height;var lctx=lcanvas.getContext("2d");enhanceContext(lctx);lctx.applyTransforms(ctx._matrix);ctx=lctx;var scaleMode="NORMAL";ctx.lineWidth=0.5;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var lfcanvas=document.createElement("canvas");lfcanvas.width=canvas.width;lfcanvas.height=canvas.height;var lfctx=lfcanvas.getContext("2d");enhanceContext(lfctx);lfctx.applyTransforms(ctx._matrix);ctx=lfctx;ctx.fillStyle=tocolor(ctrans.apply([107,107,29,0.0]));ctx.fill("evenodd");var grd=ctx.createLinearGradient(449.0,-723.75,235.0,-54.25);grd.addColorStop(0.37254901960784315,tocolor(ctrans.apply([126,126,5,0.84705883])));grd.addColorStop(1.0,tocolor(ctrans.apply([107,107,29,0.0])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx=oldctx;var limgd=lctx.getImageData(0,0,lcanvas.width,lcanvas.height);var lpix=limgd.data;var lfimgd=lfctx.getImageData(0,0,lfcanvas.width,lfcanvas.height);var lfpix=lfimgd.data;var imgd=ctx.getImageData(0,0,canvas.width,canvas.height);var pix=imgd.data;for(var i=0;i<lpix.length;i+=4){if(lpix[i+3]>0){pix[i]=lfpix[i];pix[i+1]=lfpix[i+1];pix[i+2]=lfpix[i+2];pix[i+3]=lfpix[i+3]}}ctx.putImageData(imgd,0,0);ctx.restore();var pathData="M 76 -678 Q 72 -747 84 -881 115 -1218 258 -1463 146 -1137 134 -916 121 -696 141 -595 161 -494 199 -418 L 313 -199 Q 391 -57 221 50 L 122 50 Q 307 -67 228 -223 150 -380 117 -459 83 -539 76 -678";var grd=ctx.createLinearGradient(2.0,-2082.0,386.0,-228.0);grd.addColorStop(0.0,tocolor(ctrans.apply([204,200,69,1])));grd.addColorStop(0.32941176470588235,tocolor(ctrans.apply([199,199,55,1])));grd.addColorStop(0.788235294117647,tocolor(ctrans.apply([60,92,10,0.8627451])));grd.addColorStop(1.0,tocolor(ctrans.apply([111,125,12,0.4509804])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 76 -678 Q 72 -747 84 -881 115 -1218 258 -1463 146 -1137 134 -916 121 -696 141 -595 161 -494 199 -418 L 313 -199 Q 391 -57 221 50 L 122 50 Q 307 -67 228 -223 150 -380 117 -459 83 -539 76 -678 Z";var oldctx=ctx;ctx.save();var lcanvas=document.createElement("canvas");lcanvas.width=canvas.width;lcanvas.height=canvas.height;var lctx=lcanvas.getContext("2d");enhanceContext(lctx);lctx.applyTransforms(ctx._matrix);ctx=lctx;var scaleMode="NORMAL";ctx.lineWidth=0.5;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var lfcanvas=document.createElement("canvas");lfcanvas.width=canvas.width;lfcanvas.height=canvas.height;var lfctx=lfcanvas.getContext("2d");enhanceContext(lfctx);lfctx.applyTransforms(ctx._matrix);ctx=lfctx;ctx.fillStyle=tocolor(ctrans.apply([107,107,29,0.0]));ctx.fill("evenodd");var grd=ctx.createLinearGradient(68.75,-707.0,377.25,-707.0);grd.addColorStop(0.37254901960784315,tocolor(ctrans.apply([126,126,5,0.84705883])));grd.addColorStop(1.0,tocolor(ctrans.apply([107,107,29,0.0])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx=oldctx;var limgd=lctx.getImageData(0,0,lcanvas.width,lcanvas.height);var lpix=limgd.data;var lfimgd=lfctx.getImageData(0,0,lfcanvas.width,lfcanvas.height);var lfpix=lfimgd.data;var imgd=ctx.getImageData(0,0,canvas.width,canvas.height);var pix=imgd.data;for(var i=0;i<lpix.length;i+=4){if(lpix[i+3]>0){pix[i]=lfpix[i];pix[i+1]=lfpix[i+1];pix[i+2]=lfpix[i+2];pix[i+3]=lfpix[i+3]}}ctx.putImageData(imgd,0,0);ctx.restore();var pathData="M 3 -278 Q 98 -523 85 -855 66 -1368 -279 -1550 -32 -1482 113 -1078 185 -689 70 -310 14 -88 73 42 L 3 53 Q -40 -75 3 -278";var grd=ctx.createLinearGradient(-423.75,-2038.0,207.75,-228.0);grd.addColorStop(0.0,tocolor(ctrans.apply([204,200,69,1])));grd.addColorStop(0.32941176470588235,tocolor(ctrans.apply([199,199,55,1])));grd.addColorStop(0.788235294117647,tocolor(ctrans.apply([60,92,10,0.8627451])));grd.addColorStop(1.0,tocolor(ctrans.apply([111,125,12,0.4509804])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 3 -278 Q -40 -75 3 53 L 73 42 Q 14 -88 70 -310 185 -689 113 -1078 -32 -1482 -279 -1550 66 -1368 85 -855 98 -523 3 -278 Z";var oldctx=ctx;ctx.save();var lcanvas=document.createElement("canvas");lcanvas.width=canvas.width;lcanvas.height=canvas.height;var lctx=lcanvas.getContext("2d");enhanceContext(lctx);lctx.applyTransforms(ctx._matrix);ctx=lctx;var scaleMode="NORMAL";ctx.lineWidth=0.5;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var lfcanvas=document.createElement("canvas");lfcanvas.width=canvas.width;lfcanvas.height=canvas.height;var lfctx=lfcanvas.getContext("2d");enhanceContext(lfctx);lfctx.applyTransforms(ctx._matrix);ctx=lfctx;ctx.fillStyle=tocolor(ctrans.apply([107,107,29,0.0]));ctx.fill("evenodd");var grd=ctx.createLinearGradient(-310.0,-1536.25,92.0,-155.75);grd.addColorStop(0.37254901960784315,tocolor(ctrans.apply([126,126,5,0.84705883])));grd.addColorStop(1.0,tocolor(ctrans.apply([107,107,29,0.0])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx=oldctx;var limgd=lctx.getImageData(0,0,lcanvas.width,lcanvas.height);var lpix=limgd.data;var lfimgd=lfctx.getImageData(0,0,lfcanvas.width,lfcanvas.height);var lfpix=lfimgd.data;var imgd=ctx.getImageData(0,0,canvas.width,canvas.height);var pix=imgd.data;for(var i=0;i<lpix.length;i+=4){if(lpix[i+3]>0){pix[i]=lfpix[i];pix[i+1]=lfpix[i+1];pix[i+2]=lfpix[i+2];pix[i+3]=lfpix[i+3]}}ctx.putImageData(imgd,0,0);ctx.restore();var pathData="M -177 -506 Q -133 -613 -181 -686 -220 -744 -309 -772 -224 -767 -170 -705 -111 -636 -138 -539 -193 -336 -157 -210 -118 -80 21 -19 L 21 65 Q -192 -52 -214 -262 -227 -385 -177 -506";var grd=ctx.createLinearGradient(-380.0,-1051.75,42.0,-84.25);grd.addColorStop(0.0,tocolor(ctrans.apply([204,200,69,1])));grd.addColorStop(0.32941176470588235,tocolor(ctrans.apply([199,199,55,1])));grd.addColorStop(0.788235294117647,tocolor(ctrans.apply([60,92,10,0.8627451])));grd.addColorStop(1.0,tocolor(ctrans.apply([111,125,12,0.4509804])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M -177 -506 Q -133 -613 -181 -686 -220 -744 -309 -772 -224 -767 -170 -705 -111 -636 -138 -539 -193 -336 -157 -210 -118 -80 21 -19 L 21 65 Q -192 -52 -214 -262 -227 -385 -177 -506 Z";var oldctx=ctx;ctx.save();var lcanvas=document.createElement("canvas");lcanvas.width=canvas.width;lcanvas.height=canvas.height;var lctx=lcanvas.getContext("2d");enhanceContext(lctx);lctx.applyTransforms(ctx._matrix);ctx=lctx;var scaleMode="NORMAL";ctx.lineWidth=0.5;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var lfcanvas=document.createElement("canvas");lfcanvas.width=canvas.width;lfcanvas.height=canvas.height;var lfctx=lfcanvas.getContext("2d");enhanceContext(lfctx);lfctx.applyTransforms(ctx._matrix);ctx=lfctx;ctx.fillStyle=tocolor(ctrans.apply([107,107,29,0.0]));ctx.fill("evenodd");var grd=ctx.createLinearGradient(-189.25,-527.5,-42.75,19.5);grd.addColorStop(0.37254901960784315,tocolor(ctrans.apply([126,126,5,0.84705883])));grd.addColorStop(1.0,tocolor(ctrans.apply([107,107,29,0.0])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx=oldctx;var limgd=lctx.getImageData(0,0,lcanvas.width,lcanvas.height);var lpix=limgd.data;var lfimgd=lfctx.getImageData(0,0,lfcanvas.width,lfcanvas.height);var lfpix=lfimgd.data;var imgd=ctx.getImageData(0,0,canvas.width,canvas.height);var pix=imgd.data;for(var i=0;i<lpix.length;i+=4){if(lpix[i+3]>0){pix[i]=lfpix[i];pix[i+1]=lfpix[i+1];pix[i+2]=lfpix[i+2];pix[i+3]=lfpix[i+3]}}ctx.putImageData(imgd,0,0);ctx.restore();var pathData="M 31 -405 Q 2 -491 0 -592 39 -1062 528 -1049 347 -1023 258 -979 163 -931 105 -831 34 -711 31 -595 27 -457 115 -318 148 -266 188 -209 214 -168 222 -118 218 11 149 55 L 46 55 Q 130 13 153 -57 184 -147 102 -266 55 -335 31 -405";var grd=ctx.createLinearGradient(419.25,-1629.5,262.75,-102.5);grd.addColorStop(0.0,tocolor(ctrans.apply([204,200,69,1])));grd.addColorStop(0.32941176470588235,tocolor(ctrans.apply([199,199,55,1])));grd.addColorStop(0.788235294117647,tocolor(ctrans.apply([60,92,10,0.8627451])));grd.addColorStop(1.0,tocolor(ctrans.apply([111,125,12,0.4509804])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 31 -405 Q 55 -335 102 -266 184 -147 153 -57 130 13 46 55 L 149 55 Q 218 11 222 -118 214 -168 188 -209 148 -266 115 -318 27 -457 31 -595 34 -711 105 -831 163 -931 258 -979 347 -1023 528 -1049 39 -1062 0 -592 2 -491 31 -405 Z";var oldctx=ctx;ctx.save();var lcanvas=document.createElement("canvas");lcanvas.width=canvas.width;lcanvas.height=canvas.height;var lctx=lcanvas.getContext("2d");enhanceContext(lctx);lctx.applyTransforms(ctx._matrix);ctx=lctx;var scaleMode="NORMAL";ctx.lineWidth=0.5;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var lfcanvas=document.createElement("canvas");lfcanvas.width=canvas.width;lfcanvas.height=canvas.height;var lfctx=lfcanvas.getContext("2d");enhanceContext(lfctx);lfctx.applyTransforms(ctx._matrix);ctx=lfctx;ctx.fillStyle=tocolor(ctrans.apply([107,107,29,0.0]));ctx.fill("evenodd");var grd=ctx.createLinearGradient(664.0,-1109.25,-8.0,-16.75);grd.addColorStop(0.37254901960784315,tocolor(ctrans.apply([126,126,5,0.84705883])));grd.addColorStop(1.0,tocolor(ctrans.apply([107,107,29,0.0])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx=oldctx;var limgd=lctx.getImageData(0,0,lcanvas.width,lcanvas.height);var lpix=limgd.data;var lfimgd=lfctx.getImageData(0,0,lfcanvas.width,lfcanvas.height);var lfpix=lfimgd.data;var imgd=ctx.getImageData(0,0,canvas.width,canvas.height);var pix=imgd.data;for(var i=0;i<lpix.length;i+=4){if(lpix[i+3]>0){pix[i]=lfpix[i];pix[i+1]=lfpix[i+1];pix[i+2]=lfpix[i+2];pix[i+3]=lfpix[i+3]}}ctx.putImageData(imgd,0,0);ctx.restore();var pathData="M -267 -1042 L -394 -1140 Q -227 -1066 -128 -923 -22 -765 -36 -573 -55 -322 -19 -172 18 -17 148 52 L 31 52 Q -128 -100 -80 -548 -57 -755 -132 -874 -208 -992 -267 -1042";var grd=ctx.createLinearGradient(-466.25,-1592.0,90.25,-164.0);grd.addColorStop(0.0,tocolor(ctrans.apply([204,200,69,1])));grd.addColorStop(0.32941176470588235,tocolor(ctrans.apply([199,199,55,1])));grd.addColorStop(0.788235294117647,tocolor(ctrans.apply([60,92,10,0.8627451])));grd.addColorStop(1.0,tocolor(ctrans.apply([111,125,12,0.4509804])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M -267 -1042 Q -208 -992 -132 -874 -57 -755 -80 -548 -128 -100 31 52 L 148 52 Q 18 -17 -19 -172 -55 -322 -36 -573 -22 -765 -128 -923 -227 -1066 -394 -1140 L -267 -1042 Z";var oldctx=ctx;ctx.save();var lcanvas=document.createElement("canvas");lcanvas.width=canvas.width;lcanvas.height=canvas.height;var lctx=lcanvas.getContext("2d");enhanceContext(lctx);lctx.applyTransforms(ctx._matrix);ctx=lctx;var scaleMode="NORMAL";ctx.lineWidth=0.5;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var lfcanvas=document.createElement("canvas");lfcanvas.width=canvas.width;lfcanvas.height=canvas.height;var lfctx=lfcanvas.getContext("2d");enhanceContext(lfctx);lfctx.applyTransforms(ctx._matrix);ctx=lfctx;ctx.fillStyle=tocolor(ctrans.apply([107,107,29,0.0]));ctx.fill("evenodd");var grd=ctx.createLinearGradient(-397.25,-544.0,151.25,-544.0);grd.addColorStop(0.37254901960784315,tocolor(ctrans.apply([126,126,5,0.84705883])));grd.addColorStop(1.0,tocolor(ctrans.apply([107,107,29,0.0])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx=oldctx;var limgd=lctx.getImageData(0,0,lcanvas.width,lcanvas.height);var lpix=limgd.data;var lfimgd=lfctx.getImageData(0,0,lfcanvas.width,lfcanvas.height);var lfpix=lfimgd.data;var imgd=ctx.getImageData(0,0,canvas.width,canvas.height);var pix=imgd.data;for(var i=0;i<lpix.length;i+=4){if(lpix[i+3]>0){pix[i]=lfpix[i];pix[i+1]=lfpix[i+1];pix[i+2]=lfpix[i+2];pix[i+3]=lfpix[i+3]}}ctx.putImageData(imgd,0,0);ctx.restore();var pathData="M 304 -317 Q 277 -377 336 -420 390 -459 475 -462 386 -445 347 -408 299 -363 343 -296 393 -221 380 -145 358 -14 145 59 L 145 6 Q 284 -32 323 -113 359 -191 304 -317";var grd=ctx.createLinearGradient(546.0,-635.75,124.0,-34.25);grd.addColorStop(0.0,tocolor(ctrans.apply([204,200,69,1])));grd.addColorStop(0.32941176470588235,tocolor(ctrans.apply([199,199,55,1])));grd.addColorStop(0.788235294117647,tocolor(ctrans.apply([60,92,10,0.8627451])));grd.addColorStop(1.0,tocolor(ctrans.apply([111,125,12,0.4509804])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 304 -317 Q 359 -191 323 -113 284 -32 145 6 L 145 59 Q 358 -14 380 -145 393 -221 343 -296 299 -363 347 -408 386 -445 475 -462 390 -459 336 -420 277 -377 304 -317 Z";var oldctx=ctx;ctx.save();var lcanvas=document.createElement("canvas");lcanvas.width=canvas.width;lcanvas.height=canvas.height;var lctx=lcanvas.getContext("2d");enhanceContext(lctx);lctx.applyTransforms(ctx._matrix);ctx=lctx;var scaleMode="NORMAL";ctx.lineWidth=0.5;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var lfcanvas=document.createElement("canvas");lfcanvas.width=canvas.width;lfcanvas.height=canvas.height;var lfctx=lfcanvas.getContext("2d");enhanceContext(lfctx);lfctx.applyTransforms(ctx._matrix);ctx=lfctx;ctx.fillStyle=tocolor(ctrans.apply([107,107,29,0.0]));ctx.fill("evenodd");var grd=ctx.createLinearGradient(355.25,-310.0,208.75,30.0);grd.addColorStop(0.37254901960784315,tocolor(ctrans.apply([126,126,5,0.84705883])));grd.addColorStop(1.0,tocolor(ctrans.apply([107,107,29,0.0])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx=oldctx;var limgd=lctx.getImageData(0,0,lcanvas.width,lcanvas.height);var lpix=limgd.data;var lfimgd=lfctx.getImageData(0,0,lfcanvas.width,lfcanvas.height);var lfpix=lfimgd.data;var imgd=ctx.getImageData(0,0,canvas.width,canvas.height);var pix=imgd.data;for(var i=0;i<lpix.length;i+=4){if(lpix[i+3]>0){pix[i]=lfpix[i];pix[i+1]=lfpix[i+1];pix[i+2]=lfpix[i+2];pix[i+3]=lfpix[i+3]}}ctx.putImageData(imgd,0,0);ctx.restore();var pathData="M 247 -839 Q 133 -524 160 -259 184 -83 111 54 L 26 56 Q 121 -125 109 -281 115 -569 247 -839";var grd=ctx.createLinearGradient(124.25,-1026.5,197.75,-157.5);grd.addColorStop(0.0,tocolor(ctrans.apply([204,200,69,1])));grd.addColorStop(0.32941176470588235,tocolor(ctrans.apply([199,199,55,1])));grd.addColorStop(0.788235294117647,tocolor(ctrans.apply([60,92,10,0.8627451])));grd.addColorStop(1.0,tocolor(ctrans.apply([111,125,12,0.4509804])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 247 -839 Q 133 -524 160 -259 184 -83 111 54 L 26 56 Q 121 -125 109 -281 115 -569 247 -839 L 257 -859";var oldctx=ctx;ctx.save();var lcanvas=document.createElement("canvas");lcanvas.width=canvas.width;lcanvas.height=canvas.height;var lctx=lcanvas.getContext("2d");enhanceContext(lctx);lctx.applyTransforms(ctx._matrix);ctx=lctx;var scaleMode="NORMAL";ctx.lineWidth=0.5;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var lfcanvas=document.createElement("canvas");lfcanvas.width=canvas.width;lfcanvas.height=canvas.height;var lfctx=lfcanvas.getContext("2d");enhanceContext(lfctx);lfctx.applyTransforms(ctx._matrix);ctx=lfctx;ctx.fillStyle=tocolor(ctrans.apply([107,107,29,0.0]));ctx.fill("evenodd");var grd=ctx.createLinearGradient(236.0,-899.25,236.0,-288.75);grd.addColorStop(0.37254901960784315,tocolor(ctrans.apply([126,126,5,0.84705883])));grd.addColorStop(1.0,tocolor(ctrans.apply([107,107,29,0.0])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx=oldctx;var limgd=lctx.getImageData(0,0,lcanvas.width,lcanvas.height);var lpix=limgd.data;var lfimgd=lfctx.getImageData(0,0,lfcanvas.width,lfcanvas.height);var lfpix=lfimgd.data;var imgd=ctx.getImageData(0,0,canvas.width,canvas.height);var pix=imgd.data;for(var i=0;i<lpix.length;i+=4){if(lpix[i+3]>0){pix[i]=lfpix[i];pix[i+1]=lfpix[i+1];pix[i+2]=lfpix[i+2];pix[i+3]=lfpix[i+3]}}ctx.putImageData(imgd,0,0);ctx.restore();var pathData="M -132 -205 Q -177 -127 -157 -79 -135 -30 -42 -6 L -45 26 Q -186 -19 -194 -99 -199 -146 -160 -192 -127 -233 -156 -261 -181 -283 -240 -294 -182 -292 -149 -268 -111 -242 -132 -205";var grd=ctx.createLinearGradient(-279.25,-400.5,-24.75,-31.5);grd.addColorStop(0.0,tocolor(ctrans.apply([204,200,69,1])));grd.addColorStop(0.32941176470588235,tocolor(ctrans.apply([199,199,55,1])));grd.addColorStop(0.788235294117647,tocolor(ctrans.apply([60,92,10,0.8627451])));grd.addColorStop(1.0,tocolor(ctrans.apply([111,125,12,0.4509804])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M -132 -205 Q -177 -127 -157 -79 -135 -30 -42 -6 L -45 26 Q -186 -19 -194 -99 -199 -146 -160 -192 -127 -233 -156 -261 -181 -283 -240 -294 -182 -292 -149 -268 -111 -242 -132 -205 Z";var oldctx=ctx;ctx.save();var lcanvas=document.createElement("canvas");lcanvas.width=canvas.width;lcanvas.height=canvas.height;var lctx=lcanvas.getContext("2d");enhanceContext(lctx);lctx.applyTransforms(ctx._matrix);ctx=lctx;var scaleMode="NORMAL";ctx.lineWidth=0.5;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var lfcanvas=document.createElement("canvas");lfcanvas.width=canvas.width;lfcanvas.height=canvas.height;var lfctx=lfcanvas.getContext("2d");enhanceContext(lfctx);lfctx.applyTransforms(ctx._matrix);ctx=lfctx;ctx.fillStyle=tocolor(ctrans.apply([107,107,29,0.0]));ctx.fill("evenodd");var grd=ctx.createLinearGradient(-167.5,-200.25,-86.5,8.25);grd.addColorStop(0.37254901960784315,tocolor(ctrans.apply([126,126,5,0.84705883])));grd.addColorStop(1.0,tocolor(ctrans.apply([107,107,29,0.0])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx=oldctx;var limgd=lctx.getImageData(0,0,lcanvas.width,lcanvas.height);var lpix=limgd.data;var lfimgd=lfctx.getImageData(0,0,lfcanvas.width,lfcanvas.height);var lfpix=lfimgd.data;var imgd=ctx.getImageData(0,0,canvas.width,canvas.height);var pix=imgd.data;for(var i=0;i<lpix.length;i+=4){if(lpix[i+3]>0){pix[i]=lfpix[i];pix[i+1]=lfpix[i+1];pix[i+2]=lfpix[i+2];pix[i+3]=lfpix[i+3]}}ctx.putImageData(imgd,0,0);ctx.restore();var pathData="M 249 -418 Q 135 -261 162 -128 186 -40 113 29 L 28 30 Q 123 -61 111 -139 117 -283 249 -418";var grd=ctx.createLinearGradient(126.25,-511.5,199.75,-76.5);grd.addColorStop(0.0,tocolor(ctrans.apply([204,200,69,1])));grd.addColorStop(0.32941176470588235,tocolor(ctrans.apply([199,199,55,1])));grd.addColorStop(0.788235294117647,tocolor(ctrans.apply([60,92,10,0.8627451])));grd.addColorStop(1.0,tocolor(ctrans.apply([111,125,12,0.4509804])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 249 -418 Q 135 -261 162 -128 186 -40 113 29 L 28 30 Q 123 -61 111 -139 117 -283 249 -418 L 259 -428";var oldctx=ctx;ctx.save();var lcanvas=document.createElement("canvas");lcanvas.width=canvas.width;lcanvas.height=canvas.height;var lctx=lcanvas.getContext("2d");enhanceContext(lctx);lctx.applyTransforms(ctx._matrix);ctx=lctx;var scaleMode="NORMAL";ctx.lineWidth=0.5;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var lfcanvas=document.createElement("canvas");lfcanvas.width=canvas.width;lfcanvas.height=canvas.height;var lfctx=lfcanvas.getContext("2d");enhanceContext(lfctx);lfctx.applyTransforms(ctx._matrix);ctx=lfctx;ctx.fillStyle=tocolor(ctrans.apply([107,107,29,0.0]));ctx.fill("evenodd");var grd=ctx.createLinearGradient(238.0,-447.75,238.0,-142.25);grd.addColorStop(0.37254901960784315,tocolor(ctrans.apply([126,126,5,0.84705883])));grd.addColorStop(1.0,tocolor(ctrans.apply([107,107,29,0.0])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx=oldctx;var limgd=lctx.getImageData(0,0,lcanvas.width,lcanvas.height);var lpix=limgd.data;var lfimgd=lfctx.getImageData(0,0,lfcanvas.width,lfcanvas.height);var lfpix=lfimgd.data;var imgd=ctx.getImageData(0,0,canvas.width,canvas.height);var pix=imgd.data;for(var i=0;i<lpix.length;i+=4){if(lpix[i+3]>0){pix[i]=lfpix[i];pix[i+1]=lfpix[i+1];pix[i+2]=lfpix[i+2];pix[i+3]=lfpix[i+3]}}ctx.putImageData(imgd,0,0);ctx.restore();var pathData="M -200 -145 Q -177 -40 -200 26 L -237 21 Q -206 -47 -236 -162 -297 -358 -258 -559 -181 -768 -50 -803 -233 -709 -243 -443 -250 -272 -200 -145";var grd=ctx.createLinearGradient(27.0,-1055.25,-309.0,-118.75);grd.addColorStop(0.0,tocolor(ctrans.apply([204,200,69,1])));grd.addColorStop(0.32941176470588235,tocolor(ctrans.apply([199,199,55,1])));grd.addColorStop(0.788235294117647,tocolor(ctrans.apply([60,92,10,0.8627451])));grd.addColorStop(1.0,tocolor(ctrans.apply([111,125,12,0.4509804])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M -200 -145 Q -177 -40 -200 26 L -237 21 Q -206 -47 -236 -162 -297 -358 -258 -559 -181 -768 -50 -803 -233 -709 -243 -443 -250 -272 -200 -145 Z";var oldctx=ctx;ctx.save();var lcanvas=document.createElement("canvas");lcanvas.width=canvas.width;lcanvas.height=canvas.height;var lctx=lcanvas.getContext("2d");enhanceContext(lctx);lctx.applyTransforms(ctx._matrix);ctx=lctx;var scaleMode="NORMAL";ctx.lineWidth=0.5;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var lfcanvas=document.createElement("canvas");lfcanvas.width=canvas.width;lfcanvas.height=canvas.height;var lfctx=lfcanvas.getContext("2d");enhanceContext(lfctx);lfctx.applyTransforms(ctx._matrix);ctx=lfctx;ctx.fillStyle=tocolor(ctrans.apply([107,107,29,0.0]));ctx.fill("evenodd");var grd=ctx.createLinearGradient(-33.0,-796.0,-247.0,-82.0);grd.addColorStop(0.37254901960784315,tocolor(ctrans.apply([126,126,5,0.84705883])));grd.addColorStop(1.0,tocolor(ctrans.apply([107,107,29,0.0])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx=oldctx;var limgd=lctx.getImageData(0,0,lcanvas.width,lcanvas.height);var lpix=limgd.data;var lfimgd=lfctx.getImageData(0,0,lfcanvas.width,lfcanvas.height);var lfpix=lfimgd.data;var imgd=ctx.getImageData(0,0,canvas.width,canvas.height);var pix=imgd.data;for(var i=0;i<lpix.length;i+=4){if(lpix[i+3]>0){pix[i]=lfpix[i];pix[i+1]=lfpix[i+1];pix[i+2]=lfpix[i+2];pix[i+3]=lfpix[i+3]}}ctx.putImageData(imgd,0,0);ctx.restore();var pathData="M -143 -121 Q -50 -228 -66 -371 -91 -594 -438 -673 -191 -644 -40 -468 36 -300 -75 -135 -129 -39 -68 18 L -139 22 Q -184 -33 -143 -121";var grd=ctx.createLinearGradient(-587.5,-884.75,63.5,-99.25);grd.addColorStop(0.0,tocolor(ctrans.apply([204,200,69,1])));grd.addColorStop(0.32941176470588235,tocolor(ctrans.apply([199,199,55,1])));grd.addColorStop(0.788235294117647,tocolor(ctrans.apply([60,92,10,0.8627451])));grd.addColorStop(1.0,tocolor(ctrans.apply([111,125,12,0.4509804])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M -143 -121 Q -184 -33 -139 22 L -68 18 Q -129 -39 -75 -135 36 -300 -40 -468 -191 -644 -438 -673 -91 -594 -66 -371 -50 -228 -143 -121 Z";var oldctx=ctx;ctx.save();var lcanvas=document.createElement("canvas");lcanvas.width=canvas.width;lcanvas.height=canvas.height;var lctx=lcanvas.getContext("2d");enhanceContext(lctx);lctx.applyTransforms(ctx._matrix);ctx=lctx;var scaleMode="NORMAL";ctx.lineWidth=0.5;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var lfcanvas=document.createElement("canvas");lfcanvas.width=canvas.width;lfcanvas.height=canvas.height;var lfctx=lfcanvas.getContext("2d");enhanceContext(lfctx);lfctx.applyTransforms(ctx._matrix);ctx=lfctx;ctx.fillStyle=tocolor(ctrans.apply([107,107,29,0.0]));ctx.fill("evenodd");var grd=ctx.createLinearGradient(-468.5,-667.5,-51.5,-68.5);grd.addColorStop(0.37254901960784315,tocolor(ctrans.apply([126,126,5,0.84705883])));grd.addColorStop(1.0,tocolor(ctrans.apply([107,107,29,0.0])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx=oldctx;var limgd=lctx.getImageData(0,0,lcanvas.width,lcanvas.height);var lpix=limgd.data;var lfimgd=lfctx.getImageData(0,0,lfcanvas.width,lfcanvas.height);var lfpix=lfimgd.data;var imgd=ctx.getImageData(0,0,canvas.width,canvas.height);var pix=imgd.data;for(var i=0;i<lpix.length;i+=4){if(lpix[i+3]>0){pix[i]=lfpix[i];pix[i+1]=lfpix[i+1];pix[i+2]=lfpix[i+2];pix[i+3]=lfpix[i+3]}}ctx.putImageData(imgd,0,0);ctx.restore();var pathData="M -384 -436 Q -238 -296 -216 -147 -220 -66 -115 28 L -200 27 Q -281 -44 -266 -135 -253 -273 -384 -436";var grd=ctx.createLinearGradient(-271.75,-533.25,-298.25,-82.75);grd.addColorStop(0.0,tocolor(ctrans.apply([204,200,69,1])));grd.addColorStop(0.32941176470588235,tocolor(ctrans.apply([199,199,55,1])));grd.addColorStop(0.788235294117647,tocolor(ctrans.apply([60,92,10,0.8627451])));grd.addColorStop(1.0,tocolor(ctrans.apply([111,125,12,0.4509804])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M -384 -436 Q -253 -273 -266 -135 -281 -44 -200 27 L -115 28 Q -220 -66 -216 -147 -238 -296 -384 -436 L -395 -446";var oldctx=ctx;ctx.save();var lcanvas=document.createElement("canvas");lcanvas.width=canvas.width;lcanvas.height=canvas.height;var lctx=lcanvas.getContext("2d");enhanceContext(lctx);lctx.applyTransforms(ctx._matrix);ctx=lctx;var scaleMode="NORMAL";ctx.lineWidth=0.5;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var lfcanvas=document.createElement("canvas");lfcanvas.width=canvas.width;lfcanvas.height=canvas.height;var lfctx=lfcanvas.getContext("2d");enhanceContext(lfctx);lfctx.applyTransforms(ctx._matrix);ctx=lfctx;ctx.fillStyle=tocolor(ctrans.apply([107,107,29,0.0]));ctx.fill("evenodd");var grd=ctx.createLinearGradient(-376.5,-467.25,-343.5,-150.75);grd.addColorStop(0.37254901960784315,tocolor(ctrans.apply([126,126,5,0.84705883])));grd.addColorStop(1.0,tocolor(ctrans.apply([107,107,29,0.0])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx=oldctx;var limgd=lctx.getImageData(0,0,lcanvas.width,lcanvas.height);var lpix=limgd.data;var lfimgd=lfctx.getImageData(0,0,lfcanvas.width,lfcanvas.height);var lfpix=lfimgd.data;var imgd=ctx.getImageData(0,0,canvas.width,canvas.height);var pix=imgd.data;for(var i=0;i<lpix.length;i+=4){if(lpix[i+3]>0){pix[i]=lfpix[i];pix[i+1]=lfpix[i+1];pix[i+2]=lfpix[i+2];pix[i+3]=lfpix[i+3]}}ctx.putImageData(imgd,0,0);ctx.restore()}function sprite237(ctx,ctrans,frame,ratio,time){ctx.save();ctx.transform(1,0,0,1,22.15,77.75);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(shape236,canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()}var frame=-1;var time=0;var frames=[];frames.push(0);var backgroundColor="#ffffff00";var originalWidth=48;var originalHeight=81;function nextFrame(ctx,ctrans){var oldframe=frame;frame=(frame+1)%frames.length;if(frame==oldframe){time++}else{time=0};drawFrame()}function drawFrame(){ctx.fillStyle=backgroundColor;ctx.fillRect(0,0,canvas.width,canvas.height);ctx.save();ctx.transform(canvas.width/originalWidth,0,0,canvas.height/originalHeight,0,0);sprite237(ctx,ctrans,frames[frame],0,time);ctx.restore()}nextFrame(ctx,ctrans);
return [canvas,width,height];}