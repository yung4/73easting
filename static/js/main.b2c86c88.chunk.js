(this.webpackJsonp73easting=this.webpackJsonp73easting||[]).push([[0],{37:function(e,t){},46:function(e,t,n){},47:function(e,t,n){},58:function(e,t){},59:function(e,t){},61:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),a=n(20),c=n.n(a),r=(n(46),n(47),n(4)),o=n(5),j=n(7),l=n(6),h=n(69),d=n(70),u=n(71),b=n(73),p=n(9),x=n(64),O=n(65),f=n(66),m=n(67),y=n(68),g=n(39),v=n.n(g),k=n(0),S=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).setPath=function(){e.setState({positions:e.props.path}),e.setState({current:e.props.path[0]},e.getPos)},e.getPos=function(){return e.props.t||e.setState({current:e.state.positions[0]}),e.props.t<e.state.positions.length&&e.setState({current:e.state.positions[e.props.t]}),e.state.positions[0]},e.state={positions:[],current:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getPos()}},{key:"componentDidUpdate",value:function(e){e!==this.props&&this.getPos()}},{key:"render",value:function(){var e=new p.Icon({iconUrl:"./tank.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});return Object(k.jsx)(v.a,{position:this.props.position,duration:this.props.duration,icon:e})}}]),n}(i.Component),C=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).getPos=function(){return e.props.t||e.setState({current:e.state.positions[0]}),e.props.t<e.state.positions.length&&e.setState({current:e.state.positions[e.props.t]}),e.state.positions[0]},e.state={positions:[[29.32222,45.32222],[29.43111,45.431111],[29.53778,46.53778],[29.77333,46.77333]],current:[29.422,46.265],count:0,title:"play",data:[[[28.85643634,45.61394235],[29.71808695,45.56638792],[29.97099315,45.91328797],[29.9472007,45.9817506],[30.21288568,47.00748137],[29.82603589,47.24900439],[29.82603589,47.24900439],[29.51654584,45.56988481]],[[28.83638362,45.19401757],[29.27670444,45.77230051],[29.26728993,45.74063001],[29.51654584,45.56988481],[29.52807889,45.92479145],[30.22532593,47.25797765],[30.24861429,47.51781989],[30.03892971,46.46242379]],[[28.85643634,45.61394235],[29.27670444,45.77230051],[28.86901146,45.03977544],[29.9472007,45.9817506],[30.21288568,47.00748137],[29.82603589,47.24900439],[29.82603589,47.24900439],[29.51654584,45.56988481]]]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getPos()}},{key:"componentDidUpdate",value:function(e){e!==this.props&&this.getPos()}},{key:"render",value:function(){var e=this,t=[29.422,46.265],n=new p.Icon({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),i=new p.Icon({iconUrl:"./tank.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});return Object(k.jsxs)(x.a,{center:t,zoom:8,scrollWheelZoom:!0,doubleClickZoom:!1,id:"mapLeaflet",children:[Object(k.jsx)(O.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(k.jsxs)(f.a,{children:[Object(k.jsx)(m.a,{position:t,icon:n,children:Object(k.jsxs)(y.a,{children:["A pretty CSS3 popup. ",Object(k.jsx)("br",{})," Easily customizable."]})}),Object(k.jsx)(m.a,{position:[29.32222,45.32222],children:Object(k.jsxs)(y.a,{children:["A pretty CSS3 popup. ",Object(k.jsx)("br",{})," Easily customizable."]})}),Object(k.jsx)(m.a,{position:[29.43111,45.431111],children:Object(k.jsxs)(y.a,{children:["A pretty CSS3 popup. ",Object(k.jsx)("br",{})," Easily customizable."]})}),Object(k.jsx)(m.a,{position:[29.53778,46.53778],children:Object(k.jsxs)(y.a,{children:["A pretty CSS3 popup. ",Object(k.jsx)("br",{})," Easily customizable."]})}),Object(k.jsx)(m.a,{position:[29.77333,46.77333],children:Object(k.jsxs)(y.a,{children:["A pretty CSS3 popup. ",Object(k.jsx)("br",{})," Easily customizable."]})})]}),Object(k.jsx)(f.a,{children:this.state.data.map((function(t,n){var s=t[e.props.t];return Object(k.jsx)(S,{position:s,duration:2e3,icon:i},n)}))})]})}}]),n}(i.Component),L=n(74),w=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).openInNewTab=function(e){var t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)},e.terrainAndWeather=function(){return Object(k.jsxs)(L.a.Body,{children:[Object(k.jsx)(L.a.Title,{children:"terrain and weather"}),Object(k.jsx)(L.a.Subtitle,{className:"mb-2 text-muted",children:"Card Subtitle"}),Object(k.jsx)(L.a.Text,{children:"terrain and weather"}),Object(k.jsx)(L.a.Link,{href:"#",children:"Card Link"}),Object(k.jsx)(L.a.Link,{href:"#",children:"Another Link"})]})},e.enemyAnalysis=function(){return Object(k.jsxs)(L.a.Body,{children:[Object(k.jsx)(L.a.Title,{children:"enemy analysis"}),Object(k.jsx)(L.a.Subtitle,{className:"mb-2 text-muted",children:"Card Subtitle"}),Object(k.jsx)(L.a.Text,{children:"enemy bad"}),Object(k.jsx)(L.a.Link,{href:"#",children:"Card Link"}),Object(k.jsx)(L.a.Link,{href:"#",children:"Another Link"})]})},e.friendlyUnits=function(){return Object(k.jsxs)(L.a.Body,{children:[Object(k.jsx)(L.a.Title,{children:"fren"}),Object(k.jsx)(L.a.Subtitle,{className:"mb-2 text-muted",children:"Card Subtitle"}),Object(k.jsx)(L.a.Text,{children:"\u6211\u6c92\u6709\u670b\u53cb"}),Object(k.jsx)(L.a.Link,{href:"#",children:"Card Link"}),Object(k.jsx)(L.a.Link,{href:"#",children:"Another Link"})]})},e.mission=function(){return Object(k.jsxs)(L.a.Body,{children:[Object(k.jsx)(L.a.Title,{children:"mishon"}),Object(k.jsx)(L.a.Subtitle,{className:"mb-2 text-muted",children:"Card Subtitle"}),Object(k.jsx)(L.a.Text,{children:'The mission of the VII Corps was "to attack, on order, the Iraqi defenses and destroy the Republican Guards Forces Command (RGFC) in zone"'}),Object(k.jsx)(L.a.Link,{href:"#",children:"Card Link"}),Object(k.jsx)(L.a.Link,{href:"#",children:"Another Link"})]})},e.intent=function(){return Object(k.jsxs)(L.a.Body,{children:[Object(k.jsx)(L.a.Title,{children:"intent"}),Object(k.jsx)(L.a.Subtitle,{className:"mb-2 text-muted",children:"Card Subtitle"}),Object(k.jsx)(L.a.Text,{children:"i cant think of a stupid joke for this one"}),Object(k.jsx)(L.a.Link,{href:"#",children:"Card Link"}),Object(k.jsx)(L.a.Link,{href:"#",children:"Another Link"})]})},e.concepts=function(){return Object(k.jsxs)(L.a.Body,{children:[Object(k.jsx)(L.a.Title,{children:"concepts"}),Object(k.jsx)(L.a.Subtitle,{className:"mb-2 text-muted",children:"Card Subtitle"}),Object(k.jsx)(L.a.Text,{children:"i cant think of a dumb joke for this one too"}),Object(k.jsx)(L.a.Link,{href:"#",children:"Card Link"}),Object(k.jsx)(L.a.Link,{href:"#",children:"Another Link"})]})},e.objectives=function(){return Object(k.jsxs)(L.a.Body,{children:[Object(k.jsx)(L.a.Title,{children:"objective"}),Object(k.jsx)(L.a.Subtitle,{className:"mb-2 text-muted",children:"Card Subtitle"}),Object(k.jsx)(L.a.Text,{children:"win"}),Object(k.jsx)(L.a.Link,{href:"#",children:"Card Link"}),Object(k.jsx)(L.a.Link,{href:"#",children:"Another Link"})]})},e.decisions=function(){return Object(k.jsxs)(L.a.Body,{children:[Object(k.jsx)(L.a.Title,{children:"decisions"}),Object(k.jsx)(L.a.Subtitle,{className:"mb-2 text-muted",children:"Card Subtitle"}),Object(k.jsx)(L.a.Text,{children:"yes or yes"}),Object(k.jsx)(L.a.Text,{children:"no or no"}),Object(k.jsx)(L.a.Link,{href:"#",children:"Card Link"}),Object(k.jsx)(L.a.Link,{href:"#",children:"Another Link"})]})},e.default=function(){return Object(k.jsxs)(L.a.Body,{children:[Object(k.jsx)(L.a.Title,{children:"hahahahahahshdhahdahahahaha"}),Object(k.jsx)(L.a.Subtitle,{className:"mb-2 text-muted",children:"Card Subtitle"}),Object(k.jsx)(L.a.Text,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(k.jsx)(L.a.Link,{href:"#",children:"Card Link"}),Object(k.jsx)(L.a.Link,{href:"#",children:"Another Link"})]})},e.about=function(){return Object(k.jsxs)(L.a.Body,{children:[Object(k.jsx)(L.a.Title,{children:"about"}),Object(k.jsx)(L.a.Text,{children:"By Dr. Soren Matei, Capt. Bradford Witt, and Christopher Yung"}),Object(k.jsx)(L.a.Link,{onClick:function(){return e.openInNewTab("https://github.com/yung4/73easting")},children:"Git Repo"}),Object(k.jsx)(L.a.Link,{href:"#",children:"Settings"})]})},e}return Object(o.a)(n,[{key:"render",value:function(){switch(this.props.index){case 0:return Object(k.jsx)(this.default,{});case 1:return Object(k.jsx)(this.terrainAndWeather,{});case 2:return Object(k.jsx)(this.enemyAnalysis,{});case 3:return Object(k.jsx)(this.friendlyUnits,{});case 4:return Object(k.jsx)(this.mission,{});case 5:return Object(k.jsx)(this.intent,{});case 6:return Object(k.jsx)(this.concepts,{});case 7:return Object(k.jsx)(this.objectives,{});case 8:return Object(k.jsx)(this.decisions,{});case 9:return Object(k.jsx)(this.about,{});default:return Object(k.jsx)(this.default,{})}}}]),n}(i.Component),T=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(k.jsxs)(L.a,{children:[Object(k.jsx)(b.a.Toggle,{as:L.a.Header,eventKey:this.props.index,children:this.props.heading}),Object(k.jsx)(b.a.Collapse,{eventKey:this.props.index,children:Object(k.jsx)(w,{index:this.props.index})})]})}}]),n}(i.Component),A=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={headings:["Terrain and Weather","Enemy Analysis","Friendly Units","Mission","Intent/Higher HQ","Concepts of Operation","Objectives","Decision Points","About"]},e}return Object(o.a)(n,[{key:"render",value:function(){return this.state.headings.map((function(e,t){return Object(k.jsx)(T,{index:t+1,heading:e},t)}))}}]),n}(i.Component),B=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(k.jsx)("div",{id:"map",style:{height:this.props.height,width:this.props.width},children:Object(k.jsx)("h2",{children:"correlation of forces"})})}}]),n}(i.Component),z=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).selectNext=function(){e.setState({counter:e.next()}),console.log("counter: "+e.state.counter)},e.selectPrev=function(){e.setState({counter:e.prev()}),console.log("counter: "+e.state.counter)},e.list=function(){},e.state={headings:["Set Obj","Change Bounds","Emplace Defenses","Attack","Stop"],counter:0},e}return Object(o.a)(n,[{key:"next",value:function(){return(this.state.counter+1)%this.state.headings.length}},{key:"prev",value:function(){return 0===this.state.counter?this.state.headings.length-1:this.state.counter-1}},{key:"render",value:function(){return Object(k.jsxs)("div",{className:"row",style:{alignItems:"center"},children:[Object(k.jsx)("button",{children:this.state.headings[0]}),Object(k.jsx)("button",{children:this.state.headings[1]}),Object(k.jsx)("button",{children:this.state.headings[2]}),Object(k.jsx)("button",{children:this.state.headings[3]}),Object(k.jsx)("button",{children:this.state.headings[4]})]})}}]),n}(i.Component),I=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(k.jsx)("div",{children:Object(k.jsx)("h1",{children:"."})})}}]),n}(i.Component),N=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(k.jsx)("div",{children:Object(k.jsx)("h1",{children:"."})})}}]),n}(i.Component),P=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(k.jsxs)(h.a,{fluid:!0,children:[Object(k.jsx)(d.a,{children:Object(k.jsx)(u.a,{children:Object(k.jsx)(z,{})})}),Object(k.jsxs)(d.a,{children:[Object(k.jsx)(u.a,{children:Object(k.jsx)(I,{})}),Object(k.jsx)(u.a,{children:Object(k.jsx)(N,{})})]})]})}}]),n}(i.Component),D=n(72),E=n(75),U=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).playBtn=function(){e.props.play(),e.setState({playing:!e.state.playing})},e.state={playing:!1},e}return Object(o.a)(n,[{key:"title",value:function(){return this.state.playing?"Pause":"Play"}},{key:"render",value:function(){return Object(k.jsxs)(D.a,{"aria-label":"Basic example",id:"mapControl",size:"lg",children:[Object(k.jsx)(E.a,{variant:"light",onClick:this.props.prev,children:"Prev"}),Object(k.jsx)(E.a,{variant:"light",onClick:this.props.play,children:this.props.playing?"Pause":"Play"}),Object(k.jsx)(E.a,{variant:"light",onClick:this.props.next,children:"Next"})]})}}]),n}(i.Component),M=n(35);var W=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).getClientDimensions=function(){var t=document.getElementById("client").clientHeight;e.setState({clientHeight:t});var n=document.getElementById("client").clientWidth;e.setState({clientWidth:n})},e.getCanvasDimensions=function(){var t=document.getElementById("Map").clientHeight;e.setState({height:t});var n=document.getElementById("Map").clientWidth;e.setState({width:n})},e.reset=function(){e.setState({t:0}),console.log("reset!")},e.animate=function(){e.state.playing&&(e.state.t!==e.state.max?(e.next(),setTimeout((function(){e.animate()}),2e3)):e.setState({playing:!1}))},e.play=function(){e.state.t>=e.state.max||(e.state.playing?e.setState({playing:!1}):e.setState({playing:!0},e.animate))},e.next=function(){if(e.state.t<e.state.max){var t=e.state.t;e.setState({t:t+1})}else e.setState({playing:!1}),e.reset()},e.prev=function(){if(e.state.t>0){var t=e.state.t;e.setState({t:t-1})}},e.state={height:0,width:0,clientHeight:0,clientWidth:0,t:0,max:7,playing:!1},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.getCanvasDimensions),this.getCanvasDimensions();!function(e){var t,n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.onload=function(e){for(var i=n.response,s=new Uint8Array(i),a=[],c=0;c!==s.length;++c)a[c]=String.fromCharCode(s[c]);var r=a.join(""),o=M.read(r,{type:"binary"}),j=o.SheetNames[0],l=o.Sheets[j];s=M.utils.sheet_to_json(l,{raw:!0}),t=l},n.send()}("./Database.xlsx")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.getCanvasDimensions)}},{key:"render",value:function(){return Object(k.jsxs)(h.a,{fluid:!0,children:[Object(k.jsxs)(d.a,{id:"top",children:[Object(k.jsxs)(u.a,{xs:8,id:"Map",style:{padding:0},children:[Object(k.jsxs)(u.a,{xs:8,className:"canvas",children:[Object(k.jsx)("div",{id:"mapTitle",children:Object(k.jsx)("h2",{children:"current phase"})}),Object(k.jsx)("div",{style:{height:this.state.height-85}}),Object(k.jsx)(U,{title:"play",play:this.play,prev:this.prev,next:this.next,playing:this.state.playing})]}),Object(k.jsx)(C,{t:this.state.t})]}),Object(k.jsxs)(u.a,{xs:4,id:"Sidebar",children:[Object(k.jsx)("h2",{children:"Orders"}),Object(k.jsx)(b.a,{defaultActiveKey:"0",children:Object(k.jsx)(A,{})})]})]}),Object(k.jsxs)(d.a,{id:"bottom",children:[Object(k.jsx)(u.a,{xs:8,id:"Timeline",children:Object(k.jsx)(B,{})}),Object(k.jsx)(u.a,{xs:4,id:"Information",children:Object(k.jsx)(P,{})})]})]})}}]),n}(i.Component);var H=function(){return Object(k.jsx)("div",{className:"App",id:"client",children:Object(k.jsx)(W,{})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),s(e),a(e),c(e)}))};n(60);c.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(H,{})}),document.getElementById("root")),F()}},[[61,1,2]]]);
//# sourceMappingURL=main.b2c86c88.chunk.js.map