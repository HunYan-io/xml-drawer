module.exports = (createCanvas, concatMatrix, enhanceContext, cxform, place, tocolor, drawMorphPath, useRatio, drawPath, shadeColor, colorPalette) => { var width=75,height=74;
var canvas=createCanvas(width,height);

var ctx=canvas.getContext("2d");
enhanceContext(ctx);
var ctrans = new cxform(0,0,0,0,255,255,255,255);

function shape362(ctx,ctrans,frame,ratio,time){
	var pathData="M 117 -815 L 134 -791 Q 180 -714 162 -667 240 -671 298 -644 368 -613 393 -542 L 392 -541 Q 377 -507 354 -506 L 354 -504 376 -483 Q 390 -466 390 -429 390 -371 367 -337 349 -307 322 -307 L 301 -310 Q 300 -286 276 -269 262 -258 251 -220 285 -380 164 -559 121 -621 24 -626 -79 -632 -151 -542 -217 -435 -232 -355 -246 -281 -232 -146 L -230 -126 Q -230 -121 -256 -134 -274 -143 -304 -167 -323 -183 -323 -208 -323 -231 -330 -234 -347 -240 -371 -259 L -415 -303 Q -433 -327 -435 -361 L -434 -398 Q -426 -488 -369 -557 -362 -606 -323 -640 -321 -670 -301 -691 -230 -762 -135 -773 -65 -826 25 -826 L 117 -815";
	ctx.fillStyle=tocolor(ctrans.apply([242,247,248,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 251 -220 Q 262 -258 276 -269 300 -286 301 -310 L 322 -307 Q 349 -307 367 -337 390 -371 390 -429 390 -466 376 -483 L 354 -504 354 -506 Q 377 -507 392 -541 L 393 -542 Q 368 -613 298 -644 240 -671 162 -667 180 -714 134 -791 L 117 -815 Q 221 -792 295 -713 333 -709 352 -691 378 -664 391 -607 L 406 -591 Q 455 -534 456 -449 487 -415 487 -364 487 -276 432 -206 430 -184 397 -158 407 -111 321 -66 301 -5 235 -3 L 192 -3 Q 238 -99 251 -220 M -434 -398 L -435 -361 Q -433 -327 -415 -303 L -371 -259 Q -347 -240 -330 -234 -323 -231 -323 -208 -323 -183 -304 -167 -274 -143 -256 -134 -230 -121 -230 -126 -202 -38 -121 -3 L -190 -3 Q -247 -27 -297 -66 -312 -78 -316 -94 -380 -148 -395 -243 -436 -286 -436 -364 L -434 -398";
	ctx.fillStyle=tocolor(ctrans.apply([187,209,215,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -232 -146 Q -246 -281 -232 -355 -217 -435 -151 -542 -79 -632 24 -626 121 -621 164 -559 285 -380 251 -220 214 -643 -38 -584 -250 -498 -232 -146";
	var grd=ctx.createLinearGradient(5.5,-312.25,-125.5,-709.75);
	grd.addColorStop(0.0,tocolor(ctrans.apply([187,209,215,1])));
	grd.addColorStop(0.9921568627450981,tocolor(ctrans.apply([156,189,198,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -230 -126 L -232 -146 Q -250 -498 -38 -584 214 -643 251 -220 238 -99 192 -3 L -121 -3 Q -202 -38 -230 -126";
	drawPath(ctx,pathData,false);
	ctx.fillStyle=tocolor(ctrans.apply([187,209,215,1]));
	ctx.fill("evenodd");
	ctx.save();
	ctx.clip();
	ctx.transform(0.0310821533203125,0,0,0.0310821533203125,-126,-569);
	var grd=ctx.createRadialGradient(0.0,0,0,0,0,16384);
	grd.addColorStop(0.0,tocolor(ctrans.apply([242,247,248,1])));
	grd.addColorStop(0.3254901960784314,tocolor(ctrans.apply([239,245,247,1])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([187,209,215,1])));
	ctx.fillStyle = grd;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 423 -558 Q 419 -564 425 -567 L 434 -564 Q 438 -559 432 -556 426 -552 423 -558 M 445 -508 Q 439 -519 449 -524 460 -530 467 -521 474 -513 463 -504 452 -496 445 -508 M 204 -765 Q 198 -776 208 -781 219 -787 226 -778 233 -770 222 -761 211 -753 204 -765 M 245 -746 Q 240 -752 247 -756 L 258 -755 Q 262 -748 255 -745 L 245 -746 M 86 -822 L 74 -824 Q 69 -830 77 -835 L 89 -833 Q 93 -826 86 -822 M 20 -832 L 24 -835 40 -833 Q 47 -825 37 -818 L 25 -816 Q 20 -816 16 -821 11 -827 20 -832 M 111 -809 Q 106 -817 114 -822 121 -826 128 -818 135 -810 126 -805 116 -800 111 -809 M 177 -795 Q 170 -792 165 -798 161 -805 168 -809 175 -813 180 -806 185 -799 177 -795 M 365 -681 Q 368 -678 363 -675 L 356 -676 Q 354 -680 358 -682 L 365 -681 M 315 -703 Q 309 -711 318 -716 327 -721 333 -712 339 -703 330 -699 320 -694 315 -703 M 372 -637 Q 367 -643 376 -648 L 388 -646 Q 393 -639 385 -634 377 -630 372 -637 M 273 -720 Q 268 -728 276 -733 283 -737 290 -729 297 -721 288 -716 278 -711 273 -720 M 385 -597 Q 379 -607 388 -612 397 -617 405 -608 412 -599 402 -593 391 -587 385 -597 M 92 -8 Q 88 -12 94 -15 L 102 -14 Q 104 -9 99 -6 95 -4 92 -8 M 63 -10 Q 70 -2 60 3 50 9 45 0 39 -9 47 -14 56 -19 63 -10 M 142 -3 Q 146 2 140 6 135 10 131 4 128 -1 133 -4 L 142 -3 M 392 -140 Q 388 -144 394 -147 L 402 -146 Q 404 -141 399 -138 395 -136 392 -140 M 283 -10 Q 287 -1 279 3 271 8 266 1 260 -6 269 -12 L 283 -10 M 232 -5 Q 236 -1 231 2 L 223 0 Q 220 -5 224 -7 L 232 -5 M 360 -98 Q 355 -106 363 -111 370 -115 377 -107 384 -99 375 -94 365 -89 360 -98 M 351 -87 Q 357 -79 348 -74 339 -70 334 -78 329 -86 337 -90 346 -95 351 -87 M 306 -35 Q 303 -40 308 -43 L 315 -41 Q 319 -37 314 -34 L 306 -35 M 462 -464 Q 455 -460 450 -466 445 -472 453 -477 L 465 -475 Q 469 -468 462 -464 M 486 -387 Q 495 -392 500 -384 506 -376 497 -371 488 -367 483 -375 478 -383 486 -387 M 475 -424 L 465 -426 Q 461 -432 466 -435 L 476 -433 Q 481 -427 475 -424 M 483 -338 Q 478 -346 485 -350 L 498 -348 Q 504 -341 496 -336 487 -330 483 -338 M 479 -292 Q 474 -298 483 -303 L 495 -301 Q 500 -294 492 -289 484 -285 479 -292 M 474 -259 Q 481 -250 471 -244 460 -238 454 -248 448 -258 457 -263 466 -268 474 -259 M 434 -158 Q 424 -151 418 -161 412 -171 421 -175 L 437 -173 Q 444 -165 434 -158 M 450 -207 Q 437 -201 430 -212 423 -224 435 -230 446 -236 454 -225 462 -213 450 -207 M 178 8 Q 173 0 181 -4 188 -8 194 0 199 7 191 11 183 15 178 8 M 0 10 Q -5 2 3 -2 12 -7 17 1 23 9 14 14 5 18 0 10 M -197 -750 L -205 -751 Q -208 -756 -203 -759 L -196 -757 Q -192 -753 -197 -750 M -158 -765 Q -163 -771 -155 -776 -147 -781 -143 -774 -139 -767 -146 -763 -153 -759 -158 -765 M -112 -797 Q -105 -801 -99 -794 -92 -786 -101 -782 -109 -777 -114 -785 -119 -793 -112 -797 M -34 -816 Q -39 -824 -31 -828 L -17 -826 Q -11 -819 -20 -813 -29 -807 -34 -816 M -66 -821 Q -56 -827 -49 -817 -42 -807 -52 -801 -63 -796 -69 -806 -76 -816 -66 -821 M -233 -746 Q -227 -738 -236 -733 -245 -729 -250 -737 -255 -745 -247 -749 -238 -754 -233 -746 M -257 -708 Q -267 -703 -272 -712 -277 -720 -269 -725 -262 -729 -255 -721 -248 -713 -257 -708 M -303 -676 L -316 -678 Q -322 -685 -313 -691 -303 -697 -299 -689 -295 -680 -303 -676 M -328 -635 Q -331 -640 -326 -643 L -317 -642 Q -313 -637 -319 -633 -324 -629 -328 -635 M -348 -597 Q -358 -592 -363 -601 -369 -609 -360 -614 -351 -619 -345 -610 -339 -601 -348 -597 M -366 -560 Q -359 -552 -368 -547 -378 -542 -383 -551 -388 -559 -380 -564 -373 -568 -366 -560 M -394 -523 Q -399 -529 -390 -534 -382 -540 -378 -532 -373 -525 -381 -520 -389 -516 -394 -523 M -443 -392 Q -450 -403 -440 -409 -430 -415 -421 -404 -412 -394 -424 -388 -436 -381 -443 -392 M -442 -439 Q -445 -444 -440 -447 L -431 -445 Q -428 -440 -433 -437 L -442 -439 M -438 -343 L -450 -345 Q -455 -351 -447 -356 -439 -361 -435 -354 -431 -347 -438 -343 M -422 -311 Q -418 -306 -425 -302 L -434 -303 Q -438 -310 -432 -313 L -422 -311 M -415 -269 Q -406 -274 -400 -265 -394 -256 -403 -252 -413 -247 -418 -256 -424 -264 -415 -269 M -384 -204 Q -392 -199 -397 -207 -401 -214 -395 -217 L -382 -214 Q -377 -208 -384 -204 M -361 -141 L -348 -139 Q -342 -132 -350 -127 -359 -121 -363 -129 -368 -137 -361 -141 M -375 -165 Q -383 -161 -388 -168 -393 -174 -384 -179 -376 -185 -372 -177 -367 -170 -375 -165 M -307 -68 L -297 -66 Q -292 -60 -298 -57 L -308 -59 Q -312 -65 -307 -68 M -331 -105 Q -335 -111 -329 -114 -324 -117 -320 -111 -316 -106 -322 -103 -328 -99 -331 -105 M -214 -15 L -201 -13 Q -195 -6 -203 -1 L -216 -3 Q -221 -11 -214 -15 M -269 -27 Q -274 -33 -265 -38 L -253 -36 Q -248 -29 -256 -24 -264 -20 -269 -27 M -47 -4 L -45 -10 -38 -9 Q -35 -6 -40 -3 L -47 -4 M -78 -7 Q -74 0 -81 4 L -93 2 Q -98 -4 -90 -9 -82 -14 -78 -7 M -117 -7 Q -110 1 -120 6 -130 12 -135 3 -141 -6 -133 -11 -124 -16 -117 -7 M -162 -7 Q -156 2 -165 6 -175 11 -180 2 -186 -6 -177 -11 -168 -16 -162 -7 M -415 -491 Q -420 -499 -413 -503 L -400 -501 Q -394 -494 -402 -489 -411 -483 -415 -491";
	ctx.fillStyle=tocolor(ctrans.apply([255,255,255,0.81960785]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -284 -938 L -281 -955 Q -297 -993 -293 -1019 -292 -1037 -269 -1055 -256 -1164 -159 -1231 -106 -1268 -43 -1267 15 -1299 87 -1287 107 -1283 120 -1266 156 -1263 181 -1239 243 -1220 283 -1172 L 299 -1150 Q 311 -1130 313 -1108 L 305 -1065 291 -1033 Q 287 -1029 297 -1015 307 -1001 303 -983 L 289 -944 Q 279 -926 266 -923 270 -914 259 -899 L 236 -874 191 -876 143 -910 140 -850 Q 120 -791 26 -789 7 -789 -14 -809 L -34 -826 -48 -792 Q -52 -780 -77 -792 -102 -803 -109 -818 L -165 -813 Q -218 -812 -225 -826 -232 -839 -225 -876 L -218 -911 Q -225 -906 -252 -919 -277 -930 -284 -938";
	ctx.fillStyle=tocolor(ctrans.apply([242,247,248,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -284 -938 Q -277 -930 -252 -919 -225 -906 -218 -911 L -225 -876 Q -232 -839 -225 -826 -218 -812 -165 -813 L -109 -818 Q -102 -803 -77 -792 -52 -780 -48 -792 L -34 -826 -14 -809 Q 7 -789 26 -789 120 -791 140 -850 L 143 -910 191 -876 236 -874 259 -899 Q 270 -914 266 -923 279 -926 289 -944 L 303 -983 Q 307 -1001 297 -1015 287 -1029 291 -1033 L 305 -1065 313 -1108 Q 311 -1130 299 -1150 L 283 -1172 299 -1152 Q 331 -1106 325 -1066 356 -1005 341 -946 345 -935 342 -922 329 -878 266 -786 202 -694 57 -667 L -19 -667 Q -87 -658 -101 -690 -131 -691 -141 -704 -202 -723 -238 -773 -259 -803 -256 -835 -289 -887 -284 -938";
	ctx.fillStyle=tocolor(ctrans.apply([187,209,215,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 8 -1275 Q -1 -1271 -6 -1279 -12 -1287 -4 -1292 3 -1297 10 -1288 17 -1280 8 -1275 M 42 -1274 L 29 -1275 Q 24 -1283 33 -1287 L 45 -1286 Q 49 -1281 42 -1274 M 88 -1295 Q 95 -1299 100 -1292 105 -1284 96 -1279 88 -1274 85 -1282 82 -1291 88 -1295 M 170 -1242 Q 174 -1237 169 -1234 163 -1231 160 -1236 157 -1241 161 -1244 L 170 -1242 M 135 -1264 Q 130 -1271 137 -1275 144 -1279 148 -1272 152 -1265 146 -1261 140 -1258 135 -1264 M 325 -1121 Q 311 -1114 304 -1126 296 -1137 307 -1145 318 -1152 328 -1140 338 -1128 325 -1121 M 286 -1177 L 287 -1176 291 -1172 Q 296 -1163 289 -1159 281 -1155 276 -1163 L 274 -1167 272 -1169 Q 267 -1176 274 -1180 282 -1185 286 -1177 M 266 -1202 Q 271 -1194 262 -1189 254 -1184 251 -1192 248 -1201 254 -1205 L 266 -1202 M 224 -1215 L 211 -1216 Q 206 -1224 215 -1228 L 227 -1227 Q 231 -1222 224 -1215 M 339 -1087 L 327 -1088 Q 322 -1095 330 -1098 L 342 -1097 339 -1087 M 341 -1002 Q 337 -1006 342 -1009 L 350 -1007 348 -1000 341 -1002 M 341 -1032 Q 328 -1025 324 -1037 320 -1049 329 -1055 338 -1061 345 -1050 353 -1039 341 -1032 M 335 -950 Q 329 -958 337 -963 344 -968 351 -959 358 -951 349 -946 340 -942 335 -950 M 327 -903 Q 322 -911 331 -915 L 343 -914 Q 347 -909 340 -902 L 327 -903 M 325 -868 Q 330 -860 321 -855 313 -850 310 -858 307 -867 313 -871 320 -875 325 -868 M 251 -752 Q 255 -747 247 -739 L 232 -740 Q 226 -749 236 -754 L 251 -752 M 259 -781 Q 253 -790 261 -795 270 -801 277 -792 284 -783 274 -778 265 -773 259 -781 M 295 -832 Q 303 -837 307 -829 312 -821 305 -818 299 -814 293 -821 288 -828 295 -832 M 157 -698 Q 151 -705 159 -710 167 -715 172 -707 177 -698 170 -694 162 -690 157 -698 M 202 -723 L 214 -720 Q 219 -712 210 -707 202 -702 199 -710 196 -719 202 -723 M 141 -686 Q 150 -676 138 -670 127 -664 121 -674 114 -683 124 -690 133 -696 141 -686 M 25 -656 Q 22 -665 28 -670 35 -674 40 -666 46 -658 37 -652 28 -647 25 -656 M 69 -669 Q 61 -680 74 -685 L 91 -683 Q 96 -676 86 -667 77 -658 69 -669 M -126 -1243 Q -124 -1240 -128 -1236 -132 -1232 -136 -1236 -140 -1241 -134 -1244 L -126 -1243 M -97 -1257 Q -100 -1266 -94 -1270 -87 -1274 -82 -1267 -77 -1259 -86 -1254 -94 -1249 -97 -1257 M -45 -1259 Q -49 -1265 -43 -1269 -37 -1273 -33 -1266 -29 -1260 -35 -1257 L -45 -1259 M -203 -1201 Q -198 -1204 -195 -1199 -193 -1194 -197 -1192 -201 -1190 -204 -1194 L -203 -1201 M -234 -1148 Q -237 -1157 -231 -1161 -224 -1165 -219 -1158 -214 -1150 -223 -1145 -231 -1140 -234 -1148 M -238 -1121 Q -234 -1116 -241 -1109 L -254 -1110 Q -259 -1118 -250 -1122 L -238 -1121 M -271 -1080 Q -275 -1087 -269 -1092 -262 -1097 -255 -1089 -249 -1081 -257 -1077 -266 -1073 -271 -1080 M -292 -1033 L -291 -1040 Q -286 -1043 -283 -1038 -281 -1033 -285 -1031 -289 -1029 -292 -1033 M -278 -995 Q -273 -988 -281 -984 -289 -979 -291 -987 -294 -995 -288 -998 L -278 -995 M -176 -1222 Q -179 -1227 -174 -1231 L -164 -1229 Q -160 -1223 -166 -1220 L -176 -1222 M -275 -943 L -290 -944 Q -296 -953 -286 -958 L -271 -956 Q -267 -951 -275 -943 M -265 -872 Q -262 -866 -267 -863 -272 -860 -276 -866 L -275 -874 -265 -872 M -282 -902 Q -290 -898 -294 -904 -298 -911 -292 -915 -286 -920 -280 -913 -274 -906 -282 -902 M -249 -816 Q -257 -811 -260 -819 L -257 -832 Q -250 -836 -245 -829 -240 -821 -249 -816 M -249 -774 Q -255 -783 -245 -788 L -230 -786 Q -226 -781 -234 -773 L -249 -774 M -205 -760 Q -196 -750 -208 -744 -219 -738 -225 -748 -232 -757 -222 -764 -213 -770 -205 -760 M -88 -683 Q -85 -680 -90 -675 L -99 -676 Q -103 -681 -96 -684 L -88 -683 M -36 -674 Q -30 -666 -38 -662 -47 -658 -52 -665 -56 -672 -50 -677 -43 -682 -36 -674 M -17 -672 Q -21 -678 -15 -682 -9 -686 -5 -679 -1 -673 -7 -670 L -17 -672 M -191 -709 L -190 -716 -182 -714 Q -180 -709 -184 -707 -188 -705 -191 -709 M -156 -690 Q -160 -701 -152 -706 -144 -712 -137 -702 -130 -692 -141 -685 -152 -679 -156 -690";
	ctx.fillStyle=tocolor(ctrans.apply([255,255,255,0.81960785]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -525 -1229 L -529 -1252 -531 -1281 Q -530 -1294 -516 -1305 -507 -1377 -444 -1422 -410 -1447 -369 -1446 -332 -1466 -285 -1459 L -256 -1446 -225 -1426 Q -185 -1414 -159 -1383 -155 -1377 -152 -1338 -149 -1297 -154 -1291 -155 -1258 -166 -1235 -187 -1189 -249 -1210 -244 -1190 -251 -1171 -264 -1132 -325 -1131 -337 -1130 -351 -1143 L -364 -1155 -365 -1143 Q -366 -1134 -373 -1132 -435 -1117 -465 -1162 -480 -1184 -483 -1210 -488 -1207 -505 -1216 -521 -1223 -525 -1229";
	ctx.fillStyle=tocolor(ctrans.apply([242,247,248,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -159 -1383 L -143 -1353 Q -130 -1325 -132 -1313 -111 -1272 -122 -1233 -119 -1226 -150 -1200 -182 -1174 -218 -1114 -255 -1055 -305 -1050 L -354 -1050 Q -398 -1044 -407 -1064 -427 -1066 -433 -1074 -473 -1086 -496 -1119 -510 -1140 -507 -1160 -528 -1194 -525 -1229 -521 -1223 -505 -1216 -488 -1207 -483 -1210 -480 -1184 -465 -1162 -435 -1117 -373 -1132 -366 -1134 -365 -1143 L -364 -1155 -351 -1143 Q -337 -1130 -325 -1131 -264 -1132 -251 -1171 -244 -1190 -249 -1210 -187 -1189 -166 -1235 -155 -1258 -154 -1291 -149 -1297 -152 -1338 -155 -1377 -159 -1383";
	ctx.fillStyle=tocolor(ctrans.apply([187,209,215,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -436 -1425 Q -431 -1418 -440 -1412 -449 -1407 -454 -1415 -458 -1424 -450 -1428 -441 -1432 -436 -1425 M -503 -1379 Q -509 -1388 -499 -1392 -489 -1397 -484 -1388 -478 -1378 -488 -1374 -497 -1370 -503 -1379 M -423 -1423 Q -431 -1433 -420 -1442 -409 -1452 -403 -1440 -396 -1428 -406 -1421 -415 -1413 -423 -1423 M -509 -1343 L -498 -1341 Q -492 -1334 -499 -1328 -507 -1323 -510 -1331 L -509 -1343 M -523 -1287 Q -528 -1294 -521 -1300 L -509 -1299 Q -505 -1291 -511 -1285 -517 -1280 -523 -1287 M -538 -1244 L -540 -1247 Q -545 -1258 -535 -1263 -524 -1268 -518 -1259 -513 -1252 -519 -1246 -519 -1242 -525 -1239 -533 -1234 -537 -1242 L -538 -1244 M -493 -1120 Q -489 -1112 -495 -1106 L -507 -1108 Q -512 -1115 -505 -1121 L -493 -1120 M -499 -1163 Q -504 -1160 -506 -1165 L -505 -1172 -498 -1171 Q -495 -1167 -499 -1163 M -514 -1205 Q -521 -1201 -526 -1209 -531 -1216 -523 -1219 -515 -1223 -510 -1216 -506 -1208 -514 -1205 M -435 -1072 Q -440 -1080 -431 -1084 -423 -1088 -418 -1080 -413 -1072 -421 -1068 -430 -1065 -435 -1072 M -464 -1084 Q -467 -1089 -462 -1091 L -456 -1089 Q -453 -1085 -458 -1083 L -464 -1084 M -193 -1405 Q -203 -1398 -207 -1408 -212 -1418 -205 -1424 -198 -1430 -191 -1421 -183 -1412 -193 -1405 M -176 -1387 Q -183 -1397 -172 -1402 -161 -1408 -155 -1397 -148 -1387 -159 -1382 -170 -1377 -176 -1387 M -146 -1344 Q -150 -1352 -142 -1356 -134 -1360 -130 -1353 -125 -1346 -134 -1341 -142 -1336 -146 -1344 M -130 -1306 Q -127 -1301 -132 -1297 L -140 -1298 Q -143 -1303 -138 -1307 L -130 -1306 M -124 -1258 Q -129 -1268 -122 -1274 -115 -1280 -108 -1271 -100 -1262 -110 -1255 -120 -1248 -124 -1258 M -253 -1428 Q -260 -1437 -251 -1445 L -236 -1443 Q -231 -1433 -239 -1426 -246 -1420 -253 -1428 M -286 -1455 Q -289 -1461 -283 -1464 L -274 -1462 Q -270 -1457 -277 -1453 -283 -1449 -286 -1455 M -374 -1444 Q -377 -1450 -373 -1453 L -364 -1452 Q -360 -1446 -366 -1442 -371 -1438 -374 -1444 M -337 -1455 Q -343 -1464 -333 -1468 -323 -1473 -318 -1464 -312 -1454 -322 -1450 -331 -1446 -337 -1455 M -205 -1159 L -193 -1158 Q -189 -1150 -195 -1144 L -207 -1146 Q -212 -1153 -205 -1159 M -217 -1114 Q -212 -1108 -219 -1103 -226 -1098 -229 -1105 -232 -1112 -227 -1116 L -217 -1114 M -325 -1049 L -324 -1057 -317 -1056 Q -314 -1051 -318 -1048 L -325 -1049 M -382 -1036 Q -387 -1047 -379 -1054 -372 -1060 -364 -1050 -356 -1041 -367 -1033 -377 -1025 -382 -1036 M -243 -1080 Q -252 -1077 -257 -1084 -262 -1092 -253 -1096 -245 -1100 -240 -1092 -235 -1084 -243 -1080 M -277 -1052 L -283 -1053 Q -286 -1058 -281 -1060 -277 -1062 -275 -1058 -272 -1054 -277 -1052 M -135 -1221 Q -141 -1230 -131 -1234 -121 -1239 -116 -1230 -110 -1220 -120 -1216 -129 -1212 -135 -1221 M -179 -1180 L -176 -1189 -167 -1187 Q -164 -1182 -170 -1178 -176 -1175 -179 -1180";
	ctx.fillStyle=tocolor(ctrans.apply([255,255,255,0.81960785]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -678 -992 Q -668 -1019 -652 -1016 L -582 -859 -404 -690 Q -369 -614 -450 -700 -513 -767 -540 -784 L -553 -789 -726 -823 Q -720 -838 -726 -859 -675 -841 -611 -832 L -605 -831 -605 -832 -578 -823 Q -601 -840 -612 -866 L -632 -913 -678 -992";
	ctx.fillStyle=tocolor(ctrans.apply([133,102,56,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -678 -992 L -632 -913 -612 -866 Q -601 -840 -578 -823 L -605 -832 Q -639 -917 -680 -985 L -678 -992 M -726 -823 L -553 -789 -540 -784 Q -513 -767 -450 -700 -369 -614 -404 -690 L -313 -603 Q -331 -583 -336 -551 L -432 -656 -574 -773 Q -669 -807 -745 -806 L -736 -810 Q -730 -815 -726 -823 M -574 -773 L -591 -788 -574 -773 M -540 -784 L -432 -656 -540 -784";
	ctx.fillStyle=tocolor(ctrans.apply([86,63,37,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -726 -859 Q -720 -838 -726 -823 -730 -815 -736 -810 L -745 -806 Q -757 -805 -759 -821 -760 -852 -736 -857 L -726 -859";
	ctx.fillStyle=tocolor(ctrans.apply([77,56,33,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -404 -690 L -582 -859 -652 -1016 Q -668 -1019 -678 -992 M -605 -832 L -605 -831 -611 -832 Q -675 -841 -726 -859 -720 -838 -726 -823 M -404 -690 L -313 -603 M -336 -551 L -432 -656 -574 -773 Q -669 -807 -745 -806 -757 -805 -759 -821 -760 -852 -736 -857 L -726 -859 M -591 -788 L -574 -773 M -745 -806 L -736 -810 Q -730 -815 -726 -823 M -605 -832 Q -639 -917 -680 -985 L -678 -992 M -432 -656 L -540 -784";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 604 -808 L 580 -800 Q 600 -816 610 -841 L 628 -885 669 -959 671 -952 Q 634 -889 604 -808 M 424 -679 Q 392 -608 464 -688 521 -750 546 -765 L 557 -769 712 -794 721 -781 730 -777 Q 661 -781 575 -752 L 448 -646 362 -549 Q 358 -581 341 -600 L 424 -679 M 546 -765 L 448 -646 546 -765 M 591 -766 L 575 -752 591 -766";
	ctx.fillStyle=tocolor(ctrans.apply([86,63,37,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 669 -959 L 628 -885 610 -841 Q 600 -816 580 -800 L 604 -808 604 -807 609 -808 Q 667 -814 712 -829 707 -808 712 -794 L 557 -769 546 -765 Q 521 -750 464 -688 392 -608 424 -679 L 583 -835 646 -983 Q 660 -984 669 -959";
	ctx.fillStyle=tocolor(ctrans.apply([133,102,56,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 712 -794 Q 707 -808 712 -829 L 721 -826 Q 743 -820 742 -790 740 -776 730 -777 L 721 -781 712 -794";
	ctx.fillStyle=tocolor(ctrans.apply([77,56,33,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 604 -808 Q 634 -889 671 -952 L 669 -959 Q 660 -984 646 -983 L 583 -835 424 -679 M 712 -794 Q 707 -808 712 -829 667 -814 609 -808 L 604 -807 604 -808 M 730 -777 Q 740 -776 742 -790 743 -820 721 -826 L 712 -829 M 712 -794 L 721 -781 730 -777 Q 661 -781 575 -752 L 448 -646 362 -549 M 341 -600 L 424 -679 M 575 -752 L 591 -766 M 448 -646 L 546 -765";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 125 -1042 L 127 -1054 Q 130 -1065 138 -1072 L 164 -1096 193 -1096 214 -1066 214 -1065 Q 219 -1048 177 -1005 137 -1018 125 -1042 M 183 -1043 L 163 -1031 164 -1026 177 -1024 Q 183 -1024 189 -1034 L 194 -1048 Q 194 -1059 190 -1054 L 183 -1043 M 175 -1082 L 166 -1087 155 -1082 151 -1074 152 -1070 Q 154 -1066 161 -1066 175 -1066 175 -1082";
	ctx.fillStyle=tocolor(ctrans.apply([35,23,11,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 175 -1082 Q 175 -1066 161 -1066 154 -1066 152 -1070 L 151 -1074 155 -1082 166 -1087 175 -1082 M 183 -1043 L 190 -1054 Q 194 -1059 194 -1048 L 189 -1034 Q 183 -1024 177 -1024 L 164 -1026 163 -1031 183 -1043";
	ctx.fillStyle=tocolor(ctrans.apply([173,164,154,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 125 -1042 Q 137 -1018 177 -1005 219 -1048 214 -1065 L 221 -1043 Q 198 -1001 170 -994 127 -1016 125 -1042";
	ctx.fillStyle=tocolor(ctrans.apply([187,209,215,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 214 -1065 L 214 -1066 193 -1096 164 -1096 138 -1072 Q 130 -1065 127 -1054 L 125 -1042 Q 137 -1018 177 -1005 219 -1048 214 -1065 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -118 -1082 Q -118 -1087 -127 -1087 L -138 -1082 -142 -1074 -141 -1070 -132 -1066 Q -118 -1066 -118 -1082 M -168 -1042 L -166 -1054 -155 -1072 -129 -1096 -100 -1096 -79 -1066 -79 -1065 Q -74 -1048 -116 -1005 -156 -1018 -168 -1042 M -116 -1024 Q -110 -1024 -104 -1034 L -99 -1048 Q -99 -1059 -103 -1054 L -110 -1043 -130 -1031 -126 -1027 -116 -1024";
	ctx.fillStyle=tocolor(ctrans.apply([35,23,11,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -118 -1082 Q -118 -1066 -132 -1066 L -141 -1070 -142 -1074 -138 -1082 -127 -1087 Q -118 -1087 -118 -1082 M -116 -1024 L -126 -1027 -130 -1031 -110 -1043 -103 -1054 Q -99 -1059 -99 -1048 L -104 -1034 Q -110 -1024 -116 -1024";
	ctx.fillStyle=tocolor(ctrans.apply([173,164,154,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -79 -1065 L -72 -1043 Q -95 -1001 -123 -994 -166 -1016 -168 -1042 -156 -1018 -116 -1005 -74 -1048 -79 -1065";
	ctx.fillStyle=tocolor(ctrans.apply([187,209,215,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -168 -1042 L -166 -1054 -155 -1072 -129 -1096 -100 -1096 -79 -1066 -79 -1065 M -168 -1042 Q -156 -1018 -116 -1005 -74 -1048 -79 -1065";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 67 -937 L 67 -935 62 -922 47 -919 Q 34 -893 8 -890 -19 -888 -26 -912 L -46 -927 -55 -943 -54 -947 -44 -945 -30 -943 -19 -927 Q -7 -919 9 -919 L 36 -927 Q 47 -935 48 -944 47 -935 36 -927 L 9 -919 Q -7 -919 -19 -927 L -30 -943 -26 -943 -12 -944 -8 -940 6 -937 Q 14 -937 19 -940 L 25 -946 23 -950 25 -946 19 -940 Q 14 -937 6 -937 L -8 -940 -12 -944 2 -947 23 -950 29 -951 48 -944 67 -937";
	ctx.fillStyle=tocolor(ctrans.apply([175,95,17,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -54 -947 Q -51 -958 -36 -969 -19 -982 6 -982 31 -982 49 -968 65 -955 67 -937 L 48 -944 48 -946 Q 48 -957 36 -965 L 9 -973 Q -7 -973 -19 -965 -30 -957 -30 -946 L -30 -943 -30 -946 Q -30 -957 -19 -965 -7 -973 9 -973 L 36 -965 Q 48 -957 48 -946 L 48 -944 29 -951 23 -950 19 -953 6 -955 -8 -953 -13 -946 -12 -944 -26 -943 -30 -943 -44 -945 -54 -947 M -12 -944 L -13 -946 -8 -953 6 -955 19 -953 23 -950 2 -947 -12 -944";
	ctx.fillStyle=tocolor(ctrans.apply([212,125,41,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 62 -922 Q 68 -867 41 -820 19 -803 -3 -820 -44 -874 -46 -927 L -26 -912 Q -19 -888 8 -890 34 -893 47 -919 L 62 -922";
	ctx.fillStyle=tocolor(ctrans.apply([187,209,215,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 67 -937 L 67 -935 62 -922 47 -919 Q 34 -893 8 -890 -19 -888 -26 -912 L -46 -927 -55 -943 -54 -947 Q -51 -958 -36 -969 -19 -982 6 -982 31 -982 49 -968 65 -955 67 -937 M 48 -944 Q 47 -935 36 -927 L 9 -919 Q -7 -919 -19 -927 L -30 -943 -30 -946 Q -30 -957 -19 -965 -7 -973 9 -973 L 36 -965 Q 48 -957 48 -946 L 48 -944 M 23 -950 L 25 -946 19 -940 Q 14 -937 6 -937 L -8 -940 -12 -944 M 23 -950 L 19 -953 6 -955 -8 -953 -13 -946 -12 -944";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.2;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 608 -1229 Q 611 -1194 590 -1160 593 -1140 579 -1119 556 -1086 516 -1074 510 -1066 490 -1064 481 -1044 437 -1050 L 388 -1050 Q 338 -1055 301 -1114 265 -1174 233 -1200 202 -1226 205 -1233 194 -1272 215 -1313 213 -1325 226 -1353 L 242 -1383 Q 238 -1377 235 -1338 232 -1297 237 -1291 238 -1258 249 -1235 270 -1189 332 -1210 327 -1190 334 -1171 347 -1132 408 -1131 420 -1130 434 -1143 L 447 -1155 448 -1143 Q 449 -1134 456 -1132 518 -1117 548 -1162 563 -1184 566 -1210 571 -1207 588 -1216 604 -1223 608 -1229";
	ctx.fillStyle=tocolor(ctrans.apply([187,209,215,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 608 -1229 Q 604 -1223 588 -1216 571 -1207 566 -1210 563 -1184 548 -1162 518 -1117 456 -1132 449 -1134 448 -1143 L 447 -1155 434 -1143 Q 420 -1130 408 -1131 347 -1132 334 -1171 327 -1190 332 -1210 270 -1189 249 -1235 238 -1258 237 -1291 232 -1297 235 -1338 238 -1377 242 -1383 268 -1414 308 -1426 L 339 -1446 368 -1459 Q 415 -1466 452 -1446 493 -1447 527 -1422 590 -1377 599 -1305 613 -1294 614 -1281 L 612 -1252 608 -1229";
	ctx.fillStyle=tocolor(ctrans.apply([242,247,248,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 359 -1457 Q 352 -1467 363 -1473 L 380 -1471 Q 386 -1463 376 -1455 365 -1447 359 -1457 M 317 -1433 Q 312 -1438 320 -1444 L 331 -1443 Q 334 -1436 328 -1432 L 317 -1433 M 240 -1386 Q 236 -1393 244 -1398 251 -1403 257 -1395 262 -1387 253 -1383 244 -1379 240 -1386 M 232 -1362 Q 238 -1354 228 -1346 L 224 -1343 219 -1337 206 -1338 Q 201 -1346 210 -1350 206 -1359 215 -1364 226 -1371 232 -1362 M 285 -1405 Q 279 -1401 274 -1408 269 -1414 276 -1417 L 287 -1414 Q 291 -1409 285 -1405 M 208 -1303 L 195 -1304 Q 190 -1310 199 -1317 L 212 -1316 Q 216 -1308 208 -1303 M 183 -1262 Q 177 -1272 186 -1276 L 203 -1272 Q 210 -1265 200 -1258 190 -1252 183 -1262 M 203 -1226 Q 200 -1232 206 -1236 L 218 -1233 Q 222 -1226 214 -1223 207 -1220 203 -1226 M 240 -1193 Q 235 -1201 244 -1206 L 257 -1204 Q 261 -1198 253 -1192 L 240 -1193 M 251 -1170 L 264 -1169 Q 268 -1161 260 -1156 L 247 -1157 Q 242 -1163 251 -1170 M 296 -1120 Q 288 -1115 283 -1123 277 -1131 285 -1134 L 298 -1131 Q 304 -1125 296 -1120 M 365 -1062 Q 356 -1056 351 -1064 345 -1072 354 -1077 L 368 -1076 Q 373 -1069 365 -1062 M 321 -1088 Q 318 -1093 323 -1097 L 332 -1094 Q 336 -1089 330 -1086 L 321 -1088 M 398 -1056 L 411 -1055 Q 415 -1047 407 -1042 L 394 -1043 Q 389 -1049 398 -1056 M 622 -1246 Q 626 -1240 618 -1234 L 605 -1235 Q 600 -1243 609 -1248 L 622 -1246 M 623 -1281 Q 627 -1273 619 -1268 L 606 -1269 Q 601 -1275 610 -1282 L 623 -1281 M 548 -1409 L 539 -1410 Q 535 -1415 541 -1418 L 550 -1417 Q 553 -1413 548 -1409 M 577 -1371 Q 570 -1368 567 -1374 564 -1379 570 -1383 L 580 -1381 Q 584 -1374 577 -1371 M 515 -1421 L 497 -1423 Q 489 -1432 502 -1442 L 521 -1440 Q 527 -1429 515 -1421 M 458 -1439 Q 450 -1433 444 -1442 438 -1450 446 -1453 L 461 -1450 Q 467 -1444 458 -1439 M 425 -1452 Q 416 -1448 412 -1455 408 -1462 416 -1467 L 429 -1464 Q 434 -1456 425 -1452 M 585 -1325 Q 579 -1335 588 -1338 L 603 -1334 Q 610 -1328 601 -1322 592 -1316 585 -1325 M 596 -1196 L 609 -1193 Q 614 -1185 605 -1181 596 -1177 592 -1184 588 -1191 596 -1196 M 596 -1156 L 606 -1154 605 -1146 Q 599 -1142 595 -1148 591 -1154 596 -1156 M 494 -1065 Q 485 -1062 482 -1068 478 -1075 485 -1080 492 -1084 497 -1077 502 -1069 494 -1065 M 439 -1045 Q 433 -1053 441 -1056 L 456 -1053 Q 462 -1047 453 -1042 445 -1036 439 -1045 M 530 -1077 Q 526 -1082 532 -1085 L 541 -1084 Q 544 -1080 539 -1076 L 530 -1077 M 572 -1104 L 564 -1105 Q 561 -1109 566 -1113 572 -1118 574 -1113 577 -1108 572 -1104";
	ctx.fillStyle=tocolor(ctrans.apply([255,255,255,0.81960785]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
}

function sprite363(ctx,ctrans,frame,ratio,time){
	ctx.save();
	ctx.transform(1,0,0,1,38.1,73.8);
	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place(shape362,canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			break;
	}
	ctx.restore();
}

var frame = -1;
var time = 0;
var frames = [];
frames.push(0);

var backgroundColor = "#ffffff00";
var originalWidth = 75;
var originalHeight= 74;
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
	sprite363(ctx,ctrans,frames[frame],0,time);
	ctx.restore();
}


nextFrame(ctx,ctrans);

return [canvas,width,height];}