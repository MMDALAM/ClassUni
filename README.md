# Project ClassPlan

این پروژه یک برنامه مبتنی بر **Electron** است که از **Node.js** و پایگاه داده **MongoDB** استفاده می‌کند. در این فایل راهنمایی‌های کامل برای نصب، تنظیم، و اجرای پروژه ارائه شده است.

---

## پیش‌نیازها

برای اجرای این پروژه، باید نرم‌افزارهای زیر روی سیستم شما نصب باشند:

1. **Node.js**  
   برای نصب Node.js به [صفحه رسمی Node.js](https://nodejs.org/) مراجعه کنید و نسخه مناسب سیستم عامل خود را دانلود و نصب کنید.

2. **MongoDB**  
   برای نصب پایگاه داده MongoDB مراحل زیر را دنبال کنید:
   - به [صفحه رسمی MongoDB](https://www.mongodb.com/try/download/community) مراجعه کنید.
   - نسخه **Community Server** را دانلود و نصب کنید.
   - پس از نصب، سرویس MongoDB را راه‌اندازی کنید.

---

## نصب و راه‌اندازی

### 1. کلون کردن مخزن

ابتدا پروژه را از مخزن گیت کلون کنید:

```bash
git clone <repository-url>
cd <project-folder>
```

### 2. نصب وابستگی‌ها

برای نصب تمام وابستگی‌های پروژه:

```bash
npm install
```

### 3. راه‌اندازی پایگاه داده MongoDB

1. پس از نصب MongoDB، سرویس آن را راه‌اندازی کنید:

   ```bash
   mongod
   ```

2. برای مدیریت پایگاه داده، می‌توانید از ابزارهایی مانند [MongoDB Compass](https://www.mongodb.com/products/compass) استفاده کنید.

### 4. اجرای سرور و برنامه Electron

- برای اجرای سرور Node.js:

  ```bash
  npm run node
  ```

- برای اجرای برنامه با Electron:

  ```bash
  npm run electron
  ```

- برای ساخت فایل اجرایی پروژه:
  ```bash
  npm run start
  ```

---

## اسکریپت‌های npm

### 1. **`npm run start`**

این دستور پروژه را با استفاده از **electron-builder** کامپایل کرده و فایل اجرایی و فایل نصبی ایجاد می‌کند.

### 2. **`npm run node`**

این دستور با استفاده از **nodemon** فایل `server.js` را اجرا می‌کند. این ابزار تغییرات فایل‌ها را نظارت کرده و سرور را به صورت خودکار ری‌استارت می‌کند.

### 3. **`npm run electron`**

این دستور برنامه Electron را اجرا می‌کند و رابط کاربری برنامه شما را بارگذاری می‌کند.

---

## ساختار پروژه

این پروژه از ساختار زیر برای فایل‌ها و دایرکتوری‌ها استفاده می‌کند:

```
project-folder/
├── node_modules/      # وابستگی‌های نصب شده
├── src/              # کد منبع برنامه
│   └── main.js   # فایل اصلی Electron
├── server.js         # سرور Node.js
├── package.json      # تنظیمات پروژه و اسکریپت‌ها
└── README.md         # راهنمای پروژه
```

---

## نکات اضافی

- **بروزرسانی ماژول‌ها:**  
  برای به‌روزرسانی تمامی ماژول‌ها به آخرین نسخه‌های سازگار:
  ```bash
  npm update
  ```

---

## راهنمایی‌ها و پشتیبانی

اگر در مراحل نصب یا اجرای پروژه با مشکلی مواجه شدید، لطفاً از طریق ایمیل یا لینک زیر با من تماس بگیرید:

- ایمیل: [mmdalam.work@gmail.com](mailto:mmdalam.work@gmail.com)
- مستندات: [Project Wiki](https://github.com/MMDALAM/ClassUni)
