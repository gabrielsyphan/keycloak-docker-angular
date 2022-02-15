import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
    return () =>
        keycloak.init({
            config: {
                url: 'http://localhost:8080',
                realm: 'demo',
                clientId: 'app-demo',
            },
            initOptions: {
                checkLoginIframe: false,
                checkLoginIframeInterval: 25
            },
            loadUserProfileAtStartUp: true
        });
}
