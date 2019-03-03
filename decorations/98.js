module.exports = (createCanvas, concatMatrix, enhanceContext, cxform, place, tocolor, drawMorphPath, useRatio, drawPath, shadeColor, colorPalette) => { var width=61,height=124;
var canvas=createCanvas(width,height);

var ctx=canvas.getContext("2d");
enhanceContext(ctx);
var ctrans = new cxform(0,0,0,0,255,255,255,255);
 var shape172Index=0;function shape172(ctx,ctrans,frame,ratio,time){var pathData="M 436 68 L 457 26 Q 646 17 838 33 L 968 130 Q 1113 465 1228 793 L 1118 762 Q 989 406 854 72 L 823 80 436 68 M 1159 1066 L 1014 1600 Q 974 1536 918 1495 L 1065 959 Q 1114 1007 1159 1066 M 815 2276 L 815 2278 752 2435 652 2465 585 2463 595 2408 619 2409 714 2082 749 2115 750 2116 Q 801 2198 815 2276 M 749 2115 L 671 2400 749 2115";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[70,67,64,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 823 80 L 854 72 Q 989 406 1118 762 L 1065 959 1064 959 Q 1052 947 1031 945 L 1077 771 Q 965 424 823 80 M 882 1487 L 918 1495 749 2115 714 2082 882 1487";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[116,113,109,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 474 2398 L 436 68 823 80 Q 965 424 1077 771 L 1031 945 882 1487 714 2082 619 2409 595 2408 474 2398";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[35,32,30,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 1031 945 Q 1052 947 1064 959 L 1065 959 918 1495 882 1487 1031 945";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[91,88,84,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 1228 793 L 1159 1066 Q 1114 1007 1065 959 L 1118 762 1228 793 M 1014 1600 L 815 2276 Q 801 2198 750 2116 L 749 2115 918 1495 Q 974 1536 1014 1600";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[88,86,83,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 585 2463 L 373 2447 474 2398 595 2408 585 2463";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[53,52,50,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 436 68 L 457 26 Q 646 17 838 33 L 968 130 Q 1113 465 1228 793 L 1159 1066 1014 1600 815 2276 M 436 68 L 823 80 Q 965 424 1077 771 L 1031 945 M 854 72 Q 989 406 1118 762 M 1065 959 L 1118 762 M 882 1487 L 714 2082 749 2115 918 1495 1065 959 M 918 1495 Q 974 1536 1014 1600 M 882 1487 L 1031 945 M 749 2115 L 750 2116 Q 801 2198 815 2276";var scaleMode="NONE";ctx.strokeStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[0,0,0,0.8])));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 1031 945 Q 1052 947 1064 959 L 1065 959 Q 1114 1007 1159 1066";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[0,0,0,0.8])));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 815 2278 L 752 2435 652 2465 585 2463 373 2447 474 2398 436 68 M 595 2408 L 474 2398 M 671 2400 L 749 2115 M 714 2082 L 619 2409 595 2408";var scaleMode="NONE";ctx.strokeStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[0,0,0,0.8])));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 965 1631 Q 1072 1555 1037 1382 L 1030 1408 1009 1402 1055 1235 1076 1240 1058 1308 Q 1107 1585 951 1681 949 1655 965 1631";var grd=ctx.createLinearGradient(-334.5,923.75,-149.5,598.25);grd.addColorStop(0.0,tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[18,18,12,1]))));grd.addColorStop(1.0,tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[37,35,26,1]))));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 951 1681 L 924 1783 903 1776 949 1608 970 1615 965 1631 Q 949 1655 951 1681";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[18,18,12,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 965 1631 Q 1072 1555 1037 1382 L 1030 1408 1009 1402 1055 1235 1076 1240 1058 1308 Q 1107 1585 951 1681";var scaleMode="NONE";ctx.strokeStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[0,0,0,0.8])));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 951 1681 L 924 1783 903 1776 949 1608 970 1615 965 1631 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[0,0,0,0.8])));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 1084 516 L 1118 603 1097 617 1040 473 1061 458 1067 473 Q 1067 501 1084 516";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[18,18,12,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 1067 473 Q 1114 332 985 256 L 995 278 973 292 916 148 937 133 960 190 Q 1160 320 1084 516 1067 501 1067 473";var grd=ctx.createLinearGradient(-431.0,1172.25,-461.0,807.75);grd.addColorStop(0.0,tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[18,18,12,1]))));grd.addColorStop(1.0,tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[37,35,26,1]))));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 1084 516 L 1118 603 1097 617 1040 473 1061 458 1067 473";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[0,0,0,0.8])));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 1067 473 Q 1114 332 985 256 L 995 278 973 292 916 148 937 133 960 190 Q 1160 320 1084 516 Z";var scaleMode="NONE";ctx.strokeStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[0,0,0,0.8])));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 1018 767 L 957 764 Q 854 451 716 86 L 685 7 735 12 Q 893 411 1018 767";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[67,65,62,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 957 764 L 1018 767 Q 782 1657 517 2477 L 472 2478 551 2227 683 1780 783 1426 957 764";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[53,51,48,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 685 7 L 716 86 Q 701 232 695 375 L 641 235 614 166 Q 497 152 378 160 L 76 653 126 1433 Q 82 1258 26 1083 L 0 676 414 4 Q 551 -6 685 7 M 783 1426 L 683 1780 Q 663 1602 628 1412 L 722 1081 Q 744 1258 783 1426 M 551 2227 L 472 2478 Q 363 2481 260 2476 256 2221 225 1967 L 249 1970 Q 347 1976 454 1972 L 514 1783 Q 546 2078 551 2227";var grd=ctx.createLinearGradient(780.75,-342.0,629.25,1456.0);grd.addColorStop(0.0,tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[147,147,147,1]))));grd.addColorStop(0.9411764705882353,tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[67,64,61,1]))));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 614 166 L 641 235 615 263 592 201 614 166 M 694 470 L 718 436 821 720 722 1081 628 1412 589 1539 573 1594 549 1539 665 1135 784 715 694 470 M 170 1867 L 235 1874 Q 239 1925 249 1970 L 225 1967 160 1961 170 1867";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[70,70,70,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 641 235 L 695 375 718 436 694 470 615 263 641 235 M 549 1539 L 573 1594 514 1783 454 1972 443 1877 549 1539 M 378 160 L 373 196 221 442 92 653 76 653 92 653 126 1176 126 1177 170 1867 160 1961 126 1433 76 653 378 160";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[53,51,49,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 615 263 L 694 470 632 704 Q 568 962 555 1086 530 1317 549 1539 L 443 1877 Q 334 1882 235 1874 252 1018 615 263 M 92 653 L 221 442 Q 264 830 126 1176 L 92 653";var grd=ctx.createLinearGradient(560.0,86.0,560.0,1448.0);grd.addColorStop(0.027450980392156862,tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[109,109,109,1]))));grd.addColorStop(1.0,tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[51,49,46,1]))));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 716 86 Q 854 451 957 764 L 783 1426 Q 744 1258 722 1081 L 821 720 718 436 695 375 Q 701 232 716 86";var grd=ctx.createLinearGradient(673.75,114.5,920.25,1465.5);grd.addColorStop(0.0,tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[138,138,138,1]))));grd.addColorStop(0.9607843137254902,tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[58,55,53,1]))));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 614 166 L 592 201 Q 483 190 373 196 L 378 160 Q 497 152 614 166";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[149,149,149,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 694 470 L 784 715 665 1135 549 1539 Q 530 1317 555 1086 568 962 632 704 L 694 470 M 592 201 L 615 263 Q 252 1018 235 1874 L 170 1867 126 1177 126 1176 Q 264 830 221 442 L 373 196 Q 483 190 592 201";var grd=ctx.createLinearGradient(773.75,-464.75,636.25,1164.75);grd.addColorStop(0.0,tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[161,161,161,1]))));grd.addColorStop(0.9450980392156862,tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[84,82,82,1]))));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 683 1780 L 551 2227 Q 546 2078 514 1783 L 573 1594 589 1539 628 1412 Q 663 1602 683 1780 M 26 1083 Q 82 1258 126 1433 L 160 1961 225 1967 Q 256 2221 260 2476 L 115 2462 26 1083";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[84,80,78,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 443 1877 L 454 1972 Q 347 1976 249 1970 239 1925 235 1874 334 1882 443 1877";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[39,37,35,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 1018 767 Q 893 411 735 12 L 685 7 716 86 M 783 1426 L 683 1780 M 472 2478 L 517 2477 Q 782 1657 1018 767 M 614 166 L 641 235 695 375 M 615 263 L 694 470 784 715 665 1135 549 1539 443 1877 M 628 1412 L 722 1081 M 592 201 L 615 263 M 614 166 Q 497 152 378 160 M 373 196 Q 483 190 592 201 M 221 442 L 373 196 M 92 653 L 221 442 M 126 1176 L 126 1177 170 1867 235 1874 Q 334 1882 443 1877 M 126 1433 L 76 653 378 160 M 26 1083 L 0 676 414 4 Q 551 -6 685 7 M 126 1176 L 92 653";var scaleMode="NONE";ctx.strokeStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[0,0,0,0.8])));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 716 86 Q 854 451 957 764 L 783 1426 Q 744 1258 722 1081 L 821 720 718 436 695 375 Q 701 232 716 86 M 683 1780 L 551 2227 472 2478 M 573 1594 L 589 1539 628 1412 Q 663 1602 683 1780 M 76 653 L 92 653 M 221 442 Q 264 830 126 1176 M 235 1874 Q 252 1018 615 263 M 694 470 L 632 704 Q 568 962 555 1086 530 1317 549 1539 M 454 1972 L 514 1783 573 1594 M 26 1083 Q 82 1258 126 1433 L 160 1961 225 1967 249 1970 Q 347 1976 454 1972 M 26 1083 L 115 2462 260 2476 Q 256 2221 225 1967 M 260 2476 Q 363 2481 472 2478 M 514 1783 Q 546 2078 551 2227";var scaleMode="NONE";ctx.strokeStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[0,0,0,0.8])));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 1132 641 L 1157 712 M 210 793 L 183 907 M 516 233 L 494 381 M 449 1063 L 394 1383 M 483 1368 L 415 1692 M 912 1780 L 883 1881 M 1066 1238 L 1090 1150 M 352 453 L 205 1168 M 829 770 L 717 1344 M 353 2103 L 301 2436 M 254 2141 L 242 2224 M 446 2015 L 415 2213 M 847 1930 L 823 2032";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape172Index],[0,0,0,0.8])));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite173(ctx,ctrans,frame,ratio,time){var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(shape172,canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}} var shape174Index=1;function shape174(ctx,ctrans,frame,ratio,time){var pathData="M 275 53 Q 257 99 246 151 278 174 304 85 323 140 344 108 364 76 339 25 501 120 378 287 377 144 300 258 270 182 226 255 220 291 217 329 196 237 146 307 L 162 247 Q 144 166 93 232 60 103 13 239 -43 49 135 0 93 42 102 77 111 113 147 66 140 157 177 143 L 181 42 Q 192 180 275 53";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape174Index],[128,128,128,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 275 53 Q 192 180 181 42 L 177 143 Q 140 157 147 66 111 113 102 77 93 42 135 0 -43 49 13 239 60 103 93 232 144 166 162 247 L 146 307 Q 196 237 217 329 220 291 226 255 270 182 300 258 377 144 378 287 501 120 339 25 364 76 344 108 323 140 304 85 278 174 246 151 257 99 275 53 Z";var scaleMode="NONE";ctx.strokeStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape174Index],[0,0,0,0.8])));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite175(ctx,ctrans,frame,ratio,time){var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(shape174,canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}}function sprite176(ctx,ctrans,frame,ratio,time){ctx.save();ctx.transform(1,0,0,1,20.65,122.6);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(sprite173,canvas,ctx,[0.05,0.0,0.0,0.05,-20.5,-122.45],ctrans,1,(0+time)%1,0,time);place(sprite175,canvas,ctx,[0.05,0.0,0.0,0.05,-10.55,-95.45],ctrans,1,(0+time)%1,0,time);break}ctx.restore()}var frame=-1;var time=0;var frames=[];frames.push(0);var backgroundColor="#ffffff00";var originalWidth=61;var originalHeight=124;function nextFrame(ctx,ctrans){var oldframe=frame;frame=(frame+1)%frames.length;if(frame==oldframe){time++}else{time=0};drawFrame()}function drawFrame(){ctx.fillStyle=backgroundColor;ctx.fillRect(0,0,canvas.width,canvas.height);ctx.save();ctx.transform(canvas.width/originalWidth,0,0,canvas.height/originalHeight,0,0);sprite176(ctx,ctrans,frames[frame],0,time);ctx.restore()}nextFrame(ctx,ctrans);
return [canvas,width,height];}