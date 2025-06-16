# O-1 Visa Builder

## Overview

O-1 Visa Builder is a full-stack web application designed to help individuals build extraordinary O-1 visa portfolios through real opportunities, published press coverage, and expert letters of recommendation. The application provides a platform where users can access judging opportunities at hackathons, get published press coverage, and build comprehensive portfolios that meet USCIS criteria.

## System Architecture

The application follows a modern full-stack architecture with a clear separation between client and server:

- **Frontend**: React-based SPA using Vite for build tooling
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Hosting**: Configured for Replit deployment with autoscaling
- **Styling**: Tailwind CSS with shadcn/ui component library

## Key Components

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite with custom configuration for development and production
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system

### Backend Architecture
- **Server**: Express.js with TypeScript
- **API Structure**: RESTful API with `/api` prefix for all endpoints
- **Database Layer**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Configured for connect-pg-simple sessions
- **Development**: Hot reload with tsx in development mode

### Database Schema
The application uses a PostgreSQL database with the following initial schema:
- **Users table**: Basic user management with username/password authentication
- **Schema location**: `shared/schema.ts` for shared types between frontend and backend
- **Migrations**: Located in `./migrations` directory

### Component Library
The application includes a comprehensive UI component library based on shadcn/ui:
- Form components (inputs, textareas, selects, checkboxes)
- Navigation components (menus, breadcrumbs, pagination)
- Feedback components (toasts, alerts, progress bars)
- Layout components (cards, separators, sheets)
- Data display components (tables, charts, carousels)

## Data Flow

1. **Client Requests**: React frontend makes API calls to Express backend
2. **API Processing**: Express routes handle business logic and data validation
3. **Database Operations**: Drizzle ORM performs type-safe database operations
4. **Response Handling**: TanStack Query manages caching and state updates
5. **UI Updates**: React components re-render based on query state changes

## External Dependencies

### Database
- **Neon Database**: PostgreSQL serverless database (@neondatabase/serverless)
- **Connection**: Uses DATABASE_URL environment variable for connection

### UI Libraries
- **Radix UI**: Headless component primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Drizzle Kit**: Database migration and schema management
- **TypeScript**: Type safety across the entire stack
- **ESBuild**: Fast bundling for production builds

## Deployment Strategy

### Development Environment
- **Server**: Runs on port 5000 with hot reload
- **Build Process**: Vite handles frontend builds, tsx handles backend execution
- **Database**: Uses Drizzle push for schema updates

### Production Environment
- **Build Command**: `npm run build` - Creates optimized frontend and backend bundles
- **Start Command**: `npm run start` - Runs the production server
- **Static Assets**: Served from `dist/public` directory
- **Environment**: NODE_ENV=production for optimized performance

### Replit Configuration
- **Modules**: nodejs-20 and web modules enabled
- **Port Mapping**: Internal port 5000 mapped to external port 80
- **Autoscale Deployment**: Configured for automatic scaling based on demand

## Changelog

- June 16, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.