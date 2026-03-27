"use client";

import Link from "next/link";

// ─────────────────────────────────────────────
//  이미지 경로 설정
//  📁 public/images/farm-2025/
//      ├── hero.png
//      ├── gallery-1.png  ← 농장 전체 화면
//      ├── gallery-2.png  ← 닭/소 농장 화면
//      ├── gallery-3.png  ← 밭 성장 단계
//      └── gallery-4.png  ← Cursor Dictionary Inspector
// ─────────────────────────────────────────────
const HERO_IMAGE = "/images/farm-2025/hero.png";

const GALLERY = [
  { src: "/images/farm-2025/gallery-1.png", label: "농장 전체 화면" },
  { src: "/images/farm-2025/gallery-2.png", label: "닭 / 소 농장 화면" },
  { src: "/images/farm-2025/gallery-3.png", label: "밭 성장 단계" },
  { src: "/images/farm-2025/gallery-4.png", label: "Cursor Dictionary Inspector" },
];

const TEAL = "#2dd4bf";
const GREEN = "#4ade80";

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

function SubSubItem({ children }) {
  return (
    <li style={{
      display: "flex", alignItems: "flex-start", gap: "10px",
      marginBottom: "4px", lineHeight: "1.7", fontSize: "12px", opacity: 0.5,
      paddingLeft: "32px",
    }}>
      <span style={{ color: "#666", marginTop: "2px", flexShrink: 0 }}>▸</span>
      <span>{children}</span>
    </li>
  );
}

function Card({ children, style }) {
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

// 농장 영역 카드
function AreaCard({ emoji, title, color, children }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      borderRadius: "12px",
      padding: "20px 22px",
      border: `1px solid ${color}30`,
      borderLeft: `3px solid ${color}`,
      marginBottom: "14px",
    }}>
      <p style={{ fontSize: "16px", fontWeight: 700, color: "#f0f0f0", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "20px" }}>{emoji}</span> {title}
      </p>
      {children}
    </div>
  );
}

// Cursor Dictionary 시각화
function CursorDict() {
  const rows = [
    ["Cucumber", "items-spritesheet_70"],
    ["Lettuceplant", "items-spritesheet_56"],
    ["Tomato", "items-spritesheet_23"],
    ["Hoe", "tools-n-meterial-items_2"],
    ["Default", "Catpaw pointing Mouse icon_0"],
    ["ClickDown", "Catpaw holding Mouse icon_0"],
    ["ClickUp", "Catpaw Mouse icon_0"],
  ];
  return (
    <div style={{
      background: "#1a1a1a",
      borderRadius: "8px",
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.1)",
    }}>
      <div style={{
        background: "#2a2a2a", padding: "8px 14px",
        fontSize: "12px", fontWeight: 700, color: GREEN, letterSpacing: "0.05em",
      }}>▼ Cursor Dic</div>
      <div>
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
            padding: "6px 14px",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
          }}>
            <span style={{ fontSize: "12px", color: "#ccc", fontFamily: "monospace" }}>{k}</span>
            <span style={{ fontSize: "12px", color: "#aaa", fontFamily: "monospace", opacity: 0.75 }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FarmPage() {
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
        background: "linear-gradient(160deg, #0a1a0a 0%, #0f2a10 50%, #142a08 100%)",
        overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(74,222,128,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div style={{
          position: "absolute", width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74,222,128,0.09) 0%, transparent 70%)",
          top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        }} />
        <img
          src={HERO_IMAGE} alt="Farm 히어로"
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
          {["Unity 6", "C#", "TileMap", "ScriptableObject", "SpriteLibrary"].map(t => (
            <span key={t} style={TAG}>{t}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "8px", lineHeight: 1.3, color: "#f0f0f0" }}>
          2DPort_2025_Farm
        </h1>
        <p style={{ fontSize: "16px", fontWeight: 700, color: TEAL, marginBottom: "36px" }}>
          농장 운영 시뮬레이션 게임
        </p>

        {/* Project Info */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>Project Info</h2>
          <p style={{ lineHeight: 1.85, fontSize: "15px", opacity: 0.85, marginBottom: "16px" }}>
            닭 농장, 소 농장, 과수원, 밭, 일꾼, 상점 등 다양한 농장 구역을 운영하는 시뮬레이션 게임.
            <br/>
            TileMap 기반 세부 영역 분할과 ScriptableObject를 통한 데이터 관리, 일꾼의 자율 AI까지 구현.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {[
              "엔진: Unity 6 / 언어: C#",
              "스테이지: TileMap 기반 영역 분할 (닭/소/과수원/밭)",
              "데이터: ScriptableObject Drawer + Custom Dictionary Inspector",
              "에셋: SpriteLibrary Assets, itch.io 리소스",
            ].map(t => (
              <p key={t} style={{ fontSize: "14px", color: TEAL, opacity: 0.9, margin: 0 }}>• {t}</p>
            ))}
          </div>
        </section>

        {/* 핵심 기능 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>핵심 기능</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <CheckItem>User Interaction(Click) 된 Object에 따라 Function 분기.</CheckItem>
            <CheckItem>Game / Farm / UI 3개의 Manager가 Controller, 데이터 관리 및 Action 명령 실행.</CheckItem>
            <CheckItem>
              Unity Editor Script 활용, Dictionary 기능 Inspector 표기 및 운용.
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>KEY Type: string, enum</SubItem>
                <SubItem>VALUE Type: class, unityEvent, GameObject, string, etc...</SubItem>
              </ul>
            </CheckItem>
            <CheckItem>Unity Editor Script 활용, ScriptableObject Drawer 작성 및 운용.</CheckItem>
            <CheckItem>SpriteLibrary Assets 활용.</CheckItem>
            <CheckItem>Tilemap 활용.</CheckItem>
            <CheckItem>각 농장 세부 영역 분할 (닭/소/과수원/밭)</CheckItem>
            <CheckItem>In Game Object 관리(Controller)와 실질 데이터 분할(ScriptableObject) 적용</CheckItem>
            <CheckItem>Mouse Icon 변경에 따른 UX.</CheckItem>
          </ul>

          <div style={{ marginTop: "20px" }}>
            <p style={{ fontSize: "14px", opacity: 0.55, marginBottom: "10px" }}>Cursor Dictionary (실존 데이터)</p>
            <CursorDict />
          </div>
        </section>

        {/* 농장 세부 영역 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>농장 세부 영역</h2>

          <AreaCard emoji="🐔" title="닭 농장" color="#fbbf24">
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <CheckItem>계란 → 병아리 → 닭 순으로 성장.</CheckItem>
              <CheckItem>닭에서 일정 시간 후 알 채집 가능.</CheckItem>
              <CheckItem>
                상점 이용
                <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                  <SubItem>상점에서 농장 업그레이드 구매 가능</SubItem>
                  <SubItem>확장에 따라 닭 최대 보유량 확대.</SubItem>
                  <SubItem>계란 / 병아리 / 닭 구매 가능.</SubItem>
                </ul>
              </CheckItem>
            </ul>
          </AreaCard>

          <AreaCard emoji="🐄" title="소 농장" color="#60a5fa">
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <CheckItem>송아지 → 소 순으로 성장.</CheckItem>
              <CheckItem>소에서 일정 시간 후 우유 채집 가능.</CheckItem>
              <CheckItem>
                상점 이용
                <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                  <SubItem>상점에서 농장 업그레이드 구매 가능</SubItem>
                  <SubItem>확장에 따라 소 최대 보유량 확대.</SubItem>
                  <SubItem>송아지 / 소 구매 가능.</SubItem>
                </ul>
              </CheckItem>
            </ul>
          </AreaCard>

          <AreaCard emoji="🍎" title="과수원" color="#f472b6">
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <CheckItem>일정 시간 후 과일 채집 가능.</CheckItem>
            </ul>
          </AreaCard>

          <AreaCard emoji="🌱" title="밭" color={GREEN}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <CheckItem>
                잡초 제거 → 빈 땅 → 씨앗 심기 → 떡잎 → 중간 성장 → 최대 성장 순
                <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                  <SubItem>좌측 UI 괭이 아이콘으로 잡초 제거</SubItem>
                  <SubItem>
                    빈 땅에 하단 UI 씨앗 아이콘으로 씨앗 심기 가능
                    <ul style={{ listStyle: "none", padding: 0, margin: "4px 0 0 16px" }}>
                      <SubSubItem>Inventory에 씨앗이 반드시 1개 이상 있어야 가능.</SubSubItem>
                    </ul>
                  </SubItem>
                  <SubItem>일정 시간이 지남에 따라 심어진 식물이 성장.</SubItem>
                  <SubItem>최대 성장 이후 일정 시간이 지나면 채집 가능</SubItem>
                </ul>
              </CheckItem>
            </ul>
          </AreaCard>

          <AreaCard emoji="👷" title="일꾼" color="#a78bfa">
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <CheckItem>Drag / Drop 으로 담당 영역 지정.</CheckItem>
              <CheckItem>채집 가능한 Object를 자동 탐색 및 이동 후 채집 실행.</CheckItem>
              <CheckItem>채집 시 Stamina 감소.</CheckItem>
              <CheckItem>업무 외의 영역 (ex, 집) 으로 Drag / Drop 이탈 시 Rest 상태 진입 및 Stamina 점진적 회복.</CheckItem>
              <CheckItem>담당 업무 구역에서 채집 가능 Object가 없을 경우 해당 구역 Patrol.</CheckItem>
            </ul>
          </AreaCard>

          <AreaCard emoji="🏪" title="상점" color="#fb923c">
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <CheckItem>
                Inventory Item 판매 및 Item Table 내의 Item 구매 가능
                <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                  <SubItem>식물 씨앗</SubItem>
                  <SubItem>가축</SubItem>
                  <SubItem>시설 업그레이드</SubItem>
                </ul>
              </CheckItem>
            </ul>
          </AreaCard>

          <AreaCard emoji="🎒" title="가방" color="#94a3b8">
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <CheckItem>Inventory 내의 아이템 확인.</CheckItem>
            </ul>
          </AreaCard>
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
                background: "#0a1a0a", aspectRatio: "16/9",
                border: "1px solid rgba(74,222,128,0.15)",
              }}>
                <img
                  src={src} alt={label}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onError={e => { e.currentTarget.style.display = "none"; }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "linear-gradient(rgba(74,222,128,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.04) 1px, transparent 1px)",
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
