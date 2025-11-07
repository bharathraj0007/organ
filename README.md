# 🫀 Organ Donation Management System

A comprehensive, secure web application for managing organ donations, recipient matching, and transplant coordination. Built with modern technologies and enterprise-grade security.

## 🌟 Features

### Core Functionality
- **User Registration & Authentication**
  - Secure password hashing with bcrypt (12 salt rounds)
  - Email and phone verification
  - Role-based access (Donor, Recipient, Medical Professional, Admin)
  - Comprehensive audit logging

- **Donor Management**
  - Register organs for donation
  - Track donation status
  - Medical history and health information
  - Consent management and legal documentation

- **Recipient Management**
  - Register for organ transplant
  - Specify organ needs and urgency level
  - Medical history and current medications
  - Waitlist tracking

- **Intelligent Matching**
  - Automated donor-recipient matching algorithm
  - Blood type compatibility checking
  - Tissue type matching
  - Crossmatch result tracking
  - Compatibility scoring (0-100)

- **Medical Records Management**
  - Secure storage of medical documents
  - Blood test results
  - Imaging reports
  - Pathology reports
  - Genetic testing results

- **Notifications System**
  - Real-time match notifications
  - Appointment reminders
  - Status updates
  - Priority-based alerts

- **Security & Compliance**
  - HIPAA-compliant data handling
  - Military-grade encryption
  - Comprehensive audit logging
  - Data access tracking
  - Secure session management

## 🛠️ Technology Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality UI components
- **React Hook Form** - Efficient form handling
- **Zod** - Schema validation
- **Lucide React** - Beautiful icons
- **Sonner** - Toast notifications

### Backend
- **Next.js API Routes** - Serverless backend
- **Node.js** - JavaScript runtime
- **Prisma ORM** - Database abstraction layer

### Database
- **PostgreSQL** - Relational database
- **Prisma Migrations** - Schema versioning

### Security
- **bcryptjs** - Password hashing
- **Zod** - Input validation
- **Audit Logging** - Activity tracking

## 📋 Database Schema

### Core Models

#### User
- Handles both donors and recipients
- Medical information storage
- Verification status tracking
- Consent management
- Emergency contact information

#### Donation
- Tracks organ donations
- Quality metrics (viability score, preservation time)
- Organ status management
- Transplant outcome tracking

#### Match
- Donor-recipient matching
- Compatibility scoring
- Blood type and tissue type matching
- Crossmatch results
- Transplant outcome tracking

#### MedicalRecord
- Detailed medical test results
- Document storage
- Clinical notes
- Medical professional information

#### Notification
- System notifications
- Match alerts
- Status updates
- Priority levels

#### AuditLog
- Security and compliance tracking
- User activity logging
- Data change tracking
- IP address and user agent logging

#### MedicalCenter
- Hospital/facility information
- Accreditation tracking
- Specialty information
- Contact details

#### BloodBank
- Blood inventory management
- Expiration tracking
- Storage conditions

#### Appointment
- Medical appointment scheduling
- Status tracking
- Location management

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL 12+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd organ-donation
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your database connection string:
```
DATABASE_URL="postgresql://user:password@localhost:5432/organ_donation_db"
```

4. **Create the database**
```bash
createdb -h localhost organ_donation_db
```

5. **Run migrations**
```bash
npx prisma migrate dev --name init
```

6. **Start the development server**
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📱 User Flows

### Donor Registration Flow
1. User registers with email and password
2. Selects "Donor" as user type
3. Provides personal and medical information
4. Uploads medical records
5. Reviews and signs consent form
6. Becomes active in the donor pool
7. Receives notifications when matched

### Recipient Registration Flow
1. User registers with email and password
2. Selects "Recipient" as user type
3. Specifies organ needed and urgency level
4. Provides detailed medical history
5. Lists current medications and allergies
6. Reviews and signs consent form
7. Added to waitlist
8. Receives notifications when matched

### Matching Process
1. System analyzes donor and recipient profiles
2. Calculates compatibility score
3. Checks blood type compatibility
4. Performs tissue type matching
5. Requests crossmatch test
6. Creates match record
7. Notifies both parties
8. Coordinates with medical centers
9. Schedules transplant
10. Tracks post-transplant outcomes

## 🔐 Security Features

### Authentication & Authorization
- Secure password hashing with bcrypt
- Email verification
- Phone verification
- Identity verification
- Role-based access control

### Data Protection
- HIPAA compliance
- Military-grade encryption
- Secure session management
- CSRF protection
- SQL injection prevention

### Audit & Compliance
- Comprehensive audit logging
- User activity tracking
- Data access logging
- Change tracking
- IP address logging
- User agent logging

### API Security
- Input validation with Zod
- Rate limiting (recommended for production)
- CORS configuration
- Secure headers
- Error handling

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### User Management
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/medical-records` - Get medical records

### Donations
- `POST /api/donations` - Create donation
- `GET /api/donations` - List donations
- `GET /api/donations/:id` - Get donation details
- `PUT /api/donations/:id` - Update donation

### Matching
- `POST /api/matches` - Create match
- `GET /api/matches` - List matches
- `GET /api/matches/:id` - Get match details
- `PUT /api/matches/:id` - Update match status

### Notifications
- `GET /api/notifications` - Get notifications
- `PUT /api/notifications/:id/read` - Mark as read

## 🧪 Testing

### Manual Testing
1. Register as a donor
2. Register as a recipient
3. Upload medical records
4. Test the matching algorithm
5. Verify notifications
6. Check audit logs

### Test Credentials
```
Email: testdonor@example.com
Password: TestPassword@123
```

## 📈 Performance Optimization

- Database indexing on frequently queried fields
- Prisma query optimization
- Next.js image optimization
- CSS-in-JS optimization
- Code splitting and lazy loading

## 🔄 Deployment

### Production Checklist
- [ ] Set up environment variables
- [ ] Configure database backups
- [ ] Enable HTTPS
- [ ] Set up monitoring and logging
- [ ] Configure rate limiting
- [ ] Set up email service
- [ ] Configure SMS service
- [ ] Set up CDN
- [ ] Enable caching
- [ ] Configure error tracking

### Deployment Platforms
- Vercel (recommended for Next.js)
- AWS
- Google Cloud
- Azure
- DigitalOcean

## 📚 Documentation

### API Documentation
See `/docs/api.md` for detailed API documentation

### Database Schema
See `/docs/schema.md` for database schema details

### Security Guidelines
See `/docs/security.md` for security best practices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write tests
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email support@organhub.com or open an issue on GitHub.

## 🙏 Acknowledgments

- Built with Next.js and shadcn/ui
- Database powered by PostgreSQL
- Security best practices from OWASP
- HIPAA compliance guidelines

## 📞 Contact

- Email: info@organhub.com
- Phone: 1-800-DONATE
- Website: https://organhub.com
- Support: 24/7 available

---

**Made with ❤️ to save lives**
