---
title: "Search"
---

<div class="mb-4">
  <input id="searchInput" type="text" class="form-control" placeholder="Search posts...">
</div>
<ul id="searchResults" class="list-group"></ul>

<script>
  async function searchPosts() {
    const res = await fetch('/index.json');
    const posts = await res.json();
    const q = document.getElementById('searchInput').value.toLowerCase();
    const results = posts.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q)
    );

    const list = document.getElementById('searchResults');
    list.innerHTML = results.length
      ? results.map(r => `<li class="list-group-item"><a href="${r.url}">${r.title}</a><br><small>${r.summary}</small></li>`).join('')
      : '<li class="list-group-item text-muted">No results found.</li>';
  }

  document.getElementById('searchInput').addEventListener('input', searchPosts);
</script>
