"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9905],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=d(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(h,o(o({ref:e},u),{},{components:n})):a.createElement(h,o({ref:e},u))}));function h(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4382:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(3117),i=(n(7294),n(3905));const r={title:"The Boot File",id:"boot-tidal"},o=void 0,l={unversionedId:"configuration/boot-tidal",id:"configuration/boot-tidal",title:"The Boot File",description:"Everytime you start Tidal, the software is reading from a configuration file usually named BootTidal.hs. Generally, this file will be attached to your text editor (check the plugin you are using). Save this file somewhere safe, you will have to tweak it sometimes: changing options, adding new functionality, etc...",source:"@site/docs/configuration/boottidal.md",sourceDirName:"configuration",slug:"/configuration/boot-tidal",permalink:"/docs/configuration/boot-tidal",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/configuration/boottidal.md",tags:[],version:"current",lastUpdatedAt:1681951147,formattedLastUpdatedAt:"Apr 20, 2023",frontMatter:{title:"The Boot File",id:"boot-tidal"},sidebar:"docs",previous:{title:"Multi-User Tidal",permalink:"/docs/configuration/multiuser-tidal"},next:{title:"Tidal-vis",permalink:"/docs/configuration/tidal-vis"}},s={},d=[{value:"Controlling Latency",id:"controlling-latency",level:2},{value:"SuperDirt running in another host",id:"superdirt-running-in-another-host",level:2}],u={toc:d};function p(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Everytime you start Tidal, the software is reading from a configuration file usually named ",(0,i.kt)("inlineCode",{parentName:"p"},"BootTidal.hs"),". Generally, this file will be attached to your text editor (check the plugin you are using). Save this file somewhere safe, you will have to tweak it sometimes: changing options, adding new functionality, etc..."),(0,i.kt)("p",null,"Some users went really far into customizing their setup: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jarmitage/jarmlib"},"Jarmlib"),". You can take a look at their work to see how to extend your configuration file."),(0,i.kt)("p",null,"As an example, here is the ",(0,i.kt)("em",{parentName:"p"},"vanilla")," ",(0,i.kt)("inlineCode",{parentName:"p"},"BootTidal.hs")," file used by the ",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/tidalcycles/pulsar-tidalcycles/master/lib/BootTidal.hs"},"Pulsar Package for Tidal"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},':set -XOverloadedStrings\n:set prompt ""\n\nimport Sound.Tidal.Context\nimport System.IO (hSetEncoding, stdout, utf8)\nhSetEncoding stdout utf8\n\n-- total latency = oLatency + cFrameTimespan\ntidal <- startTidal (superdirtTarget {oLatency = 0.1, oAddress = "127.0.0.1", oPort = 57120}) (defaultConfig {cFrameTimespan = 1/20})\n\n:{\nlet p = streamReplace tidal\n    hush = streamHush tidal\n    list = streamList tidal\n    mute = streamMute tidal\n    unmute = streamUnmute tidal\n    solo = streamSolo tidal\n    unsolo = streamUnsolo tidal\n    once = streamOnce tidal\n    first = streamFirst tidal\n    asap = once\n    nudgeAll = streamNudgeAll tidal\n    all = streamAll tidal\n    resetCycles = streamResetCycles tidal\n    setcps = asap . cps\n    xfade i = transition tidal True (Sound.Tidal.Transition.xfadeIn 4) i\n    xfadeIn i t = transition tidal True (Sound.Tidal.Transition.xfadeIn t) i\n    histpan i t = transition tidal True (Sound.Tidal.Transition.histpan t) i\n    wait i t = transition tidal True (Sound.Tidal.Transition.wait t) i\n    waitT i f t = transition tidal True (Sound.Tidal.Transition.waitT f t) i\n    jump i = transition tidal True (Sound.Tidal.Transition.jump) i\n    jumpIn i t = transition tidal True (Sound.Tidal.Transition.jumpIn t) i\n    jumpIn\' i t = transition tidal True (Sound.Tidal.Transition.jumpIn\' t) i\n    jumpMod i t = transition tidal True (Sound.Tidal.Transition.jumpMod t) i\n    mortal i lifespan release = transition tidal True (Sound.Tidal.Transition.mortal lifespan release) i\n    interpolate i = transition tidal True (Sound.Tidal.Transition.interpolate) i\n    interpolateIn i t = transition tidal True (Sound.Tidal.Transition.interpolateIn t) i\n    clutch i = transition tidal True (Sound.Tidal.Transition.clutch) i\n    clutchIn i t = transition tidal True (Sound.Tidal.Transition.clutchIn t) i\n    anticipate i = transition tidal True (Sound.Tidal.Transition.anticipate) i\n    anticipateIn i t = transition tidal True (Sound.Tidal.Transition.anticipateIn t) i\n    forId i t = transition tidal False (Sound.Tidal.Transition.mortalOverlay t) i\n    d1 = p 1 . (|< orbit 0)\n    d2 = p 2 . (|< orbit 1)\n    d3 = p 3 . (|< orbit 2)\n    d4 = p 4 . (|< orbit 3)\n    d5 = p 5 . (|< orbit 4)\n    d6 = p 6 . (|< orbit 5)\n    d7 = p 7 . (|< orbit 6)\n    d8 = p 8 . (|< orbit 7)\n    d9 = p 9 . (|< orbit 8)\n    d10 = p 10 . (|< orbit 9)\n    d11 = p 11 . (|< orbit 10)\n    d12 = p 12 . (|< orbit 11)\n    d13 = p 13\n    d14 = p 14\n    d15 = p 15\n    d16 = p 16\n:}\n\n:{\nlet setI = streamSetI tidal\n    setF = streamSetF tidal\n    setS = streamSetS tidal\n    setR = streamSetR tidal\n    setB = streamSetB tidal\n:}\n\n:set prompt "tidal> "\n:set prompt-cont ""\n\n')),(0,i.kt)("h2",{id:"controlling-latency"},"Controlling Latency"),(0,i.kt)("p",null,"There are three configuration values which relate to latency: ",(0,i.kt)("inlineCode",{parentName:"p"},"cProcessAhead"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cFrameTimespan"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"oLatency"),". Here's an example configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},"tidal <- startTidal (superdirtTarget {oLatency = 0.05}) (defaultConfig {cFrameTimespan = 1/20, cProcessAhead = 3/10})\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Frame timespan"),": This is the duration of Tidal's calculation window in seconds. The default is ",(0,i.kt)("inlineCode",{parentName:"p"},"0.05 seconds"),", in other words a calculation rate of 20 frames per second. If you find Tidal is using too much CPU, increasing the frame timespan will probably help. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Latency"),": This parameter lets you account for the time a target takes to produce a sound. For example, we might need SuperDirt to schedule the event 100 ms before it should hit the speaker. A higher latency parameter will move the sound earlier in time. The default is ",(0,i.kt)("inlineCode",{parentName:"p"},"0.05 seconds"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Process Ahead"),": This parameter controls how far ahead Tidal will start processing events. It might need to be adjusted when a high latency value is set. Adjust this value if you get late messages in SuperCollider. The default is ",(0,i.kt)("inlineCode",{parentName:"p"},"0.3 seconds"),"."))),(0,i.kt)("h2",{id:"superdirt-running-in-another-host"},"SuperDirt running in another host"),(0,i.kt)("p",null,"If you're running ",(0,i.kt)("strong",{parentName:"p"},"SuperDirt")," in another host (perhaps, in a multi-user setup), you need to define this in a similar fashion as with the latency, except in this case the keyname is ",(0,i.kt)("inlineCode",{parentName:"p"},"oAddress"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},'tidal <- startTidal (superdirtTarget {oAddress = "192.168.0.23", oPort = 57120}) defaultConfig\n')),(0,i.kt)("p",null,"In case you need to alter multiple settings for ",(0,i.kt)("inlineCode",{parentName:"p"},"superdirtTarget"),", just separate them by a comma:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},'{oAddress = "1.2.3.4", oLatency = 0.04}\n')),(0,i.kt)("p",null,"Note that in ",(0,i.kt)("strong",{parentName:"p"},"Emacs")," (and possibly other editor) configuration files, you'll need to escape the quotation marks."),(0,i.kt)("p",null,"You will also need to configure ",(0,i.kt)("strong",{parentName:"p"},"SuperDirt")," to accept messages coming from another host. For example, starting ",(0,i.kt)("strong",{parentName:"p"},"Dirt")," like this will tell listen for OSC messages on all network interfaces:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},'~dirt.start(57120, [0, 0], NetAddr("0.0.0.0"));\n')))}p.isMDXComponent=!0}}]);