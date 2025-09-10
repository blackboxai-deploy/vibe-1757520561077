'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-islamic-emerald-50 via-white to-islamic-gold-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-islamic-emerald-600 rounded-full mb-6">
            <div className="w-8 h-8 bg-islamic-gold-400 rounded-full animate-geometric-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-islamic-slate-900 mb-6">
            <span className="bg-gradient-to-r from-islamic-emerald-600 to-islamic-gold-600 bg-clip-text text-transparent">
              EduPro Suite
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-islamic-slate-600 mb-4 font-medium">
            The Definitive Educational Management System
          </p>
          
          <p className="text-lg text-islamic-slate-500 max-w-3xl mx-auto mb-8">
            A comprehensive, market-leading ERP solution designed specifically for educational institutions 
            in Bangladesh, with special focus on Madrasah management.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-islamic-emerald-100 text-islamic-emerald-800">
              🕌 Islamic-Centric Design
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-islamic-gold-100 text-islamic-gold-800">
              🌍 Multi-Language Support
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-islamic-slate-100 text-islamic-slate-800">
              🚀 Modern Technology
            </Badge>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-3 bg-islamic-emerald-600 hover:bg-islamic-emerald-700">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 border-islamic-emerald-600 text-islamic-emerald-600 hover:bg-islamic-emerald-50">
              Learn More
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="islamic-card hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl ${feature.bgColor}`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg text-islamic-slate-800">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-islamic-slate-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-islamic-slate-900 mb-8">
            Built with Modern Technology
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm border-islamic-slate-300 text-islamic-slate-700 hover:bg-islamic-slate-50"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-islamic-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-islamic-emerald-600 rounded-full mb-4">
            <div className="w-6 h-6 bg-islamic-gold-400 rounded-full" />
          </div>
          <h3 className="text-xl font-bold mb-2">EduPro Suite</h3>
          <p className="text-islamic-slate-400 mb-4">
            Transforming Educational Management in Bangladesh
          </p>
          <p className="text-sm text-islamic-slate-500">
            © 2024 EduPro Suite. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: '🎯',
    title: 'Mission Control Dashboard',
    description: 'Comprehensive real-time analytics and management dashboard with customizable widgets for complete institutional oversight.',
    bgColor: 'bg-islamic-emerald-100',
  },
  {
    icon: '👨‍🎓',
    title: 'Student Lifecycle Management',
    description: 'Complete student journey from admission to graduation with 360° profiles, academic tracking, and parent engagement.',
    bgColor: 'bg-islamic-gold-100',
  },
  {
    icon: '👨‍🏫',
    title: 'Educator & Staff HRM',
    description: 'Comprehensive human resource management with payroll automation, attendance tracking, and performance management.',
    bgColor: 'bg-islamic-slate-100',
  },
  {
    icon: '📊',
    title: 'Advanced Academic Engine',
    description: 'Flexible examination system with OMR integration, automated result processing, and digital report cards.',
    bgColor: 'bg-islamic-emerald-100',
  },
  {
    icon: '💰',
    title: 'Financial Management',
    description: 'Smart fee management with SSLCommerz integration, automated invoicing, and comprehensive financial reporting.',
    bgColor: 'bg-islamic-gold-100',
  },
  {
    icon: '📚',
    title: 'Communication & LMS',
    description: 'Multi-channel communication hub with integrated Learning Management System and collaboration tools.',
    bgColor: 'bg-islamic-slate-100',
  },
];

const techStack = [
  'Next.js 14',
  'TypeScript',
  'Tailwind CSS',
  'PostgreSQL',
  'Prisma ORM',
  'NextAuth.js',
  'shadcn/ui',
  'Zustand',
  'React Hook Form',
  'next-intl',
  'SSLCommerz',
  'Docker',
];