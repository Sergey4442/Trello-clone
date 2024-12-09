//import { clerkMiddleware, createRouteMatcher, redirectToSignIn } from '@clerk/nextjs/server'
import { clerkMiddleware, createRouteMatcher, redirectToSignIn } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';

//const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])

export default clerkMiddleware({ 
  publicRoutes: ["/"],
  afterAuth(auth, req) {
    if (auth.userId && auth.isPublicRoute) {
      let path = "/select-org";

      if (auth.orgId) {
        path = `/organization/${auth.orgId}`;
      }

      const orgSelection = new URL (path, req.url);
      return NextResponse.redirect(orgSelection);
    }
    if (!auth.userId && !auth.isPublicRoute) {
      return this.redirectToSignIn

    }
  }
  
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};