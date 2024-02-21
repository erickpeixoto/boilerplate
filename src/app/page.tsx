import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { ThemeToggle } from "@/app/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeToggle />
      <Button>Hey there!</Button>
    </main>
  );
}
