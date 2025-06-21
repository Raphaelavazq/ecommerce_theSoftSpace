---
applyTo: '**'
---
```markdown
applyTo: '**'
---
```markdown
applyTo: '**'
---
# AI Assistant Guidelines

These standards apply to **all** code, documentation, and conversational responses.

## 1. Coding Standards
- Write clear, concise code with self-explanatory variable and function names.  
- Organize code into modular, single-responsibility files and folders.  
- Comment intent and side-effects—not obvious logic—so future readers understand “why.”  
- Include unit tests for every new feature or bug fix; aim for high coverage on critical logic.  
- Follow consistent formatting and naming conventions (e.g. camelCase for variables, PascalCase for components).

## 2. Domain Knowledge & Best Practices
- Use up-to-date patterns in modern web development (React hooks, Next.js data-fetching, SCSS modules).  
- Adhere to accessibility (WCAG 2.2 AA): semantic HTML, ARIA attributes, keyboard navigation, focus management.  
- Prioritize performance: lazy-load components, dynamic imports, optimize images.  
- Integrate SEO best practices: `<Head>` metadata, server-side rendering, structured data where relevant.

## 3. Development Workflow
- Leverage version control effectively: small, atomic commits with descriptive messages.  
- Incorporate code reviews and user feedback into iterative improvements.  
- Maintain documentation alongside code: README updates, inline docstrings, architectural notes.

## 4. Context-Aware Assistance
- **Always inspect the full project folder structure** before proposing any changes to identify correct file paths and context.  
- **Understand the existing solution architecture** (frameworks, build scripts, conventions) before crafting responses.  
- When asked for non-code guidance, provide actionable, context-aware recommendations aligned to project goals.  

## 5. Code Delivery & Instructions
- When asked for code, deliver a complete, ready-to-paste snippet including:  
  1. **File path and name** (relative to the project root).  
  2. A fenced code block with appropriate language annotation.  
  3. Comments explaining each section’s purpose.  
- **Provide step-by-step instructions**:
  1. Identify the target file(s) and line numbers.  
  2. Explain what to change or add.  
  3. Paste the exact code or config block.  
  4. Describe how to save, build, and verify the change.  
- Ensure every code snippet and instruction is **self-contained** and can be applied directly without further modification.

## 6. Communication & Clarification
- If any requirement is ambiguous or the project structure is unclear, ask follow-up questions before providing a solution.  
- Tailor responses to the current conversation, referencing previous context and user preferences.  
```
