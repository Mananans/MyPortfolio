"use client";

import Link from "next/link";

// ─────────────────────────────────────────────
//  이미지 경로 설정
//  📁 public/images/farmlife-2026/
//      ├── hero.png       ← 마을 풍경 1920x720 (UI 없이 월드만 렌더, 2026-09-27)
//      ├── gallery-1.png  ← 경작 — 물 주기 (게임 화면 480x720 을 2배로 캡처, 2026-09-27)
//      ├── gallery-2.png  ← NPC 대화 — 로저 (동일)
//      ├── gallery-3.png  ← 가판대 판매 창 (동일)
//      ├── gallery-4.png  ← 광산 전투 — 검 휘두르기 (동일)
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
//      ├── monsters.png         ← 광산 몬스터 31종 (약한 것 → 강한 것, 발이 칸 밑변에 닿게 줄 세운 렌더, 2026-09-29)
//      ├── monsters-ranged.png  ← 원거리 공격 4종 (화살 · 폭탄 · 가시 침 · 독 가시, 광산 30층 실행 캡처)
//      ├── armor-inventory.png  ← 인벤토리 — 초상 아래 방어구 칸(금 투구 · 갑옷 착용), 가방의 방어구, 이름 · 성별 (2026-09-29)
//      ├── localization-settings.png ← 설정 창 한국어 | 영어 나란히 — 언어 버튼 · 키 바꾸기 (2026-09-30)
//      ├── dev-console.png      ← 개발자 콘솔 — help 목록 · give · 오타 추천 (2026-10-02)
//      └── diagram-affinity.png ← 호감도 마일스톤 판정 다이어그램
//  📁 public/images/thumb/farmlife-2026.png  ← 메인 카드 썸네일
// ─────────────────────────────────────────────
const HERO_IMAGE = "/images/farmlife-2026/hero.png";

const DIAGRAM_LAYER = "/images/farmlife-2026/diagram-layer.png";
const DIAGRAM_SAVE = "/images/farmlife-2026/diagram-save.png";
const DIAGRAM_AFFINITY = "/images/farmlife-2026/diagram-affinity.png";
const WALK_AUDIT = "/images/farmlife-2026/walk-audit.png";
const MONSTERS = "/images/farmlife-2026/monsters.png";
const MONSTERS_RANGED = "/images/farmlife-2026/monsters-ranged.png";
const ARMOR_INVENTORY = "/images/farmlife-2026/armor-inventory.png";
const LOCALIZATION_SETTINGS = "/images/farmlife-2026/localization-settings.png";
const DEV_CONSOLE = "/images/farmlife-2026/dev-console.png";

const GALLERY = [
  { src: "/images/farmlife-2026/gallery-1.png", label: "경작 — 물 주기", tall: true },
  { src: "/images/farmlife-2026/gallery-2.png", label: "NPC 대화", tall: true },
  { src: "/images/farmlife-2026/gallery-3.png", label: "가판대 — 판매 가격 정하기", tall: true },
  { src: "/images/farmlife-2026/gallery-4.png", label: "광산 전투", tall: true },
  { src: "/images/farmlife-2026/gallery-5.png", label: "밤의 집 — 배치한 가구 · 벽난로 · 촛불 조명" },
  { src: "/images/farmlife-2026/gallery-6.png", label: "외양간 — 소 · 염소 · 양 · 돼지 · 타조" },
  { src: "/images/farmlife-2026/gallery-7.png", label: "대장간" },
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
  { name: "IPersistentSystem", contract: "SaveKey / InitializeNew / Capture / Restore", impl: "구현체 23종(씬 인스턴스 26개) — Inventory, ToolInventory, QuickSlot, Wallet, Time, PlayerHealth, Stall, PlayerPositionSaver, NpcSaveManager, MineManager, CraftingSystem, ItemCollectionBook, BundleBook, LivestockSaveManager, AvatarCollectionBook, PlayerAppearance, MountSystem, SkillSystem, PetSystem, WeatherSystem, StorageSystem, ArmorSystem, PlayerProfile" },
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
      "광산 몬스터 31종 — 깊을수록 강한 몬스터, 근접 · 원거리(화살 · 폭탄 · 침 · 독 가시) · 붙박이",
      "MonsterData(SO)가 스탯 · 드롭 · 그림(프리팹) · 투사체를 모두 가리킨다 — 종류 추가는 SO + 프리팹만",
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
      "보유 리소스에 따른 상호작용 — 벽난로 불꽃 · 커튼 · 옷장 · 냉장고 토글, 소파 앉기, 침대 수면",
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
      "가공 기계 8종 · 숙련도 5종", "곤충 채집 · 반려동물 · 비", "다 자란 가축 판매", "EditMode 87 · 자동 플레이 테스트 11",
      "플레이어 자택 · 플레이어 상점 · 보관함", "실내 배치 규칙(상호작용 / 막힘 / 바닥 깔개) · 통행 점검 도구",
      "Addressables 원격 콘텐츠 배포 — S3 + CloudFront, 콘텐츠 업데이트 빌드 · 업로드 도구",
      "광산 몬스터 31종 · 원거리 공격 4종 · 적 그림 기준점을 발로",
      "어셈블리 4개로 분리(UI 역참조를 컴파일 에러로) · 플레이 진입 30초 → 14초 · 빌드 파이프라인 · CDN 콘텐츠 재배포",
      "자동 플레이 테스트(버그 3개 발견) · 세이브 버전 관리 · 성능 계측(층 전환 353 → 14ms, 전투 GC −80%)",
      "방어구 40종(무기와 같은 10단계) · 받는 피해 비율 계산 · 캐릭터 이름 · 성별 저장",
      "개발 도구 — F8 버그 리포트 · 입력 녹화와 재생 · 개발자 콘솔 · 성능 예산 테스트 · 프로젝트 규칙을 컴파일 에러로 만드는 코드 분석기",
      "현업 파이프라인 — 기획 데이터 표(CSV → 애셋) · 스프라이트 아틀라스(인벤토리 화면을 그리는 명령 약 3분의 1 감소) · 새 Input System + 키 바꾸기 · 한국어/영어 현지화 2,689줄 · 세이브 암호화 + 위변조 검사",
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
              "구성: 농사 · 채집 · 전투 · NPC · 호감도 · 광산 · 제작 · 낚시 · 가축 · 가구 · 보관함 · 축제 · 탈것 · 가공 · 숙련도 · 곤충 · 반려동물 · 날씨 등 도메인 시스템 + IPersistentSystem 23종 (런타임 스크립트 304개 + 에디터 72개 + 테스트 16개)",
              "맵: 바깥 · 실내 · 축제장 16개를 텍스트 그리드로 쓰고 에디터 베이커로 굽는다",
              "배포: Addressables — 축제 Scene 을 원격 콘텐츠로(AWS S3 + CloudFront), 앱 재배포 없이 콘텐츠 업데이트",
              "검증: 코드 분석기 3규칙(컴파일 에러) + EditMode 테스트 119개 (규칙 · 저장 계약 · 세이브 변환 · 데이터 무결성 · 씬 배선 · 데이터 표 · 입력 · 게임패드 · 현지화 · 유사 번역 · 글자 넘침 · 세이브 봉투 · 개발 도구 · 예외 수집 · 원격 설정 · 릴리스) + 자동 플레이 테스트 26개(메모리 누수 포함) + 밤마다 장시간 자동 플레이 + 커밋마다 CI(GitHub Actions) + 태그로 릴리스 자동화 + 모든 빌드 직전 자동 검사 + 성능 예산 + 코드 커버리지 줄 52.7%",
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
          <h2 style={SECTION_TITLE}>GameManager 의존성 주입</h2>
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
          <h2 style={SECTION_TITLE}>광산 절차 생성</h2>
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

          <h3 style={SUB_TITLE}>시드와 변경분 저장</h3>
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

        {/* ── 광산 몬스터 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>광산 몬스터</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            애셋 팩에 있는 몬스터 그림 31종을 모두 광산에 넣었습니다. 깊이 내려갈수록 더 흉악해 보이는 몬스터가 더 강한 능력치로 나옵니다.
            몬스터를 늘리는 동안 광산 · 스포너 코드는 종류를 몰라도 되게 만드는 것이 목표였습니다.
          </p>
          <img src={MONSTERS} alt="광산 몬스터 31종" style={{ width: "100%", borderRadius: "8px", border: "1px solid rgba(74,222,128,0.15)", imageRendering: "pixelated", marginBottom: "8px" }} />
          <p style={{ fontSize: "12px", opacity: 0.45, margin: "0 0 20px" }}>왼쪽 위(작은 슬라임, 체력 3)부터 오른쪽 아래(큰 황금 슬라임, 체력 90)까지 체력 순</p>

          <h3 style={{ ...SUB_TITLE, marginTop: 0 }}>층별 등장</h3>
          <div style={{ overflowX: "auto", marginBottom: "16px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12.5px", minWidth: "480px" }}>
              <thead>
                <tr>
                  {["층", "나오는 몬스터", "체력 / 공격"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "8px 12px", borderBottom: `1px solid ${TEAL}40`, color: TEAL, fontWeight: 700, fontSize: "12px", whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["1층~", "작은 슬라임 · 초록 · 파란 슬라임", "3~7 / 1~2"],
                  ["5층~", "분홍 슬라임 · 새싹 슬라임", "9~16 / 3~4"],
                  ["10층~", "버섯병사 · 큰 슬라임", "20~34 / 5~7"],
                  ["17층~", "가시 두더지(붙박이 · 침) · 창 고블린 · 검은 슬라임", "30~44 / 7~9"],
                  ["22층~", "붉은 버섯병사 · 폭탄 고블린 · 궁수 고블린", "42~60 / 9~10"],
                  ["28층~", "황금 슬라임 · 독꽃(붙박이 · 독 가시) · 큰 황금 슬라임", "30~90 / 8~13"],
                ].map(row => (
                  <tr key={row[0]}>
                    <td style={{ padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", color: GREEN, fontWeight: 700, whiteSpace: "nowrap" }}>{row[0]}</td>
                    <td style={{ padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", opacity: 0.8 }}>{row[1]}</td>
                    <td style={{ padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", opacity: 0.55, whiteSpace: "nowrap" }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>몬스터별로 층을 나누어, 깊은 층에서는 강한 몬스터만 남습니다</NumItem>
            <NumItem n={2}>드롭 아이템 종류도 깊이에 따라 구분됩니다. — 슬라임 핵 → 석탄 · 철광석 → 금광석 · 보석</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>구조</h3>
          <CodeBlock>{`MonsterData(SO)        스탯 · 드롭 · 그림(프리팹) · 붙박이 여부 · 투사체 · 사거리
      ⇅ 서로 가리킴
몬스터 프리팹           방향(아래 · 위 · 왼 · 오) × 동작(대기 · 걷기 · 피격 · 사망 · 공격) 그림 + 몸에 맞춘 충돌체
MineFloorTable(SO)     몬스터 항목 = 데이터 · 나오는 층(처음 ~ 끝) · 추첨 비중
      ↓  MineManager.MonstersFor(지금 층)
MonsterSpawner         층 목록에서 뽑고, 뽑힌 데이터가 가리키는 프리팹을 만든다
      ↓
MonsterController      배회 → 추적 → 공격 (근접: 닿으면 / 원거리: 사거리 안 · 벽에 안 가리면 멈춰서 쏜다)
      ↓  공격 모션 → 발사 타이밍
MonsterProjectile      화살(직선) · 폭탄 · 가시 침(포물선) · 독 가시(발밑에서 솟음) → 플레이어 체력 · 넉백`}</CodeBlock>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>
              새 몬스터 = 데이터 한 장 + 프리팹 한 장 + 광산 표에 한 줄. 스포너 · 광산 · AI 코드는 몬스터 종류를 모릅니다
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>31종의 데이터 · 프리팹 · 광산 표는 에디터 메뉴 한 번으로 만든다 — 시트의 행 구성(방향 · 동작)만 규칙으로 적어 두고, 그림은 위치로 찾아 채운다</SubItem>
                <SubItem>시트에 오른쪽 모습만 있으면 왼쪽은 좌우로 뒤집어 쓴다</SubItem>
              </ul>
            </NumItem>
            <NumItem n={2}>
              플레이어의 화살은 몬스터만, 몬스터의 투사체는 플레이어만 맞힙니다 — 두 쪽을 다른 부품으로 나눠 서로 섞이지 않게
            </NumItem>
            <NumItem n={3}>
              식물형 몬스터의 공격은 플레이어가 있던 자리에서 잠깐 뒤에 솟습니다 — 움직이면 피할 수 있는 공격
            </NumItem>
          </ul>
          <img src={MONSTERS_RANGED} alt="원거리 공격 4종" style={{ width: "100%", borderRadius: "8px", border: "1px solid rgba(74,222,128,0.15)", imageRendering: "pixelated", marginBottom: "8px" }} />
          <p style={{ fontSize: "12px", opacity: 0.45, margin: "0 0 20px" }}>광산 30층 실행 화면 — 궁수 고블린의 화살 · 폭탄 고블린의 폭탄 · 가시 두더지의 침 · 플레이어 발밑에서 솟는 독꽃의 가시</p>

          <h3 style={SUB_TITLE}>스프라이트 기준점</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            몬스터 그림의 기준점이 몸 한가운데여서, 몬스터가 칸 아래로 반쯤 내려와 그려지고 프레임마다 몸이 조금씩 흔들렸습니다.
            몬스터마다 &lsquo;가장 낮은 발끝&rsquo;을 찾아 모든 프레임의 기준점을 그 선에 맞추는 스크립트로 101장을 한 번에 고쳤습니다.
            뛰어오르는 프레임은 뛴 높이 그대로 남습니다.
          </p>

          <h3 style={SUB_TITLE}>실행해서 찾은 문제</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>화살이 쏘자마자 사라짐 — 발 위치가 칸 경계라 벽 검사가 아래 칸을 읽었다 → 1/4 칸 위에서 검사</NumItem>
            <NumItem n={2}>독 가시가 보이지 않음 — 이펙트 시트까지 몸 시트와 같은 칸 크기로 계산해 기준점이 위로 튀었다 → 이펙트는 따로 계산</NumItem>
            <NumItem n={3}>폭탄이 플레이어보다 큼 — 아이콘 시트는 픽셀 기준이 달라 크기를 맞춤</NumItem>
          </ul>
          <Card style={{ background: "rgba(74,222,128,0.06)", border: `1px solid ${GREEN}30`, marginBottom: 0 }}>
            <p style={{ margin: 0, fontSize: "13px", lineHeight: 1.75, opacity: 0.85 }}>
              <span style={{ color: GREEN, fontWeight: 700 }}>확인 — </span>
              31종을 줄 세워 발이 칸 바닥에 닿는지 보고, 광산 30층에서 원거리 4종이 각각 쏘아 맞히는 것 · 근접 몬스터가 때리는 것 ·
              플레이어 검이 들어가는 것을 실행으로 확인했습니다. 층별로 스폰을 여러 번 뽑아 1층은 약한 슬라임만, 35층은 고블린 · 황금 슬라임 · 독꽃 위주인 것도 확인했습니다.
            </p>
          </Card>
        </section>

        {/* ── 제작 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>제작 시스템</h2>
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

          <h3 style={SUB_TITLE}>역참조 방지</h3>
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
          <h2 style={SECTION_TITLE}>레시피 해금 사슬</h2>
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

        {/* ── 방어구 · 피해 계산 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>방어구와 피해 계산</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            방어구 40종(투구 · 갑옷 · 각반 · 신발 × 나무 ~ 흑요석 10단계)을 무기와 같은 제작 · 해금 사슬에 얹었습니다.
            캐릭터 겉모습은 바꾸지 않고, 인벤토리의 부위 칸과 방어력으로 드러납니다.
          </p>
          <img src={ARMOR_INVENTORY} alt="인벤토리 방어구 칸" style={{ width: "100%", maxWidth: "420px", display: "block", margin: "0 auto 8px", borderRadius: "8px", border: "1px solid rgba(74,222,128,0.15)", imageRendering: "pixelated" }} />
          <p style={{ fontSize: "12px", opacity: 0.45, margin: "0 0 20px", textAlign: "center" }}>초상 아래 부위 칸(금 투구 · 갑옷 착용) · 가방의 방어구 · 이름 · 성별</p>

          <h3 style={{ ...SUB_TITLE, marginTop: 0 }}>받는 피해 공식</h3>
          <CodeBlock>{`받는 피해 = 반올림( 공격력 × 50 / (50 + 방어력) ),  최소 1

방어력 = 기본 + 입은 방어구 합      전신 나무 5 (−9%) … 금 20 (−29%) … 흑요석 50 (−50%)`}</CodeBlock>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>전에는 &lsquo;공격 − 방어&rsquo; — 약한 몬스터는 늘 1, 강한 몬스터에게는 방어가 거의 소용없다. 비율이면 어떤 몬스터에게든 같은 비율만큼 듣는다</NumItem>
            <NumItem n={2}>방어력이 오를수록 한 칸의 효과는 완만해진다 — 끝 단계 방어구로도 무적이 되지 않는다(맞으면 최소 1)</NumItem>
            <NumItem n={3}>공식은 순수 함수 하나 — 몬스터 근접 · 투사체가 모두 이것을 거치고, 씬 없이 표로 테스트한다</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>구조</h3>
          <CodeBlock>{`가방 칸 ─드래그 앤 드롭─▶ 방어구 칸(UI) ─▶ ArmorSystem  부위 검사 · 입은 것과 맞바꿈 · 저장
                                                  │ 바뀜(이벤트)
                                         GameManager ─▶ PlayerHealth.방어력  (방어구 시스템은 체력을 모른다)
몬스터 근접 · 투사체 ─▶ PlayerHealth.TakeDamage ─▶ DamageFormula`}</CodeBlock>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NumItem n={1}>레시피는 같은 단계 칼 레시피의 금속을 부위 크기만큼 — 제작 시간 · 해금(그 단계 주괴를 처음 얻으면)도 칼과 같게, 대장간과 플레이어 모루 양쪽에서</NumItem>
            <NumItem n={2}>40종의 데이터 · 레시피 · 해금 연결 · 두 제작대 · 인벤토리 칸 배선은 에디터 메뉴 한 번. 다시 돌려도 같은 결과</NumItem>
            <NumItem n={3}>세이브에 캐릭터 이름 · 성별도 더해 인벤토리 초상 옆에 보인다</NumItem>
          </ul>
        </section>

        {/* ── 가구 배치 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>가구 배치</h2>
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

          <h3 style={SUB_TITLE}>상호작용 판정</h3>
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
          <h2 style={SECTION_TITLE}>숙련도와 가공 기계</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            새 기능을 넣으면서 기존 도메인을 고치지 않는 것을 목표로 했습니다.
            숙련도는 <strong style={{ color: "#e0e0e0" }}>이미 있는 이벤트를 구독만</strong> 하고, 가공 기계는 <strong style={{ color: "#e0e0e0" }}>가구가 쓰는 타일 저장 경로</strong>를 그대로 탑니다.
          </p>
          <h3 style={{ ...SUB_TITLE, marginTop: 0 }}>숙련도</h3>
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
          <h3 style={SUB_TITLE}>가공 기계</h3>
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
            현재 구현체는 23종(씬 인스턴스 26개)입니다. 가구 · 가공 기계처럼 여러 칸을 차지하는 것은 앵커 칸만 저장하고,
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

          <h3 style={SUB_TITLE}>불러오기 순서</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            원칙은 <strong style={{ color: "#f0f0f0" }}>바뀌는 것은 세이브를 따르고, 바뀌지 않는 것은 맵을 따른다.</strong> 입니다.
            나무 · 바위 · 밭은 플레이하며 바뀌므로 세이브대로, 낚시터는 바뀌지 않으므로 저장하지 않고 맵에서 가져옵니다.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>맵에 놓인 낚시터 등 고정적인 것을 먼저 불러온다.</NumItem>
            <NumItem n={2}>세이브를 적용한다 — 벤 나무는 벤 채로, 캔 바위는 캔 채로</NumItem>
            <NumItem n={3}>
              불러온 것 중 세이브에 없는 것을 원본 맵의 데이터로 채운다.
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>낚시터 — 저장하지 않으므로 언제나 지금 단계에서 채운다</SubItem>
                <SubItem>가구     — 플레이어가 놓은 가구가 아닌, 맵 자체에서 부여한 가구(기본 가구 등)가 수정된 채 저장되지 않았을 경우 지금 단계에서 채운다</SubItem>
              </ul>
            </NumItem>
            <NumItem n={4}>여러 칸짜리 가구 · 기계의 나머지 칸과 조명을 다시 만든다(세이브에는 기준 칸 하나만 저장)</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>세이브 버전 관리</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            게임을 업데이트해도 플레이어의 세이브가 깨지면 안 됩니다. 세이브에 형식 버전을 적고, 옛 버전은 불러올 때 <strong style={{ color: "#f0f0f0" }}>변환 단계를 차례로</strong> 거쳐 최신으로 바꿉니다.
          </p>
          <CodeBlock>{`세이브 파일 ─ 읽기 ─▶ SaveMigrator ─▶ 불러오기(최신 형식만 안다)
                     버전 0 → 1 : 밭 없이 작물만 저장하던 칸 → 기본 밭 + 작물
                     (다음 형식 변경은 여기에 한 단계를 더하고 버전을 1 올린다)`}</CodeBlock>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>불러오기 코드 안에 흩어져 있던 옛 형식 호환 분기를 번호 붙은 변환 단계로 꺼냈다 — 불러오기는 최신 형식 하나만 다룬다</NumItem>
            <NumItem n={2}>처음 변환할 때 원본을 따로 남긴다(save.json.v0.bak) — 다음 저장이 최신 형식으로 덮어써도 되돌릴 수 있게</NumItem>
            <NumItem n={3}>게임보다 새 버전의 세이브는 낮추지 않고 읽을 수 있는 만큼 읽는다(경고)</NumItem>
            <NumItem n={4}>실제 옛 세이브 사본을 테스트 샘플로 — 변환 뒤 칸 · 시스템 수가 같고 모든 칸이 지금 게임 데이터로 풀리는지. 이 테스트가 위의 &lsquo;나무 · 바위가 사라지는 버그&rsquo;를 처음 드러냈다</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>NPC 저장</h3>
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
              규칙을 기계적으로 적용하기보다 근거에 따라 유연하게 방식을 정리했습니다.
            </p>
          </Card>

          <h3 style={SUB_TITLE}>중복 제거</h3>
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
                  { n: "SpriteFramePlayer", r: "스프라이트 프레임 진행", u: "FrameEffect, DroppedItem, CraftingStationWorker" },
                  { n: "FadeUtil", r: "알파 보간 코루틴", u: "ScreenFader, SpriteFader, SystemMessage" },
                  { n: "WalkabilityService", r: "인접 · 최단 접근 가능 칸 찾기", u: "NpcController, MonsterController, InteractionManager" },
                  { n: "SpaceScanner", r: "flood fill로 비어 있는 공간 수집", u: "NpcController, MonsterController" },
                  { n: "NpcRegistry", r: "씬의 NPC 목록 (등록 / 해제)", u: "NpcSaveManager, PlaceMilestoneManager" },
                  { n: "OutdoorArea", r: "실내 · 외 구분 좌표 범위", u: "MachineSystem, InsectSystem, SeasonVisualManager, CameraFollow, Rain · Snow · Umbrella" },
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

        {/* ── 성능 계측 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>성능 측정과 개선</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            추측으로 고치지 않고, 같은 조건을 다시 돌릴 수 있는 측정 시나리오부터 만들었습니다.
            무거울 만한 곳에 프로파일러 마커를 달고, 프레임 시간 · 프레임당 GC 할당 · 마커별 시간과 호출 수를 기록합니다.
          </p>
          <div style={{ overflowX: "auto", marginBottom: "16px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12.5px", minWidth: "520px" }}>
              <thead>
                <tr>
                  {["측정", "전", "후"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "8px 12px", borderBottom: `1px solid ${TEAL}40`, color: TEAL, fontWeight: 700, fontSize: "12px", whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["광산 층 전환", "353ms (최대 486)", "13.8ms (최대 19.7)"],
                  ["광산 전투 20마리 — 프레임", "평균 21.6 · p95 36.1ms", "평균 14.6 · p95 21.3ms"],
                  ["광산 전투 — GC 할당", "64.8KB/프레임", "12.9KB/프레임 (−80%)"],
                  ["광산 전투 — 길찾기", "1.71ms · 6.8회/프레임", "0.28ms · 1.0회/프레임"],
                  ["마을 평상시 (대조군)", "15.0ms · 11.1KB", "14.2ms · 10.9KB (변화 없음)"],
                ].map(row => (
                  <tr key={row[0]}>
                    <td style={{ padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", color: GREEN, fontWeight: 700, whiteSpace: "nowrap" }}>{row[0]}</td>
                    <td style={{ padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", opacity: 0.55 }}>{row[1]}</td>
                    <td style={{ padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", opacity: 0.9 }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "12px", opacity: 0.45, margin: "0 0 16px" }}>에디터 플레이 · 같은 시나리오(고정 시드) 수치. 대조군이 그대로라 측정 자체가 공정한 것을 확인.</p>

          <h3 style={{ ...SUB_TITLE, marginTop: 0 }}>찾은 병목</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>
              층 전환 0.35초 멈춤의 99% — 광산을 <strong style={{ color: "#f0f0f0" }}>한 칸씩</strong> 지우고(5레이어 × 1,800칸) 칠하던 것
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>레이어마다 한 번에 칠하기 + 바닥 · 벽은 지우지 않고 덮어쓰기(벽 RuleTile 갱신이 바뀐 칸 주변만)</SubItem>
                <SubItem>덮어쓴 결과가 새로 칠한 것과 칸마다 같은지 자동 플레이 테스트로 고정</SubItem>
              </ul>
            </NumItem>
            <NumItem n={2}>
              막힌 몬스터가 <strong style={{ color: "#f0f0f0" }}>매 프레임 실패하는 길찾기</strong>를 되풀이 — 전투 660프레임에 &lsquo;경로 없음&rsquo; 3,661번
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>실패하는 A* 는 닿는 영역 전체를 뒤져 가장 비싸다 → 실패하면 0.5초 뒤에 다시. 성능 문제이자 동작 버그였다</SubItem>
              </ul>
            </NumItem>
            <NumItem n={3}>길찾기가 호출마다 큐 · Dictionary · HashSet · 결과 List 를 새로 만듦 → 재사용(결과는 호출한 쪽 버퍼에). 연속 호출이 섞이지 않는지 단위 테스트</NumItem>
            <NumItem n={4}>통행 판정이 칸마다 타일 객체를 꺼내 null 비교 → 있는지만 묻는 HasTile</NumItem>
          </ul>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, margin: 0 }}>
            측정 시나리오는 평소 테스트에는 끼지 않고 메뉴 한 번으로 돌아가며, 결과를 라벨을 붙인 파일로 남겨 전후를 비교합니다.
            남은 GC 약 11KB/프레임은 마을에도 똑같이 있는 공통분이라 이번 범위에서 뺐습니다.
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
              "EditMode 87 · PlayMode 11 통과",
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
          <h2 style={SECTION_TITLE}>텍스트 그리드 맵 베이커</h2>
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

          <h3 style={SUB_TITLE}>배치 규칙</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            플레이 테스트에서 "소파에 앉을 수 없다", "가축이 벽 위에 올라탄다", "러그 밑에 캐릭터가 묻힌다" 등 문제가 한꺼번에 나왔습니다.
            분석 결과, 원인은 놓는 물건을 <strong style={{ color: "#f0f0f0" }}>상호작용해야 하는지, 막아야 하는지, 바닥에 깔리는지 구분하지 않고</strong> 한 장식 레이어에 그렸던 것입니다.
            규칙 스크립트로 모든 실내를 다시 구분하고, 막힘은 계산하게 했습니다.
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
              맨 아랫줄 가축이 벽 위에 선 것처럼 보였다 → 가축의 발(위치)은 칸 밑변인데 동물 그림의 기준점이 가운데라 몸 절반이 아래 칸으로
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
          <h2 style={SECTION_TITLE}>에디터 도구</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            오브젝트 배치나 연결을 손으로 하지 않고 스크립트에 적어 두어, 메뉴 한 번으로 똑같이 다시 만들 수 있습니다. 
            설정을 바꿀 때도 스크립트를 고치고 다시 실행하면 되고, 몇 번을 실행해도 동일한 결과를 얻습니다.
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
          <h2 style={SECTION_TITLE}>Addressables 원격 콘텐츠 배포</h2>
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

        {/* ── 개발 환경 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>개발 환경</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            스크립트가 350개 가까이 되자 두 가지가 불편해졌습니다. 설계 규칙은 문서로만 지켜지고, 플레이 버튼을 누를 때마다 30초씩 기다렸습니다.
            코드를 어셈블리로 나누고, 플레이 진입을 줄이고, 빌드를 한 번에 돌게 묶었습니다.
          </p>

          <h3 style={{ ...SUB_TITLE, marginTop: 0 }}>① 어셈블리 분리</h3>
          <CodeBlock>{`FarmGame.Core         도메인 · 데이터 · 조정자 · 입력          (UI 를 모른다)
     ▲
FarmGame.UI           화면 · 슬롯 · 알림                        Core 만 참조
     ▲
FarmGame.EditorTools  맵 베이커 · 설정 도구 · 빌드 · 업로드      에디터 전용
     ▲
FarmGame.Tests        EditMode 테스트 119개
FarmGame.PlayTests    자동 플레이 테스트 26개 + 성능 측정 시나리오 4개(예산 검사) + 장시간 자동 플레이`}</CodeBlock>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>로직이 UI 를 부르면 이제 <strong style={{ color: "#f0f0f0" }}>컴파일 에러</strong> — 문서의 규칙이 코드의 경계가 됐다</NumItem>
            <NumItem n={2}>
              나누는 순간 숨어 있던 위반이 하나 드러났다 — 로직 폴더의 알림 14개가 화면 메시지(UI)를 직접 부르고 있었다
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>알림은 원래 UI 층이라 UI 쪽으로 옮김. 흩어져 있던 UI 스크립트 34개를 한곳에 모음(파일 ID 는 그대로라 씬 연결은 안 끊김)</SubItem>
              </ul>
            </NumItem>
            <NumItem n={3}>
              함정 — 대화 조건은 씬에 &lsquo;어느 어셈블리의 어떤 클래스&rsquo;로 저장돼 있어서, 어셈블리 이름이 바뀌면 조건을 못 읽는다
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0" }}>
                <SubItem>옛 이름을 새 이름으로 이어 주는 표시(<code>[MovedFrom]</code>)를 달고, 씬 5개의 조건 67개가 모두 읽히는 것을 확인</SubItem>
              </ul>
            </NumItem>
          </ul>

          <h3 style={SUB_TITLE}>② 플레이 진입 시간 단축</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            플레이를 누를 때마다 스크립트 전체를 다시 올리던 단계(도메인 리로드)를 건너뛰게 했습니다.
            대신 <strong style={{ color: "#f0f0f0" }}>전역(static) 값이 이전 플레이의 것을 그대로 들고 온다</strong>는 문제가 생깁니다 — 계절 · 비 · 등록 목록 · 이벤트 구독.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>그런 값 16곳을 찾아 플레이 시작마다 비우게 함</NumItem>
            <NumItem n={2}>새로 추가했는데 비우는 걸 잊으면 테스트가 실패 — 코드를 훑어 바뀌는 전역 값에 초기화가 있는지 검사</NumItem>
            <NumItem n={3}>확인: 연속 3번 플레이 — 워프 등록 수가 늘지 않고, 몬스터 한 마리에 경험치가 매번 정확히 +10(이벤트가 두 번 걸리지 않음)</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>③ 빌드 파이프라인</h3>
          <CodeBlock>{`메뉴 한 번 (Dev / Release)
  EditMode 테스트 전체 ── 실패면 멈춤
       ↓
  콘텐츠 주소 전환(Dev = 로컬 서버 / Release = CDN) → 앱 + 원격 콘텐츠 빌드 → 주소 원래대로
       ↓
  Builds/날짜-종류/build_report.txt   테스트 · 빌드 시간 · 용량 · 올릴 콘텐츠 폴더

그냥 빌드해도(파일 메뉴)   빌드 직전 검사 33개(약 6초) — 실패면 빌드 중단
명령줄                    같은 파이프라인, 실패면 종료 코드 1 — CI 에 그대로`}</CodeBlock>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>개발용 빌드가 출시용 기록을 망치지 않게 — 콘텐츠 업데이트의 기준 파일은 되돌리고, 로컬 주소로 만든 콘텐츠는 CDN 업로드가 거절되게 표시</NumItem>
            <NumItem n={2}>업로드는 파이프라인에 넣지 않았다 — 밖으로 나가는 일이라 리포트를 보고 사람이 누른다</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>어셈블리 변경과 원격 콘텐츠</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            번들은 안에 든 스크립트를 &lsquo;어셈블리 이름 + 클래스&rsquo;로 기억합니다. 어셈블리를 나눈 뒤의 앱은 서버에 있던 옛 축제 번들을 제대로 읽을 수 없어서,
            앱과 콘텐츠를 <strong style={{ color: "#f0f0f0" }}>짝으로</strong> 다시 빌드해 CDN 에 올렸습니다(축제 번들 4개 교체, 옛 번들은 되돌릴 수 있게 남김).
          </p>
          <Card style={{ background: "rgba(74,222,128,0.06)", border: `1px solid ${GREEN}30`, marginBottom: 0 }}>
            <p style={{ margin: 0, fontSize: "13px", lineHeight: 1.75, opacity: 0.85 }}>
              <span style={{ color: GREEN, fontWeight: 700 }}>확인 — </span>
              캐시를 비운 새 앱이 CDN 에서 2.06MB 를 받아 시작(에러 0), 에디터에서 &lsquo;빌드된 번들로 시작&rsquo; 모드로 축제 씬 4개를 CDN 에서 열어
              씬마다 게임 스크립트 226~244개가 모두 붙은 것(빠진 스크립트 0)을 확인했습니다.
            </p>
          </Card>
        </section>

        {/* ── 현업 파이프라인(2026-09-30) ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>현업 파이프라인</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            새 게임 기능이 아니라, 여러 사람이 이 게임을 계속 만들고 출시할 때 필요한 기반 다섯 가지를 붙였습니다.
            각 항목마다 도구만 만들지 않고, 규칙이 깨지면 실패하는 자동 테스트를 함께 두었습니다.
          </p>

          <h3 style={{ ...SUB_TITLE, marginTop: 0 }}>① 기획 데이터 표</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            몬스터 체력이나 방어구 방어력을 바꾸려면 지금까지는 유니티에서 애셋을 하나씩 열어야 했습니다.
            이 수치들을 CSV 표 세 개(몬스터 31종 · 방어구 40종 · 도구 91종)로 꺼내, 기획자가 엑셀에서 고치고 메뉴 한 번으로 게임에 들여오게 했습니다.
          </p>
          <CodeBlock>{`엑셀에서 표 수정  →  미리 보기(무엇이 바뀌는지 목록)  →  들여오기

들여오기 전에 표 전체를 먼저 검사하고, 틀린 곳이 하나라도 있으면 아무것도 바꾸지 않는다.
  예) Monsters.csv 14번째 줄 [끝층] BlueSlime: 끝층(3)이 등장층(10)보다 작음`}</CodeBlock>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
            <NumItem n={1}>숫자 칸에 글자가 들어갔거나, 없는 아이템 이름을 적었거나, 같은 몬스터가 두 줄 있거나, 표에서 빠진 몬스터가 있으면 몇 번째 줄 어느 칸인지 알려 줍니다.</NumItem>
            <NumItem n={2}>값 하나를 고치면 연결된 곳(광산 층별 등장표, 방어구 설명 글, 제작 레시피 재료)까지 함께 바뀝니다.</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>② 스프라이트 아틀라스</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            그림이 서로 다른 텍스처 파일에 흩어져 있으면, 그래픽 카드는 텍스처가 바뀔 때마다 그리기 명령을 따로 받습니다(이 명령 수가 아래 표의 &lsquo;배치 수&rsquo;).
            아틀라스는 여러 그림을 큰 텍스처 한 장에 모아 두는 것으로, 같은 장에 있는 그림들은 한 번에 그릴 수 있습니다.
            타일 · 오브젝트 · 적 · UI 그림을 네 장의 아틀라스로 묶었고, 원본 그림 파일은 그대로 두었습니다.
          </p>
          <div style={{ overflowX: "auto", marginBottom: "12px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12.5px", minWidth: "480px" }}>
              <thead>
                <tr>
                  {["화면 (프레임당 배치 수)", "아틀라스 없음", "아틀라스 사용"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "8px 12px", borderBottom: `1px solid ${TEAL}40`, color: TEAL, fontWeight: 700, fontSize: "12px", whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["마을", "35~39", "29"],
                  ["마을 + 인벤토리 창", "44~45", "30 (약 3분의 1 감소)"],
                  ["광산 · 몬스터 20마리", "62~64", "62 (변화 없음)"],
                ].map(row => (
                  <tr key={row[0]}>
                    <td style={{ padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", color: GREEN, fontWeight: 700, whiteSpace: "nowrap" }}>{row[0]}</td>
                    <td style={{ padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", opacity: 0.55 }}>{row[1]}</td>
                    <td style={{ padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", opacity: 0.9 }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
            <NumItem n={1}>
              타일 그림은 16×16px 칸 단위로 잘려 있어 조각이 약 1만 6천 개입니다. 이것을 전부 아틀라스에 넣으면 4096×2048 크기에 메모리 32MB가 되어,
              원래 타일 그림 파일들(18MB)보다 오히려 커졌습니다. 그래서 맵과 게임 데이터에서 <strong style={{ color: "#f0f0f0" }}>실제로 쓰이는 타일 762개만</strong> 골라 넣어
              1024×512, 2MB로 줄였습니다. 새 타일을 칠하면 메뉴를 다시 눌러 아틀라스에 추가합니다.
            </NumItem>
            <NumItem n={2}>
              네 장을 합친 메모리는 46MB로, 원본 그림 파일을 합친 73MB보다 적습니다. 픽셀 아트라서 흐려지지 않게 압축하지 않고,
              그림 사이에 4px 간격을 두어 타일 경계에 옆 그림 색이 묻어나지 않게 했습니다. 마을 화면을 캡처해 번짐이 없는 것을 확인했습니다.
            </NumItem>
            <NumItem n={3}>
              처음 측정에서는 광산 수치가 오히려 나빠 보였는데, 원인은 아틀라스가 아니라 측정할 때마다 몬스터 구성이 달랐던 것이었습니다.
              무작위 값을 고정해 같은 몬스터가 나오게 하고, 아틀라스만 껐다 켜며 다시 쟀습니다. 광산은 타일맵과 조명이 그리기 대부분을 차지해 변화가 없었습니다.
            </NumItem>
          </ul>

          <h3 style={SUB_TITLE}>③ Input System 전환과 키 설정</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            키 입력이 스크립트 21개에 &lsquo;I 키가 눌렸나&rsquo;처럼 직접 적혀 있어서, 플레이어가 키를 바꿀 방법이 없었습니다.
            유니티의 새 입력 시스템으로 옮겨 &lsquo;인벤토리 열기&rsquo; 같은 조작 이름으로 입력을 읽게 했고, 어떤 키가 그 조작인지는 설정 한 곳에서만 정합니다.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
            <NumItem n={1}>설정 창에서 조작 옆 버튼을 누르고 새 키를 누르면 바뀝니다(Esc 는 취소). 다른 조작이 이미 쓰던 키를 고르면 두 조작의 키를 <strong style={{ color: "#f0f0f0" }}>서로 맞바꿔</strong>, 한 키에 조작 두 개가 걸리지 않게 했습니다.</NumItem>
            <NumItem n={2}>새 키를 기다리는 동안에는 게임 조작을 모두 꺼 둡니다. 그렇지 않으면 바꾸려고 누른 키가 동시에 게임 조작으로도 처리됩니다.</NumItem>
            <NumItem n={3}>바꾼 키는 세이브 파일이 아니라 기기 설정에 저장해, 어느 세이브를 불러와도 같은 키를 씁니다. 창 제목의 &lsquo;숙련도 (K)&rsquo; 같은 키 안내도 바꾼 키로 따라 바뀝니다.</NumItem>
            <NumItem n={4}>테스트에서 가상 키보드로 실제 키를 누릅니다. I 로 인벤토리가 열리는지, 키를 P 로 바꾸면 I 는 더 이상 안 먹고 P 가 먹는지, 설정 창에서 바꾸기가 끝나는지 확인합니다. 옛 방식의 입력 코드가 다시 들어오면 실패하는 검사도 두었습니다.</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>④ 현지화</h3>
          <img src={LOCALIZATION_SETTINGS} alt="설정 창 한국어 / 영어" style={{ width: "100%", maxWidth: "640px", display: "block", margin: "0 auto 8px", borderRadius: "8px", border: "1px solid rgba(74,222,128,0.15)", imageRendering: "pixelated" }} />
          <p style={{ fontSize: "12px", opacity: 0.45, margin: "0 0 16px", textAlign: "center" }}>설정 창 맨 위의 언어 버튼. 누르면 열려 있는 창과 화면 글자가 바로 바뀐다.</p>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            게임 안의 모든 글자(아이템 이름과 설명, NPC 대사, 알림, UI)를 영어로도 볼 수 있게 했습니다.
            번역문마다 새 이름을 붙이지 않고 <strong style={{ color: "#f0f0f0" }}>한국어 원문을 그대로 찾는 열쇠</strong>로 써서, 기존 코드와 애셋의 한국어를 고치지 않고 화면에 보일 때만 번역을 찾게 했습니다.
          </p>
          <CodeBlock>{`번역 표 Strings.csv     한국어 원문 | 영어 | 어디서 나온 글자인지
        ↓ 만들기(검사 포함)
게임이 읽는 번역 표      화면에 보일 때 원문으로 영어를 찾는다. 없으면 원문 그대로.

검사: 원문의 {0} 같은 값 자리와 색 태그가 번역에도 그대로 있는가, 번역에 한글이 남지 않았는가.
      틀리면 게임용 표를 바꾸지 않는다.`}</CodeBlock>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
            <NumItem n={1}>
              가구 이름 1,174개, 도구 · 방어구 등급, 씨앗 설명처럼 같은 문형이 반복되는 글은 용어집과 문형 규칙으로 번역했고,
              NPC 대사 110줄과 알림 · 설명은 한 줄씩 직접 번역했습니다. 해적 선장은 뱃사람 말투, 대장장이는 무뚝뚝한 말투처럼 인물별 말투를 살렸습니다.
            </NumItem>
            <NumItem n={2}>
              번역이 빠지지 않게 테스트를 두었습니다. 코드를 읽어 번역 함수로 감싸지 않은 한글 문장을 찾고(개발용 로그와 인스펙터 설명은 제외),
              애셋의 한글 칸 중 번역 대상인지 표시가 없는 칸, 번역이 없는 원문이 있으면 실패합니다.
            </NumItem>
            <NumItem n={3}>
              만들다가 위험을 하나 발견했습니다. 몇몇 에디터 도구는 아이템 이름을 읽어 다른 애셋에 다시 쓰는데, 언어가 영어로 되어 있으면
              <strong style={{ color: "#f0f0f0" }}> 한국어 원문 자리에 영어가 저장됩니다.</strong> 그래서 게임을 실행하지 않은 에디터에서는 항상 원문을 돌려주고,
              플레이를 끝내면 고른 언어를 잊게 했습니다.
            </NumItem>
          </ul>

          <h3 style={SUB_TITLE}>⑤ 세이브 보호</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            세이브 파일이 그냥 글자(JSON)라 메모장으로 소지금을 고칠 수 있었고, 저장하는 순간 게임이 꺼지면 파일이 반만 써져 세이브를 통째로 잃을 수 있었습니다.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>파일 내용을 암호화(AES-256)하고, 내용 전체로 계산한 서명(HMAC-SHA256)을 함께 저장합니다. 파일이 한 바이트만 바뀌어도 서명이 맞지 않아 불러오지 않습니다.</NumItem>
            <NumItem n={2}>저장은 임시 파일에 끝까지 쓴 다음 원래 파일과 바꿔 끼웁니다. 쓰는 도중에 꺼져도 원래 세이브가 남고, 바로 앞 세이브는 따로 하나 보관합니다.</NumItem>
            <NumItem n={3}>불러올 때 서명이 맞지 않으면 그 파일은 지우지 않고 따로 남겨 둔 뒤 바로 앞 세이브를 불러옵니다. 앞 세이브도 없으면, 예전처럼 빈 세계가 열리는 대신 새 게임으로 시작합니다.</NumItem>
            <NumItem n={4}>예전 평문 세이브도 그대로 읽고, 다음에 저장할 때 새 형식으로 바뀝니다.</NumItem>
          </ul>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, margin: "0 0 12px" }}>
            암호 키가 실행 파일 안에 들어 있으므로 작정하고 분석하는 사람까지 막지는 못합니다. 메모장으로 고치는 것과 파일 손상을 막는 것으로 목표를 정했습니다.
            개발 중에는 세이브를 읽을 수 있는 JSON 으로 꺼내고 고친 뒤 다시 넣는 메뉴를 씁니다.
          </p>
          <Card style={{ background: "rgba(74,222,128,0.06)", border: `1px solid ${GREEN}30`, marginBottom: 0 }}>
            <p style={{ margin: 0, fontSize: "13px", lineHeight: 1.75, opacity: 0.85 }}>
              <span style={{ color: GREEN, fontWeight: 700 }}>확인 — </span>
              자동 플레이 테스트에서 소지금을 111로 한 번, 222로 한 번 저장한 뒤 파일을 한 바이트 고쳤더니 바로 앞 세이브인 111로 불러왔고,
              앞 세이브까지 지우자 새 게임으로 시작했습니다. 다섯 가지를 모두 넣은 뒤 EditMode 테스트 76개와 자동 플레이 테스트 7개가 통과했습니다.
            </p>
          </Card>
        </section>

        {/* ── 개발 도구(2026-10-02) ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>개발 도구</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            QA 와 개발자가 같은 버그를 두고 이야기하려면, 버그가 난 순간의 정보가 빠짐없이 남아야 하고 같은 상황을 다시 만들 수 있어야 합니다.
            그 흐름에 필요한 도구 다섯 가지를 붙였습니다. 모두 개발 빌드와 에디터에서만 동작하고, 출시 빌드에서는 스스로 꺼집니다.
          </p>

          <h3 style={{ ...SUB_TITLE, marginTop: 0 }}>① 버그 리포트</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            &lsquo;상자가 가끔 안 열린다&rsquo; 같은 보고만으로는 원인을 찾기 어렵습니다. 그래서 F8 을 누르면 그 순간의 정보를 zip 파일 하나로 묶어 남기게 했습니다.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
            <NumItem n={1}>요약 파일에는 QA 가 채울 칸(무엇을 하다가 · 기대한 결과 · 실제 결과)과 자동으로 모은 정보(앱 · 콘텐츠 버전, 기기와 그래픽 카드, 화면 크기와 FPS, 게임 날짜, 플레이어 위치, 언어, 바꾼 키 설정)가 들어갑니다.</NumItem>
            <NumItem n={2}>화면 캡처, 버그 직전의 로그 400줄(경고와 에러는 호출 위치까지), 그리고 그 순간의 게임 상태를 세이브 형식으로 함께 담습니다. 이 상태 사본은 세이브 파일에 쓰지 않고 따로 만들어서, 리포트를 남긴다고 플레이어의 세이브가 바뀌지 않습니다.</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>② 입력 녹화와 재생</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            녹화를 시작하면 그 순간의 게임 상태와 무작위 값의 씨앗을 저장하고, 이후의 키보드 · 마우스 입력을 프레임 단위로 기록합니다(Input System 의 이벤트 기록 기능).
            재생하면 저장한 상태로 씬을 다시 열고, 같은 씨앗을 넣은 뒤 기록한 입력을 프레임마다 그대로 흘려 넣습니다.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
            <NumItem n={1}>재생 중의 저장은 별도 파일로만 가게 해서, 재현하다가 실제 세이브가 덮이는 일이 없게 했습니다. 녹화 중에 버그 리포트를 남기면 지금까지의 녹화도 리포트에 함께 들어갑니다.</NumItem>
            <NumItem n={2}>낚시가 자기만의 무작위 값을 따로 쓰고 있어서, 같은 입력을 넣어도 다른 물고기가 걸릴 수 있었습니다. 이 무작위 값도 게임 전체의 씨앗에서 시작하도록 바꿨습니다.</NumItem>
            <NumItem n={3}>프레임 시간 차이나 씬을 여는 동안 쓰이는 무작위 값까지 똑같이 맞출 수는 없습니다. 그래서 완전한 재현이 아니라 &lsquo;같은 입력 순서로 다시 해 보기&rsquo;를 자동으로 해 주는 도구로 범위를 정했습니다.</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>③ 개발자 콘솔</h3>
          <img src={DEV_CONSOLE} alt="개발자 콘솔" style={{ width: "100%", maxWidth: "480px", display: "block", margin: "0 auto 8px", borderRadius: "8px", border: "1px solid rgba(74,222,128,0.15)", imageRendering: "pixelated" }} />
          <p style={{ fontSize: "12px", opacity: 0.45, margin: "0 0 16px", textAlign: "center" }}>help 목록, 아이템 넣기, 오타를 냈을 때의 추천</p>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            작물 키우기 · 다음 날 · 레시피 해금 같은 테스트 기능이 스크립트마다 다른 키(G · N · F9 …)로 흩어져 있어서, 어떤 키가 무엇인지 코드를 봐야 알 수 있었습니다.
            이것을 게임 안 명령 창 하나로 모았습니다. 명령 목록과 사용법은 등록된 명령에서 자동으로 만들어집니다.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
            <NumItem n={1}>아이템은 한국어 · 영어 · 애셋 이름 중 아무것으로나, 일부만 써도 하나로 정해지면 찾습니다. 여러 개가 맞으면 후보를 보여 주고, 명령 이름에 오타를 내면 비슷한 명령을 추천합니다.</NumItem>
            <NumItem n={2}>콘솔이 열려 있는 동안에는 게임 조작을 꺼 둡니다. 그렇지 않으면 입력칸에 &lsquo;give&rsquo; 의 i 를 치는 순간 인벤토리가 열립니다.</NumItem>
            <NumItem n={3}>처음에는 목록의 설명 열이 들쭉날쭉했습니다. 글자 폭이 제각각인 글꼴에서 공백 개수로 칸을 맞췄기 때문입니다. 사용법과 설명을 탭으로 나누고, 화면이 설명 열의 시작 위치를 패널 폭의 비율로 고정하게 바꿨습니다. 입력한 글자는 화면 태그로 해석되지 않게 막았습니다.</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>④ 성능 예산</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            앞에서 성능을 고친 결과가 이후 작업으로 다시 나빠지지 않도록, 측정하는 네 화면마다 상한을 정했습니다.
            상한은 최근 측정값에 여유를 둔 값(시간과 메모리 할당은 1.5배)이라 측정할 때마다 생기는 작은 흔들림으로는 실패하지 않고, 층 전환이 0.35초 걸리던 때 같은 큰 퇴보는 잡습니다.
          </p>
          <div style={{ overflowX: "auto", marginBottom: "12px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12.5px", minWidth: "480px" }}>
              <thead>
                <tr>
                  {["화면", "측정값", "상한"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "8px 12px", borderBottom: `1px solid ${TEAL}40`, color: TEAL, fontWeight: 700, fontSize: "12px", whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["마을", "프레임 9.6ms · 그리기 명령 27", "13.7ms · 34"],
                  ["마을 + 인벤토리 창", "프레임 9.7ms · 그리기 명령 29", "13.6ms · 35"],
                  ["광산 · 몬스터 20마리", "프레임 10.2ms · 그리기 명령 60", "15.0ms · 72"],
                  ["광산 층 전환", "평균 10.3ms · 최대 13.7ms", "16.2ms · 24.9ms"],
                ].map(row => (
                  <tr key={row[0]}>
                    <td style={{ padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", color: GREEN, fontWeight: 700, whiteSpace: "nowrap" }}>{row[0]}</td>
                    <td style={{ padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", opacity: 0.9 }}>{row[1]}</td>
                    <td style={{ padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", opacity: 0.55 }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, margin: "0 0 20px" }}>
            기능이 늘어 기준이 정당하게 바뀌면 메뉴 한 번으로 상한을 다시 정합니다. 이때 바뀐 값이 &lsquo;옛 값 → 새 값&rsquo;으로 남아서, 느려진 것을 슬쩍 덮는 데 쓰였는지 확인할 수 있습니다.
          </p>

          <h3 style={SUB_TITLE}>⑤ 코드 분석기</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            &lsquo;옛 Input 을 쓰지 않는다&rsquo;, &lsquo;화면에 보일 한글은 번역 함수로 감싼다&rsquo;, &lsquo;바뀌는 static 은 플레이를 시작할 때 비운다&rsquo;는 규칙은
            지금까지 테스트를 돌려야 위반을 알 수 있었습니다. C# 컴파일러(Roslyn)에 끼우는 분석기를 직접 만들어, 코드를 치는 순간 IDE 에 빨간 줄이 뜨고 빌드가 막히게 했습니다.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>규칙마다 &lsquo;잡아야 하는 코드&rsquo;와 &lsquo;통과해야 하는 코드&rsquo;(로그 문장, 개발용 표시를 붙인 줄 등)를 단위 테스트로 고정했습니다.</NumItem>
            <NumItem n={2}>넣기 전에 실제 프로젝트 코드 전체에 돌려, 멀쩡한 코드를 잘못 잡는 경우가 하나도 없는지 확인하는 검사 도구를 만들었습니다. 유니티 없이 유니티 라이브러리를 참조해 게임 · 에디터 · 테스트 코드와 출시 빌드 설정까지 컴파일해 봅니다.</NumItem>
            <NumItem n={3}>
              그런데도 실제로 넣자 <strong style={{ color: "#f0f0f0" }}>에디터 전체가 컴파일되지 않는 사고</strong>가 났습니다. 유니티는 프로젝트에 넣은 분석기를 유니티 자체 UI 패키지에도 적용하는데,
              그 패키지가 옛 Input 을 쓰고 있어서 에러가 났고, 그것에 기대는 다른 패키지와 게임 코드까지 함께 멈췄습니다.
              규칙이 우리 어셈블리에서만 돌게 고치고, 다른 어셈블리에서는 진단이 나오지 않는다는 테스트를 추가했습니다.
            </NumItem>
          </ul>
          <Card style={{ background: "rgba(74,222,128,0.06)", border: `1px solid ${GREEN}30`, marginBottom: 0 }}>
            <p style={{ margin: 0, fontSize: "13px", lineHeight: 1.75, opacity: 0.85 }}>
              <span style={{ color: GREEN, fontWeight: 700 }}>확인 — </span>
              규칙 세 개를 모두 어긴 임시 파일을 넣어 유니티에서 세 에러가 실제로 뜨는 것을 보고 지웠습니다.
              자동 플레이 테스트로 콘솔 명령과 입력 차단, 버그 리포트 파일과 세이브 무변경, 녹화 → 씬 다시 열기 → 재생으로 인벤토리가 열리는 것까지 확인했고,
              EditMode 테스트 87개와 자동 플레이 테스트 11개가 통과했습니다.
            </p>
          </Card>
        </section>

        {/* ── 품질 관리(2026-10-02 ~ 03) ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>품질 관리</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            기능이 늘어날수록 사람이 화면을 하나씩 넘겨 보며 확인하기는 어려워집니다. 번역문이 칸을 넘치는지, 씬을 오가며 메모리가 쌓이는지,
            테스트가 코드의 어디까지 닿는지를 숫자로 확인하는 도구를 만들고, 커밋할 때마다 테스트가 자동으로 돌게 했습니다.
            출시 뒤에 앱을 다시 배포하지 않고도 값을 고칠 수 있는 원격 설정도 이 단계에서 붙였습니다.
          </p>

          <h3 style={{ ...SUB_TITLE, marginTop: 0 }}>① 글자 넘침 검사</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            영어 번역은 대체로 한국어보다 길어서, 한국어에 맞춰 만든 칸에서 잘리거나 읽을 수 없을 만큼 작아집니다. 화면을 하나씩 열어 보는 대신,
            글자가 들어가는 모든 칸에 실제로 들어갈 수 있는 가장 긴 글 25개씩을 넣고 레이아웃을 다시 계산해 재는 검사를 만들었습니다.
            고정된 글자뿐 아니라 아이템 이름 · 대사 · 툴팁처럼 코드가 채우는 칸도 함께 잽니다.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
            <NumItem n={1}>칸 밖으로 나가는 글, 말줄임표로 잘린 글, 자동 크기 조절로 화면에서 6pt 보다 작아진 글을 문제로 봅니다. 글자 크기는 부모 캔버스의 확대 배율까지 곱해 실제 화면 크기로 판단합니다.</NumItem>
            <NumItem n={2}>처음 돌렸을 때 영어에서 13건이 나왔습니다. 가구 설명 번역을 짧게 다듬고, 외형 창의 부위 이름표는 라틴 글꼴의 줄 높이가 칸보다 커서 자동 크기로 바꿨습니다.</NumItem>
            <NumItem n={3}>한국어에서도 이미 문제였던 칸이 세 곳 드러났습니다. 가방 툴팁의 설명은 화면에서 4pt 까지 줄어 읽을 수 없었고, 상점 상품 이름은 사실상 보이지 않는 높이 2짜리 칸에 들어 있었습니다. 툴팁을 1.5배로 키우고 글자색을 배경에 맞게 바꿨으며, 상품 이름은 가격 띠 위 빈자리로 옮겼습니다.</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>② 메모리 누수 검사</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "20px" }}>
            씬을 오갈 때마다 해제되지 않은 텍스처나 오브젝트가 남으면 오래 플레이할수록 메모리가 늘어납니다. 원격으로 받는 축제 씬을 네 번 오가고, 광산을 8층까지 네 번 드나든 뒤
            텍스처 · 머티리얼 · 메시 · 오브젝트 수와 관리 메모리를 첫 회차와 마지막 회차에서 비교하는 자동 테스트를 만들었습니다.
            축제 왕복은 네 번 모두 수가 같았고, 광산은 처음 만드는 오브젝트 풀 때문에 첫 회차에만 3개가 늘고 그 뒤로는 그대로여서 누수가 없음을 확인했습니다.
            에디터에서는 원격 콘텐츠를 번들 파일이 아닌 프로젝트 애셋에서 바로 읽기 때문에, 번들 해제 여부는 빌드에서만 확인할 수 있다는 한계도 함께 기록했습니다.
          </p>

          <h3 style={SUB_TITLE}>③ 코드 커버리지</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "20px" }}>
            코드 커버리지는 테스트를 돌리는 동안 실행된 코드가 전체의 몇 퍼센트인지를 나타내는 값입니다. Unity Code Coverage 패키지로 게임 코드만 골라 EditMode 와 PlayMode 테스트를 합산해 측정했습니다.
            처음에는 줄 기준 48.2%, 메서드 기준 53.3%였고, 핵심 흐름인데 테스트가 닿지 않던 낚시(성공 · 놓침 · 입력 잠금 해제)와 NPC 대화 열기 · 닫기에 테스트를 더해
            <strong style={{ color: "#f0f0f0" }}> 줄 52.7% · 메서드 58.8%</strong>로 올렸습니다. 아직 낮은 곳은 입력 라우팅과 축제 미니게임, 가공 기계이며 다음 테스트 대상으로 남겨 두었습니다.
          </p>

          <h3 style={SUB_TITLE}>④ 원격 설정</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            출시 뒤에 몬스터가 너무 세거나 가축 판매가가 과하다는 것을 알게 되면, 보통은 앱을 다시 빌드해 배포해야 합니다. 그래서 CDN(전 세계에 파일을 빠르게 나눠 주는 서버)에 올린 JSON 파일 하나로
            몬스터 체력 · 공격력 배율, 가축 판매가 배율, 시작 화면 공지를 바꿀 수 있게 했습니다. 게임은 시작 화면에서 이 파일을 받아 적용합니다.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
            <NumItem n={1}>미리 정한 이름과 범위(배율 0.25~4배 등)의 값만 받습니다. 모르는 이름이나 범위 밖의 값은 경고만 남기고 무시해서, 파일을 잘못 올려도 게임이 망가지지 않습니다.</NumItem>
            <NumItem n={2}>받는 데는 4초 제한을 두고, 실패해도 시작을 막지 않습니다. 받은 설정은 세이브와 같은 방식으로 암호화해 기기에 저장해 두었다가 다음 실행이나 오프라인일 때 씁니다.</NumItem>
            <NumItem n={3}>올리기 메뉴는 파일 검사를 통과해야만 올리고, 올린 뒤 게임과 같은 방식으로 다시 받아 원본과 같은지 확인합니다. 처음에는 CDN 이 403 을 돌려줬는데, 저장소 접근 정책이 플랫폼별 콘텐츠 폴더만 열어 두었기 때문이어서 파일을 그 폴더 아래로 옮겼습니다.</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>⑤ CI</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            CI(지속적 통합)는 코드를 올릴 때마다 서버가 자동으로 빌드하고 테스트하는 것을 말합니다. 비공개 GitHub 저장소에 GitHub Actions 를 붙이고,
            유니티와 라이선스가 설치된 작업용 PC 를 실행기로 등록했습니다. 올릴 때마다 분석기 규칙 테스트, EditMode 테스트, 분석기 실제 코드 검사, PlayMode 테스트가 차례로 돌고,
            결과 파일과 로그가 실행 기록에 남습니다. 수동으로 실행할 때는 성능 예산 검사와 개발 빌드를 고를 수 있습니다.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>처음 실행에서는 코드 검사 단계가 멈췄습니다. 새로 받은 사본에는 유니티가 만드는 Library 폴더가 아직 없는데, 검사 도구가 그 안의 패키지 라이브러리를 참조했기 때문입니다. 검사를 유니티가 한 번 실행되는 EditMode 테스트 뒤로 옮기고, Library 가 없으면 원인을 알리고 끝나게 했습니다.</NumItem>
            <NumItem n={2}>두 번째 실행에서는 버그 리포트 테스트 하나가 실패했습니다. CI 는 화면 없이 유니티를 돌려 프레임을 그리지 않기 때문에, &lsquo;이번 프레임을 다 그린 뒤 화면을 캡처한다&rsquo;는 대기가 끝나지 않았습니다. 에디터에서는 드러나지 않던 문제로, 화면 없이 돌 때는 카메라를 직접 그려 캡처하도록 고쳤습니다.</NumItem>
          </ul>
          <Card style={{ background: "rgba(74,222,128,0.06)", border: `1px solid ${GREEN}30`, marginBottom: 0 }}>
            <p style={{ margin: 0, fontSize: "13px", lineHeight: 1.75, opacity: 0.85 }}>
              <span style={{ color: GREEN, fontWeight: 700 }}>확인 — </span>
              두 번째 수정 뒤 실행에서 모든 단계가 통과했습니다. EditMode 테스트 93개와 자동 플레이 테스트 22개가 모두 통과했고, 분석기 진단과 컴파일 오류는 0건이었습니다. Library 를 처음 만든 첫 실행은 10분 가까이 걸렸지만, 작업 폴더를 남겨 두기 때문에 그 뒤로는 전체가 약 8분 만에 끝납니다.
            </p>
          </Card>
        </section>

        {/* ── 출시와 운영(2026-10-03) ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>출시와 운영</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            CI 로 테스트가 자동으로 돌게 된 다음에는, 그 위에 출시 과정과 출시 뒤의 운영에 필요한 도구를 올렸습니다.
            버전 하나를 정하면 빌드부터 배포 파일까지 자동으로 만들어지고, 오래 플레이할 때의 문제와 플레이어 기기에서 난 오류가 기록으로 남도록 했습니다.
          </p>

          <h3 style={{ ...SUB_TITLE, marginTop: 0 }}>① 릴리스 자동화</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            지금까지 출시 빌드는 메뉴를 눌러 만들고, 버전을 손으로 고치고, 원격 콘텐츠를 따로 올려야 했습니다. 이제 git 에 버전 태그(v0.1.0)를 붙여 올리면 CI 가
            자동 플레이 테스트, 그 버전으로 된 출시 빌드, 실행 파일과 원격 콘텐츠 압축 파일, 이전 버전 이후의 변경 목록을 차례로 만들고 GitHub Release 초안으로 올립니다.
            초안이라 사람이 확인하고 공개 버튼을 눌러야 배포됩니다.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
            <NumItem n={1}>원격 콘텐츠 목록(카탈로그) 파일 이름이 앱 버전을 따르도록 되어 있어서, 버전마다 카탈로그가 따로 생깁니다. 그래서 새 버전을 올려도 업데이트하지 않은 옛 앱은 자기 카탈로그를 계속 받습니다.</NumItem>
            <NumItem n={2}>CDN 에 카탈로그를 올리기 전에 지금 올라가 있는 것을 공개되지 않는 이력 폴더에 보관하게 했습니다. 잘못 올렸을 때는 메뉴나 CI 작업 하나로 직전 카탈로그를 되돌리고, CDN 에서 다시 받아 같은지 확인합니다. 옛 번들 파일은 지우지 않기 때문에 되돌린 카탈로그도 그대로 동작합니다.</NumItem>
            <NumItem n={3}>빌드할 때 커밋 번호를 앱에 넣어, 버그 리포트에 &lsquo;0.1.0 (3ee38b0c)&rsquo;처럼 어느 커밋으로 만든 앱인지 남게 했습니다. 빌드가 끝나면 버전과 커밋 정보는 원래대로 돌려 놓아 저장소에 흔적이 남지 않습니다.</NumItem>
            <NumItem n={4}>처음에는 버전을 넘기는 명령줄 인자를 <code>-version</code> 으로 지었는데, 빌드가 시작하자마자 끝났습니다. 유니티 자체에 에디터 버전을 출력하고 종료하는 같은 이름의 인자가 있었기 때문입니다. 이름을 <code>-appVersion</code> 으로 바꾼 뒤 실행기에서 출시 빌드를 직접 돌려, 테스트 118개 통과, 실행 파일 154MB, 카탈로그 catalog_0.1.0 생성, 빌드 뒤 설정 원상 복구까지 확인했습니다.</NumItem>
            <NumItem n={5}>첫 태그로 실제 릴리스를 돌리자 변경 목록 단계가 실패했습니다. 첫 태그라 &lsquo;이전 태그 찾기&rsquo; 명령이 오류 메시지를 내는데, GitHub Actions 는 PowerShell 스크립트를 오류가 나면 멈추는 설정으로 실행하기 때문에 Windows PowerShell 5.1 에서는 외부 명령의 오류 메시지만으로도 스크립트가 중단됩니다. 오류를 내지 않는 방식으로 이전 태그를 찾게 고쳤습니다. 또 커밋 메시지에 CI 건너뛰기 표시가 들어간 커밋에 태그를 달면 릴리스 작업까지 건너뛴다는 것도 이때 알게 되어 작업 규칙에 적었습니다.</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>② 장시간 자동 플레이</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            기존 자동 플레이 테스트는 정해진 시나리오를 한 번씩만 확인해서, 오래 플레이할 때만 쌓이는 문제는 잡지 못합니다. 그래서 봇이 밭 갈기와 심기, 물 주기, 수확, 나무와 바위 캐기,
            광산 탐험, 잠, 저장, 다시 불러오기를 무작위로 계속 되풀이하게 하고, 30초마다 프레임 시간, 메모리, 텍스처와 오브젝트 수, 세이브 크기, 에러 수를 기록하게 했습니다.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
            <NumItem n={1}>끝나면 처음 1분(캐시와 오브젝트 풀이 만들어지는 시간)을 빼고, 앞쪽 4분의 1과 뒤쪽 4분의 1을 비교해 메모리나 오브젝트가 계속 늘었는지, 프레임이 느려졌는지, 에러가 하나라도 났는지 판정합니다. 실패하면 무작위 씨앗 값을 알려 줘서 같은 행동 순서로 다시 돌릴 수 있습니다.</NumItem>
            <NumItem n={2}>에디터에서 5분 돌렸을 때 행동 301번, 게임 날짜로 28일이 지나는 동안 에러는 없었고 메모리(805.5MB → 806.4MB), 텍스처, 오브젝트 수가 그대로였습니다. 매일 새벽 3시에 CI 가 한 시간씩 돌리도록 예약했습니다.</NumItem>
            <NumItem n={3}>CI 에 붙인 뒤 일반 테스트 시간이 6분에서 11분으로 늘어난 것을 보고 원인을 찾았습니다. 유니티를 명령줄로 실행하면 &lsquo;직접 고를 때만 돈다&rsquo;는 Explicit 표시가 지켜지지 않아서, 5분짜리 장시간 테스트와 성능 측정 4개가 커밋마다 돌고 있었습니다. 명령줄에서는 이름을 직접 지정했을 때만 돌게 고쳐 다시 6분으로 줄였습니다.</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>③ 게임패드</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            이 게임은 마우스로 칸을 클릭해 이동하고 상호작용하기 때문에, 패드 조작을 위해 이동과 상호작용 코드를 새로 짜는 대신 가상 마우스 방식을 골랐습니다.
            왼쪽 스틱이 화면의 커서를 움직이고 A 와 X 가 왼쪽, 오른쪽 클릭이 되며, 이 입력은 Input System 에 마우스 장치를 하나 더 만들어 흘려 넣습니다.
            그래서 기존 클릭 처리와 UI 가 코드 변경 없이 패드 입력을 그대로 받습니다.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
            <NumItem n={1}>창 열기와 닫기, 퀵슬롯 넘기기(LB · RB), 낚시 챔질 같은 기능은 기존 입력 액션에 패드 버튼을 더해 연결했습니다. 패드를 쓰기 시작하면 화면의 키 안내가 &lsquo;숙련도 (K)&rsquo;에서 &lsquo;숙련도 (View)&rsquo;처럼 패드 버튼 이름으로 바뀌고, 키보드를 누르면 돌아옵니다.</NumItem>
            <NumItem n={2}>진짜 마우스와 가상 마우스가 함께 있으면 포인터 위치를 어느 쪽에서 읽을지가 문제였습니다. 포인터 액션을 마지막으로 움직인 장치를 따르는 방식으로 바꿔 해결했습니다.</NumItem>
            <NumItem n={3}>UI 기본 입력은 A 를 &lsquo;선택된 버튼 누르기&rsquo;로도 씁니다. 그래서 커서로 누른 버튼이 선택된 채 남으면 다음에 A 를 누를 때 그 버튼이 한 번 더 눌릴 수 있었습니다. 패드 모드에서는 글자 입력칸이 아닌 선택을 풀어 두게 했습니다.</NumItem>
          </ul>

          <h3 style={SUB_TITLE}>④ 처리되지 않은 예외 수집</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "20px" }}>
            버그 리포트는 사람이 F8 을 눌러야 남기 때문에, 아무도 보지 못한 순간에 난 오류는 사라집니다. 그래서 모든 빌드에서 로그를 지켜보다가 처리되지 않은 예외가 나면
            예외 종류, 숫자를 지운 메시지, 처음 호출된 위치로 같은 오류를 하나로 묶어 기기에 횟수와 처음, 마지막 시각, 앱 버전을 쌓게 했습니다.
            개발 빌드에서는 처음 보는 오류가 나는 순간 버그 리포트를 자동으로 만들고, 매 프레임 나는 오류가 리포트를 쏟아내지 않도록 한 세션에 5개, 10초에 하나로 제한했습니다.
            로그는 다른 스레드에서도 들어오므로, 메인 스레드에서만 쓸 수 있는 유니티 값(저장 경로, 앱 버전)은 시작할 때 미리 읽어 두었습니다.
            자동 플레이 테스트에서 매 프레임 같은 예외를 10번 던졌을 때 리포트는 하나만 생기고 횟수는 10으로 기록되는 것을 확인했습니다.
          </p>

          <h3 style={SUB_TITLE}>⑤ 유사 번역 검사</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            유사 번역(pseudo-localization)은 번역을 맡기기 전에 모든 글을 일부러 &lsquo;[Îñṽéñţöŕý ~~~]&rsquo;처럼 바꿔 화면을 검사하는 현지화 현업의 방법입니다.
            괄호가 없는 글은 번역 함수를 거치지 않은 글이고, 30% 늘린 길이로 더 긴 언어가 들어와도 칸이 버티는지, 악센트 글자로 글꼴에 그 글자가 있는지를 함께 봅니다.
            자리 표시({"{0}"})와 서식 태그는 그대로 두어 문장 조립이 깨지지 않게 했고, 번역표의 영어 문장 2,699개 모두에서 이것을 테스트로 확인합니다.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>처음 화면을 검사하자 세 군데가 나왔습니다. HUD 의 날짜 &lsquo;Spring 1&rsquo;과 시각 &lsquo;6:00 AM&rsquo;은 코드에 영어로 고정돼 있어 한국어로 플레이해도 영어로 보였는데, 기존 검사는 한글 문자열만 찾았기 때문에 지나쳤습니다. 이제 한국어에서는 &lsquo;봄 1일&rsquo;, &lsquo;오전 6:00&rsquo;으로 보입니다. 나머지 하나는 시스템 알림 상자에 남아 있던 기본 글자 &lsquo;New Text&rsquo;여서 지웠습니다.</NumItem>
            <NumItem n={2}>처음에는 악센트 글자 표를 Dictionary 로 만들었는데, 앞에서 만든 코드 분석기가 &lsquo;플레이할 때마다 비워야 하는 static&rsquo;으로 잡았습니다. 바뀔 일이 없는 표라서 같은 순서의 문자열 상수 두 개로 바꿨습니다.</NumItem>
            <NumItem n={3}>지금 출시 언어인 영어로는 모든 칸이 맞지만, 30% 더 긴 글을 넣으면 28칸이 모자랍니다. 다른 언어를 더할 때 먼저 손볼 곳의 목록으로 남겨 두었습니다.</NumItem>
          </ul>
          <Card style={{ background: "rgba(74,222,128,0.06)", border: `1px solid ${GREEN}30`, marginBottom: 0 }}>
            <p style={{ margin: 0, fontSize: "13px", lineHeight: 1.75, opacity: 0.85 }}>
              <span style={{ color: GREEN, fontWeight: 700 }}>확인 — </span>
              v0.1.0 태그로 릴리스 작업 전체를 실제로 돌려, 자동 플레이 테스트와 출시 빌드를 거쳐 실행 파일(61.5MB), 원격 콘텐츠(19.3MB), 빌드 리포트가 붙은 GitHub Release 초안이 13분 만에 만들어지는 것을 확인했습니다. 다섯 가지를 모두 넣은 뒤 EditMode 테스트 119개와 자동 플레이 테스트 26개가 CI 에서 통과했습니다(장시간 자동 플레이와 성능 측정은 따로 돈다).
            </p>
          </Card>
        </section>

        {/* ── 자동 테스트 ── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>자동 테스트</h2>
          <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, marginBottom: "20px" }}>
            이 구조에서 가장 흔한 실패는 예외가 아니라 <strong style={{ color: "#e0e0e0" }}>아무 일도 일어나지 않는 것</strong>입니다.
            인스펙터 칸 하나, SO 필드 하나가 비면 에러 없이 기능이 사라집니다. 그 지점을 EditMode 테스트 119개로 고정했고, 빌드할 때와 코드를 올릴 때마다(CI) 먼저 돌게 했습니다. 실제 게임을 띄워 확인하던 것은 자동 플레이 테스트로 옮겼습니다.
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
                  { n: "규칙 (16)", r: "씬 없이 계산만", u: "숙련도 곡선 · 기계 공정(대기 → 작업 → 완성) · 바깥 범위 경계 · 가축 암수 산출 · 받는 피해 공식 · 길찾기 버퍼 재사용" },
                  { n: "저장 계약 (6)", r: "Capture → Restore 왕복", u: "지갑 · 숙련도 · 방어구(입기 · 맞바꿈 · 벗기) · 이름 성별, 옛 세이브(항목 수가 적은 것) 허용, 고정 SaveKey 중복 없음" },
                  { n: "세이브 변환 (5)", r: "옛 세이브 → 최신 형식", u: "단계 수 = 버전 · 옛 작물 칸 → 밭 + 작물 · 더 새 세이브는 그대로 · 실제 옛 세이브 샘플이 지금 데이터로 모두 풀림 · 원본 백업 한 번" },
                  { n: "데이터 무결성 (17)", r: "SO · 설정 애셋 · 코드 전수 검사", u: "도구 동작 hitFrame · 모든 아이템이 레지스트리에 있는가 · 이름/id 중복 · 판매가 = 새끼 값 × 1.5 · Addressables 원격/로컬 그룹 설정 · 몬스터 데이터와 그림이 서로 맞물리는가 · 광산 1~40층 모두 몬스터가 있고 깊을수록 강한가 · 플레이마다 비워야 하는 static 에 초기화가 있는가 · 맵의 나무 · 바위 정의가 모두 레지스트리에 · 방어구 10단계 × 4부위 · 레시피 · 해금 경로" },
                  { n: "씬 배선 (10)", r: "메인 Scene 의 인스펙터 칸 · 타일맵", u: "세이브 목록 누락 · 키 중복 · 순서, GameManager 주입 칸, 새 시스템 칸, 빠진 스크립트, 상호작용 타일맵엔 상호작용하는 것만 · Decor 에 러그나 쓸 수 있는 가구가 그림으로만 있지 않은가 · 두 제작대의 방어구 레시피 · 인벤토리 방어구 칸 배선" },
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
          <h3 style={SUB_TITLE}>자동 플레이 테스트</h3>
          <p style={{ fontSize: "13.5px", opacity: 0.7, lineHeight: 1.8, marginBottom: "12px" }}>
            사람이 하던 플레이 확인을 PlayMode 테스트로 옮겼습니다. 메인 Scene 을 띄우고 시나리오를 돌리며, 도중에 에러가 찍히면 실패입니다.
            세이브는 테스트 전용 파일에 써서 <strong style={{ color: "#f0f0f0" }}>플레이어의 세이브는 건드리지 않습니다</strong>(전후 해시 동일).
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
            <NumItem n={1}>새 게임 → 밭 갈기 → 제철 작물 심기 → 물 → 잠 → 저장 → Scene 다시 띄워 불러오기 — 날짜 · 밭 · 작물이 자란 정도 · 가방 · 소지금 · 맵의 나무 · 바위 개수가 그대로</NumItem>
            <NumItem n={2}>광산 1 → 5층 — 도착 칸 · 몬스터가 선 칸이 걸을 수 있는 칸인지, 그 층 목록의 몬스터만 나오는지, 나가면 몬스터가 모두 정리되는지</NumItem>
            <NumItem n={3}>광산 지형을 덮어써 칠해도(성능 개선) 새로 칠한 것과 칸마다 같은지 — 타일 · 벽 RuleTile 이 고른 그림 · 회전까지</NumItem>
            <NumItem n={4}>방어구를 입으면 방어력이 오르고 받는 피해가 공식대로 주는지, 인벤토리에 이름 · 성별이 한글로 보이는지, 저장 → 불러오기</NumItem>
          </ul>
          <Card style={{ background: "rgba(74,222,128,0.06)", border: `1px solid ${GREEN}30`, marginBottom: "16px" }}>
            <p style={{ margin: "0 0 8px", fontSize: "13px", lineHeight: 1.75, opacity: 0.85 }}>
              <span style={{ color: GREEN, fontWeight: 700 }}>테스트가 잡은 실제 버그 — </span>
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <NumItem n={1}>몬스터가 <strong style={{ color: "#f0f0f0" }}>광석 바위 속에 스폰</strong> — 광산은 바닥 목록을 만든 뒤 그 위에 광석(30%)을 까는데, 스포너가 그 목록을 그대로 썼다 → 스폰하는 순간 비어 있는 칸만</NumItem>
              <NumItem n={2}>같은 이유로 <strong style={{ color: "#f0f0f0" }}>광산 도착 지점 · 필수 사다리가 바위 위</strong>에 놓일 수 있었다 → 바위 없는 칸에서 고른다</NumItem>
              <NumItem n={3}>맵의 나무 · 바위 14종이 저장용 레지스트리에 없어 <strong style={{ color: "#f0f0f0" }}>저장 → 불러오면 조용히 사라짐</strong> — 개발 중 늘 새 게임으로 시작해 드러나지 않았다 → 등록 + 누락을 잡는 테스트</NumItem>
            </ul>
          </Card>

          <h3 style={SUB_TITLE}>첫 기능 테스트 시 발견된 문제</h3>
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
            테스트는 자기 어셈블리(EditMode 는 FarmGame.Tests, PlayMode 는 FarmGame.PlayTests)에 있습니다.
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
          {/* 실제 게임 화면(세로 480x720)은 한 줄에 원래 비율로, 나머지 장면은 2열 16:9 */}
          {[GALLERY.filter(g => g.tall), GALLERY.filter(g => !g.tall)].map((group, gi) => (
          <div key={gi} style={{
            display: "grid", gap: "12px", marginBottom: gi === 0 ? "12px" : 0,
            gridTemplateColumns: gi === 0 ? "repeat(auto-fit, minmax(150px, 1fr))" : "1fr 1fr",
          }}>
            {group.map(({ src, label }) => (
              <div key={src} style={{
                position: "relative", borderRadius: "8px", overflow: "hidden",
                background: "#08150f", aspectRatio: gi === 0 ? "2/3" : "16/9",
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
          ))}
        </section>

      </div>
    </div>
  );
}
