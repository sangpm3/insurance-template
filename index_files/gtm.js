// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "26",

      macros: [
        { function: "__e" },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__u",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementUrl",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.triggers",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
        },
        {
          function: "__d",
          vtp_elementSelector:
            "#wpcf7-f112-p12-o1 \u003E form \u003E p:nth-child(4) \u003E span \u003E input",
          vtp_attributeName: "value",
          vtp_selectorType: "CSS",
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 5],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", "0(\\d+)", "value", "+84$1"],
            ["map", "key", "\\840(\\d+)", "value", "+84$1"],
            ["map", "key", "\\+84(\\d+)", "value", "+84$1"],
            ["map", "key", "\\+840(\\d+)", "value", "+84$1"],
            ["map", "key", "\\+840(\\d+)", "value", "+84$1"],
            [
              "map",
              "key",
              "\\(\\+84\\)0(\\d+)\\s(\\d+)\\s(\\d+)",
              "value",
              "+84$1",
            ],
            [
              "map",
              "key",
              "(\\+0)\\s([()])\\d+([()])\\s\\d+-\\d+",
              "value",
              "+84$1",
            ],
          ],
        },
        {
          function: "__awec",
          vtp_mode: "MANUAL",
          vtp_phone_number: ["macro", 6],
        },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__e" },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementTarget",
          vtp_dataLayerVersion: 1,
        },
      ],
      tags: [
        {
          function: "__googtag",
          metadata: ["map"],
          once_per_event: true,
          vtp_tagId: "G-JW14JNXBD9",
          vtp_configSettingsTable: [
            "list",
            ["map", "parameter", "send_page_view", "parameterValue", "true"],
          ],
          tag_id: 14,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "11123951190",
          vtp_conversionLabel: "YeSZCOPcs5YYENaMqLgp",
          vtp_rdp: false,
          vtp_url: ["macro", 2],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 15,
        },
        {
          function: "__gclidw",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableCrossDomain: false,
          vtp_enableUrlPassthrough: false,
          vtp_enableCookieOverrides: false,
          vtp_enableCrossDomainFeature: true,
          tag_id: 16,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_productReportingDataSource: "JSON",
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: true,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "11123951190",
          vtp_conversionLabel: "27cACIO8yJYYENaMqLgp",
          vtp_rdp: false,
          vtp_url: ["macro", 2],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 17,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "11123951190",
          vtp_conversionLabel: "CYHdCNLG2ZYYENaMqLgp",
          vtp_rdp: false,
          vtp_url: ["macro", 2],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 18,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: true,
          vtp_cssProvidedEnhancedConversionValue: ["macro", 7],
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "11123951190",
          vtp_conversionLabel: "69a9CI3Zjd0YENaMqLgp",
          vtp_rdp: false,
          vtp_url: ["macro", 2],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 23,
        },
        { function: "__cl", tag_id: 25 },
        { function: "__cl", tag_id: 26 },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "105865492_11",
          tag_id: 27,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Edocument.addEventListener("wpcf7mailsent",function(a){window.dataLayer.push({event:"Sent_Form7",formId:a.detail.contactFormId,response:a.detail.inputs})});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 24,
        },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
        { function: "_cn", arg0: ["macro", 1], arg1: "wpcf7-submit" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.click" },
        { function: "_cn", arg0: ["macro", 3], arg1: "tel:0775 412 656" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.linkClick" },
        {
          function: "_re",
          arg0: ["macro", 4],
          arg1: "(^$|((^|,)105865492_11($|,)))",
        },
        {
          function: "_cn",
          arg0: ["macro", 3],
          arg1: "https://lh3.googleusercontent.com/X7JUHmDCeT845_MgAttYi_F8RsiHQr9ufnRqk2SiyiJZ1KBZgZek9wFOMuOwDuy4leA=w300",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "Sent_Form7" },
      ],
      rules: [
        [
          ["if", 0],
          ["add", 0, 2, 9, 6, 7, 8],
        ],
        [
          ["if", 1, 2],
          ["add", 1],
        ],
        [
          ["if", 3, 4, 5],
          ["add", 3],
        ],
        [
          ["if", 2, 6],
          ["add", 4],
        ],
        [
          ["if", 7],
          ["add", 5],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__awec",
        [46, "a"],
        [
          50,
          "e",
          [46, "q", "r", "s"],
          [
            22,
            [21, [16, [15, "r"], [15, "s"]], [44]],
            [
              46,
              [43, [15, "q"], [15, "s"], [16, [15, "r"], [15, "s"]]],
              [33, [15, "d"], [3, "d", [0, [15, "d"], 1]]],
            ],
          ],
        ],
        [
          50,
          "f",
          [46, "q"],
          [3, "d", 0],
          [52, "r", [8]],
          ["e", [15, "r"], [15, "q"], "first_name"],
          ["e", [15, "r"], [15, "q"], "last_name"],
          ["e", [15, "r"], [15, "q"], "street"],
          ["e", [15, "r"], [15, "q"], "sha256_first_name"],
          ["e", [15, "r"], [15, "q"], "sha256_last_name"],
          ["e", [15, "r"], [15, "q"], "sha256_street"],
          ["e", [15, "r"], [15, "q"], "city"],
          ["e", [15, "r"], [15, "q"], "region"],
          ["e", [15, "r"], [15, "q"], "country"],
          ["e", [15, "r"], [15, "q"], "postal_code"],
          [22, [20, [15, "d"], 0], [46, [36, [44]]], [46, [36, [15, "r"]]]],
        ],
        [52, "b", ["require", "getType"]],
        [41, "c"],
        [3, "c", [8]],
        [41, "d"],
        [3, "d", 0],
        [41, "g"],
        [3, "g", [16, [15, "a"], "mode"]],
        [
          38,
          [15, "g"],
          [46, "CODE", "AUTO"],
          [
            46,
            [
              5,
              [
                46,
                [52, "h", [7]],
                [52, "i", [30, [16, [15, "a"], "dataSource"], [8]]],
                ["e", [15, "c"], [15, "i"], "email"],
                ["e", [15, "c"], [15, "i"], "phone_number"],
                ["e", [15, "c"], [15, "i"], "sha256_email_address"],
                ["e", [15, "c"], [15, "i"], "sha256_phone_number"],
                [52, "j", [16, [15, "i"], "address"]],
                [
                  22,
                  [20, ["b", [15, "j"]], "array"],
                  [
                    46,
                    [
                      66,
                      "q",
                      [15, "j"],
                      [
                        46,
                        [
                          53,
                          [52, "r", ["f", [15, "q"]]],
                          [
                            22,
                            [21, [15, "r"], [44]],
                            [46, [2, [15, "h"], "push", [7, [15, "r"]]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [
                    46,
                    [
                      22,
                      [15, "j"],
                      [
                        46,
                        [
                          53,
                          [52, "q", ["f", [15, "j"]]],
                          [
                            22,
                            [21, [15, "q"], [44]],
                            [46, [2, [15, "h"], "push", [7, [15, "q"]]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [
                  22,
                  [18, [17, [15, "h"], "length"], 0],
                  [46, [43, [15, "c"], "address", [15, "h"]]],
                ],
                [4],
              ],
            ],
            [
              5,
              [
                46,
                [
                  52,
                  "k",
                  [
                    13,
                    [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"],
                  ],
                ],
                [52, "l", ["require", "internal.detectUserProvidedData"]],
                [41, "m"],
                [3, "m", [44]],
                [
                  22,
                  [
                    1,
                    [16, [15, "a"], "enableElementBlocking"],
                    [16, [15, "a"], "disabledElements"],
                  ],
                  [
                    46,
                    [
                      53,
                      [52, "q", [16, [15, "a"], "disabledElements"]],
                      [3, "m", [7]],
                      [
                        65,
                        "r",
                        [15, "q"],
                        [
                          46,
                          [
                            2,
                            [15, "m"],
                            "push",
                            [7, [16, [15, "r"], "column1"]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "n", ["l", [8, "excludeElementSelectors", [15, "m"]]]],
                [52, "o", [1, [15, "n"], [16, [15, "n"], "elements"]]],
                [
                  22,
                  [1, [15, "o"], [18, [17, [15, "o"], "length"], 0]],
                  [
                    46,
                    [
                      53,
                      [41, "q"],
                      [3, "q", 0],
                      [
                        63,
                        [7, "q"],
                        [23, [15, "q"], [17, [15, "o"], "length"]],
                        [33, [15, "q"], [3, "q", [0, [15, "q"], 1]]],
                        [
                          46,
                          [
                            53,
                            [52, "r", [16, [15, "o"], [15, "q"]]],
                            [
                              22,
                              [20, [16, [15, "r"], "type"], "email"],
                              [
                                46,
                                [
                                  43,
                                  [15, "c"],
                                  "email",
                                  [16, [15, "r"], "userData"],
                                ],
                                [4],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [4],
              ],
            ],
            [
              9,
              [
                46,
                [3, "g", "MANUAL"],
                ["e", [15, "c"], [15, "a"], "email"],
                ["e", [15, "c"], [15, "a"], "phone_number"],
                [52, "p", ["f", [15, "a"]]],
                [
                  22,
                  [21, [15, "p"], [44]],
                  [46, [43, [15, "c"], "address", [7, [15, "p"]]]],
                ],
              ],
            ],
          ],
        ],
        [43, [15, "c"], "_tag_mode", [15, "g"]],
        [36, [15, "c"]],
      ],
      [
        50,
        "__googtag",
        [46, "a"],
        [
          50,
          "m",
          [46, "v", "w"],
          [
            66,
            "x",
            [2, [15, "b"], "keys", [7, [15, "w"]]],
            [46, [43, [15, "v"], [15, "x"], [16, [15, "w"], [15, "x"]]]],
          ],
        ],
        [
          50,
          "n",
          [46],
          [
            36,
            [
              7,
              [17, [17, [15, "e"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
              [17, [17, [15, "e"], "SCHEMA"], "EP_TRANSPORT_URL"],
            ],
          ],
        ],
        [
          50,
          "o",
          [46, "v"],
          [52, "w", ["n"]],
          [
            65,
            "x",
            [15, "w"],
            [
              46,
              [
                53,
                [52, "y", [16, [15, "v"], [15, "x"]]],
                [22, [15, "y"], [46, [36, [15, "y"]]]],
              ],
            ],
          ],
          [36, [44]],
        ],
        [52, "b", ["require", "Object"]],
        [52, "c", ["require", "createArgumentsQueue"]],
        [
          52,
          "d",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [52, "e", [15, "__module_gtag"]],
        [52, "f", ["require", "internal.gtagConfig"]],
        [52, "g", ["require", "getType"]],
        [52, "h", ["require", "internal.loadGoogleTag"]],
        [52, "i", ["require", "logToConsole"]],
        [52, "j", ["require", "makeNumber"]],
        [52, "k", ["require", "makeString"]],
        [52, "l", ["require", "makeTableMap"]],
        [52, "p", [30, [17, [15, "a"], "tagId"], ""]],
        [
          22,
          [
            30,
            [21, ["g", [15, "p"]], "string"],
            [24, [2, [15, "p"], "indexOf", [7, "-"]], 0],
          ],
          [
            46,
            [
              "i",
              [
                0,
                "Invalid Measurement ID for the GA4 Configuration tag: ",
                [15, "p"],
              ],
            ],
            [2, [15, "a"], "gtmOnFailure", [7]],
            [36],
          ],
        ],
        [52, "q", [30, [17, [15, "a"], "configSettingsVariable"], [8]]],
        [
          52,
          "r",
          [
            30,
            [
              "l",
              [30, [17, [15, "a"], "configSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["m", [15, "q"], [15, "r"]],
        [52, "s", [30, [17, [15, "a"], "eventSettingsVariable"], [8]]],
        [
          52,
          "t",
          [
            30,
            [
              "l",
              [30, [17, [15, "a"], "eventSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["m", [15, "s"], [15, "t"]],
        [52, "u", [15, "q"]],
        ["m", [15, "u"], [15, "s"]],
        [
          22,
          [
            30,
            [
              2,
              [15, "u"],
              "hasOwnProperty",
              [7, [17, [17, [15, "e"], "SCHEMA"], "EP_USER_PROPERTIES"]],
            ],
            [17, [15, "a"], "userProperties"],
          ],
          [
            46,
            [
              53,
              [
                52,
                "v",
                [
                  30,
                  [
                    16,
                    [15, "u"],
                    [17, [17, [15, "e"], "SCHEMA"], "EP_USER_PROPERTIES"],
                  ],
                  [8],
                ],
              ],
              [
                "m",
                [15, "v"],
                [
                  30,
                  [
                    "l",
                    [30, [17, [15, "a"], "userProperties"], [7]],
                    "name",
                    "value",
                  ],
                  [8],
                ],
              ],
              [
                43,
                [15, "u"],
                [17, [17, [15, "e"], "SCHEMA"], "EP_USER_PROPERTIES"],
                [15, "v"],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "e"],
          "convertParameters",
          [
            7,
            [15, "u"],
            [17, [15, "e"], "GOLD_BOOLEAN_FIELDS"],
            [
              51,
              "",
              [7, "v"],
              [
                36,
                [
                  39,
                  [20, "false", [2, ["k", [15, "v"]], "toLowerCase", [7]]],
                  false,
                  [28, [28, [15, "v"]]],
                ],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "e"],
          "convertParameters",
          [
            7,
            [15, "u"],
            [17, [15, "e"], "GOLD_NUMERIC_FIELDS"],
            [51, "", [7, "v"], [36, ["j", [15, "v"]]]],
          ],
        ],
        [
          22,
          [16, [15, "d"], "enableDirectTagLoadingInGoogleTag"],
          [
            46,
            [
              22,
              [16, [15, "d"], "enableLoadGoogleTagOptionsObject"],
              [46, ["h", [15, "p"], [8, "firstPartyUrl", ["o", [15, "u"]]]]],
              [46, ["h", [15, "p"], ["o", [15, "u"]]]],
            ],
          ],
        ],
        ["f", [15, "p"], [15, "u"], [8, "noTargetGroup", true]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        52,
        "__module_gtag",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "f",
                  [46, "g", "h", "i"],
                  [
                    65,
                    "j",
                    [15, "h"],
                    [
                      46,
                      [
                        22,
                        [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                        [
                          46,
                          [
                            43,
                            [15, "g"],
                            [15, "j"],
                            ["i", [16, [15, "g"], [15, "j"]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "Object"]],
                [
                  52,
                  "c",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        8,
                        "EP_SERVER_CONTAINER_URL",
                        "server_container_url",
                        "EP_TRANSPORT_URL",
                        "transport_url",
                        "EP_USER_PROPERTIES",
                        "user_properties",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "d",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "allow_ad_personalization_signals",
                        "allow_google_signals",
                        "cookie_update",
                        "update",
                        "first_party_collection",
                        "send_page_view",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "e",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "cookie_expires",
                        "event_timeout",
                        "session_duration",
                        "session_engaged_time",
                        "engagement_time_msec",
                      ],
                    ],
                  ],
                ],
                [
                  36,
                  [
                    8,
                    "SCHEMA",
                    [15, "c"],
                    "GOLD_BOOLEAN_FIELDS",
                    [15, "d"],
                    "GOLD_NUMERIC_FIELDS",
                    [15, "e"],
                    "convertParameters",
                    [15, "f"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
    ],
    entities: {
      __googtag: { 1: 10 },
    },
    permissions: {
      __awec: {
        detect_user_provided_data: {
          limitDataSources: true,
          allowAutoDataSources: true,
          allowManualDataSources: false,
          allowCodeDataSources: false,
        },
      },
      __googtag: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [
            { key: "gtag", read: true, write: true, execute: true },
            { key: "dataLayer", read: true, write: true, execute: false },
          ],
        },
        configure_google_tags: { allowedTagIds: "any" },
        load_google_tags: {
          allowedTagIds: "any",
          allowFirstPartyUrls: true,
          allowedFirstPartyUrls: "any",
        },
      },
    },

    security_groups: {
      google: ["__awec", "__googtag"],
    },
  };

  var aa,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca = function (a) {
      return (a.raw = a);
    },
    da = function (a, b) {
      a.raw = b;
      return a;
    },
    fa = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return { next: ba(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ia = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    ka = function (a) {
      return a instanceof Array ? a : ia(fa(a));
    },
    la =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    na;
  if ("function" == typeof Object.setPrototypeOf) na = Object.setPrototypeOf;
  else {
    var oa;
    a: {
      var pa = { a: !0 },
        qa = {};
      try {
        qa.__proto__ = pa;
        oa = qa.a;
        break a;
      } catch (a) {}
      oa = !1;
    }
    na = oa
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ra = na,
    sa = function (a, b) {
      a.prototype = la(b.prototype);
      a.prototype.constructor = a;
      if (ra) ra(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Hn = b.prototype;
    },
    ta = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b;
    }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var ua = this || self,
    wa = function (a) {
      return a;
    };
  var xa = function (a, b) {
    this.h = a;
    this.C = b;
  };
  var ya = function () {
    this.C = {};
    this.H = {};
  };
  aa = ya.prototype;
  aa.get = function (a) {
    return this.C["dust." + a];
  };
  aa.set = function (a, b) {
    a = "dust." + a;
    this.H.hasOwnProperty(a) || (this.C[a] = b);
  };
  aa.Mh = function (a, b) {
    this.set(a, b);
    this.H["dust." + a] = !0;
  };
  aa.has = function (a) {
    return this.C.hasOwnProperty("dust." + a);
  };
  aa.remove = function (a) {
    a = "dust." + a;
    this.H.hasOwnProperty(a) || delete this.C[a];
  };
  var za = function () {
    this.quota = {};
  };
  za.prototype.reset = function () {
    this.quota = {};
  };
  var Aa = function (a, b) {
    this.U = a;
    this.M = function (c, d, e) {
      return c.apply(d, e);
    };
    this.D = b;
    this.C = new ya();
    this.h = this.H = void 0;
  };
  Aa.prototype.add = function (a, b) {
    Ba(this, a, b, !1);
  };
  var Ba = function (a, b, c, d) {
    d ? a.C.Mh(b, c) : a.C.set(b, c);
  };
  Aa.prototype.set = function (a, b) {
    !this.C.has(a) && this.D && this.D.has(a)
      ? this.D.set(a, b)
      : this.C.set(a, b);
  };
  Aa.prototype.get = function (a) {
    return this.C.has(a) ? this.C.get(a) : this.D ? this.D.get(a) : void 0;
  };
  Aa.prototype.has = function (a) {
    return !!this.C.has(a) || !(!this.D || !this.D.has(a));
  };
  var Ca = function (a) {
    var b = new Aa(a.U, a);
    a.H && (b.H = a.H);
    b.M = a.M;
    b.h = a.h;
    return b;
  };
  var Da = function () {},
    Ea = function (a) {
      return "function" === typeof a;
    },
    k = function (a) {
      return "string" === typeof a;
    },
    Ga = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    Ha = Array.isArray,
    Ja = function (a, b) {
      if (a && Ha(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ka = function (a, b) {
      if (!Ga(a) || !Ga(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ma = function (a, b) {
      for (var c = new La(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    l = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Na = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Pa = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Qa = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Ra = function (a) {
      var b = [];
      if (Ha(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Sa = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Ta = function () {
      return new Date(Date.now());
    },
    Ua = function () {
      return Ta().getTime();
    },
    La = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  La.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  La.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Va = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Wa = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Xa = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Ya = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Za = function (a, b) {
      return a.substring(0, b.length) === b;
    },
    $a = function (a, b) {
      var c = z;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <= b.indexOf(d)) return;
      }
      return d;
    },
    ab = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    bb = /^\w{1,9}$/,
    cb = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      l(a, function (d, e) {
        bb.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    db = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  function eb(a, b) {
    for (
      var c, d = 0;
      d < b.length && !((c = fb(a, b[d])), c instanceof xa);
      d++
    );
    return c;
  }
  function fb(a, b) {
    try {
      var c = a.get(String(b[0]));
      if (!c || "function" !== typeof c.invoke)
        throw Error("Attempting to execute non-function " + b[0] + ".");
      return c.invoke.apply(c, [a].concat(b.slice(1)));
    } catch (e) {
      var d = a.H;
      d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
      throw e;
    }
  }
  var gb = function () {
    this.D = new za();
    this.h = new Aa(this.D);
  };
  gb.prototype.execute = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.C(c);
  };
  gb.prototype.C = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = fb(this.h, arguments[c]);
    return b;
  };
  gb.prototype.H = function (a, b) {
    var c = Ca(this.h);
    c.h = a;
    for (var d, e = 1; e < arguments.length; e++) d = fb(c, arguments[e]);
    return d;
  };
  var hb = function () {
    ya.call(this);
    this.D = !1;
  };
  sa(hb, ya);
  var ib = function (a, b) {
    var c = [],
      d;
    for (d in a.C)
      if (a.C.hasOwnProperty(d))
        switch (((d = d.substr(5)), b)) {
          case 1:
            c.push(d);
            break;
          case 2:
            c.push(a.get(d));
            break;
          case 3:
            c.push([d, a.get(d)]);
        }
    return c;
  };
  aa = hb.prototype;
  aa.set = function (a, b) {
    this.D || ya.prototype.set.call(this, a, b);
  };
  aa.Mh = function (a, b) {
    this.D || ya.prototype.Mh.call(this, a, b);
  };
  aa.remove = function (a) {
    this.D || ya.prototype.remove.call(this, a);
  };
  aa.Bb = function () {
    this.D = !0;
  };
  aa.uj = function () {
    return this.D;
  }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var kb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    lb = function (a) {
      if (null == a) return String(a);
      var b = kb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    mb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    nb = function (a) {
      if (!a || "object" != lb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !mb(a, "constructor") &&
          !mb(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || mb(a, b);
    },
    ob = function (a, b) {
      var c = b || ("array" == lb(a) ? [] : {}),
        d;
      for (d in a)
        if (mb(a, d)) {
          var e = a[d];
          "array" == lb(e)
            ? ("array" != lb(c[d]) && (c[d] = []), (c[d] = ob(e, c[d])))
            : nb(e)
            ? (nb(c[d]) || (c[d] = {}), (c[d] = ob(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var pb = function (a) {
      for (var b = [], c = 0; c < a.length(); c++)
        a.has(c) && (b[c] = a.get(c));
      return b;
    },
    qb = function (a) {
      if (void 0 == a || Ha(a) || nb(a)) return !0;
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
          return !0;
      }
      return !1;
    },
    rb = function (a) {
      return (
        ("number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
        ("string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10))
      );
    };
  var sb = function (a) {
    this.C = new hb();
    this.h = [];
    this.D = !1;
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (rb(b) ? (this.h[Number(b)] = a[Number(b)]) : this.C.set(b, a[b]));
  };
  aa = sb.prototype;
  aa.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.h.length; c++) {
      var d = this.h[c];
      null === d || void 0 === d
        ? b.push("")
        : d instanceof sb
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(String(d));
    }
    return b.join(",");
  };
  aa.set = function (a, b) {
    if (!this.D)
      if ("length" === a) {
        if (!rb(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.h.length = Number(b);
      } else rb(a) ? (this.h[Number(a)] = b) : this.C.set(a, b);
  };
  aa.get = function (a) {
    return "length" === a
      ? this.length()
      : rb(a)
      ? this.h[Number(a)]
      : this.C.get(a);
  };
  aa.length = function () {
    return this.h.length;
  };
  aa.Tb = function () {
    for (var a = ib(this.C, 1), b = 0; b < this.h.length; b++) a.push(b + "");
    return new sb(a);
  };
  aa.remove = function (a) {
    rb(a) ? delete this.h[Number(a)] : this.C.remove(a);
  };
  aa.pop = function () {
    return this.h.pop();
  };
  aa.push = function (a) {
    return this.h.push.apply(this.h, Array.prototype.slice.call(arguments));
  };
  aa.shift = function () {
    return this.h.shift();
  };
  aa.splice = function (a, b, c) {
    return new sb(this.h.splice.apply(this.h, arguments));
  };
  aa.unshift = function (a) {
    return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments));
  };
  aa.has = function (a) {
    return (rb(a) && this.h.hasOwnProperty(a)) || this.C.has(a);
  };
  aa.Bb = function () {
    this.D = !0;
    Object.freeze(this.h);
    this.C.Bb();
  };
  aa.uj = function () {
    return this.D;
  };
  var tb = function () {
    hb.call(this);
  };
  sa(tb, hb);
  tb.prototype.Tb = function () {
    return new sb(ib(this, 1));
  };
  function ub() {
    for (var a = vb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function wb() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var vb, xb;
  function yb(a) {
    vb = vb || wb();
    xb = xb || ub();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        h = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (h >> 6),
        q = h & 63;
      e || ((q = 64), d || (p = 64));
      b.push(vb[m], vb[n], vb[p], vb[q]);
    }
    return b.join("");
  }
  function zb(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = xb[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    vb = vb || wb();
    xb = xb || ub();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != h && (c += String.fromCharCode(((g << 6) & 192) | h)));
    }
  }
  var Ab = {},
    Bb = function (a, b) {
      Ab[a] = Ab[a] || [];
      Ab[a][b] = !0;
    },
    Cb = function () {
      delete Ab.GA4_EVENT;
    },
    Eb = function (a) {
      var b = Ab[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++)
        0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
          b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return yb(c.join("")).replace(/\.+$/, "");
    };
  var Fb = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a)
          return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var Gb,
    Hb = function () {
      if (void 0 === Gb) {
        var a = null,
          b = ua.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: wa,
              createScript: wa,
              createScriptURL: wa,
            });
          } catch (c) {
            ua.console && ua.console.error(c.message);
          }
          Gb = a;
        } else Gb = a;
      }
      return Gb;
    };
  var Ib = function (a) {
    this.h = a;
  };
  Ib.prototype.toString = function () {
    return this.h + "";
  };
  var Jb = function (a) {
      return a instanceof Ib && a.constructor === Ib
        ? a.h
        : "type_error:TrustedResourceUrl";
    },
    Kb = {},
    Lb = function (a) {
      var b = a,
        c = Hb(),
        d = c ? c.createScriptURL(b) : b;
      return new Ib(d, Kb);
    };
  var Mb = function (a) {
    this.h = a;
  };
  Mb.prototype.toString = function () {
    return this.h.toString();
  };
  var Nb = function (a) {
      return a instanceof Mb && a.constructor === Mb
        ? a.h
        : "type_error:SafeUrl";
    },
    Ob = {},
    Pb = new Mb("about:invalid#zClosurez", Ob);
  var Qb, Rb;
  a: {
    for (var Sb = ["CLOSURE_FLAGS"], Tb = ua, Ub = 0; Ub < Sb.length; Ub++)
      if (((Tb = Tb[Sb[Ub]]), null == Tb)) {
        Rb = null;
        break a;
      }
    Rb = Tb;
  }
  var Vb = Rb && Rb[610401301];
  Qb = null != Vb ? Vb : !1;
  function Wb() {
    var a = ua.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var Xb,
    Yb = ua.navigator;
  Xb = Yb ? Yb.userAgentData || null : null;
  function Zb(a) {
    return Qb
      ? Xb
        ? Xb.brands.some(function (b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a);
          })
        : !1
      : !1;
  }
  function $b(a) {
    return -1 != Wb().indexOf(a);
  }
  function ac() {
    return Qb ? !!Xb && 0 < Xb.brands.length : !1;
  }
  function bc() {
    return ac() ? !1 : $b("Opera");
  }
  function cc() {
    return $b("Firefox") || $b("FxiOS");
  }
  function dc() {
    return ac()
      ? Zb("Chromium")
      : (($b("Chrome") || $b("CriOS")) && !(ac() ? 0 : $b("Edge"))) ||
          $b("Silk");
  }
  var ec = {},
    fc = function (a) {
      this.h = a;
    };
  fc.prototype.toString = function () {
    return this.h.toString();
  };
  var gc = function (a) {
    return a instanceof fc && a.constructor === fc
      ? a.h
      : "type_error:SafeHtml";
  }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var hc = "function" === typeof URL;
  function jc(a) {
    var b;
    a: if (hc) {
      var c;
      try {
        c = new URL(a);
      } catch (g) {
        b = "https:";
        break a;
      }
      b = c.protocol;
    } else {
      var d;
      b: {
        var e = document.createElement("a");
        try {
          e.href = a;
        } catch (g) {
          d = void 0;
          break b;
        }
        var f = e.protocol;
        d = ":" === f || "" === f ? "https:" : f;
      }
      b = d;
    }
    if ("javascript:" !== b) return a;
  }
  var kc = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
  var lc = {};
  var mc = function () {},
    nc = function (a) {
      this.h = a;
    };
  sa(nc, mc);
  nc.prototype.toString = function () {
    return this.h;
  };
  function oc(a, b) {
    var c = [new nc(pc[0].toLowerCase(), lc)];
    if (0 === c.length) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof nc) g = f.h;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return 0 !== e.indexOf(f);
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function qc(a) {
    var b = a.tagName;
    if ("SCRIPT" === b || "STYLE" === b) throw Error("");
  }
  function rc(a, b) {
    var c = b instanceof Mb ? Nb(b) : jc(b);
    void 0 !== c && (a.action = c);
  }
  var sc = ca([""]),
    tc = da(["\x00"], ["\\0"]),
    uc = da(["\n"], ["\\n"]),
    vc = da(["\x00"], ["\\u0000"]);
  function wc(a) {
    return -1 === a.toString().indexOf("`");
  }
  wc(function (a) {
    return a(sc);
  }) ||
    wc(function (a) {
      return a(tc);
    }) ||
    wc(function (a) {
      return a(uc);
    }) ||
    wc(function (a) {
      return a(vc);
    });
  var xc = function (a) {
    this.Sl = a;
  };
  function yc(a) {
    return new xc(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var zc = [
    yc("data"),
    yc("http"),
    yc("https"),
    yc("mailto"),
    yc("ftp"),
    new xc(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function Ac(a, b) {
    b = void 0 === b ? zc : b;
    if (a instanceof Mb) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof xc && d.Sl(a)) return new Mb(a, Ob);
    }
  }
  function Bc(a) {
    var b;
    b = void 0 === b ? zc : b;
    return Ac(a, b) || Pb;
  }
  function Cc(a) {
    var b = (a = Dc(a)),
      c = Hb(),
      d = c ? c.createHTML(b) : b;
    return new fc(d, ec);
  }
  function Dc(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  var z = window,
    C = document,
    Ec = navigator,
    Fc = C.currentScript && C.currentScript.src,
    Gc = function (a, b) {
      var c = z[a];
      z[a] = void 0 === c ? b : c;
      return z[a];
    },
    Hc = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Ic = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Jc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Kc(a, b, c) {
    b &&
      l(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Lc = function (a, b, c, d, e) {
      var f = C.createElement("script");
      Kc(f, d, Ic);
      f.type = "text/javascript";
      f.async = d && !1 === d.async ? !1 : !0;
      var g;
      g = Lb(Dc(a));
      f.src = Jb(g);
      var h,
        m,
        n,
        p =
          null ==
          (n = (m = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : n.call(m, "script[nonce]");
      (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", h);
      Hc(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var q = C.getElementsByTagName("script")[0] || C.body || C.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    Mc = function () {
      if (Fc) {
        var a = Fc.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Nc = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        h = !1;
      g || ((g = C.createElement("iframe")), (h = !0));
      Kc(g, c, Jc);
      d &&
        l(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      if (h) {
        var m = (C.body && C.body.lastChild) || C.body || C.head;
        m.parentNode.insertBefore(g, m);
      }
      Hc(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    Oc = function (a, b, c, d) {
      var e = new Image(1, 1);
      Kc(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
    },
    Pc = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Qc = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    E = function (a) {
      z.setTimeout(a, 0);
    },
    Rc = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Sc = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Tc = function (a) {
      var b = C.createElement("div"),
        c = b,
        d = Cc("A<div>" + a + "</div>");
      1 === c.nodeType && qc(c);
      c.innerHTML = gc(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Uc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Vc = function (a) {
      var b;
      try {
        b = Ec.sendBeacon && Ec.sendBeacon(a);
      } catch (c) {
        Bb("TAGGING", 15);
      }
      b || Oc(a);
    },
    Wc = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Xc = function (a) {
      var b = {
        headers: { "Attribution-Reporting-Eligible": "trigger" },
        keepalive: !0,
        attributionReporting: { eventSourceEligible: !0, triggerEligible: !0 },
      };
      try {
        z.fetch(a, b);
      } catch (c) {}
    },
    Yc = function () {
      var a = z.performance;
      if (a && Ea(a.now)) return a.now();
    },
    Zc = function () {
      return z.performance || void 0;
    };
  var $c = function (a, b) {
      return I(this, a) && I(this, b);
    },
    ad = function (a, b) {
      return I(this, a) === I(this, b);
    },
    bd = function (a, b) {
      return I(this, a) || I(this, b);
    },
    cd = function (a, b) {
      a = I(this, a);
      b = I(this, b);
      return -1 < String(a).indexOf(String(b));
    },
    dd = function (a, b) {
      a = String(I(this, a));
      b = String(I(this, b));
      return a.substring(0, b.length) === b;
    },
    ed = function (a, b) {
      a = I(this, a);
      b = I(this, b);
      switch (a) {
        case "pageLocation":
          var c = z.location.href;
          b instanceof tb &&
            b.get("stripProtocol") &&
            (c = c.replace(/^https?:\/\//, ""));
          return c;
      }
    };
  var fd = function (a, b) {
    hb.call(this);
    this.M = a;
    this.U = b;
  };
  sa(fd, hb);
  fd.prototype.toString = function () {
    return this.M;
  };
  fd.prototype.Tb = function () {
    return new sb(ib(this, 1));
  };
  fd.prototype.invoke = function (a, b) {
    return this.U.apply(
      new gd(this, a),
      Array.prototype.slice.call(arguments, 1)
    );
  };
  fd.prototype.h = function (a, b) {
    try {
      return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {}
  };
  var gd = function (a, b) {
      this.C = a;
      this.h = b;
    },
    I = function (a, b) {
      return Ha(b) ? fb(a.h, b) : b;
    },
    J = function (a) {
      return a.C.M;
    };
  var hd = function () {
    this.map = new Map();
  };
  hd.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  hd.prototype.get = function (a) {
    return this.map.get(a);
  };
  var id = function () {
    this.keys = [];
    this.values = [];
  };
  id.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  id.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (-1 < b) return this.values[b];
  };
  function jd() {
    try {
      return Map ? new hd() : new id();
    } catch (a) {
      return new id();
    }
  }
  var kd = function (a) {
    if (a instanceof kd) return a;
    if (qb(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.h = a;
  };
  kd.prototype.toString = function () {
    return String(this.h);
  };
  var md = function (a) {
    hb.call(this);
    this.h = a;
    this.set("then", ld(this));
    this.set("catch", ld(this, !0));
    this.set("finally", ld(this, !1, !0));
  };
  sa(md, tb);
  var ld = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new fd("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof fd || (d = void 0);
      e instanceof fd || (e = void 0);
      var f = Ca(this.h),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.h) : m.invoke(f, n);
          };
        },
        h = a.h.then(d && g(d), e && g(e));
      return new md(h);
    });
  };
  var od = function (a, b, c) {
      var d = jd(),
        e = function (g, h) {
          for (var m = ib(g, 1), n = 0; n < m.length; n++)
            h[m[n]] = f(g.get(m[n]));
        },
        f = function (g) {
          var h = d.get(g);
          if (h) return h;
          if (g instanceof sb) {
            var m = [];
            d.set(g, m);
            for (var n = g.Tb(), p = 0; p < n.length(); p++)
              m[n.get(p)] = f(g.get(n.get(p)));
            return m;
          }
          if (g instanceof md) return g.h;
          if (g instanceof tb) {
            var q = {};
            d.set(g, q);
            e(g, q);
            return q;
          }
          if (g instanceof fd) {
            var r = function () {
              for (
                var u = Array.prototype.slice.call(arguments, 0), v = 0;
                v < u.length;
                v++
              )
                u[v] = nd(u[v], b, c);
              var w = new Aa(b ? b.U : new za());
              b && (w.h = b.h);
              return f(g.invoke.apply(g, [w].concat(u)));
            };
            d.set(g, r);
            e(g, r);
            return r;
          }
          var t = !1;
          switch (c) {
            case 1:
              t = !0;
              break;
            case 2:
              t = !1;
              break;
            case 3:
              t = !1;
              break;
            default:
          }
          if (g instanceof kd && t) return g.h;
          switch (typeof g) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return g;
            case "object":
              if (null === g) return null;
          }
        };
      return f(a);
    },
    nd = function (a, b, c) {
      var d = jd(),
        e = function (g, h) {
          for (var m in g) g.hasOwnProperty(m) && h.set(m, f(g[m]));
        },
        f = function (g) {
          var h = d.get(g);
          if (h) return h;
          if (Ha(g) || Na(g)) {
            var m = new sb([]);
            d.set(g, m);
            for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
            return m;
          }
          if (nb(g)) {
            var p = new tb();
            d.set(g, p);
            e(g, p);
            return p;
          }
          if ("function" === typeof g) {
            var q = new fd("", function (x) {
              for (
                var y = Array.prototype.slice.call(arguments, 0), A = 0;
                A < y.length;
                A++
              )
                y[A] = od(I(this, y[A]), b, c);
              return f((0, this.h.M)(g, g, y));
            });
            d.set(g, q);
            e(g, q);
            return q;
          }
          var v = typeof g;
          if (null === g || "string" === v || "number" === v || "boolean" === v)
            return g;
          var w = !1;
          switch (c) {
            case 1:
              w = !0;
              break;
            case 2:
              w = !1;
              break;
            default:
          }
          if (void 0 !== g && w) return new kd(g);
        };
      return f(a);
    };
  var pd = function () {
    var a = !1;
    return a;
  };
  var qd = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++)
        if (arguments[e] instanceof sb)
          for (var f = arguments[e], g = 0; g < f.length(); g++)
            c.push(f.get(g));
        else c.push(arguments[e]);
      return new sb(c);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new sb(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new sb(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a, b) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (void 0 !== c) e = c;
      else {
        if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var h = f; h < d; h++)
        this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (void 0 !== c) e = c;
      else {
        if (0 === d)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var h = f; 0 <= h; h--)
        this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
      return e;
    },
    reverse: function () {
      for (var a = pb(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new sb(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = pb(this);
      void 0 === b
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
      return this;
    },
    splice: function (a, b, c, d) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1)
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var rd = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  sa(rd, Error);
  var sd = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    td = new xa("break"),
    ud = new xa("continue"),
    vd = function (a, b) {
      return I(this, a) + I(this, b);
    },
    wd = function (a, b) {
      return I(this, a) && I(this, b);
    },
    xd = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      if (!(c instanceof sb))
        throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't read property " + b + " of " + a + ".";
        if (pd()) throw new rd(d);
        throw Error(d);
      }
      var e = "number" === typeof a;
      if ("boolean" === typeof a || e) {
        if ("toString" === b) {
          if (e && c.length()) {
            var f = od(c.get(0));
            try {
              return a.toString(f);
            } catch (y) {}
          }
          return a.toString();
        }
        var g = "TypeError: " + a + "." + b + " is not a function.";
        if (pd()) throw new rd(g);
        throw Error(g);
      }
      if ("string" === typeof a) {
        if (sd.hasOwnProperty(b)) {
          var h = 2;
          h = 1;
          var m = od(c, void 0, h);
          return nd(a[b].apply(a, m), this.h);
        }
        var n = "TypeError: " + b + " is not a function";
        if (pd()) throw new rd(n);
        throw Error(n);
      }
      if (a instanceof sb) {
        if (a.has(b)) {
          var p = a.get(b);
          if (p instanceof fd) {
            var q = pb(c);
            q.unshift(this.h);
            return p.invoke.apply(p, q);
          }
          var r = "TypeError: " + b + " is not a function";
          if (pd()) throw new rd(r);
          throw Error(r);
        }
        if (0 <= qd.supportedMethods.indexOf(b)) {
          var t = pb(c);
          t.unshift(this.h);
          return qd[b].apply(a, t);
        }
      }
      if (a instanceof fd || a instanceof tb) {
        if (a.has(b)) {
          var u = a.get(b);
          if (u instanceof fd) {
            var v = pb(c);
            v.unshift(this.h);
            return u.invoke.apply(u, v);
          }
          var w = "TypeError: " + b + " is not a function";
          if (pd()) throw new rd(w);
          throw Error(w);
        }
        if ("toString" === b) return a instanceof fd ? a.M : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, pb(c));
      }
      if (a instanceof kd && "toString" === b) return a.toString();
      var x = "TypeError: Object has no '" + b + "' property.";
      if (pd()) throw new rd(x);
      throw Error(x);
    },
    yd = function (a, b) {
      a = I(this, a);
      if ("string" !== typeof a)
        throw Error("Invalid key name given for assignment.");
      var c = this.h;
      if (!c.has(a))
        throw Error("Attempting to assign to undefined value " + b);
      var d = I(this, b);
      c.set(a, d);
      return d;
    },
    zd = function (a) {
      var b = Ca(this.h),
        c = eb(b, Array.prototype.slice.apply(arguments));
      if (c instanceof xa) return c;
    },
    Ad = function () {
      return td;
    },
    Bd = function (a) {
      for (var b = I(this, a), c = 0; c < b.length; c++) {
        var d = I(this, b[c]);
        if (d instanceof xa) return d;
      }
    },
    Cd = function (a) {
      for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = I(this, arguments[c + 1]);
          Ba(b, d, e, !0);
        }
      }
    },
    Dd = function () {
      return ud;
    },
    Ed = function (a, b) {
      return new xa(a, I(this, b));
    },
    Fd = function (a, b, c) {
      var d = new sb();
      b = I(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(
        Array.prototype.splice.call(arguments, 2, arguments.length - 2)
      );
      this.h.add(a, I(this, f));
    },
    Gd = function (a, b) {
      return I(this, a) / I(this, b);
    },
    Hd = function (a, b) {
      a = I(this, a);
      b = I(this, b);
      var c = a instanceof kd,
        d = b instanceof kd;
      return c || d ? (c && d ? a.h == b.h : !1) : a == b;
    },
    Id = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = I(this, arguments[c]);
      return b;
    };
  function Jd(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = eb(f, d);
      if (g instanceof xa) {
        if ("break" === g.h) break;
        if ("return" === g.h) return g;
      }
    }
  }
  function Kd(a, b, c) {
    if ("string" === typeof b)
      return Jd(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (b instanceof tb || b instanceof sb || b instanceof fd) {
      var d = b.Tb(),
        e = d.length();
      return Jd(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c
      );
    }
  }
  var Ld = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Kd(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Md = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Kd(
        function (e) {
          var f = Ca(d);
          Ba(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Nd = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Kd(
        function (e) {
          var f = Ca(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    },
    Pd = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Od(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Qd = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Od(
        function (e) {
          var f = Ca(d);
          Ba(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Sd = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      var d = this.h;
      return Od(
        function (e) {
          var f = Ca(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    };
  function Od(a, b, c) {
    if ("string" === typeof b)
      return Jd(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof sb)
      return Jd(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    if (pd()) throw new rd("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  var Td = function (a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var t = f.get(r);
          q.add(t, p.get(t));
        }
      }
      var f = I(this, a);
      if (!(f instanceof sb))
        throw Error(
          "TypeError: Non-List argument given to ForLet instruction."
        );
      var g = this.h;
      d = I(this, d);
      var h = Ca(g);
      for (e(g, h); fb(h, b); ) {
        var m = eb(h, d);
        if (m instanceof xa) {
          if ("break" === m.h) break;
          if ("return" === m.h) return m;
        }
        var n = Ca(g);
        e(h, n);
        fb(n, c);
        h = n;
      }
    },
    Ud = function (a, b, c) {
      var d = this.h,
        e = I(this, b);
      if (!(e instanceof sb))
        throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      return new fd(
        a,
        (function () {
          return function (g) {
            var h = Ca(d);
            void 0 === h.h && (h.h = this.h.h);
            for (
              var m = Array.prototype.slice.call(arguments, 0), n = 0;
              n < m.length;
              n++
            )
              if (((m[n] = I(this, m[n])), m[n] instanceof xa)) return m[n];
            for (var p = e.get("length"), q = 0; q < p; q++)
              q < m.length ? h.add(e.get(q), m[q]) : h.add(e.get(q), void 0);
            h.add("arguments", new sb(m));
            var r = eb(h, f);
            if (r instanceof xa) return "return" === r.h ? r.C : r;
          };
        })()
      );
    },
    Vd = function (a) {
      a = I(this, a);
      var b = this.h,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a);
    },
    Wd = function (a, b) {
      var c;
      a = I(this, a);
      b = I(this, b);
      if (void 0 === a || null === a) {
        var d =
          "TypeError: Cannot read properties of " +
          a +
          " (reading '" +
          b +
          "')";
        if (pd()) throw new rd(d);
        throw Error(d);
      }
      if (a instanceof tb || a instanceof sb || a instanceof fd) c = a.get(b);
      else if ("string" === typeof a)
        "length" === b ? (c = a.length) : rb(b) && (c = a[b]);
      else if (a instanceof kd) return;
      return c;
    },
    Xd = function (a, b) {
      return I(this, a) > I(this, b);
    },
    Yd = function (a, b) {
      return I(this, a) >= I(this, b);
    },
    Zd = function (a, b) {
      a = I(this, a);
      b = I(this, b);
      a instanceof kd && (a = a.h);
      b instanceof kd && (b = b.h);
      return a === b;
    },
    $d = function (a, b) {
      return !Zd.call(this, a, b);
    },
    ae = function (a, b, c) {
      var d = [];
      I(this, a) ? (d = I(this, b)) : c && (d = I(this, c));
      var e = eb(this.h, d);
      if (e instanceof xa) return e;
    },
    be = function (a, b) {
      return I(this, a) < I(this, b);
    },
    ce = function (a, b) {
      return I(this, a) <= I(this, b);
    },
    de = function (a) {
      for (var b = new sb(), c = 0; c < arguments.length; c++) {
        var d = I(this, arguments[c]);
        b.push(d);
      }
      return b;
    },
    ee = function (a) {
      for (var b = new tb(), c = 0; c < arguments.length - 1; c += 2) {
        var d = I(this, arguments[c]) + "",
          e = I(this, arguments[c + 1]);
        b.set(d, e);
      }
      return b;
    },
    fe = function (a, b) {
      return I(this, a) % I(this, b);
    },
    ge = function (a, b) {
      return I(this, a) * I(this, b);
    },
    he = function (a) {
      return -I(this, a);
    },
    ie = function (a) {
      return !I(this, a);
    },
    je = function (a, b) {
      return !Hd.call(this, a, b);
    },
    ke = function () {
      return null;
    },
    le = function (a, b) {
      return I(this, a) || I(this, b);
    },
    me = function (a, b) {
      var c = I(this, a);
      I(this, b);
      return c;
    },
    ne = function (a) {
      return I(this, a);
    },
    oe = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    pe = function (a) {
      return new xa("return", I(this, a));
    },
    qe = function (a, b, c) {
      a = I(this, a);
      b = I(this, b);
      c = I(this, c);
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't set property " + b + " of " + a + ".";
        if (pd()) throw new rd(d);
        throw Error(d);
      }
      (a instanceof fd || a instanceof sb || a instanceof tb) && a.set(b, c);
      return c;
    },
    re = function (a, b) {
      return I(this, a) - I(this, b);
    },
    se = function (a, b, c) {
      a = I(this, a);
      var d = I(this, b),
        e = I(this, c);
      if (!Ha(d) || !Ha(e)) throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, h = 0; h < d.length; h++)
        if (g || a === I(this, d[h]))
          if (((f = I(this, e[h])), f instanceof xa)) {
            var m = f.h;
            if ("break" === m) return;
            if ("return" === m || "continue" === m) return f;
          } else g = !0;
      if (
        e.length === d.length + 1 &&
        ((f = I(this, e[e.length - 1])),
        f instanceof xa && ("return" === f.h || "continue" === f.h))
      )
        return f;
    },
    te = function (a, b, c) {
      return I(this, a) ? I(this, b) : I(this, c);
    },
    ue = function (a) {
      a = I(this, a);
      return a instanceof fd ? "function" : typeof a;
    },
    ve = function (a) {
      for (var b = this.h, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0);
      }
    },
    we = function (a, b, c, d) {
      var e = I(this, d);
      if (I(this, c)) {
        var f = eb(this.h, e);
        if (f instanceof xa) {
          if ("break" === f.h) return;
          if ("return" === f.h) return f;
        }
      }
      for (; I(this, a); ) {
        var g = eb(this.h, e);
        if (g instanceof xa) {
          if ("break" === g.h) break;
          if ("return" === g.h) return g;
        }
        I(this, b);
      }
    },
    xe = function (a) {
      return ~Number(I(this, a));
    },
    ye = function (a, b) {
      return Number(I(this, a)) << Number(I(this, b));
    },
    ze = function (a, b) {
      return Number(I(this, a)) >> Number(I(this, b));
    },
    Ae = function (a, b) {
      return Number(I(this, a)) >>> Number(I(this, b));
    },
    Be = function (a, b) {
      return Number(I(this, a)) & Number(I(this, b));
    },
    Ce = function (a, b) {
      return Number(I(this, a)) ^ Number(I(this, b));
    },
    De = function (a, b) {
      return Number(I(this, a)) | Number(I(this, b));
    },
    Ee = function () {},
    Fe = function (a, b, c, d, e) {
      var f = !0;
      try {
        var g = I(this, c);
        if (g instanceof xa) return g;
      } catch (r) {
        if (!(r instanceof rd && a)) throw ((f = r instanceof rd), r);
        var h = Ca(this.h),
          m = new kd(r);
        h.add(b, m);
        var n = I(this, d),
          p = eb(h, n);
        if (p instanceof xa) return p;
      } finally {
        if (f && void 0 !== e) {
          var q = I(this, e);
          if (q instanceof xa) return q;
        }
      }
    };
  var He = function () {
    this.h = new gb();
    Ge(this);
  };
  He.prototype.execute = function (a) {
    return this.h.C(a);
  };
  var Ge = function (a) {
    var b = function (c, d) {
      var e = new fd(String(c), d);
      e.Bb();
      a.h.h.set(String(c), e);
    };
    b("map", ee);
    b("and", $c);
    b("contains", cd);
    b("equals", ad);
    b("or", bd);
    b("startsWith", dd);
    b("variable", ed);
  };
  var Je = function () {
    this.h = new gb();
    Ie(this);
  };
  Je.prototype.execute = function (a) {
    return Ke(this.h.C(a));
  };
  var Le = function (a, b, c) {
      return Ke(a.h.H(b, c));
    },
    Ie = function (a) {
      var b = function (c, d) {
        var e = String(c),
          f = new fd(e, d);
        f.Bb();
        a.h.h.set(e, f);
      };
      b(0, vd);
      b(1, wd);
      b(2, xd);
      b(3, yd);
      b(56, Be);
      b(57, ye);
      b(58, xe);
      b(59, De);
      b(60, ze);
      b(61, Ae);
      b(62, Ce);
      b(53, zd);
      b(4, Ad);
      b(5, Bd);
      b(52, Cd);
      b(6, Dd);
      b(49, Ed);
      b(7, de);
      b(8, ee);
      b(9, Bd);
      b(50, Fd);
      b(10, Gd);
      b(12, Hd);
      b(13, Id);
      b(51, Ud);
      b(47, Ld);
      b(54, Md);
      b(55, Nd);
      b(63, Td);
      b(64, Pd);
      b(65, Qd);
      b(66, Sd);
      b(15, Vd);
      b(16, Wd);
      b(17, Wd);
      b(18, Xd);
      b(19, Yd);
      b(20, Zd);
      b(21, $d);
      b(22, ae);
      b(23, be);
      b(24, ce);
      b(25, fe);
      b(26, ge);
      b(27, he);
      b(28, ie);
      b(29, je);
      b(45, ke);
      b(30, le);
      b(32, me);
      b(33, me);
      b(34, ne);
      b(35, ne);
      b(46, oe);
      b(36, pe);
      b(43, qe);
      b(37, re);
      b(38, se);
      b(39, te);
      b(67, Fe);
      b(40, ue);
      b(44, Ee);
      b(41, ve);
      b(42, we);
    };
  function Ke(a) {
    if (
      a instanceof xa ||
      a instanceof fd ||
      a instanceof sb ||
      a instanceof tb ||
      a instanceof kd ||
      null === a ||
      void 0 === a ||
      "string" === typeof a ||
      "number" === typeof a ||
      "boolean" === typeof a
    )
      return a;
  }
  function Me(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  function Ne(a) {
    switch (a) {
      case 1:
        return "G";
      case 3:
        return "g";
      case 2:
        return "D";
      case 4:
        return "d";
      case 0:
        return "g";
      default:
        return "g";
    }
  }
  function Oe(a, b) {
    var c = a[1] || 0,
      d = a[2] || 0;
    switch (b) {
      case 0:
        return "G1" + Me(c) + Me(d);
      case 1:
        return "G2" + Ne(c) + Ne(d);
      default:
        return "g1--";
    }
  }
  var Pe = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Vj: a("consent"),
      Wh: a("convert_case_to"),
      Xh: a("convert_false_to"),
      Yh: a("convert_null_to"),
      Zh: a("convert_true_to"),
      ai: a("convert_undefined_to"),
      Xm: a("debug_mode_metadata"),
      xa: a("function"),
      Tg: a("instance_name"),
      Hk: a("live_only"),
      Ik: a("malware_disabled"),
      Jk: a("metadata"),
      Mk: a("original_activity_id"),
      on: a("original_vendor_template_id"),
      nn: a("once_on_load"),
      Lk: a("once_per_event"),
      Ti: a("once_per_load"),
      sn: a("priority_override"),
      tn: a("respected_consent_types"),
      Xi: a("setup_tags"),
      se: a("tag_id"),
      cj: a("teardown_tags"),
    };
  })();
  var lf;
  var mf = [],
    nf = [],
    of = [],
    pf = [],
    qf = [],
    rf = {},
    sf,
    tf,
    uf = function (a) {
      tf = tf || a;
    },
    vf = function (a) {},
    wf,
    xf = [],
    yf = function (a, b) {
      var c = {};
      c[Pe.xa] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    zf = function (a, b) {
      var c = a[Pe.xa],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = rf[c],
        f =
          b &&
          2 === b.type &&
          d.reportMacroDiscrepancy &&
          e &&
          -1 !== xf.indexOf(c),
        g = {},
        h = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          0 === m.indexOf("vtp_") &&
          (e &&
            d &&
            d.checkPixieIncompatibility &&
            d.checkPixieIncompatibility(a[m]),
          e && (g[m] = a[m]),
          !e || f) &&
          (h[m.substr(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.index;
            if (null == p) n = "";
            else {
              var q;
              switch (b.type) {
                case 2:
                  q = mf[p];
                  break;
                case 1:
                  q = pf[p];
                  break;
                default:
                  n = "";
                  break a;
              }
              var r = q && q[Pe.Tg];
              n = r ? String(r) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var t, u;
      e && (t = e(g));
      if (!e || f) u = lf(c, h, b);
      f &&
        d &&
        (qb(t)
          ? typeof t !== typeof u && d.reportMacroDiscrepancy(d.id, c)
          : t !== u && d.reportMacroDiscrepancy(d.id, c));
      return e ? t : u;
    },
    Bf = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Af(a[e], b, c));
      return d;
    },
    Af = function (a, b, c) {
      if (Ha(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Af(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = mf[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var h = String(g[Pe.Tg]);
            try {
              var m = Bf(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = zf(m, { event: b, index: f, type: 2, name: h });
              wf && (d = wf.Yk(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), h), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[Af(a[n], b, c)] = Af(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = Af(a[q], b, c);
              tf && (p = p || tf.Pl(r));
              d.push(r);
            }
            return tf && p ? tf.bl(d) : d.join("");
          case "escape":
            d = Af(a[1], b, c);
            if (tf && Ha(a[1]) && "macro" === a[1][0] && tf.Ql(a))
              return tf.xm(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Qe[a[t]] && (d = Qe[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!pf[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { nj: a[2], index: u });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v[Pe.xa] = a[1];
            var w = Cf(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Cf = function (a, b, c) {
      try {
        return sf(Bf(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    },
    Df = function (a) {
      var b = a[Pe.xa];
      if (!b) throw Error("Error: No function name given for function call.");
      return !!rf[b];
    };
  var Ef = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.h = a;
  };
  sa(Ef, Error);
  function Ff(a, b) {
    if (Ha(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) Ff(a[c], b[c]);
    }
  }
  var Gf = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.mm = a;
    this.C = b;
    this.h = [];
  };
  sa(Gf, Error);
  var If = function () {
    return function (a, b) {
      a instanceof Gf || (a = new Gf(a, Hf));
      b && a.h.push(b);
      throw a;
    };
  };
  function Hf(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; 0 < b; b--) Ga(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  var Lf = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = Jf(a), f = 0; f < nf.length; f++) {
        var g = nf[f],
          h = Kf(g, e);
        if (h) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === h && b(g.block || []);
      }
      for (var p = [], q = 0; q < pf.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Kf = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var h = b(f[g]);
        if (2 === h) return null;
        if (1 === h) return !1;
      }
      return !0;
    },
    Jf = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Cf(of[c], a));
        return b[c];
      };
    };
  var Mf = {
    Yk: function (a, b) {
      b[Pe.Wh] &&
        "string" === typeof a &&
        (a = 1 == b[Pe.Wh] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Pe.Yh) && null === a && (a = b[Pe.Yh]);
      b.hasOwnProperty(Pe.ai) && void 0 === a && (a = b[Pe.ai]);
      b.hasOwnProperty(Pe.Zh) && !0 === a && (a = b[Pe.Zh]);
      b.hasOwnProperty(Pe.Xh) && !1 === a && (a = b[Pe.Xh]);
      return a;
    },
  };
  var Nf = function () {
      this.h = {};
    },
    Pf = function (a, b) {
      var c = Of.C,
        d;
      null != (d = c.h)[a] || (d[a] = []);
      c.h[a].push(function () {
        return b.apply(null, ka(ta.apply(0, arguments)));
      });
    };
  function Qf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e](b, c, d)), (g += ".");
        } catch (h) {
          g =
            "string" === typeof h
              ? g + (": " + h)
              : h instanceof Error
              ? g + (": " + h.message)
              : g + ".";
        }
        if (!f) throw new Ef(c, d, g);
      }
  }
  function Rf(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.h[d],
          f = a.h.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Qf(e, b, d, g);
          Qf(f, b, d, g);
        }
      }
    };
  }
  var Sf = [],
    Tf = function (a) {
      return void 0 == Sf[a] ? !1 : Sf[a];
    };
  var Xf = function () {
      var a = data.permissions || {},
        b = Uf.ctid,
        c = this;
      this.C = new Nf();
      this.h = {};
      var d = Tf(15),
        e = {},
        f = {},
        g = Rf(this.C, b, function () {
          var h = arguments[0];
          return h && e[h]
            ? e[h].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      l(a, function (h, m) {
        var n = {};
        l(m, function (q, r) {
          var t = Vf(q, r);
          n[q] = t.assert;
          e[q] || (e[q] = t.K);
          d && t.fj && !f[q] && (f[q] = t.fj);
        });
        var p;
        d &&
          (p = function (q) {
            var r = ta.apply(1, arguments);
            if (!n[q])
              throw Wf(
                q,
                {},
                "The requested additional permission " +
                  q +
                  " is not configured."
              );
            g.apply(null, [q].concat(ka(r)));
          });
        c.h[h] = function (q, r) {
          var t = n[q];
          if (!t)
            throw Wf(
              q,
              {},
              "The requested permission " + q + " is not configured."
            );
          var u = Array.prototype.slice.call(arguments, 0);
          t.apply(void 0, u);
          g.apply(void 0, u);
          if (d) {
            var v = f[q];
            v && v.apply(null, [p].concat(ka(u.slice(1))));
          }
        };
      });
    },
    Yf = function (a) {
      return Of.h[a] || function () {};
    };
  function Vf(a, b) {
    var c = yf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Wf;
    try {
      return zf(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new Ef(e, {}, "Permission " + e + " is unknown.");
        },
        K: function () {
          if (Tf(15)) throw new Ef(a, {}, "Permission " + a + " is unknown.");
          for (var e = {}, f = 0; f < arguments.length; ++f)
            e["arg" + (f + 1)] = arguments[f];
          return e;
        },
      };
    }
  }
  function Wf(a, b, c) {
    return new Ef(a, b, c);
  }
  var Zf = !1;
  var $f = {};
  $f.Tm = Qa("");
  $f.il = Qa("");
  var ag = Zf,
    bg = $f.il,
    cg = $f.Tm;
  var qg = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function rg(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var sg = new La();
  function tg(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = sg.get(e);
      f || ((f = new RegExp(b, d)), sg.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function ug(a, b) {
    return 0 <= String(a).indexOf(String(b));
  }
  function vg(a, b) {
    return String(a) === String(b);
  }
  function wg(a, b) {
    return Number(a) >= Number(b);
  }
  function xg(a, b) {
    return Number(a) <= Number(b);
  }
  function yg(a, b) {
    return Number(a) > Number(b);
  }
  function zg(a, b) {
    return Number(a) < Number(b);
  }
  function Ag(a, b) {
    return 0 === String(a).indexOf(String(b));
  }
  var Hg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Ig(a, b) {
    for (var c = "", d = !0; 7 < a; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e] +
        c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        a | b
      ] + c);
  }
  var Jg =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Kg = { Fn: "function", PixieMap: "Object", List: "Array" },
    K = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = Jg.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          h = e[3],
          m = c[d];
        if (null == m) {
          if (g)
            throw Error(
              "Error in " + a + ". Required argument " + f + " not supplied."
            );
        } else if ("*" !== h) {
          var n = typeof m;
          m instanceof fd
            ? (n = "Fn")
            : m instanceof sb
            ? (n = "List")
            : m instanceof tb
            ? (n = "PixieMap")
            : m instanceof kd && (n = "OpaqueValue");
          if (n != h)
            throw Error(
              "Error in " +
                a +
                ". Argument " +
                f +
                " has type " +
                (Kg[n] || n) +
                ", which does not match required type " +
                (Kg[h] || h) +
                "."
            );
        }
      }
    };
  function Lg(a) {
    return "" + a;
  }
  function Mg(a, b) {
    var c = [];
    return c;
  }
  var Ng = function (a, b) {
      var c = new fd(a, function () {
        for (
          var d = Array.prototype.slice.call(arguments, 0), e = 0;
          e < d.length;
          e++
        )
          d[e] = I(this, d[e]);
        try {
          return b.apply(this, d);
        } catch (g) {
          if (pd()) throw new rd(g.message);
          throw g;
        }
      });
      c.Bb();
      return c;
    },
    Og = function (a, b) {
      var c = new tb(),
        d;
      for (d in b)
        if (b.hasOwnProperty(d)) {
          var e = b[d];
          Ea(e)
            ? c.set(d, Ng(a + "_" + d, e))
            : nb(e)
            ? c.set(d, Og(a + "_" + d, e))
            : (Ga(e) || k(e) || "boolean" === typeof e) && c.set(d, e);
        }
      c.Bb();
      return c;
    };
  var Tg = function (a, b) {
    K(J(this), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new tb();
    return (d = Og("AssertApiSubject", c));
  };
  var Ug = function (a, b) {
    K(J(this), ["actual:?*", "message:?string"], arguments);
    if (a instanceof md)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new tb();
    return (d = Og("AssertThatSubject", c));
  };
  function Vg(a) {
    return function () {
      for (var b = [], c = this.h, d = 0; d < arguments.length; ++d)
        b.push(od(arguments[d], c));
      return nd(a.apply(null, b));
    };
  }
  var Xg = function () {
    for (var a = Math, b = Wg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Vg(a[e].bind(a)));
    }
    return c;
  };
  var Yg = function (a) {
    var b;
    return b;
  };
  var Zg = function (a) {
    var b;
    return b;
  };
  var $g = function (a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  };
  var ah = function (a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  };
  function bh(a, b) {
    var c = !1;
    return c;
  }
  bh.F = "internal.evaluateBooleanExpression";
  var gh = function (a) {
    K(J(this), ["message:?string"], arguments);
  };
  var hh = function (a, b) {
    K(J(this), ["min:!number", "max:!number"], arguments);
    return Ka(a, b);
  };
  var ih = function () {
    return new Date().getTime();
  };
  var jh = function (a) {
    if (null === a) return "null";
    if (a instanceof sb) return "array";
    if (a instanceof fd) return "function";
    if (a instanceof kd) {
      a = a.h;
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var kh = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (ag || cg) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return nd(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(od(c));
      }),
    };
  };
  var lh = function (a) {
    return Pa(od(a, this.h));
  };
  var mh = function (a) {
    return Number(od(a, this.h));
  };
  var nh = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  };
  var oh = function (a, b, c) {
    var d = null,
      e = !1;
    K(
      J(this),
      ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"],
      arguments
    );
    d = new tb();
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof tb &&
        g.has(b) &&
        g.has(c) &&
        (d.set(g.get(b), g.get(c)), (e = !0));
    }
    return e ? d : null;
  };
  var Wg = "floor ceil round max min abs pow sqrt".split(" ");
  var ph = function () {
      var a = {};
      return {
        wl: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        Lm: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        },
      };
    },
    qh = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return fd.prototype.invoke.apply(a, c);
      };
    },
    rh = function (a, b) {
      K(J(this), ["apiName:!string", "mock:?*"], arguments);
    };
  var sh = {};
  var th = function (a) {
    var b = new tb();
    if (a instanceof sb)
      for (var c = a.Tb(), d = 0; d < c.length(); d++) {
        var e = c.get(d);
        a.has(e) && b.set(e, a.get(e));
      }
    else if (a instanceof fd)
      for (var f = ib(a, 1), g = 0; g < f.length; g++) {
        var h = f[g];
        b.set(h, a.get(h));
      }
    else for (var m = 0; m < a.length; m++) b.set(m, a[m]);
    return b;
  };
  sh.keys = function (a) {
    K(J(this), ["input:!*"], arguments);
    if (a instanceof sb || a instanceof fd || "string" === typeof a) a = th(a);
    if (a instanceof tb) return a.Tb();
    return new sb();
  };
  sh.values = function (a) {
    K(J(this), ["input:!*"], arguments);
    if (a instanceof sb || a instanceof fd || "string" === typeof a) a = th(a);
    if (a instanceof tb) return new sb(ib(a, 2));
    return new sb();
  };
  sh.entries = function (a) {
    K(J(this), ["input:!*"], arguments);
    if (a instanceof sb || a instanceof fd || "string" === typeof a) a = th(a);
    if (a instanceof tb) {
      for (var b = ib(a, 3), c = new sb(), d = 0; d < b.length; d++) {
        var e = new sb(b[d]);
        c.push(e);
      }
      return c;
    }
    return new sb();
  };
  sh.freeze = function (a) {
    (a instanceof tb || a instanceof sb || a instanceof fd) && a.Bb();
    return a;
  };
  sh.delete = function (a, b) {
    if (a instanceof tb && !a.uj()) return a.remove(b), !0;
    return !1;
  };
  var L = function (a, b, c) {
    var d = a.h.h;
    if (!d) throw Error("Missing program state.");
    if (d.Dm) {
      try {
        d.ij.apply(null, Array.prototype.slice.call(arguments, 1));
      } catch (e) {
        throw (Bb("TAGGING", 21), e);
      }
      return;
    }
    d.ij.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var uh = function () {
    this.h = {};
    this.C = {};
  };
  uh.prototype.get = function (a, b) {
    var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
    return c;
  };
  uh.prototype.add = function (a, b, c) {
    if (this.h.hasOwnProperty(a))
      throw "Attempting to add a function which already exists: " + a + ".";
    if (this.C.hasOwnProperty(a))
      throw (
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.h[a] = c ? void 0 : Ea(b) ? Ng(a, b) : Og(a, b);
  };
  function vh(a, b) {
    var c = void 0;
    return c;
  }
  function wh() {
    var a = {};
    return a;
  }
  var yh = function (a) {
      return xh ? C.querySelectorAll(a) : null;
    },
    zh = function (a, b) {
      if (!xh) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!C.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    Ah = !1;
  if (C.querySelectorAll)
    try {
      var Bh = C.querySelectorAll(":root");
      Bh && 1 == Bh.length && Bh[0] == C.documentElement && (Ah = !0);
    } catch (a) {}
  var xh = Ah;
  var M = function (a) {
    Bb("GTM", a);
  };
  var Ch = function (a) {
      return null == a ? "" : k(a) ? Sa(String(a)) : "e0";
    },
    Eh = function (a) {
      return a.replace(Dh, "");
    },
    Gh = function (a) {
      return Fh(a.replace(/\s/g, ""));
    },
    Fh = function (a) {
      return Sa(a.replace(Hh, "").toLowerCase());
    },
    Jh = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return Ih.test(a) ? a : "e0";
    },
    Lh = function (a) {
      var b = a.toLowerCase().split("@");
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (Kh.test(c)) return c;
      }
      return "e0";
    },
    Oh = function (a, b) {
      window.Promise || b([]);
      Promise.all(
        a.map(function (c) {
          return c.value && -1 !== Mh.indexOf(c.name)
            ? Nh(c.value).then(function (d) {
                c.value = d;
              })
            : Promise.resolve();
        })
      )
        .then(function () {
          b(a);
        })
        .catch(function () {
          b([]);
        });
    },
    Nh = function (a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      if (z.crypto && z.crypto.subtle) {
        if (Ph.test(a)) return Promise.resolve(a);
        try {
          var b = Qh(a);
          return z.crypto.subtle
            .digest("SHA-256", b)
            .then(function (c) {
              var d = Array.from(new Uint8Array(c))
                .map(function (e) {
                  return String.fromCharCode(e);
                })
                .join("");
              return z
                .btoa(d)
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace(/=+$/, "");
            })
            .catch(function () {
              return "e2";
            });
        } catch (c) {
          return Promise.resolve("e2");
        }
      } else return Promise.resolve("e1");
    },
    Qh = function (a) {
      var b;
      if (z.TextEncoder) b = new TextEncoder("utf-8").encode(a);
      else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e
            ? c.push(e)
            : 2048 > e
            ? c.push(192 | (e >> 6), 128 | (e & 63))
            : 55296 > e || 57344 <= e
            ? c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63))
            : ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
              c.push(
                240 | (e >> 18),
                128 | ((e >> 12) & 63),
                128 | ((e >> 6) & 63),
                128 | (e & 63)
              ));
        }
        b = new Uint8Array(c);
      }
      return b;
    },
    Hh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    Kh = /^\S+@\S+\.\S+$/,
    Ih = /^\+\d{10,15}$/,
    Dh = /[.~]/g,
    Rh = /^[0-9A-Za-z_-]{43}$/,
    Ph = /^[0-9A-Fa-f]{64}$/,
    Sh = {},
    Th =
      ((Sh.email = "em"),
      (Sh.phone_number = "pn"),
      (Sh.first_name = "fn"),
      (Sh.last_name = "ln"),
      (Sh.street = "sa"),
      (Sh.city = "ct"),
      (Sh.region = "rg"),
      (Sh.country = "co"),
      (Sh.postal_code = "pc"),
      (Sh.error_code = "ec"),
      Sh),
    Uh = {},
    Vh =
      ((Uh.email = "sha256_email_address"),
      (Uh.phone_number = "sha256_phone_number"),
      (Uh.first_name = "sha256_first_name"),
      (Uh.last_name = "sha256_last_name"),
      (Uh.street = "sha256_street"),
      Uh),
    Wh = function (a, b) {
      function c(t, u, v, w) {
        var x = Ch(t);
        "" !== x &&
          (Ph.test(x)
            ? m.push({ name: u, value: x, index: w })
            : m.push({ name: u, value: v(x), index: w }));
      }
      function d(t, u) {
        var v = t;
        if (k(v) || Ha(v)) {
          v = Ha(t) ? t : [t];
          for (var w = 0; w < v.length; ++w) {
            var x = Ch(v[w]),
              y = Ph.test(x);
            u && !y && M(89);
            !u && y && M(88);
          }
        }
      }
      function e(t, u) {
        var v = t[u];
        d(v, !1);
        var w = Vh[u];
        t.hasOwnProperty(w) &&
          (t.hasOwnProperty(u) && M(90), (v = t[w]), d(v, !0));
        return v;
      }
      function f(t, u, v) {
        var w = e(t, u);
        w = Ha(w) ? w : [w];
        for (var x = 0; x < w.length; ++x) c(w[x], u, v);
      }
      function g(t, u, v, w) {
        var x = e(t, u);
        c(x, u, v, w);
      }
      function h(t) {
        return function (u) {
          M(64);
          return t(u);
        };
      }
      var m = [];
      if ("https:" === z.location.protocol) {
        f(a, "email", Lh);
        f(a, "phone_number", Jh);
        f(a, "first_name", h(Gh));
        f(a, "last_name", h(Gh));
        var n = a.home_address || {};
        f(n, "street", h(Fh));
        f(n, "city", h(Fh));
        f(n, "postal_code", h(Eh));
        f(n, "region", h(Fh));
        f(n, "country", h(Eh));
        var p = a.address || {};
        p = Ha(p) ? p : [p];
        for (var q = 0; q < p.length; q++) {
          var r = p[q];
          g(r, "first_name", Gh, q);
          g(r, "last_name", Gh, q);
          g(r, "street", Fh, q);
          g(r, "city", Fh, q);
          g(r, "postal_code", Eh, q);
          g(r, "region", Fh, q);
          g(r, "country", Eh, q);
        }
        Oh(m, b);
      } else m.push({ name: "error_code", value: "e3", index: void 0 }), b(m);
    },
    Xh = function (a, b) {
      Wh(a, function (c) {
        for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
          var g = c[f].name,
            h = c[f].value,
            m = c[f].index,
            n = Th[g];
          n &&
            h &&
            (-1 === Mh.indexOf(g) ||
              /^e\d+$/.test(h) ||
              Rh.test(h) ||
              Ph.test(h)) &&
            (void 0 !== m && (n += m), d.push(n + "." + h), e++);
        }
        1 === c.length && "error_code" === c[0].name && (e = 0);
        b(encodeURIComponent(d.join("~")), e);
      });
    },
    Yh = function (a) {
      if (z.Promise)
        try {
          return new Promise(function (b) {
            Xh(a, function (c, d) {
              b({ xj: c, vm: d });
            });
          });
        } catch (b) {}
    },
    Mh = Object.freeze([
      "email",
      "phone_number",
      "first_name",
      "last_name",
      "street",
    ]);
  var N = {
      g: {
        nb: "ad_personalization",
        J: "ad_storage",
        P: "ad_user_data",
        R: "analytics_storage",
        Sa: "region",
        vd: "consent_updated",
        wd: "wait_for_update",
        Zj: "ads",
        dg: "all",
        bk: "android",
        dk: "chrome",
        ek: "maps",
        fk: "playstore",
        gk: "search",
        hk: "shopping",
        ik: "youtube",
        bi: "app_remove",
        di: "app_store_refund",
        ei: "app_store_subscription_cancel",
        fi: "app_store_subscription_convert",
        gi: "app_store_subscription_renew",
        fg: "add_payment_info",
        gg: "add_shipping_info",
        ic: "add_to_cart",
        jc: "remove_from_cart",
        hg: "view_cart",
        Gb: "begin_checkout",
        kc: "select_item",
        Za: "view_item_list",
        ob: "select_promotion",
        ab: "view_promotion",
        oa: "purchase",
        mc: "refund",
        Ca: "view_item",
        ig: "add_to_wishlist",
        jk: "exception",
        hi: "first_open",
        ii: "first_visit",
        qa: "gtag.config",
        Ka: "gtag.get",
        ji: "in_app_purchase",
        nc: "page_view",
        kk: "screen_view",
        ki: "session_start",
        lk: "timing_complete",
        mk: "track_social",
        zd: "user_engagement",
        pb: "gclid",
        ra: "ads_data_redaction",
        ia: "allow_ad_personalization_signals",
        Ze: "allow_custom_scripts",
        af: "allow_display_features",
        Ad: "allow_enhanced_conversions",
        qb: "allow_google_signals",
        Fa: "allow_interest_groups",
        nk: "app_id",
        pk: "app_installer_id",
        qk: "app_name",
        rk: "app_version",
        Hb: "auid",
        li: "auto_detection_enabled",
        Ib: "aw_remarketing",
        bf: "aw_remarketing_only",
        Bd: "discount",
        Cd: "aw_feed_country",
        Dd: "aw_feed_language",
        aa: "items",
        Ed: "aw_merchant_id",
        jg: "aw_basket_type",
        Gc: "campaign_content",
        Hc: "campaign_id",
        Ic: "campaign_medium",
        Jc: "campaign_name",
        Kc: "campaign",
        Lc: "campaign_source",
        Mc: "campaign_term",
        rb: "client_id",
        mi: "content_group",
        ni: "content_type",
        La: "conversion_cookie_prefix",
        Nc: "conversion_id",
        Da: "conversion_linker",
        Jb: "conversion_api",
        Ta: "cookie_domain",
        Ga: "cookie_expires",
        Ua: "cookie_flags",
        oc: "cookie_name",
        Oc: "cookie_path",
        Ma: "cookie_prefix",
        sb: "cookie_update",
        qc: "country",
        sa: "currency",
        Fd: "customer_lifetime_value",
        Pc: "custom_map",
        oi: "gcldc",
        ri: "debug_mode",
        ba: "developer_id",
        si: "disable_merchant_reported_purchases",
        Qc: "dc_custom_params",
        ui: "dc_natural_search",
        kg: "dynamic_event_settings",
        lg: "affiliation",
        Gd: "checkout_option",
        cf: "checkout_step",
        mg: "coupon",
        Rc: "item_list_name",
        df: "list_name",
        vi: "promotions",
        Sc: "shipping",
        ef: "tax",
        Hd: "engagement_time_msec",
        Id: "enhanced_client_id",
        Jd: "enhanced_conversions",
        ng: "enhanced_conversions_automatic_settings",
        Kd: "estimated_delivery_date",
        ff: "euid_logged_in_state",
        Tc: "event_callback",
        sk: "event_category",
        tb: "event_developer_id_string",
        tk: "event_label",
        og: "event",
        Ld: "event_settings",
        Md: "event_timeout",
        uk: "description",
        vk: "fatal",
        wi: "experiments",
        hf: "firebase_id",
        Nd: "first_party_collection",
        Od: "_x_20",
        Kb: "_x_19",
        pg: "fledge",
        qg: "flight_error_code",
        rg: "flight_error_message",
        xi: "fl_activity_category",
        yi: "fl_activity_group",
        sg: "fl_advertiser_id",
        zi: "fl_ar_dedupe",
        Ai: "fl_random_number",
        Bi: "tran",
        Ci: "u",
        Pd: "gac_gclid",
        sc: "gac_wbraid",
        ug: "gac_wbraid_multiple_conversions",
        vg: "ga_restrict_domain",
        wg: "ga_temp_client_id",
        Qd: "gdpr_applies",
        xg: "geo_granularity",
        ub: "value_callback",
        eb: "value_key",
        wk: "google_ono",
        Lb: "google_signals",
        yg: "google_tld",
        Rd: "groups",
        zg: "gsa_experiment_id",
        Ag: "iframe_state",
        Uc: "ignore_referrer",
        jf: "internal_traffic_results",
        Mb: "is_legacy_converted",
        wb: "is_legacy_loaded",
        Sd: "is_passthrough",
        kf: "_lps",
        Ha: "language",
        lf: "legacy_developer_id_string",
        Ia: "linker",
        Vc: "accept_incoming",
        Nb: "decorate_forms",
        W: "domains",
        uc: "url_position",
        Bg: "method",
        xk: "name",
        Wc: "new_customer",
        Cg: "non_interaction",
        Di: "optimize_id",
        Ei: "page_hostname",
        Xc: "page_path",
        Ja: "page_referrer",
        xb: "page_title",
        Dg: "passengers",
        Eg: "phone_conversion_callback",
        Fi: "phone_conversion_country_code",
        Fg: "phone_conversion_css_class",
        Gi: "phone_conversion_ids",
        Gg: "phone_conversion_number",
        Hg: "phone_conversion_options",
        Yc: "quantity",
        Td: "redact_device_info",
        nf: "referral_exclusion_definition",
        Ob: "restricted_data_processing",
        Hi: "retoken",
        yk: "sample_rate",
        pf: "screen_name",
        yb: "screen_resolution",
        Ii: "search_term",
        Na: "send_page_view",
        Pb: "send_to",
        Ud: "server_container_url",
        Zc: "session_duration",
        Vd: "session_engaged",
        qf: "session_engaged_time",
        zb: "session_id",
        Wd: "session_number",
        ad: "delivery_postal_code",
        zk: "temporary_client_id",
        rf: "topmost_url",
        Ji: "tracking_id",
        tf: "traffic_type",
        wa: "transaction_id",
        Qb: "transport_url",
        Ig: "trip_type",
        Rb: "update",
        Ab: "url_passthrough",
        Yd: "_user_agent_architecture",
        Zd: "_user_agent_bitness",
        ae: "_user_agent_full_version_list",
        be: "_user_agent_mobile",
        ce: "_user_agent_model",
        de: "_user_agent_platform",
        ee: "_user_agent_platform_version",
        fe: "_user_agent_wow64",
        Aa: "user_data",
        Jg: "user_data_auto_latency",
        Kg: "user_data_auto_meta",
        Lg: "user_data_auto_multi",
        Mg: "user_data_auto_selectors",
        Ng: "user_data_auto_status",
        he: "user_data_mode",
        ie: "user_data_settings",
        Oa: "user_id",
        Va: "user_properties",
        Ki: "_user_region",
        Og: "us_privacy_string",
        ja: "value",
        vc: "wbraid",
        Pg: "wbraid_multiple_conversions",
        Qi: "_host_name",
        Ri: "_in_page_command",
        Si: "_is_passthrough_cid",
        me: "non_personalized_ads",
        qe: "_sst_parameters",
        cb: "conversion_label",
        za: "page_location",
        vb: "global_developer_id_string",
        Xd: "tc_privacy_string",
      },
    },
    Zh = {},
    $h = Object.freeze(
      ((Zh[N.g.ia] = 1),
      (Zh[N.g.af] = 1),
      (Zh[N.g.Ad] = 1),
      (Zh[N.g.qb] = 1),
      (Zh[N.g.aa] = 1),
      (Zh[N.g.Ta] = 1),
      (Zh[N.g.Ga] = 1),
      (Zh[N.g.Ua] = 1),
      (Zh[N.g.oc] = 1),
      (Zh[N.g.Oc] = 1),
      (Zh[N.g.Ma] = 1),
      (Zh[N.g.sb] = 1),
      (Zh[N.g.Pc] = 1),
      (Zh[N.g.ba] = 1),
      (Zh[N.g.kg] = 1),
      (Zh[N.g.Tc] = 1),
      (Zh[N.g.Ld] = 1),
      (Zh[N.g.Md] = 1),
      (Zh[N.g.Nd] = 1),
      (Zh[N.g.vg] = 1),
      (Zh[N.g.Lb] = 1),
      (Zh[N.g.yg] = 1),
      (Zh[N.g.Rd] = 1),
      (Zh[N.g.jf] = 1),
      (Zh[N.g.Mb] = 1),
      (Zh[N.g.wb] = 1),
      (Zh[N.g.Ia] = 1),
      (Zh[N.g.nf] = 1),
      (Zh[N.g.Ob] = 1),
      (Zh[N.g.Na] = 1),
      (Zh[N.g.Pb] = 1),
      (Zh[N.g.Ud] = 1),
      (Zh[N.g.Zc] = 1),
      (Zh[N.g.qf] = 1),
      (Zh[N.g.ad] = 1),
      (Zh[N.g.Qb] = 1),
      (Zh[N.g.Rb] = 1),
      (Zh[N.g.ie] = 1),
      (Zh[N.g.Va] = 1),
      (Zh[N.g.qe] = 1),
      Zh)
    );
  Object.freeze([
    N.g.za,
    N.g.Ja,
    N.g.xb,
    N.g.Ha,
    N.g.pf,
    N.g.Oa,
    N.g.hf,
    N.g.mi,
  ]);
  var ai = {},
    bi = Object.freeze(
      ((ai[N.g.bi] = 1),
      (ai[N.g.di] = 1),
      (ai[N.g.ei] = 1),
      (ai[N.g.fi] = 1),
      (ai[N.g.gi] = 1),
      (ai[N.g.hi] = 1),
      (ai[N.g.ii] = 1),
      (ai[N.g.ji] = 1),
      (ai[N.g.ki] = 1),
      (ai[N.g.zd] = 1),
      ai)
    ),
    ci = {},
    di = Object.freeze(
      ((ci[N.g.fg] = 1),
      (ci[N.g.gg] = 1),
      (ci[N.g.ic] = 1),
      (ci[N.g.jc] = 1),
      (ci[N.g.hg] = 1),
      (ci[N.g.Gb] = 1),
      (ci[N.g.kc] = 1),
      (ci[N.g.Za] = 1),
      (ci[N.g.ob] = 1),
      (ci[N.g.ab] = 1),
      (ci[N.g.oa] = 1),
      (ci[N.g.mc] = 1),
      (ci[N.g.Ca] = 1),
      (ci[N.g.ig] = 1),
      ci)
    ),
    ei = Object.freeze([N.g.ia, N.g.qb, N.g.sb, N.g.Uc, N.g.Rb]),
    fi = Object.freeze([].concat(ei)),
    gi = Object.freeze([N.g.Ga, N.g.Md, N.g.Zc, N.g.qf, N.g.Hd]),
    hi = Object.freeze([].concat(gi)),
    ii = {},
    ji =
      ((ii[N.g.J] = "1"),
      (ii[N.g.R] = "2"),
      (ii[N.g.P] = "3"),
      (ii[N.g.nb] = "4"),
      ii),
    ki = {},
    li = Object.freeze(
      ((ki[N.g.ia] = 1),
      (ki[N.g.Ad] = 1),
      (ki[N.g.Fa] = 1),
      (ki[N.g.Ib] = 1),
      (ki[N.g.bf] = 1),
      (ki[N.g.Bd] = 1),
      (ki[N.g.Cd] = 1),
      (ki[N.g.Dd] = 1),
      (ki[N.g.aa] = 1),
      (ki[N.g.Ed] = 1),
      (ki[N.g.La] = 1),
      (ki[N.g.Da] = 1),
      (ki[N.g.Ta] = 1),
      (ki[N.g.Ga] = 1),
      (ki[N.g.Ua] = 1),
      (ki[N.g.Ma] = 1),
      (ki[N.g.sa] = 1),
      (ki[N.g.Fd] = 1),
      (ki[N.g.ba] = 1),
      (ki[N.g.si] = 1),
      (ki[N.g.Jd] = 1),
      (ki[N.g.Kd] = 1),
      (ki[N.g.hf] = 1),
      (ki[N.g.Nd] = 1),
      (ki[N.g.Mb] = 1),
      (ki[N.g.wb] = 1),
      (ki[N.g.Ha] = 1),
      (ki[N.g.Wc] = 1),
      (ki[N.g.za] = 1),
      (ki[N.g.Ja] = 1),
      (ki[N.g.Eg] = 1),
      (ki[N.g.Fg] = 1),
      (ki[N.g.Gg] = 1),
      (ki[N.g.Hg] = 1),
      (ki[N.g.Ob] = 1),
      (ki[N.g.Na] = 1),
      (ki[N.g.Pb] = 1),
      (ki[N.g.Ud] = 1),
      (ki[N.g.ad] = 1),
      (ki[N.g.wa] = 1),
      (ki[N.g.Qb] = 1),
      (ki[N.g.Rb] = 1),
      (ki[N.g.Ab] = 1),
      (ki[N.g.Aa] = 1),
      (ki[N.g.Oa] = 1),
      (ki[N.g.ja] = 1),
      ki)
    ),
    mi = {},
    ni = Object.freeze(
      ((mi[N.g.gk] = "s"),
      (mi[N.g.ik] = "y"),
      (mi[N.g.bk] = "n"),
      (mi[N.g.dk] = "c"),
      (mi[N.g.fk] = "p"),
      (mi[N.g.hk] = "h"),
      (mi[N.g.Zj] = "a"),
      (mi[N.g.ek] = "m"),
      mi)
    );
  Object.freeze(N.g);
  var oi = {},
    pi = (z.google_tag_manager = z.google_tag_manager || {}),
    qi = Math.random();
  oi.Ug = "3ai0";
  oi.pe = Number("0") || 0;
  oi.fa = "dataLayer";
  oi.Xj =
    "ChAI8MrIqQYQ/tul9cbN48ENEiQAto5TPIBWTrnuurHcSk3ymlFEBDeeb1ORvyfevfPhqwejePoaAm1Z";
  var ri = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    si = { __paused: 1, __tg: 1 },
    ti;
  for (ti in ri) ri.hasOwnProperty(ti) && (si[ti] = 1);
  var ui = Qa(""),
    vi,
    wi = !1;
  vi = wi;
  var xi,
    yi = !1;
  xi = yi;
  var zi,
    Ai = !1;
  zi = Ai;
  var Bi,
    Ci = !1;
  Bi = Ci;
  oi.yd = "www.googletagmanager.com";
  var Di = "" + oi.yd + (vi ? "/gtag/js" : "/gtm.js"),
    Ei = null,
    Fi = null,
    Gi = {},
    Hi = {},
    Ii = {},
    Ji = function () {
      var a = pi.sequence || 1;
      pi.sequence = a + 1;
      return a;
    };
  oi.Wj = "";
  var Ki = "";
  oi.yf = Ki;
  var Li = new La(),
    Mi = {},
    Ni = {},
    Qi = {
      name: oi.fa,
      set: function (a, b) {
        ob(ab(a, b), Mi);
        Oi();
      },
      get: function (a) {
        return Pi(a, 2);
      },
      reset: function () {
        Li = new La();
        Mi = {};
        Oi();
      },
    },
    Pi = function (a, b) {
      return 2 != b ? Li.get(a) : Ri(a);
    },
    Ri = function (a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = Mi, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    Si = function (a, b) {
      Ni.hasOwnProperty(a) || (Li.set(a, b), ob(ab(a, b), Mi), Oi());
    },
    Ti = function () {
      for (
        var a = [
            "gtm.allowlist",
            "gtm.blocklist",
            "gtm.whitelist",
            "gtm.blacklist",
            "tagTypeBlacklist",
          ],
          b = 0;
        b < a.length;
        b++
      ) {
        var c = a[b],
          d = Pi(c, 1);
        if (Ha(d) || nb(d)) d = ob(d);
        Ni[c] = d;
      }
    },
    Oi = function (a) {
      l(Ni, function (b, c) {
        Li.set(b, c);
        ob(ab(b), Mi);
        ob(ab(b, c), Mi);
        a && delete Ni[b];
      });
    },
    Ui = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Ri(a) : Li.get(a);
      "array" === lb(d) || "object" === lb(d) ? (c = ob(d)) : (c = d);
      return c;
    };
  var $i = function (a, b, c) {
      if (!c) return !1;
      var d = c.selector_type,
        e = String(c.value),
        f;
      if ("js_variable" === d) {
        e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
        for (var g = e.split(","), h = 0; h < g.length; h++) {
          var m = g[h].trim();
          if (m) {
            if (0 === m.indexOf("dataLayer.")) f = Pi(m.substring(10));
            else {
              var n = m.split(".");
              f = z[n.shift()];
              for (var p = 0; p < n.length; p++) f = f && f[n[p]];
            }
            if (void 0 !== f) break;
          }
        }
      } else if ("css_selector" === d && xh) {
        var q = yh(e);
        if (q && 0 < q.length) {
          f = [];
          for (
            var r = 0;
            r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1);
            r++
          )
            f.push(Sc(q[r]) || Sa(q[r].value));
          f = 1 === f.length ? f[0] : f;
        }
      }
      return f ? ((a[b] = f), !0) : !1;
    },
    aj = function (a) {
      if (a) {
        var b = {},
          c = !1;
        c = $i(b, "email", a.email) || c;
        c = $i(b, "phone_number", a.phone) || c;
        b.address = [];
        for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
          var f = {};
          c = $i(f, "first_name", d[e].first_name) || c;
          c = $i(f, "last_name", d[e].last_name) || c;
          c = $i(f, "street", d[e].street) || c;
          c = $i(f, "city", d[e].city) || c;
          c = $i(f, "region", d[e].region) || c;
          c = $i(f, "country", d[e].country) || c;
          c = $i(f, "postal_code", d[e].postal_code) || c;
          b.address.push(f);
        }
        return c ? b : void 0;
      }
    },
    bj = function (a) {
      return nb(a) ? !!a.enable_code : !1;
    };
  var cj = function (a) {
      var b = a && a[N.g.ng];
      return b && b[N.g.li];
    },
    dj = function () {
      return -1 !== Ec.userAgent.toLowerCase().indexOf("firefox");
    },
    ej = function (a) {
      if (a && a.length) {
        for (var b = [], c = 0; c < a.length; ++c) {
          var d = a[c];
          d && d.estimated_delivery_date
            ? b.push("" + d.estimated_delivery_date)
            : b.push("");
        }
        return b.join(",");
      }
    };
  var fj = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var gj = [];
  function hj(a) {
    switch (a) {
      case 38:
        return 3;
      case 68:
        return 14;
      case 70:
        return 8;
      case 86:
        return 11;
      case 87:
        return 12;
      case 90:
        return 10;
      case 92:
        return 13;
      case 88:
        return 15;
    }
  }
  function P(a) {
    gj[a] = !0;
    var b = hj(a);
    b && (Sf[b] = !0);
  }
  P(5);
  P(6);
  P(11);
  P(7);
  P(8);
  P(19);
  P(9);
  P(10);
  P(13);
  P(14);
  P(15);
  P(22);
  P(17);
  P(23);
  P(26);
  P(27);
  P(28);
  P(29);
  P(30);
  P(31);
  P(33);
  P(35);
  P(36);
  P(37);
  P(46);
  P(47);
  P(48);
  P(50);
  P(51);
  P(55);
  P(56);
  P(59);
  P(62);
  P(63);
  P(64);
  P(60);
  P(65);
  P(66);
  P(67);
  P(69);
  P(72);
  P(73);
  P(75);
  P(76);
  P(77);
  P(78);
  P(79);
  P(82);
  P(85);
  P(88);
  P(90);
  P(93);
  P(95);
  P(97);
  P(98);

  function Q(a) {
    return !!gj[a];
  }
  var ij = !1;
  function jj(a) {}
  var kj = Number("");
  var lj = function (a) {
    Bb("HEALTH", a);
  };
  var mj;
  try {
    mj = JSON.parse(
      zb(
        "eyIwIjoiVk4iLCIxIjoiVk4tU0ciLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jb20udm4iLCI0IjoiIiwiNSI6dHJ1ZSwiNiI6ZmFsc2UsIjciOiJhZF9zdG9yYWdlfGFuYWx5dGljc19zdG9yYWdlfGFkX3VzZXJfZGF0YXxhZF9wZXJzb25hbGl6YXRpb24ifQ"
      )
    );
  } catch (a) {
    M(123), lj(2), (mj = {});
  }
  var nj = function () {
      return mj["0"] || "";
    },
    oj = function () {
      return mj["1"] || "";
    },
    pj = function () {
      var a = !1;
      return a;
    },
    qj = function () {
      var a = "";
      return a;
    },
    rj = function () {
      var a = !1;
      a = !!mj["5"];
      return a;
    },
    sj = function () {
      var a = "";
      return a;
    };
  var tj = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var uj = function (a) {
    uj[" "](a);
    return a;
  };
  uj[" "] = function () {};
  var wj = function () {
    var a = vj,
      b = "oh";
    if (a.oh && a.hasOwnProperty(b)) return a.oh;
    var c = new a();
    return (a.oh = c);
  };
  var vj = function () {
    var a = {};
    this.h = function () {
      var b = tj.h,
        c = tj.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.C = function () {
      a[tj.h] = !0;
    };
  };
  var xj = !1,
    yj = !1,
    zj = {},
    Aj = {},
    Bj = !1,
    Cj = { ad_storage: !1, ad_user_data: !1, ad_personalization: !1 };
  function Dj() {
    var a = Gc("google_tag_data", {});
    return (a.ics = a.ics || new Ej());
  }
  var Ej = function () {
    this.entries = {};
    this.cps = {};
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedSetCps =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.h = [];
  };
  Ej.prototype.default = function (a, b, c, d, e, f) {
    this.usedDefault ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    Bb("TAGGING", 19);
    void 0 == b ? Bb("TAGGING", 18) : Fj(this, a, "granted" === b, c, d, e, f);
  };
  Ej.prototype.waitForUpdate = function (a, b) {
    for (var c = 0; c < a.length; c++)
      Fj(this, a[c], void 0, void 0, "", "", b);
  };
  var Fj = function (a, b, c, d, e, f, g) {
    var h = a.entries,
      m = h[b] || {},
      n = m.region,
      p = d && k(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (Gj(p, n, e, f)) {
      var q = !!(g && 0 < g && void 0 === m.update),
        r = {
          region: p,
          declare_region: m.declare_region,
          implicit: m.implicit,
          default: void 0 !== c ? c : m.default,
          declare: m.declare,
          update: m.update,
          quiet: q,
        };
      if ("" !== e || !1 !== m.default) h[b] = r;
      q &&
        z.setTimeout(function () {
          h[b] === r &&
            r.quiet &&
            (a.clearTimeout(b, void 0),
            a.notifyListeners(),
            Bb("TAGGING", 2),
            (a.waitPeriodTimedOut = !0));
        }, g);
    }
  };
  aa = Ej.prototype;
  aa.clearTimeout = function (a, b) {
    var c = [a],
      d;
    for (d in zj) zj.hasOwnProperty(d) && zj[d] === a && c.push(d);
    var e = this.entries[a] || {},
      f = this.getConsentState(a);
    if (e.quiet) {
      e.quiet = !1;
      for (var g = fa(c), h = g.next(); !h.done; h = g.next())
        Hj(this, h.value);
    } else if (void 0 !== b && f !== b) {
      var m = fa(c);
      for (h = m.next(); !h.done; h = m.next()) Hj(this, h.value);
    }
  };
  aa.update = function (a, b) {
    this.usedDefault ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (void 0 != b) {
      var c = this.getConsentState(a),
        d = this.entries;
      (d[a] = d[a] || {}).update = "granted" === b;
      this.clearTimeout(a, c);
    }
  };
  aa.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      h = g.declare_region,
      m = c && k(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (Gj(m, h, d, e)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: "granted" === b,
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if ("" !== d || !1 !== g.declare) f[a] = n;
    }
  };
  aa.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    !1 !== d.implicit && (d.implicit = "granted" === b);
  };
  aa.getConsentState = function (a) {
    var b = this.entries,
      c = b[a] || {},
      d = c.update;
    if (void 0 !== d) return d ? 1 : 2;
    d = c.default;
    if (void 0 !== d) return d ? 1 : 2;
    if (zj.hasOwnProperty(a)) {
      var e = b[zj[a]] || {};
      d = e.update;
      if (void 0 !== d) return d ? 1 : 2;
      d = e.default;
      if (void 0 !== d) return d ? 1 : 2;
    }
    d = c.declare;
    if (void 0 !== d) return d ? 1 : 2;
    if (Tf(3)) {
      d = c.implicit;
      if (void 0 !== d) return d ? 3 : 4;
      if (Cj.hasOwnProperty(a)) return Cj[a] ? 3 : 4;
    }
    return 0;
  };
  aa.setCps = function (a, b, c, d, e) {
    Ij(this.cps, a, b, c, d, e) && (this.usedSetCps = !0);
  };
  aa.addListener = function (a, b) {
    this.h.push({ consentTypes: a, ol: b });
  };
  var Hj = function (a, b) {
    for (var c = 0; c < a.h.length; ++c) {
      var d = a.h[c];
      Ha(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.Aj = !0);
    }
  };
  Ej.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.h.length; ++c) {
      var d = this.h[c];
      if (d.Aj) {
        d.Aj = !1;
        try {
          d.ol({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  function Gj(a, b, c, d) {
    return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b;
  }
  function Ij(a, b, c, d, e, f) {
    var g = a[b] || {},
      h = g.region,
      m = d && k(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (Gj(m, h, e, f)) {
      var n = { enabled: "granted" === c, region: m };
      if ("" !== e || !1 !== g.enabled) return (a[b] = n), !0;
    }
    return !1;
  }
  var Jj = function (a) {
      var b = Dj();
      b.accessedAny = !0;
      return (k(a) ? [a] : a).every(function (c) {
        switch (b.getConsentState(c)) {
          case 1:
          case 3:
            return !0;
          case 2:
          case 4:
            return !1;
          default:
            return !0;
        }
      });
    },
    Kj = function (a) {
      var b = Dj();
      b.accessedDefault = !0;
      switch ((b.entries[a] || {}).default) {
        case !0:
          return 3;
        case !1:
          return 2;
        default:
          return 1;
      }
    },
    Lj = function (a) {
      var b = Dj();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Mj = function () {
      if (!wj().h()) return !1;
      var a = Dj();
      a.accessedAny = !0;
      return a.active;
    },
    Nj = function () {
      var a = Dj();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Oj = function (a, b) {
      Dj().addListener(a, b);
    },
    Pj = function (a, b) {
      Dj().notifyListeners(a, b);
    },
    Qj = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Lj(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Oj(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Rj = function (a, b) {
      function c() {
        for (var h = [], m = 0; m < e.length; m++) {
          var n = e[m];
          Jj(n) && !f[n] && h.push(n);
        }
        return h;
      }
      function d(h) {
        for (var m = 0; m < h.length; m++) f[h[m]] = !0;
      }
      var e = k(b) ? [b] : b,
        f = {},
        g = c();
      g.length !== e.length &&
        (d(g),
        Oj(e, function (h) {
          function m(q) {
            0 !== q.length && (d(q), (h.consentTypes = q), a(h));
          }
          var n = c();
          if (0 !== n.length) {
            var p = Object.keys(f).length;
            n.length + p >= e.length
              ? m(n)
              : z.setTimeout(function () {
                  m(c());
                }, 500);
          }
        }));
    };
  function Sj() {}
  function Tj() {}
  var Uj = [N.g.J, N.g.R, N.g.P, N.g.nb],
    Vj = function (a) {
      for (
        var b = a[N.g.Sa], c = Array.isArray(b) ? b : [b], d = { He: 0 };
        d.He < c.length;
        d = { He: d.He }, ++d.He
      )
        l(
          a,
          (function (e) {
            return function (f, g) {
              if (f !== N.g.Sa) {
                var h = c[e.He],
                  m = nj(),
                  n = oj();
                yj = !0;
                xj && Bb("TAGGING", 20);
                Dj().declare(f, g, h, m, n);
              }
            };
          })(d)
        );
    },
    Wj = function (a) {
      var b = a[N.g.Sa];
      b && M(40);
      var c = a[N.g.wd];
      c && M(41);
      for (
        var d = Ha(b) ? b : [b], e = { Ie: 0 };
        e.Ie < d.length;
        e = { Ie: e.Ie }, ++e.Ie
      )
        l(
          a,
          (function (f) {
            return function (g, h) {
              if (g !== N.g.Sa && g !== N.g.wd) {
                var m = d[f.Ie],
                  n = Number(c),
                  p = nj(),
                  q = oj();
                xj = !0;
                yj && Bb("TAGGING", 20);
                Dj().default(g, h, m, p, q, n);
              }
            };
          })(e)
        );
    },
    Xj = function (a, b) {
      l(a, function (c, d) {
        xj = !0;
        yj && Bb("TAGGING", 20);
        Dj().update(c, d);
      });
      Pj(b.eventId, b.priorityId);
    },
    Yj = function (a) {
      for (
        var b = a[N.g.Sa], c = Array.isArray(b) ? b : [b], d = { Je: 0 };
        d.Je < c.length;
        d = { Je: d.Je }, ++d.Je
      )
        l(
          a,
          (function (e) {
            return function (f, g) {
              if (f !== N.g.Sa) {
                var h = c[e.Je],
                  m = nj(),
                  n = oj();
                Dj().setCps(f, g, h, m, n);
              }
            };
          })(d)
        );
    },
    Zj = function (a) {
      for (
        var b = a[N.g.Sa], c = Array.isArray(b) ? b : [b], d = { jd: 0 };
        d.jd < c.length;
        d = { jd: d.jd }, ++d.jd
      )
        a.hasOwnProperty(N.g.dg) &&
          l(
            ni,
            (function (e) {
              return function (f) {
                Ij(Aj, f, a[N.g.dg], c[e.jd], nj(), oj()) && (Bj = !0);
              };
            })(d)
          ),
          l(
            a,
            (function (e) {
              return function (f, g) {
                f !== N.g.Sa &&
                  f !== N.g.dg &&
                  Ij(Aj, f, g, c[e.jd], nj(), oj()) &&
                  (Bj = !0);
              };
            })(d)
          );
    },
    T = function (a) {
      Array.isArray(a) || (a = [a]);
      return a.every(function (b) {
        return Jj(b);
      });
    },
    ak = function (a, b) {
      Oj(a, b);
    },
    bk = function (a, b) {
      Rj(a, b);
    },
    ck = function (a, b) {
      Qj(a, b);
    },
    dk = function (a) {
      Dj().waitForUpdate(a, 500);
    };
  var ek = function (a) {
      var b = String(a[Pe.xa] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    fk =
      0 <= z.location.search.indexOf("?gtm_latency=") ||
      0 <= z.location.search.indexOf("&gtm_latency=");
  var hk = function (a, b) {
      var c = gk();
      c.pending || (c.pending = []);
      Ja(c.pending, function (d) {
        return (
          d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        );
      }) || c.pending.push({ target: a, onLoad: b });
    },
    ik = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    gk = function () {
      var a = Gc("google_tag_data", {}),
        b = a.tidr;
      b || ((b = new ik()), (a.tidr = b));
      return b;
    };
  var jk = {},
    kk = !1,
    Uf = {
      ctid: "GTM-P3TCG37",
      Df: "105865492",
      yj: "GTM-P3TCG37",
      zj: "GTM-P3TCG37",
    };
  jk.ke = Qa("");
  var nk = function () {
      var a = lk();
      return kk ? a.map(mk) : a;
    },
    pk = function () {
      var a = ok();
      return kk ? a.map(mk) : a;
    },
    rk = function () {
      return qk(Uf.ctid);
    },
    sk = function () {
      return qk(Uf.Df || "_" + Uf.ctid);
    },
    lk = function () {
      return Uf.yj ? Uf.yj.split("|") : [Uf.ctid];
    },
    ok = function () {
      return Uf.zj ? Uf.zj.split("|") : [];
    },
    tk = function (a) {
      var b = gk();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    qk = function (a) {
      return kk ? mk(a) : a;
    },
    mk = function (a) {
      return "siloed_" + a;
    },
    uk = function (a) {
      a = String(a);
      return kk && 0 === a.indexOf("siloed_") ? a.substring(7) : a;
    },
    vk = function () {
      var a = !1;
      if (a) {
        var b = gk();
        if (b.siloed) {
          for (
            var c = [], d = lk(), e = ok(), f = {}, g = 0;
            g < b.siloed.length;
            f = { xe: f.xe }, g++
          )
            (f.xe = b.siloed[g]),
              !kk &&
              Ja(
                f.xe.isDestination ? e : d,
                (function (h) {
                  return function (m) {
                    return m === h.xe.ctid;
                  };
                })(f)
              )
                ? (kk = !0)
                : c.push(f.xe);
          b.siloed = c;
        }
      }
    };
  function wk() {
    var a = gk();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = nk(), f = pk(), g = {}, h = 0;
        h < a.pending.length;
        g = { od: g.od }, h++
      )
        (g.od = a.pending[h]),
          Ja(
            g.od.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.od.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.od.onLoad), (d = !0))
            : c.push(g.od);
      a.pending = c;
      if (b)
        try {
          b(sk());
        } catch (m) {}
    }
  }
  var xk = function () {
      for (var a = gk(), b = nk(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        d
          ? ((d.state = 2), (d.containers = nk()), (d.destinations = pk()))
          : (a.container[b[c]] = {
              state: 2,
              containers: nk(),
              destinations: pk(),
            });
      }
      for (var e = pk(), f = 0; f < e.length; f++) {
        var g = a.destination[e[f]];
        g && 0 === g.state && M(93);
        g
          ? ((g.state = 2), (g.containers = nk()), (g.destinations = pk()))
          : (a.destination[e[f]] = {
              state: 2,
              containers: nk(),
              destinations: pk(),
            });
      }
      a.canonical[sk()] = {};
      wk();
    },
    yk = function (a) {
      return !!gk().container[a];
    },
    zk = function (a) {
      var b = gk().destination[a];
      return !!b && !!b.state;
    },
    Ak = function () {
      return { ctid: rk(), isDestination: jk.ke };
    };
  function Bk(a) {
    var b = gk();
    (b.siloed = b.siloed || []).push(a);
  }
  var Ck = function () {
      var a = gk().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    Dk = function () {
      var a = {};
      l(gk().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    },
    Ek = function (a) {
      return !!(
        a &&
        a.parent &&
        a.context &&
        1 === a.context.source &&
        0 !== a.parent.ctid.indexOf("GTM-")
      );
    };
  var Fk = { sampleRate: "0.005000", Sj: "", Rj: Number("5"), Jn: Number("") },
    Gk = [];
  function Hk(a) {
    Gk.push(a);
  }
  var Ik = !1,
    Jk;
  if (!(Jk = fk)) {
    var Kk = Math.random(),
      Lk = Fk.sampleRate;
    Jk = Kk < Number(Lk);
  }
  var Mk = Jk,
    Nk = "https://www.googletagmanager.com/a?id=" + Uf.ctid,
    Ok = void 0,
    Pk = {},
    Qk = void 0,
    Rk = new (function () {
      var a = 5;
      0 < Fk.Rj && (a = Fk.Rj);
      this.h = 0;
      this.D = [];
      this.C = a;
    })(),
    Sk = 1e3;
  function Tk(a, b) {
    var c = Ok;
    if (void 0 === c)
      if (b) c = Ji();
      else return "";
    for (var d = [Nk], e = 0; e < Gk.length; e++) {
      var f = Gk[e]({
        eventId: c,
        hc: !!a,
        Hj: function () {
          Ik = !0;
        },
      });
      "&" === f[0] && d.push(f);
    }
    d.push("&z=0");
    return d.join("");
  }
  function Uk() {
    Qk && (z.clearTimeout(Qk), (Qk = void 0));
    if (void 0 !== Ok && Vk) {
      var a;
      (a = Pk[Ok]) || (a = Rk.h < Rk.C ? !1 : 1e3 > Ua() - Rk.D[Rk.h % Rk.C]);
      if (a || 0 >= Sk--) M(1), (Pk[Ok] = !0);
      else {
        var b = Rk.h++ % Rk.C;
        Rk.D[b] = Ua();
        var c = Tk(!0);
        Oc(c);
        if (Ik) {
          var d = c.replace("/a?", "/td?");
          Oc(d);
        }
        Vk = Ik = !1;
      }
    }
  }
  var Vk = !1;
  function Wk(a) {
    Pk[a] ||
      (a !== Ok && (Uk(), (Ok = a)),
      (Vk = !0),
      Qk || (Qk = z.setTimeout(Uk, 500)),
      2022 <= Tk().length && Uk());
  }
  var Xk = Ka();
  function Yk() {
    Xk = Ka();
  }
  function Zk() {
    return ["&v=3&t=t", "&pid=" + Xk].join("");
  }
  var $k = function (a, b, c, d, e, f, g, h, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.M = d;
      this.D = e;
      this.H = f;
      this.U = g;
      this.C = h;
      this.eventMetadata = m;
      this.onSuccess = n;
      this.onFailure = p;
      this.isGtmEvent = q;
    },
    V = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.M[b]) return a.M[b];
      if (void 0 !== a.D[b]) return a.D[b];
      Mk && al(a, a.H[b], a.U[b]) && (M(71), M(79));
      return void 0 !== a.H[b] ? a.H[b] : void 0 !== a.C[b] ? a.C[b] : c;
    },
    bl = function (a) {
      function b(g) {
        for (var h = Object.keys(g), m = 0; m < h.length; ++m) c[h[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.M);
      b(a.D);
      b(a.H);
      if (Mk)
        for (var d = Object.keys(a.U), e = 0; e < d.length; e++) {
          var f = d[e];
          if (
            "event" !== f &&
            "gtm" !== f &&
            "tagTypeBlacklist" !== f &&
            !c.hasOwnProperty(f)
          ) {
            M(71);
            M(80);
            break;
          }
        }
      return Object.keys(c);
    },
    cl = function (a, b, c) {
      function d(m) {
        nb(m) &&
          l(m, function (n, p) {
            f = !0;
            e[n] = p;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) || (d(a.C[b]), d(a.H[b]), d(a.D[b]), d(a.M[b]));
      (c && 2 !== c) || d(a.h[b]);
      if (Mk) {
        var g = f,
          h = e;
        e = {};
        f = !1;
        (c && 1 !== c) || (d(a.C[b]), d(a.U[b]), d(a.D[b]), d(a.M[b]));
        (c && 2 !== c) || d(a.h[b]);
        if (f !== g || al(a, e, h)) M(71), M(81);
        f = g;
        e = h;
      }
      return f ? e : void 0;
    },
    dl = function (a) {
      var b = [N.g.Kc, N.g.Gc, N.g.Hc, N.g.Ic, N.g.Jc, N.g.Lc, N.g.Mc],
        c = {},
        d = !1,
        e = function (h) {
          for (var m = 0; m < b.length; m++)
            void 0 !== h[b[m]] && ((c[b[m]] = h[b[m]]), (d = !0));
          return d;
        };
      if (e(a.h) || e(a.M) || e(a.D)) return c;
      e(a.H);
      if (Mk) {
        var f = c,
          g = d;
        c = {};
        d = !1;
        e(a.U);
        al(a, c, f) && (M(71), M(82));
        c = f;
        d = g;
      }
      if (d) return c;
      e(a.C);
      return c;
    },
    al = function (a, b, c) {
      if (!Mk) return !1;
      try {
        if (b === c) return !1;
        var d = lb(b);
        if (d !== lb(c) || !((nb(b) && nb(c)) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (al(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var g in b)
            if (!c.hasOwnProperty(g) || al(a, b[g], c[g])) return !0;
        }
      } catch (h) {
        M(72);
      }
      return !1;
    },
    el = function (a, b) {
      this.Ck = a;
      this.Gk = b;
      this.H = {};
      this.uf = {};
      this.h = {};
      this.M = {};
      this.C = {};
      this.wc = {};
      this.D = {};
      this.Sb = function () {};
      this.Ya = function () {};
      this.U = !1;
    },
    fl = function (a, b) {
      a.H = b;
      return a;
    },
    gl = function (a, b) {
      a.uf = b;
      return a;
    },
    hl = function (a, b) {
      a.h = b;
      return a;
    },
    il = function (a, b) {
      a.M = b;
      return a;
    },
    jl = function (a, b) {
      a.C = b;
      return a;
    },
    kl = function (a, b) {
      a.wc = b;
      return a;
    },
    ll = function (a, b) {
      a.D = b || {};
      return a;
    },
    ml = function (a, b) {
      a.Sb = b;
      return a;
    },
    nl = function (a, b) {
      a.Ya = b;
      return a;
    },
    ol = function (a, b) {
      a.U = b;
      return a;
    },
    pl = function (a) {
      return new $k(
        a.Ck,
        a.Gk,
        a.H,
        a.uf,
        a.h,
        a.M,
        a.C,
        a.wc,
        a.D,
        a.Sb,
        a.Ya,
        a.U
      );
    };
  function ql(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var rl = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    sl = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var tl = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function ul() {
    return Qb ? !!Xb && !!Xb.platform : !1;
  }
  function vl() {
    return $b("iPhone") && !$b("iPod") && !$b("iPad");
  }
  function wl() {
    vl() || $b("iPad") || $b("iPod");
  }
  bc();
  ac() || $b("Trident") || $b("MSIE");
  $b("Edge");
  !$b("Gecko") ||
    (-1 != Wb().toLowerCase().indexOf("webkit") && !$b("Edge")) ||
    $b("Trident") ||
    $b("MSIE") ||
    $b("Edge");
  -1 != Wb().toLowerCase().indexOf("webkit") && !$b("Edge") && $b("Mobile");
  ul() || $b("Macintosh");
  ul() || $b("Windows");
  (ul() ? "Linux" === Xb.platform : $b("Linux")) || ul() || $b("CrOS");
  var xl = ua.navigator || null;
  xl && (xl.appVersion || "").indexOf("X11");
  ul() || $b("Android");
  vl();
  $b("iPad");
  $b("iPod");
  wl();
  Wb().toLowerCase().indexOf("kaios");
  var yl = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var h = a.charCodeAt(e + f);
          if (!h || 61 == h || 38 == h || 35 == h) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    zl = /#|$/,
    Al = function (a, b) {
      var c = a.search(zl),
        d = yl(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    Bl = /[?&]($|#)/,
    Cl = function (a, b, c) {
      for (
        var d, e = a.search(zl), f = 0, g, h = [];
        0 <= (g = yl(a, f, b, e));

      )
        h.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      h.push(a.slice(f));
      d = h.join("").replace(Bl, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        0 > r && (r = d.length);
        var t = d.indexOf("?"),
          u;
        0 > t || t > r ? ((t = r), (u = "")) : (u = d.substring(t + 1, r));
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var Dl = function (a) {
      try {
        var b;
        if ((b = !!a && null != a.location.href))
          a: {
            try {
              uj(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    El = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Fl(a) {
    if (!a || !C.head) return null;
    var b = Gl("META");
    C.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var Hl = function () {
      if (z.top == z) return 0;
      var a = z.location.ancestorOrigins;
      return a
        ? a[a.length - 1] == z.location.origin
          ? 1
          : 2
        : Dl(z.top)
        ? 1
        : 2;
    },
    Gl = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Il(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Gl("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            h = Fb(g, e);
          0 <= h && Array.prototype.splice.call(g, h, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      tl(e, "load", f);
      tl(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Kl = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      El(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Jl(c, b);
    },
    Jl = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else Il(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Ll = function () {};
  var Ml = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Nl = function (a, b) {
      b = void 0 === b ? {} : b;
      this.C = a;
      this.h = null;
      this.M = {};
      this.Ya = 0;
      var c;
      this.U = null != (c = b.Pm) ? c : 500;
      var d;
      this.H = null != (d = b.zn) ? d : !1;
      this.D = null;
    };
  sa(Nl, Ll);
  var Pl = function (a) {
    return "function" === typeof a.C.__tcfapi || null != Ol(a);
  };
  Nl.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.H },
      d = sl(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.U &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.U));
    var f = function (g, h) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Ml(c)),
          (c.internalBlockOnErrors = b.H),
          (h && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), h || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Ql(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Nl.prototype.removeEventListener = function (a) {
    a && a.listenerId && Ql(this, "removeEventListener", null, a.listenerId);
  };
  var Sl = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var h = c;
      2 === c
        ? ((h = 0), 2 === g && (h = 1))
        : 3 === c && ((h = 1), 1 === g && (h = 0));
      var m;
      if (0 === h)
        if (a.purpose && a.vendor) {
          var n = Rl(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && Rl(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === h
            ? a.purpose && a.vendor
              ? Rl(a.purpose.legitimateInterests, b) &&
                Rl(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    Rl = function (a, b) {
      return !(!a || !a[b]);
    },
    Ql = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.C.__tcfapi) {
        var e = a.C.__tcfapi;
        e(b, 2, c, d);
      } else if (Ol(a)) {
        Tl(a);
        var f = ++a.Ya;
        a.M[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    Ol = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.C, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (h) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (h) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    Tl = function (a) {
      a.D ||
        ((a.D = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.M[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        tl(a.C, "message", a.D));
    },
    Ul = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Ml(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (Kl({ e: String(a.internalErrorState) }), !1)
          : !0
        : "loaded" !== a.cmpStatus ||
          ("tcloaded" !== a.eventStatus &&
            "useractioncomplete" !== a.eventStatus)
        ? !1
        : !0;
    };
  var Vl = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    Wl = ql("", 500);
  function Xl() {
    var a = pi.tcf || {};
    return (pi.tcf = a);
  }
  var Yl = function () {
      return new Nl(z, { Pm: -1 });
    },
    dm = function () {
      var a = Xl(),
        b = Yl();
      Pl(b) && Zl() && M(124);
      if (($l() || Q(70)) && !a.active && Pl(b)) {
        a.active = !0;
        $l()
          ? ((a.bc = {}),
            (a.cmpId = 0),
            (a.tcfPolicyVersion = 0),
            am(),
            Q(70) && dk([N.g.P]),
            (a.tcString = "tcunavailable"))
          : Q(70) && dk([N.g.J, N.g.nb, N.g.P]);
        try {
          b.addEventListener(function (c) {
            if (0 !== c.internalErrorState) bm(a), cm(a);
            else {
              a.gdprApplies = c.gdprApplies;
              if (Q(70)) {
                a.cmpId = c.cmpId;
                a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode;
                if (Zl()) return;
                a.tcfPolicyVersion = c.tcfPolicyVersion;
              }
              var d;
              if (!1 === c.gdprApplies) {
                var e = {},
                  f;
                for (f in Vl) Vl.hasOwnProperty(f) && (e[f] = !0);
                d = e;
                b.removeEventListener(c);
              } else if (
                "tcloaded" === c.eventStatus ||
                "useractioncomplete" === c.eventStatus ||
                "cmpuishown" === c.eventStatus
              ) {
                var g = {},
                  h;
                for (h in Vl)
                  if (Vl.hasOwnProperty(h))
                    if ("1" === h) {
                      var m,
                        n = c,
                        p = !0;
                      p = void 0 === p ? !1 : p;
                      m = Ul(n)
                        ? !1 === n.gdprApplies ||
                          "tcunavailable" === n.tcString ||
                          (void 0 === n.gdprApplies && !p) ||
                          "string" !== typeof n.tcString ||
                          !n.tcString.length
                          ? !0
                          : Sl(n, "1", 0)
                        : !1;
                      g["1"] = m;
                    } else g[h] = Sl(c, h, Vl[h]);
                d = g;
              }
              d && ((a.tcString = c.tcString || "tcempty"), (a.bc = d), cm(a));
            }
          });
        } catch (c) {
          bm(a), cm(a);
        }
      }
    };
  function bm(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function am() {
    var a = {},
      b = ((a[N.g.J] = "denied"), (a[N.g.wd] = Wl), a);
    Q(70) && (b[N.g.nb] = "denied");
    Wj(b);
  }
  var $l = function () {
      return !0 === z.gtag_enable_tcf_support;
    },
    Zl = function () {
      var a = $l();
      if (Q(70)) {
        var b = Xl().enableAdvertiserConsentMode;
        return !a && !b;
      }
      return !a;
    };
  function cm(a) {
    var b = {},
      c = ((b[N.g.J] = a.bc["1"] ? "granted" : "denied"), b);
    Q(70) &&
      ((c[N.g.nb] = a.bc["3"] && a.bc["4"] ? "granted" : "denied"),
      "number" === typeof a.tcfPolicyVersion &&
        4 <= a.tcfPolicyVersion &&
        (c[N.g.P] = a.bc["1"] && a.bc["7"] ? "granted" : "denied"));
    Xj(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: em() || "" }
    );
  }
  var em = function () {
      var a = Xl();
      if (a.active) return a.tcString;
    },
    fm = function () {
      var a = Xl();
      if (a.active && void 0 !== a.gdprApplies)
        return a.gdprApplies ? "1" : "0";
    },
    gm = function (a) {
      if (!Vl.hasOwnProperty(String(a))) return !0;
      var b = Xl();
      return b.active && b.bc ? !!b.bc[String(a)] : !0;
    };
  var hm = [N.g.J, N.g.R],
    im = [N.g.J, N.g.R, N.g.P, N.g.nb],
    jm = {},
    km = ((jm[N.g.J] = 1), (jm[N.g.R] = 2), jm);
  function lm(a) {
    if (void 0 === a) return 0;
    switch (V(a, N.g.ia)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var mm = function (a) {
      var b = 3 !== lm(a);
      Q(58) && (b = b && Jj(N.g.nb));
      return b;
    },
    nm = function () {
      var a = {},
        b;
      for (b in km)
        if (km.hasOwnProperty(b)) {
          var c = km[b],
            d,
            e = b,
            f = Dj();
          f.accessedAny = !0;
          d = f.getConsentState(e);
          a[c] = d;
        }
      var g = Q(43) && hm.every(Jj),
        h = Q(39);
      return g || h ? Oe(a, 1) : Oe(a, 0);
    },
    om = {},
    pm =
      ((om[N.g.J] = 0), (om[N.g.R] = 1), (om[N.g.P] = 2), (om[N.g.nb] = 3), om);
  function qm(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  var rm = function (a) {
      if (Q(40)) {
        for (var b = "1", c = 0; c < im.length; c++) {
          var d = b,
            e,
            f = im[c],
            g = zj[f];
          e = void 0 === g ? 0 : pm.hasOwnProperty(g) ? 12 | pm[g] : 8;
          var h = Dj();
          h.accessedAny = !0;
          var m = h.entries[f] || {};
          e = (e << 2) | qm(m.implicit);
          b =
            d +
            ("" +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                e
              ] +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                (qm(m.declare) << 4) | (qm(m.default) << 2) | qm(m.update)
              ]);
        }
        var n = b,
          p;
        p = "" + ((Mj() << 2) | lm(a));
        return n + p;
      }
      for (var q = "G1", r = 0; r < hm.length; r++)
        switch (Kj(hm[r])) {
          case 3:
            q += "1";
            break;
          case 2:
            q += "0";
            break;
          case 1:
            q += "-";
        }
      return q;
    },
    sm = function () {
      if (!Jj(N.g.P)) return "-";
      var a = Dj(),
        b = Bj,
        c = a.cps,
        d = a.usedSetCps,
        e = {};
      if (b && d)
        for (var f in Aj)
          Aj.hasOwnProperty(f) &&
          Aj[f].enabled &&
          c.hasOwnProperty(f) &&
          c[f].enabled
            ? (e[f] = { enabled: !0, region: Aj[f].region })
            : (e[f] = { enabled: !1, region: Aj[f].region });
      else {
        var g = b ? Aj : c,
          h;
        for (h in g)
          g.hasOwnProperty(h) &&
            (e[h] = { enabled: g[h].enabled, region: g[h].region });
      }
      var m = [],
        n;
      for (n in e) e.hasOwnProperty(n) && e[n].enabled && m.push(n);
      for (var p = "", q = 0; q < m.length; q++) {
        var r = ni[m[q]];
        r && (p += r);
      }
      return "" === p ? "-" : p;
    };
  function tm() {
    var a = !!mj["6"],
      b = !1;
    Q(70) && (b = !Zl() && "1" === fm());
    return a || b;
  }
  var um = function () {
      return tm() ? "1" : "0";
    },
    vm = function () {
      return tm() || Dj().usedSetCps || !T(N.g.P);
    },
    wm = function () {
      var a = "0",
        b = "0",
        c;
      var d = Xl();
      c = d.active && Q(70) ? d.cmpId : void 0;
      "number" === typeof c &&
        0 <= c &&
        4095 >= c &&
        ((a =
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (c >> 6) & 63
          ]),
        (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          c & 63
        ]));
      var e = "0",
        f;
      var g = Xl();
      f = g.active && Q(70) ? g.tcfPolicyVersion : void 0;
      "number" === typeof f &&
        0 <= f &&
        63 >= f &&
        (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          f
        ]);
      var h = 0;
      mj["6"] && (h |= 1);
      "1" === fm() && (h |= 2);
      $l() && (h |= 4);
      var m;
      var n = Xl();
      m =
        n.active && void 0 !== n.enableAdvertiserConsentMode
          ? n.enableAdvertiserConsentMode
            ? "1"
            : "0"
          : void 0;
      "1" === m && (h |= 8);
      return (
        "1" +
        a +
        b +
        e +
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[h]
      );
    };
  var xm = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        h = g[0].replace(/^\s*|\s*$/g, "");
      if (h && h == a) {
        var m = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  function ym(a) {
    return "null" !== a.origin;
  }
  var Bm = function (a, b, c, d) {
      return zm(d) ? xm(a, String(b || Am()), c) : [];
    },
    Em = function (a, b, c, d, e) {
      if (zm(e)) {
        var f = Cm(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Dm(
            f,
            function (g) {
              return g.Ff;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = Dm(
            f,
            function (g) {
              return g.Re;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Fm(a, b, c, d) {
    var e = Am(),
      f = window;
    ym(f) && (f.document.cookie = a);
    var g = Am();
    return e != g || (void 0 != c && 0 <= Bm(b, g, !1, d).indexOf(c));
  }
  var Jm = function (a, b, c, d) {
      function e(w, x, y) {
        if (null == y) return delete h[x], w;
        h[x] = y;
        return w + "; " + x + "=" + y;
      }
      function f(w, x) {
        if (null == x) return delete h[x], w;
        h[x] = !0;
        return w + "; " + x;
      }
      if (!zm(c.Eb)) return 2;
      var g;
      void 0 == b
        ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Gm(b)),
          (g = a + "=" + b));
      var h = {};
      g = e(g, "path", c.path);
      var m;
      c.expires instanceof Date
        ? (m = c.expires.toUTCString())
        : null != c.expires && (m = "" + c.expires);
      g = e(g, "expires", m);
      g = e(g, "max-age", c.hm);
      g = e(g, "samesite", c.Fm);
      c.Hm && (g = f(g, "secure"));
      var n = c.domain;
      if (n && "auto" === n.toLowerCase()) {
        for (var p = Hm(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
          var u = "none" !== p[t] ? p[t] : void 0,
            v = e(g, "domain", u);
          v = f(v, c.flags);
          try {
            d && d(a, h);
          } catch (w) {
            q = w;
            continue;
          }
          r = !0;
          if (!Im(u, c.path) && Fm(v, a, b, c.Eb)) return 0;
        }
        if (q && !r) throw q;
        return 1;
      }
      n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
      g = f(g, c.flags);
      d && d(a, h);
      return Im(n, c.path) ? 1 : Fm(g, a, b, c.Eb) ? 0 : 1;
    },
    Km = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Jm(a, b, c);
    };
  function Dm(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g],
        m = b(h);
      m === c
        ? d.push(h)
        : void 0 === f || m < f
        ? ((e = [h]), (f = m))
        : m === f && e.push(h);
    }
    return 0 < d.length ? d : e;
  }
  function Cm(a, b, c) {
    for (var d = [], e = Bm(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        h = g.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var m = g.shift();
        m &&
          ((m = m.split("-")),
          d.push({ id: g.join("."), Ff: 1 * m[0] || 1, Re: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var Gm = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Lm = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Mm = /(^|\.)doubleclick\.net$/i,
    Im = function (a, b) {
      return (
        Mm.test(window.document.location.hostname) || ("/" === b && Lm.test(a))
      );
    },
    Am = function () {
      return ym(window) ? window.document.cookie : "";
    },
    Hm = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Mm.test(e) || Lm.test(e) || a.push("none");
      return a;
    },
    zm = function (a) {
      return a && wj().h()
        ? (k(a) ? [a] : a).every(function (b) {
            return Lj(b) && Jj(b);
          })
        : !0;
    };
  var Nm = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (fj(a) & 2147483647)) : String(b);
    },
    Om = function (a) {
      return [Nm(a), Math.round(Ua() / 1e3)].join(".");
    },
    Rm = function (a, b, c, d, e) {
      var f = Pm(b);
      return Em(a, f, Qm(c), d, e);
    },
    Sm = function (a, b, c, d) {
      var e = "" + Pm(c),
        f = Qm(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Pm = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Qm = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var bn = function () {
    pi.dedupe_gclid || (pi.dedupe_gclid = "" + Om());
    return pi.dedupe_gclid;
  };
  var cn = function () {
    var a = !1;
    return a;
  };
  var dn = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
    en = function (a, b) {
      var c = Uf.ctid.split("-")[0].toUpperCase(),
        d = {};
      d.ctid = Uf.ctid;
      d.Cm = oi.pe;
      d.Em = oi.Ug;
      d.am = jk.ke ? 2 : 1;
      Q(103) && ((d.ve = Uf.Df), d.ve !== a && (d.Wf = a));
      Q(106) ? (d.Jj = 1) : Q(105) && (d.Jj = 2);
      vi ? ((d.Tf = dn[c]), d.Tf || (d.Tf = 0)) : (d.Tf = Bi ? 13 : 10);
      zi ? (d.xh = 1) : cn() ? (d.xh = 2) : (d.xh = 3);
      var e;
      var f = d.Tf,
        g = d.xh;
      void 0 === f
        ? (e = "")
        : (g || (g = 0),
          (e =
            "" +
            Ig(1, 1) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              (f << 2) | g
            ]));
      var h = d.yn,
        m =
          4 +
          e +
          (h
            ? "" +
              Ig(2, 1) +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                h
              ]
            : ""),
        n,
        p = d.Em;
      n = p && Hg.test(p) ? "" + Ig(3, 2) + p : "";
      var q,
        r = d.Cm;
      q = r
        ? "" +
          Ig(4, 1) +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[r]
        : "";
      var t;
      var u = d.ctid;
      if (u && b) {
        var v = u.split("-"),
          w = v[0].toUpperCase();
        if ("GTM" !== w && "OPT" !== w) t = "";
        else {
          var x = v[1];
          t =
            "" +
            Ig(5, 3) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              1 + x.length
            ] +
            (d.am || 0) +
            x;
        }
      } else t = "";
      var y = d.Jj,
        A = d.ve,
        B = d.Wf,
        D = d.Gn;
      return (
        m +
        n +
        q +
        t +
        (y
          ? "" +
            Ig(6, 1) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              y
            ]
          : "") +
        (A
          ? "" +
            Ig(7, 3) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              A.length
            ] +
            A
          : "") +
        (B
          ? "" +
            Ig(8, 3) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              B.length
            ] +
            B
          : "") +
        (D
          ? "" +
            Ig(9, 3) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              D.length
            ] +
            D
          : "")
      );
    };
  var fn = void 0;
  function gn(a) {
    var b = "";
    return b;
  }
  var hn = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : (55296 == (e & 64512) &&
              d + 1 < a.length &&
              56320 == (a.charCodeAt(d + 1) & 64512)
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  cc();
  vl() || $b("iPod");
  $b("iPad");
  !$b("Android") || dc() || cc() || bc() || $b("Silk");
  dc();
  !$b("Safari") ||
    dc() ||
    (ac() ? 0 : $b("Coast")) ||
    bc() ||
    (ac() ? 0 : $b("Edge")) ||
    (ac() ? Zb("Microsoft Edge") : $b("Edg/")) ||
    (ac() ? Zb("Opera") : $b("OPR")) ||
    cc() ||
    $b("Silk") ||
    $b("Android") ||
    wl();
  var jn = {},
    kn = null,
    ln = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!kn) {
        kn = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            h = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          5 > m;
          m++
        ) {
          var n = g.concat(h[m].split(""));
          jn[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === kn[q] && (kn[q] = p);
          }
        }
      }
      for (
        var r = jn[f],
          t = Array(Math.floor(b.length / 3)),
          u = r[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          B = r[x >> 2],
          D = r[((x & 3) << 4) | (y >> 4)],
          F = r[((y & 15) << 2) | (A >> 6)],
          G = r[A & 63];
        t[w++] = "" + B + D + F + G;
      }
      var H = 0,
        O = u;
      switch (b.length - v) {
        case 2:
          (H = b[v + 1]), (O = r[(H & 15) << 2] || u);
        case 1:
          var R = b[v];
          t[w] = "" + r[R >> 2] + r[((R & 3) << 4) | (H >> 4)] + O + u;
      }
      return t.join("");
    };
  Object.freeze({});
  var mn =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function nn(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : (a.google_tag_data = {});
  }
  function on() {
    var a = z.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function pn() {
    var a, b;
    return null !=
      (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function qn(a) {
    var b, c;
    return (
      "function" ===
      typeof (null == (b = a.navigator)
        ? void 0
        : null == (c = b.userAgentData)
        ? void 0
        : c.getHighEntropyValues)
    );
  }
  function rn() {
    var a = z;
    if (!qn(a)) return null;
    var b = nn(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(mn)
      .then(function (d) {
        null != b.uach || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  var sn,
    tn = function () {
      if (qn(z) && ((sn = Ua()), !pn())) {
        var a = rn();
        a &&
          (a.then(function () {
            M(95);
          }),
          a.catch(function () {
            M(96);
          }));
      }
    },
    vn = function (a) {
      var b = un.Sm,
        c = function (g, h) {
          try {
            a(g, h);
          } catch (m) {}
        },
        d = on();
      if (d) c(d);
      else {
        var e = pn();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = z.setTimeout(function () {
            c.Me || ((c.Me = !0), M(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.Me || ((c.Me = !0), M(104), z.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.Me || ((c.Me = !0), M(105), z.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    wn = function (a, b) {
      a &&
        ((b.h[N.g.Yd] = a.architecture),
        (b.h[N.g.Zd] = a.bitness),
        a.fullVersionList &&
          (b.h[N.g.ae] = a.fullVersionList
            .map(function (c) {
              return (
                encodeURIComponent(c.brand || "") +
                ";" +
                encodeURIComponent(c.version || "")
              );
            })
            .join("|")),
        (b.h[N.g.be] = a.mobile ? "1" : "0"),
        (b.h[N.g.ce] = a.model),
        (b.h[N.g.de] = a.platform),
        (b.h[N.g.ee] = a.platformVersion),
        (b.h[N.g.fe] = a.wow64 ? "1" : "0"));
    };
  var xn = /:[0-9]+$/,
    yn = /^\d+\.fls\.doubleclick\.net$/,
    zn = function (a, b, c, d) {
      function e(r) {
        return Tf(10)
          ? decodeURIComponent(r.replace(/\+/g, " "))
          : decodeURIComponent(r).replace(/\+/g, " ");
      }
      for (
        var f = [], g = fa(a.split("&")), h = g.next();
        !h.done;
        h = g.next()
      ) {
        var m = fa(h.value.split("=")),
          n = m.next().value,
          p = ia(m);
        if (e(n) === b) {
          var q = p.join("=");
          if (!c) return d ? q : e(q);
          f.push(d ? q : e(q));
        }
      }
      return c ? f : void 0;
    },
    Cn = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = An(a.protocol) || An(z.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : z.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || z.location.hostname)
            .replace(xn, "")
            .toLowerCase());
      return Bn(a, b, c, d, e);
    },
    Bn = function (a, b, c, d, e) {
      var f,
        g = An(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Dn(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(xn, "").toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || Bb("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = zn(f, e, !1));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    An = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Dn = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    En = function (a) {
      var b = C.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || Bb("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(xn, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    Fn = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = En(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        h = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === h[0] && (h = h.substring(1));
      g = c(g);
      h = c(h);
      "" !== g && (g = "?" + g);
      "" !== h && (h = "#" + h);
      var m = "" + f + g + h;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    },
    Gn = function (a) {
      var b = En(z.location.href),
        c = Cn(b, "host", !1);
      if (c && c.match(yn)) {
        var d = Cn(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  function Hn(a, b, c, d) {
    var e,
      f = Number(null != a.Yb ? a.Yb : void 0);
    0 !== f && (e = new Date((b || Ua()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Eb: d,
    };
  }
  var In;
  var Mn = function () {
      var a = Jn,
        b = Kn,
        c = Ln(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Pc(C, "mousedown", d);
        Pc(C, "keyup", d);
        Pc(C, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Nn = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      Ln().decorators.push(f);
    },
    On = function (a, b, c) {
      for (var d = Ln().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          h;
        if ((h = !c || g.forms))
          a: {
            var m = g.domains,
              n = a,
              p = !!g.sameHost;
            if (m && (p || n !== C.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    h = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[q]) ||
                  (p && 0 <= m[q].indexOf(n))
                ) {
                  h = !0;
                  break a;
                }
            h = !1;
          }
        if (h) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Xa(e, g.callback());
        }
      }
      return e;
    };
  function Ln() {
    var a = Gc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Pn = /(.*?)\*(.*?)\*(.*)/,
    Qn = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Rn = /^(?:www\.|m\.|amp\.)+/,
    Sn = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Tn(a, b) {
    var c = [
        Ec.userAgent,
        new Date().getTimezoneOffset(),
        Ec.userLanguage || Ec.language,
        Math.floor(Ua() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = In)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, h = 0; 8 > h; h++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    In = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ In[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Un() {
    return function (a) {
      var b = En(z.location.href),
        c = b.search.replace("?", ""),
        d = zn(c, "_gl", !1, !0) || "";
      a.query = Vn(d) || {};
      var e = Cn(b, "fragment"),
        f;
      var g = -1;
      if (Za(e, "_gl=")) g = 4;
      else {
        var h = e.indexOf("&_gl=");
        0 < h && (g = h + 3 + 2);
      }
      if (0 > g) f = void 0;
      else {
        var m = e.indexOf("&", g);
        f = 0 > m ? e.substring(g) : e.substring(g, m);
      }
      a.fragment = Vn(f || "") || {};
    };
  }
  var Wn = function (a) {
      var b = Un(),
        c = Ln();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Xa(d, e.query), a && Xa(d, e.fragment));
      return d;
    },
    Vn = function (a) {
      try {
        var b = Xn(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = zb(d[e + 1]);
            c[f] = g;
          }
          Bb("TAGGING", 6);
          return c;
        }
      } catch (h) {
        Bb("TAGGING", 8);
      }
    };
  function Xn(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Pn.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var h = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Tn(h, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return h;
        Bb("TAGGING", 7);
      }
    }
  }
  function Yn(a, b, c, d, e) {
    function f(q) {
      var r = q,
        t = new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)").exec(r),
        u = r;
      if (t) {
        var v = t[2],
          w = t[4];
        u = t[1];
        w && (u = u + v + w);
      }
      q = u;
      var x = q.charAt(q.length - 1);
      q && "&" !== x && (q += "&");
      return q + p;
    }
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var g = Sn.exec(c);
    if (!g) return "";
    var h = g[1],
      m = g[2] || "",
      n = g[3] || "",
      p = a + "=" + b;
    d
      ? (0 !== n.substring(1).length && e) || (n = "#" + f(n.substring(1)))
      : (m = "?" + f(m.substring(1)));
    return "" + h + m + n;
  }
  function Zn(a, b) {
    function c(n, p, q) {
      if (Object.keys(n).length) {
        var r,
          t = [],
          u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var v = n[u];
            void 0 !== v &&
              v === v &&
              null !== v &&
              "[object Object]" !== v.toString() &&
              (t.push(u), t.push(yb(String(v))));
          }
        var w = t.join("*");
        r = ["1", Tn(w), w].join("*");
        d
          ? (Tf(13) || Tf(11) || !p) && $n("_gl", r, a, p, q)
          : ao("_gl", r, a, p, q);
      }
    }
    var d = "FORM" === (a.tagName || "").toUpperCase(),
      e = On(b, 1, d),
      f = On(b, 2, d),
      g = On(b, 4, d),
      h = On(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    Tf(11) && c(g, !0, !0);
    for (var m in h) h.hasOwnProperty(m) && bo(m, h[m], a);
  }
  function bo(a, b, c) {
    if (c.tagName) {
      if ("a" === c.tagName.toLowerCase()) {
        ao(a, b, c);
        return;
      }
      if ("form" === c.tagName.toLowerCase()) {
        $n(a, b, c);
        return;
      }
    }
    "string" == typeof c && Yn(a, b, c);
  }
  function ao(a, b, c, d, e) {
    if (c.href) {
      var f = Yn(a, b, c.href, void 0 === d ? !1 : d, void 0 === e ? !1 : e);
      kc.test(f) && (c.href = f);
    }
  }
  function $n(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if ("get" !== f || d) {
        if ("get" === f || "post" === f) {
          var g = Yn(a, b, c.action, d, e);
          kc.test(g) && (c.action = g);
        }
      } else {
        for (var h = c.childNodes || [], m = !1, n = 0; n < h.length; n++) {
          var p = h[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = C.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function Jn(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || Zn(e, e.hostname);
      }
    } catch (g) {}
  }
  function Kn(a) {
    try {
      if (a.action) {
        var b = Cn(En(a.action), "host");
        Zn(a, b);
      }
    } catch (c) {}
  }
  var co = function (a, b, c, d) {
      Mn();
      Nn(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    eo = function (a, b) {
      Mn();
      Nn(a, [Bn(z.location, "host", !0)], b, !0, !0);
    },
    fo = function () {
      var a = C.location.hostname,
        b = Qn.exec(C.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var h = a.replace(Rn, ""),
        m = e.replace(Rn, ""),
        n;
      if (!(n = h === m)) {
        var p = "." + m;
        n = h.substring(h.length - p.length, h.length) === p;
      }
      return n;
    },
    go = function (a, b) {
      return !1 === a ? !1 : a || b || fo();
    };
  var ho = ["1"],
    io = {},
    jo = {},
    oo = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = ko(a.prefix);
      if (!io[c])
        if (lo(c, a.path, a.domain)) {
          var d = jo[ko(a.prefix)];
          mo(a, d ? d.id : void 0, d ? d.wh : void 0);
        } else {
          var e = Gn("auiddc");
          if (e) Bb("TAGGING", 17), (io[c] = e);
          else if (b) {
            var f = ko(a.prefix),
              g = Om();
            if (0 === no(f, g, a)) {
              var h = Gc("google_tag_data", {});
              h._gcl_au || (h._gcl_au = g);
            }
            lo(c, a.path, a.domain);
          }
        }
    };
  function mo(a, b, c) {
    var d = ko(a.prefix),
      e = io[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var g = Number(f[1]) || 0;
        if (g) {
          var h = e;
          b && (h = e + "." + b + "." + (c ? c : Math.floor(Ua() / 1e3)));
          no(d, h, a, 1e3 * g);
        }
      }
    }
  }
  function no(a, b, c, d) {
    var e = Sm(b, "1", c.domain, c.path),
      f = Hn(c, d);
    f.Eb = po();
    return Km(a, e, f);
  }
  function lo(a, b, c) {
    var d = Rm(a, b, c, ho, po());
    if (!d) return !1;
    qo(a, d);
    return !0;
  }
  function qo(a, b) {
    var c = b.split(".");
    5 === c.length
      ? ((io[a] = c.slice(0, 2).join(".")),
        (jo[a] = { id: c.slice(2, 4).join("."), wh: Number(c[4]) || 0 }))
      : 3 === c.length
      ? (jo[a] = { id: c.slice(0, 2).join("."), wh: Number(c[2]) || 0 })
      : (io[a] = b);
  }
  function ko(a) {
    return (a || "_gcl") + "_au";
  }
  function ro(a) {
    function b() {
      Jj(c) && a();
    }
    var c = po();
    Qj(function () {
      b();
      Jj(c) || Rj(b, c);
    }, c);
  }
  function so(a) {
    var b = Wn(!0),
      c = ko(a.prefix);
    ro(function () {
      var d = b[c];
      if (d) {
        qo(c, d);
        var e = 1e3 * Number(io[c].split(".")[1]);
        if (e) {
          Bb("TAGGING", 16);
          var f = Hn(a, e);
          f.Eb = po();
          var g = Sm(d, "1", a.domain, a.path);
          Km(c, g, f);
        }
      }
    });
  }
  function to(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        h = Rm(a, e.path, e.domain, ho, po());
      h && (g[a] = h);
      return g;
    };
    ro(function () {
      co(f, b, c, d);
    });
  }
  function po() {
    return Tf(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"];
  }
  var uo = function (a) {
    for (
      var b = [],
        c = C.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Oh: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, h) {
      return h.timestamp - g.timestamp;
    });
    return b;
  };
  function vo(a, b) {
    var c = uo(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].Oh] || (d[c[e].Oh] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), Z: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Oh].push(g);
      }
    }
    return d;
  }
  var wo = /^\w+$/,
    xo = /^[\w-]+$/,
    yo = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" };
  function zo() {
    return Tf(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"];
  }
  var Ao = function () {
      return wj().h() ? Jj(zo()) : !0;
    },
    Bo = function (a) {
      function b() {
        var c = Ao();
        c && a();
        return c;
      }
      Qj(function () {
        b() || Rj(b, zo());
      }, zo());
    },
    Do = function (a) {
      return Co(a).map(function (b) {
        return b.Z;
      });
    },
    Co = function (a) {
      var b = [];
      if (!ym(z) || !C.cookie) return b;
      var c = Bm(a, C.cookie, void 0, zo());
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { Z: d.Z }, e++) {
        var f = Eo(c[e]);
        if (null != f) {
          var g = f,
            h = g.version;
          d.Z = g.Z;
          var m = g.timestamp,
            n = g.labels,
            p = Ja(
              b,
              (function (q) {
                return function (r) {
                  return r.Z === q.Z;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, m)),
              (p.labels = Fo(p.labels, n || [])))
            : b.push({ version: h, Z: d.Z, timestamp: m, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return Go(b);
    };
  function Fo(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Ho(a) {
    return a && "string" == typeof a && a.match(wo) ? a : "_gcl";
  }
  var Jo = function () {
      var a = En(z.location.href),
        b = Cn(a, "query", !1, void 0, "gclid"),
        c = Cn(a, "query", !1, void 0, "gclsrc"),
        d = Cn(a, "query", !1, void 0, "wbraid"),
        e = Cn(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || zn(f, "gclid", !1);
        c = c || zn(f, "gclsrc", !1);
        d = d || zn(f, "wbraid", !1);
      }
      return Io(b, c, e, d);
    },
    Io = function (a, b, c, d) {
      var e = {},
        f = function (g, h) {
          e[h] || (e[h] = []);
          e[h].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && xo.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(xo))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    Lo = function (a) {
      var b = Jo();
      Bo(function () {
        Ko(b, !1, a);
      });
    };
  function Ko(a, b, c, d, e) {
    function f(w, x) {
      var y = Mo(w, g);
      y && (Km(y, x, h), (m = !0));
    }
    c = c || {};
    e = e || [];
    var g = Ho(c.prefix);
    d = d || Ua();
    var h = Hn(c, d, !0);
    h.Eb = zo();
    var m = !1,
      n = Math.round(d / 1e3),
      p = function (w) {
        var x = ["GCL", n, w];
        0 < e.length && x.push(e.join("."));
        return x.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (!m && a.gb) {
      var q = a.gb[0],
        r = Mo("gb", g),
        t = !1;
      if (!b)
        for (var u = Co(r), v = 0; v < u.length; v++)
          u[v].Z === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var Oo = function (a, b) {
      var c = Wn(!0);
      Bo(function () {
        for (var d = Ho(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== yo[f]) {
            var g = Mo(f, d),
              h = c[g];
            if (h) {
              var m = Math.min(No(h), Ua()),
                n;
              b: {
                var p = m;
                if (ym(z))
                  for (
                    var q = Bm(g, C.cookie, void 0, zo()), r = 0;
                    r < q.length;
                    ++r
                  )
                    if (No(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var t = Hn(b, m, !0);
                t.Eb = zo();
                Km(g, h, t);
              }
            }
          }
        }
        Ko(Io(c.gclid, c.gclsrc), !1, b);
      });
    },
    Mo = function (a, b) {
      var c = yo[a];
      if (void 0 !== c) return b + c;
    },
    No = function (a) {
      return 0 !== Po(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function Eo(a) {
    var b = Po(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          Z: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function Po(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !xo.test(a[2])
      ? []
      : a;
  }
  var Qo = function (a, b, c, d, e) {
      if (Ha(b) && ym(z)) {
        var f = Ho(e),
          g = function () {
            for (var h = {}, m = 0; m < a.length; ++m) {
              var n = Mo(a[m], f);
              if (n) {
                var p = Bm(n, C.cookie, void 0, zo());
                p.length && (h[n] = p.sort()[p.length - 1]);
              }
            }
            return h;
          };
        Bo(function () {
          co(g, b, c, d);
        });
      }
    },
    Go = function (a) {
      return a.filter(function (b) {
        return xo.test(b.Z);
      });
    },
    Ro = function (a, b) {
      if (ym(z)) {
        for (var c = Ho(b.prefix), d = {}, e = 0; e < a.length; e++)
          yo[a[e]] && (d[a[e]] = yo[a[e]]);
        Bo(function () {
          l(d, function (f, g) {
            var h = Bm(c + g, C.cookie, void 0, zo());
            h.sort(function (t, u) {
              return No(u) - No(t);
            });
            if (h.length) {
              var m = h[0],
                n = No(m),
                p = 0 !== Po(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== Po(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [r];
              Ko(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function So(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var To = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (Mj()) {
        var c = Jo();
        if (So(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          eo(function () {
            return d;
          }, 3);
          eo(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    Uo = function (a) {
      if (!Tf(11)) return null;
      var b = Wn(!0).gad_source;
      if (null != b) return b;
      if (Tf(12)) {
        var c = En(z.location.href);
        b = Cn(c, "query", !1, void 0, "gad_source");
        if (null != b) return b;
        var d = Jo();
        if (So(d, a)) return "0";
      }
      return null;
    },
    Vo = function (a) {
      var b = Uo(a);
      null != b &&
        eo(function () {
          var c = {};
          return (c.gad_source = b), c;
        }, 4);
    },
    Wo = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!Ao()) return e;
      var f = Co(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++)
        -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var h = f[0],
          m = f[0].timestamp,
          n = [h.version, Math.round(m / 1e3), h.Z]
            .concat(h.labels || [], [b])
            .join("."),
          p = Hn(c, m, !0);
        p.Eb = zo();
        Km(a, n, p);
      }
      return e;
    };
  function Xo(a, b) {
    var c = Ho(b),
      d = Mo(a, c);
    if (!d) return 0;
    for (var e = Co(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Yo(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Zo = function (a) {
    var b = Math.max(Xo("aw", a), Yo(Ao() ? vo() : {}));
    return Math.max(Xo("gb", a), Yo(Ao() ? vo("_gac_gb", !0) : {})) > b;
  };
  var $o = function (a, b) {
      var c = !(Q(68) ? T(N.g.P) : 1) || (a && !T(N.g.J));
      return b && c ? "0" : b;
    },
    cp = function (a) {
      function b(w) {
        var x = Q(68) ? T(N.g.P) : !0,
          y = h;
        Q(68) && !T(N.g.P) && (y = !1);
        var A;
        pi.reported_gclid || (pi.reported_gclid = {});
        A = pi.reported_gclid;
        var B = (function () {
          var S = g.prefix || "_gcl";
          return Q(68)
            ? (y ? S : "") + "." + (T(N.g.J) ? 1 : 0) + "." + (T(N.g.P) ? 1 : 0)
            : h && T(N.g.J)
            ? n + "." + S + (w ? "gcu" : "gcs")
            : n + (w ? "gcu" : "gcs");
        })();
        if (!A[B]) {
          A[B] = !0;
          var D = [],
            F = {},
            G = function (S, ja) {
              ja && (D.push(S + "=" + encodeURIComponent(ja)), (F[S] = !0));
            },
            H = "https://www.google.com";
          if (Mj() || Q(38))
            G("gcs", nm()),
              w && G("gcu", "1"),
              (Q(40) || Nj()) && G("gcd", rm(f));
          if (Mj()) {
            G("rnd", bn());
            if ((!n || (p && "aw.ds" !== p)) && T(N.g.J) && x) {
              var O = Do("_gcl_aw");
              G("gclaw", O.join("."));
            }
            G("url", String(z.location).split(/[?#]/)[0]);
            G("dclid", $o(d, q));
            T(N.g.J) || (H = "https://pagead2.googlesyndication.com");
          }
          Q(42) && (vm() && G("dma_cps", sm()), G("dma", um()));
          Q(70) && Pl(Yl()) && G("tcfd", wm());
          G("gdpr_consent", em() || "");
          G("gdpr", fm() || "");
          "1" === Wn(!1)._up && G("gtm_up", "1");
          G("gclid", $o(d, n));
          G("gclsrc", p);
          if (
            !(F.gclid || F.dclid || F.gclaw) &&
            (G("gbraid", $o(d, r)), !F.gbraid && Mj() && T(N.g.J))
          ) {
            var R = Do("_gcl_gb");
            0 < R.length && G("gclgb", R.join("."));
          }
          G("gtm", en(f.eventMetadata.source_canonical_id, !e));
          h &&
            T(N.g.J) &&
            (oo(g || {}), y && G("auid", io[ko(g.prefix)] || ""));
          bp || (a.mj && G("did", a.mj));
          a.lh && G("gdid", a.lh);
          a.hh && G("edid", a.hh);
          var U = Q(21) ? on() : null;
          if (U) {
            var ha = function (S, ja) {
              D.push(S + "=" + encodeURIComponent(ja));
              F[S] = !0;
            };
            ha("uaa", U.architecture);
            ha("uab", U.bitness);
            U.fullVersionList &&
              ha(
                "uafvl",
                U.fullVersionList
                  .map(function (S) {
                    return (
                      encodeURIComponent(S.brand || "") +
                      ";" +
                      encodeURIComponent(S.version || "")
                    );
                  })
                  .join("|")
              );
            ha("uam", U.model);
            ha("uap", U.platform);
            ha("uapv", U.platformVersion);
            ha("uaw", U.wow64 ? "1" : "0");
          }
          var Z = H + "/pagead/landing?" + D.join("&");
          Vc(Z);
        }
      }
      var c = !!a.ah,
        d = !!a.Sf,
        e = a.Lj,
        f = a.s,
        g = void 0 === a.fd ? {} : a.fd,
        h = void 0 === a.Mf ? !0 : a.Mf,
        m = Jo(),
        n = m.gclid || "",
        p = m.gclsrc,
        q = m.dclid || "",
        r = m.gbraid || "",
        t = !c && ((!n || (p && "aw.ds" !== p) ? !1 : !0) || r),
        u = Mj();
      if (t || u)
        if (u) {
          var v = Q(68) ? [N.g.J, N.g.P, N.g.nb] : [N.g.J];
          ck(function () {
            b();
            T(v) ||
              bk(function (w) {
                return b(!0, w.consentEventId, w.consentPriorityId);
              }, v);
          }, v);
        } else b();
    },
    ap = function (a) {
      var b = String(z.location).split(/[?#]/)[0],
        c = oi.Xj || z._CONSENT_MODE_SALT;
      return a ? (c ? String(fj(b + a + c)) : "0") : "";
    },
    bp = !1;
  var dp = /[A-Z]+/,
    ep = /\s/,
    fp = function (a, b) {
      if (k(a)) {
        a = Sa(a);
        var c = a.indexOf("-");
        if (!(0 > c)) {
          var d = a.substring(0, c);
          if (dp.test(d)) {
            var e = a.substring(c + 1),
              f;
            if (b) {
              var g = function (n) {
                var p = n.indexOf("/");
                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)];
              };
              f = g(e);
              if ("DC" === d && 2 === f.length) {
                var h = g(f[1]);
                2 === h.length && ((f[1] = h[0]), f.push(h[1]));
              }
            } else {
              f = e.split("/");
              for (var m = 0; m < f.length; m++)
                if (!f[m] || (ep.test(f[m]) && ("AW" !== d || 1 !== m))) return;
            }
            return { id: a, prefix: d, da: d + "-" + f[0], O: f };
          }
        }
      }
    },
    hp = function (a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = fp(a[d], b);
        e && (c[e.id] = e);
      }
      gp(c);
      var f = [];
      l(c, function (g, h) {
        f.push(h);
      });
      return f;
    };
  function gp(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.O[1] && b.push(d.da);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var ip = function (a, b, c, d) {
    var e = Mc(),
      f;
    if (1 === e)
      a: {
        var g = Di;
        g = g.toLowerCase();
        for (
          var h = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = C.getElementsByTagName("script"),
            q = 0;
          q < p.length && 100 > q;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (0 === r.indexOf(m)) {
              f = 3;
              break a;
            }
            1 === n && 0 === r.indexOf(h) && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (2 === f || d || "http:" != z.location.protocol ? a : b) + c;
  };
  var kp = function (a, b, c) {
      if (z[a.functionName]) return b.zh && E(b.zh), z[a.functionName];
      var d = jp();
      z[a.functionName] = d;
      if (a.Bf)
        for (var e = 0; e < a.Bf.length; e++) z[a.Bf[e]] = z[a.Bf[e]] || jp();
      a.Lf && void 0 === z[a.Lf] && (z[a.Lf] = c);
      Lc(ip("https://", "http://", a.Kh), b.zh, b.lm);
      return d;
    },
    jp = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    lp = {
      functionName: "_googWcmImpl",
      Lf: "_googWcmAk",
      Kh: "www.gstatic.com/wcm/loader.js",
    },
    mp = {
      functionName: "_gaPhoneImpl",
      Lf: "ga_wpid",
      Kh: "www.gstatic.com/gaphone/loader.js",
    },
    np = { Uj: "", Pk: "5" },
    op = {
      functionName: "_googCallTrackingImpl",
      Bf: [mp.functionName, lp.functionName],
      Kh:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (np.Uj || np.Pk) +
        ".js",
    },
    pp = {},
    qp = function (a, b, c, d) {
      M(22);
      if (c) {
        d = d || {};
        var e = kp(lp, d, a),
          f = { ak: a, cl: b };
        void 0 === d.Db && (f.autoreplace = c);
        e(2, d.Db, f, c, 0, Ta(), d.options);
      }
    },
    rp = function (a, b, c, d) {
      M(21);
      if (b && c) {
        d = d || {};
        for (
          var e = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: Ta(),
            },
            f = 0;
          f < a.length;
          f++
        ) {
          var g = a[f];
          pp[g.id] ||
            (g && "AW" === g.prefix && !e.adData && 2 <= g.O.length
              ? ((e.adData = { ak: g.O[0], cl: g.O[1] }), (pp[g.id] = !0))
              : g &&
                "UA" === g.prefix &&
                !e.gaData &&
                ((e.gaData = { gaWpid: g.da }), (pp[g.id] = !0)));
        }
        (e.gaData || e.adData) && kp(op, d)(d.Db, e, d.options);
      }
    },
    sp = function () {
      var a = !1;
      return a;
    },
    tp = function (a, b) {
      if (a)
        if (cn()) {
        } else {
          if (k(a)) {
            var c = fp(a);
            if (!c) return;
            a = c;
          }
          var d = void 0,
            e = !1,
            f = V(b, N.g.Gi);
          if (f && Ha(f)) {
            d = [];
            for (var g = 0; g < f.length; g++) {
              var h = fp(f[g]);
              h &&
                (d.push(h),
                (a.id === h.id || (a.id === a.da && a.da === h.da)) &&
                  (e = !0));
            }
          }
          if (!d || e) {
            var m = V(b, N.g.Gg),
              n;
            if (m) {
              Ha(m) ? (n = m) : (n = [m]);
              var p = V(b, N.g.Eg),
                q = V(b, N.g.Fg),
                r = V(b, N.g.Hg),
                t = V(b, N.g.Fi),
                u = p || q,
                v = 1;
              "UA" !== a.prefix || d || (v = 5);
              for (var w = 0; w < n.length; w++)
                if (w < v)
                  if (d) rp(d, n[w], t, { Db: u, options: r });
                  else if ("AW" === a.prefix && a.O[1])
                    sp()
                      ? rp([a], n[w], t || "US", { Db: u, options: r })
                      : qp(a.O[0], a.O[1], n[w], { Db: u, options: r });
                  else if ("UA" === a.prefix)
                    if (sp()) rp([a], n[w], t || "US", { Db: u });
                    else {
                      var x = a.da,
                        y = n[w],
                        A = { Db: u };
                      M(23);
                      if (y) {
                        A = A || {};
                        var B = kp(mp, A, x),
                          D = {};
                        void 0 !== A.Db ? (D.receiver = A.Db) : (D.replace = y);
                        D.ga_wpid = x;
                        D.destination = y;
                        B(2, Ta(), D);
                      }
                    }
            }
          }
        }
    };
  var up,
    vp = !1;
  function wp() {
    vp = !0;
    up = up || {};
  }
  var xp = function (a) {
    vp || wp();
    return up[a];
  };
  var yp = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.s = c;
    this.h = {};
    this.metadata = ob(c.eventMetadata || {});
    this.isAborted = !1;
  };
  yp.prototype.copyToHitData = function (a, b, c) {
    var d = V(this.s, a);
    void 0 === d && (d = b);
    if (void 0 !== d && void 0 !== c && k(d) && Q(78))
      try {
        d = c(d);
      } catch (e) {}
    void 0 !== d && (this.h[a] = d);
  };
  var zp = function (a) {
      return a.metadata.source_canonical_id;
    },
    Ap = function (a, b, c) {
      var d = xp(a.target.da);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function Bp(a) {
    return {
      getDestinationId: function () {
        return a.target.da;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.h[b];
      },
      setHitData: function (b, c) {
        a.h[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.h[b] && (a.h[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return V(a.s, b);
      },
      qj: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.h);
      },
    };
  }
  var Dp = function (a) {
      var b = Cp[a.target.da];
      if (!a.isAborted && b)
        for (var c = Bp(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.isAborted = !0;
          }
          if (a.isAborted) break;
        }
    },
    Ep = function (a, b) {
      var c = Cp[a];
      c || (c = Cp[a] = []);
      c.push(b);
    },
    Cp = {};
  var Hp = function (a) {
      a = a || {};
      var b;
      if (T(Fp)) {
        (b = Gp(a)) || (b = Om());
        var c = a,
          d = ko(c.prefix);
        mo(c, b);
        delete io[d];
        delete jo[d];
        lo(d, c.path, c.domain);
        return Gp(a);
      }
    },
    Gp = function (a) {
      if (T(Fp)) {
        a = a || {};
        oo(a, !1);
        var b = jo[ko(Ho(a.prefix))];
        if (b && !(18e5 < Ua() - 1e3 * b.wh)) {
          var c = b.id,
            d = c.split(".");
          if (2 === d.length && !(864e5 < Ua() - 1e3 * (Number(d[1]) || 0)))
            return c;
        }
      }
    },
    Fp = N.g.J;
  var Ip = function (a, b, c) {
      var d = (pi.joined_auid = pi.joined_auid || {}),
        e = (c ? a || "_gcl" : "") + "." + b;
      if (d[e]) return !0;
      d[e] = !0;
      return !1;
    },
    Jp = function () {
      var a = En(z.location.href),
        b = Cn(a, "query", !1, void 0, "gad_source");
      if (void 0 === b) {
        var c = a.hash.replace("#", "");
        b = zn(c, "gad_source", !1);
      }
      return b;
    },
    Kp = function () {
      var a = En(z.location.href).search.replace("?", "");
      return "1" === zn(a, "gad", !1, !0);
    },
    Lp = function (a) {
      var b = [];
      l(a, function (c, d) {
        d = Go(d);
        for (var e = [], f = 0; f < d.length; f++) e.push(d[f].Z);
        e.length && b.push(c + ":" + e.join(","));
      });
      return b.join(";");
    },
    Np = function (a, b, c) {
      if ("aw" === a || "dc" === a || "gb" === a) {
        var d = Gn("gcl" + a);
        if (d) return d.split(".");
      }
      var e = Ho(b);
      if ("_gcl" == e) {
        c = void 0 === c ? !0 : c;
        var f = !T(Mp()) && c,
          g;
        g = Jo()[a] || [];
        if (0 < g.length) return f ? ["0"] : g;
      }
      var h = Mo(a, e);
      return h ? Do(h) : [];
    },
    Op = function (a) {
      var b = Mp();
      ck(function () {
        a();
        T(b) || Rj(a, b);
      }, b);
    },
    Mp = function () {
      return Q(68) ? [N.g.J, N.g.P] : [N.g.J];
    },
    Pp = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Qp = /^www.googleadservices.com$/,
    Rp = function (a, b) {
      return Np("aw", a, b);
    },
    Sp = function (a, b) {
      return Np("dc", a, b);
    },
    Tp = function (a) {
      var b = Gn("gac");
      return b
        ? !T(Mp()) && a
          ? "0"
          : decodeURIComponent(b)
        : Lp(Ao() ? vo() : {});
    },
    Up = function (a) {
      var b = Gn("gacgb");
      return b
        ? !T(Mp()) && a
          ? "0"
          : decodeURIComponent(b)
        : Lp(Ao() ? vo("_gac_gb", !0) : {});
    },
    Vp = function (a, b) {
      var c = Jo(),
        d = [],
        e = c.gclid,
        f = c.dclid,
        g = c.gclsrc || "aw",
        h = Q(35) && Kp(),
        m = void 0;
      Q(85) && (m = Jp());
      !e ||
        ("aw.ds" !== g && "aw" !== g && "ds" !== g) ||
        d.push({ Z: e, De: g });
      f && d.push({ Z: f, De: "ds" });
      0 === d.length && c.gbraid && d.push({ Z: c.gbraid, De: "gb" });
      Q(28) &&
        0 === d.length &&
        "aw.ds" === g &&
        d.push({ Z: "", De: "aw.ds" });
      Op(function () {
        if ((Q(68) && Q(74)) || T(N.g.J)) {
          var n = T(Mp());
          oo(a);
          var p;
          if (n && ((p = io[ko(a.prefix)]), void 0 === p && !Q(68))) return;
          var q = [];
          p && q.push("auid=" + p);
          if (Q(9)) {
            var r = C.referrer ? Cn(En(C.referrer), "host") : "";
            0 === d.length &&
              (Q(33) ? Pp.test(r) || Qp.test(r) : Pp.test(r)) &&
              d.push({ Z: "", De: "" });
            if (0 === d.length && !h && void 0 === m) return;
            r && q.push("ref=" + encodeURIComponent(r));
            var t = 1 === Hl() ? z.top.location.href : z.location.href;
            t = t.replace(/[\?#].*$/, "");
            q.push("url=" + encodeURIComponent(t));
            q.push("tft=" + Ua());
            var u = Yc();
            void 0 !== u && q.push("tfd=" + Math.round(u));
            if (Q(27)) {
              var v = Hl();
              q.push("frm=" + v);
            }
            h && q.push("gad=1");
            void 0 !== m && q.push("gad_source=" + encodeURIComponent(m));
          }
          Q(108) && q.push("gtm=" + en(b), "gcs=" + nm(), "gcd=" + rm());
          var w = n
            ? "https://adservice.google.com/pagead/regclk"
            : "https://adservice.googlesyndication.com/pagead/regclk";
          if (0 < d.length)
            for (var x = 0; x < d.length; x++) {
              var y = d[x],
                A = y.Z,
                B = y.De;
              if (!Ip(a.prefix, B + "." + A, void 0 !== p)) {
                var D = w + "?" + q.join("&");
                "" !== A
                  ? (D =
                      "gb" === B
                        ? D + "&wbraid=" + A
                        : D + "&gclid=" + A + "&gclsrc=" + B)
                  : "aw.ds" === B && (D += "&gclsrc=aw.ds");
                Vc(D);
              }
            }
          else if ((h || void 0 !== m) && !Ip(a.prefix, "gad", void 0 !== p)) {
            var F = w + "?" + q.join("&");
            Vc(F);
          }
        }
      });
    },
    Wp = function (a) {
      return Gn("gclaw") || Gn("gac") || 0 < (Jo().aw || []).length
        ? !1
        : 0 < (Jo().gb || []).length
        ? !0
        : Zo(a);
    };
  var Yp = function (a, b) {
      var c = a.vj,
        d = a.Nj,
        e = a.Wf;
      a.kj &&
        (go(c[N.g.Vc], !!c[N.g.W]) && (Oo(Xp, b), so(b)),
        Lo(b),
        Ro(Xp, b),
        Vp(b, e));
      c[N.g.W] &&
        (Qo(Xp, c[N.g.W], c[N.g.uc], !!c[N.g.Nb], b.prefix),
        to(ko(b.prefix), c[N.g.W], c[N.g.uc], !!c[N.g.Nb], b),
        to("FPAU", c[N.g.W], c[N.g.uc], !!c[N.g.Nb], b));
      d && To(Xp);
      Vo(Xp);
    },
    Zp = function (a, b, c, d) {
      var e = a.Qj,
        f = a.callback,
        g = a.wj;
      if ("function" === typeof f)
        if (e === N.g.pb && void 0 === g) {
          var h = d(b.prefix, c);
          0 === h.length ? f(void 0) : 1 === h.length ? f(h[0]) : f(h);
        } else e === N.g.Hb ? (M(65), oo(b, !1), f(io[ko(b.prefix)])) : f(g);
    },
    Xp = ["aw", "dc", "gb"];
  function $p(a) {
    var b = V(a.s, N.g.wb),
      c = V(a.s, N.g.Mb);
    b && !c
      ? (a.eventName !== N.g.qa && a.eventName !== N.g.zd && M(131),
        (a.isAborted = !0))
      : !b && c && (M(132), (a.isAborted = !0));
  }
  var aq = function () {
    var a = (Ec && Ec.userAgent) || "";
    if (
      0 > a.indexOf("Safari") ||
      /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)
    )
      return !1;
    var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
    if ("" === b) return !1;
    for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
      if (void 0 === c[e]) return !0;
      if (d[e] != c[e]) return Number(d[e]) > Number(c[e]);
    }
    return d.length >= c.length;
  };
  var bq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    cq = /^www.googleadservices.com$/,
    eq = function (a) {
      a || (a = dq());
      return a.Um
        ? !1
        : a.Hl || a.Il || a.Jl || a.mh || a.If || a.sl || a.Al
        ? !0
        : !1;
    },
    dq = function () {
      var a = {},
        b = Wn(!0);
      a.Um = !!b._up;
      var c = Jo();
      a.Hl = void 0 !== c.aw;
      a.Il = void 0 !== c.dc;
      a.Jl = void 0 !== c.gbraid;
      var d = En(z.location.href),
        e = Cn(d, "query", !1, void 0, "gad");
      a.mh = void 0 !== e;
      if (!a.mh) {
        var f = d.hash.replace("#", ""),
          g = zn(f, "gad", !1);
        a.mh = void 0 !== g;
      }
      a.If = void 0;
      if (Q(88)) {
        var h = Cn(d, "query", !1, void 0, "gad_source");
        a.If = h;
        if (void 0 === a.If) {
          var m = d.hash.replace("#", ""),
            n = zn(m, "gad_source", !1);
          a.If = n;
        }
      }
      var p = C.referrer ? Cn(En(C.referrer), "host") : "";
      a.Al = bq.test(p);
      a.sl = cq.test(p);
      return a;
    };
  var fq = function () {
      var a = z.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    gq = function (a) {
      if (C.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle)
        return !0;
      var c = z.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var h = g.indexOf("opacity(");
          0 <= h &&
            ((g = g.substring(h + 8, g.indexOf(")", h))),
            "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
            (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = z.getComputedStyle(d, null));
      }
      return !1;
    };
  var qq = function (a, b, c) {
      var d = a.element,
        e = { X: a.X, type: a.ka, tagName: d.tagName };
      b && (e.querySelector = pq(d));
      c && (e.isVisible = !gq(d));
      return e;
    },
    rq = function (a, b, c) {
      return qq({ element: a.element, X: a.X, ka: "1" }, b, c);
    },
    sq = function (a) {
      var b = !!a.ld + "." + !!a.md;
      a && a.ze && a.ze.length && (b += "." + a.ze.join("."));
      a &&
        a.hb &&
        (b += "." + a.hb.email + "." + a.hb.phone + "." + a.hb.address);
      return b;
    },
    vq = function (a) {
      if (0 != a.length) {
        var b;
        b = tq(a, function (c) {
          return !uq.test(c.X);
        });
        b = tq(b, function (c) {
          return "INPUT" === c.element.tagName.toUpperCase();
        });
        b = tq(b, function (c) {
          return !gq(c.element);
        });
        return b[0];
      }
    },
    wq = function (a, b) {
      if (!b || 0 === b.length) return a;
      for (var c = [], d = 0; d < a.length; d++) {
        for (var e = !0, f = 0; f < b.length; f++) {
          var g = b[f];
          if (g && zh(a[d].element, g)) {
            e = !1;
            break;
          }
        }
        e && c.push(a[d]);
      }
      return c;
    },
    tq = function (a, b) {
      if (1 >= a.length) return a;
      var c = a.filter(b);
      return 0 == c.length ? a : c;
    },
    pq = function (a) {
      var b;
      if (a === C.body) b = "body";
      else {
        var c;
        if (a.id) c = "#" + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = pq(a.parentElement) + ">:nth-child(" + e + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    yq = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.textContent;
        "INPUT" === d.tagName.toUpperCase() && d.value && (e = d.value);
        if (e) {
          var f = e.match(xq);
          if (f) {
            var g = f[0],
              h;
            if (z.location) {
              var m = Bn(z.location, "host", !0);
              h = 0 <= g.toLowerCase().indexOf(m);
            } else h = !1;
            h || b.push({ element: d, X: g });
          }
        }
      }
      return b;
    },
    Cq = function () {
      var a = [],
        b = C.body;
      if (!b) return { elements: a, status: "4" };
      for (
        var c = b.querySelectorAll("*"), d = 0;
        d < c.length && 1e4 > d;
        d++
      ) {
        var e = c[d];
        if (
          !(0 <= zq.indexOf(e.tagName.toUpperCase())) &&
          e.children instanceof HTMLCollection
        ) {
          for (var f = !1, g = 0; g < e.childElementCount && 1e4 > g; g++)
            if (!(0 <= Aq.indexOf(e.children[g].tagName.toUpperCase()))) {
              f = !0;
              break;
            }
          (!f || (Q(45) && -1 !== Bq.indexOf(e.tagName))) && a.push(e);
        }
      }
      return { elements: a, status: 1e4 < c.length ? "2" : "1" };
    },
    Dq = !0,
    Eq = !1;
  var xq = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    Fq = /@(gmail|googlemail)\./i,
    uq = /support|noreply/i,
    zq = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
    Aq = ["BR"],
    Gq = { Zm: "1", qn: "2", gn: "3", kn: "4", Wm: "5", rn: "6", mn: "7" },
    Hq = {},
    Bq = ["INPUT", "SELECT"];
  var $q = function (a) {
      a = a || { ld: !0, md: !0 };
      a.hb = a.hb || { email: !0, phone: !1, address: !1 };
      var b = sq(a),
        c = Hq[b];
      if (c && 200 > Ua() - c.timestamp) return c.result;
      var d = Cq(),
        e = d.status,
        f = [],
        g,
        h,
        m = [];
      if (!Q(45)) {
        if (a.hb && a.hb.email) {
          var n = yq(d.elements);
          f = wq(n, a && a.ze);
          g = vq(f);
          10 < n.length && (e = "3");
        }
        !a.Lh && g && (f = [g]);
        for (var p = 0; p < f.length; p++) m.push(rq(f[p], a.ld, a.md));
        m = m.slice(0, 10);
      } else if (a.hb) {
      }
      g && (h = rq(g, a.ld, a.md));
      var D = { elements: m, Dh: h, status: e };
      Hq[b] = { timestamp: Ua(), result: D };
      return D;
    },
    ar = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.X.length + ":" + Fq.test(a.X)
      );
    };
  var br = function (a, b) {
    var c = z;
    b = void 0 === b ? {} : b;
    this.wc = a;
    this.la = b;
    this.C = c;
    this.id = String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random()));
    this.Sb = this.D = !1;
    this.H = this.M = this.hd = this.Ya = 0;
    this.U = !1;
    this.h = {};
  };
  br.prototype.init = function () {
    cr(this);
  };
  var cr = function (a) {
      a.hd++;
      dr(
        a,
        {
          type: 0,
          clientId: a.id,
          requestId: String(a.Ya++),
          fm: a.D ? 5e3 : 500,
        },
        function (b) {
          if (0 === b.type)
            if (b.Xb)
              if (
                ((a.D = !1), b.Fb && (a.Fb = b.Fb), a.H++, b.Dn || 10 < a.H)
              ) {
                a.Sb = !0;
                for (var c in a.h) {
                  var d = a.h[c];
                  er(a, d);
                  var e = d.request;
                  e.Xb = 8;
                  d.Ih(e);
                }
                var f, g;
                null == (g = (f = a.la).jm) || g.call(f);
              } else fr(a);
            else {
              if (a.hd > b.Fb.hd + 10) {
                a.hd = b.Fb.hd;
                var h, m;
                null == (m = (h = a.la).onFailure) || m.call(h, { Xb: 11 });
              }
              a.Fb = b.Fb;
              if (!a.D)
                if (a.U) {
                  var n, p;
                  null == (p = (n = a.la).En) || p.call(n);
                } else {
                  a.U = !0;
                  var q, r;
                  null == (r = (q = a.la).km) || r.call(q);
                }
              a.D = !0;
              a.H = 0;
              for (var t in a.h) {
                var u = a.h[t];
                u.Cj && gr(a, u);
              }
              fr(a);
            }
        }
      );
    },
    fr = function (a) {
      a.C.setTimeout(function () {
        cr(a);
      }, Math.max(0, (a.D ? 5e3 : 500) - (hr(a.C) - a.M)));
    },
    jr = function (a, b) {
      var c = ir;
      dr(
        c,
        { type: 1, clientId: c.id, requestId: String(c.Ya++) },
        function (d) {
          if (1 === d.type)
            if (d.result) a(d.result);
            else {
              var e;
              b({ Xb: null != (e = d.Xb) ? e : 10 });
            }
        }
      );
    },
    dr = function (a, b, c) {
      if (a.Sb) (b.Xb = 8), c(b);
      else {
        var d = !a.D && 0 != b.type,
          e = b.requestId,
          f,
          g = a.C.setTimeout(
            function () {
              var m = a.h[e];
              if (m) {
                er(a, m);
                var n = m.request;
                n.Xb = 5;
                m.Ih(n);
              }
            },
            null != (f = b.fm) ? f : 5e3
          ),
          h = { request: b, Ih: c, Cj: d, gm: g };
        a.h[e] = h;
        d || gr(a, h);
      }
    },
    gr = function (a, b) {
      a.M = hr(a.C);
      b.Cj = !1;
      a.wc(b.request);
    },
    er = function (a, b) {
      delete a.h[b.request.requestId];
      a.C.clearTimeout(b.gm);
    };
  function hr(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var kr = function (a, b) {
    return new br(a, b);
  };
  var lr = "https://" + oi.yd,
    mr,
    nr,
    ir;
  function ur() {}
  function sr(a, b) {
    a = void 0 === a ? -1 : a;
  }
  function vr(a, b) {
    var c = ir.Fb;
  }
  function wr() {
    return "attribution-reporting";
  }
  function xr(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var yr = !1;
  function zr() {
    if (xr("join-ad-interest-group") && Ea(Ec.joinAdInterestGroup)) return !0;
    yr ||
      (Fl(
        "AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
      ),
      (yr = !0));
    return xr("join-ad-interest-group") && Ea(Ec.joinAdInterestGroup);
  }
  function Ar(a, b) {
    var c = void 0;
    try {
      c = C.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > Ua() - d) {
        Bb("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          C.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          Bb("TAGGING", 10);
          return;
        }
      } catch (e) {}
    Nc(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: Ua() },
      c
    );
  }
  function Br() {
    return "https://td.doubleclick.net";
  }
  var Cr = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    Dr = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    Er = /^\d+\.fls\.doubleclick\.net$/,
    Fr = /;gac=([^;?]+)/,
    Gr = /;gacgb=([^;?]+)/,
    Hr = /;gclaw=([^;?]+)/,
    Ir = /;gclgb=([^;?]+)/;
  function Jr(a, b) {
    if (Er.test(C.location.host)) {
      var c = C.location.href.match(b);
      return c && 2 == c.length && c[1].match(Cr)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].Z);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var Kr = function (a, b, c) {
    var d = Ao() ? vo("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var h = Wo("_gac_gb_" + g, a, b, c);
      f =
        f ||
        (0 !== h.length &&
          h.some(function (m) {
            return 1 === m;
          }));
      e.push(g + ":" + h.join(","));
    }
    return { rl: f ? e.join(";") : "", ql: Jr(d, Gr) };
  };
  function Lr(a, b, c) {
    if (Er.test(C.location.host)) {
      var d = C.location.href.match(c);
      if (d && 2 == d.length && d[1].match(Dr)) return [{ Z: d[1] }];
    } else return Co((a || "_gcl") + b);
    return [];
  }
  var Mr = function (a) {
      return Lr(a, "_aw", Hr)
        .map(function (b) {
          return b.Z;
        })
        .join(".");
    },
    Nr = function (a) {
      return Lr(a, "_gb", Ir)
        .map(function (b) {
          return b.Z;
        })
        .join(".");
    },
    Or = function (a, b) {
      var c = Wo(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === c.length ||
        c.every(function (d) {
          return 0 === d;
        })
        ? ""
        : c.join(".");
    };
  var Pr = function () {
    if (Ea(z.__uspapi)) {
      var a = "";
      try {
        z.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var Qr = function (a) {
      if (null != a) {
        var b = String(a).substring(0, 512),
          c = b.indexOf("#");
        return -1 == c ? b : b.substring(0, c);
      }
      return "";
    },
    Rr = function () {
      var a = C.title;
      if (void 0 == a || "" == a) return "";
      var b = function (d) {
        try {
          return decodeURIComponent(d), !0;
        } catch (e) {
          return !1;
        }
      };
      a = encodeURIComponent(a);
      for (var c = 256; !b(a.substr(0, c)); ) c--;
      return decodeURIComponent(a.substr(0, c));
    },
    Sr = function (a) {
      a.metadata.speculative_in_message || (a.metadata.speculative = !1);
    },
    Tr = function (a, b) {
      Ha(b) || (b = [b]);
      return 0 <= b.indexOf(a.metadata.hit_type);
    },
    Ur = function (a) {
      var b = a.target.O[0];
      if (b) {
        a.h[N.g.Nc] = b;
        var c = a.target.O[1];
        c && (a.h[N.g.cb] = c);
      } else a.isAborted = !0;
    },
    Vr = function (a) {
      if (
        Tr(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.h[N.g.cb],
          c = !0 === V(a.s, N.g.bf);
        c && (a.metadata.remarketing_only = !0);
        switch (a.metadata.hit_type) {
          case "conversion":
            !c && b && Sr(a);
            dj() && (a.metadata.is_gcp_conversion = !0);
            break;
          case "user_data_lead":
          case "user_data_web":
            !c && b && (a.isAborted = !0);
            break;
          case "remarketing":
            (!c && b) || Sr(a);
        }
        a.h[N.g.Qi] = a.metadata.is_gcp_conversion
          ? "www.google.com"
          : "www.googleadservices.com";
      }
    },
    Wr = function (a) {
      Tr(a, ["conversion", "remarketing"]);
    },
    Xr = function (a) {
      if (Tr(a, ["conversion", "remarketing"])) {
        var b = Hl();
        a.h[N.g.Ag] = b;
        var c = V(a.s, N.g.za);
        c || (c = 1 === b ? z.top.location.href : z.location.href);
        a.h[N.g.za] = Qr(c);
        a.copyToHitData(N.g.Ja, C.referrer);
        a.h[N.g.xb] = Rr();
        a.copyToHitData(N.g.Ha);
        var d = fq();
        a.h[N.g.yb] = d.width + "x" + d.height;
        if (Q(32)) {
          for (var e, f = z, g = f; f && f != f.parent; )
            (f = f.parent), Dl(f) && (g = f);
          e = g;
          var h;
          var m = e.location.href;
          if (e === e.top) h = { url: m, Rl: !0 };
          else {
            var n = !1,
              p = e.document;
            p &&
              p.referrer &&
              ((m = p.referrer), e.parent === e.top && (n = !0));
            var q = e.location.ancestorOrigins;
            if (q) {
              var r = q[q.length - 1];
              r && -1 === m.indexOf(r) && ((n = !1), (m = r));
            }
            h = { url: m, Rl: n };
          }
          var t = h;
          t.url && c !== t.url && (a.h[N.g.rf] = Qr(t.url));
        }
      }
    },
    Yr = function (a) {
      Tr(a, ["conversion", "remarketing"]) &&
        (a.copyToHitData(N.g.wa),
        a.copyToHitData(N.g.ja),
        a.copyToHitData(N.g.sa),
        ("remarketing" === a.metadata.hit_type || Q(63)) &&
          a.copyToHitData(N.g.Oa));
    },
    Zr = function (a) {
      if (Q(8))
        if (!qn(z)) M(87);
        else if (void 0 !== sn) {
          M(85);
          var b = on();
          b ? wn(b, a) : M(86);
        }
    },
    bs = function (a) {
      !Tr(a, ["conversion"]) ||
        (Q(68) && !T(N.g.P)) ||
        (!0 === z._gtmpcm || aq()
          ? (a.h[N.g.Jb] = "2")
          : Q(5) &&
            ($r ||
              xr(wr()) ||
              (Fl(
                "AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
              ),
              ($r = !0)),
            as ||
              ((as = !0),
              Fl(
                "A+xK4jmZTgh1KBVry/UZKUE3h6Dr9HPPioFS4KNCzify+KEoOii7z/goKS2zgbAOwhpZ1GZllpdz7XviivJM9gcAAACFeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiQXR0cmlidXRpb25SZXBvcnRpbmdDcm9zc0FwcFdlYiIsImV4cGlyeSI6MTcwNzI2Mzk5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d"
              )),
            xr(wr()) && (a.h[N.g.Jb] = "1")));
    },
    cs = function (a) {
      Tr(a, ["conversion", "remarketing"]) &&
        Q(6) &&
        T(N.g.J) &&
        (!Q(68) || T(N.g.P)) &&
        !1 !== V(a.s, N.g.Fa) &&
        !1 !== V(a.s, N.g.ia) &&
        !1 !== V(a.s, N.g.Ib) &&
        !1 !== V(a.s, N.g.Na) &&
        zr() &&
        ((a.h[N.g.pg] = "1"), (a.metadata.send_fledge_experiment = !0));
    },
    ds = function (a) {
      var b = function (d) {
        return V(a.s, d);
      };
      a.metadata.conversion_linker_enabled = !1 !== b(N.g.Da);
      var c = {
        prefix: b(N.g.La) || b(N.g.Ma),
        domain: b(N.g.Ta),
        Yb: b(N.g.Ga),
        flags: b(N.g.Ua),
      };
      a.metadata.cookie_options = c;
      a.metadata.redact_ads_data = null != b(N.g.ra) && !1 !== b(N.g.ra);
      a.metadata.allow_ad_personalization = !1 !== b(N.g.ia);
    },
    es = function (a) {
      if (Ap(a, "ccd_add_1p_data", !1) && T(N.g.J)) {
        var b = a.s.C[N.g.ie];
        if (bj(b)) {
          var c = V(a.s, N.g.Aa);
          null === c
            ? (a.metadata.user_data_from_code = null)
            : (b.enable_code && nb(c) && (a.metadata.user_data_from_code = c),
              nb(b.selectors) &&
                (a.metadata.user_data_from_manual = aj(b.selectors)));
        }
      }
    },
    fs = function (a) {
      var b =
          !a.metadata.send_user_data_hit &&
          Tr(a, ["conversion", "user_data_web"]),
        c = !Ap(a, "ccd_add_1p_data", !1) && Tr(a, "user_data_lead");
      if ((b || c) && T(N.g.J)) {
        var d = "conversion" === a.metadata.hit_type,
          e = a.s,
          f = void 0,
          g = V(e, N.g.Aa);
        if (d) {
          var h = (V(e, N.g.Jd) || {})[a.h[N.g.cb]];
          if (!0 === V(e, N.g.Ad) || h) {
            var m;
            var n;
            if (h)
              b: {
                switch (h.enhanced_conversions_mode) {
                  case "manual":
                    if (g && nb(g)) {
                      n = g;
                      break b;
                    }
                    var p = h.enhanced_conversions_manual_var;
                    n = void 0 !== p ? p : z.enhanced_conversion_data;
                    break b;
                  case "automatic":
                    n = aj(h[N.g.ng]);
                    break b;
                }
                n = void 0;
              }
            else n = z.enhanced_conversion_data;
            var q = n,
              r = (h || {}).enhanced_conversions_mode,
              t;
            if (q) {
              if ("manual" === r)
                switch (q._tag_mode) {
                  case "CODE":
                    t = "c";
                    break;
                  case "AUTO":
                    t = "a";
                    break;
                  case "MANUAL":
                    t = "m";
                    break;
                  default:
                    t = "c";
                }
              else t = "automatic" === r ? (cj(h) ? "a" : "m") : "c";
              m = { X: q, Pj: t };
            } else m = { X: q, Pj: void 0 };
            var u = m,
              v = u.Pj;
            f = u.X;
            a.h[N.g.he] = v;
          }
        } else if (a.s.isGtmEvent) {
          Sr(a);
          a.metadata.user_data = g;
          return;
        }
        a.metadata.user_data = f;
      }
    },
    gs = function (a) {
      Tr(a, ["conversion", "remarketing"]) &&
        (a.s.isGtmEvent
          ? "conversion" !== a.metadata.hit_type &&
            a.eventName &&
            (a.h[N.g.og] = a.eventName)
          : (a.h[N.g.og] = a.eventName),
        l(a.s.h, function (b, c) {
          li[b.split(".")[0]] || (a.h[b] = c);
        }));
    },
    hs = function (a) {
      if (
        a.eventName === N.g.qa &&
        ((a.metadata.is_config_command = !0),
        Tr(a, "conversion") && (a.metadata.speculative = !0),
        !Tr(a, "remarketing") ||
          (!1 !== V(a.s, N.g.Ib) && !1 !== V(a.s, N.g.Na)) ||
          (a.metadata.speculative = !0),
        Tr(a, "landing_page"))
      ) {
        var b = V(a.s, N.g.sb),
          c = V(a.s, N.g.Ia) || {},
          d = V(a.s, N.g.Ab),
          e = a.metadata.conversion_linker_enabled,
          f = a.metadata.cookie_options;
        Yp({ kj: e, Zk: b, vj: c, Nj: d, Wf: zp(a) }, f);
        tp(a.target, a.s);
        cp({
          ah: !1,
          Sf: a.metadata.redact_ads_data,
          Lj: a.target.id,
          s: a.s,
          fd: e ? f : void 0,
          Mf: e,
          mj: a.h[N.g.lf],
          lh: a.h[N.g.vb],
          hh: a.h[N.g.tb],
        });
        a.isAborted = !0;
      }
    },
    is = function (a) {
      if (
        !Ap(a, "hasPreAutoPiiCcdRule", !1) &&
        Tr(a, "conversion") &&
        T(N.g.J)
      ) {
        var b = (V(a.s, N.g.Jd) || {})[a.h[N.g.cb]],
          c = a.h[N.g.Nc],
          d;
        if (!(d = cj(b)))
          if (rj() && Dq)
            if (Eq) d = !0;
            else {
              var e = xp("AW-" + c);
              d = !!e && !!e.preAutoPii;
            }
          else d = !1;
        if (d) {
          var f = Ua(),
            g = $q({ ld: !0, md: !0, Lh: !0 });
          if (0 !== g.elements.length) {
            for (var h = [], m = 0; m < g.elements.length; ++m) {
              var n = g.elements[m];
              h.push(n.querySelector + "*" + ar(n) + "*" + n.type);
            }
            a.h[N.g.Lg] = h.join("~");
            var p = g.Dh;
            p && ((a.h[N.g.Mg] = p.querySelector), (a.h[N.g.Kg] = ar(p)));
            a.h[N.g.Jg] = String(Ua() - f);
            a.h[N.g.Ng] = g.status;
          }
        }
      }
    },
    js = function (a) {
      if (a.eventName === N.g.Ka && !a.s.isGtmEvent) {
        if (!a.metadata.consent_updated && Tr(a, "conversion")) {
          var b = V(a.s, N.g.ub);
          if ("function" !== typeof b) return;
          var c = String(V(a.s, N.g.eb)),
            d = a.h[c],
            e = V(a.s, c);
          c === N.g.pb || c === N.g.Hb
            ? Zp(
                { Qj: c, callback: b, wj: e },
                a.metadata.cookie_options,
                a.metadata.redact_ads_data,
                Rp
              )
            : b(d || e);
        }
        a.isAborted = !0;
      }
    },
    ks = function (a) {
      if (Tr(a, "conversion") && T(N.g.J) && (a.h[N.g.vc] || a.h[N.g.sc])) {
        var b = a.h[N.g.cb],
          c = ob(a.metadata.cookie_options),
          d = Ho(c.prefix);
        c.prefix = "_gcl" === d ? "" : d;
        if (a.h[N.g.vc]) {
          var e = Or(b, c);
          e && (a.h[N.g.Pg] = e);
        }
        if (a.h[N.g.sc]) {
          var f = Kr(b, c).rl;
          f && (a.h[N.g.ug] = f);
        }
      }
    },
    ls = function (a) {
      var b = Q(4),
        c = a.s,
        d,
        e,
        f;
      if (!b) {
        var g = cl(c, N.g.ba);
        d = cb(nb(g) ? g : {});
      }
      var h = cl(c, N.g.ba, 1),
        m = cl(c, N.g.ba, 2);
      e = cb(nb(h) ? h : {}, ".");
      f = cb(nb(m) ? m : {}, ".");
      b || (a.h[N.g.lf] = d);
      a.h[N.g.vb] = e;
      a.h[N.g.tb] = f;
    },
    ms = function (a) {
      if (Tr(a, ["conversion", "remarketing"])) {
        var b = "conversion" === a.metadata.hit_type;
        (b && a.eventName !== N.g.oa) ||
          (a.copyToHitData(N.g.aa),
          b &&
            (a.copyToHitData(N.g.Ed),
            a.copyToHitData(N.g.Cd),
            a.copyToHitData(N.g.Dd),
            a.copyToHitData(N.g.Bd),
            (a.h[N.g.jg] = a.eventName)));
      }
    },
    ns = function (a) {
      if (Tr(a, ["conversion", "remarketing"])) {
        var b = a.s,
          c = V(b, N.g.Ob);
        if (!0 === c || !1 === c) a.h[N.g.Ob] = c;
        var d = V(b, N.g.ia);
        if (!0 === d || !1 === d) a.h[N.g.me] = !d;
        !1 === d && Tr(a, "remarketing") && (a.isAborted = !0);
      }
    },
    os = function (a) {
      Tr(a, "conversion") &&
        (a.copyToHitData(N.g.Wc),
        a.copyToHitData(N.g.Fd),
        a.copyToHitData(N.g.ad),
        a.copyToHitData(N.g.Kd),
        a.copyToHitData(N.g.qc),
        a.copyToHitData(N.g.Sc));
    },
    ps = function (a) {
      Dp(a);
    },
    qs = function (a) {
      if (Tr(a, ["conversion", "remarketing"]) && z.__gsaExp && z.__gsaExp.id) {
        var b = z.__gsaExp.id;
        if (Ea(b))
          try {
            var c = Number(b());
            isNaN(c) || (a.h[N.g.zg] = c);
          } catch (d) {}
      }
    },
    rs = function (a) {
      if (Tr(a, ["conversion", "remarketing"])) {
        var b = Pr();
        void 0 !== b && (a.h[N.g.Og] = b || "error");
        var c = fm();
        c && (a.h[N.g.Qd] = c);
        var d = em();
        d && (a.h[N.g.Xd] = d);
      }
    },
    ss = function (a) {
      Tr(a, ["conversion"]) && "1" === Wn(!1)._up && (a.h[N.g.Sd] = !0);
    },
    ts = function (a) {
      if (Tr(a, ["conversion"])) {
        var b = Q(68) ? T(N.g.P) : !0;
        a.metadata.redact_click_ids =
          !b || (!!a.metadata.redact_ads_data && !T(N.g.J));
      }
    },
    us = function (a) {
      if (
        Tr(a, ["conversion", "user_data_lead", "user_data_web"]) &&
        T(N.g.J) &&
        a.metadata.conversion_linker_enabled
      ) {
        var b = a.metadata.cookie_options,
          c = Ho(b.prefix);
        "_gcl" === c && (c = "");
        if (!Q(68) || T(N.g.P)) {
          var d = c;
          if (
            Er.test(C.location.host)
              ? Hr.test(C.location.href) || Fr.test(C.location.href)
              : !Zo(d)
          ) {
            var e = Mr(c);
            e && (a.h[N.g.pb] = e);
            if (!c) {
              var f = Jr(Ao() ? vo() : {}, Fr);
              f && (a.h[N.g.Pd] = f);
            }
          } else {
            var g = Nr(c);
            g && (a.h[N.g.vc] = g);
            if (!c) {
              var h = a.h[N.g.cb];
              b = ob(b);
              b.prefix = c;
              var m = Kr(h, b, !0).ql;
              m && (a.h[N.g.sc] = m);
            }
          }
        }
      }
    },
    vs = function (a) {
      if (
        Tr(a, [
          "conversion",
          "remarketing",
          "user_data_lead",
          "user_data_web",
        ]) &&
        a.metadata.conversion_linker_enabled &&
        T(N.g.J)
      ) {
        var b = !Q(3);
        if ("remarketing" !== a.metadata.hit_type || b) {
          var c = a.metadata.cookie_options;
          oo(c, "conversion" === a.metadata.hit_type && a.eventName !== N.g.Ka);
          if (!Q(68) || T(N.g.P)) a.h[N.g.Hb] = io[ko(c.prefix)];
        }
      }
    },
    ws = function (a) {
      jj(a.h[N.g.Hb]);
      Q(105) && ur();
    },
    xs = function (a) {
      if (Tr(a, ["conversion"])) {
        var b = Gp(a.metadata.cookie_options);
        if (b && !a.h[N.g.wa]) {
          var c = Om(a.h[N.g.cb]);
          a.h[N.g.wa] = c;
        }
        b && ((a.h[N.g.zb] = b), (a.metadata.send_ccm_parallel_ping = !0));
      }
    },
    ys = function (a) {
      var b = !T(N.g.J),
        c = Q(68) && !T(N.g.P);
      switch (a.metadata.hit_type) {
        case "user_data_lead":
        case "user_data_web":
          a.isAborted = !!(b || a.metadata.consent_updated || c);
          break;
        case "remarketing":
          a.isAborted = b || c;
          break;
        case "conversion":
          a.metadata.consent_updated && (a.h[N.g.vd] = !0);
      }
    },
    zs = function (a) {
      Tr(a, ["conversion"]) &&
        a.s.eventMetadata.is_external_event &&
        (a.h[N.g.Ri] = !0);
    },
    As = function (a) {
      if (Q(84) && Tr(a, ["conversion"])) {
        var b = dq();
        eq(b) && ((a.h[N.g.kf] = "1"), (a.metadata.add_tag_timing = !0));
      }
    },
    Bs = function (a) {
      var b;
      if ("gtag.config" !== a.eventName && a.metadata.send_user_data_hit)
        switch (a.metadata.hit_type) {
          case "user_data_web":
            b = 97;
            Sr(a);
            break;
          case "user_data_lead":
            b = 98;
            Sr(a);
            break;
          case "conversion":
            b = 99;
        }
      !a.metadata.speculative && b && M(b);
      !0 === a.metadata.speculative && (a.isAborted = !0);
    },
    $r = !1,
    as = !1;
  var Cs = {
    I: {
      Rh: "ads_conversion_hit",
      xd: "container_execute_start",
      Uh: "container_setup_end",
      ag: "container_setup_start",
      Sh: "container_blocking_end",
      Th: "container_execute_end",
      Vh: "container_yield_end",
      cg: "container_yield_start",
      Mi: "event_execute_end",
      Li: "event_evaluation_end",
      Qg: "event_evaluation_start",
      Ni: "event_setup_end",
      je: "event_setup_start",
      Oi: "ga4_conversion_hit",
      ne: "page_load",
      pn: "pageview",
      Ub: "snippet_load",
      Yi: "tag_callback_error",
      Zi: "tag_callback_failure",
      aj: "tag_callback_success",
      bj: "tag_execute_end",
      dd: "tag_execute_start",
    },
  };
  function Ds() {
    function a(c, d) {
      var e = Eb(d);
      e && b.push(c + "=" + e);
    }
    var b = [];
    a("&u", "GTM");
    a("&ut", "TAGGING");
    a("&h", "HEALTH");
    return b.join("");
  }
  var Es = !1;
  var lt = function (a, b) {},
    mt = function (a, b) {},
    nt = function (a, b) {},
    ot = function (a, b) {},
    pt = function () {
      var a = {};
      return a;
    },
    dt = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    qt = function () {},
    rt = function (a, b) {},
    st = function (a, b, c) {},
    tt = function () {};
  var ut = function (a, b) {
    var c = z,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  };
  var vt = function (a, b, c) {
    var d = Al(a, "fmt");
    if (b) {
      var e = Al(a, "random"),
        f = Al(a, "label") || "";
      if (!e) return !1;
      var g = ln(
        decodeURIComponent(f.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(e.replace(/\+/g, " "))
      );
      if (!ut(g, b)) return !1;
    }
    d && 4 != d && (a = Cl(a, "rfmt", d));
    var h = Cl(a, "fmt", 4);
    Lc(
      h,
      function () {
        z.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((z.google_noFurtherRedirects = null), b());
      },
      void 0,
      c,
      C.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var wt = function (a) {
      for (var b = {}, c = 0; c < a.length; c++) {
        var d = a[c],
          e = void 0;
        if (d.hasOwnProperty("google_business_vertical")) {
          e = d.google_business_vertical;
          var f = {};
          b[e] = b[e] || ((f.google_business_vertical = e), f);
        } else (e = ""), b.hasOwnProperty(e) || (b[e] = {});
        var g = b[e],
          h;
        for (h in d)
          "google_business_vertical" !== h &&
            (h in g || (g[h] = []), g[h].push(d[h]));
      }
      return Object.keys(b).map(function (m) {
        return b[m];
      });
    },
    xt = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        if (d) {
          var e = {};
          b.push(
            ((e.id = d.id),
            (e.origin = d.origin),
            (e.destination = d.destination),
            (e.start_date = d.start_date),
            (e.end_date = d.end_date),
            (e.location_id = d.location_id),
            (e.google_business_vertical = d.google_business_vertical),
            e)
          );
        }
      }
      return b;
    },
    zt = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        d &&
          b.push({
            item_id: d.id,
            quantity: d.quantity,
            value: d.price,
            start_date: d.start_date,
            end_date: d.end_date,
          });
      }
      return b;
    },
    Bt = function (a) {
      if (!a) return "";
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = [];
        d &&
          (e.push(At(d.value)),
          e.push(At(d.quantity)),
          e.push(At(d.item_id)),
          e.push(At(d.start_date)),
          e.push(At(d.end_date)),
          b.push("(" + e.join("*") + ")"));
      }
      return 0 < b.length ? b.join("") : "";
    },
    At = function (a) {
      return "number" !== typeof a && "string" !== typeof a ? "" : a.toString();
    },
    Dt = function (a, b) {
      var c = Ct(b);
      return "" + a + (a && c ? ";" : "") + c;
    },
    Ct = function (a) {
      if (!a || "object" !== typeof a || "function" === typeof a.join)
        return "";
      var b = [];
      l(a, function (c, d) {
        var e, f;
        if (Ha(d)) {
          for (var g = [], h = 0; h < d.length; ++h) {
            var m = Et(d[h]);
            void 0 != m && g.push(m);
          }
          f = 0 !== g.length ? g.join(",") : void 0;
        } else f = Et(d);
        e = f;
        var n = Et(c);
        n && void 0 != e && b.push(n + "=" + e);
      });
      return b.join(";");
    },
    Et = function (a) {
      var b = typeof a;
      if (null != a && "object" !== b && "function" !== b)
        return String(a)
          .replace(/,/g, "\\,")
          .replace(/;/g, "\\;")
          .replace(/=/g, "\\=");
    },
    Ft = function (a, b) {
      var c = [],
        d = function (f, g) {
          null != g &&
            "" !== g &&
            (!0 === g && (g = 1),
            !1 === g && (g = 0),
            c.push(f + "=" + encodeURIComponent(g)));
        },
        e = a.metadata.hit_type;
      ("conversion" !== e && "remarketing" !== e) ||
        d("random", a.metadata.event_start_timestamp_ms);
      l(b, d);
      return c.join("&");
    },
    Gt = function (a, b) {
      var c = a.metadata.hit_type,
        d = a.h[N.g.Nc],
        e = T(N.g.J),
        f = [],
        g,
        h = a.s.onSuccess,
        m,
        n = cn() ? 2 : 3,
        p = 0,
        q = function (x) {
          f.push(x);
          x.kb && p++;
        };
      switch (c) {
        case "conversion":
          m = "pagead/conversion";
          var r = "";
          e
            ? a.metadata.is_gcp_conversion
              ? ((g = "https://www.google.com/"), (m = "pagead/1p-conversion"))
              : (g = "https://www.googleadservices.com/")
            : (g = "https://pagead2.googlesyndication.com/");
          a.metadata.is_gcp_conversion &&
            (r = "&gcp=1&sscte=1&ct_cookie_present=1");
          var t = {
            Cb: "" + g + m + "/" + d + "/?" + Ft(a, b) + r,
            format: n,
            kb: !0,
          };
          if (!Q(68) || T(N.g.P)) t.attributes = { attributionsrc: "" };
          q(t);
          a.metadata.send_ccm_parallel_ping &&
            q({
              Cb: "" + g + "ccm/conversion/" + d + "/?" + Ft(a, b) + r,
              format: 2,
              kb: !0,
            });
          a.metadata.is_gcp_conversion &&
            ((r = "&gcp=1&ct_cookie_present=1"),
            q({
              Cb:
                "" +
                (e ? "https://googleads.g.doubleclick.net/" : g) +
                "pagead/viewthroughconversion/" +
                d +
                "/?" +
                Ft(a, b) +
                r,
              format: n,
              kb: !0,
            }));
          break;
        case "remarketing":
          var u = b.data || "",
            v = wt(xt(a.h[N.g.aa]));
          if (v.length) {
            for (var w = 0; w < v.length; w++)
              (b.data = Dt(u, v[w])),
                q({
                  Cb:
                    "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" +
                    d +
                    "/?" +
                    Ft(a, b),
                  format: n,
                  kb: !0,
                }),
                a.metadata.send_fledge_experiment &&
                  q({
                    Cb: Br() + "/td/rul/" + d + "?" + Ft(a, b),
                    format: 4,
                    kb: !1,
                  }),
                (a.metadata.event_start_timestamp_ms += 1);
            a.metadata.send_fledge_experiment = !1;
          } else
            q({
              Cb:
                "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" +
                d +
                "/?" +
                Ft(a, b),
              format: n,
              kb: !0,
            });
          break;
        case "user_data_lead":
          q({
            Cb: "https://google.com/pagead/form-data/" + d + "?" + Ft(a, b),
            format: 1,
            kb: !0,
          });
          break;
        case "user_data_web":
          q({
            Cb: "https://google.com/ccm/form-data/" + d + "?" + Ft(a, b),
            format: 1,
            kb: !0,
          });
      }
      1 < f.length && Ea(a.s.onSuccess) && (h = db(a.s.onSuccess, p));
      cn() ||
        ("conversion" !== c && "remarketing" !== c) ||
        !a.metadata.send_fledge_experiment ||
        q({ Cb: Br() + "/td/rul/" + d + "?" + Ft(a, b), format: 4, kb: !1 });
      return { onSuccess: h, Kl: f };
    },
    Ht = function (a, b, c, d, e, f) {
      mt(c.s.eventId, c.eventName);
      var g = function () {
        e && e();
      };
      switch (b) {
        case 1:
          Vc(a);
          e && e();
          break;
        case 2:
          Oc(a, g, void 0, f);
          break;
        case 3:
          var h = !1;
          try {
            h = vt(a, g, f);
          } catch (p) {
            h = !1;
          }
          h || Ht(a, 2, c, d, g, f);
          break;
        case 4:
          var m = "AW-" + c.h[N.g.Nc],
            n = c.h[N.g.cb];
          n && (m = m + "/" + n);
          Ar(a, m);
      }
    },
    It = {},
    Jt =
      ((It[N.g.vd] = "gcu"),
      (It[N.g.pb] = "gclaw"),
      (It[N.g.Hb] = "auid"),
      (It[N.g.Bd] = "dscnt"),
      (It[N.g.Cd] = "fcntr"),
      (It[N.g.Dd] = "flng"),
      (It[N.g.Ed] = "mid"),
      (It[N.g.jg] = "bttype"),
      (It[N.g.cb] = "label"),
      (It[N.g.Jb] = "capi"),
      (It[N.g.sa] = "currency_code"),
      (It[N.g.Fd] = "vdltv"),
      (It[N.g.ri] = "_dbg"),
      (It[N.g.Kd] = "oedeld"),
      (It[N.g.tb] = "edid"),
      (It[N.g.pg] = "fledge"),
      (It[N.g.Pd] = "gac"),
      (It[N.g.sc] = "gacgb"),
      (It[N.g.ug] = "gacmcov"),
      (It[N.g.Qd] = "gdpr"),
      (It[N.g.vb] = "gdid"),
      (It[N.g.zg] = "gsaexp"),
      (It[N.g.Ag] = "frm"),
      (It[N.g.Sd] = "gtm_up"),
      (It[N.g.kf] = "lps"),
      (It[N.g.lf] = "did"),
      (It[N.g.Wc] = void 0),
      (It[N.g.xb] = "tiba"),
      (It[N.g.Ob] = "rdp"),
      (It[N.g.zb] = "ecsid"),
      (It[N.g.ad] = "delopc"),
      (It[N.g.Xd] = "gdpr_consent"),
      (It[N.g.wa] = "oid"),
      (It[N.g.Jg] = "ec_lat"),
      (It[N.g.Kg] = "ec_meta"),
      (It[N.g.Lg] = "ec_m"),
      (It[N.g.Mg] = "ec_sel"),
      (It[N.g.Ng] = "ec_s"),
      (It[N.g.he] = "ec_mode"),
      (It[N.g.Oa] = "userId"),
      (It[N.g.Og] = "us_privacy"),
      (It[N.g.ja] = "value"),
      (It[N.g.vc] = "gclgb"),
      (It[N.g.Pg] = "mcov"),
      (It[N.g.Qi] = "hn"),
      (It[N.g.Ri] = "gtm_ee"),
      (It[N.g.me] = "npa"),
      (It[N.g.Nc] = null),
      (It[N.g.yb] = null),
      (It[N.g.Ha] = null),
      (It[N.g.aa] = null),
      (It[N.g.za] = null),
      (It[N.g.Ja] = null),
      (It[N.g.rf] = null),
      It),
    Lt = function (a) {
      Kt(a, function (b) {
        for (
          var c = Gt(a, b), d = c.onSuccess, e = c.Kl, f = 0;
          f < e.length;
          f++
        ) {
          var g = e[f];
          Ht(g.Cb, g.format, a, b, g.kb ? d : void 0, g.attributes);
        }
      });
    },
    Kt = function (a, b) {
      var c = a.metadata.hit_type,
        d = {},
        e = {},
        f = [],
        g = a.metadata.event_start_timestamp_ms;
      if ("conversion" === c || "remarketing" === c)
        (d.cv = "11"),
          (d.fst = g),
          (d.fmt = 3),
          (d.bg = "ffffff"),
          (d.guid = "ON"),
          (d.async = "1");
      var h = Uo(["aw", "dc"]);
      null != h && (d.gad_source = h);
      d.gtm = en(zp(a));
      if (Q(38) || Mj())
        if (Q(38) || "remarketing" !== c)
          if (((d.gcs = nm()), Q(40) || ("remarketing" !== c && Nj())))
            d.gcd = rm(a.s);
      Q(42) && (vm() && (d.dma_cps = sm()), (d.dma = um()));
      Q(70) && Pl(Yl()) && (d.tcfd = wm());
      if (a.h[N.g.yb]) {
        var m = a.h[N.g.yb].split("x");
        2 === m.length && ((d.u_w = m[0]), (d.u_h = m[1]));
      }
      if (a.h[N.g.Ha]) {
        var n = a.h[N.g.Ha];
        2 === n.length
          ? (d.hl = n)
          : 5 === n.length &&
            ((d.hl = n.substring(0, 2)), (d.gl = n.substring(3, 5)));
      }
      var p = a.metadata.redact_click_ids,
        q = function (y, A) {
          var B = a.h[A];
          B && (d[y] = p ? Fn(B) : B);
        };
      q("url", N.g.za);
      q("ref", N.g.Ja);
      q("top", N.g.rf);
      Q(8) &&
        ((Jt[N.g.Yd] = "uaa"),
        (Jt[N.g.Zd] = "uab"),
        (Jt[N.g.ae] = "uafvl"),
        (Jt[N.g.be] = "uamb"),
        (Jt[N.g.ce] = "uam"),
        (Jt[N.g.de] = "uap"),
        (Jt[N.g.ee] = "uapv"),
        (Jt[N.g.fe] = "uaw"));
      l(a.h, function (y, A) {
        if (Jt.hasOwnProperty(y)) {
          var B = Jt[y];
          B && (d[B] = A);
        } else e[y] = A;
      });
      var r = a.h[N.g.Wc];
      void 0 != r && "" !== r && (d.vdnc = String(r));
      var t = a.h[N.g.Sc];
      void 0 !== t && (d.shf = t);
      var u = a.h[N.g.qc];
      void 0 !== u && (d.delc = u);
      if (Q(84) && a.metadata.add_tag_timing) {
        d.tft = Ua();
        var v = Yc();
        void 0 !== v && (d.tfd = Math.round(v));
      }
      d.data = Ct(e);
      var w = a.h[N.g.aa];
      w && "conversion" === c && ((d.iedeld = ej(w)), (d.item = Bt(zt(w))));
      if (
        !(
          ("conversion" !== c &&
            "user_data_lead" !== c &&
            "user_data_web" !== c) ||
          !a.metadata.user_data ||
          (Q(68) && !T(N.g.P)) ||
          (Q(23) && !T(N.g.J))
        )
      ) {
        var x = Yh(a.metadata.user_data);
        x &&
          f.push(
            x.then(function (y) {
              d.em = y.xj;
              if ("user_data_web" === c && 0 < y.vm) {
                var A = Hp(a.metadata.cookie_options);
                d.ecsid = A;
              }
            })
          );
      }
      if (f.length)
        try {
          Promise.all(f).then(function () {
            b(d);
          });
          return;
        } catch (y) {}
      b(d);
    };
  var Mt = function () {
      this.h = {};
    },
    Nt = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    Ot = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
        })
        .join("&");
    },
    Qt = function (a, b, c, d) {
      if (!Mj()) {
        Pt(a, b, c, d);
        return;
      }
      ck(
        function () {
          T(N.g.J) ? Pt(a, b, c, d) : d && d();
        },
        [N.g.J]
      );
    };
  var Rt = function (a, b, c) {
      c = void 0 === c ? !0 : c;
      var d = {
          gclgb: function () {
            return Np("gb", b, c).join(".");
          },
          gacgb: function () {
            return Up(c);
          },
          gclaw: function () {
            return Rp(b, c).join(".");
          },
          gac: function () {
            return Tp(c);
          },
        },
        e = Wp(b),
        f = e ? "gclgb" : "gclaw",
        g = e ? "gacgb" : "gac",
        h = d[g],
        m = (0, d[f])(),
        n = "_gcl" !== b ? "" : h();
      m && Nt(a, f, m);
      n && Nt(a, g, n);
    },
    Pt = function (a, b, c, d) {
      c = c || {};
      var e = c.fd || {},
        f = new Mt();
      Xh(b, function (g, h) {
        Nt(f, "em", g);
        Nt(f, "gtm", en());
        if (Mj() || Q(38)) Nt(f, "gcs", nm()), Nt(f, "gcd", rm());
        Q(42) && (vm() && Nt(f, "dma_cps", sm()), Nt(f, "dma", um()));
        Q(70) && Pl(Yl()) && Nt(f, "tcfd", wm());
        Rt(f, Ho(e.prefix), c.Sf);
        Nt(f, "auid", io[ko(e.prefix)]);
        if (0 < h) {
          var m = Hp(e);
          Nt(f, "ecsid", m);
        }
        var n = Ot(f);
        Vc("https://google.com/pagead/form-data/" + a + "?" + n);
        Vc("https://google.com/ccm/form-data/" + a + "?" + n);
        d && d();
      });
    };
  function St(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  var Ut = function (a, b) {
      Tt(a).entity.push(b);
    },
    Vt = function (a, b) {
      Tt(a).event && Tt(a).event.push(b);
    },
    Wt = function () {
      var a = Tt(sk());
      return a.event ? a.event : [];
    };
  function Tt(a) {
    var b,
      c = pi.r;
    c || ((c = { container: {} }), (pi.r = c));
    b = c;
    var d = b.container[a];
    d || ((d = { entity: [], event: [] }), (b.container[a] = d));
    return d;
  }
  var Xt = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Yt = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Zt = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    $t =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      ),
    cu = function (a) {
      var b = Pi("gtm.allowlist") || Pi("gtm.whitelist");
      b && M(9);
      vi && (b = ["google", "gtagfl", "lcl", "zone"]);
      au() &&
        (vi
          ? M(116)
          : (M(117),
            bu &&
              ((b = []),
              window.console &&
                window.console.log &&
                window.console.log("GTM blocked. See go/13687728."))));
      var c = b && Ya(Ra(b), Yt),
        d = Pi("gtm.blocklist") || Pi("gtm.blacklist");
      d || ((d = Pi("tagTypeBlacklist")) && M(3));
      d ? M(8) : (d = []);
      au() &&
        ((d = Ra(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Ra(d).indexOf("google") && M(2);
      var e = d && Ya(Ra(d), Zt),
        f = {};
      return function (g) {
        var h = g && g[Pe.xa];
        if (!h || "string" != typeof h) return !0;
        h = h.replace(/^_*/, "");
        if (void 0 !== f[h]) return f[h];
        var m = Hi[h] || [],
          n = a(h, m),
          p;
        p = Tt(sk()).entity;
        for (var q = 0; q < p.length; q++)
          try {
            n = n && p[q](h, m);
          } catch (y) {
            n = !1;
          }
        if (b) {
          var r;
          if ((r = n))
            a: {
              if (0 > c.indexOf(h))
                if (m && 0 < m.length)
                  for (var t = 0; t < m.length; t++) {
                    if (0 > c.indexOf(m[t])) {
                      M(11);
                      r = !1;
                      break a;
                    }
                  }
                else {
                  r = !1;
                  break a;
                }
              r = !0;
            }
          n = r;
        }
        var u = !1;
        if (d) {
          var v = 0 <= e.indexOf(h);
          if (v) u = v;
          else {
            var w = Ma(e, m || []);
            w && M(10);
            u = w;
          }
        }
        var x = !n || u;
        x ||
          !(0 <= m.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (x = Ma(e, $t));
        return (f[h] = x);
      };
    },
    bu = !1;
  bu = !0;
  var au = function () {
      return Xt.test(z.location && z.location.hostname);
    },
    du = function () {
      kk &&
        Ut(sk(), function (a) {
          var b = yf(a),
            c;
          if (Df(b)) {
            var d = b[Pe.xa];
            if (!d) throw "Error: No function name given for function call.";
            var e = rf[d];
            c = !!e && !!e.runInSiloedMode;
          } else c = !!St(b[Pe.xa], 4);
          return c;
        });
    };
  function eu(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return En("" + c + b).href;
    }
  }
  function fu() {
    return !!oi.yf && "SGTM_TOKEN" !== oi.yf.split("@@").join("");
  }
  function gu(a) {
    for (var b = fa([N.g.Ud, N.g.Qb]), c = b.next(); !c.done; c = b.next()) {
      var d = V(a, c.value);
      if (d) return d;
    }
  }
  var iu = function (a, b, c, d, e) {
      if (!hu() && !yk(a)) {
        var f = "?id=" + encodeURIComponent(a) + "&l=" + oi.fa,
          g = 0 === a.indexOf("GTM-");
        g || (f += "&cx=c");
        Q(57) && (f += "&gtm=" + en());
        var h = fu();
        h && (f += "&sign=" + oi.yf);
        var m = c ? "/gtag/js" : "/gtm.js",
          n = xi || zi ? eu(b, m + f) : void 0;
        if (!n) {
          var p = oi.yd + m;
          h &&
            Fc &&
            g &&
            (p = Fc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          n = ip("https://", "http://", p + f);
        }
        var q = a;
        d.siloed && (Bk({ ctid: q, isDestination: !1 }), (q = mk(q)));
        var r = q,
          t = Ak();
        gk().container[r] = { state: 1, context: d, parent: t };
        hk({ ctid: r, isDestination: !1 }, e);
        Lc(n);
      }
    },
    ju = function (a, b, c, d) {
      if (!hu() && !zk(a))
        if (Ck())
          (gk().destination[a] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: Ak(),
          }),
            hk({ ctid: a, isDestination: !0 }, d),
            M(91);
        else {
          var e =
            "/gtag/destination?id=" +
            encodeURIComponent(a) +
            "&l=" +
            oi.fa +
            "&cx=c";
          Q(57) && (e += "&gtm=" + en());
          fu() && (e += "&sign=" + oi.yf);
          var f = xi || zi ? eu(b, e) : void 0;
          f || (f = ip("https://", "http://", oi.yd + e));
          var g = a;
          c.siloed && (Bk({ ctid: g, isDestination: !0 }), (g = mk(g)));
          gk().destination[g] = { state: 1, context: c, parent: Ak() };
          hk({ ctid: g, isDestination: !0 }, d);
          Lc(f);
        }
    };
  function hu() {
    if (cn()) {
      return !0;
    }
    return !1;
  }
  var ku = "",
    lu = [];
  function mu(a) {
    var b = "";
    ku && (b = "&dl=" + encodeURIComponent(ku));
    0 < lu.length && (b += "&tdp=" + lu.join("."));
    a.hc && ((ku = ""), (lu.length = 0), b && a.Hj());
    return b;
  }
  var nu = [];
  function ou(a) {
    if (!nu.length) return "";
    var b = "&tdc=" + nu.join("!");
    a.hc && (a.Hj(), (nu.length = 0));
    return b;
  }
  var pu = { initialized: 11, complete: 12, interactive: 13 },
    qu = {},
    ru = Object.freeze(((qu[N.g.Na] = !0), qu)),
    su =
      0 <= C.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= C.location.search.indexOf("&gtm_diagnostics="),
    uu = function (a, b, c) {
      if (Mk && "config" === a && !(1 < fp(b).O.length)) {
        var d,
          e = Gc("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = ob(c.H);
        ob(c.h, f);
        var g = [],
          h;
        for (h in d) {
          var m = tu(d[h], f);
          m.length && (su && console.log(m), g.push(h));
        }
        g.length &&
          (g.length && Mk && nu.push(b + "*" + g.join(".")),
          Bb("TAGGING", pu[C.readyState] || 14));
        d[b] = f;
      }
    };
  function vu(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function tu(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? ru[q] : t;
      },
      f;
    for (f in vu(a, b)) {
      var g = (d ? d + "." : "") + f,
        h = e(f, a),
        m = e(f, b),
        n = "object" === lb(h) || "array" === lb(h),
        p = "object" === lb(m) || "array" === lb(m);
      if (n && p) tu(h, m, c, g);
      else if (n || p || h !== m) c[g] = !0;
    }
    return Object.keys(c);
  }
  var wu = !1,
    xu = 0,
    yu = [];
  function zu(a) {
    if (!wu) {
      var b = C.createEventObject,
        c = "complete" == C.readyState,
        d = "interactive" == C.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        wu = !0;
        for (var e = 0; e < yu.length; e++) E(yu[e]);
      }
      yu.push = function () {
        for (var f = 0; f < arguments.length; f++) E(arguments[f]);
        return 0;
      };
    }
  }
  function Au() {
    if (!wu && 140 > xu) {
      xu++;
      try {
        C.documentElement.doScroll("left"), zu();
      } catch (a) {
        z.setTimeout(Au, 50);
      }
    }
  }
  var Bu = function (a) {
    wu ? a() : yu.push(a);
  };
  var Du = function (a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: rk(),
    };
  };
  var Fu = function (a, b) {
      this.h = !1;
      this.H = [];
      this.M = { tags: [] };
      this.U = !1;
      this.C = this.D = 0;
      Eu(this, a, b);
    },
    Gu = function (a, b, c, d) {
      if (si.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      nb(d) && (e = ob(d, e));
      e.id = c;
      e.status = "timeout";
      return a.M.tags.push(e) - 1;
    },
    Hu = function (a, b, c, d) {
      var e = a.M.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Iu = function (a) {
      if (!a.h) {
        for (var b = a.H, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.H.length = 0;
      }
    },
    Eu = function (a, b, c) {
      void 0 !== b && a.Af(b);
      c &&
        z.setTimeout(function () {
          return Iu(a);
        }, Number(c));
    };
  Fu.prototype.Af = function (a) {
    var b = this,
      c = Wa(function () {
        return E(function () {
          a(rk(), b.M);
        });
      });
    this.h ? c() : this.H.push(c);
  };
  var Ju = function (a) {
      a.D++;
      return Wa(function () {
        a.C++;
        a.U && a.C >= a.D && Iu(a);
      });
    },
    Ku = function (a) {
      a.U = !0;
      a.C >= a.D && Iu(a);
    };
  var Lu = {},
    Nu = function () {
      return z[Mu()];
    },
    Ou = !1;
  function Mu() {
    return z.GoogleAnalyticsObject || "ga";
  }
  var Ru = function (a) {},
    Su = function (a, b) {
      return function () {
        var c = Nu(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              h = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", h, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var Xu = {},
    Yu = {};
  function Zu(a, b) {
    if (Mk) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Xu[a] = "&e=" + c + "&eid=" + a;
      Wk(a);
    }
  }
  function $u(a) {
    var b = a.eventId,
      c = a.hc;
    if (!Xu[b]) return "";
    var d = Yu[b] ? "" : "&es=1";
    d += Xu[b];
    c && (Yu[b] = !0);
    return d;
  }
  var av = {};
  function bv(a, b) {
    Mk && ((av[a] = av[a] || {}), (av[a][b] = (av[a][b] || 0) + 1));
  }
  function cv(a) {
    var b = a.eventId,
      c = a.hc,
      d = av[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete av[b];
    return e.length ? "&md=" + e.join(".") : "";
  }
  var dv = {},
    ev = {
      aev: "1",
      c: "2",
      jsm: "3",
      v: "4",
      j: "5",
      smm: "6",
      rmm: "7",
      input: "8",
    };
  function fv(a, b, c) {
    if (Mk) {
      dv[a] = dv[a] || [];
      var d = ev[b] || "0",
        e;
      e =
        c instanceof z.Element
          ? "1"
          : c instanceof z.Event
          ? "2"
          : c instanceof z.RegExp
          ? "3"
          : c === z
          ? "4"
          : c === C
          ? "5"
          : c instanceof z.Promise
          ? "6"
          : c instanceof z.Storage
          ? "7"
          : c instanceof z.Date
          ? "8"
          : c instanceof z.History
          ? "9"
          : c instanceof z.Performance
          ? "a"
          : c === z.crypto
          ? "b"
          : c instanceof z.Location
          ? "c"
          : c instanceof z.Navigator
          ? "d"
          : "object" !== typeof c || nb(c)
          ? "0"
          : "e";
      dv[a].push("" + d + e);
    }
  }
  function gv(a) {
    var b = a.eventId,
      c = dv[b] || [];
    if (!c.length) return "";
    a.hc && delete dv[b];
    return "&pcr=" + c.join(".");
  }
  var hv = {},
    iv = {};
  function jv(a, b, c) {
    if (Mk && b) {
      var d = ek(b);
      hv[a] = hv[a] || [];
      hv[a].push(c + d);
      var e = (Df(b) ? "1" : "2") + d;
      iv[a] = iv[a] || [];
      iv[a].push(e);
      Wk(a);
    }
  }
  function kv(a) {
    var b = a.eventId,
      c = a.hc,
      d = "",
      e = hv[b] || [];
    e.length && (d += "&tr=" + e.join("."));
    var f = iv[b] || [];
    f.length && (d += "&ti=" + f.join("."));
    c && (delete hv[b], delete iv[b]);
    return d;
  }
  function lv(a, b, c, d) {
    var e = pf[a],
      f = mv(a, b, c, d);
    if (!f) return null;
    var g = Af(e[Pe.Xi], c, []);
    if (g && g.length) {
      var h = g[0];
      f = lv(
        h.index,
        {
          onSuccess: f,
          onFailure: 1 === h.nj ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function mv(a, b, c, d) {
    function e() {
      if (f[Pe.Ik]) h();
      else {
        var w = Bf(f, c, []),
          x = w[Pe.Vj];
        if (null != x)
          for (var y = 0; y < x.length; y++)
            if (!T(x[y])) {
              h();
              return;
            }
        var A = Gu(c.Vb, String(f[Pe.xa]), Number(f[Pe.se]), w[Pe.Jk]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var G = Ua() - F;
            jv(c.id, pf[a], "5");
            Hu(c.Vb, A, "success", G);
            Q(24) && st(c, f, Cs.I.aj);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var G = Ua() - F;
            jv(c.id, pf[a], "6");
            Hu(c.Vb, A, "failure", G);
            Q(24) && st(c, f, Cs.I.Zi);
            h();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        jv(c.id, f, "1");
        var D = function () {
          lj(3);
          var G = Ua() - F;
          jv(c.id, f, "7");
          Hu(c.Vb, A, "exception", G);
          Q(24) && st(c, f, Cs.I.Yi);
          B || ((B = !0), h());
        };
        Q(24) && rt(c, f);
        var F = Ua();
        try {
          zf(w, { event: c, index: a, type: 1 });
        } catch (G) {
          D(G);
        }
        Q(24) && st(c, f, Cs.I.bj);
      }
    }
    var f = pf[a],
      g = b.onSuccess,
      h = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = Af(f[Pe.cj], c, []);
    if (n && n.length) {
      var p = n[0],
        q = lv(p.index, { onSuccess: g, onFailure: h, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      h = 2 === p.nj ? m : q;
    }
    if (f[Pe.Ti] || f[Pe.Lk]) {
      var r = f[Pe.Ti] ? qf : c.Mm,
        t = g,
        u = h;
      if (!r[a]) {
        e = Wa(e);
        var v = nv(a, r, e);
        g = v.onSuccess;
        h = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function nv(a, b, c) {
    var d = [],
      e = [];
    b[a] = ov(d, e, c);
    return {
      onSuccess: function () {
        b[a] = pv;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = qv;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function ov(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function pv(a) {
    a();
  }
  function qv(a, b) {
    b();
  }
  var sv = function (a, b) {
      return 1 === arguments.length ? rv("set", a) : rv("set", a, b);
    },
    tv = function (a, b) {
      return 1 === arguments.length ? rv("config", a) : rv("config", a, b);
    },
    uv = function (a, b, c) {
      c = c || {};
      c[N.g.Pb] = a;
      return rv("event", b, c);
    };
  function rv(a) {
    return arguments;
  }
  var vv = function () {
    this.h = [];
    this.C = [];
  };
  vv.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.C.length; f++)
      try {
        this.C[f](e);
      } catch (g) {}
  };
  vv.prototype.listen = function (a) {
    this.C.push(a);
  };
  vv.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  vv.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var xv = function (a, b, c) {
      c.eventMetadata = c.eventMetadata || {};
      c.eventMetadata.source_canonical_id = Uf.Df;
      wv().enqueue(a, b, c);
    },
    zv = function () {
      var a = yv;
      wv().listen(a);
    };
  function wv() {
    var a = pi.mb;
    a || ((a = new vv()), (pi.mb = a));
    return a;
  }
  var Hv = function (a) {
      var b = pi.zones;
      return b
        ? b.getIsAllowedFn(nk(), a)
        : function () {
            return !0;
          };
    },
    bw = function () {
      Vt(sk(), function (a, b) {
        var c = pi.zones;
        return c ? c.isActive(nk(), b) : !0;
      });
    };
  var jw = function (a, b) {
    for (var c = [], d = 0; d < pf.length; d++)
      if (a[d]) {
        var e = pf[d];
        var f = Ju(b.Vb);
        try {
          var g = lv(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var h = e[Pe.xa];
            if (!h) throw "Error: No function name given for function call.";
            var m = rf[h];
            c.push({
              Kj: d,
              Bj: (m ? m.priorityOverride || 0 : 0) || St(e[Pe.xa], 1) || 0,
              execute: g,
            });
          } else hw(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(iw);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  function iw(a, b) {
    var c,
      d = b.Bj,
      e = a.Bj;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Kj,
        h = b.Kj;
      f = g > h ? 1 : g < h ? -1 : 0;
    }
    return f;
  }
  function hw(a, b) {
    if (Mk) {
      var c = function (d) {
        var e = b.isBlocked(pf[d]) ? "3" : "4",
          f = Af(pf[d][Pe.Xi], b, []);
        f && f.length && c(f[0].index);
        jv(b.id, pf[d], e);
        var g = Af(pf[d][Pe.cj], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var mw = !1,
    kw;
  var sw = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (Q(24)) {
    }
    if ("gtm.js" === d) {
      if (mw) return !1;
      mw = !0;
    }
    var e,
      f = !1;
    if (
      Wt().every(function (r) {
        return r(d, b);
      })
    )
      e = Hv(b);
    else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
        return !1;
      f = !0;
      e = Hv(Number.MAX_SAFE_INTEGER);
    }
    Zu(b, d);
    var g = a.eventCallback,
      h = a.eventTimeout,
      m = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: cu(e),
        Mm: [],
        logMacroError: function () {
          M(6);
          lj(0);
        },
        cachedModelValues: ow(),
        checkPixieIncompatibility: pw(b),
        Vb: new Fu(function () {
          if (Q(24)) {
          }
          g && g.apply(g, [].slice.call(arguments, 0));
        }, h),
      };
    Q(97) && (m.originalEventData = ob(a));
    Q(47) && (m.reportMacroDiscrepancy = bv);
    Q(24) && nt(m.id, m.name);
    var n = Lf(m);
    Q(24) && ot(m.id, m.name);
    f && (n = qw(n));
    if (Q(24)) {
    }
    var p = jw(n, m),
      q = !1;
    Ku(m.Vb);
    ("gtm.js" !== d && "gtm.sync" !== d) || Ru(rk());
    return rw(n, p) || q;
  };
  function pw(a) {
    return function (b) {
      qb(b) || fv(a, "input", b);
    };
  }
  function ow() {
    var a = {};
    a.event = Ui("event", 1);
    a.ecommerce = Ui("ecommerce", 1);
    a.gtm = Ui("gtm");
    a.eventModel = Ui("eventModel");
    return a;
  }
  function qw(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(pf[c][Pe.xa]);
        if (ri[d] || void 0 !== pf[c][Pe.Mk] || Ii[d] || St(d, 2)) b[c] = !0;
      }
    return b;
  }
  function rw(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && pf[c] && !si[String(pf[c][Pe.xa])]) return !0;
    return !1;
  }
  var tw = {};
  function uw(a, b, c) {
    Mk && void 0 !== a && ((tw[a] = tw[a] || []), tw[a].push(c + b), Wk(a));
  }
  function vw(a) {
    var b = a.eventId,
      c = a.hc,
      d = "",
      e = tw[b] || [];
    e.length && (d += "&epr=" + e.join("."));
    c && delete tw[b];
    return d;
  }
  var xw = function (a, b) {
      var c = fp(qk(a), !0);
      c && ww.register(c, b);
    },
    yw = function (a, b, c, d) {
      var e = fp(c, d.isGtmEvent);
      e && ww.push("event", [b, a], e, d);
    },
    zw = function (a, b, c, d) {
      var e = fp(c, d.isGtmEvent);
      e && ww.push("get", [a, b], e, d);
    },
    Bw = function (a) {
      var b = fp(qk(a), !0),
        c;
      b ? (c = Aw(ww, b).h) : (c = {});
      return c;
    },
    Cw = function (a, b) {
      var c = fp(qk(a), !0);
      if (c) {
        var d = ww,
          e = ob(b);
        ob(Aw(d, c).h, e);
        Aw(d, c).h = e;
      }
    },
    Dw = function () {
      this.status = 1;
      this.M = {};
      this.h = {};
      this.C = {};
      this.U = null;
      this.H = {};
      this.D = !1;
    },
    Ew = function (a, b, c, d) {
      var e = Ua();
      this.type = a;
      this.D = e;
      this.h = b;
      this.C = c;
      this.messageContext = d;
    },
    Fw = function () {
      this.C = {};
      this.D = {};
      this.h = [];
    },
    Aw = function (a, b) {
      var c = b.da;
      return (a.C[c] = a.C[c] || new Dw());
    },
    Gw = function (a, b, c, d) {
      if (d.h) {
        var e = Aw(a, d.h),
          f = e.U;
        if (f) {
          var g = ob(c),
            h = ob(e.M[d.h.id]),
            m = ob(e.H),
            n = ob(e.h),
            p = ob(a.D),
            q = {};
          if (Mk)
            try {
              q = ob(Mi);
            } catch (v) {
              M(72);
            }
          var r = d.h.prefix,
            t = function (v) {
              uw(d.messageContext.eventId, r, v);
            },
            u = pl(
              ol(
                nl(
                  ml(
                    ll(
                      jl(
                        il(
                          kl(
                            hl(
                              gl(
                                fl(
                                  new el(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                h
                              ),
                              m
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            uw(d.messageContext.eventId, r, "1"),
              uu(d.type, d.h.id, u),
              f(d.h.id, b, d.D, u);
          } catch (v) {
            uw(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  Fw.prototype.register = function (a, b, c) {
    var d = Aw(this, a);
    3 !== d.status &&
      ((d.U = b), (d.status = 3), c && (ob(d.h, c), (d.h = c)), this.flush());
  };
  Fw.prototype.push = function (a, b, c, d) {
    void 0 !== c &&
      (1 === Aw(this, c).status &&
        ((Aw(this, c).status = 2), this.push("require", [{}], c, {})),
      Aw(this, c).D && (d.deferrable = !1));
    this.h.push(new Ew(a, c, b, d));
    d.deferrable || this.flush();
  };
  Fw.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      e = { Wb: e.Wb, Gf: e.Gf };
      var f = this.h[0],
        g = f.h;
      if (f.messageContext.deferrable)
        !g || Aw(this, g).D
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== Aw(this, g).status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            l(f.C[0], function (r, t) {
              ob(ab(r, t), b.D);
            });
            break;
          case "config":
            var h = Aw(this, g);
            e.Wb = {};
            l(
              f.C[0],
              (function (r) {
                return function (t, u) {
                  ob(ab(t, u), r.Wb);
                };
              })(e)
            );
            var m = !!e.Wb[N.g.Rb];
            delete e.Wb[N.g.Rb];
            var n = g.da === g.id;
            m || (n ? (h.H = {}) : (h.M[g.id] = {}));
            (h.D && m) || Gw(this, N.g.qa, e.Wb, f);
            h.D = !0;
            n ? ob(e.Wb, h.H) : (ob(e.Wb, h.M[g.id]), M(70));
            d = !0;
            break;
          case "event":
            e.Gf = {};
            l(
              f.C[0],
              (function (r) {
                return function (t, u) {
                  ob(ab(t, u), r.Gf);
                };
              })(e)
            );
            Gw(this, f.C[1], e.Gf, f);
            break;
          case "get":
            var p = {},
              q = ((p[N.g.eb] = f.C[0]), (p[N.g.ub] = f.C[1]), p);
            Gw(this, N.g.Ka, q, f);
        }
        this.h.shift();
        Hw(this, f);
      }
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var Hw = function (a, b) {
      if ("require" !== b.type)
        if (b.h)
          for (var c = Aw(a, b.h).C[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.C)
            if (a.C.hasOwnProperty(e)) {
              var f = a.C[e];
              if (f && f.C)
                for (var g = f.C[b.type] || [], h = 0; h < g.length; h++)
                  g[h]();
            }
    },
    ww = new Fw();
  var Of;
  var Iw = {},
    Jw = {},
    Kw = function (a, b) {
      for (
        var c = [], d = [], e = {}, f = 0;
        f < a.length;
        e = { Pf: e.Pf, Kf: e.Kf }, f++
      ) {
        var g = a[f];
        if (0 <= g.indexOf("-")) {
          if (((e.Pf = fp(g, b)), e.Pf)) {
            var h = pk();
            Ja(
              h,
              (function (r) {
                return function (t) {
                  return r.Pf.da === t;
                };
              })(e)
            )
              ? c.push(g)
              : d.push(g);
          }
        } else {
          var m = Iw[g] || [];
          e.Kf = {};
          m.forEach(
            (function (r) {
              return function (t) {
                return (r.Kf[t] = !0);
              };
            })(e)
          );
          for (var n = nk(), p = 0; p < n.length; p++)
            if (e.Kf[n[p]]) {
              c = c.concat(pk());
              break;
            }
          var q = Jw[g] || [];
          q.length && (c = c.concat(q));
        }
      }
      return { dm: c, im: d };
    },
    Lw = function (a) {
      l(Iw, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Mw = function (a) {
      l(Jw, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Nw = "HA GF G UA AW DC MC".split(" "),
    Ow = !1,
    Pw = !1;
  function Qw(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Ji() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var Rw = void 0,
    Sw = void 0;
  function Tw(a, b, c) {
    var d = ob(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && M(136);
    var e = ob(b);
    ob(c, e);
    xv(tv(nk()[0], e), a.eventId, d);
  }
  function Uw(a) {
    for (var b = fa([N.g.Ud, N.g.Qb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || ww.D[d];
      if (e) return e;
    }
  }
  var Vw = {
      config: function (a, b) {
        var c = Q(48),
          d = Qw(a, b);
        if (!(2 > a.length) && k(a[1])) {
          var e = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !nb(a[2])) || 3 < a.length) return;
            e = a[2];
          }
          var f = fp(a[1], b.isGtmEvent);
          if (f) {
            var g, h, m;
            a: {
              if (!jk.ke) {
                var n = tk(Ak());
                if (Ek(n)) {
                  var p = n.parent,
                    q = p.isDestination;
                  m = { om: tk(p), bm: q };
                  break a;
                }
              }
              m = void 0;
            }
            var r = m;
            r && ((g = r.om), (h = r.bm));
            Zu(d.eventId, "gtag.config");
            var t = f.da,
              u = f.id !== t;
            if (u ? -1 === pk().indexOf(t) : -1 === nk().indexOf(t)) {
              if (!((c && b.inheritParentConfig) || e[N.g.wb])) {
                var v = Uw(e);
                if (u)
                  ju(t, v, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (c && void 0 !== g && -1 !== g.containers.indexOf(t)) {
                  var w = e;
                  Rw ? Tw(b, w, Rw) : Sw || (Sw = ob(w));
                } else
                  iu(t, v, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (g && (M(128), h && M(130), c && b.inheritParentConfig)) {
                var x;
                var y = e;
                Sw
                  ? (Tw(b, Sw, y), (x = !1))
                  : ((!y[N.g.Rb] && ui && Rw) || (Rw = ob(y)), (x = !0));
                x && g.containers && g.containers.join(",");
                return;
              }
              if (ui && !u && !e[N.g.Rb]) {
                var A = Pw;
                Pw = !0;
                if (A) return;
              }
              Ow || M(43);
              if (!b.noTargetGroup)
                if (u) {
                  Mw(f.id);
                  var B = f.id,
                    D = e[N.g.Rd] || "default";
                  D = String(D).split(",");
                  for (var F = 0; F < D.length; F++) {
                    var G = Jw[D[F]] || [];
                    Jw[D[F]] = G;
                    0 > G.indexOf(B) && G.push(B);
                  }
                } else {
                  Lw(f.id);
                  var H = f.id,
                    O = e[N.g.Rd] || "default";
                  O = O.toString().split(",");
                  for (var R = 0; R < O.length; R++) {
                    var U = Iw[O[R]] || [];
                    Iw[O[R]] = U;
                    0 > U.indexOf(H) && U.push(H);
                  }
                }
              delete e[N.g.Rd];
              var ha = b.eventMetadata || {};
              ha.hasOwnProperty("is_external_event") ||
                (ha.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = ha;
              delete e[N.g.Tc];
              for (var Z = u ? [f.id] : pk(), S = 0; S < Z.length; S++) {
                var ja = e,
                  ma = ob(b),
                  ea = fp(Z[S], ma.isGtmEvent);
                ea && ww.push("config", [ja], ea, ma);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          M(39);
          var c = Qw(a, b),
            d = a[1];
          "default" === d
            ? Wj(a[2])
            : "update" === d
            ? Xj(a[2], c)
            : "declare" === d
            ? b.fromContainerExecution && Vj(a[2])
            : Q(94) && "core_platform_services" === d && Yj(a[2]);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && k(c)) {
          var d;
          if (2 < a.length) {
            if ((!nb(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = ob(e)),
            e[N.g.Tc] && (g.eventCallback = e[N.g.Tc]),
            e[N.g.Md] && (g.eventTimeout = e[N.g.Md]));
          var h = Qw(a, b),
            m = h.eventId,
            n = h.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[N.g.Pb];
          void 0 === r &&
            ((r = Pi(N.g.Pb, 2)), void 0 === r && (r = "default"));
          if (k(r) || Ha(r)) {
            var t;
            b.isGtmEvent
              ? (t = k(r) ? [r] : r)
              : (t = r.toString().replace(/\s+/g, "").split(","));
            var u = Kw(t, b.isGtmEvent),
              v = u.dm,
              w = u.im;
            if (w.length)
              for (var x = Uw(q), y = 0; y < w.length; y++) {
                var A = fp(w[y], b.isGtmEvent);
                A &&
                  ju(A.da, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = hp(v, b.isGtmEvent);
          } else p = void 0;
          var B = p;
          if (B) {
            Zu(m, c);
            for (var D = [], F = 0; F < B.length; F++) {
              var G = B[F],
                H = ob(b);
              if (-1 !== Nw.indexOf(uk(G.prefix))) {
                var O = ob(d),
                  R = H.eventMetadata || {};
                R.hasOwnProperty("is_external_event") ||
                  (R.is_external_event = !H.fromContainerExecution);
                H.eventMetadata = R;
                delete O[N.g.Tc];
                yw(c, O, G.id, H);
              }
              D.push(G.id);
            }
            g.eventModel = g.eventModel || {};
            0 < B.length
              ? (g.eventModel[N.g.Pb] = D.join())
              : delete g.eventModel[N.g.Pb];
            Ow || M(43);
            void 0 === b.noGtmEvent &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[N.g.Mb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        M(53);
        if (4 === a.length && k(a[1]) && k(a[2]) && Ea(a[3])) {
          var c = fp(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Ow || M(43);
            var f = Uw();
            if (
              !Ja(pk(), function (h) {
                return c.da === h;
              })
            )
              ju(c.da, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== Nw.indexOf(uk(c.prefix))) {
              Qw(a, b);
              var g = {};
              Sj(ob(((g[N.g.eb] = d), (g[N.g.ub] = e), g)));
              zw(
                d,
                function (h) {
                  E(function () {
                    return e(h);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Ow = !0;
          var c = Qw(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (3 === a.length && k(a[1]) && Ea(a[2])) {
          Pf(a[1], a[2]);
          if ((M(74), "all" === a[1])) {
            M(75);
            var b = !1;
            try {
              b = a[2](rk(), "unknown", {});
            } catch (c) {}
            b || M(76);
          }
        } else {
          M(73);
        }
      },
      set: function (a, b) {
        var c;
        2 == a.length && nb(a[1])
          ? (c = ob(a[1]))
          : 3 == a.length &&
            k(a[1]) &&
            ((c = {}),
            nb(a[2]) || Ha(a[2]) ? (c[a[1]] = ob(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = Qw(a, b),
            e = d.eventId,
            f = d.priorityId;
          ob(c);
          var g = ob(c);
          ww.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          Q(13) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    Ww = { policy: !0 };
  var Xw = function (a) {
      var b = z[oi.fa].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    Yw = function (a) {
      var b = z[oi.fa],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var Zw = !1,
    $w = [];
  function ax() {
    if (!Zw) {
      Zw = !0;
      for (var a = 0; a < $w.length; a++) E($w[a]);
    }
  }
  var bx = function (a) {
    Zw ? E(a) : $w.push(a);
  };
  var sx = function (a) {
    if (rx(a)) return a;
    this.h = a;
  };
  sx.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var rx = function (a) {
    return !a || "object" !== lb(a) || nb(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  sx.prototype.getUntrustedMessageValue = sx.prototype.getUntrustedMessageValue;
  var tx = 0,
    ux = {},
    vx = [],
    wx = [],
    xx = !1,
    yx = !1;
  function zx(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var Ax = function (a) {
      return z[oi.fa].push(a);
    },
    Bx = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return Ax(a);
    },
    Cx = function (a, b) {
      if (!Ga(b) || 0 > b) b = 0;
      var c = pi[oi.fa],
        d = 0,
        e = !1,
        f = void 0;
      f = z.setTimeout(function () {
        e || ((e = !0), a());
        f = void 0;
      }, b);
      return function () {
        var g = c ? c.subscribers : 1;
        ++d === g &&
          (f && (z.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
      };
    };
  function Dx(a, b) {
    var c = a._clear || b.overwriteModelFields;
    l(a, function (e, f) {
      "_clear" !== e && (c && Si(e), Si(e, f));
    });
    Ei || (Ei = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = Ji()), (a["gtm.uniqueEventId"] = d), Si("gtm.uniqueEventId", d));
    return sw(a);
  }
  function Ex(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Na(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function Fx() {
    var a;
    if (wx.length) a = wx.shift();
    else if (vx.length) a = vx.shift();
    else return;
    var b;
    var c = a;
    if (xx || !Ex(c.message)) b = c;
    else {
      xx = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ji());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        h = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      vx.unshift(h, c);
      if (Mk) {
        var m = Uf.ctid;
        if (m) {
          var n,
            p = tk(Ak());
          n = p && p.context;
          var q,
            r = En(z.location.href);
          q = r.hostname + r.pathname;
          var t = n && n.fromContainerExecution,
            u = n && n.source,
            v = Uf.Df,
            w = jk.ke;
          Mk &&
            (ku || (ku = q),
            lu.push(
              m +
                ";" +
                v +
                ";" +
                (t ? 1 : 0) +
                ";" +
                (u || 0) +
                ";" +
                (w ? 1 : 0)
            ));
        }
      }
      b = f;
    }
    return b;
  }
  function Gx() {
    for (var a = !1, b; !yx && (b = Fx()); ) {
      yx = !0;
      delete Mi.eventModel;
      Oi();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) yx = !1;
      else {
        e.fromContainerExecution && Ti();
        try {
          if (Ea(d))
            try {
              d.call(Qi);
            } catch (x) {}
          else if (Ha(d)) {
            var f = d;
            if (k(f[0])) {
              var g = f[0].split("."),
                h = g.pop(),
                m = f.slice(1),
                n = Pi(g.join("."), 2);
              if (null != n)
                try {
                  n[h].apply(n, m);
                } catch (x) {}
            }
          } else {
            var p = void 0,
              q = !1;
            if (Na(d)) {
              a: {
                if (d.length && k(d[0])) {
                  var r = Vw[d[0]];
                  if (r && (!e.fromContainerExecution || !Ww[d[0]])) {
                    p = r(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
              (q = p && "set" === d[0] && !!p.event) && M(101);
            } else p = d;
            if (p) {
              var t = Dx(p, e);
              a = t || a;
              q && t && M(113);
            }
          }
        } finally {
          e.fromContainerExecution && Oi(!0);
          var u = d["gtm.uniqueEventId"];
          if ("number" === typeof u) {
            for (var v = ux[String(u)] || [], w = 0; w < v.length; w++)
              wx.push(Hx(v[w]));
            v.length && wx.sort(zx);
            delete ux[String(u)];
            u > tx && (tx = u);
          }
          yx = !1;
        }
      }
    }
    return !a;
  }
  function Ix() {
    if (Q(24)) {
      var a = Jx();
    }
    var b = Gx();
    if (Q(24)) {
    }
    try {
      Xw(rk());
    } catch (c) {}
    return b;
  }
  function yv(a) {
    if (tx < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      ux[b] = ux[b] || [];
      ux[b].push(a);
    } else
      wx.push(Hx(a)),
        wx.sort(zx),
        E(function () {
          yx || Gx();
        });
  }
  function Hx(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Kx = function () {
      function a(f) {
        var g = {};
        if (rx(f)) {
          var h = f;
          f = rx(h) ? h.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = Gc(oi.fa, []),
        c = (pi[oi.fa] = pi[oi.fa] || {});
      !0 === c.pruned && M(83);
      ux = wv().get();
      zv();
      Bu(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      bx(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < pi.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new sx(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var h = f.map(function (q) {
          return a(q);
        });
        vx.push.apply(vx, h);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (M(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = "boolean" !== typeof m || m;
        return Gx() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      vx.push.apply(vx, e);
      if (Jx()) {
        if (Q(24)) {
        }
        E(Ix);
      }
    },
    Jx = function () {
      var a = !0;
      return a;
    };
  function Lx(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ua();
    return b < c + 3e5 && b > c - 9e5;
  }
  function Mx(a) {
    return a && 0 === a.indexOf("pending:") ? Lx(a.substr(8)) : !1;
  }
  var gy = function () {};
  var hy = function () {};
  hy.prototype.toString = function () {
    return "undefined";
  };
  var iy = new hy();
  var ky = function () {
      (pi.rm = pi.rm || {})[sk()] = function (a) {
        if (jy.hasOwnProperty(a)) return jy[a];
      };
    },
    ny = function (a, b, c) {
      if (a instanceof ly) {
        var d = a,
          e = d.h,
          f = b,
          g = Ji();
        my[g] = [f, c];
        a = e.call(d, g);
        b = Da;
      }
      return { sj: a, onSuccess: b };
    },
    oy = function (a) {
      var b = a ? 0 : 1;
      return function (c) {
        M(a ? 134 : 135);
        var d = my[c];
        if (d && "function" === typeof d[b]) d[b]();
        my[c] = void 0;
      };
    },
    ly = function (a) {
      this.h = function (b) {
        for (var c = [], d = 0; d < a.length; d++)
          c.push(a[d] === iy ? b : a[d]);
        return c.join("");
      };
    };
  ly.prototype.toString = function () {
    return this.h("undefined");
  };
  ly.prototype.valueOf = ly.prototype.toString;
  var jy = {},
    my = {};
  var py = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": Wc(a, "className"),
        "gtm.elementId": a["for"] || Rc(a, "id") || "",
        "gtm.elementTarget": a.formTarget || Wc(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        Wc(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    },
    qy = function (a) {
      pi.hasOwnProperty("autoEventsSettings") || (pi.autoEventsSettings = {});
      var b = pi.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    ry = function (a, b, c) {
      qy(a)[b] = c;
    },
    sy = function (a, b, c, d) {
      var e = qy(a),
        f = Va(e, b, d);
      e[b] = c(f);
    },
    ty = function (a, b, c) {
      var d = qy(a);
      return Va(d, b, c);
    },
    uy = function (a, b) {
      ty(a, "init", !1) || (ry(a, "init", !0), b());
    },
    vy = function (a) {
      return "string" === typeof a ? a : String(Ji());
    };
  var Qy = z.clearTimeout,
    Ry = z.setTimeout,
    Sy = function (a, b, c, d) {
      if (cn()) {
        b && E(b);
      } else return Lc(a, b, c, d);
    },
    Ty = function () {
      return new Date();
    },
    Uy = function () {
      return z.location.href;
    },
    Vy = function (a) {
      return Cn(En(a), "fragment");
    },
    Wy = function (a) {
      return Dn(En(a));
    },
    Xy = function (a, b) {
      return Pi(a, b || 2);
    },
    Yy = function (a, b, c) {
      return b ? Bx(a, b, c) : Ax(a);
    },
    Zy = function (a, b) {
      z[a] = b;
    },
    W = function (a, b, c) {
      b && (void 0 === z[a] || (c && !z[a])) && (z[a] = b);
      return z[a];
    },
    $y = function (a, b, c) {
      return Bm(a, b, void 0 === c ? !0 : !!c);
    },
    az = function (a, b, c) {
      return 0 === Km(a, b, c);
    },
    bz = function (a, b) {
      if (cn()) {
        b && E(b);
      } else Nc(a, b);
    },
    cz = function (a) {
      return !!ty(a, "init", !1);
    },
    dz = function (a) {
      ry(a, "init", !0);
    },
    ez = function (a, b, c) {
      qb(a) || fv(c, b, a);
    };

  function Bz(a, b) {
    function c(g) {
      var h = En(g),
        m = Cn(h, "protocol"),
        n = Cn(h, "host", !0),
        p = Cn(h, "port"),
        q = Cn(h, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === p) ||
        ("https" === m && "443" === p)
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Cz(a) {
    return Dz(a) ? 1 : 0;
  }
  function Dz(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = ob(a, {});
        ob({ arg1: c[d], any_of: void 0 }, e);
        if (Cz(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return ug(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < qg.length; g++) {
                var h = qg[g];
                if (b[h]) {
                  f = b[h](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return rg(b, c);
      case "_eq":
        return vg(b, c);
      case "_ge":
        return wg(b, c);
      case "_gt":
        return yg(b, c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return xg(b, c);
      case "_lt":
        return zg(b, c);
      case "_re":
        return tg(b, c, a.ignore_case);
      case "_sw":
        return Ag(b, c);
      case "_um":
        return Bz(b, c);
    }
    return !1;
  }
  function Ez() {
    var a = [
      "&cv=26",
      "&rv=" + oi.Ug,
      "&tc=" +
        pf.filter(function (b) {
          return b;
        }).length,
    ];
    oi.pe && a.push("&x=" + oi.pe);
    return a.join("");
  }
  var Fz = function () {
      return !1;
    },
    Gz = function () {
      var a = {};
      return function (b, c, d) {};
    };
  function Hz() {
    var a = Iz;
    return function (b, c, d) {
      var e = d && d.event;
      Jz(c);
      var f = 0 === b.indexOf("__cvt_") ? void 0 : 1,
        g = new tb();
      l(c, function (r, t) {
        var u = nd(t, void 0, f);
        void 0 === u && void 0 !== t && M(44);
        g.set(r, u);
      });
      a.h.h.H = If();
      var h = {
        ij: Yf(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        Af:
          void 0 !== e
            ? function (r) {
                return e.Vb.Af(r);
              }
            : void 0,
        gd: function () {
          return b;
        },
        log: function () {},
        nl: { index: d && d.index, type: d && d.type, name: d && d.name },
        Dm: !!St(b, 3),
      };
      Q(93) &&
        e &&
        e.cachedModelValues &&
        (h.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      Q(97) &&
        (h.originalEventData = void 0 !== e ? e.originalEventData : void 0);
      if (Fz()) {
        var m = Gz(),
          n = void 0,
          p = void 0;
        h.Xa = {
          Nh: [],
          te: {},
          ib: function (r, t, u) {
            1 === t && (n = r);
            7 === t && (p = u);
            m(r, t, u);
          },
          yh: ph(),
        };
        h.log = function (r, t) {
          if (n) {
            var u = Array.prototype.slice.call(arguments, 1);
            m(n, 4, { level: r, source: p, message: u });
          }
        };
      }
      var q = Le(a, h, [b, g]);
      a.h.h.H = void 0;
      q instanceof xa && "return" === q.h && (q = q.C);
      return od(q, void 0, f);
    };
  }
  function Jz(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Ea(b) &&
      (a.gtmOnSuccess = function () {
        E(b);
      });
    Ea(c) &&
      (a.gtmOnFailure = function () {
        E(c);
      });
  }
  function Kz(a, b) {
    var c = this;
  }
  Kz.N = "addConsentListener";
  var Lz;
  var Mz = function (a) {
    for (var b = 0; b < a.length; ++b)
      if (Lz)
        try {
          a[b]();
        } catch (c) {
          M(77);
        }
      else a[b]();
  };
  function Nz(a, b, c) {
    var d = this,
      e;
    return e;
  }
  Nz.F = "internal.addDataLayerEventListener";
  function Oz(a, b, c) {}
  Oz.N = "addDocumentEventListener";
  function Pz(a, b, c, d) {}
  Pz.N = "addElementEventListener";
  function Qz(a) {}
  Qz.N = "addEventCallback";
  function Uz(a) {}
  Uz.F = "internal.addFormAbandonmentListener";
  function Vz(a, b, c, d) {}
  Vz.F = "internal.addFormData";
  var Wz = {},
    Xz = [],
    Yz = {},
    Zz = 0,
    $z = 0;
  function gA(a, b) {}
  gA.F = "internal.addFormInteractionListener";
  function nA(a, b) {}
  nA.F = "internal.addFormSubmitListener";
  function sA(a) {}
  sA.F = "internal.addGaSendListener";
  var tA = function (a, b) {
    this.tagId = a;
    this.ve = b;
  };
  function uA(a, b, c) {
    var d = this;
    var e = Q(96);
    e
      ? K(J(this), ["tagId:!string", "options:?PixieMap"], arguments)
      : K(
          J(this),
          ["tagId:!string", "firstPartyUrl:?string", "onLoad:?Fn"],
          arguments
        );
    var f = od(b, this.h, 1) || {},
      g = e ? f.firstPartyUrl : b,
      h = e ? f.onLoad : od(c, this.h, 1),
      m = e && !0 === f.loadByDestination,
      n = e && !0 === f.isGtmEvent,
      p = e && !0 === f.siloed;
    Mz([
      function () {
        return L(d, "load_google_tags", a, g);
      },
    ]);
    if (m) {
      if (zk(a)) return;
    } else if (yk(a)) return;
    var q = { source: n ? 7 : 6, fromContainerExecution: !0, siloed: p };
    if (m)
      ju(a, g, q, function (t) {
        h && h(new tA(a, t));
      });
    else {
      var r = 0 === a.indexOf("GTM-");
      iu(a, g, !r, q, function (t) {
        h && h(new tA(a, t));
      });
    }
    if (e) return p ? mk(a) : a;
  }
  uA.F = "internal.loadGoogleTag";
  function vA(a, b, c) {}
  vA.F = "internal.addGoogleTagRestriction";
  var wA = {},
    xA = [];
  var EA = function (a, b) {};
  EA.F = "internal.addHistoryChangeListener";
  function FA(a, b, c) {}
  FA.N = "addWindowEventListener";
  function GA(a, b) {
    return !0;
  }
  GA.N = "aliasInWindow";
  function HA(a, b, c) {}
  HA.F = "internal.appendRemoteConfigParameter";
  function IA() {
    var a = 2;
    return a;
  }
  function JA(a, b) {
    var c;
    return c;
  }
  JA.N = "callInWindow";
  function KA(a) {}
  KA.N = "callLater";
  function LA(a) {}
  LA.F = "callOnDomReady";
  function MA(a) {}
  MA.F = "callOnWindowLoad";
  function NA(a, b) {
    var c;
    return c;
  }
  NA.F = "internal.computeGtmParameter";
  function OA(a, b) {
    var c;
    var d = nd(c, this.h, IA());
    void 0 === d && void 0 !== c && M(45);
    return d;
  }
  OA.N = "copyFromDataLayer";
  function PA(a) {
    var b = void 0;
    return b;
  }
  PA.F = "internal.copyFromDataLayerCache";
  function QA(a) {
    var b;
    return b;
  }
  QA.N = "copyFromWindow";
  function RA(a) {
    var b = void 0;
    return nd(b, this.h, IA());
  }
  RA.F = "internal.copyKeyFromWindow";
  function SA(a, b) {
    var c;
    return c;
  }
  SA.F = "internal.copyPreHit";
  function TA(a, b) {
    var c = null,
      d = IA();
    K(J(this), ["functionPath:!string", "arrayPath:!string"], arguments);
    L(this, "access_globals", "readwrite", a);
    L(this, "access_globals", "readwrite", b);
    var e = [z, C],
      f = a.split("."),
      g = $a(f, e),
      h = f[f.length - 1];
    if (void 0 === g) throw Error("Path " + a + " does not exist.");
    var m = g[h];
    if (m && !Ea(m)) return null;
    if (m) return nd(m, this.h, d);
    var n;
    m = function () {
      if (!Ea(n.push))
        throw Error("Object at " + b + " in window is not an array.");
      n.push.call(n, arguments);
    };
    g[h] = m;
    var p = b.split("."),
      q = $a(p, e),
      r = p[p.length - 1];
    if (void 0 === q) throw Error("Path " + p + " does not exist.");
    n = q[r];
    void 0 === n && ((n = []), (q[r] = n));
    c = function () {
      m.apply(m, Array.prototype.slice.call(arguments, 0));
    };
    return nd(c, this.h, d);
  }
  TA.N = "createArgumentsQueue";
  function UA(a) {
    var b;
    return nd(b, this.h, 1);
  }
  UA.F = "internal.createGaCommandQueue";
  function VA(a) {
    var b;
    return nd(b, this.h, IA());
  }
  VA.N = "createQueue";
  function WA(a, b) {
    var c = null;
    return c;
  }
  WA.F = "internal.createRegex";
  function XA(a) {
    if (!a) return {};
    var b = a.nl;
    return Du(b.type, b.index, b.name);
  }
  function YA(a) {
    return a ? { originatingEntity: XA(a) } : {};
  }
  function ZA(a) {}
  ZA.F = "internal.declareConsentState";
  function $A(a) {
    var b = "";
    return b;
  }
  $A.F = "internal.decodeUrlHtmlEntities";
  function aB(a) {
    var b;
    L(this, "detect_user_provided_data", "auto");
    var c = od(a) || {},
      d = $q({
        ld: !!c.includeSelector,
        md: !!c.includeVisibility,
        ze: c.excludeElementSelectors,
        hb: c.fieldFilters,
        Lh: !!c.selectMultipleElements,
      });
    b = new tb();
    var e = new sb();
    b.set("elements", e);
    for (var f = d.elements, g = 0; g < f.length; g++) e.push(bB(f[g]));
    void 0 !== d.Dh && b.set("preferredEmailElement", bB(d.Dh));
    b.set("status", d.status);
    return b;
  }
  var bB = function (a) {
    var b = new tb();
    b.set("userData", a.X);
    b.set("tagName", a.tagName);
    void 0 !== a.querySelector && b.set("querySelector", a.querySelector);
    void 0 !== a.isVisible && b.set("isVisible", a.isVisible);
    if (Q(45)) {
    } else
      switch (a.type) {
        case "1":
          b.set("type", "email");
      }
    return b;
  };
  aB.F = "internal.detectUserProvidedData";
  function eB(a, b) {
    return b;
  }
  eB.F = "internal.enableAutoEventOnClick";
  function jB(a, b) {
    return b;
  }
  jB.F = "internal.enableAutoEventOnElementVisibility";
  function kB() {}
  kB.F = "internal.enableAutoEventOnError";
  var lB = {},
    mB = [],
    nB = {},
    oB = 0,
    pB = 0;
  function vB(a, b) {
    var c = this;
    return b;
  }
  vB.F = "internal.enableAutoEventOnFormInteraction";
  function AB(a, b) {
    var c = this;
    return b;
  }
  AB.F = "internal.enableAutoEventOnFormSubmit";
  function FB() {
    var a = this;
  }
  FB.F = "internal.enableAutoEventOnGaSend";
  var GB = {},
    HB = [];
  function OB(a, b) {
    var c = this;
    return b;
  }
  OB.F = "internal.enableAutoEventOnHistoryChange";
  function SB(a, b) {
    var c = this;
    return b;
  }
  SB.F = "internal.enableAutoEventOnLinkClick";
  var TB, UB;
  function cC(a, b) {
    var c = this;
    return b;
  }
  cC.F = "internal.enableAutoEventOnScroll";
  function dC(a) {
    return function () {
      if (a.Ac && a.Cc >= a.Ac) a.yc && z.clearInterval(a.yc);
      else {
        a.Cc++;
        var b = Ua();
        Ax({
          event: a.eventName,
          "gtm.timerId": a.yc,
          "gtm.timerEventNumber": a.Cc,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.Ac,
          "gtm.timerStartTime": a.Ve,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.Ve,
          "gtm.triggers": a.Ph,
        });
      }
    };
  }
  function eC(a, b) {
    return b;
  }
  eC.F = "internal.enableAutoEventOnTimer";
  var pc = ca(["data-gtm-yt-inspected-"]),
    fC = ["www.youtube.com", "www.youtube-nocookie.com"],
    gC,
    hC = !1;
  function rC(a, b) {
    var c = this;
    return b;
  }
  rC.F = "internal.enableAutoEventOnYouTubeActivity";
  var sC;
  function tC(a) {
    var b = !1;
    return b;
  }
  tC.F = "internal.evaluateMatchingRules";
  var uC = function (a, b) {
      var c;
      c = b
        ? [
            rs,
            ss,
            us,
            es,
            is,
            xs,
            js,
            vs,
            ws,
            ps,
            fs,
            Bs,
            ks,
            ts,
            cs,
            bs,
            ys,
            Zr,
          ]
        : [$p, ds, Ur, gs, Vr, Wr, Xr, Yr, ls, ms, os, qs, hs, ns, zs, As];
      for (var d = 0; d < c.length && (c[d](a), !a.isAborted); d++);
    },
    vC = function (a, b, c, d) {
      var e = new yp(b, c, d);
      e.metadata.hit_type = a;
      e.metadata.speculative = !0;
      e.metadata.event_start_timestamp_ms = Ua();
      e.metadata.speculative_in_message = d.eventMetadata.speculative;
      return e;
    },
    wC = function (a, b, c, d) {
      function e() {
        for (var r = 0; r < g.length; r++) {
          var t = g[r];
          t.isAborted ||
            (uC(g[r], !0), t.metadata.speculative || t.isAborted || Lt(t));
        }
      }
      var f = fp(a, d.isGtmEvent);
      if (f) {
        var g = [];
        if (d.eventMetadata.hit_type_override) {
          var h = d.eventMetadata.hit_type_override;
          Array.isArray(h) || (h = [h]);
          for (var m = 0; m < h.length; m++) {
            var n = vC(h[m], f, b, d);
            n.metadata.speculative = !1;
            g.push(n);
          }
        } else
          b === N.g.qa && g.push(vC("landing_page", f, b, d)),
            g.push(vC("conversion", f, b, d)),
            g.push(vC("user_data_lead", f, b, d)),
            g.push(vC("user_data_web", f, b, d)),
            g.push(vC("remarketing", f, b, d));
        for (var p = 0; p < g.length; p++) uC(g[p], !1);
        var q = [N.g.J];
        Q(68) && q.push(N.g.P);
        ck(function () {
          for (var r = [], t = [], u = 0; u < g.length; u++) {
            var v = g[u];
            r.push(v.isAborted);
            t.push(v.metadata.speculative);
          }
          e();
          T(q) ||
            bk(function (w) {
              var x = w.consentEventId,
                y = w.consentPriorityId;
              if (T(q)) {
                for (var A = 0; A < g.length; A++) {
                  var B = g[A];
                  B.metadata.consent_updated = !0;
                  B.metadata.speculative = t[A];
                  B.metadata.event_start_timestamp_ms = Ua();
                  B.isAborted = r[A];
                  B.metadata.consent_event_id = x;
                  B.metadata.consent_priority_id = y;
                }
                e();
              }
            }, q);
        }, q);
      }
    };
  var XC = function () {
      var a = !0;
      (gm(7) && gm(9) && gm(10)) || (a = !1);
      return a;
    },
    YC = function () {
      var a = !0;
      (gm(3) && gm(4)) || (a = !1);
      return a;
    };
  function TD(a, b, c, d) {}
  TD.F = "internal.executeEventProcessor";
  function UD(a) {
    var b = void 0;
    return nd(b, this.h, 1);
  }
  UD.F = "internal.executeJavascriptString";
  var VD = function (a) {
    var b;
    return b;
  };
  function WD() {
    var a = new tb();
    return a;
  }
  WD.N = "getContainerVersion";
  function XD(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  XD.N = "getCookieValues";
  function YD() {
    return nj();
  }
  YD.F = "internal.getCountryCode";
  function ZD() {
    var a = [];
    return nd(a);
  }
  ZD.F = "internal.getDestinationIds";
  function $D(a, b) {
    var c = "";
    return c;
  }
  $D.F = "internal.getElementAttribute";
  function aE(a) {
    var b = null;
    return b;
  }
  aE.F = "internal.getElementById";
  function bE(a) {
    var b = "";
    return b;
  }
  bE.F = "internal.getElementInnerText";
  function cE(a, b) {
    var c = null;
    return c;
  }
  cE.F = "internal.getElementProperty";
  function dE(a) {
    var b;
    return b;
  }
  dE.F = "internal.getElementValue";
  function eE(a) {
    var b = 0;
    return b;
  }
  eE.F = "internal.getElementVisibilityRatio";
  function fE(a) {
    var b = null;
    return b;
  }
  fE.F = "internal.getElementsByCssSelector";
  function gE(a) {
    var b = void 0;
    return b;
  }
  gE.F = "internal.getEventData";
  var hE = {};
  hE.deferGaGamLink = Q(55);
  hE.enableAddGoogleTagRestrictionApi = Q(34);
  hE.enableAdsConversionValidation = Q(31);
  hE.enableAdsHistoryChangeEvents = Q(14);
  hE.enableAutoPiiOnPhoneAndAddress = Q(45);
  hE.enableCcdPreAutoPiiDetection = Q(17);
  hE.enableCloudRecommentationsErrorLogging = Q(102);
  hE.enableCloudRecommentationsSchemaIngestion = Q(101);
  hE.enableCloudRetailInjectPurchaseMetadata = Q(100);
  hE.enableCloudRetailLogging = Q(99);
  hE.enableCloudRetailPageCategories = Q(25);
  hE.enableConsentDisclosureActivity = Q(50);
  hE.enableDecodeUri = Q(78);
  hE.enableDeferAllEnhancedMeasurement = Q(52);
  hE.enableDirectTagLoadingInGoogleTag = Q(91);
  hE.enableDmaConsentActivities = Q(110);
  hE.enableEuidAutoMode = Q(15);
  hE.enableFormSkipValidation = Q(46);
  hE.enableGetElementAttribute = Q(60);
  hE.enableGetElementInnerText = Q(65);
  hE.enableLoadGoogleTagOptionsObject = Q(49);
  hE.enableUrlDecodeEventUsage = Q(67);
  hE.enableV1HistoryEventInApi = Q(109);
  hE.useEnableAutoEventOnFormApis = Q(34);
  hE.autoPiiEligible = rj();
  function iE() {
    return nd(hE);
  }
  iE.F = "internal.getFlags";
  function jE() {
    return new kd(iy);
  }
  jE.F = "internal.getHtmlId";
  function kE(a, b) {
    var c;
    return c;
  }
  kE.F = "internal.getProductSettingsParameter";
  function lE(a, b) {
    var c;
    return c;
  }
  lE.N = "getQueryParameters";
  function mE(a, b) {
    var c;
    return c;
  }
  mE.N = "getReferrerQueryParameters";
  function nE(a) {
    var b = "";
    return b;
  }
  nE.N = "getReferrerUrl";
  function oE() {
    return oj();
  }
  oE.F = "internal.getRegionCode";
  function pE(a, b) {
    var c;
    return c;
  }
  pE.F = "internal.getRemoteConfigParameter";
  function qE(a) {
    var b = "";
    return b;
  }
  qE.N = "getUrl";
  function rE() {
    L(this, "get_user_agent");
    return Ec.userAgent;
  }
  rE.N = "getUserAgent";
  function CE() {
    return (z.gaGlobal = z.gaGlobal || {});
  }
  var DE = function () {
      var a = CE();
      a.hid = a.hid || Ka();
      return a.hid;
    },
    EE = function (a, b) {
      var c = CE();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var zF = window,
    AF = document,
    BF = function (a) {
      var b = zF._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        AF.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && !0 === zF["ga-disable-" + a])
      )
        return !0;
      try {
        var c = zF.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = xm("AMP_TOKEN", String(AF.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return AF.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function KF(a) {
    l(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[N.g.Va] || {};
    l(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var SF = function (a, b) {};
  function RF(a, b) {
    var c = function () {};
    return c;
  }
  function TF(a, b, c) {}
  var UF = RF;
  function WF(a, b, c) {
    var d = this;
    K(
      J(this),
      ["tagId:!string", "configuration:?PixieMap", "messageContext:?PixieMap"],
      arguments
    );
    var e = b ? od(b) : {};
    Mz([
      function () {
        return L(d, "configure_google_tags", a, e);
      },
    ]);
    var f = c ? od(c) : {},
      g = this.h.h;
    f.originatingEntity = XA(g);
    xv(tv(a, e), g.eventId, f);
  }
  WF.F = "internal.gtagConfig";
  function XF() {
    var a = {};
    return a;
  }
  function ZF(a, b) {}
  ZF.N = "gtagSet";
  function $F(a, b) {}
  $F.N = "injectHiddenIframe";
  function aG(a, b, c, d, e) {}
  function cG(a, b, c, d) {
    return function () {
      try {
        if (0 < b.length) {
          var e = b.shift(),
            f = cG(a, b, c, d);
          if (
            "SCRIPT" == String(e.nodeName).toUpperCase() &&
            "text/gtmscript" == e.type
          ) {
            var g = e.text || e.textContent || e.innerHTML || "",
              h = e.getAttribute("data-gtmsrc"),
              m = e.charset || "";
            if (h) Lc(h, f, d, { async: !1, id: e.id, text: g, charset: m }, a);
            else {
              var n = C.createElement("script");
              n.async = !1;
              n.type = "text/javascript";
              n.id = e.id;
              n.text = g;
              n.charset = m;
              Hc(n, f);
              a.insertBefore(n, null);
            }
            h || f();
          } else if (
            e.innerHTML &&
            0 <= e.innerHTML.toLowerCase().indexOf("<script")
          ) {
            for (var p = []; e.firstChild; )
              p.push(e.removeChild(e.firstChild));
            a.insertBefore(e, null);
            cG(e, p, f, d)();
          } else a.insertBefore(e, null), f();
        } else c();
      } catch (q) {
        d();
      }
    };
  }
  aG.F = "internal.injectHtml";
  var dG = {};
  function fG(a, b, c, d) {}
  var gG = Object.freeze({ dl: 1, id: 1 }),
    hG = {};
  function iG(a, b, c, d) {}
  fG.N = "injectScript";
  iG.F = "internal.injectScript";
  function jG(a) {
    var b = !0;
    return b;
  }
  jG.N = "isConsentGranted";
  var kG = function () {
    var a = kh(function (b) {
      this.h.h.log("error", b);
    });
    a.N = "JSON";
    return a;
  };
  function lG(a) {
    var b = void 0;
    return nd(b);
  }
  lG.F = "internal.legacyParseUrl";
  var mG = function () {
      return !1;
    },
    nG = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {},
    };
  function oG() {
    try {
      L(this, "logging");
    } catch (c) {
      return;
    }
    if (!console) return;
    for (
      var a = Array.prototype.slice.call(arguments, 0), b = 0;
      b < a.length;
      b++
    )
      a[b] = od(a[b], this.h);
    console.log.apply(console, a);
  }
  oG.N = "logToConsole";
  function pG(a, b) {}
  pG.F = "internal.mergeRemoteConfig";
  function qG(a, b, c) {
    c = void 0 === c ? !0 : c;
    var d = [];
    return d;
  }
  qG.F = "internal.parseCookieValuesFromString";
  function rG(a) {
    var b = void 0;
    return b;
  }
  rG.N = "parseUrl";
  function sG(a) {}
  sG.F = "internal.processAsNewEvent";
  function tG(a, b, c) {
    var d;
    return d;
  }
  tG.F = "internal.pushToDataLayer";
  function uG(a, b) {
    var c = !1;
    return c;
  }
  uG.N = "queryPermission";
  function vG() {
    var a = "";
    return a;
  }
  vG.N = "readCharacterSet";
  function wG() {
    return oi.fa;
  }
  wG.F = "internal.readDataLayerName";
  function xG() {
    var a = "";
    return a;
  }
  xG.N = "readTitle";
  function yG(a, b) {
    var c = this;
  }
  yG.F = "internal.registerCcdCallback";
  function zG(a) {
    return !0;
  }
  zG.F = "internal.registerDestination";
  var AG = Object.freeze(["config", "event", "get", "set"]);
  function BG(a, b, c) {}
  BG.F = "internal.registerGtagCommandListener";
  function CG(a, b) {
    var c = !1;
    return c;
  }
  CG.F = "internal.removeDataLayerEventListener";
  function DG(a, b) {}
  DG.F = "internal.removeFormData";
  function EG() {}
  EG.N = "resetDataLayer";
  function FG(a, b, c, d) {}
  FG.F = "internal.sendGtagEvent";
  function GG(a, b, c) {}
  GG.N = "sendPixel";
  function HG(a, b) {}
  HG.F = "internal.setAnchorHref";
  function IG(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  IG.N = "setCookie";
  function JG(a, b) {}
  JG.F = "internal.setCorePlatformServices";
  function KG(a) {}
  KG.N = "setDefaultConsentState";
  function LG(a, b) {}
  LG.F = "internal.setDelegatedConsentType";
  function MG(a, b) {}
  MG.F = "internal.setFormAction";
  function NG(a, b, c) {
    return !1;
  }
  NG.N = "setInWindow";
  function OG(a, b, c) {}
  OG.F = "internal.setProductSettingsParameter";
  function PG(a, b, c) {}
  PG.F = "internal.setRemoteConfigParameter";
  function QG(a, b, c, d) {
    var e = this;
  }
  QG.N = "sha256";
  function RG(a, b, c) {}
  RG.F = "internal.sortRemoteConfigParameters";
  var SG = {},
    TG = {};
  SG.N = "templateStorage";
  SG.getItem = function (a) {
    var b = null;
    return b;
  };
  SG.setItem = function (a, b) {};
  SG.removeItem = function (a) {};
  SG.clear = function () {};
  function UG(a, b) {
    var c = !1;
    return c;
  }
  UG.F = "internal.testRegex";
  var VG = function (a) {
    var b;
    return b;
  };
  function WG(a) {}
  WG.N = "updateConsentState";
  var XG;
  function YG(a, b, c) {
    XG = XG || new uh();
    XG.add(a, b, c);
  }
  function ZG(a, b) {
    var c = (XG = XG || new uh());
    if (c.C.hasOwnProperty(a))
      throw (
        "Attempting to add a private function which already exists: " + a + "."
      );
    if (c.h.hasOwnProperty(a))
      throw (
        "Attempting to add a private function with an existing API name: " +
        a +
        "."
      );
    c.C[a] = Ea(b) ? Ng(a, b) : Og(a, b);
  }
  function $G() {
    return function (a) {
      var b;
      var c = XG;
      if (c.h.hasOwnProperty(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.C.hasOwnProperty(a))) {
          var e = !1,
            f = this.h.h;
          if (f) {
            var g = f.gd();
            if (g) {
              0 !== g.indexOf("__cvt_") && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var h = c.C.hasOwnProperty(a) ? c.C[a] : void 0;
          b = h;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  var aH = function () {
    var a = function (c) {
        return ZG(c.F, c);
      },
      b = function (c) {
        return YG(c.N, c);
      };
    b(Kz);
    b(Qz);
    b(GA);
    b(JA);
    b(KA);
    b(OA);
    b(QA);
    b(TA);
    b(kG());
    b(VA);
    b(WD);
    b(XD);
    b(lE);
    b(mE);
    b(nE);
    b(qE);
    b(ZF);
    b($F);
    b(fG);
    b(jG);
    b(oG);
    b(rG);
    b(uG);
    b(vG);
    b(xG);
    b(GG);
    b(IG);
    b(KG);
    b(NG);
    b(QG);
    b(SG);
    b(WG);
    YG("Math", Xg());
    YG("Object", sh);
    YG("TestHelper", wh());
    YG("assertApi", Tg);
    YG("assertThat", Ug);
    YG("decodeUri", Yg);
    YG("decodeUriComponent", Zg);
    YG("encodeUri", $g);
    YG("encodeUriComponent", ah);
    YG("fail", gh);
    YG("generateRandom", hh);
    YG("getTimestamp", ih);
    YG("getTimestampMillis", ih);
    YG("getType", jh);
    YG("makeInteger", lh);
    YG("makeNumber", mh);
    YG("makeString", nh);
    YG("makeTableMap", oh);
    YG("mock", rh);
    YG("fromBase64", VD, !("atob" in z));
    YG("localStorage", nG, !mG());
    YG("toBase64", VG, !("btoa" in z));
    a(Nz);
    a(Vz);
    a(gA);
    a(nA);
    a(sA);
    a(vA);
    a(EA);
    a(HA);
    a(MA);
    a(SA);
    a(UA);
    a(WA);
    a(ZA);
    a($A);
    a(aB);
    a(eB);
    a(jB);
    a(kB);
    a(vB);
    a(AB);
    a(FB);
    a(OB);
    a(SB);
    a(cC);
    a(eC);
    a(rC);
    a(bh);
    a(tC);
    a(TD);
    a(UD);
    a(YD);
    a(ZD);
    a(aE);
    a(dE);
    a(eE);
    a(fE);
    a(iE);
    a(jE);
    a(kE);
    a(oE);
    a(pE);
    a(WF);
    a(iG);
    a(lG);
    a(uA);
    a(pG);
    a(qG);
    a(sG);
    a(tG);
    a(wG);
    a(yG);
    a(zG);
    a(BG);
    a(CG);
    a(DG);
    a(FG);
    a(HG);
    a(JG);
    a(LG);
    a(MG);
    a(OG);
    a(PG);
    a(RG);
    a(UG);
    ZG("internal.GtagSchema", XF());
    Q(60) && a($D);
    Q(65) && a(bE);
    Q(66) && a(cE);
    Q(81) && a(aG);
    Q(82) && a(RA);
    Q(93) && a(PA);
    Q(97) && a(gE);
    return $G();
  };
  var Iz;
  function bH() {
    Iz.h.h.M = function (a, b, c) {
      pi.SANDBOXED_JS_SEMAPHORE = pi.SANDBOXED_JS_SEMAPHORE || 0;
      pi.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        pi.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function cH(a) {
    void 0 !== a &&
      l(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          Hi[e] = Hi[e] || [];
          Hi[e].push(b);
        }
      });
  }
  var dH = encodeURI,
    X = encodeURIComponent,
    eH = function (a, b, c) {
      Oc(a, b, c);
    },
    fH = function (a, b) {
      if (!a) return !1;
      var c = Cn(En(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    gH = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var Y = { m: {} };

  (Y.m.d = ["google"]),
    (function () {
      (function (a) {
        Y.__d = a;
        Y.__d.o = "d";
        Y.__d.isVendorTemplate = !0;
        Y.__d.priorityOverride = 0;
        Y.__d.isInfrastructure = !1;
        Y.__d.runInSiloedMode = !1;
      })(function (a) {
        var b = null,
          c = null,
          d = a.vtp_attributeName;
        if ("CSS" == a.vtp_selectorType)
          try {
            var e = yh(a.vtp_elementSelector);
            e && 0 < e.length && (b = e[0]);
          } catch (f) {
            b = null;
          }
        else b = C.getElementById(a.vtp_elementId);
        b &&
          (d
            ? (c = (function () {
                if (b instanceof HTMLInputElement) {
                  var f = b;
                  if ("value" === d) return f.value;
                  if (
                    "checked" === d &&
                    ("radio" === f.type || "checkbox" === f.type)
                  )
                    return f.checked;
                }
                return Rc(b, d);
              })())
            : (c = Sc(b)));
        return Sa(String(b && c));
      });
    })();
  (Y.m.e = ["google"]),
    (function () {
      (function (a) {
        Y.__e = a;
        Y.__e.o = "e";
        Y.__e.isVendorTemplate = !0;
        Y.__e.priorityOverride = 0;
        Y.__e.isInfrastructure = !1;
        Y.__e.runInSiloedMode = !0;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (Y.m.f = ["google"]),
    (function () {
      (function (a) {
        Y.__f = a;
        Y.__f.o = "f";
        Y.__f.isVendorTemplate = !0;
        Y.__f.priorityOverride = 0;
        Y.__f.isInfrastructure = !1;
        Y.__f.runInSiloedMode = !1;
      })(function (a) {
        var b = Xy("gtm.referrer", 1) || C.referrer;
        return b
          ? a.vtp_component && "URL" != a.vtp_component
            ? Cn(
                En(String(b)),
                a.vtp_component,
                a.vtp_stripWww,
                a.vtp_defaultPages,
                a.vtp_queryKey
              )
            : Wy(String(b))
          : String(b);
      });
    })();
  (Y.m.cl = ["google"]),
    (function () {
      function a(b) {
        var c = b.target;
        if (c) {
          var d = py(c, "gtm.click");
          Yy(d);
        }
      }
      (function (b) {
        Y.__cl = b;
        Y.__cl.o = "cl";
        Y.__cl.isVendorTemplate = !0;
        Y.__cl.priorityOverride = 0;
        Y.__cl.isInfrastructure = !1;
        Y.__cl.runInSiloedMode = !1;
      })(function (b) {
        if (!cz("cl")) {
          var c = W("document");
          Pc(c, "click", a, !0);
          dz("cl");
        }
        E(b.vtp_gtmOnSuccess);
      });
    })();
  (Y.m.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        Y.__access_globals = b;
        Y.__access_globals.o = "access_globals";
        Y.__access_globals.isVendorTemplate = !0;
        Y.__access_globals.priorityOverride = 0;
        Y.__access_globals.isInfrastructure = !1;
        Y.__access_globals.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            h = 0;
          h < c.length;
          h++
        ) {
          var m = c[h],
            n = m.key;
          m.read && e.push(n);
          m.write && f.push(n);
          m.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!k(r)) throw d(p, {}, "Key must be a string.");
            if ("read" === q) {
              if (-1 < e.indexOf(r)) return;
            } else if ("write" === q) {
              if (-1 < f.indexOf(r)) return;
            } else if ("readwrite" === q) {
              if (-1 < f.indexOf(r) && -1 < e.indexOf(r)) return;
            } else if ("execute" === q) {
              if (-1 < g.indexOf(r)) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + "."
            );
          },
          K: a,
        };
      });
    })();
  (Y.m.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Y.__u = b;
        Y.__u.o = "u";
        Y.__u.isVendorTemplate = !0;
        Y.__u.priorityOverride = 0;
        Y.__u.isInfrastructure = !1;
        Y.__u.runInSiloedMode = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : Xy("gtm.url", 1)) || Uy();
        var d = b[a("vtp_component")];
        if (!d || "URL" == d) return Wy(String(c));
        var e = En(String(c)),
          f;
        if ("QUERY" === d)
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              h = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            g
              ? Ha(h)
                ? (n = h)
                : (n = String(h).replace(/\s+/g, "").split(","))
              : (n = [String(h)]);
            for (var p = 0; p < n.length; p++) {
              var q = Cn(e, "QUERY", void 0, void 0, n[p]);
              if (void 0 != q && (!m || "" !== q)) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = Cn(
            e,
            d,
            "HOST" == d ? b[a("vtp_stripWww")] : void 0,
            "PATH" == d ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();
  (Y.m.v = ["google"]),
    (function () {
      (function (a) {
        Y.__v = a;
        Y.__v.o = "v";
        Y.__v.isVendorTemplate = !0;
        Y.__v.priorityOverride = 0;
        Y.__v.isInfrastructure = !1;
        Y.__v.runInSiloedMode = !1;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = Xy(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        ez(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();

  (Y.m.gclidw = ["google"]),
    (function () {
      var a = ["aw", "dc", "gf", "ha", "gb"];
      (function (b) {
        Y.__gclidw = b;
        Y.__gclidw.o = "gclidw";
        Y.__gclidw.isVendorTemplate = !0;
        Y.__gclidw.priorityOverride = 100;
        Y.__gclidw.isInfrastructure = !1;
        Y.__gclidw.runInSiloedMode = !1;
      })(function (b) {
        E(b.vtp_gtmOnSuccess);
        var c, d, e, f;
        b.vtp_enableCookieOverrides &&
          ((e = b.vtp_cookiePrefix),
          (c = b.vtp_path),
          (d = b.vtp_domain),
          (f = b.vtp_cookieFlags));
        var g = { prefix: e, path: c, domain: d, flags: f };
        !b.vtp_enableCrossDomainFeature ||
          (b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming) ||
          (!b.vtp_enableCrossDomain && !fo()) ||
          (Oo(a, g), so(g));
        Lo(g);
        Ro(["aw", "dc"], g);
        Vp(g);
        if (
          b.vtp_enableCrossDomainFeature &&
          b.vtp_enableCrossDomain &&
          b.vtp_linkerDomains
        ) {
          var h = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
          Qo(a, h, b.vtp_urlPosition, !!b.vtp_formDecoration, g.prefix);
          to(ko(g.prefix), h, b.vtp_urlPosition, !!b.vtp_formDecoration, g);
          to("FPAU", h, b.vtp_urlPosition, !!b.vtp_formDecoration, g);
        }
        var m = Xy(N.g.ra);
        cp({
          s: pl(new el(b.vtp_gtmEventId, b.vtp_gtmPriorityId)),
          ah: !1,
          Sf: void 0 != m && !1 !== m,
          fd: g,
          Mf: !0,
        });
        b.vtp_enableUrlPassthrough && To(["aw", "dc", "gb"]);
        Vo(["aw", "dc", "gb"]);
      });
    })();

  (Y.m.lcl = []),
    (function () {
      function a() {
        var d = W("document"),
          e = 0,
          f = Q(98),
          g = function (h) {
            var m = h.target;
            if (
              m &&
              3 !== h.which &&
              !(h.ph || (h.timeStamp && h.timeStamp === e))
            ) {
              e = h.timeStamp;
              m = Uc(m, ["a", "area"], 100);
              if (!m) return h.returnValue;
              var n = h.defaultPrevented || !1 === h.returnValue,
                p = ty("lcl", n ? "nv.mwt" : "mwt", 0),
                q;
              q = n ? ty("lcl", "nv.ids", []) : ty("lcl", "ids", []);
              if (f) {
                for (
                  var r = [],
                    t = ty("lcl", "aff.map", {}),
                    u = fa(q),
                    v = u.next();
                  !v.done;
                  v = u.next()
                ) {
                  var w = v.value,
                    x = t[w];
                  (x && !b(h, x, m)) || r.push(w);
                }
                q = r;
              }
              if (q.length) {
                var y = py(m, "gtm.linkClick", q),
                  A = c(h, m, d);
                f &&
                  ((y["gtm.elementText"] = Sc(m)),
                  (y["gtm.willOpenInNewWindow"] = !A));
                if (A && !n && p && m.href) {
                  var B = !!Ja(
                      String(Wc(m, "rel") || "").split(" "),
                      function (H) {
                        return "noreferrer" === H.toLowerCase();
                      }
                    ),
                    D = W((Wc(m, "target") || "_self").substring(1)),
                    F = !0,
                    G = Cx(function () {
                      var H;
                      if ((H = F && D)) {
                        var O;
                        a: if (B) {
                          var R;
                          try {
                            R = new MouseEvent(h.type, { bubbles: !0 });
                          } catch (U) {
                            if (!d.createEvent) {
                              O = !1;
                              break a;
                            }
                            R = d.createEvent("MouseEvents");
                            R.initEvent(h.type, !0, !0);
                          }
                          R.ph = !0;
                          h.target.dispatchEvent(R);
                          O = !0;
                        } else O = !1;
                        H = !O;
                      }
                      H && (D.location.href = Wc(m, "href"));
                    }, p);
                  if (Yy(y, G, p)) F = !1;
                  else
                    return (
                      h.preventDefault && h.preventDefault(),
                      (h.returnValue = !1)
                    );
                } else Yy(y, function () {}, p || 2e3);
                return !0;
              }
            }
          };
        Pc(d, "click", g, !1);
        Pc(d, "auxclick", g, !1);
      }
      function b(d, e, f) {
        for (
          var g = Cn(
              En(
                (f.attributes && f.attributes.formaction ? f.formAction : "") ||
                  f.action ||
                  Wc(f, "href") ||
                  f.src ||
                  f.code ||
                  f.codebase ||
                  ""
              ),
              "host"
            ),
            h = 0;
          h < e.length;
          h++
        )
          try {
            if (new RegExp(e[h]).test(g)) return !1;
          } catch (m) {}
        return !0;
      }
      function c(d, e, f) {
        if (2 === d.which || d.ctrlKey || d.shiftKey || d.altKey || d.metaKey)
          return !1;
        var g = Wc(e, "href"),
          h = g.indexOf("#"),
          m = Wc(e, "target");
        if ((m && "_self" !== m && "_parent" !== m && "_top" !== m) || 0 === h)
          return !1;
        if (0 < h) {
          var n = Wy(g),
            p = Wy(f.location);
          return n !== p;
        }
        return !0;
      }
      (function (d) {
        Y.__lcl = d;
        Y.__lcl.o = "lcl";
        Y.__lcl.isVendorTemplate = !0;
        Y.__lcl.priorityOverride = 0;
        Y.__lcl.isInfrastructure = !1;
        Y.__lcl.runInSiloedMode = !1;
      })(function (d) {
        var e = void 0 === d.vtp_waitForTags ? !0 : d.vtp_waitForTags,
          f = void 0 === d.vtp_checkValidation ? !0 : d.vtp_checkValidation,
          g = Number(d.vtp_waitForTagsTimeout);
        if (!g || 0 >= g) g = 2e3;
        var h = d.vtp_uniqueTriggerId || "0";
        if (e) {
          var m = function (p) {
            return Math.max(g, p);
          };
          sy("lcl", "mwt", m, 0);
          f || sy("lcl", "nv.mwt", m, 0);
        }
        var n = function (p) {
          p.push(h);
          return p;
        };
        sy("lcl", "ids", n, []);
        f || sy("lcl", "nv.ids", n, []);
        cz("lcl") || (a(), dz("lcl"));
        E(d.vtp_gtmOnSuccess);
      });
    })();

  (Y.m.load_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, firstPartyUrl: d };
      }
      (function (b) {
        Y.__load_google_tags = b;
        Y.__load_google_tags.o = "load_google_tags";
        Y.__load_google_tags.isVendorTemplate = !0;
        Y.__load_google_tags.priorityOverride = 0;
        Y.__load_google_tags.isInfrastructure = !1;
        Y.__load_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_allowFirstPartyUrls || !1,
          e = b.vtp_allowedFirstPartyUrls || "specific",
          f = b.vtp_urls || [],
          g = b.vtp_tagIds || [],
          h = b.vtp_createPermissionError;
        return {
          assert: function (m, n, p) {
            (function (q) {
              if (!k(q)) throw h(m, {}, "Tag ID must be a string.");
              if ("any" !== c && ("specific" !== c || -1 === g.indexOf(q)))
                throw h(m, {}, "Prohibited Tag ID: " + q + ".");
            })(n);
            (function (q) {
              if (void 0 !== q) {
                if (!k(q)) throw h(m, {}, "First party URL must be a string.");
                if (d) {
                  if ("any" === e) return;
                  if ("specific" === e)
                    try {
                      if (Gg(En(q), f)) return;
                    } catch (r) {
                      throw h(m, {}, "Invalid first party URL filter.");
                    }
                }
                throw h(m, {}, "Prohibited first party URL: " + q);
              }
            })(p);
          },
          K: a,
        };
      });
    })();

  (Y.m.detect_user_provided_data = ["google"]),
    (function () {
      function a(b, c) {
        return { dataSource: c };
      }
      (function (b) {
        Y.__detect_user_provided_data = b;
        Y.__detect_user_provided_data.o = "detect_user_provided_data";
        Y.__detect_user_provided_data.isVendorTemplate = !0;
        Y.__detect_user_provided_data.priorityOverride = 0;
        Y.__detect_user_provided_data.isInfrastructure = !1;
        Y.__detect_user_provided_data.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_createPermissionError;
        return {
          assert: function (d, e) {
            if ("auto" !== e && "manual" !== e && "code" !== e)
              throw c(d, {}, "Unknown user provided data source.");
            if (b.vtp_limitDataSources)
              if ("auto" !== e || b.vtp_allowAutoDataSources) {
                if ("manual" === e && !b.vtp_allowManualDataSources)
                  throw c(
                    d,
                    {},
                    "Detection of user provided data via manually specified CSS selectors is not allowed."
                  );
                if ("code" === e && !b.vtp_allowCodeDataSources)
                  throw c(
                    d,
                    {},
                    "Detection of user provided data from an in-page variable is not allowed."
                  );
              } else
                throw c(
                  d,
                  {},
                  "Automatic detection of user provided data is not allowed."
                );
          },
          K: a,
        };
      });
    })();

  (Y.m.awct = ["google"]),
    (function () {
      function a(b, c, d) {
        return function (e, f, g) {
          c[e] = "DATA_LAYER" === d ? Xy(g) : b[f];
        };
      }
      (function (b) {
        Y.__awct = b;
        Y.__awct.o = "awct";
        Y.__awct.isVendorTemplate = !0;
        Y.__awct.priorityOverride = 0;
        Y.__awct.isInfrastructure = !1;
        Y.__awct.runInSiloedMode = !1;
      })(function (b) {
        var c =
            !b.hasOwnProperty("vtp_enableConversionLinker") ||
            !!b.vtp_enableConversionLinker,
          d =
            !!b.vtp_enableEnhancedConversions ||
            !!b.vtp_enableEnhancedConversion,
          e = gH(b.vtp_customVariables, "varName", "value") || {},
          f = {},
          g =
            ((f[N.g.ja] = b.vtp_conversionValue || 0),
            (f[N.g.sa] = b.vtp_currencyCode),
            (f[N.g.wa] = b.vtp_orderId),
            (f[N.g.La] = b.vtp_conversionCookiePrefix),
            (f[N.g.Da] = c),
            (f[N.g.Ad] = d),
            (f[N.g.ra] = Xy(N.g.ra)),
            (f[N.g.ba] = Xy("developer_id")),
            f);
        (g[N.g.Fa] = Xy(N.g.Fa)),
          (g[N.g.ia] = Xy(N.g.ia)),
          (g[N.g.Ib] = Xy(N.g.Ib)),
          (g[N.g.Na] = Xy(N.g.Na));
        b.vtp_rdp && (g[N.g.Ob] = !0);
        if (b.vtp_enableCustomParams)
          for (var h in e) li.hasOwnProperty(h) || (g[h] = e[h]);
        if (b.vtp_enableProductReporting) {
          var m = a(b, g, b.vtp_productReportingDataSource);
          m(N.g.Ed, "vtp_awMerchantId", "aw_merchant_id");
          m(N.g.Cd, "vtp_awFeedCountry", "aw_feed_country");
          m(N.g.Dd, "vtp_awFeedLanguage", "aw_feed_language");
          m(N.g.Bd, "vtp_discount", "discount");
          m(N.g.aa, "vtp_items", "items");
        }
        b.vtp_enableShippingData &&
          ((g[N.g.ad] = b.vtp_deliveryPostalCode),
          (g[N.g.Kd] = b.vtp_estimatedDeliveryDate),
          (g[N.g.qc] = b.vtp_deliveryCountry),
          (g[N.g.Sc] = b.vtp_shippingFee));
        b.vtp_transportUrl && (g[N.g.Qb] = b.vtp_transportUrl);
        if (b.vtp_enableNewCustomerReporting) {
          var n = a(b, g, b.vtp_newCustomerReportingDataSource);
          n(N.g.Wc, "vtp_awNewCustomer", "new_customer");
          n(N.g.Fd, "vtp_awCustomerLTV", "customer_lifetime_value");
        }
        var p;
        a: {
          if (b.vtp_enableEnhancedConversion) {
            var q =
              b.vtp_cssProvidedEnhancedConversionValue ||
              b.vtp_enhancedConversionObject;
            if (q) {
              p = {
                enhanced_conversions_mode: "manual",
                enhanced_conversions_manual_var: q,
              };
              break a;
            }
          }
          p = void 0;
        }
        var r = p;
        if (r) {
          var t = {};
          g[N.g.Jd] = ((t[b.vtp_conversionLabel] = r), t);
        }
        var u = "AW-" + b.vtp_conversionId,
          v = u + "/" + b.vtp_conversionLabel;
        if (Q(49)) {
          ju(u, b.vtp_transportUrl, {
            source: 7,
            fromContainerExecution: !0,
            siloed: !0,
          });
          var w = {},
            x = {
              eventMetadata: ((w.hit_type_override = "conversion"), w),
              noGtmEvent: !0,
              isGtmEvent: !0,
              onSuccess: b.vtp_gtmOnSuccess,
              onFailure: b.vtp_gtmOnFailure,
            };
          xv(uv(mk(v), N.g.oa, g), b.vtp_gtmEventId, x);
        } else {
          var y = pl(
            ol(
              nl(
                ml(
                  fl(new el(b.vtp_gtmEventId, b.vtp_gtmPriorityId), g),
                  b.vtp_gtmOnSuccess
                ),
                b.vtp_gtmOnFailure
              ),
              !0
            )
          );
          y.eventMetadata.hit_type_override = "conversion";
          wC(v, N.g.oa, Date.now(), y);
        }
      });
    })();
  (Y.m.remm = ["google"]),
    (function () {
      (function (a) {
        Y.__remm = a;
        Y.__remm.o = "remm";
        Y.__remm.isVendorTemplate = !0;
        Y.__remm.priorityOverride = 0;
        Y.__remm.isInfrastructure = !1;
        Y.__remm.runInSiloedMode = !1;
      })(function (a) {
        for (
          var b = a.vtp_input,
            c = a.vtp_map || [],
            d = a.vtp_fullMatch,
            e = a.vtp_ignoreCase ? "gi" : "g",
            f = a.vtp_defaultValue,
            g = 0;
          g < c.length;
          g++
        ) {
          var h = c[g].key || "";
          d && (h = "^" + h + "$");
          var m = new RegExp(h, e);
          if (m.test(b)) {
            var n = c[g].value;
            a.vtp_replaceAfterMatch && (n = String(b).replace(m, n));
            f = n;
            break;
          }
        }
        ez(f, "remm", a.vtp_gtmEventId);
        return f;
      });
    })();
  (Y.m.logging = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Y.__logging = b;
        Y.__logging.o = "logging";
        Y.__logging.isVendorTemplate = !0;
        Y.__logging.priorityOverride = 0;
        Y.__logging.isInfrastructure = !1;
        Y.__logging.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_environments || "debug",
          d = b.vtp_createPermissionError;
        return {
          assert: function (e) {
            var f;
            if ((f = "all" !== c && !0)) {
              var g = !1;
              f = !g;
            }
            if (f) throw d(e, {}, "Logging is not enabled in all environments");
          },
          K: a,
        };
      });
    })();

  (Y.m.configure_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, configuration: d };
      }
      (function (b) {
        Y.__configure_google_tags = b;
        Y.__configure_google_tags.o = "configure_google_tags";
        Y.__configure_google_tags.isVendorTemplate = !0;
        Y.__configure_google_tags.priorityOverride = 0;
        Y.__configure_google_tags.isInfrastructure = !1;
        Y.__configure_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_tagIds || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!k(g)) throw e(f, {}, "Tag ID must be a string.");
            if ("any" !== c && ("specific" !== c || -1 === d.indexOf(g)))
              throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
          },
          K: a,
        };
      });
    })();

  (Y.m.html = ["customScripts"]),
    (function () {
      function a(d, e, f, g) {
        return function () {
          try {
            if (0 < e.length) {
              var h = e.shift(),
                m = a(d, e, f, g);
              if (
                "SCRIPT" == String(h.nodeName).toUpperCase() &&
                "text/gtmscript" == h.type
              ) {
                var n = C.createElement("script");
                n.async = !1;
                n.type = "text/javascript";
                n.id = h.id;
                n.text = h.text || h.textContent || h.innerHTML || "";
                h.charset && (n.charset = h.charset);
                var p = h.getAttribute("data-gtmsrc");
                p && ((n.src = p), Hc(n, m));
                d.insertBefore(n, null);
                p || m();
              } else if (
                h.innerHTML &&
                0 <= h.innerHTML.toLowerCase().indexOf("<script")
              ) {
                for (var q = []; h.firstChild; )
                  q.push(h.removeChild(h.firstChild));
                d.insertBefore(h, null);
                a(h, q, m, g)();
              } else d.insertBefore(h, null), m();
            } else f();
          } catch (r) {
            E(g);
          }
        };
      }
      function b(d) {
        if (C.body) {
          var e = d.vtp_gtmOnFailure,
            f = ny(d.vtp_html, d.vtp_gtmOnSuccess, e),
            g = f.sj,
            h = f.onSuccess;
          if (d.vtp_useIframe) {
          } else
            d.vtp_supportDocumentWrite ? c(g, h, e) : a(C.body, Tc(g), h, e)();
        } else
          Ry(function () {
            b(d);
          }, 200);
      }
      Y.__html = b;
      Y.__html.o = "html";
      Y.__html.isVendorTemplate = !0;
      Y.__html.priorityOverride = 0;
      Y.__html.isInfrastructure = !1;
      Y.__html.runInSiloedMode = !1;
    })();

  var AI = {};
  (AI.onHtmlSuccess = oy(!0)), (AI.onHtmlFailure = oy(!1));
  AI.dataLayer = Qi;
  AI.callback = function (a) {
    Gi.hasOwnProperty(a) && Ea(Gi[a]) && Gi[a]();
    delete Gi[a];
  };
  AI.bootstrap = 0;
  AI._spx = !1;
  function BI() {
    pi[rk()] = pi[rk()] || AI;
    xk();
    Ck() ||
      l(Dk(), function (a, b) {
        ju(a, b.transportUrl, b.context);
        M(92);
      });
    Xa(Hi, Y.m);
    Q(77) && tk(Ak());
    ky(),
      uf({
        Pl: function (a) {
          return a === iy;
        },
        bl: function (a) {
          return new ly(a);
        },
        Ql: function (a) {
          for (var b = !1, c = !1, d = 2; d < a.length; d++)
            (b = b || 8 === a[d]), (c = c || 16 === a[d]);
          return b && c;
        },
        xm: function (a) {
          var b;
          if (a === iy) b = a;
          else {
            var c = Ji();
            jy[c] = a;
            b = 'google_tag_manager["rm"]["' + sk() + '"](' + c + ")";
          }
          return b;
        },
      });
    wf = Mf;
  }
  (function (a) {
    function b() {
      m = C.documentElement.getAttribute("data-tag-assistant-present");
      Lx(m) && (h = g.Ak);
    }
    if (!z["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (C.referrer) {
        var d = En(C.referrer);
        c = "cct.google" === Bn(d, "host");
      }
      if (!c) {
        var e = Bm("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c &&
        ((z["__TAGGY_INSTALLED"] = !0),
        Lc("https://cct.google/taggy/agent.js"));
    }
    if (Bi) a();
    else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          vi ? ((v = "OGT"), (w = "GTAG")) : Bi && (w = v = "OPT");
          var x = z["google.tagmanager.debugui2.queue"];
          x ||
            ((x = []),
            (z["google.tagmanager.debugui2.queue"] = x),
            Lc(
              "https://" +
                oi.yd +
                "/debug/bootstrap?id=" +
                Uf.ctid +
                "&src=" +
                w +
                "&cond=" +
                u +
                "&gtm=" +
                en()
            ));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: Fc,
              containerProduct: v,
              debug: !1,
              id: Uf.ctid,
              targetRef: { ctid: Uf.ctid, isDestination: jk.ke },
              aliases: lk(),
              destinations: ok(),
            },
          };
          y.data.resume = function () {
            a();
          };
          oi.Wj && (y.data.initialPublish = !0);
          x.push(y);
        },
        g = { hn: 1, Bk: 2, Nk: 3, Yj: 4, Ak: 5 },
        h = void 0,
        m = void 0,
        n = Cn(z.location, "query", !1, void 0, "gtm_debug");
      Lx(n) && (h = g.Bk);
      if (!h && C.referrer) {
        var p = En(C.referrer);
        "tagassistant.google.com" === Bn(p, "host") && (h = g.Nk);
      }
      if (!h) {
        var q = Bm("__TAG_ASSISTANT");
        q.length && q[0].length && (h = g.Yj);
      }
      h || b();
      if (!h && Mx(m)) {
        var r = function () {
            if (t) return !0;
            t = !0;
            b();
            h && Fc ? f(h) : a();
          },
          t = !1;
        Pc(
          C,
          "TADebugSignal",
          function () {
            r();
          },
          !1
        );
        z.setTimeout(function () {
          r();
        }, 200);
      } else h && Fc ? f(h) : a();
    }
  })(function () {
    try {
      vk();
      if (Q(24)) {
      }
      wj().C();
      dm();
      var a = sk();
      if (gk().canonical[a]) {
        var b = pi.zones;
        b && b.unregisterChild(nk());
      } else {
        (Q(7) || Q(8) || Q(19) || Q(16)) && tn();
        du();
        for (
          var c = data.resource || {}, d = c.macros || [], e = 0;
          e < d.length;
          e++
        )
          mf.push(d[e]);
        for (var f = c.tags || [], g = 0; g < f.length; g++) pf.push(f[g]);
        for (var h = c.predicates || [], m = 0; m < h.length; m++)
          of.push(h[m]);
        for (var n = c.rules || [], p = 0; p < n.length; p++) {
          for (var q = n[p], r = {}, t = 0; t < q.length; t++) {
            var u = q[t][0];
            r[u] = Array.prototype.slice.call(q[t], 1);
            ("if" !== u && "unless" !== u) || vf(r[u]);
          }
          nf.push(r);
        }
        rf = Y;
        sf = Cz;
        Of = new Xf();
        var v = data.sandboxed_scripts,
          w = data.security_groups,
          x = data.infra;
        a: {
          var y = data.runtime || [],
            A = data.runtime_lines;
          Iz = new Je();
          bH();
          lf = Hz();
          var B = Iz,
            D = aH(),
            F = new fd("require", D);
          F.Bb();
          B.h.h.set("require", F);
          for (var G = [], H = 0; H < y.length; H++) {
            var O = y[H];
            if (!Ha(O) || 3 > O.length) {
              if (0 === O.length) continue;
              break a;
            }
            A && A[H] && A[H].length && Ff(O, A[H]);
            try {
              Iz.execute(O), Q(47) && Mk && 50 === O[0] && G.push(O[1]);
            } catch (Pg) {}
          }
          Q(47) && (xf = G);
        }
        if (void 0 !== v)
          for (var R = ["sandboxedScripts"], U = 0; U < v.length; U++) {
            var ha = v[U].replace(/^_*/, "");
            Hi[ha] = R;
          }
        cH(w);
        if (void 0 !== x) for (var Z = 0; Z < x.length; Z++) Ii[x[Z]] = !0;
        BI();
        if (Q(38) && !Bi) {
          for (
            var S = mj["7"], ja = S ? S.split("|") : [], ma = {}, ea = 0;
            ea < ja.length;
            ea++
          )
            ma[ja[ea]] = !0;
          for (var Ia = 0; Ia < Uj.length; Ia++) {
            var va = Uj[Ia],
              Fa = ma[va] ? "granted" : "denied";
            Dj().implicit(va, Fa);
          }
        }
        Kx();
        wu = !1;
        xu = 0;
        if (
          ("interactive" == C.readyState && !C.createEventObject) ||
          "complete" == C.readyState
        )
          zu();
        else {
          Pc(C, "DOMContentLoaded", zu);
          Pc(C, "readystatechange", zu);
          if (C.createEventObject && C.documentElement.doScroll) {
            var Oa = !0;
            try {
              Oa = !z.frameElement;
            } catch (Pg) {}
            Oa && Au();
          }
          Pc(z, "load", zu);
        }
        Zw = !1;
        "complete" === C.readyState ? ax() : Pc(z, "load", ax);
        Mk && (Hk(Zk), z.setInterval(Yk, 864e5));
        Hk(Ez);
        Hk($u);
        Hk(Ds);
        Hk(vw);
        Hk(kv);
        Hk(ou);
        Hk(gn);
        Hk(mu);
        Hk(gv);
        Q(47) && Hk(cv);
        gy();
        lj(1);
        bw();
        Fi = Ua();
        AI.bootstrap = Fi;
        if (Q(24)) {
        }
      }
    } catch (Pg) {
      if ((lj(4), Mk)) {
        var Rd = Tk(!0, !0);
        Oc(Rd);
      }
    }
  });
})();
