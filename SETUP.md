# 🚀 Setup Guide - Organ Donation Management System

Complete step-by-step guide to set up and run the Organ Donation Management System.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0 or higher
- **npm** 9.0 or higher (or yarn/pnpm)
- **PostgreSQL** 12 or higher
- **Git**

### Verify Installation

```bash
node --version    # Should be v18.0.0 or higher
npm --version     # Should be 9.0.0 or higher
psql --version    # Should be 12 or higher
```

## Step 1: Clone the Repository

```bash
git clone <repository-url>
cd organ-donation
```

## Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js
- React
- TypeScript
- Prisma
- shadcn/ui components
- And more...

## Step 3: Set Up PostgreSQL Database

### Create Database

```bash
# Using psql
createdb -h localhost organ_donation_db

# Or using PostgreSQL GUI (pgAdmin)
# Right-click on Databases > Create > Database
# Name: organ_donation_db
```

### Verify Connection

```bash
psql -h localhost -U postgres -d organ_donation_db -c "SELECT version();"
```

## Step 4: Configure Environment Variables

### Create .env.local file

```bash
cp .env.example .env.local
```

### Edit .env.local

```bash
# Database Configuration
DATABASE_URL="postgresql://postgres:password@localhost:5432/organ_donation_db"

# Application Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="Organ Donation Management System"
```

**Important:** Replace `password` with your PostgreSQL password.

## Step 5: Run Database Migrations

```bash
# Create and apply migrations
npx prisma migrate dev --name init

# This will:
# 1. Create all database tables
# 2. Set up relationships
# 3. Create indexes
# 4. Generate Prisma Client
```

### Verify Database Setup

```bash
# Open Prisma Studio to view database
npx prisma studio
```

This opens a web interface at `http://localhost:5555` where you can view and manage database records.

## Step 6: Start Development Server

```bash
npm run dev
```

The application will start at:
- **Local:** http://localhost:3000
- **Network:** http://[your-ip]:3000

### Server Output

You should see:
```
> organ-donation@0.1.0 dev
> next dev

  ▲ Next.js 15.5.3
  - Local:        http://localhost:3000
  - Network:      http://192.168.x.x:3000

✓ Ready in 1234ms
```

## Step 7: Access the Application

1. Open your browser
2. Navigate to `http://localhost:3000`
3. You should see the landing page

## Step 8: Create Test Account

### Register as Donor

1. Click "Register" button
2. Select "Organ Donor" as user type
3. Fill in the form:
   - Email: `donor@example.com`
   - Password: `TestPassword@123`
   - First Name: `John`
   - Last Name: `Doe`
   - Date of Birth: `01/15/1990`
   - Phone: `+1234567890`
4. Click "Create Account"
5. You'll be redirected to login page

### Login

1. Enter email: `donor@example.com`
2. Enter password: `TestPassword@123`
3. Click "Login"
4. You'll be redirected to dashboard

## Troubleshooting

### Port Already in Use

If port 3000 is already in use:

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Database Connection Error

```
Error: connect ECONNREFUSED 127.0.0.1:5432
```

**Solution:**
1. Verify PostgreSQL is running
2. Check DATABASE_URL in .env.local
3. Verify database exists: `psql -l`

### Prisma Migration Error

```
Error: P1000 Authentication failed
```

**Solution:**
1. Check PostgreSQL credentials
2. Verify user has database creation permissions
3. Reset password: `ALTER USER postgres WITH PASSWORD 'newpassword';`

### Module Not Found

```
Error: Cannot find module '@/components/ui/button'
```

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Regenerate Prisma Client
npx prisma generate
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Format code
npm run format

# Open Prisma Studio
npx prisma studio

# Generate Prisma Client
npx prisma generate

# Reset database (WARNING: deletes all data)
npx prisma migrate reset
```

## Project Structure

```
organ-donation/
├── app/
│   ├── api/                 # API routes
│   │   └── auth/           # Authentication endpoints
│   ├── auth/               # Authentication pages
│   │   ├── login/
│   │   └── register/
│   ├── dashboard/          # Dashboard pages
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── components/
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── auth.ts            # Authentication utilities
│   ├── db.ts              # Database client
│   └── validations.ts     # Zod schemas
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── migrations/        # Migration files
├── public/                # Static files
├── .env.example           # Environment template
├── .env.local             # Environment variables (local)
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # Tailwind config
└── README.md              # Documentation
```

## Next Steps

1. **Explore the Dashboard**
   - Complete your profile
   - Upload medical records
   - Review consent forms

2. **Test Features**
   - Create multiple accounts
   - Test matching algorithm
   - Check notifications

3. **Customize**
   - Update branding
   - Modify colors in `tailwind.config.ts`
   - Add your organization details

4. **Deploy**
   - Follow deployment guide
   - Set up production database
   - Configure environment variables

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [PostgreSQL Documentation](https://www.postgresql.org/docs)

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review error messages carefully
3. Check logs in browser console (F12)
4. Check server logs in terminal

## Security Notes

⚠️ **Important for Development:**
- Never commit `.env.local` to version control
- Use strong passwords in production
- Enable HTTPS in production
- Keep dependencies updated
- Review security guidelines in SECURITY.md

---

**Happy coding! 🚀**
