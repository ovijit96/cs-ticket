import TicketCard from "./TicketCard.jsx";

export default function TicketList({
  tickets = [],
  columns = 2,
  onSelect,
  selectedIds = new Set(),
}) {
  const items = [...tickets].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  if (items.length === 0) return <div className="empty-box">No tickets found.</div>;

  return (
    <div className={`ticket-list grid-${columns}`}>
      {items.map(t => (
        <TicketCard
          key={t.id}
          ticket={t}
          selected={selectedIds.has(t.id)}
          onClick={() => onSelect?.(t.id)}
        />
      ))}
    </div>
  );
}
