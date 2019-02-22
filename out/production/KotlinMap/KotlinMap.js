if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'KotlinMap'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinMap'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'KotlinMap'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'KotlinMap'.");
}
var KotlinMap = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var Unit = Kotlin.kotlin.Unit;
  var td = $module$kotlinx_html_js.kotlinx.html.td_vlzo05$;
  var tr = $module$kotlinx_html_js.kotlinx.html.tr_lut1f9$;
  var thead = $module$kotlinx_html_js.kotlinx.html.thead_j1nulr$;
  var h2 = $module$kotlinx_html_js.kotlinx.html.h2_eh5gi3$;
  var p = $module$kotlinx_html_js.kotlinx.html.p_8pggrc$;
  var table = $module$kotlinx_html_js.kotlinx.html.js.table_uk5qws$;
  var tr_0 = $module$kotlinx_html_js.kotlinx.html.js.tr_9pz0lc$;
  var h4 = $module$kotlinx_html_js.kotlinx.html.h4_zdyoc7$;
  var tr_1 = $module$kotlinx_html_js.kotlinx.html.tr_7wec05$;
  var table_0 = $module$kotlinx_html_js.kotlinx.html.table_dmqmme$;
  var div = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function main(args) {
    var tmp$;
    var sampleData = {};
    ['HI', 'AK', 'FL', 'SC', 'GA', 'AL', 'NC', 'TN', 'RI', 'CT', 'MA', 'ME', 'NH', 'VT', 'NY', 'NJ', 'PA', 'DE', 'MD', 'WV', 'KY', 'OH', 'MI', 'WY', 'MT', 'ID', 'WA', 'DC', 'TX', 'CA', 'AZ', 'NV', 'UT', 'CO', 'NM', 'OR', 'ND', 'SD', 'NE', 'IA', 'MS', 'IN', 'IL', 'MN', 'WI', 'MO', 'AR', 'OK', 'KS', 'LS', 'VA'].forEach(function (d) {
      var low = Math.round(100 * Math.random()), mid = Math.round(100 * Math.random()), high = Math.round(100 * Math.random());
      sampleData[d] = {low: d3.min([low, mid, high]), high: d3.max([low, mid, high]), avg: Math.round((low + mid + high) / 3), color: d3.interpolate('#0295D5', '#F88909')(low / 100)};
    });
    drawTable(Kotlin.isType(tmp$ = document.getElementById('table'), HTMLDivElement) ? tmp$ : throwCCE(), sampleData);
    uStates.draw('#statesvg', sampleData, _.tooltipHtmlJs);
    var d3_kt = d3.select(self.frameElement);
    d3_kt.style('height', '600px');
  }
  function variability(state) {
    var tmp$, tmp$_0;
    tmp$ = state.high - state.low | 0;
    if (tmp$ >= 1 && tmp$ <= 20)
      tmp$_0 = 'Low';
    else if (tmp$ >= 21 && tmp$ <= 50)
      tmp$_0 = 'Medium';
    else
      tmp$_0 = 'High';
    return tmp$_0;
  }
  function drawTable$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Name');
    return Unit;
  }
  function drawTable$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Low');
    return Unit;
  }
  function drawTable$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Average');
    return Unit;
  }
  function drawTable$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('High');
    return Unit;
  }
  function drawTable$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('Variability');
    return Unit;
  }
  function drawTable$lambda$lambda$lambda($receiver) {
    td($receiver, void 0, drawTable$lambda$lambda$lambda$lambda);
    td($receiver, void 0, drawTable$lambda$lambda$lambda$lambda_0);
    td($receiver, void 0, drawTable$lambda$lambda$lambda$lambda_1);
    td($receiver, void 0, drawTable$lambda$lambda$lambda$lambda_2);
    td($receiver, void 0, drawTable$lambda$lambda$lambda$lambda_3);
    return Unit;
  }
  function drawTable$lambda$lambda($receiver) {
    tr($receiver, void 0, drawTable$lambda$lambda$lambda);
    return Unit;
  }
  function drawTable$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Hello Map');
    return Unit;
  }
  function drawTable$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Hello Pragram');
    return Unit;
  }
  function drawTable$lambda($receiver) {
    thead($receiver, void 0, drawTable$lambda$lambda);
    h2($receiver, void 0, drawTable$lambda$lambda_0);
    p($receiver, void 0, drawTable$lambda$lambda_1);
    return Unit;
  }
  function drawTable$lambda$lambda_2(closure$states, closure$i) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$states[closure$i].toString());
      return Unit;
    };
  }
  function drawTable$lambda$lambda_3(closure$data, closure$states, closure$i) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$data[closure$states[closure$i]].low.toString());
      return Unit;
    };
  }
  function drawTable$lambda$lambda_4(closure$data, closure$states, closure$i) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$data[closure$states[closure$i]].avg.toString());
      return Unit;
    };
  }
  function drawTable$lambda$lambda_5(closure$data, closure$states, closure$i) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$data[closure$states[closure$i]].high.toString());
      return Unit;
    };
  }
  function drawTable$lambda$lambda_6(closure$data, closure$states, closure$i) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(variability(closure$data[closure$states[closure$i]]));
      return Unit;
    };
  }
  function drawTable$lambda_0(closure$states, closure$i, closure$data) {
    return function ($receiver) {
      td($receiver, void 0, drawTable$lambda$lambda_2(closure$states, closure$i));
      td($receiver, void 0, drawTable$lambda$lambda_3(closure$data, closure$states, closure$i));
      td($receiver, void 0, drawTable$lambda$lambda_4(closure$data, closure$states, closure$i));
      td($receiver, void 0, drawTable$lambda$lambda_5(closure$data, closure$states, closure$i));
      td($receiver, styleTable(closure$data[closure$states[closure$i]]), drawTable$lambda$lambda_6(closure$data, closure$states, closure$i));
      return Unit;
    };
  }
  function drawTable(tableDiv, data) {
    var states = Object.keys(data);
    states.sort();
    var table_0 = table(get_create(document), void 0, drawTable$lambda);
    for (var i = 1; i <= 50; i++) {
      var tr = tr_0(get_create(document), void 0, drawTable$lambda_0(states, i, data));
      table_0.appendChild(tr);
    }
    tableDiv.appendChild(table_0);
  }
  function styleTable(state) {
    if ((state.high - state.low | 0) < 33 && state.avg < 33)
      return 'low';
    else if ((state.high - state.low | 0) > 33 && state.avg > 33 && state.avg < 66)
      return 'middle';
    else if ((state.high - state.low | 0) < 33 && state.avg > 66)
      return 'high';
    else
      return '';
  }
  function tooltipHtml$lambda$lambda(closure$name) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$name);
      return Unit;
    };
  }
  function tooltipHtml$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Low');
    return Unit;
  }
  function tooltipHtml$lambda$lambda$lambda$lambda_0(closure$values) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$values.low.toString());
      return Unit;
    };
  }
  function tooltipHtml$lambda$lambda$lambda(closure$values) {
    return function ($receiver) {
      td($receiver, void 0, tooltipHtml$lambda$lambda$lambda$lambda);
      td($receiver, void 0, tooltipHtml$lambda$lambda$lambda$lambda_0(closure$values));
      return Unit;
    };
  }
  function tooltipHtml$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Avg');
    return Unit;
  }
  function tooltipHtml$lambda$lambda$lambda$lambda_2(closure$values) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$values.avg.toString());
      return Unit;
    };
  }
  function tooltipHtml$lambda$lambda$lambda_0(closure$values) {
    return function ($receiver) {
      td($receiver, void 0, tooltipHtml$lambda$lambda$lambda$lambda_1);
      td($receiver, void 0, tooltipHtml$lambda$lambda$lambda$lambda_2(closure$values));
      return Unit;
    };
  }
  function tooltipHtml$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('High');
    return Unit;
  }
  function tooltipHtml$lambda$lambda$lambda$lambda_4(closure$values) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$values.high.toString());
      return Unit;
    };
  }
  function tooltipHtml$lambda$lambda$lambda_1(closure$values) {
    return function ($receiver) {
      td($receiver, void 0, tooltipHtml$lambda$lambda$lambda$lambda_3);
      td($receiver, void 0, tooltipHtml$lambda$lambda$lambda$lambda_4(closure$values));
      return Unit;
    };
  }
  function tooltipHtml$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.unaryPlus_pdl1vz$('Variability');
    return Unit;
  }
  function tooltipHtml$lambda$lambda$lambda$lambda_6(closure$values) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(variability(closure$values));
      return Unit;
    };
  }
  function tooltipHtml$lambda$lambda$lambda_2(closure$values) {
    return function ($receiver) {
      td($receiver, void 0, tooltipHtml$lambda$lambda$lambda$lambda_5);
      td($receiver, void 0, tooltipHtml$lambda$lambda$lambda$lambda_6(closure$values));
      return Unit;
    };
  }
  function tooltipHtml$lambda$lambda_0(closure$values) {
    return function ($receiver) {
      tr_1($receiver, void 0, tooltipHtml$lambda$lambda$lambda(closure$values));
      tr_1($receiver, void 0, tooltipHtml$lambda$lambda$lambda_0(closure$values));
      tr_1($receiver, void 0, tooltipHtml$lambda$lambda$lambda_1(closure$values));
      tr_1($receiver, void 0, tooltipHtml$lambda$lambda$lambda_2(closure$values));
      return Unit;
    };
  }
  function tooltipHtml$lambda(closure$name, closure$values) {
    return function ($receiver) {
      h4($receiver, void 0, tooltipHtml$lambda$lambda(closure$name));
      table_0($receiver, void 0, tooltipHtml$lambda$lambda_0(closure$values));
      return Unit;
    };
  }
  function tooltipHtml(name, values) {
    return div(get_create(document), void 0, tooltipHtml$lambda(name, values));
  }
  function Stats(low, avg, high, color) {
    this.low = low;
    this.avg = avg;
    this.high = high;
    this.color = color;
  }
  Stats.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stats',
    interfaces: []
  };
  Stats.prototype.component1 = function () {
    return this.low;
  };
  Stats.prototype.component2 = function () {
    return this.avg;
  };
  Stats.prototype.component3 = function () {
    return this.high;
  };
  Stats.prototype.component4 = function () {
    return this.color;
  };
  Stats.prototype.copy_94qy4s$ = function (low, avg, high, color) {
    return new Stats(low === void 0 ? this.low : low, avg === void 0 ? this.avg : avg, high === void 0 ? this.high : high, color === void 0 ? this.color : color);
  };
  Stats.prototype.toString = function () {
    return 'Stats(low=' + Kotlin.toString(this.low) + (', avg=' + Kotlin.toString(this.avg)) + (', high=' + Kotlin.toString(this.high)) + (', color=' + Kotlin.toString(this.color)) + ')';
  };
  Stats.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.low) | 0;
    result = result * 31 + Kotlin.hashCode(this.avg) | 0;
    result = result * 31 + Kotlin.hashCode(this.high) | 0;
    result = result * 31 + Kotlin.hashCode(this.color) | 0;
    return result;
  };
  Stats.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.low, other.low) && Kotlin.equals(this.avg, other.avg) && Kotlin.equals(this.high, other.high) && Kotlin.equals(this.color, other.color)))));
  };
  _.main_kand9s$ = main;
  _.variability_1br2in$ = variability;
  _.drawTable_yx3xtk$ = drawTable;
  _.styleTable_1br2in$ = styleTable;
  _.tooltipHtmlJs = tooltipHtml;
  _.Stats = Stats;
  main([]);
  Kotlin.defineModule('KotlinMap', _);
  return _;
}(typeof KotlinMap === 'undefined' ? {} : KotlinMap, kotlin, this['kotlinx-html-js']);
