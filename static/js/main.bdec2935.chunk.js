(this["webpackJsonpstaver-humle"]=this["webpackJsonpstaver-humle"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={container:"Grid_container__3gv8K",grid:"Grid_grid__1BRwy",border:"Grid_border__20nNQ",letter:"Grid_letter__FpcEt",filler:"Grid_filler__1NEAc",header:"Grid_header__3S9Ui",mode:"Grid_mode__ZZq8Y",active:"Grid_active__1KhoH"}},,,,,,function(e,t,n){e.exports={header:"DatePicker_header__3oWo4",center:"DatePicker_center__3IS8k",monthGrid:"DatePicker_monthGrid__15JAF",dateButton:"DatePicker_dateButton__3t50Y",todayButton:"DatePicker_todayButton__USWS_",currentButton:"DatePicker_currentButton__3kv-Y",dayHeader:"DatePicker_dayHeader__BgL3a"}},function(e,t,n){e.exports={container:"Buttons_container__1Zt8k",guess:"Buttons_guess__2Anft",letterButton:"Buttons_letterButton__1mMw1",centerLetter:"Buttons_centerLetter__35133",letterButtons:"Buttons_letterButtons__3XtpL",controls:"Buttons_controls__vjaFF"}},,,,function(e,t,n){e.exports={container:"Hive_container__1Zjua",gameContainer:"Hive_gameContainer__23RNb",buttonsContainer:"Hive_buttonsContainer__3BlGP",column:"Hive_column__uIVAh",header:"Hive_header__1Y6La",footer:"Hive_footer__36eBG"}},,function(e,t,n){e.exports={header:"Modal_header__2ZLRN",footer:"Modal_footer__3LLGM",contents:"Modal_contents__2N7hF",modalBackground:"Modal_modalBackground__gT2gd",modal:"Modal_modal__lEGX8"}},,,,,,function(e,t,n){e.exports={button:"HeaderButton_button__2v-ld"}},function(e,t,n){e.exports={container:"WordList_container__hTDBw",wordList:"WordList_wordList__tjFXB",buttons:"WordList_buttons__kbIZ-"}},function(e,t,n){e.exports={word:"Word_word__1tKTb",revealed:"Word_revealed__dA-mZ",pangram:"Word_pangram__Nkl1G"}},function(e,t,n){e.exports={container:"Progress_container__2gTl_",bars:"Progress_bars__3T60p",help:"Progress_help__17CCm"}},,,,,function(e,t,n){e.exports={container:"Loading_container__3Q6Jl",ldsRipple:"Loading_ldsRipple__3LZlq"}},function(e,t,n){e.exports={reveal:"RevealButton_reveal__QgljS",revealContainer:"RevealButton_revealContainer__2XctQ"}},function(e,t,n){e.exports={container:"Messages_container__r77DS",pangram:"Messages_pangram__2KAkr"}},,,,,function(e,t,n){e.exports={button:"WordsInfo_button__3D1OJ"}},function(e,t,n){e.exports={button:"InfoButton_button__3liaB"}},function(e,t,n){e.exports={button:"CalendarButton_button__317hN"}},function(e,t,n){e.exports={header:"Header_header__Yh4QF"}},function(e,t,n){e.exports={button:"GridInfo_button__rmqfM"}},,,,,,,function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(2),a=n.n(c),s=n(36),o=n.n(s),i=(n(50),n(51),n(17)),l=n(4),u=n(3),d=n(37),j=function(e){return fetch(e,{headers:{"Content-Type":"application/json","Content-Encoding":"gzip"}}).then((function(e){return e.arrayBuffer()})).then((function(e){return new Uint8Array(e)})).then((function(e){return d.a.inflate(e)})).then((function(e){return new TextDecoder("utf-8").decode(e)})).then((function(e){return JSON.parse(e)}))},b=n(14),h=Math.pow(2,32),f=function(e){for(var t=0,n=0;n<e.length;n+=1){t=(31*t+e.charCodeAt(n))%h}return t},O=function(e){return e<10?"0".concat(e):e},v=function(){var e=new Date;return[e.getFullYear(),e.getMonth()+1,e.getDate()].map(O).join("-")}(),m=function(){var e=Object(l.g)().gameId,t=null!==e&&void 0!==e?e:v,n=f(t.split("").reverse().join(""));return{gameId:t,gameHash:n}},x=function(){Object(c.useEffect)((function(){return document.body.classList.add("no-scroll"),function(){document.body.classList.remove("no-scroll")}}),[])},g=n(32),p=n.n(g),_=function(){return x(),Object(r.jsx)("div",{className:p.a.container,children:Object(r.jsxs)("div",{className:p.a.ldsRipple,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})})},k=Object(c.createContext)({centerLetter:"",outerLetters:["","","","","",""],all:"",puzzleId:""}),w=function(e){var t=e.children,n=m().gameHash,a=Object(c.useState)(""),s=Object(u.a)(a,2),o=s[0],i=s[1],l=Object(c.useState)(),d=Object(u.a)(l,2),h=d[0],f=d[1];if(Object(c.useEffect)((function(){j("".concat("/staver-humle","/words/options.json.gz")).then((function(e){return e[n%e.length]})).then(i).catch((function(e){console.error(e),f(e)}))}),[n]),h)return Object(r.jsx)("div",{children:"Error!"});if(!o)return Object(r.jsx)(_,{});var O=o.split(""),v=O[n%O.length],x=O.filter((function(e){return e!==v})),g=[v].concat(Object(b.a)(x.sort())).join("");return Object(r.jsx)(k.Provider,{value:{centerLetter:v,outerLetters:x,all:o,puzzleId:g},children:t},g)},C=function(){return Object(c.useContext)(k)},N=Object(c.createContext)({words:[]}),L=function(e){var t=e.children,n=C(),a=n.all,s=n.centerLetter,o=n.puzzleId,i=Object(c.useState)([]),l=Object(u.a)(i,2),d=l[0],b=l[1],h=Object(c.useState)(),f=Object(u.a)(h,2),O=f[0],v=f[1];return Object(c.useEffect)((function(){var e=a.substring(0,3),t="".concat("/staver-humle","/words/").concat(e,".json.gz");j(t).then((function(e){return e[a]})).then((function(e){return e.filter((function(e){return e.includes(s)}))})).then(b).catch(v)}),[a,s]),O?Object(r.jsx)("pre",{children:O.message}):0===d.length?Object(r.jsx)(_,{}):Object(r.jsx)(N.Provider,{value:{words:d},children:t},o)},B=function(){return Object(c.useContext)(N)},S=function(e){return 7===new Set(e.split("")).size},E=function(e){return{score:Object(c.useMemo)((function(){return e.map((function(e){if(4===e.length)return 1;if(e.length<7)return e.length;var t=S(e)?7:0;return e.length+t})).reduce((function(e,t){return e+t}),0)}),[e])}},y=function(){return Object(c.useContext)(We)},M=n(25),D=n.n(M),F=n(39),I=n.n(F),H=n(7),G=n(18),P=n.n(G),A=function(e){var t=e.children,n=e.title,a=e.onClose;x();var s=Object(c.useCallback)((function(e){"Escape"===e.key&&a()}),[a]);return Object(c.useEffect)((function(){return window.addEventListener("keydown",s),function(){window.removeEventListener("keydown",s)}}),[s]),Object(r.jsx)("div",{className:P.a.modalBackground,onClick:a,children:Object(r.jsxs)("div",{className:P.a.modal,onClick:function(e){return e.stopPropagation()},children:[Object(r.jsxs)("div",{className:P.a.header,children:[Object(r.jsx)("h2",{children:n}),Object(r.jsx)("button",{onClick:a,"aria-label":"lukk vinduet",children:Object(r.jsx)(H.b,{})})]}),Object(r.jsx)("div",{className:P.a.contents,children:t}),Object(r.jsx)("div",{className:P.a.footer,children:Object(r.jsx)("button",{onClick:a,children:"Lukk"})})]})})},R=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useMemo)((function(){return!!n&&Object(r.jsxs)(A,{title:"\xabHva er disse ordene?\xbb",onClose:function(){return a(!1)},children:[Object(r.jsxs)("p",{children:["Ordene som brukes her kommer fra den"," ",Object(r.jsx)("a",{href:"https://www.nb.no/sprakbanken/ressurskatalog/oai-nb-no-sbr-5/",target:"_blank",rel:"noopener noreferrer",children:"Norsk ordbank"}),". Alle ordene stemmer, men noen ord blir sjelden (eller aldri) sett i det virkelige liv."]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("a",{href:"mailto:evancharlton+humle@gmail.com",target:"_blank",rel:"noopener noreferrer",children:"Skriv en e-post"})," ","hvis du finner et galt ord \ud83d\ude00"]})]})}),[n]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{onClick:function(){return a(!0)},className:I.a.button,"aria-label":"funnet ord hjelp",children:Object(r.jsx)(H.c,{})}),s]})},T=function(){var e=C(),t=e.centerLetter,n=e.outerLetters,r=["nb-no","revealed",[t].concat(Object(b.a)(n)).join("")].join("/"),a=Object(c.useState)(!1),s=Object(u.a)(a,2),o=s[0],i=s[1];Object(c.useEffect)((function(){var e=localStorage.getItem(r);i(!!e)}),[r,i]);var l=Object(c.useCallback)((function(){localStorage.setItem(r,(new Date).toISOString()),window.dispatchEvent(new CustomEvent("revealed",{detail:r}))}),[r]),d=Object(c.useCallback)((function(e){e.detail===r&&i(!0)}),[r,i]);return Object(c.useEffect)((function(){return window.addEventListener("revealed",d),function(){window.removeEventListener("revealed",d)}}),[d]),{revealed:o,revealAnswers:l}},z=n(33),W=n.n(z),Y=function(){var e=T(),t=e.revealed,n=e.revealAnswers,a=Object(c.useState)(!1),s=Object(u.a)(a,2),o=s[0],i=s[1],l=y().found,d=B().words.length-l.length,j=Object(c.useMemo)((function(){return o?Object(r.jsxs)(A,{title:"Er du ferdig?",onClose:function(){return i(!1)},children:[Object(r.jsx)("h2",{children:"Avdekke alle ordene?"}),Object(r.jsxs)("p",{children:["N\xe5r du er ferdig, du kan vise alle ordene. Du har ",d," ord gjenst\xe5r!"]}),Object(r.jsx)("div",{className:W.a.revealContainer,children:Object(r.jsx)("button",{onClick:function(){n(),i(!1)},children:"Jeg er ferdig!"})}),Object(r.jsxs)("p",{children:["Hvis du vil forsett \xe5 s\xf8ke, klikk p\xe5 ",Object(r.jsx)("strong",{children:"\xabLukk\xbb"})," nedenfor."]})]}):null}),[o,i,d,n]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{className:W.a.reveal,disabled:t,onClick:function(){return i(!0)},children:Object(r.jsx)(H.a,{})}),j]})},J=function(){var e=C(),t=e.centerLetter,n=e.outerLetters,r=["nb-no","saved",[t].concat(Object(b.a)(n)).join("")].join("/"),a=Object(c.useState)((function(){return function(e){try{var t=localStorage.getItem(e);if(t){var n=JSON.parse(t);if(Array.isArray(n))return n.filter((function(e){return"string"===typeof e}))}}catch(r){}return[]}(r)})),s=Object(u.a)(a,2),o=s[0],i=s[1];return{found:o,addFoundWord:Object(c.useCallback)((function(e){i((function(t){var n=[].concat(Object(b.a)(t),[e]).sort();return localStorage.setItem(r,JSON.stringify(n)),n}))}),[i,r]),foundSet:new Set(o)}},Z=n(26),K=n.n(Z),Q=function(e){return e.currentTarget.blur()},U=function(e){var t=e.children,n=!J().foundSet.has(t),c=S(t);return Object(r.jsx)("a",{className:[K.a.word,n&&K.a.revealed,c&&K.a.pangram].filter(Boolean).join(" "),href:"https://naob.no/s%C3%B8k/".concat(encodeURIComponent(t)),target:"_blank",rel:"noopener noreferrer",onClick:Q,children:t},t)},X=function(){var e=T().revealed,t=B().words,n=y().found,a=Object(c.useMemo)((function(){return(e?t:n).map((function(e){return Object(r.jsx)(U,{children:e},e)}))}),[n,e,t]);return Object(r.jsxs)("div",{className:D.a.container,children:[Object(r.jsx)("div",{className:D.a.wordList,children:a}),Object(r.jsxs)("div",{className:D.a.buttons,children:[Object(r.jsx)(R,{}),Object(r.jsx)(Y,{})]})]})},q=n(13),V=n(44),$=n(12),ee=n.n($),te=function(e){return e.map((function(e){return{sort:Math.random(),value:e}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value}))},ne=function(){var e=C().outerLetters,t=Object(c.useState)([]),n=Object(u.a)(t,2),r=n[0],a=n[1],s=Object(c.useCallback)((function(){a(te(e))}),[e]);return Object(c.useEffect)((function(){a(te(e))}),[e,a]),{shuffled:r,reshuffle:s}},re=function(){var e=y().onGuess,t=C(),n=t.all,a=t.centerLetter,s=t.outerLetters,o=Object(c.useState)(""),i=Object(u.a)(o,2),l=i[0],d=i[1],j=ne(),b=j.shuffled,h=j.reshuffle,f=T().revealed,O=Object(c.useRef)("");O.current=l,Object(c.useEffect)((function(){O.current="",d("")}),[s,a]);var v=Object(c.useCallback)((function(){e(O.current),d("")}),[e,O]),m=Object(c.useCallback)((function(e){var t=e.currentTarget.getAttribute("data-letter");d((function(e){return"".concat(e).concat(t)}))}),[d]),x=Object(c.useCallback)((function(){d((function(e){return e.substr(0,e.length-1)}))}),[d]),g=Object(c.useCallback)((function(e){var t=e.key;if(!f)if("Backspace"!==t){if(" "===t)return h(),void e.preventDefault();"Enter"===t&&v(),n.includes(t.toLocaleLowerCase())&&d((function(e){return"".concat(e).concat(t)}))}else d((function(e){return e.substring(0,e.length-1)}))}),[n,v,h,f]);Object(c.useEffect)((function(){return document.addEventListener("keydown",g),function(){document.removeEventListener("keydown",g)}}),[g]);var p=function(e){var t=e.letter,n=e.className,c=Object(V.a)(e,["letter","className"]);return Object(r.jsx)("button",Object(q.a)(Object(q.a)({"data-letter":t,onClick:m,className:[ee.a.letterButton,n].filter(Boolean).join(" ")},c),{},{disabled:f,children:t}))},_=function(e){return Object(r.jsx)(p,Object(q.a)(Object(q.a)({},e),{},{className:ee.a.centerLetter}))};return Object(r.jsxs)("div",{className:ee.a.container,children:[Object(r.jsx)("div",{className:ee.a.guess,children:l||Object(r.jsx)(r.Fragment,{children:"\xa0"})}),Object(r.jsxs)("div",{className:ee.a.letterButtons,children:[Object(r.jsxs)("div",{className:ee.a.topRow,children:[Object(r.jsx)(p,{letter:b[0]}),Object(r.jsx)(p,{letter:b[1]})]}),Object(r.jsxs)("div",{className:ee.a.middleRow,children:[Object(r.jsx)(p,{letter:b[2]}),Object(r.jsx)(_,{letter:a}),Object(r.jsx)(p,{letter:b[3]})]}),Object(r.jsxs)("div",{className:ee.a.bottomRow,children:[Object(r.jsx)(p,{letter:b[4]}),Object(r.jsx)(p,{letter:b[5]})]})]}),Object(r.jsxs)("div",{className:ee.a.controls,children:[Object(r.jsx)("button",{disabled:f,onClick:x,"aria-label":"baksiden",children:Object(r.jsx)(H.e,{})}),Object(r.jsx)("button",{disabled:f,onClick:h,"aria-label":"tilfeldig rekkef\xf8lge",children:Object(r.jsx)(H.g,{})}),Object(r.jsx)("button",{disabled:f,onClick:v,"aria-label":"sende inn",children:Object(r.jsx)(H.f,{})})]})]})},ce=n(27),ae=n.n(ce),se=function(){var e=y().found,t=B().words,n=E(e).score,a=E(t).score,s=Object(c.useState)(!1),o=Object(u.a)(s,2),i=o[0],l=o[1],d=Object(c.useMemo)((function(){return i?Object(r.jsxs)(A,{title:"Poeng",onClose:function(){return l(!1)},children:[Object(r.jsx)("p",{children:"Poengene beregnes ut fra hvor mange ord som blir funnet. Hvert ord har ulike poengsummer."}),Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:["ord p\xe5 fire bokstaver er verdt ",Object(r.jsx)("strong",{children:"ett poeng"})]}),Object(r.jsxs)("li",{children:["hver bokstave etter fire er verdt ",Object(r.jsx)("strong",{children:"ett ekstra poeng"})]}),Object(r.jsxs)("li",{children:["ord som bruker alle bokstavenve minst en gang (et pangram) gir"," ",Object(r.jsx)("strong",{children:"syv ekstra poeng"})]})]}),Object(r.jsx)("h3",{children:"Eksempel"}),Object(r.jsxs)("p",{children:["H\xa0I\xa0K\xa0L\xa0O\xa0S\xa0",Object(r.jsx)("strong",{children:"T"})]}),Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("strong",{children:"hist"})," er 4 poeng"]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("strong",{children:"hittil"})," er 6 poeng"]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("strong",{children:"holistisk"})," er (9 + 7) = 16 poeng"]})]})]}):null}),[i]);return Object(r.jsxs)("div",{className:ae.a.container,children:[Object(r.jsxs)("div",{className:ae.a.bars,children:[Object(r.jsx)("progress",{id:"word-progress",max:t.length,value:e.length}),Object(r.jsxs)("label",{htmlFor:"word-progress",children:["Ord: ",e.length," / ",t.length]}),Object(r.jsx)("progress",{id:"points-progress",max:a,value:n}),Object(r.jsxs)("label",{htmlFor:"points-progress",children:["Poeng: ",n," / ",a]})]}),Object(r.jsx)("button",{onClick:function(){return l(!0)},className:ae.a.help,"aria-label":"poeng hjelp",children:Object(r.jsx)(H.c,{})}),d]})},oe=n(24),ie=n.n(oe),le=n(40),ue=n.n(le),de=n.p+"static/media/Humle.d54d42c1.svg",je=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useMemo)((function(){return n?Object(r.jsxs)(A,{title:"Staver Humle!",onClose:function(){return a(!1)},children:[Object(r.jsx)("p",{children:"Staver Humle er et ordspill hvor du lage s\xe5 mange ord som du kan. Hvert puslespill har syv ulike bokstaver\u2014en fast i midten og seks rundt."}),Object(r.jsx)("h3",{children:"Reglene"}),Object(r.jsx)("p",{children:"Hvert ord:"}),Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("strong",{children:"m\xe5 bruke"})," den midterste bokstaven"]}),Object(r.jsxs)("li",{children:["v\xe6re minst ",Object(r.jsx)("strong",{children:"fire bokstaver"})," lange"]}),Object(r.jsxs)("li",{children:["bruker ",Object(r.jsx)("strong",{children:"bare"})," de syv bokstavene",Object(r.jsx)("br",{}),"(men bokstaver kan gjentas)"]})]}),Object(r.jsxs)("p",{children:["Hver puslespill har ",Object(r.jsx)("strong",{children:"minst ett"})," ord som bruker"," ",Object(r.jsx)("strong",{children:"alle bokstavene"}),"."]}),Object(r.jsxs)("p",{children:["Det er en ny puslespill ",Object(r.jsx)("strong",{children:"hver dag!"})]}),Object(r.jsx)("p",{children:"Lykke til!"}),Object(r.jsxs)("p",{children:["Icon (",Object(r.jsx)("img",{width:20,height:20,src:de,style:{padding:0,margin:0},alt:"Staver humle logo"}),") fra"," ",Object(r.jsx)("a",{href:"https://linkedin.com/in/baharshahriari/",target:"_blank",rel:"noopener noreferrer",children:"Bahar Anvari"})]}),Object(r.jsx)("p",{children:Object(r.jsxs)("em",{children:["(Want to play in English? Try the"," ",Object(r.jsx)("a",{href:"https://www.nytimes.com/puzzles/spelling-bee",target:"_blank",rel:"noopener noreferrer",children:"NYT Spelling Bee"}),"!)"]})})]}):null}),[n]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{onClick:function(){return a(!0)},className:[ie.a.button,ue.a.button].filter(Boolean).join(" "),"aria-label":"om Staver humle",children:Object(r.jsx)(H.d,{})}),s]})},be=n(41),he=n.n(be),fe=n(11),Oe=n.n(fe),ve=n(21),me=["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],xe=["m","t","o","t","f","l","s"],ge=["mandag","tirsdag","onsdag","torsdag","fredag","l\xf8rdag","sondag"],pe=new Date,_e=function(e){var t=e.onChange,n=e.gameId,a=void 0===n?"":n,s=Object(c.useMemo)((function(){return function(e){if(!e)return!1;var t=e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/);if(!t)return!1;var n=t.slice(1);if(3!==n.length)return!1;var r=n.map(Number),c=Object(u.a)(r,3),a=c[0],s=c[1],o=c[2];return a&&s>=1&&s<=12&&o>=1&&o<=31}(a)?new Date(a):null}),[a]),o=Object(c.useState)((s||pe).getFullYear()),i=Object(u.a)(o,2),l=i[0],d=i[1],j=Object(c.useState)((s||pe).getMonth()),b=Object(u.a)(j,2),h=b[0],f=b[1],v=function(e){return function(){d((function(t){return t+e}))}},m=function(e){return function(){f((function(t){var n=t+e;return n<0?(d((function(e){return e-1})),11):n>=12?(d((function(e){return e+1})),0):n}))}},x=Object(c.useMemo)((function(){for(var e=new Date(l,h,1).getDay(),n=[],c=0;c<7;c+=1)n.push(Object(r.jsx)("div",{className:Oe.a.dayHeader,children:xe[c]},"day-".concat(ge[c])));for(var a=1;a<e;a+=1)n.push(Object(r.jsx)("div",{className:Oe.a.filler,children:"\xa0"},"filler-".concat(a)));for(var o=new Date(l,h+1,0).getDate(),i=function(e){var c=l===pe.getFullYear()&&h===pe.getMonth()&&e===pe.getDate(),a=s&&l===s.getFullYear()&&h===s.getMonth()&&e===s.getDate(),o=[Oe.a.dateButton];c&&o.push(Oe.a.todayButton),a&&o.push(Oe.a.currentButton);var i="velg ".concat(l,"-").concat(h,"-").concat(e);n.push(Object(r.jsx)("button",{className:o.join(" "),onClick:function(){t("".concat(l,"-").concat(O(h+1),"-").concat(O(e)))},"aria-label":i,children:e},"date-".concat(e)))},u=1;u<=o;u+=1)i(u);return Object(r.jsx)("div",{className:Oe.a.monthGrid,children:n})}),[l,h,t,s]);return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:Oe.a.header,children:[Object(r.jsx)("button",{onClick:v(-1),"aria-label":"tilbake ett \xe5r",children:Object(r.jsx)(ve.a,{})}),Object(r.jsx)("button",{onClick:m(-1),"aria-label":"tilbake en m\xe5ned",children:Object(r.jsx)(ve.c,{})}),Object(r.jsxs)("button",{className:Oe.a.center,onClick:function(){var e=new Date;d(e.getFullYear()),f(e.getMonth())},children:[Object(r.jsx)("span",{className:Oe.a.year,children:l}),"\xa0/\xa0",Object(r.jsx)("span",{className:Oe.a.month,children:me[h]})]}),Object(r.jsx)("button",{onClick:m(1),"aria-label":"frem en m\xe5ned",children:Object(r.jsx)(ve.d,{})}),Object(r.jsx)("button",{onClick:v(1),"aria-label":"frem ett \xe5r",children:Object(r.jsx)(ve.b,{})})]}),x]})},ke=function(){var e=Object(l.f)(),t=Object(c.useState)(!1),n=Object(u.a)(t,2),a=n[0],s=n[1],o=m().gameId,i=Object(c.useCallback)((function(){s(!1)}),[s]),d=Object(c.useCallback)((function(t){i(),e.push("/".concat(t))}),[i,e]),j=Object(c.useMemo)((function(){return a?Object(r.jsx)(A,{title:"Dato",onClose:function(){return s(!1)},children:Object(r.jsx)(_e,{onChange:d,gameId:o})}):null}),[a,s,d,o]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{onClick:function(){return s(!0)},className:[ie.a.button,he.a.button].filter(Boolean).join(" "),"aria-label":"velg en annen dato",children:Object(r.jsx)(H.h,{})}),j]})},we=n(42),Ce=n.n(we),Ne=function(){return Object(r.jsxs)("div",{className:Ce.a.header,children:[Object(r.jsxs)("h1",{children:[Object(r.jsx)(i.b,{to:"/",children:"Staver humle"}),Object(r.jsx)("img",{src:de,alt:"Staver humle icon"})]}),Object(r.jsx)(ke,{}),Object(r.jsx)(je,{})]})},Le=function(e){var t="";switch(e.reason){case"already-found":t="ordet har blitt allerede funnet";break;case"invalid-letters":t="bruker ugyldige bokstaver";break;case"missing-center":t="mangler obligatorisk bokstaven";break;case"too-short":t="for kort";break;case"unknown-word":t="ukjent ord";break;default:return null}return Object(r.jsx)("span",{children:t})},Be=n(34),Se=n.n(Be),Ee=function(){var e=Object(c.useState)(),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useRef)(),o=Object(c.useCallback)((function(e){a(e),s.current&&clearTimeout(s.current),s.current=setTimeout((function(){a(void 0),s.current=null}),2500)}),[s,a]),i=Object(c.useCallback)((function(e){var t=e.detail;o(t)}),[o]),l=Object(c.useCallback)((function(){o("pangram")}),[o]);Object(c.useEffect)((function(){return window.addEventListener("bad-guess",i),window.addEventListener("pangram",l),function(){window.removeEventListener("bad-guess",i),window.removeEventListener("pangram",l)}}),[i,l]);var d=Object(c.useMemo)((function(){return n?"pangram"===n?Object(r.jsx)("span",{className:Se.a.pangram,children:"Pangram!"}):Object(r.jsx)(Le,{reason:n}):null}),[n]);return Object(r.jsx)("div",{className:Se.a.container,children:d})},ye=n(23),Me=n(5),De=n.n(Me),Fe=Object(r.jsx)("span",{className:De.a.filler,children:"\u2013"}),Ie=function(e){for(var t=e.words,n=Object(u.a)(e.range,2),c=n[0],a=n[1],s=C().all,o=[Object(r.jsx)("th",{children:"\xa0"},"blank")],i=[],l=function(e){o.push(Object(r.jsx)("th",{children:e},e));var n=t.filter((function(t){return t.length===e})).length;i.push(Object(r.jsx)("td",{children:n||Fe},"total @ ".concat(e)))},d=c;d<=a;d+=1)l(d);o.push(Object(r.jsx)("th",{children:"\u03a3"},"column-sum"));for(var j=[],b=function(e){for(var n=s[e],o=t.filter((function(e){return e[0]===n})),i=[Object(r.jsx)("td",{className:[De.a.border,De.a.letter].join(" "),children:n},n)],l=function(e){var t=o.filter((function(t){return t.length===e})).length;i.push(Object(r.jsx)("td",{children:t||Fe},"".concat(n," @ ").concat(e)))},u=c;u<=a;u+=1)l(u);i.push(Object(r.jsx)("td",{className:De.a.border,children:o.length||Fe},"".concat(n," @ total"))),j.push(Object(r.jsx)("tr",{children:i},"row-".concat(n)))},h=0;h<s.length;h+=1)b(h);return j.push(Object(r.jsxs)("tr",{className:De.a.border,children:[Object(r.jsx)("td",{children:"\u03a3"}),i,Object(r.jsx)("td",{children:t.length})]},"row-totals")),Object(r.jsxs)("table",{className:De.a.grid,children:[Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{className:De.a.border,children:o})}),Object(r.jsx)("tbody",{children:j})]})},He=n(43),Ge=n.n(He),Pe=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useMemo)((function(){return n?Object(r.jsxs)(A,{title:"Oversikt",onClose:function(){return a(!1)},children:[Object(r.jsx)("p",{children:"Oversikten er et verkt\xf8y for \xe5 hjelp du finne alle ordene i puslespillet. Radene er ord som starter med hver bokstav, og kolonnene er hvor mange ord av hver lengde."}),Object(r.jsx)("p",{children:"Oversikten viser ord totalt, ogs\xe5. Lykke til med \xe5 finne alt!"})]}):null}),[n,a]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{className:Ge.a.button,onClick:function(){return a(!0)},"aria-label":"Oversikten hjelp",children:Object(r.jsx)(H.c,{})}),s]})},Ae=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")},Re=function(){var e=y().found,t=B().words,n=Object(c.useState)("remaining"),a=Object(u.a)(n,2),s=a[0],o=a[1],i=Object(c.useMemo)((function(){if("all"===s)return t;if("found"===s)return e;var n=e.reduce((function(e,t){return Object(q.a)(Object(q.a)({},e),{},Object(ye.a)({},t,!0))}),{});return t.filter((function(e){return!n[e]}))}),[s,t,e]),l=t.reduce((function(e,t){var n=Object(u.a)(e,2),r=n[0],c=n[1];return[Math.min(r,t.length),Math.max(c,t.length)]}),[1e3,3]);return Object(r.jsxs)("div",{className:De.a.container,children:[Object(r.jsxs)("div",{className:De.a.header,children:[Object(r.jsx)("button",{onClick:function(){return o("found")},className:Ae(De.a.mode,De.a.found,"found"===s&&De.a.active),children:"Funnet"}),Object(r.jsx)("button",{onClick:function(){return o("remaining")},className:Ae(De.a.mode,De.a.remaining,"remaining"===s&&De.a.active),children:"Gjenst\xe5r"}),Object(r.jsx)("button",{onClick:function(){return o("all")},className:Ae(De.a.mode,De.a.all,"all"===s&&De.a.active),children:"Alt"}),Object(r.jsx)(Pe,{})]}),Object(r.jsx)(Ie,{range:l,words:i})]})},Te=n(16),ze=n.n(Te),We=Object(c.createContext)({found:[],onGuess:function(){}}),Ye=function(){var e=C(),t=e.all,n=e.centerLetter,a=B().words,s=J(),o=s.found,i=s.addFoundWord,l=Object(c.useCallback)((function(e){if(e){var r=e.toLocaleLowerCase().split("").filter((function(e){return t.includes(e)})).join("");r.length===e.length?r.length<4?dispatchEvent(new CustomEvent("bad-guess",{detail:"too-short"})):r.includes(n)?o.includes(r)?dispatchEvent(new CustomEvent("bad-guess",{detail:"already-found"})):a.includes(r)?(i(r),S(r)&&dispatchEvent(new CustomEvent("pangram"))):dispatchEvent(new CustomEvent("bad-guess",{detail:"unknown-word"})):dispatchEvent(new CustomEvent("bad-guess",{detail:"missing-center"})):dispatchEvent(new CustomEvent("bad-guess",{detail:"invalid-letters"}))}}),[t,n,o,a,i]);return Object(r.jsx)(We.Provider,{value:{found:o,onGuess:l},children:Object(r.jsxs)("div",{className:ze.a.container,children:[Object(r.jsx)(Ne,{}),Object(r.jsxs)("div",{className:ze.a.gameContainer,children:[Object(r.jsxs)("div",{className:ze.a.buttonsContainer,children:[Object(r.jsx)(Ee,{}),Object(r.jsx)(re,{})]}),Object(r.jsxs)("div",{className:ze.a.column,children:[Object(r.jsx)("div",{className:ze.a.header,children:Object(r.jsx)(se,{})}),Object(r.jsx)(X,{}),Object(r.jsx)("div",{className:ze.a.footer,children:Object(r.jsx)(Re,{})})]})]})]})})},Je=function(){return Object(r.jsx)(w,{children:Object(r.jsx)(L,{children:Object(r.jsx)(Ye,{})})})},Ze=function(){return Object(r.jsx)(i.a,{children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/",exact:!0,children:Object(r.jsx)(Je,{})}),Object(r.jsx)(l.a,{path:"/:gameId",children:Object(r.jsx)(Je,{})})]})})},Ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(Ze,{})}),document.getElementById("root")),Ke()}],[[57,1,2]]]);
//# sourceMappingURL=main.bdec2935.chunk.js.map