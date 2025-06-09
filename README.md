<h1 align="center">Health API · NestJS Demo</h1>

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="80" alt="NestJS logo" />
</p>

> A tiny NestJS service that exposes a single endpoint—`/health`—to report basic application status.

---

## 🚀 Main endpoint

| Method | Path      | Example payload                                              |
| ------ | --------- | ------------------------------------------------------------ |
| `GET`  | `/health` | <pre>{ "status": "ok", "version": "0.1.0", "timestamp": 1749495295503 }</pre> |

---

## ▶️ Installation & run

```bash
# clone and enter the repo
git clone https://github.com/<your-user>/health-api-demo.git
cd health-api-demo

# install dependencies
npm install      # or  yarn

# dev mode (hot-reload)
npm run start:dev
# → http://localhost:4000/health
