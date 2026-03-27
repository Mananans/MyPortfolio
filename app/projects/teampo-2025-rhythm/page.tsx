"use client";

import Link from "next/link";

// ─────────────────────────────────────────────
//  이미지 경로 설정
//  📁 public/images/rhythm/
//      ├── hero.png
//      ├── gallery-1.png  ← 편집 UI 화면
//      ├── gallery-2.png  ← 노트 편집 화면
//      ├── gallery-3.png  ← Python 파이프라인
//      └── gallery-4.png  ← 최종 결과물
// ─────────────────────────────────────────────
const HERO_IMAGE = "/images/rhythm/hero.png";

const GALLERY = [
  { src: "/images/rhythm/gallery-1.png", label: "필수 프로그램 설치 화면" },
  { src: "/images/rhythm/gallery-2.png", label: "음악 레이어 분할, 노트 작성 화면" },
  { src: "/images/rhythm/gallery-3.png", label: "작성 후 출력 노트 화면" },
  { src: "/images/rhythm/gallery-4.png", label: "최종 JSON 산출물" },
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

function DotItem({ children }) {
  return (
    <li style={{
      display: "flex", alignItems: "flex-start", gap: "10px",
      marginBottom: "8px", lineHeight: "1.7", fontSize: "14px", opacity: 0.8,
    }}>
      <span style={{ color: TEAL, marginTop: "2px", flexShrink: 0 }}>•</span>
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

function IssueCard({ title, items }) {
  return (
    <Card>
      <p style={{ fontWeight: 700, color: "#f87171", marginBottom: "12px", fontSize: "15px" }}>⚠ {title}</p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item, i) =>
          typeof item === "string"
            ? <DotItem key={i}>{item}</DotItem>
            : <SubItem key={i}>{item.sub}</SubItem>
        )}
      </ul>
    </Card>
  );
}

export default function RhythmPage() {
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
        background: "linear-gradient(160deg, #0d1a1a 0%, #0a2020 40%, #0f3030 100%)",
        overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(45,212,191,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div style={{
          position: "absolute", width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(45,212,191,0.1) 0%, transparent 70%)",
          top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        }} />
        <img
          src={HERO_IMAGE}
          alt="Rhythm Game 히어로"
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
          {["Unity", "C#", "Python", "AI", "FFmpeg", "MML", "자동화"].map(t => (
            <span key={t} style={TAG}>{t}</span>
          ))}
        </div>

        <h1 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "8px", lineHeight: 1.3, color: "#f0f0f0" }}>
          Rhythm Game
        </h1>
        <p style={{ fontSize: "16px", fontWeight: 700, color: TEAL, marginBottom: "36px" }}>
          AI + 자동화 기반 리듬 게임 채보 에디터
        </p>

        {/* Project Info */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>Project Info</h2>
          <p style={{ lineHeight: 1.85, fontSize: "15px", opacity: 0.85, marginBottom: "16px" }}>
            MP3 파일을 입력받아 Python 기반 AI/음악 분석 파이프라인을 통해 자동으로 MML 채보를 생성하고,
            Unity 에디터 툴에서 노트를 편집·저장할 수 있는 리듬 게임 채보 자동화 시스템.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {[
              "엔진: Unity / 언어: C#, Python",
              "외부 도구: FFmpeg, Spleeter (Python Plugin)",
              "데이터 포맷: MML → JSON 변환 파이프라인",
            ].map(t => (
              <p key={t} style={{ fontSize: "14px", color: TEAL, opacity: 0.9, margin: 0 }}>• {t}</p>
            ))}
          </div>
        </section>

        {/* 필요 기술 확인 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>필요 기술 확인</h2>
          <p style={{ fontSize: "14px", opacity: 0.55, marginBottom: "14px" }}>목표 기능 구현을 위한 필요 기술 조사 및 정리.</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <CheckItem>C# 으로 MML 도출은 가능하나 정확성이 낮으며 악기 분류는 불가능 → Python Plugin 도입 필요</CheckItem>
            <CheckItem>Unity에서 Process를 통하여 Python 구동 필요</CheckItem>
            <CheckItem>FFmpeg를 병행 실행하여 음악 구조 파악 기능 활용</CheckItem>
            <CheckItem>추가 요구되는 프로그램 설치에 따라 배치파일을 통한 설치 자동화 필요</CheckItem>
          </ul>
        </section>

        {/* 개발 환경 구성 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>개발 환경 구성</h2>
          <p style={{ fontSize: "14px", opacity: 0.55, marginBottom: "14px" }}>Unity 설치 및 필요 기술에 따른 추가 개발 환경 구성.</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <CheckItem>Python 설치</CheckItem>
            <CheckItem>Python 가상환경 설치</CheckItem>
            <CheckItem>Python Plugin Install</CheckItem>
            <CheckItem>FFmpeg 설치</CheckItem>
          </ul>
        </section>

        {/* 개발 기술 구현 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>개발 기술 구현</h2>
          <p style={{ fontSize: "14px", opacity: 0.55, marginBottom: "14px" }}>사용 기술을 Part 별로 나누어 부분적으로 구현.</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <CheckItem>MP3 파일을 각 악기 파트의 WAV 파일로 변환</CheckItem>
            <CheckItem>WAV 파일을 MML 코드의 JSON 파일로 변환</CheckItem>
            <CheckItem>
              MP3 파일의 노래 정보 추출
              <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0" }}>
                {["BPM", "Duration", "박자"].map(s => <SubItem key={s}>{s}</SubItem>)}
              </ul>
            </CheckItem>
            <CheckItem>환경 구성 Batch 파일 구현</CheckItem>
          </ul>
        </section>

        {/* 개발 진행 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>개발 진행</h2>

          <p style={{ fontSize: "14px", fontWeight: 700, color: "#ccc", marginBottom: "10px" }}>▸ 외부 구동 프로그램 기동</p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
            <CheckItem>Unity에서 C# Process를 통하여 각 기능의 Python 프로그램을 기동</CheckItem>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 4px 20px" }}>
              {[
                "원곡 노래 파일에서 노래에 대한 정보 추출",
                "원곡 노래 파일에서 각 악기별 분류 및 저장",
                "분류된 WAV 파일에서 MML Json으로 데이터 변환",
              ].map(s => <SubItem key={s}>{s}</SubItem>)}
            </ul>
          </ul>
          <br />
          <p style={{ fontSize: "14px", fontWeight: 700, color: "#ccc", marginBottom: "10px" }}>▸ 외부 구동 프로그램 산출물 연동 방법 고안</p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
            <CheckItem>Python 산출물이 다른 Python 구동에 필요하므로 Path 규칙 고안</CheckItem>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 4px 20px" }}>
              {[
                "StreamingAssestPath 아래 Songs에 원곡 데이터 보관",
                "Python 산출물은 Spleeter_output 폴더에 통합 보관",
                "Spleeter_output 폴더 내에 각 원곡 MP3 파일명으로 폴더 생성 및 데이터 보관",
                "분류된 WAV를 폴더 내에 보관, MML은 mml 폴더 생성 및 내부에 데이터 보관",
              ].map(s => <SubItem key={s}>{s}</SubItem>)}
            </ul>
          </ul>
          <br />
          <p style={{ fontSize: "14px", fontWeight: 700, color: "#ccc", marginBottom: "10px" }}>▸ 최종 산출물 편집 방법 및 규칙 제정</p>
            <CheckItem>MML 파일은 쉼표를 포함한 음계의 코드값, 그 길이가 포함되어 산출됨</CheckItem>
          <Card>
            <p style={{ fontSize: "13px", fontWeight: 700, color: TEAL, marginBottom: "10px" }}>규칙</p>
            <ol style={{ paddingLeft: "20px", lineHeight: 1.9, fontSize: "14px", opacity: 0.8 }}>
              <li>r(쉼표) 값의 존재함에 이를 Note의 부재로 제정.</li>
              <li>S 단일 숏노트로 제정</li>
              <li>L 다수의 숏노트, Long 노트로 제정.</li>
              <li>S와 L의 규칙에 맞춰 가장 짧은 단위의 음계(l16)을 S로 제정</li>
              <li>S와 L의 규칙에 맞춰 이외의 음계를 L로 제정</li>
              <li>S를 기준으로 l16, l8, l4, l2, l1 은 순서대로 1배, 2배, 4배, 8배, 16배수로 제정.</li>
            </ol>
          </Card>
          <br />
          <p style={{ fontSize: "14px", fontWeight: 700, color: "#ccc", margin: "20px 0 10px" }}>▸ 편집 방법</p>
          <Card>
            <p style={{ fontSize: "13px", fontWeight: 700, color: TEAL, marginBottom: "10px" }}>편집 디테일</p>
            <ol style={{ paddingLeft: "20px", lineHeight: 1.9, fontSize: "14px", opacity: 0.8 }}>
              <li>편집하고자 하는 MP3를 DropDown에서 선택.</li>
              <li>Load Song 버튼을 Click.</li>
              <li>외부 프로그램들을 순차적으로 구동하여 산출물 생성.</li>
              <li>산출물들을 기반으로 만들어진 UI Note의 값을 수정하여 노트 편집.</li>
              <li>편집이 끝나면 Save Song 버튼을 Click.</li>
              <li>Note Data를 이후 Game에서 사용 가능한 형태의 Json으로 저장.</li>
            </ol>
          </Card>
        </section>

        {/* UI와 기능 연동 */}
        <br />
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>UI와 기능 연동</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { name: "Song List - DropDown", subs: ["StreamingAssets\\Songs 폴더 내의 mp3 파일로 Song List 형성.", "DropDown에서 불러올 노래를 선택."] },
              { name: "Refresh - Button", subs: ["Song List를 갱신."] },
              { name: "Song Load - Button", subs: ["DropDown에서 선택한 노래를 Process 작업한 후, 노트 정보를 UI로 불러옴."] },
              { name: "Data Save - Button", subs: ["작성된 노트 정보들을 Json File로 저장."] },
              { name: "Lines - InputField", subs: ["생성되는 노트들의 라인을 설정.", "입력한 숫자에 맞춰 노트가 생성되는 Line의 갯수가 설정됨."] },
              { name: "Tag - InputField", subs: ["노래의 태그를 설정.", "차후 최종 산출물에 저장되어 게임에서 사용됨."] },
              { name: "Song Play - Button", subs: ["Song Load를 통하여 Load한 노래를 Play."] },
              { name: "Song Pause - Button", subs: ["Song Load를 통하여 Load한 노래를 Pause."] },
              { name: "에디터 최종 Result File 규칙 제정 및 File 작성", subs: [] },
            ].map(item => (
              <Card key={item.name} style={{ marginBottom: 0 }}>
                <p style={{ fontSize: "14px", fontWeight: 700, color: "#e0e0e0", marginBottom: item.subs.length ? "8px" : 0 }}>
                  {item.name}
                </p>
                {item.subs.map((s, i) => <SubItem key={i}>{s}</SubItem>)}
              </Card>
            ))}
          </div>
        </section>

        {/* UI 작성 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>UI 작성</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <CheckItem>Interaction 방식 설정.</CheckItem>
            <CheckItem>User에게 Data 정보 시각적 전달 방법 설정.</CheckItem>
          </ul>
        </section>

        {/* 이슈 정리 및 보완 솔루션 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>이슈 정리 및 보완 솔루션</h2>

          <IssueCard title="WAV 파일 음질 저하" items={[
            "Python의 Plugin에서 작동되는 기능이기에 수정 및 보완 곤란",
            "MP3와 WAV의 음폭에 따른 스펙트럼으로 일어나는 현상 추측",
          ]} />

          <IssueCard title="통일되지 않은 박자와 BPM" items={[
            "원본 곡과 각 Layer 음악과 BPM이 다름",
          ]} />

          <IssueCard title="Path의 길이에 따른 오류"
          items={[
            "필요 설치 프로그램의 설치 Path가 길면 Error 발생",
          ]} />

          <IssueCard title="프로그램 관리자 권한" items={[
            "Unity Hub 및 Build file 관리자 권한으로 실행",
            "PC내 폴더, 파일 설치 등의 작업에 관리자 권한 필수",
          ]} />

          <Card>
            <p style={{ fontWeight: 700, color: "#f87171", marginBottom: "12px", fontSize: "15px" }}>⚠ ffmpeg-python install 시의 오류 메세지</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <DotItem>ffmpeg-python을 이용할 경우 강제 ffmpeg의 path 등록 필요. (등록 시 정상 작동)</DotItem>
              <DotItem>ffmpeg-python의 내부적인 문제로 판단, 처리하기 곤란.</DotItem>
              <DotItem>▸ HISTORY</DotItem>
            </ul>
            
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 12px" }}>
              {[
                "batch 파일을 통해 ffmpeg.exe를 설치함.",
                "batch 파일을 통해 python에서 pip install ffmpeg-python package를 설치.",
                "ffmpeg-python 설치 시, 내부적으로 process가 실행되는 것으로 추정.",
                "위의 process가 실행될 때 ffmpeg를 찾지 못하여 error 메세지 출력.",
                "환경변수 포함되어 있는 것을 확인.",
                "시스템 환경변수 path에 등록 되어 있는 것을 확인.",
                "path에 등록된 경로에 ffmpeg.exe 존재 확인.",
                "cmd에서 ffmpeg -version 명령 정상 작동 확인",
                "python subprocess에서 ffmpeg -version 명령 정상 작동 확인.",
                "python ffmpeg-python으로 직접 접근 시 명령 불량 확인.",
              ].map((s, i) => <SubItem key={i}>{s}</SubItem>)}
            </ul>
          </Card>
        </section>

        {/* 확장 방향성 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={SECTION_TITLE}>확장 방향성</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <CheckItem>MP3 파일 외 WAV 파일에도 대응.</CheckItem>
            <CheckItem>기존 편집한 JSON 파일을 불러와 편집 가능하도록 기능 추가.</CheckItem>
            <CheckItem>
              각 노트들이 노래의 몇 초에 해당하는지 구분 가능한 UI.
            </CheckItem>
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
                background: "#0d1a1a", aspectRatio: "16/9",
                border: "1px solid rgba(45,212,191,0.15)",
              }}>
                <img
                  src={src} alt={label}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onError={e => { e.currentTarget.style.display = "none"; }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "linear-gradient(rgba(45,212,191,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.06) 1px, transparent 1px)",
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
