// ===== FLASHCARD DATA =====
const flashcards = [
  // T1 — GDP
  {t:1, q:"What is the definition of GDP?", a:"The market value of the final goods and services produced in an economy over a certain period. 'Market value' = at current offering prices."},
  {t:1, q:"Distinguish final, intermediate, and capital goods with examples.", a:"<b>Final:</b> not used as input in further production (e.g., a car you buy). <b>Intermediate:</b> transformed into another good (steel → car). <b>Capital:</b> used to produce other goods but NOT transformed (factory machine). Capital goods appear in GDP as Investment."},
  {t:1, q:"State the national income accounting identity and define each term.", a:"Y = C + I + G + NX. C = consumption (household purchases); I = investment (capital + inventories); G = government purchases (excludes transfers); NX = exports - imports."},
  {t:1, q:"Why does Expenditure = Income in GDP measurement?", a:"Any intermediate good cost is someone else's revenue, so they cancel in the sum. Only revenue from final goods creates net income. Mathematically: ΣIncome_i = ΣRevenue_i - ΣCost_i, and intermediate costs cancel, leaving only final good revenues."},
  {t:1, q:"What are the three components of investment I?", a:"(1) Business fixed investment: plants, machinery, equipment, intellectual property. (2) Residential investment: new homes/apartments. (3) Inventory investment: change in unsold goods = end-of-period unsold minus start-of-period unsold."},
  {t:1, q:"What does NOT count in government purchases G?", a:"Transfer payments such as Social Security, Medicare, unemployment insurance, and interest payments on government debt. These don't represent the government buying a good or service."},
  {t:1, q:"Write the formula for nominal GDP and real GDP. What's the key difference?", a:"Nominal GDP: $Y_t^{nom} = \\sum_i P_{i,t} Q_{i,t}$ (current-year prices). Real GDP: $Y_t^{real} = \\sum_i P_{i,r} Q_{i,t}$ (base-year prices). Nominal changes with prices AND quantities; real changes only with quantities."},
  {t:1, q:"What is chain weighting and why is it preferred?", a:"Chain weighting computes the Fisher index (geometric mean of Laspeyres and Paasche) between adjacent periods, then chains them together. Key benefit: growth rates do NOT depend on the choice of base year. Also handles new/obsolete goods better."},
  {t:1, q:"How is a PPP adjustment made when comparing China's and US GDP?", a:"(1) Convert China GDP from yuan to USD using exchange rate. (2) Multiply by US price level / China price level. This corrects for China's lower prices — a dollar buys more in China than in the US, so raw exchange-rate comparison understates China's real output."},
  {t:1, q:"A real estate agent charges $12,000 commission on a $200,000 house built in 1985. How does this affect GDP?", a:"Only the $12,000 commission is included in GDP (as consumption or investment services). The house itself is not counted — it was already counted when it was built in 1985. Resale of existing goods is not GDP."},
  // T2 — Inflation
  {t:2, q:"Define inflation and write its formula.", a:"Inflation is the rate of change in the price level. $\\pi_t = (P_{t+1} - P_t)/P_t \\times 100$. Hyperinflation = inflation rate exceeding 500% per year."},
  {t:2, q:"What is the difference between the GDP Deflator and the CPI?", a:"<b>GDP Deflator:</b> price index for ALL final goods/services produced in the economy. Calculated as 100 × (Nominal GDP / Real GDP). <b>CPI:</b> price index for a FIXED BASKET of consumer goods. CPI is more relevant to households; deflator covers the whole economy."},
  {t:2, q:"Coffee cost $0.10/lb in 1900 (CPI=4) and $1.50/lb in 2015 (CPI=100). Was it more or less expensive in 2015?", a:"Convert 1900 price to 2015 dollars: $0.10 × (100/4) = $2.50. Since $1.50 < $2.50, coffee was LESS expensive in real terms in 2015. The nominal price rose but didn't keep up with general inflation."},
  // T3 — Growth Rates
  {t:3, q:"State the constant growth rule and derive it.", a:"If a variable grows at constant rate $g$ per period, then $y_t = y_0(1+g)^t$. Derived by applying $y_{t+1}=y_t(1+g)$ repeatedly: $y_1=y_0(1+g)$, $y_2=y_1(1+g)=y_0(1+g)^2$, and so on."},
  {t:3, q:"State the Rule of 70. What's the doubling time at 2% growth?", a:"If $y$ grows at rate $g$/year, doubling time ≈ $70/(100g)$ years. At $g=0.02$: doubling time ≈ $70/2 = 35$ years. The rule doesn't depend on the initial value — only on the growth rate."},
  {t:3, q:"Why does constant growth appear as a straight line on a log scale?", a:"$y_t = y_0(1+g)^t$ → $\\log y_t = \\log y_0 + t\\log(1+g)$. This is linear in $t$ with slope $\\log(1+g)$ and intercept $\\log y_0$. Higher growth rate = steeper slope on log scale."},
  {t:3, q:"If $z = x/y$, what is $g_z$? If $z = x^a$?", a:"If $z=x/y$: $g_z \\approx g_x - g_y$. If $z=x^a$: $g_z \\approx a \\cdot g_x$. From log approximation: $\\log(x_{t+1}/x_t) \\approx g_x$ for small $g_x$."},
  {t:3, q:"What is the geometric average growth rate formula?", a:"Given start value $y_0$ and end value $y_t$ after $t$ periods: $\\bar{g} = (y_t/y_0)^{1/t} - 1$. Gives the constant rate that would have moved from $y_0$ to $y_t$."},
  // T4 — Models
  {t:4, q:"Define endogenous and exogenous variables in an economic model.", a:"<b>Endogenous:</b> Variables determined inside the model — what the model solves for. <b>Exogenous:</b> Variables given from outside the model (parameters) — the inputs. The model expresses endogenous variables as functions of exogenous variables."},
  {t:4, q:"In the labor market model $L_s = \\bar{a}w + \\bar{l}$ and $L_d = \\bar{f} - w$, what happens if many workers retire?", a:"Many retirements decrease $\\bar{l}$ (supply intercept falls). Supply curve shifts left. At the same wage, fewer workers are willing to work. Equilibrium: wage rises, employment falls. This is a change in an exogenous variable."},
  // T5 — Production
  {t:5, q:"Write the Cobb-Douglas production function and state its four key properties.", a:"$Y = \\bar{A}K^{1/3}L^{2/3}$. Properties: (1) F(0,0)=0, (2) positive marginal products, (3) diminishing marginal products (MPK and MPL fall as the respective input increases), (4) constant returns to scale: $F(\\beta K, \\beta L) = \\beta Y$."},
  {t:5, q:"Derive MPK and MPL for the Cobb-Douglas function. What do firms set them equal to?", a:"$MPK = \\frac{\\partial F}{\\partial K} = \\frac{1}{3}\\bar{A}(L/K)^{2/3} = \\frac{Y}{3K}$. $MPL = \\frac{2}{3}\\bar{A}(K/L)^{1/3} = \\frac{2Y}{3L}$. Profit-maximizing firms set MPK = r (rental rate) and MPL = w (wage)."},
  {t:5, q:"Why is $\\alpha = 1/3$ in the Cobb-Douglas function? Connect to US data.", a:"With $Y = \\bar{A}K^\\alpha L^{1-\\alpha}$, the model predicts capital income share = $\\alpha$ and labor income share = $1-\\alpha$. US data shows labor earns ≈2/3 of income and capital ≈1/3, so $\\alpha = 1/3$."},
  {t:5, q:"Write the per-capita production function and explain how to get it.", a:"$y = \\bar{A}k^{1/3}$, where $y = Y/L$ and $k = K/L$. Derived using CRS: $F(K/L, 1) = F(K,L)/L = Y/L = y$."},
  {t:5, q:"How is TFP calculated as a residual? What does it mean?", a:"From $y = \\bar{A}k^{1/3}$: $\\bar{A} = y/k^{1/3}$. TFP is calculated from observable data on $y$ and $k$ — it's what makes the model fit the data. Lower TFP means workers produce less output for any given capital level. TFP captures technology, institutions, human capital, allocation efficiency."},
  {t:5, q:"What share of income differences across countries is explained by capital? By TFP?", a:"Capital per person differences explain about 1/3 of income gaps. TFP differences explain the remaining 2/3. Rich countries are rich both because they have more capital AND because they use it more efficiently (higher TFP)."},
  // T6 — Solow
  {t:6, q:"Write all four Solow model equations and identify endogenous vs exogenous variables.", a:"(1) $Y_t = \\bar{A}K_t^{1/3}L_t^{2/3}$. (2) $\\Delta K_{t+1} = \\bar{s}Y_t - \\bar{d}K_t$. (3) $L_t = \\bar{L}$. Endogenous: $Y_t, K_t, I_t$. Exogenous: $\\bar{s}, \\bar{d}, \\bar{A}, \\bar{L}, K_0$."},
  {t:6, q:"Write the per-capita capital accumulation equation and explain its two terms.", a:"$\\Delta k_{t+1} = \\bar{s}y_t - \\bar{d}k_t = \\bar{s}\\bar{A}k_t^{1/3} - \\bar{d}k_t$. First term: investment per person (concave, due to diminishing returns). Second term: depreciation per person (linear). Capital grows when investment > depreciation."},
  {t:6, q:"Derive the steady-state $k^*$ and $y^*$ in the Solow model.", a:"Set $\\Delta k = 0$: $\\bar{s}\\bar{A}(k^*)^{1/3} = \\bar{d}k^*$. Solve: $(k^*)^{2/3} = \\bar{s}\\bar{A}/\\bar{d}$, so $k^* = (\\bar{s}\\bar{A}/\\bar{d})^{3/2}$. Then $y^* = \\bar{A}^{3/2}(\\bar{s}/\\bar{d})^{1/2}$."},
  {t:6, q:"What happens to $k^*$ and $y^*$ if the savings rate $\\bar{s}$ permanently increases?", a:"Investment curve rotates up. New steady state has higher $k^{**}$ and $y^{**}$. Economy transitions upward. Growth is temporarily faster but returns to zero at new steady state. No permanent change in growth rate — only level effect."},
  {t:6, q:"Why can't capital accumulation sustain long-run growth in the Solow model?", a:"Due to diminishing returns to capital: as $k$ rises, MPK falls. Investment adds less and less output per unit. Meanwhile, depreciation scales linearly with $k$. Eventually, net investment = 0 and the economy rests in steady state. Only sustained growth in $\\bar{A}$ (technology) can drive long-run growth."},
  {t:6, q:"State the principle of transition dynamics in the Solow model.", a:"The farther below its steady state an economy is (in % terms), the faster it grows. The closer to steady state, the slower it grows. This explains why poorer countries in the OECD grew faster — they were farther from steady state. But globally, rich and poor grow at similar rates, suggesting most countries are near their own (different) steady states."},
  // T7 — Solow + growth
  {t:7, q:"What two equations are added to the Solow model in Topic 7?", a:"Population growth: $\\Delta L_{t+1}/L_t = \\bar{n}$. Productivity growth: $\\Delta A_{t+1}/A_t = \\bar{g}_A$. These change the long-run equilibrium from a steady state to a balanced growth path."},
  {t:7, q:"Define a balanced growth path (BGP). How does it differ from a steady state?", a:"A BGP is a situation where each endogenous variable grows at a constant rate (given no changes in exogenous variables). A steady state is a special case where that constant rate is 0 (all variables are constant). BGP generalizes steady state to account for long-run productivity growth."},
  {t:7, q:"Derive $g_y^*$ (BGP growth rate of output per person).", a:"On BGP: $g_y^* = g_k^*$. From $y_t = A_t k_t^{1/3}$: $g_y = g_A + \\frac{1}{3}g_k$. Substitute $g_k = g_y$: $g_y^* = g_A + \\frac{1}{3}g_y^*$ → $\\frac{2}{3}g_y^* = \\bar{g}_A$ → $g_y^* = \\frac{3}{2}\\bar{g}_A$."},
  {t:7, q:"Write the BGP level of $y_t^*$ and identify what it depends on.", a:"$y_t^* = A_t^{3/2} \\cdot (\\bar{s} / (\\frac{3}{2}\\bar{g}_A + \\bar{d} + \\bar{n}))^{1/2}$. Level depends on: TFP level $A_t$ (positively), savings rate (positively), productivity growth $g_A$ (negatively — higher growth requires more investment to maintain the ratio), depreciation (negatively), population growth (negatively)."},
  // T8 — Labor
  {t:8, q:"Define the unemployment rate formula and what 'unemployed' means.", a:"Unemployment rate = (# unemployed / labor force) × 100. Unemployed: no wage/salary job AND actively looked for work in last 4 weeks AND available to work. Labor force = employed + unemployed."},
  {t:8, q:"What are the three types of unemployment? Which ones make up the natural rate?", a:"(1) Cyclical: due to short-run output fluctuations. (2) Structural: due to permanent labor market changes (technology, policy). (3) Frictional: time to find jobs in a dynamic economy. Natural rate = structural + frictional (no cyclical component)."},
  {t:8, q:"Write the bathtub model flow equation and explain $\\lambda_s$ and $\\lambda_f$.", a:"$\\Delta U_{t+1} = \\lambda_s E_t - \\lambda_f U_t$. $\\lambda_s$ = job separation rate (fraction of employed who lose jobs per period). $\\lambda_f$ = job finding rate (fraction of unemployed who find jobs per period). In rate form: $\\Delta u_{t+1} = \\lambda_s(1-u_t) - \\lambda_f u_t$."},
  {t:8, q:"Derive the natural rate of unemployment $u^*$.", a:"Set $\\Delta u_{t+1} = 0$: $0 = \\lambda_s(1-u^*) - \\lambda_f u^*$. Expand: $\\lambda_s = (\\lambda_s + \\lambda_f)u^*$. Solve: $u^* = \\lambda_s/(\\lambda_s + \\lambda_f)$."},
  {t:8, q:"How does unemployment insurance affect the natural rate? Explain via the model.", a:"UI reduces the urgency of job search → lowers $\\lambda_f$ (harder to find jobs when unemployed workers are less active in searching). With lower $\\lambda_f$ and same $\\lambda_s$: $u^* = \\lambda_s/(\\lambda_s + \\lambda_f)$ rises. Higher natural rate of unemployment."},
  // T9 — Short run
  {t:9, q:"Define the output gap $\\tilde{Y}_t$ and write the equation linking $Y_t$, $\\bar{Y}_t$, and $\\tilde{Y}_t$.", a:"$\\tilde{Y}_t \\equiv (Y_t - \\bar{Y}_t)/\\bar{Y}_t$. Rearranging: $Y_t = \\bar{Y}_t(1 + \\tilde{Y}_t)$. Positive output gap = boom. Negative = recession."},
  {t:9, q:"What defines a recession in the short-run framework?", a:"When actual output falls below potential output: $\\tilde{Y}_t < 0$. A recession ends when $\\tilde{Y}_t$ starts to rise (becomes less negative) — not necessarily when it turns positive. Typically lasts ~2 years with ≈&#36;3,000 loss per person."},
  {t:9, q:"State Okun's Law and derive the cyclical unemployment when $\\tilde{Y}_t = -4\\%$.", a:"$u_t - u_t^* \\approx -\\frac{1}{2}\\tilde{Y}_t$. With $\\tilde{Y}_t = -0.04$: cyclical unemployment = $-\\frac{1}{2}(-0.04) = +0.02 = 2\\%$. So actual unemployment is 2 percentage points above the natural rate."},
  // T10 — Money
  {t:10, q:"Define: currency, monetary base, M1, M2, and reserves.", a:"Currency: bills and coins. Reserves: bank deposits at the Fed. MB = currency + reserves (govt controls this directly). M1 = currency + demand deposits. M2 = M1 + savings/money market/CDs. Govt can't directly control M1/M2, only MB."},
  {t:10, q:"What are the three tools the Fed uses to set the federal funds rate?", a:"(1) IOR (interest on reserves) — floor on the funds rate. (2) Quantity of reserves $M^S$ — shifts supply in reserves market. (3) Discount rate — ceiling on the funds rate. Currently (ample reserves era), the Fed mainly uses IOR."},
  {t:10, q:"Explain monetary 'easing' using the reserves supply-demand diagram.", a:"Easing = lower the funds rate target. Fed buys government bonds → pays with reserves → increases $M^S$ (supply shifts right). In scarce reserves regime: funds rate falls as banks have more reserves than they need at current rate. In ample reserves: lower IOR directly brings rate down."},
  {t:10, q:"Write the Fisher equation and explain why real interest rates matter for the economy.", a:"$R_t = i_t - \\pi_t$ (real rate = nominal rate - inflation). Real rate matters because it measures the true cost of borrowing / return to saving in terms of purchasing power. Investment and consumption decisions depend on real rates. The Fed sets nominal rates to achieve desired real rate effects."},
  {t:10, q:"What is the difference between 'ample' and 'scarce' reserves regimes?", a:"Scarce reserves: supply is on the downward-sloping part of demand — funds rate responds to changes in supply. Fed uses open market operations to hit target. Ample reserves: supply is on the flat (IOR) part — funds rate equals IOR regardless of supply. Fed sets rate by changing IOR directly."},
  // T11 — IS Curve
  {t:11, q:"State the IS curve equation and define each variable.", a:"$\\tilde{Y}_t = \\bar{a}_t - \\bar{b}(R_t - \\bar{r})$. $\\tilde{Y}_t$ = short-run output (output gap). $\\bar{a}_t$ = aggregate demand shock. $\\bar{b}$ = sensitivity of output to interest rate deviations ($\\bar{b}>0$). $R_t$ = real interest rate. $\\bar{r}$ = long-run trend real rate. The IS curve is downward-sloping: higher real rates → lower output."},
  {t:11, q:"Write the investment equation and explain each term.", a:"$I_t/\\bar{Y}_t = \\bar{a}_{i,t} - \\bar{b}(R_t - \\bar{r})$. $\\bar{a}_{i,t}$ = investment share unexplained by interest rates. $\\bar{b}$ = sensitivity to the interest rate gap. When $R_t > \\bar{r}$, investment falls below trend; when $R_t < \\bar{r}$, investment rises above trend. Only the gap $(R_t - \\bar{r})$ matters, not the level of $R_t$ alone."},
  {t:11, q:"What is an aggregate demand shock in this model? Give two examples.", a:"$\\bar{a}_t \\equiv \\bar{a}_{c,t}+\\bar{a}_{i,t}+\\bar{a}_{g,t}+\\bar{a}_{ex,t}-\\bar{a}_{im,t}-1$. It captures all expenditure deviations from long-run trend unrelated to the current interest rate. Examples: (1) Consumer optimism → $\\bar{a}_{c,t}$ rises → $\\bar{a}_t$ rises → IS shifts right. (2) Government stimulus package → $\\bar{a}_{g,t}$ rises → IS shifts right."},
  {t:11, q:"Distinguish a movement along the IS curve from a shift. What causes each?", a:"Movement along: a change in $R_t$ (the real interest rate). Higher $R$ moves us up-left along IS (lower output). Shift: a change in $\\bar{a}_t$ (demand shock), $\\bar{b}$ (sensitivity), or $\\bar{r}$ (trend rate). A positive demand shock shifts IS right; a negative one shifts it left."},
  {t:11, q:"Derive the IS curve with the Keynesian multiplier. What is the multiplier expression?", a:"If $C_t/\\bar{Y}_t = \\bar{a}_{c,t} + \\bar{x}\\tilde{Y}_t$, substituting into the income identity gives $(1-\\bar{x})\\tilde{Y}_t = \\bar{a}_t - \\bar{b}(R_t - \\bar{r})$. Solving: $\\tilde{Y}_t = \\frac{1}{1-\\bar{x}}[\\bar{a}_t - \\bar{b}(R_t - \\bar{r})]$. Multiplier $= 1/(1-\\bar{x}) > 1$."},
  {t:11, q:"State the Permanent Income Hypothesis (PIH). What does Hsieh (2003) find?", a:"PIH: people base consumption on average income over time (permanent income), not current income. Temporary shocks → little change in consumption. Hsieh finds that Alaska's large Permanent Fund payment (anticipated) had small consumption effects — consistent with PIH. But tax refunds (less anticipated) triggered spending of ≈$0.30 per $1 — inconsistent. Conclusion: PIH holds for large, anticipated changes."},
  {t:11, q:"How does fiscal policy affect the IS curve? What is an automatic stabilizer?", a:"Higher government purchases (above trend) → $\\bar{a}_{g,t}$ rises → $\\bar{a}_t$ rises → IS shifts right → higher $\\tilde{Y}_t$. Automatic stabilizers are pre-approved programs (e.g., unemployment insurance) that automatically expand in downturns, stabilizing consumption without new legislation. Transfer payments themselves don't shift IS directly — they work by sustaining consumption (affecting $\\bar{a}_{c,t}$)."},
  // T12 — Phillips Curve
  {t:12, q:"State the general Phillips Curve equation and identify every term.", a:"$\\pi_t - \\pi_t^e = \\bar{\\nu}\\tilde{Y}_t + \\bar{o}_t$. $\\pi_t$ = actual inflation, $\\pi_t^e$ = expected inflation, $\\bar{\\nu} > 0$ = slope, $\\tilde{Y}_t$ = output gap, $\\bar{o}_t$ = cost/supply shock. The left side is the inflation forecast error."},
  {t:12, q:"Why do inflation forecast errors affect output in the Phillips Curve model?", a:"Firms set production at the start of a period before observing $P_{t+1}$. Higher expected $P_{t+1}$ → higher expected real marginal revenue → more production. If actual inflation > expected (positive surprise), firms overproduced relative to perfect-foresight choice → output rises above trend."},
  {t:12, q:"What is a cost-push shock $\\bar{o}_t$? Give the sign rule and an example.", a:"$\\bar{o}_t$ captures temporary cost deviations from trend. Sign rule: ask what happens to output if $\\pi_t - \\pi_t^e$ is held fixed. The shock is in the opposite direction. Example: oil spike → costs rise → output would fall → $\\bar{o}_t > 0$ (positive shock, shifts PC upward)."},
  {t:12, q:"State adaptive expectations. Derive the accelerationist Phillips Curve.", a:"Adaptive expectations: $\\pi_t^e = \\pi_{t-1}$. Substituting: $\\pi_t - \\pi_{t-1} = \\bar{\\nu}\\tilde{Y}_t + \\bar{o}_t$, i.e., $\\Delta\\pi_t = \\bar{\\nu}\\tilde{Y}_t + \\bar{o}_t$. The change in inflation depends on the output gap."},
  {t:12, q:"In the PC diagram ($\\Delta\\pi$ vs $\\tilde{Y}$): what is the slope and y-intercept?", a:"Slope = $\\bar{\\nu} > 0$ (upward sloping). Y-intercept = $\\bar{o}_t$ (cost shock). When $\\tilde{Y}=0$: $\\Delta\\pi = \\bar{o}_t$. A positive shock shifts the PC up; a negative shock shifts it down."},
  {t:12, q:"What happens in the long run according to the Phillips Curve?", a:"In the long run: $\\pi_t = \\pi_t^e$ (no surprises) and $\\bar{o}_t = 0$ (shocks dissipate). Then $\\Delta\\pi_t = 0$ requires $\\tilde{Y}_t = 0$. Output returns to potential. The PC provides the supply-side adjustment mechanism closing the output gap over time."},
  // T13 — IS-MP Model
  {t:13, q:"State the IS-MP model's three equations and identify each endogenous variable.", a:"IS: $\\tilde{Y}_t = \\bar{a}_t - \\bar{b}(R_t - \\bar{r})$. PC: $\\Delta\\pi_t = \\bar{\\nu}\\tilde{Y}_t + \\bar{o}_t$. MP: $R_t$ set by central bank. Endogenous: $\\tilde{Y}_t$, $R_t$, $\\Delta\\pi_t$. Causal chain: $i_t \\Rightarrow R_t \\Rightarrow \\tilde{Y}_t \\Rightarrow \\Delta\\pi_t$."},
  {t:13, q:"Why can the central bank control the real interest rate by setting the nominal rate?", a:"By the Fisher equation $R_t = i_t - \\pi_t$, if inflation $\\pi_t$ is 'sticky' (adjusts slowly in the short run), then raising/lowering $i_t$ moves $R_t$ one-for-one. This is the 'sticky inflation assumption.'"},
  {t:13, q:"Describe the IS-MP diagram: axes, curves, and what the intersection represents.", a:"Vertical axis: real interest rate $R$. Horizontal axis: short-run output $\\tilde{Y}$. IS curve: downward-sloping, $\\tilde{Y} = \\bar{a}_t - \\bar{b}(R-\\bar{r})$. MP curve: horizontal at $R = R_t$. Intersection: equilibrium $\\tilde{Y}_t$."},
  {t:13, q:"How does the Fed stabilize output after a negative demand shock $\\bar{a}_1 < 0$?", a:"Cut $R_1$ below $\\bar{r}$ to shift MP curve down. The target: $R_1 = \\bar{r} + \\bar{a}_1/\\bar{b}$. The lower rate stimulates investment, offsetting the negative shock so $\\tilde{Y}_1 = 0$ is restored."},
  {t:13, q:"Explain the Volcker disinflation mechanism using the IS-MP and Phillips curve.", a:"Volcker raised $R_t > \\bar{r}$ (MP shifts up) $\\Rightarrow \\tilde{Y}_t < 0$ (recession) $\\Rightarrow \\Delta\\pi_t < 0$ (falling inflation). After inflation reached target, $R_t$ returned to $\\bar{r}$ and output recovered. Cost: severe 1981–82 recession with $>10\\%$ unemployment."},
  {t:13, q:"What is the inflation-output tradeoff and why does it constrain central banks?", a:"Lowering inflation requires inducing a recession (below-potential output), which raises unemployment and reduces living standards temporarily. Central banks must weigh the costs of inflation against the costs of the recession needed to eliminate it."},
  // T14 — Unconventional Policy
  {t:14, q:"Define the Effective Lower Bound (ELB). Why can't nominal rates go to $-\\infty$?", a:"ELB $\\approx 0\\%$ (slightly negative). Physical currency earns 0%, so if IOR falls below ELB, banks switch to cash. Real lower bound: $R_t \\geq \\text{ELB} - \\pi_t$. Higher inflation targets raise policy room by lowering the real floor."},
  {t:14, q:"What is forward guidance and how does it affect the yield curve?", a:"Forward guidance = central bank communication about future interest rates. If the Fed credibly commits to low rates, expectations of future $i$ fall $\\Rightarrow$ demand for long-term bonds rises $\\Rightarrow$ bond prices rise $\\Rightarrow$ long-term yields fall $\\Rightarrow$ positive demand shock $\\bar{a}_t > 0$."},
  {t:14, q:"Define quantitative easing (QE). How does it enter the IS-MP model?", a:"QE = central bank purchases of long-term financial assets (Treasuries, MBS) beyond conventional open-market operations. Mechanism: $\\uparrow$ bond demand $\\Rightarrow \\uparrow$ bond prices $\\Rightarrow \\downarrow$ long-term yields $\\Rightarrow$ lower borrowing costs $\\Rightarrow \\bar{a}_t > 0$ (positive demand shock, IS shifts right)."},
  {t:14, q:"State the YTM formula. What is the inverse relationship between bond prices and yields?", a:"$P = \\sum_{k=1}^N \\frac{C_k}{(1+\\text{YTM})^k} + \\frac{FV}{(1+\\text{YTM})^N}$. If demand rises, prices rise. To make the PDV formula hold, YTM must fall. Hence $\\uparrow P \\Leftrightarrow \\downarrow$ YTM. Intuition: buying a fixed stream of cash flows at a higher price = lower return."},
  {t:14, q:"Why is the yield curve normally upward sloping? What does an inverted curve signal?", a:"Long bonds are riskier (inflation risk, liquidity risk) so investors demand higher yields for longer maturities. Inverted yield curve (short > long rates) signals that markets expect rates to fall — often because a recession is anticipated. It is a reliable leading recession indicator."},
  {t:14, q:"How does fiscal stimulus at the ELB enter the IS-MP model? What are the debates?", a:"Fiscal stimulus raises $\\bar{a}_{g,t}$ (government spending share) $\\Rightarrow \\bar{a}_t$ rises $\\Rightarrow$ IS shifts right. Particularly powerful at ELB since MP cannot offset it. Debates: size of multiplier (baseline model: 1; with consumption channel: $>1$), tax cuts vs. spending, type of spending."},
  // T15 — AS-AD Model
  {t:15, q:"State the simple monetary policy rule. What does each parameter represent?", a:"$R_t - \\bar{r} = \\bar{m}(\\pi_t - \\bar{\\pi})$. $\\bar{r}$ = long-run real rate; $\\bar{m}$ = aggressiveness to inflation ($\\bar{m}>0$); $\\bar{\\pi}$ = inflation target. When $\\pi > \\bar{\\pi}$, the central bank raises $R$ above $\\bar{r}$."},
  {t:15, q:"Derive the AD curve equation from the IS curve and policy rule.", a:"IS: $\\tilde{Y}_t = \\bar{a}_t - \\bar{b}(R_t - \\bar{r})$. Policy rule: $R_t - \\bar{r} = \\bar{m}(\\pi_t - \\bar{\\pi})$. Substitute: $\\tilde{Y}_t = \\bar{a}_t - \\bar{b}\\bar{m}(\\pi_t - \\bar{\\pi})$. Output is now a function of inflation."},
  {t:15, q:"Why is the AD curve downward sloping? What causes it to shift?", a:"Higher $\\pi$ → central bank raises $R$ (policy rule) → lower $\\tilde{Y}$ (IS). Shifts: demand shocks $\\bar{a}_t$ (incl. QE, fiscal stimulus) shift AD left/right; a change in $\\bar{\\pi}$ also shifts AD. Movement along AD is caused by changes in $\\pi_t$."},
  {t:15, q:"Write the AS curve equation. What causes it to shift?", a:"$\\pi_t = \\pi_{t-1} + \\bar{\\nu}\\tilde{Y}_t + \\bar{o}_t$ (Phillips curve relabeled). Shifts: (1) change in $\\pi_{t-1}$ — if last period's inflation rises, AS shifts up; (2) supply shock $\\bar{o}_t$ — positive shock shifts AS up."},
  {t:15, q:"Solve for the steady state of the AS-AD model.", a:"Set $\\pi_t = \\pi_{t-1} = \\pi^*$, $\\bar{a}_t=0$, $\\bar{o}_t=0$. From AS: $\\pi^* = \\pi^* + \\bar{\\nu}\\tilde{Y}^* \\Rightarrow \\tilde{Y}^*=0$. From AD with $\\tilde{Y}^*=0$: $0 = -\\bar{b}\\bar{m}(\\pi^*-\\bar{\\pi}) \\Rightarrow \\pi^*=\\bar{\\pi}$. Steady state: $(\\tilde{Y}^*, \\pi^*) = (0, \\bar{\\pi})$."},
  {t:15, q:"Describe the full transition dynamics after a one-period inflation shock $\\bar{o}_1 > 0$.", a:"Period 1: AS shifts up → stagflation ($\\tilde{Y}_1<0$, $\\pi_1>\\bar{\\pi}$). Periods 2+: shock gone but $\\pi_1$ baked into expectations. AS stays elevated; central bank keeps $\\tilde{Y}<0$ to reduce inflation. Each period: AS shifts down slightly, $\\pi$ falls, $\\tilde{Y}$ rises. Converges back to $(0,\\bar{\\pi})$."},
  {t:15, q:"What happens graphically when the central bank lowers its inflation target (disinflation)?", a:"AD shifts left (lower $\\bar{\\pi}$ means tighter policy at every $\\pi$). AS unchanged initially. Period 1: $\\tilde{Y}_1<0$, $\\pi_1<\\bar{\\pi}_{\\text{old}}$. Then $\\pi_1$ lowers expectations → AS shifts right/down each period. Long run: new steady state at $(0, \\bar{\\pi}_{\\text{new}})$. $\\text{AD}_1=\\text{AD}^*$; AS shifts gradually."},
  {t:15, q:"For a persistent demand shock (periods 1–8), what happens when the shock ends?", a:"During shock: AD right, AS shifts up each period (inflation baked in). When shock ends (period 9): AD shifts back left. But AS is now far above steady state. Result: recession ($\\tilde{Y}<0$) with elevated inflation — same transition as after an inflation shock. The boom must be paid for."},
  {t:15, q:"Herriford's diagram labeling convention for AS-AD: what labels are required?", a:"Label $\\text{AS}_0, \\text{AS}_1, \\text{AS}^*, \\text{AD}_0, \\text{AD}_1, \\text{AD}^*$. Subscript 0 = initial; subscript 1 = period of shock; $*$ = long-run. If curves coincide, stack labels (e.g., $\\text{AD}_0 = \\text{AD}_1 = \\text{AD}^*$). Always label both axes ($\\tilde{Y}$ and $\\pi$)."},
];
const quizQuestions = [
  // T1
  {t:1, q:"Which of the following would be counted as Investment (I) in GDP?",
   opts:["A household buying a new refrigerator","The government building a new highway","A firm purchasing new factory equipment","A consumer buying imported electronics"],
   ans:2, exp:"Investment includes purchases of capital goods by domestic residents. Factory equipment is a capital good purchased by a firm. A refrigerator is consumption (C). Highway is government purchases (G). Imported electronics reduces NX (included in C then subtracted as import)."},
  {t:1, q:"The U.S. government increases Social Security payments. How does this affect GDP?",
   opts:["GDP increases (counted in G)","GDP decreases (counted as negative NX)","GDP is unaffected (transfer payments excluded from G)","GDP increases (counted in C)"],
   ans:2, exp:"Transfer payments like Social Security are EXCLUDED from G because they don't represent a government purchase of a good or service. G only includes government purchases of final goods and services."},
  {t:1, q:"Inventory adjustments = $150B. Capital goods sold = $900B. What is I?",
   opts:["$900B","$750B","$1,050B","$150B"],
   ans:2, exp:"I = Purchases of capital goods + Inventory Adjustments = &#36;900B + &#36;150B = &#36;1,050B. Inventory adjustments capture the change in unsold goods, ensuring all production (sold or not) is counted."},
  {t:1, q:"If quantities are constant but prices double, what happens to nominal GDP and real GDP?",
   opts:["Both double","Nominal doubles; real stays the same","Real doubles; nominal stays the same","Both stay the same"],
   ans:1, exp:"Nominal GDP uses current-year prices, so doubling prices doubles nominal GDP. Real GDP uses base-year prices and only changes with quantities — since quantities didn't change, real GDP stays the same."},
  {t:1, q:"The Fisher Index is calculated as:",
   opts:["The arithmetic mean of LI and PI","The geometric mean (square root of the product) of LI and PI","LI minus PI","2 times the Laspeyres Index"],
   ans:1, exp:"FI = √(LI × PI). The Fisher Index is the geometric mean of the Laspeyres and Paasche indexes, which approximately equals their arithmetic mean. It is preferred because it minimizes bias relative to using just one index."},
  // T2
  {t:2, q:"Gas was $0.27/gal in 1950 (CPI=8.23) and $3.95/gal in 2022 (CPI=100). In real terms, gas in 2022 was:",
   opts:["Much more expensive than in 1950","Slightly more expensive than in 1950","About the same price as in 1950","Slightly less expensive than in 1950"],
   ans:1, exp:"Real 1950 price in 2022 dollars = &#36;0.27 × (100/8.23) = $3.28. Since $3.95 > $3.28, gas is slightly more expensive in real terms in 2022. The nominal price rose more than general inflation."},
  {t:2, q:"Hyperinflation is defined as inflation exceeding:",
   opts:["10% per year","100% per year","500% per year","1000% per year"],
   ans:2, exp:"Hyperinflation is an episode of extremely high inflation, defined in this course as greater than 500% per year. Historical examples include Germany 1923 and Zimbabwe 2000s."},
  // T3
  {t:3, q:"Country A starts at $10,000 GDP and grows at 3% per year. After 70 years, GDP is approximately:",
   opts:["$20,000","$40,000","$80,000","$160,000"],
   ans:2, exp:"By Rule of 70, doubling time at 3% = 70/3 ≈ 23.3 years. In 70 years, GDP doubles approximately 3 times: $10,000 × 2³ = $80,000. (Exact: $10,000 × 1.03^70 = $76,123 ≈ $80,000.)"},
  {t:3, q:"If $y = Y/L$ (output per capita), $Y$ grows at 4%, and $L$ grows at 1%, how fast does $y$ grow?",
   opts:["4%","5%","3%","1%"],
   ans:2, exp:"Using the growth rate rule: if z = x/y, then g_z ≈ g_x - g_y. So g_y (per capita) = g_Y - g_L = 4% - 1% = 3%."},
  {t:3, q:"On a log scale, a variable growing at a constant rate appears as:",
   opts:["A horizontal line","An upward-curving curve","A straight line with positive slope","An S-shaped curve"],
   ans:2, exp:"Log(y_t) = log(y_0) + t·log(1+g), which is linear in t. So on a log scale, constant growth = straight line. Higher growth rate = steeper slope."},
  // T4
  {t:4, q:"In an economic model, 'comparative statics' refers to:",
   opts:["Studying how the economy changes over time dynamically","Analyzing how the equilibrium changes when an exogenous variable changes","Solving for endogenous variables in terms of time","Estimating the statistical relationship between variables"],
   ans:1, exp:"Comparative statics analyzes how the model's equilibrium (solution) changes when we change an exogenous variable — holding all other exogenous variables constant. It compares two static equilibria."},
  {t:4, q:"Technology reduces demand for workers at McDonald's. In the labor market model, this means:",
   opts:["$\\bar{l}$ decreases (supply shifts left)","$\\bar{f}$ decreases (demand shifts left)","$\\bar{a}$ increases (supply rotates up)","$\\bar{l}$ increases (supply shifts right)"],
   ans:1, exp:"Technology reducing demand for workers shifts the demand curve left, which corresponds to a decrease in $\\bar{f}$ (the demand intercept). The supply curve is unchanged."},
  // T5
  {t:5, q:"With the Cobb-Douglas function $Y = AK^{1/3}L^{2/3}$, what is the MPK?",
   opts:["$\\frac{2}{3}\\frac{Y}{L}$","$\\frac{1}{3}\\frac{Y}{K}$","$\\frac{1}{3}\\frac{Y}{L}$","$\\frac{2}{3}\\frac{Y}{K}$"],
   ans:1, exp:"MPK = ∂F/∂K = (1/3)AK^{-2/3}L^{2/3} = (1/3)A(L/K)^{2/3} = (1/3)Y/K. Similarly, MPL = (2/3)Y/L."},
  {t:5, q:"India has $y_I/y_{US}=0.074$ and $k_I/k_{US}=0.035$. The implied relative TFP is approximately:",
   opts:["0.07","0.12","0.23","0.30"],
   ans:2, exp:"A/A_US = (y_I/y_US) / (k_I/k_US)^{1/3} = 0.074 / (0.035)^{1/3} = 0.074 / 0.327 ≈ 0.23."},
  {t:5, q:"Approximately what fraction of cross-country income differences is explained by TFP vs capital per person?",
   opts:["TFP 1/3, capital 2/3","TFP 2/3, capital 1/3","Equal: 1/2 each","TFP 3/4, capital 1/4"],
   ans:1, exp:"Capital per person differences explain about 1/3 of income gaps. TFP differences explain the remaining 2/3. This shows that productivity (technology, institutions, human capital) is more important than physical capital."},
  // T6
  {t:6, q:"In the Solow model, the investment curve is $\\bar{s}\\bar{A}k^{1/3}$. This curve is:",
   opts:["Linear and upward sloping","Concave and increasing (diminishing returns)","Convex and increasing","Downward sloping"],
   ans:1, exp:"The investment curve is a power function with exponent 1/3 < 1, making it concave. As k increases, sy increases but at a diminishing rate — the curve flattens out. This is due to diminishing returns to capital."},
  {t:6, q:"In the Solow model, if savings rate increases permanently, what happens in the long run?",
   opts:["Higher long-run growth rate permanently","Higher level of $k^*$ and $y^*$ but same long-run growth rate (0%)","Lower $k^*$ due to more depreciation","No change — savings doesn't affect the steady state"],
   ans:1, exp:"Higher $\\bar{s}$ → investment curve rotates up → new higher steady state $k^{**} > k^*$ and $y^{**} > y^*$. BUT at steady state, growth rate returns to 0. There's a temporary growth boost during transition, but no permanent change in the growth rate."},
  {t:6, q:"Solve for $y^*$ if $\\bar{s}=0.3$, $\\bar{A}=1$, $\\bar{d}=0.1$.",
   opts:["$y^* = 3^{1/2} \\approx 1.73$","$y^* = 3^{3/2} \\approx 5.2$","$y^* = (0.3/0.1)^{1/2} = \\sqrt{3} \\approx 1.73$","$y^* = (0.3/0.1)^{1/3} \\approx 1.44$"],
   ans:2, exp:"$y^* = \\bar{A}^{3/2}(\\bar{s}/\\bar{d})^{1/2} = 1^{3/2}(0.3/0.1)^{1/2} = 1 \\times \\sqrt{3} \\approx 1.73$."},
  // T7
  {t:7, q:"In the Solow model with productivity growth, the BGP growth rate of output per person is:",
   opts:["$g_A$","$\\frac{3}{2}g_A$","$\\frac{1}{2}g_A$","$g_A + n$"],
   ans:1, exp:"On the BGP, $g_y^* = g_k^*$. From $g_y = g_A + \\frac{1}{3}g_k$, substitute $g_k = g_y$: $g_y = g_A + \\frac{1}{3}g_y \\Rightarrow \\frac{2}{3}g_y = g_A \\Rightarrow g_y^* = \\frac{3}{2}g_A$."},
  {t:7, q:"If $g_A$ permanently decreases to 0 (from positive), what happens to the BGP?",
   opts:["Economy grows faster temporarily then returns to same BGP","BGP growth rate falls to 0; level of $y_t^*$ eventually stops growing","Immediate drop in output level with no recovery","Transition to higher $y^*$ due to reallocation"],
   ans:1, exp:"$g_y^* = (3/2)g_A = 0$. The new BGP has zero growth in output per person. The level $y_t^*$ shifts down to a new, lower BGP (because lower $g_A$ also reduces the denominator of the level formula). Eventually output per person stops growing."},
  // T8
  {t:8, q:"$\\lambda_s = 0.009$, $\\lambda_f = 0.21$. What is the natural rate of unemployment?",
   opts:["0.9%","4.1%","21.0%","3.5%"],
   ans:1, exp:"$u^* = \\lambda_s/(\\lambda_s + \\lambda_f) = 0.009/(0.009 + 0.21) = 0.009/0.219 \\approx 0.041 = 4.1\\%$."},
  {t:8, q:"In the bathtub model, if $u_0 > u^*$, what happens?",
   opts:["u rises further above u*","u converges downward toward u*","u oscillates around u*","u immediately jumps to u*"],
   ans:1, exp:"When $u > u^*$, outflows (job finding) exceed inflows (separations) in net terms, so $\\Delta u < 0$ — unemployment falls toward $u^*$. The model always converges to $u^*$ from any starting point."},
  // T9
  {t:9, q:"The natural rate of unemployment is 5%. Cyclical unemployment is 2%. Short-run output is:",
   opts:["4%","-4%","6%","-6%"],
   ans:1, exp:"Okun's Law: $u - u^* = -\\frac{1}{2}\\tilde{Y}$. So $0.02 = -\\frac{1}{2}\\tilde{Y} \\Rightarrow \\tilde{Y} = -0.04 = -4\\%$."},
  {t:9, q:"Short-run output (the output gap) is $\\tilde{Y}_t = -0.06$. Cyclical unemployment is approximately:",
   opts:["-3%","3%","-6%","6%"],
   ans:1, exp:"Okun's Law: cyclical unemployment = $-\\frac{1}{2}\\tilde{Y}_t = -\\frac{1}{2}(-0.06) = +0.03 = 3\\%$. A 6% output gap corresponds to 3 percentage points of cyclical unemployment."},
  // T10
  {t:10, q:"Which of the following is NOT included in the monetary base (MB)?",
   opts:["Currency in circulation","Bank reserves at the Fed","Demand deposits at commercial banks","Both (a) and (b) are included"],
   ans:2, exp:"MB = Currency + Reserves. Demand deposits (checking accounts) are part of M1, NOT the monetary base. The government directly controls MB by printing money or adjusting reserve balances."},
  {t:10, q:"If the Fed wants to lower the federal funds rate in a 'scarce reserves' regime, it would:",
   opts:["Raise the IOR","Sell government bonds (reduce reserves)","Buy government bonds (increase reserves)","Raise the discount rate"],
   ans:2, exp:"Buying bonds injects reserves, increasing $M^S$. In scarce reserves, demand is downward-sloping, so more supply → lower equilibrium funds rate. This is monetary 'easing.'"},
  {t:10, q:"The nominal interest rate is 5% and inflation is 3%. The real interest rate is approximately:",
   opts:["8%","3%","2%","5%"],
   ans:2, exp:"Fisher equation: R = i - π = 5% - 3% = 2%. The real interest rate measures purchasing power growth of savings — inflation erodes what nominal interest adds."},
  {t:10, q:"In 'ample reserves,' the Fed primarily controls the Fed funds rate by:",
   opts:["Large open market operations (buy/sell bonds)","Changing the required reserve ratio","Changing the Interest on Reserves (IOR)","Changing the monetary base directly"],
   ans:2, exp:"In ample reserves, supply is on the flat (IOR) portion of the demand curve — changing supply doesn't change the equilibrium rate. The rate simply equals IOR. So the Fed changes IOR directly to change the funds rate."},
  // T11 — IS Curve
  {t:11, q:"The IS curve equation $\\tilde{Y}_t = \\bar{a}_t - \\bar{b}(R_t - \\bar{r})$ is downward-sloping because:",
   opts:["Higher $\\bar{a}_t$ causes higher output","Higher real rates reduce investment, reducing output","Higher potential output reduces the output gap","$\\bar{b}$ is always negative"],
   ans:1, exp:"The IS curve is downward-sloping because a higher real interest rate $R_t$ reduces investment ($I_t/\\bar{Y}_t = \\bar{a}_{i,t} - \\bar{b}(R_t-\\bar{r})$ falls), which reduces aggregate expenditure, which reduces short-run output $\\tilde{Y}_t$. $\\bar{b} > 0$, so the minus sign gives the negative slope."},
  {t:11, q:"Consumer confidence unexpectedly rises. In the IS curve framework, this:",
   opts:["Moves the economy along the IS curve to higher output","Shifts the IS curve to the right (positive demand shock)","Shifts the IS curve to the left (negative demand shock)","Changes the slope of the IS curve"],
   ans:1, exp:"Consumer optimism raises $\\bar{a}_{c,t}$ (consumption above trend), which raises $\\bar{a}_t$. A higher $\\bar{a}_t$ shifts the IS curve to the right: at any given interest rate, output is now higher. This is a shift, not a movement along the curve."},
  {t:11, q:"If $\\bar{b}$ (interest rate sensitivity) is very large, the IS curve is:",
   opts:["Very steep — interest rates strongly affect output","Vertical — interest rates have no effect","Very flat — small interest rate changes cause large output changes","Upward sloping — higher rates raise output"],
   ans:2, exp:"The slope of IS (with $R$ on vertical axis) is $-1/\\bar{b}$. As $\\bar{b}$ grows, $-1/\\bar{b} \\to 0$, making the curve nearly horizontal (flat). A large $\\bar{b}$ means investment is highly responsive to interest rates, so a small change in $R$ produces a large change in $\\tilde{Y}$."},
  {t:11, q:"With a multiplier $\\bar{x} = 0.5$, a $+2\\%$ aggregate demand shock produces a short-run output change of:",
   opts:["+2%","+4%","+1%","+3%"],
   ans:1, exp:"Multiplied IS: $\\tilde{Y}_t = \\frac{1}{1-\\bar{x}}\\bar{a}_t$ (holding $R_t = \\bar{r}$). Multiplier $= 1/(1-0.5) = 2$. So $\\tilde{Y}_t = 2 \\times 2\\% = 4\\%$. The initial shock is amplified because higher income induces more consumption which further raises income."},
  {t:11, q:"According to the Permanent Income Hypothesis, a consumer receiving a temporary $5,000 tax refund will:",
   opts:["Spend most of it immediately since it is cash","Spend a small fraction, saving most","Spend it all — income is income","Reduce consumption because of future taxes"],
   ans:1, exp:"PIH predicts consumption is based on permanent (average lifetime) income, not current income. A temporary refund adds little to permanent income, so most is saved. Hsieh (2003) confirms this for Alaska's large Permanent Fund — but found tax refunds DID raise spending (≈$0.30/$1), suggesting PIH works better for large, anticipated changes."},
  // T12 — Phillips Curve
  {t:12, q:"In the Phillips Curve $\\pi_t - \\pi_t^e = \\bar{\\nu}\\tilde{Y}_t + \\bar{o}_t$, what happens when actual inflation exceeds expected inflation?",
   opts:["Output falls below potential","Output equals potential","Output rises above potential","Nothing changes in the real economy"],
   ans:2, exp:"When $\\pi_t > \\pi_t^e$, the left side is positive. With $\\bar{\\nu} > 0$ and $\\bar{o}_t = 0$: $\\tilde{Y}_t > 0$. Firms were surprised by higher prices and therefore overproduced relative to what they would have chosen with full information."},
  {t:12, q:"An oil price spike causes production costs to rise above trend. How does this appear in the Phillips Curve?",
   opts:["$\\bar{o}_t < 0$ — a negative shock, PC shifts down","$\\bar{o}_t > 0$ — a positive shock, PC shifts up","$\\bar{\\nu}$ increases — the PC gets steeper","$\\pi_t^e$ falls — expected inflation declines"],
   ans:1, exp:"Sign convention: ask what the cost shock does to output, holding $\\pi_t - \\pi_t^e$ fixed. Higher oil costs reduce output (supply contraction). So $\\bar{o}_t$ must be positive to generate higher inflation for any given output gap. The PC shifts upward."},
  {t:12, q:"Under adaptive expectations, the accelerationist Phillips Curve says that when the economy is in a boom ($\\tilde{Y}_t > 0$):",
   opts:["Inflation is high but constant","Inflation is rising (accelerating)","Inflation is falling (decelerating)","Expected inflation equals actual inflation"],
   ans:1, exp:"$\\Delta\\pi_t = \\bar{\\nu}\\tilde{Y}_t + \\bar{o}_t$. With $\\tilde{Y}_t > 0$ and $\\bar{o}_t = 0$: $\\Delta\\pi_t > 0$, meaning inflation is increasing each period. The boom doesn't just keep inflation high — it pushes it higher and higher, hence 'accelerationist.'"},
  {t:12, q:"In the Phillips Curve diagram (axes: $\\Delta\\pi$ vertical, $\\tilde{Y}$ horizontal), where does the curve cross the vertical axis?",
   opts:["At $\\bar{\\nu}$ (the slope parameter)","At $\\bar{o}_t$ (the cost shock)","At zero, always","At $\\pi_{t-1}$ (last period's inflation)"],
   ans:1, exp:"Setting $\\tilde{Y}_t = 0$: $\\Delta\\pi_t = \\bar{o}_t$. So the PC crosses the vertical axis at the cost shock. If $\\bar{o}_t = 0$, the curve passes through the origin. A positive cost shock shifts the intercept upward."},
  // T13 — IS-MP
  {t:13, q:"In the IS-MP diagram, what does the MP curve look like and what shifts it?",
   opts:["Downward-sloping; shifted by demand shocks","Horizontal at $R = R_t$; shifted by Fed policy","Upward-sloping; shifted by cost shocks","Vertical at $\\tilde{Y} = 0$; shifted by productivity"],
   ans:1, exp:"The MP curve is a horizontal line at $R = R_t$ because the central bank sets the real interest rate exogenously. Raising rates shifts it up (contractionary); lowering rates shifts it down (expansionary). The IS curve is the downward-sloping one."},
  {t:13, q:"The Fed wants to stabilize output after a negative demand shock $\\bar{a}_1 = -2\\%$ with $\\bar{b} = 1$ and $\\bar{r} = 2\\%$. What should $R_1$ be?",
   opts:["$R_1 = 4\\%$","$R_1 = 2\\%$","$R_1 = 0\\%$","$R_1 = -2\\%$"],
   ans:2, exp:"Stabilization condition: $\\bar{a}_1 - \\bar{b}(R_1 - \\bar{r}) = 0 \\Rightarrow R_1 = \\bar{r} + \\bar{a}_1/\\bar{b} = 2\\% + (-2\\%)/1 = 0\\%$. The Fed must cut rates by 2 percentage points to offset the demand shock."},
  {t:13, q:"Volcker raised real interest rates in the early 1980s. What was the intended and actual short-run effect on output?",
   opts:["Intended: higher output; Actual: recession","Intended: recession to reduce inflation; Actual: recession","Intended: lower inflation with no output cost; Actual: mild slowdown","Intended: higher inflation; Actual: hyperinflation"],
   ans:1, exp:"Volcker deliberately raised $R_t$ above $\\bar{r}$ to cause a below-potential output gap ($\\tilde{Y}_t < 0$). Via the Phillips curve, $\\tilde{Y}_t < 0 \\Rightarrow \\Delta\\pi_t < 0$, reducing inflation. The actual 1981–82 recession was severe, with unemployment over 10%."},
  {t:13, q:"Which statement correctly describes the inflation-output tradeoff?",
   opts:["Lower inflation always raises output permanently","Reducing inflation requires inducing a recession (below-potential output)","The Fed can lower inflation without any output cost using the IS curve","Higher output permanently lowers inflation"],
   ans:1, exp:"Lowering inflation via tighter monetary policy raises $R_t$, pushing $\\tilde{Y}_t < 0$ (recession). The recession causes $\\Delta\\pi_t < 0$. Once inflation falls to target, $R_t$ can return to $\\bar{r}$ and output recovers. The cost is temporary output loss."},
  // T14 — Unconventional Policy
  {t:14, q:"Why does the Effective Lower Bound (ELB) on nominal interest rates exist?",
   opts:["Congress prohibits negative rates by law","Physical currency earns 0%, creating a floor on nominal rates","Central banks refuse to set rates below 2%","The Fisher equation prevents negative real rates"],
   ans:1, exp:"Banks can always switch to holding physical currency instead of reserves if IOR falls below 0%. Currency earns 0%, so it's preferred to negative-yield reserves. In practice, ELB is slightly below 0% because storing currency has costs."},
  {t:14, q:"The Fed commits publicly to keeping rates near zero through 2025. This is an example of:",
   opts:["Quantitative easing","Forward guidance","Conventional open-market operations","Fiscal stimulus"],
   ans:1, exp:"Forward guidance is communication about future interest rates. By credibly committing to low rates, the Fed lowers long-term yield expectations, shifting IS right (positive demand shock) without changing the current overnight rate."},
  {t:14, q:"How does quantitative easing (QE) enter the IS-MP model?",
   opts:["It directly lowers $\\bar{r}$ (the trend real rate)","It is a positive demand shock: $\\bar{a}_t > 0$, shifting IS right","It shifts the MP curve upward","It steepens the Phillips curve"],
   ans:1, exp:"QE lowers long-term yields, reducing borrowing costs and stimulating investment/consumption above what the current overnight rate alone would imply. This appears as a positive demand shock $\\bar{a}_t > 0$, shifting IS right — expanding output at any given $R_t$."},
  {t:14, q:"Bond prices rise due to increased demand. What happens to the yield to maturity (YTM)?",
   opts:["YTM rises proportionally","YTM falls — bond prices and yields are inversely related","YTM is unchanged; it depends only on coupon payments","YTM rises if the bond is a Treasury, falls if it is corporate"],
   ans:1, exp:"Bond prices and yields are inversely related. YTM is the discount rate that equates the bond price to the PV of future cash flows. If prices rise, you pay more for the same future cash flows, so your effective return (YTM) falls."},
  // T15 — AS-AD
  {t:15, q:"According to the simple monetary policy rule $R_t - \\bar{r} = \\bar{m}(\\pi_t - \\bar{\\pi})$, what does the central bank do when inflation exceeds its target?",
   opts:["Lower $R_t$ below $\\bar{r}$ to stimulate output","Raise $R_t$ above $\\bar{r}$ to cool inflation","Keep $R_t = \\bar{r}$ regardless of inflation","Cut the inflation target $\\bar{\\pi}$"],
   ans:1, exp:"When $\\pi_t > \\bar{\\pi}$, the rule gives $R_t - \\bar{r} = \\bar{m}(\\pi_t - \\bar{\\pi}) > 0$, so $R_t > \\bar{r}$. The central bank tightens policy above the long-run rate to dampen demand and bring inflation back to target."},
  {t:15, q:"The AD curve in the AS-AD model is downward sloping because:",
   opts:["Higher output increases inflation, which reduces consumption","Higher inflation leads the central bank to raise the real rate, which reduces output","Firms reduce production when prices fall","Lower inflation increases real wages, reducing labor demand"],
   ans:1, exp:"The AD curve comes from substituting the policy rule into IS. Higher $\\pi_t \\Rightarrow$ central bank raises $R_t$ (policy rule) $\\Rightarrow$ lower $\\tilde{Y}_t$ (IS curve). The transmission runs: inflation → monetary policy tightening → lower expenditure."},
  {t:15, q:"In the AS-AD model, a positive demand shock $\\bar{a}_1 > 0$ (with $\\bar{a}_t=0$ for $t>1$) causes which of the following in period 1?",
   opts:["AS shifts up; AD unchanged; output falls","AD shifts right; AS unchanged; output rises and inflation rises","AS shifts right; AD unchanged; output rises and inflation falls","AD shifts left; AS shifts up; stagflation"],
   ans:1, exp:"A demand shock $\\bar{a}_1>0$ enters the AD equation directly, shifting AD rightward. AS in period 1 is unchanged (it depends on $\\pi_0$, which hasn't changed). The new intersection gives higher $\\tilde{Y}_1>0$ and higher $\\pi_1>\\bar{\\pi}$."},
  {t:15, q:"In steady state of the AS-AD model (no shocks), what are the equilibrium values?",
   opts:["$\\tilde{Y}^*=\\bar{a}$, $\\pi^*=\\bar{\\nu}$","$\\tilde{Y}^*=0$, $\\pi^*=\\bar{\\pi}$","$\\tilde{Y}^*=\\bar{r}$, $\\pi^*=\\bar{\\pi}$","$\\tilde{Y}^*=0$, $\\pi^*=0$"],
   ans:1, exp:"From AS with $\\pi_t=\\pi_{t-1}$ and no shocks: $\\bar{\\nu}\\tilde{Y}^*=0 \\Rightarrow \\tilde{Y}^*=0$. From AD with $\\tilde{Y}^*=0$ and $\\bar{a}=0$: $\\pi^*=\\bar{\\pi}$. The economy returns to potential output with inflation at the central bank's target."},
  {t:15, q:"After a one-period inflation shock ($\\bar{o}_1>0$, then zero), why does inflation remain elevated for multiple periods?",
   opts:["Because the central bank does not respond to the shock","Because adaptive expectations mean $\\pi_t^e = \\pi_{t-1}$, embedding last period's high inflation into the next period's AS","Because the AD curve shifts right permanently","Because the real interest rate cannot adjust"],
   ans:1, exp:"With adaptive expectations, $\\pi_t^e = \\pi_{t-1}$. After the shock raises $\\pi_1$, this becomes the new expected inflation, shifting AS up again in period 2. Each period the AS shifts down only gradually as $\\pi_{t-1}$ falls. This 'sticky inflation' is why shocks have persistent effects."},
];

// ===== APP STATE =====
let currentMode = 'overview';
let currentTopic = 'all';
let fcIndex = 0;
let fcFiltered = [];
let quizScore = 0;
let quizAnswered = 0;

// ===== HAMBURGER NAV =====
function openNav() {
  document.getElementById('nav-drawer').classList.add('open');
  document.getElementById('nav-overlay').classList.add('open');
}
function closeNav() {
  document.getElementById('nav-drawer').classList.remove('open');
  document.getElementById('nav-overlay').classList.remove('open');
}
function navTo(mode) {
  closeNav();
  setMode(mode);
}
function syncDrawer(mode) {
  document.querySelectorAll('.nav-drawer-btn').forEach(b => b.classList.remove('active'));
  const el = document.getElementById('nd-' + mode);
  if (el) el.classList.add('active');
}

// ===== MODE SWITCHING =====
function setMode(mode) {
  currentMode = mode;
  syncDrawer(mode);
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.mode-btn').forEach(b => {
    if (b.getAttribute('onclick') === `setMode('${mode}')`) b.classList.add('active');
  });
  document.getElementById('overview-view').style.display = 'none';
  document.getElementById('notes-view').style.display = 'none';
  document.getElementById('proofs-view').style.display = 'none';
  document.getElementById('flashcard-view').style.display = 'none';
  document.getElementById('quiz-view').style.display = 'none';
  document.getElementById('homework-view').style.display = 'none';
  document.getElementById('exams-view').style.display = 'none';
  document.getElementById('topic-strip').style.display = 'none';
  if (mode === 'overview') {
    document.getElementById('overview-view').style.display = 'block';
  } else if (mode === 'notes') {
    document.getElementById('notes-view').style.display = 'block';
    document.getElementById('topic-strip').style.display = 'flex';
    showNotesForTopic(currentTopic === 'all' ? 1 : currentTopic);
  } else if (mode === 'proofs') {
    document.getElementById('proofs-view').style.display = 'block';
    setTimeout(() => {
      if (window.renderMathInElement) renderMathInElement(document.getElementById('proofs-view'), {delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}],throwOnError:false,strict:false});
    }, 80);
  } else if (mode === 'flashcards') {
    document.getElementById('flashcard-view').style.display = 'block';
    document.getElementById('topic-strip').style.display = 'flex';
    initFlashcards();
  } else if (mode === 'quiz') {
    document.getElementById('quiz-view').style.display = 'block';
    document.getElementById('topic-strip').style.display = 'flex';
    renderQuiz();
  } else if (mode === 'homework') {
    document.getElementById('homework-view').style.display = 'block';
    setTimeout(() => {
      if (window.renderMathInElement) renderMathInElement(document.getElementById('homework-view'), {delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}],throwOnError:false,strict:false});
    }, 80);
  } else if (mode === 'exams') {
    document.getElementById('exams-view').style.display = 'block';
    setTimeout(() => {
      if (window.renderMathInElement) renderMathInElement(document.getElementById('exams-view'), {delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}],throwOnError:false,strict:false});
    }, 80);
  }
}

function setTopic(t) {
  currentTopic = t;
  document.querySelectorAll('.topic-chip').forEach(c => c.classList.remove('active'));
  event.target.classList.add('active');
  if (currentMode === 'notes') showNotesForTopic(t === 'all' ? 1 : t);
  if (currentMode === 'flashcards') initFlashcards();
  if (currentMode === 'quiz') renderQuiz();
}

// ===== HOMEWORK TOGGLE =====
function toggleHW(header) {
  const answer = header.nextElementSibling;
  const chevron = header.querySelector('.hw-chevron');
  const isOpen = answer.classList.contains('show');
  answer.classList.toggle('show', !isOpen);
  chevron.classList.toggle('open', !isOpen);
}

// ===== EXAM TOGGLE =====
function toggleExam(header) {
  const answer = header.nextElementSibling;
  const chevron = header.querySelector('.exam-chevron');
  const isOpen = answer.classList.contains('show');
  answer.classList.toggle('show', !isOpen);
  chevron.classList.toggle('open', !isOpen);
}

function switchExam(id, btn) {
  document.querySelectorAll('.exam-pane').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.exam-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('exam-' + id).classList.add('active');
  btn.classList.add('active');
  setTimeout(() => {
    if (window.renderMathInElement) renderMathInElement(document.getElementById('exam-' + id), {
      delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}],throwOnError:false
    });
  }, 50);
}

const PS_DESCRIPTIONS = {
  1: "<strong>PS 1 · Topics 1–3:</strong> GDP measurement &amp; transactions (C, I, G, NX), PPP &amp; real vs. nominal GDP, chain-weighting &amp; the Fisher Index, inflation, CPI vs. GDP deflator, growth rates &amp; the Rule of 70.",
  2: "<strong>PS 2 · Topics 5–7:</strong> Production functions &amp; TFP, Cobb-Douglas &amp; income shares, development accounting, the Solow model (steady state, transition dynamics, comparative statics), Solow with productivity growth &amp; the balanced growth path.",
  3: "<strong>PS 3 · Topics 8–11:</strong> Natural rate of unemployment &amp; Okun's Law, labor market flows (bathtub model), money &amp; the federal funds market, IOR &amp; the ample-reserves framework, Fisher equation, the IS curve (derivation, shifts, multiplier, open economy).",
  4: "<strong>PS 4 · Topics 12–14:</strong> Phillips curve &amp; cost shocks, IS-MP model, monetary stabilization policy, Effective Lower Bound &amp; forward guidance, AS-AD framework (Taylor rule, demand/supply shocks, adaptive expectations, long-run adjustment)."
};

function switchPS(n, btn) {
  document.querySelectorAll('.hw-ps-pane').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.hw-ps-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('hw-ps' + n).classList.add('active');
  btn.classList.add('active');
  const desc = document.getElementById('hw-ps-desc-text');
  if (desc) desc.innerHTML = PS_DESCRIPTIONS[n] || '';
  if (window.renderMathInElement) {
    setTimeout(() => renderMathInElement(document.getElementById('hw-ps' + n), {
      delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}],throwOnError:false,strict:false
    }), 50);
  }
}

function jumpToNotes(t) {
  currentTopic = t;
  currentMode = 'notes';
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.mode-btn').forEach(b => {
    if (b.getAttribute('onclick') === `setMode('notes')`) b.classList.add('active');
  });
  document.getElementById('overview-view').style.display = 'none';
  document.getElementById('proofs-view').style.display = 'none';
  document.getElementById('notes-view').style.display = 'block';
  document.getElementById('topic-strip').style.display = 'flex';
  document.querySelectorAll('.topic-chip').forEach(c => {
    c.classList.remove('active');
    if (c.getAttribute('onclick') === `setTopic(${t})`) c.classList.add('active');
  });
  showNotesForTopic(t);
}

function showNotesForTopic(t) {
  document.querySelectorAll('.notes-container').forEach(n => n.classList.remove('active'));
  const el = document.getElementById('notes-' + t);
  if (el) {
    el.classList.add('active');
    setTimeout(() => {
      if (window.renderMathInElement) renderMathInElement(el, {delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}],throwOnError:false,strict:false});
    }, 50);
    // Init chart for this topic
    const chartInits = {1:initGDP,3:initGrowth,5:initProd,6:initSolow,8:initBathtub,10:initMoney,11:initIS,12:initPC,13:initISMP};
    if (chartInits[t]) setTimeout(chartInits[t], 80);
  }
}

// ===== FLASHCARDS =====
function initFlashcards() {
  fcFiltered = currentTopic === 'all' ? [...flashcards] : flashcards.filter(c => c.t === currentTopic);
  fcIndex = 0;
  showCard();
}

function showCard() {
  if (!fcFiltered.length) return;
  const card = fcFiltered[fcIndex];
  const inner = document.getElementById('fc-inner');
  inner.classList.remove('flipped');
  document.getElementById('fc-q').innerHTML = card.q;
  document.getElementById('fc-a').innerHTML = card.a;
  document.getElementById('fc-progress').textContent = `Card ${fcIndex+1} of ${fcFiltered.length} · Topic ${card.t}`;
  setTimeout(() => {
    if (window.renderMathInElement) {
      renderMathInElement(document.getElementById('fc-inner'), {delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}],throwOnError:false,strict:false});
    }
  }, 50);
}

function flipCard() { document.getElementById('fc-inner').classList.toggle('flipped'); }
function nextCard() { fcIndex = (fcIndex+1) % fcFiltered.length; showCard(); }
function prevCard() { fcIndex = (fcIndex-1+fcFiltered.length) % fcFiltered.length; showCard(); }

// ===== QUIZ =====
function renderQuiz() {
  const filtered = currentTopic === 'all' ? [...quizQuestions] : quizQuestions.filter(q => q.t === currentTopic);
  window._quizFiltered = filtered;
  quizScore = 0; quizAnswered = 0;
  document.getElementById('quiz-score').textContent = 'Score: 0 / 0';
  const container = document.getElementById('quiz-container');
  container.innerHTML = filtered.map((q,i) => `
    <div class="quiz-q" id="qq-${i}">
      <div class="quiz-q-num">Q${i+1} · Topic ${q.t}</div>
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-opts">
        ${q.opts.map((o,j) => `<button class="quiz-opt" data-qi="${i}" data-j="${j}">${String.fromCharCode(65+j)}. ${o}</button>`).join('')}
      </div>
      <div class="quiz-exp" id="qe-${i}"></div>
    </div>
  `).join('');
  container.addEventListener('click', function handler(e) {
    const btn = e.target.closest('.quiz-opt');
    if (!btn) return;
    const qi = parseInt(btn.dataset.qi);
    const chosen = parseInt(btn.dataset.j);
    const q = window._quizFiltered[qi];
    answerQuiz(qi, chosen, q.ans, q.exp);
  });
  setTimeout(() => {
    if (window.renderMathInElement) renderMathInElement(container, {delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}],throwOnError:false,strict:false});
  }, 80);
}

function answerQuiz(qi, chosen, correct, exp) {
  const qEl = document.getElementById('qq-'+qi);
  const btns = qEl.querySelectorAll('.quiz-opt');
  if (btns[0].disabled) return;
  btns.forEach((b,j) => {
    b.disabled = true;
    if (j === correct) b.classList.add('correct');
    if (j === chosen && chosen !== correct) b.classList.add('wrong');
  });
  const expEl = document.getElementById('qe-'+qi);
  expEl.innerHTML = exp;
  expEl.classList.add('show');
  quizAnswered++;
  if (chosen === correct) quizScore++;
  document.getElementById('quiz-score').textContent = `Score: ${quizScore} / ${quizAnswered}`;
  setTimeout(() => {
    if (window.renderMathInElement) renderMathInElement(expEl, {delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}],throwOnError:false,strict:false});
  }, 50);
}

// ===== CHART UTILITIES =====
const BG = '#0c111b';
const SURFACE = '#131929';
const ACCENT = '#38bdf8';
const ACCENT2 = '#f59e0b';
const ACCENT3 = '#fb7185';
const ACCENT4 = '#34d399';
const MUTED = '#5e738a';
const BORDER = '#1e2d42';

function makeRange(start, end, n) {
  const step = (end - start) / (n-1);
  return Array.from({length:n}, (_,i) => start + i*step);
}

// ===== T1: GDP CHART =====
let gdpChart;
function initGDP() {
  const ctx = document.getElementById('chart-gdp');
  if (!ctx || gdpChart) return;
  gdpChart = new Chart(ctx, {
    type:'line',
    data:{datasets:[
      {label:'Nominal GDP',data:[],borderColor:ACCENT2,borderWidth:2.5,pointRadius:0,tension:0.3},
      {label:'Real GDP',data:[],borderColor:ACCENT4,borderWidth:2.5,pointRadius:0,tension:0.3},
      {label:'Price Level (base=1)',data:[],borderColor:ACCENT3,borderWidth:1.5,borderDash:[5,3],pointRadius:0,tension:0.3},
    ]},
    options:{responsive:true,maintainAspectRatio:false,animation:false,
      plugins:{legend:{labels:{color:MUTED,font:{size:11}}}},
      scales:{
        x:{type:'linear',title:{display:true,text:'Years',color:MUTED},grid:{color:BORDER},ticks:{color:MUTED}},
        y:{title:{display:true,text:'Index (base year = 1)',color:MUTED},grid:{color:BORDER},ticks:{color:MUTED}}
      }}
  });
  updateGDP();
}
function updateGDP() {
  const inf = parseFloat(document.getElementById('gdp-inf').value)/100;
  const gr = parseFloat(document.getElementById('gdp-gr').value)/100;
  document.getElementById('gdp-inf-val').textContent = (inf*100).toFixed(1)+'%';
  document.getElementById('gdp-gr-val').textContent = (gr*100).toFixed(1)+'%';
  const xs = makeRange(0,20,21);
  const nom = xs.map(t=>({x:t,y:Math.pow(1+inf+gr,t)}));
  const real = xs.map(t=>({x:t,y:Math.pow(1+gr,t)}));
  const price = xs.map(t=>({x:t,y:Math.pow(1+inf,t)}));
  document.getElementById('gdp-nom-20').textContent = Math.pow(1+inf+gr,20).toFixed(2)+'x';
  document.getElementById('gdp-real-20').textContent = Math.pow(1+gr,20).toFixed(2)+'x';
  document.getElementById('gdp-price-20').textContent = Math.pow(1+inf,20).toFixed(2)+'x';
  if(gdpChart){gdpChart.data.datasets[0].data=nom;gdpChart.data.datasets[1].data=real;gdpChart.data.datasets[2].data=price;gdpChart.update();}
}

// ===== T3: GROWTH CHART =====
let growthChart;
function initGrowth() {
  const ctx = document.getElementById('chart-growth');
  if (!ctx || growthChart) return;
  growthChart = new Chart(ctx,{
    type:'line',
    data:{datasets:[
      {label:'Country A',data:[],borderColor:ACCENT,borderWidth:2.5,pointRadius:0,tension:0.3},
      {label:'Country B',data:[],borderColor:ACCENT2,borderWidth:2.5,pointRadius:0,borderDash:[5,3],tension:0.3},
    ]},
    options:{responsive:true,maintainAspectRatio:false,animation:false,
      plugins:{legend:{labels:{color:MUTED,font:{size:11}}}},
      scales:{
        x:{type:'linear',title:{display:true,text:'Years',color:MUTED},grid:{color:BORDER},ticks:{color:MUTED}},
        y:{type:'logarithmic',title:{display:true,text:'GDP (log scale)',color:MUTED},grid:{color:BORDER},ticks:{color:MUTED}}
      }}
  });
  updateGrowth();
}
function updateGrowth() {
  const ga = parseFloat(document.getElementById('gr-a').value)/100;
  const gb = parseFloat(document.getElementById('gr-b').value)/100;
  const T = parseInt(document.getElementById('gr-t').value);
  document.getElementById('gr-a-val').textContent=(ga*100).toFixed(2)+'%';
  document.getElementById('gr-b-val').textContent=(gb*100).toFixed(2)+'%';
  document.getElementById('gr-t-val').textContent=T;
  const xs = makeRange(0,T,T+1);
  const a = xs.map(t=>({x:t,y:100*Math.pow(1+ga,t)}));
  const b = xs.map(t=>({x:t,y:100*Math.pow(1+gb,t)}));
  document.getElementById('gr-a-double').textContent=(70/(ga*100)).toFixed(1);
  document.getElementById('gr-b-double').textContent=(70/(gb*100)).toFixed(1);
  document.getElementById('gr-ratio').textContent=(Math.pow(1+ga,T)/Math.pow(1+gb,T)).toFixed(1)+'x';
  if(growthChart){growthChart.data.datasets[0].data=a;growthChart.data.datasets[1].data=b;growthChart.update();}
}

// ===== T5: PRODUCTION CHART =====
let prodChart;
function initProd() {
  const ctx = document.getElementById('chart-prod');
  if (!ctx || prodChart) return;
  prodChart = new Chart(ctx,{
    type:'line',
    data:{datasets:[
      {label:'y = Ak^(1/3)',data:[],borderColor:ACCENT,borderWidth:2.5,pointRadius:0,tension:0.3,fill:'origin',backgroundColor:'rgba(56,189,248,0.06)'},
      {label:'Current k',data:[],borderColor:ACCENT3,borderWidth:1.5,borderDash:[4,4],pointRadius:0},
    ]},
    options:{responsive:true,maintainAspectRatio:false,animation:false,
      plugins:{legend:{labels:{color:MUTED,font:{size:11}}}},
      scales:{
        x:{type:'linear',title:{display:true,text:'Capital per person k',color:MUTED},grid:{color:BORDER},ticks:{color:MUTED}},
        y:{title:{display:true,text:'Output per person y',color:MUTED},grid:{color:BORDER},ticks:{color:MUTED},min:0}
      }}
  });
  updateProd();
}
function updateProd() {
  const A = parseFloat(document.getElementById('prod-a').value);
  const k = parseFloat(document.getElementById('prod-k').value);
  document.getElementById('prod-a-val').textContent=A.toFixed(1);
  document.getElementById('prod-k-val').textContent=k.toFixed(0);
  const xs = makeRange(1,120,80);
  const curve = xs.map(x=>({x,y:A*Math.pow(x,1/3)}));
  const y = A*Math.pow(k,1/3);
  const vline = [{x:k,y:0},{x:k,y:y}];
  document.getElementById('prod-y').textContent=y.toFixed(2);
  document.getElementById('prod-mpk').textContent=((1/3)*y/k).toFixed(3);
  document.getElementById('prod-tfp').textContent=(y/Math.pow(k,1/3)).toFixed(2);
  if(prodChart){prodChart.data.datasets[0].data=curve;prodChart.data.datasets[1].data=vline;prodChart.update();}
}

// ===== T6: SOLOW CHART =====
let solowChart;
function initSolow() {
  const ctx = document.getElementById('chart-solow');
  if (!ctx || solowChart) return;
  solowChart = new Chart(ctx,{
    type:'line',
    data:{datasets:[
      {label:'Investment $s\\bar{A}k^{1/3}$',data:[],borderColor:ACCENT4,borderWidth:2.5,pointRadius:0,tension:0.3},
      {label:'Depreciation $\\bar{d}k$',data:[],borderColor:ACCENT3,borderWidth:2,borderDash:[6,3],pointRadius:0,tension:0.3},
      {label:'$k^*$ (steady state)',data:[],borderColor:ACCENT2,borderWidth:1.5,borderDash:[3,3],pointRadius:0},
    ]},
    options:{responsive:true,maintainAspectRatio:false,animation:false,
      plugins:{legend:{labels:{color:MUTED,font:{size:11}}}},
      scales:{
        x:{type:'linear',title:{display:true,text:'Capital per person k',color:MUTED},grid:{color:BORDER},ticks:{color:MUTED}},
        y:{title:{display:true,text:'Per-capita flow',color:MUTED},grid:{color:BORDER},ticks:{color:MUTED},min:0}
      }}
  });
  updateSolow();
}
function updateSolow() {
  const s = parseFloat(document.getElementById('sl-s').value);
  const d = parseFloat(document.getElementById('sl-d').value);
  const A = parseFloat(document.getElementById('sl-a').value);
  document.getElementById('sl-s-val').textContent=s.toFixed(2);
  document.getElementById('sl-d-val').textContent=d.toFixed(2);
  document.getElementById('sl-a-val').textContent=A.toFixed(2);
  const kstar = Math.pow(s*A/d, 1.5);
  const ystar = A * Math.pow(kstar,1/3);
  document.getElementById('sl-kstar').textContent=kstar.toFixed(2);
  document.getElementById('sl-ystar').textContent=ystar.toFixed(2);
  const kmax = kstar*2.2;
  const xs = makeRange(0.5,kmax,80);
  const inv = xs.map(x=>({x,y:s*A*Math.pow(x,1/3)}));
  const dep = xs.map(x=>({x,y:d*x}));
  const vline = [{x:kstar,y:0},{x:kstar,y:d*kstar}];
  if(solowChart){solowChart.data.datasets[0].data=inv;solowChart.data.datasets[1].data=dep;solowChart.data.datasets[2].data=vline;solowChart.update();}
}

// ===== T8: BATHTUB CHART =====
let bathtubChart;
function initBathtub() {
  const ctx = document.getElementById('chart-bathtub');
  if (!ctx || bathtubChart) return;
  bathtubChart = new Chart(ctx,{
    type:'line',
    data:{datasets:[
      {label:'Unemployment rate',data:[],borderColor:ACCENT,borderWidth:2.5,pointRadius:0,tension:0.3},
      {label:'Natural rate u*',data:[],borderColor:ACCENT2,borderWidth:1.5,borderDash:[5,3],pointRadius:0},
    ]},
    options:{responsive:true,maintainAspectRatio:false,animation:false,
      plugins:{legend:{labels:{color:MUTED,font:{size:11}}}},
      scales:{
        x:{type:'linear',title:{display:true,text:'Periods',color:MUTED},grid:{color:BORDER},ticks:{color:MUTED}},
        y:{title:{display:true,text:'Unemployment rate (%)',color:MUTED},grid:{color:BORDER},ticks:{color:MUTED}}
      }}
  });
  updateBathtub();
}
function updateBathtub() {
  const ls = parseFloat(document.getElementById('bt-sep').value);
  const lf = parseFloat(document.getElementById('bt-find').value);
  const u0 = parseFloat(document.getElementById('bt-u0').value)/100;
  document.getElementById('bt-sep-val').textContent=ls.toFixed(3);
  document.getElementById('bt-find-val').textContent=lf.toFixed(2);
  document.getElementById('bt-u0-val').textContent=(u0*100).toFixed(0)+'%';
  const ustar = ls/(ls+lf);
  document.getElementById('bt-ustar').textContent=(ustar*100).toFixed(1)+'%';
  let u = u0;
  const path = [{x:0,y:u*100}];
  for(let t=1;t<=40;t++){
    u = u + ls*(1-u) - lf*u;
    u = Math.max(0,Math.min(1,u));
    path.push({x:t,y:u*100});
  }
  const nat = path.map(p=>({x:p.x,y:ustar*100}));
  if(bathtubChart){bathtubChart.data.datasets[0].data=path;bathtubChart.data.datasets[1].data=nat;bathtubChart.update();}
}

// ===== T10: MONEY CHART =====
let moneyChart;
function initMoney() {
  const ctx = document.getElementById('chart-money');
  if (!ctx || moneyChart) return;
  moneyChart = new Chart(ctx,{
    type:'line',
    data:{datasets:[
      {label:'Demand (M^D)',data:[],borderColor:ACCENT,borderWidth:2.5,pointRadius:0,tension:0.3},
      {label:'Supply (M^S)',data:[],borderColor:ACCENT4,borderWidth:2,borderDash:[5,3],pointRadius:0},
      {label:'Equilibrium',data:[],borderColor:ACCENT2,borderWidth:0,pointRadius:8,pointBackgroundColor:ACCENT2,showLine:false},
    ]},
    options:{responsive:true,maintainAspectRatio:false,animation:false,
      plugins:{legend:{labels:{color:MUTED,font:{size:11}}}},
      scales:{
        x:{type:'linear',title:{display:true,text:'Monetary base (reserves)',color:MUTED},grid:{color:BORDER},ticks:{color:MUTED},min:0,max:120},
        y:{title:{display:true,text:'Federal funds rate (%)',color:MUTED},grid:{color:BORDER},ticks:{color:MUTED},min:0,max:9}
      }}
  });
  updateMoney();
}
function updateMoney() {
  const ms = parseFloat(document.getElementById('mn-ms').value);
  const ior = parseFloat(document.getElementById('mn-ior').value);
  const dr = parseFloat(document.getElementById('mn-dr').value);
  document.getElementById('mn-ms-val').textContent=ms.toFixed(0);
  document.getElementById('mn-ior-val').textContent=ior.toFixed(2)+'%';
  document.getElementById('mn-dr-val').textContent=dr.toFixed(2)+'%';
  // Demand: flat at IOR for high M, downward sloping, caps at discount rate
  const demand = [];
  for(let m=0;m<=120;m+=2){
    let rate;
    if(m >= 70) rate = ior; // ample - flat at IOR
    else rate = Math.min(dr, ior + (70-m)*0.05); // scarce - slopes up
    demand.push({x:m,y:Math.min(dr,rate)});
  }
  const supply = [{x:ms,y:0},{x:ms,y:9}];
  // Find equilibrium
  let eqRate;
  if(ms >= 70) { eqRate = ior; }
  else { eqRate = Math.min(dr, ior + (70-ms)*0.05); }
  const eq = [{x:ms, y:eqRate}];
  document.getElementById('mn-rate').textContent=eqRate.toFixed(2)+'%';
  document.getElementById('mn-regime').textContent=ms>=70?'Ample reserves':'Scarce reserves';
  if(moneyChart){moneyChart.data.datasets[0].data=demand;moneyChart.data.datasets[1].data=supply;moneyChart.data.datasets[2].data=eq;moneyChart.update();}
}

// ===== T11: IS CURVE CHART =====
let isChart;
function initIS() {
  const ctx = document.getElementById('chart-is');
  if (!ctx || isChart) return;
  isChart = new Chart(ctx, {
    type: 'line',
    data: { datasets: [
      {label: 'IS Curve', data: [], borderColor: '#22d3ee', borderWidth: 2.5, pointRadius: 0, tension: 0.1},
      {label: 'Trend rate r̄', data: [], borderColor: ACCENT2, borderWidth: 1.5, borderDash: [5,3], pointRadius: 0},
      {label: 'Equilibrium', data: [], borderColor: ACCENT2, borderWidth: 0, pointRadius: 8, pointBackgroundColor: ACCENT2, showLine: false},
    ]},
    options: { responsive: true, maintainAspectRatio: false, animation: false,
      plugins: { legend: { labels: { color: MUTED, font: { size: 11 } } } },
      scales: {
        x: { type: 'linear', title: { display: true, text: 'Short-run output Ỹ (%)', color: MUTED }, grid: { color: BORDER }, ticks: { color: MUTED },
             min: -10, max: 10 },
        y: { title: { display: true, text: 'Real interest rate R (%)', color: MUTED }, grid: { color: BORDER }, ticks: { color: MUTED },
             min: -2, max: 10 }
      }}
  });
  updateIS();
}
function updateIS() {
  const a = parseFloat(document.getElementById('is-a').value);
  const b = parseFloat(document.getElementById('is-b').value);
  const r = parseFloat(document.getElementById('is-r').value);
  document.getElementById('is-a-val').textContent = a.toFixed(2);
  document.getElementById('is-b-val').textContent = b.toFixed(2);
  document.getElementById('is-r-val').textContent = r.toFixed(2) + '%';
  // IS: Ỹ = a - b*(R - r)  →  R = r + (a - Ỹ)/b
  const ys = [];
  for (let ytilde = -0.12; ytilde <= 0.12; ytilde += 0.002) {
    const R = r + (a - ytilde) / b;
    if (R >= -2 && R <= 10) ys.push({ x: ytilde * 100, y: R });
  }
  const rLine = [{ x: -10, y: r }, { x: 10, y: r }];
  const eqY = a * 100;
  const eq = [{ x: eqY, y: r }];
  document.getElementById('is-eq').textContent = eqY.toFixed(2) + '%';
  document.getElementById('is-slope').textContent = (-1/b).toFixed(2);
  if (isChart) { isChart.data.datasets[0].data = ys; isChart.data.datasets[1].data = rLine; isChart.data.datasets[2].data = eq; isChart.update(); }
}

// ===== T12: PHILLIPS CURVE CHART =====
let pcChart;
function initPC() {
  const ctx = document.getElementById('chart-pc');
  if (!ctx || pcChart) return;
  pcChart = new Chart(ctx, {
    type: 'line',
    data: { datasets: [
      {label: 'Phillips Curve PC', data: [], borderColor: '#fb923c', borderWidth: 2.5, pointRadius: 0, tension: 0.1},
      {label: 'Current position', data: [], borderColor: '#fb923c', borderWidth: 0, pointRadius: 9, pointBackgroundColor: '#fb923c', showLine: false},
      {label: 'No-shock baseline', data: [], borderColor: MUTED, borderWidth: 1.2, borderDash: [4,3], pointRadius: 0},
    ]},
    options: { responsive: true, maintainAspectRatio: false, animation: false,
      plugins: { legend: { labels: { color: MUTED, font: { size: 11 } } } },
      scales: {
        x: { type: 'linear', title: { display: true, text: 'Output gap Ỹ (%)', color: MUTED }, grid: { color: BORDER }, ticks: { color: MUTED }, min: -8, max: 8 },
        y: { title: { display: true, text: 'Change in inflation Δπ (pp)', color: MUTED }, grid: { color: BORDER }, ticks: { color: MUTED }, min: -8, max: 8 }
      }}
  });
  updatePC();
}
function updatePC() {
  const nu = parseFloat(document.getElementById('pc-nu').value);
  const yGap = parseFloat(document.getElementById('pc-y').value);
  const shock = parseFloat(document.getElementById('pc-o').value);
  document.getElementById('pc-nu-val').textContent = nu.toFixed(2);
  document.getElementById('pc-y-val').textContent = yGap.toFixed(1) + '%';
  document.getElementById('pc-o-val').textContent = shock.toFixed(2);
  // PC line: Δπ = ν * Y + shock
  const ys = [];
  for (let y = -8; y <= 8; y += 0.2) {
    ys.push({ x: y, y: nu * y + shock });
  }
  // No-shock baseline (shock=0)
  const base = [{ x: -8, y: nu * -8 }, { x: 8, y: nu * 8 }];
  const dpi = nu * yGap + shock;
  const dot = [{ x: yGap, y: dpi }];
  document.getElementById('pc-dpi').textContent = dpi.toFixed(2) + ' pp';
  document.getElementById('pc-intercept').textContent = shock.toFixed(2) + ' pp';
  const state = yGap > 0.1 ? 'Boom (↑ inflation)' : yGap < -0.1 ? 'Recession (↓ inflation)' : 'At potential';
  document.getElementById('pc-state').textContent = state;
  if (pcChart) { pcChart.data.datasets[0].data = ys; pcChart.data.datasets[1].data = dot; pcChart.data.datasets[2].data = base; pcChart.update(); }
}

// ===== IS-MP CHART =====
let ismpChart = null;
const RBAR = 2; // trend real rate %

function initISMP() {
  const ctx = document.getElementById('chart-ismp');
  if (!ctx) return;
  if (ismpChart) { ismpChart.destroy(); ismpChart = null; }
  const ys = buildISLine(0, 1);
  ismpChart = new Chart(ctx, {
    data: {
      datasets: [
        { type:'line', label:'IS curve', data: ys.pts, borderColor:'#fb923c', borderWidth:2.5, pointRadius:0, tension:0 },
        { type:'line', label:'MP curve', data:[{x:-6,y:RBAR},{x:6,y:RBAR}], borderColor:'#38bdf8', borderWidth:2.5, pointRadius:0, tension:0, borderDash:[] },
        { type:'scatter', label:'Equilibrium', data:[{x:0,y:RBAR}], pointRadius:7, pointBackgroundColor:'#fff', pointBorderColor:'#34d399', pointBorderWidth:2.5 },
        { type:'line', label:'LR potential', data:[{x:0,y:-4},{x:0,y:9}], borderColor:'rgba(255,255,255,0.2)', borderWidth:1.5, pointRadius:0, borderDash:[4,4], tension:0 }
      ]
    },
    options: {
      animation:false, responsive:true, maintainAspectRatio:true,
      scales: {
        x: { type:'linear', min:-6, max:6, title:{display:true,text:'Output gap, Ỹ (%)',color:'#94a3b8',font:{size:11}}, grid:{color:'rgba(255,255,255,0.06)'}, ticks:{color:'#64748b',font:{size:10},callback:v=>v+'%'} },
        y: { min:-4, max:9, title:{display:true,text:'Real interest rate, R (%)',color:'#94a3b8',font:{size:11}}, grid:{color:'rgba(255,255,255,0.06)'}, ticks:{color:'#64748b',font:{size:10},callback:v=>v+'%'} }
      },
      plugins: { legend:{labels:{color:'#94a3b8',font:{size:10},boxWidth:16}}, tooltip:{callbacks:{label:p=>`${p.dataset.label}: R=${p.parsed.y.toFixed(1)}%, Ỹ=${p.parsed.x.toFixed(1)}%`}} }
    }
  });
  updateISMP();
}

function buildISLine(a, b) {
  const pts = [];
  for (let R = -4; R <= 9; R += 0.25) {
    const Y = a - b * (R - RBAR);
    pts.push({x: +Y.toFixed(3), y: +R.toFixed(3)});
  }
  return { pts };
}

function updateISMP() {
  if (!ismpChart) return;
  const R  = +document.getElementById('ismp-R').value;
  const a  = +document.getElementById('ismp-a').value;
  const b  = +document.getElementById('ismp-b').value;
  document.getElementById('ismp-R-val').textContent = R.toFixed(1)+'%';
  document.getElementById('ismp-a-val').textContent = a.toFixed(1);
  document.getElementById('ismp-b-val').textContent = b.toFixed(2);
  document.getElementById('ismp-rbar').textContent  = RBAR.toFixed(1)+'%';
  const Yt = a - b * (R - RBAR);
  document.getElementById('ismp-Ytilde').textContent = Yt.toFixed(2)+'%';
  const lbl = document.getElementById('ismp-state-label');
  if (Math.abs(Yt) < 0.05) { lbl.textContent='At potential'; lbl.style.color='#34d399'; }
  else if (Yt > 0)           { lbl.textContent='Boom (above potential)'; lbl.style.color='#fb923c'; }
  else                       { lbl.textContent='Recession (below potential)'; lbl.style.color='#f87171'; }
  const { pts } = buildISLine(a, b);
  ismpChart.data.datasets[0].data = pts;
  ismpChart.data.datasets[1].data = [{x:-6,y:R},{x:6,y:R}];
  ismpChart.data.datasets[1].borderColor = R > RBAR ? '#f87171' : R < RBAR ? '#34d399' : '#38bdf8';
  ismpChart.data.datasets[2].data = [{x:Yt, y:R}];
  ismpChart.update('none');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {});

