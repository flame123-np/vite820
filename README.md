# 💻 Web Portfolio

เว็บไซต์พอร์ตโฟลิโอส่วนตัว (Personal Portfolio Website) สำหรับแนะนำตัวเอง รวบรวมประวัติการศึกษา ประสบการณ์การทำงาน และผลงานต่างๆ เพื่อใช้ในการนำเสนอข้อมูลในรูปแบบออนไลน์ที่ทันสมัยและใช้งานง่าย

🔗 **Live Demo:** [https://flame123-np.github.io/my-portfolio-241/]

---

## ✨ ฟีเจอร์เด่นของระบบ (Features)

* **Responsive Design:** รองรับการแสดงผลทุกหน้าจอ ไม่ว่าจะเป็นคอมพิวเตอร์ แท็บเล็ต หรือสมาร์ทโฟน
* **Modern Layout:** แบ่งสัดส่วนหน้าจอออกเป็น 2 ฝั่ง (Fixed Left Section 40% / Scrollable Right Section 60%) เพื่อการไล่ดูข้อมูลที่ลื่นไหล
* **Structured Content:** แยกส่วนข้อมูลชัดเจน เช่น ประวัติโดยย่อ (About), ประสบการณ์ (Experience), ผลงาน (Projects) และช่องทางการติดต่อ (Contact — GitHub, Medium, LinkedIn)
* **Resume Download:** ปุ่ม "View Resume" เปิดไฟล์เรซูเม่ (PDF) ในแท็บใหม่

---

## 🛠️ เทคโนโลยีที่เลือกใช้ (Tech Stack)

### **Frontend & Core Libraries**
* **[React 19](https://react.dev/):** ไลบรารีหลักในการจัดการโครงสร้างและแนวคิดแบบ Component-based
* **[Vite 6](https://vite.dev/):** เครื่องมือ Build Tool ยุคใหม่ที่ช่วยให้รันและอัปเดตโค้ดได้อย่างรวดเร็ว (HMR)
* **[Font Awesome](https://fontawesome.com/):** ชุดไอคอน (solid, regular, brands) สำหรับตกแต่ง Navbar และ Contact

### **Styling & Design**
* **[Tailwind CSS 3](https://tailwindcss.com/):** ยูทิลิตี้เฟรมเวิร์กสำหรับเขียนสไตล์ที่รวดเร็วและปรับแต่งหน้าตาเว็บได้อย่างอิสระ พร้อมธีมสีกำหนดเอง (โทนม่วง-ลาเวนเดอร์)
* **[PostCSS](https://postcss.org/) + Autoprefixer:** เครื่องมือช่วยแปลงโค้ด CSS ให้รองรับเบราว์เซอร์ต่างๆ

### **Code Quality & Deployment**
* **ESLint 9:** ตัวช่วยตรวจสอบและควบคุมคุณภาพของโค้ดให้เป็นระบบและลดข้อผิดพลาด
* **gh-pages:** ใช้ deploy โปรเจกต์ขึ้น GitHub Pages โดยตรงจากคำสั่ง `npm run deploy`

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```
src/
├── assets/            # รูปภาพ, ไฟล์เรซูเม่ (PDF)
├── contents/          # ข้อมูลข้อความ (header.js, about.js)
└── sections/
    ├── LeftSection/    # ฝั่งซ้าย (sticky) รวม Header + Navbar + Contact
    │   ├── Header/     # ชื่อ, ตำแหน่ง, ปุ่มดาวน์โหลดเรซูเม่
    │   ├── Navbar/      # เมนู About / Experience / Projects / Article
    │   └── Contact/     # ไอคอนโซเชียล (GitHub, Medium, LinkedIn)
    └── RightSections/  # ฝั่งขวา (เลื่อนดูได้) รวม About + Experience + Projects
        ├── About/
        └── Experience/
```

> หมายเหตุ: ตอนนี้ส่วน **Projects** และ **Article** ยังเป็นแค่เมนู/พื้นที่ placeholder ที่ยังไม่ได้ใส่เนื้อหาจริง และข้อมูลในส่วน Experience (ชื่อโปรเจกต์ "Fashion Ecommerce" กับคำอธิบายเกี่ยวกับระบบวิเคราะห์ข้อมูลกีฬา) ยังไม่ตรงกัน — น่าจะเป็นจุดที่ควรอัปเดตให้ตรงกับความเป็นจริงก่อนใช้นำเสนอจริงจัง

---

## 🚀 การติดตั้งและใช้งาน (Getting Started)

```bash
# ติดตั้ง dependencies
npm install

# รันโหมดพัฒนา (dev server พร้อม HMR)
npm run dev

# build สำหรับ production
npm run build

# ดีพลอยขึ้น GitHub Pages (branch gh-pages)
npm run deploy
```

---

## 👥 สมาชิกผู้พัฒนา (Developers)

* **Nuttaphat** ([@flame123-np](https://github.com/flame123-np))

*(หมายเหตุ: โปรเจกต์นี้เป็นส่วนหนึ่งของรายวิชา Internet Technology (02739241) ในภาคการศึกษา 2567 กลุ่มเรียน 820)*
