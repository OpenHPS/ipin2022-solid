(self["webpackChunkipin2022_geolocationapi"]=self["webpackChunkipin2022_geolocationapi"]||[]).push([[173],{67197:function(e,t){var r,i;
/* Copyright 2015-2021 Esri. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 @preserve */(function(){var a=function(){var e={defaultNoDataValue:-34027999387901484e22,decode:function(n,s){s=s||{};var l=s.encodedMaskData||null===s.encodedMaskData,f=a(n,s.inputOffset||0,l),o=null!==s.noDataValue?s.noDataValue:e.defaultNoDataValue,u=t(f,s.pixelType||Float32Array,s.encodedMaskData,o,s.returnMask),c={width:f.width,height:f.height,pixelData:u.resultPixels,minValue:u.minValue,maxValue:f.pixels.maxValue,noDataValue:o};return u.resultMask&&(c.maskData=u.resultMask),s.returnEncodedMask&&f.mask&&(c.encodedMaskData=f.mask.bitset?f.mask.bitset:null),s.returnFileInfo&&(c.fileInfo=r(f),s.computeUsedBitDepths&&(c.fileInfo.bitDepths=i(f))),c}},t=function(e,t,r,i,a){var s,l,f,o=0,u=e.pixels.numBlocksX,c=e.pixels.numBlocksY,d=Math.floor(e.width/u),h=Math.floor(e.height/c),m=2*e.maxZError,p=Number.MAX_VALUE;r=r||(e.mask?e.mask.bitset:null),l=new t(e.width*e.height),a&&r&&(f=new Uint8Array(e.width*e.height));for(var g,w,x=new Float32Array(d*h),k=0;k<=c;k++){var y=k!==c?h:e.height%c;if(0!==y)for(var b=0;b<=u;b++){var v=b!==u?d:e.width%u;if(0!==v){var U,I,V,M,D=k*e.width*h+b*d,A=e.width-v,B=e.pixels.blocks[o];if(B.encoding<2?(0===B.encoding?U=B.rawData:(n(B.stuffedData,B.bitsPerPixel,B.numValidPixels,B.offset,m,x,e.pixels.maxValue),U=x),I=0):V=2===B.encoding?0:B.offset,r)for(w=0;w<y;w++){for(7&D&&(M=r[D>>3],M<<=7&D),g=0;g<v;g++)7&D||(M=r[D>>3]),128&M?(f&&(f[D]=1),s=B.encoding<2?U[I++]:V,p=p>s?s:p,l[D++]=s):(f&&(f[D]=0),l[D++]=i),M<<=1;D+=A}else if(B.encoding<2)for(w=0;w<y;w++){for(g=0;g<v;g++)s=U[I++],p=p>s?s:p,l[D++]=s;D+=A}else for(p=p>V?V:p,w=0;w<y;w++){for(g=0;g<v;g++)l[D++]=V;D+=A}if(1===B.encoding&&I!==B.numValidPixels)throw"Block and Mask do not match";o++}}}return{resultPixels:l,resultMask:f,minValue:p}},r=function(e){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,noDataValue:e.noDataValue}}},i=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,r={},i=0;i<t;i++){var a=e.pixels.blocks[i];0===a.encoding?r.float32=!0:1===a.encoding?r[a.bitsPerPixel]=!0:r[0]=!0}return Object.keys(r)},a=function(e,t,r){var i={},a=new Uint8Array(e,t,10);if(i.fileIdentifierString=String.fromCharCode.apply(null,a),"CntZImage"!==i.fileIdentifierString.trim())throw"Unexpected file identifier string: "+i.fileIdentifierString;t+=10;var n=new DataView(e,t,24);if(i.fileVersion=n.getInt32(0,!0),i.imageType=n.getInt32(4,!0),i.height=n.getUint32(8,!0),i.width=n.getUint32(12,!0),i.maxZError=n.getFloat64(16,!0),t+=24,!r)if(n=new DataView(e,t,16),i.mask={},i.mask.numBlocksY=n.getUint32(0,!0),i.mask.numBlocksX=n.getUint32(4,!0),i.mask.numBytes=n.getUint32(8,!0),i.mask.maxValue=n.getFloat32(12,!0),t+=16,i.mask.numBytes>0){var s=new Uint8Array(Math.ceil(i.width*i.height/8));n=new DataView(e,t,i.mask.numBytes);var l=n.getInt16(0,!0),f=2,o=0;do{if(l>0)while(l--)s[o++]=n.getUint8(f++);else{var u=n.getUint8(f++);l=-l;while(l--)s[o++]=u}l=n.getInt16(f,!0),f+=2}while(f<i.mask.numBytes);if(-32768!==l||o<s.length)throw"Unexpected end of mask RLE encoding";i.mask.bitset=s,t+=i.mask.numBytes}else 0===(i.mask.numBytes|i.mask.numBlocksY|i.mask.maxValue)&&(i.mask.bitset=new Uint8Array(Math.ceil(i.width*i.height/8)));n=new DataView(e,t,16),i.pixels={},i.pixels.numBlocksY=n.getUint32(0,!0),i.pixels.numBlocksX=n.getUint32(4,!0),i.pixels.numBytes=n.getUint32(8,!0),i.pixels.maxValue=n.getFloat32(12,!0),t+=16;var c=i.pixels.numBlocksX,d=i.pixels.numBlocksY,h=c+(i.width%c>0?1:0),m=d+(i.height%d>0?1:0);i.pixels.blocks=new Array(h*m);for(var p=0,g=0;g<m;g++)for(var w=0;w<h;w++){var x=0,k=e.byteLength-t;n=new DataView(e,t,Math.min(10,k));var y={};i.pixels.blocks[p++]=y;var b=n.getUint8(0);if(x++,y.encoding=63&b,y.encoding>3)throw"Invalid block encoding ("+y.encoding+")";if(2!==y.encoding){if(0!==b&&2!==b){if(b>>=6,y.offsetType=b,2===b)y.offset=n.getInt8(1),x++;else if(1===b)y.offset=n.getInt16(1,!0),x+=2;else{if(0!==b)throw"Invalid block offset type";y.offset=n.getFloat32(1,!0),x+=4}if(1===y.encoding)if(b=n.getUint8(x),x++,y.bitsPerPixel=63&b,b>>=6,y.numValidPixelsType=b,2===b)y.numValidPixels=n.getUint8(x),x++;else if(1===b)y.numValidPixels=n.getUint16(x,!0),x+=2;else{if(0!==b)throw"Invalid valid pixel count type";y.numValidPixels=n.getUint32(x,!0),x+=4}}var v,U;if(t+=x,3!==y.encoding)if(0===y.encoding){var I=(i.pixels.numBytes-1)/4;if(I!==Math.floor(I))throw"uncompressed block has invalid length";v=new ArrayBuffer(4*I),U=new Uint8Array(v),U.set(new Uint8Array(e,t,4*I));var V=new Float32Array(v);y.rawData=V,t+=4*I}else if(1===y.encoding){var M=Math.ceil(y.numValidPixels*y.bitsPerPixel/8),D=Math.ceil(M/4);v=new ArrayBuffer(4*D),U=new Uint8Array(v),U.set(new Uint8Array(e,t,M)),y.stuffedData=new Uint32Array(v),t+=M}}else t++}return i.eofOffset=t,i},n=function(e,t,r,i,a,n,s){var l,f,o,u=(1<<t)-1,c=0,d=0,h=Math.ceil((s-i)/a),m=4*e.length-Math.ceil(t*r/8);for(e[e.length-1]<<=8*m,l=0;l<r;l++){if(0===d&&(o=e[c++],d=32),d>=t)f=o>>>d-t&u,d-=t;else{var p=t-d;f=(o&u)<<p&u,o=e[c++],d=32-p,f+=o>>>d}n[l]=f<h?i+f*a:s}return n};return e}(),n=function(){"use strict";var e={unstuff:function(e,t,r,i,a,n,s,l){var f,o,u,c,d,h=(1<<r)-1,m=0,p=0,g=4*e.length-Math.ceil(r*i/8);if(e[e.length-1]<<=8*g,a)for(f=0;f<i;f++)0===p&&(u=e[m++],p=32),p>=r?(o=u>>>p-r&h,p-=r):(c=r-p,o=(u&h)<<c&h,u=e[m++],p=32-c,o+=u>>>p),t[f]=a[o];else for(d=Math.ceil((l-n)/s),f=0;f<i;f++)0===p&&(u=e[m++],p=32),p>=r?(o=u>>>p-r&h,p-=r):(c=r-p,o=(u&h)<<c&h,u=e[m++],p=32-c,o+=u>>>p),t[f]=o<d?n+o*s:l},unstuffLUT:function(e,t,r,i,a,n){var s,l=(1<<t)-1,f=0,o=0,u=0,c=0,d=0,h=[],m=4*e.length-Math.ceil(t*r/8);e[e.length-1]<<=8*m;var p=Math.ceil((n-i)/a);for(o=0;o<r;o++)0===c&&(s=e[f++],c=32),c>=t?(d=s>>>c-t&l,c-=t):(u=t-c,d=(s&l)<<u&l,s=e[f++],c=32-u,d+=s>>>c),h[o]=d<p?i+d*a:n;return h.unshift(i),h},unstuff2:function(e,t,r,i,a,n,s,l){var f,o,u,c,d=(1<<r)-1,h=0,m=0,p=0;if(a)for(f=0;f<i;f++)0===m&&(u=e[h++],m=32,p=0),m>=r?(o=u>>>p&d,m-=r,p+=r):(c=r-m,o=u>>>p&d,u=e[h++],m=32-c,o|=(u&(1<<c)-1)<<r-c,p=c),t[f]=a[o];else{var g=Math.ceil((l-n)/s);for(f=0;f<i;f++)0===m&&(u=e[h++],m=32,p=0),m>=r?(o=u>>>p&d,m-=r,p+=r):(c=r-m,o=u>>>p&d,u=e[h++],m=32-c,o|=(u&(1<<c)-1)<<r-c,p=c),t[f]=o<g?n+o*s:l}return t},unstuffLUT2:function(e,t,r,i,a,n){var s,l=(1<<t)-1,f=0,o=0,u=0,c=0,d=0,h=0,m=[],p=Math.ceil((n-i)/a);for(o=0;o<r;o++)0===c&&(s=e[f++],c=32,h=0),c>=t?(d=s>>>h&l,c-=t,h+=t):(u=t-c,d=s>>>h&l,s=e[f++],c=32-u,d|=(s&(1<<u)-1)<<t-u,h=u),m[o]=d<p?i+d*a:n;return m.unshift(i),m},originalUnstuff:function(e,t,r,i){var a,n,s,l,f=(1<<r)-1,o=0,u=0,c=4*e.length-Math.ceil(r*i/8);for(e[e.length-1]<<=8*c,a=0;a<i;a++)0===u&&(s=e[o++],u=32),u>=r?(n=s>>>u-r&f,u-=r):(l=r-u,n=(s&f)<<l&f,s=e[o++],u=32-l,n+=s>>>u),t[a]=n;return t},originalUnstuff2:function(e,t,r,i){var a,n,s,l,f=(1<<r)-1,o=0,u=0,c=0;for(a=0;a<i;a++)0===u&&(s=e[o++],u=32,c=0),u>=r?(n=s>>>c&f,u-=r,c+=r):(l=r-u,n=s>>>c&f,s=e[o++],u=32-l,n|=(s&(1<<l)-1)<<r-l,c=l),t[a]=n;return t}},t={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(e){var t=65535,r=65535,i=e.length,a=Math.floor(i/2),n=0;while(a){var s=a>=359?359:a;a-=s;do{t+=e[n++]<<8,r+=t+=e[n++]}while(--s);t=(65535&t)+(t>>>16),r=(65535&r)+(r>>>16)}return 1&i&&(r+=t+=e[n]<<8),t=(65535&t)+(t>>>16),r=(65535&r)+(r>>>16),(r<<16|t)>>>0},readHeaderInfo:function(e,t){var r=t.ptr,i=new Uint8Array(e,r,6),a={};if(a.fileIdentifierString=String.fromCharCode.apply(null,i),0!==a.fileIdentifierString.lastIndexOf("Lerc2",0))throw"Unexpected file identifier string (expect Lerc2 ): "+a.fileIdentifierString;r+=6;var n,s,l=new DataView(e,r,8),f=l.getInt32(0,!0);if(a.fileVersion=f,r+=4,f>=3&&(a.checksum=l.getUint32(4,!0),r+=4),l=new DataView(e,r,12),a.height=l.getUint32(0,!0),a.width=l.getUint32(4,!0),r+=8,f>=4?(a.numDims=l.getUint32(8,!0),r+=4):a.numDims=1,l=new DataView(e,r,40),a.numValidPixel=l.getUint32(0,!0),a.microBlockSize=l.getInt32(4,!0),a.blobSize=l.getInt32(8,!0),a.imageType=l.getInt32(12,!0),a.maxZError=l.getFloat64(16,!0),a.zMin=l.getFloat64(24,!0),a.zMax=l.getFloat64(32,!0),r+=40,t.headerInfo=a,t.ptr=r,f>=3&&(s=f>=4?52:48,n=this.computeChecksumFletcher32(new Uint8Array(e,r-s,a.blobSize-14)),n!==a.checksum))throw"Checksum failed.";return!0},checkMinMaxRanges:function(e,t){var r=t.headerInfo,i=this.getDataTypeArray(r.imageType),a=r.numDims*this.getDataTypeSize(r.imageType),n=this.readSubArray(e,t.ptr,i,a),s=this.readSubArray(e,t.ptr+a,i,a);t.ptr+=2*a;var l,f=!0;for(l=0;l<r.numDims;l++)if(n[l]!==s[l]){f=!1;break}return r.minValues=n,r.maxValues=s,f},readSubArray:function(e,t,r,i){var a;if(r===Uint8Array)a=new Uint8Array(e,t,i);else{var n=new ArrayBuffer(i),s=new Uint8Array(n);s.set(new Uint8Array(e,t,i)),a=new r(n)}return a},readMask:function(e,t){var r,i,a=t.ptr,n=t.headerInfo,s=n.width*n.height,l=n.numValidPixel,f=new DataView(e,a,4),o={};if(o.numBytes=f.getUint32(0,!0),a+=4,(0===l||s===l)&&0!==o.numBytes)throw"invalid mask";if(0===l)r=new Uint8Array(Math.ceil(s/8)),o.bitset=r,i=new Uint8Array(s),t.pixels.resultMask=i,a+=o.numBytes;else if(o.numBytes>0){r=new Uint8Array(Math.ceil(s/8)),f=new DataView(e,a,o.numBytes);var u=f.getInt16(0,!0),c=2,d=0,h=0;do{if(u>0)while(u--)r[d++]=f.getUint8(c++);else{h=f.getUint8(c++),u=-u;while(u--)r[d++]=h}u=f.getInt16(c,!0),c+=2}while(c<o.numBytes);if(-32768!==u||d<r.length)throw"Unexpected end of mask RLE encoding";i=new Uint8Array(s);var m=0,p=0;for(p=0;p<s;p++)7&p?(m=r[p>>3],m<<=7&p):m=r[p>>3],128&m&&(i[p]=1);t.pixels.resultMask=i,o.bitset=r,a+=o.numBytes}return t.ptr=a,t.mask=o,!0},readDataOneSweep:function(e,r,i,a){var n,s=r.ptr,l=r.headerInfo,f=l.numDims,o=l.width*l.height,u=l.imageType,c=l.numValidPixel*t.getDataTypeSize(u)*f,d=r.pixels.resultMask;if(i===Uint8Array)n=new Uint8Array(e,s,c);else{var h=new ArrayBuffer(c),m=new Uint8Array(h);m.set(new Uint8Array(e,s,c)),n=new i(h)}if(n.length===o*f)r.pixels.resultPixels=a?t.swapDimensionOrder(n,o,f,i,!0):n;else{r.pixels.resultPixels=new i(o*f);var p=0,g=0,w=0,x=0;if(f>1){if(a){for(g=0;g<o;g++)if(d[g])for(x=g,w=0;w<f;w++,x+=o)r.pixels.resultPixels[x]=n[p++]}else for(g=0;g<o;g++)if(d[g])for(x=g*f,w=0;w<f;w++)r.pixels.resultPixels[x+w]=n[p++]}else for(g=0;g<o;g++)d[g]&&(r.pixels.resultPixels[g]=n[p++])}return s+=c,r.ptr=s,!0},readHuffmanTree:function(e,i){var a=this.HUFFMAN_LUT_BITS_MAX,n=new DataView(e,i.ptr,16);i.ptr+=16;var s=n.getInt32(0,!0);if(s<2)throw"unsupported Huffman version";var l=n.getInt32(4,!0),f=n.getInt32(8,!0),o=n.getInt32(12,!0);if(f>=o)return!1;var u=new Uint32Array(o-f);t.decodeBits(e,i,u);var c,d,h,m,p=[];for(c=f;c<o;c++)d=c-(c<l?0:l),p[d]={first:u[c-f],second:null};var g=e.byteLength-i.ptr,w=Math.ceil(g/4),x=new ArrayBuffer(4*w),k=new Uint8Array(x);k.set(new Uint8Array(e,i.ptr,g));var y,b=new Uint32Array(x),v=0,U=0;for(y=b[0],c=f;c<o;c++)d=c-(c<l?0:l),m=p[d].first,m>0&&(p[d].second=y<<v>>>32-m,32-v>=m?(v+=m,32===v&&(v=0,U++,y=b[U])):(v+=m-32,U++,y=b[U],p[d].second|=y>>>32-v));var I=0,V=0,M=new r;for(c=0;c<p.length;c++)void 0!==p[c]&&(I=Math.max(I,p[c].first));V=I>=a?a:I;var D,A,B,P,T,S,z=[];for(c=f;c<o;c++)if(d=c-(c<l?0:l),m=p[d].first,m>0)if(D=[m,d],m<=V)for(A=p[d].second<<V-m,B=1<<V-m,h=0;h<B;h++)z[A|h]=D;else for(A=p[d].second,S=M,P=m-1;P>=0;P--)T=A>>>P&1,T?(S.right||(S.right=new r),S=S.right):(S.left||(S.left=new r),S=S.left),0!==P||S.val||(S.val=D[1]);return{decodeLut:z,numBitsLUTQick:V,numBitsLUT:I,tree:M,stuffedData:b,srcPtr:U,bitPos:v}},readHuffman:function(e,r,i,a){var n,s,l,f,o,u,c,d,h,m,p=r.headerInfo,g=p.numDims,w=r.headerInfo.height,x=r.headerInfo.width,k=x*w,y=this.readHuffmanTree(e,r),b=y.decodeLut,v=y.tree,U=y.stuffedData,I=y.srcPtr,V=y.bitPos,M=y.numBitsLUTQick,D=y.numBitsLUT,A=0===r.headerInfo.imageType?128:0,B=r.pixels.resultMask,P=0;V>0&&(I++,V=0);var T,S=U[I],z=1===r.encodeMode,C=new i(k*g),F=C;if(g<2||z){for(T=0;T<g;T++)if(g>1&&(F=new i(C.buffer,k*T,k),P=0),r.headerInfo.numValidPixel===x*w)for(h=0,c=0;c<w;c++)for(d=0;d<x;d++,h++){if(s=0,f=S<<V>>>32-M,o=f,32-V<M&&(f|=U[I+1]>>>64-V-M,o=f),b[o])s=b[o][1],V+=b[o][0];else for(f=S<<V>>>32-D,o=f,32-V<D&&(f|=U[I+1]>>>64-V-D,o=f),n=v,m=0;m<D;m++)if(u=f>>>D-m-1&1,n=u?n.right:n.left,!n.left&&!n.right){s=n.val,V=V+m+1;break}V>=32&&(V-=32,I++,S=U[I]),l=s-A,z?(l+=d>0?P:c>0?F[h-x]:P,l&=255,F[h]=l,P=l):F[h]=l}else for(h=0,c=0;c<w;c++)for(d=0;d<x;d++,h++)if(B[h]){if(s=0,f=S<<V>>>32-M,o=f,32-V<M&&(f|=U[I+1]>>>64-V-M,o=f),b[o])s=b[o][1],V+=b[o][0];else for(f=S<<V>>>32-D,o=f,32-V<D&&(f|=U[I+1]>>>64-V-D,o=f),n=v,m=0;m<D;m++)if(u=f>>>D-m-1&1,n=u?n.right:n.left,!n.left&&!n.right){s=n.val,V=V+m+1;break}V>=32&&(V-=32,I++,S=U[I]),l=s-A,z?(d>0&&B[h-1]?l+=P:c>0&&B[h-x]?l+=F[h-x]:l+=P,l&=255,F[h]=l,P=l):F[h]=l}}else for(h=0,c=0;c<w;c++)for(d=0;d<x;d++)if(h=c*x+d,!B||B[h])for(T=0;T<g;T++,h+=k){if(s=0,f=S<<V>>>32-M,o=f,32-V<M&&(f|=U[I+1]>>>64-V-M,o=f),b[o])s=b[o][1],V+=b[o][0];else for(f=S<<V>>>32-D,o=f,32-V<D&&(f|=U[I+1]>>>64-V-D,o=f),n=v,m=0;m<D;m++)if(u=f>>>D-m-1&1,n=u?n.right:n.left,!n.left&&!n.right){s=n.val,V=V+m+1;break}V>=32&&(V-=32,I++,S=U[I]),l=s-A,F[h]=l}r.ptr=r.ptr+4*(I+1)+(V>0?4:0),r.pixels.resultPixels=C,g>1&&!a&&(r.pixels.resultPixels=t.swapDimensionOrder(C,k,g,i))},decodeBits:function(t,r,i,a,n){var s=r.headerInfo,l=s.fileVersion,f=0,o=t.byteLength-r.ptr>=5?5:t.byteLength-r.ptr,u=new DataView(t,r.ptr,o),c=u.getUint8(0);f++;var d=c>>6,h=0===d?4:3-d,m=(32&c)>0,p=31&c,g=0;if(1===h)g=u.getUint8(f),f++;else if(2===h)g=u.getUint16(f,!0),f+=2;else{if(4!==h)throw"Invalid valid pixel count type";g=u.getUint32(f,!0),f+=4}var w,x,k,y,b,v,U,I,V,M=2*s.maxZError,D=s.numDims>1?s.maxValues[n]:s.zMax;if(m){r.counter.lut++,I=u.getUint8(f),p,f++,y=Math.ceil((I-1)*p/8),b=Math.ceil(y/4),x=new ArrayBuffer(4*b),k=new Uint8Array(x),r.ptr+=f,k.set(new Uint8Array(t,r.ptr,y)),U=new Uint32Array(x),r.ptr+=y,V=0;while(I-1>>>V)V++;y=Math.ceil(g*V/8),b=Math.ceil(y/4),x=new ArrayBuffer(4*b),k=new Uint8Array(x),k.set(new Uint8Array(t,r.ptr,y)),w=new Uint32Array(x),r.ptr+=y,v=l>=3?e.unstuffLUT2(U,p,I-1,a,M,D):e.unstuffLUT(U,p,I-1,a,M,D),l>=3?e.unstuff2(w,i,V,g,v):e.unstuff(w,i,V,g,v)}else r.counter.bitstuffer++,V=p,r.ptr+=f,V>0&&(y=Math.ceil(g*V/8),b=Math.ceil(y/4),x=new ArrayBuffer(4*b),k=new Uint8Array(x),k.set(new Uint8Array(t,r.ptr,y)),w=new Uint32Array(x),r.ptr+=y,l>=3?null==a?e.originalUnstuff2(w,i,V,g):e.unstuff2(w,i,V,g,!1,a,M,D):null==a?e.originalUnstuff(w,i,V,g):e.unstuff(w,i,V,g,!1,a,M,D))},readTiles:function(e,r,i,a){var n=r.headerInfo,s=n.width,l=n.height,f=s*l,o=n.microBlockSize,u=n.imageType,c=t.getDataTypeSize(u),d=Math.ceil(s/o),h=Math.ceil(l/o);r.pixels.numBlocksY=h,r.pixels.numBlocksX=d,r.pixels.ptr=0;var m,p,g,w,x,k,y,b,v,U,I,V=0,M=0,D=0,A=0,B=0,P=0,T=0,S=0,z=0,C=0,F=0,L=0,O=0,E=0,X=0,Y=0,Z=new i(o*o),H=l%o||o,_=s%o||o,N=n.numDims,R=r.pixels.resultMask,Q=r.pixels.resultPixels,j=n.fileVersion,$=j>=5?14:15,q=n.zMax;for(D=0;D<h;D++)for(B=D!==h-1?o:H,A=0;A<d;A++)for(P=A!==d-1?o:_,F=D*s*o+A*o,L=s-P,v=0;v<N;v++){if(N>1?(I=Q,F=D*s*o+A*o,Q=new i(r.pixels.resultPixels.buffer,f*v*c,f),q=n.maxValues[v]):I=null,T=e.byteLength-r.ptr,m=new DataView(e,r.ptr,Math.min(10,T)),p={},Y=0,S=m.getUint8(0),Y++,U=n.fileVersion>=5?4&S:0,z=S>>6&255,C=S>>2&$,C!==(A*o>>3&$))throw"integrity issue";if(U&&0===v)throw"integrity issue";if(k=3&S,k>3)throw r.ptr+=Y,"Invalid block encoding ("+k+")";if(2!==k)if(0===k){if(U)throw"integrity issue";if(r.counter.uncompressed++,r.ptr+=Y,O=B*P*c,E=e.byteLength-r.ptr,O=O<E?O:E,g=new ArrayBuffer(O%c===0?O:O+c-O%c),w=new Uint8Array(g),w.set(new Uint8Array(e,r.ptr,O)),x=new i(g),X=0,R)for(V=0;V<B;V++){for(M=0;M<P;M++)R[F]&&(Q[F]=x[X++]),F++;F+=L}else for(V=0;V<B;V++){for(M=0;M<P;M++)Q[F++]=x[X++];F+=L}r.ptr+=X*c}else if(y=t.getDataTypeUsed(U&&u<6?4:u,z),b=t.getOnePixel(p,Y,y,m),Y+=t.getDataTypeSize(y),3===k)if(r.ptr+=Y,r.counter.constantoffset++,R)for(V=0;V<B;V++){for(M=0;M<P;M++)R[F]&&(Q[F]=U?Math.min(q,I[F]+b):b),F++;F+=L}else for(V=0;V<B;V++){for(M=0;M<P;M++)Q[F]=U?Math.min(q,I[F]+b):b,F++;F+=L}else if(r.ptr+=Y,t.decodeBits(e,r,Z,b,v),Y=0,U)if(R)for(V=0;V<B;V++){for(M=0;M<P;M++)R[F]&&(Q[F]=Z[Y++]+I[F]),F++;F+=L}else for(V=0;V<B;V++){for(M=0;M<P;M++)Q[F]=Z[Y++]+I[F],F++;F+=L}else if(R)for(V=0;V<B;V++){for(M=0;M<P;M++)R[F]&&(Q[F]=Z[Y++]),F++;F+=L}else for(V=0;V<B;V++){for(M=0;M<P;M++)Q[F++]=Z[Y++];F+=L}else{if(U)if(R)for(V=0;V<B;V++)for(M=0;M<P;M++)R[F]&&(Q[F]=I[F]),F++;else for(V=0;V<B;V++)for(M=0;M<P;M++)Q[F]=I[F],F++;r.counter.constant++,r.ptr+=Y}}N>1&&!a&&(r.pixels.resultPixels=t.swapDimensionOrder(r.pixels.resultPixels,f,N,i))},formatFileInfo:function(e){return{fileIdentifierString:e.headerInfo.fileIdentifierString,fileVersion:e.headerInfo.fileVersion,imageType:e.headerInfo.imageType,height:e.headerInfo.height,width:e.headerInfo.width,numValidPixel:e.headerInfo.numValidPixel,microBlockSize:e.headerInfo.microBlockSize,blobSize:e.headerInfo.blobSize,maxZError:e.headerInfo.maxZError,pixelType:t.getPixelType(e.headerInfo.imageType),eofOffset:e.eofOffset,mask:e.mask?{numBytes:e.mask.numBytes}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,maxValue:e.headerInfo.zMax,minValue:e.headerInfo.zMin,noDataValue:e.noDataValue}}},constructConstantSurface:function(e,t){var r=e.headerInfo.zMax,i=e.headerInfo.zMin,a=e.headerInfo.maxValues,n=e.headerInfo.numDims,s=e.headerInfo.height*e.headerInfo.width,l=0,f=0,o=0,u=e.pixels.resultMask,c=e.pixels.resultPixels;if(u)if(n>1){if(t)for(l=0;l<n;l++)for(o=l*s,r=a[l],f=0;f<s;f++)u[f]&&(c[o+f]=r);else for(f=0;f<s;f++)if(u[f])for(o=f*n,l=0;l<n;l++)c[o+n]=a[l]}else for(f=0;f<s;f++)u[f]&&(c[f]=r);else if(n>1&&i!==r)if(t)for(l=0;l<n;l++)for(o=l*s,r=a[l],f=0;f<s;f++)c[o+f]=r;else for(f=0;f<s;f++)for(o=f*n,l=0;l<n;l++)c[o+l]=a[l];else for(f=0;f<s*n;f++)c[f]=r},getDataTypeArray:function(e){var t;switch(e){case 0:t=Int8Array;break;case 1:t=Uint8Array;break;case 2:t=Int16Array;break;case 3:t=Uint16Array;break;case 4:t=Int32Array;break;case 5:t=Uint32Array;break;case 6:t=Float32Array;break;case 7:t=Float64Array;break;default:t=Float32Array}return t},getPixelType:function(e){var t;switch(e){case 0:t="S8";break;case 1:t="U8";break;case 2:t="S16";break;case 3:t="U16";break;case 4:t="S32";break;case 5:t="U32";break;case 6:t="F32";break;case 7:t="F64";break;default:t="F32"}return t},isValidPixelValue:function(e,t){if(null==t)return!1;var r;switch(e){case 0:r=t>=-128&&t<=127;break;case 1:r=t>=0&&t<=255;break;case 2:r=t>=-32768&&t<=32767;break;case 3:r=t>=0&&t<=65536;break;case 4:r=t>=-2147483648&&t<=2147483647;break;case 5:r=t>=0&&t<=4294967296;break;case 6:r=t>=-34027999387901484e22&&t<=34027999387901484e22;break;case 7:r=t>=-17976931348623157e292&&t<=17976931348623157e292;break;default:r=!1}return r},getDataTypeSize:function(e){var t=0;switch(e){case 0:case 1:t=1;break;case 2:case 3:t=2;break;case 4:case 5:case 6:t=4;break;case 7:t=8;break;default:t=e}return t},getDataTypeUsed:function(e,t){var r=e;switch(e){case 2:case 4:r=e-t;break;case 3:case 5:r=e-2*t;break;case 6:r=0===t?e:1===t?2:1;break;case 7:r=0===t?e:e-2*t+1;break;default:r=e;break}return r},getOnePixel:function(e,t,r,i){var a=0;switch(r){case 0:a=i.getInt8(t);break;case 1:a=i.getUint8(t);break;case 2:a=i.getInt16(t,!0);break;case 3:a=i.getUint16(t,!0);break;case 4:a=i.getInt32(t,!0);break;case 5:a=i.getUInt32(t,!0);break;case 6:a=i.getFloat32(t,!0);break;case 7:a=i.getFloat64(t,!0);break;default:throw"the decoder does not understand this pixel type"}return a},swapDimensionOrder:function(e,t,r,i,a){var n=0,s=0,l=0,f=0,o=e;if(r>1)if(o=new i(t*r),a)for(n=0;n<t;n++)for(f=n,l=0;l<r;l++,f+=t)o[f]=e[s++];else for(n=0;n<t;n++)for(f=n,l=0;l<r;l++,f+=t)o[s++]=e[f];return o}},r=function(e,t,r){this.val=e,this.left=t,this.right=r},i={decode:function(e,r){r=r||{};var i=r.noDataValue,a=0,n={};if(n.ptr=r.inputOffset||0,n.pixels={},t.readHeaderInfo(e,n)){var s=n.headerInfo,l=s.fileVersion,f=t.getDataTypeArray(s.imageType);if(l>5)throw"unsupported lerc version 2."+l;t.readMask(e,n),s.numValidPixel===s.width*s.height||n.pixels.resultMask||(n.pixels.resultMask=r.maskData);var o=s.width*s.height;n.pixels.resultPixels=new f(o*s.numDims),n.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0};var u,c=!r.returnPixelInterleavedDims;if(0!==s.numValidPixel)if(s.zMax===s.zMin)t.constructConstantSurface(n,c);else if(l>=4&&t.checkMinMaxRanges(e,n))t.constructConstantSurface(n,c);else{var d=new DataView(e,n.ptr,2),h=d.getUint8(0);if(n.ptr++,h)t.readDataOneSweep(e,n,f,c);else if(l>1&&s.imageType<=1&&Math.abs(s.maxZError-.5)<1e-5){var m=d.getUint8(1);if(n.ptr++,n.encodeMode=m,m>2||l<4&&m>1)throw"Invalid Huffman flag "+m;m?t.readHuffman(e,n,f,c):t.readTiles(e,n,f,c)}else t.readTiles(e,n,f,c)}n.eofOffset=n.ptr,r.inputOffset?(u=n.headerInfo.blobSize+r.inputOffset-n.ptr,Math.abs(u)>=1&&(n.eofOffset=r.inputOffset+n.headerInfo.blobSize)):(u=n.headerInfo.blobSize-n.ptr,Math.abs(u)>=1&&(n.eofOffset=n.headerInfo.blobSize));var p={width:s.width,height:s.height,pixelData:n.pixels.resultPixels,minValue:s.zMin,maxValue:s.zMax,validPixelCount:s.numValidPixel,dimCount:s.numDims,dimStats:{minValues:s.minValues,maxValues:s.maxValues},maskData:n.pixels.resultMask};if(n.pixels.resultMask&&t.isValidPixelValue(s.imageType,i)){var g=n.pixels.resultMask;for(a=0;a<o;a++)g[a]||(p.pixelData[a]=i);p.noDataValue=i}return n.noDataValue=i,r.returnFileInfo&&(p.fileInfo=t.formatFileInfo(n)),p}},getBandCount:function(e){var r=0,i=0,a={ptr:0,pixels:{}};while(i<e.byteLength-58)t.readHeaderInfo(e,a),i+=a.headerInfo.blobSize,r++,a.ptr=i;return r}};return i}(),s=function(){var e=new ArrayBuffer(4),t=new Uint8Array(e),r=new Uint32Array(e);return r[0]=1,1===t[0]}(),l={decode:function(e,t){if(!s)throw"Big endian system is not supported.";t=t||{};var r,i,l=t.inputOffset||0,f=new Uint8Array(e,l,10),o=String.fromCharCode.apply(null,f);if("CntZImage"===o.trim())r=a,i=1;else{if("Lerc2"!==o.substring(0,5))throw"Unexpected file identifier string: "+o;r=n,i=2}var u,c,d,h,m,p,g=0,w=e.byteLength-10,x=[],k={width:0,height:0,pixels:[],pixelType:t.pixelType,mask:null,statistics:[]},y=0;while(l<w){var b=r.decode(e,{inputOffset:l,encodedMaskData:u,maskData:d,returnMask:0===g,returnEncodedMask:0===g,returnFileInfo:!0,returnPixelInterleavedDims:t.returnPixelInterleavedDims,pixelType:t.pixelType||null,noDataValue:t.noDataValue||null});l=b.fileInfo.eofOffset,d=b.maskData,0===g&&(u=b.encodedMaskData,k.width=b.width,k.height=b.height,k.dimCount=b.dimCount||1,k.pixelType=b.pixelType||b.fileInfo.pixelType,k.mask=d),i>1&&(d&&x.push(d),b.fileInfo.mask&&b.fileInfo.mask.numBytes>0&&y++),g++,k.pixels.push(b.pixelData),k.statistics.push({minValue:b.minValue,maxValue:b.maxValue,noDataValue:b.noDataValue,dimStats:b.dimStats})}if(i>1&&y>1){for(p=k.width*k.height,k.bandMasks=x,d=new Uint8Array(p),d.set(x[0]),h=1;h<x.length;h++)for(c=x[h],m=0;m<p;m++)d[m]=d[m]&c[m];k.maskData=d}return k}};r=[],i=function(){return l}.apply(t,r),void 0===i||(e.exports=i)})()},74173:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var i=r(27885),a=r(67197),n=r(3704),s=r(82499);class l extends n.Z{constructor(e){super(),this.planarConfiguration="undefined"!==typeof e.PlanarConfiguration?e.PlanarConfiguration:1,this.samplesPerPixel="undefined"!==typeof e.SamplesPerPixel?e.SamplesPerPixel:1,this.addCompression=e.LercParameters[s.L5.AddCompression]}decodeBlock(e){switch(this.addCompression){case s.Qb.None:break;case s.Qb.Deflate:e=(0,i.rr)(new Uint8Array(e)).buffer;break;default:throw new Error(`Unsupported LERC additional compression method identifier: ${this.addCompression}`)}const t=a.decode(e,{returnPixelInterleavedDims:1===this.planarConfiguration}),r=t.pixels[0];return r.buffer}}}}]);
//# sourceMappingURL=173-legacy.559ea71f.js.map