import {KeycloakProfile} from "keycloak-js";

export interface ExtendedKeycloakProfile extends KeycloakProfile{
  attributes: {
    job: string;
    // Add other attributes if needed
  };
}
