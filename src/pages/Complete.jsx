import React from "react"
import { useNavigate } from "react-router-dom"
import "./Complete.css"

export default function Complete() {
  const navigate = useNavigate()

  return (
    <div className="complete-container">
      <div className="complete-box">
        <h1>요청이 접수되었습니다.</h1>
        <p>
          기재해주신 메일로 연락드리겠습니다.
          <br />
          감사합니다.
        </p>

        <div className="button-group">
          <button className="btn cancel" onClick={() => navigate("/")}>
            취소하기
          </button>
          <button className="btn back" onClick={() => navigate("/")}>
            돌아가기 <span>→</span>
          </button>
        </div>
      </div>
      <div className="side-bg"></div>
    </div>
  )
}
