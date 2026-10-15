"use client";

import Link from "next/link";

// ─────────────────────────────────────────────
//  이미지 경로 설정
//  📁 public/images/fmv-2026/
//      ├── hero.png       ← 타이틀 화면 1920x720 (에디터 Play 캡처를 잘라 2026-10-15)
//      ├── puzzles.png    ← 퍼즐 화면 9종 3x3 (puzzle_parts.csv로 조립한 결과)
//      ├── gallery-1.png  ← 대사 — 초상 · 이름표 (게임 화면 480x270 을 2배로)
//      ├── gallery-2.png  ← 손전등으로 비춘 다락방 + 아이템 설명
//      ├── gallery-3.png  ← 일기장 — 괘선 간격에 맞춘 글줄
//      ├── gallery-4.png  ← 배선 퍼즐 — 선택한 단자 강조 · 연결선
//      ├── gallery-5.png  ← 괘종시계 퍼즐
//      └── gallery-6.png  ← 금고 키패드 — 눌린 키 · 표시창 숫자
//  📁 public/images/thumb/fmv-2026.png  ← 메인 카드 썸네일
// ─────────────────────────────────────────────
const HERO_IMAGE = "/images/fmv-2026/hero.png";
const PUZZLES_IMAGE = "/images/fmv-2026/puzzles.png";
const GALLERY = [
  { src: "/images/fmv-2026/gallery-1.png", label: "대사 — 초상과 이름표" },
  { src: "/images/fmv-2026/gallery-2.png", label: "손전등 탐색 · 아이템 설명" },
  { src: "/images/fmv-2026/gallery-3.png", label: "일기장 조각" },
  { src: "/images/fmv-2026/gallery-4.png", label: "배선 퍼즐" },
  { src: "/images/fmv-2026/gallery-5.png", label: "괘종시계 퍼즐" },
  { src: "/images/fmv-2026/gallery-6.png", label: "금고 키패드" },
];

const TEAL = "#2dd4bf";
const AMBER = "#f5c06a";

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
  color: AMBER,
  borderLeft: `2px solid ${AMBER}`,
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

const BODY = { lineHeight: 1.85, fontSize: "14.5px", opacity: 0.85, marginBottom: "16px" };
const MONO = "var(--font-geist-mono), monospace";

function NumItem({ n, children }) {
  return (
    <li style={{
      display: "flex", alignItems: "flex-start", gap: "10px",
      marginBottom: "8px", lineHeight: "1.7", fontSize: "14px", opacity: 0.85,
    }}>
      <span style={{ color: AMBER, fontWeight: 700, flexShrink: 0, minWidth: "18px", marginTop: "1px" }}>{n}.</span>
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
      fontFamily: MONO,
      color: "#c8c8c8",
      margin: "0 0 16px",
    }}>{children}</pre>
  );
}

function Chip({ children }) {
  return (
    <span style={{
      fontSize: "11.5px",
      fontFamily: MONO,
      padding: "3px 9px",
      borderRadius: "5px",
      background: "rgba(0,0,0,0.35)",
      border: "1px solid rgba(255,255,255,0.07)",
      color: "#d0d0d0",
    }}>{children}</span>
  );
}

// ── 어셈블리 구조 ──
const LAYERS = [
  {
    level: "Fmv.Editor",
    color: "#fbbf24",
    desc: "CSV → ScriptableObject Import, Scene 생성 메뉴, Texture Import 설정",
    items: ["ContentImporter", "FmvSceneMenu", "PackTexturePostprocessor"],
  },
  {
    level: "Fmv.Runtime",
    color: "#60a5fa",
    desc: "Command 실행, 영상, World View, Puzzle Part, UI",
    items: ["FmvGame", "EventRunner", "VideoDirector", "CutsceneLibrary", "WorldView", "FlashlightRig", "PuzzleAssembler", "PuzzleModule", "*Presenter", "ResourcePack", "SaveSlot"],
  },
  {
    level: "Fmv.Core",
    color: TEAL,
    desc: "noEngineReferences, 상태 / 규칙 / 데이터만 보유",
    items: ["Blackboard", "Condition", "EventResolver", "EventSequence", "GameData", "ContentTables", "PuzzleLogic", "InteractionRules", "GraphRules", "ItemRules", "HeadlessGame"],
  },
];

function LayerDiagram() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", margin: "4px 0 16px" }}>
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
              <span style={{ fontSize: "13px", fontWeight: 700, color: l.color, fontFamily: MONO }}>{l.level}</span>
              <span style={{ fontSize: "12px", opacity: 0.5 }}>{l.desc}</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {l.items.map(it => <Chip key={it}>{it}</Chip>)}
            </div>
          </div>
          {i < LAYERS.length - 1 && (
            <div style={{ textAlign: "center", fontSize: "11px", opacity: 0.25, lineHeight: 1, padding: "2px 0" }}>▼ 참조</div>
          )}
        </div>
      ))}
    </div>
  );
}

// ── 명령 실행 순서 ──
const STEPS = [
  { name: "상태", code: "ApplyState", desc: "Flag / Var / Item 변경" },
  { name: "대사", code: "Dialogue", desc: "대사 출력 (확인한 진입 대사 생략)" },
  { name: "카드", code: "Card", desc: "Chapter 카드 / 일기장 출력" },
  { name: "영상", code: "Clip", desc: "컷신 재생, 종료 시 clip_end" },
  { name: "이동", code: "Goto", desc: "View 전환, 도착 시 enter_view" },
];

function StepFlow() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch", gap: "6px", margin: "4px 0 16px" }}>
      {STEPS.map((s, i) => (
        <div key={s.code} style={{ display: "flex", alignItems: "center", gap: "6px", flex: "1 1 120px" }}>
          <div style={{
            flex: 1,
            background: "rgba(255,255,255,0.04)",
            border: `1px solid ${TEAL}35`,
            borderTop: `3px solid ${TEAL}`,
            borderRadius: "8px",
            padding: "10px 12px",
            minHeight: "92px",
          }}>
            <p style={{ fontSize: "13px", fontWeight: 700, color: "#f0f0f0", margin: "0 0 2px" }}>{i + 1}. {s.name}</p>
            <p style={{ fontSize: "11px", fontFamily: MONO, color: TEAL, margin: "0 0 6px" }}>{s.code}</p>
            <p style={{ fontSize: "12px", opacity: 0.6, margin: 0, lineHeight: 1.5 }}>{s.desc}</p>
          </div>
          {i < STEPS.length - 1 && <span style={{ opacity: 0.3, fontSize: "12px" }}>▶</span>}
        </div>
      ))}
    </div>
  );
}

// ── 퍼즐 규칙 (Strategy) ──
const PUZZLES = [
  { type: "dial / symbol_dial", logic: "DialPuzzle", ex: "트렁크 자물쇠 · 옷장 기호 자물쇠" },
  { type: "keypad", logic: "KeypadPuzzle", ex: "서재 금고 · 욕실 약장" },
  { type: "set_time", logic: "ClockPuzzle", ex: "괘종시계 바늘" },
  { type: "slide_3x3", logic: "SlidePuzzle", ex: "초상화 슬라이드" },
  { type: "sequence", logic: "SequencePuzzle", ex: "오르골 건반 순서" },
  { type: "wiring", logic: "WiringPuzzle", ex: "두꺼비집 배선" },
  { type: "valve_sum", logic: "ValveSumPuzzle", ex: "보일러 밸브 압력 합" },
];

function PuzzleTable() {
  return (
    <div style={{
      border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px",
      overflow: "hidden", marginBottom: "16px",
    }}>
      {PUZZLES.map((p, i) => (
        <div key={p.logic} style={{
          display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr) minmax(0,1.3fr)", gap: "12px",
          padding: "10px 16px", fontSize: "13px",
          background: i % 2 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.04)",
        }}>
          <span style={{ fontFamily: MONO, color: AMBER, overflowWrap: "anywhere" }}>{p.type}</span>
          <span style={{ fontFamily: MONO, color: "#d0d0d0", overflowWrap: "anywhere" }}>{p.logic}</span>
          <span style={{ opacity: 0.6 }}>{p.ex}</span>
        </div>
      ))}
    </div>
  );
}

// ── 자동 테스트 ──
const TESTS = [
  { name: "LoadsAllTables", desc: "전체 CSV Load, 조건 문법 / ID 중복 검사" },
  { name: "PlaythroughReachesEnding ×2", desc: "HeadlessGame으로 Ending A(필수 진행) / Ending B(일기 5조각) 자동 진행" },
  { name: "EveryInputPuzzleSolvesWithItsAnswer", desc: "모든 입력 Puzzle의 정답 입력 시 해결 확인" },
  { name: "ImportedContentAssetMatchesCsv", desc: "ScriptableObject Asset과 CSV 일치 확인" },
  { name: "ConsumedItemsCanBeReacquiredForEveryUse", desc: "여러 곳에 사용하는 아이템의 재획득 가능 여부 확인" },
  { name: "EveryFlagCanBeSetAndEveryViewIsReachable", desc: "설정 불가 Flag / 도달 불가 View 검출" },
  { name: "LoopsPointAtLoopingClipsAndExistingStates", desc: "반복 영상 Table의 Clip / 상태 존재 확인" },
  { name: "FlashlightRowsPointAtExistingStates", desc: "손전등 Table의 View 상태 존재 확인" },
  { name: "EveryInputPuzzleHasPartLayout", desc: "모든 입력 Puzzle의 puzzle_parts.csv 배치 존재 확인" },
  { name: "TiesResolveToUpperRow", desc: "Priority 동일 시 상단 Event 선택 확인" },
  { name: "UnknownHotspotFallsBack", desc: "정의되지 않은 Target의 * 공통 Event 처리 확인" },
];

export default function FmvPage() {
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
        background: "linear-gradient(160deg, #0a0d14 0%, #121520 50%, #1a1410 100%)",
        overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <img
          src={HERO_IMAGE} alt="자정의 하숙집 타이틀"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated" }}
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
          {["Unity 6", "C#", "ScriptableObject", "CSV", "UniTask", "TextMeshPro", "Editor", "NUnit"].map(t => (
            <span key={t} style={TAG}>{t}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "8px", lineHeight: 1.3, color: "#f0f0f0" }}>
          2DPort_2026_FMV
        </h1>
        <p style={{ fontSize: "16px", fontWeight: 700, color: TEAL, marginBottom: "36px" }}>
          자정의 하숙집 — FMV 탈출 어드벤처 게임
        </p>

        {/* ── Project Info ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>Project Info</h2>
          <p style={BODY}>
            하숙집 다락방에서 시작하여 방을 하나씩 조사하며 탈출하는 포인트 앤 클릭 어드벤처 게임.<br />
            영상 컷신, 화면 탐색, 퍼즐이 번갈아 진행되는 검은방 방식으로 구성하였다.<br />
            사전에 작성한 설계서를 기준으로 구현하였으며, 게임 진행은 CSV 데이터로 정의하고 코드는 데이터 실행만 담당하도록 설계.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {[
              "엔진: Unity 6 (2D URP / Light 2D / Pixel Perfect Camera) / 언어: C#",
              "패키지: UniTask, TextMeshPro",
              "구조: Fmv.Core / Fmv.Runtime / Fmv.Editor 3개 Assembly 분리",
              "데이터: CSV 19종 → ScriptableObject Import",
              "콘텐츠: Event 248 / 대사 287 / View 26 / Hotspot 126 / Puzzle 20 / Ending 2종",
            ].map(t => (
              <p key={t} style={{ fontSize: "14px", color: TEAL, opacity: 0.9, margin: 0 }}>• {t}</p>
            ))}
          </div>
        </section>

        {/* ── 핵심 기능 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>핵심 기능</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>Blackboard(Flag, Var, Inventory)로 진행 상태 관리 및 Save 데이터 일원화.</NumItem>
            <NumItem n={2}>조건부 Event Table로 Interaction 결과 분기, Priority 기준 Event 1개만 실행.</NumItem>
            <NumItem n={3}>Event 실행 순서 State → Dialogue → Card → Clip → Goto 고정.</NumItem>
            <NumItem n={4}>Core Assembly의 UnityEngine 참조 제거, Unity 없이 규칙 검증 가능.</NumItem>
            <NumItem n={5}>VideoDirector는 영상 상태 관리만 담당, 판정 / 저장 / UI 역할 분리.</NumItem>
            <NumItem n={6}>Puzzle 규칙(Strategy)과 화면 Part 분리, CSV로 Puzzle 화면 조립.</NumItem>
          </ul>
        </section>

        {/* ── Assembly 구조 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>Assembly 구조</h2>
          <p style={BODY}>
            참조 방향은 Editor → Runtime → Core 단방향.<br />
            Core는 <code style={{ fontFamily: MONO, color: TEAL }}>noEngineReferences</code> 설정으로 MonoBehaviour, Debug 등 Unity API 사용 시 컴파일 에러 발생.
          </p>
          <LayerDiagram />
        </section>

        {/* ── Event Table ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>조건부 Event Table</h2>
          <p style={BODY}>
            플레이어 Interaction을 Trigger + Target + Item 조합으로 변환하여 Event Table에서 조회.<br />
            동일한 Object라도 Flag 상태에 따라 다른 Event 실행.
          </p>
          <CodeBlock>{`event_id          trigger   target            condition                               priority  effects
CH1_TRUNK_DARK    examine   attic_main.trunk  !flag:attic_lit                         20        (대사만)
CH1_TRUNK_GO      examine   attic_main.trunk  flag:attic_lit & !flag:trunk_open       10        goto attic_trunk_lock
CH1_TRUNK_TAKE    examine   attic_main.trunk  flag:trunk_open & !flag:trunk_items_taken  5   give screwdriver;diary_page
CH1_TRUNK_SOLVED  puzzle_solved  P03          -                                       0         set trunk_open · clip · goto
CH1_SCREW0_LAST   use_item  attic_hatch.screw0  … & var:screws_removed>=3             10        take screwdriver`}</CodeBlock>
          <h3 style={SUB_TITLE}>판정 규칙</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>조건 문법 <code style={{ fontFamily: MONO, color: AMBER }}>flag:</code> / <code style={{ fontFamily: MONO, color: AMBER }}>has:</code> / <code style={{ fontFamily: MONO, color: AMBER }}>var:</code> / <code style={{ fontFamily: MONO, color: AMBER }}>!</code> / <code style={{ fontFamily: MONO, color: AMBER }}>&amp;</code> 지원. Import 시 Parsing하여 문법 오류 사전 검출.</NumItem>
            <NumItem n={2}>조건을 만족하는 Event 중 Priority가 가장 높은 Event 1개만 실행.</NumItem>
            <NumItem n={3}>Priority 동일 시 Table 상단 Event 우선.</NumItem>
            <NumItem n={4}>Target이 <code style={{ fontFamily: MONO, color: AMBER }}>*</code> 인 공통 Event로 정의되지 않은 Interaction 대응.</NumItem>
          </ul>
        </section>

        {/* ── Command Sequence ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>Command Sequence</h2>
          <p style={BODY}>
            선택된 Event를 <code style={{ fontFamily: MONO, color: TEAL }}>EventSequence.Steps</code> 순서에 따라 Command로 변환 후 실행.<br />
            영상 종료 시 <code style={{ fontFamily: MONO, color: TEAL }}>clip_end</code>, View 도착 시 <code style={{ fontFamily: MONO, color: TEAL }}>enter_view</code>를 다시 Table에 전달하여
            컷신 → 화면 → 진입 대사를 데이터만으로 연결.
          </p>
          <StepFlow />
          <Card>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", margin: "0 0 12px" }}>
              <span style={{ fontWeight: 700, color: "#f87171" }}>문제: </span>
              <br />게임용 EventRunner와 테스트용 HeadlessGame이 실행 순서를 각각 보유.
              <br />한쪽만 수정할 경우 테스트 결과와 실제 게임 동작 불일치 발생.
            </p>
            <p style={{ fontSize: "14.5px", lineHeight: "1.75", margin: 0 }}>
              <span style={{ fontWeight: 700, color: TEAL }}>해결: </span>
              <br />실행 순서를 Core의 EventSequence로 통합.
              <br />두 실행기가 동일한 정의에서 Command를 생성하도록 수정.
            </p>
          </Card>
        </section>

        {/* ── 영상 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>VideoDirector / ICutscene</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>VideoDirector는 Idle / Playing / Transition 3가지 상태만 관리. 재생 중 Input 차단 및 Skip 처리.</NumItem>
            <NumItem n={2}><code style={{ fontFamily: MONO, color: TEAL }}>ICutscene</code>으로 컷신 추상화. VideoClip(<code style={{ fontFamily: MONO }}>IPreparableCutscene</code>)과 영상 미제작 장면용 Placeholder를 동일하게 처리.</NumItem>
            <NumItem n={3}>VideoPlayer 2개 교대 사용. View 진입 시 다음에 재생될 수 있는 영상을 미리 Prepare하여 재생 지연 감소.</NumItem>
            <NumItem n={4}>View별 반복 배경 영상은 view_loops.csv로 관리.</NumItem>
            <NumItem n={5}>Esc Key 입력 시 영상 재생 중이면 Skip, 그 외에는 일시정지 메뉴(메인 화면 / 게임 종료) 출력.</NumItem>
          </ul>
        </section>

        {/* ── 퍼즐 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>Puzzle</h2>
          <p style={BODY}>
            Puzzle을 상태만 보유하는 규칙(Core)과 화면에 출력하는 Part(Runtime)로 분리.<br />
            규칙은 Puzzle Type별 Strategy로 구현, 화면은 <code style={{ fontFamily: MONO, color: TEAL }}>puzzle_parts.csv</code>의 행 단위로 Part 생성 및 조립.
          </p>
          <PuzzleTable />
          <figure style={{ margin: "0 0 16px" }}>
            <img
              src={PUZZLES_IMAGE} alt="퍼즐 화면 9종"
              style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)", imageRendering: "pixelated" }}
              onError={e => { e.currentTarget.style.display = "none"; }}
            />
            <figcaption style={{ fontSize: "12px", opacity: 0.45, marginTop: "8px", textAlign: "center", lineHeight: 1.6 }}>
              puzzle_parts.csv 36행으로 조립한 Puzzle 화면 9종
            </figcaption>
          </figure>
          <h3 style={SUB_TITLE}>Part 조립</h3>
          <CodeBlock>{`puzzle,kind,index,x,y,file,cell,option,order
P07,buttons,,,,,,ripple,
P07,clock_hand,,100,14,sprites/ch2_clock_hands/hour_hand_60.png,121,hour,0
P07,clock_hand,,100,14,sprites/ch2_clock_hands/minute_hand_12.png,121,minute,1
P10,buttons,,,,sprites/ch2_safe/key_pressed.png,,sprite,
P10,digit,0,192,33,sprites/ch2_safe/seg_{0}.png,,,
P19,gauge,,120,22,sprites/ch5_boiler/gauge_needle_11.png,81,10,`}</CodeBlock>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>각 View의 <code style={{ fontFamily: MONO }}>puzzle_input</code> Hotspot 기준으로 Button 자동 생성. 누름 반응은 Rect / Sprite / Ripple / None 중 선택.</NumItem>
            <NumItem n={2}>kind별 조립 함수를 Dictionary로 구성. 신규 Part는 <code style={{ fontFamily: MONO }}>PuzzleAssembler.Register</code>로 추가.</NumItem>
            <NumItem n={3}>Resources에 동일한 이름의 Prefab이 존재할 경우 데이터 조립 대신 Prefab 사용.</NumItem>
          </ul>
        </section>

        {/* ── 콘텐츠 파이프라인 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>CSV → ScriptableObject Import</h2>
          <p style={BODY}>
            기획 데이터는 CSV로 작성하고, 게임은 CSV 대신 ScriptableObject를 참조.<br />
            Editor의 <code style={{ fontFamily: MONO, color: TEAL }}>ContentImporter</code>(AssetPostprocessor)가 CSV 검사 후 ScriptableObject 1개로 변환.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>data 폴더의 CSV 변경 시 자동 Import. 메뉴 FMV/Import Content로 수동 실행 가능.</NumItem>
            <NumItem n={2}>조건 문법 오류, ID 중복 발생 시 Import 중단 및 기존 Asset 유지.</NumItem>
            <NumItem n={3}>Asset과 CSV를 JSON으로 비교하는 Test 작성, Import 누락 검출.</NumItem>
            <NumItem n={4}>Row Class는 Core에 <code style={{ fontFamily: MONO }}>[Serializable]</code>로 정의, Parsing된 조건은 <code style={{ fontFamily: MONO }}>[NonSerialized]</code>로 두고 Load 시 재생성.</NumItem>
          </ul>
        </section>

        {/* ── 세이브와 텍스트 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>Save / Text</h2>
          <h3 style={{ ...SUB_TITLE, marginTop: 0 }}>Blackboard Save</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>Flag / Var / Inventory / 현재 View / 확인한 Event(seenEvents) 저장. 연출이 끝난 Idle 상태에서 자동 저장.</NumItem>
            <NumItem n={2}>대사 출력이 끝난 Event만 확인 처리. 이어하기 시 확인한 진입 대사는 생략, 조사 / 아이템 반응은 매번 출력.</NumItem>
          </ul>
          <h3 style={SUB_TITLE}>TextMeshPro / 한글 폰트</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>나눔고딕(SIL OFL) 내장, Runtime Dynamic TMP Font로 사용. 사용된 글자만 Atlas에 추가.</NumItem>
            <NumItem n={2}>Text Animation 시 전체 문장을 먼저 배치하고 출력 글자 수만 증가. 출력 도중 줄바꿈 위치 고정.</NumItem>
            <NumItem n={3}>일기장 줄 간격을 Pixel 단위로 환산하여 괘선(12px)에 맞춤.</NumItem>
          </ul>
        </section>

        {/* ── 테스트 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>Test</h2>
          <p style={BODY}>
            Core가 Unity와 분리되어 HeadlessGame으로 화면 없이 Event Table 실행 가능.<br />
            Ending까지의 Click 순서를 입력하여 게임 전체를 자동 진행, 데이터 수정으로 인한 진행 불가 상황 검출.
          </p>
          <div style={{
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px",
            overflow: "hidden", marginBottom: "16px",
          }}>
            {TESTS.map((t, i) => (
              <div key={t.name} style={{
                padding: "10px 16px",
                background: i % 2 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.04)",
              }}>
                <p style={{ fontSize: "12px", fontFamily: MONO, color: TEAL, margin: "0 0 2px", overflowWrap: "anywhere" }}>{t.name}</p>
                <p style={{ fontSize: "13px", opacity: 0.65, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
          <Card>
            <p style={{ fontSize: "14px", fontWeight: 700, color: "#f0f0f0", margin: "0 0 8px" }}>의존 그래프 검사 (GraphRules)</p>
            <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.75, margin: 0 }}>
              설계서에서 미구현으로 남아 있던 항목.<br />
              전체 Event의 조건과 결과로 그래프를 구성하여 설정되지 않는 Flag, 도달할 수 없는 View 검출.
            </p>
          </Card>
          <Card>
            <p style={{ fontSize: "14px", fontWeight: 700, color: "#f0f0f0", margin: "0 0 8px" }}>테스트 단축키</p>
            <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.75, margin: 0 }}>
              Editor / Development Build 한정. F8 입력 시 현재 Puzzle 해결 처리 및 puzzle_solved 전달.<br />
              연출 확인 시 Puzzle을 반복해서 풀 필요 없음.
            </p>
          </Card>
        </section>

        {/* ── 확장 방향성 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>확장 방향성</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>연출 도중 저장 지원 (현재 연출 중 종료 시 해당 Event 처음부터 재시작).</NumItem>
            <NumItem n={2}>아이템 획득 전용 팝업 추가 (현재 대화창으로 대체).</NumItem>
          </ul>
        </section>

        {/* Gallery */}
        <section>
          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f0f0f0", marginBottom: "16px" }}>
            Project Gallery
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
            {GALLERY.map(({ src, label }) => (
              <div key={src} style={{
                position: "relative", borderRadius: "8px", overflow: "hidden",
                background: "#0a0d14", aspectRatio: "16/9",
                border: "1px solid rgba(245,192,106,0.15)",
              }}>
                <img
                  src={src} alt={label}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", imageRendering: "pixelated" }}
                  onError={e => { e.currentTarget.style.display = "none"; }}
                />
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
