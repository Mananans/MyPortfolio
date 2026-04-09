"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// ── 프로젝트 데이터 ──────────────────────────────────────────
const PROJECTS = [
  {
    id: "2dport-2025",
    title: "2DPort 2025",
    desc: "2D 퍼즐 공포 게임",
    period: "2025.01 ~ 2025.03",
    highlight: "ScriptableObject 기반 퍼즐 구조 설계",
    tags: ["Unity", "C#"],
    img: "/images/thumb/2dport-2025.png",
    link: "/projects/2dport-2025",
  },
  {
    id: "rhythm-2025",
    title: "Rhythm Game",
    desc: "AI + 자동화 리듬 게임",
    period: "2025.01 ~ 2025.03",
    highlight: "AI 기반 음악 채보 자동 생성 시스템",
    tags: ["Unity", "C#"],
    img: "/images/thumb/rhythm-2025.png",
    link: "/projects/teampo-2025-rhythm",
  },
  {
    id: "cannon-war",
    title: "Cannon War",
    desc: "데이터 베이스 설계",
    period: "2025.03",
    highlight: "데이터 베이스 설계",
    tags: ["Unity", "C#", "Firebase"],
    img: "/images/thumb/cannon-war.png",
    link: "/projects/teampo-2025-cannon-war",
  },
  {
    id: "mini-2025",
    title: "2DPort_2025_Mini",
    desc: "UGUI 기반 타일 맞추기",
    period: "2025.02",
    highlight: "UGUI 커스텀 레이아웃 구현",
    tags: ["Unity", "UGUI","Editor"],
    img: "/images/thumb/mini-2025.png",
    link: "/projects/2dport-2025-mini",
  },
  {
    id: "farm-2025",
    title: "2DPort_2025_Farm",
    desc: "농장 운영 게임",
    period: "2025.09 ~ 2025.11",
    highlight: "Sprite Assets을 활용한 Animation",
    tags: ["Unity", "C#", "Editor"],
    img: "/images/thumb/farm-2025.png",
    link: "/projects/2dport-2025-farm",
  },
  {
    id: "ccd-2026",
    title: "2DPort_2026_CCD",
    desc: "카드 조합 디펜스 게임",
    period: "2026.03 ~ Present",
    highlight: "카드 조합 로직 및 타워 디펜스 구조 설계",
    tags: ["Unity", "C#", "Editor"],
    img: "/images/thumb/ccd-2026.png",
    link: "/projects/2dport-2026-ccd",
  },
];

// ── 경력 데이터 ──────────────────────────────────────────────
const CAREERS = [
  {
    company: "알마로꼬",
    role: "개발팀 / 주임",
    period: "2022.01 ~ 2025.01",
    items: [
      "마산 로봇랜드, 국립 과학관, 미술관 등 전시&디지털 프로젝트의 콘텐츠 담당 개발",
      "기술 RnD 및 필요 기능 모듈화 설계, 담당 개발",
      "연 매출 수십억 규모 프로젝트 개발",
      "프레임 워크 설계 및 배포, 활용",
    ],
  }
];

// ── 스킬 데이터 ──────────────────────────────────────────────
const SKILLS = [
  { icon: "⚙️", name: "Unity / C#", desc: "게임 오브젝트 구조 설계 및 시스템 구현" },
  { icon: "🧩", name: "Data Design", desc: "ScriptableObject 및 테이블 기반 확장에 용이한 데이터 테이블 설계" },
  { icon: "🎨", name: "UI / UGUI", desc: "Canvas 기반 인터랙티브 UI 및 애니메이션 구현" },
  { icon: "⚡", name: "Fast Learner", desc: "새 기술을 빠르게 습득하고 즉시 프로젝트에 적용" },
  { icon: "🔧", name: "Engine Custom", desc: "Editor Script 작성, 응용" },
];

// ── 상수 ────────────────────────────────────────────────────
const TEAL = "#2dd4bf";
const NAV_LINKS = ["소개", "경력", "프로젝트", "스킬", "연락"];

export default function Home() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [filter, setFilter] = useState("전체");

  // ✅ 마운트 시 body overflow 반드시 초기화 (뒤로가기로 돌아왔을 때 잔류 방지)
  useEffect(() => {
    document.body.style.overflow = "";
  }, []);

  // 모달 열릴 때 body 스크롤 잠금 / 닫힐 때 해제
  useEffect(() => {
    document.body.style.overflow = activeModal ? "hidden" : "";
    // 컴포넌트 언마운트 시에도 반드시 해제
    return () => { document.body.style.overflow = ""; };
  }, [activeModal]);

  const closeModal = () => setActiveModal(null);

  // ✅ 상세 페이지 이동 시 모달 닫고 overflow 해제 후 이동
  const goToDetail = (link) => {
    document.body.style.overflow = "";
    setActiveModal(null);
    router.push(link);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("guswls0477@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      alert("복사 실패");
    }
  };

  const allTags = ["전체", "Unity", "C#", "UGUI", "Firebase", "Editor"];
  const filtered = filter === "전체" ? PROJECTS : PROJECTS.filter(p => p.tags.includes(filter));
  const modal = PROJECTS.find(p => p.id === activeModal);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #0a0a0a;
          color: #e8e8e8;
          font-family: 'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }

        .nav-link {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 15px;
          transition: color 0.2s;
        }
        .nav-link:hover { color: #fff; }

        .proj-card {
          background: #161616;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.06);
          transition: transform 0.25s, border-color 0.25s;
        }
        .proj-card:hover {
          transform: translateY(-4px);
          border-color: rgba(45,212,191,0.35);
        }

        .filter-btn {
          padding: 8px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.15);
          background: transparent;
          color: rgba(255,255,255,0.6);
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .filter-btn:hover { border-color: ${TEAL}; color: ${TEAL}; }
        .filter-btn.active {
          background: ${TEAL};
          border-color: ${TEAL};
          color: #000;
          font-weight: 700;
        }

        .skill-card {
          background: #161616;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 28px 24px;
          transition: border-color 0.2s;
        }
        .skill-card:hover { border-color: rgba(45,212,191,0.3); }

        .career-card {
          background: #161616;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 32px 36px;
          transition: border-color 0.2s;
        }
        .career-card:hover { border-color: rgba(45,212,191,0.2); }

        .career-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 10px;
          font-size: 15px;
          line-height: 1.7;
          opacity: 0.85;
        }
        .career-item::before {
          content: '';
          display: inline-block;
          width: 18px;
          height: 18px;
          min-width: 18px;
          margin-top: 3px;
          border-radius: 50%;
          border: 2px solid ${TEAL};
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M2 6l3 3 5-5' stroke='%232dd4bf' stroke-width='1.8' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/12px no-repeat;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
        .modal-inner { animation: fadeIn 0.2s ease; }

        @keyframes heroFade {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-content { animation: heroFade 0.8s ease forwards; }
      `}</style>

      {/* ── Navbar ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 40px", height: "60px",
        background: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <span style={{ fontWeight: 800, fontSize: "17px", letterSpacing: "0.05em" }}>
          HJ<span style={{ color: TEAL }}> DEV</span>
        </span>
        <div style={{ display: "flex", gap: "32px" }}>
          {NAV_LINKS.map(l => (
            <a key={l} href={`#${l}`} className="nav-link">{l}</a>
          ))}
        </div>
      </nav>

      <main>
        {/* ── Hero ── */}
        <section id="소개" style={{
          minHeight: "100vh",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px 60px",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
            width: "600px", height: "400px",
            background: "radial-gradient(ellipse, rgba(45,212,191,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(45,212,191,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px", pointerEvents: "none",
          }} />

          <div className="hero-content" style={{ position: "relative", zIndex: 1, maxWidth: "780px" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "6px 16px", borderRadius: "999px",
              border: "1px solid rgba(45,212,191,0.4)",
              fontSize: "13px", color: TEAL, marginBottom: "32px", letterSpacing: "0.08em",
            }}>
              ⚡ Game Developer Portfolio
            </div>

            <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900, lineHeight: 1.15, marginBottom: "20px" }}>
              재미있는 게임을 만들고,<br />
              <span style={{ color: TEAL }}>끝까지 완수합니다.</span>
            </h1>

            <p style={{ fontSize: "16px", lineHeight: 1.8, opacity: 0.7, maxWidth: "560px", margin: "0 auto 40px" }}>
              Unity 기반 게임 개발자입니다. 퍼즐, 리듬, 디펜스 등 다양한 장르의 게임을 직접 설계하고 구현합니다.
            </p>

            <a href="#프로젝트" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "14px 32px", borderRadius: "999px",
              border: `1px solid ${TEAL}`, color: TEAL,
              fontSize: "15px", fontWeight: 600,
              textDecoration: "none", transition: "background 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(45,212,191,0.1)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              프로젝트 보기 ↓
            </a>

            <div style={{ marginTop: "56px" }}>
              <p style={{ fontSize: "12px", opacity: 0.4, letterSpacing: "0.1em", marginBottom: "16px" }}>사용 기술</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
                {["Unity", "AWS", "Firebase", "C#", "Git"].map(t => (
                  <span key={t} style={{
                    padding: "6px 16px", borderRadius: "999px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    fontSize: "13px", opacity: 0.75,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Career ── */}
        <section id="경력" style={{ padding: "100px 24px", maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ color: TEAL, fontSize: "12px", letterSpacing: "0.15em", textAlign: "center", marginBottom: "12px" }}>CAREER</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, textAlign: "center", marginBottom: "56px" }}>경력 사항</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {CAREERS.map(c => (
              <div key={c.company} className="career-card">
                <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#fff", marginBottom: "6px" }}>{c.company}</h3>
                <p style={{ fontSize: "15px", fontWeight: 700, color: TEAL, marginBottom: "12px" }}>{c.role}</p>
                <p style={{ fontSize: "14px", opacity: 0.5, marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>📅</span> {c.period}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {c.items.map((item, i) => (
                    <li key={i} className="career-item">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="스킬" style={{ padding: "100px 24px", maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ color: TEAL, fontSize: "12px", letterSpacing: "0.15em", textAlign: "center", marginBottom: "12px" }}>COMPETENCY</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, textAlign: "center", marginBottom: "56px" }}>핵심 역량</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
            {SKILLS.map(s => (
              <div key={s.name} className="skill-card">
                <div style={{ fontSize: "28px", marginBottom: "14px" }}>{s.icon}</div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#fff", marginBottom: "6px" }}>{s.name}</h3>
                <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="프로젝트" style={{ padding: "100px 24px", maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ color: TEAL, fontSize: "12px", letterSpacing: "0.15em", textAlign: "center", marginBottom: "12px" }}>PROJECTS</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, textAlign: "center", marginBottom: "12px" }}>진행한 프로젝트</h2>
          <p style={{ textAlign: "center", opacity: 0.5, fontSize: "15px", marginBottom: "40px" }}>
            카드를 클릭하면 상세 정보를 확인할 수 있습니다.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", marginBottom: "40px" }}>
            {allTags.map(t => (
              <button key={t} className={`filter-btn${filter === t ? " active" : ""}`} onClick={() => setFilter(t)}>
                {t}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" }}>
            {filtered.map(p => (
              <div key={p.id} className="proj-card" onClick={() => setActiveModal(p.id)}>
                <div style={{ position: "relative", height: "200px", background: "#1a1a2e", overflow: "hidden" }}>
                  <img
                    src={p.img} alt={p.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    onError={e => { e.currentTarget.style.display = "none"; }}
                  />
                  <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    backgroundImage: "linear-gradient(rgba(45,212,191,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.05) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }} />
                  <div style={{ position: "absolute", top: "12px", left: "12px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        padding: "3px 10px", borderRadius: "999px",
                        background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)",
                        fontSize: "11px", color: "#ccc", border: "1px solid rgba(255,255,255,0.1)",
                      }}>{t}</span>
                    ))}
                  </div>
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: "60px",
                    background: "linear-gradient(transparent, #161616)",
                  }} />
                </div>
                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "6px" }}>{p.title}</h3>
                  <p style={{ fontSize: "13px", opacity: 0.5, marginBottom: "12px" }}>{p.period}</p>
                  <p style={{ fontSize: "13px", color: TEAL, display: "flex", alignItems: "center", gap: "6px" }}>
                    <span>●</span> {p.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="연락" style={{
          padding: "100px 24px", textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, marginBottom: "12px" }}>함께 만들어요</h2>
          <p style={{ opacity: 0.5, fontSize: "15px", marginBottom: "32px" }}>
            새로운 프로젝트나 협업 제안이 있다면 언제든 연락 주세요.
          </p>
          <button
            onClick={copyEmail}
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "14px 28px", borderRadius: "999px",
              border: `1px solid ${TEAL}`, background: "transparent",
              color: TEAL, fontSize: "15px", fontWeight: 600,
              cursor: "pointer", fontFamily: "inherit", transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(45,212,191,0.1)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            ✉ {copied ? "복사됨!" : "guswls0477@gmail.com ↗"}
          </button>
          <p style={{ marginTop: "60px", fontSize: "13px", opacity: 0.3 }}>
            © 2025 HyunJin. All rights reserved.
          </p>
        </section>
      </main>

      {/* ── Project Modal ── */}
      {activeModal && modal && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed", inset: 0, zIndex: 200,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(6px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            className="modal-inner"
            onClick={e => e.stopPropagation()}
            style={{
              background: "#141414", borderRadius: "20px",
              width: "100%", maxWidth: "720px", maxHeight: "90vh",
              overflow: "auto", border: "1px solid rgba(255,255,255,0.08)",
              position: "relative",
            }}
          >
            {/* 모달 히어로 */}
            <div style={{ position: "relative", height: "260px", background: "#1a1a2e", overflow: "hidden" }}>
              <img
                src={modal.img} alt={modal.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={e => { e.currentTarget.style.display = "none"; }}
              />
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: "linear-gradient(rgba(45,212,191,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.05) 1px, transparent 1px)",
                backgroundSize: "30px 30px", pointerEvents: "none",
              }} />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "100px",
                background: "linear-gradient(transparent, #141414)",
              }} />
              <button
                onClick={closeModal}
                style={{
                  position: "absolute", top: "16px", right: "16px",
                  width: "36px", height: "36px", borderRadius: "50%",
                  background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff", fontSize: "18px", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "inherit",
                }}>×</button>
            </div>

            {/* 모달 콘텐츠 */}
            <div style={{ padding: "28px 32px 36px" }}>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
                {modal.tags.map(t => (
                  <span key={t} style={{
                    padding: "4px 12px", borderRadius: "999px",
                    border: `1px solid ${TEAL}`, color: TEAL, fontSize: "12px",
                  }}>{t}</span>
                ))}
              </div>
              <h2 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "6px" }}>{modal.title}</h2>
              <p style={{ color: TEAL, fontWeight: 600, fontSize: "15px", marginBottom: "24px" }}>{modal.desc}</p>
              <p style={{ fontSize: "13px", opacity: 0.5, marginBottom: "20px" }}>📅 {modal.period}</p>
              <div style={{
                background: "rgba(45,212,191,0.07)", border: "1px solid rgba(45,212,191,0.2)",
                borderRadius: "10px", padding: "16px 20px", marginBottom: "24px",
                fontSize: "14px", color: TEAL,
                display: "flex", alignItems: "center", gap: "10px",
              }}>
                <span>★</span> {modal.highlight}
              </div>

              {/* ✅ <a> 대신 button + router.push 로 overflow 정리 후 이동 */}
              <button
                onClick={() => goToDetail(modal.link)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "11px 24px", borderRadius: "999px",
                  border: `1px solid ${TEAL}`, color: TEAL,
                  background: "transparent",
                  fontSize: "14px", fontWeight: 600, cursor: "pointer",
                  fontFamily: "inherit", transition: "background 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(45,212,191,0.1)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                상세 페이지 보기 →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
