"use strict";(self["webpackChunkipin2022_geolocationapi"]=self["webpackChunkipin2022_geolocationapi"]||[]).push([[347],{3704:function(e,n,t){function r(e,n){let t=e.length-n,r=0;do{for(let t=n;t>0;t--)e[r+n]+=e[r],r++;t-=n}while(t>0)}function s(e,n,t){let r=0,s=e.length;const o=s/t;while(s>n){for(let t=n;t>0;--t)e[r+n]+=e[r],++r;s-=n}const i=e.slice();for(let a=0;a<o;++a)for(let n=0;n<t;++n)e[t*a+n]=i[(t-n-1)*o+a]}function o(e,n,t,o,i,a){if(!n||1===n)return e;for(let r=0;r<i.length;++r){if(i[r]%8!==0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(i[r]!==i[0])throw new Error("When decoding with predictor, all samples must have the same size.")}const c=i[0]/8,l=2===a?1:i.length;for(let f=0;f<o;++f){if(f*l*t*c>=e.byteLength)break;let o;if(2===n){switch(i[0]){case 8:o=new Uint8Array(e,f*l*t*c,l*t*c);break;case 16:o=new Uint16Array(e,f*l*t*c,l*t*c/2);break;case 32:o=new Uint32Array(e,f*l*t*c,l*t*c/4);break;default:throw new Error(`Predictor 2 not allowed with ${i[0]} bits per sample.`)}r(o,l,c)}else 3===n&&(o=new Uint8Array(e,f*l*t*c,l*t*c),s(o,l,c))}return e}t.d(n,{Z:function(){return i}});class i{async decode(e,n){const t=await this.decodeBlock(n),r=e.Predictor||1;if(1!==r){const n=!e.StripOffsets,s=n?e.TileWidth:e.ImageWidth,i=n?e.TileLength:e.RowsPerStrip||e.ImageLength;return o(t,r,s,i,e.BitsPerSample,e.PlanarConfiguration)}return t}}},39347:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(3704),s=t(25108);const o=new Int32Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),i=4017,a=799,c=3406,l=2276,f=1567,h=3784,u=5793,d=2896;function m(e,n){let t=0;const r=[];let s=16;while(s>0&&!e[s-1])--s;r.push({children:[],index:0});let o,i=r[0];for(let a=0;a<s;a++){for(let s=0;s<e[a];s++){i=r.pop(),i.children[i.index]=n[t];while(i.index>0)i=r.pop();i.index++,r.push(i);while(r.length<=a)r.push(o={children:[],index:0}),i.children[i.index]=o.children,i=o;t++}a+1<s&&(r.push(o={children:[],index:0}),i.children[i.index]=o.children,i=o)}return r[0].children}function p(e,n,t,r,s,i,a,c,l){const{mcusPerLine:f,progressive:h}=t,u=n;let d=n,m=0,p=0;function b(){if(p>0)return p--,m>>p&1;if(m=e[d++],255===m){const n=e[d++];if(n)throw new Error(`unexpected marker: ${(m<<8|n).toString(16)}`)}return p=7,m>>>7}function w(e){let n,t=e;while(null!==(n=b())){if(t=t[n],"number"===typeof t)return t;if("object"!==typeof t)throw new Error("invalid huffman sequence")}return null}function k(e){let n=e,t=0;while(n>0){const e=b();if(null===e)return;t=t<<1|e,--n}return t}function g(e){const n=k(e);return n>=1<<e-1?n:n+(-1<<e)+1}function y(e,n){const t=w(e.huffmanTableDC),r=0===t?0:g(t);e.pred+=r,n[0]=e.pred;let s=1;while(s<64){const t=w(e.huffmanTableAC),r=15&t,i=t>>4;if(0===r){if(i<15)break;s+=16}else{s+=i;const e=o[s];n[e]=g(r),s++}}}function P(e,n){const t=w(e.huffmanTableDC),r=0===t?0:g(t)<<l;e.pred+=r,n[0]=e.pred}function C(e,n){n[0]|=b()<<l}let T=0;function A(e,n){if(T>0)return void T--;let t=i;const r=a;while(t<=r){const r=w(e.huffmanTableAC),s=15&r,i=r>>4;if(0===s){if(i<15){T=k(i)+(1<<i)-1;break}t+=16}else{t+=i;const e=o[t];n[e]=g(s)*(1<<l),t++}}}let v,x=0;function L(e,n){let t=i;const r=a;let s=0;while(t<=r){const r=o[t],i=n[r]<0?-1:1;switch(x){case 0:{const n=w(e.huffmanTableAC),t=15&n;if(s=n>>4,0===t)s<15?(T=k(s)+(1<<s),x=4):(s=16,x=1);else{if(1!==t)throw new Error("invalid ACn encoding");v=g(t),x=s?2:3}continue}case 1:case 2:n[r]?n[r]+=(b()<<l)*i:(s--,0===s&&(x=2===x?3:0));break;case 3:n[r]?n[r]+=(b()<<l)*i:(n[r]=v<<l,x=0);break;case 4:n[r]&&(n[r]+=(b()<<l)*i);break;default:break}t++}4===x&&(T--,0===T&&(x=0))}function E(e,n,t,r,s){const o=t/f|0,i=t%f,a=o*e.v+r,c=i*e.h+s;n(e,e.blocks[a][c])}function I(e,n,t){const r=t/e.blocksPerLine|0,s=t%e.blocksPerLine;n(e,e.blocks[r][s])}const U=r.length;let D,q,z,O,M,S;S=h?0===i?0===c?P:C:0===c?A:L:y;let j,W,B=0;W=1===U?r[0].blocksPerLine*r[0].blocksPerColumn:f*t.mcusPerColumn;const F=s||W;while(B<W){for(q=0;q<U;q++)r[q].pred=0;if(T=0,1===U)for(D=r[0],M=0;M<F;M++)I(D,S,B),B++;else for(M=0;M<F;M++){for(q=0;q<U;q++){D=r[q];const{h:e,v:n}=D;for(z=0;z<n;z++)for(O=0;O<e;O++)E(D,S,B,z,O)}if(B++,B===W)break}if(p=0,j=e[d]<<8|e[d+1],j<65280)throw new Error("marker was not found");if(!(j>=65488&&j<=65495))break;d+=2}return d-u}function b(e,n){const t=[],{blocksPerLine:r,blocksPerColumn:s}=n,o=r<<3,m=new Int32Array(64),p=new Uint8Array(64);function b(e,t,r){const s=n.quantizationTable;let o,m,p,b,w,k,g,y,P;const C=r;let T;for(T=0;T<64;T++)C[T]=e[T]*s[T];for(T=0;T<8;++T){const e=8*T;0!==C[1+e]||0!==C[2+e]||0!==C[3+e]||0!==C[4+e]||0!==C[5+e]||0!==C[6+e]||0!==C[7+e]?(o=u*C[0+e]+128>>8,m=u*C[4+e]+128>>8,p=C[2+e],b=C[6+e],w=d*(C[1+e]-C[7+e])+128>>8,y=d*(C[1+e]+C[7+e])+128>>8,k=C[3+e]<<4,g=C[5+e]<<4,P=o-m+1>>1,o=o+m+1>>1,m=P,P=p*h+b*f+128>>8,p=p*f-b*h+128>>8,b=P,P=w-g+1>>1,w=w+g+1>>1,g=P,P=y+k+1>>1,k=y-k+1>>1,y=P,P=o-b+1>>1,o=o+b+1>>1,b=P,P=m-p+1>>1,m=m+p+1>>1,p=P,P=w*l+y*c+2048>>12,w=w*c-y*l+2048>>12,y=P,P=k*a+g*i+2048>>12,k=k*i-g*a+2048>>12,g=P,C[0+e]=o+y,C[7+e]=o-y,C[1+e]=m+g,C[6+e]=m-g,C[2+e]=p+k,C[5+e]=p-k,C[3+e]=b+w,C[4+e]=b-w):(P=u*C[0+e]+512>>10,C[0+e]=P,C[1+e]=P,C[2+e]=P,C[3+e]=P,C[4+e]=P,C[5+e]=P,C[6+e]=P,C[7+e]=P)}for(T=0;T<8;++T){const e=T;0!==C[8+e]||0!==C[16+e]||0!==C[24+e]||0!==C[32+e]||0!==C[40+e]||0!==C[48+e]||0!==C[56+e]?(o=u*C[0+e]+2048>>12,m=u*C[32+e]+2048>>12,p=C[16+e],b=C[48+e],w=d*(C[8+e]-C[56+e])+2048>>12,y=d*(C[8+e]+C[56+e])+2048>>12,k=C[24+e],g=C[40+e],P=o-m+1>>1,o=o+m+1>>1,m=P,P=p*h+b*f+2048>>12,p=p*f-b*h+2048>>12,b=P,P=w-g+1>>1,w=w+g+1>>1,g=P,P=y+k+1>>1,k=y-k+1>>1,y=P,P=o-b+1>>1,o=o+b+1>>1,b=P,P=m-p+1>>1,m=m+p+1>>1,p=P,P=w*l+y*c+2048>>12,w=w*c-y*l+2048>>12,y=P,P=k*a+g*i+2048>>12,k=k*i-g*a+2048>>12,g=P,C[0+e]=o+y,C[56+e]=o-y,C[8+e]=m+g,C[48+e]=m-g,C[16+e]=p+k,C[40+e]=p-k,C[24+e]=b+w,C[32+e]=b-w):(P=u*r[T+0]+8192>>14,C[0+e]=P,C[8+e]=P,C[16+e]=P,C[24+e]=P,C[32+e]=P,C[40+e]=P,C[48+e]=P,C[56+e]=P)}for(T=0;T<64;++T){const e=128+(C[T]+8>>4);t[T]=e<0?0:e>255?255:e}}for(let i=0;i<s;i++){const e=i<<3;for(let n=0;n<8;n++)t.push(new Uint8Array(o));for(let s=0;s<r;s++){b(n.blocks[i][s],p,m);let r=0;const o=s<<3;for(let n=0;n<8;n++){const s=t[e+n];for(let e=0;e<8;e++)s[o+e]=p[r++]}}}return t}class w{constructor(){this.jfif=null,this.adobe=null,this.quantizationTables=[],this.huffmanTablesAC=[],this.huffmanTablesDC=[],this.resetFrames()}resetFrames(){this.frames=[]}parse(e){let n=0;function t(){const t=e[n]<<8|e[n+1];return n+=2,t}function r(){const r=t(),s=e.subarray(n,n+r-2);return n+=s.length,s}function s(e){let n,t,r=0,s=0;for(t in e.components)e.components.hasOwnProperty(t)&&(n=e.components[t],r<n.h&&(r=n.h),s<n.v&&(s=n.v));const o=Math.ceil(e.samplesPerLine/8/r),i=Math.ceil(e.scanLines/8/s);for(t in e.components)if(e.components.hasOwnProperty(t)){n=e.components[t];const a=Math.ceil(Math.ceil(e.samplesPerLine/8)*n.h/r),c=Math.ceil(Math.ceil(e.scanLines/8)*n.v/s),l=o*n.h,f=i*n.v,h=[];for(let e=0;e<f;e++){const e=[];for(let n=0;n<l;n++)e.push(new Int32Array(64));h.push(e)}n.blocksPerLine=a,n.blocksPerColumn=c,n.blocks=h}e.maxH=r,e.maxV=s,e.mcusPerLine=o,e.mcusPerColumn=i}let i=t();if(65496!==i)throw new Error("SOI not found");i=t();while(65497!==i){switch(i){case 65280:break;case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:{const e=r();65504===i&&74===e[0]&&70===e[1]&&73===e[2]&&70===e[3]&&0===e[4]&&(this.jfif={version:{major:e[5],minor:e[6]},densityUnits:e[7],xDensity:e[8]<<8|e[9],yDensity:e[10]<<8|e[11],thumbWidth:e[12],thumbHeight:e[13],thumbData:e.subarray(14,14+3*e[12]*e[13])}),65518===i&&65===e[0]&&100===e[1]&&111===e[2]&&98===e[3]&&101===e[4]&&0===e[5]&&(this.adobe={version:e[6],flags0:e[7]<<8|e[8],flags1:e[9]<<8|e[10],transformCode:e[11]});break}case 65499:{const r=t(),s=r+n-2;while(n<s){const r=e[n++],s=new Int32Array(64);if(r>>4===0)for(let t=0;t<64;t++){const r=o[t];s[r]=e[n++]}else{if(r>>4!==1)throw new Error("DQT: invalid table spec");for(let e=0;e<64;e++){const n=o[e];s[n]=t()}}this.quantizationTables[15&r]=s}break}case 65472:case 65473:case 65474:{t();const r={extended:65473===i,progressive:65474===i,precision:e[n++],scanLines:t(),samplesPerLine:t(),components:{},componentsOrder:[]},o=e[n++];let a;for(let t=0;t<o;t++){a=e[n];const t=e[n+1]>>4,s=15&e[n+1],o=e[n+2];r.componentsOrder.push(a),r.components[a]={h:t,v:s,quantizationIdx:o},n+=3}s(r),this.frames.push(r);break}case 65476:{const r=t();for(let t=2;t<r;){const r=e[n++],s=new Uint8Array(16);let o=0;for(let t=0;t<16;t++,n++)s[t]=e[n],o+=s[t];const i=new Uint8Array(o);for(let t=0;t<o;t++,n++)i[t]=e[n];t+=17+o,r>>4===0?this.huffmanTablesDC[15&r]=m(s,i):this.huffmanTablesAC[15&r]=m(s,i)}break}case 65501:t(),this.resetInterval=t();break;case 65498:{t();const r=e[n++],s=[],o=this.frames[0];for(let t=0;t<r;t++){const t=o.components[e[n++]],r=e[n++];t.huffmanTableDC=this.huffmanTablesDC[r>>4],t.huffmanTableAC=this.huffmanTablesAC[15&r],s.push(t)}const i=e[n++],a=e[n++],c=e[n++],l=p(e,n,o,s,this.resetInterval,i,a,c>>4,15&c);n+=l;break}case 65535:255!==e[n]&&n--;break;default:if(255===e[n-3]&&e[n-2]>=192&&e[n-2]<=254){n-=3;break}throw new Error(`unknown JPEG marker ${i.toString(16)}`)}i=t()}}getResult(){const{frames:e}=this;if(0===this.frames.length)throw new Error("no frames were decoded");this.frames.length>1&&s.warn("more than one frame is not supported");for(let s=0;s<this.frames.length;s++){const e=this.frames[s].components;for(const n of Object.keys(e))e[n].quantizationTable=this.quantizationTables[e[n].quantizationIdx],delete e[n].quantizationIdx}const n=e[0],{components:t,componentsOrder:r}=n,o=[],i=n.samplesPerLine,a=n.scanLines;for(let s=0;s<r.length;s++){const e=t[r[s]];o.push({lines:b(n,e),scaleX:e.h/n.maxH,scaleY:e.v/n.maxV})}const c=new Uint8Array(i*a*o.length);let l=0;for(let s=0;s<a;++s)for(let e=0;e<i;++e)for(let n=0;n<o.length;++n){const t=o[n];c[l]=t.lines[0|s*t.scaleY][0|e*t.scaleX],++l}return c}}class k extends r.Z{constructor(e){super(),this.reader=new w,e.JPEGTables&&this.reader.parse(e.JPEGTables)}decodeBlock(e){return this.reader.resetFrames(),this.reader.parse(new Uint8Array(e)),this.reader.getResult().buffer}}}}]);
//# sourceMappingURL=347-legacy.b5e55d24.js.map