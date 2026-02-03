import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-oauth2";

@Injectable()
export class OAuthStrategy extends PassportStrategy(Strategy, "oauth") {
  constructor() {
    super({
      authorizationURL: "https://accounts.google.com/o/oauth2/v2/auth",
      tokenURL: "https://oauth2.googleapis.com/token",
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    });
  }
  
  async validate(accessToken: string, refreshToken: string, profile: any) : Promise<any> {
    return {
      accessToken,
      refreshToken,
      profile,
    };
  }
}