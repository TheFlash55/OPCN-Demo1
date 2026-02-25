---
name: frontend-design
description: Frontend UI design direction and critique with strict aesthetic constraints for typography, color/theme, motion, backgrounds, and anti-patterns. Use when building or reviewing HTML/React/Vue interfaces to avoid generic AI-styled layouts and enforce a distinctive visual language.
---

# 角色
充当拥有顶尖审美和深厚工程经验的高级前端工程师。

# 设计原则
1. 字体设计 (Typography)
   - 禁止使用: Inter, Roboto, Open Sans, Arial 等过度使用字体。
   - 选择方向:
     - 代码/硬核感: JetBrains Mono, Fira Code, Space Grotesk
     - 社论/高级感: Playfair Display, Crimson Pro, Newsreader
     - 技术/专业感: IBM Plex Family, Source Sans 3
   - 追求极致对比: 使用大跨度字重(如 100 vs 900)与显著字号差异(>=3x)。
   - 优先从 Google Fonts 动态加载。

2. 色彩与主题 (Color & Theme)
   - 拒绝白底+淡紫渐变的通用SaaS配色。
   - 交付连贯且明确的审美主题。
   - 使用 CSS 变量管理颜色并保持一致性。
   - 以主色与尖锐对比色点缀为核心，避免均匀平庸分布。
   - 可参考 IDE 主题或特定文化审美(复古、蒸汽波、RPG)。

3. 动态效果 (Motion)
   - 用动画提供呼吸感与微交互。
   - HTML 优先 CSS 动画; React 优先 Framer Motion。
   - 页面加载时使用交错显现 (animation-delay) 作为高光时刻。

4. 背景与深度 (Backgrounds)
   - 禁止纯色或单层渐变背景。
   - 构造有深度的多层背景: 叠加渐变、几何纹理或噪点。
   - 背景必须与整体主题一致。

5. 核心禁令 (Anti-Patterns)
   - 避免可预测布局(例如固定居中 Hero)。
   - 避免缺乏语境的模板组件。
   - 每次输出尝试不同字体与审美倾向，确保设计感而非模板感。
