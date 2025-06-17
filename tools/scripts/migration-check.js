#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔍 Checking migration status...\n');

const checks = [
  { name: 'Dashboard page exists', path: 'apps/analytics/app/page.tsx' },
  { name: 'Trends page exists', path: 'apps/analytics/app/trends/page.tsx' },
  { name: 'PhilippinesMap component', path: 'apps/analytics/components/dashboard/PhilippinesMap.tsx' },
  { name: 'Analytics API', path: 'apps/analytics/app/api/analytics' },
  { name: 'Package.json valid', path: 'apps/analytics/package.json' },
];

let passed = 0;
checks.forEach(check => {
  const exists = fs.existsSync(path.join(process.cwd(), check.path));
  console.log(`${exists ? '✅' : '❌'} ${check.name}`);
  if (exists) passed++;
});

console.log(`\n📊 Migration Score: ${passed}/${checks.length} (${Math.round(passed/checks.length*100)}%)`);

if (passed < checks.length) {
  console.log('\n⚠️  Some files are missing. Run manual extraction for missing components.');
}
