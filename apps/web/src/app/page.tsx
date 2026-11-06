export default async function HomePage() {
  let status = "Backend is unavailable";

  try {
    const response = await fetch(`${process.env.API_BASE_URL}/`, {
      cache: "no-store",
    });

    if (response.ok) {
      status = await response.text();
    }
  } catch {
    // Display the unavailable state while the API starts.
  }

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold">Hotel Review Platform</h1>
      <p className="mt-4">Backend response: {status}</p>
    </main>
  );
}
