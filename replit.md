# EMSI Website - Full-Stack React Application

## Overview

This is a full-stack web application for EMSI (École Marocaine des Sciences de l'Ingénieur), a private engineering school in Morocco. The application is built as a modern single-page application showcasing the school's programs, campuses, research activities, and providing student enrollment functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

- **Frontend**: React-based SPA using Vite for development and building
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **React 18** with TypeScript for type safety
- **Vite** as the build tool and development server
- **Tailwind CSS** for utility-first styling with custom EMSI brand colors
- **shadcn/ui** component library for consistent UI elements
- **TanStack Query** for efficient data fetching and caching
- **Wouter** for lightweight client-side routing
- **React Hook Form** with Zod validation for form handling

### Backend Architecture
- **Express.js** server with TypeScript
- **Memory storage** implementation with interface for future database integration
- **Drizzle ORM** configured for PostgreSQL (currently using memory storage)
- **Session management** setup for future authentication
- **RESTful API** structure with `/api` prefix

### Database Schema
- **Users table**: Basic user structure with id, username, and password fields
- **Drizzle configuration**: PostgreSQL dialect with migrations support
- **Type-safe queries**: Using Drizzle's TypeScript integration

### UI Components
- **Header**: Navigation with social links and enrollment CTA
- **Hero**: Main landing section with school branding
- **Formations**: Engineering programs showcase
- **Campus**: Multi-campus presentation (19 locations)
- **Research**: Research strategy and partnerships
- **Employability**: Career services and alumni network
- **News**: Latest school updates and achievements
- **Inscription**: Student enrollment form
- **Footer**: Comprehensive site links and contact information

## Data Flow

1. **Client requests** are handled by Vite dev server in development
2. **API routes** are served by Express server under `/api` prefix
3. **Database operations** currently use in-memory storage with interface for future PostgreSQL integration
4. **Form submissions** are handled client-side with validation before API calls
5. **Static assets** are served through Vite's asset pipeline

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for production
- **drizzle-orm**: Type-safe database operations
- **express**: Web server framework
- **react**: UI library
- **@tanstack/react-query**: Data fetching and caching

### UI and Styling
- **@radix-ui**: Accessible component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional class name utility

### Development Tools
- **typescript**: Type safety
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution for server
- **esbuild**: Fast JavaScript bundler

### Form Handling
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Schema validation

## Deployment Strategy

### Development
- **Vite dev server** serves the frontend with HMR
- **Express server** runs on separate process for API
- **TypeScript compilation** handled by tsx for server code

### Production Build
- **Frontend**: Built with `vite build` to static assets
- **Backend**: Bundled with `esbuild` for optimized server code
- **Static serving**: Express serves built frontend assets
- **Database**: Configured for PostgreSQL with Neon serverless

### Environment Configuration
- **Database URL**: Required for PostgreSQL connection
- **Development mode**: Automatic detection for development features
- **Replit integration**: Special handling for Replit deployment environment

The application is designed to be easily deployable on various platforms with minimal configuration changes, supporting both development and production environments seamlessly.