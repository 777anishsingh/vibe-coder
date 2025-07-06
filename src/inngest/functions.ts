import { inngest } from "./client";
import { gemini, createAgent } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {

    const codeAgent = createAgent({
      name: "code-helper",
      system: "You are an expert software developer with skill involving MERN stack. you write redable, maintainable code and you only return code not any explanation but only code.",
      model: gemini({ model: "gemini-2.0-flash"}),
    });



const { output } = await codeAgent.run(
  `Write the coe for: ${event.data.value}`,
);
console.log(output);




    return { output };
  },
);
