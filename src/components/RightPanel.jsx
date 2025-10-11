export default function RightPanel({
  tickets = [],
  queueIds = [],
  onResolveOne,
  onRemoveOne,
  onClearAll,
}) {
  const queuedTickets = queueIds
    .map(id => tickets.find(t => t.id === id))
    .filter(Boolean);

  if (queuedTickets.length === 0) {
    return (
      <div className="side-card">
        <h3>Task Status</h3>
        <p className="muted">Click tickets on the left to add them here.</p>
        <div className="muted small">Queued: 0</div>
        <div className="empty-box">No items in the queue.</div>
      </div>
    );
  }

  return (
    <div className="side-card">
      <h3>Task Status</h3>

      <div className="rp-toolbar">
        <div className="muted small">Queued: {queuedTickets.length}</div>
        <button className="btn small ghost" onClick={onClearAll}>Clear All</button>
      </div>

      <div className="rp-list">
        {queuedTickets.map(t => (
          <div className="rp-item" key={t.id}>
            <div className="rp-item-main">
              <div className="rp-item-title">{t.title}</div>
              <div className="rp-item-meta">
                <span>#{t.id}</span>
                <span>• {t.customer}</span>
                <span>• {t.priority}</span>
                <span>• {new Date(t.createdAt).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="rp-item-actions">
              <button className="btn tiny primary" onClick={() => onResolveOne?.(t.id)}>
                Resolve
              </button>
              <button className="btn tiny ghost" onClick={() => onRemoveOne?.(t.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="muted small">Tip: Click more tickets on the left to keep adding here.</p>
    </div>
  );
}
