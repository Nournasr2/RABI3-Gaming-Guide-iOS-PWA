# RABI3 Gaming Guide — PWA و iOS

تم الحفاظ على ملفات الويب الحالية (HTML/CSS/JavaScript) واللوجو وهوية الكحلي والبرتقالي، مع إضافة مجلد `web` مستقل يصلح للنشر كـ PWA واستخدامه داخل تطبيق iOS عبر Capacitor.

## النشر كـ PWA على GitHub Pages

1. ارفع محتويات هذا المشروع إلى جذر مستودع GitHub جديد أو الحالي، مع الحفاظ على مجلدات الملفات.
2. من المستودع افتح **Settings → Pages**، واجعل **Source = GitHub Actions**.
3. ادخل إلى **Actions** وشغّل `Deploy RABI3 PWA to GitHub Pages` أو انتظر تشغيله بعد رفع الملفات.
4. بعد نجاح التشغيل، سيظهر رابط الموقع في صفحة الـ workflow. افتحه من Safari على الآيفون ثم Share → Add to Home Screen.

ملاحظة: يجب تقديم PWA من HTTPS حتى يعمل Service Worker؛ GitHub Pages يوفر HTTPS.

## مشروع iOS

- `capacitor.config.json` و`package.json` يجهزان مشروع Capacitor لاستخدام نفس واجهة الويب.
- Workflow `Build RABI3 iOS Simulator App` يبني نسخة **محاكي iOS** على GitHub Actions ويرفعها كـ Artifact.
- نسخة المحاكي ليست IPA قابلة للتثبيت على iPhone فعلي، ولا تُنشر في App Store.
- لبناء نسخة جهاز حقيقية وتوزيعها عبر TestFlight/App Store، يلزم إعداد توقيع Apple عبر Xcode/Apple Developer، وشهادات وملف provisioning. لا تضع أسرار التوقيع في ملفات المستودع.

## محليًا على Mac

يتطلب بناء iOS محليًا جهاز Mac عليه Xcode. بعد تثبيت Node.js 22 أو أحدث:

```bash
npm ci
npx cap add ios
npx cap sync ios
npx cap open ios
```

ثم اختبر التطبيق من Xcode على Simulator أو جهاز متصل، واضبط Bundle Identifier والتوقيع من إعدادات المشروع.

## Android

مجلد `app` الأصلي وإعدادات Android محفوظة في المشروع. مجلد `web` هو نسخة مستقلة للنشر على الويب ومصدر واجهة Capacitor.
