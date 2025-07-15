# PYLO Shopify Theme (v1)

**Developer:** Prathamesh Yamgarne

**PYLO** is a modern, modular, and highly customizable Shopify theme inspired by the best features of Dawn, Prestige, Motion, and Warehouse. Built from scratch for **Online Store 2.0**, it follows Shopify's latest best practices and leverages dynamic sections and global settings to deliver a merchant-friendly, high-performance storefront.

---

## 🚀 Installation

1. **Download or Clone** this repository to your local machine.
2. **Zip the Theme Folder:**
   - Compress the entire `new_PYLO` folder into a `.zip` file.
     - **Windows:** Right-click > *Send to > Compressed (zipped) folder*
     - **macOS:** Right-click > *Compress "new_PYLO"*
3. **Upload to Shopify:**
   - Open your Shopify admin panel.
   - Go to **Online Store > Themes**.
   - Click **Add theme** > **Upload zip file**.
   - Select and upload the `new_PYLO.zip` file.
4. **Publish the Theme:**
   - After upload, click **Actions > Publish** to make PYLO your live theme.

---

## 🛠️ Usage

### Customize via the Theme Editor
- Navigate to **Online Store > Themes > Customize**.
- Use the sidebar to add, remove, or reorder sections on any page.
- Click on a section to edit its settings. All visual options (color, typography, layout) are globally managed for consistency.
- Add content and preview changes live.

### Global Settings
- Access theme-wide configurations like:
  - Color schemes
  - Typography
  - Layout options
  - Product card settings
- Located under the **Theme settings** tab.

### Section Settings
- Each section (e.g., banners, featured collections, blogs) includes dynamic and merchant-editable settings.
- No hardcoded color pickers — everything is driven by theme-wide settings.

### Icons
- All icons are custom SVG snippets, prefixed with `pylo-`.
- They can be referenced in relevant section settings.

### Extending the Theme
- To add new sections or features, follow:
  - **BEM (Block Element Modifier)** naming conventions
  - Modular **CSS/JS** practices

---

## ✨ Features

- ✅ **Online Store 2.0 Ready** – Supports JSON templates, dynamic sections, and blocks.
- 📦 **Modular Architecture** – Each section is standalone, BEM-named, and cleanly separated.
- 🎨 **Dynamic Styling** – Fully driven by global settings; no hardcoded values.
- 📱 **Responsive & Accessible** – Mobile-first, keyboard-navigable, and screen-reader-friendly.
- ⚡ **Performance Focused** – Optimized asset loading with critical CSS and preloading.
- 🔍 **SEO & Schema Ready** – Built-in structured data (JSON-LD) and meta tags.
- 🧾 **Original Codebase** – No copied code from Dawn or any third-party themes.

---

## 📁 Project Structure

new_PYLO/
├── assets/ # CSS, JS, and SVG icon assets
├── config/ # settings_schema.json and other configurations
├── layout/ # Main layout file (theme.liquid)
├── sections/ # Custom modular sections (pylo-.liquid)
├── snippets/ # Reusable code blocks and icons (pylo-icon-.liquid)
└── templates/ # JSON templates for pages, products, etc.



---

## 🎨 Customization

- **Colors & Typography:**  
  Configure globally via the theme editor under **Colors** and **Typography**.

- **Section Options:**  
  All sections expose only dynamic, editable settings. Designed to be fully merchant-friendly.

- **Icons:**  
  Use SVG snippets with the `pylo-` prefix inside sections or snippets.

- **Theme Extension:**  
  Add new sections using the same BEM methodology and modular design approach.

---

## 🙏 Credits

- Developed by **Prathamesh Yamgarne**
- Inspired by Shopify themes: **Dawn**, **Prestige**, **Motion**, and **Warehouse**
- 100% original codebase. No content reused from other themes.

---

## 📌 Version

**v1.0.0**

---

## 📞 Support

For help and documentation, visit:  
👉 [https://prathameshyamgarne.com](https://prathameshyamgarne.com)
