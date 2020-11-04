import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, v as validate_each_argument, s as safe_not_equal, f as element, t as text, g as space, h as claim_element, j as children, k as claim_text, l as detach_dev, m as claim_space, n as attr_dev, o as add_location, H as HtmlTag, p as insert_dev, q as append_dev, r as noop, u as query_selector_all, w as _slicedToArray, x as destroy_each, y as validate_slots } from './client.dff2ca0f.js';

function cubicOut(t) {
  var f = t - 1.0;
  return f * f * f + 1.0;
}

function slide(node, _ref4) {
  var _ref4$delay = _ref4.delay,
      delay = _ref4$delay === void 0 ? 0 : _ref4$delay,
      _ref4$duration = _ref4.duration,
      duration = _ref4$duration === void 0 ? 400 : _ref4$duration,
      _ref4$easing = _ref4.easing,
      easing = _ref4$easing === void 0 ? cubicOut : _ref4$easing;
  var style = getComputedStyle(node);
  var opacity = +style.opacity;
  var height = parseFloat(style.height);
  var padding_top = parseFloat(style.paddingTop);
  var padding_bottom = parseFloat(style.paddingBottom);
  var margin_top = parseFloat(style.marginTop);
  var margin_bottom = parseFloat(style.marginBottom);
  var border_top_width = parseFloat(style.borderTopWidth);
  var border_bottom_width = parseFloat(style.borderBottomWidth);
  return {
    delay: delay,
    duration: duration,
    easing: easing,
    css: function css(t) {
      return 'overflow: hidden;' + "opacity: ".concat(Math.min(t * 20, 1) * opacity, ";") + "height: ".concat(t * height, "px;") + "padding-top: ".concat(t * padding_top, "px;") + "padding-bottom: ".concat(t * padding_bottom, "px;") + "margin-top: ".concat(t * margin_top, "px;") + "margin-bottom: ".concat(t * margin_bottom, "px;") + "border-top-width: ".concat(t * border_top_width, "px;") + "border-bottom-width: ".concat(t * border_bottom_width, "px;");
    }
  };
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/index.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
} // (48:4) {#each tiles as tile}


function create_each_block(ctx) {
  var div;
  var a;
  var t0_value =
  /*tile*/
  ctx[1].title + "";
  var t0;
  var a_href_value;
  var t1;
  var html_tag;
  var raw_value =
  /*tile*/
  ctx[1].icon + "";
  var t2;
  var div_class_value;
  var block = {
    c: function create() {
      div = element("div");
      a = element("a");
      t0 = text(t0_value);
      t1 = space();
      t2 = space();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      a = claim_element(div_nodes, "A", {
        href: true
      });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, t0_value);
      a_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      t2 = claim_space(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", a_href_value =
      /*tile*/
      ctx[1].url);
      add_location(a, file, 49, 8, 6520);
      html_tag = new HtmlTag(t2);
      attr_dev(div, "class", div_class_value = "tile " +
      /*tile*/
      ctx[1].color + " svelte-1wnovbj");
      add_location(div, file, 48, 6, 6480);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, a);
      append_dev(a, t0);
      append_dev(div, t1);
      html_tag.m(raw_value, div);
      append_dev(div, t2);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(48:4) {#each tiles as tile}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t;
  var div1;
  var div0;
  var each_value =
  /*tiles*/
  ctx[0];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var block = {
    c: function create() {
      t = space();
      div1 = element("div");
      div0 = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-csgj5x\"]", document.head);
      head_nodes.forEach(detach_dev);
      t = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div0_nodes);
      }

      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "ABK";
      attr_dev(div0, "class", "grid grid-cols-3 gap-4");
      add_location(div0, file, 46, 2, 6411);
      attr_dev(div1, "class", "container");
      add_location(div1, file, 45, 0, 6385);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div0, null);
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*tiles*/
      1) {
        each_value =
        /*tiles*/
        ctx[0];
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            each_blocks[_i4].m(div0, null);
          }
        }

        for (; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
      if (detaching) detach_dev(div1);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Routes", slots, []);
  var tiles = [{
    title: "Neo4j",
    color: "bg-teal-600",
    description: "Work",
    url: "https://community.neo4j.com/u/abk/",
    icon: "<svg class=\"fill-current\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Neo4j icon</title><path d=\"M22.717 8.417c-.014 2.959-2.412 5.321-5.391 5.309-2.946-.014-5.306-2.424-5.291-5.407.014-2.9 2.458-5.287 5.391-5.265 2.926.022 5.304 2.434 5.291 5.363zM9.813 24c-2.357.008-4.337-1.965-4.361-4.344-.024-2.33 1.955-4.33 4.295-4.34 2.438-.01 4.395 1.916 4.395 4.326.003 2.383-1.952 4.35-4.329 4.358zM8.923 2.84c0 1.562-1.286 2.847-2.841 2.839C4.533 5.672 3.221 4.35 3.246 2.82 3.271 1.268 4.588-.022 6.126 0c1.531.023 2.797 1.308 2.797 2.84zM21.9 11.948c-2.697 2.356-5 2.779-7.42 1.36-2.14-1.254-3.196-3.721-2.654-6.197.587-2.68 2.506-4.085 6.197-4.467C15.222.642 12.26.025 9.008.821c-.421.102-.241.261-.126.473.786 1.447.383 3.207-.942 4.151-1.325.943-3.126.755-4.218-.49-.322-.367-.427-.269-.654.063C.56 8.691.705 13.697 3.44 17.203c.492.631 1.027 1.219 1.691 1.71.75-3.208 3.394-4.251 5.519-3.888 2.593.442 4.002 2.602 3.758 5.787 3.516-.43 7.927-5.65 7.492-8.864zm-9.088-9.853c.462-.023.87.365.881.835.009.456-.347.827-.807.843-.506.017-.862-.32-.866-.818-.005-.476.328-.837.792-.86zM5.076 6.629c.48.009.853.401.832.876-.019.452-.398.804-.859.798-.46-.006-.821-.366-.828-.827-.007-.483.369-.855.855-.847zm-.721 3.099c.003-.451.374-.824.829-.835.461-.011.825.335.844.803.02.489-.337.878-.813.887-.473.007-.863-.381-.86-.855zm.515 2.371c.023-.46.396-.806.858-.797.479.01.822.391.802.891-.019.468-.384.813-.846.797-.478-.014-.838-.409-.814-.891zm1.992 3.034c-.5.007-.857-.345-.851-.838.006-.46.371-.832.818-.836.47-.004.873.391.869.853-.002.452-.371.813-.836.821zm3.831-12.11c-.469.012-.868-.38-.866-.849.002-.481.384-.84.876-.826.462.013.814.376.813.837-.001.449-.372.827-.823.838zm5.008 15.122c-.494-.004-.856-.375-.838-.858.018-.446.402-.81.855-.808.479.004.85.393.833.875-.015.462-.37.792-.85.791zm1.534-1.77c-.482.011-.872-.367-.866-.84.005-.462.363-.822.825-.833.485-.011.864.356.863.841.001.455-.362.821-.822.832z\"/></svg>"
  }, {
    title: "Github",
    color: "bg-indigo-900",
    description: "Code",
    url: "https://github.com/akollegger/",
    icon: "<svg class=\"fill-current\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>GitHub icon</title><path d=\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\"/></svg>"
  }, {
    title: "Twitter",
    color: "bg-blue-500",
    description: "Comment",
    url: "https://twitter.com/akollegger",
    icon: "<svg class=\"fill-current\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Twitter icon</title><path d=\"M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z\"/></svg>"
  }, {
    title: "dev.to",
    color: "bg-black",
    description: "Blog",
    url: "https://dev.to/akollegger",
    icon: "<svg class=\"fill-current\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" role=\"img\"><title>dev.to icon</title><path d=\"M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z\"/></svg>"
  }, {
    title: "LinkedIn",
    color: "bg-blue-400",
    description: "Network",
    url: "https://www.linkedin.com/in/akollegger/",
    icon: "<svg class=\"fill-current\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>LinkedIn icon</title><path d=\"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z\"/></svg>"
  }];
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      slide: slide,
      tiles: tiles
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("tiles" in $$props) $$invalidate(0, tiles = $$props.tiles);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [tiles];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
