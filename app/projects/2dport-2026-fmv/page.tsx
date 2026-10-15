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
const STRONG = { color: "#f0f0f0", fontWeight: 700 };
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
    desc: "CSV → ScriptableObject 임포트 · 씬 생성 메뉴 · 텍스처 임포트 규칙",
    items: ["ContentImporter", "FmvSceneMenu", "PackTexturePostprocessor"],
  },
  {
    level: "Fmv.Runtime",
    color: "#60a5fa",
    desc: "Unity 쪽 — 명령 실행 · 영상 · 월드 뷰 · 퍼즐 부품 · UI",
    items: ["FmvGame", "EventRunner", "VideoDirector", "CutsceneLibrary", "WorldView", "FlashlightRig", "PuzzleAssembler", "PuzzleModule", "*Presenter", "ResourcePack", "SaveSlot"],
  },
  {
    level: "Fmv.Core",
    color: TEAL,
    desc: "noEngineReferences — 상태 · 규칙 · 데이터만, UnityEngine 참조 없음",
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
  { name: "상태", code: "ApplyState", desc: "플래그 · 변수 · 아이템 변경" },
  { name: "대사", code: "Dialogue", desc: "대사 줄 출력 (이미 본 진입 대사는 건너뜀)" },
  { name: "카드", code: "Card", desc: "챕터 카드 · 일기장" },
  { name: "영상", code: "Clip", desc: "컷신 재생 → 끝나면 clip_end 발생" },
  { name: "이동", code: "Goto", desc: "뷰 전환 → 도착하면 enter_view 발생" },
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
  { name: "LoadsAllTables", desc: "모든 CSV를 읽고 조건 문법 · ID 중복 검사" },
  { name: "PlaythroughReachesEnding ×2", desc: "헤드리스 실행기로 엔딩 A(필수만) · 엔딩 B(일기 5조각) 끝까지 자동 진행" },
  { name: "EveryInputPuzzleSolvesWithItsAnswer", desc: "모든 입력 퍼즐이 정답 입력으로 풀린다" },
  { name: "ImportedContentAssetMatchesCsv", desc: "ScriptableObject 에셋이 지금 CSV와 같은 내용인지" },
  { name: "ConsumedItemsCanBeReacquiredForEveryUse", desc: "여러 곳에 쓰는 아이템은 쓸 때마다 다시 얻을 수 있는지" },
  { name: "EveryFlagCanBeSetAndEveryViewIsReachable", desc: "의존 그래프 — 세울 수 없는 플래그 · 갈 수 없는 뷰" },
  { name: "LoopsPointAtLoopingClipsAndExistingStates", desc: "반복 영상 표가 실제 반복 클립 · 상태를 가리키는지" },
  { name: "FlashlightRowsPointAtExistingStates", desc: "손전등 표가 있는 뷰 상태를 가리키는지" },
  { name: "EveryInputPuzzleHasPartLayout", desc: "모든 입력 퍼즐에 puzzle_parts.csv 배치가 있는지" },
  { name: "TiesResolveToUpperRow", desc: "우선순위가 같으면 위쪽 행이 이긴다" },
  { name: "UnknownHotspotFallsBack", desc: "정의 안 된 대상은 * 안전망 이벤트로" },
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
          {["Unity 6", "C#", "Data-Driven", "ScriptableObject", "UniTask", "TextMeshPro", "Editor", "NUnit"].map(t => (
            <span key={t} style={TAG}>{t}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "8px", lineHeight: 1.3, color: "#f0f0f0" }}>
          2DPort_2026_FMV — 자정의 하숙집
        </h1>
        <p style={{ fontSize: "16px", fontWeight: 700, color: TEAL, marginBottom: "36px" }}>
          검은방식 FMV 탈출 어드벤처
        </p>

        {/* ── Project Info ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>Project Info</h2>
          <p style={BODY}>
            하숙집 다락방에서 깨어난 주인공이 방을 하나씩 조사하며 탈출하는 포인트 앤 클릭 어드벤처.<br />
            영상 컷신 · 정지 화면 탐색 · 퍼즐이 번갈아 나오는 &lsquo;검은방&rsquo; 방식입니다.
            먼저 쓴 설계서(블랙보드 + 조건부 이벤트 테이블 + 명령 시퀀스 + 영상 중재자)를 그대로 구현하는 것이 목표였고,
            <strong style={STRONG}> 게임 진행은 전부 CSV 데이터가 정하고 코드는 그 데이터를 실행만 하게</strong> 만들었습니다.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {[
              "엔진: Unity 6 (6000.0.36f1, 2D URP · Light 2D · Pixel Perfect Camera) / 언어: C# / 비동기: UniTask",
              "구성: 어셈블리 3개 — Fmv.Core 10파일 · Fmv.Runtime 25파일 · Fmv.Editor 3파일 (약 4,800줄)",
              "콘텐츠: 이벤트 248 · 대사 287 · 뷰 26 · 핫스팟 126 · 퍼즐 20 · 플래그 80 · 영상 클립 22 · 엔딩 2종",
              "데이터: CSV 19종 → 에디터 임포터가 ScriptableObject 하나로 굽는다",
              "검증: EditMode 테스트 12개 (헤드리스 엔딩 A/B 자동 진행 · 의존 그래프 · 데이터 무결성)",
            ].map(t => (
              <p key={t} style={{ fontSize: "14px", color: TEAL, opacity: 0.9, margin: 0 }}>• {t}</p>
            ))}
          </div>
        </section>

        {/* ── 설계 원칙 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>설계 원칙</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}><strong style={STRONG}>블랙보드가 곧 세이브</strong> — 플래그 · 변수 · 인벤토리 · 본 이벤트만 저장하면 어디서든 복원된다.</NumItem>
            <NumItem n={2}><strong style={STRONG}>진행은 표가 정한다</strong> — &ldquo;무엇을 눌렀을 때 어떤 조건이면 무슨 일이 일어나는가&rdquo;를 이벤트 표 한 줄로 쓴다.</NumItem>
            <NumItem n={3}><strong style={STRONG}>실행 순서는 하나</strong> — 상태 → 대사 → 카드 → 영상 → 이동. 게임과 테스트 실행기가 같은 순서 정의를 쓴다.</NumItem>
            <NumItem n={4}><strong style={STRONG}>규칙은 엔진 밖에</strong> — Core 어셈블리는 UnityEngine을 참조하지 않아 Unity 없이 dotnet 콘솔로도 돌릴 수 있다.</NumItem>
            <NumItem n={5}><strong style={STRONG}>중재자는 얇게</strong> — VideoDirector는 영상 상태만 맡고, 판정 · 저장 · UI는 각자 따로 둬서 God Object가 되지 않게 한다.</NumItem>
          </ul>
        </section>

        {/* ── 어셈블리 구조 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>어셈블리 구조</h2>
          <p style={BODY}>
            참조는 위에서 아래로만 흐릅니다. Core는 <code style={{ fontFamily: MONO, color: TEAL }}>noEngineReferences</code>로
            묶여 있어서, 실수로 MonoBehaviour나 Debug.Log를 끌어오면 컴파일이 실패합니다.
          </p>
          <LayerDiagram />
        </section>

        {/* ── 조건부 이벤트 테이블 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>조건부 이벤트 테이블</h2>
          <p style={BODY}>
            플레이어 행동은 모두 <strong style={STRONG}>트리거 + 대상 + (아이템)</strong>으로 바뀌어 표에서 찾아집니다.
            같은 다락방 트렁크라도 손전등을 켰는지, 자물쇠를 열었는지에 따라 다른 행이 고릅니다.
          </p>
          <CodeBlock>{`event_id          trigger   target            condition                               priority  effects
CH1_TRUNK_DARK    examine   attic_main.trunk  !flag:attic_lit                         20        (대사만)
CH1_TRUNK_GO      examine   attic_main.trunk  flag:attic_lit & !flag:trunk_open       10        goto attic_trunk_lock
CH1_TRUNK_TAKE    examine   attic_main.trunk  flag:trunk_open & !flag:trunk_items_taken  5   give screwdriver;diary_page
CH1_TRUNK_SOLVED  puzzle_solved  P03          -                                       0         set trunk_open · clip · goto
CH1_SCREW0_LAST   use_item  attic_hatch.screw0  … & var:screws_removed>=3             10        take screwdriver`}</CodeBlock>
          <h3 style={SUB_TITLE}>판정 규칙</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>조건 문법: <code style={{ fontFamily: MONO, color: AMBER }}>flag:</code> · <code style={{ fontFamily: MONO, color: AMBER }}>has:</code> · <code style={{ fontFamily: MONO, color: AMBER }}>var:&gt;= &lt;= == &gt; &lt;</code> · <code style={{ fontFamily: MONO, color: AMBER }}>!</code> · <code style={{ fontFamily: MONO, color: AMBER }}>&amp;</code> — 임포트 때 파싱해서 문법 오류는 빌드 전에 잡힌다.</NumItem>
            <NumItem n={2}>조건을 만족하는 행 중 priority가 가장 높은 것 하나만 실행한다.</NumItem>
            <NumItem n={3}>우선순위가 같으면 표에서 위쪽 행이 이긴다 (기획자가 행 순서로 의도를 표현할 수 있게).</NumItem>
            <NumItem n={4}>대상이 <code style={{ fontFamily: MONO, color: AMBER }}>*</code>인 공통 행이 안전망 — 정의 안 된 조합 · 아이템 사용에도 반드시 반응이 나온다.</NumItem>
          </ul>
        </section>

        {/* ── 명령 시퀀스 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>명령 시퀀스</h2>
          <p style={BODY}>
            고른 이벤트 행은 <code style={{ fontFamily: MONO, color: TEAL }}>EventSequence.Steps</code>가 정한 순서의 명령(Command)으로 펼쳐집니다.
            영상이 끝나면 <code style={{ fontFamily: MONO, color: TEAL }}>clip_end</code>, 뷰에 도착하면 <code style={{ fontFamily: MONO, color: TEAL }}>enter_view</code>가
            다시 표로 들어가서 컷신 → 화면 → 진입 대사가 표만으로 이어집니다.
          </p>
          <StepFlow />
          <Card>
            <p style={{ fontSize: "14px", fontWeight: 700, color: "#f0f0f0", margin: "0 0 8px" }}>순서 정의를 한 곳에</p>
            <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.75, margin: 0 }}>
              처음에는 Unity의 EventRunner와 테스트용 HeadlessGame이 실행 순서를 각자 갖고 있었습니다.
              둘이 어긋나면 &ldquo;테스트는 통과하는데 게임은 다르게 도는&rdquo; 상황이 생기므로,
              순서를 Core의 <code style={{ fontFamily: MONO }}>EventSequence</code>로 옮겨 두 실행기가 같은 정의에서 명령을 만들게 했습니다.
            </p>
          </Card>
        </section>

        {/* ── 영상 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>VideoDirector와 ICutscene</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}><strong style={STRONG}>VideoDirector</strong>는 Idle / Playing / Transition 세 상태만 가진 중재자. 재생 중 입력 차단 · 건너뛰기만 책임진다.</NumItem>
            <NumItem n={2}>컷신은 <code style={{ fontFamily: MONO, color: TEAL }}>ICutscene</code> 뒤에 숨긴다. 실제 VideoClip(미리 준비 가능한 <code style={{ fontFamily: MONO }}>IPreparableCutscene</code>)과 영상이 아직 없는 장면용 Placeholder가 같은 자리에 들어간다.</NumItem>
            <NumItem n={3}>VideoPlayer 두 개를 번갈아 써서, 뷰에 들어가면 지금 조건으로 나올 수 있는 다음 영상을 미리 Prepare해 둔다 (재생 시작 지연 대응). 반복 배경 영상은 view_loops.csv로 붙인다.</NumItem>
            <NumItem n={4}>Esc는 재생 중이면 영상 건너뛰기, 아니면 일시정지 메뉴(메인 화면 / 게임 종료).</NumItem>
          </ul>
        </section>

        {/* ── 퍼즐 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>퍼즐 — 규칙과 부품 분리</h2>
          <p style={BODY}>
            퍼즐은 <strong style={STRONG}>상태만 가진 규칙(Core)</strong>과 <strong style={STRONG}>그걸 보여 주는 부품(Runtime)</strong>으로 나눴습니다.
            규칙은 퍼즐 종류마다 Strategy 하나, 화면은 <code style={{ fontFamily: MONO, color: TEAL }}>puzzle_parts.csv</code>의 행마다 부품 하나를 붙여 조립합니다.
          </p>
          <PuzzleTable />
          <figure style={{ margin: "0 0 16px" }}>
            <img
              src={PUZZLES_IMAGE} alt="퍼즐 화면 9종"
              style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)", imageRendering: "pixelated" }}
              onError={e => { e.currentTarget.style.display = "none"; }}
            />
            <figcaption style={{ fontSize: "12px", opacity: 0.45, marginTop: "8px", textAlign: "center", lineHeight: 1.6 }}>
              코드 수정 없이 CSV 36행으로 조립한 퍼즐 화면 9종
            </figcaption>
          </figure>
          <h3 style={SUB_TITLE}>부품 조립</h3>
          <CodeBlock>{`puzzle,kind,index,x,y,file,cell,option,order
P07,buttons,,,,,,ripple,            ← 시계: 누른 자리에 고리
P07,clock_hand,,100,14,sprites/ch2_clock_hands/hour_hand_60.png,121,hour,0
P07,clock_hand,,100,14,sprites/ch2_clock_hands/minute_hand_12.png,121,minute,1
P10,buttons,,,,sprites/ch2_safe/key_pressed.png,,sprite,   ← 금고: 눌린 키 그림
P10,digit,0,192,33,sprites/ch2_safe/seg_{0}.png,,,        ← 7세그 표시창
P19,gauge,,120,22,sprites/ch5_boiler/gauge_needle_11.png,81,10,`}</CodeBlock>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>버튼은 그 뷰의 <code style={{ fontFamily: MONO }}>puzzle_input</code> 핫스팟에서 자동 생성. 누름 반응은 Rect · Sprite · Ripple · None 중 표에서 고른다.</NumItem>
            <NumItem n={2}>kind → 조립 함수 사전이라, 새 부품 종류는 <code style={{ fontFamily: MONO }}>PuzzleAssembler.Register</code> 한 줄로 추가된다.</NumItem>
            <NumItem n={3}>손으로 꾸민 퍼즐이 필요하면 Resources에 같은 이름의 프리팹을 두면 데이터 조립 대신 그것을 쓴다.</NumItem>
          </ul>
        </section>

        {/* ── 콘텐츠 파이프라인 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>CSV → ScriptableObject 임포트</h2>
          <p style={BODY}>
            기획은 스프레드시트에서 CSV로 쓰고, 게임은 CSV를 직접 읽지 않습니다. 에디터의
            <code style={{ fontFamily: MONO, color: TEAL }}> ContentImporter</code>(AssetPostprocessor)가 CSV를 검사한 뒤 하나의 ScriptableObject로 굽습니다.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>data 폴더의 CSV가 바뀌면 자동으로 다시 임포트 (메뉴 FMV/Import Content로 직접 실행도 가능).</NumItem>
            <NumItem n={2}>조건 문법 오류 · ID 중복이 있으면 임포트를 멈추고 <strong style={STRONG}>기존 에셋을 그대로 둔다</strong> — 잘못된 데이터가 게임에 들어가지 않는다.</NumItem>
            <NumItem n={3}>테스트가 에셋과 CSV를 JSON으로 비교해서, CSV만 고치고 임포트를 잊으면 실패한다.</NumItem>
            <NumItem n={4}>행 클래스는 Core에 <code style={{ fontFamily: MONO }}>[Serializable]</code>로 두고, 파싱한 조건은 <code style={{ fontFamily: MONO }}>[NonSerialized]</code>로 로드 때 다시 만든다.</NumItem>
          </ul>
        </section>

        {/* ── 세이브와 텍스트 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>세이브 · 텍스트</h2>
          <h3 style={{ ...SUB_TITLE, marginTop: 0 }}>블랙보드 세이브</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>플래그 · 변수 · 인벤토리 · 현재 뷰 · 본 이벤트(seenEvents)를 저장. 연출 중이 아닐 때 자동 저장한다.</NumItem>
            <NumItem n={2}>대사가 끝까지 나온 이벤트만 &lsquo;봤음&rsquo;으로 기록 → 이어하기 때 이미 본 진입 대사는 다시 나오지 않는다. 조사 · 아이템 반응은 매번 나온다.</NumItem>
          </ul>
          <h3 style={SUB_TITLE}>TextMeshPro + 내장 한글 폰트</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>나눔고딕(SIL OFL)을 넣고 런타임 동적 TMP 폰트로 만든다 — 쓰인 글자만 아틀라스에 구워 11,172자를 미리 굽지 않는다.</NumItem>
            <NumItem n={2}>타자 효과는 문장 전체를 먼저 배치하고 보이는 글자 수만 늘려서, 타자 도중 줄바꿈 위치가 바뀌지 않는다.</NumItem>
            <NumItem n={3}>일기장은 줄 간격을 픽셀로 환산해 괘선(12px)에 글줄을 맞춘다.</NumItem>
          </ul>
        </section>

        {/* ── 테스트 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>자동 테스트와 검증</h2>
          <p style={BODY}>
            Core가 엔진과 분리돼 있어서 <strong style={STRONG}>HeadlessGame</strong>이 화면 없이 이벤트 표를 그대로 실행합니다.
            엔딩까지의 클릭 순서를 넣으면 게임 전체를 몇 초 만에 끝까지 진행해, 데이터 한 줄을 잘못 고쳐 진행이 막히면 바로 알 수 있습니다.
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
              설계서에 &lsquo;아직 없는 것&rsquo;으로 남겨 둔 항목입니다. 모든 이벤트의 조건과 효과로 그래프를 만들어,
              조건에는 쓰이는데 어디서도 세우지 않는 플래그와 어느 이벤트로도 갈 수 없는 뷰를 찾아냅니다.
            </p>
          </Card>
          <Card>
            <p style={{ fontSize: "14px", fontWeight: 700, color: "#f0f0f0", margin: "0 0 8px" }}>테스트 단축키</p>
            <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.75, margin: 0 }}>
              에디터 · 개발 빌드에서 F8을 누르면 지금 화면의 퍼즐을 푼 것으로 처리하고 puzzle_solved를 보냅니다.
              연출을 확인할 때 매번 퍼즐을 풀 필요가 없고, 릴리스 빌드에는 들어가지 않습니다.
            </p>
          </Card>
        </section>

        {/* ── 남은 과제 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>남은 과제</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>자동 저장이 연출이 끝난 뒤에만 일어나서, 연출 도중 종료하면 그 이벤트를 처음부터 다시 본다.</NumItem>
            <NumItem n={2}>아이템 획득 전용 팝업은 아직 없고 대화창으로 대신한다.</NumItem>
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
