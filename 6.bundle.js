webpackJsonp([6],{105:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(0),u=i(s),c=n(94),p=(i(c),n(95)),f=(i(p),n(106)),M=i(f),d=n(84),g=i(d),m=n(109),h=i(m),y=n(81);n(112);var j=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return window.recommendpage=n,n.state={datas:null},n}return a(t,e),l(t,[{key:"componentWillMount",value:function(){(0,y.Jsonp)("/getrmd")}},{key:"render",value:function(){return this.state.datas?u.default.createElement("div",null,u.default.createElement(M.default,{datas:this.state.datas.rmdlist}),u.default.createElement("div",{className:"lastest-music"},u.default.createElement("h2",{className:"rmd-songs-title"},"最新音乐"),u.default.createElement(g.default,{datas:this.state.datas.sglist,num:!1})),u.default.createElement(h.default,null)):null}}]),t}(s.Component);t.default=j},106:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(l);n(107);var u=function(e){function t(e){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),a(t,[{key:"formatNumber",value:function(e){var t=e/1e4;return e>1?(t=String(t),Number(t.match(/\d+\.\d/)[0])+"万"):e}},{key:"render",value:function(){var e=this,t=this.props.datas[0].map(function(t,n){var i;return i=t.highQuality?s.default.createElement("div",{className:"hq-icon"}):null,s.default.createElement("li",{key:n},s.default.createElement("a",{href:"/#/playlist"+t.id},s.default.createElement("div",{className:"si-wrap"},s.default.createElement("img",{src:t.picUrl}),s.default.createElement("p",null,t.name),i,s.default.createElement("span",{className:"playcount"},e.formatNumber(t.playCount)))))}),n=this.props.datas[1].map(function(t,n){var i;return i=t.highQuality?s.default.createElement("div",{className:"hq-icon"}):null,s.default.createElement("li",{key:n},s.default.createElement("a",{href:"/#/playlist"+t.id},s.default.createElement("div",{className:"si-wrap"},s.default.createElement("img",{src:t.picUrl}),s.default.createElement("p",null,t.name),i,s.default.createElement("span",{className:"playcount"},e.formatNumber(t.playCount)))))});return s.default.createElement("div",{className:"rmd-songs"},s.default.createElement("h2",{className:"rmd-songs-title"},"推荐歌单"),s.default.createElement("ul",{className:"rmd-songs-ul"},t),s.default.createElement("ul",{className:"rmd-songs-ul"},n))}}]),t}(l.Component);t.default=u},107:function(e,t,n){var i=n(108);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0};r.transform=void 0;n(80)(i,r);i.locals&&(e.exports=i.locals)},108:function(e,t,n){t=e.exports=n(79)(!1),t.push([e.i,'.rmd-songs{margin-top:104px;background-color:#fcfcfd;padding-top:20px}.rmd-songs-title{font-size:17px;font-weight:400;height:20px;line-height:18px;position:relative;padding-left:9px;margin-bottom:14px;color:#333}.rmd-songs-title:after{content:"";display:block;width:2px;background-color:#d43c33;height:16px;position:absolute;left:0;top:50%;margin-top:-9px}.rmd-songs-ul:after{content:"";display:block;clear:both}.rmd-songs-ul{list-style:none;padding:0;padding-bottom:16px;width:100%}.rmd-songs-ul li div p{font-size:13px;overflow:hidden;display:-webkit-box;padding:6px 2px 0 6px}.rmd-songs-ul li div img{width:100%;vertical-align:top}.rmd-songs-ul li{float:left;width:33%;margin-right:.5%;position:relative}.rmd-songs-ul li:last-child{margin-right:0}.playcount{position:absolute;top:0;right:0;font-size:12px;color:#fff;display:inline-block;padding:2px 4px;padding-left:13px;background-position:0;background-size:11px 10px;background-repeat:no-repeat;z-index:1;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PGcgb3BhY2l0eT0iLjE1Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwNDAwMDAiIGQ9Im0yMiAxNi43NzdjMCAxLjIzMy0xLjEyMSAyLjIzMy0yLjUwNiAyLjIzMy0xLjM4NCAwLTIuNTA2LTEtMi41MDYtMi4yMzN2LTIuNTUzYzAtMS4yMzQgMS4xMjItMi4yMzMgMi41MDYtMi4yMzMuMTc0IDAgLjM0My4wMTcuNTA2LjA0NnYtMS4zN2gtLjAzM2MuMDE3LS4yMi4wMzMtLjQ0MS4wMzMtLjY2NiAwLTQuNDE4LTMuNTgyLTgtOC04LTQuNDE4IDAtOCAzLjU4Mi04IDggMCAuMjI1LjAxNi40NDYuMDM0LjY2NmgtLjAzNHYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzcy0yLjUwNS0uOTk5LTIuNTA1LTIuMjMzdi0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43My0uMDg1LS4xNDgtLjE0OC0uMzEtLjE0OC0uNDkzdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMCA1LjUyMyAwIDEwIDQuNDc3IDEwIDEwIDAgLjA5LS4wMDkuMTc4LS4wMTQuMjY2LjAwMi4wMjQuMDE0LjA0NC4wMTQuMDY3djJjMCAuMzA2LS4xNDUuNTY5LS4zNi43NTMuMjI0LjMzNC4zNi43Mi4zNiAxLjEzOHYyLjU1MiIvPjwvZz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZmYiIGQ9Im0yMCAxNi43NzdjMCAxLjIzMy0xLjEyMSAyLjIzMy0yLjUwNiAyLjIzMy0xLjM4NCAwLTIuNTA2LTEtMi41MDYtMi4yMzN2LTIuNTUzYzAtMS4yMzQgMS4xMjItMi4yMzMgMi41MDYtMi4yMzMuMTc0IDAgLjM0My4wMTcuNTA2LjA0NnYtMS4zN2gtLjAzM2MuMDE3LS4yMi4wMzMtLjQ0MS4wMzMtLjY2NiAwLTQuNDE4LTMuNTgyLTgtOC04LTQuNDE4IDAtOCAzLjU4Mi04IDggMCAuMjI1LjAxNi40NDYuMDM0LjY2NmgtLjAzNHYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzcy0yLjUwNS0uOTk5LTIuNTA1LTIuMjMzdi0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43My0uMDg1LS4xNDgtLjE0OC0uMzEtLjE0OC0uNDkzdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMCA1LjUyMyAwIDEwIDQuNDc3IDEwIDEwIDAgLjA5LS4wMDkuMTc4LS4wMTQuMjY2LjAwMi4wMjQuMDE0LjA0NC4wMTQuMDY3djJjMCAuMzA2LS4xNDUuNTY5LS4zNi43NTMuMjI0LjMzNC4zNi43Mi4zNiAxLjEzOHYyLjU1MiIvPjwvc3ZnPg==)}.si-wrap{position:relative}.si-wrap:after{content:"";width:100%;background-image:linear-gradient(180deg,rgba(0,0,0,.2),transparent);z-index:0}.hq-icon,.si-wrap:after{height:20px;position:absolute;top:0;left:0}.hq-icon{width:20px;background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZTBhNjVhIiBkPSJtNjAtLjAwMDFoLTYwdjYwbDYwLTYwIi8+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0ibTI0Ljg0MSAxMi4zMmwzLjU0NCA0Ljk2Mi0xMS4xIDExLjEtNC44NTMtMy40NjYgMi4yNzktLjI0OCAyLjA1NC0uMjI0LS4yOTEtMi4wNDYtLjkzNS02LjU4NCA2LjY5Mi45NSAyLjAxLjI4Ni4yNTUtMi4wMS4zNDctMi43MTltLTEuMzQyLTUuMzJsLS45ODYgNy43ODctOS4zMjgtMS4zMjUgMS4zMDkgOS4yMi03LjQ5NC44MTYgMTAuNDk5IDcuNSAxMy40OTktMTMuNDk5LTcuNDk5LTEwLjQ5OXoiLz48cGF0aCBkPSJtMTIuNjI1IDExLjI1Yy43NTggMCAxLjM3NS42MTcgMS4zNzUgMS4zNzUgMCAuNzU3LS42MTcgMS4zNzMtMS4zNzUgMS4zNzNzLTEuMzc1LS42MTYtMS4zNzUtMS4zNzNjMC0uNzU4LjYxNy0xLjM3NSAxLjM3NS0xLjM3NW0wLTJjLTEuODY0IDAtMy4zNzUgMS41MS0zLjM3NSAzLjM3NSAwIDEuODY0IDEuNTExIDMuMzczIDMuMzc1IDMuMzczczMuMzc1LTEuNTA5IDMuMzc1LTMuMzczYy0uMDAwMS0xLjg2NS0xLjUxMi0zLjM3NS0zLjM3NS0zLjM3NXoiLz48L2c+PC9zdmc+) 0 no-repeat}.rmd-songs-ul li a{display:block;text-decoration:none;color:#333}',""])},109:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(l);n(110);var u=function(e){function t(e){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),a(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"footer"},s.default.createElement("img",{src:"static/rmd_bg.png"}))}}]),t}(l.Component);t.default=u},110:function(e,t,n){var i=n(111);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0};r.transform=void 0;n(80)(i,r);i.locals&&(e.exports=i.locals)},111:function(e,t,n){t=e.exports=n(79)(!1),t.push([e.i,".footer{width:100%}.footer img{width:100%;vertical-align:top}",""])},112:function(e,t,n){var i=n(113);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0};r.transform=void 0;n(80)(i,r);i.locals&&(e.exports=i.locals)},113:function(e,t,n){t=e.exports=n(79)(!1),t.push([e.i,"*{margin:0}.lastest-music{padding-top:24px}body{font-family:Helvetica,sans-serif;background-color:#fcfcfd}",""])},81:function(e,t,n){"use strict";function i(e){var t=document.createElement("script");t.src=u.config.Apihost+e,document.body.insertBefore(t,document.body.firstChild),window.scripts.push(t)}function r(e){var t=e/1e4;return e>1?(t=String(t),Number(t.match(/\d+\.\d/)[0])+"万"):e}function o(e){var t=4==e.userType,n=1==e.authStatus,i=!!(e.expertTags&&e.expertTags.length>0),r=!!(e.experts&&Object.getOwnPropertyNames(e.experts).length>0);return t?"musican":n?"vip":i||r?"daren":"noicon"}function a(e,t){function n(e){var a=e.search(i);if(-1==a)return void o.push(e);0==a?(o.push(r),n(e.slice(t.length))):(o.push(e.slice(0,a)),o.push(r),n(e.slice(a+t.length)))}var i=new RegExp(t),r=s.default.createElement("span",{className:"llt-highlight"},t),o=[];return n(e),o}Object.defineProperty(t,"__esModule",{value:!0}),t.findhighlight=t.getUserType=t.formatNumber=t.Jsonp=void 0;var l=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(l),u=n(87);t.Jsonp=i,t.formatNumber=r,t.getUserType=o,t.findhighlight=a},84:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(l);n(85);var u=n(81),c=function(e){function t(e){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),a(t,[{key:"formatArtistRow",value:function(e){var t=e.artists[0].name;if(e.artists.length>1)for(var n=1;n<e.artists.length;n++)t=t+" / "+e.artists[n].name;return t=t+" - "+e.album.name,this.props.highlight&&(t=(0,u.findhighlight)(t,this.props.highlight)),t}},{key:"getSongstatus",value:function(e){return 100==function(e){if(!e)return 0;var t=e.privilege;if(t)return t.st<0?100:t.fee>0&&8!=t.fee&&0==t.payed?10:16==t.fee?11:(0==t.fee||t.payed>0)&&t.pl>0&&0==t.dl?1e3:0==t.pl&&0==t.dl?100:0;var n=e.status;return n?n<0?e.fee>0?10:100:0:e.st&&e.st<0?e.fee>0?10:100:0}(e)&&-2!==function(e){e=e||{};var t="",n=0;return-300==e.st?(t="版权方要求，该歌曲仅能通过网易云音乐APP播放",n=-2):4==e.fee&&0==e.pl?(t="购买",n=2):e.fee>0&&0==e.pl?(t="会员",n=3):e.fee>0&&8!=e.fee&&32!=e.fee&&e.pl<=0?(t="唱片公司要求该歌曲须付费，打开网易云音乐购买后即可自由畅享",n=1):e.pl<=0&&(t="由于版权保护，您所在的地区暂时无法使用",n=-1),{msg:t,modal:n}}(e).modal}},{key:"render",value:function(){var e=this;if(!this.props.datas)return null;var t=this.props.datas.map(function(t,n){var i;if(t.song.alias.length>0){var r=e.props.highlight?(0,u.findhighlight)(t.song.alias[0],e.props.highlight):t.song.alias[0];i=s.default.createElement("span",{className:"sg-alias"},"("+r+")")}else i=null;var o;o="999000"==t.song.privilege.maxbr?s.default.createElement("span",{className:"sq-icon"}):null;var a;if(e.props.num){var l;l=n<=2?"sl-num hot3":"sl-num";var c=n+1;-1==String(c).search(/\d{2}/)&&(c="0"+c),a=s.default.createElement("div",{className:l},c)}else a=null;var p;return p=e.props.cover?s.default.createElement("img",{className:"sgl-cover-wrap",src:t.song.album.picUrl}):null,s.default.createElement("li",{key:n,className:e.getSongstatus(t.song.privilege)?"item-disable":""},s.default.createElement("a",{href:"/#/song"+t.id},s.default.createElement("div",{className:"songitem"},a,p,s.default.createElement("div",{className:"sgitem-subwrap"},s.default.createElement("div",{className:"song-title"},s.default.createElement("span",null,e.props.highlight?(0,u.findhighlight)(t.name,e.props.highlight):t.name),i),s.default.createElement("div",{className:"song-info"},e.props.sq?null:o,e.formatArtistRow(t.song))),s.default.createElement("div",{className:"sg-play-btn"},s.default.createElement("span",null)))))});return s.default.createElement("ul",{className:"ltt-music-list theme-"+this.props.theme},t)}}]),t}(l.Component);t.default=c},85:function(e,t,n){var i=n(86);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0};r.transform=void 0;n(80)(i,r);i.locals&&(e.exports=i.locals)},86:function(e,t,n){t=e.exports=n(79)(!1),t.push([e.i,'.ltt-music-list{list-style:none;padding:0}.ltt-music-list li{height:55px;position:relative}.ltt-music-list li a{display:block;width:100%;height:100%;text-decoration:none}.song-title{font-size:17px;color:#333;line-height:1.5}.song-info,.song-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.song-info{color:#888;font-size:12px}.sq-icon{width:12px;height:8px;display:inline-block;background-image:url(/static/icon.png);background-position:0 0;background-size:166px 97px;margin-right:5px}.songitem{width:100%;height:100%;position:relative;padding:6px 0 6px 10px;box-sizing:border-box;display:flex}.songitem:after{content:"";display:block;position:absolute;z-index:0;left:0;top:0;width:300%;height:300%;transform:scale(.3333);transform-origin:top left;border-bottom:1px solid rgba(0,0,0,.1);box-sizing:border-box}.sg-alias{color:#888;white-space:nowrap}.sgitem-subwrap{overflow:hidden;display:inline-block;width:1%;flex-grow:1}.sg-play-btn{padding-left:10px;display:inline-block;width:22px;height:100%;text-align:right;vertical-align:top;padding-right:10px}.sg-play-btn:before{content:"";height:100%}.sg-play-btn:before,.sg-play-btn span{display:inline-block;vertical-align:middle}.sg-play-btn span{height:22px;width:22px;background-image:url(/static/icon.png);background-size:166px 97px;background-position:-24px 0}.sl-num{color:#999;font-size:17px;font-family:Helvetica,sans-serif;display:flex;align-items:center;width:28px}.hot3{color:#df3436}.sgl-cover-wrap{height:43px;width:43px;margin-right:10px}.theme-black .song-title{color:#fff}.theme-black .song-info{color:hsla(0,0%,100%,.6)}.theme-black .songitem:after{border-bottom:1px solid hsla(0,0%,100%,.1)}.theme-playlist .sl-num{width:40px;justify-content:center}.theme-playlist .songitem{padding:6px 0}.theme-playlist .hot3{color:#999}.item-disable .sg-alias,.item-disable .sl-num,.item-disable .song-info,.item-disable .song-title{color:#ccc}.item-disable .sg-play-btn span{opacity:.3}.llt-highlight{color:#507daf}.item-disable .llt-highlight{color:#ccc}',""])},87:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={Apihost:"https://musicapi.applinzi.com"};t.config=i}});