/**
 * Authentication Utilities
 * 
 * Provides secure password hashing, verification, and JWT token generation
 * for user authentication and authorization.
 */

import bcrypt from 'bcryptjs'

/**
 * Hash a password using bcrypt with salt rounds
 * 
 * @param password - Plain text password to hash
 * @returns Promise<string> - Hashed password
 */
export async function hashPassword(password: string): Promise<string> {
  // Use 12 salt rounds for strong security
  // Higher rounds = more secure but slower (12 is industry standard)
  const saltRounds = 12
  return bcrypt.hash(password, saltRounds)
}

/**
 * Verify a plain text password against a hashed password
 * 
 * @param password - Plain text password to verify
 * @param hash - Hashed password from database
 * @returns Promise<boolean> - True if password matches, false otherwise
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

/**
 * Validate password strength
 * 
 * Requirements:
 * - Minimum 8 characters
 * - At least one uppercase letter
 * - At least one lowercase letter
 * - At least one number
 * - At least one special character
 * 
 * @param password - Password to validate
 * @returns Object with validation result and error message if invalid
 */
export function validatePasswordStrength(password: string): {
  isValid: boolean
  error?: string
} {
  if (password.length < 8) {
    return { isValid: false, error: 'Password must be at least 8 characters long' }
  }

  if (!/[A-Z]/.test(password)) {
    return { isValid: false, error: 'Password must contain at least one uppercase letter' }
  }

  if (!/[a-z]/.test(password)) {
    return { isValid: false, error: 'Password must contain at least one lowercase letter' }
  }

  if (!/[0-9]/.test(password)) {
    return { isValid: false, error: 'Password must contain at least one number' }
  }

  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    return { isValid: false, error: 'Password must contain at least one special character' }
  }

  return { isValid: true }
}

/**
 * Generate a random token for email verification or password reset
 * 
 * @param length - Length of the token (default: 32)
 * @returns string - Random token
 */
export function generateToken(length: number = 32): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let token = ''
  for (let i = 0; i < length; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return token
}
