"use client";

import Link from "next/link";

// ─────────────────────────────────────────────
//  이미지 경로 설정
//  📁 public/images/cannon-war/
//      ├── hero.png
//      ├── gallery-1.png  ← Firebase DB 구조
//      ├── gallery-2.png  ← 로그인 화면
//      ├── gallery-3.png  ← 회원가입 화면
//      └── gallery-4.png  ← 비밀번호 찾기 화면
// ─────────────────────────────────────────────
const HERO_IMAGE = "/images/cannon-war/hero.png";

const GALLERY = [
  { src: "/images/cannon-war/gallery-1.png", label: "Firebase Realtime DB 구조" },
  { src: "/images/cannon-war/gallery-2.png", label: "로그인 화면" },
  { src: "/images/cannon-war/gallery-3.png", label: "회원가입 화면" },
  { src: "/images/cannon-war/gallery-4.png", label: "비밀번호 찾기 화면" },
];

const TEAL = "#2dd4bf";

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

// Firebase DB 구조 시각화 컴포넌트
function DbTree() {
  const seats = [
    {
      name: "UserDataSeat",
      color: TEAL,
      fields: ["NickName", "UID", "UserID", "UserPW"],
      desc: "유저 기본 정보 저장",
    },
    {
      name: "UserBattleInfoSeat",
      color: "#60a5fa",
      fields: ["UID (KEY)", "빈 값으로 초기화"],
      desc: "배틀 정보 초기 슬롯",
    },
    {
      name: "UserCannonSeat",
      color: "#a78bfa",
      fields: ["UID (KEY)", "빈 값으로 초기화"],
      desc: "대포 정보 초기 슬롯",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {seats.map(seat => (
        <div key={seat.name} style={{
          background: "rgba(255,255,255,0.03)",
          border: `1px solid ${seat.color}30`,
          borderLeft: `3px solid ${seat.color}`,
          borderRadius: "8px",
          padding: "16px 20px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <span style={{ fontSize: "14px", fontWeight: 700, color: seat.color }}>{seat.name}</span>
            <span style={{
              fontSize: "11px", padding: "2px 8px", borderRadius: "999px",
              background: `${seat.color}18`, color: seat.color,
            }}>{seat.desc}</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {seat.fields.map(f => (
              <span key={f} style={{
                fontSize: "12px", padding: "3px 10px", borderRadius: "6px",
                background: "rgba(255,255,255,0.06)", color: "#ccc",
                border: "1px solid rgba(255,255,255,0.08)",
                fontFamily: "monospace",
              }}>{f}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CannonWarPage() {
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
        background: "linear-gradient(160deg, #0d0d1a 0%, #12102a 40%, #1a0f3a 100%)",
        overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(96,165,250,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div style={{
          position: "absolute", width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)",
          top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        }} />
        <img
          src={HERO_IMAGE}
          alt="Cannon War 히어로"
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
          {["Unity 6", "C#", "Firebase", "Realtime DB", "User Auth"].map(t => (
            <span key={t} style={TAG}>{t}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "8px", lineHeight: 1.3, color: "#f0f0f0" }}>
          Cannon War
        </h1>
        <p style={{ fontSize: "16px", fontWeight: 700, color: TEAL, marginBottom: "36px" }}>
          Firebase 기반 유저 인증 및 데이터 테이블 설계
        </p>

        {/* Project Info */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>Project Info</h2>
          <p style={{ lineHeight: 1.85, fontSize: "15px", opacity: 0.85, marginBottom: "16px" }}>
            물리 기반 포격 게임 Cannon War에서 Firebase Realtime Database를 활용하여
            유저 데이터 테이블을 설계하고, 로그인 / 회원가입 / 비밀번호 찾기 기능을 구현한 작업.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {[
              "엔진: Unity 6 / 언어: C#",
              "외부 서비스: Firebase Realtime Database",
              "플러그인: Firebase package",
              "담당 파트: FirebaseManager 설계 및 유저 인증 전체",
            ].map(t => (
              <p key={t} style={{ fontSize: "14px", color: TEAL, opacity: 0.9, margin: 0 }}>• {t}</p>
            ))}
          </div>
        </section>

        {/* DB 구조 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>Firebase DB 구조</h2>
          <p style={{ fontSize: "14px", opacity: 0.55, marginBottom: "16px" }}>
            회원가입 시 UID를 KEY로 3개의 Seat에 데이터를 분산 저장.
          </p>
          <DbTree />
        </section>

        {/* FirebaseManager 기능 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>FirebaseManager 기능 구현</h2>

          {/* 로그인 */}
          <Card>
            <p style={{ fontSize: "15px", fontWeight: 700, color: "#f0f0f0", marginBottom: "14px" }}>
              1. 로그인
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <CheckItem>User ID를 Key로 데이터 존재 유무를 판단.</CheckItem>
              <CheckItem>데이터가 존재할 시 해당하는 데이터를 추출해 User VO Set.</CheckItem>
              <CheckItem>User VO 내 User PW와 일치하는지 비교.</CheckItem>
              <CheckItem>일치한다면 로그인 완료, Scene 전환 실행.</CheckItem>
              <CheckItem>일치하지 않는다면 에러 메세지 송출.</CheckItem>
            </ul>
          </Card>

          {/* 비밀번호 찾기 */}
          <Card>
            <p style={{ fontSize: "15px", fontWeight: 700, color: "#f0f0f0", marginBottom: "14px" }}>
              2. 비밀번호 찾기
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <CheckItem>User ID를 Key로 데이터 존재 유무를 판단.</CheckItem>
              <CheckItem>데이터가 존재할 시 해당하는 데이터를 추출해 User VO Set.</CheckItem>
              <CheckItem>User VO 내 User PW를 UI로 출력.</CheckItem>
            </ul>
          </Card>

          {/* 회원가입 */}
          <Card>
            <p style={{ fontSize: "15px", fontWeight: 700, color: "#f0f0f0", marginBottom: "14px" }}>
              3. 회원가입
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <CheckItem>User ID를 Key로 데이터 존재 유무를 판단.</CheckItem>
              <CheckItem>데이터가 없을 시 다음 화면, Nick Name 설정 화면 송출.</CheckItem>
              <CheckItem>
                Nick Name을 입력하고 버튼 클릭으로 회원가입 기능 실행.
              </CheckItem>
            </ul>
            <div style={{ marginTop: "4px", paddingLeft: "8px" }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <SubItem>입력된 데이터를 UserData Seat에 입력.</SubItem>
                <SubItem>데이터를 입력하며 부여한 UID를 KEY로 Battle Info Seat, User Cannon Seat에 빈 값을 입력.</SubItem>
              </ul>
            </div>
          </Card>
        </section>

        {/* 사용 기술 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>사용 프로그램 및 플러그인</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Card style={{ marginBottom: 0 }}>
              <p style={{ fontSize: "13px", fontWeight: 700, color: TEAL, marginBottom: "6px" }}>공통</p>
              <p style={{ fontSize: "14px", opacity: 0.8 }}>Unity 6</p>
            </Card>
            <Card style={{ marginBottom: 0 }}>
              <p style={{ fontSize: "13px", fontWeight: 700, color: TEAL, marginBottom: "6px" }}>FirebaseManager</p>
              <p style={{ fontSize: "14px", opacity: 0.8 }}>Firebase package</p>
            </Card>
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
                background: "#0d0d1a", aspectRatio: "16/9",
                border: "1px solid rgba(96,165,250,0.15)",
              }}>
                <img
                  src={src} alt={label}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onError={e => { e.currentTarget.style.display = "none"; }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "linear-gradient(rgba(96,165,250,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.05) 1px, transparent 1px)",
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
