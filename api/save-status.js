export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const GITHUB_REPO = process.env.GITHUB_REPO || "christopherdaniel0005-droid/sal-equipos-dashboard";
  const GITHUB_FILE = "data/equip-status.json";
  const GITHUB_API = "https://api.github.com/repos/" + GITHUB_REPO + "/contents/" + GITHUB_FILE;

  if (!GITHUB_TOKEN) {
    return res.status(500).json({ error: "Token not configured" });
  }

  try {
    const getRes = await fetch(GITHUB_API, {
      headers: {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": "token " + GITHUB_TOKEN
      }
    });

    let sha = null;
    if (getRes.ok) {
      const getData = await getRes.json();
      sha = getData.sha;
    }

    const payload = JSON.stringify(req.body, null, 2);
    const content = Buffer.from(payload).toString("base64");

    const putBody = {
      message: "Status update " + new Date().toLocaleString("es-MX"),
      content: content
    };
    if (sha) putBody.sha = sha;

    const putRes = await fetch(GITHUB_API, {
      method: "PUT",
      headers: {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": "token " + GITHUB_TOKEN,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(putBody)
    });

    if (!putRes.ok) {
      const errText = await putRes.text();
      return res.status(putRes.status).json({ error: "GitHub error: " + errText });
    }

    const result = await putRes.json();
    return res.status(200).json({ ok: true, sha: result.content.sha });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
