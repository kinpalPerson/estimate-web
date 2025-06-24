import './Home.css'
import { FaHeadphones, FaChartBar, FaFileAlt, FaSave, FaHeart, FaUsers } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const features = [
  { icon: <FaHeadphones />, title: '음악듣기', desc: '음악을 들으면서 게임을 할 수 있습니다.' },
  { icon: <FaChartBar />, title: '가격상승률', desc: '가격 상승률을 비교해볼 수 있습니다.' },
  { icon: <FaFileAlt />, title: '컨텐츠', desc: '다양한 컨텐츠를 확인하실 수 있습니다.' },
  { icon: <FaSave />, title: '저장', desc: '원하는 목록을 저장할 수 있습니다.' },
  { icon: <FaHeart />, title: '구독수', desc: '지금 내가 듣는 노래의 구독수를 알 수 있습니다.' },
  { icon: <FaUsers />, title: '가입자 수', desc: '가입자수를 바로 알 수 있습니다.' },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <section className="quote-section">
      <h1>유튜브 프리미엄 견적 요청</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipis elit</p>

      <div className="grid">
        {features.map((item, index) => (
          <div key={index} className="card">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <button className="quote-button" onClick={() => navigate('/request')}>
        견적 요청하기
      </button>
    </section>
  )
}
