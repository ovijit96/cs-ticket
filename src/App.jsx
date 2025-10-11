import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import TicketStats from "./components/TicketStats.jsx";
import TicketList from "./components/TicketList.jsx";
import RightPanel from "./components/RightPanel.jsx";

/* Toastify */
import { toast } from "react-toastify";


export default function App() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Right panel queue 
  const [selectedQueue, setSelectedQueue] = useState([]);
  const selectedSet = useMemo(() => new Set(selectedQueue), [selectedQueue]);

  // Resolved count
  const [resolvedCount, setResolvedCount] = useState(0);

  // Data Load
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/tickets.json");
        const data = await res.json();
        setTickets(data);
      } catch (e) {
        console.error("Failed to load tickets.json", e);
        toast.error("Failed to load tickets.json");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // In-Progress = queue length (live)
  const inProgressCount = selectedQueue.length;

  // Add to queue on left click
  function handleSelect(id) {
    setSelectedQueue((prev) => {
      if (prev.includes(id)) {
        toast.info("Already in In-Progress queue");
        return prev;
      }
      toast.success("Added to In-Progress");
      return [...prev, id];
    });
  }

  // Resolve one (remove from tickets + from queue + resolved++)
  function handleResolveOne(id) {
    setTickets((prev) => prev.filter((t) => t.id !== id));
    setSelectedQueue((prev) => prev.filter((x) => x !== id));
    setResolvedCount((c) => c + 1);
    toast.success("Resolved ✓");
  }

  // Remove from queue (no resolve)
  function handleRemoveFromQueue(id) {
    setSelectedQueue((prev) => prev.filter((x) => x !== id));
    toast.warn("Removed from queue");
  }

  // Clear all from queue
  function handleClearQueue() {
    if (selectedQueue.length === 0) {
      toast.info("Queue is already empty");
      return;
    }
    setSelectedQueue([]);
    toast.warn("Cleared all from queue");
  }

  return (
    <div className="app-shell">
      <Navbar />

      <main className="main">
        {/* Top stats: plus/minus live */}
        <section className="stats-row">
          <TicketStats title="In-Progress" value={inProgressCount} color="purple" />
          <TicketStats title="Resolved" value={resolvedCount} color="green" />
        </section>

        <section className="content-grid">
          <div className="left-col">
            <h2 className="section-title">Customer Tickets</h2>

            {loading ? (
              <div className="loading">Loading tickets…</div>
            ) : (
              <TicketList
                tickets={tickets}
                onSelect={handleSelect}
                selectedIds={selectedSet}
                columns={2}
              />
            )}
          </div>

          <aside className="right-col">
            <RightPanel
              tickets={tickets}
              queueIds={selectedQueue}
              onResolveOne={handleResolveOne}
              onRemoveOne={handleRemoveFromQueue}
              onClearAll={handleClearQueue}
            />
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}
