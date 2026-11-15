# KDBA! 3D — First Person (v1.1.0)

Offline first-person 3D game. HTML5/WebGL for desktop and mobile. This repository builds a real **Android APK** and **Windows portable EXE**.

## Downloads
Open [GitHub Actions](../../actions/workflows/build-installers.yml), select the most recent successful run, and scroll to **Artifacts**:
- **KDBA-Android-APK** — extract ZIP, install KDBA-3D-Android.apk on Android.
- **KDBA-Windows-EXE** — extract ZIP, run the portable KDBA-3D-Windows-1.1.0.exe on Windows.

The APK is for testing, signed with an Android debug key; the Windows app is not code-signed. On Windows SmartScreen can show a warning. Builds need GitHub Actions; the game itself works offline.

## Controls
- **PC:** WASD to move, mouse to look, Space to dash, L for lie selection, Esc to pause.
- **Android:** left joystick for movement, swipe right area to look, buttons to dash and lie.
- HTML version: `web/index.html`.

## Packaging
- **Windows:** Electron and electron-builder (`npm install && npm run dist:win` on Windows).
- **Android:** Java WebView and Android Gradle Plugin (`cd android && gradle assembleDebug` with SDK 34/JDK 17/Gradle 8.7).

This is a prototype, with no online multiplayer and no speech AI.
