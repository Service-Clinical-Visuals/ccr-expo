import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 1. Skip internal / static files
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname === '/favicon.ico' ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    const pathParts = pathname.split('/').filter(Boolean);
    const hostname = request.headers.get('host') || '';
    const referer = request.headers.get('referer') || '';


    // 2. Identify the intended Website context
    let website = '';

    // Strategy A: Referer-based context
    if (referer && referer.includes(hostname)) {
        try {
            const refererUrl = new URL(referer);
            const refererParts = refererUrl.pathname.split('/').filter(Boolean);

            if (refererParts.length > 0) {
                website = refererParts[0];
            }
        } catch (e) {
            // ignore invalid referer
        }
    }

    // 3. Handle Scoping Rules
    if (website) {
        const isAlreadyPrefixed =
            pathParts.length > 0 && pathParts[0] === website;

        if (!isAlreadyPrefixed) {
            const targetPath = `/${website}${pathname === '/' ? '' : pathname}`;
            return NextResponse.redirect(new URL(targetPath, request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};