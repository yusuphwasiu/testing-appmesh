# testing-appmesh

Generated with [AppMesh](https://appmesh.dev) - A next-generation application generator

## Architecture

**Microservice** architecture with 4 modules

## Modules

- **Payments (Stripe)** (v1.2.0) - Stripe payment processing with webhooks
- **Notifications** (v0.9.1) - Email, SMS, and push notifications
- **File Storage (S3)** (v1.1.0) - S3-compatible file upload and management
- **Analytics & Metrics** (v1.0.0) - Event tracking and metrics collection

## Quick Start

### Prerequisites

- Docker & Docker Compose
- Node.js 18+ (for local development)
- Git

### Running Locally

1. **Clone the repository** (if pushed to GitHub):
   ```bash
   git clone <your-repo-url>
   cd testing-appmesh
   ```

2. **Set up environment variables**:
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

3. **Start services with Docker Compose**:
   ```bash
   docker-compose up
   ```

4. **Access your application**:
   - API Gateway: http://localhost:3000
   - Individual services: See docker-compose.yml for port mappings

### Development

Install dependencies:
```bash
npm install
```

Run in development mode:
```bash
npm run dev
```

Run tests:
```bash
npm test
```

### Manual GitHub Push

If you downloaded this as a ZIP, you can push it to GitHub manually:

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit from AppMesh"

# Add remote and push
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

## Project Structure

```
testing-appmesh/
├── services/              # Microservices
│   ├── payments-stripe/       # Payments (Stripe)
│   ├── notifications/       # Notifications
│   ├── file-storage/       # File Storage (S3)
│   ├── analytics/       # Analytics & Metrics
├── shared/                # Shared utilities and types
├── .github/workflows/     # CI/CD workflows
├── docker-compose.yml     # Local development setup
├── appmesh.manifest.json  # AppMesh configuration
└── README.md
```

## CI/CD

This project includes a GitHub Actions workflow for continuous integration:

- Automated testing on push/PR
- Docker image building
- Linting and type checking

See `.github/workflows/ci.yml` for details.

## Environment Variables

See `env.example` for all required environment variables. Key variables:

- `STRIPE_SECRET_KEY`: Your Stripe secret key

## Deployment

### Docker

Build and run with Docker:
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Cloud Platforms

This application can be deployed to:
- AWS (ECS, EKS, or App Runner)
- Google Cloud (Cloud Run or GKE)
- Azure (Container Instances or AKS)
- DigitalOcean App Platform
- Render, Railway, or Fly.io

## Support

- [AppMesh Documentation](https://appmesh.dev/docs)
- [GitHub Issues](https://github.com/appmesh/appmesh/issues)

## License

MIT License - see LICENSE file for details

---

Generated on 2025-10-08 with AppMesh
