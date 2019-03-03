module.exports = (createCanvas, concatMatrix, enhanceContext, cxform, place, tocolor, drawMorphPath, useRatio, drawPath, shadeColor, colorPalette) => { var width=66,height=74;
var canvas=createCanvas(width,height);

var ctx=canvas.getContext("2d");
enhanceContext(ctx);
var ctrans = new cxform(0,0,0,0,255,255,255,255);

function shape280(ctx,ctrans,frame,ratio,time){
	var pathData="M 522 -1353 L 645 -1353 697 -39 574 -39 567 -225 522 -1353 M -137 -225 L -130 -39 -253 -39 -257 -225 -137 -225";
	ctx.fillStyle=tocolor(ctrans.apply([51,21,1,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 522 -1353 L 567 -225 -137 -225 -182 -1353 522 -1353";
	ctx.fillStyle=tocolor(ctrans.apply([32,26,21,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 567 -225 L 574 -39 697 -39 645 -1353 522 -1353 567 -225 -137 -225 -130 -39 -253 -39 -257 -225 -137 -225 -182 -1353 -302 -1353 M 522 -1353 L -182 -1353";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 636 -1472 L 626 -1395 443 4 321 4 350 -217 354 -245 504 -1395 626 -1395 504 -1395 -327 -1395 -424 -1395 -327 -1395 -488 -245 -520 4 -627 4 -424 -1395 -413 -1472 636 -1472";
	ctx.fillStyle=tocolor(ctrans.apply([79,43,9,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 636 -1472 L 642 -1335 473 4 443 4 626 -1395 636 -1472 M -457 -218 L -488 4 -520 4 -488 -245 -457 -218";
	ctx.fillStyle=tocolor(ctrans.apply([51,21,1,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 350 -217 L -457 -218 -488 -245 354 -245 350 -217";
	ctx.fillStyle=tocolor(ctrans.apply([32,26,21,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 504 -1395 L 354 -245 -488 -245 -327 -1395 504 -1395";
	var grd=ctx.createLinearGradient(97.0,-1848.0,99.0,-128.0);
	grd.addColorStop(0.0,tocolor(ctrans.apply([100,90,81,1])));
	grd.addColorStop(1.0,tocolor(ctrans.apply([56,46,37,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 443 4 L 473 4 642 -1335 636 -1472 626 -1395 443 4 321 4 350 -217 -457 -218 -488 4 -520 4 -627 4 -424 -1395 -413 -1472 636 -1472 M 626 -1395 L 504 -1395 354 -245 350 -217 M -424 -1395 L -327 -1395 504 -1395 M -457 -218 L -488 -245 -520 4 M -327 -1395 L -488 -245 354 -245";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -332 -809 L -346 -806 Q -359 -806 -364 -816 L -367 -827 -361 -838 -333 -838 -331 -822 -332 -809 M -364 -656 L -391 -659 -394 -669 Q -394 -694 -368 -694 -343 -694 -349 -679 -349 -656 -364 -656";
	ctx.fillStyle=tocolor(ctrans.apply([255,255,255,0.3882353]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 157 -481 Q 140 -469 134 -453 128 -436 111 -419 L 83 -391 79 -386 103 -405 135 -427 159 -445 186 -469 202 -486 191 -480 164 -462 138 -437 M 103 -368 L 132 -397 162 -423 184 -438 Q 192 -440 187 -435 L 170 -418 138 -386 110 -351 87 -322 106 -339 Q 119 -350 119 -347 L 124 -341 Q 128 -338 110 -314 M 163 -488 Q 170 -505 163 -502 L 142 -489 118 -464 Q 107 -447 85 -433 L 56 -410 39 -389 Q 29 -380 32 -386 L 50 -405 56 -410 58 -414 69 -439 38 -417 Q 20 -408 15 -413 11 -417 22 -422 34 -427 41 -443 L 45 -457 28 -444 M 83 -359 Q 104 -376 109 -395 115 -413 130 -424 L 135 -427 M 69 -439 L 70 -446 M 21 -439 L -4 -427 Q -12 -420 -6 -428 L 13 -447 29 -470 Q 34 -481 22 -474 L -5 -458 Q -17 -451 -27 -447 L -33 -446 M 79 -386 L 78 -386 70 -380 M 80 -317 L 87 -322 M -27 -447 Q -10 -466 -11 -472 L 11 -498";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([204,51,153,0.36078432]));
	ctx.lineWidth=0.2;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 277 -1302 L 275 -1314 M 300 -1265 L 258 -1260 226 -1256 206 -1250 194 -1223 183 -1195 Q 185 -1179 201 -1170 L 227 -1164 Q 236 -1166 244 -1182 L 245 -1181 258 -1220 M 212 -1279 L 211 -1270 206 -1250 201 -1249 188 -1220 Q 182 -1214 183 -1195 163 -1169 157 -1170 151 -1171 134 -1183 117 -1194 117 -1204 117 -1213 101 -1212 L 65 -1199 63 -1182 M 201 -1249 L 189 -1248 M -64 -1206 L -50 -1239 -30 -1271 Q -20 -1292 -15 -1287 -9 -1282 -10 -1270 L -17 -1239 -34 -1199 Q -44 -1178 -62 -1166 L -28 -1167 Q -19 -1171 -12 -1176 L -5 -1208 Q 2 -1218 2 -1212 L -2 -1193 Q -6 -1179 -12 -1176 L 18 -1174 Q 35 -1176 45 -1191 L 58 -1209 65 -1199 M -28 -943 L 8 -951 50 -958 Q 75 -961 95 -976 115 -990 118 -1000 121 -1010 108 -1020 95 -1030 85 -1028 L 50 -1032 M 317 -1121 L 275 -1116 236 -1113 196 -1108 151 -1106 111 -1099 Q 96 -1090 76 -1093 L 39 -1093 -7 -1083 -51 -1071 -83 -1059 M 245 -1181 Q 257 -1162 268 -1167 L 291 -1185 306 -1209 Q 310 -1220 322 -1198 L 351 -1217 376 -1214 Q 393 -1205 398 -1185 403 -1164 389 -1149 376 -1133 360 -1131 L 327 -1123 M 322 -1198 Q 327 -1180 319 -1179 311 -1177 316 -1186 L 322 -1198 M 211 -1270 L 201 -1249 M 303 -844 L 304 -845 303 -854 Q 296 -846 303 -844 L 304 -844 304 -845 M 103 -852 Q 83 -826 81 -834 79 -842 83 -847 L 103 -852 106 -845 Q 116 -831 121 -830 127 -828 133 -841 164 -858 166 -845 L 196 -840 207 -829 217 -848 219 -848 225 -842 234 -831 Q 249 -842 250 -838 260 -824 261 -828 L 274 -834 297 -831 302 -838 301 -841 303 -844 M 303 -859 Q 297 -868 303 -854 M 216 -822 L 207 -829 Q 202 -822 216 -822 L 227 -830 Q 218 -837 217 -848 M 219 -848 L 227 -830 234 -831 216 -822 M 304 -844 L 341 -855 M 302 -838 L 305 -838 304 -844 M 25 -831 Q 9 -832 1 -825 L -9 -817 Q -20 -813 -31 -817 -41 -820 -51 -832 L -71 -830 -83 -833 Q -93 -832 -103 -822 M 133 -841 L 133 -828 M 123 -651 L 124 -663 Q 119 -671 119 -663 L 113 -647 Q 115 -621 102 -614 90 -607 77 -603 65 -598 69 -603 L 88 -622 113 -647 Q 104 -651 96 -659 L 86 -679 Q 83 -691 98 -671 M 296 -640 Q 282 -651 278 -661 274 -670 264 -667 L 247 -656 Q 241 -648 230 -656 219 -664 213 -662 207 -660 202 -674 L 202 -682 203 -685 198 -677 186 -659 176 -671 Q 174 -664 171 -671 L 157 -662 152 -671 Q 137 -678 124 -663 M 152 -671 Q 150 -680 171 -671 M 25 -690 L 1 -671 -8 -660 Q -4 -653 0 -658 M 255 -685 L 226 -684 202 -682 M 203 -685 L 207 -696 M -131 -1314 L -163 -1302 -192 -1290 -183 -1250 Q -180 -1230 -190 -1212 L -216 -1176 Q -231 -1157 -245 -1157 -258 -1157 -273 -1169 L -297 -1198 Q -306 -1214 -301 -1232 M -265 -1288 Q -277 -1298 -285 -1294 -292 -1289 -286 -1287 L -265 -1288 -281 -1267 -296 -1242 M -215 -1290 Q -213 -1285 -192 -1290 L -213 -1295 -215 -1290 M -114 -1194 Q -114 -1188 -120 -1186 -126 -1184 -146 -1177 -165 -1170 -160 -1185 L -142 -1206 Q -129 -1211 -114 -1194 -109 -1205 -109 -1197 L -108 -1176 Q -107 -1163 -91 -1166 L -62 -1166 Q -59 -1174 -65 -1195 M -93 -1057 Q -113 -1047 -132 -1047 -151 -1046 -170 -1033 L -199 -1002 Q -209 -983 -192 -967 -175 -951 -160 -945 L -119 -939 -76 -941 -39 -941 M -113 -850 Q -129 -834 -125 -828 L -116 -819 Q -112 -812 -111 -825 -120 -835 -113 -850 M -116 -819 Q -135 -810 -143 -813 -151 -815 -158 -834 -176 -821 -186 -822 -196 -822 -203 -828 L -204 -847 M -158 -834 L -153 -863 Q -150 -877 -151 -868 L -150 -849 Q -148 -839 -158 -834 M -58 -849 L -53 -850 -43 -873 -45 -851 -15 -850 1 -855 M -9 -817 L -17 -831 M -51 -832 Q -44 -835 -52 -849 L -53 -850 M -52 -849 L -45 -851 Q -43 -834 -51 -832 M -206 -896 Q -207 -876 -217 -856 -227 -836 -236 -836 -244 -835 -253 -846 L -273 -866 Q -283 -875 -277 -880 M -287 -654 Q -294 -658 -278 -690 -260 -701 -255 -718 -250 -735 -245 -732 L -237 -718 -231 -692 -225 -658 M -278 -690 L -244 -688 -231 -692 M -207 -663 L -193 -672 Q -181 -673 -170 -680 L -170 -681 Q -166 -692 -158 -685 L -136 -665 Q -122 -651 -108 -656 -119 -663 -116 -671 L -99 -687 Q -87 -682 -79 -664 -70 -671 -62 -687 L -61 -696 M -8 -660 L -34 -669 -56 -664 Q -64 -657 -61 -689 L -61 -688 -62 -687 M -99 -687 Q -96 -679 -96 -663 L -82 -664 -79 -664 M -108 -656 Q -103 -649 -97 -661 L -96 -663 M -82 -664 L -97 -661 M -169 -675 L -170 -680";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([255,255,255,0.3019608]));
	ctx.lineWidth=0.3;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 173 -377 Q 176 -396 191 -411 207 -425 213 -447 L 223 -483 Q 227 -498 215 -512 L 192 -530 167 -529 143 -530 111 -501 86 -481 Q 83 -478 69 -489 L 45 -508 11 -510 Q -12 -504 -22 -487 L -39 -458 M 110 -314 Q 121 -318 132 -327 L 157 -357 M -36 -432 L -20 -397 Q -11 -374 5 -361 L 39 -337 77 -319 80 -317 108 -314 110 -314";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([204,51,153,0.36078432]));
	ctx.lineWidth=1.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

}

function sprite281(ctx,ctrans,frame,ratio,time){
	ctx.save();
	ctx.transform(1,0,0,1,31.5,73.75);
	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place(shape280,canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			break;
	}
	ctx.restore();
}

var frame = -1;
var time = 0;
var frames = [];
frames.push(0);

var backgroundColor = "#ffffff00";
var originalWidth = 66;
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
	sprite281(ctx,ctrans,frames[frame],0,time);
	ctx.restore();
}


nextFrame(ctx,ctrans);

return [canvas,width,height];}