/**
 * Zod Validation Schemas
 * 
 * Centralized validation schemas for all forms and API requests
 * Ensures consistent validation across the application
 */

import * as z from 'zod'

// ============================================================================
// AUTH SCHEMAS
// ============================================================================

/**
 * Registration form validation schema
 * Validates user signup data including password strength
 */
export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain an uppercase letter')
    .regex(/[a-z]/, 'Password must contain a lowercase letter')
    .regex(/[0-9]/, 'Password must contain a number')
    .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, 'Password must contain a special character'),
  confirmPassword: z.string(),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  dateOfBirth: z.string().refine((date) => {
    const birthDate = new Date(date)
    const age = new Date().getFullYear() - birthDate.getFullYear()
    return age >= 18
  }, 'You must be at least 18 years old'),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
  userType: z.enum(['DONOR', 'RECIPIENT', 'MEDICAL_PROFESSIONAL']),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

export type RegisterInput = z.infer<typeof registerSchema>

/**
 * Login form validation schema
 */
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
})

export type LoginInput = z.infer<typeof loginSchema>

// ============================================================================
// DONOR SCHEMAS
// ============================================================================

/**
 * Donor registration schema
 * Validates donor-specific information
 */
export const donorRegistrationSchema = z.object({
  organsDonating: z.array(z.string()).min(1, 'Select at least one organ to donate'),
  medicalHistory: z.string().optional(),
  allergies: z.string().optional(),
  medications: z.string().optional(),
  consentGiven: z.boolean().refine((val) => val === true, {
    message: 'You must consent to organ donation',
  }),
})

export type DonorRegistrationInput = z.infer<typeof donorRegistrationSchema>

/**
 * Donor profile update schema
 */
export const donorProfileSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/),
  address: z.string().min(5),
  city: z.string().min(2),
  state: z.string().min(2),
  zipCode: z.string().min(3),
  country: z.string().min(2),
  bloodType: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  gender: z.enum(['MALE', 'FEMALE', 'OTHER']),
  medicalHistory: z.string().optional(),
  allergies: z.string().optional(),
  medications: z.string().optional(),
  emergencyContactName: z.string().min(2),
  emergencyContactPhone: z.string().regex(/^\+?[1-9]\d{1,14}$/),
  emergencyContactRelation: z.string().min(2),
})

export type DonorProfileInput = z.infer<typeof donorProfileSchema>

// ============================================================================
// RECIPIENT SCHEMAS
// ============================================================================

/**
 * Recipient registration schema
 * Validates recipient-specific information
 */
export const recipientRegistrationSchema = z.object({
  organNeeded: z.string().min(1, 'Select an organ'),
  urgencyLevel: z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']),
  medicalHistory: z.string().min(10, 'Provide detailed medical history'),
  currentMedications: z.string().min(5),
  allergies: z.string().optional(),
  consentGiven: z.boolean().refine((val) => val === true, {
    message: 'You must consent to transplant procedures',
  }),
})

export type RecipientRegistrationInput = z.infer<typeof recipientRegistrationSchema>

/**
 * Recipient profile update schema
 */
export const recipientProfileSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/),
  address: z.string().min(5),
  city: z.string().min(2),
  state: z.string().min(2),
  zipCode: z.string().min(3),
  country: z.string().min(2),
  bloodType: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  gender: z.enum(['MALE', 'FEMALE', 'OTHER']),
  medicalHistory: z.string().optional(),
  currentMedications: z.string().optional(),
  allergies: z.string().optional(),
  emergencyContactName: z.string().min(2),
  emergencyContactPhone: z.string().regex(/^\+?[1-9]\d{1,14}$/),
  emergencyContactRelation: z.string().min(2),
})

export type RecipientProfileInput = z.infer<typeof recipientProfileSchema>

// ============================================================================
// MEDICAL RECORD SCHEMAS
// ============================================================================

/**
 * Medical record creation schema
 */
export const medicalRecordSchema = z.object({
  recordType: z.string().min(1, 'Select record type'),
  recordDate: z.string().refine((date) => !isNaN(Date.parse(date)), 'Invalid date'),
  testName: z.string().min(2),
  testResult: z.string().min(1),
  normalRange: z.string().optional(),
  abnormalFlag: z.boolean().optional(),
  clinicalNotes: z.string().optional(),
  recommendations: z.string().optional(),
})

export type MedicalRecordInput = z.infer<typeof medicalRecordSchema>

// ============================================================================
// DONATION SCHEMAS
// ============================================================================

/**
 * Donation creation schema
 */
export const donationSchema = z.object({
  organType: z.string().min(1, 'Select organ type'),
  organQuality: z.enum(['EXCELLENT', 'GOOD', 'FAIR', 'POOR']).optional(),
  viabilityScore: z.number().min(0).max(100).optional(),
  collectionHospital: z.string().optional(),
  medicalNotes: z.string().optional(),
})

export type DonationInput = z.infer<typeof donationSchema>

// ============================================================================
// MATCH SCHEMAS
// ============================================================================

/**
 * Match creation schema
 */
export const matchSchema = z.object({
  donationId: z.string().min(1),
  recipientId: z.string().min(1),
  compatibilityScore: z.number().min(0).max(100),
  bloodTypeMatch: z.boolean(),
  tissueTypeMatch: z.boolean(),
  crossmatchResult: z.enum(['NEGATIVE', 'POSITIVE', 'PENDING']).optional(),
})

export type MatchInput = z.infer<typeof matchSchema>

// ============================================================================
// APPOINTMENT SCHEMAS
// ============================================================================

/**
 * Appointment creation schema
 */
export const appointmentSchema = z.object({
  title: z.string().min(3),
  description: z.string().optional(),
  appointmentDate: z.string().refine((date) => !isNaN(Date.parse(date)), 'Invalid date'),
  appointmentTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format'),
  location: z.string().min(3),
  medicalCenter: z.string().optional(),
})

export type AppointmentInput = z.infer<typeof appointmentSchema>
