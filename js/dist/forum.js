module.exports=function(t){var n={};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=n,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=43)}([function(t,n){t.exports=flarum.core.compat.extend},function(t,n){t.exports=flarum.core.compat.Model},function(t,n){t.exports=flarum.core.compat["components/Button"]},function(t,n,o){"use strict";function e(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}o.d(n,"a",(function(){return e}))},function(t,n,o){"use strict";o.d(n,"a",(function(){return i}));var e=o(3),r=o(1),a=o.n(r),s=o(12),i=function(t){function n(){return t.apply(this,arguments)||this}return Object(e.a)(n,t),n}(o.n(s)()(a.a,{points:a.a.attribute("points"),name:a.a.attribute("name"),color:a.a.attribute("color")}))},function(t,n,o){"use strict";function e(t,n){void 0===n&&(n={}),n.style=n.style||{},n.className="rankLabel "+(n.className||"");var o=t.color();return n.style.backgroundColor=n.style.color=o,n.className+=" colored",m("span",n,m("span",{className:"rankLabel-text"},t.name()))}o.d(n,"a",(function(){return e}))},function(t,n){t.exports=flarum.core.compat["components/IndexPage"]},function(t,n){t.exports=flarum.core.compat["models/Post"]},function(t,n){t.exports=flarum.core.compat["helpers/icon"]},,function(t,n,o){"use strict";o.d(n,"a",(function(){return e}));var e={Rank:o(4).a}},function(t,n,o){"use strict";o.d(n,"a",(function(){return e}));var e={rankLabel:o(5).a}},function(t,n){t.exports=flarum.core.compat["utils/mixin"]},function(t,n){t.exports=flarum.core.compat["components/Page"]},function(t,n){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,n){t.exports=flarum.core.compat["models/Discussion"]},function(t,n){t.exports=flarum.core.compat["helpers/avatar"]},function(t,n){t.exports=flarum.core.compat["utils/ItemList"]},function(t,n){t.exports=flarum.core.compat["components/LogInModal"]},function(t,n){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,n){t.exports=flarum.core.compat["helpers/username"]},function(t,n){t.exports=flarum.core.compat["utils/abbreviateNumber"]},,function(t,n){t.exports=flarum.core.compat["models/User"]},function(t,n){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,n){t.exports=flarum.core.compat["components/UserCard"]},,function(t,n){t.exports=flarum.core.compat["helpers/listItems"]},function(t,n){t.exports=flarum.core.compat["components/Notification"]},function(t,n){t.exports=flarum.core.compat["components/Dropdown"]},function(t,n){t.exports=flarum.core.compat["components/LinkButton"]},function(t,n){t.exports=flarum.core.compat["components/CommentPost"]},function(t,n){t.exports=flarum.core.compat["utils/PostControls"]},function(t,n){t.exports=flarum.core.compat["components/Modal"]},function(t,n){t.exports=flarum.core.compat["components/PostUser"]},function(t,n){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,n,o){(function(n){var o=/^\s+|\s+$/g,e=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,i="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,c=i||u||Function("return this")(),p=Object.prototype.toString,f=Math.max,l=Math.min,m=function(){return c.Date.now()};function d(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==p.call(t)}(t))return NaN;if(d(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=d(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=r.test(t);return i||a.test(t)?s(t.slice(2),i?2:8):e.test(t)?NaN:+t}t.exports=function(t,n,o){var e,r,a,s,i,u,c=0,p=!1,v=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(n){var o=e,a=r;return e=r=void 0,c=n,s=t.apply(a,o)}function y(t){return c=t,i=setTimeout(k,n),p?g(t):s}function x(t){var o=t-u;return void 0===u||o>=n||o<0||v&&t-c>=a}function k(){var t=m();if(x(t))return w(t);i=setTimeout(k,function(t){var o=n-(t-u);return v?l(o,a-(t-c)):o}(t))}function w(t){return i=void 0,b&&e?g(t):(e=r=void 0,s)}function N(){var t=m(),o=x(t);if(e=arguments,r=this,u=t,o){if(void 0===i)return y(u);if(v)return i=setTimeout(k,n),g(u)}return void 0===i&&(i=setTimeout(k,n)),s}return n=h(n)||0,d(o)&&(p=!!o.leading,a=(v="maxWait"in o)?f(h(o.maxWait)||0,n):a,b="trailing"in o?!!o.trailing:b),N.cancel=function(){void 0!==i&&clearTimeout(i),c=0,e=u=r=i=void 0},N.flush=function(){return void 0===i?s:w(m())},N}}).call(this,o(42))},,,,,,function(t,n){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(t){"object"==typeof window&&(o=window)}t.exports=o},function(t,n,o){"use strict";o.r(n),o.d(n,"models",(function(){return e.a})),o.d(n,"components",(function(){return wt})),o.d(n,"helpers",(function(){return jt}));var e=o(10),r=o(1),a=o.n(r),s=o(15),i=o.n(s),u=o(7),c=o.n(u),p=o(23),f=o.n(p),l=o(4),d=o(3),h=o(16),v=o.n(h),b=o(13),g=o.n(b),y=o(6),x=o.n(y),k=o(2),w=o.n(k),N=o(17),j=o.n(N),O=o(18),P=o.n(O),L=o(19),M=o.n(L),_=o(27),D=o.n(_),V=o(20),I=o.n(V),U=o(8),S=o.n(U),R=function(t,n){void 0===n&&(n=!1);var o=app.data["fof-gamification."+t];return n?!!Number(o):o},C=function(t){function n(){return t.apply(this,arguments)||this}Object(d.a)(n,t);var o=n.prototype;return o.init=function(){t.prototype.init.call(this),app.session.user&&!0===app.session.user.data.attributes.canViewRankingPage||m.route("/"),this.loading=!0,this.users=[],this.refresh()},o.view=function(){var t,n=this;return t=this.loading?M.a.component():w.a.component({children:app.translator.trans("core.forum.discussion_list.load_more_button"),className:"Button",onclick:this.loadMore.bind(this)}),m("div",{className:"TagsPage"},x.a.prototype.hero(),m("div",{className:"container"},m("nav",{className:"RankingPage-nav IndexPage-nav sideNav",config:x.a.prototype.affixSidebar},m("ul",null,D()(x.a.prototype.sidebarItems().toArray()))),m("div",{className:"RankingPage sideNavOffset"},m("table",{class:"rankings"},m("tr",null,m("th",{className:"rankings-mobile"},app.translator.trans("fof-gamification.forum.ranking.rank")),m("th",null,app.translator.trans("fof-gamification.forum.ranking.name")),m("th",null,app.translator.trans("fof-gamification.forum.ranking.amount"))),this.users.map((function(t,o){return++o,[m("tr",{className:"ranking-"+o},o<4?R("customRankingImages",!0)?m("img",{className:"rankings-mobile rankings-image",src:app.forum.attribute("baseUrl")+app.forum.attribute("fof-gamification.topimage"+o+"Url")}):m("td",{className:"rankings-mobile rankings-"+o},S()("fas fa-trophy")):m("td",{className:"rankings-4 rankings-mobile"},n.addOrdinalSuffix(o)),m("td",null,m("div",{className:"PostUser"},m("h3",{className:"rankings-info"},m("a",{href:app.route.user(t),config:m.route},o<4?v()(t,{className:"info-avatar rankings-"+o+"-avatar"}):""," ",I()(t))))),o<4?m("td",{className:"rankings-"+o},t.points()):m("td",{className:"rankings-4"},t.points()))]}))),m("div",{className:"rankings-loadmore"}," ",t))))},o.refresh=function(t){var n=this;return void 0===t&&(t=!0),t&&(this.loading=!0,this.users=[]),this.loadResults().then((function(t){n.users=[],n.parseResults(t)}),(function(){n.loading=!1,m.redraw()}))},o.addOrdinalSuffix=function(t){if("en"===app.data.locale){var n=t%10,o=t%100;return 1===n&&11!==o?t+"st":2===n&&12!==o?t+"nd":3===n&&13!==o?t+"rd":t+"th"}return t},o.stickyParams=function(){return{sort:m.route.param("sort"),q:m.route.param("q")}},o.actionItems=function(){var t=new j.a;return t.add("refresh",w.a.component({title:app.translator.trans("core.forum.index.refresh_tooltip"),icon:"fas fa-refresh",className:"Button Button--icon",onclick:function(){app.cache.discussionList.refresh(),app.session.user&&(app.store.find("users",app.session.user.id()),m.redraw())}})),t},o.newDiscussion=function(){var t=m.deferred();return app.session.user?this.composeNewDiscussion(t):app.modal.show(new P.a({onlogin:this.composeNewDiscussion.bind(this,t)})),t.promise},o.composeNewDiscussion=function(t){var n=new DiscussionComposer({user:app.session.user});return app.composer.load(n),app.composer.show(),t.resolve(n),t.promise},o.loadResults=function(t){var n={};return n.page={offset:t,limit:"10"},app.store.find("rankings",n)},o.loadMore=function(){this.loading=!0,this.loadResults(this.users.length).then(this.parseResults.bind(this))},o.parseResults=function(t){return[].push.apply(this.users,t),this.loading=!1,this.users.sort((function(t,n){return parseFloat(n.points())-parseFloat(t.points())})),m.lazyRedraw(),t},n}(g.a),T=o(28),A=function(t){function n(){return t.apply(this,arguments)||this}Object(d.a)(n,t);var o=n.prototype;return o.icon=function(){return this.props.notification.content()>0?"fas fa-thumbs-up":"fas fa-thumbs-down"},o.href=function(){return app.route.post(this.props.notification.subject())},o.content=function(){var t=this.props.notification.fromUser(),n=this.props.notification.content();return n>0?app.translator.trans("fof-gamification.forum.notification.upvote",{user:t}):app.translator.trans("fof-gamification.forum.notification.downvote",{user:t})},o.excerpt=function(){return this.props.notification.subject().contentPlain()},n}(o.n(T).a),B=o(0),q=o(24),F=o.n(q),$=o(29),E=o.n($),z=o(30),W=o.n(z),G=function(){x.a.prototype.viewItems=function(){var t=this,n=new j.a,o=app.cache.discussionList.sortMap(),e={};for(var r in o)e[r]=app.translator.trans("core.forum.index_sort."+r+"_button");var a=e[this.params().sort]||Object.keys(o).map((function(t){return e[t]}))[0];return/^.*?\/hot/.test(m.route())&&(a=app.translator.trans("core.forum.index_sort.hot_button")),n.add("sort",E.a.component({buttonClassName:"Button",label:a,children:Object.keys(e).map((function(n){var r=e[n],a=(t.params().sort||Object.keys(o)[0])===n;return/^.*?\/hot/.test(m.route())&&"hot"===n&&(a=!0),/^.*?\/hot/.test(m.route())&&"latest"===n&&(a=!1,m.redraw()),w.a.component({children:r,icon:!a||"fas fa-check",onclick:t.changeSort.bind(t,n),active:a})}))})),n},Object(B.extend)(x.a.prototype,"navItems",(function(t){t.add("rankings",W.a.component({href:app.route("rankings"),children:app.translator.trans("fof-gamification.forum.nav.name"),icon:"fas fa-trophy"}),80)})),x.a.prototype.changeSort=function(t){var n=this.params();"hot"===t?(m.route("/"),m.route(m.route()+"hot")):(t===Object.keys(app.cache.discussionList.sortMap())[0]?delete n.sort:n.sort=t,"hot"===n.filter&&delete n.filter,m.route(app.route("index",n)))},Object(B.extend)(F.a.prototype,"sortMap",(function(t){t.hot="hot"})),Object(B.extend)(F.a.prototype,"requestParams",(function(t){"hot"===this.props.params.filter&&(t.filter.q=" is:hot")}))},H=o(31),J=o.n(H),K=o(32),Q=o.n(K),X=o(33),Y=function(t){function n(){return t.apply(this,arguments)||this}Object(d.a)(n,t);var o=n.prototype;return o.className=function(){return"VotesModal Modal--small"},o.title=function(){return app.translator.trans("fof-gamification.forum.modal.title")},o.init=function(){this.loading=!this.props.post.upvotes()||!this.props.post.downvotes(),this.loading&&this.load()},o.content=function(){var t=this;return this.loading?m("div",{className:"Modal-body"},m(M.a,null)):m("div",{className:"Modal-body"},m("ul",{className:"VotesModal-list"},["upvotes","downvotes"].map((function(n){var o=t.props.post[n]();if(o&&o.length)return m("div",null,m("legend",null,app.translator.trans("fof-gamification.forum.modal."+n+"_label")),o.map((function(t){return m("li",null,m("a",{href:app.route.user(t),config:m.route},v()(t)," ",I()(t)))})))}))))},o.load=function(){return app.store.find("posts",this.props.post.id(),{include:"upvotes,downvotes"}).then(this.loaded.bind(this))},n}(o.n(X).a),Z=function(t,n,o,e,r){if(void 0===r&&(r=t.discussion()),app.session.user){if(!r||r.canVote()||t.canVote())return n&&o&&(n=!1,o=!1),e&&e(!0),m.redraw(),t.save([n,o,"vote"]).then((function(){return null}),(function(){return null})).then((function(){e&&e(!1),r&&r.pushAttributes({votes:t.votes()}),m.redraw()}))}else app.modal.show(new P.a)},tt=function(){Object(B.extend)(Q.a,"moderationControls",(function(t,n){n.canSeeVotes()&&t.add("viewVotes",[m(w.a,{icon:"fas fa-thumbs-up",onclick:function(){app.modal.show(new Y({post:n}))}},app.translator.trans("fof-gamification.forum.mod_item"))])})),Object(B.extend)(J.a.prototype,"actionItems",(function(t){var n=this,o=this.props.post,e=o.hasDownvoted(),r=o.hasUpvoted(),a=R("iconName")||"thumbs",s=o.canVote();t.add("votes",m("div",{className:"CommentPost-votes "+(R("useAlternateLayout",!0)&&"alternateLayout")},w.a.component({icon:this.voteLoading||"fas fa-"+a+"-up",className:"Post-vote Post-upvote",style:r&&{color:app.forum.attribute("themePrimaryColor")},loading:this.voteLoading,disabled:this.voteLoading||!s,onclick:function(){return Z(o,!r,!1,(function(t){return n.voteLoading=t}))}}),m("label",{className:"Post-points"},o.votes()),w.a.component({icon:this.voteLoading||"fas fa-"+a+"-down",className:"Post-vote Post-downvote",style:e&&{color:app.forum.attribute("themePrimaryColor")},loading:this.voteLoading,disabled:!s,onclick:function(){return Z(o,!1,!e,(function(t){return n.voteLoading=t}))}})),10)}))},nt=o(14),ot=o.n(nt),et=o(21),rt=o.n(et),at=function(){R("showVotesOnDiscussionPage",!0)&&!R("useAlternateLayout",!0)&&Object(B.extend)(ot.a.prototype,"infoItems",(function(t){t.add("discussion-votes",m("span",{className:"DiscussionListItem-votes",title:app.translator.trans("fof-gamification.forum.votes")},S()("far fa-thumbs-up"),rt()(this.props.discussion.votes())),20)}))},st=o(34),it=o.n(st),ut=o(25),ct=o.n(ut),pt=o(5),ft=function(){var t=function(t){return function(n){return n&&n.attrs&&n.attrs.className&&String(n.attrs.className).split(" ").includes(t)}};Object(B.extend)(ct.a.prototype,"infoItems",(function(t){var n,o=R("pointsPlaceholder"),e=String(this.props.user.points());n=o?o.replace("{points}",e):app.translator.trans("fof-gamification.forum.user.points",{points:e}),t.add("points",n)})),Object(B.extend)(ct.a.prototype,"view",(function(n){var o=this.props.user,e=function n(o,e){var r=[];if(o&&o.children){var a=o.children.find(t(e));a&&r.push(a),o.children.forEach((function(t){r.push.apply(r,n(t,e))}))}return r}(n,"UserCard-profile")[0],r=Number(R("rankAmt"));if(e){var a=e.children.find(t("UserCard-badges"));return o.ranks()&&(a?a.children.push(o.ranks().reverse().map((function(t,n){if(!r||n<r)return m("li",{className:"User-Rank"},Object(pt.a)(t))}))):e.children.splice(1,0,m("ul",{className:"UserCard-badges badges"},o.ranks().reverse().map((function(t,n){if(!r||n<r)return m("li",{className:"User-Rank"},Object(pt.a)(t))}))))),n}})),Object(B.extend)(it.a.prototype,"view",(function(t){var n=this.props.post.user();if(!n)return t;var o,e=t.children.find((o="h3",function(t){return t&&t.tag&&t.tag===o})),r=Number(R("rankAmt"));e.children.push(n.ranks().reverse().map((function(t,n){if(!r||n<r)return m("span",{className:"Post-Rank"},Object(pt.a)(t))})))}))},lt=o(35),mt=o.n(lt),dt=o(36),ht=o.n(dt),vt=function(t){return app.store.find("posts",t).then((function(){return m.redraw()}))},bt=[],gt=function(){Object(B.extend)(mt.a.prototype,"config",(function(t,n,o){n||app.pusher&&app.pusher.then((function(t){t.main.bind("newVote",(function(t){var n,o,e=app.store.getById("posts",t.post_id),r=t.user_id;e&&e.votes()!==t.votes&&r!=app.session.user.id()&&(n=e.id(),(o=bt[n])?o(n):(o=bt[n]=ht()(vt,1500))(n))})),Object(B.extend)(o,"onunload",(function(){return t.main.unbind("newVote")}))}))}))};function yt(){return(yt=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])}return t}).apply(this,arguments)}var xt=function(t,n){var o=t.firstPost();return o&&void 0!==o[n]()?o[n]():t[n]()},kt=function(){Object(B.extend)(ot.a.prototype,"init",(function(){this.voteLoading=m.prop(!1)})),Object(B.extend)(ot.a.prototype,"view",(function(t){if(t&&t.children){var n=t.children.find((function(t){return t&&t.attrs&&t.attrs.className&&t.attrs.className.includes("DiscussionListItem-content")})),o=this.props.discussion,e=o.firstPost(),r=xt(o,"hasUpvoted"),a=xt(o,"hasDownvoted"),s=xt(o,"canVote"),i={color:app.forum.attribute("themePrimaryColor")},u={disabled:!s},c=R("useAlternateLayout",!0);n.children.unshift(m("div",{className:"DiscussionListItem-votes "+(c&&"alternateLayout")},S()("fas fa-arrow-up",yt({style:r?i:{},onclick:s&&function(){return Z(e,!r,!1,null,o)}},u)),m("span",null,rt()(xt(o,"votes")||0)),S()("fas fa-arrow-down",yt({style:a?i:{},onclick:s&&function(){return Z(e,!1,!a,null,o)}},u))))}}))},wt={RankingsPage:C,VoteNotification:A,VotesModal:Y},Nt=o(11),jt=yt({saveVote:Z,setting:R},Nt.a);app.initializers.add("fof-gamification",(function(t){i.a.prototype.votes=a.a.attribute("votes"),i.a.prototype.hasUpvoted=a.a.attribute("hasUpvoted"),i.a.prototype.hasDownvoted=a.a.attribute("hasDownvoted"),i.a.prototype.canVote=a.a.attribute("canVote"),f.a.prototype.points=a.a.attribute("points"),f.a.prototype.ranks=a.a.hasMany("ranks"),c.a.prototype.upvotes=a.a.hasMany("upvotes"),c.a.prototype.downvotes=a.a.hasMany("downvotes"),c.a.prototype.votes=a.a.attribute("votes"),c.a.prototype.canVote=a.a.attribute("canVote"),c.a.prototype.canSeeVotes=a.a.attribute("canSeeVotes"),c.a.prototype.hasUpvoted=a.a.attribute("hasUpvoted"),c.a.prototype.hasDownvoted=a.a.attribute("hasDownvoted"),t.store.models.ranks=l.a,t.notificationComponents.vote=A,t.routes.rankings={path:"/rankings",component:C.component()},tt(),G(),ft(),at(),gt(),R("useAlternateLayout",!0)&&kt()}))}]);
//# sourceMappingURL=forum.js.map