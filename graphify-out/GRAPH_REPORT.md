# Graph Report - wichaksono.github.io  (2026-09-11)

## Corpus Check
- 12 files · ~18,562 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 41 nodes · 29 edges · 17 communities (13 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4d056a27`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- how-it-works.md
- package.json
- about-me.md
- devDependencies
- hugo-extended
- lucide-static
- tailwindcss
- @tailwindcss/cli

## God Nodes (most connected - your core abstractions)
1. `scripts` - 2 edges
2. `@fontsource-variable/inter` - 2 edges
3. `@tailwindcss/cli` - 2 edges
4. `hugo-extended` - 2 edges
5. `lucide-static` - 2 edges
6. `tailwindcss` - 2 edges
7. `private` - 1 edges
8. `packageManager` - 1 edges
9. `build` - 1 edges
10. `@fontsource-variable/inter` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (17 total, 4 thin omitted)

### Community 0 - "how-it-works.md"
Cohesion: 0.25
Nodes (7): 1. Kirim Permintaan Perbaikan atau Layanan, 2. Analisa dan Estimasi, 3. Proses Pengerjaan, 4. Review & Handover, 5. Dukungan & Garansi, Contoh Masalah dan Layanan yang Bisa Saya Tangani, Ingin Website Anda Kembali Normal?

### Community 1 - "package.json"
Cohesion: 0.29
Nodes (6): name, packageManager, private, scripts, build, type

### Community 2 - "about-me.md"
Cohesion: 0.33
Nodes (5): Alat yang Saya Pakai, Hubungi Saya, Pengalaman, Saat Tidak Ngoding, Siapa Saya

### Community 3 - "devDependencies"
Cohesion: 0.67
Nodes (3): @fontsource-variable/inter, devDependencies, @fontsource-variable/inter

## Knowledge Gaps
- **22 isolated node(s):** `name`, `private`, `type`, `packageManager`, `build` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`, `hugo-extended`, `lucide-static`, `tailwindcss`, `@tailwindcss/cli`?**
  _High betweenness centrality (0.141) - this node is a cross-community bridge._
- **What connects `name`, `private`, `type` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._