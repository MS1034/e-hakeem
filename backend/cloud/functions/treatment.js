Parse.Cloud.define("getTreatment", async (request) => {
  const pathId = request.params.pathId;

  const Treatment = Parse.Object.extend("Treatment");
  const treatmentQuery = new Parse.Query(Treatment);
  treatmentQuery.equalTo("pathId", pathId);
  const originalData = await treatmentQuery.first();
  return originalData;
  const solution = {
    pathId: originalData.get("pathId").get("objectId"), // Get the objectId from the pointer
    sections: [
      {
        title: "Regimenal Therapy",
        items: originalData
          .get("regimenalTherapy")
          .split("|")
          .filter((item) => item.trim() !== ""),
        imgSource: "/assets/R.svg",
      },
      {
        title: "Prevention Strategies",
        items: originalData
          .get("preventionStrategies")
          .split("|")
          .map((item) => item.trim()),
        imgSource: "/assets/Fighting against Coronavirus-rafiki.svg",
      },
      {
        title: "Dietary Recommendations",
        items: originalData
          .get("dietaryRecommendations")
          .split("|")
          .map((item) => item.trim()),
        imgSource: "/assets/Boost your inmune system-bro.svg",
      },
      {
        title: "Dietary Restrictions",
        items: originalData
          .get("dietaryRestrictions")
          .split("|")
          .map((item) => item.trim()),
        imgSource: "/assets/7985389.jpg",
      },
    ],
  };

  return solution;
});
