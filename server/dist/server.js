(()=>{"use strict";var e={203:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,u)}c((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var s=n(681),u=n(880),c=n(974),a=i(n(185)),l=i(n(69)),f=function(){function e(){}return e.start=function(e,t){return r(this,void 0,void 0,(function(){var n,i,f,h=this;return o(this,(function(d){switch(d.label){case 0:return n=new s.Connection(u.url,"confirmed"),[4,a.default.create(n)];case 1:return i=d.sent(),l.default.start(t,i),[4,i.connect()];case 2:if(d.sent(),!(f=null===c.PROGRAM_ID||void 0===c.PROGRAM_ID?void 0:c.PROGRAM_ID.toBase58()))throw new Error("Internal error: program id is missing");return e.post("/init",(function(e,t){return r(h,void 0,void 0,(function(){return o(this,(function(e){return t.send(JSON.stringify({programId:f,clusterUrl:u.urlTls,cluster:u.cluster,paymentRequired:"true"===process.env.REQUIRE_PAYMENT})).end(),[2]}))}))})),[2]}}))}))},e}();t.default=f},59:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,u)}c((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};t.__esModule=!0;var s=n(593),u=function(){function e(t,n){var i=this;this.connection=t,this.nodes=n,this.refreshing=!1,this.refresh=function(){return r(i,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return this.refreshing?[2]:(this.refreshing=!0,t=this,[4,e.getAvailableNodes(this.connection)]);case 1:return t.nodes=n.sent(),this.refreshing=!1,[2]}}))}))},setInterval((function(){return i.refresh()}),3e5)}return e.start=function(t){return r(void 0,void 0,void 0,(function(){var n;return o(this,(function(r){switch(r.label){case 0:return[4,e.getAvailableNodes(t)];case 1:return n=r.sent(),[2,new e(t,n)]}}))}))},e.getAvailableNodes=function(e){return r(void 0,void 0,void 0,(function(){var t,n,u,c,a,l,f;return o(this,(function(h){switch(h.label){case 0:return t=new Map,[4,s.endlessRetry("getClusterNodes",(function(){return r(void 0,void 0,void 0,(function(){return o(this,(function(t){return[2,e.getClusterNodes()]}))}))}))];case 1:n=h.sent();try{for(u=i(n),c=u.next();!c.done;c=u.next())(a=c.value).tpu&&t.set(a.pubkey,a.tpu)}catch(e){l={error:e}}finally{try{c&&!c.done&&(f=u.return)&&f.call(u)}finally{if(l)throw l.error}}return[2,t]}}))}))},e}();t.default=u},607:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var u=s(n(127)),c=s(n(605)),a=s(n(479)),l=s(n(622)),f=s(n(203));i(n(409)).init({dsn:"https://f74dafc67c914776b018c3be136bca19@o434108.ingest.sentry.io/5411826",tracesSampleRate:.1});var h=u.default();void 0!==process.env.FORCE_HTTPS&&h.use((function(e,t,n){"https"!==e.header("x-forwarded-proto")?t.redirect("https://"+e.header("host")+e.url):n()}));var d=l.default.join(__dirname,"..",".."),p=l.default.join(d,"client","build");console.log("Serving static files from: "+p),h.use("/",u.default.static(p)),h.get("/*",(function(e,t){t.sendFile(l.default.join(p,"/index.html"))}));var v=c.default.createServer(h),b=process.env.PORT||8080;v.listen(b),console.log("Server listening on port: "+b),process.env.DISABLE_API||(h.use(a.default()),h.use(u.default.json()),f.default.start(h,v))},536:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,u)}c((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};t.__esModule=!0,t.PAST_SLOT_SEARCH=t.UPCOMING_SLOT_SEARCH=void 0;var i=n(593);t.UPCOMING_SLOT_SEARCH=parseInt(process.env.LEADER_SLOT_FANOUT||"40"),t.PAST_SLOT_SEARCH=4;var s=function(){function e(e,n,s){var u=this;this.connection=e,this.leaderAddresses=n,this.scheduleFirstSlot=s,this.refreshing=!1,this.getFirstSlot=function(){return u.scheduleFirstSlot},this.getSlotLeader=function(e){return e>=u.scheduleFirstSlot&&e<=u.lastSlot()?u.leaderAddresses[e-u.scheduleFirstSlot]:null},this.lastSlot=function(){return u.scheduleFirstSlot+u.leaderAddresses.length-1},this.shouldRefresh=function(e){return e>=u.lastSlot()-t.UPCOMING_SLOT_SEARCH},this.refresh=function(e){return r(u,void 0,void 0,(function(){var t,n;return o(this,(function(r){switch(r.label){case 0:if(this.refreshing)return[2];this.refreshing=!0,r.label=1;case 1:return r.trys.push([1,3,4,5]),[4,this.fetchLeaders(e)];case 2:return t=r.sent(),this.scheduleFirstSlot=e,this.leaderAddresses=t,[3,5];case 3:return n=r.sent(),i.reportError(n,"failed to refresh slot leaders"),[3,5];case 4:return this.refreshing=!1,[7];case 5:return[2]}}))}))}}return e.prototype.fetchLeaders=function(e){return r(this,void 0,void 0,(function(){return o(this,(function(n){switch(n.label){case 0:return[4,this.connection.getSlotLeaders(e,2*t.UPCOMING_SLOT_SEARCH)];case 1:return[2,n.sent().map((function(e){return e.toBase58()}))]}}))}))},e.start=function(t,n){return r(void 0,void 0,void 0,(function(){var r,s;return o(this,(function(o){switch(o.label){case 0:return r=new e(t,[],n),s=r,[4,i.endlessRetry("getSlotLeaders",(function(){return r.fetchLeaders(n)}))];case 1:return s.leaderAddresses=o.sent(),[2,r]}}))}))},e}();t.default=s},297:function(e,t){var n=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};t.__esModule=!0;t.default=function(e,t,r){var o=this;this.connection=e,this.currentSlot=t,this.recentSlots=[],this.updateRecentSlots=function(e){var t,r;for(o.recentSlots.push(e);o.recentSlots.length>12;)o.recentSlots.shift();var i=o.recentSlots.slice(0);i.sort();var s=i.length-1,u=Math.floor(s/2),c=i[u]+(s-u)+48;i.reverse();try{for(var a=n(i),l=a.next();!l.done;l=a.next()){var f=l.value;if(f<=c)return f}}catch(e){t={error:e}}finally{try{l&&!l.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}return o.currentSlot},this.recentSlots.push(t);var i=!1;this.connection.onSlotUpdate((function(e){var t=o.currentSlot,n=o.currentSlot;switch(e.type){case"firstShredReceived":i=!0,n=o.updateRecentSlots(e.slot);break;case"completed":i=!0,n=o.updateRecentSlots(e.slot+1);break;case"createdBank":i||(n=o.updateRecentSlots(e.slot))}n!=t&&r(n)}))}},974:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0,t.PROGRAM_ID=void 0;var o,i,s,u=n(681),c=r(n(622)),a=r(n(747)),l=process.env.DEPLOYED_PROGRAM_ADDRESS,f=c.default.resolve("..","program","target","deploy","break_solana_program-keypair.json");t.PROGRAM_ID=l?new u.PublicKey(l):process.env.DISABLE_API?void 0:(o=f,i=a.default.readFileSync(o,{encoding:"utf8"}),s=Buffer.from(JSON.parse(i)),new u.Account(s)).publicKey},185:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},s=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,u)}c((r=r.apply(e,t||[])).next())}))},u=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},c=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s},a=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var f=l(n(200)),h=n(593),d=l(n(59)),p=i(n(536)),v=l(n(297)),b="true"===process.env.SEND_TO_RPC,y=function(){function e(e){var t=this;this.connection=e,this.connecting=!1,this.lastSlot=0,this.tpuAddresses=new Array,this.sockets=new Map,this.connected=function(){return t.activeProxies()>0||b},this.activeProxies=function(){return t.sockets.size},this.connect=function(){return s(t,void 0,void 0,(function(){var e,t;return u(this,(function(n){switch(n.label){case 0:if(b)return console.log("TPU Proxy disabled"),[2];if(this.connecting)return[2];this.connecting=!0,n.label=1;case 1:return n.trys.push([1,3,,5]),console.log("TPU Proxy refreshing..."),[4,this.reconnect()];case 2:return n.sent(),[3,5];case 3:return e=n.sent(),h.reportError(e,"TPU Proxy failed to connect, reconnecting"),[4,h.sleep(1e3)];case 4:return n.sent(),[3,5];case 5:if(!this.connected())return[3,1];n.label=6;case 6:return t=this.activeProxies(),console.log(t,"TPU port(s) connected"),this.connecting=!1,[2]}}))}))},this.onTransaction=function(e){b&&"string"!=typeof e?t.connection.sendRawTransaction(e).catch((function(e){h.reportError(e,"Failed to send transaction over HTTP")})):t.connected()?t.sockets.forEach((function(n,r){try{n.send(e,(function(e){return t.onTpuResult(r,e)}))}catch(e){t.onTpuResult(r,e)}})):t.connect()},this.refreshAddresses=function(e,n,r){return s(t,void 0,void 0,(function(){var t,o,i,s,c,a,l;return u(this,(function(u){switch(u.label){case 0:for(t=r-p.PAST_SLOT_SEARCH,o=r+p.UPCOMING_SLOT_SEARCH,i=[],s=new Set,c=t;c<o;c++)null===(a=e.getSlotLeader(c))||s.has(a)||(s.add(a),(l=n.nodes.get(a))?i.push(l):console.error("NO TPU FOUND",a));return this.tpuAddresses=i,[4,this.connect()];case 1:return u.sent(),[2]}}))}))},this.reconnect=function(){return s(t,void 0,void 0,(function(){var e,t,n,r,o,i,s,l,h,d=this;return u(this,(function(p){switch(p.label){case 0:e=new Map,t=function(t){var n,r,o,i,s;return u(this,(function(u){switch(u.label){case 0:return n=c(t.split(":"),2),r=n[0],o=n[1],i=Number.parseInt(o),s=f.default.createSocket("udp4"),[4,new Promise((function(e){s.on("error",(function(e){return d.onTpuResult(t,e)})),s.connect(i,r,(function(){return e(void 0)}))}))];case 1:return u.sent(),e.set(t,s),[2]}}))},p.label=1;case 1:p.trys.push([1,6,7,8]),n=a(this.tpuAddresses),r=n.next(),p.label=2;case 2:return r.done?[3,5]:(o=r.value,[5,t(o)]);case 3:p.sent(),p.label=4;case 4:return r=n.next(),[3,2];case 5:return[3,8];case 6:return i=p.sent(),l={error:i},[3,8];case 7:try{r&&!r.done&&(h=n.return)&&h.call(n)}finally{if(l)throw l.error}return[7];case 8:if(0===e.size)throw new Error("No sockets found");return s=this.sockets,this.sockets=e,s.forEach((function(e){e.close()})),[2]}}))}))},this.onTpuResult=function(e,n){n&&(h.reportError(n,"Error proxying transaction to TPU"),t.sockets.delete(e))}}return e.create=function(t){return s(this,void 0,void 0,(function(){var n,r,o,i;return u(this,(function(s){switch(s.label){case 0:return n=new e(t),b?[3,5]:[4,h.endlessRetry("getEpochInfo",(function(){return t.getEpochInfo()}))];case 1:return r=s.sent().absoluteSlot,[4,d.default.start(t)];case 2:return o=s.sent(),[4,p.default.start(t,r)];case 3:return i=s.sent(),new v.default(t,r,(function(e){i.shouldRefresh(e)&&i.refresh(e),n.refreshAddresses(i,o,e)})),[4,n.refreshAddresses(i,o,r)];case 4:s.sent(),s.label=5;case 5:return[2,n]}}))}))},e}();t.default=y},880:(e,t,n)=>{t.__esModule=!0,t.urlTls=t.url=t.cluster=void 0;var r=n(681);t.cluster=function(){if(process.env.LIVE){switch(process.env.CLUSTER){case"devnet":case"testnet":case"mainnet-beta":return process.env.CLUSTER}return"devnet"}}(),t.url=process.env.RPC_URL||(process.env.LIVE?r.clusterApiUrl(t.cluster,!1):"http://localhost:8899"),t.urlTls=process.env.RPC_URL||(process.env.LIVE?r.clusterApiUrl(t.cluster,!0):"http://localhost:8899")},593:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},s=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,u)}c((r=r.apply(e,t||[])).next())}))},u=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};t.__esModule=!0,t.reportError=t.endlessRetry=t.notUndefined=t.sleep=void 0;var c=i(n(409));function a(e){return new Promise((function(t){return setTimeout(t,e)}))}t.sleep=a,t.notUndefined=function(e){return void 0!==e},t.endlessRetry=function(e,t){return s(this,void 0,void 0,(function(){var n;return u(this,(function(r){switch(r.label){case 0:if(null!=n)return[3,6];r.label=1;case 1:return r.trys.push([1,3,,5]),console.log(e,"fetching"),[4,t()];case 2:return n=r.sent(),[3,5];case 3:return f(r.sent(),"Request "+e+" failed, retrying"),[4,a(1e3)];case 4:return r.sent(),[3,5];case 5:return[3,0];case 6:return console.log(e,"fetched!"),[2,n]}}))}))};var l=process.env.CLUSTER;function f(e,t){console.error(t,e),c.captureException(e,{tags:{context:t,cluster:l}})}t.reportError=f},69:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var o=r(n(439)),i=function(){function e(){}return e.start=function(e,t){var n=0,r=new o.default.Server({server:e});r.on("connection",(function(e){n++,e.on("close",(function(){return n--})),e.on("message",t.onTransaction)})),setInterval((function(){r.clients.forEach((function(e){e.readyState===o.default.OPEN&&e.send(JSON.stringify({activeUsers:n}))}))}),1e3)},e}();t.default=i},409:e=>{e.exports=require("@sentry/node")},681:e=>{e.exports=require("@solana/web3.js")},479:e=>{e.exports=require("cors")},200:e=>{e.exports=require("dgram")},127:e=>{e.exports=require("express")},747:e=>{e.exports=require("fs")},605:e=>{e.exports=require("http")},622:e=>{e.exports=require("path")},439:e=>{e.exports=require("ws")}},t={};!function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}(607)})();