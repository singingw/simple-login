# simple-login
一個簡單的用戶登入頁面，以 Cookie 來做身份驗證，用於練習使用
## 功能描述
* 使用給定的電子郵件和密碼登錄（seed 中的數據）
* 一旦登錄，登錄狀態將被保留
* 能夠登出

## 安裝與執行步驟
1.  在終端機輸入指令 Clone 此專案至本機電腦
```js
git clone https://github.com/singingw/simple-login.git
```
2.  移至檔案夾
```js
cd simple-login
```
3.  安裝相關套件
```js
npm install
```
4.   運行種子數據
```js
node models/seeds/userSeeder.js
```
5.  打開終端
```js
npm run dev
```
6.  使用瀏覽器開啟：http://localhost:3000 即可瀏覽本專案

## 環境建置與需求
1.  Node.js & npm - JavaScript 運行環境
2.  Express.js - Web 應用程序框架
3.  Express-Handlebars - 模板引擎
4.  mongoDB 資料庫
5.  mongoose
