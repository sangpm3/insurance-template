jQuery(document).ready(function (c) {
  function p() {
    l.off("change");
    l = c('.wishlist_table tbody input[type="checkbox"]');
    "undefined" != typeof c.fn.selectBox && c("select.selectBox").selectBox();
    q();
    m();
  }
  function v() {
    var a = c(".woocommerce-message");
    0 == a.length
      ? c("#yith-wcwl-form").prepend(
          yith_wcwl_l10n.labels.added_to_cart_message
        )
      : a.fadeOut(300, function () {
          c(this)
            .replaceWith(yith_wcwl_l10n.labels.added_to_cart_message)
            .fadeIn();
        });
  }
  function w(a) {
    var d = a.data("product-id"),
      e = c(".add-to-wishlist-" + d);
    d = {
      add_to_wishlist: d,
      product_type: a.data("product-type"),
      action: yith_wcwl_l10n.actions.add_to_wishlist_action,
    };
    if (yith_wcwl_l10n.multi_wishlist && yith_wcwl_l10n.is_user_logged_in) {
      var f = a
          .parents(".yith-wcwl-popup-footer")
          .prev(".yith-wcwl-popup-content"),
        g = f.find(".wishlist-select"),
        h = f.find(".wishlist-name");
      f = f.find(".wishlist-visibility");
      d.wishlist_id = g.val();
      d.wishlist_name = h.val();
      d.wishlist_visibility = f.val();
    }
    t()
      ? c.ajax({
          type: "POST",
          url: yith_wcwl_l10n.ajax_url,
          data: d,
          dataType: "json",
          beforeSend: function () {
            a.siblings(".ajax-loading").css("visibility", "visible");
          },
          complete: function () {
            a.siblings(".ajax-loading").css("visibility", "hidden");
          },
          success: function (d) {
            var f = c("#yith-wcwl-popup-message"),
              g = d.result,
              h = d.message;
            if (
              yith_wcwl_l10n.multi_wishlist &&
              yith_wcwl_l10n.is_user_logged_in
            ) {
              var k = c("select.wishlist-select");
              yith_wcwl_l10n.multi_wishlist &&
                "undefined" != typeof c.prettyPhoto &&
                "undefined" != typeof c.prettyPhoto.close &&
                c.prettyPhoto.close();
              k.each(function (a) {
                a = c(this);
                var e = a.find("option");
                e = e.slice(1, e.length - 1);
                e.remove();
                if ("undefined" != typeof d.user_wishlists)
                  for (e in ((e = 0), d.user_wishlists))
                    "1" != d.user_wishlists[e].is_default &&
                      c("<option>")
                        .val(d.user_wishlists[e].ID)
                        .html(d.user_wishlists[e].wishlist_name)
                        .insertBefore(a.find("option:last-child"));
              });
            }
            c("#yith-wcwl-message").html(h);
            f.css("margin-left", "-" + c(f).width() + "px").fadeIn();
            window.setTimeout(function () {
              f.fadeOut();
            }, 2e3);
            "true" == g
              ? ((!yith_wcwl_l10n.multi_wishlist ||
                  !yith_wcwl_l10n.is_user_logged_in ||
                  (yith_wcwl_l10n.multi_wishlist &&
                    yith_wcwl_l10n.is_user_logged_in &&
                    yith_wcwl_l10n.hide_add_button)) &&
                  e
                    .find(".yith-wcwl-add-button")
                    .hide()
                    .removeClass("show")
                    .addClass("hide"),
                e
                  .find(".yith-wcwl-wishlistexistsbrowse")
                  .hide()
                  .removeClass("show")
                  .addClass("hide")
                  .find("a")
                  .attr("href", d.wishlist_url),
                e
                  .find(".yith-wcwl-wishlistaddedbrowse")
                  .show()
                  .removeClass("hide")
                  .addClass("show")
                  .find("a")
                  .attr("href", d.wishlist_url))
              : "exists" == g
              ? ((!yith_wcwl_l10n.multi_wishlist ||
                  !yith_wcwl_l10n.is_user_logged_in ||
                  (yith_wcwl_l10n.multi_wishlist &&
                    yith_wcwl_l10n.is_user_logged_in &&
                    yith_wcwl_l10n.hide_add_button)) &&
                  e
                    .find(".yith-wcwl-add-button")
                    .hide()
                    .removeClass("show")
                    .addClass("hide"),
                e
                  .find(".yith-wcwl-wishlistexistsbrowse")
                  .show()
                  .removeClass("hide")
                  .addClass("show")
                  .find("a")
                  .attr("href", d.wishlist_url),
                e
                  .find(".yith-wcwl-wishlistaddedbrowse")
                  .hide()
                  .removeClass("show")
                  .addClass("hide")
                  .find("a")
                  .attr("href", d.wishlist_url))
              : (e
                  .find(".yith-wcwl-add-button")
                  .show()
                  .removeClass("hide")
                  .addClass("show"),
                e
                  .find(".yith-wcwl-wishlistexistsbrowse")
                  .hide()
                  .removeClass("show")
                  .addClass("hide"),
                e
                  .find(".yith-wcwl-wishlistaddedbrowse")
                  .hide()
                  .removeClass("show")
                  .addClass("hide"));
            c("body").trigger("added_to_wishlist", [a, e]);
          },
        })
      : alert(yith_wcwl_l10n.labels.cookie_disabled);
  }
  function y(a) {
    var d = a.parents(".cart.wishlist_table"),
      e = d.data("pagination"),
      f = d.data("per-page"),
      g = d.data("page"),
      h = a.parents("[data-row-id]");
    d.find(".pagination-row");
    var k = h.data("row-id"),
      n = d.data("id"),
      x = d.data("token");
    e = {
      action: yith_wcwl_l10n.actions.remove_from_wishlist_action,
      remove_from_wishlist: k,
      pagination: e,
      per_page: f,
      current_page: g,
      wishlist_id: n,
      wishlist_token: x,
    };
    c("#yith-wcwl-message").html("&nbsp;");
    "undefined" != typeof c.fn.block &&
      d.fadeTo("400", "0.6").block({
        message: null,
        overlayCSS: {
          background:
            "transparent url(" +
            yith_wcwl_l10n.ajax_loader_url +
            ") no-repeat center",
          backgroundSize: "16px 16px",
          opacity: 0.6,
        },
      });
    c("#yith-wcwl-form").load(
      yith_wcwl_l10n.ajax_url + " #yith-wcwl-form",
      e,
      function () {
        "undefined" != typeof c.fn.unblock &&
          d.stop(!0).css("opacity", "1").unblock();
        p();
        c("body").trigger("removed_from_wishlist", [a, h]);
      }
    );
  }
  function z(a, d) {
    var e = a.data("product-id"),
      f = c(document).find(".cart.wishlist_table"),
      g = f.data("pagination"),
      h = f.data("per-page"),
      k = f.data("id"),
      n = f.data("token");
    e = {
      action: yith_wcwl_l10n.actions.reload_wishlist_and_adding_elem_action,
      pagination: g,
      per_page: h,
      wishlist_id: k,
      wishlist_token: n,
      add_to_wishlist: e,
      product_type: a.data("product-type"),
    };
    t()
      ? c.ajax({
          type: "POST",
          url: yith_wcwl_l10n.ajax_url,
          data: e,
          dataType: "html",
          beforeSend: function () {
            "undefined" != typeof c.fn.block &&
              f.fadeTo("400", "0.6").block({
                message: null,
                overlayCSS: {
                  background:
                    "transparent url(" +
                    yith_wcwl_l10n.ajax_loader_url +
                    ") no-repeat center",
                  backgroundSize: "16px 16px",
                  opacity: 0.6,
                },
              });
          },
          success: function (a) {
            a = c(a).find("#yith-wcwl-form");
            d.replaceWith(a);
            p();
          },
        })
      : alert(yith_wcwl_l10n.labels.cookie_disabled);
  }
  function A(a) {
    var d = a.parents(".cart.wishlist_table"),
      e = d.data("token"),
      f = d.data("id"),
      g = a.parents("[data-row-id]"),
      h = g.data("row-id"),
      k = a.val(),
      n = d.data("pagination"),
      l = d.data("per-page"),
      m = d.data("page");
    e = {
      action: yith_wcwl_l10n.actions.move_to_another_wishlist_action,
      wishlist_token: e,
      wishlist_id: f,
      destination_wishlist_token: k,
      item_id: h,
      pagination: n,
      per_page: l,
      current_page: m,
    };
    "" != k &&
      ("undefined" != typeof c.fn.block &&
        d.fadeTo("400", "0.6").block({
          message: null,
          overlayCSS: {
            background:
              "transparent url(" +
              yith_wcwl_l10n.ajax_loader_url +
              ") no-repeat center",
            backgroundSize: "16px 16px",
            opacity: 0.6,
          },
        }),
      c("#yith-wcwl-form").load(
        yith_wcwl_l10n.ajax_url + " #yith-wcwl-form",
        e,
        function () {
          "undefined" != typeof c.fn.unblock &&
            d.stop(!0).css("opacity", "1").unblock();
          p();
          c("body").trigger("moved_to_another_wishlist", [a, g]);
        }
      ));
  }
  function u(a) {
    var d = c(this);
    a.preventDefault();
    d.parents(".wishlist-title").next().show();
    d.parents(".wishlist-title").hide();
  }
  function B(a) {
    var d = c(this);
    a.preventDefault();
    d.parents(".hidden-title-form").hide();
    d.parents(".hidden-title-form").prev().show();
  }
  function t() {
    if (navigator.cookieEnabled) return !0;
    document.cookie = "cookietest=1";
    var a = -1 != document.cookie.indexOf("cookietest=");
    document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
    return a;
  }
  function C() {
    if (
      0 != c(".yith-wcwl-add-to-wishlist").length &&
      0 == c("#yith-wcwl-popup-message").length
    ) {
      var a = c("<div>").attr("id", "yith-wcwl-message");
      a = c("<div>").attr("id", "yith-wcwl-popup-message").html(a).hide();
      c("body").prepend(a);
    }
  }
  function q() {
    l.on("change", function () {
      var a = "",
        d = c(this).parents(".cart.wishlist_table"),
        e = d.data("id");
      d = d.data("token");
      var f = document.URL;
      l.filter(":checked").each(function () {
        var e = c(this);
        a += 0 != a.length ? "," : "";
        a += e.parents("[data-row-id]").data("row-id");
      });
      f = r(f, "wishlist_products_to_add_to_cart", a);
      f = r(f, "wishlist_token", d);
      f = r(f, "wishlist_id", e);
      c("#custom_add_to_cart").attr("href", f);
    });
  }
  function m() {
    "undefined" != typeof c.prettyPhoto &&
      c('a[data-rel^="prettyPhoto[add_to_wishlist_"]')
        .add('a[data-rel="prettyPhoto[ask_an_estimate]"]')
        .unbind("click")
        .prettyPhoto({
          hook: "data-rel",
          social_tools: !1,
          theme: "pp_woocommerce",
          horizontal_padding: 20,
          opacity: 0.8,
          deeplinking: !1,
        });
  }
  function r(a, c, e) {
    e = c + "=" + e;
    a = a.replace(new RegExp("(&|\\?)" + c + "=[^&]*"), "$1" + e);
    -1 < a.indexOf(c + "=") ||
      (a = -1 < a.indexOf("?") ? a + ("&" + e) : a + ("?" + e));
    return a;
  }
  var D =
      "undefined" !== typeof wc_add_to_cart_params &&
      null !== wc_add_to_cart_params
        ? wc_add_to_cart_params.cart_redirect_after_add
        : "",
    l = c('.wishlist_table tbody input[type="checkbox"]:not(:disabled)');
  c(document)
    .on("yith_wcwl_init", function () {
      var a = c(this),
        d = c('.wishlist_table tbody input[type="checkbox"]:not(:disabled)');
      a.on("click", ".add_to_wishlist", function (a) {
        var e = c(this);
        a.preventDefault();
        jQuery(document.body).trigger("adding_to_wishlist");
        w(e);
        return !1;
      });
      a.on("click", ".remove_from_wishlist", function (a) {
        var e = c(this);
        a.preventDefault();
        y(e);
        return !1;
      });
      a.on("adding_to_cart", "body", function (a, c, d) {
        "undefined" != typeof c &&
          "undefined" != typeof d &&
          0 != c.closest(".wishlist_table").length &&
          ((d.remove_from_wishlist_after_add_to_cart = c
            .closest("[data-row-id]")
            .data("row-id")),
          (d.wishlist_id = c.closest(".wishlist_table").data("id")),
          (wc_add_to_cart_params.cart_redirect_after_add =
            yith_wcwl_l10n.redirect_to_cart));
      });
      a.on("added_to_cart", "body", function (a) {
        wc_add_to_cart_params.cart_redirect_after_add = D;
        a = c(".wishlist_table");
        a.find(".added").removeClass("added");
        a.find(".added_to_cart").remove();
      });
      a.on("added_to_cart", "body", v);
      a.on("cart_page_refreshed", "body", p);
      a.on("click", ".show-title-form", u);
      a.on("click", ".wishlist-title-with-form h2", u);
      a.on("click", ".hide-title-form", B);
      a.on("change", ".change-wishlist", function (a) {
        a = c(this);
        A(a);
        return !1;
      });
      a.on("change", ".yith-wcwl-popup-content .wishlist-select", function (a) {
        a = c(this);
        "new" == a.val()
          ? a
              .parents(".yith-wcwl-first-row")
              .next(".yith-wcwl-second-row")
              .css("display", "table-row")
          : a
              .parents(".yith-wcwl-first-row")
              .next(".yith-wcwl-second-row")
              .hide();
      });
      a.on("change", "#bulk_add_to_cart", function () {
        c(this).is(":checked")
          ? d.attr("checked", "checked").change()
          : d.removeAttr("checked").change();
      });
      a.on("click", "#custom_add_to_cart", function (a) {
        var e = c(this),
          g = e.parents(".cart.wishlist_table");
        yith_wcwl_l10n.ajax_add_to_cart_enabled &&
          (a.preventDefault(),
          "undefined" != typeof c.fn.block &&
            g.fadeTo("400", "0.6").block({
              message: null,
              overlayCSS: {
                background:
                  "transparent url(" +
                  yith_wcwl_l10n.ajax_loader_url +
                  ") no-repeat center",
                backgroundSize: "16px 16px",
                opacity: 0.6,
              },
            }),
          c("#yith-wcwl-form").load(
            yith_wcwl_l10n.ajax_url + e.attr("href") + " #yith-wcwl-form",
            { action: yith_wcwl_l10n.actions.bulk_add_to_cart_action },
            function () {
              "undefined" != typeof c.fn.unblock &&
                g.stop(!0).css("opacity", "1").unblock();
              d.off("change");
              d = c('.wishlist_table tbody input[type="checkbox"]');
              "undefined" != typeof c.fn.selectBox &&
                c("select.selectBox").selectBox();
              q();
              m();
            }
          ));
      });
      a.on("click", ".yith-wfbt-add-wishlist", function (a) {
        a.preventDefault();
        a = c(this);
        var d = c("#yith-wcwl-form");
        c("html, body").animate({ scrollTop: d.offset().top }, 500);
        z(a, d);
      });
      C();
      q();
      m();
    })
    .trigger("yith_wcwl_init");
  c(document).on("yith_infs_added_elem", function () {
    m();
  });
  "undefined" != typeof c.fn.selectBox && c("select.selectBox").selectBox();
  c(".copy-trigger").on("click", function (a) {
    a = c(".copy-target");
    0 < a.length &&
      (a.is("input")
        ? (navigator.userAgent.match(/ipad|iphone/i)
            ? a[0].setSelectionRange(0, 9999)
            : a.select(),
          document.execCommand("copy"))
        : ((a = c("<input/>", { val: a.text(), type: "text" })),
          b("body").append(a),
          navigator.userAgent.match(/ipad|iphone/i)
            ? a[0].setSelectionRange(0, 9999)
            : a.select(),
          document.execCommand("copy"),
          a.remove()));
  });
});
