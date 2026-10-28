export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", background: "#06142B", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Manrope, system-ui, sans-serif", padding: 24, textAlign: "center" }}>
      <div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "#67E8F9", fontSize: 14 }}>&gt; SELECT page FROM site; -- 0 rows returned</div>
        <h1 style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1.5, margin: "18px 0 0" }}>This page doesn&apos;t exist.</h1>
        <a href="/" style={{ display: "inline-block", marginTop: 28, padding: "14px 24px", background: "#FFFFFF", color: "#06142B", borderRadius: 8, fontWeight: 800, textDecoration: "none" }}>Back to the portfolio</a>
      </div>
    </div>
  );
}
