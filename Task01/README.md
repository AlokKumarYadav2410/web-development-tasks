# 📝 Task 01: Personal Resume Website

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

**A personal resume website showcasing HTML5 and CSS3 fundamentals**

[🔗 Live Preview](./index.html) • [📂 Source Code](https://github.com/AlokKumarYadav2410/web-development-tasks/tree/main/Task01)

</div>

---

## 📋 Project Overview

This task involves creating a personal resume website using pure HTML5 and CSS3. The project demonstrates fundamental web development skills including semantic HTML structure, custom CSS styling, typography implementation, and responsive design principles.

## 🎯 Learning Objectives

- Master HTML5 semantic elements and document structure
- Implement custom CSS styling and layouts
- Work with custom fonts and typography
- Apply color theory and professional design principles
- Understand CSS box model and positioning
- Create a clean, professional web presence

## 🛠️ Technologies Used

| Technology | Purpose | Key Features Used |
|------------|---------|-------------------|
| **HTML5** | Structure & Content | Semantic elements, proper document structure |
| **CSS3** | Styling & Layout | Custom properties, flexbox, box model |
| **Custom Fonts** | Typography | @font-face implementation |

## ✨ Key Features

### 🎨 **Design & Styling**
- **Professional Color Scheme**: Dark blue header with white content area
- **Custom Typography**: Implemented `FallingSkyCondensed` font using @font-face
- **Clean Layout**: Well-structured sections with proper spacing
- **Visual Hierarchy**: Clear heading styles and content organization

### 📱 **Structure & Content**
- **Header Section**: Name and professional title
- **About Me**: Personal introduction and learning journey
- **Education**: Academic background with institution details
- **Skills**: Core competencies and technical abilities
- **Projects**: Portfolio of current and ongoing projects

### 🎯 **Technical Implementation**
- **Semantic HTML**: Proper use of sections, headers, and content elements
- **CSS Organization**: Structured stylesheet with logical grouping
- **Custom Properties**: Font-face implementation for typography
- **Box Model**: Proper spacing, margins, and padding throughout

## 📁 Project Structure

```
Task01/
├── index.html              # Main HTML document
├── styles.css              # CSS stylesheet
├── fonts/
│   └── FallingSkyCondensed-9qm2.otf  # Custom font file
├── images/
│   └── logo.png            # Favicon and branding
└── README.md               # Project documentation
```

## 🎨 Design Decisions

### **Color Palette**
- **Primary**: `rgb(8, 27, 61)` - Professional dark blue for header
- **Secondary**: `rgb(2, 13, 32)` - Darker blue for borders
- **Background**: `rgb(255, 255, 255)` - Clean white for content
- **Text**: Default black for readability

### **Typography**
- **Primary Font**: `FallingSkyCondensed` - Custom font for unique branding
- **Fallback**: System fonts for accessibility
- **Hierarchy**: Clear distinction between h1, h2, h3, and paragraph styles

### **Layout Philosophy**
- **Container-based**: Central container for consistent width
- **Section-based**: Logical content grouping
- **Visual Balance**: Proper spacing and alignment throughout

## 💻 Code Highlights

### HTML Structure
```html
<div class="container">
    <div class="header">
        <h1>Alok Kumar Yadav</h1>
        <h3>Full Stack Developer | Learner</h3>
    </div>
    <div class="content">
        <section id="about" class="content-section">
            <!-- Content sections -->
        </section>
    </div>
</div>
```

### CSS Custom Font Implementation
```css
@font-face {
    font-family: professional;
    src: url('fonts/FallingSkyCondensed-9qm2.otf') format('truetype');
}

* {
    font-family: professional;
}
```

## 🚀 How to Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AlokKumarYadav2410/web-development-tasks.git
   ```

2. **Navigate to Task01:**
   ```bash
   cd "Tasks/Task01"
   ```

3. **Open in browser:**
   - Double-click `index.html`
   - Or use Live Server extension in VS Code
   - Or serve locally: `python -m http.server 8000`

## 📚 What I Learned

### **HTML5 Skills**
- ✅ Semantic HTML elements (`<section>`, `<header>`, etc.)
- ✅ Proper document structure and organization
- ✅ Accessibility considerations with proper headings
- ✅ Meta tags for responsive design and SEO

### **CSS3 Skills**
- ✅ @font-face for custom typography
- ✅ CSS box model and spacing techniques
- ✅ Color application and design consistency
- ✅ Class-based styling and organization
- ✅ CSS reset and universal styling

### **Design Principles**
- ✅ Professional color scheme selection
- ✅ Typography hierarchy and readability
- ✅ Visual balance and spacing
- ✅ Content organization and flow

## 🎯 Challenges Faced & Solutions

### **Challenge 1: Custom Font Loading**
- **Issue**: Font not displaying correctly across browsers
- **Solution**: Proper @font-face syntax with format specification
- **Learning**: Importance of font fallbacks and format compatibility

### **Challenge 2: Layout Consistency**
- **Issue**: Inconsistent spacing between sections
- **Solution**: Systematic use of classes and consistent margin/padding
- **Learning**: Benefits of CSS organization and reusable classes

### **Challenge 3: Professional Design**
- **Issue**: Making the design look professional and polished
- **Solution**: Careful color selection and typography choices
- **Learning**: Importance of design principles in web development

## 🔄 Future Improvements

- [ ] **Responsiveness**: Add media queries for mobile devices
- [ ] **Interactivity**: Add hover effects and smooth transitions
- [ ] **Accessibility**: Improve ARIA labels and keyboard navigation
- [ ] **Performance**: Optimize images and fonts loading
- [ ] **Content**: Add more detailed project descriptions
- [ ] **Animation**: Subtle CSS animations for better UX

## 📊 Project Metrics

- **Lines of HTML**: ~66 lines
- **Lines of CSS**: ~144 lines
- **Custom Assets**: 1 font file, 1 image
- **Sections**: 4 main content sections
- **Development Time**: ~4-6 hours

## 🎖️ Key Achievements

- ✅ **First Complete Website**: Successfully built from scratch
- ✅ **Custom Typography**: Implemented external font successfully
- ✅ **Professional Design**: Clean, business-appropriate styling
- ✅ **Semantic Code**: Proper HTML5 structure and CSS organization
- ✅ **Personal Branding**: Created cohesive visual identity

---

<div align="center">

### 🌟 This project marks the beginning of my web development journey! 🌟

**Next Goal**: Adding interactivity with JavaScript and responsive design

---

*Completed as part of Sheryians Cohort 2.0 - September 2025*

[⬅️ Back to Main Repository](../README.md)

</div>