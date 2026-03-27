"use client";

import Link from "next/link";

// ─────────────────────────────────────────────
//  이미지 경로 설정
//  📁 public/images/mini-2025/
//      ├── hero.png         ← 게임 플레이 화면
//      ├── gallery-1.png    ← 인게임 과일 그리드
//      ├── gallery-2.png    ← Inspector Custom Dictionary
//      ├── gallery-3.png    ← Word Dictionary 예시
//      └── gallery-4.png    ← VO Dictionary 예시
// ─────────────────────────────────────────────
const HERO_IMAGE = "/images/mini-2025/hero.png";

const GALLERY = [
  { src: "/images/mini-2025/gallery-1.png", label: "인게임 과일 그리드 화면" },
  { src: "/images/mini-2025/gallery-2.png", label: "일시정지 Text Animaton" },
  { src: "/images/mini-2025/gallery-3.png", label: "Custom DictionaryDrawer (VO)" },
  { src: "/images/mini-2025/gallery-4.png", label: "Manager 구조 흐름" },
];

const TEAL = "#2dd4bf";
const ORANGE = "#fb923c";

const SECTION_TITLE = {
  fontSize: "17px",
  fontWeight: 700,
  color: TEAL,
  borderLeft: `3px solid ${TEAL}`,
  paddingLeft: "12px",
  marginBottom: "16px",
  letterSpacing: "0.01em",
};

const TAG = {
  display: "inline-block",
  padding: "4px 12px",
  borderRadius: "999px",
  border: `1px solid ${TEAL}`,
  color: TEAL,
  fontSize: "13px",
  fontWeight: 500,
  marginRight: "8px",
  marginBottom: "8px",
};

function CheckItem({ children }) {
  return (
    <li style={{
      display: "flex", alignItems: "flex-start", gap: "10px",
      marginBottom: "10px", lineHeight: "1.7", fontSize: "15px", opacity: 0.9,
    }}>
      <span style={{ color: TEAL, marginTop: "2px", flexShrink: 0 }}>✓</span>
      <span>{children}</span>
    </li>
  );
}

function SubItem({ children }) {
  return (
    <li style={{
      display: "flex", alignItems: "flex-start", gap: "10px",
      marginBottom: "6px", lineHeight: "1.7", fontSize: "13px", opacity: 0.65,
      paddingLeft: "16px",
    }}>
      <span style={{ color: "#888", marginTop: "2px", flexShrink: 0 }}>○</span>
      <span>{children}</span>
    </li>
  );
}

function Card({ children, style = {} }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.04)",
      borderRadius: "10px",
      padding: "20px 24px",
      border: "1px solid rgba(255,255,255,0.08)",
      marginBottom: "16px",
      ...style,
    }}>
      {children}
    </div>
  );
}

// Inspector Dictionary 시각화
function DictTable({ title, rows }) {
  return (
    <div style={{
      background: "#1a1a1a",
      borderRadius: "8px",
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.1)",
      marginBottom: "12px",
    }}>
      <div style={{
        background: "#2a2a2a",
        padding: "8px 14px",
        fontSize: "12px",
        fontWeight: 700,
        color: ORANGE,
        letterSpacing: "0.05em",
      }}>{title}</div>
      <div style={{ padding: "4px 0" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          padding: "6px 14px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          <span style={{ fontSize: "11px", opacity: 0.4, fontWeight: 700 }}>Key</span>
          <span style={{ fontSize: "11px", opacity: 0.4, fontWeight: 700 }}>Value</span>
        </div>
        {rows.map(([k, v]) => (
          <div key={k} style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            padding: "7px 14px",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
          }}>
            <span style={{ fontSize: "12px", color: "#ccc", fontFamily: "monospace" }}>{k}</span>
            <span style={{ fontSize: "12px", color: "#aaa", fontFamily: "monospace", opacity: 0.8 }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 게임 흐름도
function FlowChart() {
  const steps = [
    { icon: "🎲", label: "랜덤 과일 선택", desc: "목표 과일 결정" },
    { icon: "🟩", label: "그리드 생성", desc: "UI Object 배치" },
    { icon: "👆", label: "Touch 입력", desc: "과일 클릭 감지" },
    { icon: "✅", label: "매칭 판정", desc: "동일 과일 제거" },
    { icon: "🏆", label: "클리어", desc: "전체 제거 완료" },
  ];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0", flexWrap: "wrap", justifyContent: "center", margin: "8px 0" }}>
      {steps.map((s, i) => (
        <div key={s.label} style={{ display: "flex", alignItems: "center" }}>
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(251,146,60,0.2)",
            borderRadius: "10px",
            padding: "12px 16px",
            minWidth: "88px",
          }}>
            <span style={{ fontSize: "22px", marginBottom: "6px" }}>{s.icon}</span>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#e0e0e0", textAlign: "center" }}>{s.label}</span>
            <span style={{ fontSize: "11px", opacity: 0.5, textAlign: "center", marginTop: "2px" }}>{s.desc}</span>
          </div>
          {i < steps.length - 1 && (
            <span style={{ color: ORANGE, fontSize: "16px", margin: "0 4px", opacity: 0.6 }}>→</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function MiniPage() {
  return (
    <div style={{
      background: "#0d0d0d",
      minHeight: "100vh",
      color: "#e8e8e8",
      fontFamily: "'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
    }}>

      {/* ── Hero ── */}
      <div style={{
        position: "relative", width: "100%", height: "320px",
        background: "linear-gradient(160deg, #1a100a 0%, #2a1500 40%, #1a0f00 100%)",
        overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(251,146,60,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(251,146,60,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div style={{
          position: "absolute", width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(251,146,60,0.1) 0%, transparent 70%)",
          top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        }} />
        <img
          src={HERO_IMAGE}
          alt="2DPort Mini 히어로"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          onError={e => { e.currentTarget.style.display = "none"; }}
        />
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "120px",
          background: "linear-gradient(transparent, #0d0d0d)",
        }} />
        <Link href="/" style={{
          position: "absolute", top: "16px", right: "16px",
          width: "36px", height: "36px", borderRadius: "50%",
          background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", fontSize: "18px", textDecoration: "none", zIndex: 10,
        }}>×</Link>
      </div>

      {/* ── Content ── */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "36px 24px 80px" }}>

        {/* Tags */}
        <div style={{ marginBottom: "18px" }}>
          {["Unity 6", "C#", "UGUI", "DOTween", "Editor Script"].map(t => (
            <span key={t} style={TAG}>{t}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "8px", lineHeight: 1.3, color: "#f0f0f0" }}>
          2DPort_2025_Mini
        </h1>
        <p style={{ fontSize: "16px", fontWeight: 700, color: TEAL, marginBottom: "8px" }}>
          UGUI 기반 과일 매칭 순발력 게임
        </p>
        <p style={{ fontSize: "14px", opacity: 0.6, marginBottom: "36px", lineHeight: 1.7 }}>
          랜덤으로 선택된 과일과 동일한 과일을 touch 방식으로 눌러 모든 과일을 지워야 클리어되는 게임.
          모든 오브젝트를 UI Object만으로 구성하였으며 DOTween을 활용한 애니메이션을 적용.
          <br /><span style={{ color: ORANGE }}>(통칭: 그림 맞추기)</span>
        </p>

        {/* 게임 흐름 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>게임 흐름</h2>
          <FlowChart />
        </section>

        {/* 핵심 기술 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>핵심 기술</h2>

          {/* 1. Custom Dictionary Drawer */}
          <Card>
            <p style={{ fontSize: "15px", fontWeight: 700, color: "#f0f0f0", marginBottom: "6px" }}>
              1. Custom DictionaryDrawer (Editor Script)
            </p>
            <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "16px" }}>
              Unity Editor Script를 통하여 필요 Custom_DictonaryDrawer 작성 및 Inspector Setting.
              Dictionary 자료구조를 Inspector에서 Key-Value 형태로 직접 편집 가능하도록 구현.
            </p>
            <DictTable
              title="Word Dictionary (텍스트 연출)"
              rows={[
                ["Menu_Word", "press <color=red>Game</color> Start!"],
                ["Play", "click <bounce><color=red> same things!!</color></bounce>"],
                ["Pause", "<wave> zzz zzzzzzz zzzzz </wave>"],
                ["Clear", "<rainb> easy peasy~ </rainb>"],
                ["Wait_Game", "wait a <bounce> minute </bounce>"],
                ["Fall", "noooooll <color=red><bounce> let's retry!! </bounce></color>"],
              ]}
            />
            <DictTable
              title="VO Dictionary (과일 이미지 매핑)"
              rows={[
                ["pear", "fruit-n-berries-items_2"],
                ["peach", "fruit-n-berries-items_3"],
                ["apple", "fruit-n-berries-items_0"],
                ["orange", "fruit-n-berries-items_1"],
              ]}
            />
          </Card>

          {/* 2. Manager 구조 */}
          <Card>
            <p style={{ fontSize: "15px", fontWeight: 700, color: "#f0f0f0", marginBottom: "12px" }}>
              2. Manager 구조 및 명령 위임
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <CheckItem>
                총괄 Manager.cs가 interaction object를 구분하여 각 UI/Game Manager의 Action 함수 호출 및 parameter를 통하여 세부 명령 하달.
              </CheckItem>
              <CheckItem>
                각 Manager에서 총괄 Manager의 명령 수행.
              </CheckItem>
            </ul>
            <div style={{
              marginTop: "16px",
              display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap",
            }}>
              {["총괄 Manager", "UI Manager", "Game Manager"].map((m, i) => (
                <div key={m} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{
                    padding: "8px 16px", borderRadius: "8px",
                    background: i === 0 ? `${ORANGE}22` : "rgba(255,255,255,0.05)",
                    border: `1px solid ${i === 0 ? ORANGE + "60" : "rgba(255,255,255,0.1)"}`,
                    fontSize: "13px", fontWeight: i === 0 ? 700 : 400,
                    color: i === 0 ? ORANGE : "#ccc",
                  }}>{m}</div>
                  {i < 2 && <span style={{ color: ORANGE, opacity: 0.5 }}>→</span>}
                </div>
              ))}
            </div>
          </Card>

          {/* 3. DOTween */}
          <Card>
            <p style={{ fontSize: "15px", fontWeight: 700, color: "#f0f0f0", marginBottom: "12px" }}>
              3. DOTween 애니메이션
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <CheckItem>UI Object의 등장 / 제거 / 강조 애니메이션에 DOTween 적용.</CheckItem>
            </ul>
          </Card>
          <Card>
            <p style={{ fontSize: "15px", fontWeight: 700, color: "#f0f0f0", marginBottom: "12px" }}>
              4. Text 애니메이션
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <CheckItem>Rich Text 태그 (`&lt;bounce&gt;`, `&lt;wave&gt;`, `&lt;rainb&gt;`) 와 연계한 텍스트 연출.</CheckItem>
            </ul>
          </Card>
        </section>


        {/* 사용 package */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>사용 패키지</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { name: "Unity 6", desc: "게임 엔진 및 UGUI" },
              { name: "DOTween", desc: "UI 애니메이션 트위닝 라이브러리" },
              { name: "itch.io", desc: "과일 이미지 리소스 확보" },
              { name: "TextAnimator", desc: "Text 애니메이션" },
            ].map((p, i) => (
              <div key={p.name} style={{
                display: "flex", alignItems: "center", gap: "16px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "10px", padding: "14px 20px",
              }}>
                <span style={{
                  width: "28px", height: "28px", borderRadius: "50%",
                  background: `${ORANGE}22`, border: `1px solid ${ORANGE}50`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "13px", fontWeight: 700, color: ORANGE, flexShrink: 0,
                }}>{i + 1}</span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "14px", color: "#e0e0e0", margin: 0 }}>{p.name}</p>
                  <p style={{ fontSize: "13px", opacity: 0.5, margin: 0 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section>
          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f0f0f0", marginBottom: "16px" }}>
            Project Gallery
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {GALLERY.map(({ src, label }) => (
              <div key={src} style={{
                position: "relative", borderRadius: "8px", overflow: "hidden",
                background: "#1a100a", aspectRatio: "16/9",
                border: "1px solid rgba(251,146,60,0.15)",
              }}>
                <img
                  src={src} alt={label}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onError={e => { e.currentTarget.style.display = "none"; }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "linear-gradient(rgba(251,146,60,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(251,146,60,0.04) 1px, transparent 1px)",
                  backgroundSize: "20px 20px", pointerEvents: "none",
                }} />
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  background: "linear-gradient(transparent, rgba(0,0,0,0.78))",
                  padding: "20px 12px 10px",
                }}>
                  <p style={{ fontSize: "12px", color: "#e8e8e8", margin: 0 }}>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
