import { type NextRequest, NextResponse } from "next/server";
import {
  getWebWorksEmailFrom,
  getWebWorksInternalRecipients,
} from "@mindnerds/webworks-email-sdk";

export const runtime = "nodejs";

const TEST_DOMAIN = "smoke.bigleap.app";

function emailAddress(value: string): string {
  const match = value.match(/<([^>]+)>/);
  return (match?.[1] ?? value).trim().toLowerCase();
}

function isTestAddress(value: string): boolean {
  return emailAddress(value).endsWith(`@${TEST_DOMAIN}`);
}

function protectedRoute(request: NextRequest): boolean {
  const expectedToken = process.env.INTEGRATION_TEST_EMAIL_DRY_RUN_TOKEN;
  return Boolean(expectedToken) &&
    request.headers.get("x-integration-test-token") === expectedToken;
}

/**
 * Runs the WebWorks Email API's non-delivering integration check.
 *
 * The published SDK is used for sender/recipient configuration. The request is
 * issued directly because the current SDK send method intentionally does not
 * expose the backend's dryRun flag. This route always supplies dryRun: true,
 * accepts test-domain recipients only, and never accepts caller-provided mail.
 */
export async function POST(request: NextRequest) {
  if (!protectedRoute(request)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const backendUrl = process.env.WEBWORKS_BACKEND_URL?.trim().replace(/\/+$/, "");
  const apiKey = process.env.WEBWORKS_API_KEY?.trim();

  if (!backendUrl || !apiKey) {
    return NextResponse.json(
      { error: "Email dry-run is not configured" },
      { status: 503 }
    );
  }

  let from: string;
  let to: string[];
  try {
    from = getWebWorksEmailFrom();
    to = getWebWorksInternalRecipients();
  } catch {
    return NextResponse.json(
      { error: "Email dry-run is not configured" },
      { status: 503 }
    );
  }

  if (!isTestAddress(from) || to.length === 0 || !to.every(isTestAddress)) {
    return NextResponse.json(
      { error: "Email dry-run must use smoke.bigleap.app test addresses" },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(`${backendUrl}/api/publisher/email/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
      },
      body: JSON.stringify({
        from,
        to,
        subject: "INTEGRATION_TEST_ORG email SDK dry run",
        text: "Automated test-infrastructure verification only. No email is delivered.",
        dryRun: true,
        metadata: {
          integration: "email-sdk",
          testInfrastructure: true,
        },
      }),
      cache: "no-store",
    });

    const result = (await response.json().catch(() => null)) as {
      status?: unknown;
      dryRun?: unknown;
      dry_run?: unknown;
      provider?: unknown;
    } | null;
    const dryRun = result?.dryRun === true || result?.dry_run === true;

    if (!response.ok || result?.status !== "sent" || !dryRun) {
      return NextResponse.json(
        { error: "Email dry-run verification failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({
      status: "sent",
      dryRun: true,
      provider: typeof result.provider === "string" ? result.provider : null,
    });
  } catch {
    return NextResponse.json(
      { error: "Email dry-run verification failed" },
      { status: 502 }
    );
  }
}
