# 🔐 WHDIGO Ultra Secure Password Manager

**WHDIGO Ultra Secure Password Manager** is a completely **offline, browser-based password and credential manager**.  
It is designed for **organizations, security-conscious individuals, and digital estate planning**, where credentials may need to be securely stored, encrypted, and passed to trusted custodians if the user is no longer available.

---

## 🧱 Core Concept

Unlike cloud password managers, **WHDIGO** never connects to a server.  
All encryption, decryption, and data management happen **entirely within your browser** — nothing is ever uploaded or transmitted.

Data is encrypted using **AES-256-GCM** (industry-standard authenticated encryption), and your **master password** is never stored anywhere.  

---

## ⚙️ How It Works

1. **Run the app locally** — simply open `WHDIGO Ultra Secure Password Manager.html` in any modern browser.  
   No installation or backend required.

2. **Create a new secure store** — choose a strong master password (it cannot be recovered if lost).

3. **Add your credentials and mappings** — record applications, sign-on methods, tags, and notes.

4. **Save your encrypted data:**
   - **Combined file:** a single `.json` containing all encrypted data.  
   - **Split packets:** two separate `.json` files, each holding half of the encrypted data.

   🔸 *For maximum security, distribute each split packet to a different custodian (e.g., lawyer, partner, IT officer).*

5. **To restore data**, both packets and the master password are required.  
   The app can decrypt locally and display all information again.

6. **Optional:** The encrypted data can be cached in the browser for convenience — still fully encrypted with your password.

---

## 🧩 Files Overview

- **`WHDIGO Ultra Secure Password Manager.html`**  
  The self-contained web app. Includes all logic, encryption routines, and UI. Works offline.

- **`sw.js` (optional)**  
  Service Worker script for offline caching (optional if you serve as a PWA).  
  Ensures the app loads instantly even without internet access.

---

## 🔒 Security Design

| Feature | Description |
|----------|--------------|
| **Encryption** | AES-256-GCM with PBKDF2 key derivation (100,000 iterations) |
| **Password Handling** | Master password never leaves memory; not stored anywhere |
| **In Memory Only** | Unless selected, no data is cached in cookies or localstorage|
| **Data Model** | All data encrypted into JSON packets |
| **Split File Mode** | Data is divided into two halves requiring both to decrypt |
| **Offline Execution** | 100% client-side JavaScript; no network requests |
| **Optional Cache** | Encrypted payload can be stored in localStorage |
| **Integrity Protection** | Authenticated encryption prevents tampering |

---

## 🧭 Use Cases

- **Organizational security:**  
  Store internal credentials or API keys offline and distribute recovery packets across departments.

- **Digital legacy management:**  
  Leave encrypted credentials accessible only to multiple trusted custodians upon your passing.

- **Isolated systems:**  
  Use in air-gapped environments or secure networks where internet access is restricted.

---

## 🧰 Recommended Setup

1. Place both `WHDIGO Ultra Secure Password Manager.html` and `sw.js` in the same folder.  
2. Open the HTML file locally or host it on an internal network (no backend needed).  
3. After setting up, use **“Save Split Packets”** to create:
   - `whdigo-packet1.json`
   - `whdigo-packet2.json`
4. Store these files securely — each with a different custodian.

---

## 🚫 No Cloud, No Sync, No Metadata

- No external requests  
- No telemetry  
- No analytics  
- No account system  

Your data is **yours alone**. The app never transmits, synchronizes, or exposes any information.

---

## 🧠 Ideal For

- Security professionals managing sensitive credentials  
- Executors or custodians handling digital inheritance  
- Organizations seeking offline credential repositories  
- Anyone who prefers **full local control** over their secrets

---

## ⚠️ Important Notes

- **Your master password cannot be recovered.**  
  Losing it means permanent data loss.

- **Both split files are required** to decrypt your data.  
  A single file is useless without its pair.

- Always verify the integrity of the app source (`WHDIGO Ultra Secure Password Manager.html`) before use.

---

## 🪙 Credits

Created as part of the **WHDIGO / Snard Token ecosystem** —  
a suite of blockchain-anchored and privacy-focused security tools by **[Garlip.com](https://garlip.com)**.

---

## 📝 License

This project is released for **personal and organizational use**.  
Modification and redistribution are permitted for non-commercial purposes, provided attribution is maintained.

---

### 🧭 Summary

| Characteristic | Description |
|----------------|-------------|
| **Mode** | 100% Offline PWA |
| **Encryption** | AES-256-GCM |
| **Data Ownership** | Fully Local |
| **Files to Keep** | `packet1.json` and `packet2.json` |
| **Best For** | Security-critical storage, digital legacy planning |

---

> “Two files. One password. Infinite security.”