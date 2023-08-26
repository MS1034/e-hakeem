// Parse.Cloud.define("getNextQuestion", async (request) => {
//   const questionId = request.params.questionId;
//   const pathId = request.params.pathId;

//   const Question = Parse.Object.extend("Question");
//   const Options = Parse.Object.extend("Options");
//   const PathNode = Parse.Object.extend("PathNode");

//   try {
//     const questionQuery = new Parse.Query(Question);
//     const question = await questionQuery.get(questionId);

//     const optionsQuery = new Parse.Query(Options);
//     optionsQuery.equalTo("questionId", question);
//     const options = await optionsQuery.find();

//     const optionsWithPaths = [];

//     for (const option of options) {
//       const optionId = option.id;
//       const optionStatement = option.get("text");

//       const pathNodeQuery = new Parse.Query(PathNode);
//       pathNodeQuery.equalTo("pathId", {
//         __type: "Pointer",
//         className: "Path",
//         objectId: pathId,
//       });
//       pathNodeQuery.equalTo("optionId", {
//         __type: "Pointer",
//         className: "Options",
//         objectId: optionId,
//       });

//       const pathNode = await pathNodeQuery.first();

//       if (pathNode) {
//         const nextQuestionId = pathNode.get("nextQuestionId").id;

//         optionsWithPaths.push({
//           optionId: optionId,
//           optionStatement: optionStatement,
//           nextQuestionId: nextQuestionId,
//         });
//       }
//     }

//     const result = {
//       pathId: pathId,
//       questionId: question.id,
//       questionStatement: question.get("statement"),
//       options: optionsWithPaths,
//     };

//     return { result: result };
//   } catch (error) {
//     throw new Error(
//       "Error retrieving question with options and paths: " + error.message
//     );
//   }
// });

Parse.Cloud.define("getFirstQuestion", async (request) => {
  const pathId = request.params.pathId;

  const Path = Parse.Object.extend("Path");
  const PathNode = Parse.Object.extend("PathNode");
  const Question = Parse.Object.extend("Question");
  const Options = Parse.Object.extend("Options");
  try {
    const pathQuery = new Parse.Query(Path);
    pathQuery.equalTo("objectId", pathId);
    const path = await pathQuery.first();
    const startingQuestionId = path.get("startingQuestionId").id;
    const questionQuery = new Parse.Query(Question);
    questionQuery.equalTo("objectId", startingQuestionId);
    const question = await questionQuery.first();

    const optionsQuery = new Parse.Query(Options);
    optionsQuery.equalTo("questionId", question);
    const options = await optionsQuery.find();

    const optionsWithNextQuestion = [];

    for (const option of options) {
      const optionId = option.id;
      const optionStatement = option.get("text");

      const pathNodeQuery = new Parse.Query(PathNode);
      pathNodeQuery.equalTo("optionId", option);
      pathNodeQuery.equalTo("pathId", path);
      const pathNode = await pathNodeQuery.first();

      const nextQuestionId = pathNode.get("nextQuestionId").id;

      optionsWithNextQuestion.push({
        optionId: optionId,
        optionStatement: optionStatement,
        nextQuestionId: nextQuestionId,
      });
    }

    const result = {
      pathId: pathId,
      questionId: question.id,
      questionStatement: question.get("statement"),
      options: optionsWithNextQuestion,
    };

    return result;
  } catch (error) {
    throw new Error("Error retrieving question with options: " + error.message);
  }
});
Parse.Cloud.define("getNextQuestion", async (request) => {
  const questionId = request.params.questionId;
  const pathId = request.params.pathId;

  const Question = Parse.Object.extend("Question");
  const Options = Parse.Object.extend("Options");
  const PathNode = Parse.Object.extend("PathNode");

  try {
    const questionQuery = new Parse.Query(Question);
    const question = await questionQuery.get(questionId);

    const optionsQuery = new Parse.Query(Options);
    optionsQuery.equalTo("questionId", question);
    const options = await optionsQuery.find();

    const optionsWithPaths = [];

    for (const option of options) {
      const optionId = option.id;
      const optionStatement = option.get("text");

      const pathNodeQuery = new Parse.Query(PathNode);
      pathNodeQuery.equalTo("pathId", {
        __type: "Pointer",
        className: "Path",
        objectId: pathId,
      });
      pathNodeQuery.equalTo("optionId", {
        __type: "Pointer",
        className: "Options",
        objectId: optionId,
      });

      const pathNode = await pathNodeQuery.first();

      if (pathNode) {
        const nextQuestionId = pathNode.get("nextQuestionId").id;

        optionsWithPaths.push({
          optionId: optionId,
          optionStatement: optionStatement,
          nextQuestionId: nextQuestionId,
        });
      }
    }

    const result = {
      pathId: pathId,
      questionId: question.id,
      questionStatement: question.get("statement"),
      options: optionsWithPaths,
    };

    return { result: result };
  } catch (error) {
    throw new Error(
      "Error retrieving question with options and paths: " + error.message
    );
  }
});
