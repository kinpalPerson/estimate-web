import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { useNavigate } from 'react-router-dom'
import './RequestForm.css'

export default function RequestForm() {
  const form = useRef()
  const navigate = useNavigate()
  const [agreed, setAgreed] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!agreed) {
      alert('개인정보 동의가 필요합니다.')
      return
    }

    if (sending) return
    setSending(true)

    emailjs
      .sendForm(
        'service_q0zy7r2',      // ← 너의 SERVICE ID
        'template_11m3xlc',      // ← 너의 TEMPLATE ID
        form.current,
        'LniR0wmxWLA-UhSNu'      // ← 너의 PUBLIC KEY
      )
      .then(() => {
        alert('요청이 전송되었습니다!')
        navigate('/complete')
      })
      .catch((error) => {
        alert('전송 실패: ' + error.text)
      })
      .finally(() => setSending(false))
  }

  return (
    <form className="request-form" ref={form} onSubmit={handleSubmit}>
      <h2>견적 요청하기</h2>
      <p>하단 구성을 입력해주세요.</p>

      <div className="form-row">
        <div className="form-group">
          <label>성</label>
          <input type="text" name="first_name" required />
        </div>
        <div className="form-group">
          <label>이름</label>
          <input type="text" name="last_name" required />
        </div>
      </div>

      <div className="form-group">
        <label>이메일</label>
        <input type="email" name="email" required />
      </div>

      <div className="form-group">
        <label>전화번호</label>
        <input type="tel" name="phone" />
      </div>

      <div className="form-group">
        <label>요청 내용</label>
        <textarea name="message" rows="5" required></textarea>
      </div>

      <div className="checkbox-group">
        <input
          type="checkbox"
          id="agree"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
        />
        <label htmlFor="agree">개인정보 이용에 동의합니다.</label>
      </div>

      <button type="submit" disabled={sending}>
        {sending ? '전송 중...' : '요청하기'}
      </button>
    </form>
  )
}
