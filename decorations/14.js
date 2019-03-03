module.exports = (createCanvas, concatMatrix, enhanceContext, cxform, place, tocolor, drawMorphPath, useRatio, drawPath, shadeColor, colorPalette) => { var width=290,height=199;
var canvas=createCanvas(width,height);

var ctx=canvas.getContext("2d");
enhanceContext(ctx);
var ctrans = new cxform(0,0,0,0,255,255,255,255);
function shape512(ctx,ctrans,frame,ratio,time){var pathData="M -2055 -3183 L -2055 -3103 -2429 -3103 -2446 -3183 -2055 -3183 M 1503 -3183 L 1503 -3103 -1807 -3103 -1827 -3183 1503 -3183 M 2427 -3183 L 2427 -3103 2291 -3103 2274 -3183 2427 -3183 M 1666 -3103 L 1666 -3183 2044 -3183 2044 -3103 1666 -3103";ctx.fillStyle=tocolor(ctrans.apply([0,0,0,0.34901962]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 2272 -3219 L 2258 -3280 2708 -3280 2708 -3219 2272 -3219 M 1660 -3219 L 1655 -3280 2058 -3280 2050 -3219 1660 -3219 M -1828 -3219 L -1845 -3280 1508 -3280 1506 -3219 -1828 -3219 M -2440 -3219 Q -2443 -3255 -2437 -3280 L -2049 -3280 -2054 -3219 -2440 -3219 M -2592 -3219 L -2902 -3219 -2902 -3280 -2590 -3280 -2592 -3219";ctx.fillStyle=tocolor(ctrans.apply([121,91,54,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 2708 -3219 L 2708 -3141 2287 -3141 2272 -3219 2708 -3219 M 1660 -3219 L 2050 -3219 Q 2046 -3180 2047 -3141 L 1667 -3141 1660 -3219 M 1506 -3219 L 1504 -3141 -1817 -3141 Q -1821 -3182 -1828 -3219 L 1506 -3219 M -2054 -3219 L -2057 -3141 -2424 -3141 -2437 -3198 -2440 -3219 -2054 -3219 M -2592 -3219 L -2596 -3141 -2902 -3141 -2902 -3219 -2592 -3219";ctx.fillStyle=tocolor(ctrans.apply([77,52,21,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 2708 -3219 L 2708 -3141 2287 -3141 2272 -3219 2258 -3280 2708 -3280 2708 -3219 M 2050 -3219 L 2058 -3280 1655 -3280 1660 -3219 M 2050 -3219 Q 2046 -3180 2047 -3141 L 1667 -3141 1660 -3219 M 1506 -3219 L 1504 -3141 -1817 -3141 Q -1821 -3182 -1828 -3219 L -1845 -3280 1508 -3280 1506 -3219 M -2054 -3219 L -2057 -3141 -2424 -3141 -2437 -3198 -2440 -3219 Q -2443 -3255 -2437 -3280 L -2049 -3280 -2054 -3219 M -2902 -3219 L -2902 -3141 -2596 -3141 -2592 -3219 M -2902 -3219 L -2902 -3280 -2590 -3280 -2592 -3219";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=1.0;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 2656 -3356 L 2660 -3349 Q 2682 -3302 2674 -3235 L 2669 -3149 Q 2666 -3101 2643 -3061 2620 -3021 2583 -3021 2546 -3021 2524 -3064 2500 -3109 2497 -3154 L 2496 -3233 Q 2489 -3285 2502 -3327 2518 -3235 2557 -3201 2671 -3168 2656 -3356 M 2575 -3102 Q 2526 -3113 2513 -3194 2518 -3109 2539 -3074 2559 -3039 2614 -3052 2648 -3093 2650 -3187 2623 -3094 2575 -3102 M -2656 -3356 L -2653 -3349 Q -2631 -3302 -2639 -3235 L -2643 -3149 Q -2647 -3101 -2670 -3061 -2692 -3021 -2729 -3021 -2766 -3021 -2789 -3064 -2812 -3109 -2815 -3154 L -2817 -3233 Q -2823 -3285 -2811 -3327 -2795 -3235 -2755 -3201 -2641 -3168 -2656 -3356 M -2737 -3102 Q -2787 -3113 -2800 -3194 -2795 -3109 -2774 -3074 -2753 -3039 -2699 -3052 -2664 -3093 -2663 -3187 -2689 -3094 -2737 -3102";ctx.fillStyle=tocolor(ctrans.apply([60,39,13,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 2502 -3327 L 2507 -3343 Q 2529 -3398 2581 -3401 2630 -3405 2656 -3356 2671 -3168 2557 -3201 2518 -3235 2502 -3327 M -2811 -3327 L -2806 -3343 Q -2784 -3398 -2731 -3401 -2683 -3405 -2656 -3356 -2641 -3168 -2755 -3201 -2795 -3235 -2811 -3327";ctx.fillStyle=tocolor(ctrans.apply([93,61,20,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 2575 -3102 Q 2623 -3094 2650 -3187 2648 -3093 2614 -3052 2559 -3039 2539 -3074 2518 -3109 2513 -3194 2526 -3113 2575 -3102 M -2737 -3102 Q -2689 -3094 -2663 -3187 -2664 -3093 -2699 -3052 -2753 -3039 -2774 -3074 -2795 -3109 -2800 -3194 -2787 -3113 -2737 -3102";ctx.fillStyle=tocolor(ctrans.apply([95,80,61,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 2656 -3356 L 2660 -3349 Q 2682 -3302 2674 -3235 L 2669 -3149 Q 2666 -3101 2643 -3061 2620 -3021 2583 -3021 2546 -3021 2524 -3064 2500 -3109 2497 -3154 L 2496 -3233 Q 2489 -3285 2502 -3327 L 2507 -3343 Q 2529 -3398 2581 -3401 2630 -3405 2656 -3356 M -2811 -3327 L -2806 -3343 Q -2784 -3398 -2731 -3401 -2683 -3405 -2656 -3356 L -2653 -3349 Q -2631 -3302 -2639 -3235 L -2643 -3149 Q -2647 -3101 -2670 -3061 -2692 -3021 -2729 -3021 -2766 -3021 -2789 -3064 -2812 -3109 -2815 -3154 L -2817 -3233 Q -2823 -3285 -2811 -3327";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=0.4;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)} var shape504Index=1;function shape504(ctx,ctrans,frame,ratio,time){var pathData="M 0 0 L 6068 0 6068 6068 0 6068 0 0";drawPath(ctx,pathData,false);ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape504Index],[128,128,128,1])));ctx.fill("evenodd");ctx.save();ctx.clip();ctx.transform(0.1937713623046875,0,0,0.1937713623046875,1503,1252);var grd=ctx.createRadialGradient(0.0,0,0,0,0,16384);grd.addColorStop(0.0,tocolor(ctrans.apply(shadeColor(colorPalette[shape504Index],[159,159,159,1]))));grd.addColorStop(1.0,tocolor(ctrans.apply(shadeColor(colorPalette[shape504Index],[128,128,128,1]))));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx.restore()}function sprite505(ctx,ctrans,frame,ratio,time){var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(shape504,canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}} var shape506Index=2;function shape506(ctx,ctrans,frame,ratio,time){var pathData="M 1435 518 Q 1435 936 1138 1233 841 1530 422 1530 129 1530 -104 1385 L -104 5 1298 5 Q 1435 233 1435 518";drawPath(ctx,pathData,false);ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape506Index],[159,159,159,0.0])));ctx.fill("evenodd");ctx.save();ctx.clip();ctx.transform(0.0628662109375,0,0,0.0628662109375,391,653);var grd=ctx.createRadialGradient(0.0,0,0,0,0,16384);grd.addColorStop(0.0,tocolor(ctrans.apply(shadeColor(colorPalette[shape506Index],[149,149,149,1]))));grd.addColorStop(1.0,tocolor(ctrans.apply(shadeColor(colorPalette[shape506Index],[159,159,159,0.0]))));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx.restore();var pathData="M 1054 512 Q 1054 855 811 1097 569 1340 226 1340 107 1340 0 1311 L 0 0 878 0 Q 1054 220 1054 512";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape506Index],[135,134,134,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd")}function sprite507(ctx,ctrans,frame,ratio,time){var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(shape506,canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}}function shape508(ctx,ctrans,frame,ratio,time){var pathData="M 6555 6782 L 487 6782 487 714 6555 714 6555 6782 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,204,51,1]));ctx.lineWidth=0.05;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 7489 161 L 7489 7916 1148 7916 Q 345 7758 85 7327 L 1111 6879 6775 6801 7127 492 7348 10 7489 161";ctx.fillStyle=tocolor(ctrans.apply([0,0,0,0.3019608]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 3431 6745 L 3431 745 651 745 651 6745 3431 6745 M 6651 6745 L 6651 745 3951 745 3951 6745 6651 6745 M 7172 164 L 7172 7205 131 7205 131 164 7172 164";var grd=ctx.createLinearGradient(4733.25,4119.25,5704.75,8682.75);grd.addColorStop(0.0,tocolor(ctrans.apply([0,0,0,0.0])));grd.addColorStop(1.0,tocolor(ctrans.apply([0,0,0,0.5019608])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 6774 164 Q 5202 523 4422 164 L 6774 164 M 3818 164 Q 2860 414 2447 164 L 3818 164 M 1503 164 Q 1737 325 2459 529 3386 685 4623 529 5778 536 6651 745 L 7172 164 7172 353 Q 6895 641 6911 1095 6885 1963 7172 2831 L 7172 4428 Q 6957 4814 6911 5497 6834 6199 7172 6818 L 7172 7205 6911 6975 6651 6745 6911 6975 Q 5864 7054 4787 6745 L 6651 6745 6651 5208 Q 6958 4217 6911 2906 6902 2375 6651 1616 L 6651 745 6546 745 3951 745 3691 745 3431 745 3691 745 Q 3888 1974 3431 2680 L 3431 745 3319 745 2334 745 Q 2089 502 1453 403 759 417 651 745 L 651 880 651 1522 Q 212 2757 651 4415 L 651 5840 Q 548 4129 131 3434 L 131 2303 Q 473 1586 131 818 L 131 164 1503 164 M 5428 7205 L 2799 7205 Q 3351 6850 4384 6975 L 5428 7205 M 334 7205 L 131 7205 131 5145 Q 521 6068 409 6960 L 402 6965 411 6975 334 7205 M 3951 5799 Q 3611 4862 3629 3925 3676 3013 3951 2403 L 3951 5773 3951 5799 M 131 164 L 651 745 131 164 M 3431 6745 L 3431 5208 Q 3809 5944 3691 6745 L 3431 6745 M 131 7205 L 402 6965 131 7205 M 3151 6745 L 2598 6975 Q 1597 7082 937 6745 L 3151 6745";ctx.fillStyle=tocolor(ctrans.apply([107,76,38,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 6546 745 L 6651 745 6651 1616 6651 5208 6651 6745 6546 6612 6546 745 M 3319 745 L 3431 745 3431 2680 3431 5208 3431 6745 3319 6622 3319 745";ctx.fillStyle=tocolor(ctrans.apply([77,51,26,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 7172 164 L 6774 164 4422 164 3818 164 2447 164 1503 164 131 164 131 818 131 2303 131 3434 131 5145 131 7205 334 7205 2799 7205 5428 7205 7172 7205 7172 6818 7172 4428 7172 2831 7172 353 7172 164 M 7347 7347 L 0 7347 0 0 7347 0 7347 7347";var grd=ctx.createLinearGradient(4871.5,7729.75,3324.5,-811.75);grd.addColorStop(0.0,tocolor(ctrans.apply([43,30,15,1])));grd.addColorStop(0.9882352941176471,tocolor(ctrans.apply([115,81,40,1])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 6774 164 L 7172 164 6651 745 Q 5778 536 4623 529 3386 685 2459 529 1737 325 1503 164 L 2447 164 Q 2860 414 3818 164 L 4422 164 Q 5202 523 6774 164 M 7172 353 L 7172 2831 Q 6885 1963 6911 1095 6895 641 7172 353 M 7172 4428 L 7172 6818 Q 6834 6199 6911 5497 6957 4814 7172 4428 M 7172 7205 L 5428 7205 4384 6975 Q 3351 6850 2799 7205 L 334 7205 411 6975 409 6960 Q 521 6068 131 5145 L 131 3434 Q 548 4129 651 5840 L 651 6512 651 6623 651 6745 937 6745 Q 1597 7082 2598 6975 L 3151 6745 3431 6745 3691 6745 Q 3809 5944 3431 5208 L 3431 2680 Q 3888 1974 3691 745 L 3951 745 3951 880 3951 2403 Q 3676 3013 3629 3925 3611 4862 3951 5799 L 3951 6512 3951 6612 3951 6745 3691 6745 3951 6745 4787 6745 Q 5864 7054 6911 6975 L 7172 7205 M 131 2303 L 131 818 Q 473 1586 131 2303 M 6651 1616 Q 6902 2375 6911 2906 6958 4217 6651 5208 L 6651 1616 M 651 1522 L 651 4415 Q 212 2757 651 1522 M 651 745 Q 759 417 1453 403 2089 502 2334 745 L 651 745 M 409 6960 L 651 6745 409 6960";ctx.fillStyle=tocolor(ctrans.apply([125,89,45,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 6546 6612 L 6651 6745 4787 6745 3951 6745 3951 6612 6546 6612 M 3319 6622 L 3431 6745 3151 6745 937 6745 651 6745 651 6623 3319 6623 3319 6622";ctx.fillStyle=tocolor(ctrans.apply([59,40,20,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 6546 745 L 6546 6612 3951 6612 3951 6512 6430 6512 6430 880 3951 880 3951 745 6546 745";var grd=ctx.createLinearGradient(5691.0,4602.25,3271.0,-1074.25);grd.addColorStop(0.0,tocolor(ctrans.apply([71,49,24,1])));grd.addColorStop(0.9882352941176471,tocolor(ctrans.apply([99,68,34,1])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 651 880 L 651 745 2334 745 3319 745 3319 6622 3319 6623 651 6623 651 6512 3227 6512 3227 880 651 880";var grd=ctx.createLinearGradient(3743.0,5447.0,339.0,2043.0);grd.addColorStop(0.0,tocolor(ctrans.apply([71,49,24,1])));grd.addColorStop(0.9882352941176471,tocolor(ctrans.apply([99,68,34,1])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 409 6960 L 411 6975 402 6965 409 6960";ctx.fillStyle=tocolor(ctrans.apply([112,74,40,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 7172 164 L 6774 164 4422 164 3818 164 2447 164 1503 164 M 7172 164 L 7172 353 7172 2831 7172 4428 7172 6818 7172 7205 5428 7205 2799 7205 334 7205 131 7205 131 5145 131 3434 131 2303 131 818 131 164 1503 164 M 6546 745 L 6651 745 6651 1616 6651 5208 6651 6745 4787 6745 M 7347 7347 L 0 7347 0 0 7347 0 7347 7347 M 6546 745 L 3951 745 3951 880 M 3951 6512 L 3951 6612 M 3319 745 L 3431 745 3431 2680 M 3951 2403 L 3951 880 M 651 880 L 651 745 2334 745 3319 745 M 651 880 L 651 1522 651 4415 651 5840 651 6512 M 651 6745 L 651 6623 651 6512 M 937 6745 L 651 6745 M 937 6745 L 3151 6745 3431 6745 M 3951 2403 L 3951 5773 3951 5799 3951 6512 M 3951 6745 L 3951 6612 M 3951 6745 L 4787 6745";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=1.0;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 6651 745 L 7172 164 M 6651 6745 L 6911 6975 7172 7205 M 6546 6612 L 6651 6745 M 6546 6612 L 6546 745 M 3951 6612 L 6546 6612 M 3431 745 L 3691 745 3951 745 M 651 745 L 131 164 M 402 6965 L 131 7205 M 651 6745 L 409 6960";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=0.5;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 6774 164 Q 5202 523 4422 164 M 3818 164 Q 2860 414 2447 164 M 1503 164 Q 1737 325 2459 529 3386 685 4623 529 5778 536 6651 745 M 6651 1616 Q 6902 2375 6911 2906 6958 4217 6651 5208 M 7172 2831 Q 6885 1963 6911 1095 6895 641 7172 353 M 7172 6818 Q 6834 6199 6911 5497 6957 4814 7172 4428 M 4787 6745 Q 5864 7054 6911 6975 M 3951 5799 Q 3611 4862 3629 3925 3676 3013 3951 2403 M 3431 2680 Q 3888 1974 3691 745 M 651 745 Q 759 417 1453 403 2089 502 2334 745 M 131 818 Q 473 1586 131 2303 M 409 6960 L 411 6975 334 7205 M 409 6960 Q 521 6068 131 5145 M 3151 6745 L 2598 6975 Q 1597 7082 937 6745 M 3691 6745 Q 3809 5944 3431 5208 M 2799 7205 Q 3351 6850 4384 6975 L 5428 7205 M 651 4415 Q 212 2757 651 1522 M 651 5840 Q 548 4129 131 3434";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=0.5;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 3951 880 L 6430 880 6430 6512 3951 6512 M 651 6512 L 3227 6512 3227 880 651 880 M 3431 6745 L 3431 5208 3431 2680 M 402 6965 L 409 6960";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=0.5;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 3319 745 L 3319 6622 3431 6745 3691 6745 3951 6745 M 651 6623 L 3319 6623 3319 6622";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,0.8]));ctx.lineWidth=0.5;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 6494 2226 L 6494 3107 3956 5546 3952 4732 6494 2226";var grd=ctx.createLinearGradient(3223.5,4682.75,6416.5,3799.25);grd.addColorStop(0.0,tocolor(ctrans.apply([255,255,255,0.6901961])));grd.addColorStop(1.0,tocolor(ctrans.apply([255,255,255,0.0])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 6494 3751 L 6494 4120 3953 6449 3953 6034 6494 3751";var grd=ctx.createLinearGradient(3165.5,5928.25,6520.5,4697.75);grd.addColorStop(0.0,tocolor(ctrans.apply([255,255,255,0.6901961])));grd.addColorStop(1.0,tocolor(ctrans.apply([255,255,255,0.0])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 3301 3358 L 3301 3727 668 6056 668 5649 3301 3358";var grd=ctx.createLinearGradient(-136.0,5535.25,3328.0,4304.75);grd.addColorStop(0.0,tocolor(ctrans.apply([255,255,255,0.6901961])));grd.addColorStop(1.0,tocolor(ctrans.apply([255,255,255,0.0])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 3301 1833 L 3301 2714 668 5157 668 4347 3301 1833";var grd=ctx.createLinearGradient(-76.5,4289.75,3220.5,3406.25);grd.addColorStop(0.0,tocolor(ctrans.apply([255,255,255,0.6901961])));grd.addColorStop(1.0,tocolor(ctrans.apply([255,255,255,0.0])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd")}function sprite509(ctx,ctrans,frame,ratio,time){var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(shape508,canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}} var shape510Index=0;function shape510(ctx,ctrans,frame,ratio,time){var pathData="M 1703 1715 L 1727 1923 2056 4754 Q 2073 4969 2173 5040 2141 5109 2083 5161 1670 4690 1270 2672 L 1195 2256 Q 1145 1895 1112 1315 1067 525 1148 47 1265 -40 1381 33 L 1703 1715";var grd=ctx.createLinearGradient(797.25,2596.0,2472.75,2596.0);grd.addColorStop(0.011764705882352941,tocolor(ctrans.apply(shadeColor(colorPalette[shape510Index],[128,128,128,1]))));grd.addColorStop(1.0,tocolor(ctrans.apply(shadeColor(colorPalette[shape510Index],[98,91,91,1]))));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 566 45 Q 737 151 1148 47 1067 525 1112 1315 1145 1895 1195 2256 1023 1383 1000 1194 921 535 745 455 609 389 638 1160 L 566 45 M 1381 33 Q 1525 115 1647 37 1578 891 1703 1715 L 1381 33 M 1270 2672 Q 1670 4690 2083 5161 2025 5207 1941 5239 1865 5267 1761 5251 1563 4763 1420 3594 L 1270 2672 M 787 2658 L 802 2657 803 2662 Q 917 3912 950 5055 917 3912 803 2662 985 3933 1146 4337 1306 4740 1230 5251 1145 5063 950 5055 L 957 5267 Q 815 5302 689 5312 932 4871 787 2662 L 787 2658";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape510Index],[79,75,75,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 72 5139 Q 35 5107 0 5067 121 4556 167 3797 202 3200 240 2743 361 702 380 33 456 -24 566 45 L 638 1160 Q 609 389 745 455 921 535 1000 1194 1023 1383 1195 2256 L 1270 2672 1420 3594 Q 1563 4763 1761 5251 1414 5487 1230 5251 1306 4740 1146 4337 985 3933 803 2662 L 802 2657 739 2013 787 2658 787 2662 Q 932 4871 689 5312 462 5329 286 5265 L 216 5234 Q 121 5180 72 5139 M 699 1651 L 739 2013 699 1651";var grd=ctx.createLinearGradient(276.0,2865.0,2036.0,2865.0);grd.addColorStop(0.0,tocolor(ctrans.apply(shadeColor(colorPalette[shape510Index],[128,128,128,1]))));grd.addColorStop(1.0,tocolor(ctrans.apply(shadeColor(colorPalette[shape510Index],[98,91,91,1]))));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 802 2657 L 787 2658 739 2013 802 2657";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape510Index],[45,34,59,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 167 3797 Q 187 3249 240 2743 202 3200 167 3797 M 216 5234 L 286 5265 Q 269 5266 241 5250 L 216 5234";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape510Index],[117,50,29,1])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 1727 1923 L 2281 5065 Q 2052 5385 1805 5341 1726 5454 1455 5471 1187 5446 1084 5268 1004 5400 756 5429 288 5459 72 5139 121 5180 216 5234 L 241 5250 Q 269 5266 286 5265 462 5329 689 5312 815 5302 957 5267 L 950 5055 Q 1145 5063 1230 5251 1414 5487 1761 5251 1865 5267 1941 5239 2025 5207 2083 5161 2141 5109 2173 5040 2073 4969 2056 4754 L 1727 1923";ctx.fillStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape510Index],[0,0,0,0.3019608])));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 1703 1715 L 1727 1923 M 72 5139 Q 35 5107 0 5067 121 4556 167 3797 202 3200 240 2743 361 702 380 33 456 -24 566 45 737 151 1148 47 1265 -40 1381 33 1525 115 1647 37 1578 891 1703 1715 M 2083 5161 Q 2141 5109 2173 5040 2073 4969 2056 4754 L 1727 1923 M 689 5312 Q 815 5302 957 5267 L 950 5055 M 1761 5251 Q 1865 5267 1941 5239 2025 5207 2083 5161 M 216 5234 Q 121 5180 72 5139 M 286 5265 L 216 5234 M 286 5265 Q 462 5329 689 5312 M 1230 5251 Q 1145 5063 950 5055 M 1230 5251 Q 1414 5487 1761 5251";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape510Index],[0,0,0,0.8])));ctx.lineWidth=1.5;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 1703 1715 L 1381 33 M 950 5055 Q 917 3912 803 2662 M 1761 5251 Q 1563 4763 1420 3594 L 1270 2672 M 739 2013 L 699 1651";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply(shadeColor(colorPalette[shape510Index],[0,0,0,0.8])));ctx.lineWidth=0.5;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite511(ctx,ctrans,frame,ratio,time){var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(shape510,canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}}function sprite513(ctx,ctrans,frame,ratio,time){ctx.save();ctx.transform(1,0,0,1,145.6,170.9);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place(sprite505,canvas,ctx,[0.028002166748046876,0.0,0.0,0.028002166748046876,-86.65,-168.1],ctrans,1,(0+time)%1,0,time);place(sprite507,canvas,ctx,[0.04525604248046875,0.0,0.0,0.04525604248046875,-79.85,-168.1],ctrans,1,(0+time)%1,0,time);place(sprite509,canvas,ctx,[0.023413848876953126,0.0,0.0,0.023413848876953126,-85.2,-168.7],ctrans,1,(0+time)%1,0,time);place(sprite511,canvas,ctx,[0.0363922119140625,0.0,0.0,0.0363922119140625,-143.45,-170.35],ctrans,1,(0+time)%1,0,time);place(sprite511,canvas,ctx,[0.0363922119140625,0.0,0.0,0.0363922119140625,61.75,-170.35],ctrans,1,(0+time)%1,0,time);place(shape512,canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()}var frame=-1;var time=0;var frames=[];frames.push(0);var backgroundColor="#ffffff00";var originalWidth=290;var originalHeight=199;function nextFrame(ctx,ctrans){var oldframe=frame;frame=(frame+1)%frames.length;if(frame==oldframe){time++}else{time=0};drawFrame()}function drawFrame(){ctx.fillStyle=backgroundColor;ctx.fillRect(0,0,canvas.width,canvas.height);ctx.save();ctx.transform(canvas.width/originalWidth,0,0,canvas.height/originalHeight,0,0);sprite513(ctx,ctrans,frames[frame],0,time);ctx.restore()}nextFrame(ctx,ctrans);
return [canvas,width,height];}