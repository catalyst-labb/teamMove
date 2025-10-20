# TeamMove - Cedra Contribution Engine

> **A contest-driven ecosystem builder for the Cedra network** - Transforming ecosystem development into high-stakes contests where builders compete, ship, and rise through transparent merit.

## 🚀 Overview

TeamMove addresses the critical coordination problem in the Cedra ecosystem by providing a centralized platform that transforms ecosystem development into competitive contests. Built specifically for Cedra's Move Layer 1 blockchain, it consolidates:

- **Contest Infrastructure** - Multi-submission workflows with hybrid community/expert judging
- **Real-time Leaderboards** - Sub-500ms response times with live competitive tracking
- **Merit-Based Economy** - Podium payouts across top 3-5 performers with fast-track to micro-grants
- **On-Chain Reputation** - Sybil-resistant scoring via Cedra mainnet with verifiable contributor badges
- **Move-Native Integration** - Built with Cedra SDK v0.2, Nightly + Petra wallet authentication
- **Incubation Pipeline** - Seamless transition for top performers into startup funding and core roles
- **Seasonal Leaderboards** - Reset-based competition cycles that lower barriers for new contributors
- **AI-Powered Discovery** - Intelligent chatbot for opportunity matching and Cedra documentation assistance
- **Personalized Experience** - User persona surveys for targeted content and newsletter customization

## 🏗️ Architecture

### Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **UI Components**: Radix UI + Tailwind CSS
- **Authentication**: Supabase Auth + Cedra wallet integration
- **Database**: Supabase PostgreSQL with Row Level Security
- **Blockchain**: Cedra Move Layer 1 (SDK v0.2)
- **Wallets**: Nightly + Petra wallet support
- **Deployment**: Vercel with Cloudflare Pages fallback
- **State Management**: React Context API

### Project Structure

```
src/
├── components/           # React components
│   ├── pages/           # Page components (auth, opportunities, profile, etc.)
│   └── ui/              # Reusable UI components (Radix UI + Tailwind)
├── contexts/            # React contexts (User, Theme, Notifications)
├── lib/                 # Utility functions and API clients
│   ├── supabase.ts     # Database client and types
│   ├── opportunities.ts # Contest/bounty management
│   ├── submissions.ts   # Submission handling
│   └── auth.ts         # Authentication utilities
├── routes/              # React Router configuration
└── types/               # TypeScript type definitions
```

### Database Schema

The application uses Supabase with the following key tables:

- `profiles` - User profiles with role-based access (talent, SPE, admin)
- `opportunities` - Contests, bounties, grants, and RFPs
- `submissions` - User submissions for contests
- `bounty_applications` - Applications for specific bounties
- `payments` - Payment records for completed work
- `projects` - Project assignments and tracking
- `role_requests` - Role upgrade requests

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Cedra testnet access

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/catalyst-lab/teammove.git
   cd teammove
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your environment variables:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_CEDRA_RPC_URL=your_cedra_rpc_url
   VITE_CEDRA_CHAIN_ID=your_cedra_chain_id
   ```

4. **Database Setup**
   ```bash
   # Run the Supabase schema setup
   psql -h your_db_host -U your_user -d your_db -f supabase_schema.sql
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   npm run preview
   ```

## 📋 Features

### Current MVP Features

- ✅ **Wallet Authentication** - Seamless login with Google Auth + Cedra wallets
- ✅ **Contest Discovery** - Browse bounties and grants with real-time filtering
- ✅ **User Profiles** - Contributor profile management with role-based access
- ✅ **Submission System** - Submit and manage contest applications
- ✅ **Sponsor Dashboard** - Post opportunities and manage applications
- ✅ **Real-time Leaderboards** - Live competitive tracking with sub-500ms response
- ✅ **Responsive Design** - Mobile-first UI with Tailwind CSS

### Planned Features (Roadmap)

#### Milestone 1: Dashboard Foundation (Days 1-30)
- [ ] Contest creation workflows with multi-submission system
- [ ] Live leaderboards with real-time updates
- [ ] Wallet authentication (Petra/Nightly) integration
- [ ] Judging dashboard with sponsor/expert evaluation
- [ ] Admin tooling for contest management
- [ ] 15+ Cedra & TeamMove owned contests

#### Milestone 2: Production & Scale (Days 30-60)
- [ ] On-chain reputation system with Sybil resistance
- [ ] Seasonal leaderboard resets with fair competition cycles
- [ ] AI chatbot for opportunity discovery and documentation
- [ ] User persona surveys and personalized content delivery
- [ ] Telegram/Discord notification bots
- [ ] Incubation workflow integration
- [ ] Comprehensive security audit (Certik or equivalent)
- [ ] Mainnet deployment readiness
- [ ] Integration with Cedra's sovereign network spinner

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Code Style

- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for code formatting
- **Conventional Commits** for commit messages

### Cedra Integration

The platform is built specifically for the Cedra Move Layer 1 blockchain:

- **Cedra SDK v0.2** for blockchain interactions
- **Nightly + Petra** wallet authentication
- **Move-native** smart contracts for reputation and payments
- **Sovereign network** integration for contest DAOs

## 🌐 Deployment

### Vercel (Primary)

The application is deployed on Vercel with automatic deployments from the main branch.

**Environment Variables Required:**
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_CEDRA_RPC_URL`
- `VITE_CEDRA_CHAIN_ID`



## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📊 Metrics & Success Criteria

### Current Traction
- ✅ MVP deployed with contest infrastructure
- ✅ Cedra ecosystem integration ready
- ✅ 20+ community survey responses validating demand


### Target Metrics (60 Days)
- **300+** active contributors
- **40+** contests completed
- **250+** total submissions
- **$100K+** in contest rewards distributed
- **80%** pre-recruit project fill rate

### Future State (2026)
- **10+** incubated startups
- **100+** monthly contests
- **$10M+** annual ecosystem velocity
- **5+** ecosystem partnerships (Aptos, Sui)
- **Global talent pipeline** established

## 🔒 Security

- **Smart Contract Audits** - Required for Milestone 2
- **Bug Bounty Program** - Launches with production release
- **Rate Limiting** - API endpoints protected
- **Input Validation** - All user inputs sanitized
- **Authentication** - Supabase Auth with RLS policies
- **Sybil Resistance** - On-chain reputation thresholds

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**Catalyst Lab** - Building coordination infrastructure for the Cedra ecosystem

- **Wisdom Chris** ([@WisdomN69527](https://twitter.com/WisdomN69527)) - Full-Stack Lead
- **Ibrahim** ([@devarogundade](https://github.com/devarogundade)) - Lead Engineer & Protocol Architect
- **Sampato Ologwu** ([@ologwusamuel](https://twitter.com/ologwusamuel)) - Product Designer & UX Lead
- **Pratik Dholani** ([@pratikdholani](https://github.com/pratikdholani)) - Frontend/Contest Infrastructure
- **Atreay Kukanur** ([@AtreayKukanur](https://twitter.com/AtreayKukanur)) - Ecosystem Ops

## 📞 Contact

- **Discord**: wisdom_christson
- **X**: @WisdomN69527
- **GitHub**: [catalyst-lab/teammove](https://github.com/catalyst-lab/teammove)
- **Demo**: [teammove.vercel.app](https://teammove.vercel.app/)
- **Demo Video**: [Youtube](https://youtube.com/)

## 🙏 Acknowledgments

Inspired by successful coordination platforms:
- **Solana Superteam** (15,000+ contributors, 1K+ contests)
- **NEAR Nearn.io** ($2M+ distributed)
- **Lisk** (23 startups incubated)

## 🎯 Why Contests Work

Solana's builder explosion came from hackathons and bounties that surfaced hidden talent, not traditional hiring. Superteam scaled this to 1K+ contests and 15K+ users. Cedra doesn't copy—it owns the Move-native version from mainnet day one, becoming the gravitational hub that Aptos and Sui eventually could onboard via partnerships.

**Technical Edge**: Deployed as a Cedra-native dApp with escrow-secured rewards, quadratic voting for fairness, and on-chain attestation for reputation portability across Move ecosystems.

---

**Built with ❤️ for the Cedra ecosystem**

*$25K Investment → 100x Ecosystem Leverage*