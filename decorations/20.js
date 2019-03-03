module.exports = (createCanvas, concatMatrix, enhanceContext, cxform, place, tocolor, drawMorphPath, useRatio, drawPath, shadeColor, colorPalette) => { var width=55,height=67;
var canvas=createCanvas(width,height);

var ctx=canvas.getContext("2d");
enhanceContext(ctx);
var ctrans = new cxform(0,0,0,0,255,255,255,255);
function shape469(ctx,ctrans,frame,ratio,time){var pathData="M 288 -1156 Q 410 -1261 562 -1230 475 -1236 406 -1135 384 -1028 301 -1017 L 215 -1019 Q 167 -898 136 -771 L 403 -806 562 -800 Q 518 -797 489 -763 415 -685 315 -712 277 -655 257 -597 411 -545 393 -364 386 -294 359 -270 364 -343 314 -410 L 295 -351 267 -339 199 0 116 0 164 -305 -296 -486 Q -259 -883 132 -957 L 138 -862 Q 162 -942 193 -1020 209 -1092 288 -1156";ctx.fillStyle=tocolor(ctrans.apply([0,0,0,0.3019608]));drawPath(ctx,pathData,false);ctx.fill("evenodd")}function shape470(ctx,ctrans,frame,ratio,time){var pathData="M 235 22 L 222 20 238 8 248 8 235 22";ctx.fillStyle=tocolor(ctrans.apply([66,74,24,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 211 29 L 222 20 235 22 Q 222 35 225 49 226 56 230 60 L 212 60 Q 178 65 139 115 L 154 92 Q 180 57 211 29 180 57 154 92 L 139 115 Q 178 65 212 60 183 78 166 101 171 117 214 125 L 203 125 Q 157 144 135 171 124 190 160 189 174 190 195 202 L 183 201 Q 123 221 99 258 98 272 118 281 170 279 227 216 203 262 167 292 125 301 88 318 L 59 333 78 254 84 234 69 170 84 234 100 190 106 177 114 159 Q 121 122 103 100 121 122 114 159 L 106 177 100 190 84 234 51 318 Q 10 277 0 238 -1 196 11 159 1 226 34 253 77 262 69 170 L 52 143 92 172 Q 106 154 103 100 L 87 85 132 105 Q 149 92 166 55 167 37 154 27 L 200 29 211 29 M 154 92 L 166 55 154 92 M 114 159 L 139 115 114 159 M 183 201 Q 121 197 78 254 121 197 183 201 M 203 125 Q 146 126 100 190 146 126 203 125";ctx.fillStyle=tocolor(ctrans.apply([59,79,25,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 222 20 L 211 29 200 29 238 8 222 20";ctx.fillStyle=tocolor(ctrans.apply([64,72,21,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 238 8 L 200 29 189 1 238 8 M 235 22 L 248 8 Q 276 8 296 33 L 235 22 M 249 162 L 236 196 168 158 249 162 M 92 48 Q 105 37 141 16 L 148 39 128 39 149 70 92 48";ctx.fillStyle=tocolor(ctrans.apply([83,93,32,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 212 60 L 230 60 Q 226 56 225 49 222 35 235 22 L 296 33 Q 274 49 264 83 259 100 249 162 L 168 158 236 196 227 216 Q 170 279 118 281 98 272 99 258 123 221 183 201 L 195 202 Q 174 190 160 189 124 190 135 171 157 144 203 125 L 214 125 Q 171 117 166 101 183 78 212 60 M 248 67 L 230 60 248 67";var grd=ctx.createLinearGradient(101.75,4.25,214.25,165.75);grd.addColorStop(0.011764705882352941,tocolor(ctrans.apply([108,135,52,1])));grd.addColorStop(1.0,tocolor(ctrans.apply([77,102,35,1])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 264 83 Q 274 49 296 33 330 78 324 126 300 81 264 83";ctx.fillStyle=tocolor(ctrans.apply([41,60,16,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 189 1 L 200 29 154 27 Q 167 37 166 55 149 92 132 105 L 87 85 103 100 Q 106 154 92 172 L 52 143 69 170 Q 77 262 34 253 1 226 11 159 31 95 92 48 L 149 70 128 39 148 39 141 16 159 9 189 1";var grd=ctx.createLinearGradient(38.25,-0.75,133.75,164.75);grd.addColorStop(0.00392156862745098,tocolor(ctrans.apply([108,135,52,1])));grd.addColorStop(1.0,tocolor(ctrans.apply([77,102,35,1])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 59 333 Q 37 497 40 510 L 18 516 Q 19 494 35 404 L 51 318 84 234 78 254 59 333";ctx.fillStyle=tocolor(ctrans.apply([51,74,22,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 222 20 L 211 29 Q 180 57 154 92 L 139 115 Q 178 65 212 60 L 230 60 248 67 M 222 20 L 238 8 M 154 27 Q 167 37 166 55 L 154 92 M 214 125 L 203 125 M 195 202 L 183 201 M 69 170 L 84 234 100 190 106 177 114 159 Q 121 122 103 100 L 87 85 M 52 143 L 69 170 M 139 115 L 114 159 M 78 254 L 59 333 M 84 234 L 78 254 Q 121 197 183 201 M 100 190 Q 146 126 203 125 M 51 318 L 84 234";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=0.2;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 296 33 Q 276 8 248 8 L 238 8 189 1 M 264 83 Q 274 49 296 33 330 78 324 126 300 81 264 83 259 100 249 162 L 236 196 227 216 Q 203 262 167 292 125 301 88 318 L 59 333 Q 37 497 40 510 L 18 516 Q 19 494 35 404 L 51 318 Q 10 277 0 238 -1 196 11 159 31 95 92 48 105 37 141 16 L 159 9 189 1";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=0.4;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite471(ctx,ctrans,frame,ratio,time){var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(shape470,canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}}function shape472(ctx,ctrans,frame,ratio,time){var pathData="M 258 49 L 313 71 332 93 Q 355 126 342 163 324 199 325 233 L 291 157 Q 298 103 258 49 298 103 291 157 L 268 113 240 90 Q 227 79 214 71 L 218 77 Q 179 58 164 69 144 83 190 116 L 211 124 252 125 Q 270 136 284 177 L 316 242 Q 276 196 201 180 140 153 119 104 L 94 79 Q 52 44 0 32 L 12 30 Q 97 11 186 29 L 258 49 M 147 119 L 190 116 147 119 M 12 30 Q 110 19 182 53 113 48 94 79 113 48 182 53 110 19 12 30 M 190 162 Q 231 140 284 177 231 140 190 162 M 186 29 Q 214 55 214 71 198 61 182 53 198 61 214 71 214 55 186 29";var grd=ctx.createLinearGradient(240.5,16.0,203.5,154.0);grd.addColorStop(0.011764705882352941,tocolor(ctrans.apply([116,121,100,1])));grd.addColorStop(1.0,tocolor(ctrans.apply([197,203,173,1])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 332 93 L 313 71 258 49 186 29 Q 97 11 12 30 L 0 32 Q 127 -14 221 6 302 31 332 93";ctx.fillStyle=tocolor(ctrans.apply([233,238,218,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 218 77 L 240 90 268 113 263 121 252 125 211 124 190 116 Q 227 108 224 98 204 77 164 69 179 58 218 77";ctx.fillStyle=tocolor(ctrans.apply([168,167,123,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 291 157 L 325 233 Q 430 481 472 831 L 457 831 Q 443 665 390 468 351 322 316 242 L 284 177 Q 270 136 252 125 L 263 121 268 113 291 157";ctx.fillStyle=tocolor(ctrans.apply([46,70,17,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 164 69 Q 204 77 224 98 227 108 190 116 144 83 164 69";ctx.fillStyle=tocolor(ctrans.apply([219,219,185,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 332 93 L 313 71 258 49 M 325 233 Q 324 199 342 163 355 126 332 93 302 31 221 6 127 -14 0 32 L 12 30 Q 97 11 186 29 L 258 49 M 316 242 Q 351 322 390 468 443 665 457 831 L 472 831 Q 430 481 325 233 M 0 32 Q 52 44 94 79 M 316 242 Q 276 196 201 180 140 153 119 104 L 94 79";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=0.4;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 258 49 Q 298 103 291 157 L 325 233 M 218 77 L 240 90 Q 227 79 214 71 L 218 77 Q 179 58 164 69 144 83 190 116 L 211 124 252 125 263 121 268 113 240 90 M 252 125 Q 270 136 284 177 L 316 242 M 268 113 L 291 157 M 190 116 L 147 119 M 94 79 Q 113 48 182 53 110 19 12 30 M 182 53 Q 198 61 214 71 214 55 186 29 M 284 177 Q 231 140 190 162";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=0.2;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite473(ctx,ctrans,frame,ratio,time){var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(shape472,canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}}function shape474(ctx,ctrans,frame,ratio,time){var pathData="M 163 -576 L 190 -564 Q 211 -545 217 -497 L 216 -465 Q 212 -450 201 -439 177 -416 146 -416 138 -417 119 -425 L 93 -441 Q 75 -463 83 -489 93 -472 110 -468 108 -461 109 -454 109 -442 117 -442 132 -441 139 -453 L 142 -469 Q 178 -501 163 -576 M 166 -440 Q 160 -442 158 -436 156 -429 163 -427 L 172 -432 Q 173 -438 166 -440 M 193 -511 Q 178 -515 174 -502 169 -485 185 -480 191 -478 197 -483 L 203 -490 Q 208 -507 193 -511 M 187 -546 Q 180 -548 179 -542 176 -534 182 -532 190 -530 192 -538 193 -544 187 -546";ctx.fillStyle=tocolor(ctrans.apply([201,80,123,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 83 -489 L 90 -511 115 -551 Q 139 -578 163 -576 178 -501 142 -469 L 130 -476 Q 117 -479 110 -468 93 -472 83 -489 M 126 -507 Q 135 -505 144 -513 L 154 -528 Q 159 -545 141 -546 122 -546 118 -530 110 -512 126 -507";ctx.fillStyle=tocolor(ctrans.apply([242,149,183,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 126 -507 Q 110 -512 118 -530 122 -546 141 -546 159 -545 154 -528 L 144 -513 Q 135 -505 126 -507 M 110 -468 Q 117 -479 130 -476 L 142 -469 110 -468";ctx.fillStyle=tocolor(ctrans.apply([250,211,45,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 142 -469 L 139 -453 Q 132 -441 117 -442 109 -442 109 -454 108 -461 110 -468 L 142 -469 M 187 -546 Q 193 -544 192 -538 190 -530 182 -532 176 -534 179 -542 180 -548 187 -546 M 193 -511 Q 208 -507 203 -490 L 197 -483 Q 191 -478 185 -480 169 -485 174 -502 178 -515 193 -511 M 166 -440 Q 173 -438 172 -432 L 163 -427 Q 156 -429 158 -436 160 -442 166 -440";ctx.fillStyle=tocolor(ctrans.apply([209,151,8,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 163 -576 L 190 -564 Q 211 -545 217 -497 L 216 -465 Q 212 -450 201 -439 177 -416 146 -416 138 -417 119 -425 L 93 -441 Q 75 -463 83 -489 L 90 -511 115 -551 Q 139 -578 163 -576 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function shape475(ctx,ctrans,frame,ratio,time){var pathData="M 154 16 Q 217 -11 246 7 272 23 274 76 L 241 117 234 121 Q 248 96 252 69 260 16 208 11 181 8 170 20 159 30 168 45 L 126 40 154 16 126 40 168 45 Q 141 40 131 73 126 90 126 107 110 65 104 62 L 85 86 Q 74 88 66 94 74 88 85 86 L 104 62 126 40 107 35 126 40 104 62 Q 110 65 126 107 103 87 85 102 56 126 52 180 L 55 149 58 129 55 149 52 180 Q 34 194 27 263 21 222 35 180 L 38 139 35 127 Q 50 101 66 94 93 71 95 52 96 32 66 44 77 36 90 34 L 107 35 Q 111 13 74 12 L 154 16 M 85 86 L 58 129 35 180 58 129 85 86";ctx.fillStyle=tocolor(ctrans.apply([79,102,35,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 168 45 Q 159 30 170 20 181 8 208 11 260 16 252 69 248 96 234 121 L 206 133 167 112 186 163 129 196 115 179 102 212 Q 28 256 37 303 L 37 304 Q 10 255 2 182 -9 96 30 46 53 16 74 12 111 13 107 35 L 90 34 Q 77 36 66 44 96 32 95 52 93 71 66 94 50 101 35 127 L 38 139 35 180 Q 21 222 27 263 29 283 37 303 29 283 27 263 34 194 52 180 56 126 85 102 103 87 126 107 126 90 131 73 141 40 168 45 191 58 196 99 191 58 168 45 M 48 63 L 66 44 48 63 M 58 208 L 52 180 58 208 M 25 151 L 35 127 25 151 M 124 164 Q 132 147 126 107 132 147 124 164";var grd=ctx.createLinearGradient(167.5,197.5,58.5,-79.5);grd.addColorStop(0.0196078431372549,tocolor(ctrans.apply([89,114,41,1])));grd.addColorStop(1.0,tocolor(ctrans.apply([159,187,84,1])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 234 121 L 241 117 262 157 242 157 234 121";ctx.fillStyle=tocolor(ctrans.apply([46,63,14,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 234 121 L 186 163 167 112 206 133 234 121";ctx.fillStyle=tocolor(ctrans.apply([101,114,38,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 241 117 L 274 76 Q 272 23 246 7 217 -11 154 16 M 234 121 L 241 117 262 157 M 242 157 L 234 121 186 163 129 196 115 179 102 212 Q 28 256 37 303 L 37 304 Q 10 255 2 182 -9 96 30 46 53 16 74 12 L 154 16";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 154 16 L 126 40 168 45 Q 191 58 196 99 M 66 94 Q 74 88 85 86 L 104 62 126 40 107 35 90 34 Q 77 36 66 44 L 48 63 M 66 94 Q 50 101 35 127 L 25 151 M 35 180 L 58 129 85 86 M 126 107 Q 110 65 104 62 M 58 129 L 55 149 52 180 58 208 M 126 107 Q 132 147 124 164 M 27 263 Q 29 283 37 303 M 35 180 Q 21 222 27 263";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=0.2;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite476(ctx,ctrans,frame,ratio,time){var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(shape475,canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}}function shape477(ctx,ctrans,frame,ratio,time){var pathData="M -78 -641 Q -29 -644 21 -559 43 -521 24 -476 5 -432 -51 -426 -94 -422 -113 -434 -134 -448 -145 -494 L -102 -477 Q -101 -444 -84 -447 -67 -449 -63 -470 L -63 -490 Q -55 -500 -53 -524 -48 -572 -78 -641 M 3 -532 L 6 -545 Q 6 -569 -14 -567 -34 -567 -34 -547 -34 -523 -13 -523 -3 -523 3 -532";ctx.fillStyle=tocolor(ctrans.apply([48,140,133,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M -63 -490 L -63 -470 Q -67 -449 -84 -447 -101 -444 -102 -477 L -63 -490 M 3 -532 Q -3 -523 -13 -523 -34 -523 -34 -547 -34 -567 -14 -567 6 -569 6 -545 L 3 -532";ctx.fillStyle=tocolor(ctrans.apply([184,67,167,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M -145 -494 Q -149 -546 -129 -589 -115 -620 -97 -633 -86 -641 -78 -641 -48 -572 -53 -524 -55 -500 -63 -490 L -68 -494 -80 -496 Q -92 -494 -102 -477 L -145 -494 M -78 -551 Q -70 -564 -70 -574 -70 -599 -94 -593 -117 -586 -117 -562 -120 -536 -97 -536 -87 -536 -78 -551";ctx.fillStyle=tocolor(ctrans.apply([85,189,184,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M -78 -551 Q -87 -536 -97 -536 -120 -536 -117 -562 -117 -586 -94 -593 -70 -599 -70 -574 -70 -564 -78 -551 M -63 -490 L -102 -477 Q -92 -494 -80 -496 L -68 -494 -63 -490";ctx.fillStyle=tocolor(ctrans.apply([236,113,224,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M -78 -641 Q -29 -644 21 -559 43 -521 24 -476 5 -432 -51 -426 -94 -422 -113 -434 -134 -448 -145 -494 -149 -546 -129 -589 -115 -620 -97 -633 -86 -641 -78 -641 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 41 -1145 L 115 -1136 182 -1133 166 -1105 Q 145 -1077 108 -1051 105 -1081 91 -1100 L 64 -1127 41 -1145 M 115 -1136 Q 124 -1103 108 -1051 124 -1103 115 -1136";var grd=ctx.createLinearGradient(72.5,-1144.25,99.5,-1051.75);grd.addColorStop(0.011764705882352941,tocolor(ctrans.apply([108,135,52,1])));grd.addColorStop(1.0,tocolor(ctrans.apply([77,102,35,1])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 166 -1105 L 171 -1061 77 -1004 169 -1024 158 -970 Q 117 -888 51 -853 -15 -818 -32 -794 -32 -858 -24 -911 -17 -972 0 -1020 23 -1087 64 -1127 L 91 -1100 Q 105 -1081 108 -1051 145 -1077 166 -1105 M -45 -794 Q -64 -806 -80 -828 L -52 -868 -93 -854 Q -111 -900 -114 -970 L -112 -988 -71 -992 -103 -1017 Q -71 -1109 41 -1145 L 64 -1127 Q 35 -1107 13 -1065 L -11 -1008 -32 -918 -45 -794 M 93 -1065 Q 40 -1087 0 -1020 40 -1087 93 -1065 M 124 -973 Q 27 -992 -24 -911 27 -992 124 -973 M -96 -962 Q -62 -993 -32 -918 -62 -993 -96 -962 M -64 -1053 Q -20 -1070 -11 -1008 -20 -1070 -64 -1053 M -13 -1104 Q 15 -1116 13 -1065 15 -1116 -13 -1104";var grd=ctx.createLinearGradient(-9.75,-891.75,-50.25,-1110.25);grd.addColorStop(0.0196078431372549,tocolor(ctrans.apply([67,88,27,1])));grd.addColorStop(1.0,tocolor(ctrans.apply([42,60,10,1])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 171 -1061 L 169 -1024 77 -1004 171 -1061 M -80 -828 L -93 -854 -52 -868 -80 -828 M -112 -988 L -103 -1017 -71 -992 -112 -988";ctx.fillStyle=tocolor(ctrans.apply([79,86,25,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M -32 -794 Q -40 -582 26 -415 L -7 -421 Q -48 -604 -45 -794 L -32 -918 -11 -1008 13 -1065 Q 35 -1107 64 -1127 23 -1087 0 -1020 -17 -972 -24 -911 -32 -858 -32 -794";ctx.fillStyle=tocolor(ctrans.apply([44,70,18,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 41 -1145 L 115 -1136 182 -1133 166 -1105 M -32 -794 Q -40 -582 26 -415 L -7 -421 Q -48 -604 -45 -794 -64 -806 -80 -828 L -93 -854 Q -111 -900 -114 -970 L -112 -988 -103 -1017 Q -71 -1109 41 -1145 L 64 -1127";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=0.3;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 166 -1105 L 171 -1061 169 -1024 158 -970 Q 117 -888 51 -853 -15 -818 -32 -794 -32 -858 -24 -911 27 -992 124 -973 M 64 -1127 L 91 -1100 Q 105 -1081 108 -1051 124 -1103 115 -1136 M 0 -1020 Q 40 -1087 93 -1065 M 166 -1105 Q 145 -1077 108 -1051 M 64 -1127 Q 23 -1087 0 -1020 -17 -972 -24 -911 M 13 -1065 Q 35 -1107 64 -1127 M -11 -1008 Q -20 -1070 -64 -1053 M -32 -918 Q -62 -993 -96 -962 M -45 -794 L -32 -918 -11 -1008 13 -1065 Q 15 -1116 -13 -1104";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=0.2;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)} var shape478Index=0;function shape478(ctx,ctrans,frame,ratio,time){var pathData="M 499 0 Q 523 37 475 63 52 102 0 46 L 0 0 499 0 M 106 421 L 49 129 Q 274 107 381 161 388 287 351 402 238 434 106 421";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape478Index],[128,128,128,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 0 46 Q 52 102 475 63 523 37 499 0 L 545 0 545 93 506 93 433 457 113 457 106 421 Q 238 434 351 402 388 287 381 161 274 107 49 129 L 42 93 0 93 0 46 M 506 93 L 42 93 506 93";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape478Index],[79,76,76,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 499 0 L 0 0 0 46 0 93 42 93 506 93 545 93 545 0 499 0 M 506 93 L 433 457 113 457 106 421 49 129 42 93";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape478Index],[0,0,0,0.8])));ctx.lineWidth=0.4;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite479(ctx,ctrans,frame,ratio,time){var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(shape478,canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}}function sprite480(ctx,ctrans,frame,ratio,time){ctx.save();ctx.transform(1,0,0,1,26.6,67.45);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(shape469,canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);place(sprite471,canvas,ctx,[-0.0512481689453125,0.0,0.010186004638671874,0.062060546875,-4.6,-52.7],ctrans.merge(new cxform(0,0,0,0,148,148,148,256)),1,(0+time)%1,0,time);place(sprite471,canvas,ctx,[-0.048046875,0.01414642333984375,0.012335205078125,0.04840087890625,-10.75,-44.0],ctrans.merge(new cxform(17,16,2,0,168,168,168,256)),1,(0+time)%1,0,time);place(sprite473,canvas,ctx,[-0.0407806396484375,-0.0072967529296875,-0.0014617919921875,0.03419952392578125,28.35,-42.65],ctrans.merge(new cxform(17,16,2,0,168,168,168,256)),1,(0+time)%1,0,time);place(sprite471,canvas,ctx,[0.048365020751953126,-0.0076690673828125,0.00966339111328125,0.045330810546875,-5.1,-39.95],ctrans.merge(new cxform(0,0,0,0,179,179,179,256)),1,(0+time)%1,0,time);place(sprite473,canvas,ctx,[-0.053395843505859374,0.0,0.0,0.0562713623046875,26.75,-67.2],ctrans,1,(0+time)%1,0,time);place(sprite473,canvas,ctx,[0.05,0.0,0.0,0.05,-21.2,-58.45],ctrans.merge(new cxform(0,0,0,0,200,200,200,256)),1,(0+time)%1,0,time);place(shape474,canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);place(sprite476,canvas,ctx,[-0.0401458740234375,0.0,0.0,0.05,19.35,-30.65],ctrans.merge(new cxform(17,16,2,0,168,168,168,256)),1,(0+time)%1,0,time);place(sprite471,canvas,ctx,[0.05,0.0,0.0,0.05,4.65,-47.9],ctrans,1,(0+time)%1,0,time);place(shape477,canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);place(sprite476,canvas,ctx,[0.05,0.0,0.0,0.05,-18.2,-30.65],ctrans,1,(0+time)%1,0,time);place(sprite479,canvas,ctx,[0.05,0.0,0.0,0.05,-13.5,-22.85],ctrans,1,(0+time)%1,0,time);break}ctx.restore()}var frame=-1;var time=0;var frames=[];frames.push(0);var backgroundColor="#ffffff00";var originalWidth=55;var originalHeight=67;function nextFrame(ctx,ctrans){var oldframe=frame;frame=(frame+1)%frames.length;if(frame==oldframe){time++}else{time=0};drawFrame()}function drawFrame(){ctx.fillStyle=backgroundColor;ctx.fillRect(0,0,canvas.width,canvas.height);ctx.save();ctx.transform(canvas.width/originalWidth,0,0,canvas.height/originalHeight,0,0);sprite480(ctx,ctrans,frames[frame],0,time);ctx.restore()}nextFrame(ctx,ctrans);
return [canvas,width,height];}