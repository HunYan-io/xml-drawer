module.exports = (createCanvas, concatMatrix, enhanceContext, cxform, place, tocolor, drawMorphPath, useRatio, drawPath, shadeColor, colorPalette) => { var width=136,height=92;
var canvas=createCanvas(width,height);

var ctx=canvas.getContext("2d");
enhanceContext(ctx);
var ctrans = new cxform(0,0,0,0,255,255,255,255);

function shape194(ctx,ctrans,frame,ratio,time){
	var pathData="M 1096 -11 L -1132 -11 -1132 -146 1096 -146 1096 -11";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,0.43137255]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 1096 -11 L -1132 -11 -1132 -146 1096 -146 1096 -11 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

}

function shape195(ctx,ctrans,frame,ratio,time){
	var pathData="M 1891 687 L 1891 953 1131 953 1131 1399 860 1399 860 958 462 958 462 1399 328 1399 Q 309 1431 315 1463 319 1492 345 1521 L 345 1776 265 1776 Q 273 1652 252 1627 L 192 1625 191 687 1891 687";
	var grd=ctx.createLinearGradient(1056.5,705.0,1057.5,1887.0);
	grd.addColorStop(0.0,tocolor(ctrans.apply([128,128,128,1])));
	grd.addColorStop(0.9921568627450981,tocolor(ctrans.apply([81,78,77,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 1891 1107 L 1891 1399 1356 1399 1356 1107 1891 1107 M 547 1043 L 797 1043 797 1399 547 1399 547 1043";
	var grd=ctx.createLinearGradient(687.0,1120.0,687.0,1720.0);
	grd.addColorStop(0.058823529411764705,tocolor(ctrans.apply([140,140,140,1])));
	grd.addColorStop(0.9921568627450981,tocolor(ctrans.apply([51,46,44,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 1891 472 L 1891 517 1457 517 1395 472 1891 472 M 1891 983 L 1891 1107 1356 1107 1177 983 1891 983 M 797 1043 L 547 1043 462 958 860 958 797 1043";
	ctx.fillStyle=tocolor(ctrans.apply([149,149,149,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 1891 953 L 1891 983 1177 983 1177 1399 1131 1399 1131 953 1891 953 M 1891 1814 L 1891 1869 494 1869 494 1814 1891 1814 M 384 2834 Q 460 2895 380 2959 L 160 2959 Q 128 2936 131 2902 213 2941 312 2904 341 2842 228 2833 L 383 2833 384 2834 M 189 2744 Q 156 2734 128 2714 73 2674 73 2618 73 2607 80 2592 101 2702 251 2680 368 2664 340 2551 199 2545 139 2514 L 140 2514 269 2525 347 2521 389 2516 347 2521 269 2525 140 2514 139 2514 Q 111 2509 120 2487 L 130 2473 Q 152 2496 231 2500 317 2506 356 2485 365 2472 335 2459 L 353 2455 Q 400 2456 403 2485 406 2512 389 2516 L 423 2542 Q 456 2576 453 2618 451 2657 422 2691 L 393 2717 Q 314 2754 263 2754 L 189 2744 M 164 2458 Q 187 2453 187 2379 207 2429 264 2418 313 2385 309 2281 L 171 2281 Q 163 2265 151 2260 L 314 2260 361 2260 314 2260 Q 298 2246 305 2212 L 304 2210 Q 295 2178 302 2137 L 315 2088 361 2088 Q 409 2135 361 2260 320 2357 353 2455 L 335 2459 266 2463 164 2458 M 340 2125 Q 358 2124 361 2155 363 2188 342 2221 319 2258 305 2212 319 2258 342 2221 363 2188 361 2155 358 2124 340 2125";
	ctx.fillStyle=tocolor(ctrans.apply([72,68,62,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 1891 196 L 1891 233 1768 233 1768 350 1705 350 1705 233 1635 233 1635 350 1560 350 1560 233 1487 233 1487 350 1419 350 1419 233 1487 233 1419 233 1363 233 1363 350 1230 350 1230 196 1197 196 Q 1183 184 1197 157 L 1292 157 Q 1218 144 1218 79 1218 -3 1296 0 1340 1 1358 22 1373 39 1374 79 1375 112 1344 136 1334 144 1312 151 L 1292 157 1388 157 1398 171 Q 1402 184 1388 196 L 1891 196 M 1891 2051 L 1891 2088 694 2088 361 2088 315 2088 302 2137 129 2136 Q 145 2100 128 2088 L 76 2084 128 2088 Q 145 2100 129 2136 L 102 2141 Q 35 2149 18 2107 19 2053 52 2038 L 110 2027 Q 118 2050 175 2051 L 1891 2051 M 244 608 L 244 458 211 458 Q 197 439 211 419 L 307 419 298 418 Q 278 414 258 398 230 374 232 341 233 316 248 295 269 265 310 262 351 259 373 292 391 318 388 341 383 377 355 400 333 418 312 419 L 402 419 412 433 Q 416 446 402 458 L 1257 458 1257 507 1209 507 1209 608 1161 608 1161 507 1067 507 1067 608 998 608 998 507 873 507 873 608 808 608 808 507 683 507 632 507 683 507 683 608 632 608 632 507 530 507 465 507 530 507 530 608 465 608 465 507 377 507 377 458 402 458 377 458 377 507 377 608 244 608 M 1705 233 L 1768 233 1705 233 M 1363 196 L 1363 233 1363 196 1230 196 1363 196 1388 196 1363 196 M 1393 608 L 1393 472 1395 472 1457 517 1457 608 1393 608 M 1209 507 L 1161 507 1209 507 M 998 507 L 1067 507 998 507 M 312 419 L 307 419 312 419 M 244 458 L 377 458 244 458 M 873 507 L 808 507 873 507 M 797 1043 L 860 958 860 1399 797 1399 797 1043 M 462 958 L 547 1043 547 1399 462 1399 462 958 M 1356 1107 L 1356 1399 1177 1399 1177 983 1356 1107 M 128 2088 L 315 2088 128 2088 M 1560 233 L 1635 233 1560 233";
	ctx.fillStyle=tocolor(ctrans.apply([86,81,76,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 1768 350 L 1891 350 1891 423 1257 423 Q 1215 353 1160 350 L 1230 350 1363 350 1419 350 1487 350 1560 350 1635 350 1705 350 1768 350 M 1891 517 L 1891 608 1457 608 1457 517 1891 517 M 1891 1399 L 1891 1463 315 1463 Q 309 1431 328 1399 L 462 1399 547 1399 797 1399 860 1399 1131 1399 1177 1399 1356 1399 1891 1399 M 1891 1611 L 1891 1680 1191 1680 1250 1611 1891 1611 M 1891 2024 L 1891 2051 175 2051 Q 118 2050 110 2027 L 136 2024 265 2024 1891 2024 M 131 2902 Q 155 2845 181 2833 L 228 2833 Q 341 2842 312 2904 213 2941 131 2902 M 130 2473 Q 142 2462 164 2458 L 266 2463 335 2459 Q 365 2472 356 2485 317 2506 231 2500 152 2496 130 2473";
	ctx.fillStyle=tocolor(ctrans.apply([128,128,128,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 1891 1463 L 1891 1521 345 1521 Q 319 1492 315 1463 L 1891 1463 M 1891 1680 L 1891 1737 1211 1737 1151 1737 1151 1680 1191 1680 1891 1680";
	ctx.fillStyle=tocolor(ctrans.apply([86,81,78,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 1891 1521 L 1891 1611 1250 1611 1191 1680 1151 1680 1151 1737 1211 1737 1211 1784 1891 1784 1891 1814 494 1814 494 1776 345 1776 345 1521 1891 1521";
	var grd=ctx.createLinearGradient(1117.0,1844.0,1117.0,1402.0);
	grd.addColorStop(0.00784313725490196,tocolor(ctrans.apply([105,104,104,1])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([53,49,47,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 1891 1737 L 1891 1784 1211 1784 1211 1737 1891 1737 M 181 2833 Q 207 2806 189 2744 L 263 2754 Q 314 2754 393 2717 L 381 2755 379 2772 Q 375 2803 383 2833 L 228 2833 181 2833";
	ctx.fillStyle=tocolor(ctrans.apply([60,56,53,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 1891 608 L 1891 687 191 687 Q 121 611 0 608 L 244 608 377 608 465 608 530 608 632 608 683 608 808 608 873 608 998 608 1067 608 1161 608 1209 608 1257 608 1393 608 1457 608 1891 608";
	var grd=ctx.createLinearGradient(943.0,710.0,943.0,594.0);
	grd.addColorStop(0.0,tocolor(ctrans.apply([121,121,121,1])));
	grd.addColorStop(0.9882352941176471,tocolor(ctrans.apply([63,57,54,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 1891 423 L 1891 472 1395 472 1393 472 1393 608 1257 608 1257 507 1257 458 1257 423 1891 423";
	var grd=ctx.createLinearGradient(1575.0,345.0,1575.0,687.0);
	grd.addColorStop(0.0,tocolor(ctrans.apply([126,126,126,1])));
	grd.addColorStop(0.9921568627450981,tocolor(ctrans.apply([77,73,71,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 494 1869 L 494 1957 1891 1957 1891 2024 265 2024 265 1776 345 1776 494 1776 494 1814 494 1869";
	var grd=ctx.createLinearGradient(185.0,1767.0,185.0,1971.0);
	grd.addColorStop(0.0,tocolor(ctrans.apply([128,128,128,1])));
	grd.addColorStop(0.9921568627450981,tocolor(ctrans.apply([70,66,65,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 136 2024 L 136 1716 Q 135 1686 149 1660 163 1632 192 1625 L 252 1627 Q 273 1652 265 1776 L 265 2024 136 2024";
	var grd=ctx.createLinearGradient(185.0,1767.0,185.0,1971.0);
	grd.addColorStop(0.0,tocolor(ctrans.apply([135,135,135,1])));
	grd.addColorStop(0.9764705882352941,tocolor(ctrans.apply([60,57,55,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 151 2260 L 124 2260 Q 87 2215 102 2141 L 129 2136 302 2137 Q 295 2178 304 2210 L 305 2212 Q 298 2246 314 2260 L 151 2260";
	var grd=ctx.createLinearGradient(206.0,2166.25,206.0,2259.75);
	grd.addColorStop(0.0,tocolor(ctrans.apply([168,168,168,1])));
	grd.addColorStop(0.9921568627450981,tocolor(ctrans.apply([63,57,54,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 187 2379 L 186 2364 Q 184 2307 171 2281 L 309 2281 Q 313 2385 264 2418 207 2429 187 2379";
	var grd=ctx.createLinearGradient(198.5,2164.0,281.5,2476.0);
	grd.addColorStop(0.03529411764705882,tocolor(ctrans.apply([168,168,168,1])));
	grd.addColorStop(0.9921568627450981,tocolor(ctrans.apply([63,57,54,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 80 2592 Q 79 2585 109 2549 L 139 2514 Q 199 2545 340 2551 368 2664 251 2680 101 2702 80 2592";
	var grd=ctx.createLinearGradient(160.25,2339.75,277.75,2778.25);
	grd.addColorStop(0.03529411764705882,tocolor(ctrans.apply([168,168,168,1])));
	grd.addColorStop(0.9921568627450981,tocolor(ctrans.apply([63,57,54,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 353 2455 Q 320 2357 361 2260 409 2135 361 2088 L 694 2088 694 2562 381 2755 393 2717 422 2691 Q 451 2657 453 2618 456 2576 423 2542 L 389 2516 Q 406 2512 403 2485 400 2456 353 2455";
	var grd=ctx.createLinearGradient(1115.0,2643.0,1115.0,2145.0);
	grd.addColorStop(0.0,tocolor(ctrans.apply([98,98,98,1])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([21,18,17,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 1891 2088 L 1891 2562 694 2562 694 2088 1891 2088";
	var grd=ctx.createLinearGradient(1292.0,2554.0,1292.0,2096.0);
	grd.addColorStop(0.0,tocolor(ctrans.apply([77,77,77,1])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([30,24,22,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 1891 2562 L 1891 2834 384 2834 383 2833 Q 375 2803 379 2772 L 381 2755 694 2562 1891 2562";
	var grd=ctx.createLinearGradient(1115.0,2643.0,1115.0,2145.0);
	grd.addColorStop(0.0,tocolor(ctrans.apply([65,62,60,1])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([25,22,21,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 1891 233 L 1768 233 1768 350 1891 350 M 1891 2834 L 384 2834 Q 460 2895 380 2959 L 160 2959 Q 128 2936 131 2902 155 2845 181 2833 207 2806 189 2744 156 2734 128 2714 73 2674 73 2618 73 2607 80 2592 79 2585 109 2549 L 139 2514 Q 111 2509 120 2487 L 130 2473 Q 142 2462 164 2458 187 2453 187 2379 L 186 2364 Q 184 2307 171 2281 163 2265 151 2260 L 124 2260 Q 87 2215 102 2141 35 2149 18 2107 19 2053 52 2038 L 110 2027 136 2024 136 1716 Q 135 1686 149 1660 163 1632 192 1625 L 191 687 Q 121 611 0 608 L 244 608 244 458 211 458 Q 197 439 211 419 L 307 419 298 418 Q 278 414 258 398 230 374 232 341 233 316 248 295 269 265 310 262 351 259 373 292 391 318 388 341 383 377 355 400 333 418 312 419 L 402 419 412 433 Q 416 446 402 458 L 1257 458 1257 423 Q 1215 353 1160 350 L 1230 350 1230 196 1197 196 Q 1183 184 1197 157 L 1292 157 Q 1218 144 1218 79 1218 -3 1296 0 1340 1 1358 22 1373 39 1374 79 1375 112 1344 136 1334 144 1312 151 L 1292 157 1388 157 1398 171 Q 1402 184 1388 196 L 1891 196 M 1768 233 L 1705 233 1705 350 1768 350 M 1705 233 L 1635 233 1635 350 1705 350 M 1560 350 L 1560 233 1487 233 1487 350 1560 350 1635 350 M 1487 233 L 1419 233 1419 350 1487 350 M 1230 196 L 1363 196 1388 196 M 1363 233 L 1363 196 M 1230 350 L 1363 350 1363 233 1419 233 M 1395 472 L 1393 472 1393 608 1457 608 1457 517 1395 472 1891 472 M 1363 350 L 1419 350 M 1209 608 L 1161 608 1067 608 998 608 873 608 808 608 683 608 632 608 530 608 465 608 377 608 244 608 M 1161 608 L 1161 507 1067 507 1067 608 M 1161 507 L 1209 507 1257 507 1257 458 M 1209 507 L 1209 608 1257 608 1257 507 M 998 608 L 998 507 873 507 873 608 M 1067 507 L 998 507 M 1393 608 L 1257 608 M 307 419 L 312 419 M 402 458 L 377 458 377 507 465 507 530 507 632 507 683 507 808 507 873 507 M 377 458 L 244 458 M 377 507 L 377 608 M 683 507 L 683 608 M 632 507 L 632 608 M 808 507 L 808 608 M 530 608 L 530 507 M 465 608 L 465 507 M 547 1043 L 797 1043 860 958 462 958 547 1043 547 1399 797 1399 797 1043 M 547 1399 L 462 1399 328 1399 Q 309 1431 315 1463 M 345 1776 L 345 1521 Q 319 1492 315 1463 M 265 1776 Q 273 1652 252 1627 L 192 1625 M 345 1776 L 265 1776 265 2024 1891 2024 M 494 1814 L 494 1869 M 494 1814 L 494 1776 345 1776 M 1356 1107 L 1356 1399 1891 1399 M 1131 1399 L 1177 1399 1177 983 1891 983 M 1131 1399 L 860 1399 797 1399 M 1191 1680 L 1151 1680 1151 1737 1211 1737 1891 1737 M 1356 1399 L 1177 1399 M 1891 1611 L 1250 1611 1191 1680 1891 1680 M 462 958 L 462 1399 M 1177 983 L 1356 1107 1891 1107 M 860 1399 L 860 958 M 1891 953 L 1131 953 1131 1399 M 361 2088 L 315 2088 302 2137 Q 295 2178 304 2210 L 305 2212 Q 319 2258 342 2221 363 2188 361 2155 358 2124 340 2125 M 129 2136 Q 145 2100 128 2088 L 76 2084 M 129 2136 L 102 2141 M 353 2455 Q 320 2357 361 2260 L 314 2260 151 2260 M 335 2459 L 353 2455 Q 400 2456 403 2485 406 2512 389 2516 L 423 2542 Q 456 2576 453 2618 451 2657 422 2691 L 393 2717 381 2755 694 2562 694 2088 361 2088 Q 409 2135 361 2260 M 164 2458 L 266 2463 335 2459 M 136 2024 L 265 2024 M 315 2088 L 128 2088 M 389 2516 L 347 2521 269 2525 140 2514 139 2514 M 383 2833 Q 375 2803 379 2772 L 381 2755 M 383 2833 L 228 2833 181 2833 M 384 2834 L 383 2833 M 189 2744 L 263 2754 Q 314 2754 393 2717 M 1635 233 L 1560 233 M 1891 423 L 1257 423 M 1891 1814 L 494 1814 M 694 2088 L 1891 2088 M 694 2562 L 1891 2562 M 345 1521 L 1891 1521 M 1457 517 L 1891 517 M 1457 608 L 1891 608 M 191 687 L 1891 687";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

}

function sprite196(ctx,ctrans,frame,ratio,time){
	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place(shape195,canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}
}

function shape197(ctx,ctrans,frame,ratio,time){
	var pathData="M -866 -1131 Q -883 -1131 -884 -1110 L -874 -1114 Q -867 -1115 -866 -1110 -859 -1100 -863 -1087 -867 -1076 -877 -1075 -899 -1074 -897 -1113 -893 -1141 -877 -1143 -849 -1148 -838 -1112 -826 -1076 -848 -1034 -857 -1019 -872 -1013 L -905 -1010 Q -923 -1017 -929 -1033 L -948 -1048 Q -949 -1061 -936 -1054 -945 -1089 -943 -1124 L -949 -1126 Q -956 -1135 -955 -1161 -935 -1167 -914 -1161 -916 -1130 -922 -1126 L -928 -1124 -927 -1091 -920 -1046 Q -892 -1009 -866 -1033 -855 -1044 -848 -1065 -842 -1085 -844 -1100 -844 -1112 -850 -1121 -857 -1130 -866 -1131 M -866 -1110 L -871 -1092 Q -872 -1085 -875 -1085 L -882 -1092 -884 -1110 -882 -1092 -875 -1085 Q -872 -1085 -871 -1092 L -866 -1110 M -920 -1046 L -936 -1054 -920 -1046 M -943 -1124 L -928 -1124 -943 -1124";
	var grd=ctx.createLinearGradient(-1105.75,-1104.0,-772.25,-1080.0);
	grd.addColorStop(0.00784313725490196,tocolor(ctrans.apply([128,126,125,1])));
	grd.addColorStop(0.3568627450980392,tocolor(ctrans.apply([180,180,180,1])));
	grd.addColorStop(0.5254901960784314,tocolor(ctrans.apply([100,98,98,1])));
	grd.addColorStop(0.796078431372549,tocolor(ctrans.apply([149,148,148,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -866 -1131 Q -883 -1131 -884 -1110 L -874 -1114 Q -867 -1115 -866 -1110 -859 -1100 -863 -1087 -867 -1076 -877 -1075 -899 -1074 -897 -1113 -893 -1141 -877 -1143 -849 -1148 -838 -1112 -826 -1076 -848 -1034 -857 -1019 -872 -1013 L -905 -1010 Q -923 -1017 -929 -1033 L -948 -1048 Q -949 -1061 -936 -1054 -945 -1089 -943 -1124 L -949 -1126 Q -956 -1135 -955 -1161 -935 -1167 -914 -1161 -916 -1130 -922 -1126 L -928 -1124 -927 -1091 -920 -1046 Q -892 -1009 -866 -1033 -855 -1044 -848 -1065 -842 -1085 -844 -1100 -844 -1112 -850 -1121 -857 -1130 -866 -1131 M -928 -1124 L -943 -1124 M -936 -1054 L -920 -1046 M -884 -1110 L -882 -1092 -875 -1085 Q -872 -1085 -871 -1092 L -866 -1110";
	var scaleMode = "NONE";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=1.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 11 -623 L 11 -678 11 -623 -59 -623 -59 -678 -59 -623 -130 -623 -187 -623 -187 -678 -130 -678 -130 -623 -130 -678 -59 -678 11 -678 44 -678 44 -623 11 -623 M -871 -623 L -941 -623 -941 -678 -941 -623 -1007 -623 -1007 -678 -941 -678 -871 -678 -871 -623 -871 -678 -806 -678 -806 -623 -806 -678 -747 -678 -687 -678 -687 -623 -687 -678 -629 -678 -629 -623 -629 -678 -569 -678 -507 -678 -507 -623 -507 -678 -443 -678 -443 -623 -443 -678 -379 -678 -313 -678 -313 -623 -313 -678 -248 -678 -248 -623 -248 -678 -187 -678 -187 -623 -248 -623 -313 -623 -379 -623 -379 -678 -379 -623 -443 -623 -507 -623 -569 -623 -569 -678 -569 -623 -629 -623 -687 -623 -747 -623 -806 -623 -871 -623 M -747 -623 L -747 -678 -747 -623";
	var grd=ctx.createLinearGradient(-847.0,-657.0,-847.0,-615.0);
	grd.addColorStop(0.043137254901960784,tocolor(ctrans.apply([222,212,207,1])));
	grd.addColorStop(0.9921568627450981,tocolor(ctrans.apply([184,168,161,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 11 -678 L 11 -623 44 -623 M 44 -678 L 11 -678 -59 -678 -59 -623 11 -623 M -941 -623 L -871 -623 -871 -678 -941 -678 -941 -623 -1007 -623 -1007 -678 -941 -678 M -313 -623 L -313 -678 -379 -678 -379 -623 -313 -623 -248 -623 -248 -678 -313 -678 M -187 -623 L -187 -678 -248 -678 M -130 -678 L -187 -678 M -187 -623 L -130 -623 -130 -678 -59 -678 M -130 -623 L -59 -623 M -248 -623 L -187 -623 M -687 -623 L -687 -678 -747 -678 -747 -623 -687 -623 -629 -623 -629 -678 -687 -678 M -806 -623 L -806 -678 -871 -678 M -806 -623 L -747 -623 M -747 -678 L -806 -678 M -507 -623 L -507 -678 -569 -678 -569 -623 -507 -623 -443 -623 -443 -678 -507 -678 M -569 -678 L -629 -678 M -629 -623 L -569 -623 M -443 -623 L -379 -623 M -379 -678 L -443 -678 M -871 -623 L -806 -623";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -959 -678 L -959 -706 -925 -706 -925 -678 -959 -678";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -959 -678 L -959 -706 -925 -706 -925 -678 -959 -678 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -887 -706 L -854 -706 -854 -678 -887 -678 -887 -706";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -887 -706 L -854 -706 -854 -678 -887 -678 -887 -706 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -729 -678 L -763 -678 -763 -706 -729 -706 -729 -678";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -729 -678 L -763 -678 -763 -706 -729 -706 -729 -678 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -711 -706 L -677 -706 -677 -678 -711 -678 -711 -706";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -711 -706 L -677 -706 -677 -678 -711 -678 -711 -706 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -622 -706 L -622 -678 -656 -678 -656 -706 -622 -706";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -622 -706 L -622 -678 -656 -678 -656 -706 -622 -706 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -538 -706 L -505 -706 -505 -678 -538 -678 -538 -706";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -538 -706 L -505 -706 -505 -678 -538 -678 -538 -706 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -433 -706 L -433 -678 -467 -678 -467 -706 -433 -706";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -433 -706 L -433 -678 -467 -678 -467 -706 -433 -706 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -342 -706 L -308 -706 -308 -678 -342 -678 -342 -706";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -342 -706 L -308 -706 -308 -678 -342 -678 -342 -706 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -256 -706 L -256 -678 -290 -678 -290 -706 -256 -706";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -256 -706 L -256 -678 -290 -678 -290 -706 -256 -706 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -201 -678 L -235 -678 -235 -706 -201 -706 -201 -678";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -201 -678 L -235 -678 -235 -706 -201 -706 -201 -678 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -79 -708 L -79 -680 -113 -680 -113 -708 -79 -708";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -79 -708 L -79 -680 -113 -680 -113 -708 -79 -708 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -7 -680 L -41 -680 -41 -708 -7 -708 -7 -680";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -7 -680 L -41 -680 -41 -708 -7 -708 -7 -680 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

}

function shape198(ctx,ctrans,frame,ratio,time){
	var pathData="M 889 -1124 L 883 -1126 Q 877 -1130 875 -1161 896 -1167 916 -1161 917 -1135 910 -1126 L 904 -1124 889 -1124 904 -1124 Q 906 -1089 897 -1054 910 -1061 909 -1048 L 890 -1033 Q 884 -1017 866 -1010 L 833 -1013 Q 818 -1019 809 -1034 787 -1076 799 -1112 810 -1148 838 -1143 854 -1141 858 -1113 860 -1074 838 -1075 828 -1076 824 -1087 820 -1100 827 -1110 828 -1115 835 -1114 L 845 -1110 Q 844 -1131 827 -1131 L 811 -1121 Q 805 -1112 805 -1100 803 -1085 809 -1065 816 -1044 827 -1033 853 -1009 881 -1046 L 888 -1091 889 -1124 M 881 -1046 L 897 -1054 881 -1046 M 827 -1110 L 832 -1092 Q 833 -1085 836 -1085 L 843 -1092 845 -1110 843 -1092 836 -1085 Q 833 -1085 832 -1092 L 827 -1110";
	var grd=ctx.createLinearGradient(1066.75,-1104.0,733.25,-1080.0);
	grd.addColorStop(0.00784313725490196,tocolor(ctrans.apply([128,126,125,1])));
	grd.addColorStop(0.3568627450980392,tocolor(ctrans.apply([180,180,180,1])));
	grd.addColorStop(0.5254901960784314,tocolor(ctrans.apply([100,98,98,1])));
	grd.addColorStop(0.796078431372549,tocolor(ctrans.apply([149,148,148,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 904 -1124 L 910 -1126 Q 917 -1135 916 -1161 896 -1167 875 -1161 877 -1130 883 -1126 L 889 -1124 904 -1124 Q 906 -1089 897 -1054 910 -1061 909 -1048 L 890 -1033 Q 884 -1017 866 -1010 L 833 -1013 Q 818 -1019 809 -1034 787 -1076 799 -1112 810 -1148 838 -1143 854 -1141 858 -1113 860 -1074 838 -1075 828 -1076 824 -1087 820 -1100 827 -1110 828 -1115 835 -1114 L 845 -1110 Q 844 -1131 827 -1131 L 811 -1121 Q 805 -1112 805 -1100 803 -1085 809 -1065 816 -1044 827 -1033 853 -1009 881 -1046 L 888 -1091 889 -1124 M 845 -1110 L 843 -1092 836 -1085 Q 833 -1085 832 -1092 L 827 -1110 M 897 -1054 L 881 -1046";
	var scaleMode = "NONE";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=1.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -83 -678 L -50 -678 20 -678 91 -678 148 -678 209 -678 274 -678 340 -678 404 -678 468 -678 530 -678 590 -678 648 -678 708 -678 767 -678 832 -678 902 -678 968 -678 968 -623 902 -623 832 -623 767 -623 708 -623 648 -623 590 -623 530 -623 468 -623 404 -623 340 -623 274 -623 209 -623 148 -623 91 -623 20 -623 -50 -623 -83 -623 -83 -678 M -50 -623 L -50 -678 -50 -623 M 902 -678 L 902 -623 902 -678 M 832 -623 L 832 -678 832 -623 M 274 -678 L 274 -623 274 -678 M 209 -623 L 209 -678 209 -623 M 404 -623 L 404 -678 404 -623 M 340 -623 L 340 -678 340 -623 M 20 -678 L 20 -623 20 -678 M 91 -623 L 91 -678 91 -623 M 148 -678 L 148 -623 148 -678 M 708 -623 L 708 -678 708 -623 M 648 -678 L 648 -623 648 -678 M 767 -678 L 767 -623 767 -678 M 590 -678 L 590 -623 590 -678 M 468 -678 L 468 -623 468 -678 M 530 -623 L 530 -678 530 -623";
	var grd=ctx.createLinearGradient(808.0,-657.0,808.0,-615.0);
	grd.addColorStop(0.043137254901960784,tocolor(ctrans.apply([222,212,207,1])));
	grd.addColorStop(0.9921568627450981,tocolor(ctrans.apply([184,168,161,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -83 -678 L -50 -678 20 -678 91 -678 148 -678 209 -678 274 -678 340 -678 404 -678 468 -678 530 -678 590 -678 648 -678 708 -678 767 -678 832 -678 902 -678 968 -678 968 -623 902 -623 832 -623 767 -623 708 -623 648 -623 590 -623 530 -623 468 -623 404 -623 340 -623 274 -623 209 -623 148 -623 91 -623 20 -623 -50 -623 -83 -623 M 530 -678 L 530 -623 M 468 -623 L 468 -678 M 590 -623 L 590 -678 M 767 -623 L 767 -678 M 648 -623 L 648 -678 M 708 -678 L 708 -623 M 148 -623 L 148 -678 M 91 -678 L 91 -623 M 20 -623 L 20 -678 M 340 -678 L 340 -623 M 404 -678 L 404 -623 M 209 -678 L 209 -623 M 274 -623 L 274 -678 M 832 -678 L 832 -623 M 902 -623 L 902 -678 M -50 -678 L -50 -623";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 920 -678 L 886 -678 886 -706 920 -706 920 -678";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 920 -678 L 920 -706 886 -706 886 -678 920 -678 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 848 -706 L 848 -678 815 -678 815 -706 848 -706";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 848 -706 L 815 -706 815 -678 848 -678 848 -706 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 690 -678 L 690 -706 724 -706 724 -678 690 -678";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 690 -678 L 724 -678 724 -706 690 -706 690 -678 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 672 -706 L 672 -678 638 -678 638 -706 672 -706";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 672 -706 L 638 -706 638 -678 672 -678 672 -706 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 583 -706 L 617 -706 617 -678 583 -678 583 -706";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 583 -706 L 583 -678 617 -678 617 -706 583 -706 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 499 -706 L 499 -678 466 -678 466 -706 499 -706";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 499 -706 L 466 -706 466 -678 499 -678 499 -706 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 394 -706 L 428 -706 428 -678 394 -678 394 -706";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 394 -706 L 394 -678 428 -678 428 -706 394 -706 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 303 -706 L 303 -678 269 -678 269 -706 303 -706";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 303 -706 L 269 -706 269 -678 303 -678 303 -706 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 217 -706 L 251 -706 251 -678 217 -678 217 -706";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 217 -706 L 217 -678 251 -678 251 -706 217 -706 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 162 -678 L 162 -706 196 -706 196 -678 162 -678";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 162 -678 L 196 -678 196 -706 162 -706 162 -678 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 40 -708 L 74 -708 74 -680 40 -680 40 -708";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 40 -708 L 40 -680 74 -680 74 -708 40 -708 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 2 -708 L 2 -680 -32 -680 -32 -708 2 -708";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 2 -708 L -32 -708 -32 -680 2 -680 2 -708 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 233 -104 L -242 -104 -242 -190 233 -190 233 -104";
	var grd=ctx.createLinearGradient(-5.0,-87.0,-5.0,-207.0);
	grd.addColorStop(0.0,tocolor(ctrans.apply([28,26,25,1])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([11,7,6,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 233 -104 L -242 -104 -242 -190 233 -190 233 -104 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -122 -148 Q -151 -98 -217 -92 -316 -90 -297 -123 L -235 -132 Q -202 -132 -190 -148 L -122 -148";
	ctx.fillStyle=tocolor(ctrans.apply([112,83,29,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -122 -148 Q -121 -123 -129 -98 -142 -90 -182 -80 L -229 -71 Q -267 -68 -297 -80 L -317 -93 -311 -115 -297 -123 Q -316 -90 -217 -92 -151 -98 -122 -148";
	ctx.fillStyle=tocolor(ctrans.apply([74,53,12,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -297 -123 L -311 -115 -317 -93 -297 -80 Q -267 -68 -229 -71 L -182 -80 Q -142 -90 -129 -98 -121 -123 -122 -148 M -297 -123 L -235 -132 Q -202 -132 -190 -148 L -122 -148";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 116 -151 L 185 -151 Q 198 -135 231 -135 L 293 -126 Q 312 -93 212 -95 146 -101 116 -151";
	ctx.fillStyle=tocolor(ctrans.apply([112,83,29,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 293 -126 L 306 -118 313 -96 Q 306 -89 293 -83 263 -71 224 -74 L 177 -83 Q 137 -93 123 -101 115 -126 116 -151 146 -101 212 -95 312 -93 293 -126";
	ctx.fillStyle=tocolor(ctrans.apply([74,53,12,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 293 -126 L 306 -118 313 -96 Q 306 -89 293 -83 263 -71 224 -74 L 177 -83 Q 137 -93 123 -101 115 -126 116 -151 L 185 -151 Q 198 -135 231 -135 L 293 -126 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -67 -106 L -64 -108 Q -34 -128 -52 -146 L 35 -146 Q 23 -126 40 -116 L 48 -110 Q 60 -84 -3 -80 -79 -86 -67 -106";
	ctx.fillStyle=tocolor(ctrans.apply([112,83,29,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 48 -110 L 66 -88 Q 73 -55 -27 -61 -125 -66 -67 -106 -79 -86 -3 -80 60 -84 48 -110";
	ctx.fillStyle=tocolor(ctrans.apply([74,53,12,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 48 -110 L 66 -88 Q 73 -55 -27 -61 -125 -66 -67 -106 L -64 -108 Q -34 -128 -52 -146 L 35 -146 Q 23 -126 40 -116 L 48 -110 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

}

function shape167(ctx,ctrans,frame,ratio,time){
	var pathData="M 1 -734 L 1 -762";
	var scaleMode = "NONE";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=1.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -40 -669 Q -45 -679 -29 -702 L -29 -731 Q 3 -737 35 -731 L 35 -697 Q 48 -654 45 -638 35 -633 28 -656 29 -639 35 -628 L 35 -559 Q 26 -110 -29 -121 L -29 -662 Q -21 -667 -22 -684 -28 -673 -40 -669";
	var grd=ctx.createLinearGradient(8.0,-225.0,8.0,-793.0);
	grd.addColorStop(0.043137254901960784,tocolor(ctrans.apply([175,155,131,1])));
	grd.addColorStop(0.7176470588235294,tocolor(ctrans.apply([238,231,224,1])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([255,196,159,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 45 -638 Q 43 -627 35 -628 29 -639 28 -656 35 -633 45 -638 M -29 -662 Q -38 -664 -40 -669 -28 -673 -22 -684 -21 -667 -29 -662";
	ctx.fillStyle=tocolor(ctrans.apply([182,166,143,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 35 -559 L 35 -121 Q 4 -107 -29 -121 26 -110 35 -559";
	ctx.fillStyle=tocolor(ctrans.apply([154,135,106,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -40 -669 Q -45 -679 -29 -702 L -29 -731 Q 3 -737 35 -731 L 35 -697 Q 48 -654 45 -638 43 -627 35 -628 L 35 -559 35 -121 Q 4 -107 -29 -121 L -29 -662 Q -38 -664 -40 -669 Z";
	var scaleMode = "NONE";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=1.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -15 -582 Q -3 -580 9 -610 6 -575 -4 -572 -16 -568 -15 -582";
	ctx.fillStyle=tocolor(ctrans.apply([182,166,143,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -15 -582 L -13 -595 -5 -619";
	var scaleMode = "NONE";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=1.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 110 -1008 Q 155 -946 155 -858 155 -770 110 -707 65 -646 1 -646 -64 -646 -109 -707 -154 -770 -154 -858 -154 -946 -109 -1008 -64 -1070 1 -1070 65 -1070 110 -1008";
	drawPath(ctx,pathData,false);
	ctx.fillStyle=tocolor(ctrans.apply([255,221,135,0.0]));
	ctx.fill("evenodd");
	ctx.save();
	ctx.clip();
	ctx.transform(0.0089874267578125,0,0,0.0128173828125,1,-858);
	var grd=ctx.createRadialGradient(0.0,0,0,0,0,16384);
	grd.addColorStop(0.0,tocolor(ctrans.apply([255,253,245,0.8784314])));
	grd.addColorStop(0.14901960784313725,tocolor(ctrans.apply([255,210,2,0.7019608])));
	grd.addColorStop(0.39215686274509803,tocolor(ctrans.apply([247,147,49,0.5411765])));
	grd.addColorStop(0.615686274509804,tocolor(ctrans.apply([252,200,111,0.14117648])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([255,221,135,0.0])));
	ctx.fillStyle = grd;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 9 -796 Q -41 -821 -14 -865 -21 -829 -3 -823 -8 -854 -2 -894 L -1 -900 -1 -894 Q 1 -865 24 -841 39 -823 22 -801 L 9 -796";
	ctx.fillStyle=tocolor(ctrans.apply([255,241,180,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 9 -796 L 8 -796 Q -51 -806 -41 -854 L -28 -894 -4 -930 Q 28 -979 11 -1035 49 -964 20 -909 19 -901 21 -894 L 25 -883 42 -854 Q 58 -827 50 -814 40 -802 22 -801 39 -823 24 -841 1 -865 -1 -894 L -1 -900 -2 -894 Q -8 -854 -3 -823 -21 -829 -14 -865 -41 -821 9 -796";
	var grd=ctx.createLinearGradient(-0.75,-937.25,-1.25,-780.75);
	grd.addColorStop(0.0,tocolor(ctrans.apply([243,82,37,1])));
	grd.addColorStop(0.9882352941176471,tocolor(ctrans.apply([255,227,98,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
}

function shape199(ctx,ctrans,frame,ratio,time){
	var pathData="M 1229 217 L 1282 217 1282 145 1229 145 1229 217 M 1422 145 L 1329 145 1329 217 1422 217 1422 1760 288 1760 Q 345 1798 285 1838 L 120 1838 Q 96 1824 98 1803 L 100 1795 Q 106 1771 136 1760 155 1743 142 1705 117 1698 96 1686 54 1661 54 1626 54 1619 60 1610 L 66 1598 79 1585 104 1562 Q 83 1559 90 1545 92 1540 97 1536 106 1529 123 1527 140 1524 140 1478 L 139 1468 Q 138 1433 128 1417 122 1407 113 1404 L 93 1404 Q 65 1376 76 1330 26 1335 13 1309 14 1275 39 1266 L 82 1259 102 1257 102 1066 Q 101 1047 112 1031 122 1014 144 1009 L 143 427 Q 91 380 0 378 L 183 378 183 285 158 285 158 260 224 260 Q 206 257 191 245 L 188 242 Q 174 229 174 212 174 192 191 177 209 163 233 163 257 163 274 177 291 192 291 212 291 232 274 245 259 260 238 260 L 302 260 309 269 Q 312 277 302 285 L 945 285 945 263 Q 913 219 872 217 L 925 217 925 122 900 122 900 98 971 98 965 97 Q 947 94 933 83 L 929 80 Q 916 67 916 49 916 29 933 14 950 0 974 0 998 0 1016 14 1033 29 1033 49 1033 69 1016 83 999 97 976 98 L 1043 98 1051 106 Q 1054 114 1043 122 L 1422 122 1422 145 M 475 378 L 475 315 398 315 398 378 475 378 M 909 378 L 945 378 945 315 909 315 909 378 M 873 378 L 873 315 802 315 802 378 873 378 M 1118 217 L 1173 217 1173 145 1118 145 1118 217 M 1067 217 L 1067 145 1025 145 1025 217 1067 217 M 607 315 L 513 315 513 378 607 378 607 315 M 349 378 L 349 315 283 315 283 378 349 378 M 750 378 L 750 315 656 315 656 378 750 378";
	drawPath(ctx,pathData,false);
	ctx.fillStyle=tocolor(ctrans.apply([255,255,255,0.0]));
	ctx.fill("evenodd");
	ctx.save();
	ctx.clip();
	ctx.transform(0.0608367919921875,0,0,0.0643463134765625,398,346);
	var grd=ctx.createRadialGradient(0.0,0,0,0,0,16384);
	grd.addColorStop(0.0,tocolor(ctrans.apply([255,255,255,0.8901961])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([255,255,255,0.0])));
	ctx.fillStyle = grd;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite168(ctx,ctrans,frame,ratio,time){
	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			break;
	}
}

function sprite200(ctx,ctrans,frame,ratio,time){
	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place(shape199,canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}
}

function sprite169(ctx,ctrans,frame,ratio,time){
	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place(shape167,canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place(sprite168,canvas,ctx,[0.0480804443359375,0.019134521484375,-0.014068603515625,0.0781707763671875,-33.0,-944.0],ctrans,13,(0+time)%1,0,time);
			break;
	}
}

function sprite201(ctx,ctrans,frame,ratio,time){
	ctx.save();
	ctx.transform(1,0,0,1,69.0,92.05);
	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place(shape194,canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place(sprite196,canvas,ctx,[0.03760528564453125,0.0,0.0,0.0310577392578125,-68.9,-91.95],ctrans,1,(0+time)%1,0,time);
			place(sprite169,canvas,ctx,[0.023516845703125,0.0,0.0,0.01492767333984375,-46.75,-56.1],ctrans,1,(0+time)%1,0,time);
			place(shape197,canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place(sprite196,canvas,ctx,[-0.03760528564453125,0.0,0.0,0.0310577392578125,66.95,-91.95],ctrans,1,(0+time)%1,0,time);
			place(sprite169,canvas,ctx,[-0.023516845703125,0.0,0.0,0.01492767333984375,44.8,-56.1],ctrans,1,(0+time)%1,0,time);
			place(shape198,canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place(sprite200,canvas,ctx,[0.05,0.0,0.0,0.05,-68.9,-91.95],ctrans.merge(new cxform(0,0,0,0,256,256,256,131)),13,(0+time)%1,0,time);
			break;
	}
	ctx.restore();
}

var frame = -1;
var time = 0;
var frames = [];
frames.push(0);

var backgroundColor = "#ffffff00";
var originalWidth = 136;
var originalHeight= 92;
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
	sprite201(ctx,ctrans,frames[frame],0,time);
	ctx.restore();
}


nextFrame(ctx,ctrans);

return [canvas,width,height];}