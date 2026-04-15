# Google OAuth Testing Guide

To test the `POST /api/v1/auth/oauth` endpoint, you need a valid Google ID Token.

## Method 1: Google OAuth 2.0 Playground (Recommended)

1.  Go to [Google OAuth 2.0 Playground](https://developers.google.com/oauthplayground/).
2.  Click the **settings icon** (top right) and check "Use your own OAuth credentials".
3.  Enter your **OAuth Client ID** and **OAuth Client Secret** from your `.env` file.
4.  In "Step 1: Select & authorize APIs", search for `Google OAuth2 API v2` and select `openid` and `email`.
5.  Click **Authorize APIs** and log in with your Google account.
6.  In "Step 2: Exchange authorization code for tokens", click **Exchange authorization code for tokens**.
7.  In the response, locate the `id_token` string.
8.  **Copy the `id_token`**.

## Method 2: Testing via Postman

1.  Set the request method to `POST`.
2.  URL: `http://localhost:5001/api/v1/auth/oauth`.
3.  Headers: `Content-Type: application/json`.
4.  Body (raw JSON):
    ```json
    {
      "token": "PASTE_YOUR_ID_TOKEN_HERE"
    }
    ```
5.  Send the request.

## Troubleshooting

- **"Invalid Google token"**: Ensure you copied the full `id_token` and that your `GOOGLE_CLIENT_ID` in `.env` matches the one used to generate the token.
- **"Invalid audience"**: This happens if the `id_token` was generated for a different Client ID than the one in your backend.
