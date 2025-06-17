# CLAUDE – FULL SYSTEM AUDIT + NEXT STEP RECOMMENDER

🧠 Context:
You are a production-grade assistant responsible for auditing Scout Analytics and AI Agency monorepo deployments. You have access to the full specification (v4.0 desired state), migration scripts, enhancement scripts, and current source tree.

🎯 Objective:
Determine which parts of the production-grade system defined in `monorepo-end-state-specification.yaml` have already been implemented across:

1. `enhance-current-with-v2.sh`
2. `modified-setup-recycle-v2.sh`
3. `migration-check.js`
4. The current `ai-agency` repository structure (from tree output)

---

## Step 1: SPECIFICATION VALIDATION

Parse `monorepo-end-state-specification.yaml` and extract:

- Required directory structure
- Component and page definitions (KPI cards, charts, AI Assist, Vibe)
- API routes, data schema hints
- QA validation tools (Playwright, Percy, Lighthouse)
- Console error tolerance, screenshot diff thresholds
- Agent list and usage scope

---

## Step 2: SCRIPT COVERAGE MAPPING

Map the contents of the scripts to specification items:

- `enhance-current-with-v2.sh` → Adds AI Assistant, Revenue Heatmap, Product Treemap, `/vibe` QA panel
- `modified-setup-recycle-v2.sh` → Sets up a reusable monorepo with advanced Next.js, component packages, and test automation scripts
- `migration-check.js` → Validates existing v2.1 logic and checks migration completeness

Create a checklist with:

| ✅ / ⚠️ / ❌ | Spec Element | Implemented In | Comments/Next Action |
|------------|--------------|----------------|-----------------------|
| ✅         | AI Assistant | enhance-current-with-v2.sh | Implemented at `/ai-assist` |
| ⚠️         | KPI Value Runtime Match | Not validated yet | Add test case via Playwright |
| ❌         | Filter State Persistence | Not confirmed | Add `FilterContext.tsx` & integration |
| ✅         | Revenue Heatmap | enhance-current-with-v2.sh | Integrated via D3 |
| ✅         | Product Treemap | enhance-current-with-v2.sh | Recharts-based |
| ❌         | Screenshot Diff QA | Missing Percy config | Add to `.github/workflows` |
| ✅         | Console Error QA | part of vibe test placeholder | Validate output, use Playwright listener |
| ⚠️         | Agents YAML Registry | not fully wired | Create `agents.yaml` and sync metadata |

---

## Step 3: REPO STATE VALIDATION

Use the current repository structure to:

- Confirm structure of `/app`, `/components`, `/agents`, `/lib`
- Ensure pages like `/trends`, `/products`, `/retailbot`, `/ai-assist` exist
- Cross-check if `components/KpiCard.tsx`, `dashboard/PhilippinesMap.tsx`, and `charts/LineChart.tsx` are present
- Confirm the presence of `/scripts`, `/tests`, `/docs`

---

## Step 4: NEXT STEP RECOMMENDATIONS

Group next tasks into 3 categories:

### 🔧 REQUIRED IMMEDIATE

- [ ] Add Playwright test that validates `/dashboard` KPI runtime values match spec
- [ ] Enable Percy for screenshot diff QA (`npx percy exec -- npm run test`)
- [ ] Add cross-page filter context (`FilterContext.tsx` + URL sync)
- [ ] Wire `agents/agents_v4.yaml` to actual components and routes

### 🧪 QA/TEST INTEGRATION

- [ ] Set `console.error` listener to flag runtime errors
- [ ] Expand VibeTestBot to actually parse QA logs from Playwright runs
- [ ] Add `.lighthouseci` config or GitHub Action for performance score validation

### 🚀 OPTIONAL / ENHANCEMENTS

- [ ] Include `.pbix` export button for data parity testing
- [ ] Deploy `v4-spec-validator.ts` to check live app vs YAML spec
- [ ] Tag migrated code blocks in source with `@v2-migrated` or `@v4-final`

---

## OUTPUT FORMAT

Return a Markdown checklist followed by a prioritized roadmap of what to do next to reach 100% spec completion for Scout v4.0.

Do not assume. Only check off items that are explicitly implemented.

---

## FILES INCLUDED IN THIS AUDIT KIT

1. `monorepo-end-state-specification.yaml` - Target v4.0 specification
2. `enhance-current-with-v2.sh` - Script that adds AI features and visualizations
3. `modified-setup-recycle-v2.sh` - Monorepo setup script with advanced architecture
4. `migration-check.js` - Migration validation utility
5. `current-structure.txt` - Current repository structure snapshot
6. `package-analysis.json` - Current dependencies and configuration analysis

## USAGE INSTRUCTIONS

1. Review each file in this audit kit
2. Parse the specification YAML for requirements
3. Map script implementations to spec requirements
4. Generate compliance checklist with status indicators
5. Provide prioritized next-step roadmap
6. Include specific commands and file paths for implementation

## EXPECTED OUTPUT

- Compliance percentage score
- Detailed checklist with implementation status
- Prioritized action plan with specific next steps
- Risk assessment for production deployment
- Timeline estimate for reaching 100% compliance