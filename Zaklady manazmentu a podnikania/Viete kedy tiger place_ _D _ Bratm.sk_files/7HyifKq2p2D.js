/*!CK:4033580281!*//*1452450425,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["9Fct7"]); }

__d('AbstractDialog.react',['DialogX','LayerHideOnBlur','LayerHideOnEscape','React','ReactDOM'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=k.PropTypes,n={createSpec:function(o){return {displayName:o.displayName,propTypes:{behaviors:m.object,className:m.string,modal:m.bool,autohide:m.number,width:m.number,titleID:m.string,causalElement:m.object,causalElementRef:m.func,shown:m.bool,layerHideOnBlur:m.bool,hideOnEscape:m.bool,onToggle:m.func,fixedTopPosition:m.number},createLayer:function(p){var q=this.props.className,r=babelHelpers._extends({width:this.props.width,xui:true,autohide:this.props.autohide,classNames:q?q.split(' '):null,titleID:this.props.titleID,causalElement:this._getCausalElement(),fixedTopPosition:this.props.fixedTopPosition},o||{}),s=babelHelpers._extends({},o.addedBehaviors,this.props.behaviors);if(this.props.layerHideOnBlur!==false)s.LayerHideOnBlur=i;if(this.props.hideOnEscape===true)s.LayerHideOnEscape=j;r.addedBehaviors=this.enumerateBehaviors(s);var t=new h(r,p);t.conditionShow(this.props.shown);return t;},receiveProps:function(p,q){this.updateBehaviors(q.behaviors,p.behaviors);if(this.layer){this.layer.setCausalElement(this._getCausalElement());this.layer.conditionShow(p.shown);this.layer.setWidth(p.width);p.shown&&this.layer.updatePosition();}},_getCausalElement:function(){var p;if(this.props.causalElementRef){p=l.findDOMNode(this.props.causalElementRef());}else p=this.props.causalElement;return p;}};}};f.exports=n;},null);
__d('ReactAbstractContextualDialog',['ContextualDialog','ContextualDialogArrow','LayerAutoFocus','LayerHideOnEscape','LayerRefocusOnHide','React','ReactDOM'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=m.PropTypes,p={createSpec:function(q){return {displayName:q.displayName,propTypes:{position:o.oneOf(['above','below','left','right']),alignment:o.oneOf(['left','center','right']),offsetX:o.number,offsetY:o.number,width:o.number,autoFocus:o.bool,focusContextOnHide:o.bool,arrowBehavior:o.func,behaviors:o.object,shown:o.bool,context:o.object,contextRef:o.func,hoverContext:o.object,hoverContextRef:o.func,hoverShowDelay:o.number,hoverHideDelay:o.number,hideOnEscape:o.bool,onBeforeHide:o.func,onToggle:o.func,hasActionableContext:o.bool},immutableProps:{modal:null},createLayer:function(r){var s=this.props.context||n.findDOMNode(this.props.contextRef()),t=this.props.hoverContext||this.props.hoverContextRef&&n.findDOMNode(this.props.hoverContextRef()),u=babelHelpers._extends({context:s,hoverContext:t,hoverShowDelay:this.props.hoverShowDelay,hoverHideDelay:this.props.hoverHideDelay,position:this.props.position,alignment:this.props.alignment,offsetX:this.props.offsetX,offsetY:this.props.offsetY,width:this.props.width,shouldSetARIAProperties:!this.props.hasActionableContext,arrowBehavior:this.props.arrowBehavior||i,addedBehaviors:this.enumerateBehaviors(this.props.behaviors)},q||{}),v=new h(u,r);if(this.props.contextBounds)v.setContextWithBounds(s,this.props.contextBounds);if(this.props.autoFocus!==false)v.enableBehavior(j);if(this.props.hideOnEscape===true)v.enableBehavior(k);if(this.props.focusContextOnHide===false)v.disableBehavior(l);if(this.props.onBeforeHide)v.subscribe('beforehide',this.props.onBeforeHide);v.conditionShow(this.props.shown);return v;},receiveProps:function(r,s){this.updateBehaviors(s.behaviors,r.behaviors);var t=r.context||r.contextRef&&n.findDOMNode(r.contextRef());if(t)if(r.contextBounds){this.layer.setContextWithBounds(t,r.contextBounds);}else this.layer.setContext(t);this.layer.setPosition(r.position).setAlignment(r.alignment).setOffsetX(r.offsetX).setOffsetY(r.offsetY).setWidth(r.width).conditionShow(r.shown);}};}};f.exports=p;},null);
__d('List.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.PropTypes,l=h.createClass({displayName:'List',propTypes:{border:k.oneOf(['none','light','medium','dark']),spacing:k.oneOf(['none','small','medium','large']),direction:k.oneOf(['vertical','horizontal']),valign:k.oneOf(['baseline','top','middle','bottom']),edgepadding:k.bool},getDefaultProps:function(){return {border:'medium',spacing:'medium',direction:'vertical',valign:'top'};},render:function(){var m=this.props.border,n=this.props.direction,o=this.props.spacing,p=n==='horizontal'&&this.props.valign,q,r,s;q=(n==='vertical'?"_4kg":'')+(n==='horizontal'?' '+"_4ki":'')+(p==='top'?' '+"_509-":'')+(p==='middle'?' '+"_509_":'')+(p==='bottom'?' '+"_50a0":'');if(o!=='none'||m!=='none')r=(m==='none'?"_6-i":'')+(m==='light'?' '+"_4ks":'')+(m==='medium'?' '+"_4kt":'')+(m==='dark'?' '+"_4ku":'');if(o!=='none')s=(!this.props.edgepadding?"_6-h":'')+(o==='small'?' '+"_704":'')+(o==='medium'?' '+"_6-j":'')+(o==='large'?' '+"_703":'');var t=j("uiList",q,r,s);return (h.createElement('ul',babelHelpers._extends({},this.props,{className:j(this.props.className,t)}),this.props.children));}});f.exports=l;},null);
__d('InlineBlock.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.PropTypes,l={baseline:null,bottom:"_6d",middle:"_6b",top:"_6e"},m=h.createClass({displayName:'InlineBlock',propTypes:{alignv:k.oneOf(['baseline','bottom','middle','top']),height:k.number,fullWidth:k.bool},getDefaultProps:function(){return {alignv:'baseline',fullWidth:false};},render:function(){var n=l[this.props.alignv],o="_6a";if(this.props.fullWidth)o=j(o,"_5u5j");var p=j(o,n);if(this.props.height!=null){var q=h.createElement('div',{className:j("_6a",n),style:{height:this.props.height+'px'}});return (h.createElement('div',babelHelpers._extends({},this.props,{className:j(this.props.className,o),height:null}),q,h.createElement('div',{className:p},this.props.children)));}else return (h.createElement('div',babelHelpers._extends({},this.props,{className:j(this.props.className,p)}),this.props.children));}});f.exports=m;},null);
__d('PopoverMenu.react',['CSS','InlineBlock.react','Popover','PopoverMenu','React','ReactDOM','ReactElement','SubscriptionsHandler','cx','joinClasses','areEqual','setImmediate'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t=l.PropTypes,u=l.createClass({displayName:'ReactPopoverMenu',statics:{getFirstChild:function(v){var w=v.children;return Array.isArray(w)?w[0]:w;},getButtonSize:function(v){var w=u.getFirstChild(v);return w&&w.type.getButtonSize(w.props);}},propTypes:{alignh:t.oneOf(['left','center','right']),alignv:t.oneOf(['baseline','bottom','middle','top']),position:t.oneOf(['above','below','left','right']),layerBehaviors:t.array,menu:t.object,disabled:t.bool},getDefaultProps:function(){return {alignv:'middle'};},_menuSubscriptions:null,componentDidMount:function(){var v=m.findDOMNode(this.refs.root),w=v.firstChild;h.addClass(w,"_p");this._popover=new j(v,w,this.props.layerBehaviors,{alignh:this.props.alignh,position:this.props.position,disabled:this.props.disabled,arrowDimensions:{offset:0,length:0}});this._popoverMenu=new k(this._popover,w,this._createMenu(this.props.menu),this.props.behaviors);},componentDidUpdate:function(v){if(!r(v.menu,this.props.menu))s(this._recreateMenu);if(this.props.alignh!==v.alignh)this._popoverMenu.getPopover().getLayer().setAlignment(this.props.alignh);if(this.props.disabled!==v.disabled)if(this.props.disabled){this._popoverMenu.disable();}else this._popoverMenu.enable();},_recreateMenu:function(){if(this._menuSubscriptions){this._menuSubscriptions.release();this._menuSubscriptions=null;}this._unmountCurrentMenuItems();this._popoverMenu.setMenu(this._createMenu(this.props.menu));},render:function(){var v=l.Children.map(this.props.children,function(w,x){if(x===0){return n.cloneAndReplaceProps(w,babelHelpers._extends({},w.props,{className:q(w.props.className,"_p")}));}else return w;});return (l.createElement(i,babelHelpers._extends({},this.props,{className:q(this.props.className,"uiPopover"),ref:'root',disabled:null}),v));},componentWillUnmount:function(){this.hidePopover();if(this._menuSubscriptions){this._menuSubscriptions.release();this._menuSubscriptions=null;}this._popoverMenu&&this._popoverMenu.destroy();},_createMenu:function(v){var w=v.props,x=new v.type(w);this._menuSubscriptions=new o();if(w.onItemClick)this._menuSubscriptions.addSubscriptions(x.subscribe('itemclick',w.onItemClick));if(w.onItemFocus)this._menuSubscriptions.addSubscriptions(x.subscribe('focus',w.onItemFocus));if(w.onItemBlur)this._menuSubscriptions.addSubscriptions(x.subscribe('blur',w.onItemBlur));if(w.onChange)this._menuSubscriptions.addSubscriptions(x.subscribe('change',w.onChange));if(this.props.onShow)this._menuSubscriptions.addSubscriptions(this._popover.subscribe('show',this.props.onShow));if(this.props.onHide)this._menuSubscriptions.addSubscriptions(this._popover.subscribe('hide',this.props.onHide));return x;},getMenu:function(){return this._popoverMenu.getMenu();},showPopover:function(v){this._popover.showLayer();if(v){var w=this._popoverMenu.getMenu();w.blur();w.focusAnItem(v);}},hidePopover:function(){var v=this._popover;if(v&&v.isShown())v.hideLayer();},getFocusedItem:function(){var v=this._popoverMenu.getMenu();return v.getFocusedItem();},_unmountCurrentMenuItems:function(){var v=this.getMenu();v&&v.forEachItem(function(w){var x=w.getRoot().firstElementChild;x&&m.unmountComponentAtNode(x);});}});f.exports=u;},null);
__d('MenuItemNoAction',['MenuItem'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j;i=babelHelpers.inherits(k,h);j=i&&i.prototype;k.prototype.hasAction=function(){'use strict';return false;};function k(){'use strict';i.apply(this,arguments);}f.exports=k;},null);
__d('ReactMenu',['Menu','MenuItem','MenuItemNoAction','MenuSelectableItem','MenuTheme','ReactChildren','SelectableMenu','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q,r,s,t;function u(y){var z=[];m.forEach(y,function(aa){if(aa)z.push(aa);});return z;}function v(y){y.isReactLegacyFactory={};y.type=y;}q=babelHelpers.inherits(w,h);r=q&&q.prototype;function w(y,z){'use strict';var aa=babelHelpers._extends({theme:l,maxheight:y?y.maxheight:null,className:y?y.className:null},z);r.constructor.call(this,u(y.children),aa);}v(w);s=babelHelpers.inherits(x,n);t=s&&s.prototype;function x(y,z){'use strict';var aa=babelHelpers._extends({className:p("_57di",y?y.className:null),theme:l,multiple:y&&y.multiple,maxheight:y?y.maxheight:null},z);t.constructor.call(this,u(y.children),aa);}v(x);w.SelectableMenu=x;v(i);w.Item=i;w.ItemNoAction=j;v(k);w.SelectableItem=k;f.exports=w;},null);
__d('XUIDialogCancelButton.react',['React','XUIDialogButton.react','fbt'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.createClass({displayName:'XUIDialogCancelButton',render:function(){return (h.createElement(i,babelHelpers._extends({},this.props,{action:'cancel',label:j._("Cancel")})));}});f.exports=k;},null);
__d('XUIDialogOkayButton.react',['React','XUIDialogButton.react','cx','fbt','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=h.PropTypes,n=h.createClass({displayName:'XUIDialogOkayButton',propTypes:{action:m.oneOf(['confirm','cancel','button']).isRequired},render:function(){return (h.createElement(i,babelHelpers._extends({},this.props,{className:l(this.props.className,"_2z1w"),action:this.props.action,label:k._("OK")})));}});f.exports=n;},null);
__d('SimpleXUIDialog',['DialogX','LayerDestroyOnHide','LayerFadeOnHide','LayerFadeOnShow','LayerHideOnBlur','LayerHideOnEscape','React','XUIDialogCancelButton.react','XUIDialogBody.react','XUIDialogFooter.react','XUIDialogOkayButton.react','XUIDialogTitle.react','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){'use strict';if(c.__markCompiled)c.__markCompiled();var u=445,v={show:function(w,x,y,z){var aa=n.createElement(r,{action:'cancel',use:'confirm'});return this.showEx(w,x,aa,y,z);},showConfirm:function(w,x,y,z){var aa=false,ba=n.createElement('div',null,n.createElement(o,{onClick:function(){aa=false;}}),n.createElement(r,{action:'cancel',className:z&&z.autofocusConfirm?"autofocus":'',use:'confirm',onClick:function(){aa=true;}}));function ca(){y(aa);}return this.showEx(w,x,ba,ca,z);},showEx:function(w,x,y,z,aa){aa=aa||{};var ba=[i,k,j,m];if(aa.hideOnBlur!==false)ba.push(l);var ca={width:aa.width||u,xui:true,addedBehaviors:ba};if(x)x=n.createElement(s,{showCloseButton:true},x);if(y)y=n.createElement(q,{'data-testid':'simple_xui_dialog_footer'},y);var da=n.createElement('div',null,x,n.createElement(p,null,w),y),ea=new h(ca,da);if(z)ea.subscribe('hide',z);ea.show();return ea;}};f.exports=v;},null);
__d('ReactLayer',['React','ReactDOM','ReactBrowserEventEmitter','SubscriptionsHandler','emptyFunction','getObjectValues','invariant','renderSubtreeIntoContainer','requestAnimationFrame'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){'use strict';if(c.__markCompiled)c.__markCompiled();var q={componentDidMount:function(){this._layerContainer=document.createElement('div');this._renderContentIntoContainer();this.layer=this.createLayer(this._layerContainer);!this.layer?n(0):undefined;this.layerSubscriptions=new k();this.layerSubscribe('show',(function(){return this.props.onToggle&&this.props.onToggle(true);}).bind(this));this.layerSubscribe('hide',(function(){return this.props.onToggle&&this.props.onToggle(false);}).bind(this));this.layerSubscribe('blur',(function(){return this.props.onBlur&&this.props.onBlur();}).bind(this));this._resetBehaviors();},componentDidUpdate:function(s){this._renderContentIntoContainer();this.receiveProps(this.props,s);},componentWillUnmount:function(){i.unmountComponentAtNode(this._layerContainer);this._layerContainer=null;if(this.layerSubscriptions){this.layerSubscriptions.release();this.layerSubscriptions=null;}if(this.layer){this.layer.destroy();this.layer=null;}},_renderContentIntoContainer:function(){var s=false;o(this,h.createElement('div',null,this.props.children),this._layerContainer,(function(){if(s)p((function(){if(this.layer&&this.layer.isShown())this.layer.updatePosition();}).bind(this));}).bind(this));s=true;},render:function(){return null;},enumerateBehaviors:function(s){s=this.getEffectiveBehaviors(s);return m(s).filter(l.thatReturnsArgument);},_resetBehaviors:function(){this._diffBehaviors({},this.props.behaviors);},updateBehaviors:function(s,t){this._diffBehaviors(s,t);},_diffBehaviors:function(s,t){s=this.getEffectiveBehaviors(s);t=this.getEffectiveBehaviors(t);var u;for(u in s)if(!t[u])this.layer.disableBehavior(s[u]);for(u in t){var v=s[u],w=t[u];if(v&&w){!(v===w)?n(0):undefined;continue;}v&&this.layer.disableBehavior(v);w&&this.layer.enableBehavior(w);}},getEffectiveBehaviors:function(s){if(!this.getDefaultEnabledBehaviors)return s||{};return babelHelpers._extends({},this.getDefaultEnabledBehaviors(),s);},layerSubscribe:function(s,t){var u=this.layer,v=u.subscribe||u.addListener;this.layerSubscriptions.addSubscriptions(v.call(u,s,function(w,x){j.isEnabled()&&t(w,x);}));}},r={createClass:function(s){return h.createClass({mixins:[q,s]});}};f.exports=r;},null);
__d('XUIDialog.react',['AbstractDialog.react','LayerFadeOnShow','ReactLayer'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=j.createClass(h.createSpec({displayName:'XUIDialog',addedBehaviors:{LayerFadeOnShow:i}}));f.exports=k;},null);
__d('HasLayerContextMixin',['ReactDOM'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={getContextNode:function(){var j=this.props.context;if(this.props.contextRef){var k=this.props.contextRef();j=k&&h.findDOMNode(k);}return j;}};f.exports=i;},null);
__d('XUINotice.react',['React','Image.react','XUICloseButton.react','cx','fbt','ix','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){'use strict';if(c.__markCompiled)c.__markCompiled();var o=h.PropTypes,p={notify:{altText:l._("Notice"),className:null,iconSrc:m('/images/deprecated/glyphs/flat/info-flat_m.png')},success:{altText:l._("Success"),className:"_3qh4",iconSrc:m('/images/deprecated/glyphs/flat/checkmark_white_m.png')},warn:{altText:l._("Warning"),className:"_585o",iconSrc:m('/images/deprecated/glyphs/flat/error-flat_m.png')}},q=h.createClass({displayName:'XUINotice',propTypes:{onDismiss:o.func,use:o.oneOf(Object.keys(p)),size:o.oneOf(['medium','small'])},getDefaultProps:function(){return {use:'notify',size:'medium'};},render:function(){var r=this.props,s=r.children,t=r.className,u=r.onDismiss,v=r.use,w=babelHelpers.objectWithoutProperties(r,['children','className','onDismiss','use']),x=p[v];t=n("_585n",x.className,t);var y=null;if(u)y=h.createElement(j,{className:"_585q",href:'#',onClick:u});var z="_585r"+(u?' '+"_2i-a":'')+(this.props.size==='medium'?' '+"_50f4":'')+(this.props.size==='small'?' '+"_50f3":'');return (h.createElement('div',babelHelpers._extends({},w,{className:t}),h.createElement(i,{alt:x.altText,className:"_585p",src:x.iconSrc}),y,h.createElement('div',{className:z},s)));}});f.exports=q;},null);
__d('ReactXUIMenu',['ReactMenu','XUIMenuTheme','XUIMenuWithSquareCorner'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k,l,m,n;function o(r){r.isReactLegacyFactory={};r.type=r;}k=babelHelpers.inherits(p,h);l=k&&k.prototype;function p(r){'use strict';var s={theme:i};if(!r||r.withsquarecorner!==false)s.behaviors=[j];l.constructor.call(this,r,s);}o(p);m=babelHelpers.inherits(q,h.SelectableMenu);n=m&&m.prototype;function q(r){'use strict';var s={theme:i};if(!r||r.withsquarecorner!==false)s.behaviors=[j];n.constructor.call(this,r,s);}o(q);p.SelectableMenu=q;p.Item=h.Item;p.SelectableItem=h.SelectableItem;f.exports=p;},null);
__d('PopoverMenuOverlappingBorder',['CSS','DOM','Style','cx','shield'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();function m(n){'use strict';this._popoverMenu=n;this._popover=n.getPopover();this._triggerElem=n.getTriggerElem();}m.prototype.enable=function(){'use strict';this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',l(this._onSetMenu,this));};m.prototype.disable=function(){'use strict';this._popoverMenu.unsubscribe(this._setMenuSubscription);this._setMenuSubscription=null;this._removeBorderSubscriptions();this._removeShortBorder();};m.prototype._onSetMenu=function(){'use strict';this._removeBorderSubscriptions();this._menu=this._popoverMenu.getMenu();this._renderShortBorder(this._menu.getRoot());this._showSubscription=this._popover.subscribe('show',l(this._updateBorder,this));var n=this._updateBorder.bind(this);this._menuSubscription=this._menu.subscribe(['change','resize'],function(){setTimeout(n,0);});this._updateBorder();};m.prototype._updateBorder=function(){'use strict';var n=this._menu.getRoot(),o=this._triggerElem.offsetWidth,p=Math.max(n.offsetWidth-o,0);j.set(this._shortBorder,'width',p+'px');};m.prototype._renderShortBorder=function(n){'use strict';this._shortBorder=i.create('div',{className:"_54hx"});i.appendContent(n,this._shortBorder);h.addClass(n,"_54hy");};m.prototype._removeShortBorder=function(){'use strict';if(this._shortBorder){i.remove(this._shortBorder);this._shortBorder=null;h.removeClass(this._popoverMenu.getMenu().getRoot(),"_54hy");}};m.prototype._removeBorderSubscriptions=function(){'use strict';if(this._showSubscription){this._popover.unsubscribe(this._showSubscription);this._showSubscription=null;}if(this._menuSubscription){this._menu.unsubscribe(this._menuSubscription);this._menuSubscription=null;}};Object.assign(m.prototype,{_shortBorder:null,_setMenuSubscription:null,_showSubscription:null,_menuSubscription:null});f.exports=m;},null);