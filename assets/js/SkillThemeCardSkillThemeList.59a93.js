(window["db5216A"]=window["db5216A"]||[]).push([["SkillThemeCardSkillThemeList"],{"680c":function(t,e,n){"use strict";var i=n("83ee"),s=n("50cb"),a=n("f941"),o=n("5397");e["a"]={name:i["c"].THEME_DEFAULT,components:{FormElementHeader:s["default"],FormElementThemeContainer:a["default"]},props:{staName:o["a"].string.def("專長"),staViewData:o["a"].object.def({}),getReadMode:o["a"].any.def((function(){return!1}))},data:function(){return{}},computed:{skillList:function(){return this.staViewData.skills}},mounted:function(){}}},b1da:function(t,e,n){"use strict";n("a15b"),n("d81d"),n("b0c0");var i=n("5397"),s=n("13ea"),a=n.n(s);e["a"]={components:{},props:{skill:i["a"].object.def({})},data:function(){return{isEmpty:a.a}},computed:{name:function(){return this.skill.name},desc:function(){return this.descIsShow?this.skill.desc:""},tag:function(){return this.tagIsShow?this.skill.tag.map((function(t){return"#".concat(t)})).join(" "):""},descIsShow:function(){return!a()(this.skill.desc)},tagIsShow:function(){return!a()(this.skill.tag)}},mounted:function(){}}}}]);