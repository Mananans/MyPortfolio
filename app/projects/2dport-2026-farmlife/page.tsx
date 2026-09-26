"use client";

import Link from "next/link";

// ─────────────────────────────────────────────
//  이미지 경로 설정
//  📁 public/images/farmlife-2026/
//      ├── hero.png
//      ├── gallery-1.png  ← 농장 / 경작 화면
//      ├── gallery-2.png  ← NPC 스케줄 · 대화 화면
//      ├── gallery-3.png  ← 상점 / 가판대 화면
//      ├── gallery-4.png  ← 전투 화면
//      ├── gallery-5.png  ← 밤의 집 — 배치한 가구와 조명
//      ├── gallery-6.png  ← 외양간 내부 — 가축 5종
//      ├── gallery-7.png  ← 대장간 내부 — 대장장이 NPC
//      ├── gallery-8.png  ← 닭장 · 외양간 외관
//      ├── gallery-9.png  ← 플레이어 집 앞 — 가공 기계 8종 · 작업대 · 용광로 · 반려동물
//      ├── gallery-10.png ← 비 오는 날 — 우산 · 달팽이 (빗방울은 임시 제작 이미지)
//      ├── gallery-11.png ← 가축 상점 앞 — 말 타기
//      ├── gallery-12.png ← 숙련도 창
//      ├── diagram-layer.png    ← 계층 구조 다이어그램 (7단계, 2026-09-26 보관함 · 원격 콘텐츠 추가 — _reslice/portfolio_diagrams.py)
//      ├── diagram-save.png     ← 세이브/로드 분기 다이어그램 (2026-09-26 불러오기 때 맵과 세이브 맞추기 추가)
//      ├── walk-audit.png       ← 통행 점검 도구가 그린 플레이어 집 (막힌 칸 X · 걷는 칸 점)
//      └── diagram-affinity.png ← 호감도 마일스톤 판정 다이어그램
//  📁 public/images/thumb/farmlife-2026.png  ← 메인 카드 썸네일
// ─────────────────────────────────────────────
const HERO_IMAGE = "/images/farmlife-2026/hero.png";

const DIAGRAM_LAYER = "/images/farmlife-2026/diagram-layer.png";
const DIAGRAM_SAVE = "/images/farmlife-2026/diagram-save.png";
const DIAGRAM_AFFINITY = "/images/farmlife-2026/diagram-affinity.png";
const WALK_AUDIT = "/images/farmlife-2026/walk-audit.png";

const GALLERY = [
  { src: "/images/farmlife-2026/gallery-1.png", label: "경작 화면" },
  { src: "/images/farmlife-2026/gallery-2.png", label: "NPC 스케줄 · 대화" },
  { src: "/images/farmlife-2026/gallery-3.png", label: "가판대" },
  { src: "/images/farmlife-2026/gallery-4.png", label: "전투 화면" },
  { src: "/images/farmlife-2026/gallery-5.png", label: "밤의 집 — 배치한 가구 · 벽난로 · 촛불 조명" },
  { src: "/images/farmlife-2026/gallery-6.png", label: "외양간 — 소 · 염소 · 양 · 돼지 · 타조" },
  { src: "/images/farmlife-2026/gallery-7.png", label: "대장간 — 대장장이에게 제작 부탁" },
  { src: "/images/farmlife-2026/gallery-8.png", label: "닭장 · 외양간" },
  { src: "/images/farmlife-2026/gallery-9.png", label: "플레이어 집 앞 — 가공 기계 8종 · 작업대 · 용광로 · 반려동물" },
  { src: "/images/farmlife-2026/gallery-10.png", label: "비 오는 날 — 우산 · 달팽이 (빗방울은 리소스가 없어 임시로 만든 이미지)" },
  { src: "/images/farmlife-2026/gallery-11.png", label: "가축 상점 앞 — 말 타기" },
  { src: "/images/farmlife-2026/gallery-12.png", label: "숙련도 — 레벨 보너스 · 레시피 해금" },
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

// 계층 구조 다이어그램 — 이름이 아니라 "누가 누구를 호출하는가"로 나눔
const LAYERS = [
  {
    level: "조정자",
    color: "#fbbf24",
    desc: "의존성 주입과 이벤트 배선 · 새 게임 / 로드 분기",
    items: ["GameManager", "GameFlow"],
  },
  {
    level: "입력 라우팅",
    color: "#f87171",
    desc: "클릭을 받아 도메인으로 분배",
    items: ["InteractionManager"],
  },
  {
    level: "도메인",
    color: GREEN,
    desc: "한 분야의 로직 소유",
    items: ["FarmManager", "StallSystem", "NpcInteractionHandler", "CombatSystem", "CraftingSystem", "FishingSystem", "FurnitureSystem", "NpcCraftService", "FestivalMinigameService", "LivestockManager", "MountSystem", "MachineSystem", "SkillPerks", "InsectSystem", "PetSystem", "WeatherSystem", "StorageSystem", "ContentUpdater", "SaveSystem"],
  },
  {
    level: "엔티티 컨트롤러",
    color: "#60a5fa",
    desc: "개체 하나 · 흐름 하나를 제어",
    items: ["NpcController", "MonsterController", "LivestockController", "Mountable", "PetController", "MineManager"],
  },
  {
    level: "상태 시스템",
    color: TEAL,
    desc: "상태 소유 + API · 대부분 IPersistentSystem 구현",
    items: ["InventorySystem", "ToolInventory", "EquipmentSystem", "QuickSlotSystem", "WalletSystem", "TimeSystem", "PlayerHealth", "BuffSystem", "ConsumableUser", "MovementSystem", "WalkabilityService", "OccupancyService", "ItemCollectionBook", "BundleBook", "AvatarCollectionBook", "SkillSystem"],
  },
  {
    level: "데이터",
    color: "#a78bfa",
    desc: "SO 정의 + 런타임 인스턴스 + 저장 모델",
    items: ["ItemData", "CropData", "HarvestableDefinition", "MonsterData", "NpcDefinition", "CraftingRecipe", "MineFloorTable", "LivestockData", "FurnitureData", "ToolItemData", "MachineData", "SkillDefinition", "InsectData", "PetData", "FarmTileData", "FurnitureTileData", "MachineTileData", "SaveData"],
  },
  {
    level: "UI",
    color: "#94a3b8",
    desc: "로직의 이벤트를 구독만 · 로직은 UI를 참조하지 않음",
    items: ["PlayerHealthBar", "QuickSlotBar", "AffinityHeartsUI", "CraftingUI", "FurnitureCatalogUI", "MineElevatorUI", "SkillWindowUI", "LivestockSellUI", "StorageUI", "BootstrapView", "SystemMessage", "*Notifier"],
  },
];

// 다이어그램 이미지 (밝은 배경이라 전용 컨테이너에 담는다)
function Figure({ src, alt, caption }) {
  return (
    <figure style={{ margin: "0 0 16px" }}>
      <div style={{
        background: "#faf9f6",
        borderRadius: "10px",
        border: "1px solid rgba(255,255,255,0.1)",
        padding: "14px",
        overflow: "hidden",
      }}>
        <img
          src={src} alt={alt}
          style={{ width: "100%", height: "auto", display: "block", borderRadius: "4px" }}
          onError={e => { e.currentTarget.style.display = "none"; }}
        />
      </div>
      {caption && (
        <figcaption style={{
          fontSize: "12px", opacity: 0.45, marginTop: "8px", textAlign: "center", lineHeight: 1.6,
        }}>{caption}</figcaption>
      )}
    </figure>
  );
}

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
  { name: "IPersistentSystem", contract: "SaveKey / InitializeNew / Capture / Restore", impl: "구현체 21종(씬 인스턴스 24개) — Inventory, ToolInventory, QuickSlot, Wallet, Time, PlayerHealth, Stall, PlayerPositionSaver, NpcSaveManager, MineManager, CraftingSystem, ItemCollectionBook, BundleBook, LivestockSaveManager, AvatarCollectionBook, PlayerAppearance, MountSystem, SkillSystem, PetSystem, WeatherSystem, StorageSystem" },
  { name: "IItemAcquireHandler", contract: "TryHandleAcquire — 가방에 넣기 전 가로채기", impl: "AvatarCollectionBook(외형 파츠 → 즉시 해금) / ToolInventory(도구 → 도구 칸·등급 교체) / LivestockManager(가축·사료통 → 축사로) / MountSystem(말 → 말뚝, 안장) / PetSystem(입양 → 마당으로)" },
  { name: "ITileDataStore", contract: "셀 데이터 조회 / 등록", impl: "TileDataStore" },
  { name: "IEffectPlayer", contract: "연출 재생", impl: "EffectSystem" },
  { name: "ICharacterAnimator", contract: "Play(action, dir)", impl: "CharacterAnimator / NpcAnimator / MonsterAnimator / LivestockAnimator" },
  { name: "IWalkableProvider", contract: "통행 판정 + 인접 칸 찾기", impl: "WalkabilityService" },
  { name: "IInteractable", contract: "Interact / CanInteract", impl: "FurnitureInteractable / MineLadder / LivestockController / HorseStand / PetController" },
  { name: "IToolProvider", contract: "현재 장착 도구 제공", impl: "EquipmentSystem" },
  { name: "ISaveable", contract: "ToSaveData(cell)", impl: "FarmTileData / GrassData / HarvestableData / FurnitureTileData / MachineTileData" },
  { name: "IWarpConsent", contract: "AllowTriggerWarp", impl: "NpcController" },
  { name: "IHitAnimation", contract: "HitFrames / HitFps", impl: "HarvestableDefinition" },
  { name: "IScreenFader", contract: "FadeToBlack / FadeToClear", impl: "ScreenFader(UI) — 수면 · 부활 연출이 UI 타입을 모르게" },
  { name: "ICollectionBook", contract: "도감 목록 · 기록 · 진행도", impl: "ItemCollectionBook(물고기 · 광물 · 나무 · 곤충) / BundleBook / AvatarCollectionBook" },
  { name: "IFestivalMinigameMode", contract: "축제 미니게임 판정 방식", impl: "CollectMinigameMode / TimingMinigameMode / WheelMinigameMode" },
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
      "밭 갈기 → 씨앗 심기 → 일자 기반 성장 → 수확 (작물 30종)",
      "작물마다 실제 수확 계절(CropData.seasons) — 제철에만 심고, 계절이 바뀌면 시든다",
      "제철이 아닌 씨앗은 ItemAvailability로 상점·드롭에서 자동 제외",
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
      "데미지 = Power × 도구 계수 + 버프 보너스",
    ],
  },
  {
    icon: "💗",
    name: "호감도 · 선물",
    points: [
      "NpcAffinity — 포인트/하트, 대화(하루 1회)·선물로 상승, 생일 배수",
      "선호도 5단계(Love~Hate)를 NpcDefinition에 데이터로 두고 반응별 각본 재생",
      "하트 도달 시 마일스톤 각본 → 조건 충족 시 이벤트 Scene 전환",
      "NpcController에서 분리된 독립 컴포넌트 (자기 상태 직렬화)",
    ],
  },
  {
    icon: "⛏️",
    name: "광산 (절차 생성)",
    points: [
      "MineGenerator — 셀룰러 오토마타 / BSP 두 방식, 층 크기 지정 가능",
      "후처리 6단계: 구멍 메우기·고립 벽 제거·끊긴 벽 잇기·대각선 틈·테두리·연결성 보장",
      "MineFloorTable(SO)로 층 구간별 생성 방식·테마·광석 가중치·몬스터·조명 정의",
      "층 상태는 시드 + 변경분만 저장 — 층당 1~2KB",
    ],
  },
  {
    icon: "🍳",
    name: "요리 · 제작",
    points: [
      "CraftingRecipe(SO)에 station 개념 없음 — 제작대가 자기 레시피 목록을 소유",
      "지급 방식을 CraftDeliveryBase로 추상화 (스타듀식 / 돈스타브식 / 즉시)",
      "해금 경로: 기본 개방 / 아이템 사용 / 획득 / 이벤트 호출 / 숙련도 레벨",
      "BuffSystem — 음식 버프(공격력·최대체력), 지속시간 후 자동 해제",
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
      "2시에 쓰러지면 집 침대 옆에서 깸 — 옮기기 전 이벤트로 탈것 · 광산 상태를 먼저 정리",
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
    name: "가구 배치",
    points: [
      "가구 1,173종을 아이템(FurnitureData)으로 — 카탈로그 상점에서 구입해 집 안 타일맵에 배치",
      "스타듀식 조작: 미리보기 · R 방향 회전 · 우클릭 회수 · 여러 칸 가구",
      "그림이 있을 때만 상호작용 — 벽난로 불꽃 · 커튼 · 옷장 · 냉장고 토글, 소파 앉기, 침대 수면",
      "불꽃 · 촛불 · 램프는 Light2D 광원 — 밤 표현을 전역 조명으로 전환",
      "탁자 119종 위에 작은 가구 238종 — 그림 폭으로 차지할 자리를 계산해 탁자 크기에 맞춰 올림",
      "맵에 원래 놓인 가구도 같은 모델(고정 가구) — 앉기 · 켜기 · 조명이 그대로, 회수만 막음",
      "보관함 — 상자를 누르면 36칸 창, 창이 열린 동안만 열린 상자 그림",
    ],
  },
  {
    icon: "🐄",
    name: "가축 · 외양간",
    points: [
      "가축 7종(닭 · 오리 · 소 · 염소 · 양 · 돼지 · 타조)과 산출물(알 · 우유 · 양모 · 송로버섯)",
      "LivestockData(SO) 하나로 배고픔 · 성장 단계 · 방향별 프레임 · 산출 주기 · 암수 모습 정의",
      "가축 상점(목장주 NPC) — 산 가축은 가방이 아니라 바로 축사로, 사료통은 벽쪽 자리에 차례로",
      "암수가 있는 종은 밤마다 번식, 고기 그림이 있는 4종만 도축",
      "사는 것은 늘 새끼부터, 다 자란 가축은 목장주에게 판매(새끼 값의 1.5배)",
      "닭장 · 외양간 내부는 먼 좌표에 텍스트 그리드로 굽고 워프로 연결",
    ],
  },
  {
    icon: "🔨",
    name: "대장 일",
    points: [
      "광석 획득 → 주괴 레시피 해금 → 주괴 획득 → 그 등급 도구 · 무기 레시피 해금",
      "대장장이 NPC 대화 선택지 → 제작 목록, 모루(무기 작업대)에서도 제작",
      "도구 9종 × 10등급 = 90개 레시피, 가진 등급 이하는 제작 불가",
    ],
  },
  {
    icon: "🎪",
    name: "축제 · 미니게임",
    points: [
      "사계절 축제를 별도 Scene으로 — 축제 날 9시부터 공원 입구로 들어가면 열림",
      "미니게임 4종을 방식 클래스로(IFestivalMinigameMode: 모으기 · 타이밍 · 룰렛)",
      "축제 한정 음식 20종 · 전용 NPC 2명(행상인 · 진행자)",
    ],
  },
  {
    icon: "🐎",
    name: "탈것",
    points: [
      "말은 사서 안장을 얹고 타기, 타조는 탄 자세 + 타조 프레임 합성",
      "탄 자세는 캐릭터 레이어 애니메이션에 동작만 추가 — 이동 시스템의 Idle/Walk를 Ride로 바꿔 재생",
      "말 ×1.5 · 타조 ×1.4 이동 속도, F로 내리면 그 자리에 남음",
    ],
  },
  {
    icon: "🧀",
    name: "가공 기계",
    points: [
      "8종(버터 · 치즈 · 잼 · 피클/간장 · 꿀 · 목재 · 포션 · 옷감) — 작업대에서 만들어 바깥에 설치",
      "MachineData(SO)에 공정 목록(재료 · 결과 · 시간)만 두고 게임 시간으로 진행",
      "가구와 같은 타일 데이터 저장소에 앵커만 저장 → 불러온 뒤 발자국 · 완성 아이콘 재구성",
    ],
  },
  {
    icon: "📈",
    name: "숙련도",
    points: [
      "농사 · 채광 · 채집 · 낚시 · 전투 5종, Lv 10",
      "도메인 이벤트(수확 · 처치 · 낚시 · 가공)를 구독해 경험치 — 도메인은 숙련도를 모름",
      "레벨 보너스(추가 수확 · 공격력 · 낚시 구간)와 기계 레시피 해금을 SkillDefinition(SO)에",
    ],
  },
  {
    icon: "🦋",
    name: "곤충 · 반려동물",
    points: [
      "곤충 36종 — 계절 · 시각 · 비 조건, 잠자리채 모션의 타격 프레임에서 잡기 판정, 곤충 도감",
      "반려동물 9종(고양이 4 · 강아지 5) 입양 — 낮엔 마당, 밤엔 집 안에서 잠, 하루 한 번 쓰다듬기",
    ],
  },
  {
    icon: "🌧️",
    name: "날씨",
    points: [
      "계절별 비 확률 → 정적 WeatherContext — 정하는 쪽은 WeatherSystem 하나, 나머지는 읽기/구독",
      "비 오는 날 바깥 밭 자동 물주기 · 빗줄기 · 우산 자세 · 달팽이 출현",
      "빗방울은 리소스가 없어 임시로 만든 이미지",
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
    { file: "NpcController", line: "", verdict: "분리", color: GREEN, reason: "상점 재고(NpcShop) · 호감도(NpcAffinity)라는 이질적 책임이 뭉쳐 있었음 → 각 컴포넌트로 분리하고 세이브는 위임" },
    { file: "CraftingSystem ↔ Delivery", line: "", verdict: "분리", color: GREEN, reason: "지급 방식이 로직에 박혀 있었음 → CraftDeliveryBase로 추상화하고 결과 지급은 콜백으로 역참조 제거" },
    { file: "InteractionManager", line: "776", verdict: "유지", color: "#94a3b8", reason: "입력 → 실행 변환이라는 단일 목적. 가구 · 기계 · 곤충 · 탈것 라우팅이 늘어 길어졌지만 실제 로직은 전부 각 도메인에 위임됨" },
    { file: "MonsterController", line: "", verdict: "유지", color: "#94a3b8", reason: "AI 상태기계 하나. 분리 시 상태 전이만 흩어짐" },
    { file: "QuickSlot / Inventory / Movement", line: "", verdict: "유지", color: "#94a3b8", reason: "각자 단일 목적. 코드량이 많은 것과 책임이 섞인 것은 다름" },
    { file: "RescanSpace", line: "", verdict: "유지", color: "#94a3b8", reason: "이미 SpaceScanner로 추출돼 호출부는 각각 한 줄" },
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
              {r.file}
              {r.line && <span style={{ opacity: 0.4, fontWeight: 400 }}> ({r.line}줄)</span>}
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
    { label: "완료", color: GREEN, items: [
      "호감도 · 선물 · 마일스톤 이벤트", "광산 — 절차 생성 · 층 이동 · 진행도", "요리 / 제작 — 레시피 해금 · 지급 방식 교체 · 음식 버프",
      "낚시 — 미니게임 + 물고기 도감", "커뮤니티 센터 / 번들", "봄 축제 — 별도 Scene", "캐릭터 외형 · 외형 도감",
      "작물 계절 · 가축 7종 · 외양간", "대장장이 · 도구/무기 레시피 해금 사슬", "집 가구 배치 · 카탈로그 · 가구 조명",
      "사계절 축제 · 미니게임 4종 · 축제 한정 상품 · 날짜에 맞춰 열기", "가축 상점 · 암수 · 번식 · 도축 · 사료통", "탈것(말 · 타조) · 탁자 위 소품",
      "가공 기계 8종 · 숙련도 5종", "곤충 채집 · 반려동물 · 비", "다 자란 가축 판매", "EditMode 자동 테스트 39개",
      "플레이어 자택 · 플레이어 상점 · 보관함", "실내 배치 규칙(상호작용 / 막힘 / 바닥 깔개) · 통행 점검 도구",
      "Addressables 원격 콘텐츠 배포 — S3 + CloudFront, 콘텐츠 업데이트 빌드 · 업로드 도구",
      "점검 후 정리 — 7곳에 흩어진 ‘바깥 범위’를 OutdoorArea 하나로, 2시에 쓰러지면 집 침대로(탈것 · 광산 정리 이벤트)",
    ] },
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
          {["Unity 6", "C#", "ScriptableObject", "Architecture", "Editor", "NUnit", "Addressables", "AWS"].map(t => (
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
              "엔진: Unity 6 (2D URP · Renderer 2D / Light 2D) / 언어: C#",
              "네임스페이스: FarmGame.Core (에디터: FarmGame.EditorTools)",
              "구성: 농사 · 채집 · 전투 · NPC · 호감도 · 광산 · 제작 · 낚시 · 가축 · 가구 · 보관함 · 축제 · 탈것 · 가공 · 숙련도 · 곤충 · 반려동물 · 날씨 등 도메인 시스템 + IPersistentSystem 21종 (런타임 스크립트 279개 + 에디터 66개)",
              "맵: 바깥 · 실내 · 축제장 16개를 텍스트 그리드로 쓰고 에디터 베이커로 굽는다",
              "배포: Addressables — 축제 Scene 을 원격 콘텐츠로(AWS S3 + CloudFront), 앱 재배포 없이 콘텐츠 업데이트",
              "검증: EditMode 자동 테스트 39개 (규칙 · 저장 계약 · 데이터 무결성 · 씬 배선) + 플레이 · 실행 파일 확인",
              "설계 문서: PROJECT_STATUS.md / ARCHITECTURE.md",
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
              { t: "데이터 중심", d: "문자열 키가 아니라 ScriptableObject 참조." },
              { t: "이벤트 기반 디커플링", d: "방송자는 구독자를 모름. 역방향 통신은 전부 이벤트" },
              { t: "단일 책임", d: "이질적 책임이 뭉치면 분리, 단일 목적이면 길어도 유지" },
              { t: "코드 기반 배선", d: "Init()으로 주입. 시스템끼리 인스펙터로 찾지 않음" },
              { t: "UI는 구독", d: "로직 → UI 참조는 금지. UI가 로직 이벤트를 구독" },
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
            이름이 아니라 <strong style={{ color: "#e0e0e0" }}>누가 누구를 호출하는가</strong>로 7단계를 나누고,
            위 → 아래 방향으로만 의존하도록 고정. 역방향은 전부 이벤트나 콜백입니다.
          </p>
          <Figure
            src={DIAGRAM_LAYER}
            alt="계층 구조 다이어그램"
            caption="7단계 계층 — 위에서 아래로만 호출하고, UI 는 로직의 이벤트를 구독만 한다"
          />
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
  // ── 의존성 주입 ──────────────────────────
  walkability.Init(dataStore)                // 통행 판정 ← 데이터
  _pathfinder = new Pathfinder(walkability)  // 길찾기 ← 통행 판정 (순수 C# 객체)
  movement.Init(_pathfinder, characterAnimator)
  farm.Init(dataStore, effects, hitEffects, walkability)
  furniture.Init(dataStore, inventory, player, movement, characterAnimator)
  machines.Init(dataStore, inventory, movement)   // 가공 기계도 같은 칸 데이터 저장소
  interaction.Init(dataStore, walkability, movement, farm,
                   equipment, characterAnimator, inventory, furniture, machines)

  // ── 이벤트 배선 (역결합) ──────────────────
  inventory.Bind(farm)                       // 채집됨 → 인벤토리 적재
  drops.Bind(farm)                           // 채집됨 → 드랍 연출 (별개 구독)
  collectionBooks.Init(inventory)            // 획득 → 도감 자동 기록
  time.OnDayPassed += farm.GrowAllCrops      // 하루 경과 → 작물 성장
  time.OnDateChanged += farm.HandleDateChanged // 계절 변경 → 제철 아닌 작물 시듦
  furniture.OnSleepRequested += sleep.Sleep  // 놓은 침대에 누움 → 수면
  furniture.OnStorageRequested += storage.Open // 상자 누름 → 보관함 열기
  storage.OnClosed += furniture.CloseStorage   // 창 닫힘 → 닫힌 상자 그림
  sleep.OnPassedOut  += HandleLeaveForHome   // 2시에 쓰러짐 ┐ 집으로 옮기기 전
  revive.OnReviving  += HandleLeaveForHome   // 체력 0 부활  ┘ 탈것 내리기 · 광산 정리
  weather.OnWeatherChanged += farm.HandleWeather // 비 → 바깥 밭 적시기`}</CodeBlock>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>순수 로직 객체는 MonoBehaviour 없이 <code>new</code>로 생성해 주입</NumItem>
            <NumItem n={2}>씬 배선(인스펙터 칸)은 <code>DesignRuleWiring</code> 도구가 채우고, 빈 칸·세이브 목록 누락은 <code>SceneWiringTests</code>가 잡는다 — 에러 없이 기능이 침묵하는 경우를 테스트로</NumItem>
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
                <SubItem>가축은 좌우 2방향뿐인 LivestockAnimator로 같은 이동 코드를 탄다</SubItem>
              </ul>
            </NumItem>
          </ul>

          <h3 style={SUB_TITLE}>인터페이스 대신 추상 클래스를 쓴 경우</h3>
          <Card style={{ marginBottom: 0 }}>
            <p style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.8, opacity: 0.8 }}>
              <code>CraftDeliveryBase</code>는 인터페이스가 아니라 추상 MonoBehaviour입니다.
              인터페이스로 두면 인스펙터에서 <code>MonoBehaviour</code>로 받아야 해 아무 컴포넌트나 들어갈 수 있고,
              오류가 런타임에야 드러납니다. <strong style={{ color: "#f0f0f0" }}>타입 안전을 위해 추상 클래스를 택했습니다.</strong>
            </p>
          </Card>
        </section>

        {/* ── 핵심 시스템 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>핵심 시스템</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            각 도메인은 자기 상태만 소유하고, 도메인 간 통신은 이벤트로 처리합니다.
          </p>
          <SystemGrid />
        </section>

        {/* ── 호감도 · 마일스톤 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>호감도 · 마일스톤 이벤트</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            대화 시스템 위에 관계 레이어를 얹은 것으로, 어떤 각본을 재생할지와
            이벤트 씬으로 넘어갈지를 단계별로 판정합니다.
          </p>
          <Figure
            src={DIAGRAM_AFFINITY}
            alt="호감도 마일스톤 판정 흐름"
            caption="대화 한 번에서 각본 선택과 씬 전환까지의 판정 순서"
          />

          <h3 style={{ ...SUB_TITLE, marginTop: "24px" }}>설계 포인트</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>
              <strong style={{ color: "#f0f0f0" }}>1회성 키를 2단계로 분리</strong> — <code>#script</code>와 <code>#scene</code>
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>각본은 봤지만 씬 조건은 아직 안 채운 상태를 표현할 수 있음</SubItem>
                <SubItem>각본만 다시 재생되거나 씬이 중복 진입하는 문제를 구조적으로 차단</SubItem>
              </ul>
            </NumItem>
            <NumItem n={2}>
              각본은 <strong style={{ color: "#f0f0f0" }}>항상 대화에 이어 재생</strong> (시간 조건 무시)
            </NumItem>
            <NumItem n={3}>
              씬 조건 4종: 없음(즉시) / 시간만 / 장소 / 장소 + 시간
            </NumItem>
            <NumItem n={4}>
              요구 하트가 <strong style={{ color: "#f0f0f0" }}>낮은 것부터</strong> 진행 — 이야기 순서 보장
            </NumItem>
            <NumItem n={5}>
              예외 처리
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>축제 기간에는 각본·씬 모두 보류</SubItem>
                <SubItem>특수 조건 대화가 나오면 씬 전환하지 않음</SubItem>
                <SubItem>AlwaysCondition은 실질 제약이 아니므로 IsRestrictive로 일반 각본 분류</SubItem>
              </ul>
            </NumItem>
          </ul>
        </section>

        {/* ── 광산 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>광산 — 절차 생성</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            층을 미리 만들어 두지 않고 내려갈 때마다 생성합니다.
            생성 방식과 테마를 데이터로 두고, 층 상태는 통째로 저장하지 않습니다.
          </p>

          <h3 style={{ ...SUB_TITLE, marginTop: 0 }}>생성 파이프라인</h3>
          <CodeBlock>{`MineFloorTable(SO)   층 구간별 생성 방식 · 크기 · 타일 테마 · 광석 가중치 · 몬스터 · 조명
       ↓
MineGenerator       셀룰러 오토마타 또는 BSP로 맵 형태 생성
       ↓  후처리     구멍 메우기 → 고립 벽 제거 → 끊긴 벽 잇기
                    → 대각선 틈 메우기 → 테두리 → 연결성 보장
       ↓
MineTilePainter     5개 레이어에 배치(Ground / Floor / Layer_1 / Interaction / Block)
                    광석은 데이터로 등록해 채집 시스템이 그대로 처리
       ↓
MineManager         층 상태 · 층 이동 · 진행도 · 저장`}</CodeBlock>

          <h3 style={SUB_TITLE}>저장 — 시드 + 변경분</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            생성된 맵 전체를 저장하면 층마다 수십 KB가 쌓입니다.
            시드와 <strong style={{ color: "#f0f0f0" }}>플레이어가 바꾼 부분만</strong> 기록해 층당 1~2KB로 맞췄습니다.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>같은 시드로 다시 생성하면 지형은 그대로 복원됨</NumItem>
            <NumItem n={2}>캐낸 광석 · 부순 바위 같은 변경분만 덧씌워 떠날 때 모습 그대로 복원</NumItem>
            <NumItem n={3}>하루가 지나면 <code>OnDayPassed</code>를 받아 전체 재생성 (변경분 폐기)</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>층 이동과 연출</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>
              <code>MineLadder</code> — 클릭으로 층 이동. 위층 사다리는 도착 직후 쿨다운을 둬 재상승 방지
            </NumItem>
            <NumItem n={2}>
              조명은 전역광을 층 테마의 색·밝기로 교체하고 나가면 복원 + <code>MineWallLight</code>로 벽 반짝임
            </NumItem>
            <NumItem n={3}>
              <code>MineElevatorUI</code> — 도달했던 엘리베이터 층으로 바로 이동
            </NumItem>
          </ul>
        </section>

        {/* ── 제작 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>제작 — 지급 방식 교체</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            게임마다 제작 결과를 주는 방식이 다릅니다. 그 차이를 로직에서 떼어내
            컴포넌트 하나만 바꾸면 전환되도록 만들었습니다.
          </p>

          <h3 style={{ ...SUB_TITLE, marginTop: 0 }}>구조</h3>
          <CodeBlock>{`CraftingSystem              해금 관리 · 재료 소모 · 제작 요청
       ↓  delivery
CraftDeliveryBase           추상 MonoBehaviour — 지급 방식의 계약
       ├ StationCraftDelivery    스타듀식: 제작대 가동 후 클릭 수령  ← 현재 사용
       ├ CharacterCraftDelivery  돈스타브식
       └ InstantCraftDelivery    즉시 지급

전환은 CraftingSystem.delivery 하나만 교체`}</CodeBlock>

          <h3 style={SUB_TITLE}>역참조를 만들지 않은 방법</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            Delivery와 Worker는 <code>CraftingSystem</code>을 참조하지 않습니다.
            결과물 지급은 <code>Func&lt;CraftingRecipe, int&gt; give</code> 콜백을 받아 처리해,
            아래 계층이 위 계층을 알지 못한 채로 결과를 돌려줍니다.
          </p>

          <h3 style={SUB_TITLE}>제작대 확장</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>
              <code>CraftingRecipe</code>에 station 개념을 두지 않고, <strong style={{ color: "#f0f0f0" }}>제작대가 자기 레시피 목록을 소유</strong>
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>제작대 종류를 무한히 늘려도 코드 수정 불필요</SubItem>
              </ul>
            </NumItem>
            <NumItem n={2}>
              해금 경로 6가지 — 기본 개방 / 아이템 사용 / 아이템 획득(<code>unlockOnPickup</code>) / 획득 시 여러 개(<code>unlocksOnAcquire</code>) / 이벤트 호출 / 숙련도 레벨(<code>SkillDefinition</code> 보상)
            </NumItem>
            <NumItem n={3}>
              <code>CraftingStationWorker</code>가 가동 연출(프레임 애니)과 완성품 보관·수령을 담당
            </NumItem>
          </ul>
        </section>

        {/* ── 레시피 해금 사슬 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>레시피 해금 사슬 — 광석에서 무기까지</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            던전에서 광석을 얻는 순간부터 무기를 손에 쥐기까지, 해금과 지급을 모두 <strong style={{ color: "#e0e0e0" }}>아이템 획득 이벤트 하나</strong>에 태웠습니다.
          </p>
          <CodeBlock>{`구리 광석 획득 ─ unlocksOnAcquire ─▶ 구리 주괴 레시피 해금 (용광로)
       구리 주괴 획득 ─ unlocksOnAcquire ─▶ 1등급 도구 6종 · 무기 3종 레시피 해금
            대장장이 NPC 대화 "제작 부탁"  또는  모루(무기 작업대)
                 ▼  제작 결과 = ToolItemData
InventorySystem.Add ─ IItemAcquireHandler ─▶ ToolInventory: 도구 칸에 넣거나 낮은 등급을 교체
                                             (가방에는 남지 않음)`}</CodeBlock>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>
              해금 규칙은 코드가 아니라 <code>ItemData.unlocksOnAcquire</code>(레시피 SO 참조 배열) — 광석 · 주괴 애셋이 무엇을 여는지 스스로 안다
            </NumItem>
            <NumItem n={2}>
              “이미 더 좋은 도구를 가졌다”는 판단을 <code>ItemAvailability</code>에 등록 — 제작 · 상점 · 드롭이 이유를 모른 채 똑같이 거른다
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>같은 장치로 외형 파츠 중복 획득, 제철 아닌 씨앗 판매도 막는다</SubItem>
              </ul>
            </NumItem>
            <NumItem n={3}>
              대장장이 제작은 새 제작 로직 없이 기존 <code>CraftingStationPoint</code>를 NPC가 품게 하고,
              대화 종류 <code>Craft</code>가 끝나면 <code>OnCraftRequested</code> → <code>NpcCraftService</code>가 그 제작대를 연다
            </NumItem>
          </ul>
        </section>

        {/* ── 가구 배치 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>가구 배치 — 타일맵 위의 모델과 뷰</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            애셋 팩의 가구 시트 28장(약 1,600 스프라이트)을 규칙 스크립트로 묶어 가구 1,173종을 만들고,
            새 저장 · 렌더링 경로를 만들지 않고 기존 타일 데이터 저장소에 태웠습니다.
          </p>
          <CodeBlock>{`FurnitureData (ItemData)     방향[] × 상태[] — 상태 = 프레임 · 겹침 애니 · 빛 여부
       ▼  놓기
TileDataStore                FurnitureTileData(앵커) + FurniturePartData(나머지 칸, 통행·클릭만)
       ▼  RefreshView
Interactable Tilemap         런타임 FurnitureTile(정지 / 애니, 발자국 가운데로 오프셋)
FurnitureSystem              Light2D 광원 · 불꽃 겹침 스프라이트 · 앉기/눕기 자세
SaveSystem                   ObjectKind.Furniture (앵커만) → 불러온 뒤 발자국 · 광원 재구성`}</CodeBlock>

          <h3 style={SUB_TITLE}>“그림이 있을 때만 상호작용”</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>토글 — 벽난로(불꽃 4프레임 겹침 + 흔들리는 광원), 커튼 · 옷장 · 냉장고(열림/닫힘 그림), 모니터 · 트리(켜짐 그림 + 빛)</NumItem>
            <NumItem n={2}>앉기 · 눕기 — 가구가 아니라 <strong style={{ color: "#f0f0f0" }}>캐릭터의 동작</strong>. 캐릭터 시트의 앉기 · 수면 폴더를 파츠 애니메이션에 추가해 재생</NumItem>
            <NumItem n={3}>켜고 끌 그림이 없는 램프 · 촛대는 상호작용 없이 늘 빛나는 광원</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>부딪힌 문제</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>
              밤이 화면 전체를 덮는 UI 오버레이라 광원이 보이지 않음 → 밤 표현을 <strong style={{ color: "#f0f0f0" }}>전역 Light2D의 밝기 · 색</strong>으로 전환
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>자기 조명을 쓰는 광산과 충돌하지 않도록 AmbientLightOverride(Push/Pop)로 소유권 분리</SubItem>
              </ul>
            </NumItem>
            <NumItem n={2}>
              불꽃을 같은 칸의 다른 타일맵에 그리면 정렬이 비겨 본체 뒤로 숨음 → 겹침만 한 단계 앞 순서의 스프라이트로 분리
            </NumItem>
            <NumItem n={3}>
              불꽃 높이는 후보 값 4개를 전 벽난로에 합성해 비교한 뒤 결정(5px에서 장작 위에 앉음)
            </NumItem>
          </ul>
        </section>

        {/* ── 숙련도 · 가공 기계 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>숙련도 · 가공 기계 — 기존 경로에 얹기</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            새 기능을 넣으면서 기존 도메인을 고치지 않는 것을 목표로 했습니다.
            숙련도는 <strong style={{ color: "#e0e0e0" }}>이미 있는 이벤트를 구독만</strong> 하고, 가공 기계는 <strong style={{ color: "#e0e0e0" }}>가구가 쓰는 타일 저장 경로</strong>를 그대로 탑니다.
          </p>
          <h3 style={{ ...SUB_TITLE, marginTop: 0 }}>숙련도 — 도메인은 숙련도를 모른다</h3>
          <CodeBlock>{`FarmManager.OnHarvested            ─┐
LivestockController.OnAnyHarvested ─┤
MachineSystem.OnCollected          ─┼─▶ SkillPerks (규칙) ─▶ SkillSystem.AddXp (상태 · 저장)
FishingSystem.OnFinished           ─┤                               │ OnLevelUp
MonsterHealth.OnAnyDied            ─┘                               ▼
                       SkillPerks: CraftingSystem.UnlockMany(SkillDefinition 의 레벨별 레시피)
                                   CombatSystem.SkillAttackBonus · FishingSystem.SkillWidthBonus
                       UI: SkillWindowUI(K) · SkillNotifier — 구독만`}</CodeBlock>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>상태(<code>SkillSystem</code> — 경험치 · 레벨 · 저장)와 규칙(<code>SkillPerks</code> — 무엇이 몇 점 · 보너스 · 해금)을 분리</NumItem>
            <NumItem n={2}>보너스는 도메인에 <strong style={{ color: "#f0f0f0" }}>값 하나만</strong> 열어 두고(공격력 · 낚시 구간) 숙련도가 채움 — 도메인 쪽 분기 없음</NumItem>
            <NumItem n={3}>기계 레시피는 처음엔 잠겨 있고, 해금은 기존 <code>CraftingSystem</code>의 해금 경로를 그대로 사용</NumItem>
          </ul>
          <h3 style={SUB_TITLE}>가공 기계 — 가구와 같은 모델 / 뷰</h3>
          <CodeBlock>{`MachineData (ItemData)     공정[] = 재료 · 개수 → 결과 · 개수 · 시간  /  자동 산출(벌통) · 겨울 쉼
       ▼  놓기(바깥 빈칸만)
TileDataStore              MachineTileData(앵커: 공정 · 남은 시간 · 완성) + MachinePartData(나머지 칸)
       ▼  TimeSystem.OnTimeChanged
MachineSystem              시간만큼 진행 → 완성 아이콘 · 벌통 자동 재시작
SaveSystem                 ObjectKind.Machine (앵커만) → 불러온 뒤 RebuildAfterLoad`}</CodeBlock>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, margin: 0 }}>
            점검에서 4대(작업 중 · 완성 · 대기 · 2칸)를 저장했다가 불러와 남은 시간 · 앵커 · 완성 아이콘이 그대로인 것을 실행으로 확인했습니다.
          </p>
        </section>

        {/* ── 데이터 흐름 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>데이터 흐름</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            ex) 플레이어가 나무를 도끼로 클릭했을 때, 어떤 시스템이 어떤 순서로 이어지는지.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>
              <code>InteractionManager</code>가 클릭 감지 → NPC · 가판대 · 가구 · 기계 · 곤충 라우팅 시도(전부 miss) → 셀 라우팅
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
                <SubItem>MineManager — 광산이면 변경분 기록 + 사다리 확률 판정</SubItem>
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
            현재 구현체는 21종(씬 인스턴스 24개)입니다. 가구 · 가공 기계처럼 여러 칸을 차지하는 것은 앵커 칸만 저장하고,
            불러온 뒤 <code>RebuildAfterLoad</code>로 나머지 칸과 조명 · 아이콘을 다시 만듭니다.
          </p>
          <Figure
            src={DIAGRAM_SAVE}
            alt="세이브 / 로드 분기 다이어그램"
            caption="새 게임과 로드가 배타적으로 갈라지는 구조"
          />

          <h3 style={{ ...SUB_TITLE, marginTop: "24px" }}>계약</h3>
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

          <h3 style={SUB_TITLE}>불러오기 — 맵과 세이브 맞추기</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            맵에 칠한 오브젝트(나무 · 바위 · 낚시터 · 원래 놓인 가구)는 새 게임 때 스캔해 칸 데이터가 됩니다.
            불러올 때는 세이브가 이기지만, 저장하지 않는 것과 세이브보다 나중에 생긴 것은 맵에서 다시 가져와야 합니다.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>복원이 칸 그림을 덮기 전에 맵에서 <strong style={{ color: "#f0f0f0" }}>먼저 모은다</strong> — 고정 가구 · 저장 안 하는 지형(낚시터)</NumItem>
            <NumItem n={2}>복원 뒤 낚시터를 다시 깔고, 옛 세이브에 없던 고정 가구는 발자국이 비어 있을 때만 채운다</NumItem>
            <NumItem n={3}>
              상태가 있는 것(벤 나무 · 캔 바위)은 되살리지 않는다 — 새 종류를 더할 때 "상태가 있나"를 먼저 정하는 규칙
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>점검에서 이 단계가 문서에만 있고 코드에서 빠져 있던 것을 발견 — 불러온 게임에서 낚시터가 0개였다(새 게임 8개). 복구 후 8개 확인</SubItem>
              </ul>
            </NumItem>
          </ul>

          <h3 style={SUB_TITLE}>NPC 저장 — 위임 방식</h3>
          <CodeBlock>{`NpcSaveManager
  └ NpcController.CaptureState()
       ├ NpcShop.CaptureInto()      // 상점 재고는 상점이 직렬화
       ├ NpcAffinity                // 호감도 · 마일스톤 진행은 호감도가 직렬화
       ├ NpcDialogueSet             // 대화 횟수는 대화가 직렬화
       └ NpcController              // 스텝 상태 · 위치 · VisitStall`}</CodeBlock>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, margin: 0 }}>
            각 컴포넌트가 자기 상태만 직렬화하고 NpcController는 조합만 합니다.
            호감도를 나중에 붙였을 때도 저장 코드를 한 곳에서 고칠 필요가 없었습니다.
          </p>
        </section>

        {/* ── 참조 정책 · 최적화 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>참조 정책과 최적화</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            참조는 그 자체로 메모리를 쓰고 수명 관리를 어렵게 합니다. 순환 참조를 만들지 않는 것을
            규칙으로 두고, 역방향이 필요하면 이벤트나 콜백으로 풀었습니다.
          </p>

          <h3 style={{ ...SUB_TITLE, marginTop: 0 }}>남겨둔 순환 참조</h3>
          <Card>
            <p style={{ margin: "0 0 8px", fontSize: "13.5px", fontWeight: 700, color: "#f0f0f0", fontFamily: "var(--font-geist-mono), monospace" }}>
              ItemData ↔ CraftingRecipe
            </p>
            <p style={{ margin: 0, fontSize: "13px", opacity: 0.7, lineHeight: 1.8 }}>
              레시피가 결과 아이템을, 두루마리 아이템이 레시피를 가리킵니다.
              ScriptableObject 간 데이터 관계라 런타임 생성·파괴가 없고 GUID로 직렬화되며,
              <strong style={{ color: "#f0f0f0" }}> 실제 관계를 그대로 표현한 것이라 끊지 않았습니다.</strong>{" "}
              규칙을 기계적으로 적용하기보다 이유가 있으면 남기는 쪽을 택했습니다.
            </p>
          </Card>

          <h3 style={SUB_TITLE}>중복 제거 — 공통 유틸로 모은 것</h3>
          <div style={{ overflowX: "auto", marginBottom: "16px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12.5px", minWidth: "520px" }}>
              <thead>
                <tr>
                  {["유틸", "역할", "쓰는 곳"].map(h => (
                    <th key={h} style={{
                      textAlign: "left", padding: "10px 12px",
                      borderBottom: `1px solid ${TEAL}40`,
                      color: TEAL, fontWeight: 700, fontSize: "12px", whiteSpace: "nowrap",
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { n: "SpriteFramePlayer", r: "스프라이트 프레임 진행 (1회 / 반복)", u: "FrameEffect, DroppedItem, CraftingStationWorker" },
                  { n: "FadeUtil", r: "알파 보간 코루틴 (적용 대상은 델리게이트)", u: "ScreenFader, SpriteFader, SystemMessage" },
                  { n: "WalkabilityService", r: "인접 · 최단 접근 가능 칸 찾기", u: "NpcController, MonsterController, InteractionManager" },
                  { n: "SpaceScanner", r: "flood fill로 열린 공간 수집", u: "NpcController, MonsterController" },
                  { n: "NpcRegistry", r: "씬의 NPC 목록 (등록 / 해제)", u: "NpcSaveManager, PlaceMilestoneManager" },
                  { n: "OutdoorArea", r: "바깥 맵 범위 — 7곳에 흩어져 있던 같은 값을 하나로", u: "MachineSystem, InsectSystem, SeasonVisualManager, CameraFollow, Rain · Snow · Umbrella" },
                ].map(row => (
                  <tr key={row.n}>
                    <td style={{
                      padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)",
                      fontFamily: "var(--font-geist-mono), monospace", color: GREEN,
                      whiteSpace: "nowrap", verticalAlign: "top",
                    }}>{row.n}</td>
                    <td style={{
                      padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)",
                      opacity: 0.8, verticalAlign: "top",
                    }}>{row.r}</td>
                    <td style={{
                      padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)",
                      opacity: 0.55, lineHeight: 1.6, verticalAlign: "top",
                    }}>{row.u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "8px" }}>
            <code>NpcRegistry</code>는 NPC가 <code>OnEnable</code>/<code>OnDisable</code>에서 스스로 등록·해제합니다.
            매번 <code>FindObjectsByType</code>으로 씬을 훑던 것을 없앤 것으로,
            런타임 생성·삭제에도 목록이 정확합니다.
          </p>

          <h3 style={SUB_TITLE}>성능 점검 결과</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "12px" }}>
            {[
              { t: "매 프레임 GC 할당 없음", d: "Update 안에서 new / ToList 하는 곳 없음", ok: true },
              { t: "풀링 적용", d: "드롭 아이템 · 타격 이펙트 · 연출 이펙트 · FloatingIcon", ok: true },
              { t: "NPC 탐색 개선", d: "FindObjectsByType 제거 → NpcRegistry 등록 방식", ok: true },
              { t: "광산 저장 용량", d: "시드 + 변경분 방식으로 층당 1~2KB", ok: true },
              { t: "Projectile 풀링 미적용", d: "풀링이 필요한 규모의 object 생성 및 재활용이 아직 없어 구현 보류중", ok: false },
            ].map(p => (
              <div key={p.t} style={{
                background: p.ok ? "rgba(74,222,128,0.06)" : "rgba(255,255,255,0.03)",
                border: p.ok ? `1px solid ${GREEN}30` : "1px solid rgba(255,255,255,0.09)",
                borderRadius: "10px", padding: "14px 16px",
              }}>
                <p style={{
                  margin: "0 0 6px", fontSize: "13px", fontWeight: 700,
                  color: p.ok ? GREEN : "#94a3b8",
                  display: "flex", alignItems: "flex-start", gap: "7px", lineHeight: 1.5,
                }}>
                  <span style={{ flexShrink: 0 }}>{p.ok ? "✓" : "—"}</span>{p.t}
                </p>
                <p style={{ margin: 0, fontSize: "12.5px", opacity: 0.6, lineHeight: 1.65 }}>{p.d}</p>
              </div>
            ))}
          </div>
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
            <NumItem n={1}>상점 재고 → <code>NpcShop</code>, 호감도 → <code>NpcAffinity</code>로 분리 (자기 상태 직렬화까지 함께 이동)</NumItem>
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
              "코드 순환 참조 없음",
              "로직 → UI 참조 없음",
              "인터페이스 기반 결합",
              "이벤트 · 콜백 역결합",
              "매 프레임 GC 할당 없음",
              "런타임 Find 탐색 없음",
              "세이브 대상 24칸 누락 · 중복 키 0",
              "저장 → 불러오기 실행 확인",
              "문서의 클래스 · 메서드 이름 = 코드",
              "EditMode 테스트 39개 통과",
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

        {/* ── 맵 제작 파이프라인 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>맵 제작 — 텍스트 그리드 베이커</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            바깥 맵 · 실내 · 축제장 16개를 손으로 칠하지 않고 <strong style={{ color: "#e0e0e0" }}>글자 격자로 쓰고 굽습니다.</strong>
            파이썬 스크립트가 격자를 만들고, 에디터 베이커가 레이어마다 타일맵에 칠합니다.
          </p>
          <CodeBlock>{`생성 스크립트(*_map.py)  장면을 글자 격자로 — 레이어마다 한 장(바닥 · 벽/막힘 · 장식 · 러그 · 상호작용)
       ▼
MapDefinition (SO)       레이어 × 텍스트 격자 + 원점      MapLegend (SO)  글자 → 타일 / 프리팹
       ▼  MapValidator    굽기 전 검사 — 범례 누락 · 범례에 없는 글자 · 빈 레이어
MapBakeTarget            레이어 ↔ 씬의 Tilemap / 부모 오브젝트
       ▼
MapBaker                 정의 범위를 지우고 다시 칠함 — 몇 번을 돌려도 같은 결과(런타임에서도 호출 가능)
MapCapture               역방향: 손으로 칠한 씬 → 텍스트 격자`}</CodeBlock>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>격자가 텍스트라 바뀐 곳이 비교로 보이고, 배치 규칙(나무 간격 · 길 잇기 · 건물 발자국)을 스크립트로 적용할 수 있다</NumItem>
            <NumItem n={2}><code>SiblingRuleTile</code> — 지정한 형제 타일도 같은 타일로 보는 RuleTile. 흙길이 밭으로 이어지는 끝에 풀 테두리를 그리지 않는다</NumItem>
            <NumItem n={3}>실내는 바깥과 먼 좌표에 굽고 워프 한 쌍으로만 잇는다 — 공간 경계가 좌표 분리로 자연히 생긴다</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>배치 규칙 — 꾸미기 전에 가른다</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            플레이 테스트에서 "소파에 앉을 수 없다", "가축이 벽 위에 올라탄다", "러그 밑에 캐릭터가 묻힌다"는 지적이 한꺼번에 나왔습니다.
            원인은 하나 — 놓는 물건을 <strong style={{ color: "#f0f0f0" }}>상호작용해야 하는지, 막아야 하는지, 바닥에 깔리는지 가르지 않고</strong> 한 장식 층에 그렸던 것입니다.
            규칙 스크립트로 모든 실내를 다시 가르고, 막힘은 손으로 찍지 않고 계산하게 했습니다.
          </p>
          <div style={{ overflowX: "auto", marginBottom: "16px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12.5px", minWidth: "520px" }}>
              <thead>
                <tr>
                  {["물건", "타일맵", "막힘"].map(h => (
                    <th key={h} style={{
                      textAlign: "left", padding: "10px 12px",
                      borderBottom: `1px solid ${TEAL}40`,
                      color: TEAL, fontWeight: 700, fontSize: "12px", whiteSpace: "nowrap",
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { n: "쓰임 있는 가구(앉기 · 켜기 · 보관 · 탁자 · 조명)", r: "Interactable — 놓은 가구와 같은 칸 데이터(고정 가구)", u: "가구 데이터의 발자국" },
                  { n: "서 있는 물건(상자 · 통 · 여물통 · 대장간 기물)", r: "Decor(Y 정렬)", u: "그림이 반 칸 이상 걸친 칸을 Block 에" },
                  { n: "러그 · 돗자리", r: "GroundDecor(캐릭터 밑)", u: "없음" },
                  { n: "벽걸이(액자 · 시계)", r: "Decor", u: "없음(벽 줄)" },
                ].map(row => (
                  <tr key={row.n}>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", color: GREEN, verticalAlign: "top" }}>{row.n}</td>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", opacity: 0.8, verticalAlign: "top" }}>{row.r}</td>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", opacity: 0.55, lineHeight: 1.6, verticalAlign: "top" }}>{row.u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>러그를 장식 층에 두면 같은 정렬 레이어에서 Y 로 앞뒤가 갈려, 러그 위쪽 칸에 선 캐릭터가 러그 뒤에 그려졌다 → 바닥 층으로</NumItem>
            <NumItem n={2}>
              가축의 발(위치)은 칸 밑변인데 동물 그림의 기준점이 가운데라 몸 절반이 아래 칸으로 — 맨 아랫줄 가축이 벽 위에 선 것처럼 보였다
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>원본 애셋은 그대로 두고 실행 중에 기준점만 내린 사본으로 그림(FootSprite) — 프레임끼리 맞춘 발 높이는 유지</SubItem>
              </ul>
            </NumItem>
            <NumItem n={3}>길찾기 없이 직선으로 움직이는 반려동물 · 기는 곤충은 가는 선이 막힌 칸을 지나지 않는 목적지만 고른다</NumItem>
          </ul>
          <Figure
            src={WALK_AUDIT}
            alt="통행 점검 그림"
            caption="통행 점검 도구 — 실제 통행 판정으로 막힌 칸은 빨간 X, 걷는 칸은 초록 점. 그림과 막힘이 어긋난 칸을 눈으로 찾는다"
          />
        </section>

        {/* ── 에디터 도구 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>에디터 도구 — 설정을 코드로</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            씬 · 애셋을 손으로 고치지 않고 에디터 도구(메뉴 80개)로 세웁니다.
            규칙은 하나 — <strong style={{ color: "#e0e0e0" }}>몇 번을 다시 돌려도 같은 결과</strong>. 그래서 도구를 고치고 다시 돌리는 것이 수정 방법이 됩니다.
          </p>
          <div style={{ overflowX: "auto", marginBottom: "16px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12.5px", minWidth: "520px" }}>
              <thead>
                <tr>
                  {["도구", "하는 일"].map(h => (
                    <th key={h} style={{
                      textAlign: "left", padding: "10px 12px",
                      borderBottom: `1px solid ${TEAL}40`,
                      color: TEAL, fontWeight: 700, fontSize: "12px", whiteSpace: "nowrap",
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { n: "설정 도구 32개(*Setup)", u: "건물 · NPC · 가축 · 축제 Scene · 보관함 등 기능 하나를 세우는 전 과정 — 애셋 생성 → 씬 오브젝트 → 배선 → 저장" },
                  { n: "DesignRuleWiring", u: "세이브 목록 · 주입 칸 · 창 목록을 규칙대로 채움 — 빈 칸은 테스트(SceneWiringTests)가 잡는다" },
                  { n: "스프라이트 재슬라이스", u: "애셋 팩 시트를 규칙 스크립트로 다시 자르고 기준점을 밑변으로 통일 — \"물체의 발은 자기 칸의 밑변에\"" },
                  { n: "맵 베이커 · 캡처 · 검사", u: "텍스트 격자 ↔ 타일맵, 실내 배치 규칙 적용, 통행 점검 그림" },
                  { n: "빌드 측정", u: "빌드 크기 · 들어간 애셋 · 실행 메모리 기록 — 701MB → 358.5MB(Resources 정리) → 124.3MB(Addressables)" },
                  { n: "콘텐츠 빌드 · 업로드", u: "새 출시 / 콘텐츠 업데이트 빌드, CDN 업로드, 테스트용 로컬 콘텐츠 서버" },
                ].map(row => (
                  <tr key={row.n}>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: "var(--font-geist-mono), monospace", color: GREEN, whiteSpace: "nowrap", verticalAlign: "top" }}>{row.n}</td>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", opacity: 0.7, lineHeight: 1.6, verticalAlign: "top" }}>{row.u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Addressables ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>Addressables — 원격 콘텐츠 배포</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            처음엔 빌드 크기를 줄이려고 Scene 을 번들로 나눴고(701MB → 124.3MB), 이어서 서버에서 콘텐츠를 받는 구조로 넓혔습니다.
            축제 Scene 은 <strong style={{ color: "#e0e0e0" }}>앱을 다시 내지 않고</strong> 서버의 번들만 바꿔 업데이트합니다.
          </p>
          <CodeBlock>{`앱 안 (로컬 · 출시 후 고정)    Bootstrap · InGame · 이벤트 Scene · 공유 애셋 4,745개
서버   (원격 · 출시 후 교체)    축제 Scene 4 · 콘텐츠 버전                    라벨 remote

Bootstrap ─ ContentUpdater: 카탈로그 확인 → 바뀐 번들만 받기(진행 표시) → 콘텐츠 버전 → InGame
                                       ▲ https
빌드 결과(ServerData) ─ aws s3 ─▶ S3(퍼블릭 차단) ─▶ CloudFront(OAC)`}</CodeBlock>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>
              번들은 이름에 해시가 붙어 바뀌지 않으므로 1년 캐시, 카탈로그는 같은 이름으로 덮어쓰므로 캐시 안 함 — CDN 캐시를 비우지 않아도 업데이트가 바로 보인다
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>번들을 먼저, 카탈로그를 마지막에 올린다 — 카탈로그가 아직 없는 번들을 가리키는 순간을 만들지 않는다</SubItem>
              </ul>
            </NumItem>
            <NumItem n={2}>
              콘텐츠 업데이트 빌드는 나간 앱을 기준으로 바뀐 것만 — 콘텐츠 버전을 1 → 2 로 올리자 번들 하나만 새로 생겼고, 다시 켰을 때 1,217바이트만 받았다
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>앱에 든 애셋이 바뀌면 업데이트 빌드를 멈춘다 — 그건 앱을 새로 내야 하는 변경</SubItem>
              </ul>
            </NumItem>
            <NumItem n={3}>
              서버에 못 붙는 경우를 먼저 설계 — 오프라인 첫 실행은 안내 후 시작, 못 받은 축제에 들어가려 하면 제자리에서 안내
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>점검에서 실패 뒤 축제 쪽 "떠나는 중" 표시가 남아 다시 못 들어가던 것을 찾아, 조정자(GameFlow)가 되돌리게 함</SubItem>
              </ul>
            </NumItem>
            <NumItem n={4}>사고 방지 — 로컬 테스트용 주소로 빌드한 카탈로그는 업로드를 거절, 출시 빌드인데 https 가 아니면 앱 빌드를 멈춘다</NumItem>
            <NumItem n={5}>
              함정 — Scene 들을 한 번들에 묶었더니 한 Scene 이 내려갈 때 공유 애셋까지 내려가 다음 Scene 의 외형 파츠가 사라졌다
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>Scene 마다 따로 + 공유 애셋 그룹. 에디터에서 바로 플레이하면 재현되지 않아 "빌드된 번들로 시작"하는 모드로만 보인다</SubItem>
              </ul>
            </NumItem>
          </ul>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, margin: 0 }}>
            확인: 개발용 실행 파일을 캐시 없이 로컬 서버 없이 실행 → CloudFront 에서 2.06MB 를 받고 게임 시작.
          </p>
        </section>

        {/* ── 자동 테스트 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>자동 테스트 — 조용히 빠지는 것을 잡는다</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            이 구조에서 가장 흔한 실패는 예외가 아니라 <strong style={{ color: "#e0e0e0" }}>아무 일도 일어나지 않는 것</strong>입니다.
            인스펙터 칸 하나, SO 필드 하나가 비면 에러 없이 기능이 사라집니다. 그 지점을 EditMode 테스트 39개로 고정했습니다.
          </p>
          <div style={{ overflowX: "auto", marginBottom: "16px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12.5px", minWidth: "520px" }}>
              <thead>
                <tr>
                  {["층", "무엇을", "예"].map(h => (
                    <th key={h} style={{
                      textAlign: "left", padding: "10px 12px",
                      borderBottom: `1px solid ${TEAL}40`,
                      color: TEAL, fontWeight: 700, fontSize: "12px", whiteSpace: "nowrap",
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { n: "규칙 (14)", r: "씬 없이 계산만", u: "숙련도 곡선 · 기계 공정(대기 → 작업 → 완성) · 바깥 범위 경계 · 가축 암수 산출" },
                  { n: "저장 계약 (4)", r: "Capture → Restore 왕복", u: "지갑 · 숙련도, 옛 세이브(항목 수가 적은 것) 허용, 고정 SaveKey 중복 없음" },
                  { n: "데이터 무결성 (12)", r: "SO · 설정 애셋 전수 검사", u: "도구 동작 hitFrame · 모든 아이템이 레지스트리에 있는가 · 이름/id 중복 · 판매가 = 새끼 값 × 1.5 · Addressables 원격/로컬 그룹 설정" },
                  { n: "씬 배선 (9)", r: "메인 Scene 의 인스펙터 칸 · 타일맵", u: "세이브 목록 누락 · 키 중복 · 순서, GameManager 주입 칸, 새 시스템 칸, 빠진 스크립트, 상호작용 타일맵엔 상호작용하는 것만 · Decor 에 러그나 쓸 수 있는 가구가 그림으로만 있지 않은가" },
                ].map(row => (
                  <tr key={row.n}>
                    <td style={{
                      padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)",
                      color: GREEN, fontWeight: 700, whiteSpace: "nowrap", verticalAlign: "top",
                    }}>{row.n}</td>
                    <td style={{
                      padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)",
                      opacity: 0.8, verticalAlign: "top",
                    }}>{row.r}</td>
                    <td style={{
                      padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)",
                      opacity: 0.55, lineHeight: 1.6, verticalAlign: "top",
                    }}>{row.u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 style={SUB_TITLE}>처음 돌렸을 때 찾은 것</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 12px" }}>
            <NumItem n={1}>
              낫 동작의 <code>hitFrame</code>이 비어 있어 타격 이벤트가 오지 않았음 — <strong style={{ color: "#f0f0f0" }}>낫으로 풀을 벨 수 없던 버그</strong>
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>모션은 정상으로 나오니 눈으로는 알아차리기 어려운 종류</SubItem>
              </ul>
            </NumItem>
            <NumItem n={2}>
              1단계 재료(구리 광석 · 구리 주괴)가 저장용 레지스트리에 없어 <strong style={{ color: "#f0f0f0" }}>가방에 든 채 저장하면 불러올 때 사라지던 버그</strong>
            </NumItem>
            <NumItem n={3}>
              타일맵 구분 테스트를 더하자마자, 씬에 직접 칠한 실내의 옷장 · 벽난로가 <strong style={{ color: "#f0f0f0" }}>그림으로만 있어 열 수 없던 것</strong>을 잡음
            </NumItem>
          </ul>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, margin: 0 }}>
            스크립트가 한 어셈블리에 모여 있어 asmdef 로 쪼개는 대신 에디터 어셈블리에 테스트를 두었습니다.
            새 시스템 · SO 필드 · 인스펙터 칸을 더하면 해당 층 테스트에 한 줄을 더하는 것을 규칙으로 했습니다.
          </p>
        </section>

        {/* ── 로드맵 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>개발 로드맵</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            스타듀밸리의 핵심 활동을 기준으로 진행 상황과 남은 순서를 정리했습니다.
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
