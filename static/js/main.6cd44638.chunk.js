(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[2],{37:function(e,n,t){},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t(1),c=t(25),o=t.n(c),i=t(29),s=t(10),u=t.n(s),d=t(13),l=t(8),f=t(3),h=t(4);function p(){var e=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    place-items: center;\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    padding: 20px;\n    width: 40vw;\n    height: 70vh;\n    border-radius: 10px;\n    font-weight: 700;\n    font-size: calc((0.1em + 1vmin) + (0.1em + 1vmax));\n    background: rgb(99,101,176);\n    background: linear-gradient(180deg, rgba(99,101,176,1) 0%, rgba(52,170,231,1) 70%, rgba(56,191,235,1) 100%);\n    @media (max-width: 768px) {\n        width: auto;\n        margin-top: 10vh;\n        min-height: 90vh;\n        min-width: 100vw;\n    };\n"]);return p=function(){return e},e}var b=h.a.div(p());function m(){var e=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    place-content: center;\n    cursor: pointer;\n"]);return m=function(){return e},e}function x(){var e=Object(f.a)(["\n    white-space: break-spaces;\n    text-align: center;\n"]);return x=function(){return e},e}var j=h.a.div(x()),g=h.a.div(m());function v(){var e=Object(f.a)(["\n    display: flex;\n    align-items: center;\n    font-size: calc((0.2em + 1vmin) + (0.2em + 1vmax));\n"]);return v=function(){return e},e}function O(){var e=Object(f.a)(["\n    display: flex;\n    position: fixed;\n    top: 0;\n    place-content: space-around;\n    height: 10vh;\n    width: 100%;\n    font-size: calc((0.1em + 1vmin) + (0.1em + 1vmax));\n    background: #22222c;\n"]);return O=function(){return e},e}var k=h.a.div(O()),E=h.a.div(v());function _(){var e=Object(f.a)(["\n    height: 9vh;\n\n    @media (max-width: 768px) {\n        height: 8vh;\n    };\n"]);return _=function(){return e},e}function y(){var e=Object(f.a)(["\n    height: calc(5vh + 10vw);\n    \n    "," & {\n    height: 9vh;\n    width: 9vh;\n    border-radius: 50%;\n    object-fit: cover;\n        @media (max-width: 768px) {\n            height: calc(3vh + 7vw);\n            width: calc(3vh + 7vw);\n        };\n    }\n\n    @media (max-width: 768px) {\n        height: 20vh;\n    };\n"]);return y=function(){return e},e}function S(){var e=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n\n    "," & {\n    display: flex;\n    flex-direction: row;\n    place-items: center;\n    align-self: center;\n    }\n"]);return S=function(){return e},e}function A(){var e=Object(f.a)(["\n    display: flex;\n    width: 100%;\n    flex-direction: row;\n    place-content: space-evenly;\n\n    "," & {\n        display: flex;\n        width: 50%;\n        flex-direction: row;\n        place-content: space-evenly;\n\n        @media (max-width: 768px) {\n        width: 80%;\n        };\n    }\n"]);return A=function(){return e},e}function w(){var e=Object(f.a)(["\n    max-width: 100%;\n"]);return w=function(){return e},e}function R(){var e=Object(f.a)(["\n    display: flex;\n"]);return R=function(){return e},e}var C=h.a.div(R()),P=h.a.img(w()),T=h.a.div(A(),k),I=h.a.div(S(),k),B=h.a.img(y(),k),D=h.a.img(_()),F=t.p+"static/media/jak.3a9e1449.svg",N=t.p+"static/media/ratchet.e122121b.svg",W=t.p+"static/media/yuna.73a95346.svg",M=t.p+"static/media/jakHeader.230994f0.svg",z=t.p+"static/media/ratchetHeader.f58d040d.svg",U=t.p+"static/media/yunaHeader.53c7403c.svg",G=function(e){var n=e.container;return Object(r.jsxs)(T,{children:[Object(r.jsxs)(I,{children:[Object(r.jsx)(B,{src:"header"===n?M:F}),"Jak"]}),Object(r.jsxs)(I,{children:[Object(r.jsx)(B,{src:"header"===n?z:N}),"Ratchet"]}),Object(r.jsxs)(I,{children:[Object(r.jsx)(B,{src:"header"===n?U:W}),"Yuna"]})]})},H=t.p+"static/media/start.1ba7996c.svg",K=function(e){var n=e.startGame;return Object(r.jsxs)(b,{children:[Object(r.jsxs)(j,{children:["Tag these characters as fast as you can!","\n","Scroll through the image to find the correct character.","\n","Click the character and choose the correct name.","\n","You will be timed and your score will be recorded, so move fast!"]}),Object(r.jsx)(G,{container:"WelcomeSplash",children:a.Children}),Object(r.jsxs)(g,{onClick:n,children:[Object(r.jsx)(D,{src:H})," Start"]})]})},J=t.p+"static/media/ps2Image.3a523648.webp",Q=function(e){var n=e.handleClick;return Object(r.jsx)(C,{onClick:n,children:Object(r.jsx)(P,{src:J})})},Y=function(e){var n=Math.floor(e/3600);e%=3600;var t=Math.floor(e/60),r=e%60;return n.toString().padStart(2,"0")+":"+t.toString().padStart(2,"0")+":"+r.toString().padStart(2,"0")},L=function(e){var n=e.time;return Object(r.jsx)(E,{children:Y(n)})},X=function(e){var n=e.time,t=e.gameStarted,c=e.gameOver;return Object(r.jsxs)(k,{children:[Object(r.jsx)(G,{container:"header",children:a.Children}),t&&Object(r.jsx)(L,{time:n,gameStarted:t,gameOver:c})]})};function V(){var e=Object(f.a)(["\n    display: flex;\n    position: fixed;\n    padding-top: 6px;\n    padding-bottom: 6px;\n    padding-left: 8px;\n    padding-right: 8px;\n    border-radius: 10px;\n    left: 50%;\n    top: 12%;\n    transform: translate(-50%, 0);\n    font-size: calc((0.2em + 1vmin) + (0.2em + 1vmax));\n    background: #22222c;\n"]);return V=function(){return e},e}function q(){var e=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    border: solid 1px #6365b0;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    padding-left: 8px;\n    padding-right: 8px;\n    cursor: pointer;\n    background: #22222c;\n    border-radius: 5px;\n    &:hover {\n        transition: all 0.1s ease-in-out;\n        background-color: #6365b0;\n    }\n    @media (max-width: 768px) {\n        font-size: calc((0.1em + 1vmin) + (0.1em + 1vmax));\n    };\n"]);return q=function(){return e},e}function Z(){var e=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    border-radius: 10px;\n    "]);return Z=function(){return e},e}function $(){var e=Object(f.a)(["\n    display: flex;\n    height: 60px;\n    width: 60px;\n    border: 2px solid #eefbff;\n    border-radius: 5px;\n    @media (max-width: 768px) {\n        height: 20px;\n        width: 20px;\n    };\n"]);return $=function(){return e},e}function ee(){var e=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: absolute;\n    transform: translate(-50%, -25%);\n    z-index: 2;\n    @media (max-width: 768px) {\n        transform: translate(-50%, -15%);\n    };\n"]);return ee=function(){return e},e}var ne=h.a.div(ee()),te=h.a.div($()),re=h.a.div(Z()),ae=h.a.div(q()),ce=h.a.div(V()),oe=function(e){var n=e.mousePosition,t=e.handleChoice,a=e.remainingCharacters;return Object(r.jsxs)(ne,{style:{left:n.x,top:n.y},children:[Object(r.jsx)(te,{}),Object(r.jsx)(re,{children:a.map((function(e){return Object(r.jsx)(ae,{onClick:t,children:e})}))})]})},ie=t(11);function se(){var e=Object(f.a)(["\n    text-shadow: 0px 0px 4px #ebe450;\n"]);return se=function(){return e},e}function ue(){var e=Object(f.a)(["\n    display: flex;\n    place-content: space-between;\n    width: 100%;\n    font-size: calc((0.2em + 0.5vmin) + (0.2em + 0.5vmax));\n    border-bottom: solid 2px rgba(99,101,176,1);\n    padding-top: 8px;\n    padding-bottom: 8px;\n"]);return ue=function(){return e},e}function de(){var e=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 90%;\n    height: 50%;\n    box-shadow: 0px 5px 8px 0px rgb(99 101 176);\n    border-radius: 5px;\n    padding: 15px;\n    font-size: calc((0.2em + 1vmin) + (0.2em + 1vmax));\n    overflow-y: auto;\n    ::-webkit-scrollbar {\n        width: 0.2em;\n    }\n    ::-webkit-scrollbar-track {\n        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    }\n    ::-webkit-scrollbar-thumb {\n        background-color: #eefbff;\n        outline: 1px solid #6365b0;\n    }\n"]);return de=function(){return e},e}function le(){var e=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    border: solid 1px #6365b0;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    padding-left: 8px;\n    padding-right: 8px;\n    cursor: pointer;\n    background: #22222c;\n    border-radius: 5px;\n    &:hover {\n        transition: all 0.1s ease-in-out;\n        background-color: #6365b0;\n    }\n    @media (max-width: 768px) {\n        font-size: calc((0.1em + 1vmin) + (0.1em + 1vmax));\n    };\n"]);return le=function(){return e},e}function fe(){var e=Object(f.a)(["\n    display: flex;\n    text-align: center;\n    color: #EB6438;\n"]);return fe=function(){return e},e}function he(){var e=Object(f.a)(["\n    border: none;\n    border-radius: 5px;\n    font-size: calc((0.2em + 0.6vmin) + (0.2em +0.6vmax));\n    text-align: center;\n"]);return he=function(){return e},e}function pe(){var e=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    font-size: calc((0.2em + 0.6vmin) + (0.2em + 0.6vmax));\n    width: 80%;\n    height: 40%;\n"]);return pe=function(){return e},e}function be(){var e=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    place-content: space-around;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n"]);return be=function(){return e},e}var me=h.a.div(be()),xe=h.a.div(pe()),je=h.a.input(he()),ge=h.a.div(fe()),ve=h.a.div(le()),Oe=h.a.div(de()),ke=h.a.div(ue()),Ee=Object(h.a)(ke)(se()),_e=function(e){var n=e.user;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:n.name}),Object(r.jsx)("div",{children:Y(n.time)})]})},ye=function(e){var n=e.playerName,t=Object(a.useState)([]),c=Object(l.a)(t,2),o=c[0],i=c[1];return Object(ie.b)().collection("users").orderBy("time","asc").limit(10).onSnapshot((function(e){var n=[];e.docChanges().forEach((function(e){var t={name:e.doc.data().name,time:e.doc.data().time};"added"===e.type&&n.push(t)})),i(n)})),Object(r.jsxs)(Oe,{children:["HIGH SCORES",1===o.length?Object(r.jsx)("div",{children:"Loading..."}):o.map((function(e){return e.name===n?Object(r.jsx)(Ee,{children:Object(r.jsx)(_e,{user:e},e.name)}):Object(r.jsx)(ke,{children:Object(r.jsx)(_e,{user:e},e.name)})}))]})},Se=function(e){var n=e.time,t=e.gameStarted,c=e.gameOver,o=Object(a.useState)(""),i=Object(l.a)(o,2),s=i[0],f=i[1],h=Object(a.useState)(!1),p=Object(l.a)(h,2),m=p[0],x=p[1],j=Object(a.useState)({error:!1,badWord:!1}),g=Object(l.a)(j,2),v=g[0],O=g[1],k=Object(ie.b)().collection("users"),E=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==m){e.next=3;break}return e.next=3,k.doc(s).set({name:s.toString(),time:n},{merge:!0});case 3:case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(b,{children:Object(r.jsxs)(me,{children:[Object(r.jsxs)(xe,{children:["YOUR TIME:",Object(r.jsx)(L,{time:n,gameStarted:t,gameOver:c}),m?"Thanks for playing!":Object(r.jsxs)(r.Fragment,{children:["Enter your name:",Object(r.jsx)(je,{onChange:function(e){return f(e.currentTarget.value)},placeholder:"Enter name"}),Object(r.jsx)(ve,{onClick:function(){"anal,anus,arse,ass,ass fuck,ass hole,assfucker,asshole,assshole,bastard,bitch,black cock,bloody hell,boong,cock,cockfucker,cocksuck,cocksucker,coon,coonnass,crap,cunt,cyberfuck,damn,darn,dick,dirty,douche,dummy,erect,erection,erotic,escort,fag,faggot,fuck,Fuck off,fuck you,fuckass,fuckhole,god damn,gook,hard core,hardcore,homoerotic,hore,lesbian,lesbians,mother fucker,motherfuck,motherfucker,negro,nigger,orgasim,orgasm,penis,penisfucker,piss,piss off,porn,porno,pornography,pussy,retard,sadist,sex,sexy,shit,slut,son of a bitch,suck,tits,viagra,whore,xxx".includes(s.toLowerCase())?O({error:!0,badWord:!0}):s.length>20?O({error:!0,badWord:!1}):(x(!0),O({error:!1,badWord:!1}),E())},children:"Submit"}),!0===v.error&&Object(r.jsx)(ge,{children:!0===v.badWord?"Nice try":"Name too long (Max 20 characters)"})]})]}),Object(r.jsx)(ye,{playerName:s})]})})},Ae=function(){var e=Object(d.a)(u.a.mark((function e(n){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(ie.b)().collection("characters").doc(n),e.abrupt("return",Object(ie.c)(t).data);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();t(37),t(38);function we(){var e=Object(a.useState)(!1),n=Object(l.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(!1),s=Object(l.a)(o,2),f=s[0],h=s[1],p=Object(a.useState)({x:0,y:0}),b=Object(l.a)(p,2),m=b[0],x=b[1],j=Object(a.useState)(!1),g=Object(l.a)(j,2),v=g[0],O=g[1],k=Object(a.useState)({correctChoice:!1,choiceMade:!1,choice:""}),E=Object(l.a)(k,2),_=E[0],y=E[1],S=Object(a.useState)(["Jak","Ratchet","Yuna"]),A=Object(l.a)(S,2),w=A[0],R=A[1],C=Object(a.useState)(0),P=Object(l.a)(C,2),T=P[0],I=P[1],B=function(){O(!v)},D=Ae("jak"),F=Ae("ratchet"),N=Ae("yuna"),W=function(){var e=Object(d.a)(u.a.mark((function e(n,t,r){var a,c,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="x: ".concat(Math.round(n/window.innerWidth*100),", y: ").concat(Math.round(t/window.innerWidth*100)),e.next=3,D;case 3:return c=e.sent,e.next=6,F;case 6:return o=e.sent,e.next=9,N;case 9:i=e.sent,e.t0=r,e.next="Jak"===e.t0?13:"Ratchet"===e.t0?14:"Yuna"===e.t0?15:16;break;case 13:return e.abrupt("return",c.positions.includes(a));case 14:return e.abrupt("return",o.positions.includes(a));case 15:return e.abrupt("return",i.positions.includes(a));case 16:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),M=function(){var e=Object(d.a)(u.a.mark((function e(n){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.currentTarget.textContent||"",e.next=3,W(m.x,m.y,t);case 3:e.sent?((r=Object(i.a)(w)).splice(r.indexOf(t),1),y({correctChoice:!0,choiceMade:!0,choice:t}),R(r),console.log(w)):y({correctChoice:!1,choiceMade:!0,choice:t});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=setTimeout((function(){return y({correctChoice:!1,choiceMade:!1,choice:_.choice})}),3e3);return function(){return clearTimeout(e)}}),[_]),Object(a.useEffect)((function(){0===w.length&&h(!0)}),[w.length]),Object(a.useEffect)((function(){t&&!f&&setTimeout((function(){I(T+1)}),1e3)})),Object(r.jsxs)("div",{className:"App",children:[!t&&Object(r.jsx)(K,{startGame:function(){c(!0)}}),Object(r.jsx)(X,{time:T,gameStarted:t,gameOver:f}),v&&Object(r.jsx)(oe,{mousePosition:m,handleChoice:function(e){B(),M(e)},playerChoice:_,remainingCharacters:w}),_.choiceMade&&!f&&Object(r.jsx)(ce,{children:_.correctChoice?"You found ".concat(_.choice,". Nice!"):"Thats not ".concat(_.choice,". Try again!")}),!f&&Object(r.jsx)(Q,{handleClick:function(e){t&&(B(),function(e){x({x:e.pageX,y:e.pageY})}(e))}}),f&&Object(r.jsx)(Se,{time:T,gameStarted:t,gameOver:f})]})}t(40);var Re={apiKey:"AIzaSyAJ3QkQnDX-xCGxQO9ouBNyU0a_zt3fdXs",authDomain:"top-waldo.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/waldo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyAJ3QkQnDX-xCGxQO9ouBNyU0a_zt3fdXs",REACT_APP_FIREBASE_AUTH_DOMAIN:"top-waldo.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"top-waldo",REACT_APP_FIREBASE_STORAGE_BUCKET:"top-waldo.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"86255443184",REACT_APP_FIREBASE_APP_ID:"1:86255443184:web:8d2385cf21b6ab29577635",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-PBWEFW42RC",REACT_APP_BAD_WORDS:"anal,anus,arse,ass,ass fuck,ass hole,assfucker,asshole,assshole,bastard,bitch,black cock,bloody hell,boong,cock,cockfucker,cocksuck,cocksucker,coon,coonnass,crap,cunt,cyberfuck,damn,darn,dick,dirty,douche,dummy,erect,erection,erotic,escort,fag,faggot,fuck,Fuck off,fuck you,fuckass,fuckhole,god damn,gook,hard core,hardcore,homoerotic,hore,lesbian,lesbians,mother fucker,motherfuck,motherfucker,negro,nigger,orgasim,orgasm,penis,penisfucker,piss,piss off,porn,porno,pornography,pussy,retard,sadist,sex,sexy,shit,slut,son of a bitch,suck,tits,viagra,whore,xxx"}).REACT_APP_FIREBASE_DATABASE_URL,projectId:"top-waldo",storageBucket:"top-waldo.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/waldo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyAJ3QkQnDX-xCGxQO9ouBNyU0a_zt3fdXs",REACT_APP_FIREBASE_AUTH_DOMAIN:"top-waldo.firebaseapp.com",REACT_APP_FIREBASE_PROJECT_ID:"top-waldo",REACT_APP_FIREBASE_STORAGE_BUCKET:"top-waldo.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"86255443184",REACT_APP_FIREBASE_APP_ID:"1:86255443184:web:8d2385cf21b6ab29577635",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-PBWEFW42RC",REACT_APP_BAD_WORDS:"anal,anus,arse,ass,ass fuck,ass hole,assfucker,asshole,assshole,bastard,bitch,black cock,bloody hell,boong,cock,cockfucker,cocksuck,cocksucker,coon,coonnass,crap,cunt,cyberfuck,damn,darn,dick,dirty,douche,dummy,erect,erection,erotic,escort,fag,faggot,fuck,Fuck off,fuck you,fuckass,fuckhole,god damn,gook,hard core,hardcore,homoerotic,hore,lesbian,lesbians,mother fucker,motherfuck,motherfucker,negro,nigger,orgasim,orgasm,penis,penisfucker,piss,piss off,porn,porno,pornography,pussy,retard,sadist,sex,sexy,shit,slut,son of a bitch,suck,tits,viagra,whore,xxx"}).REACT_APP_FIREBASE_SENDER_ID,appId:"1:86255443184:web:8d2385cf21b6ab29577635"};o.a.render(Object(r.jsx)(ie.a,{firebaseConfig:Re,children:Object(r.jsx)(we,{})}),document.getElementById("root"))}},[[39,3,4]]]);
//# sourceMappingURL=main.6cd44638.chunk.js.map