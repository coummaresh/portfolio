# 📝 CUSTOMIZATION EXAMPLES

This file shows you exactly what to replace and with what.

---

## PERSONAL INFORMATION REPLACEMENTS

### 1. Name
**Find in index.html:**
```html
Hi, I'm <span class="highlight">Your Name</span>
```
**Replace with:**
```html
Hi, I'm <span class="highlight">John Doe</span>
```

**Also update in footer:**
```html
<p>&copy; 2026 Your Name | QA Automation Portfolio</p>
```
**Replace with:**
```html
<p>&copy; 2026 John Doe | QA Automation Portfolio</p>
```

---

### 2. Email Address
**Find these and replace `your.email@gmail.com`:**

In Hero Section:
```html
<a href="mailto:your.email@gmail.com" title="Email">✉️</a>
```
Replace with:
```html
<a href="mailto:john.doe@gmail.com" title="Email">✉️</a>
```

In Contact Section (3 places):
```html
<a href="mailto:your.email@gmail.com">
    your.email@gmail.com
</a>
```
Replace with:
```html
<a href="mailto:john.doe@gmail.com">
    john.doe@gmail.com
</a>
```

---

### 3. LinkedIn Profile
**Find:**
```html
<a href="https://linkedin.com" target="_blank" title="LinkedIn">💼</a>
```
**Replace with:**
```html
<a href="https://linkedin.com/in/johndoe" target="_blank" title="LinkedIn">💼</a>
```

**Also in Contact section:**
```html
<a href="https://linkedin.com/in/yourprofile" target="_blank">
    View Profile
</a>
```
**Replace with:**
```html
<a href="https://linkedin.com/in/johndoe" target="_blank">
    View Profile
</a>
```

---

### 4. GitHub Profile
**Find all instances of:**
```html
<a href="https://github.com" target="_blank">
```
**Replace with:**
```html
<a href="https://github.com/johndoe" target="_blank">
```

---

## PROJECT CUSTOMIZATION EXAMPLES

### Project 1: Your Automation Project
**Original:**
```html
<article class="project-card">
    <div class="project-header">
        <h3 class="project-title">🤖 Selenium WebDriver - Demo Application Testing</h3>
        <span class="project-status">Completed</span>
    </div>
    <div class="project-body">
        <p class="project-description">
            Automated end-to-end testing of a demo e-commerce web application using 
            Selenium WebDriver and TestNG framework. Created comprehensive test scripts 
            covering user registration, product search, cart operations, and checkout flow.
        </p>
        <h4>What I Did:</h4>
        <ul class="project-list">
            <li>Identified web elements using CSS selectors and XPath</li>
            <li>Wrote reusable test cases for critical user workflows</li>
            <li>Implemented Page Object Model (POM) design pattern</li>
            <li>Used TestNG for test organization and parameterization</li>
            <li>Created detailed test reports and bug documentation</li>
            <li>Executed cross-browser testing (Chrome, Firefox)</li>
        </ul>
        <div class="project-tech">
            <span class="tech-tag">Selenium WebDriver</span>
            <span class="tech-tag">TestNG</span>
            <span class="tech-tag">Java</span>
            <span class="tech-tag">Maven</span>
            <span class="tech-tag">XPath</span>
        </div>
        <div class="project-links">
            <a href="https://github.com" target="_blank" class="project-link">View Code</a>
            <a href="https://github.com" target="_blank" class="project-link">Project Details</a>
        </div>
    </div>
</article>
```

**Customize it like this:**
```html
<article class="project-card">
    <div class="project-header">
        <h3 class="project-title">🤖 Online Banking Portal Automation Testing</h3>
        <span class="project-status">Completed</span>
    </div>
    <div class="project-body">
        <p class="project-description">
            Automated critical user workflows for online banking portal using Selenium 
            WebDriver and TestNG. Created 20+ automated test cases covering login, 
            fund transfers, balance inquiry, and bill payment functionalities.
        </p>
        <h4>What I Did:</h4>
        <ul class="project-list">
            <li>Identified dynamic web elements using XPath and CSS selectors</li>
            <li>Wrote test cases for positive and negative scenarios</li>
            <li>Implemented Page Object Model for maintainable code</li>
            <li>Integrated with Maven for build automation</li>
            <li>Executed tests on Chrome and Firefox browsers</li>
            <li>Created bug reports with screenshots and reproduction steps</li>
        </ul>
        <div class="project-tech">
            <span class="tech-tag">Selenium WebDriver</span>
            <span class="tech-tag">TestNG</span>
            <span class="tech-tag">Java</span>
            <span class="tech-tag">Maven</span>
            <span class="tech-tag">POM Pattern</span>
        </div>
        <div class="project-links">
            <a href="https://github.com/johndoe/banking-automation" target="_blank" class="project-link">View Code</a>
            <a href="https://github.com/johndoe/banking-automation#readme" target="_blank" class="project-link">Project Details</a>
        </div>
    </div>
</article>
```

---

## SKILLS CUSTOMIZATION EXAMPLES

### If you know more than listed:
**Add new skill category:**

Original has 6 categories. To add more, add another `<div class="skill-category">`:

```html
<div class="skill-category">
    <h3 class="category-title">🧬 API Testing</h3>
    <ul class="skill-list">
        <li><span class="skill-name">Postman</span> <span class="proficiency">Intermediate</span></li>
        <li><span class="skill-name">REST API Testing</span> <span class="proficiency">Beginner</span></li>
        <li><span class="skill-name">JSON/XML</span> <span class="proficiency">Beginner</span></li>
        <li><span class="skill-name">API Documentation</span> <span class="proficiency">Basic</span></li>
    </ul>
</div>
```

### If you DON'T have certain skills:
**Remove the skill items you don't have:**

```html
<!-- Remove this line if you don't know it -->
<li><span class="skill-name">Java Collections</span> <span class="proficiency">Beginner</span></li>
```

### Update proficiency levels honestly:
```html
<!-- Change this based on your actual knowledge -->
<span class="proficiency">Intermediate</span>

<!-- Options: Basic, Beginner, Intermediate, Advanced, Good, Excellent -->
```

---

## LEARNING RESOURCES CUSTOMIZATION

### Update your learning website link:
**Find:**
```html
<a href="https://your-learning-website.com" target="_blank">
    Visit Learning Website →
</a>
```

**Replace with:**
```html
<a href="https://example-learning-site.blogspot.com" target="_blank">
    Visit Learning Website →
</a>
```

### Update learning topics:
**Find:**
```html
<div class="learning-topics">
    <span class="topic">Java Basics</span>
    <span class="topic">Selenium Setup</span>
    <span class="topic">WebDriver Methods</span>
    <span class="topic">TestNG Annotations</span>
    <span class="topic">XPath & CSS</span>
    <span class="topic">Best Practices</span>
</div>
```

**Customize based on what's in your learning website:**
```html
<div class="learning-topics">
    <span class="topic">OOP Concepts</span>
    <span class="topic">Inheritance & Polymorphism</span>
    <span class="topic">Exception Handling</span>
    <span class="topic">Collections Framework</span>
    <span class="topic">File I/O</span>
    <span class="topic">Algorithms</span>
</div>
```

---

## ABOUT ME CUSTOMIZATION

### Original:
```html
<p>
    I'm a recent graduate pursuing a career in Quality Assurance and Test Automation. 
    With a strong foundation in Core Java and Selenium WebDriver, I'm committed to 
    ensuring software quality through comprehensive automated testing.
</p>
<p>
    My journey started with understanding manual testing principles and evolved into 
    learning test automation using industry-standard tools. I'm detail-oriented, 
    methodical, and passionate about writing reliable test cases that catch bugs early.
</p>
<p>
    I love solving problems through code and exploring different testing scenarios. 
    Currently, I'm building a strong portfolio of automation projects and actively 
    learning best practices in QA testing.
</p>
```

### Customize example:
```html
<p>
    I'm a B.Tech graduate in Computer Science with a keen interest in Quality Assurance 
    and Test Automation. I have hands-on experience with Selenium WebDriver and have 
    completed several automation testing projects covering web and mobile applications.
</p>
<p>
    My learning journey involved understanding manual testing methodologies, mastering 
    Core Java programming, and specializing in Selenium automation. I'm particularly 
    interested in writing maintainable test code and implementing automation best practices 
    like Page Object Model.
</p>
<p>
    I'm actively seeking QA Automation internship or entry-level opportunities where I can 
    apply my technical knowledge, contribute to quality assurance, and continue growing my 
    expertise in test automation.
</p>
```

---

## HERO DESCRIPTION CUSTOMIZATION

### Original:
```html
<p class="hero-description">
    Fresher passionate about quality assurance and automation testing. 
    Specialized in Selenium WebDriver, TestNG, and Java. 
    Ready to contribute to building robust and bug-free applications.
</p>
```

### Customize example:
```html
<p class="hero-description">
    B.Tech graduate passionate about quality assurance and test automation. 
    Proficient in Selenium WebDriver, Java, and TestNG framework. 
    Seeking QA Automation internship to apply technical skills and grow expertise 
    in building reliable test automation frameworks.
</p>
```

---

## LEARNING RESOURCES SECTION - UPDATE ALL CARD CONTENT

### Example 1: Different learning website:
**Original:**
```html
<div class="learning-card">
    <div class="learning-icon">📚</div>
    <h3>Java & Selenium Learning Hub</h3>
    <p>
        Comprehensive learning website with organized notes, code examples, 
        and practice worksheets covering Core Java fundamentals, Selenium WebDriver, 
        and TestNG framework.
    </p>
    <div class="learning-topics">
        <span class="topic">Java Basics</span>
        <span class="topic">Selenium Setup</span>
        <!-- ... -->
    </div>
    <a href="https://your-learning-website.com" target="_blank">
        Visit Learning Website →
    </a>
</div>
```

**Customize example:**
```html
<div class="learning-card">
    <div class="learning-icon">📚</div>
    <h3>Complete QA Automation Learning Journey</h3>
    <p>
        Detailed learning blog with step-by-step tutorials, code examples, 
        and practice questions covering Java programming, Selenium WebDriver, 
        TestNG framework, and automation testing strategies.
    </p>
    <div class="learning-topics">
        <span class="topic">Java OOP</span>
        <span class="topic">Selenium Elements</span>
        <span class="topic">TestNG Config</span>
        <span class="topic">POM Design</span>
        <span class="topic">Test Reports</span>
    </div>
    <a href="https://myblog-qa.wordpress.com" target="_blank">
        Visit Learning Website →
    </a>
</div>
```

---

## RESUME BUTTON SETUP

### To make resume downloadable:

1. **Save your resume as:**
   - `resume.pdf` in the portfolio-website folder (same level as index.html)

2. **Update the button:**
```html
<!-- Original (doesn't work) -->
<a href="#" class="btn btn-primary">📄 Download Resume</a>

<!-- Update to this -->
<a href="resume.pdf" download class="btn btn-primary">📄 Download Resume</a>
```

3. **Alternative: Link to online resume:**
```html
<a href="https://drive.google.com/file/d/YOUR_FILE_ID/view" target="_blank" class="btn btn-primary">
    📄 Download Resume
</a>
```

---

## COLOR CUSTOMIZATION

### If you want to change the primary blue color:

**In css/style.css, find the :root section:**
```css
:root {
    --primary-color: #2563eb;      /* Change this */
    --primary-dark: #1e40af;       /* And this */
    --primary-light: #3b82f6;      /* And this */
    /* Rest stays the same */
}
```

### Popular color palettes:

**Professional Blue (Current):**
```css
--primary-color: #2563eb;
--primary-dark: #1e40af;
--primary-light: #3b82f6;
```

**Professional Teal:**
```css
--primary-color: #0891b2;
--primary-dark: #0e7490;
--primary-light: #06b6d4;
```

**Professional Purple:**
```css
--primary-color: #7c3aed;
--primary-dark: #6d28d9;
--primary-light: #a855f7;
```

**Professional Green:**
```css
--primary-color: #059669;
--primary-dark: #047857;
--primary-light: #10b981;
```

---

## CONTACT FORM SETUP (Optional Enhancement)

### To make the contact form actually send emails:

**Option 1: FormSubmit.co (Easiest)**

1. Go to [formsubmit.co](https://formsubmit.co)
2. Find your form in index.html
3. Change from:
```html
<form class="contact-form" id="contactForm">
```
To:
```html
<form action="https://formsubmit.co/your.email@gmail.com" method="POST" class="contact-form">
```

Replace `your.email@gmail.com` with your actual email!

**Option 2: Netlify Forms (If hosting on Netlify)**

Just add `netlify` attribute to form:
```html
<form class="contact-form" netlify>
```

---

## QUICK FIND & REPLACE CHECKLIST

**In index.html, search and replace:**

| Search | Replace With |
|--------|------------|
| `Your Name` | John Doe |
| `your.email@gmail.com` | john.doe@gmail.com |
| `yourprofile` (in GitHub URLs) | johndoe |
| `yourprofile` (in LinkedIn URLs) | johndoe |
| `https://your-learning-website.com` | Your actual learning site |
| `2026 Your Name` | 2026 John Doe |

---

## TESTING AFTER CUSTOMIZATION

1. **Open index.html in browser**
2. **Check each section:**
   - [ ] Hero section shows your name
   - [ ] All links work (click them!)
   - [ ] Email links open mail client
   - [ ] Resume downloads correctly
   - [ ] Social links go to right profiles
3. **Check on mobile** (F12 → Toggle Device)
4. **No console errors** (F12 → Console)

---

Done! Your portfolio is now personalized. 🎉

