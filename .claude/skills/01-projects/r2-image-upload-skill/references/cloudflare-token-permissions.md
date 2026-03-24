# Cloudflare API Token Permissions

Students can use either `wrangler login` (OAuth, easiest) or a custom API token (persistent, recommended for long-term use). This doc covers the API token approach since it gives explicit control over permissions.

## Creating the Token

1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Click **Create Token**
3. Start from the **Custom token** template (not one of the presets — they're too narrow)

## Required Permissions

Set these permissions to cover everything needed throughout the course:

### Account Permissions

| Permission | Access | What it covers |
|------------|--------|----------------|
| Workers R2 Storage | Edit | Create/list buckets, upload/delete objects, manage public access |
| Workers Scripts | Edit | Deploy and manage Workers |
| Workers KV Storage | Edit | Use KV namespaces (if needed later) |
| Account Settings | Read | Let wrangler read account info (`wrangler whoami`) |

### Zone Permissions

| Permission | Access | What it covers |
|------------|--------|----------------|
| DNS | Edit | Manage DNS records (custom domains, CNAME for R2) |
| Workers Routes | Edit | Bind Workers to routes on your domain |
| Zone Settings | Read | Let wrangler read zone configuration |
| Bulk Redirects | Edit | Create and manage redirect rules (e.g. URL migrations) |
| Page Rules | Edit | Manage page rules (caching, redirects) |

### Zone Resources

Set to **Include → Specific zone → yourdomain.com** (or "All zones" if the student has only one domain).

### Account Resources

Set to **Include → your account**.

## Setting the Token

After creating the token, Cloudflare shows it once. The student should save it and set it as an environment variable:

```bash
# Add to ~/.zshrc or ~/.bashrc
export CLOUDFLARE_API_TOKEN=your_token_here
```

Then restart the terminal or run `source ~/.zshrc`.

Verify it works:

```bash
wrangler whoami
```

## `wrangler login` vs API Token

| | `wrangler login` | API Token |
|---|---|---|
| Setup | One command | Dashboard + env var |
| Scope | Full account access | Only what you grant |
| Persistence | Can expire / need re-auth | Permanent until revoked |
| Best for | Quick start, solo dev | Long-term use, CI/CD |

**For the course:** Start with `wrangler login` for simplicity. If the student hits auth expiry issues or wants to automate deployments, switch to an API token using the permissions above.

## Troubleshooting

**"Authentication error [code: 10000]"** — The token is missing a required permission. Check which operation failed and add the matching permission above.

**"Unable to retrieve email"** — This is normal with API tokens. It doesn't affect functionality.

**R2 uploads return 403** — The token needs "Workers R2 Storage: Edit" at the Account level (not zone level). If using "Object Read & Write" alone, it may not be enough — use "Admin Read & Write" or the broader "Workers R2 Storage: Edit".
