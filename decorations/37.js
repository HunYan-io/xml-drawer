module.exports = (createCanvas, concatMatrix, enhanceContext, cxform, place, tocolor, drawMorphPath, useRatio, drawPath, shadeColor, colorPalette) => { var width=94,height=97;
var canvas=createCanvas(width,height);

var ctx=canvas.getContext("2d");
enhanceContext(ctx);
var ctrans = new cxform(0,0,0,0,255,255,255,255);
function shape412(ctx,ctrans,frame,ratio,time){var pathData="M 522 514 L 515 486 Q 845 330 1267 0 1285 16 1290 36 889 318 522 514";ctx.fillStyle=tocolor(ctrans.apply([79,49,21,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 1290 36 Q 1296 60 1282 90 884 311 531 557 L 522 514 Q 889 318 1290 36";ctx.fillStyle=tocolor(ctrans.apply([48,29,12,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 1290 36 Q 1296 60 1282 90 884 311 531 557 L 522 514 515 486 Q 845 330 1267 0 1285 16 1290 36 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=0.05;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 501 473 L 537 381 557 421 501 502 535 484 606 456 540 491 490 517 478 509 490 495 501 473";var grd=ctx.createLinearGradient(556.25,390.0,499.75,484.0);grd.addColorStop(0.01568627450980392,tocolor(ctrans.apply([235,221,84,1])));grd.addColorStop(0.9921568627450981,tocolor(ctrans.apply([212,206,88,1])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 501 502 L 582 412 581 450 535 484 501 502 M 540 491 Q 615 464 680 457 607 478 545 508 L 607 488 627 490 604 508 576 520 689 503 689 516 591 525 557 524 576 520 557 524 513 538 513 539 525 555 515 579 Q 533 657 501 725 512 666 502 611 L 499 594 470 636 405 697 Q 379 719 342 720 L 365 706 343 692 Q 292 709 238 714 L 300 656 Q 247 678 169 680 140 663 26 529 128 640 200 630 L 166 646 Q 220 670 342 632 L 279 693 Q 329 690 358 666 L 353 685 412 674 387 645 410 661 Q 466 615 494 553 L 485 543 Q 420 522 366 530 L 381 516 474 527 445 503 478 509 Q 498 459 484 414 506 424 501 473 L 490 495 478 509 490 517 540 491 M 577 543 Q 641 569 685 617 L 659 636 Q 647 614 618 593 L 622 590 Q 597 554 523 540 L 545 540 577 543 M 203 609 L 249 609 318 607 Q 356 602 429 563 L 446 556 376 606 Q 293 626 203 609 M 277 546 L 327 549 283 559 183 571 183 570 Q 223 550 277 546 M 511 528 L 545 508 511 528";ctx.fillStyle=tocolor(ctrans.apply([181,161,58,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 26 529 Q 88 594 135 547 231 481 297 476 241 463 185 474 313 432 445 477 421 438 382 416 412 422 448 466 L 478 509 445 503 474 527 381 516 361 516 Q 366 504 387 490 419 493 445 503 419 493 387 490 366 504 361 516 L 381 516 366 530 Q 420 522 485 543 L 481 550 Q 443 612 387 645 443 612 481 550 L 485 543 494 553 Q 466 615 410 661 L 387 645 412 674 353 685 358 666 Q 329 690 279 693 L 342 632 Q 220 670 166 646 L 200 630 Q 128 640 26 529 M 249 609 L 203 609 Q 293 626 376 606 L 446 556 429 563 Q 325 602 249 609 M 183 570 L 183 571 283 559 327 549 277 546 Q 223 550 183 570 L 172 575 Q 193 538 248 524 193 538 172 575 L 183 570 M 379 548 Q 277 606 203 609 277 606 379 548";var grd=ctx.createLinearGradient(246.25,398.25,269.75,645.75);grd.addColorStop(0.0,tocolor(ctrans.apply([235,221,84,1])));grd.addColorStop(0.9921568627450981,tocolor(ctrans.apply([212,206,88,1])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 582 576 L 597 602 616 647 Q 599 607 561 573 L 543 549 582 576 M 502 611 Q 479 660 446 709 L 435 707 Q 394 744 335 763 368 751 403 716 294 771 230 755 311 734 345 702 288 741 214 732 191 721 188 709 218 724 260 686 223 710 169 680 247 678 300 656 L 238 714 Q 292 709 343 692 L 365 706 342 720 Q 379 719 405 697 L 470 636 Q 456 677 425 705 L 435 707 425 705 Q 456 677 470 636 L 499 594 502 611 M 429 563 Q 356 602 318 607 L 249 609 Q 325 602 429 563";ctx.fillStyle=tocolor(ctrans.apply([153,134,41,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 618 593 L 608 601 582 576 543 549 523 540 Q 597 554 622 590 L 618 593";ctx.fillStyle=tocolor(ctrans.apply([212,206,88,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 591 525 Q 647 528 696 555 L 663 574 Q 624 552 577 543 L 545 540 523 540 543 549 561 573 Q 578 596 582 622 L 565 626 Q 565 585 538 555 552 596 543 636 545 600 529 561 L 525 555 513 538 557 524 591 525";var grd=ctx.createLinearGradient(668.0,521.5,538.0,644.5);grd.addColorStop(0.01568627450980392,tocolor(ctrans.apply([235,221,84,1])));grd.addColorStop(0.9921568627450981,tocolor(ctrans.apply([212,206,88,1])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 501 473 L 537 381 557 421 501 502 582 412 581 450 535 484 606 456 540 491 Q 615 464 680 457 607 478 545 508 L 607 488 627 490 604 508 576 520 689 503 689 516 591 525 Q 647 528 696 555 L 663 574 Q 624 552 577 543 641 569 685 617 L 659 636 Q 647 614 618 593 L 608 601 582 576 597 602 616 647 Q 599 607 561 573 578 596 582 622 L 565 626 Q 565 585 538 555 552 596 543 636 545 600 529 561 L 525 555 515 579 Q 533 657 501 725 512 666 502 611 479 660 446 709 L 435 707 Q 394 744 335 763 368 751 403 716 294 771 230 755 311 734 345 702 288 741 214 732 191 721 188 709 218 724 260 686 223 710 169 680 140 663 26 529 88 594 135 547 231 481 297 476 241 463 185 474 313 432 445 477 421 438 382 416 412 422 448 466 L 478 509 Q 498 459 484 414 506 424 501 473 L 490 495 478 509 490 517 540 491 M 381 516 L 361 516 Q 366 504 387 490 419 493 445 503 M 381 516 L 474 527 445 503 M 249 609 L 203 609 Q 277 606 379 548 M 446 556 L 429 563 M 249 609 Q 325 602 429 563 M 387 645 Q 443 612 481 550 L 485 543 494 553 Q 466 615 410 661 L 387 645 M 183 570 L 172 575 Q 193 538 248 524 M 277 546 Q 223 550 183 570 M 523 540 Q 597 554 622 590 L 618 593 M 576 520 L 557 524 591 525 M 525 555 L 513 538 557 524 M 523 540 L 545 540 577 543 M 545 508 L 511 528 M 543 549 L 523 540 M 582 576 L 543 549 561 573 M 501 502 L 535 484 M 499 594 L 502 611 M 470 636 Q 456 677 425 705 L 435 707";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=0.05;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 479 494 L 483 488 Q 488 483 494 485 494 494 497 500 L 520 531 533 543 517 544 490 517 479 494 M 517 544 Q 517 535 520 531 517 535 517 544 M 497 500 Q 492 505 490 517 492 505 497 500";ctx.fillStyle=tocolor(ctrans.apply([207,188,90,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 533 543 L 546 552 Q 554 565 546 576 L 536 575 Q 536 587 519 585 L 509 576 Q 489 559 480 536 472 520 470 502 L 475 495 479 494 490 517 517 544 533 543 M 517 544 L 526 571 536 575 526 571 497 543 Q 494 555 509 576 494 555 497 543 L 526 571 517 544 M 479 494 L 482 508 490 531 490 517 490 531 497 543 490 531 482 508 Q 474 515 480 536 474 515 482 508 L 479 494";ctx.fillStyle=tocolor(ctrans.apply([163,145,56,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 479 494 L 483 488 Q 488 483 494 485 494 494 497 500 L 520 531 533 543 546 552 Q 554 565 546 576 L 536 575 Q 536 587 519 585 L 509 576 Q 489 559 480 536 472 520 470 502 L 475 495 479 494 M 490 517 Q 492 505 497 500 M 520 531 Q 517 535 517 544 M 536 575 L 526 571 497 543 Q 494 555 509 576 M 526 571 L 517 544 M 490 517 L 490 531 497 543 M 490 531 L 482 508 Q 474 515 480 536 M 482 508 L 479 494 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=0.05;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite413(ctx,ctrans,frame,ratio,time){var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(shape412,canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}}function sprite414(ctx,ctrans,frame,ratio,time){ctx.save();ctx.transform(1,0,0,1,41.9,87.3);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(sprite413,canvas,ctx,[0.044773101806640625,-0.050389862060546874,0.049974822998046876,0.044635009765625,-43.05,-22.2],ctrans,1,(0+time)%1,0,time);break}ctx.restore()}var frame=-1;var time=0;var frames=[];frames.push(0);var backgroundColor="#ffffff00";var originalWidth=94;var originalHeight=97;function nextFrame(ctx,ctrans){var oldframe=frame;frame=(frame+1)%frames.length;if(frame==oldframe){time++}else{time=0};drawFrame()}function drawFrame(){ctx.fillStyle=backgroundColor;ctx.fillRect(0,0,canvas.width,canvas.height);ctx.save();ctx.transform(canvas.width/originalWidth,0,0,canvas.height/originalHeight,0,0);sprite414(ctx,ctrans,frames[frame],0,time);ctx.restore()}nextFrame(ctx,ctrans);
return [canvas,width,height];}