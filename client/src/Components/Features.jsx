import { Search, Wrench, ShieldCheck } from 'lucide-react'

const featuresStyle = {
  padding: '5rem 0',
  backgroundColor: '#f3f4f6',
}

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1rem',
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
  marginTop: '3rem',
}

const featureStyle = {
  backgroundColor: 'white',
  padding: '1.5rem',
  borderRadius: '0.5rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
}

const iconStyle = {
  width: '3rem',
  height: '3rem',
  margin: '0 auto 1rem',
  color: '#2563eb',
}

export default function Features() {
  const features = [
    { Icon: Search, title: 'Early Detection', description: 'Implement AI-based crack detection and thermal imaging to identify cracks before they become critical.' },
    { Icon: Wrench, title: 'Proactive Maintenance', description: 'Schedule routine inspections and invest in predictive maintenance to prevent costly repairs and breakdowns.' },
    { Icon: ShieldCheck, title: 'Safety & Compliance', description: 'Ensure structural integrity, meet regulatory standards, and protect employees and cargo from potential hazards.' },
  ]

  return (
    <section style={featuresStyle}>
      <div style={containerStyle}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem' }}>Solutions to Cracks in Rail Wagons</h2>
        <div style={gridStyle}>
          {features.map((feature, index) => (
            <div key={index} style={featureStyle}>
              <feature.Icon style={iconStyle} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'semibold', marginBottom: '0.5rem' }}>{feature.title}</h3>
              <p style={{ color: '#4b5563' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
