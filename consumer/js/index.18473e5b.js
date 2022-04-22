(function(){var e={79090:function(e,t,n){"use strict";var r=n(20144),o=n(74480),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("MainPage")],1)},s=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("MenuComponent",{attrs:{controller:e.controller,title:e.title}}),n("b-tabs",[n("b-tab-item",{attrs:{label:"Position"}},[n("b-table",{attrs:{data:e.observations.positions,columns:e.columns.positions}})],1),n("b-tab-item",{attrs:{label:"Orientation"}},[n("b-table",{attrs:{data:e.observations.orientations,columns:e.columns.orientations}})],1),n("b-tab-item",{attrs:{label:"Velocity"}},[n("b-table",{attrs:{data:e.observations.positions,columns:e.columns.positions}})],1)],1),n("LoginModal",{attrs:{controller:e.controller}})],1)},d=[],l={name:"LoginModal",props:["controller"],data(){return{issuer:null,active:!0}},methods:{login(){this.controller.login(this.issuer)}},mounted(){this.controller.once("ready",(()=>{this.active=!1}))}};function c(e,t,n,r,o,i,s,a,d,l){"boolean"!==typeof s&&(d=a,a=s,s=!1);const c="function"===typeof n?n.options:n;let p;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,o&&(c.functional=!0)),r&&(c._scopeId=r),i?(p=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=p):t&&(p=s?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),p)if(c.functional){const e=c.render;c.render=function(t,n){return p.call(n),e(t,n)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,p):[p]}return n}const p=l;var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{attrs:{active:e.active,"has-modal-card":"","can-cancel":!1,"aria-role":"dialog","aria-label":"Solid Login","aria-modal":""}},[n("form",{attrs:{action:""},on:{submit:function(t){t.preventDefault(),e.login()}}},[n("div",{staticClass:"modal-card",staticStyle:{width:"100%"}},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[e._v("Login to Solid Provider")])]),e._v(" "),n("section",{staticClass:"modal-card-body"},[n("b-field",{attrs:{label:"Solid Issuer"}},[n("b-input",{attrs:{type:"url",placeholder:"Your Solid Issuer",required:""},model:{value:e.issuer,callback:function(t){e.issuer=t},expression:"issuer"}})],1)],1),e._v(" "),n("footer",{staticClass:"modal-card-foot"},[n("b-button",{attrs:{label:"Login",type:"is-primary"},on:{click:e.login}})],1)])])])},g=[];const y=void 0,h="data-v-5a0d7ace",m=void 0,f=!1,v=c({render:u,staticRenderFns:g},y,p,h,f,m,!1,void 0,void 0,void 0);var b=v,w={name:"MenuComponent",props:["controller","title"],data(){return{isLoggedIn:!1}},mounted(){this.controller.once("ready",(()=>{this.isLoggedIn=!0}))},methods:{logout(){this.controller.logout(),window.location=window.location}}};const S=w;var _=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{attrs:{"fixed-top":!0,type:"is-primary"},scopedSlots:e._u([{key:"brand",fn:function(){return[n("b-navbar-item",[n("h1",[e._v(e._s(e.title))])])]},proxy:!0},{key:"start",fn:function(){return[n("b-navbar-dropdown",{attrs:{label:"Applications"}},[n("b-navbar-item",{attrs:{href:"../consumer"}},[e._v("\n        Consumer application\n      ")]),e._v(" "),n("b-navbar-item",{attrs:{href:"../geolocationapi"}},[e._v("\n        Geolocation API\n      ")]),e._v(" "),n("b-navbar-item",{attrs:{href:"../qrscanner"}},[e._v("\n        QR-scanner\n      ")])],1)]},proxy:!0},{key:"end",fn:function(){return[n("b-navbar-item",{attrs:{tag:"div"}},[n("div",{staticClass:"buttons"},[e.isLoggedIn?n("a",{staticClass:"button is-light",on:{click:e.logout}},[e._v("\n                Log out\n            ")]):e._e()])])]},proxy:!0}])})},P=[];const O=void 0,Z="data-v-24ee66cd",I=void 0,D=!1,L=c({render:_,staticRenderFns:P},O,S,Z,D,I,!1,void 0,void 0,void 0);var N=L;n(7780);var T=n(72765),E=n(80313),F=n(13294),R=n(38638),x=n(97365),q=n(44654);let $=class extends q.OD{constructor(...e){super(...e),(0,T.Z)(this,"label",void 0),(0,T.Z)(this,"comment",void 0),(0,T.Z)(this,"featureOfInterest",void 0)}};(0,E.gn)([(0,F._J)({rdf:{predicate:R.Zv.label,language:"en"}}),(0,E.w6)("design:type",String)],$.prototype,"label",void 0),(0,E.gn)([(0,F._J)({rdf:{predicate:R.Zv.comment,language:"en"}}),(0,E.w6)("design:type",String)],$.prototype,"comment",void 0),(0,E.gn)([(0,F._J)({rdf:{predicate:R.Nj.isPropertyOf,serializer:e=>x.DataFactory.namedNode(e),deserializer:e=>e.value}}),(0,E.w6)("design:type",String)],$.prototype,"featureOfInterest",void 0),$=(0,E.gn)([(0,F.iN)({rdf:{type:R.tZ.ObservableProperty}})],$);let A=class extends q.OD{constructor(...e){super(...e),(0,T.Z)(this,"label",void 0),(0,T.Z)(this,"comment",void 0),(0,T.Z)(this,"properties",[])}};(0,E.gn)([(0,F._J)({rdf:{predicate:R.Zv.label,language:"en"}}),(0,E.w6)("design:type",String)],A.prototype,"label",void 0),(0,E.gn)([(0,F._J)({rdf:{predicate:R.Zv.comment,language:"en"}}),(0,E.w6)("design:type",String)],A.prototype,"comment",void 0),(0,E.gn)([(0,F.hZ)($,{rdf:{predicate:R.Nj.hasProperty}}),(0,E.w6)("design:type",Array)],A.prototype,"properties",void 0),A=(0,E.gn)([(0,F.iN)({rdf:{type:R.tZ.FeatureOfInterest}})],A);let C=class extends q.OD{constructor(...e){super(...e),(0,T.Z)(this,"resultTime",void 0),(0,T.Z)(this,"featuresOfInterest",[]),(0,T.Z)(this,"observedProperties",[]),(0,T.Z)(this,"results",[]),(0,T.Z)(this,"usedProcedures",[])}};(0,E.gn)([(0,F._J)({rdf:{predicate:R.tZ.resultTime,datatype:q.eF.dateTime}}),(0,E.w6)("design:type",Date)],C.prototype,"resultTime",void 0),(0,E.gn)([(0,F.hZ)(A,{rdf:{predicate:R.tZ.hasFeatureOfInterest}}),(0,E.w6)("design:type",Array)],C.prototype,"featuresOfInterest",void 0),(0,E.gn)([(0,F.hZ)($,{rdf:{predicate:R.tZ.observedProperty}}),(0,E.w6)("design:type",Array)],C.prototype,"observedProperties",void 0),(0,E.gn)([(0,F.hZ)(Object,{rdf:{predicate:R.tZ.hasResult}}),(0,E.w6)("design:type",Array)],C.prototype,"results",void 0),(0,E.gn)([(0,F.hZ)(String,{rdf:{predicate:R.tZ.usedProcedure,serializer:e=>q.xZ.namedNode(e),deserializer:e=>e.value}}),(0,E.w6)("design:type",Array)],C.prototype,"usedProcedures",void 0),C=(0,E.gn)([(0,F.iN)({rdf:{type:R.tZ.Observation}})],C);let J=class{constructor(){(0,T.Z)(this,"unit",void 0),(0,T.Z)(this,"numericValue",void 0)}};(0,E.gn)([(0,F._J)({rdf:{predicate:R.wY.unit}}),(0,E.w6)("design:type",F.fb)],J.prototype,"unit",void 0),(0,E.gn)([(0,F._J)({rdf:{predicate:R.wY.numericValue}}),(0,E.w6)("design:type",Number)],J.prototype,"numericValue",void 0),J=(0,E.gn)([(0,F.iN)({rdf:{type:R.wY.QuantityValue}})],J);let j=class{constructor(){(0,T.Z)(this,"spatialAccuracy",void 0)}};(0,E.gn)([(0,F._J)({rdf:{predicate:R.p7.hasSpatialAccuracy}}),(0,E.w6)("design:type",J)],j.prototype,"spatialAccuracy",void 0),j=(0,E.gn)([(0,F.iN)({rdf:{type:R.p7.Geometry}})],j);let V=class extends j{constructor(...e){super(...e),(0,T.Z)(this,"latitude",void 0),(0,T.Z)(this,"longitude",void 0),(0,T.Z)(this,"altitude",void 0)}};V=(0,E.gn)([(0,F.iN)({rdf:{serializer:e=>({predicates:{[R.p7.asWKT]:[e.altitude?x.DataFactory.literal(`POINT Z(${e.longitude} ${e.latitude} ${e.altitude})`,x.DataFactory.namedNode(R.p7.wktLiteral)):x.DataFactory.literal(`POINT(${e.longitude} ${e.latitude})`,x.DataFactory.namedNode(R.p7.wktLiteral))],[R.p7.coordinateDimension]:[x.DataFactory.literal(e.altitude?3:2)],[R.p7.spatialDimension]:[x.DataFactory.literal(e.altitude?3:2)],[R.p7.dimension]:[x.DataFactory.literal(e.altitude?3:2)]}})}})],V);let U=class extends j{constructor(...e){super(...e),(0,T.Z)(this,"coords",[])}};U=(0,E.gn)([(0,F.iN)({rdf:{serializer:e=>({predicates:{[R.p7.asWKT]:[x.DataFactory.literal(`POLYGON Z((${e.coords.map((e=>`${e.longitude} ${e.latitude} ${e.altitude}`)).join(", ")}))`,x.DataFactory.namedNode(R.p7.wktLiteral))],[R.p7.coordinateDimension]:[x.DataFactory.literal(3)],[R.p7.spatialDimension]:[x.DataFactory.literal(3)],[R.p7.dimension]:[x.DataFactory.literal(3)]}})}})],U);let k=class extends q.OD{constructor(...e){super(...e),(0,T.Z)(this,"label",void 0),(0,T.Z)(this,"comment",void 0)}};(0,E.gn)([(0,F._J)({rdf:{predicate:R.Zv.label,language:"en"}}),(0,E.w6)("design:type",String)],k.prototype,"label",void 0),(0,E.gn)([(0,F._J)({rdf:{predicate:R.Zv.comment,language:"en"}}),(0,E.w6)("design:type",String)],k.prototype,"comment",void 0),k=(0,E.gn)([(0,F.iN)({rdf:{type:R.tZ.Platform}})],k);let B=class{constructor(){(0,T.Z)(this,"street",void 0),(0,T.Z)(this,"country",void 0)}};(0,E.gn)([(0,F._J)({rdf:{predicate:R.w_.street_address}}),(0,E.w6)("design:type",String)],B.prototype,"street",void 0),(0,E.gn)([(0,F._J)({rdf:{predicate:R.w_.country_name}}),(0,E.w6)("design:type",String)],B.prototype,"country",void 0),B=(0,E.gn)([(0,F.iN)({rdf:{type:R.w_.Address}})],B);var M=n(91233);let X=class extends M.OD{constructor(...e){super(...e),(0,T.Z)(this,"label",void 0),(0,T.Z)(this,"comment",void 0),(0,T.Z)(this,"platform",void 0),(0,T.Z)(this,"geometry",void 0),(0,T.Z)(this,"address",void 0),(0,T.Z)(this,"within",void 0)}};var z;(0,E.gn)([(0,F._J)({rdf:{predicate:R.Zv.label,language:"en"}}),(0,E.w6)("design:type",String)],X.prototype,"label",void 0),(0,E.gn)([(0,F._J)({rdf:{predicate:R.Zv.comment,language:"en"}}),(0,E.w6)("design:type",String)],X.prototype,"comment",void 0),(0,E.gn)([(0,F._J)({rdf:{predicate:R.Nj.deployedOnPlatform,language:"en"}}),(0,E.w6)("design:type",k)],X.prototype,"platform",void 0),(0,E.gn)([(0,F._J)({rdf:{predicate:R.p7.hasGeometry}}),(0,E.w6)("design:type",U)],X.prototype,"geometry",void 0),(0,E.gn)([(0,F._J)({rdf:{predicate:R.w_.hasAddress}}),(0,E.w6)("design:type",B)],X.prototype,"address",void 0),(0,E.gn)([(0,F._J)({rdf:{predicate:R.p7.sfWithin}}),(0,E.w6)("design:type",String)],X.prototype,"within",void 0),X=(0,E.gn)([(0,F.iN)({rdf:{type:[R.Nj.Deployment,R.p7.SpatialObject]}})],X);let G=z=class extends q.OD{constructor(...e){super(...e),(0,T.Z)(this,"label",void 0),(0,T.Z)(this,"comment",void 0),(0,T.Z)(this,"deployment",void 0),(0,T.Z)(this,"subSystems",[]),(0,T.Z)(this,"procedures",[])}};(0,E.gn)([(0,F._J)({rdf:{predicate:R.Zv.label,language:"en"}}),(0,E.w6)("design:type",String)],G.prototype,"label",void 0),(0,E.gn)([(0,F._J)({rdf:{predicate:R.Zv.comment,language:"en"}}),(0,E.w6)("design:type",String)],G.prototype,"comment",void 0),(0,E.gn)([(0,F._J)({rdf:{predicate:R.Nj.hasDeployment,language:"en"}}),(0,E.w6)("design:type",X)],G.prototype,"deployment",void 0),(0,E.gn)([(0,F.hZ)(z,{rdf:{predicate:R.Nj.hasSubSystem}}),(0,E.w6)("design:type",Array)],G.prototype,"subSystems",void 0),(0,E.gn)([(0,F.hZ)(z,{rdf:{predicate:R.Nj._implements}}),(0,E.w6)("design:type",Array)],G.prototype,"procedures",void 0),G=z=(0,E.gn)([(0,F.iN)({rdf:{type:R.Nj.System}})],G);let H=class extends q.OD{constructor(...e){super(...e),(0,T.Z)(this,"label",void 0),(0,T.Z)(this,"comment",void 0),(0,T.Z)(this,"forProperty",void 0),(0,T.Z)(this,"minValue",void 0),(0,T.Z)(this,"maxValue",void 0),(0,T.Z)(this,"unit",void 0)}};(0,E.gn)([(0,F._J)({rdf:{predicate:R.Zv.label,language:"en"}}),(0,E.w6)("design:type",String)],H.prototype,"label",void 0),(0,E.gn)([(0,F._J)({rdf:{predicate:R.Zv.comment,language:"en"}}),(0,E.w6)("design:type",String)],H.prototype,"comment",void 0),(0,E.gn)([(0,F._J)({rdf:{predicate:R.Nj.forProperty}}),(0,E.w6)("design:type",$)],H.prototype,"forProperty",void 0),(0,E.gn)([(0,F._J)({rdf:{predicate:R.fK.minValue}}),(0,E.w6)("design:type",Number)],H.prototype,"minValue",void 0),(0,E.gn)([(0,F._J)({rdf:{predicate:R.fK.maxValue}}),(0,E.w6)("design:type",Number)],H.prototype,"maxValue",void 0),(0,E.gn)([(0,F._J)({rdf:{predicate:R.fK.unitCode}}),(0,E.w6)("design:type",F.fb)],H.prototype,"unit",void 0),H=(0,E.gn)([(0,F.iN)({rdf:{type:R.gL.Accuracy}})],H);let K=class extends q.OD{constructor(...e){super(...e),(0,T.Z)(this,"label",void 0),(0,T.Z)(this,"comment",void 0)}};(0,E.gn)([(0,F._J)({rdf:{predicate:R.Zv.label,language:"en"}}),(0,E.w6)("design:type",String)],K.prototype,"label",void 0),(0,E.gn)([(0,F._J)({rdf:{predicate:R.Zv.comment,language:"en"}}),(0,E.w6)("design:type",String)],K.prototype,"comment",void 0),K=(0,E.gn)([(0,F.iN)({rdf:{type:R.tZ.Procedure}})],K);var W=n(24408);const Y=new W.Nc("PL9").setUID("deployment_pl9").setBounds({topLeft:new F.sX(50.8203726927966,4.392241309019189),width:46.275,height:37.27,rotation:-34.04}),Q=new W.OR("PL9.3").setUID("deployment_pl9_3").setBuilding(Y).setBounds([new F.Sb(0,0),new F.Sb(0,13.73),new F.Sb(10.102,13.73),new F.Sb(10.102,23.54),new F.Sb(0,23.54),new F.Sb(0,37.27),new F.Sb(44.33,37.27),new F.Sb(44.33,23.54),new F.Sb(28.06,23.54),new F.Sb(28.06,13.73),new F.Sb(44.33,13.73),new F.Sb(44.33,0)]).setFloorNumber(3),ee=(new W.du("PL9.3.60").setUID("deployment_pl9_3_60").setFloor(Q).setBounds([new F.Sb(.57,31.25),new F.Sb(4.75,37.02)]),new W.du("PL9.3.58").setUID("deployment_pl9_3_58").setFloor(Q).setBounds([new F.Sb(4.75,31.25),new F.Sb(8.35,37.02)]),new W.du("PL9.3.56").setUID("deployment_pl9_3_56").setFloor(Q).setBounds([new F.Sb(8.35,31.25),new F.Sb(13.15,37.02)]),new W.du("PL9.3.32").setUID("deployment_pl9_3_32").setFloor(Q).setBounds([new F.Sb(29.97,31.25),new F.Sb(34.77,37.02)]),new W.du("PL9.3.54").setUID("deployment_pl9_3_54").setFloor(Q).setBounds([new F.Sb(13.15,31.25),new F.Sb(25.15,37.02)]),new W.du("PL9.3.62").setUID("deployment_pl9_3_62").setFloor(Q).setBounds([new F.Sb(27.55,24.105),new F.Sb(35.95,29.5)]),new W.CL("Corridor").setUID("deployment_pl9_3_corridor").setFloor(Q).setBounds([new F.Sb(2.39,6.015),new F.Sb(2.39,7.715),new F.Sb(18.015,7.715),new F.Sb(18.015,29.555),new F.Sb(2.39,29.555),new F.Sb(2.39,31.255),new F.Sb(41.94,31.255),new F.Sb(41.94,29.555),new F.Sb(20.315,29.555),new F.Sb(20.315,7.715),new F.Sb(41.94,7.715),new F.Sb(41.94,6.015)]),new W.ld("Lobby #1").setUID("deployment_pl9_3_lobby_1").setFloor(Q).setBounds([new F.Sb(20.315,20.155),new F.Sb(25.765,27.27)]),new W.ld("Lobby #2").setUID("deployment_pl9_3_lobby_2").setFloor(Q).setBounds([new F.Sb(18.015,.57),new F.Sb(20.315,6.015)]),new W.ld("Toilets #1").setUID("deployment_pl9_3_toilets_1").setFloor(Q).setBounds([new F.Sb(15.48,10.51),new F.Sb(18.015,12.71)]),new W.ld("Toilets #2").setUID("deployment_pl9_3_toilets_2").setFloor(Q).setBounds([new F.Sb(15.48,24.56),new F.Sb(18.015,26.76)]),new W.CL("Elevators").setUID("deployment_pl9_3_elevators").setFloor(Q).setBounds([new F.Sb(10.73,17.22),new F.Sb(18.02,20.06)]),new W.CL("Staircase").setUID("deployment_pl9_3_staircase").setFloor(Q).setBounds([new F.Sb(20.315,17.22),new F.Sb(27.56,20.06)]),"http://openhps.github.io/ipin2022-solid/tracking.ttl#");var te=n(66234),ne=n(24574),re=n(75991),oe=n(39223),ie=n(10593),se=n(25108);const ae=n(15515);class de extends ie.EventEmitter{constructor(e){super(),(0,T.Z)(this,"service",void 0),(0,T.Z)(this,"session",void 0),(0,T.Z)(this,"me",void 0),(0,T.Z)(this,"positionProperty",void 0),(0,T.Z)(this,"orientationProperty",void 0),(0,T.Z)(this,"velocityProperty",void 0),(0,T.Z)(this,"driver",void 0),this.service=new te.pJ({clientName:e,dataServiceDriver:new oe.w(String,{namespace:e.toLowerCase().replace(/\s/g,"_")}),restorePreviousSession:!0}),this.driver=new te.t6(F.Lo),this.service.emit("build"),this.service.on("login",(e=>{se.log(`Logged in ${e.info.webId}`),this.initialize()}))}get isLoggedIn(){return void 0!==this.session&&this.session.info.isLoggedIn}getPropertyURI(e,t){return this.service.getDocumentURL(e,`/properties/${t}.ttl`).href}async login(e){await this.service.login(e)}async logout(){await this.service.logout(this.getSession())}getSession(){return this.service.session}async initialize(){const e=this.getSession(),t=await this.service.getThing(e,e.info.webId),n=((0,re.gPA)(t,R.w_.fn)??(0,re.gPA)(t,R.ay.name)).value;this.me=new A(e.info.webId),this.positionProperty=new $(this.getPropertyURI(e,"position")),this.positionProperty.comment=`Geographical position of ${n}`,this.positionProperty.label="Geographical Position",this.positionProperty.featureOfInterest=this.me.value;const r=new H(this.getPropertyURI(e,"position")+"#accuracy");if(r.unit=F.MD.METER,r.minValue=-1,r.minValue=1,r.forProperty=this.positionProperty,r.label="Maximum accuracy",r.comment="The maximum accuracy for the geographical position",this.orientationProperty=new $(this.getPropertyURI(e,"orientation")),this.orientationProperty.comment=`Orientation of ${n}`,this.orientationProperty.label="Orientation",this.orientationProperty.featureOfInterest=this.me.value,this.velocityProperty=new $(this.getPropertyURI(e,"velocity")),this.velocityProperty.comment=`Velocity of ${n}`,this.velocityProperty.label="Velocity",this.velocityProperty.featureOfInterest=this.me.value,this.me.properties.push(this.positionProperty),this.me.properties.push(this.orientationProperty),this.me.properties.push(this.velocityProperty),t.predicates[R.Nj.hasProperty]||void 0===t)return se.log("Properties already exist!",this.me.id),void this.emit("ready");{const t=q.HW.serializeToSubjects(this.me);t.forEach((t=>{this.service.setThing(e,t)})),this.service.setThing(e,q.HW.serializeToSubjects(r)[0])}se.log("Created properties for",this.me.id),this.emit("ready")}async updatePosition(e){const t=this.getSession();void 0!==t&&(e.lnglat&&this.createPosition(t,e),e.heading&&this.createOrientation(t,e),e.speed&&this.createVelocity(t,e))}async findAllPositions(e,t,n=20,r){const o=await this.driver.queryBindingsSolid(`\n            PREFIX geosparql: <http://www.opengis.net/ont/geosparql#>\n            PREFIX geof: <http://www.opengis.net/def/function/geosparql/>\n            PREFIX ssn: <http://www.w3.org/ns/ssn/>\n            PREFIX sosa: <http://www.w3.org/ns/sosa/>\n            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n            PREFIX qudt: <http://qudt.org/schema/qudt/>\n\n            SELECT ?posGeoJSON ?datetime ?accuracy ?procedureLabel {\n                ?profile a sosa:FeatureOfInterest ;\n                        ssn:hasProperty ?property .\n                ?observation sosa:hasResult ?result ;\n                            sosa:observedProperty ?property ;\n                            sosa:resultTime ?datetime .\n                OPTIONAL {\n                    ?observation sosa:usedProcedure ?procedure .\n                    ?procedure rdfs:label ?procedureLabel .\n                }\n                ?result a geosparql:Geometry ;\n                        geosparql:hasSpatialAccuracy ?spatialAccuracy ;\n                        geosparql:asWKT ?posWKT .\n                BIND(geof:asGeoJSON(?posWKT) AS ?posGeoJSON)\n                {\n                    ?spatialAccuracy qudt:numericValue ?value ;\n                                    qudt:unit ?unit .\n                    OPTIONAL { ?unit qudt:conversionMultiplier ?multiplier }\n                    OPTIONAL { ?unit qudt:conversionOffset ?offset }\n                    BIND(COALESCE(?multiplier, 1) as ?multiplier)\n                    BIND(COALESCE(?offset, 0) as ?offset)\n                    BIND(((?value * ?multiplier) + ?offset) AS ?accuracy)\n                    ${t?`FILTER(?accuracy <= ${t})`:""}\n                }\n                ${r?`FILTER(?procedure = <${ee}${r}>)`:""}\n            } ORDER BY DESC(?datetime) LIMIT ${n}\n        `,e,{httpProxyHandler:new ne.ProxyHandlerStatic("https://proxy.linkeddatafragments.org/"),extensionFunctions:{"http://www.opengis.net/def/function/geosparql/asGeoJSON"(e){const t=e[0],n=/^<(https?:\/\/.*)>/g;let r=t.value.replace(n,"").replace("\n","").trim();const o=ae.parse(r);return q.xZ.literal(JSON.stringify(o),R.p7.geoJSONLiteral)}}});return o.map((e=>{const t=JSON.parse(e.get("posGeoJSON").value);if(t){const n=t.coordinates;return{latlng:n.splice(0,2),altitude:3===n.length?n[2]:void 0,timestamp:Date.parse(e.get("datetime").value),accuracy:Number(e.get("accuracy").value),procedure:e.get("procedureLabel")?e.get("procedureLabel").value:void 0}}})).filter((e=>void 0!==e))}async findAllVelocities(e,t=20){const n=await this.driver.queryBindingsSolid(`\n            PREFIX ssn: <http://www.w3.org/ns/ssn/>\n            PREFIX sosa: <http://www.w3.org/ns/sosa/>\n            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n            PREFIX qudt: <http://qudt.org/schema/qudt/>\n            PREFIX quantitykind: <http://qudt.org/vocab/quantitykind/>\n\n            SELECT ?speed ?datetime ?procedureLabel {\n                ?profile a sosa:FeatureOfInterest ;\n                        ssn:hasProperty ?property .\n                ?observation sosa:hasResult ?result ;\n                            sosa:observedProperty ?property ;\n                            sosa:resultTime ?datetime .\n                OPTIONAL {\n                    ?observation sosa:usedProcedure ?procedure .\n                    ?procedure rdfs:label ?procedureLabel .\n                }\n                ?result a qudt:QuantityValue ;\n                        qudt:unit ?unit ;\n                        qudt:numericValue ?speed .\n                { ?unit qudt:hasQuantityKind quantitykind:Velocity }\n                UNION\n                { ?unit qudt:hasQuantityKind quantitykind:Speed }\n            } ORDER BY DESC(?datetime) LIMIT ${t}\n        `,e,{httpProxyHandler:new ne.ProxyHandlerStatic("https://proxy.linkeddatafragments.org/")});return n.map((e=>({speed:Number(e.get("speed").value),timestamp:Date.parse(e.get("datetime").value),procedure:e.get("procedureLabel")?e.get("procedureLabel").value:void 0}))).filter((e=>void 0!==e))}async findAllOrientations(e,t=20){const n=await this.driver.queryBindingsSolid(`\n            PREFIX ssn: <http://www.w3.org/ns/ssn/>\n            PREFIX sosa: <http://www.w3.org/ns/sosa/>\n            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n            PREFIX qudt: <http://qudt.org/schema/qudt/>\n            PREFIX quantitykind: <http://qudt.org/vocab/quantitykind/>\n\n            SELECT ?heading ?datetime ?procedureLabel {\n                ?profile a sosa:FeatureOfInterest ;\n                        ssn:hasProperty ?property .\n                ?observation sosa:hasResult ?result ;\n                            sosa:observedProperty ?property ;\n                            sosa:resultTime ?datetime .\n                OPTIONAL {\n                    ?observation sosa:usedProcedure ?procedure .\n                    ?procedure rdfs:label ?procedureLabel .\n                }\n                ?result a qudt:QuantityValue ;\n                        qudt:unit ?unit ;\n                        qudt:numericValue ?heading .\n                ?unit qudt:hasQuantityKind quantitykind:Angle .\n            } ORDER BY DESC(?datetime) LIMIT ${t}\n        `,e,{httpProxyHandler:new ne.ProxyHandlerStatic("https://proxy.linkeddatafragments.org/")});return n.map((e=>({heading:Number(e.get("heading").value),timestamp:Date.parse(e.get("datetime").value),procedure:e.get("procedureLabel")?e.get("procedureLabel").value:void 0}))).filter((e=>void 0!==e))}async createPosition(e,t){const n=new Date,r=new C(this.service.getDocumentURL(e,`/properties/position.ttl#${n.getTime()}`).href);r.featuresOfInterest.push(this.me),r.resultTime=n,r.observedProperties.push(this.positionProperty);const o=new J;o.numericValue=t.accuracy,o.unit=F.MD.METER;const i=new V;i.latitude=t.lnglat[1],i.longitude=t.lnglat[0],i.altitude=t.altitude,i.spatialAccuracy=o,r.results.push(i),t.procedure&&r.usedProcedures.push(`${ee}${t.procedure}`),await this.service.setThing(e,q.HW.serializeToSubjects(r)[0])}async createOrientation(e,t){const n=new Date,r=new C(this.service.getDocumentURL(e,`/properties/orientation.ttl#${n.getTime()}`).href);r.featuresOfInterest.push(this.me),r.resultTime=n,r.observedProperties.push(this.orientationProperty);const o=new J;o.unit=F.KL.DEGREE,o.numericValue=t.heading,r.results.push(o),t.procedure&&r.usedProcedures.push(`${ee}${t.procedure}`),await this.service.setThing(e,q.HW.serializeToSubjects(r)[0])}async createVelocity(e,t){const n=new Date,r=new C(this.service.getDocumentURL(e,`/properties/velocity.ttl#${n.getTime()}`).href);r.featuresOfInterest.push(this.me),r.resultTime=n,r.observedProperties.push(this.velocityProperty);const o=new J;o.unit=F.hi.METER_PER_SECOND,o.numericValue=t.speed,r.results.push(o),t.procedure&&r.usedProcedures.push(`${ee}${t.procedure}`),await this.service.setThing(e,q.HW.serializeToSubjects(r)[0])}}var le=n(25108),ce={name:"MainPage",components:{LoginModal:b,MenuComponent:N},data(){return{title:"IPIN2022 Consumer Application",controller:null,columns:{positions:[{field:"datetime",label:"Date"},{field:"latitude",label:"Latitude"},{field:"longitude",label:"Longitude"},{field:"altitude",label:"Altitude"},{field:"accuracy",label:"Accuracy"},{field:"system",label:"System"}],orientations:[{field:"datetime",label:"Date"},{field:"heading",label:"Heading (degrees)"},{field:"system",label:"System"}],velocities:[{field:"datetime",label:"Date"},{field:"speed",label:"Speed"},{field:"system",label:"System"}]},observations:{positions:[],velocities:[],orientations:[]}}},beforeMount(){this.controller=new de(this.title)},mounted(){this.controller.once("ready",(()=>{this.loadOrientations(),this.loadPositions(),this.loadVelocities()}))},methods:{loadPositions(){this.controller.findAllPositions(this.controller.getSession(),50).then((e=>{this.observations.positions=e.map((e=>({datetime:new Date(e.timestamp).toTimeString(),longitude:e.latlng[0],latitude:e.latlng[1],altitude:e.altitude?e.altitude:"",accuracy:e.accuracy?e.accuracy+" m":"",system:e.procedure?e.procedure:""})))})).catch(le.error)},loadOrientations(){this.controller.findAllOrientations(this.controller.getSession(),50).then((e=>{this.observations.orientations=e.map((e=>({datetime:new Date(e.timestamp).toTimeString(),heading:e.heading,system:e.procedure?e.procedure:""})))})).catch(le.error)},loadVelocities(){this.controller.findAllVelocities(this.controller.getSession(),50).then((e=>{this.observations.velocities=e.map((e=>({datetime:new Date(e.timestamp).toTimeString(),speed:e.speed+" m/s",system:e.procedure?e.procedure:""})))})).catch(le.error)}}},pe=ce,ue=n(43736),ge=(0,ue.Z)(pe,a,d,!1,null,"406abae5",null),ye=ge.exports,he={name:"App",components:{MainPage:ye}},me=he,fe=(0,ue.Z)(me,i,s,!1,null,null,null),ve=fe.exports;r.Z.config.productionTip=!1,r.Z.use(o.ZP,{defaultIconPack:"fa"}),new r.Z({render:e=>e(ve)}).$mount("#app")},47412:function(){},47714:function(){},55843:function(){},95260:function(){},33587:function(){},60939:function(){},61324:function(){},81200:function(){},52361:function(){},94616:function(){}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,n.c=t,function(){var e=[];n.O=function(t,r,o,i){if(!r){var s=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var a=!0,d=0;d<r.length;d++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[d])}))?r.splice(d--,1):(a=!1,i<s&&(s=i));if(a){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var s={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){s[e]=function(){return r[e]}}));return s["default"]=function(){return r},n.d(i,s),i}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={826:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,s=r[0],a=r[1],d=r[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(d)var c=d(n)}for(t&&t(r);l<s.length;l++)i=s[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self["webpackChunkipin2022_consumer"]=self["webpackChunkipin2022_consumer"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(n.s=79090)}));r=n.O(r)})();
//# sourceMappingURL=index.18473e5b.js.map