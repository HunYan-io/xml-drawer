module.exports = (createCanvas, concatMatrix, enhanceContext, cxform, place, tocolor, drawMorphPath, useRatio, drawPath, shadeColor, colorPalette) => { var width=31,height=37;
var canvas=createCanvas(width,height);

var ctx=canvas.getContext("2d");
enhanceContext(ctx);
var ctrans = new cxform(0,0,0,0,255,255,255,255);

function shape82(ctx,ctrans,frame,ratio,time){
	var pathData="M 341 -633 Q 320 -630 309 -617 354 -598 374 -550 L 335 -559 Q 359 -529 342 -485 L 316 -514 Q 317 -492 292 -468 L 242 -537 Q 199 -598 208 -620 269 -658 341 -633";
	ctx.fillStyle=tocolor(ctrans.apply([93,127,37,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 341 -633 Q 320 -630 309 -617 354 -598 374 -550 L 335 -559 Q 359 -529 342 -485 L 316 -514 Q 317 -492 292 -468 L 242 -537 Q 199 -598 208 -620 269 -658 341 -633 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -250 -697 Q -225 -722 -191 -721 -208 -680 -207 -636 -163 -522 4 -389 L -7 -374 Q -160 -398 -221 -494 -244 -531 -249 -572 -252 -608 -241 -635 -236 -669 -250 -697 M -210 -564 L -217 -579 -225 -584 -233 -579 -233 -564 -226 -549 -217 -544 Q -213 -544 -210 -549 L -210 -564";
	ctx.fillStyle=tocolor(ctrans.apply([235,193,88,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -210 -564 L -210 -549 Q -213 -544 -217 -544 L -226 -549 -233 -564 -233 -579 -225 -584 -217 -579 -210 -564";
	ctx.fillStyle=tocolor(ctrans.apply([147,103,49,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -250 -697 Q -225 -722 -191 -721 -208 -680 -207 -636 -163 -522 4 -389 L -7 -374 Q -160 -398 -221 -494 -244 -531 -249 -572 -252 -608 -241 -635 -236 -669 -250 -697 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

}

function shape83(ctx,ctrans,frame,ratio,time){
	var pathData="M 111 -1457 Q 118 -1517 167 -1551 200 -1574 240 -1579 200 -1574 167 -1551 118 -1517 111 -1457 M -145 -256 Q -148 -345 -83 -391 L -110 -403 Q -128 -416 -149 -446 -167 -472 -170 -515 -173 -544 -169 -560 -254 -566 -293 -634 -318 -679 -310 -733 -304 -774 -285 -799 -335 -840 -329 -915 -323 -990 -270 -1027 -342 -1059 -347 -1141 -353 -1218 -299 -1281 -338 -1283 -376 -1308 -434 -1348 -428 -1423 -422 -1495 -347 -1539 -293 -1570 -248 -1571 -238 -1612 -209 -1634 -123 -1699 -38 -1669 20 -1647 32 -1620 101 -1668 177 -1629 215 -1610 240 -1579 L 283 -1571 321 -1554 Q 338 -1525 343 -1460 350 -1369 299 -1337 L 317 -1276 Q 331 -1210 310 -1180 279 -1201 243 -1209 139 -1232 82 -1107 139 -1232 243 -1209 279 -1201 310 -1180 322 -1158 323 -1100 325 -1034 303 -1009 L 304 -1008 355 -994 Q 389 -947 389 -893 389 -803 278 -747 L 332 -728 Q 360 -685 356 -622 352 -565 315 -523 L 270 -480 Q 293 -443 282 -365 269 -265 183 -247 L 182 -247 Q 188 -236 187 -202 186 -160 172 -127 129 -27 -5 -52 -38 -100 -35 -138 L -35 -139 Q -31 -179 -15 -203 -49 -187 -86 -204 -121 -219 -145 -256 M 98 -271 Q 27 -255 -15 -203 27 -255 98 -271 M 116 -1023 L 128 -1001 141 -971 128 -1001 116 -1023 M -73 -1286 Q -33 -1311 8 -1315 L 47 -1313 8 -1315 Q -33 -1311 -73 -1286 M -14 -1491 Q 16 -1488 54 -1461 103 -1426 104 -1377 103 -1426 54 -1461 16 -1488 -14 -1491 M 84 -1326 Q 144 -1382 227 -1365 268 -1356 299 -1337 268 -1356 227 -1365 144 -1382 84 -1326 M 123 -889 Q 144 -979 219 -1003 L 304 -1008 219 -1003 Q 144 -979 123 -889 M 78 -426 Q 106 -454 119 -506 133 -565 112 -610 133 -565 119 -506 106 -454 78 -426 M 238 -750 Q 201 -748 161 -724 113 -694 105 -652 113 -694 161 -724 201 -748 238 -750 M 144 -862 Q 173 -858 202 -840 243 -813 256 -767 243 -813 202 -840 173 -858 144 -862 M 91 -864 Q 50 -863 16 -833 L -15 -796 16 -833 Q 50 -863 91 -864 M 66 -1142 Q 26 -1196 58 -1285 26 -1196 66 -1142 M 64 -402 Q 125 -380 139 -290 125 -380 64 -402 M -10 -416 Q -52 -414 -83 -391 -52 -414 -10 -416 M -33 -720 Q -23 -789 -84 -834 -145 -879 -203 -848 -145 -879 -84 -834 -23 -789 -33 -720 M -55 -676 Q -99 -667 -134 -624 -162 -590 -169 -560 -162 -590 -134 -624 -99 -667 -55 -676 M -243 -838 L -266 -818 -285 -799 -266 -818 -243 -838 M -122 -1027 Q -143 -1003 -154 -968 -167 -924 -156 -884 -167 -924 -154 -968 -143 -1003 -122 -1027 M -180 -1060 Q -232 -1058 -270 -1027 -232 -1058 -180 -1060 M 85 -1054 Q 49 -1081 -8 -1079 -49 -1077 -75 -1065 -49 -1077 -8 -1079 49 -1081 85 -1054 M -109 -1072 Q -148 -1127 -138 -1182 -132 -1211 -110 -1245 -132 -1211 -138 -1182 -148 -1127 -109 -1072 M -210 -1315 Q -262 -1313 -299 -1281 -262 -1313 -210 -1315 M -113 -1290 Q -133 -1304 -159 -1310 -133 -1304 -113 -1290 M -64 -1489 Q -118 -1484 -152 -1453 -194 -1413 -193 -1339 -194 -1413 -152 -1453 -118 -1484 -64 -1489 M -38 -1516 Q -30 -1554 -2 -1588 L 32 -1620 -2 -1588 Q -30 -1554 -38 -1516 M -192 -1416 Q -241 -1441 -250 -1502 -257 -1541 -248 -1571 -257 -1541 -250 -1502 -241 -1441 -192 -1416 M 154 -501 Q 225 -509 270 -480 225 -509 154 -501 M 82 -646 Q 44 -678 -14 -680 44 -678 82 -646";
	drawPath(ctx,pathData,false);
	ctx.fillStyle=tocolor(ctrans.apply([52,39,88,1]));
	ctx.fill("evenodd");
	ctx.save();
	ctx.clip();
	ctx.transform(0.056304931640625,0,0,0.0576171875,-261,-1318);
	var grd=ctx.createRadialGradient(1152.0,0,0,0,0,16384);
	grd.addColorStop(0.0,tocolor(ctrans.apply([120,93,189,1])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([52,39,88,1])));
	ctx.fillStyle = grd;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 321 -1554 Q 363 -1526 378 -1474 398 -1401 374 -1345 358 -1307 336 -1295 356 -1269 352 -1216 347 -1170 337 -1160 357 -1135 365 -1089 374 -1035 355 -994 385 -976 408 -928 429 -884 429 -853 429 -763 332 -728 367 -707 386 -663 400 -629 399 -598 396 -535 357 -494 330 -466 298 -456 L 299 -455 Q 332 -415 334 -350 335 -285 290 -244 258 -214 222 -207 242 -171 225 -101 203 -9 108 -1 37 5 -5 -52 129 -27 172 -127 186 -160 187 -202 188 -236 182 -247 L 183 -247 Q 269 -265 282 -365 293 -443 270 -480 L 315 -523 Q 352 -565 356 -622 360 -685 332 -728 L 278 -747 Q 389 -803 389 -893 389 -947 355 -994 L 304 -1008 303 -1009 Q 325 -1034 323 -1100 322 -1158 310 -1180 331 -1210 317 -1276 L 299 -1337 Q 350 -1369 343 -1460 338 -1525 321 -1554 M -35 -139 Q -142 -164 -145 -256 -121 -219 -86 -204 -49 -187 -15 -203 -31 -179 -35 -139 M 336 -1295 L 299 -1337 336 -1295 M 337 -1160 L 310 -1180 337 -1160 M 298 -456 L 270 -480 298 -456 M 222 -207 L 183 -247 222 -207";
	ctx.fillStyle=tocolor(ctrans.apply([52,41,80,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 240 -1579 Q 200 -1574 167 -1551 118 -1517 111 -1457 M -145 -256 Q -148 -345 -83 -391 L -110 -403 Q -128 -416 -149 -446 -167 -472 -170 -515 -173 -544 -169 -560 -254 -566 -293 -634 -318 -679 -310 -733 -304 -774 -285 -799 -335 -840 -329 -915 -323 -990 -270 -1027 -342 -1059 -347 -1141 -353 -1218 -299 -1281 -338 -1283 -376 -1308 -434 -1348 -428 -1423 -422 -1495 -347 -1539 -293 -1570 -248 -1571 -238 -1612 -209 -1634 -123 -1699 -38 -1669 20 -1647 32 -1620 101 -1668 177 -1629 215 -1610 240 -1579 L 283 -1571 321 -1554 Q 363 -1526 378 -1474 398 -1401 374 -1345 358 -1307 336 -1295 356 -1269 352 -1216 347 -1170 337 -1160 357 -1135 365 -1089 374 -1035 355 -994 385 -976 408 -928 429 -884 429 -853 429 -763 332 -728 367 -707 386 -663 400 -629 399 -598 396 -535 357 -494 330 -466 298 -456 L 299 -455 Q 332 -415 334 -350 335 -285 290 -244 258 -214 222 -207 242 -171 225 -101 203 -9 108 -1 37 5 -5 -52 -38 -100 -35 -138 L -35 -139 Q -142 -164 -145 -256 M -15 -203 Q 27 -255 98 -271 M 299 -1337 L 336 -1295 M 299 -1337 Q 268 -1356 227 -1365 144 -1382 84 -1326 M 104 -1377 Q 103 -1426 54 -1461 16 -1488 -14 -1491 M 47 -1313 L 8 -1315 Q -33 -1311 -73 -1286 M 141 -971 L 128 -1001 116 -1023 M 310 -1180 L 337 -1160 M 304 -1008 L 355 -994 M 278 -747 L 332 -728 M 270 -480 L 298 -456 M 310 -1180 Q 279 -1201 243 -1209 139 -1232 82 -1107 M 304 -1008 L 219 -1003 Q 144 -979 123 -889 M 58 -1285 Q 26 -1196 66 -1142 M -15 -796 L 16 -833 Q 50 -863 91 -864 M 256 -767 Q 243 -813 202 -840 173 -858 144 -862 M 105 -652 Q 113 -694 161 -724 201 -748 238 -750 M 112 -610 Q 133 -565 119 -506 106 -454 78 -426 M 183 -247 L 222 -207 M 139 -290 Q 125 -380 64 -402 M 270 -480 Q 225 -509 154 -501 M -248 -1571 Q -257 -1541 -250 -1502 -241 -1441 -192 -1416 M 32 -1620 L -2 -1588 Q -30 -1554 -38 -1516 M -193 -1339 Q -194 -1413 -152 -1453 -118 -1484 -64 -1489 M -159 -1310 Q -133 -1304 -113 -1290 M -299 -1281 Q -262 -1313 -210 -1315 M -110 -1245 Q -132 -1211 -138 -1182 -148 -1127 -109 -1072 M -75 -1065 Q -49 -1077 -8 -1079 49 -1081 85 -1054 M -270 -1027 Q -232 -1058 -180 -1060 M -156 -884 Q -167 -924 -154 -968 -143 -1003 -122 -1027 M -285 -799 L -266 -818 -243 -838 M -169 -560 Q -162 -590 -134 -624 -99 -667 -55 -676 M -203 -848 Q -145 -879 -84 -834 -23 -789 -33 -720 M -83 -391 Q -52 -414 -10 -416 M -35 -139 Q -31 -179 -15 -203 M -14 -680 Q 44 -678 82 -646";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

}

function sprite84(ctx,ctrans,frame,ratio,time){
	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place(shape83,canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}
}

function shape85(ctx,ctrans,frame,ratio,time){
	var pathData="M 35 -554 Q 56 -576 100 -575 L 106 -558 112 -559 115 -578 178 -576 Q 192 -532 137 -518 29 -507 35 -554 M 106 -558 L 83 -561 106 -558 M 132 -568 Q 122 -562 112 -559 122 -562 132 -568";
	ctx.fillStyle=tocolor(ctrans.apply([126,41,17,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 178 -576 L 194 -564 Q 215 -540 205 -498 196 -457 167 -431 135 -403 99 -416 73 -406 49 -430 26 -452 19 -486 12 -523 29 -548 L 35 -554 Q 29 -507 137 -518 192 -532 178 -576";
	ctx.fillStyle=tocolor(ctrans.apply([93,29,12,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 100 -575 Q 97 -588 100 -601 L 121 -599 115 -578 112 -559 106 -558 100 -575";
	ctx.fillStyle=tocolor(ctrans.apply([156,106,81,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 35 -554 Q 56 -576 100 -575 97 -588 100 -601 L 121 -599 115 -578 178 -576 194 -564 Q 215 -540 205 -498 196 -457 167 -431 135 -403 99 -416 73 -406 49 -430 26 -452 19 -486 12 -523 29 -548 L 35 -554 M 100 -575 L 106 -558 112 -559 115 -578 M 112 -559 Q 122 -562 132 -568 M 83 -561 L 106 -558";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -54 -563 Q -4 -480 63 -490 96 -460 129 -491 L 139 -471 Q 146 -450 134 -434 120 -415 86 -409 62 -384 36 -382 13 -380 -7 -395 -27 -409 -35 -433 -45 -457 -38 -479 L -59 -549 -54 -563";
	ctx.fillStyle=tocolor(ctrans.apply([100,96,37,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -35 -582 L 4 -579 Q 40 -555 63 -521 90 -521 112 -506 L 129 -491 Q 96 -460 63 -490 -4 -480 -54 -563 L -42 -578 -35 -582";
	ctx.fillStyle=tocolor(ctrans.apply([140,135,70,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -35 -582 L -42 -578 Q -48 -597 -65 -614 L -50 -620 Q -36 -603 -35 -582";
	ctx.fillStyle=tocolor(ctrans.apply([156,106,81,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 129 -491 L 112 -506 Q 90 -521 63 -521 40 -555 4 -579 L -35 -582 -42 -578 -54 -563 M 129 -491 L 139 -471 Q 146 -450 134 -434 120 -415 86 -409 62 -384 36 -382 13 -380 -7 -395 -27 -409 -35 -433 -45 -457 -38 -479 L -59 -549 -54 -563 M -42 -578 Q -48 -597 -65 -614 L -50 -620 Q -36 -603 -35 -582";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -173 -426 L -188 -440 Q -213 -468 -209 -500 -206 -537 -167 -562 -136 -583 -97 -577 -62 -527 -102 -474 -133 -434 -173 -426 M -152 -542 Q -141 -547 -145 -555 -156 -552 -152 -542 -192 -514 -175 -479 -192 -514 -152 -542";
	ctx.fillStyle=tocolor(ctrans.apply([224,138,71,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -152 -542 Q -156 -552 -145 -555 -141 -547 -152 -542";
	ctx.fillStyle=tocolor(ctrans.apply([168,103,53,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -173 -426 Q -133 -434 -102 -474 -62 -527 -97 -577 -61 -572 -36 -547 -11 -521 -15 -490 -18 -454 -59 -423 -90 -399 -129 -406 -154 -410 -173 -426";
	ctx.fillStyle=tocolor(ctrans.apply([177,106,50,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -97 -577 Q -136 -583 -167 -562 -206 -537 -209 -500 -213 -468 -188 -440 L -173 -426 M -97 -577 Q -61 -572 -36 -547 -11 -521 -15 -490 -18 -454 -59 -423 -90 -399 -129 -406 -154 -410 -173 -426 M -152 -542 Q -156 -552 -145 -555 -141 -547 -152 -542 -192 -514 -175 -479";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -223 -403 Q -258 -438 -214 -476 -146 -513 -87 -449 -53 -490 4 -491 38 -490 76 -465 -22 -497 -68 -446 L -62 -399 -68 -411 -87 -449 Q -119 -469 -155 -473 -226 -482 -223 -403 M 97 -449 Q 155 -513 222 -476 L 245 -450 Q 187 -505 113 -449 L 68 -389 97 -449";
	ctx.fillStyle=tocolor(ctrans.apply([191,181,168,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 248 -431 L 247 -427 Q 245 -415 232 -403 241 -393 232 -383 124 -335 52 -234 67 -218 52 -205 20 -172 25 -99 26 -70 34 -33 55 -21 86 -18 L 150 4 -19 4 Q 38 1 32 -18 L 86 -18 32 -18 -22 -18 Q 5 -28 5 -49 L 10 -187 Q -11 -197 -24 -177 L -42 -205 -48 -212 Q 20 -212 29 -234 L -19 -234 -21 -252 Q -29 -309 -48 -365 -29 -309 -21 -252 L -19 -234 -42 -234 Q -115 -335 -223 -383 -232 -393 -223 -403 L -157 -365 Q -104 -329 -71 -328 -46 -324 -68 -411 L -62 -399 -48 -365 Q -8 -307 16 -313 L 97 -449 68 -389 Q 68 -321 107 -339 217 -445 248 -431 M 68 -389 Q 44 -331 32 -264 L 29 -234 32 -264 Q 44 -331 68 -389 M 232 -403 Q 111 -346 52 -234 L 29 -234 52 -234 Q 111 -346 232 -403 M -42 -234 Q -84 -313 -157 -365 -84 -313 -42 -234 M -42 -205 L 52 -205 -42 -205";
	ctx.fillStyle=tocolor(ctrans.apply([100,89,76,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 245 -450 L 248 -431 Q 217 -445 107 -339 68 -321 68 -389 L 113 -449 Q 187 -505 245 -450";
	var grd=ctx.createLinearGradient(40.0,-345.0,256.0,-381.0);
	grd.addColorStop(0.0,tocolor(ctrans.apply([196,180,161,1])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([140,128,115,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 76 -465 L 97 -449 16 -313 Q -8 -307 -48 -365 L -62 -399 -68 -446 Q -22 -497 76 -465";
	var grd=ctx.createLinearGradient(68.75,-319.0,21.25,-485.0);
	grd.addColorStop(0.0,tocolor(ctrans.apply([196,180,161,1])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([140,128,115,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -76 -18 Q -46 -21 -25 -33 -17 -70 -15 -99 -12 -146 -24 -177 -11 -197 10 -187 L 5 -49 Q 5 -28 -22 -18 L -76 -18";
	var grd=ctx.createLinearGradient(-77.5,-111.0,85.5,-111.0);
	grd.addColorStop(0.0,tocolor(ctrans.apply([196,180,161,1])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([140,128,115,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -68 -411 Q -46 -324 -71 -328 -104 -329 -157 -365 L -223 -403 Q -226 -482 -155 -473 -119 -469 -87 -449 L -68 -411";
	var grd=ctx.createLinearGradient(-79.0,-305.75,-79.0,-512.25);
	grd.addColorStop(0.0,tocolor(ctrans.apply([196,180,161,1])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([140,128,115,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -19 4 L -141 4 -76 -18 -22 -18 32 -18 Q 38 1 -19 4";
	var grd=ctx.createLinearGradient(-141.75,-7.0,149.75,-7.0);
	grd.addColorStop(0.0,tocolor(ctrans.apply([196,180,161,1])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([140,128,115,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -48 -212 Q -53 -223 -42 -234 L -19 -234 29 -234 Q 20 -212 -48 -212";
	var grd=ctx.createLinearGradient(-51.0,-219.0,59.0,-219.0);
	grd.addColorStop(0.0,tocolor(ctrans.apply([196,180,161,1])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([140,128,115,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 245 -450 L 248 -431 247 -427 Q 245 -415 232 -403 241 -393 232 -383 124 -335 52 -234 67 -218 52 -205 20 -172 25 -99 26 -70 34 -33 55 -21 86 -18 L 150 4 -19 4 -141 4 -76 -18 Q -46 -21 -25 -33 -17 -70 -15 -99 -12 -146 -24 -177 L -42 -205 -48 -212 Q -53 -223 -42 -234 -115 -335 -223 -383 -232 -393 -223 -403 -258 -438 -214 -476 -146 -513 -87 -449 -53 -490 4 -491 38 -490 76 -465 L 97 -449 Q 155 -513 222 -476 L 245 -450 M -48 -365 Q -29 -309 -21 -252 L -19 -234 29 -234 32 -264 Q 44 -331 68 -389 L 97 -449 M 32 -18 L 86 -18 M -22 -18 L 32 -18 M 29 -234 L 52 -234 Q 111 -346 232 -403 M -48 -365 L -62 -399 -68 -411 -87 -449 M -157 -365 Q -84 -313 -42 -234 L -19 -234 M -223 -403 L -157 -365 M -76 -18 L -22 -18 M 52 -205 L -42 -205";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

}

function sprite86(ctx,ctrans,frame,ratio,time){
	ctx.save();
	ctx.transform(1,0,0,1,12.65,37.45);
	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place(shape82,canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place(sprite84,canvas,ctx,[0.00371856689453125,0.01258392333984375,-0.015142822265625,0.003751373291015625,-10.7,-25.7],ctrans,1,(0+time)%1,0,time);
			place(shape85,canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place(sprite84,canvas,ctx,[0.01285247802734375,0.0,0.0,0.012088775634765625,11.55,-10.8],ctrans,1,(0+time)%1,0,time);
			break;
	}
	ctx.restore();
}

var frame = -1;
var time = 0;
var frames = [];
frames.push(0);

var backgroundColor = "#ffffff00";
var originalWidth = 31;
var originalHeight= 37;
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
	sprite86(ctx,ctrans,frames[frame],0,time);
	ctx.restore();
}


nextFrame(ctx,ctrans);

return [canvas,width,height];}