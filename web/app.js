const defaultGuides = [
  {id:"g1",title:"إعادة ضبط ذراع DualSense",category:"controller",tag:"الأذرع",emoji:"⌁",summary:"جرّب إعادة الضبط إذا كانت يد PS5 لا تتصل أو لا تستجيب.",duration:"3 دقائق",steps:["أوقف تشغيل جهاز PS5 بالكامل.","افصل الذراع عن كابل USB.","استخدم دبوسًا رفيعًا للضغط على زر إعادة الضبط الصغير خلف الذراع لعدة ثوانٍ.","وصّل الذراع بالجهاز بكابل USB يدعم نقل البيانات، ثم اضغط زر PS."],warning:"لا تستخدم أدوات حادة بقوة. إذا استمرت المشكلة، جرّب كابلًا آخر أو اطلب فحصًا فنيًا."},
  {id:"g2",title:"حل مشكلة عدم ظهور الصورة",category:"console",tag:"الأجهزة",emoji:"▣",summary:"خطوات أولية عند ظهور رسالة No Signal أو شاشة سوداء.",duration:"4 دقائق",steps:["تأكد أن التلفزيون على مدخل HDMI الصحيح.","أطفئ الجهاز والتلفزيون وافصل الكهرباء لمدة دقيقة.","أعد تركيب كابل HDMI بإحكام من الطرفين.","جرّب منفذ HDMI آخر في التلفزيون أو كابلًا سليمًا متوافقًا."],warning:"لا تحرّك منفذ HDMI بعنف ولا تحاول إصلاحه بنفسك. إذا كان المنفذ مرتخيًا أو تالفًا، يحتاج فحصًا فنيًا."},
  {id:"g3",title:"تقليل سخونة جهاز PlayStation",category:"console",tag:"الأجهزة",emoji:"♨",summary:"نصائح للتهوية وتقليل ارتفاع الحرارة أثناء اللعب.",duration:"3 دقائق",steps:["ضع الجهاز على سطح ثابت ومفتوح.","اترك مساحة حول فتحات التهوية ولا تضعه داخل خزانة مغلقة.","أبعد الجهاز عن أشعة الشمس ومصادر الحرارة.","أوقف اللعب إذا ظهرت رسالة حرارة مرتفعة واترك الجهاز يبرد."],warning:"لا تفتح مزوّد الطاقة ولا تستخدم سوائل أو هواءً مضغوطًا بطريقة قد تدفع الأتربة إلى الداخل. التنظيف الداخلي يفضّل أن يقوم به فني."},
  {id:"g4",title:"تحرير مساحة التخزين",category:"games",tag:"الألعاب",emoji:"▤",summary:"إدارة الألعاب واللقطات لتوفير مساحة للتثبيت والتحديث.",duration:"5 دقائق",steps:["افتح Settings من القائمة الرئيسية.","ادخل إلى Storage لمعرفة ما يستهلك المساحة.","احذف الألعاب التي لا تستخدمها من قائمة الألعاب والتطبيقات، بعد التأكد أنك لا تحتاج بياناتها المحلية.","راجع لقطات الشاشة ومقاطع الفيديو وانقل ما تريد الاحتفاظ به إلى وحدة تخزين مناسبة."],warning:"تأكد من مزامنة أو نسخ بيانات الحفظ المهمة قبل حذف أي محتوى. لا تحذف ملفات نظام أو بيانات لا تعرف وظيفتها."},
  {id:"g5",title:"الذراع لا تشحن",category:"controller",tag:"الأذرع",emoji:"⌁",summary:"تحقق من الكابل ومنفذ USB ومصدر الطاقة قبل طلب الصيانة.",duration:"3 دقائق",steps:["جرّب كابل USB آخر يدعم الشحن ونقل البيانات عند الحاجة.","جرّب منفذ USB مختلفًا على الجهاز.","اترك الذراع متصلة لفترة قصيرة وراقب مؤشر الشحن.","أعد تشغيل الجهاز ثم أعد تجربة الشحن."],warning:"إذا ظهرت حرارة غير طبيعية أو انتفاخ أو رائحة، افصل الذراع فورًا ولا تستخدمها."},
  {id:"g6",title:"إيقاف الجهاز بطريقة صحيحة",category:"console",tag:"الأجهزة",emoji:"⏻",summary:"تجنّب فصل الكهرباء أثناء إيقاف التشغيل أو تحديث النظام.",duration:"دقيقتان",steps:["اضغط زر PS وافتح قائمة الطاقة.","اختر Turn Off PS5 أو Turn Off PS4 لإيقاف التشغيل الكامل.","انتظر حتى تنطفئ مؤشرات الجهاز تمامًا قبل فصل الكهرباء.","لا تفصل الكهرباء أثناء تحديث النظام أو أثناء حفظ البيانات."],warning:"انقطاع الكهرباء أثناء كتابة البيانات قد يؤدي إلى تلف البيانات أو النظام."},
  {id:"g7",title:"الذراع لا تتصل بالـ PS4",category:"controller",tag:"الأذرع",emoji:"⌁",summary:"إعادة الاقتران بكابل USB مناسب والتحقق من الاتصال.",duration:"3 دقائق",steps:["شغّل جهاز PS4.","وصّل الذراع بكابل USB يدعم نقل البيانات، وليس الشحن فقط.","اضغط زر PS وانتظر حتى تتعرف المنظومة على الذراع.","إذا لم تعمل، جرّب كابلًا آخر ثم أعد ضبط الذراع من الفتحة الصغيرة خلفها."],warning:"إذا لم تعمل الذراع مع أكثر من كابل أو جهاز، فقد تحتاج إلى تشخيص منفذ الشحن أو البطارية."},
  {id:"g8",title:"قبل شراء لعبة أو جهاز مستعمل",category:"games",tag:"الألعاب",emoji:"✓",summary:"قائمة فحص سريعة تقلل احتمالات المفاجآت بعد الشراء.",duration:"5 دقائق",steps:["تحقق من موديل الجهاز وحالته الخارجية ورقمه التسلسلي.","جرّب تشغيل الجهاز والصورة والصوت والاتصال بالإنترنت إن أمكن.","اختبر منافذ USB وHDMI والذراع والأزرار.","اسأل عن الفاتورة والضمان وسياسة الاستبدال، وتحقق من توافق اللعبة مع جهازك."],warning:"لا تعتمد على الصور فقط. الأفضل إجراء فحص عملي قبل الدفع والشراء من مصدر موثوق."}
];

const diagnosticData = {
  power:{icon:"⏻",title:"الجهاز لا يعمل",subtitle:"ابدأ بفحوصات الكهرباء الأساسية",steps:["تأكد من توصيل كابل الكهرباء بإحكام في الجهاز ومصدر الكهرباء.","جرّب مقبسًا آخر معروفًا أنه يعمل، دون استخدام كابل تالف.","افصل الجهاز عن الكهرباء لمدة دقيقة ثم أعد التوصيل وجرب التشغيل.","لاحظ هل توجد أي إضاءة أو صوت أو رسالة على الشاشة."],warning:"إذا ظهرت رائحة احتراق أو شرر أو صوت غير طبيعي، افصل الكهرباء ولا تكرر المحاولة.",next:"إذا لم يستجب الجهاز، اطلب فحصًا فنيًا بدل فتحه."},
  display:{icon:"▣",title:"لا توجد صورة",subtitle:"تحقق من مسار الصورة قبل الاشتباه في الجهاز",steps:["اختر مدخل HDMI الصحيح من التلفزيون.","أعد تركيب كابل HDMI بعد إيقاف الجهاز والتلفزيون.","جرّب كابلًا سليمًا ومنفذًا آخر في التلفزيون.","جرّب التلفزيون مع جهاز آخر للتأكد من عمل المدخل."],warning:"لا تحاول تحريك أو ثني منفذ HDMI بالقوة.",next:"إذا كان المنفذ تالفًا أو استمرت الشاشة السوداء، يحتاج الجهاز إلى تشخيص."},
  controller:{icon:"⌁",title:"الذراع لا تتصل",subtitle:"تحقق من الكابل وإعادة الاقتران",steps:["اشحن الذراع باستخدام كابل سليم.","استخدم كابل USB يدعم نقل البيانات لتوصيلها بالجهاز.","أعد ضبط الذراع من زر Reset الصغير إن كان متاحًا في موديلك.","أعد الاقتران بالضغط على زر PS بعد توصيل الكابل."],warning:"لا تدخل أداة حادة بقوة داخل الذراع ولا تفكها إذا لم تكن مؤهلًا.",next:"إذا لم تستجب بعد تجربة كابل آخر وإعادة الضبط، قد تحتاج إلى فحص."},
  heat:{icon:"♨",title:"حرارة مرتفعة أو مروحة عالية",subtitle:"حسّن التهوية وأوقف الاستخدام عند التحذير",steps:["أوقف اللعب إذا ظهرت رسالة تحذير من الحرارة.","ضع الجهاز في مكان مفتوح مع ترك فراغ حول فتحات التهوية.","أبعده عن السجاد أو الخزانة المغلقة ومصادر الحرارة.","بعد أن يبرد، أعد تشغيله وراقب هل تعود المشكلة."],warning:"لا تواصل اللعب مع تحذير حرارة متكرر، ولا تفتح مزوّد الطاقة.",next:"تكرار المشكلة أو انطفاء الجهاز بسبب الحرارة يستدعي فحصًا وتنظيفًا مناسبًا."},
  storage:{icon:"▤",title:"مساحة التخزين ممتلئة",subtitle:"اعرف ما الذي يشغل المساحة أولًا",steps:["افتح Settings ثم Storage.","راجع حجم الألعاب والتطبيقات واللقطات المحفوظة.","احذف فقط المحتوى الذي لا تحتاجه بعد مراجعة بيانات الحفظ.","إذا استخدمت وحدة تخزين خارجية، اتبع تعليمات الجهاز لتهيئتها واستخدامها."],warning:"راجع النسخ الاحتياطية وبيانات الحفظ قبل الحذف، ولا تحذف ملفات النظام يدويًا.",next:"إذا كان التخزين لا يظهر سعته الصحيحة أو تظهر أخطاء متكررة، اطلب فحصًا."}
};

let selectedCategory = "all";
let guides = loadGuides();

function loadGuides(){
  try { const saved = localStorage.getItem("rabi3_guides"); if(saved) return JSON.parse(saved); } catch(e){}
  return defaultGuides;
}
function saveGuides(){ localStorage.setItem("rabi3_guides", JSON.stringify(guides)); }
function escapeHTML(s=""){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}

function renderDiagnostic(key="power"){
  const d=diagnosticData[key]; if(!d)return;
  document.querySelectorAll(".problem-card").forEach(b=>b.classList.toggle("active",b.dataset.problem===key));
  document.getElementById("diagnosticResult").innerHTML=`
    <div class="result-top"><div class="result-symbol">${d.icon}</div><div><h3>${d.title}</h3><p>${d.subtitle}</p></div></div>
    <ol class="step-list">${d.steps.map((s,i)=>`<li data-step="${i+1}">${escapeHTML(s)}</li>`).join("")}</ol>
    <div class="result-warning">${escapeHTML(d.warning)}</div>
    <a class="result-action" href="#request" id="diagnosticRequest">${escapeHTML(d.next)} ←</a>`;
  document.getElementById("diagnosticRequest").addEventListener("click",()=>{document.querySelector('[name="issue"]').value=`المشكلة: ${d.title}\nالخطوات التي جربتها: `;});
}

function renderGuides(){
  const q=(document.getElementById("guideSearch").value||"").trim().toLowerCase();
  const shown=guides.filter(g=>(selectedCategory==="all"||g.category===selectedCategory)&&[g.title,g.summary,g.tag,...(g.steps||[])].join(" ").toLowerCase().includes(q));
  const grid=document.getElementById("guideGrid");
  grid.innerHTML=shown.map(g=>`<article class="guide-card">
    <div class="guide-card-top"><span class="guide-emoji">${escapeHTML(g.emoji||"✦")}</span><span class="guide-tag">${escapeHTML(g.tag||"إرشادات")}</span></div>
    <h3>${escapeHTML(g.title)}</h3><p>${escapeHTML(g.summary)}</p>
    <button type="button" data-guide-id="${escapeHTML(g.id)}">اقرأ الإرشادات <span>←</span></button></article>`).join("");
  document.getElementById("guideEmpty").classList.toggle("hidden",shown.length>0);
  grid.querySelectorAll("[data-guide-id]").forEach(b=>b.addEventListener("click",()=>openGuide(b.dataset.guideId)));
}
function openGuide(id){
  const g=guides.find(x=>x.id===id);if(!g)return;
  document.getElementById("guideDialogContent").innerHTML=`<span class="dialog-category">${escapeHTML(g.tag||"إرشادات")} · ${escapeHTML(g.duration||"")}</span><h2>${escapeHTML(g.title)}</h2><p>${escapeHTML(g.summary)}</p><ol>${(g.steps||[]).map(s=>`<li>${escapeHTML(s)}</li>`).join("")}</ol><div class="result-warning">${escapeHTML(g.warning||"إذا استمرت المشكلة، اطلب فحصًا فنيًا.")}</div>`;
  document.getElementById("guideDialog").showModal();
}
document.querySelectorAll(".problem-card").forEach(b=>b.addEventListener("click",()=>renderDiagnostic(b.dataset.problem)));
document.getElementById("guideSearch").addEventListener("input",renderGuides);
document.querySelectorAll(".filter-pill").forEach(b=>b.addEventListener("click",()=>{selectedCategory=b.dataset.category;document.querySelectorAll(".filter-pill").forEach(x=>x.classList.toggle("active",x===b));renderGuides();}));
document.getElementById("dialogClose").addEventListener("click",()=>document.getElementById("guideDialog").close());
document.getElementById("guideDialog").addEventListener("click",e=>{if(e.target.id==="guideDialog")e.target.close();});
document.getElementById("menuBtn").addEventListener("click",()=>document.querySelector(".desktop-nav").classList.toggle("open"));
document.querySelectorAll(".desktop-nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".desktop-nav").classList.remove("open")));
document.querySelectorAll("[data-branch-link]").forEach(a=>a.addEventListener("click",()=>{document.querySelector('[name="branch"]').value=a.dataset.branchLink;}));

document.getElementById("serviceForm").addEventListener("submit",e=>{
  e.preventDefault();
  const data=Object.fromEntries(new FormData(e.currentTarget).entries());
  const summary=`طلب صيانة - شركة الربيع\nالاسم: ${data.name}\nالهاتف: ${data.phone}\nالجهاز: ${data.device}\nالفرع: ${data.branch}\nالمشكلة: ${data.issue}\n\nملاحظة: هذا ملخص تجريبي ولم يتم إرساله إلى الشركة.`;
  const msg=document.getElementById("formMessage");
  msg.textContent="تم تجهيز ملخص الطلب على هذه الصفحة فقط. انسخه واحتفظ به؛ لم يتم إرساله إلى الشركة.";
  let old=document.getElementById("requestSummary"); if(old)old.remove();
  const wrap=document.createElement("div");wrap.id="requestSummary";wrap.className="result-warning";wrap.style.whiteSpace="pre-wrap";wrap.textContent=summary;
  const copy=document.createElement("button");copy.type="button";copy.className="btn btn-secondary";copy.textContent="نسخ ملخص الطلب";
  copy.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(summary);copy.textContent="تم النسخ ✓";}catch(err){const ta=document.createElement("textarea");ta.value=summary;document.body.appendChild(ta);ta.select();document.execCommand("copy");ta.remove();copy.textContent="تم النسخ ✓";}});
  wrap.appendChild(document.createElement("br"));wrap.appendChild(copy);e.currentTarget.appendChild(wrap);
});

renderDiagnostic();
renderGuides();
if("serviceWorker" in navigator && location.protocol.startsWith("http")) window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
