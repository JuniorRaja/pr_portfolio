export async function fetchNavbarItems() {
  try {
    const response = await fetch(
      "https://getpantry.cloud/apiv1/pantry/58f8250e-5015-4684-b7d6-067eb49e9397/basket/navMenuItems",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Validate that navMenuItem exists
    if (!data?.navMenuItem) {
      throw new Error("Invalid response structure: navMenuItem is missing");
    }

    return data.navMenuItem;
  } catch (error: any) {
    console.error("Failed to fetch navbar items:", error.message);
    return []; // Return an empty array as a fallback
  }
}
