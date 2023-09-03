import React95Menu from "@/components/react95/React95Menu";
import StyledButton from "@/components/StyledButton";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <h1>홈</h1>

      <h1 className={`font-[ChosunGu]`}>조선굴림</h1>
      <h1 className="font-GowunBatang">고운바탕</h1>

      <h1 className="font-notosans">노토산스</h1>
      <h1 className="font-notosans">NotoSans</h1>
      <h1 className="font-gulim">조선굴림</h1>
      <h1 className="font-batang">고운바탕</h1>

      <StyledButton>스타일드 컴포넌트 동작</StyledButton>
      <React95Menu />
    </main>
  );
}
