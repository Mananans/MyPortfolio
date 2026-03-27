"use client";
import Link from "next/link";

// ─────────────────────────────────────────────
//  이미지 경로 설정
//  아래 경로에 이미지 파일만 넣으면 자동 적용됩니다.
//
//  📁 프로젝트 루트/public/images/2dport/
//      ├── hero.png          ← 상단 히어로 이미지 (권장: 1200×500)
//      ├── gallery-1.png     ← 갤러리 1번 (권장: 800×450)
//      ├── gallery-2.png     ← 갤러리 2번
//      ├── gallery-3.png     ← 갤러리 3번
//      └── gallery-4.png     ← 갤러리 4번
// ─────────────────────────────────────────────
const HERO_IMAGE = "/images/2dport-2025/hero.png";

const GALLERY = [
  { src: "/images/2dport-2025/gallery-1.png", label: "Object Interaction 화면" },
  { src: "/images/2dport-2025/gallery-2.png", label: "Puzzle UI 화면" },
  { src: "/images/2dport-2025/gallery-3.png", label: "TileMap 구조 편집 화면 - 1" },
  { src: "/images/2dport-2025/gallery-4.png", label: "TileMap 구조 편집 화면 - 2" },
];

// ─────────────────────────────────────────────

const TAG_STYLE = {
  display: "inline-block",
  padding: "4px 12px",
  borderRadius: "999px",
  border: "1px solid #2dd4bf",
  color: "#2dd4bf",
  fontSize: "13px",
  fontWeight: 500,
  marginRight: "8px",
  marginBottom: "8px",
  letterSpacing: "0.02em",
};

const SECTION_TITLE_STYLE = {
  fontSize: "17px",
  fontWeight: 700,
  color: "#2dd4bf",
  borderLeft: "3px solid #2dd4bf",
  paddingLeft: "12px",
  marginBottom: "16px",
  letterSpacing: "0.01em",
};

function CheckItem({ children }) {
  return (
    <li style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
      marginBottom: "10px",
      lineHeight: "1.7",
      fontSize: "15px",
      opacity: 0.9,
    }}>
      <span style={{ color: "#2dd4bf", marginTop: "2px", flexShrink: 0 }}>✓</span>
      <span>{children}</span>
    </li>
  );
}

function ShieldItem({ children }) {
  return (
    <li style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
      marginBottom: "10px",
      lineHeight: "1.7",
      fontSize: "15px",
      opacity: 0.9,
    }}>
      <span style={{ color: "#2dd4bf", marginTop: "2px", flexShrink: 0 }}>◈</span>
      <span>{children}</span>
    </li>
  );
}

export default function Page() {
  return (
    <div style={{
      background: "#0d0d0d",
      minHeight: "100vh",
      color: "#e8e8e8",
      fontFamily: "'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
    }}>

      {/* ── Hero Image ── */}
      <div style={{
        position: "relative",
        width: "100%",
        height: "320px",
        overflow: "hidden",
        background: "#1a1a2e",
      }}>
        <img
          src={HERO_IMAGE}
          alt="2DPort 히어로 이미지"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
          onError={(e) => {
            // 이미지 없을 때 폴백: 그라디언트 배경 유지
            e.currentTarget.style.display = "none";
          }}
        />
        {/* 하단 페이드 오버레이 */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "80px",
          background: "linear-gradient(transparent, #0d0d0d)",
        }} />
        {/* Back Button */}
        <Link href="/" style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          background: "rgba(0,0,0,0.6)",
          border: "1px solid rgba(255,255,255,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "18px",
          textDecoration: "none",
          zIndex: 10,
        }}>×</Link>
      </div>

      {/* ── Content ── */}
      <div style={{
        maxWidth: "760px",
        margin: "0 auto",
        padding: "36px 24px 80px",
      }}>

        {/* Tags */}
        <div style={{ marginBottom: "18px" }}>
          {["Unity", "C#", "2D Game", "Scriptable", "TileMap"].map(tag => (
            <span key={tag} style={TAG_STYLE}>{tag}</span>
          ))}
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: "30px",
          fontWeight: 800,
          marginBottom: "8px",
          lineHeight: "1.3",
          color: "#f0f0f0",
        }}>
          2DPort 2025
        </h1>
        <p style={{
          fontSize: "16px",
          fontWeight: 700,
          color: "#2dd4bf",
          marginBottom: "36px",
        }}>
          퍼즐 기반 2D 공포 게임 개인 프로젝트
        </p>

        {/* Project Info */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE_STYLE}>Project Info</h2>
          <p style={{ lineHeight: "1.85", fontSize: "15px", opacity: 0.85, marginBottom: "16px" }}>
            플레이어의 상호작용과 퍼즐 해결을 중심으로 진행되는 2D 퍼즐 공포 게임.
            TileMap 기반 스테이지와 다양한 Puzzle Object를 통해 게임 플레이를 구성하였다.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <p style={{ fontSize: "14px", color: "#2dd4bf", opacity: 0.9, margin: 0 }}>
              • 엔진: Unity / 언어: C#
            </p>
            <p style={{ fontSize: "14px", color: "#2dd4bf", opacity: 0.9, margin: 0 }}>
              • 스테이지 구성: TileMap 기반 3개 스테이지 (First / Second / Thrid)
            </p>
            <p style={{ fontSize: "14px", color: "#2dd4bf", opacity: 0.9, margin: 0 }}>
              • 주요 시스템: GameManager, UIManager, Object Interaction, Puzzle UI
            </p>
          </div>
        </section>

        {/* Key Role */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE_STYLE}>Key Role & Implementation</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <CheckItem>ScriptableObject 기반 구조로 Object 다형성 및 객체 추가 간편화 설계</CheckItem>
            <CheckItem>Puzzle Type마다 다른 Body를 Custom Inspector 및 Init Button으로 동적 생성</CheckItem>
            <CheckItem>GameManager / UIManager 역할 분리 및 각 Manager 간 캡슐화 구현</CheckItem>
            <CheckItem>TileMap 다층 구조로 Map 디자인 및 충돌 오브젝트 분리 처리</CheckItem>
            <CheckItem>Puzzle Type에 따른 UI 분기, Player Input Controller 및 value 출력 처리</CheckItem>
            <CheckItem>Text Animation 중 Key Input 시 즉각 종료, Character Emotion 기반 이미지 출력</CheckItem>
          </ul>
        </section>

        {/* Problem & Solution */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE_STYLE}>Problem & Solution</h2>
          <div style={{
            background: "rgba(255,255,255,0.04)",
            borderRadius: "8px",
            padding: "20px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}>
            <p style={{ marginBottom: "12px", fontSize: "15px", lineHeight: "1.75", margin: "0 0 12px" }}>
              <span style={{ fontWeight: 700, color: "#f87171" }}>문제: </span>
              <br />단순 Class 직렬화를 통한 Puzzle Body 다형성 구현 불가.
              <br />모든 Puzzle Object 작업 시 설계, 시퀀스 흐름 저해.
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.75", margin: 0 }}>
              <span style={{ fontWeight: 700, color: "#2dd4bf" }}>해결: </span>
              <br />ScriptableObject 구조로 전환하고 PuzzleEdit.cs로 Unity GUI를 구현하여
              <br />Init Button Click 시 Body를 동적으로 형성하도록 설계. 퍼즐 확장성 및 작업 효율 확보.
            </p>
          </div>
        </section>

        {/* Stage Design */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE_STYLE}>Stage Design</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <CheckItem>FirstStage — Object Interaction, CutScene Play</CheckItem>
            <CheckItem>SecondStage — 다음 Object까지의 자동 이동, 플레이어 스토리 진행 중점</CheckItem>
            <CheckItem>ThridStage — Puzzle Object Interaction</CheckItem>
          </ul>
        </section>

        {/* Outcome */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE_STYLE}>Outcome</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <ShieldItem>ScriptableObject 전환으로 퍼즐 확장성 및 데이터 구조 개선</ShieldItem>
            <ShieldItem>Interaction UI / Puzzle UI / 기타 UI (Inventory, Sound, Exit) 전체 구현</ShieldItem>
            <ShieldItem>보강 및 테스트 완료, 추가 요청사항 대응</ShieldItem>
          </ul>
        </section>

        {/* Future Direction */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE_STYLE}>확장 방향성</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <CheckItem>Sound Resource 추가 확보 및 적용</CheckItem>
            <CheckItem>Stage 확장 및 스토리 확장</CheckItem>
            <CheckItem>Player를 Kill 하는 Enemy NPC 구현 및 적용</CheckItem>
            <CheckItem>Puzzle 종류 확장</CheckItem>
            <CheckItem>아이템 사용 관련 Function 확장</CheckItem>
          </ul>
        </section>

        {/* ── Project Gallery ── */}
        <section>
          <h2 style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#f0f0f0",
            marginBottom: "16px",
          }}>Project Gallery</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
          }}>
            {GALLERY.map(({ src, label }) => (
              <div key={src} style={{
                position: "relative",
                borderRadius: "8px",
                overflow: "hidden",
                background: "#1a1a2e",
                aspectRatio: "16/9",
                border: "1px solid rgba(45,212,191,0.15)",
              }}>
                <img
                  src={src}
                  alt={label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                {/* 라벨 오버레이 */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(transparent, rgba(0,0,0,0.78))",
                  padding: "20px 12px 10px",
                }}>
                  <p style={{
                    fontSize: "12px",
                    color: "#e8e8e8",
                    margin: 0,
                  }}>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
