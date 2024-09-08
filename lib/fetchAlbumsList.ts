export async function fetchAlbumsList() {
  try {
    const response = await fetch(
      "https://getpantry.cloud/apiv1/pantry/58f8250e-5015-4684-b7d6-067eb49e9397/basket/albumsList",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (!data?.albumsList) {
      throw new Error("Invalid response structure: albumsList is missing");
    }

    return data.albumsList;
  } catch (error: any) {
    console.error("Failed to fetch albums list:", error.message);
    return []; //Fallback to empty array
  }
}
