"use client";

import Link from "next/link";

const HERO_IMAGE = "/images/ccd-2026/hero.png";
const TABLE_FIELD_IMAGE = "/images/ccd-2026/Table-Field.png";
const ADD_DATA_POPUP_IMAGE = "/images/ccd-2026/AddDataPopUp.png";
const GALLERY = [
  { src: "/images/ccd-2026/gallery-1.png", label: "Field 전체 구성" },
  { src: "/images/ccd-2026/gallery-2.png", label: "카드 조합 화면" },
  { src: "/images/ccd-2026/gallery-3.png", label: "상점 구매 화면" },
  { src: "/images/ccd-2026/gallery-4.png", label: "Battle 화면" },
];

const TEAL = "#2dd4bf";
const PURPLE = "#a78bfa";

const SECTION_TITLE = {
  fontSize: "17px",
  fontWeight: 700,
  color: TEAL,
  borderLeft: `3px solid ${TEAL}`,
  paddingLeft: "12px",
  marginBottom: "16px",
  letterSpacing: "0.01em",
};

const SUB_TITLE = {
  fontSize: "14px",
  fontWeight: 700,
  color: PURPLE,
  borderLeft: `2px solid ${PURPLE}`,
  paddingLeft: "10px",
  marginBottom: "12px",
  marginTop: "24px",
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

function NumItem({ n, children }) {
  return (
    <li style={{
      display: "flex", alignItems: "flex-start", gap: "10px",
      marginBottom: "8px", lineHeight: "1.7", fontSize: "14px", opacity: 0.85,
    }}>
      <span style={{ color: PURPLE, fontWeight: 700, flexShrink: 0, minWidth: "18px", marginTop: "1px" }}>{n}.</span>
      <span>{children}</span>
    </li>
  );
}

function SubItem({ children }) {
  return (
    <li style={{
      display: "flex", alignItems: "flex-start", gap: "10px",
      marginBottom: "6px", lineHeight: "1.7", fontSize: "13px", opacity: 0.6,
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

function FieldZones_TableManager() {
  const zones = [
    { num: 1, label: "카드 판매", color: "#fbbf24" },
    { num: 2, label: "구매 상점", color: "#60a5fa" },
    { num: 3, label: "전투 대기", color: "#f87171" },
    { num: 4, label: "UI 존", color: PURPLE },
    { num: 5, label: "User Game 존", color: TEAL },
  ];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", margin: "12px 0" }}>
      {zones.map(z => (
        <div key={z.num} style={{
          display: "flex", alignItems: "center", gap: "8px",
          background: "rgba(255,255,255,0.04)",
          border: `1px solid ${z.color}40`,
          borderRadius: "8px", padding: "8px 14px",
        }}>
          <span style={{
            width: "22px", height: "22px", borderRadius: "50%",
            background: z.color,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "11px", fontWeight: 700, color: "#000", flexShrink: 0,
          }}>{z.num}</span>
          <span style={{ fontSize: "13px", color: "#e0e0e0" }}>{z.label}</span>
        </div>
      ))}
    </div>
  );
}

function FieldZones_AddDataPopUp() {
  const zones = [
    { num: 1, label: "카드 기본 속성", color: "#fbbf24" },
    { num: 2, label: "판매 데이터 설정", color: "#60a5fa" },
    { num: 3, label: "출현 타입 설정", color: "#f87171" },
    { num: 4, label: "전투 데이터 설정", color: PURPLE },
  ];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", margin: "12px 0" }}>
      {zones.map(z => (
        <div key={z.num} style={{
          display: "flex", alignItems: "center", gap: "8px",
          background: "rgba(255,255,255,0.04)",
          border: `1px solid ${z.color}40`,
          borderRadius: "8px", padding: "8px 14px",
        }}>
          <span style={{
            width: "22px", height: "22px", borderRadius: "50%",
            background: z.color,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "11px", fontWeight: 700, color: "#000", flexShrink: 0,
          }}>{z.num}</span>
          <span style={{ fontSize: "13px", color: "#e0e0e0" }}>{z.label}</span>
        </div>
      ))}
    </div>
  );
}

function ComingSoon() {
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: "48px 24px",
      background: "rgba(255,255,255,0.02)",
      borderRadius: "12px",
      border: "1px dashed rgba(255,255,255,0.1)",
      textAlign: "center",
      marginBottom: "40px",
    }}>
      <div style={{ fontSize: "28px", marginBottom: "10px", opacity: 0.3 }}>🔒</div>
      <p style={{ fontSize: "14px", fontWeight: 700, opacity: 0.3, margin: 0 }}>준비 중</p>
    </div>
  );
}

export default function CCDPage() {
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
        background: "linear-gradient(160deg, #0d0a1a 0%, #150f2a 50%, #1a0d2e 100%)",
        overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(167,139,250,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div style={{
          position: "absolute", width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)",
          top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        }} />
        <img
          src={HERO_IMAGE} alt="CCD 히어로"
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
          {["Unity 6", "C#", "ScriptableObject", "Table", "Editor"].map(t => (
            <span key={t} style={TAG}>{t}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "8px", lineHeight: 1.3, color: "#f0f0f0" }}>
          2DPort_2026_CCD
        </h1>
        <p style={{ fontSize: "16px", fontWeight: 700, color: TEAL, marginBottom: "36px" }}>
          카드 조합 디펜스 게임
        </p>

        {/* Project Info */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>Project Info</h2>
          <p style={{ lineHeight: 1.85, fontSize: "15px", opacity: 0.85, marginBottom: "16px" }}>
            카드를 조합하여 타워를 생성하고 적을 막는 디펜스 게임.<br />
            Table 기반 데이터 구조로 상점 구매 / 카드 조합 / 전투 로직을 관리.<br />
            Add Data PopUp · BattleManager · TableManager 3개의 핵심 시스템으로 구성
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {[
              "엔진: Unity 6 / 언어: C#",
              "핵심 시스템: TableManager / BattleManager / Add Data PopUp",
              "데이터 구조: Custom Dictionary 기반 Table",
            ].map(t => (
              <p key={t} style={{ fontSize: "14px", color: TEAL, opacity: 0.9, margin: 0 }}>• {t}</p>
            ))}
          </div>
        </section>

        {/* ── Add Card Data ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>Add Data PopUp</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            복잡한 카드 데이터 매핑 및 카드 데이터 세팅 간소화를 위한 Unity Editor UI
          </p>
         <Card style={{ maxWidth: "75%" }}>
          <p style={{ fontSize: "14px", fontWeight: 700, color: "#f0f0f0", marginBottom: "12px" }}>Field 구성</p>
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>

            {/* ↓ 이미지 크기는 여기 width 값으로 조절 (현재 45%) */}
            <img
              src={ADD_DATA_POPUP_IMAGE}
              alt="Add Data PopUp"
              style={{ width: "45%", flexShrink: 0, borderRadius: "6px", border: "1px solid rgba(255,255,255,0.08)" }}
              onError={e => { e.currentTarget.style.display = "none"; }}
            />

            {/* 넘버링 — 한 열 세로 정렬 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
              {[
                { num: 1, label: "카드 기본 속성",   color: "#fbbf24" },
                { num: 2, label: "판매 데이터 설정", color: "#60a5fa" },
                { num: 3, label: "출현 타입 설정",   color: "#f87171" },
                { num: 4, label: "전투 데이터 설정", color: PURPLE },
              ].map(z => (
                <div key={z.num} style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${z.color}40`,
                  borderRadius: "8px", padding: "10px 14px",
                }}>
                  <span style={{
                    width: "22px", height: "22px", borderRadius: "50%",
                    background: z.color, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "11px", fontWeight: 700, color: "#000",
                  }}>{z.num}</span>
                  <span style={{ fontSize: "13px", color: "#e0e0e0" }}>{z.label}</span>
                </div>
              ))}
            </div>

          </div>
        </Card>


          {/* Open */}
          <h3 style={SUB_TITLE}>Open</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 4px" }}>
            <NumItem n={1}>Data Table 내 [Add Data] Click</NumItem>
            <NumItem n={2}>추가적으로 생성되는 팝업창의 [Create New Object Data File] Click</NumItem>
            <NumItem n={3}>신규 Object Instance 생성 및 각 Data Property 설정 UI 출현</NumItem>
          </ul>

          {/* 전체 설명 */}
          <h3 style={SUB_TITLE}>전체 설명</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 4px" }}>
            <NumItem n={1}>신규 카드 Key</NumItem>
            <NumItem n={2}>신규 카드 Texture</NumItem>
            <NumItem n={3}>상점 판매 가능 여부</NumItem>
            <NumItem n={4}>
              신규 카드 획득 경로
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>Buy Shop — 상점에서 구매하는 카드</SubItem>
                <SubItem>Combine Recipe — 조합으로 획득하는 카드</SubItem>
              </ul>
            </NumItem>
            <NumItem n={5}>전투 가능 여부</NumItem>
          </ul>

          {/* 판매 설정 */}
          <h3 style={SUB_TITLE}>판매 설정</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 4px" }}>
            <NumItem n={1}>
              Goods Key → 판매 시 재화 종류
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>DataTable 내 존재하지 않는 Card Key일 경우 에러 표기</SubItem>
              </ul>
            </NumItem>
            <NumItem n={2}>Price → 판매 시 제공되는 재화의 양</NumItem>
          </ul>

          {/* 획득 경로 — 상점 구매 */}
          <h3 style={SUB_TITLE}>획득 경로 설정 — 상점 구매</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 4px" }}>
            <NumItem n={1}>
              Shop → 구매 상점 선택.
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>Data Table 내 Set 되어 있는 Shop을 DropDown을 통하여 선택.</SubItem>
                <SubItem>Data Table 내 Shop을 참조하므로 Table에 추가시 자동 적용됨.</SubItem>
              </ul>
            </NumItem>
            <NumItem n={2}>Drop Rate → 구매 시 획득 확률</NumItem>
          </ul>

          {/* 획득 경로 — 조합 획득 */}
          <h3 style={SUB_TITLE}>획득 경로 설정 — 조합 획득</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 4px" }}>
            <NumItem n={1}>
              Combine Type → 조합 Type 설정
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>Combine → 융합 조합</SubItem>
                <SubItem>Gather → 채집 조합</SubItem>
                <SubItem>Consumption → 소모 조합</SubItem>
              </ul>
            </NumItem>
            <NumItem n={2}>Combine Time → 조합 소모 시간</NumItem>
            <NumItem n={3}>Size → Recipe Array Size</NumItem>
            <NumItem n={4}>
              Recipe → 카드 획득 조합식
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>Size에 따라 조합식 필요 카드 확장</SubItem>
              </ul>
            </NumItem>
          </ul>

          {/* 전투 설정 */}
          <h3 style={SUB_TITLE}>전투 설정</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 4px" }}>
            <NumItem n={1}>Hit Point → 전투 시 체력</NumItem>
            <NumItem n={2}>Range → 공격 사거리</NumItem>
            <NumItem n={3}>Damage → 공격력</NumItem>
            <NumItem n={4}>Prefab → 공격 파티클</NumItem>
          </ul>

          {/* 데이터 저장 */}
          <h3 style={SUB_TITLE}>데이터 저장</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>데이터 에러 없을 경우 팝업 최하단 [저장] 버튼 활성화</NumItem>
            <NumItem n={2}>활성화된 버튼 Click 시 저장 완료</NumItem>
          </ul>
        </section>

        {/* BattleManager — 준비중 */}
        <section style={{ marginBottom: "8px" }}>
          <h2 style={SECTION_TITLE}>Battle Manager</h2>
        </section>
        <ComingSoon />

        {/* ── TableManager ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>Table Manager</h2>

          <Card>
            <p style={{ fontSize: "14px", fontWeight: 700, color: "#f0f0f0", marginBottom: "4px" }}>Field 구성</p>
            <FieldZones_TableManager />
            <img
              src={TABLE_FIELD_IMAGE}
              alt="Table Field"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              onError={e => { e.currentTarget.style.display = "none"; }}
            />
          </Card>

          <h3 style={SUB_TITLE}>Interaction</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 4px" }}>
            <NumItem n={1}>Card에 Mouse Button Down</NumItem>
            <NumItem n={2}>위치에 Mouse Button UP</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>상점 판매</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 4px" }}>
            <NumItem n={1}>Sell Table에 Card Key 조회</NumItem>
            <NumItem n={2}>Table 내 데이터 Select</NumItem>
            <NumItem n={3}>재화 Create</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>상점 구매</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 4px" }}>
            <NumItem n={1}>Buy Table에 Interact Shop 조회</NumItem>
            <NumItem n={2}>Table 내 데이터 Select</NumItem>
            <NumItem n={3}>필요 재화 종류, 갯수 만족 검사</NumItem>
            <NumItem n={4}>Drop Table Random 실행</NumItem>
            <NumItem n={5}>Drop Card Create</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>조합</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>Card Stack Select</NumItem>
            <NumItem n={2}>Card CombineType Select</NumItem>
            <NumItem n={3}>
              Combine Type에 따라 각각의 Table 검사
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>Combine Table</SubItem>
                <SubItem>Gater Table</SubItem>
                <SubItem>Consumption Table</SubItem>
              </ul>
            </NumItem>
            <NumItem n={4}>Combine Table Data Select</NumItem>
            <NumItem n={5}>Card Table Select</NumItem>
            <NumItem n={6}>Combine Animate Active</NumItem>
            <NumItem n={7}>
              Animate Call back Invoke
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>Call back 1 = Create 최종 Card</SubItem>
                <SubItem>Call back 2 = Destroy 재료 Card</SubItem>
              </ul>
            </NumItem>
          </ul>
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
                background: "#0d0a1a", aspectRatio: "16/9",
                border: "1px solid rgba(167,139,250,0.15)",
              }}>
                <img
                  src={src} alt={label}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onError={e => { e.currentTarget.style.display = "none"; }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "linear-gradient(rgba(167,139,250,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.04) 1px, transparent 1px)",
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
