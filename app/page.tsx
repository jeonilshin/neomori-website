import fs from "node:fs";
import path from "node:path";

// Force dynamic rendering so changes to body.html are picked up in dev
export const dynamic = 'force-dynamic';

export default function Home() {
  // Read at request time for hot reload during development
  const bodyHtml = fs.readFileSync(
    path.join(process.cwd(), "app", "body.html"),
    "utf8",
  );
  
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
