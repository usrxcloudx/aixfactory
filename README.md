# AIXFACTORY — Autonomous AI Family Butler & Physical Intelligence Platform

Official repository for **AIXFACTORY** (`https://aixfactory.io.vn`), developing **Aura Butler** — an autonomous AI family orchestrator powered by **Anthropic Claude 3.5 Sonnet**.

## Vision & Architecture

Aura Butler bridges ambient computing, multimodal computer vision, and physical automation into a proactive family agent:

1. **Door Vision & Natural Welcoming**: Sub-second RTSP/Webcam stream analysis with Claude 3.5 Sonnet Vision to greet family members by name, unlock doors securely, and manage parcel deliveries.
2. **Children's Academic Companion**: Autonomous sync with electronic school gradebooks (SIS/VnEdu), detecting weak topics and proactively scheduling study focus modes.
3. **Family Health Telemetry**: Non-invasive vital sign monitoring (EHR) aggregating smartwatches, blood pressure monitors, and elderly medication schedules.
4. **Physical IoT Orchestration**: Deterministic Matter & Zigbee bridge executing complex home scenes across HVAC, lighting, robot vacuums, and security locks without brittle rules.
5. **Local-Edge Privacy**: Sensitive biometric data and raw camera streams are tokenized locally on the Aura Edge Gateway, dispatching only anonymized semantic prompts to Claude API with Zero Data Retention.

## Tech Stack

- **Frontend**: React 19, Tailwind CSS v4, Lucide Icons, Vite
- **Deployment**: Cloudflare Pages (`aixfactory.pages.dev` / `aixfactory.io.vn`)
- **Foundation Intelligence**: Anthropic Claude 3.5 Sonnet & Claude Code

## Development & Build

```bash
# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Build for production
pnpm build
```
