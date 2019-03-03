module.exports = (createCanvas, concatMatrix, enhanceContext, cxform, place, tocolor, drawMorphPath, useRatio, drawPath, shadeColor, colorPalette) => { var width=283,height=75;
var canvas=createCanvas(width,height);

var ctx=canvas.getContext("2d");
enhanceContext(ctx);
var ctrans = new cxform(0,0,0,0,255,255,255,255);
function sprite416(ctx,ctrans,frame,ratio,time){var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(shape415,canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}}function shape415(ctx,ctrans,frame,ratio,time){var pathData="M 772 275 Q 824 235 860 242 896 249 942 280 947 183 973 112 1013 -2 1093 -1 1150 0 1201 125 1245 235 1245 316 1246 458 1185 555 1136 632 1093 632 L 1080 629 1072 630 Q 1085 717 1045 779 L 1001 823 1627 683 1627 926 1100 1046 1361 1511 Q 1316 1629 1172 1597 1174 1658 1075 1660 986 1609 942 1634 899 1659 880 1692 828 1756 711 1729 L 772 275 M 900 465 Q 864 466 851 492 845 505 844 534 842 555 854 578 869 606 896 607 923 608 940 580 953 560 954 538 958 464 900 465";var grd=ctx.createLinearGradient(938.75,836.0,1855.25,836.0);grd.addColorStop(0.0,tocolor(ctrans.apply([226,224,218,1])));grd.addColorStop(1.0,tocolor(ctrans.apply([196,192,183,1])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 772 275 L 711 1729 Q 650 1754 599 1702 556 1613 478 1663 398 1713 327 1597 212 1636 145 1492 L 472 1041 -41 926 -41 683 587 823 512 779 Q 452 727 430 624 423 628 394 615 358 599 328 570 235 481 242 316 247 214 278 122 322 -5 394 -1 456 2 504 119 542 212 546 293 599 250 664 239 741 225 772 275 M 629 465 Q 592 463 579 491 574 503 572 534 569 607 625 607 680 607 683 538 684 510 678 495 667 467 629 465";var grd=ctx.createLinearGradient(451.25,866.25,1096.75,965.75);grd.addColorStop(0.0,tocolor(ctrans.apply([226,224,218,1])));grd.addColorStop(1.0,tocolor(ctrans.apply([196,192,183,1])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 711 1729 Q 828 1756 880 1692 899 1659 942 1634 986 1609 1075 1660 1174 1658 1172 1597 1316 1629 1361 1511 L 1100 1046 1627 926 1627 683 1001 823 1045 779 Q 1085 717 1072 630 L 1080 629 1093 632 Q 1136 632 1185 555 1246 458 1245 316 1245 235 1201 125 1150 0 1093 -1 1013 -2 973 112 947 183 942 280 896 249 860 242 824 235 772 275 L 711 1729 Q 650 1754 599 1702 556 1613 478 1663 398 1713 327 1597 212 1636 145 1492 L 472 1041 -41 926 -41 683 587 823 512 779 Q 452 727 430 624 423 628 394 615 358 599 328 570 235 481 242 316 247 214 278 122 322 -5 394 -1 456 2 504 119 542 212 546 293 599 250 664 239 741 225 772 275 M 900 465 Q 958 464 954 538 953 560 940 580 923 608 896 607 869 606 854 578 842 555 844 534 845 505 851 492 864 466 900 465 M 629 465 Q 667 467 678 495 684 510 683 538 680 607 625 607 569 607 572 534 574 503 579 491 592 463 629 465";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite417(ctx,ctrans,frame,ratio,time){ctx.save();ctx.transform(1,0,0,1,139.55,43.1);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(sprite416,canvas,ctx,[0.017028045654296876,0.00983123779296875,-0.00983123779296875,0.017028045654296876,-120.25,-38.55],ctrans.merge(new cxform(0,0,0,0,0,0,0,77)),1,(0+time)%1,0,time);place(sprite416,canvas,ctx,[0.017852020263671876,0.00824127197265625,-0.00824127197265625,0.017852020263671876,-95.5,-24.3],ctrans.merge(new cxform(0,0,0,0,0,0,0,77)),1,(0+time)%1,0,time);place(sprite416,canvas,ctx,[0.018869781494140626,0.00552520751953125,-0.00552520751953125,0.018869781494140626,-70.1,-12.3],ctrans.merge(new cxform(0,0,0,0,0,0,0,77)),1,(0+time)%1,0,time);place(sprite416,canvas,ctx,[0.019591522216796876,0.001659393310546875,-0.001659393310546875,0.019591522216796876,-43.1,-4.1],ctrans.merge(new cxform(0,0,0,0,0,0,0,77)),1,(0+time)%1,0,time);place(sprite416,canvas,ctx,[0.0196533203125,-5.523681640625E-4,5.523681640625E-4,0.0196533203125,-13.7,-1.5],ctrans.merge(new cxform(0,0,0,0,0,0,0,77)),1,(0+time)%1,0,time);place(sprite416,canvas,ctx,[-0.01602020263671875,0.009249114990234375,0.0095550537109375,0.0171875,126.9,-41.5],ctrans.merge(new cxform(0,0,0,0,0,0,0,77)),1,(0+time)%1,0,time);place(sprite416,canvas,ctx,[-0.016707611083984376,0.008609771728515625,0.00824127197265625,0.017852020263671876,101.3,-27.0],ctrans.merge(new cxform(0,0,0,0,0,0,0,77)),1,(0+time)%1,0,time);place(sprite416,canvas,ctx,[-0.018869781494140626,0.00552520751953125,0.00552520751953125,0.018869781494140626,75.95,-13.5],ctrans.merge(new cxform(0,0,0,0,0,0,0,77)),1,(0+time)%1,0,time);place(sprite416,canvas,ctx,[-0.019129180908203126,0.0016204833984375,0.001659393310546875,0.019591522216796876,48.3,-5.0],ctrans.merge(new cxform(0,0,0,0,0,0,0,77)),1,(0+time)%1,0,time);place(sprite416,canvas,ctx,[0.017028045654296876,0.00983123779296875,-0.00983123779296875,0.017028045654296876,-121.7,-41.4],ctrans,1,(0+time)%1,0,time);place(sprite416,canvas,ctx,[0.017852020263671876,0.00824127197265625,-0.00824127197265625,0.017852020263671876,-96.95,-27.15],ctrans.merge(new cxform(0,0,0,0,248,248,248,256)),1,(0+time)%1,0,time);place(sprite416,canvas,ctx,[0.018869781494140626,0.00552520751953125,-0.00552520751953125,0.018869781494140626,-71.55,-15.15],ctrans,1,(0+time)%1,0,time);place(sprite416,canvas,ctx,[0.019591522216796876,0.001659393310546875,-0.001659393310546875,0.019591522216796876,-44.55,-6.95],ctrans.merge(new cxform(0,0,0,0,241,241,241,256)),1,(0+time)%1,0,time);place(sprite416,canvas,ctx,[0.0196533203125,-5.523681640625E-4,5.523681640625E-4,0.0196533203125,-15.15,-4.35],ctrans,1,(0+time)%1,0,time);place(sprite416,canvas,ctx,[-0.017028045654296876,0.00983123779296875,0.00983123779296875,0.017028045654296876,124.4,-42.6],ctrans,1,(0+time)%1,0,time);place(sprite416,canvas,ctx,[-0.017852020263671876,0.00824127197265625,0.00824127197265625,0.017852020263671876,99.65,-28.35],ctrans.merge(new cxform(26,26,26,0,230,230,230,256)),1,(0+time)%1,0,time);place(sprite416,canvas,ctx,[-0.018869781494140626,0.00552520751953125,0.00552520751953125,0.018869781494140626,74.25,-16.35],ctrans,1,(0+time)%1,0,time);place(sprite416,canvas,ctx,[-0.019591522216796876,0.001659393310546875,0.001659393310546875,0.019591522216796876,47.25,-8.15],ctrans,1,(0+time)%1,0,time);break}ctx.restore()}var frame=-1;var time=0;var frames=[];frames.push(0);var backgroundColor="#ffffff00";var originalWidth=283;var originalHeight=75;function nextFrame(ctx,ctrans){var oldframe=frame;frame=(frame+1)%frames.length;if(frame==oldframe){time++}else{time=0};drawFrame()}function drawFrame(){ctx.fillStyle=backgroundColor;ctx.fillRect(0,0,canvas.width,canvas.height);ctx.save();ctx.transform(canvas.width/originalWidth,0,0,canvas.height/originalHeight,0,0);sprite417(ctx,ctrans,frames[frame],0,time);ctx.restore()}nextFrame(ctx,ctrans);
return [canvas,width,height];}