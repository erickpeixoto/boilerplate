import { Button } from "@/app/components/ui/button";
import { ThemeToggle } from "@/app/components/theme-toggle";
import { api } from "@/trpc/server";

export default async function Home() {
  const hi = await api.post.hello.query({
    text: "from the Erick's Boilerplate",
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeToggle />
      <Button>Hey there, I've came out of the Shadcn-UI box!</Button>
      <h1 className="text-4xl font-bold">{hi.greeting}</h1>
    </main>
  );
}
