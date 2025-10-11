function StatusBadge({ status }) {
  const color =
    status === "Open" ? "open" :
    status === "In-Progress" ? "progress" :
    "resolved";
  return <span className={`badge ${color}`}>{status}</span>;
}

function PriorityBadge({ priority }) {
  const color =
    priority === "High" ? "high" :
    priority === "Medium" ? "medium" :
    "low";
  return <span className={`chip ${color}`}>{priority} Priority</span>;
}

export default function TicketCard({ ticket, onClick, selected }) {
  const { id, title, description, customer, priority, status, createdAt } = ticket;

  return (
    <article
      className={`ticket-card ${selected ? "is-selected" : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" ? onClick?.() : null)}
    >
      <header className="ticket-head">
        <h4 className="ticket-title">{title}</h4>
        <StatusBadge status={status} />
      </header>

      <p className="ticket-desc">{description}</p>

      <div className="ticket-meta">
        <span className="code">#{id}</span>
        <PriorityBadge priority={priority} />
        <span className="assignee">{customer}</span>
        <time className="date">{new Date(createdAt).toLocaleDateString()}</time>
      </div>
    </article>
  );
}
