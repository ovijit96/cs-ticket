// Fetch tickets from ticket.json and display them
fetch('ticket.json')
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(data => {
    const container = document.getElementById('ticketContainer');
    container.innerHTML = ''; // Clear loading text

    data.forEach(ticket => {
      const div = document.createElement('div');

      // card style 
      div.className =
        'rounded-lg border border-gray-200/80 bg-white px-4 py-3 shadow-sm hover:shadow transition';

      // Priority colors
      const priorityColor =
        ticket.priority === 'High'
          ? 'text-red-700 bg-red-100'
          : ticket.priority === 'Medium'
          ? 'text-yellow-700 bg-yellow-100'
          : 'text-emerald-700 bg-emerald-100';

      // Status colors
      const statusColor =
        ticket.status === 'Open'
          ? 'text-emerald-700 bg-emerald-100'
          : ticket.status === 'In-Progress'
          ? 'text-yellow-700 bg-yellow-100'
          : 'text-gray-700 bg-gray-100';

      // text size & status  
      div.innerHTML = `
        <div class="flex justify-between items-start">
          <h4 class="font-semibold text-gray-800 text-[14px] leading-snug">${ticket.title}</h4>
          <span class="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full font-medium ${statusColor}">
            <span class="inline-block h-2 w-2 rounded-full bg-current"></span>
            ${ticket.status}
          </span>
        </div>

        <p class="text-gray-600 text-[13px] mt-1 mb-2 line-clamp-2">${ticket.description}</p>

        <div class="flex flex-wrap gap-2 items-center justify-between text-[12px] text-gray-600 border-t pt-2">
          <span class="flex items-center gap-2">
            <span class="text-gray-500">#${ticket.id}</span>
            <span class="${priorityColor} px-2 py-0.5 rounded-full font-semibold tracking-wide">
              ${ticket.priority.toUpperCase()} PRIORITY
            </span>
          </span>
          <span>${ticket.customer} — ${ticket.createdAt}</span>
        </div>`;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error('Error loading tickets:', error);
    document.getElementById('ticketContainer').innerHTML =
      `<p class="text-red-500 text-sm">Failed to load tickets.</p>`;
  });
