# 🚀 DevSync Lab - Real-Time Code Collaboration Platform

DevSync Lab is a premium, high-performance real-time collaborative code editor designed for developers to write, review, and sync code instantly. Built with modern framework architectures, it integrates a rich VS-Code style editor with persistent real-time communication tunnels and scalable infrastructure.

## ✨ Features

- **VS-Code Class Editing:** Powered by the Monaco Editor engine providing auto-completions, syntax highlighting, and fluid formatting.
- **Bi-Directional Multi-User Sync:** Zero-latency real-time code mirroring across all connected clients via Socket.io.
- **Collaborator Hub:** Live active-status sidebar trackpads mapping distinct user roles (`Host`, `Editor`, `Viewer`).
- **Production-Grade Dark UI:** Human-crafted fluid layout optimized with soft glassmorphism, responsive split panels, and active glowing pulse signals.
- **Cloud-Ready Blueprint:** Tailored structure designed for friction-free Docker containerization and AWS deployments.

## 🛠️ Tech Stack

- **Frontend:** React (Vite 7), Tailwind CSS v4, Monaco Editor
- **Backend:** Node.js, Express (Configured under `backend-nodeJs/`)
- **Real-time Protocol:** Socket.io
- **DevOps & Cloud:** Docker, AWS (EC2 / ECS ready)

---

## ⚡ Quick Start

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/devsync-lab.git](https://github.com/YOUR_USERNAME/devsync-lab.git)
   cd devsync-lab