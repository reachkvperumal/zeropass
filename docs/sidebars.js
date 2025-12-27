module.exports = {
    docs: [
        {
            type: 'doc',
            id: 'index',
            label: 'Home',
        },
        {
            type: 'category',
            label: 'Nodes',
            items: [
                'nodes/end-user',
                'nodes/user-browser',
                'nodes/platform-authenticator',
                'nodes/roaming-security-key',
                'nodes/web-frontend',
                'nodes/auth-backend',
                'nodes/identity-provider',
                'nodes/credential-store',
                'nodes/audit-log-store'
            ],
        },
        {
            type: 'category',
            label: 'Relationships',
            items: [
                'relationships/user-browser-to-web-frontend',
                'relationships/end-user-to-web-frontend',
                'relationships/end-user-uses-web-frontend',
                'relationships/web-frontend-to-auth-backend-registration-options',
                'relationships/user-browser-to-platform-authenticator-registration',
                'relationships/user-browser-to-roaming-security-key-registration',
                'relationships/web-frontend-to-auth-backend-registration-complete',
                'relationships/auth-backend-persists-credential',
                'relationships/auth-backend-writes-registration-audit',
                'relationships/web-frontend-to-auth-backend-authentication-options',
                'relationships/user-browser-to-platform-authenticator-authentication',
                'relationships/user-browser-to-roaming-security-key-authentication',
                'relationships/web-frontend-to-auth-backend-authentication-complete',
                'relationships/auth-backend-writes-authentication-audit',
                'relationships/auth-backend-federates-to-idp'
            ],
        },
        {
            type: 'category',
            label: 'Flows',
            items: [
                'flows/webauthn-registration-flow',
                'flows/webauthn-authentication-flow'
            ],
        }
    ]
};
