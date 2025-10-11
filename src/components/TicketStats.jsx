export default function TicketStats({ title, value, color = "purple" }) {
  return (
    <div className={`stat-card ${color}`}>
      <div className="stat-bg" aria-hidden></div>
      <div className="stat-content">
        <div className="stat-title">{title}</div>
        <div className="stat-value">{value}</div>
      </div>
    </div>
  );
}
