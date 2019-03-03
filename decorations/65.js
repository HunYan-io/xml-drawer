module.exports = (createCanvas, concatMatrix, enhanceContext, cxform, place, tocolor, drawMorphPath, useRatio, drawPath, shadeColor, colorPalette) => { var width=53,height=48;
var canvas=createCanvas(width,height);

var ctx=canvas.getContext("2d");
enhanceContext(ctx);
var ctrans = new cxform(0,0,0,0,255,255,255,255);
 var shape289Index=1;function shape289(ctx,ctrans,frame,ratio,time){var pathData="M 469 148 L 498 217 Q 507 347 333 317 336 195 469 148 M 1 357 Q -16 87 306 0 334 8 359 23 367 158 155 287 L 153 288 Q 48 313 1 357";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape289Index],[128,128,128,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 498 217 L 523 309 510 425 437 457 407 460 396 461 Q 237 471 112 420 132 319 270 334 372 397 510 425 392 348 312 313 L 333 317 Q 507 347 498 217";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape289Index],[91,85,79,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 112 420 Q 53 395 1 357 48 313 153 288 L 155 287 199 282 Q 232 310 270 334 132 319 112 420";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape289Index],[74,67,59,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 359 23 Q 425 62 469 148 336 195 333 317 L 312 313 Q 241 282 199 282 L 155 287 Q 367 158 359 23";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape289Index],[180,170,165,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 469 148 L 498 217 523 309 510 425 437 457 407 460 396 461 Q 237 471 112 420 53 395 1 357 -16 87 306 0 334 8 359 23 425 62 469 148 M 270 334 Q 232 310 199 282 241 282 312 313 392 348 510 425 372 397 270 334";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape289Index],[0,0,0,0.8])));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 781 18 Q 775 113 870 191 L 945 241 905 250 Q 870 259 838 271 L 812 216 Q 766 144 671 111 715 57 781 18";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape289Index],[180,170,165,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 945 241 L 870 191 Q 775 113 781 18 795 9 811 1 1174 41 1018 323 1010 286 994 266 975 243 945 241 M 671 111 Q 766 144 812 216 L 838 271 729 274 Q 614 265 621 194 640 149 671 111";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape289Index],[128,128,128,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 905 250 L 945 241 Q 975 243 994 266 1010 286 1018 323 950 368 864 394 898 353 910 326 929 280 886 270 L 905 250";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape289Index],[74,67,59,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 886 270 Q 929 280 910 326 898 353 864 394 747 428 597 427 L 584 355 Q 589 265 621 194 614 265 729 274 L 838 271 Q 704 316 622 388 823 323 886 270";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape289Index],[91,85,79,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 781 18 Q 715 57 671 111 M 838 271 Q 870 259 905 250 L 945 241 M 1018 323 Q 1174 41 811 1 795 9 781 18 M 864 394 Q 950 368 1018 323 M 886 270 L 905 250 M 838 271 Q 704 316 622 388 823 323 886 270 M 864 394 Q 747 428 597 427 L 584 355 Q 589 265 621 194 640 149 671 111";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape289Index],[0,0,0,0.8])));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 823 718 Q 890 740 976 759 L 820 807 768 966 Q 714 915 670 854 691 804 725 772 764 733 823 718 M 637 803 L 614 762 Q 613 724 624 700 640 663 685 661 L 738 687 Q 727 724 705 752 679 784 637 803 M 296 650 L 328 615 Q 390 619 403 683 L 406 709 400 735 Q 375 728 356 718 309 694 296 650 M 380 823 L 356 963 244 840 144 857 Q 187 788 233 728 292 717 332 749 362 773 380 823";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape289Index],[128,128,128,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 670 854 L 637 803 Q 679 784 705 752 727 724 738 687 L 823 718 Q 764 733 725 772 691 804 670 854 M 233 728 L 296 650 Q 309 694 356 718 375 728 400 735 L 380 823 Q 362 773 332 749 292 717 233 728";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape289Index],[180,170,165,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 614 762 L 578 684 Q 549 616 529 539 L 571 532 Q 581 603 685 661 640 663 624 700 613 724 614 762 M 328 615 Q 376 564 427 522 L 449 560 Q 430 616 414 677 L 406 709 403 683 Q 390 619 328 615";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape289Index],[91,85,79,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 823 718 Q 890 740 976 759 L 820 807 768 966 Q 714 915 670 854 L 637 803 614 762 578 684 Q 549 616 529 539 L 571 532 Q 581 603 685 661 L 738 687 823 718 M 233 728 L 296 650 328 615 Q 376 564 427 522 L 449 560 Q 430 616 414 677 L 406 709 400 735 380 823 356 963 244 840 144 857 Q 187 788 233 728";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape289Index],[0,0,0,0.8])));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 588 394 L 570 421 Q 476 371 402 437 402 418 405 399 L 415 354 Q 481 409 612 345 L 588 394";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape289Index],[180,170,165,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 570 421 L 588 394 612 345 622 327 624 404 Q 574 483 567 589 553 572 548 549 L 548 593 Q 501 588 476 575 426 553 403 473 L 471 497 Q 511 508 570 421 M 405 399 Q 402 418 402 437 L 403 473 Q 411 537 457 580 351 571 405 399 M 588 394 Q 553 472 548 549 553 472 588 394";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape289Index],[91,85,79,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 612 345 Q 481 409 415 354 523 287 622 327 L 612 345 M 402 437 Q 476 371 570 421 511 508 471 497 L 403 473 Q 426 553 476 575 501 588 548 593 L 549 612 470 591 457 580 Q 411 537 403 473 L 402 437 M 567 589 Q 574 483 624 404 L 627 632 Q 587 617 567 589";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape289Index],[128,128,128,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 588 394 L 612 345 M 415 354 L 405 399 Q 402 418 402 437 L 403 473 Q 411 537 457 580 L 470 591 549 612 548 593 548 549 Q 553 472 588 394 M 622 327 L 612 345 M 624 404 L 622 327 Q 523 287 415 354 M 548 549 Q 553 572 567 589 M 624 404 L 627 632 Q 587 617 567 589 M 405 399 Q 351 571 457 580";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape289Index],[0,0,0,0.8])));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite290(ctx,ctrans,frame,ratio,time){var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(shape289,canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}}function sprite291(ctx,ctrans,frame,ratio,time){ctx.save();ctx.transform(1,0,0,1,25.15,22.65);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(sprite290,canvas,ctx,[0.05,0.0,0.0,0.05,-25.0,-22.5],ctrans,1,(0+time)%1,0,time);break}ctx.restore()}var frame=-1;var time=0;var frames=[];frames.push(0);var backgroundColor="#ffffff00";var originalWidth=53;var originalHeight=48;function nextFrame(ctx,ctrans){var oldframe=frame;frame=(frame+1)%frames.length;if(frame==oldframe){time++}else{time=0};drawFrame()}function drawFrame(){ctx.fillStyle=backgroundColor;ctx.fillRect(0,0,canvas.width,canvas.height);ctx.save();ctx.transform(canvas.width/originalWidth,0,0,canvas.height/originalHeight,0,0);sprite291(ctx,ctrans,frames[frame],0,time);ctx.restore()}nextFrame(ctx,ctrans);
return [canvas,width,height];}