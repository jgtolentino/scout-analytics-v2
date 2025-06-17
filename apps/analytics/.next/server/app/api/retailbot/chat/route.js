"use strict";(()=>{var e={};e.id=871,e.ids=[871],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4237:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>g,originalPathname:()=>v,patchFetch:()=>y,requestAsyncStorage:()=>d,routeModule:()=>u,serverHooks:()=>p,staticGenerationAsyncStorage:()=>h,staticGenerationBailout:()=>m});var r={};a.r(r),a.d(r,{GET:()=>l,POST:()=>c});var o=a(5375),i=a(4977),n=a(1600),s=a(1287);async function c(e){try{let{message:t,context:a}=await e.json();await new Promise(e=>setTimeout(e,1e3));let r=function(e,t){let a=e.toLowerCase();return a.includes("revenue")||a.includes("sales")?`Based on current data analysis, I see total revenue of ₱45.2M this month, up 8.2% from last month. Key drivers include:

• Mobile commerce growth (+15.3%)
• Strong performance in Electronics category
• Metro Manila region leading with 35% of total revenue

The revenue trend appears healthy with consistent growth patterns. No anomalies detected in the current dataset.`:a.includes("region")||a.includes("geographic")?`Regional performance analysis shows:

**Top Performing Regions:**
1. Metro Manila: ₱15.8M (35% share, +12% growth)
2. Cebu: ₱8.2M (18% share, +8% growth)  
3. Davao: ₱6.1M (13% share, +6% growth)

**Key Insights:**
• Urban areas outperforming rural by 2.3x
• Northern Luzon showing emerging growth (+18%)
• Store density correlation: r=0.85 with revenue

Recommendation: Consider expansion in Northern Luzon and strengthen Metro Manila presence.`:a.includes("product")||a.includes("category")?`Product category performance analysis:

**Trending Up:**
• Electronics: +18% growth, ₱12.5M revenue
• Health & Beauty: +14% growth, strong margins
• Home & Garden: +9% seasonal boost

**Trending Down:**
• Fashion: -5% decline, seasonal adjustment
• Books & Media: -8% digital shift impact

**Market Share Leaders:**
1. Electronics (28%)
2. Fashion (22%) 
3. Food & Beverage (18%)

Substitution patterns show Electronics replacing traditional categories. Consider expanding tech accessories.`:a.includes("customer")||a.includes("behavior")?`Customer behavior insights from current data:

**Demographics:**
• 25-34 age group: 32% of customers, highest value
• Female customers: 54%, higher engagement rates
• Urban vs Rural: 70/30 split

**Behavior Patterns:**
• Average basket size: 3.2 items
• Mobile usage: 72% of transactions
• Peak hours: 7-9 PM weekdays, 2-4 PM weekends

**Loyalty Indicators:**
• Repeat purchase rate: 68%
• Customer lifetime value: ₱2,340 average
• Satisfaction score: 4.2/5.0

Recommendation: Focus mobile experience optimization and expand evening inventory.`:a.includes("validate")||a.includes("anomal")?`Data validation completed for Scout Analytics v3.1.0:

**Metrics Status:**
✅ Revenue calculations: Accurate
✅ Growth percentages: Validated against historical data
✅ Regional breakdowns: Cross-verified with store data
✅ Category totals: Sum to 100% correctly

**Anomaly Detection:**
• No significant outliers detected
• Data freshness: Last updated 2 hours ago
• Quality score: 98.5% completeness

**Data Sources:**
• Supabase: Connected ✅
• Real-time updates: Active ✅
• Cache status: Optimal ✅

All dashboard metrics are reliable for decision-making.`:`I'm here to help with your retail analytics! I can assist with:

**Analytics Support:**
• Metric validation and data quality checks
• Performance trend analysis and insights
• Regional and category comparisons
• Customer behavior pattern analysis

**Common Questions I Handle:**
• "What's driving our revenue growth?"
• "Which regions are performing best?"
• "Are there any data anomalies to investigate?"
• "What product categories should we focus on?"

Feel free to ask specific questions about your dashboard data, and I'll provide detailed analysis with actionable insights.

What specific aspect of your retail performance would you like to explore?`}(t,0);return s.Z.json({response:r,timestamp:new Date().toISOString(),context:"scout_analytics_v3.1.0"})}catch(e){return console.error("RetailBot API error:",e),s.Z.json({error:"Failed to process RetailBot request"},{status:500})}}async function l(){return s.Z.json({status:"healthy",service:"RetailBot",version:"3.1.0",capabilities:["metric_validation","data_insights","trend_analysis","anomaly_detection"]})}let u=new o.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/retailbot/chat/route",pathname:"/api/retailbot/chat",filename:"route",bundlePath:"app/api/retailbot/chat/route"},resolvedPagePath:"/Users/tbwa/Documents/GitHub/repro/apps/analytics/app/api/retailbot/chat/route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:d,staticGenerationAsyncStorage:h,serverHooks:p,headerHooks:g,staticGenerationBailout:m}=u,v="/api/retailbot/chat/route";function y(){return(0,n.patchFetch)({serverHooks:p,staticGenerationAsyncStorage:h})}}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[24,352],()=>a(4237));module.exports=r})();