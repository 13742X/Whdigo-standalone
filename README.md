# 🔐 WHDIGO Military Grade Encryption Vault

WHDIGO is a zero-knowledge, 100% offline, Progressive Web App (PWA) designed for the ultra-secure storage of passwords, crypto keys, and other secrets.

It is engineered for security professionals, organizations requiring offline credential repositories, and individuals planning for digital legacy and inheritance, where secrets must be stored with uncompromising security and distributed among trusted custodians.

## 🧱 Core Concept: Zero-Knowledge, Zero-Cloud, Zero-Trust

Unlike cloud-based managers, **WHDIGO never connects to a server**. All cryptographic operations—encryption, decryption, and key derivation—happen **entirely within your browser's secure environment**. Nothing is ever uploaded, transmitted, or logged.

Data is protected by a military-grade cryptographic stack: **Argon2id** for key derivation and **AES-256-GCM** for authenticated encryption. Your master password is the only key and it is never stored.

## ⚙️ How It Works

1.  **Launch the App** — Open the PWA in any modern browser. It works instantly, even completely offline. No installation is required.

2.  **Create a New Vault** — Choose a strong, memorable master password. This password is the only key to your vault and **cannot be recovered if lost**.

3.  **Store Your Secrets** — Add passwords, crypto keys, passkeys, documents, wallet seeds, or any other sensitive data.

4.  **Save Your Encrypted Vault:**
- **Combined File:** A single `.json` file containing the entire encrypted vault.
- **Secure Fragments:** The vault is split, obfuscated, and saved as a pack of **6 separate `.json` files**. Only 2 of these files contain real data; the other 4 are encrypted decoys filled with random noise.

🔸 *For maximum security, distribute the 6 fragments across different locations or custodians (e.g., USB drive, family member, lawyer). An attacker cannot determine which files are real, exponentially increasing attack difficulty.*

5.  **Restore Your Vault** — Simply drag and drop all 6 fragment files into the app and enter your master password to decrypt the vault locally.

## 🧩 Files Overview

WHDIGO is a modern Progressive Web App with a clean, self-contained structure.

- **`index.html`**
  The main application file. It contains the UI and all client-side logic.
- **`sw.js` (Service Worker)**
  Enables the robust offline PWA experience, caching all necessary assets so the app loads instantly with or without an internet connection.
- **`manifest.json`**
  The PWA manifest file that allows the app to be "installed" on your device for a native-like experience.
- **`/libs/`**
  Contains the local, self-hosted cryptographic libraries (`argon2.js`, `argon2.wasm`), loaded with SRI checks to guarantee their integrity.

## 🔒 Security Architecture

The security of WHDIGO is built on a multi-layered, defense-in-depth strategy, ensuring your data is protected against all modern threats.

## 🧬 Key Derivation (Argon2id)

**Argon2id** (the gold standard) processes your master password. Its memory-hard properties make it extremely resistant to GPU/ASIC-based brute-force attacks. The parameters are set for high security: `mem: 64MB`, `time: 2`, `parallelism: 1`.

## 🛡️ Encryption (AES-256-GCM)

**AES-256-GCM** provides military-grade authenticated encryption. This ensures data is both confidential and protected from tampering. A unique 96-bit IV is generated for each encryption session.

## 🎲 Secure Fragment Obfuscation

The vault is split into 2 real fragments and hidden among 4 encrypted decoy fragments. All 6 files are cryptographically indistinguishable, making targeted attacks nearly impossible.

## 🔗 Code Integrity (SRI)

**Subresource Integrity (SRI)** with a `SHA-384` hash is used to verify the local Argon2 library. This guarantees the cryptographic code has not been modified or tampered with.

## 🌐 100% Offline Execution

The app is a self-contained PWA. It makes **zero external network requests** for its core functionality. Your data never leaves your device.

## 🎯 Zero-Knowledge Principle

Your master password and unencrypted data only ever exist in your browser's memory during an active session. We have no access and no ability to recover your data.

## 🗂️ Optional Local Cache

For convenience, the vault can be saved to the browser's `localStorage`. It remains fully encrypted with Argon2id + AES-256-GCM.

## 🧭 Use Cases

- **Organizational Security:**
  Store critical internal credentials and distribute the 6 recovery fragments across different departments or key personnel.
- **Digital Legacy & Inheritance:**
  Ensure your digital assets are accessible to multiple trusted custodians only when all fragments are brought together.
- **Air-Gapped Environments:**
  Perfect for use in secure networks, labs, or systems where internet access is restricted or forbidden.

## 🧰 Recommended Setup

1.  Host the application on a secure internal server or simply run it from your local files.
2.  Use the "Install App" feature in your browser to create a desktop shortcut for easy offline access.
3.  After setting up your vault, use **“Save as Secure Fragments”** to generate the 6 `.json` files.
4.  Store these 6 files securely. For maximum protection, store them in different physical or digital locations.

## 🚫 No Cloud, No Sync, No Metadata

- No external analytics
- No telemetry or data collection
- No user accounts or registration
- No third-party trackers

Your data is **yours and yours alone**.

## ⚠️ Important Notes

- **Your master password is unrecoverable.**
  If you forget it, your data is permanently lost. Write it down and store it securely.
- **All 6 fragments are required** to decrypt a vault saved in Secure Fragment mode.
  Losing even one file may result in data loss.
- Always ensure you are running an authentic version of the application.

## 🪙 Credits

Created as part of the **WHDIGO / Snard Token ecosystem** — a suite of blockchain-anchored and privacy-focused security tools by **[Garlip.com](https://garlip.com)**.

## 📝 Summary

- **Mode:** 100% Offline Progressive Web App (PWA)
- **Cryptography:** Argon2id + AES-256-GCM
- **Data Ownership:** Fully Local, Zero-Knowledge
- **Files to Keep:** A single `.json` file or a pack of 6 fragments
- **Best For:** Extreme security, digital inheritance, offline use

*“Six files. Four lies. One password. Unbreakable security.”*
