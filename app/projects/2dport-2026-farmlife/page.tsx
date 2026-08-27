"use client";

import Link from "next/link";

// ─────────────────────────────────────────────
//  이미지 경로 설정
//  📁 public/images/farmlife-2026/
//      ├── hero.png
//      ├── gallery-1.png  ← 농장 / 경작 화면
//      ├── gallery-2.png  ← NPC 스케줄 · 대화 화면
//      ├── gallery-3.png  ← 상점 / 가판대 화면
//      └── gallery-4.png  ← 전투 화면
//  📁 public/images/thumb/farmlife-2026.png  ← 메인 카드 썸네일
// ─────────────────────────────────────────────
const HERO_IMAGE = "/images/farmlife-2026/hero.png";

const GALLERY = [
  { src: "/images/farmlife-2026/gallery-1.png", label: "농장 / 경작 화면" },
  { src: "/images/farmlife-2026/gallery-2.png", label: "NPC 스케줄 · 대화" },
  { src: "/images/farmlife-2026/gallery-3.png", label: "상점 / 가판대" },
  { src: "/images/farmlife-2026/gallery-4.png", label: "전투 화면" },
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

const SUB_TITLE = {
  fontSize: "14px",
  fontWeight: 700,
  color: GREEN,
  borderLeft: `2px solid ${GREEN}`,
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
      <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0, minWidth: "18px", marginTop: "1px" }}>{n}.</span>
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

// 계층 구조 다이어그램
const LAYERS = [
  {
    level: "Coordinator",
    color: "#fbbf24",
    desc: "최상위 조정자 · 의존성 주입과 이벤트 배선",
    items: ["GameManager", "GameFlow"],
  },
  {
    level: "Manager",
    color: "#f87171",
    desc: "한 도메인의 로직 소유 · 여러 데이터를 조율",
    items: ["FarmManager", "StallSystem", "SaveSystem", "NpcSaveManager", "EffectSystem"],
  },
  {
    level: "Controller",
    color: GREEN,
    desc: "하나의 엔티티 · 하나의 흐름을 제어",
    items: ["NpcController", "MonsterController", "InteractionManager", "WarpController", "SleepController", "PlayerReviveController"],
  },
  {
    level: "Handler",
    color: "#60a5fa",
    desc: "특정 상호작용의 국소 처리 · 판정 후 이벤트 방송",
    items: ["NpcInteractionHandler"],
  },
  {
    level: "System",
    color: TEAL,
    desc: "상태 소유 + CRUD API · 대부분 IPersistentSystem 구현",
    items: ["InventorySystem", "ToolInventory", "QuickSlotSystem", "WalletSystem", "TimeSystem", "PlayerHealth", "CombatSystem", "MovementSystem", "WalkabilityService"],
  },
  {
    level: "Data / Object",
    color: "#a78bfa",
    desc: "SO 정의 + 런타임 인스턴스 + 저장 모델",
    items: ["CropData", "HarvestableDefinition", "MonsterData", "NpcDefinition", "DialogueScript", "FarmTileData", "SaveData"],
  },
  {
    level: "UI",
    color: "#94a3b8",
    desc: "로직을 구독만 · 로직은 UI를 모름 (역방향 금지)",
    items: ["PlayerHealthBar", "QuickSlotBar", "ShopUI", "StallUI", "SystemMessage", "ClockDisplay"],
  },
];

function LayerDiagram() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", margin: "4px 0 8px" }}>
      {LAYERS.map((l, i) => (
        <div key={l.level}>
          <div style={{
            background: "rgba(255,255,255,0.04)",
            border: `1px solid ${l.color}35`,
            borderLeft: `3px solid ${l.color}`,
            borderRadius: "8px",
            padding: "12px 16px",
          }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "10px", flexWrap: "wrap", marginBottom: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: 700, color: l.color }}>{l.level}</span>
              <span style={{ fontSize: "12px", opacity: 0.5 }}>{l.desc}</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {l.items.map(it => (
                <span key={it} style={{
                  fontSize: "11.5px",
                  fontFamily: "var(--font-geist-mono), monospace",
                  padding: "3px 9px",
                  borderRadius: "5px",
                  background: "rgba(0,0,0,0.35)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "#d0d0d0",
                }}>{it}</span>
              ))}
            </div>
          </div>
          {i < LAYERS.length - 1 && (
            <div style={{ textAlign: "center", fontSize: "11px", opacity: 0.25, lineHeight: 1, padding: "2px 0" }}>▼</div>
          )}
        </div>
      ))}
    </div>
  );
}

// 코드 블록
function CodeBlock({ children }) {
  return (
    <pre style={{
      background: "rgba(0,0,0,0.4)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "8px",
      padding: "16px 18px",
      overflowX: "auto",
      fontSize: "12.5px",
      lineHeight: 1.75,
      fontFamily: "var(--font-geist-mono), monospace",
      color: "#c8c8c8",
      margin: "0 0 16px",
    }}>{children}</pre>
  );
}

// 인터페이스 바인딩 표
const INTERFACES = [
  { name: "IPersistentSystem", contract: "SaveKey / InitializeNew / Capture / Restore", impl: "Inventory, ToolInventory, QuickSlot, Wallet, Time, PlayerHealth, Stall, NpcSaveManager" },
  { name: "ITileDataStore", contract: "셀 데이터 조회 / 등록", impl: "TileDataStore" },
  { name: "IEffectPlayer", contract: "연출 재생", impl: "EffectSystem" },
  { name: "ICharacterAnimator", contract: "Play(action, dir)", impl: "CharacterAnimator / NpcAnimator / MonsterAnimator / NullCharacterAnimator" },
  { name: "IWalkableProvider", contract: "통행 가능 판정", impl: "WalkabilityService" },
  { name: "IInteractable", contract: "Interact / CanInteract", impl: "FurnitureInteractable" },
  { name: "IToolProvider", contract: "현재 장착 도구 제공", impl: "EquipmentSystem" },
  { name: "ISaveable", contract: "ToSaveData(cell)", impl: "FarmTileData / GrassData / HarvestableData" },
  { name: "IWarpConsent", contract: "AllowTriggerWarp", impl: "NpcController" },
  { name: "IHitAnimation", contract: "HitFrames / HitFps", impl: "HarvestableDefinition" },
];

function InterfaceTable() {
  return (
    <div style={{ overflowX: "auto", marginBottom: "16px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12.5px", minWidth: "560px" }}>
        <thead>
          <tr>
            {["인터페이스", "계약", "구현체"].map(h => (
              <th key={h} style={{
                textAlign: "left", padding: "10px 12px",
                borderBottom: `1px solid ${TEAL}40`,
                color: TEAL, fontWeight: 700, fontSize: "12px",
                whiteSpace: "nowrap",
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {INTERFACES.map(row => (
            <tr key={row.name}>
              <td style={{
                padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)",
                fontFamily: "var(--font-geist-mono), monospace", color: GREEN,
                whiteSpace: "nowrap", verticalAlign: "top",
              }}>{row.name}</td>
              <td style={{
                padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)",
                opacity: 0.8, verticalAlign: "top",
              }}>{row.contract}</td>
              <td style={{
                padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)",
                opacity: 0.55, lineHeight: 1.6, verticalAlign: "top",
              }}>{row.impl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// 핵심 시스템 카드
const SYSTEMS = [
  {
    icon: "🌱",
    name: "농사 · 채집",
    points: [
      "밭 갈기 → 씨앗 심기 → 일자 기반 성장 → 수확",
      "Tree 전용 코드를 걷어내고 HarvestableDefinition으로 통합",
      "requiredTool을 SO에 데이터로 지정 (하드코딩 제거)",
      "새 채집물은 SO만 추가하면 동작 — 코드 수정 불필요",
    ],
  },
  {
    icon: "⚔️",
    name: "전투",
    points: [
      "MonsterController AI 상태기계 (Roam / Chase / Attack / Dead)",
      "MonsterData(SO)로 스탯·추적범위·드랍 정의 — 종류 추가는 SO + 프리팹만",
      "추적 대상 캐싱으로 매 프레임 A* 재계산 방지",
      "넉백은 KnockbackReceiver로 플레이어·몬스터 공용화",
    ],
  },
  {
    icon: "🎒",
    name: "인벤토리 · 퀵슬롯",
    points: [
      "InventorySystem / ToolInventory / EquipmentSystem 역할 분리",
      "QuickSlotEntry 구조체로 한 슬롯이 도구 XOR 소모품을 배타 보유",
      "도구 자동 등록 · 드래그 등록 · 숫자키 / 휠 선택",
    ],
  },
  {
    icon: "🚶",
    name: "NPC · 스케줄",
    points: [
      "NpcSchedule 스텝 기반 (RoamHere / GoToSpace / GoToCounter / Wait / VisitStall)",
      "SpaceScanner의 flood fill로 현재 공간을 수집해 자연스러운 배회",
      "워프 스텝 복원 시 재실행 방지 — 스텝 상태 저장 + 코루틴 타이밍 보장",
    ],
  },
  {
    icon: "💬",
    name: "대화",
    points: [
      "DialogueKind(FirstMeet / Roaming / ShopGreeting / Daily / Trade) + DialogueCondition",
      "NpcDialogueSet의 JumpMapping · talkCount로 스크립트 분기",
      "DialogueScriptEditor 등 전용 에디터로 작성 비용 절감",
    ],
  },
  {
    icon: "🕰️",
    name: "시간 · 수면",
    points: [
      "TimeSystem이 시각 / 계절 / 일 / 요일 · 밝기를 소유하고 이벤트로 방송",
      "밤에만 자발적 수면 가능, 새벽 강제 기절은 시간 체크 우회",
      "수면 시 NPC는 OnTimeChanged로 아침 스케줄 자동 재평가",
    ],
  },
  {
    icon: "🏪",
    name: "상점 · 가판대",
    points: [
      "NpcShop이 재고를 소유하고 자기 상태를 직렬화 (NpcController에서 분리)",
      "플레이어 가판대 StallSystem — NPC가 VisitStall 스텝으로 방문 구매",
    ],
  },
  {
    icon: "🪑",
    name: "가구 상호작용",
    points: [
      "FurnitureInteractable 하나로 모든 가구 대응 (내장 토글 + UnityEvent)",
      "침대 = onInteract에 Sleep 연결, 벽난로 = 내장 토글 — 코드 없이 인스펙터 조립",
      "문 = 가구 + WarpPoint 조합, 방향에 따라 자동 워프 on/off",
    ],
  },
];

function SystemGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "12px", marginBottom: "8px" }}>
      {SYSTEMS.map(s => (
        <div key={s.name} style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "10px",
          padding: "18px 20px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "12px" }}>
            <span style={{ fontSize: "18px" }}>{s.icon}</span>
            <span style={{ fontSize: "14px", fontWeight: 700, color: "#f0f0f0" }}>{s.name}</span>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {s.points.map(p => (
              <li key={p} style={{
                display: "flex", alignItems: "flex-start", gap: "8px",
                fontSize: "12.5px", lineHeight: 1.7, opacity: 0.7, marginBottom: "6px",
              }}>
                <span style={{ color: GREEN, flexShrink: 0, marginTop: "1px" }}>·</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// 리팩터링 판단
function RefactorVerdict() {
  const rows = [
    { file: "NpcController", line: "635 → 606", verdict: "분리", color: GREEN, reason: "상점 재고 · 세이브라는 이질적 책임이 뭉쳐 있었음 → NpcShop 분리 + 세이브 위임" },
    { file: "InteractionManager", line: "463", verdict: "유지", color: "#94a3b8", reason: "입력 → 실행 변환이라는 단일 목적. 코드가 많을 뿐 책임은 하나" },
    { file: "MonsterController", line: "301", verdict: "유지", color: "#94a3b8", reason: "AI 상태기계 하나. 분리 시 상태 전이만 흩어짐" },
    { file: "QuickSlotSystem", line: "270", verdict: "유지", color: "#94a3b8", reason: "슬롯 상태 소유라는 단일 목적" },
    { file: "InventorySystem", line: "260", verdict: "유지", color: "#94a3b8", reason: "아이템 슬롯 CRUD 단일 목적" },
    { file: "MovementSystem", line: "230", verdict: "유지", color: "#94a3b8", reason: "이동 · 경로 실행 단일 목적" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
      {rows.map(r => (
        <div key={r.file} style={{
          display: "flex", alignItems: "flex-start", gap: "12px",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "8px", padding: "12px 16px", flexWrap: "wrap",
        }}>
          <span style={{
            fontSize: "11px", fontWeight: 700, color: "#000", background: r.color,
            borderRadius: "5px", padding: "3px 9px", flexShrink: 0, marginTop: "2px",
          }}>{r.verdict}</span>
          <div style={{ flex: 1, minWidth: "220px" }}>
            <p style={{
              margin: "0 0 4px", fontSize: "13px", fontWeight: 700, color: "#e8e8e8",
              fontFamily: "var(--font-geist-mono), monospace",
            }}>
              {r.file} <span style={{ opacity: 0.4, fontWeight: 400 }}>({r.line}줄)</span>
            </p>
            <p style={{ margin: 0, fontSize: "12.5px", opacity: 0.6, lineHeight: 1.65 }}>{r.reason}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// 로드맵
function Roadmap() {
  const groups = [
    { label: "최우선", color: "#fbbf24", items: ["호감도 / 선물 시스템 — 기존 대화 시스템 위에 관계 레이어 추가"] },
    { label: "높음", color: "#f87171", items: ["낚시 미니게임 + 도감", "광산 구조화 (층 · 광석 · 사다리)", "요리 / 제작 — 수확물 활용처"] },
    { label: "중간", color: "#60a5fa", items: ["동물 / 축산", "커뮤니티 센터 · 번들", "축제 완성"] },
    { label: "꾸미기", color: "#a78bfa", items: ["집 내부 가구 배치", "캐릭터 커스터마이징"] },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {groups.map(g => (
        <div key={g.label} style={{
          display: "flex", alignItems: "flex-start", gap: "12px",
          background: "rgba(255,255,255,0.03)",
          border: `1px solid ${g.color}30`,
          borderRadius: "8px", padding: "12px 16px", flexWrap: "wrap",
        }}>
          <span style={{
            fontSize: "11px", fontWeight: 700, color: g.color,
            border: `1px solid ${g.color}60`, borderRadius: "999px",
            padding: "3px 11px", flexShrink: 0, marginTop: "1px",
          }}>{g.label}</span>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1, minWidth: "220px" }}>
            {g.items.map(it => (
              <li key={it} style={{ fontSize: "13px", opacity: 0.75, lineHeight: 1.75 }}>{it}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function FarmLifePage() {
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
        background: "linear-gradient(160deg, #08150f 0%, #0b2418 50%, #0f2a22 100%)",
        overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(74,222,128,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div style={{
          position: "absolute", width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(45,212,191,0.1) 0%, transparent 70%)",
          top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        }} />
        <img
          src={HERO_IMAGE} alt="FarmLife 히어로"
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
          {["Unity 6", "C#", "ScriptableObject", "Architecture", "Editor"].map(t => (
            <span key={t} style={TAG}>{t}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "8px", lineHeight: 1.3, color: "#f0f0f0" }}>
          2DPort_2026_FarmLife
        </h1>
        <p style={{ fontSize: "16px", fontWeight: 700, color: TEAL, marginBottom: "36px" }}>
          스타듀밸리형 2D 농사 · 생활 시뮬레이션
        </p>

        {/* ── Project Info ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>Project Info</h2>
          <p style={{ lineHeight: 1.85, fontSize: "15px", opacity: 0.85, marginBottom: "16px" }}>
            농사 · 채집 · 전투 · NPC 생활이 하루 단위로 맞물려 돌아가는 2D 탑다운 생활 시뮬레이션.<br />
            개별 기능 구현보다 <strong style={{ color: "#f0f0f0", fontWeight: 700 }}>시스템 간 결합을 어떻게 끊을 것인가</strong>에
            무게를 둔 프로젝트로, 계층 · 의존성 방향 · 인터페이스 계약을 먼저 정의하고 그 위에 기능을 얹었습니다.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {[
              "엔진: Unity 6 (2D URP) / 언어: C#",
              "네임스페이스: FarmGame.Core (에디터: FarmGame.EditorTools)",
              "구성: 9개 도메인 시스템 + IPersistentSystem 기반 세이브 · 로드",
              "설계 문서: PROJECT_STATUS.md(무엇이 있나) / ARCHITECTURE.md(어떻게 연결되나) 병행 관리",
            ].map(t => (
              <p key={t} style={{ fontSize: "14px", color: TEAL, opacity: 0.9, margin: 0 }}>• {t}</p>
            ))}
          </div>
        </section>

        {/* ── 설계 원칙 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>설계 원칙</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            기능을 추가할 때마다 매번 판단하지 않도록, 프로젝트 전체에 적용되는 규칙을 먼저 고정했습니다.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "12px" }}>
            {[
              { t: "컴포지션 우선", d: "상속보다 조합. 기능은 컴포넌트를 붙여 확장" },
              { t: "데이터가 진실", d: "문자열 키가 아니라 ScriptableObject 참조. 저장 시에만 이름을 id로" },
              { t: "이벤트 기반 디커플링", d: "방송자는 구독자를 모름. 역방향 통신은 전부 이벤트" },
              { t: "단일 책임", d: "이질적 책임이 뭉치면 분리, 단일 목적이면 길어도 유지" },
              { t: "코드 기반 배선", d: "GameManager가 Init()으로 주입. 시스템끼리 인스펙터로 찾지 않음" },
              { t: "UI는 구독만", d: "로직 → UI 참조는 금지. UI가 로직 이벤트를 구독" },
            ].map(p => (
              <div key={p.t} style={{
                background: "rgba(45,212,191,0.05)",
                border: "1px solid rgba(45,212,191,0.18)",
                borderRadius: "10px", padding: "16px 18px",
              }}>
                <p style={{ margin: "0 0 6px", fontSize: "13.5px", fontWeight: 700, color: TEAL }}>{p.t}</p>
                <p style={{ margin: 0, fontSize: "12.5px", opacity: 0.6, lineHeight: 1.65 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 계층 구조 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>계층 구조</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            책임 레벨을 7단계로 나누고 <strong style={{ color: "#e0e0e0" }}>위 → 아래 방향으로만</strong> 의존하도록 고정.
            아래 계층은 위 계층을 참조하지 않고 이벤트로만 알립니다.
          </p>
          <LayerDiagram />
        </section>

        {/* ── 의존성 주입 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>의존성 주입 — GameManager</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            시스템이 서로를 인스펙터에서 찾지 않고 한 곳에서 주입받도록 배선을 집중시켰습니다.
            연결이 한 파일에 모여 있어 의존 관계를 코드로 읽을 수 있습니다.
          </p>
          <CodeBlock>{`Awake():
  ReferenceValidator.Validate(...)           // 참조 누락을 시작 시점에 일괄 보고

  // ── 의존성 주입 ──────────────────────────
  walkability.Init(dataStore)                // 통행 판정 ← 데이터
  _pathfinder = new Pathfinder(walkability)  // 길찾기 ← 통행 판정 (순수 C# 객체)
  movement.Init(_pathfinder, characterAnimator)
  farm.Init(dataStore, effects, hitEffects, walkability)
  interaction.Init(dataStore, walkability, movement, farm,
                   equipment, characterAnimator, inventory)

  // ── 이벤트 배선 (역결합) ──────────────────
  inventory.Bind(farm)                       // 채집됨 → 인벤토리 적재
  drops.Bind(farm)                           // 채집됨 → 드랍 연출 (별개 구독)
  time.OnDayPassed += farm.GrowAllCrops      // 하루 경과 → 작물 성장`}</CodeBlock>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>순수 로직 객체(Pathfinder)는 MonoBehaviour 없이 <code>new</code>로 생성해 주입</NumItem>
            <NumItem n={2}>참조 누락은 <code>ReferenceValidator</code>가 시작 시점에 일괄 보고 — 런타임 NullReference 추적 제거</NumItem>
            <NumItem n={3}>한 이벤트를 여러 구독자가 나눠 받도록 설계 (적재와 연출을 분리)</NumItem>
          </ul>
        </section>

        {/* ── 인터페이스 설계 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>인터페이스 설계</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            의존은 구현이 아니라 계약에. 교체 · 확장 지점을 인터페이스로 고정했습니다.
          </p>
          <InterfaceTable />

          <h3 style={SUB_TITLE}>설계 효과</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>
              <code>FarmManager</code>는 <code>IEffectPlayer</code>만 알고 <code>EffectSystem</code>을 모름
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>연출 구현을 통째로 교체해도 도메인 로직은 그대로</SubItem>
              </ul>
            </NumItem>
            <NumItem n={2}>
              <code>SaveSystem</code>은 <code>IPersistentSystem[]</code>만 순회
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>새 저장 대상은 인터페이스 구현 + 배열 등록만으로 편입</SubItem>
              </ul>
            </NumItem>
            <NumItem n={3}>
              <code>ICharacterAnimator</code>가 플레이어 · NPC · 몬스터 애니를 통일
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>MovementSystem이 대상이 누구든 동일한 코드로 구동</SubItem>
                <SubItem>애니메이터가 없는 대상은 NullCharacterAnimator로 분기 제거</SubItem>
              </ul>
            </NumItem>
          </ul>
        </section>

        {/* ── 핵심 시스템 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>핵심 시스템</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            각 도메인은 자기 상태만 소유하고, 도메인 간 통신은 이벤트로 처리합니다.
          </p>
          <SystemGrid />
        </section>

        {/* ── 데이터 흐름 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>데이터 흐름 — 클릭 한 번의 여정</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            플레이어가 나무를 도끼로 클릭했을 때, 어떤 시스템이 어떤 순서로 협력하는지.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>
              <code>InteractionManager</code>가 클릭 감지 → NPC · 가판대 · 가구 라우팅 시도(전부 miss) → 셀 라우팅
            </NumItem>
            <NumItem n={2}>
              <code>dataStore.TryGet(cell)</code> → <code>HarvestableData</code> 발견 → <code>CanInteract(Axe) = true</code>
            </NumItem>
            <NumItem n={3}>
              <code>MovementSystem.MoveTo</code> — 도끼가 닿는 거리까지 이동
            </NumItem>
            <NumItem n={4}>
              도착 → <code>CharacterAnimator.Play(Axe)</code> 로 모션 재생
            </NumItem>
            <NumItem n={5}>
              모션의 <code>hitFrame</code> 도달 → <code>OnActionHit</code> 방송 → <code>FarmManager.TryInteract()</code>
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>실제 타격 판정을 모션 프레임에 위임 — 연출과 로직의 타이밍 일치</SubItem>
              </ul>
            </NumItem>
            <NumItem n={6}>
              FarmManager: 피격 연출 재생 → hp 감소 → 0이면 제거 + <code>HarvestResult</code> 생성 → <code>OnHarvested</code> 방송
            </NumItem>
            <NumItem n={7}>
              구독자가 각자 반응
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>InventorySystem.Add — 인벤토리 적재</SubItem>
                <SubItem>DropSystem — 드랍 아이템 연출</SubItem>
              </ul>
            </NumItem>
            <NumItem n={8}>
              <code>OnSlotsChanged</code> → 인벤토리 UI 갱신 (로직은 UI를 모름)
            </NumItem>
          </ul>
          <Card style={{ background: "rgba(74,222,128,0.06)", border: `1px solid ${GREEN}30`, marginBottom: 0 }}>
            <p style={{ margin: 0, fontSize: "13px", lineHeight: 1.75, opacity: 0.85 }}>
              <span style={{ color: GREEN, fontWeight: 700 }}>정리 — </span>
              InteractionManager는 흐름 조율만, FarmManager는 도메인 로직만, 데이터는 자기 상태 변경만,
              연출과 UI는 이벤트에 반응만 합니다. 어느 단계도 다음 단계를 직접 호출하지 않습니다.
            </p>
          </Card>
        </section>

        {/* ── 세이브 / 로드 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>세이브 / 로드 아키텍처</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            시스템마다 저장 코드를 흩뿌리는 대신, <code>IPersistentSystem</code> 계약 하나로 통일했습니다.
          </p>

          <h3 style={{ ...SUB_TITLE, marginTop: 0 }}>계약</h3>
          <CodeBlock>{`interface IPersistentSystem
{
    string SaveKey { get; }   // 저장 슬롯 식별자
    void InitializeNew();     // 새 게임일 때의 초기값
    string Capture();         // 현재 상태 → json
    void Restore(string json);// json → 상태 복원
}`}</CodeBlock>

          <h3 style={SUB_TITLE}>초기화 순서 문제와 해결</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            로드했는데 값이 초기값으로 되돌아가는 버그가 있었습니다. 원인은 각 시스템의
            <code> Start()</code>가 복원된 값을 덮어쓰는 것이었고, 규칙 자체를 바꿔 구조적으로 차단했습니다.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>시스템은 <code>Start</code> / <code>Awake</code>에서 값을 초기화하지 않음 (배열 할당만)</NumItem>
            <NumItem n={2}>초기값은 오직 <code>InitializeNew()</code>에서만 설정</NumItem>
            <NumItem n={3}>
              <code>GameFlow</code>가 분기를 지휘
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>NewGame → InitializeAllSystems()</SubItem>
                <SubItem>LoadGame → Restore()</SubItem>
              </ul>
            </NumItem>
            <NumItem n={4}>둘이 배타적이므로 복원값이 Start에 덮일 경로 자체가 사라짐</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>NPC 저장 — 위임 방식</h3>
          <CodeBlock>{`NpcSaveManager
  └ NpcController.CaptureState()
       ├ NpcShop.CaptureInto()      // 상점 재고는 상점이 직렬화
       ├ NpcDialogueSet             // 대화 횟수는 대화가 직렬화
       └ NpcController              // 스텝 상태 · 위치 · VisitStall`}</CodeBlock>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, margin: 0 }}>
            각 컴포넌트가 자기 상태만 직렬화하고 NpcController는 조합만 합니다.
            새 컴포넌트를 붙여도 저장 코드를 한 곳에서 고칠 필요가 없습니다.
          </p>
        </section>

        {/* ── 구조 리팩터링 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>God Object 점검과 리팩터링</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            전체 소스를 훑어 큰 파일을 모두 후보에 올리고, 하나의 기준으로 분리 여부를 판단했습니다.
          </p>

          <Card style={{ background: "rgba(45,212,191,0.06)", border: `1px solid ${TEAL}30` }}>
            <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.75 }}>
              <span style={{ color: TEAL, fontWeight: 700 }}>판단 기준 — </span>
              <strong style={{ color: "#f0f0f0" }}>“이질적인 책임이 뭉쳐 있는가?”</strong><br />
              <span style={{ opacity: 0.65, fontSize: "13px" }}>
                줄 수가 아니라 책임의 성격으로 판단. 단일 목적에 코드가 많은 것은 God Object가 아니며,
                이 경우 분리의 이득보다 리스크가 큽니다.
              </span>
            </p>
          </Card>

          <RefactorVerdict />

          <h3 style={SUB_TITLE}>NpcController 분리 내역</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>상점 재고 → <code>NpcShop</code>으로 분리 (자기 상태 직렬화까지 함께 이동)</NumItem>
            <NumItem n={2}>세이브 → 각 컴포넌트가 직렬화하고 NpcController가 조합하는 위임 방식으로 전환</NumItem>
            <NumItem n={3}>
              대화 Begin/End · VisitStall은 유지
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>둘 다 “이동을 멈추고 재개하는” 제어라 움직임 책임에 속함</SubItem>
              </ul>
            </NumItem>
            <NumItem n={4}>결과: NpcController는 “NPC 하나의 움직임 조정”이라는 단일 책임만 보유</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>구조 점검 결과</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {[
              "의존성 방향 단방향",
              "순환 참조 없음",
              "로직 → UI 참조 없음",
              "인터페이스 기반 결합",
              "이벤트 역결합 유지",
            ].map(t => (
              <span key={t} style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                fontSize: "12.5px", padding: "7px 14px", borderRadius: "999px",
                background: "rgba(74,222,128,0.08)", border: `1px solid ${GREEN}35`,
                color: "#dfffe9",
              }}>
                <span style={{ color: GREEN }}>✓</span>{t}
              </span>
            ))}
          </div>
        </section>

        {/* ── 로드맵 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>개발 로드맵</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            스타듀밸리의 핵심 활동을 기준으로 남은 시스템의 우선순위를 정리했습니다.
          </p>
          <Roadmap />
        </section>

        {/* ── Gallery ── */}
        <section>
          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f0f0f0", marginBottom: "16px" }}>
            Project Gallery
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {GALLERY.map(({ src, label }) => (
              <div key={src} style={{
                position: "relative", borderRadius: "8px", overflow: "hidden",
                background: "#08150f", aspectRatio: "16/9",
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
