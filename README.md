# Project 1 – Client-Side Rendering vs Server-Side Rendering

## Overview

This project demonstrates the difference between Client-Side Rendering (CSR) and Server-Side Rendering (SSR) using only HTML, CSS, and JavaScript.

Two separate pages were created:

- **ssr.html** – Simulates Server-Side Rendering
- **csr.html** – Demonstrates Client-Side Rendering

Both pages display the same content and use the same styling. The difference is how and when the content is rendered.

---

## Server-Side Rendering (Simulated)

In `ssr.html`, all main content is included directly in the HTML file.

- Content is visible immediately at page load.
- The page works even if JavaScript is disabled.
- The browser receives fully rendered content.

---

## Client-Side Rendering

In `csr.html`, the HTML file contains an empty container.

- All content is generated using JavaScript.
- The page depends on JavaScript to display content.
- If JavaScript is disabled, no main content appears.

---

# Comparison

## Performance

### Time to First Visible Content
SSR displays content immediately because it is already present in the HTML.
CSR displays content only after JavaScript execution.

### Perceived Loading Speed
SSR feels faster because users see content instantly.
CSR may briefly show a blank screen while JavaScript loads and executes.

### JavaScript Execution Impact
SSR does not require JavaScript for core content.
CSR depends entirely on JavaScript execution.

---

## SEO (Search Engine Optimization)

### Initial HTML Content
SSR includes all content in the HTML source, making it easily indexable.
CSR initially contains minimal HTML and relies on JavaScript to render content.

### Search Engine Interpretation
SSR is generally better for SEO because content is immediately available.
CSR may be less optimal if search engines do not fully execute JavaScript.

### Metadata Visibility
In SSR, content and metadata are immediately accessible in the HTML document.
In CSR, the main content depends on JavaScript rendering.

---

## User Experience

### Blank Screen vs Immediate Content
SSR provides immediate visible content.
CSR may display a blank screen before rendering.

### Dependency on JavaScript
SSR works without JavaScript for core content.
CSR fails to display content if JavaScript is disabled.

### Reliability
SSR is more reliable in low-performance or restricted environments.
CSR depends on JavaScript availability and performance.

---

## Conclusion

Server-Side Rendering provides faster initial content display, better SEO, and greater reliability.

Client-Side Rendering relies on JavaScript, may delay visible content, but allows dynamic and interactive user interfaces.