# Industrial Medical Dashboard — Design System & Technical Architecture Guide

This document outlines the visual design philosophy, color system, typography hierarchy, border-radius principles, and technical implementation details for building high-fidelity, futuristic medical dashboards and premium industrial web interfaces.

---

## 1. Overall Design Direction & Philosophy

The design system merges four distinct luxury aesthetic paradigms:

1. **Apple Industrial Design:** Precision-molded physical hardware feel, subtle material layering, restrained typography, and intentional negative space.
2. **Braun Minimalism (Dieter Rams Principles):** Functional purity, matte physical textures, unobtrusive visual hierarchy, and high contrast legibility.
3. **Luxury Automotive Dashboard UI:** Sculpted continuous contours, integrated physical-digital interfaces, horizontal telemetry layouts, and high-precision status indicators.
4. **High-End Medical Equipment Interfaces:** Crisp diagnostic data presentation, clear color coding (e.g., `#E8EB2A` accent yellow), smooth curve telemetry lines, and compact metric capsules.

### Core Principles
- **Avoid:** Glassmorphism, Neumorphism, heavy drop shadows, dramatic gradients, and standard generic rounded rectangles (`border-radius: 9999px`).
- **Use:** Soft matte surfaces, continuous sculpted geometry, subtle ambient depth, precision padding, and Bezier curve transitions.

---

## 2. Color Palette & Material Architecture

| Element | Hex Code | Purpose & Feel |
| :--- | :--- | :--- |
| **Canvas Background** | `#F5F5F3` | Soft warm neutral outer canvas with generous whitespace |
| **Outer CNC Molded Frame** | `#55534E` | Matte dark gray injection-molded shell frame |
| **Dashboard Surface** | `#F7F5EF` | Off-white warm matte inner dashboard surface |
| **Medical Cards** | `#FFFFFF` | Crisp white elevated component containers |
| **Primary Text** | `#1E1E1E` / `#202020` | High-contrast dark charcoal for primary titles & readings |
| **Secondary Text** | `#7D7D7D` | Mid-gray for labels, metadata, and unit indicators |
| **Subtle Borders** | `#E8E6DF` | 1px precision separation lines |
| **Timeline Connector Lines**| `#D9D7D1` | Continuous engineered telemetry axis lines |
| **Accent Highlight** | `#E8EB2A` | Bright industrial yellow for interactive nodes, alerts & graphs |
| **Dark Control Docks** | `#2B2B2B` / `#6D6B66` | Matte charcoal dark contrast containers for capsules and toolbars |

---

## 3. Typography Hierarchy

- **Primary Font Family:** `SF Pro Display` or `Inter` (sans-serif)
- **Letter Spacing:** Standard/Tight (`tracking-tight`) — avoid excessive tracking.
- **Font Weights:** `400` (Regular), `500` (Medium), `600` (Semi-Bold), `700` (Bold)

### Hierarchy Table
- **Main Category Title:** `26px - 30px` Bold (`#202020`)
- **Metric Values:** `24px - 28px` Bold (`#1E1E1E`)
- **Card Titles:** `15px` Semi-Bold (`#202020`)
- **Capsule / Pill Text:** `13.5px` Medium (`#202020` or `#FFFFFF`)
- **Labels / Units:** `11px - 12px` Regular/Medium (`#7D7D7D` uppercase)

---

## 4. Border Radius & Geometry System

Do not apply a single uniform `border-radius` value across components. Use a strictly layered radius hierarchy:

- **Outer CNC Frame:** `32px - 34px`
- **Dashboard Surface Inner Corners:** `28px`
- **Cards & Patient Container:** `24px`
- **Photo Cards:** `18px`
- **Bottom Timeline Toolbar:** `22px`
- **Timeline Nodes & Circular Icons:** `50%` / `9999px`
- **Navigation Controls:** **Custom Continuous Geometry** (SVG / Bezier Curves)

---

## 5. Technical Implementation of Key Elements

### A. The Inward Curved Header Contour (`HeaderContour.jsx`)

Instead of standard rectangular headers or basic CSS `border-radius`, the header smoothly dips downward into the inner off-white surface (`#F7F5EF`) using an organic S-Curve SVG Bezier path.

#### Architecture:
1. An off-white surface badge (`bg-[#F7F5EF]`) hosting the close button (`×`) and title (`Cardiology`).
2. An SVG extension rendered directly adjacent with `currentColor` set to `#F7F5EF` to create a seamless physical blend.

#### The Curve SVG Path Code:
```jsx
/* HeaderContour.jsx snippet */
export function HeaderContour({ title = "Cardiology" }) {
  return (
    <div className="relative flex items-center h-[52px]">
      {/* Off-White Surface Badge */}
      <div className="relative flex items-center bg-[#F7F5EF] h-full pl-3 pr-6 rounded-l-[26px] border-l border-t border-b border-[#E8E6DF]/60 z-10">
        <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#202020] border border-[#E8E6DF]">
          ×
        </button>
        <h1 className="ml-3 text-[26px] font-bold text-[#202020] tracking-tight">
          {title}
        </h1>
      </div>

      {/* Organic Bezier S-Curve Path Transition */}
      <svg
        className="h-full w-12 -ml-[1px] text-[#F7F5EF] pointer-events-none z-10"
        viewBox="0 0 48 52"
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <path d="M 0 0 C 16 0, 24 52, 48 52 L 0 52 Z" />
      </svg>
    </div>
  );
}
```
* **Bezier Formula Explained (`M 0 0 C 16 0, 24 52, 48 52 L 0 52 Z`):**
  - `M 0 0`: Start at top-left.
  - `C 16 0, 24 52, 48 52`: Cubic Bezier cubic curve control points that gently pull the line horizontally before accelerating down into the surface baseline `52px`.
  - `L 0 52 Z`: Complete shape to fill cleanly with `#F7F5EF`.

---

### B. Shapemorphic Navigation Pills (`ShapemorphicPill.jsx`)

Standard CSS `border-radius: 9999px` creates harsh semicircular ends. Shapemorphic geometry uses stretched continuous Bezier curves with flattened circular ends and smooth transitions to look molded.

#### The Shapemorphic SVG Path Code:
```jsx
/* ShapemorphicPill.jsx snippet */
export function ShapemorphicPill({ children, active = false, onClick, icon: Icon, badge }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative inline-flex items-center justify-center h-10 px-5 text-[13.5px] font-medium transition-all group cursor-pointer"
    >
      {/* Background SVG path for continuous geometry */}
      <svg
        className="absolute inset-0 w-full h-full text-white transition-transform duration-200 group-hover:scale-[1.01]"
        viewBox="0 0 160 40"
        preserveAspectRatio="none"
      >
        <path
          d="M 20 0
             C 8 0, 0 8, 0 20
             C 0 32, 8 40, 20 40
             L 140 40
             C 152 40, 160 32, 160 20
             C 160 8, 152 0, 140 0
             Z"
          fill="currentColor"
          stroke="#E8E6DF"
          strokeWidth="1.5"
        />
      </svg>

      {/* Button Content */}
      <div className="relative z-10 flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 text-[#6E6E6E] stroke-[1.8]" />}
        <span>{children}</span>
        {badge && (
          <span className="ml-1 text-[11px] font-bold bg-[#E8EB2A] text-black px-1.5 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>
    </button>
  );
}
```

---

### C. Timeline Curved Connector Lines (`App.jsx`)

Connecting timeline nodes to sub-capsules and diagnostic cards requires S-shaped branching lines rather than standard straight perpendicular lines.

#### Path Code:
```jsx
<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
  <path
    d="M 0 0 C 0 30, 24 45, 48 45 C 72 45, 80 80, 80 120"
    fill="none"
    stroke="#D9D7D1"
    strokeWidth="1.5"
  />
</svg>
```

---

## 6. Micro-Interactions & Motion Parameters

To keep the interface feeling precise and physical:
- **Hover Transitions:** `translateY(-2px)` with subtle elevation adjustments.
- **Duration:** `220ms`
- **Timing Function:** `cubic-bezier(.2, .8, .2, 1)` (Apple standard spring-like response).

---

## Summary Checklist for New Builds
1. Enclose the application in an outer dark shell (`#55534E`) with an inner off-white surface (`#F7F5EF`).
2. Implement header contours and pill controls using SVG Bezier paths instead of basic CSS rounded rectangles.
3. Maintain yellow (`#E8EB2A`) as a deliberate accent for primary telemetry status nodes and interactive focal points.
4. Keep borders subtle (`1px solid #E8E6DF`) and shadows extremely restrained (`box-shadow: 0 2px 4px rgba(0,0,0,0.05)`).
