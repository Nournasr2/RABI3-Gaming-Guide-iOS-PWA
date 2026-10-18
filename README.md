# RABI3 Gaming Guide (Android MVP)

An Arabic RTL Android app for PlayStation customers of Rabi3 Gaming. Includes a searchable guide library, interactive first-step troubleshooting, branch/service information, and a local service-request summary form.

**Status:** Source project ready to build. No prebuilt APK is included, and the app has not been device-tested in this environment. The current RABI3 mark is a placeholder, not the company's official logo.

## Build locally
1. Open this folder in Android Studio.
2. Use JDK 17 and install Android SDK Platform 35 if prompted.
3. Select **Build → Build Bundle(s) / APK(s) → Build APK(s)**.
4. APK output: `app/build/outputs/apk/debug/app-debug.apk`.

## Build an APK on GitHub
The workflow `.github/workflows/android.yml` builds a debug APK on each push to `main`/`master`, or manually:
1. Create a GitHub repository.
2. Upload the **contents** of this folder (not the ZIP file alone), including the hidden `.github` directory.
3. Open **Actions** and run `Build RABI3 Android APK` if it did not start automatically.
4. Download the `RABI3-Gaming-Guide-APK` artifact from a successful workflow run.
5. Unzip the artifact to get `app-debug.apk`.

## Important limitations
- Service requests are not transmitted to Rabi3; the form creates a local copyable summary only.
- There is no secure multi-user admin panel or shared database yet.
- Confirm branch addresses/contact details and technically review the guidance before public release.
- Debug APKs are for testing and limited sharing, not Google Play release.
