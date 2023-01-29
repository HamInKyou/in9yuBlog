import notion from ".";

export async function fetchAllPosts() {
  try {
    if (typeof process.env.NOTION_CMS_DATABASE_KEY === "undefined") {
      throw new Error("DataBaseID is not defined");
    }
    const { results } = await notion.databases.query({
      database_id: process.env.NOTION_CMS_DATABASE_KEY,
      filter: {
        and: [
          {
            property: "isVisible",
            checkbox: {
              equals: true,
            },
          },
        ],
      },
    });
    return results;
  } catch (error) {
    console.log(error);
  }
}
