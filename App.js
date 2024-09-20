import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import ResultDisplay from "./components/ResultDisplay";
import "./App.css";

function App() {
  // 상태로 탐지 결과를 저장 (null이면 아직 결과가 없음)
  const [result, setResult] = useState(null);

  return (
    <div className="App">
      <h1>Deepfake Detection</h1>
      {/* 파일 업로드 컴포넌트. 업로드 후 결과는 setResult로 전달 */}
      <FileUpload setResult={setResult} />
      {/* 결과가 있을 경우 ResultDisplay 컴포넌트로 결과 표시 */}
      {result && <ResultDisplay result={result} />}
    </div>
  );
}

export default App;
