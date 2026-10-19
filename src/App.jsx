const stats = [
  { label: 'MRR', value: '$184.2K', trend: '+12.8%' },
  { label: 'Pipeline', value: '$921K', trend: '+18.4%' },
  { label: 'Conversion', value: '7.9%', trend: '+1.3%' },
  { label: 'Retention', value: '94.6%', trend: '+3.1%' }
];

const revenueBars = [48, 62, 58, 81, 96, 82, 110, 98, 124, 140, 135, 158];

const focusAreas = [
  { name: 'Enterprise', value: 82, color: 'primary' },
  { name: 'Mid-Market', value: 64, color: 'cyan' },
  { name: 'SMB', value: 49, color: 'amber' }
];

const leads = [
  { company: 'Northstar Labs', owner: 'M. Tran', stage: 'Qualified', value: '$84K', color: 'green' },
  { company: 'HelioGrid', owner: 'A. Ruiz', stage: 'Discovery', value: '$42K', color: 'blue' },
  { company: 'Cinder Works', owner: 'J. Singh', stage: 'Proposal', value: '$67K', color: 'amber' },
  { company: 'Summit AI', owner: 'N. Kim', stage: 'Negotiation', value: '$122K', color: 'purple' }
];

const goals = [
  'Increase enterprise trial conversion by 15%',
  'Reduce onboarding time by 22%',
  'Expand expansion pipeline in APAC',
  'Improve CS health score for strategic accounts'
];

export default function App() {
  return (
    <div className="dashboard-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">M</div>
          <div>
            <div className="brand-name">MarketPulse</div>
            <small>Executive Insights</small>
          </div>
        </div>

        <nav className="nav">
          <span className="nav-item active">Overview</span>
          <span className="nav-item">Pipeline</span>
          <span className="nav-item">Performance</span>
          <span className="nav-item">Forecast</span>
          <span className="nav-item">Reports</span>
        </nav>

        <div className="sidebar-card">
          <small>Quarter target</small>
          <strong>$1.8M</strong>
          <div className="progress-bar">
            <span style={{ width: '74%' }} />
          </div>
          <label>74% of target reached</label>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Market Overview</p>
            <h1>Revenue Intelligence Dashboard</h1>
          </div>
          <div className="top-actions">
            <button className="ghost-button">Last 30 days</button>
            <button className="primary-button">Export Report</button>
          </div>
        </header>

        <section className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
              <em>{stat.trend}</em>
            </div>
          ))}
        </section>

        <section className="content-grid">
          <div className="chart-card large">
            <div className="card-header">
              <div>
                <small>Revenue trend</small>
                <h3>$1.42M</h3>
              </div>
              <span className="tag positive">+18.6%</span>
            </div>
            <div className="chart-area">
              {revenueBars.map((value, index) => (
                <div key={index} className="chart-bar" style={{ height: `${value}%` }} />
              ))}
            </div>
          </div>

          <div className="chart-card">
            <div className="card-header">
              <div>
                <small>Market share</small>
                <h3>Segments</h3>
              </div>
            </div>
            <div className="segment-list">
              {focusAreas.map((area) => (
                <div key={area.name} className="segment-row">
                  <div className="segment-labels">
                    <span>{area.name}</span>
                    <strong>{area.value}%</strong>
                  </div>
                  <div className="segment-track">
                    <span className={area.color} style={{ width: `${area.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bottom-grid">
          <div className="panel-card">
            <div className="card-header no-pad">
              <div>
                <small>Priority deals</small>
                <h3>Active pipeline</h3>
              </div>
            </div>
            <div className="lead-list">
              {leads.map((lead) => (
                <div key={lead.company} className="lead-item">
                  <div>
                    <strong>{lead.company}</strong>
                    <span>{lead.owner}</span>
                  </div>
                  <div className="lead-meta">
                    <span className={`pill ${lead.color}`}>{lead.stage}</span>
                    <strong>{lead.value}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel-card">
            <div className="card-header no-pad">
              <div>
                <small>Action plan</small>
                <h3>Quarter goals</h3>
              </div>
            </div>
            <ul className="goal-list">
              {goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
