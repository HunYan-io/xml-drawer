module.exports = (createCanvas, concatMatrix, enhanceContext, cxform, place, tocolor, drawMorphPath, useRatio, drawPath, shadeColor, colorPalette) => { var width=72,height=135;
var canvas=createCanvas(width,height);

var ctx=canvas.getContext("2d");
enhanceContext(ctx);
var ctrans = new cxform(0,0,0,0,255,255,255,255);

function sprite464(ctx,ctrans,frame,ratio,time){
	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place(shape463,canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}
}

function shape465(ctx,ctrans,frame,ratio,time){
	var pathData="M 567 -1116 L 528 -758 264 -748 325 -1116 567 -1116";
	ctx.fillStyle=tocolor(ctrans.apply([37,29,19,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 423 -1118 L 469 -1114 407 -748 360 -753 423 -1118 M 482 -1118 L 528 -1114 466 -748 419 -753 482 -1118 M 365 -1118 L 411 -1114 349 -748 302 -753 365 -1118 M 305 -1118 L 351 -1114 289 -748 242 -753 305 -1118";
	ctx.fillStyle=tocolor(ctrans.apply([126,99,59,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 305 -1118 L 242 -753 289 -748 351 -1114 305 -1118 M 365 -1118 L 302 -753 349 -748 411 -1114 365 -1118 M 482 -1118 L 419 -753 466 -748 528 -1114 482 -1118 M 423 -1118 L 360 -753 407 -748 469 -1114 423 -1118";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.2;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 551 -1186 Q 586 -1193 603 -1181 L 533 -748 479 -754 551 -1186";
	ctx.fillStyle=tocolor(ctrans.apply([36,52,91,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 551 -1186 L 479 -754 533 -748 603 -1181 Q 586 -1193 551 -1186 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.2;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 232 -753 L -26 -753 -33 -999 232 -999 232 -753";
	ctx.fillStyle=tocolor(ctrans.apply([35,32,25,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 232 -753 L -26 -753 -33 -999 232 -999 232 -753 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.2;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

}

function shape462(ctx,ctrans,frame,ratio,time){
	var pathData="M 725 -2590 L 725 -9 516 -9 642 -2703 725 -2590";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,0.3019608]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 613 -2445 L 664 -2441 664 -2030 Q 145 -2044 -412 -1954 L -659 -1954 -659 -1784 Q -697 -1585 -712 -1300 L -712 -2261 -653 -2352 -653 -2065 613 -2065 613 -2445 M 6 -2704 Q 28 -2671 139 -2603 L -416 -2603 -416 -2704 6 -2704 M 608 -1819 Q 637 -1910 664 -1933 L 664 -1691 Q 643 -1597 608 -1573 L 608 -1819 M 664 -1377 L 664 -1141 613 -1029 613 -1315 -479 -1315 Q 65 -1366 664 -1377 M 664 -938 L 664 -733 Q 521 -686 300 -689 51 -686 -101 -742 L 613 -742 613 -885 Q 645 -884 664 -938 M 664 -460 L 664 -55 613 -114 613 -319 664 -460 M 664 -7 L -292 -7 Q -494 -26 -527 -68 L -22 -68 Q 266 -25 664 -7 M -712 -108 L -712 -585 -653 -906 -653 -742 -426 -742 Q -299 -680 -20 -641 L -653 -641 -653 -312 Q -682 -264 -712 -108";
	ctx.fillStyle=tocolor(ctrans.apply([138,103,58,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 664 -2441 L 613 -2445 613 -2603 139 -2603 Q 28 -2671 6 -2704 L 664 -2704 664 -2441 M -653 -2352 L -712 -2261 -712 -2704 -416 -2704 -416 -2603 -653 -2603 -653 -2352 M -712 -1300 Q -697 -1585 -659 -1784 L -659 -1415 608 -1415 608 -1573 Q 643 -1597 664 -1691 L 664 -1377 Q 65 -1366 -479 -1315 L -653 -1315 -653 -906 -712 -585 -712 -1300 M -412 -1954 Q 145 -2044 664 -2030 L 664 -1933 Q 637 -1910 608 -1819 L 608 -1954 -412 -1954 M 613 -1029 L 664 -1141 664 -938 Q 645 -884 613 -885 L 613 -1029 M 664 -733 L 664 -460 613 -319 613 -641 -20 -641 Q -299 -680 -426 -742 L -101 -742 Q 51 -686 300 -689 521 -686 664 -733 M 664 -55 L 664 -7 Q 266 -25 -22 -68 L 613 -68 613 -114 664 -55 M -292 -7 L -712 -7 -712 -108 Q -682 -264 -653 -312 L -653 -68 -527 -68 Q -494 -26 -292 -7";
	ctx.fillStyle=tocolor(ctrans.apply([154,118,70,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 613 -2445 L 613 -2065 -653 -2065 -653 -2352 -653 -2603 -416 -2603 139 -2603 613 -2603 613 -2445";
	var grd=ctx.createLinearGradient(-0.25,-1875.0,0.25,-2761.0);
	grd.addColorStop(0.0,tocolor(ctrans.apply([105,72,29,1])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([65,42,12,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -659 -1784 L -659 -1954 -412 -1954 608 -1954 608 -1819 608 -1573 608 -1415 -659 -1415 -659 -1784";
	var grd=ctx.createLinearGradient(-27.0,-1162.0,-27.0,-2206.0);
	grd.addColorStop(0.027450980392156862,tocolor(ctrans.apply([105,72,29,1])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([65,42,12,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -479 -1315 L 613 -1315 613 -1029 613 -885 613 -742 -101 -742 -426 -742 -653 -742 -653 -906 -653 -1315 -479 -1315";
	var grd=ctx.createLinearGradient(41.0,-391.0,41.0,-1383.0);
	grd.addColorStop(0.027450980392156862,tocolor(ctrans.apply([105,72,29,1])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([65,42,12,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 613 -319 L 613 -114 613 -68 -22 -68 -527 -68 -653 -68 -653 -312 -653 -641 -20 -641 613 -641 613 -319";
	var grd=ctx.createLinearGradient(-24.0,337.0,-24.0,-655.0);
	grd.addColorStop(0.027450980392156862,tocolor(ctrans.apply([105,72,29,1])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([65,42,12,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 664 -2441 L 613 -2445 M -653 -2352 L -712 -2261 M -712 -1300 Q -697 -1585 -659 -1784 M -412 -1954 Q 145 -2044 664 -2030 M 6 -2704 Q 28 -2671 139 -2603 M 608 -1819 Q 637 -1910 664 -1933 M 608 -1573 Q 643 -1597 664 -1691 M 664 -1377 Q 65 -1366 -479 -1315 M 613 -1029 L 664 -1141 M 613 -885 Q 645 -884 664 -938 M -101 -742 Q 51 -686 300 -689 521 -686 664 -733 M 613 -114 L 664 -55 M -22 -68 Q 266 -25 664 -7 M 664 -460 L 613 -319 M -416 -2704 L -416 -2603 M -712 -585 L -653 -906 M -653 -312 Q -682 -264 -712 -108 M -426 -742 Q -299 -680 -20 -641 M -527 -68 Q -494 -26 -292 -7";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.2;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 613 -2445 L 613 -2065 -653 -2065 -653 -2352 -653 -2603 -416 -2603 139 -2603 613 -2603 613 -2445 M -712 -2261 L -712 -1300 M -659 -1784 L -659 -1954 -412 -1954 608 -1954 608 -1819 608 -1573 608 -1415 -659 -1415 -659 -1784 M 664 -2030 L 664 -2441 664 -2704 6 -2704 -416 -2704 -712 -2704 -712 -2261 M 664 -1933 L 664 -2030 M 664 -1691 L 664 -1933 M 664 -1141 L 664 -1377 664 -1691 M -479 -1315 L 613 -1315 613 -1029 613 -885 613 -742 -101 -742 M 664 -1141 L 664 -938 664 -733 664 -460 664 -55 664 -7 -292 -7 -712 -7 -712 -108 -712 -585 -712 -1300 M 613 -319 L 613 -114 613 -68 -22 -68 M 613 -319 L 613 -641 -20 -641 -653 -641 -653 -312 -653 -68 -527 -68 -22 -68 M -653 -906 L -653 -1315 -479 -1315 M -653 -906 L -653 -742 -426 -742 -101 -742";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 365 -2354 L 449 -2351 449 -2326 448 -2311 365 -2315 342 -2311 342 -2351 365 -2354 365 -2315 365 -2354";
	ctx.fillStyle=tocolor(ctrans.apply([149,167,175,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 365 -2354 L 365 -2377 365 -2354 342 -2351 342 -2400 Q 399 -2412 449 -2400 L 449 -2351 365 -2354 M 365 -2315 L 448 -2311 Q 441 -2078 397 -2087 347 -2096 342 -2117 L 342 -2311 365 -2315 365 -2131 365 -2315";
	ctx.fillStyle=tocolor(ctrans.apply([35,86,109,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 448 -2311 L 449 -2326 449 -2074 Q 396 -2065 342 -2074 L 342 -2117 Q 347 -2096 397 -2087 441 -2078 448 -2311";
	ctx.fillStyle=tocolor(ctrans.apply([19,64,84,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 552 -2396 L 506 -2071 Q 460 -2069 454 -2078 L 500 -2403 552 -2396";
	var grd=ctx.createLinearGradient(493.0,-2240.0,549.0,-2234.0);
	grd.addColorStop(0.0,tocolor(ctrans.apply([203,196,181,1])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([154,144,120,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 595 -2326 L 595 -2075 546 -2075 546 -2326 595 -2326 M -612 -1093 L -568 -744 -602 -740 -646 -1089 -612 -1093 M -464 -966 L -368 -771 -410 -750 -546 -1026 -504 -1047 -465 -968 -466 -968 -464 -966";
	ctx.fillStyle=tocolor(ctrans.apply([187,180,161,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 450 -1503 L 532 -1814 Q 560 -1797 587 -1794 548 -1610 496 -1443 433 -1433 450 -1503";
	ctx.fillStyle=tocolor(ctrans.apply([123,45,16,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 532 -1814 L 607 -1794 587 -1794 Q 560 -1797 532 -1814 M -608 -1728 Q -633 -1711 -659 -1714 L -608 -1728";
	ctx.fillStyle=tocolor(ctrans.apply([208,179,137,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 607 -1794 L 507 -1420 Q 442 -1418 432 -1440 L 450 -1503 Q 433 -1433 496 -1443 548 -1610 587 -1794 L 607 -1794";
	ctx.fillStyle=tocolor(ctrans.apply([79,26,7,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -548 -2386 L -560 -2429 -511 -2442 -500 -2400 -548 -2386 M -483 -2338 L -416 -2087 Q -437 -2069 -465 -2074 L -532 -2326 -483 -2338";
	ctx.fillStyle=tocolor(ctrans.apply([219,213,197,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -609 -2244 L -611 -2249 -598 -2258 -605 -2263 -607 -2267 -595 -2313 Q -595 -2327 -603 -2340 -611 -2352 -611 -2365 L -606 -2378 -611 -2395 -606 -2378 -611 -2365 Q -611 -2352 -603 -2340 -595 -2327 -595 -2313 L -607 -2267 -605 -2263 -598 -2258 -611 -2249 -609 -2244 M -568 -2099 L -568 -2076 Q -607 -2067 -646 -2076 L -646 -2099 -568 -2099 M -646 -2119 L -646 -2431 Q -611 -2444 -568 -2431 L -568 -2119 -646 -2119";
	var grd=ctx.createLinearGradient(-642.0,-2258.0,-552.0,-2258.0);
	grd.addColorStop(0.027450980392156862,tocolor(ctrans.apply([135,55,26,1])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([109,34,6,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -500 -2400 L -483 -2338 -532 -2326 -548 -2386 -500 -2400";
	ctx.fillStyle=tocolor(ctrans.apply([90,128,145,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -646 -2099 L -646 -2119 -568 -2119 -568 -2099 -646 -2099";
	ctx.fillStyle=tocolor(ctrans.apply([205,197,177,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -480 -1630 Q -467 -1606 -302 -1614 L -292 -1615 -261 -1617 Q -192 -1626 -181 -1656 L -166 -1656 -172 -1644 -174 -1626 -173 -1616 -166 -1598 -166 -1597 -462 -1597 -166 -1597 -166 -1598 -154 -1598 -158 -1583 -160 -1574 -160 -1566 -154 -1538 -141 -1538 -108 -1538 -112 -1518 -112 -1496 -108 -1479 -128 -1479 -148 -1479 -152 -1465 -154 -1450 -152 -1432 -148 -1420 -387 -1420 Q -227 -1424 -228 -1448 -250 -1458 -291 -1465 L -393 -1466 -416 -1479 -380 -1479 -168 -1494 Q -149 -1511 -157 -1524 L -420 -1524 -416 -1538 -407 -1538 -462 -1539 -466 -1546 -187 -1556 Q -173 -1563 -187 -1574 L -440 -1576 -462 -1597 -474 -1597 Q -482 -1614 -480 -1630 M -407 -1538 L -154 -1538 -407 -1538 M -148 -1479 L -380 -1479 -148 -1479";
	ctx.fillStyle=tocolor(ctrans.apply([89,88,102,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -181 -1656 Q -192 -1626 -261 -1617 L -292 -1615 -302 -1614 Q -467 -1606 -480 -1630 L -474 -1656 -181 -1656 M -387 -1420 L -456 -1420 Q -465 -1449 -456 -1479 L -416 -1479 Q -426 -1501 -420 -1524 L -157 -1524 Q -149 -1511 -168 -1494 L -380 -1479 -416 -1479 -393 -1466 -291 -1465 Q -250 -1458 -228 -1448 -227 -1424 -387 -1420 M -466 -1546 Q -480 -1572 -462 -1597 L -440 -1576 -187 -1574 Q -173 -1563 -187 -1556 L -466 -1546";
	ctx.fillStyle=tocolor(ctrans.apply([121,120,135,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -166 -1598 L -173 -1616 -174 -1626 -172 -1644 -166 -1656 -156 -1645 -158 -1633 -159 -1623 -158 -1612 -154 -1598 -141 -1585 -143 -1575 -144 -1560 -143 -1549 -141 -1538 -154 -1538 -160 -1566 -160 -1574 -158 -1583 -154 -1598 -166 -1598 M -108 -1538 L -97 -1522 -97 -1502 -97 -1492 -97 -1482 -108 -1479 -112 -1496 -112 -1518 -108 -1538 M -128 -1479 L -128 -1464 -128 -1445 -128 -1437 -128 -1425 -148 -1420 -152 -1432 -154 -1450 -152 -1465 -148 -1479 -128 -1479 M -158 -1633 L -172 -1644 -158 -1633 M -159 -1623 L -174 -1626 -159 -1623 M -158 -1612 L -173 -1616 -158 -1612 M -97 -1492 L -112 -1496 -97 -1492 M -143 -1549 L -154 -1538 -143 -1549 M -143 -1575 L -158 -1583 -143 -1575 M -144 -1560 L -160 -1566 -144 -1560 M -97 -1502 L -112 -1518 -97 -1502 M -128 -1464 L -148 -1479 -128 -1464 M -128 -1445 L -154 -1450 -128 -1445 M -128 -1437 L -152 -1432 -128 -1437";
	ctx.fillStyle=tocolor(ctrans.apply([156,131,93,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -659 -1714 Q -633 -1711 -608 -1728 L -529 -1436 Q -551 -1418 -580 -1422 L -659 -1714";
	ctx.fillStyle=tocolor(ctrans.apply([49,42,34,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -569 -1197 L -512 -746 -556 -740 -612 -1192 Q -598 -1204 -569 -1197";
	ctx.fillStyle=tocolor(ctrans.apply([60,50,39,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -464 -966 L -466 -968 -465 -968 -432 -1000 -222 -775 -257 -742 -464 -966";
	ctx.fillStyle=tocolor(ctrans.apply([170,162,139,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 449 -2351 L 449 -2400 Q 399 -2412 342 -2400 L 342 -2351 M 449 -2326 L 449 -2351 M 342 -2311 L 342 -2351 M 449 -2326 L 449 -2074 Q 396 -2065 342 -2074 L 342 -2117 342 -2311 M 552 -2396 L 506 -2071 Q 460 -2069 454 -2078 L 500 -2403 552 -2396 M 595 -2326 L 595 -2075 546 -2075 546 -2326 595 -2326 M 450 -1503 L 532 -1814 607 -1794 507 -1420 Q 442 -1418 432 -1440 L 450 -1503 M 587 -1794 Q 560 -1797 532 -1814 M 587 -1794 L 607 -1794 M -548 -2386 L -560 -2429 -511 -2442 -500 -2400 -483 -2338 -416 -2087 Q -437 -2069 -465 -2074 L -532 -2326 -548 -2386 -500 -2400 M -532 -2326 L -483 -2338 M -568 -2099 L -568 -2076 Q -607 -2067 -646 -2076 L -646 -2099 -646 -2119 -646 -2431 Q -611 -2444 -568 -2431 L -568 -2119 -568 -2099 M -480 -1630 Q -482 -1614 -474 -1597 L -462 -1597 -166 -1597 -166 -1598 -173 -1616 -174 -1626 -172 -1644 -166 -1656 -181 -1656 -474 -1656 -480 -1630 M -166 -1656 L -156 -1645 -158 -1633 -159 -1623 -158 -1612 -154 -1598 -141 -1585 -143 -1575 -144 -1560 -143 -1549 -141 -1538 -108 -1538 -97 -1522 -97 -1502 -97 -1492 -97 -1482 -108 -1479 -128 -1479 -128 -1464 -128 -1445 -128 -1437 -128 -1425 -148 -1420 -387 -1420 -456 -1420 Q -465 -1449 -456 -1479 L -416 -1479 Q -426 -1501 -420 -1524 L -416 -1538 -407 -1538 -462 -1539 -466 -1546 Q -480 -1572 -462 -1597 M -173 -1616 L -158 -1612 M -174 -1626 L -159 -1623 M -172 -1644 L -158 -1633 M -154 -1538 L -160 -1566 -160 -1574 -158 -1583 -154 -1598 -166 -1598 M -112 -1518 L -112 -1496 -97 -1492 M -108 -1538 L -112 -1518 -97 -1502 M -160 -1566 L -144 -1560 M -158 -1583 L -143 -1575 M -154 -1538 L -143 -1549 M -154 -1538 L -141 -1538 M -659 -1714 Q -633 -1711 -608 -1728 L -659 -1714 -580 -1422 Q -551 -1418 -529 -1436 L -608 -1728 M -612 -1093 L -568 -744 -602 -740 -646 -1089 -612 -1093 M -569 -1197 L -512 -746 -556 -740 -612 -1192 Q -598 -1204 -569 -1197 M -465 -968 L -504 -1047 -546 -1026 -410 -750 -368 -771 -464 -966 -466 -968 -465 -968 -432 -1000 -222 -775 -257 -742 -464 -966 M -148 -1479 L -128 -1479 M -148 -1479 L -128 -1464 M -148 -1479 L -152 -1465 -154 -1450 -128 -1445 M -154 -1450 L -152 -1432 -128 -1437 M -152 -1432 L -148 -1420 M -380 -1479 L -148 -1479 M -154 -1538 L -407 -1538 M -416 -1479 L -380 -1479 M -112 -1496 L -108 -1479";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.2;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 365 -2377 L 365 -2354 365 -2315 365 -2131";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([255,255,255,0.2509804]));
	ctx.lineWidth=1.35;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -611 -2395 L -606 -2378 -611 -2365 Q -611 -2352 -603 -2340 -595 -2327 -595 -2313 L -607 -2267 -605 -2263 -598 -2258 -611 -2249 -609 -2244 M -568 -2099 L -646 -2099 M -646 -2119 L -568 -2119";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([255,255,255,0.16862746]));
	ctx.lineWidth=0.2;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -412 -2317 L -412 -2380 Q -334 -2389 -262 -2381 L -251 -2380 -251 -2317 Q -344 -2298 -412 -2317 -344 -2298 -251 -2317 -281 -2091 -340 -2080 -399 -2069 -412 -2112 L -412 -2317";
	ctx.fillStyle=tocolor(ctrans.apply([126,99,59,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -251 -2317 L -251 -2077 Q -331 -2059 -412 -2077 L -412 -2112 Q -399 -2069 -340 -2080 -281 -2091 -251 -2317";
	ctx.fillStyle=tocolor(ctrans.apply([95,72,37,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -251 -2317 L -251 -2380 -262 -2381 Q -334 -2389 -412 -2380 L -412 -2317 M -251 -2317 L -251 -2077 Q -331 -2059 -412 -2077 L -412 -2112 -412 -2317";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.2;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -412 -2317 Q -344 -2298 -251 -2317 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([255,196,0,0.43137255]));
	ctx.lineWidth=0.05;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 229 -2088 L 292 -2325 Q 323 -2327 341 -2311 L 278 -2074 Q 259 -2069 229 -2088";
	ctx.fillStyle=tocolor(ctrans.apply([49,42,34,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 229 -2088 L 292 -2325 Q 323 -2327 341 -2311 L 278 -2074 Q 259 -2069 229 -2088 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.2;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 213 -2072 L -194 -2072 -205 -2318 213 -2318 213 -2072";
	ctx.fillStyle=tocolor(ctrans.apply([35,32,25,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 213 -2072 L -194 -2072 -205 -2318 213 -2318 213 -2072 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.2;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 157 -2318 L 157 -2073 105 -2073 105 -2318 Q 121 -2328 157 -2318 M 98 -2318 L 98 -2073 46 -2073 46 -2318 Q 62 -2328 98 -2318 M 73 -2092 L 74 -2131 73 -2092 M 135 -2098 L 136 -2112 135 -2098 M 190 -2099 L 189 -2105 190 -2099 M 16 -2141 L 17 -2141 17 -2139 16 -2141 17 -2139 17 -2141 16 -2141 M 15 -2106 L 16 -2122 15 -2106 M 18 -2154 L 18 -2170 15 -2186 18 -2170 18 -2154 M 76 -2207 L 75 -2221 76 -2207 M 72 -2170 L 72 -2181 72 -2170 M 189 -2115 L 193 -2168 189 -2115 M 135 -2120 L 130 -2149 133 -2159 129 -2169 131 -2183 129 -2169 133 -2159 130 -2149 135 -2120 M 130 -2193 L 130 -2207 130 -2193 M 190 -2192 L 190 -2185 190 -2192 M 16 -2217 L 15 -2248 15 -2251 16 -2251 15 -2248 16 -2251 15 -2251 15 -2248 16 -2217 M 75 -2235 L 73 -2257 75 -2235 M 216 -2318 L 216 -2073 163 -2073 163 -2318 Q 180 -2328 216 -2318 M 129 -2226 L 129 -2243 129 -2226 M 190 -2201 L 189 -2239 190 -2201 M 39 -2073 L -13 -2073 -13 -2318 -12 -2318 Q 4 -2328 39 -2318 L 39 -2073 M -146 -2073 L -147 -2073 -147 -2318 -146 -2318 -146 -2073 M -87 -2318 L -87 -2073 -139 -2073 -139 -2318 Q -123 -2328 -87 -2318 M -79 -2073 L -80 -2073 -80 -2318 -79 -2318 -79 -2073 M -20 -2318 L -20 -2073 -72 -2073 -72 -2318 Q -56 -2328 -20 -2318 M -112 -2132 L -111 -2148 -112 -2132 M -114 -2199 L -114 -2217 -117 -2226 -114 -2234 -117 -2226 -114 -2217 -114 -2199 M -114 -2175 L -114 -2169 -114 -2175 M -181 -2175 L -181 -2169 -181 -2175 M -181 -2199 L -181 -2217 -184 -2226 -181 -2234 -184 -2226 -181 -2217 -181 -2199 M -179 -2132 L -178 -2148 -179 -2132 M -47 -2175 L -47 -2169 -47 -2175 M -47 -2199 L -47 -2217 -50 -2226 -47 -2234 -50 -2226 -47 -2217 -47 -2199 M -45 -2132 L -44 -2148 -45 -2132 M -154 -2073 L -206 -2073 -206 -2318 Q -190 -2328 -154 -2318 L -154 -2073";
	ctx.fillStyle=tocolor(ctrans.apply([194,187,169,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 157 -2318 L 157 -2073 105 -2073 105 -2318 Q 121 -2328 157 -2318 M 98 -2318 L 98 -2073 46 -2073 46 -2318 Q 62 -2328 98 -2318 M 73 -2257 L 75 -2235 M 15 -2248 L 16 -2251 15 -2251 15 -2248 16 -2217 M 190 -2185 L 190 -2192 M 130 -2207 L 130 -2193 M 131 -2183 L 129 -2169 133 -2159 130 -2149 135 -2120 M 193 -2168 L 189 -2115 M 72 -2181 L 72 -2170 M 75 -2221 L 76 -2207 M 15 -2186 L 18 -2170 18 -2154 M 16 -2122 L 15 -2106 M 16 -2141 L 17 -2139 17 -2141 16 -2141 M 189 -2105 L 190 -2099 M 136 -2112 L 135 -2098 M 74 -2131 L 73 -2092 M 216 -2318 L 216 -2073 163 -2073 163 -2318 Q 180 -2328 216 -2318 M 189 -2239 L 190 -2201 M 129 -2243 L 129 -2226 M 39 -2073 L -13 -2073 -13 -2318 -12 -2318 Q 4 -2328 39 -2318 L 39 -2073 M -146 -2073 L -147 -2073 -147 -2318 -146 -2318 M -87 -2318 L -87 -2073 -139 -2073 -139 -2318 Q -123 -2328 -87 -2318 M -79 -2073 L -80 -2073 -80 -2318 -79 -2318 M -20 -2318 L -20 -2073 -72 -2073 -72 -2318 Q -56 -2328 -20 -2318 M -44 -2148 L -45 -2132 M -47 -2234 L -50 -2226 -47 -2217 -47 -2199 M -47 -2169 L -47 -2175 M -178 -2148 L -179 -2132 M -181 -2234 L -184 -2226 -181 -2217 -181 -2199 M -181 -2169 L -181 -2175 M -114 -2169 L -114 -2175 M -114 -2234 L -117 -2226 -114 -2217 -114 -2199 M -111 -2148 L -112 -2132 M -154 -2073 L -206 -2073 -206 -2318 Q -190 -2328 -154 -2318 L -154 -2073";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.2;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 200 -2291 L 205 -2283 200 -2275 190 -2272 Q 183 -2272 179 -2275 L 175 -2283 179 -2291 190 -2294 200 -2291";
	ctx.fillStyle=tocolor(ctrans.apply([149,50,23,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 138 -2291 L 143 -2283 138 -2275 Q 134 -2272 128 -2272 121 -2272 117 -2275 L 113 -2283 117 -2291 128 -2294 138 -2291";
	ctx.fillStyle=tocolor(ctrans.apply([149,50,23,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 82 -2291 L 87 -2283 82 -2275 72 -2272 61 -2275 57 -2283 61 -2291 72 -2294 82 -2291";
	ctx.fillStyle=tocolor(ctrans.apply([149,50,23,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 3 -2275 L -1 -2283 3 -2291 14 -2294 24 -2291 29 -2283 24 -2275 Q 20 -2272 14 -2272 7 -2272 3 -2275";
	ctx.fillStyle=tocolor(ctrans.apply([149,50,23,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -37 -2291 L -32 -2283 Q -32 -2278 -37 -2275 -41 -2272 -47 -2272 L -58 -2275 -62 -2283 -58 -2291 -47 -2294 -37 -2291";
	ctx.fillStyle=tocolor(ctrans.apply([149,50,23,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -99 -2283 Q -99 -2278 -104 -2275 L -114 -2272 -125 -2275 -129 -2283 -125 -2291 -114 -2294 -104 -2291 -99 -2283";
	ctx.fillStyle=tocolor(ctrans.apply([149,50,23,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -171 -2275 L -181 -2272 -192 -2275 -196 -2283 -192 -2291 -181 -2294 -171 -2291 -166 -2283 Q -166 -2278 -171 -2275";
	ctx.fillStyle=tocolor(ctrans.apply([149,50,23,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 406 -1419 L -44 -1419 -56 -1665 406 -1665 406 -1419";
	ctx.fillStyle=tocolor(ctrans.apply([35,32,25,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 406 -1419 L -44 -1419 -56 -1665 406 -1665 406 -1419 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.2;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

}

function shape463(ctx,ctrans,frame,ratio,time){
	var pathData="M 48 23 L 14 23 Q 6 34 14 44 L 48 44 Q 53 34 48 23 M 42 72 Q 30 62 18 72 L 18 209 24 213 Q 33 217 42 209 L 42 72 M 62 0 L 62 241 Q 36 251 0 241 L 0 0 62 0";
	ctx.fillStyle=tocolor(ctrans.apply([187,180,161,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 48 23 Q 53 34 48 44 L 14 44 Q 6 34 14 23 L 48 23";
	ctx.fillStyle=tocolor(ctrans.apply([123,45,16,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 42 72 L 42 209 Q 33 217 24 213 L 18 209 18 72 Q 30 62 42 72 M 29 130 L 28 125 31 118 27 115 32 115 32 113 28 109 32 98 27 96 32 98 28 109 32 113 32 115 27 115 31 118 28 125 29 130 M 30 201 L 30 194 29 194 28 195 29 189 28 195 29 194 30 194 30 201 M 30 174 L 34 166 29 156 25 158 26 157 29 148 26 157 25 158 29 156 34 166 30 174";
	ctx.fillStyle=tocolor(ctrans.apply([72,106,154,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 27 96 L 32 98 28 109 32 113 32 115 27 115 31 118 28 125 29 130 M 29 148 L 26 157 25 158 29 156 34 166 30 174 M 29 189 L 28 195 29 194 30 194 30 201";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([255,255,255,0.30980393]));
	ctx.lineWidth=0.2;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 62 0 L 62 241 Q 36 251 0 241 L 0 0 62 0";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.2;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

}

function sprite466(ctx,ctrans,frame,ratio,time){
	ctx.save();
	ctx.transform(1,0,0,1,35.75,135.35);
	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place(shape462,canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place(sprite464,canvas,ctx,[0.05,0.0,0.0,0.05,17.55,-83.3],ctrans,1,(0+time)%1,0,time);
			place(sprite464,canvas,ctx,[0.05,0.0,0.0,0.05,14.15,-83.3],ctrans,1,(0+time)%1,0,time);
			place(sprite464,canvas,ctx,[0.05,0.0,0.0,0.05,10.8,-83.3],ctrans,1,(0+time)%1,0,time);
			place(sprite464,canvas,ctx,[0.05,0.0,0.0,0.05,7.35,-83.3],ctrans,1,(0+time)%1,0,time);
			place(sprite464,canvas,ctx,[0.05,0.0,0.0,0.05,4.1,-83.3],ctrans,1,(0+time)%1,0,time);
			place(sprite464,canvas,ctx,[0.05,0.0,0.0,0.05,0.75,-83.3],ctrans,1,(0+time)%1,0,time);
			place(sprite464,canvas,ctx,[0.05,0.0,0.0,0.05,-2.8,-83.2],ctrans,1,(0+time)%1,0,time);
			place(shape465,canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place(sprite464,canvas,ctx,[0.05,0.0,0.0,0.05,8.55,-50.0],ctrans,1,(0+time)%1,0,time);
			place(sprite464,canvas,ctx,[0.05,0.0,0.0,0.05,5.3,-50.0],ctrans,1,(0+time)%1,0,time);
			place(sprite464,canvas,ctx,[0.05,0.0,0.0,0.05,1.95,-50.0],ctrans,1,(0+time)%1,0,time);
			place(sprite464,canvas,ctx,[0.05,0.0,0.0,0.05,-1.6,-49.9],ctrans,1,(0+time)%1,0,time);
			break;
	}
	ctx.restore();
}

var frame = -1;
var time = 0;
var frames = [];
frames.push(0);

var backgroundColor = "#ffffff00";
var originalWidth = 72;
var originalHeight= 135;
function nextFrame(ctx,ctrans){
	var oldframe = frame;
	frame = (frame+1)%frames.length;
	if(frame==oldframe){time++;}else{time=0;};
	drawFrame();
}

function drawFrame(){
	ctx.fillStyle = backgroundColor;
	ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.save();
	ctx.transform(canvas.width/originalWidth,0,0,canvas.height/originalHeight,0,0);
	sprite466(ctx,ctrans,frames[frame],0,time);
	ctx.restore();
}


nextFrame(ctx,ctrans);

return [canvas,width,height];}