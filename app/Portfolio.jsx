"use client";
/* eslint-disable */
// Generated from the approved v6 design (FullPageV6.dc.html) by scripts/dc2jsx.py.
import React from "react";

const _css = new Map();
function css(text) {
  if (!text) return undefined;
  let o = _css.get(text);
  if (o) return o;
  o = {};
  for (const decl of String(text).split(";")) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    const k = decl.slice(0, i).trim();
    if (!k) continue;
    const key = k.startsWith("-webkit-")
      ? "Webkit" + k.slice(8).replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^./, (c) => c.toUpperCase())
      : k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    o[key] = decl.slice(i + 1).trim();
  }
  if (_css.size > 4000) _css.clear();
  _css.set(text, o);
  return o;
}

function Template({ v }) {
  return (
<div ref={v.setScroller} style={{"overflowX": "clip", "background": "#FFFFFF", "color": "#0A2540", "fontFamily": "Manrope, system-ui, sans-serif"}}>

  <header className={"v-nav"} style={css(v.navStyle)}>
    <div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px", "height": "70px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "18px", "boxSizing": "border-box"}}>
      <a href={"#top"} onClick={v.goTop} style={{"display": "flex", "alignItems": "center", "gap": "12px", "textDecoration": "none", "color": "inherit"}}>
        <span style={css(v.logoBox)}>AJ<span className={"v-logodot"} style={{"color": "#60A5FA"}}>.</span></span>
        <span style={{"display": "flex", "flexDirection": "column", "lineHeight": "1.15"}}><span style={{"fontSize": "15px", "fontWeight": "800"}}>Aditya Jadhav</span><span style={css(v.logoSub)}>Data Analyst</span></span>
      </a>
      <nav className={"v-navfull"} style={{"alignItems": "center", "gap": "26px", "fontSize": "14px", "fontWeight": "600", "flexWrap": "wrap"}}>
        {(v.navLinks || []).map((n, _i0) => (<React.Fragment key={_i0}>
          <a className={"v-link"} href={n.href} onClick={n.go} style={css(n.style)}>{n.label}<span style={css(n.bar)}></span></a>
        </React.Fragment>))}
        <a href={"#contact"} onClick={v.goContact} style={css(v.openPill)}><span className={"v-pulse"} style={{"width": "8px", "height": "8px", "borderRadius": "50%", "background": "#34D399", "display": "inline-block"}}></span>Open to Data Analyst roles</a>
        <a className={"v-btn"} href={"#contact"} onClick={v.goResume} style={css(v.resumeBtn)}>Resume <span className={"v-arr"}>→</span></a>
      </nav>
      <button className={"v-burger"} type={"button"} aria-label={"Open menu"} onClick={v.toggleMenu} style={css(v.burgerStyle)}>
        <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} aria-hidden={"true"}><path d={v.burgerIcon}></path></svg>
      </button>
    </div>
    {(v.menuOpen) ? (<>
      <div className={"v-mmenu"} style={{"background": "#FFFFFF", "padding": "6px 24px 18px", "boxShadow": "0 20px 40px -24px rgba(10,37,64,.5)"}}>
        {(v.mobileLinks || []).map((ml, _i0) => (<React.Fragment key={_i0}><a href={ml.href} onClick={ml.go}>{ml.label}</a></React.Fragment>))}
      </div>
    </>) : null}
    <div style={{"height": "2px"}}><div style={css(v.progressStyle)}></div></div>
  </header>

  <section id={"top"} ref={v.refHero} style={{"position": "relative", "minHeight": "100vh", "background": "#06142B", "color": "#FFFFFF", "overflow": "hidden", "display": "flex", "alignItems": "center"}}>
    <canvas ref={v.setCanvas} onMouseMove={v.heroMove} onMouseLeave={v.heroLeave} aria-hidden={"true"} style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block"}}></canvas>
    <div aria-hidden={"true"} className={"v-blob v-b1"} style={{"width": "560px", "height": "560px", "left": "-120px", "top": "-160px", "background": "rgba(37,99,235,.35)"}}></div>
    <div aria-hidden={"true"} className={"v-blob v-b2"} style={{"width": "480px", "height": "480px", "right": "-120px", "bottom": "-160px", "background": "rgba(34,211,238,.18)"}}></div>

    <div className={"v-herobox"} style={{"position": "relative", "maxWidth": "1240px", "width": "100%", "margin": "0 auto", "padding": "118px 32px 250px", "boxSizing": "border-box", "display": "flex", "flexWrap": "wrap", "gap": "56px", "alignItems": "center", "pointerEvents": "none"}}>
      <div style={{"flex": "1 1 480px", "minWidth": "0", "pointerEvents": "auto"}}>
        <p className={"v-fade"} style={{"margin": "0 0 24px", "fontFamily": "'JetBrains Mono', monospace", "fontSize": "13px", "color": "#67E8F9", "letterSpacing": "1px", "animationDelay": ".2s"}}>&gt; SELECT insight FROM data<span className={"v-caret"}></span></p>
        <h1 style={{"margin": "0", "fontSize": "clamp(42px, 6vw, 74px)", "lineHeight": "1.02", "fontWeight": "800", "letterSpacing": "-3px"}}>
          {(v.heroWords || []).map((w, _i0) => (<React.Fragment key={_i0}><span className={"v-mask"}><span className={w.cls} style={css(w.style)}>{w.t}</span></span> </React.Fragment>))}
        </h1>
        <p className={"v-fade"} style={{"margin": "28px 0 0", "fontSize": "19px", "lineHeight": "1.65", "color": "#A9B8D3", "maxWidth": "520px", "animationDelay": "1.1s"}}>I'm Aditya, a data analyst from Maharashtra, India. I clean messy data, find what is really going on, and tell the business what to do next. I work with SQL, Excel, Power BI and Python.</p>
        <div className={"v-fade"} style={{"display": "flex", "gap": "14px", "marginTop": "36px", "flexWrap": "wrap", "animationDelay": "1.3s"}}>
          <a className={"v-btn"} href={"#work"} onClick={v.goWork} style={{"display": "inline-flex", "alignItems": "center", "gap": "8px", "minHeight": "52px", "padding": "0 26px", "background": "#FFFFFF", "color": "#06142B", "borderRadius": "8px", "fontWeight": "800", "fontSize": "15px", "textDecoration": "none"}}>See my projects <span className={"v-arr"}>→</span></a>
          <a className={"v-btn"} href={"#contact"} onClick={v.goContact} style={{"display": "inline-flex", "alignItems": "center", "minHeight": "52px", "padding": "0 26px", "border": "1.5px solid rgba(255,255,255,.3)", "color": "#FFFFFF", "borderRadius": "8px", "fontWeight": "700", "fontSize": "15px", "textDecoration": "none"}}>Get in touch</a>
        </div>
        <div className={"v-fade"} style={{"display": "flex", "gap": "22px", "marginTop": "40px", "fontSize": "13px", "color": "#7F93B5", "flexWrap": "wrap", "animationDelay": "1.5s"}}>
          <span>Maharashtra, India</span><span>·</span><span>Open to relocate</span><span>·</span><span>Research published by Springer</span>
        </div>
      </div>

      <div className={"v-fade v-demo"} style={{"flex": "1 1 540px", "minWidth": "0", "pointerEvents": "auto", "animationDelay": ".6s"}}>
        <div style={{"border": "1px solid rgba(255,255,255,.12)", "borderRadius": "18px", "padding": "22px", "boxSizing": "border-box", "background": "rgba(10,28,58,.72)", "backdropFilter": "blur(14px)", "boxShadow": "0 40px 80px -40px rgba(0,0,0,.8)"}}>
          <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "10px", "flexWrap": "wrap"}}>
            <div style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "2px", "textTransform": "uppercase", "color": "#7F93B5"}}>Live analysis · how I work</div>
            <div style={{"fontSize": "11px", "color": "#5E7398"}}>Illustrative sample data</div>
          </div>
          <div style={{"display": "grid", "gridTemplateColumns": "repeat(4, minmax(0, 1fr))", "gap": "8px", "marginTop": "14px"}}>
            {(v.stagePills || []).map((s, _i0) => (<React.Fragment key={_i0}>
              <button className={"v-pill"} type={"button"} onClick={s.pick} style={css(s.style)}><span style={css(s.numStyle)}>{s.n}</span>{s.label}<span style={css(s.fill)}></span></button>
            </React.Fragment>))}
          </div>

          <div style={{"position": "relative", "height": "410px", "marginTop": "18px", "fontFamily": "'JetBrains Mono', monospace"}}>
            <div className={"v-fx v-thead"} style={css(v.headerStyle)}><span>order_id</span><span>category</span><span>amount</span></div>
            {(v.scanOn) ? (<><div className={"v-scan"}></div></>) : null}
            {(v.recs || []).map((r, _i0) => (<React.Fragment key={_i0}>
              <div className={"v-rec"} style={css(r.style)}><span>{r.id}</span><span>{r.cat}</span><span>{r.amt}</span><span style={css(r.flagStyle)}>{r.flag}</span></div>
            </React.Fragment>))}
            {(v.colLabels || []).map((l, _i0) => (<React.Fragment key={_i0}>
              <div className={"v-fx"} style={css(l.style)}>
                <div style={css(l.valStyle)}>{l.rev}</div>
                <div style={{"fontFamily": "Manrope, sans-serif", "fontSize": "12px", "fontWeight": "700", "color": "#C7D2E5", "marginTop": "2px"}}>{l.name}</div>
              </div>
            </React.Fragment>))}
            <div className={"v-fx"} style={css(v.decisionStyle)}>
              <div style={{"fontFamily": "Manrope, sans-serif", "fontSize": "11px", "fontWeight": "800", "letterSpacing": "1.5px", "textTransform": "uppercase", "color": "#06142B", "opacity": ".7"}}>Recommendation</div>
              <div style={{"fontFamily": "Manrope, sans-serif", "fontSize": "16px", "fontWeight": "800", "lineHeight": "1.4", "marginTop": "6px", "color": "#06142B"}}>{v.decisionText}</div>
            </div>
          </div>

          <div style={{"borderTop": "1px solid rgba(255,255,255,.1)", "paddingTop": "14px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
            <div style={{"fontSize": "15px", "fontWeight": "700", "color": "#FFFFFF", "minHeight": "21px"}}>{v.caption}</div>
            <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "12px", "color": "#67E8F9", "minHeight": "34px", "whiteSpace": "pre-wrap", "wordBreak": "break-word", "lineHeight": "1.45"}}>{v.sqlTyped}<span className={"v-caret"}></span></div>
          </div>
        </div>
      </div>
    </div>

    <div aria-hidden={"true"} className={"v-fade"} style={{"position": "absolute", "left": "0", "right": "0", "bottom": "18px", "display": "flex", "justifyContent": "center", "gap": "8px", "fontFamily": "'JetBrains Mono', monospace", "fontSize": "11px", "color": "#5E7398", "animationDelay": "2.2s"}}><span>{v.pipeStats}</span></div>
  </section>

  <section ref={v.refImpact} className={v.cls.impact} style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px", "boxSizing": "border-box", "position": "relative", "top": "-38px"}}>
    <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(220px, 1fr))", "gap": "12px"}}>
      {(v.impact || []).map((k, _i0) => (<React.Fragment key={_i0}>
        <div className={"st v-imp"} style={css(k.style)}>
          <div className={"v-ic"} style={{"width": "42px", "height": "42px", "borderRadius": "10px", "background": "#F1F5FE"}}>
            <svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1D4ED8"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={k.icon}></path></svg>
          </div>
          <div style={{"minWidth": "0"}}>
            <div style={{"fontSize": "26px", "fontWeight": "800", "letterSpacing": "-0.8px", "lineHeight": "1.1"}}>{k.v}</div>
            <div style={{"fontSize": "13px", "color": "#64748B", "marginTop": "2px"}}>{k.l}</div>
          </div>
        </div>
      </React.Fragment>))}
    </div>
  </section>

  <div style={{"overflow": "hidden", "padding": "6px 0 4px"}}>
    <div className={"v-track"} style={{"fontSize": "26px", "fontWeight": "800", "color": "#0A2540"}}>{(v.tools || []).map((t, _i0) => (<React.Fragment key={_i0}><span>{t} <span style={{"color": "#1D4ED8"}}>·</span></span></React.Fragment>))}</div>
  </div>
  <div style={{"overflow": "hidden", "padding": "6px 0 20px"}}>
    <div className={"v-trackr"} style={{"fontSize": "26px", "fontWeight": "800", "color": "#CBD5E1"}}>{(v.tools2 || []).map((t, _i0) => (<React.Fragment key={_i0}><span>{t} ·</span></React.Fragment>))}</div>
  </div>

  <section id={"work"} style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "90px 32px 60px", "boxSizing": "border-box"}}>
    <div ref={v.refWorkHead} className={v.cls.workHead}>
      <div style={{"display": "flex", "gap": "22px", "alignItems": "baseline", "flexWrap": "wrap"}}>
        <span style={{"fontSize": "14px", "fontWeight": "800", "color": "#1D4ED8"}}>01</span>
        <h2 style={{"margin": "0", "fontSize": "clamp(36px, 4.6vw, 54px)", "fontWeight": "800", "letterSpacing": "-2px"}}>Projects</h2>
      </div>
      <p style={{"margin": "12px 0 0", "fontSize": "18px", "color": "#475569"}}>Each project starts with a real business question.</p>
    </div>

    <div style={{"display": "flex", "flexWrap": "wrap", "gap": "48px", "marginTop": "56px", "alignItems": "flex-start"}}>
      <aside className={"v-projnav"} style={{"flex": "1 1 230px", "minWidth": "0", "position": "sticky", "top": "110px"}}>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
          {(v.projList || []).map((p, _i0) => (<React.Fragment key={_i0}>
            <a className={"v-plist"} href={p.href} onClick={p.go} style={css(p.style)}><span style={css(p.numStyle)}>{p.n}</span><span>{p.name}</span></a>
          </React.Fragment>))}
        </div>
        <div style={{"height": "3px", "background": "#EEF2F7", "borderRadius": "9px", "marginTop": "22px", "overflow": "hidden"}}><div style={css(v.projProgress)}></div></div>
        <div style={{"fontSize": "13px", "color": "#64748B", "marginTop": "10px"}}>{v.projCounter}</div>
      </aside>

      <div style={{"flex": "999 1 620px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "120px"}}>

        <article id={"p1"} ref={v.refP1} className={v.cls.p1} style={{"position": "relative"}}>
          <div aria-hidden={"true"} className={"v-ghost"}>01</div>
          <div className={"st"} style={{"fontSize": "13px", "fontWeight": "800", "letterSpacing": "1.5px", "color": "#1D4ED8"}}>LIVE AI APP · PYTHON · MYSQL · POWER BI · GEMINI API</div>
          <h3 className={"st"} style={{"margin": "10px 0 0", "fontSize": "clamp(32px, 4vw, 44px)", "fontWeight": "800", "letterSpacing": "-1.5px"}}>ProductIQ</h3>
          <p className={"st"} style={{"margin": "10px 0 0", "fontSize": "20px", "lineHeight": "1.5", "color": "#475569"}}>“Which products should a company invest in, and which should it drop?”</p>
          <div className={"v-tilt"} onMouseMove={v.tilt1} onMouseLeave={v.untilt1} style={css(v.tiltStyle1)}><div className={"v-frame"} style={{"marginTop": "30px", "border": "1px solid #D5DCE6", "borderRadius": "12px", "overflow": "hidden", "background": "#FFFFFF", "boxShadow": "0 40px 70px -40px rgba(10,37,64,.5)"}}>
            <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "11px 14px", "background": "#F4F6FA", "borderBottom": "1px solid #E5E9F0"}}>
              <span style={{"width": "10px", "height": "10px", "borderRadius": "50%", "background": "#F87171"}}></span><span style={{"width": "10px", "height": "10px", "borderRadius": "50%", "background": "#FBBF24"}}></span><span style={{"width": "10px", "height": "10px", "borderRadius": "50%", "background": "#34D399"}}></span>
              <span style={{"marginLeft": "10px", "flex": "1", "minWidth": "0", "padding": "5px 12px", "borderRadius": "6px", "background": "#FFFFFF", "fontSize": "12px", "color": "#475569", "overflow": "hidden", "whiteSpace": "nowrap", "textOverflow": "ellipsis"}}>{v.frameUrl}</span>
              <span style={{"fontSize": "11px", "fontWeight": "800", "color": "#059669", "display": "flex", "alignItems": "center", "gap": "6px"}}><span className={"v-pulse"} style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#34D399", "display": "inline-block"}}></span>LIVE</span>
            </div>
            <div style={{"position": "relative", "aspectRatio": "1600 / 880", "overflow": "hidden", "background": "#FFFFFF"}}>
              {(v.shots || []).map((sh, _i0) => (<React.Fragment key={_i0}><img loading={"lazy"} decoding={"async"} className={"v-shot"} src={sh.src} alt={sh.alt} style={css(sh.style)} /></React.Fragment>))}
            </div>
          </div></div>
          <div style={{"display": "flex", "gap": "8px", "marginTop": "14px", "flexWrap": "wrap"}}>
            {(v.shotTabs || []).map((st, _i0) => (<React.Fragment key={_i0}><button className={"v-pill"} type={"button"} onClick={st.pick} style={css(st.style)}>{st.label}</button></React.Fragment>))}
          </div>
          <div ref={v.refM1} className={`st ${v.cls.m1}`} style={{"display": "grid", "gridTemplateColumns": "repeat(3, minmax(0, 1fr))", "gap": "14px", "marginTop": "30px", "padding": "22px 0", "borderTop": "1px solid #E5E9F0", "borderBottom": "1px solid #E5E9F0"}}>
            <div><div style={{"fontSize": "34px", "fontWeight": "800", "letterSpacing": "-1px"}}>{v.p1a}</div><div style={{"fontSize": "13px", "color": "#64748B"}}>Rows tested</div></div>
            <div><div style={{"fontSize": "34px", "fontWeight": "800", "letterSpacing": "-1px"}}>{v.p1b}</div><div style={{"fontSize": "13px", "color": "#64748B"}}>Products analysed</div></div>
            <div><div style={{"fontSize": "34px", "fontWeight": "800", "letterSpacing": "-1px", "color": "#1D4ED8"}}>&lt;{v.p1c}s</div><div style={{"fontSize": "13px", "color": "#64748B"}}>Upload to strategy</div></div>
          </div>
          <div role={"tablist"} style={{"display": "flex", "gap": "26px", "borderBottom": "1px solid #E5E9F0", "marginTop": "18px"}}>
            {(v.tabs || []).map((t, _i0) => (<React.Fragment key={_i0}><button type={"button"} role={"tab"} onClick={t.pick} style={css(t.style)}>{t.label}</button></React.Fragment>))}
          </div>
          <div style={{"paddingTop": "18px", "fontSize": "16px", "lineHeight": "1.7", "color": "#334155", "minHeight": "120px"}}>{v.tabText}</div>
          <div style={{"display": "flex", "gap": "12px", "flexWrap": "wrap", "marginTop": "8px"}}>
            <a className={"v-btn"} href={"https://aistrategyconsultant.streamlit.app"} target={"_blank"} rel={"noopener noreferrer"} style={{"display": "inline-flex", "alignItems": "center", "gap": "8px", "minHeight": "46px", "padding": "0 22px", "background": "#0A2540", "color": "#FFFFFF", "borderRadius": "8px", "fontWeight": "700", "fontSize": "14px", "textDecoration": "none"}}>Open live app <span className={"v-arr"}>→</span></a>
            <a className={"v-btn"} href={"https://github.com/theadityajadhav/ProductIQ"} target={"_blank"} rel={"noopener noreferrer"} style={{"display": "inline-flex", "alignItems": "center", "minHeight": "46px", "padding": "0 22px", "border": "1.5px solid #0A2540", "color": "#0A2540", "borderRadius": "8px", "fontWeight": "700", "fontSize": "14px", "textDecoration": "none"}}>View code on GitHub</a>
          </div>
        </article>

        <article id={"p2"} ref={v.refP2} className={v.cls.p2} style={{"position": "relative"}}>
          <div aria-hidden={"true"} className={"v-ghost"}>02</div>
          <div className={"st"} style={{"fontSize": "13px", "fontWeight": "800", "letterSpacing": "1.5px", "color": "#1D4ED8"}}>POWER BI · MYSQL · DAX · POWER QUERY</div>
          <h3 className={"st"} style={{"margin": "10px 0 0", "fontSize": "clamp(32px, 4vw, 44px)", "fontWeight": "800", "letterSpacing": "-1.5px"}}>Columbia Asia Hospital</h3>
          <p className={"st"} style={{"margin": "10px 0 0", "maxWidth": "680px", "fontSize": "20px", "lineHeight": "1.5", "color": "#475569"}}>“Where is the hospital overloaded, and where should it hire, set shifts and offer discounts?”</p>
          <div className={"v-tilt"} onMouseMove={v.tilt3} onMouseLeave={v.untilt3} style={css(v.tiltStyle3)}><div className={"v-frame"} style={{"marginTop": "30px", "border": "1px solid #D5DCE6", "borderRadius": "12px", "overflow": "hidden", "background": "#FFFFFF", "boxShadow": "0 40px 70px -40px rgba(10,37,64,.5)"}}>
            <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "11px 14px", "background": "#F4F6FA", "borderBottom": "1px solid #E5E9F0"}}>
              <span style={{"width": "10px", "height": "10px", "borderRadius": "50%", "background": "#F87171"}}></span><span style={{"width": "10px", "height": "10px", "borderRadius": "50%", "background": "#FBBF24"}}></span><span style={{"width": "10px", "height": "10px", "borderRadius": "50%", "background": "#34D399"}}></span>
              <span style={{"marginLeft": "10px", "flex": "1", "minWidth": "0", "padding": "5px 12px", "borderRadius": "6px", "background": "#FFFFFF", "fontSize": "12px", "color": "#475569", "overflow": "hidden", "whiteSpace": "nowrap", "textOverflow": "ellipsis"}}>Power BI · columbia_asia_dashboard.pbix · {v.caPage}</span>
              <span style={{"fontSize": "11px", "fontWeight": "800", "color": "#475569"}}>8 PAGES</span>
            </div>
            <div style={{"position": "relative", "aspectRatio": "1600 / 917", "overflow": "hidden", "background": "#FFFFFF"}}>
              {(v.caShots || []).map((sh, _i0) => (<React.Fragment key={_i0}><img loading={"lazy"} decoding={"async"} className={"v-shot"} src={sh.src} alt={sh.alt} style={css(sh.style)} /></React.Fragment>))}
            </div>
          </div></div>
          <div style={{"display": "flex", "gap": "8px", "marginTop": "14px", "flexWrap": "wrap"}}>
            {(v.caTabs || []).map((st, _i0) => (<React.Fragment key={_i0}><button className={"v-pill"} type={"button"} onClick={st.pick} style={css(st.style)}>{st.label}</button></React.Fragment>))}
          </div>
          <div ref={v.refC5} className={`st ${v.cls.c5}`} style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(260px, 1fr))", "gap": "18px", "marginTop": "26px"}}>
            <div className={"v-hov"} style={{"border": "1px solid #E5E9F0", "borderRadius": "12px", "padding": "22px", "background": "#FFFFFF"}}>
              <div style={{"fontSize": "13px", "fontWeight": "800", "color": "#0A2540"}}>Where the visits go</div>
              <div style={{"fontSize": "12px", "color": "#64748B", "marginTop": "2px"}}>Visits by department · case-study data, Apr 2019 to Oct 2020</div>
              <div style={{"display": "flex", "flexDirection": "column", "gap": "8px", "marginTop": "16px"}}>
                {(v.caDepts || []).map((dp, _i0) => (<React.Fragment key={_i0}>
                  <div style={{"display": "flex", "alignItems": "center", "gap": "10px"}}><span style={css(dp.nameStyle)}>{dp.name}</span><div style={{"flex": "1", "height": "12px", "background": "#EEF2F7", "borderRadius": "3px", "overflow": "hidden"}}><div className={"v-hbar"} style={css(dp.style)}></div></div><span style={{"width": "40px", "fontSize": "12px", "fontWeight": "700", "textAlign": "right"}}>{dp.v}</span></div>
                </React.Fragment>))}
              </div>
              <div style={{"fontSize": "13px", "color": "#475569", "marginTop": "14px", "lineHeight": "1.5"}}>General Practice takes 78.6% of visits with only 3 doctors, about 2,413 visits each.</div>
            </div>
            <div className={"v-hov"} style={{"border": "1px solid #E5E9F0", "borderRadius": "12px", "padding": "22px", "background": "#FFFFFF"}}>
              <div style={{"fontSize": "13px", "fontWeight": "800", "color": "#0A2540"}}>What I recommended</div>
              <div style={{"fontSize": "12px", "color": "#64748B", "marginTop": "2px"}}>Each one backed by the numbers</div>
              <div style={{"display": "flex", "flexDirection": "column", "gap": "12px", "marginTop": "16px"}}>
                {(v.caRecs || []).map((rc, _i0) => (<React.Fragment key={_i0}>
                  <div style={{"display": "flex", "gap": "12px", "alignItems": "flex-start"}}><span style={css(rc.numStyle)}>{rc.n}</span><div style={{"minWidth": "0"}}><div style={{"fontSize": "14px", "fontWeight": "800", "color": "#0A2540"}}>{rc.title}</div><div style={{"fontSize": "13px", "color": "#475569", "lineHeight": "1.5", "marginTop": "2px"}}>{rc.text}</div></div></div>
                </React.Fragment>))}
              </div>
            </div>
          </div>
          <div ref={v.refM5} className={`st ${v.cls.m5}`} style={{"display": "grid", "gridTemplateColumns": "repeat(3, minmax(0, 1fr))", "gap": "14px", "marginTop": "26px", "padding": "22px 0", "borderTop": "1px solid #E5E9F0", "borderBottom": "1px solid #E5E9F0"}}>
            <div><div style={{"fontSize": "34px", "fontWeight": "800", "letterSpacing": "-1px"}}>{v.p5a}</div><div style={{"fontSize": "13px", "color": "#64748B"}}>Visits analysed</div></div>
            <div><div style={{"fontSize": "34px", "fontWeight": "800", "letterSpacing": "-1px"}}>{v.p5b}%</div><div style={{"fontSize": "13px", "color": "#64748B"}}>Visits to one department</div></div>
            <div><div style={{"fontSize": "34px", "fontWeight": "800", "letterSpacing": "-1px", "color": "#1D4ED8"}}>{v.p5c}</div><div style={{"fontSize": "13px", "color": "#64748B"}}>Minutes average wait</div></div>
          </div>
          <a className={"v-btn"} href={"https://github.com/theadityajadhav/columbia-asia-hospital-analysis"} target={"_blank"} rel={"noopener noreferrer"} style={{"display": "inline-flex", "alignItems": "center", "gap": "8px", "marginTop": "22px", "minHeight": "46px", "padding": "0 22px", "border": "1.5px solid #0A2540", "color": "#0A2540", "borderRadius": "8px", "fontWeight": "700", "fontSize": "14px", "textDecoration": "none"}}>View SQL and Power BI <span className={"v-arr"}>→</span></a>
        </article>

        <article id={"p3"} ref={v.refP3} className={v.cls.p3} style={{"position": "relative"}}>
          <div aria-hidden={"true"} className={"v-ghost"}>03</div>
          <div className={"st"} style={{"fontSize": "13px", "fontWeight": "800", "letterSpacing": "1.5px", "color": "#1D4ED8"}}>SQL · MYSQL · CTES · WINDOW FUNCTIONS</div>
          <h3 className={"st"} style={{"margin": "10px 0 0", "fontSize": "clamp(32px, 4vw, 44px)", "fontWeight": "800", "letterSpacing": "-1.5px"}}>Chinook Music Store</h3>
          <p className={"st"} style={{"margin": "10px 0 0", "fontSize": "20px", "lineHeight": "1.5", "color": "#475569"}}>“Which customers are about to leave, and what keeps the rest buying?”</p>
          <div ref={v.refC3} className={`st ${v.cls.c3}`} style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(260px, 1fr))", "gap": "18px", "marginTop": "30px"}}>
            <div className={"v-hov"} style={{"border": "1px solid #E5E9F0", "borderRadius": "12px", "padding": "22px", "background": "#FFFFFF"}}>
              <div style={{"fontSize": "13px", "fontWeight": "800"}}>Yearly churn rate</div>
              <div style={{"fontSize": "12px", "color": "#64748B", "marginTop": "2px"}}>Customers active one year, gone the next</div>
              <svg viewBox={"0 0 300 150"} style={{"width": "100%", "height": "auto", "marginTop": "12px", "display": "block"}} role={"img"} aria-label={"Churn rate: 2017 7.02 percent, 2018 9.09 percent, 2019 1.85 percent"}>
                <line x1={"20"} y1={"120"} x2={"290"} y2={"120"} stroke={"#E5E9F0"} strokeWidth={"1"}></line>
                <path className={"v-path"} d={"M40,62 L150,30 L260,105"} fill={"none"} stroke={"#1D4ED8"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
                <g className={"v-dotin"} style={{"animationDelay": "1.4s"}}><circle cx={"40"} cy={"62"} r={"5"} fill={"#1D4ED8"}></circle><circle cx={"150"} cy={"30"} r={"5"} fill={"#1D4ED8"}></circle><circle cx={"260"} cy={"105"} r={"5"} fill={"#1D4ED8"}></circle>
                <text x={"40"} y={"50"} textAnchor={"middle"} fontSize={"12"} fontWeight={"800"} fill={"#0A2540"} fontFamily={"Manrope"}>7.02%</text><text x={"150"} y={"18"} textAnchor={"middle"} fontSize={"12"} fontWeight={"800"} fill={"#0A2540"} fontFamily={"Manrope"}>9.09%</text><text x={"260"} y={"93"} textAnchor={"middle"} fontSize={"12"} fontWeight={"800"} fill={"#0A2540"} fontFamily={"Manrope"}>1.85%</text></g>
                <text x={"40"} y={"140"} textAnchor={"middle"} fontSize={"11"} fill={"#64748B"} fontFamily={"Manrope"}>2017</text><text x={"150"} y={"140"} textAnchor={"middle"} fontSize={"11"} fill={"#64748B"} fontFamily={"Manrope"}>2018</text><text x={"260"} y={"140"} textAnchor={"middle"} fontSize={"11"} fill={"#64748B"} fontFamily={"Manrope"}>2019</text>
              </svg>
            </div>
            <div className={"v-hov"} style={{"border": "1px solid #E5E9F0", "borderRadius": "12px", "padding": "22px", "background": "#FFFFFF"}}>
              <div style={{"fontSize": "13px", "fontWeight": "800"}}>Customer risk segments</div>
              <div style={{"fontSize": "12px", "color": "#64748B", "marginTop": "2px"}}>By days since last purchase</div>
              <div style={{"display": "flex", "alignItems": "flex-end", "gap": "16px", "height": "100px", "marginTop": "18px"}}>
                <div style={{"flex": "1", "height": "100%", "display": "flex", "alignItems": "flex-end"}}><div className={"v-bar"} style={{"width": "100%", "height": "100%", "background": "#0A2540", "borderRadius": "4px 4px 0 0"}}></div></div>
                <div style={{"flex": "1", "height": "100%", "display": "flex", "alignItems": "flex-end"}}><div className={"v-bar"} style={{"width": "100%", "height": "35%", "background": "#1D4ED8", "borderRadius": "4px 4px 0 0", "animationDelay": ".15s"}}></div></div>
                <div style={{"flex": "1", "height": "100%", "display": "flex", "alignItems": "flex-end"}}><div className={"v-bar"} style={{"width": "100%", "height": "5%", "background": "#EA580C", "borderRadius": "4px 4px 0 0", "animationDelay": ".3s"}}></div></div>
              </div>
              <div style={{"display": "flex", "gap": "16px", "marginTop": "8px", "fontSize": "12px", "fontWeight": "800", "textAlign": "center"}}><span style={{"flex": "1"}}>Low · 43</span><span style={{"flex": "1"}}>Medium · 15</span><span style={{"flex": "1", "color": "#EA580C"}}>High · 1</span></div>
              <div style={{"fontSize": "13px", "color": "#475569", "marginTop": "14px", "lineHeight": "1.5"}}>15 medium-risk customers are the retention target.</div>
            </div>
          </div>
          <div className={"st v-hov"} style={{"marginTop": "18px", "borderRadius": "12px", "background": "#06142B", "color": "#C7D2E5", "padding": "20px 22px", "overflowX": "auto", "border": "1px solid #06142B"}}>{(v.codeLines || []).map((cl, _i0) => (<React.Fragment key={_i0}><div className={"v-code"} style={css(cl.style)}>{(cl.segs || []).map((sg, _i1) => (<React.Fragment key={_i1}><span style={css(sg.style)}>{sg.t}</span></React.Fragment>))}</div></React.Fragment>))}</div>
          <div ref={v.refM3} className={`st ${v.cls.m3}`} style={{"display": "grid", "gridTemplateColumns": "repeat(3, minmax(0, 1fr))", "gap": "14px", "marginTop": "26px", "padding": "22px 0", "borderTop": "1px solid #E5E9F0", "borderBottom": "1px solid #E5E9F0"}}>
            <div><div style={{"fontSize": "34px", "fontWeight": "800", "letterSpacing": "-1px"}}>{v.p3a}</div><div style={{"fontSize": "13px", "color": "#64748B"}}>Customers profiled</div></div>
            <div><div style={{"fontSize": "34px", "fontWeight": "800", "letterSpacing": "-1px"}}>{v.p3b}</div><div style={{"fontSize": "13px", "color": "#64748B"}}>Countries</div></div>
            <div><div style={{"fontSize": "34px", "fontWeight": "800", "letterSpacing": "-1px", "color": "#1D4ED8"}}>{v.p3c}%</div><div style={{"fontSize": "13px", "color": "#64748B"}}>USA sales from Rock</div></div>
          </div>
          <a className={"v-btn"} href={"https://github.com/theadityajadhav/Chinook-SQL-Data-Analysis"} target={"_blank"} rel={"noopener noreferrer"} style={{"display": "inline-flex", "alignItems": "center", "gap": "8px", "marginTop": "22px", "minHeight": "46px", "padding": "0 22px", "border": "1.5px solid #0A2540", "color": "#0A2540", "borderRadius": "8px", "fontWeight": "700", "fontSize": "14px", "textDecoration": "none"}}>View SQL on GitHub <span className={"v-arr"}>→</span></a>
        </article>

        <article id={"p4"} ref={v.refP4} className={v.cls.p4} style={{"position": "relative"}}>
          <div aria-hidden={"true"} className={"v-ghost"}>04</div>
          <div className={"st"} style={{"fontSize": "13px", "fontWeight": "800", "letterSpacing": "1.5px", "color": "#1D4ED8"}}>EXCEL · PIVOT TABLES · DASHBOARD</div>
          <h3 className={"st"} style={{"margin": "10px 0 0", "fontSize": "clamp(32px, 4vw, 44px)", "fontWeight": "800", "letterSpacing": "-1.5px"}}>AstroSage Call Centre</h3>
          <p className={"st"} style={{"margin": "10px 0 0", "fontSize": "20px", "lineHeight": "1.5", "color": "#475569"}}>“Where should a ₹1 crore investment go?”</p>
          <div className={"v-tilt"} onMouseMove={v.tilt2} onMouseLeave={v.untilt2} style={css(v.tiltStyle2)}><div className={"v-frame"} style={{"marginTop": "30px", "borderRadius": "12px", "overflow": "hidden", "border": "1px solid #E5E9F0", "boxShadow": "0 40px 70px -40px rgba(10,37,64,.5)"}}>
            <div style={{"aspectRatio": "2.35 / 1", "overflow": "hidden", "background": "#FFFFFF"}}><img loading={"lazy"} decoding={"async"} src={"/images/astrosage-excel-dashboard.jpg"} alt={"AstroSage Excel dashboard with KPIs and charts"} style={{"width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "center", "display": "block"}} /></div>
          </div></div>
          <div ref={v.refC2} className={`st ${v.cls.c2}`} style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(260px, 1fr))", "gap": "18px", "marginTop": "26px"}}>
            <div className={"v-hov"} style={{"border": "1px solid #E5E9F0", "borderRadius": "12px", "padding": "22px", "background": "#FFFFFF"}}>
              <div style={{"fontSize": "13px", "fontWeight": "800", "color": "#0A2540"}}>Busiest hours</div>
              <div style={{"fontSize": "12px", "color": "#64748B", "marginTop": "2px"}}>Consultations per hour, all days</div>
              <div style={{"display": "flex", "flexDirection": "column", "gap": "9px", "marginTop": "16px"}}>
                {(v.peaks || []).map((pk, _i0) => (<React.Fragment key={_i0}>
                  <div style={{"display": "flex", "alignItems": "center", "gap": "10px"}}><span style={{"width": "46px", "fontSize": "12px", "fontWeight": "700"}}>{pk.h}</span><div style={{"flex": "1", "height": "14px", "background": "#EEF2F7", "borderRadius": "3px", "overflow": "hidden"}}><div className={"v-hbar"} style={css(pk.style)}></div></div><span style={{"width": "44px", "fontSize": "12px", "fontWeight": "700", "textAlign": "right"}}>{pk.v}</span></div>
                </React.Fragment>))}
              </div>
              <div style={{"fontSize": "13px", "color": "#475569", "marginTop": "14px", "lineHeight": "1.5"}}>Calls peak early in the morning and mid-afternoon, so shifts should be planned around those hours.</div>
            </div>
            <div className={"v-hov"} style={{"border": "1px solid #E5E9F0", "borderRadius": "12px", "padding": "22px", "background": "#FFFFFF"}}>
              <div style={{"fontSize": "13px", "fontWeight": "800", "color": "#0A2540"}}>My ₹1 crore recommendation</div>
              <div style={{"fontSize": "12px", "color": "#64748B", "marginTop": "2px"}}>Split across five areas</div>
              <div style={{"display": "flex", "height": "22px", "borderRadius": "6px", "overflow": "hidden", "marginTop": "18px"}}>
                {(v.alloc || []).map((al, _i0) => (<React.Fragment key={_i0}><div className={"v-hbar"} style={css(al.style)}></div></React.Fragment>))}
              </div>
              <div style={{"display": "flex", "flexDirection": "column", "gap": "7px", "marginTop": "16px"}}>
                {(v.alloc || []).map((al, _i0) => (<React.Fragment key={_i0}>
                  <div style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "13px"}}><span style={css(al.dot)}></span><span style={{"flex": "1"}}>{al.name}</span><span style={{"fontWeight": "800"}}>{al.v}</span></div>
                </React.Fragment>))}
              </div>
            </div>
          </div>
          <div ref={v.refM2} className={`st ${v.cls.m2}`} style={{"display": "grid", "gridTemplateColumns": "repeat(3, minmax(0, 1fr))", "gap": "14px", "marginTop": "26px", "padding": "22px 0", "borderTop": "1px solid #E5E9F0", "borderBottom": "1px solid #E5E9F0"}}>
            <div><div style={{"fontSize": "34px", "fontWeight": "800", "letterSpacing": "-1px"}}>{v.p2a}</div><div style={{"fontSize": "13px", "color": "#64748B"}}>Consultations analysed</div></div>
            <div><div style={{"fontSize": "34px", "fontWeight": "800", "letterSpacing": "-1px"}}>{v.p2b}%</div><div style={{"fontSize": "13px", "color": "#64748B"}}>Callers who come back</div></div>
            <div><div style={{"fontSize": "34px", "fontWeight": "800", "letterSpacing": "-1px", "color": "#1D4ED8"}}>{v.p2c}%</div><div style={{"fontSize": "13px", "color": "#64748B"}}>Revenue from calls</div></div>
          </div>
          <a className={"v-btn"} href={"https://github.com/theadityajadhav/astrosage-customer-support-analytics"} target={"_blank"} rel={"noopener noreferrer"} style={{"display": "inline-flex", "alignItems": "center", "gap": "8px", "marginTop": "22px", "minHeight": "46px", "padding": "0 22px", "border": "1.5px solid #0A2540", "color": "#0A2540", "borderRadius": "8px", "fontWeight": "700", "fontSize": "14px", "textDecoration": "none"}}>View full analysis <span className={"v-arr"}>→</span></a>
        </article>

      </div>
    </div>
  </section>

  <section id={"skills"} style={{"background": "#F6F8FC", "marginTop": "40px"}}>
    <div ref={v.refSkills} className={v.cls.skills} style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "110px 32px", "boxSizing": "border-box"}}>
      <div className={"st"} style={{"display": "flex", "gap": "22px", "alignItems": "baseline", "flexWrap": "wrap"}}>
        <span style={{"fontSize": "14px", "fontWeight": "800", "color": "#1D4ED8"}}>02</span>
        <h2 style={{"margin": "0", "fontSize": "clamp(36px, 4.6vw, 54px)", "fontWeight": "800", "letterSpacing": "-2px"}}>Skills, proven in projects</h2>
      </div>
      <p className={"st"} style={{"margin": "12px 0 48px", "fontSize": "18px", "color": "#475569", "maxWidth": "640px", "lineHeight": "1.6"}}>Click any skill to see which project I used it in, and how.</p>
      <div className={"st"} style={{"display": "flex", "flexWrap": "wrap", "gap": "48px"}}>
        <div style={{"flex": "1 1 460px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "26px"}}>
          {(v.groups || []).map((g, _i0) => (<React.Fragment key={_i0}>
            <div>
              <div style={{"display": "flex", "alignItems": "center", "gap": "10px", "marginBottom": "12px"}}><span className={"v-ic"} style={{"width": "30px", "height": "30px", "borderRadius": "8px", "background": "#FFFFFF", "border": "1px solid #E5E9F0"}}><svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1D4ED8"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={g.icon}></path></svg></span><span style={{"fontSize": "12px", "fontWeight": "800", "letterSpacing": "2px", "textTransform": "uppercase", "color": "#64748B"}}>{g.name}</span></div>
              <div style={{"display": "flex", "flexWrap": "wrap", "gap": "10px"}}>{(g.skills || []).map((s, _i1) => (<React.Fragment key={_i1}><button className={"v-chip"} type={"button"} onClick={s.pick} style={css(s.style)}><svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={s.icon}></path></svg>{s.name}</button></React.Fragment>))}</div>
            </div>
          </React.Fragment>))}
        </div>
        <div className={"v-skillpanel"} style={{"flex": "1 1 520px", "minWidth": "0", "background": "#FFFFFF", "border": "1px solid #E5E9F0", "borderRadius": "14px", "padding": "28px", "boxSizing": "border-box", "boxShadow": "0 30px 60px -45px rgba(10,37,64,.5)"}}>
          <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "flexWrap": "wrap", "gap": "8px"}}>
            <div style={{"fontSize": "28px", "fontWeight": "800", "letterSpacing": "-0.5px"}}>{v.selName}</div>
            <div style={{"fontSize": "14px", "fontWeight": "600", "color": "#475569"}}>Used in <span style={{"color": "#1D4ED8", "fontWeight": "800"}}>{v.selCount}</span> of 4 projects</div>
          </div>
          <div style={{"height": "6px", "background": "#EEF2F7", "borderRadius": "99px", "margin": "16px 0 22px", "overflow": "hidden"}}><div style={css(v.selFill)}></div></div>
          <div style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
            {(v.projRows || []).map((p, _i0) => (<React.Fragment key={_i0}>
              <div className={"v-proj"} style={css(p.style)}><span style={css(p.dot)}></span><div style={{"flex": "1", "minWidth": "0"}}><div style={{"fontSize": "16px", "fontWeight": "800"}}>{p.name}</div><div style={{"fontSize": "14px", "color": "#475569", "marginTop": "3px", "lineHeight": "1.5"}}>{p.how}</div></div></div>
            </React.Fragment>))}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id={"process"} ref={v.refProcess} className={v.cls.process} style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "120px 32px 40px", "boxSizing": "border-box"}}>
    <div className={"st"} style={{"display": "flex", "gap": "22px", "alignItems": "baseline", "flexWrap": "wrap"}}>
      <span style={{"fontSize": "14px", "fontWeight": "800", "color": "#1D4ED8"}}>03</span>
      <h2 style={{"margin": "0", "fontSize": "clamp(36px, 4.6vw, 54px)", "fontWeight": "800", "letterSpacing": "-2px"}}>How I work</h2>
    </div>
    <p className={"st"} style={{"margin": "12px 0 0", "fontSize": "18px", "color": "#475569"}}>The four steps I follow in every project.</p>
    <div className={"v-procwrap"} style={{"position": "relative", "marginTop": "60px"}}>
      <div style={{"position": "absolute", "left": "14px", "right": "14px", "top": "13px", "height": "2px", "background": "#E5E9F0"}}></div>
      <div className={"v-hline"} style={{"position": "absolute", "left": "14px", "right": "14px", "top": "13px", "height": "2px", "background": "#1D4ED8"}}></div>
      <div style={{"position": "absolute", "left": "14px", "right": "14px", "top": "0", "height": "30px"}}><span className={"v-traveler"}></span></div>
      <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(230px, 1fr))", "gap": "28px", "position": "relative"}}>
        {(v.process || []).map((p, _i0) => (<React.Fragment key={_i0}>
          <div>
            <span className={"v-step-node"} style={css(p.node)}></span>
            <div style={{"fontSize": "13px", "fontWeight": "800", "color": "#1D4ED8", "marginTop": "24px", "letterSpacing": "1px"}}>{p.n}</div>
            <div className={"v-step-title"} style={css(p.titleStyle)}>{p.title}</div>
            <div style={{"fontSize": "15px", "lineHeight": "1.6", "color": "#475569", "marginTop": "8px"}}>{p.text}</div>
            <div style={{"marginTop": "14px", "padding": "14px", "background": "#F6F8FC", "borderRadius": "10px", "fontSize": "13px", "lineHeight": "1.55", "color": "#0A2540"}}><div style={{"fontSize": "11px", "fontWeight": "800", "letterSpacing": "1.5px", "color": "#1D4ED8", "marginBottom": "4px"}}>REAL EXAMPLE</div>{p.ex}</div>
          </div>
        </React.Fragment>))}
      </div>
    </div>
  </section>

  <section id={"about"} ref={v.refAbout} className={v.cls.about} style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "130px 32px 40px", "boxSizing": "border-box"}}>
    <div className={"st"} style={{"display": "flex", "gap": "22px", "alignItems": "baseline", "flexWrap": "wrap"}}>
      <span style={{"fontSize": "14px", "fontWeight": "800", "color": "#1D4ED8"}}>04</span>
      <h2 style={{"margin": "0", "fontSize": "clamp(36px, 4.6vw, 54px)", "fontWeight": "800", "letterSpacing": "-2px"}}>About me</h2>
    </div>
    <div style={{"display": "flex", "flexWrap": "wrap", "gap": "32px", "marginTop": "44px"}}>
      <div className={"st"} style={{"flex": "1 1 560px", "minWidth": "0", "borderRadius": "16px", "background": "#06142B", "color": "#C7D2E5", "padding": "26px", "boxSizing": "border-box", "fontFamily": "'JetBrains Mono', monospace", "fontSize": "14px"}}>
        <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "flexWrap": "wrap", "marginBottom": "16px"}}>
          <span style={{"fontFamily": "Manrope, sans-serif", "fontSize": "11px", "fontWeight": "800", "letterSpacing": "1.5px", "textTransform": "uppercase", "color": "#7F93B5", "marginRight": "4px"}}>Run a query</span>
          {(v.qPills || []).map((q, _i0) => (<React.Fragment key={_i0}><button className={"v-qpill"} type={"button"} onClick={q.pick} style={css(q.style)}>{q.label}</button></React.Fragment>))}
        </div>
        <div style={{"color": "#67E8F9", "minHeight": "21px", "whiteSpace": "pre-wrap", "wordBreak": "break-word", "lineHeight": "1.5"}}>{v.qTyped}<span className={"v-caret"}></span></div>
        <div style={{"marginTop": "16px", "borderTop": "1px solid #1E3A5F"}}>
          <div style={css(v.qHead)}><span style={css(v.qKeyStyle)}>{v.qCol1}</span><span>{v.qCol2}</span></div>
          {(v.qRows || []).map((r, _i0) => (<React.Fragment key={_i0}>
            <div className={r.cls} onClick={r.go} style={css(r.style)}><span className={r.kCls} style={css(r.kStyle)}>{r.k}</span><span style={{"color": "#FFFFFF", "minWidth": "0", "flex": "1"}}>{r.v}</span><span className={"v-qarr"} style={css(r.arrStyle)}>→</span></div>
          </React.Fragment>))}
        </div>
        <div style={{"color": "#5E7398", "marginTop": "14px", "fontSize": "12px"}}>{v.qCount}</div>
      </div>
      <div className={"st"} style={{"flex": "1 1 360px", "minWidth": "0", "display": "grid", "gridTemplateColumns": "repeat(2, minmax(0, 1fr))", "gap": "16px"}}>
        {(v.rings || []).map((rg, _i0) => (<React.Fragment key={_i0}>
          <div className={"v-ringcard"} style={{"border": "1px solid #E5E9F0", "borderRadius": "16px", "padding": "22px", "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center"}}>
            <div style={{"position": "relative", "width": "120px", "height": "120px"}}>
              <svg viewBox={"0 0 120 120"} width={"120"} height={"120"} aria-hidden={"true"} style={{"transform": "rotate(-90deg)"}}><circle cx={"60"} cy={"60"} r={"48"} fill={"none"} stroke={"#EEF2F7"} strokeWidth={"10"}></circle><circle className={"v-ring"} cx={"60"} cy={"60"} r={"48"} fill={"none"} stroke={"#1D4ED8"} strokeWidth={"10"} strokeLinecap={"round"} style={css(rg.ring)}></circle></svg>
              <div style={{"position": "absolute", "inset": "0", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center"}}><span style={{"fontSize": "19px", "fontWeight": "800", "letterSpacing": "-0.5px"}}>{rg.v}</span><span style={{"fontSize": "11px", "fontWeight": "700", "color": "#64748B", "letterSpacing": "1px"}}>{rg.unit}</span></div>
            </div>
            <div style={{"fontSize": "15px", "fontWeight": "800", "marginTop": "14px"}}>{rg.title}</div>
            <div style={{"fontSize": "13px", "color": "#64748B", "marginTop": "4px"}}>{rg.sub}</div>
            {(rg.badge) ? (<><span style={{"marginTop": "10px", "padding": "4px 10px", "borderRadius": "999px", "background": "#FEF3C7", "color": "#92400E", "fontSize": "12px", "fontWeight": "800"}}>{rg.badge}</span></>) : null}
          </div>
        </React.Fragment>))}
      </div>
    </div>

    <div ref={v.refRes} className={`st v-research ${v.cls.res}`} style={{"marginTop": "32px", "borderRadius": "16px", "background": "linear-gradient(120deg,#06142B,#0F2A55)", "color": "#FFFFFF", "padding": "30px", "display": "flex", "flexWrap": "wrap", "gap": "28px", "alignItems": "center", "justifyContent": "space-between", "position": "relative", "overflow": "hidden"}}>
      <div style={{"flex": "1 1 520px", "minWidth": "0", "position": "relative"}}>
        <div style={{"display": "flex", "gap": "10px", "flexWrap": "wrap", "alignItems": "center"}}>
          <span style={{"fontSize": "12px", "fontWeight": "800", "letterSpacing": "1.5px", "textTransform": "uppercase", "color": "#67E8F9"}}>Research &amp; leadership</span>
          <span style={{"fontSize": "12px", "fontWeight": "700", "padding": "4px 10px", "borderRadius": "999px", "background": "rgba(103,232,249,.14)", "color": "#A5F3FC"}}>Published · Springer, 2025</span>
        </div>
        <div style={{"fontSize": "26px", "fontWeight": "800", "letterSpacing": "-0.5px", "marginTop": "12px"}}>AI chatbot for university support</div>
        <p style={{"margin": "10px 0 0", "fontSize": "16px", "lineHeight": "1.65", "color": "#B6C4DA", "maxWidth": "640px"}}>I led a team of five to research and design an AI chatbot that answers student questions about courses, admissions and campus services. I owned the project from defining the problem to presenting it, and our paper was published by Springer.</p>
        <div style={{"display": "flex", "gap": "8px", "flexWrap": "wrap", "marginTop": "16px"}}>
          <span style={{"fontSize": "12px", "fontWeight": "700", "padding": "6px 12px", "borderRadius": "999px", "border": "1px solid rgba(255,255,255,.18)"}}>Project lead</span>
          <span style={{"fontSize": "12px", "fontWeight": "700", "padding": "6px 12px", "borderRadius": "999px", "border": "1px solid rgba(255,255,255,.18)"}}>Team of 5</span>
          <span style={{"fontSize": "12px", "fontWeight": "700", "padding": "6px 12px", "borderRadius": "999px", "border": "1px solid rgba(255,255,255,.18)"}}>Applied AI</span>
          <span style={{"fontSize": "12px", "fontWeight": "700", "padding": "6px 12px", "borderRadius": "999px", "border": "1px solid rgba(255,255,255,.18)"}}>Research</span>
        </div>
      </div>
      <a className={"v-btn"} href={"https://link.springer.com/chapter/10.1007/978-981-96-6250-0_39"} target={"_blank"} rel={"noopener noreferrer"} style={{"position": "relative", "display": "inline-flex", "alignItems": "center", "gap": "8px", "minHeight": "50px", "padding": "0 22px", "background": "#FFFFFF", "color": "#06142B", "borderRadius": "8px", "fontWeight": "800", "fontSize": "14px", "textDecoration": "none"}}>Read the paper <span className={"v-arr"}>→</span></a>
    </div>

    <div style={{"display": "flex", "flexWrap": "wrap", "gap": "64px", "marginTop": "64px"}}>
      <div style={{"flex": "1 1 440px", "minWidth": "0"}}>
        <p className={"st"} style={{"margin": "0", "fontSize": "28px", "lineHeight": "1.4", "fontWeight": "800", "letterSpacing": "-0.5px"}}>Computer engineer turned data analyst. I like questions that end with a decision, not just a chart.</p>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "marginTop": "30px"}}>
          {(v.qualities || []).map((q, _i0) => (<React.Fragment key={_i0}>
            <div className={"v-qcard st"} style={{"display": "flex", "gap": "16px", "alignItems": "flex-start", "padding": "18px", "border": "1px solid #E5E9F0", "borderRadius": "12px", "background": "#FFFFFF"}}>
              <div style={{"width": "44px", "height": "44px", "borderRadius": "10px", "background": "#F1F5FE", "display": "flex", "alignItems": "center", "justifyContent": "center", "flex": "none"}}><svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1D4ED8"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={q.icon}></path></svg></div>
              <div style={{"minWidth": "0"}}><div style={{"fontSize": "17px", "fontWeight": "800"}}>{q.title}</div><div style={{"fontSize": "15px", "lineHeight": "1.55", "color": "#475569", "marginTop": "3px"}}>{q.text}</div></div>
            </div>
          </React.Fragment>))}
        </div>
      </div>
      <div style={{"flex": "1 1 400px", "minWidth": "0"}}>
        <div style={{"fontSize": "12px", "fontWeight": "800", "letterSpacing": "2px", "textTransform": "uppercase", "color": "#64748B", "marginBottom": "26px"}}>Journey</div>
        <div ref={v.refJr} className={v.cls.jr} style={{"position": "relative", "paddingLeft": "44px"}}>
          <div style={{"position": "absolute", "left": "11px", "top": "6px", "bottom": "6px", "width": "2px", "background": "#E5E9F0"}}></div>
          <div className={"v-line"} style={{"position": "absolute", "left": "11px", "top": "6px", "bottom": "6px", "width": "2px", "background": "#1D4ED8"}}></div>
          <div style={{"display": "flex", "flexDirection": "column", "gap": "38px"}}>
            {(v.journey || []).map((j, _i0) => (<React.Fragment key={_i0}>
              <div style={{"position": "relative"}}>
                <span className={"v-node"} style={css(j.node)}></span>
                <div style={{"fontSize": "13px", "fontWeight": "800", "color": "#1D4ED8", "letterSpacing": "1px"}}>{j.year}</div>
                <div style={{"fontSize": "20px", "fontWeight": "800", "marginTop": "4px"}}>{j.title}</div>
                <div style={{"fontSize": "15px", "color": "#475569", "marginTop": "4px"}}>{j.place}</div>
                {(j.badge) ? (<><span style={{"display": "inline-block", "marginTop": "8px", "padding": "4px 10px", "borderRadius": "999px", "background": "#F1F5FE", "color": "#1D4ED8", "fontSize": "12px", "fontWeight": "800"}}>{j.badge}</span></>) : null}
              </div>
            </React.Fragment>))}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id={"contact"} style={{"position": "relative", "background": "#06142B", "color": "#FFFFFF", "marginTop": "130px", "overflow": "hidden"}}>
    <div aria-hidden={"true"} className={"v-blob v-b1"} style={{"width": "620px", "height": "620px", "right": "-160px", "top": "-200px", "background": "rgba(37,99,235,.32)"}}></div>
    <div aria-hidden={"true"} className={"v-blob v-b2"} style={{"width": "520px", "height": "520px", "left": "-160px", "bottom": "-220px", "background": "rgba(34,211,238,.16)"}}></div>
    <div ref={v.refContact} className={v.cls.contact} style={{"position": "relative", "maxWidth": "1240px", "margin": "0 auto", "padding": "130px 32px 60px", "boxSizing": "border-box"}}>
      <div className={"st"} style={{"fontSize": "14px", "fontWeight": "800", "color": "#67E8F9"}}>05 · Contact</div>
      <h2 style={{"margin": "18px 0 0", "fontSize": "clamp(44px, 7vw, 84px)", "lineHeight": "1.02", "fontWeight": "800", "letterSpacing": "-3.5px", "maxWidth": "980px"}}>
        {(v.contactWords || []).map((w, _i0) => (<React.Fragment key={_i0}><span className={"v-mask"}><span className={w.cls} style={css(w.style)}>{w.t}</span></span> </React.Fragment>))}
      </h2>
      <p className={"st"} style={{"margin": "24px 0 0", "fontSize": "19px", "color": "#A9B8D3", "maxWidth": "560px", "lineHeight": "1.6"}}>I'm looking for data analyst roles. Happy to work remotely or relocate.</p>
      <div className={"st"} style={{"display": "flex", "gap": "14px", "flexWrap": "wrap", "marginTop": "42px", "alignItems": "center"}}>
        <button className={"v-btn"} type={"button"} onClick={v.copyEmail} style={{"fontFamily": "inherit", "display": "inline-flex", "alignItems": "center", "gap": "14px", "minHeight": "58px", "padding": "0 26px", "background": "#FFFFFF", "color": "#06142B", "border": "none", "borderRadius": "8px", "fontWeight": "800", "fontSize": "16px", "cursor": "pointer"}}>corp.adi07@gmail.com <span style={{"fontSize": "13px", "fontWeight": "800", "color": "#1D4ED8"}}>{v.copyLabel}</span></button>
        <a className={"v-btn"} href={"https://linkedin.com/in/aditya-jadhav-tech"} target={"_blank"} rel={"noopener noreferrer"} style={{"display": "inline-flex", "alignItems": "center", "minHeight": "58px", "padding": "0 24px", "border": "1.5px solid rgba(255,255,255,.25)", "color": "#FFFFFF", "borderRadius": "8px", "fontWeight": "700", "fontSize": "15px", "textDecoration": "none"}}>LinkedIn</a>
        <a className={"v-btn"} href={"https://github.com/theadityajadhav"} target={"_blank"} rel={"noopener noreferrer"} style={{"display": "inline-flex", "alignItems": "center", "minHeight": "58px", "padding": "0 24px", "border": "1.5px solid rgba(255,255,255,.25)", "color": "#FFFFFF", "borderRadius": "8px", "fontWeight": "700", "fontSize": "15px", "textDecoration": "none"}}>GitHub</a>
        <a className={v.resumeCls} href={"/Aditya_Jadhav_Data_Analyst_Resume.pdf"} download={"Aditya_Jadhav_Data_Analyst_Resume.pdf"} style={{"display": "inline-flex", "alignItems": "center", "gap": "8px", "minHeight": "58px", "padding": "0 24px", "border": "1.5px solid rgba(255,255,255,.35)", "background": "rgba(255,255,255,.06)", "color": "#FFFFFF", "borderRadius": "8px", "fontWeight": "800", "fontSize": "15px", "textDecoration": "none"}}>{v.resumeLabel} <span className={"v-arr"}>↓</span></a>
      </div>
      <div style={{"display": "flex", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "12px", "marginTop": "120px", "paddingTop": "26px", "borderTop": "1px solid rgba(255,255,255,.1)", "fontSize": "13px", "color": "#7F93B5"}}>
        <span>© 2026 Aditya Jadhav · Maharashtra, India</span><a href={"#top"} onClick={v.goTop} style={{"color": "#A9B8D3", "textDecoration": "none", "fontWeight": "700"}}>Back to top ↑</a>
      </div>
    </div>
  </section>
</div>
  );
}

class DCLogic extends React.Component {
  constructor(props) { super(props); this.state = {}; }
  render() { return <Template v={this.renderVals()} />; }
}

class Portfolio extends DCLogic {
  S() { return Object.assign({ stage: 0, seen: {}, tick: 0, tab: 0, scrollTop: 0, progress: 0, active: 'top', proj: 0 }, this.state || {}); }

  componentDidMount() {
    this.els = this.els || {};
    this.pipe = { inN: 0, bad: 0, good: 0 };
    this.setState({ stageStart: Date.now() });
    this.stageTimer = setInterval(() => {
      const S = this.S(); if (S.manualStage) return;
      this.setState({ stage: (S.stage + 1) % 4, stageStart: Date.now() });
    }, 4400);
    this.tickTimer = setInterval(() => this.setState({ tick: this.S().tick + 1 }), 1500);
    this.frameTimer = setInterval(() => { if (document.hidden) return; const heroH = (this.canvas && this.canvas.clientHeight) || 900; if (this.S().scrollTop < heroH || Date.now() - (this._seenAt || 0) < 2600) this.forceUpdate(); }, 90);
    this._onWin = () => { if (this._scrollRaf) return; this._scrollRaf = requestAnimationFrame(() => { this._scrollRaf = 0; this.onWinScroll(); }); };
    window.addEventListener('scroll', this._onWin, { passive: true });
    window.addEventListener('resize', this._onWin);
    this.onWinScroll();
    if (this.props.onMount) this.props.onMount(this);
    this.setupObserver();
    this.initPipe();
    try { this.reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { this.reduce = false; }
    const loop = (ts) => { if (!document.hidden) this.drawPipe(ts); this.raf = requestAnimationFrame(loop); };
    this.raf = requestAnimationFrame(loop);
  }
  componentWillUnmount() {
    clearInterval(this.stageTimer); clearInterval(this.tickTimer); clearInterval(this.frameTimer);
    cancelAnimationFrame(this.raf);
    window.removeEventListener('scroll', this._onWin); window.removeEventListener('resize', this._onWin);
    if (this.ioIn) this.ioIn.disconnect();
    if (this.ioOut) this.ioOut.disconnect();
  }

  // Two observers: one adds a section when 12% of it is visible, the other only
  // resets it once it is well outside the viewport (140px margin), so the slide-in
  // offset can never push it back and forth across the edge.
  setupObserver() {
    try {
      const root = null;
      this.ioIn = new IntersectionObserver((entries) => {
        const seen = Object.assign({}, this._seen || this.S().seen); let ch = false;
        entries.forEach((e) => { const k = e.target.getAttribute('data-k'); if (k && e.isIntersecting && !seen[k]) { seen[k] = Date.now(); ch = true; } });
        if (ch) { this._seen = seen; this._seenAt = Date.now(); this.setState({ seen }); }
      }, { root, threshold: 0, rootMargin: '0px 0px -12% 0px' });
      this.ioOut = new IntersectionObserver((entries) => {
        const seen = Object.assign({}, this._seen || this.S().seen); let ch = false;
        entries.forEach((e) => { const k = e.target.getAttribute('data-k'); if (k && !e.isIntersecting && seen[k]) { delete seen[k]; ch = true; } });
        if (ch) { this._seen = seen; this._seenAt = Date.now(); this.setState({ seen }); }
      }, { root, threshold: 0, rootMargin: '140px 0px 140px 0px' });
      Object.keys(this.els).forEach((k) => { this.ioIn.observe(this.els[k]); this.ioOut.observe(this.els[k]); });
    } catch (e) {
      const seen = {}; ['impact','workHead','p1','p2','p3','p4','skills','process','about','contact','hero','m1','c2','m2','c3','m3','c5','m5','res','jr'].forEach((k) => { seen[k] = Date.now(); });
      this.setState({ seen });
    }
  }
  mkRef(k) {
    this.els = this.els || {};
    if (!this._refs) this._refs = {};
    if (!this._refs[k]) this._refs[k] = (el) => { if (el) { el.setAttribute('data-k', k); this.els[k] = el; if (this.ioIn) { this.ioIn.observe(el); this.ioOut.observe(el); } } };
    return this._refs[k];
  }
  go(id) {
    if (!this._go) this._go = {};
    if (!this._go[id]) this._go[id] = (ev) => {
      if (ev && ev.preventDefault) ev.preventDefault();
      let top = 0;
      if (id !== 'top') { let el = document.getElementById(id); if (!el) return; while (el) { top += el.offsetTop; el = el.offsetParent; } top -= 84; }  // offsetTop ignores the slide-in offset of sections not yet revealed
      if (this.lenis) this.lenis.scrollTo(top, { duration: 1.2 }); else window.scrollTo({ top, behavior: this.reduce ? 'auto' : 'smooth' });
      try { history.replaceState(null, '', id === 'top' ? location.pathname : '#' + id); } catch (e) {}
    };
    return this._go[id];
  }
  ease(start, dur) {
    if (!start) return 0;
    const p = Math.min(1, Math.max(0, (Date.now() - start) / dur));
    return 1 - Math.pow(1 - p, 3);
  }

  // ---------- hero data pipeline ----------
  initPipe() {
    const rnd = (k) => { const x = Math.sin(k * 12.9898) * 43758.5453; return x - Math.floor(x); };
    const small = window.innerWidth < 760;
    this.PN = small ? 260 : 620;
    this.pp = [];
    for (let i = 0; i < this.PN; i++) this.pp.push(this.spawn(rnd(i + 1), rnd(i + 3.3), rnd(i + 7.7), i));
    this.stars = [];
    for (let i = 0; i < 70; i++) this.stars.push([rnd(i + 101), rnd(i + 203), rnd(i + 307)]);
    this.t0 = performance.now();
  }
  spawn(p, seed, sp, i) {
    return { p: p, seed: seed, sp: 0.0011 + sp * 0.0016, bad: seed < 0.13, counted: false, ox: 0, oy: 0, i: i };
  }
  buildCard(cw, ch) {
    // slots for the "solution" growth icon, in build order:
    // baseline -> five rising bars -> zig-zag growth arrow
    const pts = [];
    for (let x = 4; x <= cw - 4; x += 7) pts.push([x, ch - 4]);
    const bx = [12, 38, 64, 90, 116], bh = [22, 34, 46, 60, 80];
    for (let b = 0; b < 5; b++) for (let y = 10; y <= bh[b]; y += 6) for (let c = 0; c < 3; c++) pts.push([bx[b] + c * 5, ch - 4 - y]);
    const arrow = [[6, ch - 58], [42, ch - 86], [60, ch - 76], [100, ch - 106], [134, ch - 122]];
    for (let k = 0; k < arrow.length - 1; k++) {
      const a = arrow[k], b = arrow[k + 1], L = Math.hypot(b[0] - a[0], b[1] - a[1]);
      for (let d = 0; d < L; d += 6) pts.push([a[0] + (b[0] - a[0]) * d / L, a[1] + (b[1] - a[1]) * d / L]);
    }
    this.arrowPts = arrow;
    return pts;
  }
  drawPipe(ts) {
    const c = this.canvas; if (!c) return;
    if (this.S().scrollTop > (c.clientHeight || 900)) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const W = c.clientWidth, H = c.clientHeight; if (!W || !H) return;
    if (c.width !== Math.round(W * dpr) || c.height !== Math.round(H * dpr)) { c.width = Math.round(W * dpr); c.height = Math.round(H * dpr); }
    const g = c.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, W, H);
    const now = ts;
    const t = (ts - this.t0) / 1000;
    const dtf = this._lts ? Math.min(4, Math.max(0.25, (ts - this._lts) / 16.667)) : 1; this._lts = ts;
    const intro = this.reduce ? 1 : Math.min(1, t / 1.6);
    const speed = this.reduce ? 0 : (0.6 + 0.4 * intro);
    const cmp = window.innerHeight < 940 && W >= 900;
    const top = H - (cmp ? 178 : 215), bot = H - (cmp ? 40 : 58);
    const gateX = W * 0.28;
    const hasCard = W >= 900;
    const cw = 150, ch = 130;
    const cardX = W - cw - 56, cardY = bot - ch;
    const endX = hasCard ? cardX - 70 : W - 30;
    const curve = (u) => Math.pow(u, 1.35) + 0.035 * Math.sin(u * 14);
    const trendY = (x) => { const u = Math.min(1, Math.max(0, (x - gateX) / (endX - gateX))); return bot - curve(u) * (bot - top - 40); };
    if (hasCard && !this.slots) { this.slots = this.buildCard(cw, ch); this.slotT = new Array(this.slots.length).fill(0); this.nextSlot = 0; this.cycleStart = now - 1; this.solvedAt = 0; }

    for (let i = 0; i < this.stars.length; i++) {
      const st = this.stars[i];
      const a = (0.15 + 0.25 * (0.5 + 0.5 * Math.sin(t * (0.6 + st[2]) + i))) * intro;
      g.fillStyle = 'rgba(148,163,184,' + a.toFixed(3) + ')';
      g.fillRect(st[0] * W, st[1] * (top - 30), 1.4, 1.4);
    }
    g.strokeStyle = 'rgba(96,165,250,0.07)'; g.lineWidth = 1;
    for (let k = 0; k <= 4; k++) { const y = top + (bot - top) * k / 4; g.beginPath(); g.moveTo(gateX, y); g.lineTo(endX, y); g.stroke(); }
    g.strokeStyle = 'rgba(103,232,249,' + (0.35 * intro).toFixed(3) + ')'; g.lineWidth = 1.5;
    g.beginPath();
    for (let x = gateX; x <= endX; x += 6) { const y = trendY(x); if (x === gateX) g.moveTo(x, y); else g.lineTo(x, y); }
    g.stroke();
    const iy = trendY(endX);
    const pulse = 0.5 + 0.5 * Math.sin(t * 3);
    const grd = g.createLinearGradient(gateX - 14, 0, gateX + 14, 0);
    grd.addColorStop(0, 'rgba(34,211,238,0)'); grd.addColorStop(0.5, 'rgba(34,211,238,' + (0.18 + 0.12 * pulse).toFixed(3) + ')'); grd.addColorStop(1, 'rgba(34,211,238,0)');
    g.fillStyle = grd; g.fillRect(gateX - 14, top - 26, 28, bot - top + 40);
    g.fillStyle = 'rgba(103,232,249,' + (0.8 * intro).toFixed(3) + ')'; g.fillRect(gateX - 1, top - 26, 2, bot - top + 40);

    // ---- solution card ----
    let solvedP = 0;
    if (hasCard) {
      const n = this.slots.length;
      let built = 0;
      for (let k = 0; k < n; k++) if (this.slotT[k] > this.cycleStart) built++;
      if (this.reduce) built = n;
      if (built >= n && !this.solvedAt) { this.solvedAt = now; this.pipe.solutions = (this.pipe.solutions || 0) + 1; }
      if (this.solvedAt) solvedP = Math.min(1, (now - this.solvedAt) / 700);
      if (this.solvedAt && !this.reduce && now - this.solvedAt > 3200) { this.cycleStart = now - 1; this.solvedAt = 0; this.nextSlot = 0; solvedP = 0; }
      // card glow when solved
      {
        const gx = cardX + cw / 2, gy = cardY + ch / 2;
        const rg = g.createRadialGradient(gx, gy, 10, gx, gy, 110);
        rg.addColorStop(0, 'rgba(34,211,238,' + (0.06 + 0.16 * solvedP).toFixed(3) + ')'); rg.addColorStop(1, 'rgba(34,211,238,0)');
        g.fillStyle = rg; g.beginPath(); g.arc(gx, gy, 110, 0, 6.283); g.fill();
        g.font = '800 30px Manrope, sans-serif';
        g.fillStyle = 'rgba(255,255,255,' + (0.1 + 0.9 * solvedP).toFixed(3) + ')';
        g.fillText('$', cardX + 32, cardY + 40);
      }
      // slots: ghost outline + lit dots
      for (let k = 0; k < n; k++) {
        const sp = this.slots[k];
        const lit = this.reduce || this.slotT[k] > this.cycleStart;
        const age = lit ? Math.min(1, (now - this.slotT[k]) / 400) : 0;
        g.fillStyle = lit ? 'rgba(103,232,249,' + (0.55 + 0.4 * (this.reduce ? 1 : age)).toFixed(3) + ')' : 'rgba(103,232,249,0.08)';
        g.fillRect(cardX + sp[0] - 1.2, cardY + sp[1] - 1.2, 2.4, 2.4);
      }
      // growth arrow lights up once the icon is complete
      if (solvedP > 0) {
        const A = this.arrowPts.map((q) => [cardX + q[0], cardY + q[1]]);
        let total = 0; const seg = [];
        for (let k = 0; k < A.length - 1; k++) { const L = Math.hypot(A[k + 1][0] - A[k][0], A[k + 1][1] - A[k][1]); seg.push(L); total += L; }
        let left = solvedP * total;
        g.strokeStyle = '#FFFFFF'; g.lineWidth = 5; g.lineCap = 'round'; g.lineJoin = 'round';
        g.shadowColor = 'rgba(103,232,249,.95)'; g.shadowBlur = 16;
        g.beginPath(); g.moveTo(A[0][0], A[0][1]);
        let tip = A[0], dir = [1, 0];
        for (let k = 0; k < seg.length && left > 0; k++) {
          const f = Math.min(1, left / seg[k]);
          tip = [A[k][0] + (A[k + 1][0] - A[k][0]) * f, A[k][1] + (A[k + 1][1] - A[k][1]) * f];
          dir = [(A[k + 1][0] - A[k][0]) / seg[k], (A[k + 1][1] - A[k][1]) / seg[k]];
          g.lineTo(tip[0], tip[1]); left -= seg[k];
        }
        g.stroke();
        if (solvedP >= 1) {
          const h = 14, ang = 0.5;
          const back = [-dir[0], -dir[1]];
          const r1 = [back[0] * Math.cos(ang) - back[1] * Math.sin(ang), back[0] * Math.sin(ang) + back[1] * Math.cos(ang)];
          const r2 = [back[0] * Math.cos(-ang) - back[1] * Math.sin(-ang), back[0] * Math.sin(-ang) + back[1] * Math.cos(-ang)];
          g.beginPath(); g.moveTo(tip[0] + r1[0] * h, tip[1] + r1[1] * h); g.lineTo(tip[0], tip[1]); g.lineTo(tip[0] + r2[0] * h, tip[1] + r2[1] * h); g.stroke();
        }
        g.shadowBlur = 0;
      }
      // connector
      g.setLineDash([4, 5]); g.strokeStyle = 'rgba(103,232,249,' + (0.45 * intro).toFixed(3) + ')'; g.lineWidth = 1;
      g.beginPath(); g.moveTo(endX, iy); g.lineTo(cardX - 6, iy); g.stroke(); g.setLineDash([]);
    }

    // labels
    g.font = '600 11px "JetBrains Mono", monospace';
    g.fillStyle = 'rgba(127,147,181,' + intro.toFixed(3) + ')'; g.fillText('RAW DATA', 32, top - 12);
    g.fillStyle = 'rgba(103,232,249,' + intro.toFixed(3) + ')';
    g.fillText('CLEAN', gateX + 10, top - 12);
    g.fillText('INSIGHT', endX - 64, iy - 16);
    if (hasCard) {
      g.fillStyle = solvedP > 0 ? '#FFFFFF' : 'rgba(103,232,249,' + intro.toFixed(3) + ')';
      g.font = (solvedP > 0 ? '700 12px' : '600 11px') + ' "JetBrains Mono", monospace';
      g.fillText(solvedP > 0 ? 'SOLUTION ✓' : 'SOLUTION', cardX, top - 12);
    }

    const m = this.mouse;
    g.globalCompositeOperation = 'lighter';
    for (let n = 0; n < this.PN; n++) {
      const q = this.pp[n];
      q.p += q.sp * speed * dtf;
      let x = -20 + q.p * (W + 40), y, col, a = intro, r = 1.7;
      const base = top + q.seed * (bot - top);
      if (x < gateX) {
        y = base + Math.sin(t * 2.2 + q.i) * 9 + Math.sin(t * 0.9 + q.seed * 40) * 6;
        col = q.bad ? '248,113,113' : '148,163,184';
        a *= q.bad ? 0.85 : 0.55; r = q.bad ? 2.2 : 1.7;
      } else {
        if (!q.counted) { q.counted = true; this.pipe.inN++; if (q.bad) this.pipe.bad++; else this.pipe.good++; }
        const d = x - gateX;
        if (q.bad) {
          y = base + d * d * 0.006; x = gateX + d * 0.35;
          col = '248,113,113'; a *= Math.max(0, 1 - d / 160); r = 2.2;
        } else if (x <= endX || !hasCard) {
          const k = Math.min(1, d / 150), ke = k * k * (3 - 2 * k);
          const ty = trendY(Math.min(x, endX)) + (q.seed - 0.5) * 22 * (1 - Math.min(1, d / (endX - gateX)));
          y = base + (ty - base) * ke;
          col = ke > 0.6 ? (q.i % 6 === 0 ? '103,232,249' : '96,165,250') : '148,163,184';
          a *= 0.55 + 0.4 * ke; r = q.i % 6 === 0 ? 2.4 : 1.8;
        } else {
          if (q.slot === undefined || q.slot < 0) { q.slot = (this.solvedAt || x - endX > 24) ? -1 : (this.nextSlot < this.slots.length ? this.nextSlot++ : -1); q.sx = x; }
          if (q.slot < 0) { q.p = 1; }
          else {
            const sp = this.slots[q.slot];
            const sx = cardX + sp[0], sy = cardY + sp[1];
            const k = Math.min(1, (x - endX) / Math.max(30, sx - endX));
            x = endX + (sx - endX) * k; y = iy + (sy - iy) * (k * k * (3 - 2 * k));
            col = '103,232,249'; a *= 0.95; r = 2;
            if (k >= 1) { this.slotT[q.slot] = now; q.p = 1; }
          }
        }
      }
      if (q.p >= 1 || y > H + 10) { Object.assign(q, this.spawn(0, q.seed, (q.sp - 0.0011) / 0.0016, q.i)); q.slot = undefined; continue; }
      if (m) {
        const dx = x + q.ox - m[0], dy = y + q.oy - m[1], d2 = dx * dx + dy * dy;
        if (d2 < 12000) { const f = (12000 - d2) / 12000 * 6; const dd = Math.sqrt(d2) || 1; q.ox += dx / dd * f; q.oy += dy / dd * f; }
      }
      q.ox *= 0.92; q.oy *= 0.92;
      g.fillStyle = 'rgba(' + col + ',' + Math.max(0, a).toFixed(3) + ')';
      g.beginPath(); g.arc(x + q.ox, y + q.oy, r, 0, 6.283); g.fill();
    }
    g.globalCompositeOperation = 'source-over';
    g.fillStyle = 'rgba(103,232,249,' + (0.25 * pulse * intro).toFixed(3) + ')'; g.beginPath(); g.arc(endX, iy, 10 + 6 * pulse, 0, 6.283); g.fill();
    g.fillStyle = 'rgba(103,232,249,' + intro.toFixed(3) + ')'; g.beginPath(); g.arc(endX, iy, 4, 0, 6.283); g.fill();
  }

  onWinScroll() {
    const de = document.documentElement, sTop = window.scrollY || de.scrollTop;
    const max = (de.scrollHeight - window.innerHeight) || 1;
    let active = 'top';
    ['work', 'skills', 'process', 'about', 'contact'].forEach((id) => { const s = document.getElementById(id); if (s && s.getBoundingClientRect().top <= 200) active = id; });
    let proj = 0;
    ['p1', 'p2', 'p3', 'p4'].forEach((id, i) => { const s = document.getElementById(id); if (s && s.getBoundingClientRect().top < window.innerHeight * 0.5) proj = i; });
    document.querySelectorAll('.v-ghost').forEach((g) => { const r = g.parentElement.getBoundingClientRect(); g.style.translate = '0 ' + ((r.top - window.innerHeight * 0.3) * -0.12).toFixed(1) + 'px'; });
    const S = this.S();
    if (S.scrollTop !== sTop || S.active !== active || S.proj !== proj) this.setState({ scrollTop: sTop, progress: Math.min(1, sTop / max), active, proj });
  }

  renderVals() {
    const st = this.S();
    const fmt = (n) => Math.round(n).toLocaleString('en-US');
    const seen = st.seen;
    const scrolled = st.scrollTop > 40;
    const onHero = !st.menuOpen && st.scrollTop < ((this.canvas && this.canvas.clientHeight) || 800) - 70;
    const navCol = onHero ? '#FFFFFF' : '#0A2540';

    const sections = [['work', 'Projects'], ['skills', 'Skills'], ['process', 'Process'], ['about', 'About'], ['contact', 'Contact']];
    const navLinks = sections.map((s) => {
      const on = st.active === s[0];
      return { href: '#' + s[0], label: s[1], go: this.go(s[0]),
        style: 'color:' + (on ? (onHero ? '#67E8F9' : '#1D4ED8') : navCol) + ';padding:6px 0',
        bar: 'position:absolute;left:0;bottom:0;height:2px;border-radius:2px;background:' + (onHero ? '#67E8F9' : '#1D4ED8') + ';transition:width .35s;width:' + (on ? '100%' : '0') };
    });

    // ---------- hero demo ----------
    const cats = ['Tech', 'Furniture', 'Office', 'Paper', 'Decor'];
    const rows = [
      [1041,0,18400],[1042,1,9200],[1043,2,3100],[1044,0,null],[1045,0,15600],[1046,1,7800],
      [1047,3,1200],[1048,0,21300],[1049,2,2900],[1049,2,2900],[1050,4,1900],[1051,0,12700],
      [1052,1,8400],[1053,2,3500],[1054,1,null],[1055,0,16900],[1056,3,1500],[1057,1,6900],
      [1058,0,14200],[1059,2,2600],[1059,2,2600],[1060,4,2200],[1061,1,7300],[1062,3,1100]
    ];
    const bad = { 3: 'NULL', 9: 'DUPLICATE', 14: 'NULL', 20: 'DUPLICATE' };
    const stage = st.stage;
    const rev = [0,0,0,0,0], cnt = [0,0,0,0,0];
    rows.forEach((r, i) => { if (!bad[i]) { rev[r[1]] += r[2]; cnt[r[1]]++; } });
    const total = rev.reduce((a, b) => a + b, 0);
    const top = rev.indexOf(Math.max.apply(null, rev));
    const share = Math.round(rev[top] / total * 100);
    const stageEl = st.stageStart ? (Date.now() - st.stageStart) : 0;
    const stack = [0,0,0,0,0];
    const recs = rows.map((r, i) => {
      const isBad = !!bad[i];
      const rowTop = 24 + i * 15.6;
      const base = 'display:flex;justify-content:space-between;align-items:center;font-size:11px;padding:0 10px;';
      const flagged = stage === 1 && isBad && stageEl > 300 + (rowTop / 392) * 1600;
      let s;
      if (stage === 0 || stage === 1) {
        s = base + 'left:0;top:' + rowTop + 'px;width:100%;height:14px;border-radius:3px;' + (flagged ? 'background:rgba(248,113,113,.18);color:#FCA5A5;border:1px solid rgba(248,113,113,.5);text-decoration:line-through' : 'background:' + (i % 2 ? 'rgba(255,255,255,.02)' : 'rgba(255,255,255,.06)') + ';color:#C7D2E5;border:1px solid transparent');
      } else if (isBad) {
        s = base + 'left:0;top:' + rowTop + 'px;width:100%;height:14px;opacity:0;transform:translateX(-60px);background:rgba(248,113,113,.18);color:#FCA5A5';
      } else {
        const ci = r[1], k = stack[ci]++;
        const hot = stage === 3 && ci === top;
        s = 'left:calc(' + (10 + ci * 20) + '% - 24px);top:' + (318 - k * 30) + 'px;width:48px;height:26px;padding:0;font-size:0;border-radius:5px;color:transparent;border:1px solid transparent;transition-delay:' + (k * 0.04).toFixed(2) + 's;' +
          (hot ? 'background:#22D3EE;box-shadow:0 0 22px rgba(34,211,238,.55)' : stage === 3 ? 'background:rgba(255,255,255,.14)' : 'background:#3B82F6');
      }
      return { id: '#' + r[0], cat: cats[r[1]], amt: r[2] === null ? 'NULL' : '₹' + r[2].toLocaleString('en-IN'), style: s,
        flag: bad[i] || '', flagStyle: 'font-size:9px;font-weight:600;letter-spacing:1px;color:#FCA5A5;width:76px;text-align:right;opacity:' + (flagged ? 1 : 0) };
    });
    const cu = Math.min(1, stageEl / 1200);
    const colLabels = cats.map((c, i) => ({
      name: c,
      rev: '₹' + ((rev[i] / 1000) * (stage === 2 ? cu : stage === 3 ? 1 : 0)).toFixed(1) + 'k',
      valStyle: 'font-size:13px;font-weight:600;color:' + (stage === 3 && i === top ? '#67E8F9' : '#FFFFFF'),
      style: 'position:absolute;left:calc(' + (10 + i * 20) + '% - 46px);width:92px;text-align:center;top:352px;opacity:' + (stage >= 2 ? 1 : 0) + ';transform:translateY(' + (stage >= 2 ? 0 : 12) + 'px)'
    }));
    const captions = [
      '24 order records come in straight from the source.',
      'Cleaning: 2 missing amounts and 2 duplicate rows get removed.',
      '20 clean orders, grouped and summed by category.',
      cats[top] + ' is only ' + cnt[top] + ' of 20 orders, but brings in ' + share + '% of revenue.'
    ];
    const sql = [
      'SELECT order_id, category, amount FROM orders;',
      'SELECT DISTINCT order_id, category, amount FROM orders WHERE amount IS NOT NULL;',
      'SELECT category, SUM(amount) AS revenue FROM clean_orders GROUP BY category;',
      'SELECT category, SUM(amount) AS revenue FROM clean_orders GROUP BY category ORDER BY revenue DESC LIMIT 1;'
    ][stage];
    const typed = sql.slice(0, Math.floor(stageEl / 26));
    const stagePills = ['Raw data', 'Clean', 'Analyse', 'Decide'].map((l, i) => {
      const on = i === stage, done = i < stage;
      return { n: (i + 1) + ' ', label: l,
        pick: () => this.setState({ stage: i, manualStage: true, stageStart: Date.now() }),
        numStyle: 'color:' + (on ? '#22D3EE' : '#5E7398') + ';margin-right:4px',
        fill: 'position:absolute;left:0;bottom:0;height:3px;background:#22D3EE;width:' + (on ? Math.min(100, stageEl / 44) : done ? 100 : 0) + '%',
        style: 'position:relative;overflow:hidden;font-family:inherit;min-height:40px;padding:0 10px;border-radius:8px;font-size:13px;font-weight:700;text-align:left;border:1px solid ' + (on ? 'rgba(34,211,238,.6)' : 'rgba(255,255,255,.1)') + ';background:' + (on ? 'rgba(34,211,238,.12)' : 'rgba(255,255,255,.03)') + ';color:' + (on || done ? '#FFFFFF' : '#7F93B5') };
    });
    const pp = this.pipe || { inN: 0, bad: 0, good: 0 };

    const cls = {};
    ['impact','workHead','p1','p2','p3','p4','skills','process','about','contact'].forEach((k) => { cls[k] = 'rv' + (seen[k] ? ' in' : ''); });
    ['m1','c2','m2','c3','m3','c5','m5','res','jr'].forEach((k) => { cls[k] = 'tr' + (seen[k] ? ' in2' : ''); });

    // ---------- impact ----------
    const ei = this.ease(seen.impact, 1800);
    const impact = [
      [fmt(4 * ei), 'Projects', 'M3 7h6l2 2h10v10H3z'],
      [fmt(45 * ei) + 'k+', 'Records analysed', 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6'],
      ['ProductIQ', 'Live AI app', 'M13 2L4 14h7l-1 8 9-12h-7z'],
      ['Springer', 'Published research', 'M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3zM18 20h2V6'],
      ['₹' + fmt(1 * ei) + ' Cr', 'Investment plan recommended', 'M7 4h10M7 9h10M7 4c5 0 5 5 0 5l8 11']
    ].map((k, i) => ({ v: k[0], l: k[1], icon: k[2],
      style: 'display:flex;align-items:center;gap:14px;background:#FFFFFF;border:1px solid #E5E9F0;border-radius:14px;padding:16px 18px;box-shadow:0 24px 50px -40px rgba(10,37,64,.5);transition-delay:' + (i * 0.08).toFixed(2) + 's' }));
    const tools = ['SQL', 'MySQL', 'Excel', 'Power BI', 'Power Query', 'DAX', 'Python', 'pandas', 'Streamlit', 'Plotly', 'Gemini API', 'Google Sheets', 'GitHub', 'VS Code'];
    const tools2 = ['Data cleaning', 'Data validation', 'CTEs', 'Window functions', 'Pivot tables', 'XLOOKUP', 'Churn analysis', 'Customer lifetime value', 'Segmentation', 'Correlation analysis', 'KPI dashboards', 'Anomaly detection', 'Business recommendations'];

    // ---------- projects ----------
    const projNames = [['p1', 'ProductIQ'], ['p2', 'Columbia Asia Hospital'], ['p3', 'Chinook Music Store'], ['p4', 'AstroSage Call Centre']];
    const projList = projNames.map((p, i) => {
      const on = st.proj === i;
      return { href: '#' + p[0], name: p[1], n: '0' + (i + 1), go: this.go(p[0]),
        numStyle: 'font-size:12px;font-weight:800;color:' + (on ? '#1D4ED8' : '#94A3B8') + ';width:28px',
        style: 'display:flex;align-items:center;gap:6px;text-decoration:none;cursor:pointer;font-size:' + (on ? 18 : 15) + 'px;font-weight:800;padding:12px 0 12px ' + (on ? 14 : 0) + 'px;border-left:3px solid ' + (on ? '#1D4ED8' : 'transparent') + ';color:' + (on ? '#0A2540' : '#94A3B8') };
    });
    const e1 = this.ease(seen.m1, 1300);
    const tabContent = [
      'Most companies sell hundreds of products but rarely know which ones deserve more investment. Portfolio frameworks need clean data and hours of spreadsheet work, so the analysis often never gets done.',
      'I loaded the sales data into MySQL and built a Streamlit app that detects the product, sales, profit and date columns on its own, calculates two-year growth, and places each product in a BCG-inspired matrix. Gemini then writes a recommendation for each group, and the results are saved back to MySQL. On top of that, I built a two-page Power BI dashboard. Products with only one year of data are kept separate so they never distort the matrix.',
      'On the Superstore retail dataset of 1,850 products, it classified 1,131, set aside 719 with too little data, and produced recommendations for every group in under 30 seconds. The app is live and anyone can try it.'
    ];
    const tabs = ['Problem', 'Approach', 'Result'].map((l, i) => ({ label: l, pick: () => this.setState({ tab: i }),
      style: 'font-family:inherit;background:none;border:none;border-bottom:3px solid ' + (i === st.tab ? '#1D4ED8' : 'transparent') + ';padding:12px 0;margin-bottom:-1px;min-height:44px;font-size:16px;font-weight:800;cursor:pointer;color:' + (i === st.tab ? '#0A2540' : '#94A3B8') }));
    const SH = [['/images/productiq-app-kpis.jpg', 'App · KPIs', 'ProductIQ app: KPIs and portfolio summary', 'aistrategyconsultant.streamlit.app'], ['/images/productiq-app-charts.jpg', 'App · Charts', 'ProductIQ app: revenue and portfolio matrix charts', 'aistrategyconsultant.streamlit.app'], ['/images/productiq-app-ai-strategy.jpg', 'App · AI strategy', 'ProductIQ app: Gemini strategy cards', 'aistrategyconsultant.streamlit.app'], ['/images/productiq-powerbi-overview.jpg', 'Power BI · Overview', 'ProductIQ Power BI dashboard: executive overview', 'Power BI · ProductIQ_Dashboard.pbix'], ['/images/productiq-powerbi-matrix.jpg', 'Power BI · Matrix', 'ProductIQ Power BI dashboard: BCG matrix page', 'Power BI · ProductIQ_Dashboard.pbix']];
    const cs = st.manualShot ? st.shot : Math.floor(st.tick / 2) % SH.length;
    const shots = SH.map((x, i) => ({ src: x[0], alt: x[2], style: 'opacity:' + (i === cs ? 1 : 0) + ';transform:translateX(' + (i === cs ? 0 : i < cs ? -6 : 6) + '%)' }));
    const shotTabs = SH.map((x, i) => ({ label: x[1], pick: () => this.setState({ manualShot: true, shot: i }),
      style: 'font-family:inherit;min-height:38px;padding:0 15px;border-radius:999px;font-size:13px;font-weight:700;cursor:pointer;border:1.5px solid ' + (i === cs ? '#0A2540' : '#D5DCE6') + ';background:' + (i === cs ? '#0A2540' : '#FFFFFF') + ';color:' + (i === cs ? '#FFFFFF' : '#0A2540') }));
    const e2 = this.ease(seen.m2, 1300);
    const peaks = [['8 AM', 1875], ['6 AM', 1855], ['4 PM', 1773], ['3 PM', 1747], ['10 AM', 1704]].map((p, i) => ({ h: p[0], v: fmt(p[1]),
      style: 'height:100%;border-radius:3px;background:' + (i === 0 ? '#1D4ED8' : '#0A2540') + ';width:' + (p[1] / 1875 * 100).toFixed(1) + '%;animation-delay:' + (i * 0.1).toFixed(1) + 's' }));
    const allocCols = ['#0A2540', '#1D4ED8', '#3B82F6', '#93B4F5', '#CBD5E1'];
    const alloc = [['AI and chatbots', 30], ['Agent training', 25], ['CRM and customer analytics', 20], ['Call quality monitoring', 15], ['Infrastructure', 10]].map((a, i) => ({ name: a[0], v: '₹' + a[1] + 'L',
      style: 'height:100%;width:' + a[1] + '%;background:' + allocCols[i] + ';animation-delay:' + (i * 0.15).toFixed(2) + 's',
      dot: 'width:10px;height:10px;border-radius:3px;flex:none;background:' + allocCols[i] }));
    const e3 = this.ease(seen.m3, 1300);
    const e5 = this.ease(seen.m5, 1300);
    const CASH = [['/images/columbia-main-overview.jpg', 'Main overview', 'Columbia Asia Power BI report: hospital overview with visits, revenue, wait time and satisfaction'],
      ['/images/columbia-doctor-performance.jpg', 'Doctor view', 'Columbia Asia Power BI report: doctor view with patients, revenue and satisfaction'],
      ['/images/columbia-patient-profile.jpg', 'Patient view', 'Columbia Asia Power BI report: one patient compared with department and hospital averages'],
      ['/images/columbia-discounts-shifts.jpg', 'Discounts & shifts', 'Columbia Asia Power BI report: visits by hour, discount rules and workload per doctor']];
    const cc = st.manualShot2 ? st.shot2 : Math.floor(st.tick / 2) % CASH.length;
    const caShots = CASH.map((x, i) => ({ src: x[0], alt: x[2], style: 'opacity:' + (i === cc ? 1 : 0) + ';transform:translateX(' + (i === cc ? 0 : i < cc ? -6 : 6) + '%)' }));
    const caTabs = CASH.map((x, i) => ({ label: x[1], pick: () => this.setState({ manualShot2: true, shot2: i }),
      style: 'font-family:inherit;min-height:38px;padding:0 15px;border-radius:999px;font-size:13px;font-weight:700;cursor:pointer;border:1.5px solid ' + (i === cc ? '#0A2540' : '#D5DCE6') + ';background:' + (i === cc ? '#0A2540' : '#FFFFFF') + ';color:' + (i === cc ? '#FFFFFF' : '#0A2540') }));
    const caDepts = [['General Practice', 7240], ['Orthopedics', 995], ['Physiotherapy', 276], ['Cardiology', 248], ['Neurology', 193], ['Gastroenterology', 178], ['Renal', 86]].map((d, i) => ({ name: d[0], v: fmt(d[1]),
      nameStyle: 'width:118px;flex:none;font-size:12px;font-weight:' + (i === 0 ? 800 : 600) + ';color:' + (i === 0 ? '#0A2540' : '#475569'),
      style: 'height:100%;border-radius:3px;background:' + (i === 0 ? '#1D4ED8' : '#0A2540') + ';width:' + Math.max(1.2, d[1] / 7240 * 100).toFixed(1) + '%;animation-delay:' + (i * 0.08).toFixed(2) + 's' }));
    const caRecs = [['1', 'Hire 3 doctors', '2 in General Practice and 1 in Orthopedics, the department that brings the most revenue (34.0%).'],
      ['2', 'Run General Practice in two shifts', '10:00 to 22:00 and 22:00 to 10:00. Visits are nearly flat all day, so the shifts get 3,573 and 3,667 visits.'],
      ['3', 'Start with two discounts', 'Patients who waited 50+ minutes (2,036) and patients aged 61+ (2,198). 10% off costs 11.6M and 11.4M.']]
      .map((r) => ({ n: r[0], title: r[1], text: r[2], numStyle: 'flex:none;width:24px;height:24px;border-radius:50%;background:#F1F5FE;color:#1D4ED8;font-size:12px;font-weight:800;display:inline-flex;align-items:center;justify-content:center;margin-top:1px' }));

    // ---------- skills ----------
    const IC = {
      db: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
      bi: 'M4 20V11M10 20V5M16 20v-6M2 20h20',
      code: 'M8 6l-6 6 6 6M16 6l6 6-6 6',
      biz: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z',
      tool: 'M6 3v12M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a9 9 0 0 1-9 9'
    };
    const P = ['ProductIQ', 'Columbia Asia', 'Chinook', 'AstroSage'];
    const IC2 = { com: 'M4 5h16v11H8l-4 4zM8 9h8M8 12h5' };
    const data = [
      ['Data & querying', IC.db, [
        ['SQL / MySQL', { ProductIQ: 'Stored the sales data, KPIs and AI results in MySQL tables', 'Columbia Asia': 'Joined 2 tables in a view, 5 data checks and 7 analysis queries', Chinook: 'Churn, lifetime value and risk queries across 11 tables' }],
        ['Window functions', { 'Columbia Asia': 'LAG for 3-month wait trends, RANK for doctor patient mix', Chinook: 'RANK, ROW_NUMBER and SUM OVER for rankings and shares' }],
        ['Data cleaning', { ProductIQ: 'Detects messy column names and keeps thin data out of the matrix', 'Columbia Asia': 'Fixed day-first dates and kept 6,699 blank scores as blank, not zero', AstroSage: 'Fixed formats and missing values across 28,027 rows', Chinook: 'Checked every table for NULLs and duplicates' }]]],
      ['Analysis & BI', IC.bi, [
        ['Power BI', { ProductIQ: 'Two-page interactive dashboard with category and region filters', 'Columbia Asia': '8-page report with hospital, doctor and patient views' }],
        ['Power Query', { ProductIQ: 'Prepared and shaped the data for the dashboard', 'Columbia Asia': 'Merged 2 tables and added age groups and wait-time bands' }],
        ['DAX', { ProductIQ: 'KPI measures such as revenue, profit and margin', 'Columbia Asia': '36 measures, a date table and a discount rules table' }],
        ['Excel', { AstroSage: 'Pivot tables, formulas, slicers and an interactive dashboard' }],
        ['Dashboards', { ProductIQ: 'Streamlit app and Power BI report', 'Columbia Asia': 'Three views, one each for management, doctors and patient care', AstroSage: '7 KPIs and 12 charts with slicers' }]]],
      ['Code & AI', IC.code, [
        ['Python', { ProductIQ: 'App logic in pandas, connected to MySQL' }],
        ['Streamlit', { ProductIQ: 'Built and deployed the live app' }],
        ['Plotly', { ProductIQ: 'Interactive bar and scatter charts' }],
        ['Gemini API', { ProductIQ: 'Structured prompts turned into strategy cards' }]]],
      ['Business thinking', IC.biz, [
        ['Customer analytics', { 'Columbia Asia': 'Satisfaction by age, wait time, race and gender', AstroSage: 'Found that 46% of callers come back', Chinook: 'Risk segments and 5-year lifetime value' }],
        ['Correlation analysis', { 'Columbia Asia': 'Wait time vs satisfaction: about -0.02, so no real link', AstroSage: 'Call duration vs customer rating' }],
        ['Recommendations', { ProductIQ: 'Invest, harvest or drop for each product', 'Columbia Asia': '3 new doctors, two shifts and two costed discounts', AstroSage: '₹1 crore split across 5 areas', Chinook: 'Retention and regional actions' }]]],
      ['Communication', IC2.com, [
        ['Reports & presentations', { 'Columbia Asia': 'Written findings and a presentation deck', AstroSage: 'Written report and presentation deck', Chinook: 'Written report and presentation deck' }]]],
      ['Tools & workflow', IC.tool, [
        ['GitHub', { ProductIQ: 'Code, Power BI file, README and screenshots', 'Columbia Asia': 'SQL, Power BI file, DAX measures, data dictionary and findings', AstroSage: 'Workbook, report and presentation', Chinook: 'SQL file, report and presentation' }],
        ['Google Sheets', { Chinook: '10+ charts built from query results' }]]]
    ];
    const flat = []; data.forEach((g) => g[2].forEach((s) => flat.push([s[0], s[1], g[1]])));
    const si = st.manualSkill ? st.skill : Math.floor(st.tick / 2) % flat.length;
    const cur = flat[si];
    let used = 0;
    let idx = 0;
    const groups = data.map((g) => ({ name: g[0], icon: g[1], skills: g[2].map((s) => { const i = idx++, on = i === si;
      return { name: s[0], icon: g[1], pick: () => this.setState({ manualSkill: true, skill: i }),
        style: 'font-family:inherit;display:inline-flex;align-items:center;gap:8px;font-size:15px;font-weight:700;min-height:44px;padding:0 18px;border-radius:999px;border:1.5px solid ' + (on ? '#0A2540' : '#D5DCE6') + ';background:' + (on ? '#0A2540' : '#FFFFFF') + ';color:' + (on ? '#FFFFFF' : '#0A2540') }; }) }));
    const projRows = P.map((p) => { const u = !!cur[1][p]; if (u) used++;
      return { name: p, how: u ? cur[1][p] : 'Not used here',
        style: 'display:flex;gap:14px;align-items:flex-start;padding:15px 18px;border-radius:10px;border:1px solid ' + (u ? '#BFD3FB' : '#EEF2F7') + ';background:' + (u ? '#F1F5FE' : '#FFFFFF') + ';opacity:' + (u ? 1 : 0.45) + ';transform:' + (u ? 'translateX(6px)' : 'none'),
        dot: 'width:10px;height:10px;border-radius:50%;margin-top:7px;flex:none;transition:background .4s;background:' + (u ? '#1D4ED8' : '#CBD5E1') }; });

    // ---------- process ----------
    const process = [
      ['01', 'Ask', 'Turn a vague goal into one clear business question.', 'Where should a ₹1 crore call-centre investment go?'],
      ['02', 'Clean', 'Fix missing values, duplicates and formats before any analysis.', 'Kept 6,699 blank hospital satisfaction scores as blank, not zero, so the averages stay honest.'],
      ['03', 'Analyse', 'Find the pattern with SQL, Excel, Power BI or Python.', 'Measured yearly churn in Chinook with a CTE and a self-join.'],
      ['04', 'Recommend', 'Say what to do next, and be clear about what the data cannot tell us.', 'Invest, harvest or drop for every product in ProductIQ.']
    ].map((p, i) => ({ n: p[0], title: p[1], text: p[2], ex: p[3],
      node: 'display:block;width:28px;height:28px;border-radius:50%;box-sizing:border-box;animation-delay:' + (0.3 + i * 1.4).toFixed(1) + 's',
      titleStyle: 'font-size:26px;font-weight:800;margin-top:6px;animation-delay:' + (0.3 + i * 1.4).toFixed(1) + 's' }));

    // ---------- about ----------
    const profile = [['name', 'Aditya Jadhav'], ['role', 'Data Analyst'], ['based_in', 'Maharashtra, India'], ['open_to', 'Relocation, remote work'], ['tools', 'SQL, Power BI, DAX, Excel, Python'], ['shipped', 'ProductIQ (live AI app)'], ['research', 'Paper published by Springer'], ['leadership', 'Project lead, team of 5'], ['looking_for', 'Data Analyst roles']]
      .map((r, i) => ({ k: r[0], v: r[1], style: 'display:flex;gap:12px;padding:10px 0;border-bottom:1px solid #1E3A5F;animation-delay:' + (0.2 + i * 0.12).toFixed(2) + 's' }));
    // ---------- query console ----------
    const skillTop = flat.map((x, k) => [x[0], Object.keys(x[1]).length, k]).sort((a, b) => b[1] - a[1] || a[2] - b[2]).slice(0, 5);
    const QUERIES = [
      { label: 'my profile', sql: 'SELECT * FROM aditya;', key: '130px', head: null, rows: profile.map((r) => [r.k, r.v]) },
      { label: 'projects', sql: 'SELECT project, tools FROM projects;', key: 'min(48%, 230px)', head: ['project', 'tools'],
        rows: [['ProductIQ', 'Python, MySQL, Power BI, Gemini API', 'p1'], ['Columbia Asia Hospital', 'MySQL, Power BI, DAX, Power Query', 'p2'], ['Chinook Music Store', 'MySQL, CTEs, window functions', 'p3'], ['AstroSage Call Centre', 'Excel, pivot tables, dashboard', 'p4']] },
      { label: 'key results', sql: 'SELECT project, key_result FROM projects;', key: 'min(48%, 230px)', head: ['project', 'key_result'],
        rows: [['ProductIQ', '1,131 of 1,850 products classified in under 30s', 'p1'], ['Columbia Asia Hospital', '78.6% of 9,216 visits go to one department', 'p2'], ['Chinook Music Store', '15 medium-risk customers flagged for retention', 'p3'], ['AstroSage Call Centre', '₹1 crore investment split across 5 areas', 'p4']] },
      { label: 'top skills', sql: 'SELECT skill, COUNT(*) AS projects FROM skills_used GROUP BY skill ORDER BY projects DESC LIMIT 5;', key: 'min(48%, 230px)', head: ['skill', 'projects'],
        rows: skillTop.map((x) => [x[0], x[1] + ' of 4']) }
    ];
    const qi = st.q || 0, Q = QUERIES[qi];
    const qEl = st.qStart ? Date.now() - st.qStart : 1e9;
    const typeMs = Q.sql.length * 18;
    const qPills = QUERIES.map((q, i) => ({ label: q.label,
      pick: () => { this._seenAt = Date.now() + 1500; this.setState({ q: i, qStart: Date.now(), qRun: (st.qRun || 0) + 1 }); },
      style: "font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:600;min-height:32px;padding:0 11px;border-radius:999px;border:1px solid " + (i === qi ? 'rgba(103,232,249,.7)' : 'rgba(255,255,255,.16)') + ';background:' + (i === qi ? 'rgba(103,232,249,.14)' : 'transparent') + ';color:' + (i === qi ? '#A5F3FC' : '#C7D2E5') }));
    const rowCls = st.qRun ? (st.qRun % 2 ? 'v-row2' : 'v-row') : 'v-row';
    const qRows = Q.rows.map((r, i) => ({ k: r[0], v: r[1],
      cls: rowCls + (r[2] ? ' v-qlink' : ''),
      go: r[2] ? this.go(r[2]) : undefined,
      kCls: Q.head ? 'v-qkey' : '',
      kStyle: 'color:#7F93B5;flex:none;width:' + Q.key,
      arrStyle: 'color:#67E8F9;flex:none;margin-left:8px;' + (r[2] ? '' : 'display:none'),
      style: 'display:flex;gap:12px;align-items:baseline;padding:10px 0;border-bottom:1px solid #1E3A5F;animation-delay:' + (st.qStart ? (typeMs / 1000 + 0.1 + i * 0.08) : (0.2 + i * 0.12)).toFixed(2) + 's' }));
    const qTyped = st.qStart ? Q.sql.slice(0, Math.floor(qEl / 18)) : Q.sql;
    const qDone = !st.qStart || qEl >= typeMs;
    const ringOn = !!seen.about;
    const rings = [
      { v: '84.46%', unit: 'SCORE', title: 'Diploma, Computer Engineering', sub: 'D.Y. Patil Polytechnic · 2022', badge: 'College Topper', pct: 0.8446 },
      { v: '7.96', unit: 'CGPA / 10', title: 'B.Tech, Computer Science & Engineering', sub: 'D.Y. Patil College of Engineering & Technology · 2025', badge: '', pct: 0.796 }
    ].map((r) => Object.assign(r, { ring: 'stroke-dashoffset:' + (ringOn ? (302 * (1 - r.pct)).toFixed(1) : 302) }));
    const qualities = [
      ['Business-first', 'Every project ends with a recommendation someone can act on.', 'M3 17l6-6 4 4 8-8M14 7h7v7'],
      ['Checks the numbers', 'I check for missing values, duplicates and edge cases before I trust a result.', 'M9 11l3 3 8-8M21 12a9 9 0 1 1-6-8.5'],
      ['Builds things that work', 'I built and shipped a working AI app that anyone can open today.', 'M5 12h14M13 6l6 6-6 6']
    ].map((q) => ({ title: q[0], text: q[1], icon: q[2] }));
    const journey = [
      ['2022', 'Diploma in Computer Engineering', 'D.Y. Patil Polytechnic', 'College Topper', false],
      ['2025', 'B.Tech, Computer Science & Engineering', 'D.Y. Patil College of Engineering & Technology', '', false],
      ['2025', 'Scientific Assistant (Data Analysis)', 'Regional Forensic Science Laboratory · data validation and reporting', '', false],
      ['2025', 'Research paper published by Springer', 'AI chatbot for university support', 'Project lead', false],
      ['2026', 'Four data analytics projects', 'SQL, Power BI, Excel and Python', '', false],
      ['Next', 'Data Analyst role', 'Open to relocate', '', true]
    ].map((r, i) => ({ year: r[0], title: r[1], place: r[2], badge: r[3],
      node: 'position:absolute;left:-44px;top:2px;width:24px;height:24px;border-radius:50%;box-sizing:border-box;transition-delay:' + (0.15 + i * 0.38).toFixed(2) + 's;' + (r[4] ? 'background:#1D4ED8;border:4px solid #DBE6FD' : 'background:#FFFFFF;border:3px solid #1D4ED8') }));


    const K = 'color:#67E8F9', C = 'color:#5E7398', D = '';
    const code = [
      [['-- Yearly churn: customers who bought in a year but not the next', C]],
      [['WITH', K], [' active ', D], ['AS', K], [' (', D]],
      [['  SELECT DISTINCT', K], [' customer_id, ', D], ['YEAR', K], ['(invoice_date) ', D], ['AS', K], [' yr', D]],
      [['  FROM', K], [' invoice', D]],
      [[')', D]],
      [['SELECT', K], [' a.yr,', D]],
      [['       ROUND', K], ['(100 * ', D], ['SUM', K], ['(n.customer_id ', D], ['IS NULL', K], [') / ', D], ['COUNT', K], ['(*), 2) ', D], ['AS', K], [' churn_rate', D]],
      [['FROM', K], [' active a', D]],
      [['LEFT JOIN', K], [' active n', D]],
      [['  ON', K], [' n.customer_id = a.customer_id ', D], ['AND', K], [' n.yr = a.yr + 1', D]],
      [['WHERE', K], [' a.yr < (', D], ['SELECT MAX', K], ['(', D], ['YEAR', K], ['(invoice_date)) ', D], ['FROM', K], [' invoice)', D], ['  -- the last year has no next year', C]],
      [['GROUP BY', K], [' a.yr;', D]]
    ];
    const codeLines = code.map((ln) => ({ style: '', segs: ln.map((sg) => ({ t: sg[0], style: sg[1] })) }));
    const tiltOf = (k) => { const v = st['tilt' + k]; return 'transform:perspective(1200px) rotateX(' + (v ? v[1] : 0).toFixed(2) + 'deg) rotateY(' + (v ? v[0] : 0).toFixed(2) + 'deg) translateY(' + (v ? -6 : 0) + 'px) scale(' + (v ? 1.015 : 1) + ')'; };
    const tiltFn = (k) => (ev) => { const r = ev.currentTarget.getBoundingClientRect(); const px = (ev.clientX - r.left) / r.width - 0.5, py = (ev.clientY - r.top) / r.height - 0.5; this.setState({ ['tilt' + k]: [px * 6, -py * 5] }); };
    const mkWords = (text, hl, delay, step, on) => text.split(' ').map((w, i) => ({ t: w,
      cls: 'v-w' + (hl.indexOf(w) >= 0 ? ' v-grad' : ''),
      style: on ? 'animation-delay:' + (delay + i * step).toFixed(2) + 's' : 'animation:none;opacity:0' }));

    return {
      setScroller: (el) => { if (el) this.scroller = el; },
      setCanvas: (el) => { if (el) this.canvas = el; },
      heroMove: (ev) => { const r = ev.currentTarget.getBoundingClientRect(); this.mouse = [ev.clientX - r.left, ev.clientY - r.top]; },
      heroLeave: () => { this.mouse = null; },
      goTop: this.go('top'), goWork: this.go('work'), goContact: this.go('contact'),
      menuOpen: !!st.menuOpen,
      toggleMenu: () => this.setState({ menuOpen: !st.menuOpen }),
      burgerIcon: st.menuOpen ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16',
      burgerStyle: 'width:44px;height:44px;border-radius:10px;align-items:center;justify-content:center;cursor:pointer;background:transparent;border:1px solid ' + (onHero ? 'rgba(255,255,255,.2)' : '#D5DCE6') + ';color:' + navCol,
      mobileLinks: [['work', 'Projects'], ['skills', 'Skills'], ['process', 'Process'], ['about', 'About'], ['contact', 'Contact'], ['contact', 'Resume']].map((m) => ({ href: '#' + m[0], label: m[1], go: (ev) => { if (ev && ev.preventDefault) ev.preventDefault(); this.setState({ menuOpen: false }); setTimeout(() => this.go(m[0])(), 60); } })),
      navStyle: 'position:sticky;top:0;z-index:30;margin-bottom:-72px;border-bottom:1px solid ' + (onHero ? 'rgba(255,255,255,.08)' : '#E5E9F0') + ';background:' + (onHero ? (scrolled ? 'rgba(6,20,43,.7)' : 'transparent') : 'rgba(255,255,255,.92)') + ';backdrop-filter:blur(12px);color:' + navCol + ';box-shadow:' + (onHero ? 'none' : '0 10px 30px -20px rgba(10,37,64,.4)'),
      logoBox: 'width:38px;height:38px;border-radius:10px;display:inline-flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;background:' + (onHero ? '#FFFFFF' : '#0A2540') + ';color:' + (onHero ? '#06142B' : '#FFFFFF') + ';transition:background .4s,color .4s',
      logoSub: 'font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:' + (onHero ? '#7F93B5' : '#64748B'),
      navLinks,
      openPill: 'display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;padding:7px 12px;border-radius:999px;text-decoration:none;cursor:pointer;border:1px solid ' + (onHero ? 'rgba(255,255,255,.18)' : '#D5DCE6') + ';color:' + navCol,
      resumeBtn: 'display:inline-flex;align-items:center;gap:6px;min-height:40px;padding:0 18px;border-radius:8px;text-decoration:none;font-weight:800;background:' + (onHero ? '#FFFFFF' : '#0A2540') + ';color:' + (onHero ? '#06142B' : '#FFFFFF'),
      progressStyle: 'height:2px;background:linear-gradient(90deg,#1D4ED8,#22D3EE);width:' + (st.progress * 100).toFixed(1) + '%',
      heroWords: mkWords('I turn messy data into decisions.', ['decisions.'], 0.3, 0.09, true),
      pipeStats: 'rows in: ' + fmt(pp.inN) + '   ·   rejected: ' + fmt(pp.bad) + '   ·   clean: ' + fmt(pp.good) + '   ·   solutions delivered: ' + fmt(pp.solutions || 0),
      stagePills, recs, colLabels, scanOn: stage === 1,
      headerStyle: 'position:absolute;left:0;top:0;width:100%;display:flex;justify-content:space-between;padding:0 10px;box-sizing:border-box;font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#5E7398;opacity:' + (stage < 2 ? 1 : 0),
      decisionStyle: 'position:absolute;right:0;top:0;width:56%;padding:16px 18px;box-sizing:border-box;border-radius:12px;background:#67E8F9;box-shadow:0 20px 40px -20px rgba(34,211,238,.6);opacity:' + (stage === 3 ? 1 : 0) + ';transform:translateY(' + (stage === 3 ? 0 : -14) + 'px) scale(' + (stage === 3 ? 1 : 0.96) + ')',
      decisionText: 'Prioritise ' + cats[top] + '. It brings in ' + share + '% of revenue from just ' + cnt[top] + ' of 20 orders.',
      caption: captions[stage], sqlTyped: typed,
      cls, impact, tools: tools.concat(tools), tools2: tools2.concat(tools2),
      refHero: this.mkRef('hero'), refImpact: this.mkRef('impact'), refWorkHead: this.mkRef('workHead'),
      refP1: this.mkRef('p1'), refP2: this.mkRef('p2'), refP3: this.mkRef('p3'), refP4: this.mkRef('p4'),
      refSkills: this.mkRef('skills'), refProcess: this.mkRef('process'), refAbout: this.mkRef('about'), refContact: this.mkRef('contact'),
      projList, projProgress: 'height:100%;background:#1D4ED8;transition:width .5s;width:' + ((st.proj + 1) * 25) + '%', projCounter: '0' + (st.proj + 1) + ' / 04',
      p1a: fmt(9994 * e1), p1b: fmt(1850 * e1), frameUrl: SH[cs][3], p1c: Math.round(30 * e1), tabs, tabText: tabContent[st.tab], shots, shotTabs,
      p2a: fmt(28027 * e2), p2b: Math.round(46 * e2), p2c: Math.round(79 * e2), peaks, alloc,
      caShots, caTabs, caDepts, caRecs, caPage: CASH[cc][1], p5a: fmt(9216 * e5), p5b: (78.6 * e5).toFixed(1), p5c: (35.26 * e5).toFixed(2),
      tilt3: tiltFn(3), untilt3: () => this.setState({ tilt3: null }), tiltStyle3: tiltOf(3),
      p3a: fmt(59 * e3), p3b: fmt(24 * e3), p3c: (53.38 * e3).toFixed(1),
      groups, projRows, selName: cur[0], selCount: used,
      selFill: 'height:100%;background:#1D4ED8;border-radius:99px;transition:width .7s cubic-bezier(.2,.7,.2,1);width:' + (used / 4 * 100).toFixed(1) + '%',
      process, profile, rings, qualities, journey,
      qPills, qRows, qTyped,
      qCount: qDone ? Q.rows.length + ' rows returned' + (Q.rows[0][2] ? '  ·  click a project to jump to it' : '') : 'running…',
      qHead: Q.head ? 'display:flex;gap:12px;padding:10px 0;border-bottom:1px solid #1E3A5F;font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#5E7398' : 'display:none',
      qKeyStyle: 'flex:none;width:' + Q.key, qCol1: Q.head ? Q.head[0] : '', qCol2: Q.head ? Q.head[1] : '',
      contactWords: mkWords('Have a question your data should answer?', ['data', 'answer?'], 0.1, 0.07, !!seen.contact),
      copyLabel: st.copied ? 'Copied' : 'Copy',
      codeLines,
      tilt1: tiltFn(1), untilt1: () => this.setState({ tilt1: null }), tiltStyle1: tiltOf(1),
      tilt2: tiltFn(2), untilt2: () => this.setState({ tilt2: null }), tiltStyle2: tiltOf(2),
      refM1: this.mkRef('m1'), refC2: this.mkRef('c2'), refM2: this.mkRef('m2'), refC3: this.mkRef('c3'), refM3: this.mkRef('m3'), refC5: this.mkRef('c5'), refM5: this.mkRef('m5'), refRes: this.mkRef('res'), refJr: this.mkRef('jr'),
      goResume: (ev) => { this.go('contact')(ev); this.setState({ flash: Date.now() }); },
      resumeCls: 'v-btn' + (st.flash && Date.now() - st.flash < 2600 ? ' v-flash' : ''),
      resumeLabel: 'Download Resume',
      copyEmail: () => { try { navigator.clipboard.writeText('corp.adi07@gmail.com'); } catch (e) {} this.setState({ copied: true }); setTimeout(() => this.setState({ copied: false }), 1800); }
    };
  }
}

export default Portfolio;
