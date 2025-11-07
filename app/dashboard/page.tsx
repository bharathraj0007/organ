/**
 * Dashboard Page
 * 
 * Main user dashboard showing:
 * - User profile information
 * - Donation/Recipient status
 * - Recent matches
 * - Medical records
 * - Notifications
 */

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Heart, LogOut, User, FileText, Bell, Settings, Home } from 'lucide-react'
import { toast } from 'sonner'

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  userType: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user')
    if (!storedUser) {
      router.push('/auth/login')
      return
    }

    try {
      const userData = JSON.parse(storedUser)
      setUser(userData)
    } catch (err) {
      console.error('Failed to parse user data:', err)
      router.push('/auth/login')
    } finally {
      setIsLoading(false)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('user')
    toast.success('Logged out successfully')
    router.push('/')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <Heart className="w-12 h-12 text-red-600 mx-auto mb-4 animate-pulse" />
          <p className="text-slate-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-red-600" />
            <span className="text-xl font-bold text-slate-900">OrganHub</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-600">
              {user.firstName} {user.lastName}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Welcome, {user.firstName}!
          </h1>
          <p className="text-slate-600">
            You are registered as a <span className="font-semibold text-red-600">{user.userType}</span>
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6">
            <div className="text-sm text-slate-600 mb-2">Account Status</div>
            <div className="text-2xl font-bold text-slate-900">Active</div>
            <div className="text-xs text-green-600 mt-2">✓ Verified</div>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-slate-600 mb-2">Profile Completion</div>
            <div className="text-2xl font-bold text-slate-900">45%</div>
            <div className="text-xs text-amber-600 mt-2">Complete your profile</div>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-slate-600 mb-2">Notifications</div>
            <div className="text-2xl font-bold text-slate-900">3</div>
            <div className="text-xs text-blue-600 mt-2">View all</div>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-slate-600 mb-2">Last Login</div>
            <div className="text-2xl font-bold text-slate-900">Today</div>
            <div className="text-xs text-slate-600 mt-2">Just now</div>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="medical">Medical</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Dashboard Overview</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-slate-900">Complete Your Profile</p>
                    <p className="text-sm text-slate-600">Add more information to improve matching</p>
                  </div>
                  <Link href="/dashboard/profile">
                    <Button size="sm">Complete</Button>
                  </Link>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-slate-900">Upload Medical Records</p>
                    <p className="text-sm text-slate-600">Add your medical history and test results</p>
                  </div>
                  <Link href="/dashboard/medical">
                    <Button size="sm">Upload</Button>
                  </Link>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-slate-900">Review Consent Form</p>
                    <p className="text-sm text-slate-600">Ensure all legal documents are signed</p>
                  </div>
                  <Link href="/dashboard/consent">
                    <Button size="sm">Review</Button>
                  </Link>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-4">
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                Profile Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-slate-600">First Name</p>
                  <p className="text-lg font-semibold text-slate-900">{user.firstName}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Last Name</p>
                  <p className="text-lg font-semibold text-slate-900">{user.lastName}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Email</p>
                  <p className="text-lg font-semibold text-slate-900">{user.email}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Account Type</p>
                  <p className="text-lg font-semibold text-slate-900">{user.userType}</p>
                </div>
              </div>
              <Link href="/dashboard/profile/edit">
                <Button className="mt-6">Edit Profile</Button>
              </Link>
            </Card>
          </TabsContent>

          {/* Medical Tab */}
          <TabsContent value="medical" className="space-y-4">
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Medical Records
              </h2>
              <p className="text-slate-600 mb-4">No medical records uploaded yet.</p>
              <Link href="/dashboard/medical/upload">
                <Button>Upload Medical Records</Button>
              </Link>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-4">
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Account Settings
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-slate-900">Email Notifications</p>
                    <p className="text-sm text-slate-600">Receive updates about matches and appointments</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-slate-900">SMS Notifications</p>
                    <p className="text-sm text-slate-600">Receive urgent updates via SMS</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-slate-900">Two-Factor Authentication</p>
                    <p className="text-sm text-slate-600">Add extra security to your account</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5" />
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
