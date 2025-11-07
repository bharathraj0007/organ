# ⚡ Quick Start Guide

Get the Organ Donation Management System up and running in 5 minutes!

## Prerequisites

- Node.js 18+
- PostgreSQL 12+
- Git

## Installation (5 minutes)

### 1. Clone & Install (1 min)
```bash
git clone <repository-url>
cd organ-donation
npm install
```

### 2. Database Setup (2 min)
```bash
# Create database
createdb -h localhost organ_donation_db

# Set up environment
cp .env.example .env.local

# Edit .env.local with your database URL
# DATABASE_URL="postgresql://user:password@localhost:5432/organ_donation_db"

# Run migrations
npx prisma migrate dev --name init
```

### 3. Start Server (1 min)
```bash
npm run dev
```

### 4. Access Application (1 min)
Open browser: http://localhost:3000

## First Steps

### 1. Register as Donor
- Click "Register" button
- Select "Organ Donor"
- Fill in your information
- Create account

### 2. Login
- Use your registered email and password
- Access your dashboard

### 3. Explore Dashboard
- View your profile
- Complete your profile
- Upload medical records
- Review consent form

## Test Credentials

```
Email: testdonor@example.com
Password: TestPassword@123
```

## Common Commands

```bash
# Start development server
npm run dev

# View database (Prisma Studio)
npx prisma studio

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Troubleshooting

### Port 3000 in use?
```bash
npm run dev -- -p 3001
```

### Database connection error?
```bash
# Check PostgreSQL is running
psql -U postgres -d organ_donation_db

# Verify .env.local DATABASE_URL
```

### Dependencies issue?
```bash
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. ✅ Complete your profile
2. ✅ Upload medical records
3. ✅ Review consent form
4. ✅ Explore dashboard features
5. ✅ Check documentation

## Documentation

- **README.md** - Full documentation
- **SETUP.md** - Detailed setup guide
- **SECURITY.md** - Security guidelines
- **PROJECT_SUMMARY.md** - Project overview

## Support

For issues:
1. Check troubleshooting section
2. Review error messages
3. Check browser console (F12)
4. Check server logs

## Key Features

✨ Secure authentication
✨ User dashboard
✨ Medical records management
✨ Donor/Recipient matching
✨ Notifications system
✨ Audit logging
✨ HIPAA compliance

---

**Ready to save lives? Let's go! 🚀**
