# PYLO Shopify Theme (v1)

**Developer:** Prathamesh Yamgarne

PYLO is a modern, modular, and highly customizable Shopify theme inspired by the best features of Dawn, Prestige, Motion, and Warehouse. Built from scratch for Online Store 2.0, it leverages Shopify's latest best practices, dynamic sections, and global settings for a merchant-friendly, performant storefront.

---

## How to Install
1. **Download or Clone** this repository to your computer.
2. **Zip the Theme Folder:**
   - Compress the entire `new_PYLO` folder into a `.zip` file (right-click > "Send to > Compressed (zipped) folder" on Windows, or use Finder's "Compress" on Mac).
3. **Upload to Shopify:**
   - Go to your Shopify admin panel.
   - Navigate to **Online Store > Themes**.
   - Click **Add theme** > **Upload zip file**.
   - Select your zipped `new_PYLO.zip` file and upload.
4. **Publish the Theme:**
   - Once uploaded, click **Actions > Publish** to make PYLO your live theme.

## How to Use
- **Customize in the Theme Editor:**
  - Go to **Online Store > Themes > Customize**.
  - Use the left sidebar to add, remove, or reorder sections on any page.
  - Click on any section to access its settings. All color, typography, and layout options are controlled globally for consistency.
  - Add content, images, and adjust settings as needed. All changes are previewed live.
- **Global Settings:**
  - Access global color schemes, typography, layout, and product card options under the "Theme settings" tab in the editor.
- **Section Settings:**
  - Each section (e.g., banners, featured collections, blogs) has its own merchant-editable settings. No static color pickers—everything is dynamic and theme-driven.
- **Icons:**
  - All icons are original SVG snippets, prefixed with `pylo-`, and can be referenced in section settings where applicable.
- **Extending the Theme:**
  - To add new sections, follow the BEM and modular CSS/JS conventions used throughout the theme.

## Features
- **Online Store 2.0 Compatible**: Utilizes sections everywhere, JSON templates, and dynamic content blocks.
- **Modular Sections**: Each section is original, BEM-named, and comes with its own CSS for maintainability.
- **Dynamic Styling**: All colors, typography, and layout options are controlled via global theme settings (no static color values).
- **Responsive & Accessible**: Mobile-first, keyboard navigable, and screen-reader friendly.
- **Performance Optimized**: Loads only what’s needed, with critical CSS and asset preloading.
- **SEO & Structured Data**: Built-in meta tags and JSON-LD for rich search results.
- **Original Markup**: No code copied from Dawn or other themes; all markup and settings are unique.

## Project Structure
```
new_PYLO/
├── assets/                # CSS, JS, and icon assets (modular per section)
├── config/                # settings_schema.json and other config
├── layout/                # theme.liquid (main layout)
├── sections/              # Modular, original section files (pylo-*.liquid)
├── snippets/              # SVG icons and reusable snippets (pylo-icon-*.liquid)
└── templates/             # JSON templates for pages, products, etc.
```

## Customization
- **Colors & Typography**: Set in the theme editor under "Colors" and "Typography". All sections use these variables.
- **Section Settings**: Each section exposes only dynamic, merchant-editable settings. No static color pickers.
- **Icons**: All icons are original SVG snippets, prefixed with `pylo-`.
- **Extending**: Add new sections by following the BEM and modular CSS/JS conventions.

## Credits
- Theme by Prathamesh Yamgarne, inspired by Shopify's Dawn, Prestige, Motion, and Warehouse themes.
- No code copied from other themes; all code is original and copyright-safe.

## Version
**v1.0.0**

---
For support or documentation, visit [prathameshyamgarne.com](https://prathameshyamgarne.com) 