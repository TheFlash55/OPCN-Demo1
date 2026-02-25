const translations = {
  zh: {
    pageTitle: "OPCN | One Person Company Network",
    pageDescription:
      "OPCN 是 One Person Company Network。每位 Builder 可以编排自己的 OPC Agent 生态，以可验证、可组合的方式持续交付。",
    navVision: "理念",
    navStack: "Agent 生态",
    navLoop: "执行闭环",
    navJoin: "加入",
    kicker: "One Person Company Network",
    heroTitle: "一个人，就是一家公司。<br />一组 Agent，就是完整生态。",
    heroLead:
      "OPCN 不是“单打独斗”，而是让每个 Builder 拥有自己的 OPC Agent 组织：Strategy、Research、Build、Growth、Ops 并行协作，把想法转成持续交付能力。",
    heroBtn1: "查看生态结构",
    heroBtn2: "了解运行机制",
    stat1Label: "Agent Pods / Builder",
    stat1Value: "8-20",
    stat2Label: "并行任务吞吐",
    stat2Value: "24x",
    stat3Label: "可复用能力包",
    stat3Value: "1,600+",
    visionTitle: "OPCN 理念",
    visionBody:
      "从 One Person Company 出发，OPCN 把个人能力扩展成可编排、可继承、可验证的 Agent 网络。重点不是“更会聊天的 AI”，而是“可运行的组织结构”。每个节点都带有角色、上下文、策略和产出标准。",
    tag1: "Solo Founder OS",
    tag2: "Composable Agents",
    tag3: "Shared Memory",
    tag4: "Trust by Execution",
    stackTitle: "OPC Agent 生态分层",
    card1Title: "Operator Layer",
    card1Body: "你定义目标、约束与优先级，作为唯一的战略控制面。",
    card2Title: "Specialist Pods",
    card2Body: "研究、产品、工程、内容、增长、客服等专业 Agent Pod 并行执行。",
    card3Title: "Memory Fabric",
    card3Body: "统一保存决策历史、实验结果、失败案例和复盘知识，避免重复踩坑。",
    card4Title: "Protocol & Marketplace",
    card4Body: "把成功工作流发布成可复用能力包，在网络内交换、复用、迭代。",
    loopTitle: "Execution Loop",
    loop1: "Define: 用业务语言定义任务与结果指标。",
    loop2: "Dispatch: 自动路由到最合适的 Agent Pod。",
    loop3: "Verify: 通过测试、规则和人审门控确保质量。",
    loop4: "Compound: 把通过验证的方法沉淀成能力资产并持续复利。",
    joinTitle: "Build Your OPC Stack",
    joinBody: "在 OPCN 中，你不是“一个人做所有事”，你是在运营一个由 Agent 组成的公司级系统。",
    joinBtn: "Start Your OPCN Node",
    footerLeft: "OPCN Demo",
    footerRight: "one-person-company://network/v1"
  },
  en: {
    pageTitle: "OPCN | One Person Company Network",
    pageDescription:
      "OPCN is a One Person Company Network where each builder orchestrates an OPC Agent ecosystem to ship faster with trusted, composable workflows.",
    navVision: "Vision",
    navStack: "Agent Stack",
    navLoop: "Execution Loop",
    navJoin: "Join",
    kicker: "One Person Company Network",
    heroTitle: "One person, one company.<br />A coordinated agent stack, a full ecosystem.",
    heroLead:
      "OPCN is not solo hustle. It gives each builder an OPC Agent organization where Strategy, Research, Build, Growth, and Ops run in parallel and convert ideas into repeatable delivery.",
    heroBtn1: "Explore The Stack",
    heroBtn2: "See Execution Model",
    stat1Label: "Agent Pods / Builder",
    stat1Value: "8-20",
    stat2Label: "Parallel Throughput",
    stat2Value: "24x",
    stat3Label: "Reusable Capability Packs",
    stat3Value: "1,600+",
    visionTitle: "OPCN Vision",
    visionBody:
      "Starting from the One Person Company concept, OPCN expands individual capability into an orchestratable, inheritable, and verifiable agent network. The focus is not chatty AI. The focus is an executable organization with explicit roles, context, strategy, and output standards.",
    tag1: "Solo Founder OS",
    tag2: "Composable Agents",
    tag3: "Shared Memory",
    tag4: "Trust by Execution",
    stackTitle: "OPC Agent Ecosystem Layers",
    card1Title: "Operator Layer",
    card1Body: "You define goals, constraints, and priorities as the single strategic control plane.",
    card2Title: "Specialist Pods",
    card2Body: "Specialized pods for research, product, engineering, content, growth, and support execute in parallel.",
    card3Title: "Memory Fabric",
    card3Body: "A shared memory layer stores decisions, experiments, failures, and retrospectives to prevent repeated mistakes.",
    card4Title: "Protocol & Marketplace",
    card4Body: "Successful workflows are published as reusable capability packs for exchange, reuse, and iteration across the network.",
    loopTitle: "Execution Loop",
    loop1: "Define: Frame tasks and target metrics in business language.",
    loop2: "Dispatch: Route work to the best-fit agent pod automatically.",
    loop3: "Verify: Enforce quality through tests, policy gates, and human review.",
    loop4: "Compound: Turn validated methods into compounding capability assets.",
    joinTitle: "Build Your OPC Stack",
    joinBody: "In OPCN, you are not doing everything alone. You are operating a company-grade system made of agents.",
    joinBtn: "Start Your OPCN Node",
    footerLeft: "OPCN Demo",
    footerRight: "one-person-company://network/v1"
  }
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.zh;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = dict.pageTitle;

  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", dict.pageDescription);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (key && dict[key] !== undefined) {
      node.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.getAttribute("data-i18n-html");
    if (key && dict[key] !== undefined) {
      node.innerHTML = dict[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  window.localStorage.setItem("opcn-lang", lang);
}

const preferred = window.localStorage.getItem("opcn-lang");
applyLanguage(preferred === "en" ? "en" : "zh");

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

const nodes = document.querySelectorAll(".reveal");

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const n = Number(entry.target.dataset.delay || 0);
      setTimeout(() => entry.target.classList.add("visible"), n * 120);
      io.unobserve(entry.target);
    });
  },
  { threshold: 0.16 }
);

nodes.forEach((node) => io.observe(node));
