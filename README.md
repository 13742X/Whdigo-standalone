Here is the updated **FAQ.md** tailored specifically for the new **SME Governance Edition**. It maintains your requested format and style while accurately describing the new features (Inventory, Offboarding, Distributed Grid, etc.).

***

# 🏢 WHDIGO Governance Vault (SME Edition)

WHDIGO Governance is a specialized Zero-Knowledge Identity & Asset Management platform designed for Small and Medium Enterprises (SMEs). It allows organizations to track software subscriptions, manage shared credentials, and handle employee offboarding without ever exposing sensitive data to a central cloud server.

It operates on a **Local-First** architecture with an optional **Distributed Grid** sync, ensuring that your organization's security map remains exclusively in your control.

## 🧱 Core Concept: Governance & Zero-Trust

Most SMEs struggle with "Shadow IT"—not knowing which employee has access to which software. WHDIGO solves this by creating an encrypted **Inventory of Access**.

Unlike traditional SaaS tools where your data sits in a database we control, WHDIGO performs all encryption client-side. We cannot see your passwords, your employee list, or your software stack.

## ⚙️ How It Works

1.  **Create Your Organization** — Open the app and set a Master Password. This initializes a military-grade encrypted vault in your browser.

2.  **Define Assets** — Input your Applications (e.g., Salesforce, AWS, Slack) and Account Types (e.g., Corporate Email, SSO, Shared Logins).

3.  **Build Inventory** — Link **Apps** to **Accounts** to create access records.
    *   *Example:* "Jane Doe" (Owner) has access to "Stripe" (App) using "Finance Email" (Account).

4.  **Monitor Risk** — The **Dashboard** automatically calculates monthly spend, flags high-risk applications, and identifies security gaps (like missing owners or personal email usage).

5.  **Sync or Save:**
    *   **Offline Mode:** Save your data as a `.json` backup file.
    *   **Grid Mode:** Authenticate via `loktd.com` to shard your vault and sync it across the Distributed Quantum Grid.

## ☁️ Distributed Quantum Grid (Shamir Secret Sharing)

WHDIGO introduces a revolutionary way to sync data without a central database. When you click **"Connect to Grid"**:

1.  Your vault is encrypted locally (AES-256-GCM).
2.  The encrypted blob is split into **6 cryptographic shards** using **Shamir Secret Sharing**.
3.  These shards are distributed across 3 independent storage nodes.
4.  To restore your data, the app must authenticate and retrieve shards from multiple nodes to mathematically reconstruct the vault.

**Benefit:** No single server holds your data. Even if a node is compromised, your data remains mathematically incomplete and unreadable.

## 🛡️ Security Architecture

We utilize a defense-in-depth strategy suitable for business compliance:

### 🧬 Encryption Stack
*   **Argon2id:** Used for Master Password hashing and key derivation (Memory: 64MB, Time: 2).
*   **AES-256-GCM:** Authenticated encryption for all vault data.
*   **Shamir Secret Sharing (SSS):** Used for splitting data during Grid Sync (Threshold 4 of 6).

### 🚦 Risk Governance
The app forces you to categorize applications by **Risk Level** (Low, Medium, High). High-risk items (e.g., Banking, HR data) are visually highlighted in the dashboard to ensure they are audited frequently.

### 🚫 Zero-Knowledge Offboarding
The **Offboarding Tab** allows you to select an employee and instantly view every credential, subscription, and access point they control. This enables rapid revocation of access when staff leave, closing the most common security gap in SMEs.

## 🧭 Use Cases

*   **SME & Startups:**
    Track monthly SaaS spend and ensure no "Ghost Subscriptions" are draining the budget.
*   **Agencies:**
    Manage shared credentials for client social media or hosting accounts securely.
*   **Compliance:**
    Maintain a read-only **Audit Log** of who copied which password and when.

## 🧩 Features Overview

*   **Dashboard:** Real-time view of Spend, Risk, and Account counts.
*   **Inventory:** The core table linking Apps to Accounts. Replaces standard "mappings."
*   **Quick Link:** A fast "Select & Map" tool in the Settings tab for rapid data entry.
*   **Audit Log:** An immutable, local log of every view, edit, and copy action.

## ⚠️ Important Notes

*   **Master Password:** If you lose your Master Password, your organization's data is lost forever. There is no "Forgot Password" link because we do not know your password.
*   **Grid Connectivity:** Syncing requires an active token. If your session expires, simply click the "Offline Mode" banner to re-authenticate.
*   **Browser Storage:** In "Device Mode," data is stored in the browser's LocalStorage. Clear your cache only after ensuring you have synced to the Grid or saved a backup file.

## 🪙 Credits

Part of the **WHDIGO / Snard Token ecosystem** — Privacy-focused security tools by **[Garlip.com](https://garlip.com)**.

## 📝 Summary

*   **Mode:** Hybrid (Offline PWA + Distributed Grid Sync)
*   **Cryptography:** Argon2id + AES-256 + Shamir Secret Sharing
*   **Key Feature:** Employee Offboarding & SaaS Cost Governance
*   **Data Model:** Apps + Accounts = Inventory
*   **Best For:** SMEs requiring secure, auditable access management.
