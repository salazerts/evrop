// Garden Gnome Software - Skin
// Pano2VR 6.0.2/17253
// Filename: Evrop.ggsk
// Generated Вс янв 26 15:37:00 2025

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenodeid', function() { me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #000000;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='bottom : -78px;';
		hs+='cursor : default;';
		hs+='height : 166px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1999px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._rectangle_1);
		el=me._thumbnail_menu=document.createElement('div');
		els=me._thumbnail_menu__content=document.createElement('div');
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 116px;';
		hs+='left : 50%;';
		hs+='margin-left : 0px;';
		hs+='margin-top : -58px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 0px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0) return;
			me._thumbnail_menu.ggScrollPosX = (me._thumbnail_menu__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
			me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth);
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.clientWidth);
		}
		me._thumbnail_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu.ggScrollPosX >= me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth)) {
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu.ggScrollPosX <= 0)) {
					me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.clientWidth);
			}, 10);
		}
		me._thumbnail_menu.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0) return;
			me._thumbnail_menu.ggScrollPosY = (me._thumbnail_menu__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
			me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.clientHeight - me._thumbnail_menu__vertScrollFg.clientHeight);
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.clientHeight);
		}
		me._thumbnail_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu.ggScrollPosY >= me._thumbnail_menu__vertScrollBg.clientHeight - me._thumbnail_menu__vertScrollFg.clientHeight)) {
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.clientHeight - me._thumbnail_menu__vertScrollFg.clientHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu.ggScrollPosY <= 0)) {
					me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.clientHeight);
			}, 10);
		}
		me._thumbnail_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t[0].clientX;
			me._thumbnail_menu.ggDragLastY = t[0].clientY;
			me._thumbnail_menu__content.ontouchend = function() {
				me._thumbnail_menu__content.ontouchend = null;
				me._thumbnail_menu__content.ontouchmove = null;
			}
			me._thumbnail_menu__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu.ggDragLastX;
				var diffY = t[0].clientY - me._thumbnail_menu.ggDragLastY;
				me._thumbnail_menu.ggDragLastX = t[0].clientX;
				me._thumbnail_menu.ggDragLastY = t[0].clientY;
				me._thumbnail_menu.ggScrollByX(-diffX);
				me._thumbnail_menu.ggScrollByY(-diffY);
			}
		}
		elHorScrollBg = me._thumbnail_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 1000px; height: 15px; background-color: rgba(49,49,49,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1000px; height: 15px; background-color: rgba(255,255,255,1); pointer-events: auto;');
		me._thumbnail_menu.ggScrollPosX = 0;
		me._thumbnail_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragLastX = e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t[0].clientX;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragLastX = t[0].clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu.ggScrollByXSmooth(20 * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Thumbnail Menu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='bottom : 0px;';
		hs+='height : 130px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1000px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e.getBoundingClientRect) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes()) {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var containerWidth = this.clientWidth;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = (contentWidth/-2) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = (contentHeight/-2) + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > this.clientWidth) {
					me._thumbnail_menu__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu.ggHorScrollVisible) {
					if (me._thumbnail_menu.ggVertScrollVisible) {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth - 15;
					} else {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth;
					}
					me._thumbnail_menu__horScrollBg.style.width = me._thumbnail_menu.ggAvailableWidth + 'px';
					me._thumbnail_menu.ggHPercentVisible = me._thumbnail_menu.ggAvailableWidth / contentWidth;
					if (me._thumbnail_menu.ggHPercentVisible > 1.0) me._thumbnail_menu.ggHPercentVisible = 1.0;
					me._thumbnail_menu.ggScrollWidth = Math.round(me._thumbnail_menu__horScrollBg.clientWidth * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu__horScrollFg.style.width = me._thumbnail_menu.ggScrollWidth + 'px';
					me._thumbnail_menu.ggScrollPosX = me._thumbnail_menu.ggScrollPosXPercent * me._thumbnail_menu.ggAvailableWidth;
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth);
					me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
					me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				} else {
					me._thumbnail_menu.ggScrollPosX = 0;
					me._thumbnail_menu.ggScrollPosXPercent = 0.0;
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggWidth = 100;
		el.ggHeight = 104;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._text_1 && me._thumbnail_cloner.ggInstances[i]._text_1.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._text_1.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			el.ggInstances = [];
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			el.ggCurrentFilter = filter;
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var numRows = el.ggNumRepeat;
			if (numRows < 1) numRows = 1;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				if (filter.length > 0) {
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner.ggWidth) + 'px';
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= numRows) {
					row = 0;
					column++;
				}
				}
			}
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_active();
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
		}
		el.ggFilter = [];
		el.ggId="Thumbnail Cloner";
		el.ggDx=-1000;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 104px;';
		hs+='left : -10000px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var w=player.getViewerSize().width;
			var h=player.getViewerSize().height
			if ((!me._thumbnail_cloner.ggLastSize) || (me._thumbnail_cloner.ggLastSize.w!=w) || (me._thumbnail_cloner.ggLastSize.h!=h)) {
				me._thumbnail_cloner.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner.ggUpdate();
			}
		}
		me._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu__content.appendChild(me._thumbnail_cloner);
		me.divSkin.appendChild(me._thumbnail_menu);
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : -2px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzEgMzIiPgogIDxpbWFnZSB3aWR0aD0iMzEiIGhlaWdodD0iMzIiIHRyYW5zZm9ybT0iIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWhDQVlBQUFDNEpxbFJBQUFBQ1hCSVdYTUFBQXNTQUFBTEVnSFMzWDc4QUFBQjYwbEVRVl'+
			'JZaGJWWFMzTENNQXkxTWxrMUtUbFIyejI5YmpsQTJ4TVJvRXZjVWJDRElrdUtIRnJOTURDeExEMDkvUWdNZlJjRGsvbEJMSTV1WitreFFIRXM2Nk11UHdBSTQva0NqWGhKY0V5TlRkWTA1NGdxSVpPdExLVjE2TlJMQ2tBbGlGQW5NdUFSMWJqQ0huZWVXYTVpZ0RxTkZvZ1Y1eWhOK3QycVJTSUlqODBDd1hVblBZdzZPYjRtQnBwTTJYV0ZPazlCYmRFVmF3QWMvV1UxUWcyb3VRYlFLYktBM3grSFEzaDVmUk12REgwblBqK2VMK0x6NzYvUDhMN2YzOEFLZ2NHdWU0cjg0SGc2cTVIVUFrRFo5ZDBDUU82QTArVUhXbXVjRGMrOXI2MWluSUJ4elRHQmtwelBYYkN3WmJ0U25YdjArSFM5ZHdHUjZLMzJ6Qm94'+
			'V2xQNVZPeEpLRVVucEd5cmN4UnhFazY1dDhRWitWeDhSbXZYNzRKSzJoZXJYV0Qwb1cwSUZTRG0rQmtJblFGUGRWZE14TUphU29rSUFBZVJOVmk0a2FDQXdEa3dTbmJJdmZvVWtNdlkyOVN4S3lWOElCVUtUdXFEYzJsUmNOdzVTc25BbWxFRG9Lc2cyWDB6QlZJZGJGbEdWa2hOSUpXY1A3aEMvMG8wV3psOXNPdTd5QkV1U09LVTB4U3hNeTBGSWdQcHZhQzFMb3BPK2ZPS29wVmt2UTJaYzFwRU5WMmdBOGdHYzA0TVJySnpFTmF4Sm1zUTd3eVF2OHlxc1JYSDN0MUFiZHdCQUpSb0g4aXZOemwxeStqQnYrc0xpOFV5Y3I3VGlTQ2N4WmkxTnIzVy9ZdUVFSDRCQzNTOXFiM2xIWndBQUFBQVNVVk9SSzVDWU'+
			'lJPSIvPgo8L3N2Zz4=';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_image_normalscreen;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzEgMzIiPgogIDxpbWFnZSB3aWR0aD0iMzEiIGhlaWdodD0iMzIiIHRyYW5zZm9ybT0iIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWhDQVlBQUFDNEpxbFJBQUFBQ1hCSVdYTUFBQXNTQUFBTEVnSFMzWDc4QUFBQjYwbEVRVl'+
			'JZaGJWWFMzTENNQXkxTWxrMUtUbFIyejI5YmpsQTJ4TVJvRXZjVWJDRElrdUtIRnJOTURDeExEMDkvUWdNZlJjRGsvbEJMSTV1WitreFFIRXM2Nk11UHdBSTQva0NqWGhKY0V5TlRkWTA1NGdxSVpPdExLVjE2TlJMQ2tBbGlGQW5NdUFSMWJqQ0huZWVXYTVpZ0RxTkZvZ1Y1eWhOK3QycVJTSUlqODBDd1hVblBZdzZPYjRtQnBwTTJYV0ZPazlCYmRFVmF3QWMvV1UxUWcyb3VRYlFLYktBM3grSFEzaDVmUk12REgwblBqK2VMK0x6NzYvUDhMN2YzOEFLZ2NHdWU0cjg0SGc2cTVIVUFrRFo5ZDBDUU82QTArVUhXbXVjRGMrOXI2MWluSUJ4elRHQmtwelBYYkN3WmJ0U25YdjArSFM5ZHdHUjZLMzJ6Qm94'+
			'V2xQNVZPeEpLRVVucEd5cmN4UnhFazY1dDhRWitWeDhSbXZYNzRKSzJoZXJYV0Qwb1cwSUZTRG0rQmtJblFGUGRWZE14TUphU29rSUFBZVJOVmk0a2FDQXdEa3dTbmJJdmZvVWtNdlkyOVN4S3lWOElCVUtUdXFEYzJsUmNOdzVTc25BbWxFRG9Lc2cyWDB6QlZJZGJGbEdWa2hOSUpXY1A3aEMvMG8wV3psOXNPdTd5QkV1U09LVTB4U3hNeTBGSWdQcHZhQzFMb3BPK2ZPS29wVmt2UTJaYzFwRU5WMmdBOGdHYzA0TVJySnpFTmF4Sm1zUTd3eVF2OHlxc1JYSDN0MUFiZHdCQUpSb0g4aXZOemwxeStqQnYrc0xpOFV5Y3I3VGlTQ2N4WmkxTnIzVy9ZdUVFSDRCQzNTOXFiM2xIWndBQUFBQVNVVk9SSzVDWU'+
			'lJPSIvPgo8L3N2Zz4=';
		me._button_image_normalscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_image_normalscreen;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_normalscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsFullscreen() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style[domTransition]='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.onclick=function (e) {
			player.exitFullscreen();
		}
		me._button_image_normalscreen.onmouseover=function (e) {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
		}
		me._button_image_normalscreen.onmouseout=function (e) {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzEgMzIiPgogIDxpbWFnZSB3aWR0aD0iMzEiIGhlaWdodD0iMzIiIHRyYW5zZm9ybT0iIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWhDQVlBQUFDNEpxbFJBQUFBQ1hCSVdYTUFBQXNTQUFBTEVnSFMzWDc4QUFBQjYwbEVRVl'+
			'JZaGJWWFMzTENNQXkxTWxrMUtUbFIyejI5YmpsQTJ4TVJvRXZjVWJDRElrdUtIRnJOTURDeExEMDkvUWdNZlJjRGsvbEJMSTV1WitreFFIRXM2Nk11UHdBSTQva0NqWGhKY0V5TlRkWTA1NGdxSVpPdExLVjE2TlJMQ2tBbGlGQW5NdUFSMWJqQ0huZWVXYTVpZ0RxTkZvZ1Y1eWhOK3QycVJTSUlqODBDd1hVblBZdzZPYjRtQnBwTTJYV0ZPazlCYmRFVmF3QWMvV1UxUWcyb3VRYlFLYktBM3grSFEzaDVmUk12REgwblBqK2VMK0x6NzYvUDhMN2YzOEFLZ2NHdWU0cjg0SGc2cTVIVUFrRFo5ZDBDUU82QTArVUhXbXVjRGMrOXI2MWluSUJ4elRHQmtwelBYYkN3WmJ0U25YdjArSFM5ZHdHUjZLMzJ6Qm94'+
			'V2xQNVZPeEpLRVVucEd5cmN4UnhFazY1dDhRWitWeDhSbXZYNzRKSzJoZXJYV0Qwb1cwSUZTRG0rQmtJblFGUGRWZE14TUphU29rSUFBZVJOVmk0a2FDQXdEa3dTbmJJdmZvVWtNdlkyOVN4S3lWOElCVUtUdXFEYzJsUmNOdzVTc25BbWxFRG9Lc2cyWDB6QlZJZGJGbEdWa2hOSUpXY1A3aEMvMG8wV3psOXNPdTd5QkV1U09LVTB4U3hNeTBGSWdQcHZhQzFMb3BPK2ZPS29wVmt2UTJaYzFwRU5WMmdBOGdHYzA0TVJySnpFTmF4Sm1zUTd3eVF2OHlxc1JYSDN0MUFiZHdCQUpSb0g4aXZOemwxeStqQnYrc0xpOFV5Y3I3VGlTQ2N4WmkxTnIzVy9ZdUVFSDRCQzNTOXFiM2xIWndBQUFBQVNVVk9SSzVDWU'+
			'lJPSIvPgo8L3N2Zz4=';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_image_fullscreen;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzEgMzIiPgogIDxpbWFnZSB3aWR0aD0iMzEiIGhlaWdodD0iMzIiIHRyYW5zZm9ybT0iIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWhDQVlBQUFDNEpxbFJBQUFBQ1hCSVdYTUFBQXNTQUFBTEVnSFMzWDc4QUFBQjYwbEVRVl'+
			'JZaGJWWFMzTENNQXkxTWxrMUtUbFIyejI5YmpsQTJ4TVJvRXZjVWJDRElrdUtIRnJOTURDeExEMDkvUWdNZlJjRGsvbEJMSTV1WitreFFIRXM2Nk11UHdBSTQva0NqWGhKY0V5TlRkWTA1NGdxSVpPdExLVjE2TlJMQ2tBbGlGQW5NdUFSMWJqQ0huZWVXYTVpZ0RxTkZvZ1Y1eWhOK3QycVJTSUlqODBDd1hVblBZdzZPYjRtQnBwTTJYV0ZPazlCYmRFVmF3QWMvV1UxUWcyb3VRYlFLYktBM3grSFEzaDVmUk12REgwblBqK2VMK0x6NzYvUDhMN2YzOEFLZ2NHdWU0cjg0SGc2cTVIVUFrRFo5ZDBDUU82QTArVUhXbXVjRGMrOXI2MWluSUJ4elRHQmtwelBYYkN3WmJ0U25YdjArSFM5ZHdHUjZLMzJ6Qm94'+
			'V2xQNVZPeEpLRVVucEd5cmN4UnhFazY1dDhRWitWeDhSbXZYNzRKSzJoZXJYV0Qwb1cwSUZTRG0rQmtJblFGUGRWZE14TUphU29rSUFBZVJOVmk0a2FDQXdEa3dTbmJJdmZvVWtNdlkyOVN4S3lWOElCVUtUdXFEYzJsUmNOdzVTc25BbWxFRG9Lc2cyWDB6QlZJZGJGbEdWa2hOSUpXY1A3aEMvMG8wV3psOXNPdTd5QkV1U09LVTB4U3hNeTBGSWdQcHZhQzFMb3BPK2ZPS29wVmt2UTJaYzFwRU5WMmdBOGdHYzA0TVJySnpFTmF4Sm1zUTd3eVF2OHlxc1JYSDN0MUFiZHdCQUpSb0g4aXZOemwxeStqQnYrc0xpOFV5Y3I3VGlTQ2N4WmkxTnIzVy9ZdUVFSDRCQzNTOXFiM2xIWndBQUFBQVNVVk9SSzVDWU'+
			'lJPSIvPgo8L3N2Zz4=';
		me._button_image_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_image_fullscreen;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsFullscreen() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style[domTransition]='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.onclick=function (e) {
			player.enterFullscreen();
		}
		me._button_image_fullscreen.onmouseover=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
		}
		me._button_image_fullscreen.onmouseout=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		me.divSkin.appendChild(me._button_fullscreen);
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggDx=-2;
		el.ggDy=29;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		me._loading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbg);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingtext);
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #808080;';
		hs+='cursor : default;';
		hs+='height : 13px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbar);
		me.divSkin.appendChild(me._loading);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 122px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_4.onclick=function (e) {
			player.openNext("{node16}","");
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_4);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 85px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.onclick=function (e) {
			player.openNext("{node5}","");
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_1);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 49px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_2.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_2);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_3.onclick=function (e) {
			player.openNext("{node7}","");
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_3);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._thumbnail_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._thumbnail_menu.ggUpdatePosition();
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		});
		player.addListener('beforechangenode', function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
			me._loading.ggVisible=true;
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_node1 && hotspotTemplates['ht_node'][i]._tt_ht_node1.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_left_mouseover = function(){
		if(hotspotTemplates['ht_node_left']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_left'].length; i++) {
				if (hotspotTemplates['ht_node_left'][i]._tt_ht_node0 && hotspotTemplates['ht_node_left'][i]._tt_ht_node0.logicBlock_visible) {
					hotspotTemplates['ht_node_left'][i]._tt_ht_node0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_right_mouseover = function(){
		if(hotspotTemplates['ht_node_right']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_right'].length; i++) {
				if (hotspotTemplates['ht_node_right'][i]._tt_ht_node && hotspotTemplates['ht_node_right'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node_right'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenodeid', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		me._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:3,sy:3 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 247px;';
		hs+='position : absolute;';
		hs+='top : 126px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_node.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._tt_ht_node1.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._tt_ht_node1.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._tt_ht_node1.logicBlock_visible();
		}
		me._ht_node.ggActivate=function () {
			player.changeFovLog(-2,true);
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.ggNodeChange=function () {
			if (me._ht_node.ggLastIsActive!=me._ht_node.ggIsActive()) {
				me._ht_node.ggLastIsActive=me._ht_node.ggIsActive();
				if (me._ht_node.ggIsActive()) {
					if (me._ht_node.ggActivate) me._ht_node.ggActivate();
				} else {
					if (me._ht_node.ggDeactivate) me._ht_node.ggDeactivate();
				}
			}
		}
		el=me._tt_ht_node1=document.createElement('div');
		els=me._tt_ht_node1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 51px;';
		hs+='left : -222px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 439px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 441px;';
		hs+='height: 53px;';
		hs+='border: 1px solid #c0188d;';
		hs+='border: 1px solid rgba(192,24,141,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_node'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node1.style[domTransition]='';
				if (me._tt_ht_node1.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node1.style.visibility=(Number(me._tt_ht_node1.style.opacity)>0||!me._tt_ht_node1.style.opacity)?'inherit':'hidden';
					me._tt_ht_node1.ggVisible=true;
				}
				else {
					me._tt_ht_node1.style.visibility="hidden";
					me._tt_ht_node1.ggVisible=false;
				}
			}
		}
		me._tt_ht_node1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._tt_ht_node1);
		el=me._svg_11=document.createElement('div');
		els=me._svg_11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi41LjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNzkuMyAyMDIuNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjc5LjMgMjAyLjc7Ii'+
			'B4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtvcGFjaXR5OjAuMzQ7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9DQo8L3N0eWxlPg0KPHBhdGggZD0iTTE0MC40LDBjMTcuMiwwLDkzLjYsNDguNSwxMzUsNzkuNmM2LjYsNSw0LjEsMTEuOC0yLjMsMTcuN2MtNC42LDQuMi0xNS4xLDkuOC0yMS4yLDkuNGMtMTUuMi0xLTExMi4zLTY4LjctMTEyLjMtNjguNw0KCWMtMC45LDAtNTkuMywzNy45LTEwMy4zLDYzLjNjLTMuNiwyLjEtMTguNyw0LTI4LjUtMi4xQy0wLjQsOTQtMS44LDgwLjksMi4xLDc4LjRDNDYuNyw0OS44LDExMy42LDAsMTQwLjQs'+
			'MHoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNDAuNCw5NmMxNy4yLDAsOTMuNiw0OC41LDEzNSw3OS42YzYuNiw1LDQuMSwxMS45LTIuMywxNy43Yy00LjYsNC4yLTE1LjEsOS44LTIxLjIsOS40DQoJYy0xNS4yLTEtMTEyLjMtNjguNy0xMTIuMy02OC43Yy0wLjksMC01OS4zLDM3LjktMTAzLjMsNjMuM2MtMy42LDIuMS0xOC43LDQtMjguNS0yLjFjLTguMy01LjItOS44LTE4LjItNS44LTIwLjcNCglDNDYuOCwxNDUuNywxMTMuNiw5NiwxNDAuNCw5NkwxNDAuNCw5NnoiLz4NCjwvc3ZnPg0K';
		me._svg_11__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_11;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_11.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._svg_11);
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_node_left(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_left=document.createElement('div');
		el.ggId="ht_node_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:3,sy:3 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 247px;';
		hs+='position : absolute;';
		hs+='top : 126px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_node_left.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_node_left.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_left.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_left.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_left']=true;
			me._tt_ht_node0.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_left.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_left']=false;
			me._tt_ht_node0.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_left.ontouchend=function (e) {
			me.elementMouseOver['ht_node_left']=false;
			me._tt_ht_node0.logicBlock_visible();
		}
		me._ht_node_left.ggActivate=function () {
			player.changeFovLog(-2,true);
		}
		me._ht_node_left.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_left.ggNodeChange=function () {
			if (me._ht_node_left.ggLastIsActive!=me._ht_node_left.ggIsActive()) {
				me._ht_node_left.ggLastIsActive=me._ht_node_left.ggIsActive();
				if (me._ht_node_left.ggIsActive()) {
					if (me._ht_node_left.ggActivate) me._ht_node_left.ggActivate();
				} else {
					if (me._ht_node_left.ggDeactivate) me._ht_node_left.ggDeactivate();
				}
			}
		}
		el=me._tt_ht_node0=document.createElement('div');
		els=me._tt_ht_node0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 51px;';
		hs+='left : -222px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 439px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 441px;';
		hs+='height: 53px;';
		hs+='border: 1px solid #c0188d;';
		hs+='border: 1px solid rgba(192,24,141,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_node_left'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node0.style[domTransition]='';
				if (me._tt_ht_node0.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node0.style.visibility=(Number(me._tt_ht_node0.style.opacity)>0||!me._tt_ht_node0.style.opacity)?'inherit':'hidden';
					me._tt_ht_node0.ggVisible=true;
				}
				else {
					me._tt_ht_node0.style.visibility="hidden";
					me._tt_ht_node0.ggVisible=false;
				}
			}
		}
		me._tt_ht_node0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_left.appendChild(me._tt_ht_node0);
		el=me._svg_10=document.createElement('div');
		els=me._svg_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi41LjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyMDguOCAyODMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwOC44IDI4MzsiIHhtbD'+
			'pzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe29wYWNpdHk6MC4zNDtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30NCjwvc3R5bGU+DQo8cGF0aCBkPSJNNC4xLDE0MC41YzAtMTcuMiw0OC41LTkzLjYsNzkuNi0xMzVjNS02LjYsMTEuOC00LjEsMTcuNywyLjNjNC4yLDQuNiw5LjgsMTUuMSw5LjQsMjEuMmMtMSwxNS4yLTY4LjcsMTEyLjMtNjguNywxMTIuMw0KCWMwLDAuOSwzNy45LDU5LjMsNjMuMywxMDMuM2MyLjEsMy42LDQsMTguNy0yLjEsMjguNWMtNS4yLDguMi0xOC4zLDkuNi0yMC44LDUuN0M1My45LDIzNC4yLDQuMSwxNjcuMyw0LjEsMTQw'+
			'LjV6Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTAwLjEsMTQwLjVjMC0xNy4yLDQ4LjUtOTMuNiw3OS42LTEzNWM1LTYuNiwxMS45LTQuMSwxNy43LDIuM2M0LjIsNC42LDkuOCwxNS4xLDkuNCwyMS4yDQoJYy0xLDE1LjItNjguNywxMTIuMy02OC43LDExMi4zYzAsMC45LDM3LjksNTkuMyw2My4zLDEwMy4zYzIuMSwzLjYsNCwxOC43LTIuMSwyOC41Yy01LjIsOC4zLTE4LjIsOS44LTIwLjcsNS44DQoJQzE0OS44LDIzNC4xLDEwMC4xLDE2Ny4zLDEwMC4xLDE0MC41TDEwMC4xLDE0MC41TDEwMC4xLDE0MC41eiIvPg0KPC9zdmc+DQo=';
		me._svg_10__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_10;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_10.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_left.appendChild(me._svg_10);
		me.__div = me._ht_node_left;
	};
	function SkinHotspotClass_ht_node_right(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_right=document.createElement('div');
		el.ggId="ht_node_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:3,sy:3 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 247px;';
		hs+='position : absolute;';
		hs+='top : 126px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_node_right.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_node_right.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_right.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_right.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_right']=true;
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_right.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_right']=false;
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_right.ontouchend=function (e) {
			me.elementMouseOver['ht_node_right']=false;
			me._tt_ht_node.logicBlock_visible();
		}
		me._ht_node_right.ggActivate=function () {
			player.changeFovLog(-2,true);
		}
		me._ht_node_right.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_right.ggNodeChange=function () {
			if (me._ht_node_right.ggLastIsActive!=me._ht_node_right.ggIsActive()) {
				me._ht_node_right.ggLastIsActive=me._ht_node_right.ggIsActive();
				if (me._ht_node_right.ggIsActive()) {
					if (me._ht_node_right.ggActivate) me._ht_node_right.ggActivate();
				} else {
					if (me._ht_node_right.ggDeactivate) me._ht_node_right.ggDeactivate();
				}
			}
		}
		el=me._tt_ht_node=document.createElement('div');
		els=me._tt_ht_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 51px;';
		hs+='left : -222px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 439px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 441px;';
		hs+='height: 53px;';
		hs+='border: 1px solid #c0188d;';
		hs+='border: 1px solid rgba(192,24,141,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_node_right'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node.style[domTransition]='';
				if (me._tt_ht_node.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else {
					me._tt_ht_node.style.visibility="hidden";
					me._tt_ht_node.ggVisible=false;
				}
			}
		}
		me._tt_ht_node.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_right.appendChild(me._tt_ht_node);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi41LjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyMDcuOSAyODMuOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjA3LjkgMjgzLjg7Ii'+
			'B4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtvcGFjaXR5OjAuMzQ7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9DQo8L3N0eWxlPg0KPHBhdGggZD0iTTIwNS4yLDE0My40YzAsMTcuMi00OC41LDkzLjYtNzkuNiwxMzVjLTUsNi42LTExLjgsNC4xLTE3LjctMi4zYy00LjItNC42LTkuOC0xNS4xLTkuNC0yMS4yYzEtMTUuMiw2OC43LTExMi4zLDY4LjctMTEyLjMNCgljMC0wLjktMzcuOS01OS4zLTYzLjMtMTAzLjNjLTIuMS0zLjYtNC0xOC43LDIuMS0yOC41YzUuMi04LjIsMTguMy05LjYsMjAuOC01LjdDMTU1LjQsNDkuNywyMDUuMiwxMTYu'+
			'NiwyMDUuMiwxNDMuNHoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMDkuMiwxNDMuNGMwLDE3LjItNDguNSw5My42LTc5LjYsMTM1Yy01LDYuNi0xMS45LDQuMS0xNy43LTIuM2MtNC4yLTQuNi05LjgtMTUuMS05LjQtMjEuMg0KCWMxLTE1LjIsNjguNy0xMTIuMyw2OC43LTExMi4zYzAtMC45LTM3LjktNTkuMy02My4zLTEwMy4zYy0yLjEtMy42LTQtMTguNywyLjEtMjguNUMxNS4yLDIuNSwyOC4yLDEsMzAuNyw1DQoJQzU5LjUsNDkuOCwxMDkuMiwxMTYuNiwxMDkuMiwxNDMuNEwxMDkuMiwxNDMuNEwxMDkuMiwxNDMuNHoiLz4NCjwvc3ZnPg0K';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_1;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_right.appendChild(me._svg_1);
		me.__div = me._ht_node_right;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
		} else
		if (hotspot.skinid=='ht_node_left') {
			hotspot.skinid = 'ht_node_left';
			hsinst = new SkinHotspotClass_ht_node_left(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_left_mouseover();;
		} else
		{
			hotspot.skinid = 'ht_node_right';
			hsinst = new SkinHotspotClass_ht_node_right(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_right_mouseover();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node_left']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_left'].length; i++) {
				hotspotTemplates['ht_node_left'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node_right']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_right'].length; i++) {
				hotspotTemplates['ht_node_right'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 100px; height: 104px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage=document.createElement('div');
		els=me._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_nodeimage;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Thumbnail NodeImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_nodeimage.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=true;
		}
		me._thumbnail_nodeimage.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=false;
		}
		me._thumbnail_nodeimage.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=false;
		}
		me._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._thumbnail_active=document.createElement('div');
		el.ggId="Thumbnail Active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 57px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				(me._thumbnail_active.ggIsActive() == true)
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				(me.elementMouseOver['thumbnail_active'] == true)
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style[domTransition]='border-color 0s';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me._thumbnail_active.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
			me._text_1.logicBlock_visible();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._text_1.logicBlock_visible();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._text_1.logicBlock_visible();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 64px;';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 89px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 91px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='border: 1px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['thumbnail_active'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1.style[domTransition]='';
				if (me._text_1.ggCurrentLogicStateVisible == 0) {
					me._text_1.style.visibility=(Number(me._text_1.style.opacity)>0||!me._text_1.style.opacity)?'inherit':'hidden';
					me._text_1.ggVisible=true;
				}
				else {
					me._text_1.style.visibility="hidden";
					me._text_1.ggVisible=false;
				}
			}
		}
		me._text_1.onmouseover=function (e) {
			me.elementMouseOver['text_1']=true;
		}
		me._text_1.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._text_1__text)
					return;
				}
			}
			me.elementMouseOver['text_1']=false;
		}
		me._text_1.ontouchend=function (e) {
			me.elementMouseOver['text_1']=false;
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_active.appendChild(me._text_1);
		me._thumbnail_nodeimage.appendChild(me._thumbnail_active);
		me.__div.appendChild(me._thumbnail_nodeimage);
	};
	me.addSkin();
	me._button_image_normalscreen.logicBlock_visible();
	me._button_image_fullscreen.logicBlock_visible();
	player.addListener('fullscreenenter', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('fullscreenexit', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenodeid', function(args) { me._thumbnail_cloner.callChildLogicBlocks_active(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_mouseover();me.callChildLogicBlocksHotspot_ht_node_left_mouseover();me.callChildLogicBlocksHotspot_ht_node_right_mouseover(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};